---
name: frimmy-orchestrator
description: "Frimmy 냉장고 재료 기반 AI 레시피 추천 서비스 개발 오케스트레이터. 프론트엔드(Next.js), 백엔드(Spring Boot), AI 레시피 추천 기능 구현을 조율한다. Frimmy 기능 개발, 페이지 구현, API 개발, 재료 관리, 레시피 추천, 쇼핑 리스트, 에이전트 그래프 구현 요청 시 이 스킬을 사용. 후속 작업: 결과 수정, 부분 재실행, 업데이트, 보완, 다시 실행, 이전 결과 개선, 버그 수정 요청 시에도 반드시 이 스킬을 사용."
---

# Frimmy Orchestrator

냉장고 재료 기반 AI 레시피 추천 서비스의 프론트엔드/백엔드/QA 에이전트를 조율하여 기능을 구현하는 통합 스킬.

## 실행 모드: 서브 에이전트

프론트엔드와 백엔드가 독립적으로 개발 가능하므로 서브 에이전트 모드를 사용한다. 오케스트레이터가 API 계약서를 파일로 공유하여 양측의 인터페이스를 맞춘다.

## 에이전트 구성

| 에이전트 | subagent_type | model | 역할 | 스킬 | 출력 |
|---------|--------------|-------|------|------|------|
| frontend-dev | general-purpose | opus | Next.js 프론트엔드 개발 | frontend-dev | frontend/src/ 하위 파일 |
| backend-dev | general-purpose | opus | Spring Boot 백엔드 + AI 개발 | backend-dev | backend/src/ 하위 파일 |
| qa | general-purpose | opus | 통합 정합성 검증 | qa-integration | _workspace/ QA 보고서 |

## 워크플로우

### Phase 0: 컨텍스트 확인

기존 산출물 존재 여부를 확인하여 실행 모드를 결정한다:

1. `_workspace/` 디렉토리 존재 여부 확인
2. 실행 모드 결정:
   - **`_workspace/` 미존재** → 초기 실행. Phase 1로 진행
   - **`_workspace/` 존재 + 사용자가 부분 수정 요청** → 부분 재실행. 해당 에이전트만 재호출하고, 수정 대상만 덮어쓴다
   - **`_workspace/` 존재 + 새 기능 요청** → 새 실행. 기존 `_workspace/`를 `_workspace_{YYYYMMDD_HHMMSS}/`로 이동 후 Phase 1 진행
3. 부분 재실행 시: 이전 산출물 경로를 에이전트 프롬프트에 포함

### Phase 1: 준비

1. **사용자 입력 분석** — 구현할 기능, 영향 범위(프론트/백엔드/양쪽), 우선순위 파악
2. **`_workspace/` 생성** (초기 실행 시)
3. **API 계약서 초안 작성** — 구현할 기능에 필요한 API 엔드포인트, 요청/응답 shape을 `_workspace/api-contract.md`에 정의. 이미 구현된 API가 있으면 기존 코드에서 추출
4. **작업 분배 결정:**
   - 프론트엔드만 → frontend-dev만 호출
   - 백엔드만 → backend-dev만 호출
   - 양쪽 → Phase 2에서 backend-dev 먼저 실행 (API 계약 확정) → Phase 3에서 frontend-dev 실행

### Phase 2: 백엔드 개발

백엔드 에이전트를 호출하여 API/서비스를 구현한다:

```
Agent(
  prompt: ".claude/agents/backend-dev.md의 역할 정의를 따른다.
    .claude/skills/backend-dev/SKILL.md 스킬을 읽고 프로젝트 컨벤션을 따른다.

    [구현할 기능 설명]

    API 계약 초안: _workspace/api-contract.md 참조.
    구현 완료 후 실제 API 스펙으로 _workspace/api-contract.md를 업데이트하라.
    작업 보고를 _workspace/02_backend_report.md에 저장하라.",
  subagent_type: "general-purpose",
  model: "opus"
)
```

