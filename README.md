# Frimmy

냉장고 재료 기반 AI 레시피 추천 서비스

Frontend와 Backend를 하나의 저장소에서 관리하는 멀티 프로젝트 구조

## Tech Stack

| | Stack | Version |
|---|---|---|
| **Frontend** | React Native (Expo), TypeScript | Expo 56 / RN 0.85 |
| **Backend** | Java, Spring Boot, Spring AI, LangGraph4j | 3.4.5 |
| **DB** | PostgreSQL | - |
| **AI** | OpenAI (GPT) | - |

## Project Structure

```
frimmy/
├── frontend/          # React Native (Expo, TypeScript)
└── backend/           # Spring Boot (AI 에이전트 백엔드)
```

각 프로젝트의 상세 내용은 하위 README를 참고해주세요.
- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

## Getting Started

### Prerequisites

- Node.js 20+ (LTS)
- Java 21
- PostgreSQL
- Xcode (iOS 개발 시)

### Frontend

```bash
cd frontend
npm install
npm run ios        # iOS 시뮬레이터
npm run start      # Expo Dev Server
```

### Backend

```bash
cd backend
export OPENAI_API_KEY=your-api-key
./gradlew bootRun  # http://localhost:8080
```

## Build

```bash
# Frontend (Expo EAS Build)
cd frontend && npx eas build --platform ios

# Backend
cd backend && ./gradlew build
```
