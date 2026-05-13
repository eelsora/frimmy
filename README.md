# Frimmy

Frontend와 Backend를 하나의 저장소에서 관리하는 멀티 프로젝트 구조

## Tech Stack

| | Stack |
|---|---|
| **Frontend** | Next.js 16, TypeScript, Tailwind CSS |
| **Backend** | Java 21, Spring Boot 3.4.5, Gradle 8.13 |

## Project Structure

```
frimmy/
├── frontend/          # Next.js (App Router, src/ 구조)
└── backend/           # Spring Boot
```

## Getting Started

### Prerequisites

- Node.js 18+
- Java 21

### Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

### Backend

```bash
cd backend
./gradlew bootRun  # http://localhost:8080
```

## Build

```bash
# Frontend
cd frontend && npm run build

# Backend
cd backend && ./gradlew build
```
