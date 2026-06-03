---
name: qa-integration
description: "Frimmy 프론트엔드-백엔드 통합 정합성 검증 스킬. API 계약 교차 비교, 라우트 경로 검증, 빌드 검증, 데이터 흐름 추적. QA 검증, 통합 테스트, 버그 탐지, 정합성 확인, 코드 리뷰 시 이 스킬을 사용."
---

# QA Integration Skill

프론트엔드와 백엔드의 경계면 불일치를 교차 비교로 탐지하는 검증 가이드.

## 검증 체크리스트

### 1. API 계약 교차 검증

**목적:** 백엔드 Controller 응답 shape ↔ 프론트엔드 타입 정의 일치 확인

**절차:**
1. 백엔드 Controller에서 `@GetMapping`, `@PostMapping` 등의 반환 타입 추출
2. 프론트엔드 `src/lib/types.ts`의 타입 정의와 비교
3. 필드명 일치 확인 (camelCase 통일 여부)
4. 래핑 구조 확인 (배열 직접 반환 vs `{ data: [...] }` 래핑)

**주의 패턴:**
- Java Entity 필드명 → JSON 직렬화 시 camelCase 변환 확인
- `LocalDate` → ISO 8601 문자열 변환 확인
- Spring AI 응답이 String인지 구조화된 JSON인지 확인

### 2. 라우트 경로 검증

**절차:**
1. `frontend/src/app/` 하위 `page.tsx` 파일 경로에서 URL 패턴 추출
2. 코드 내 `href=`, `router.push(`, `Link` 컴포넌트의 경로 수집
3. 각 링크가 실제 존재하는 page와 매칭되는지 확인

### 3. 빌드 검증

**프론트엔드:**
```bash
cd frontend && npm run build
```

**백엔드:**
```bash
cd backend && ./gradlew build
```

빌드 실패 시 에러 메시지를 분석하여 원인과 수정 방안을 보고한다.

### 4. 데이터 흐름 E2E 추적

핵심 시나리오별로 데이터가 올바르게 흐르는지 추적한다:

**시나리오 A: 재료 등록**
```
사용자 입력 → 프론트 폼 → POST /api/ingredients → Entity 저장 → 응답 → UI 갱신
```

**시나리오 B: AI 레시피 추천**
```
재료 선택 → POST /api/recipes/recommend → Spring AI → GPT-4o → 응답 파싱 → UI 렌더링
```

각 단계에서 데이터 shape이 다음 단계의 기대와 일치하는지 확인한다.

## 보고서 형식

```markdown
# QA 검증 보고서

## 검증 일시: {날짜}
## 검증 범위: {대상 기능/모듈}

### Critical Issues
- [ ] {위치}: {설명} → {수정 제안}

### Major Issues
- [ ] {위치}: {설명} → {수정 제안}

### Minor Issues
- [ ] {위치}: {설명} → {수정 제안}

### 통과 항목
- [x] {검증 항목}: 정상
```

## 심각도 기준

| 심각도 | 기준 | 예시 |
|--------|------|------|
| Critical | 런타임 에러/빌드 실패 | API 응답 shape 불일치로 TypeError |
| Major | 기능 동작 오류 | 잘못된 라우트 경로로 404 |
| Minor | 코드 품질/일관성 | 미사용 타입 정의 |
