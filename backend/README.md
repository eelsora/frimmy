# Frimmy Backend

냉장고 재료 기반 AI 레시피 추천 서비스의 백엔드 API 서버

## Tech Stack

| | Stack | Version |
|---|---|---|
| **Language** | Java | 21 |
| **Framework** | Spring Boot | 3.4.5 |
| **AI** | Spring AI (OpenAI) | 1.0.0 |
| **Agent** | LangGraph4j | 1.6.0-beta5 |
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