**산출물:**
- `backend/src/` 하위 소스 파일
- `_workspace/api-contract.md` (확정된 API 스펙)
- `_workspace/02_backend_report.md`

### Phase 3: 프론트엔드 개발

프론트엔드 에이전트를 호출하여 UI를 구현한다:

```
Agent(
  prompt: ".claude/agents/frontend-dev.md의 역할 정의를 따른다.
    .claude/skills/frontend-dev/SKILL.md 스킬을 읽고 프로젝트 컨벤션을 따른다.

    [구현할 기능 설명]

    API 계약: _workspace/api-contract.md를 읽고 타입 정의와 API 호출을 일치시켜라.
    작업 보고를 _workspace/03_frontend_report.md에 저장하라.",
  subagent_type: "general-purpose",
  model: "opus"
)
```

**산출물:**
- `frontend/src/` 하위 소스 파일
- `_workspace/03_frontend_report.md`

### Phase 4: QA 검증

QA 에이전트를 호출하여 통합 정합성을 검증한다:

```
Agent(
  prompt: ".claude/agents/qa.md의 역할 정의를 따른다.
    .claude/skills/qa-integration/SKILL.md 스킬을 읽고 검증 체크리스트를 따른다.

    검증 대상: [이번에 구현/수정된 기능]
    API 계약: _workspace/api-contract.md

    검증 보고서를 _workspace/04_qa_report.md에 저장하라.",
  subagent_type: "general-purpose",
  model: "opus"
)
```

**산출물:**
- `_workspace/04_qa_report.md`

### Phase 5: 수정 및 정리

1. QA 보고서에서 Critical/Major 이슈가 있으면:
   - 해당 에이전트(frontend-dev 또는 backend-dev)를 재호출하여 수정
   - 수정 후 QA 재검증 (필요 시)
2. `_workspace/` 보존 (사후 검증/감사 추적용)
3. 사용자에게 결과 요약 보고:
   - 구현된 기능 목록
   - 파일 변경 사항
   - QA 결과 요약
   - 남은 이슈 (Minor)

## 데이터 흐름

```
[오케스트레이터]
    │
    ├── Phase 1: api-contract.md 초안 작성
    │
    ├── Phase 2: Agent(backend-dev) → 소스 코드 + api-contract.md 확정
    │
    ├── Phase 3: Agent(frontend-dev) → 소스 코드 (api-contract.md 참조)
    │
    ├── Phase 4: Agent(qa) → QA 보고서
    │
    └── Phase 5: Critical/Major 이슈 시 해당 에이전트 재호출
```

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 에이전트 1개 실패 | 1회 재시도. 재실패 시 누락 명시하고 나머지 진행 |
| 빌드 실패 | 에러 메시지를 해당 에이전트에게 전달하여 수정 요청 |
| API 계약 불일치 | backend-dev에게 계약서 업데이트 요청 후 frontend-dev 재호출 |
| QA Critical 이슈 | 해당 에이전트 재호출 (최대 2회). 해결 안 되면 사용자에게 보고 |

## 테스트 시나리오

### 정상 흐름
1. 사용자가 "레시피 추천 API와 결과 페이지 구현해줘" 요청
2. Phase 1에서 API 계약 초안 작성 (POST /api/recipes/recommend)
3. Phase 2에서 backend-dev가 RecipeService + Controller 구현
4. Phase 3에서 frontend-dev가 레시피 추천 페이지 + API 연동 구현
5. Phase 4에서 qa가 API 응답 shape ↔ 프론트 타입 교차 검증
6. Phase 5에서 결과 요약 보고

### 에러 흐름
1. Phase 4에서 qa가 "API 응답이 recipes[] 래핑인데 프론트가 배열 직접 기대" Critical 발견
2. Phase 5에서 frontend-dev를 재호출하여 타입 수정
3. QA 재검증 후 통과 확인
