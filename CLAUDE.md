# Frimmy

냉장고 재료 기반 AI 레시피 추천 서비스.

- **프론트엔드**: `frontend/` — React Native (Expo 56), TypeScript
- **백엔드**: `backend/` — Spring Boot 3.4.5, Spring AI (GPT-4o), LangGraph4j, PostgreSQL

## 하네스: Frimmy 개발

**목표:** 프론트엔드/백엔드/AI 기능을 체계적으로 개발하고 통합 정합성을 보장한다.

**트리거:** Frimmy 기능 개발, 페이지 구현, API 개발, 재료 관리, 레시피 추천, 쇼핑 리스트, 에이전트 그래프 구현 등 개발 작업 요청 시 `frimmy-orchestrator` 스킬을 사용하라. 단순 질문은 직접 응답 가능.

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-06-03 | 초기 구성 | 전체 | 하네스 신규 구축 |
| 2026-06-03 | 프론트엔드 스택 변경: Next.js → React Native (Expo) | agents/frontend-dev, skills/frontend-dev, skills/frimmy-orchestrator, skills/qa-integration | 기술스택 전환 반영 |
| 2026-06-04 | 백엔드 클린 아키텍처 적용 (presentation/application/domain/infrastructure) | skills/backend-dev | 계층별 패키지 분리 |
| 2026-06-04 | 패키지명 변경: com.frimmy.backend → com.frimmy | 전체 백엔드 소스 | 패키지 간소화 |
