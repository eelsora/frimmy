# Frimmy

냉장고 재료 기반 AI 레시피 추천 서비스

Frontend와 Backend를 하나의 저장소에서 관리하는 멀티 프로젝트 구조

## Tech Stack

| | Stack | Version |
|---|---|---|
| **Frontend** | Next.js, TypeScript, Tailwind CSS, PWA | 15.5.18 |
| **Backend** | Java, Spring Boot, Spring AI, LangGraph4j | 3.4.5 |
| **DB** | PostgreSQL | - |
| **AI** | OpenAI (GPT) | - |

## Project Structure

```
frimmy/
├── frontend/          # Next.js (App Router, PWA, src/ 구조)
└── backend/           # Spring Boot (AI 에이전트 백엔드)
```

각 프로젝트의 상세 내용은 하위 README를 참고해주세요.
- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

## Getting Started

### Prerequisites

- Node.js 18+
- Java 21
- PostgreSQL

### Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

### Backend

```bash
cd backend
export OPENAI_API_KEY=your-api-key
./gradlew bootRun  # http://localhost:8080
```

## Build

```bash
# Frontend
cd frontend && npm run build

# Backend
cd backend && ./gradlew build
```
