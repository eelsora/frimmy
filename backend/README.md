# Frimmy Backend

냉장고 재료 기반 AI 레시피 추천 서비스의 백엔드 API 서버

## Tech Stack

| | Stack | Version |
|---|---|---|
| **Language** | Java | 21 |
| **Framework** | Spring Boot | 3.4.5 |
| **AI** | Spring AI (OpenAI) | 1.1.6 |
| **Agent** | LangGraph4j | 1.8.16 |
| **DB** | PostgreSQL | - |
| **Build** | Gradle | 8.13 |

## 패키지 구조

```
com.frimmy.backend
├── config/             # Spring AI 설정
├── ingredient/         # 재료 CRUD (Entity, Repository, Service, Controller)
├── recipe/             # AI 레시피 추천 (Service, Controller)
└── agent/              # LangGraph4j 에이전트 그래프 정의
```

## API Endpoints

| Method | Path | 설명 |
|---|---|---|
| - | `/api/ingredients` | 냉장고 재료 CRUD |
| - | `/api/recipes` | AI 레시피 추천 |

## Getting Started

### Prerequisites

- Java 21
- PostgreSQL

### DB 설정

```sql
CREATE DATABASE frimmy;
```

### 실행

```bash
# 환경변수 설정
export OPENAI_API_KEY=your-api-key
export DB_USERNAME=frimmy
export DB_PASSWORD=frimmy

# 실행
./gradlew bootRun
```

서버가 `http://localhost:8080`에서 시작됩니다.

### 빌드

```bash
./gradlew build
```

## TODO (LangGraph4j 에이전트 기능)

- [ ] **재료 기반 레시피 추천** — 등록된 냉장고 재료로 만들 수 있는 요리와 레시피 추천 (기본 기능)
- [ ] **영양 분석 + 식단 추천 에이전트** — 레시피 추천 → 영양소 분석 → 유저 건강 목표에 맞는지 판단 → 부족한 영양소 보완 레시피 재추천 (반복 루프)
- [ ] **장보기 도우미** — 만들고 싶은 요리 선택 → 냉장고 재료 비교 → 부족한 재료 파악 → 근처 마트 가격 비교 (Tool Calling + 조건 분기)
- [ ] **식재료 유통기한 관리 에이전트** — 유통기한 임박 재료 감지 → 해당 재료 우선 소진 레시피 추천 → 못 쓸 재료는 대체재 제안 (다단계 판단)
- [ ] **멀티턴 대화형 요리 코치** — 레시피 추천 → 유저 질문 응답 → 맥락 유지하며 수정 → 조리 단계별 가이드 (상태 관리 + 분기)
- [ ] **식비 절약 플래너** — 예산 입력 → 냉장고 재료 분석 → 일주일 식단 생성 → 예산 초과 시 재조정 (루프 + 조건 분기)
