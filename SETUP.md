# Frimmy 프로젝트 실행 가이드

## 사전 준비

- Node.js 20+ (LTS)
- Java 21
- Docker Desktop
- OpenAI API Key

---

## 0. 환경변수 설정

프로젝트 루트에 `.env` 파일을 생성한다 (`.env.example` 참고):

```bash
cp .env.example .env
# .env 파일을 열고 실제 값으로 수정
```

---

## 1. Docker DB 실행

```bash
# Docker Compose로 실행 (권장)
docker compose up -d

# 또는 직접 실행
docker run -d --name frimmy-db \
  -e POSTGRES_DB=frimmy \
  -e POSTGRES_USER=frimmy \
  -e POSTGRES_PASSWORD=frimmy \
  -v frimmy-pgdata:/var/lib/postgresql/data \
  -p 5432:5432 postgres:17
```

### DB 관리 명령어

```bash
docker compose down        # DB 중지 (데이터 유지)
docker compose down -v     # DB 중지 + 데이터 삭제 (주의!)
docker ps                  # 실행 중인 컨테이너 확인
docker logs frimmy-db      # DB 로그 확인
```

### DB 백업/복원

```bash
# 백업
docker exec frimmy-db pg_dump -U frimmy frimmy > backup.sql

# 복원
docker exec -i frimmy-db psql -U frimmy frimmy < backup.sql
```

---

## 2. 백엔드 실행

```bash
cd backend

# 환경변수 설정
export OPENAI_API_KEY=your-api-key

# 실행
./gradlew bootRun
```

- 서버: http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui.html
- API 문서: http://localhost:8080/v3/api-docs

### 백엔드 빌드

```bash
cd backend
./gradlew build        # 빌드
./gradlew build -x test  # 테스트 제외 빌드
```

---

## 3. 프론트엔드 실행

```bash
cd frontend
npm install
npm run start          # Expo Dev Server
npm run ios            # iOS 시뮬레이터
npm run android        # Android 에뮬레이터
```

### 프론트엔드 빌드

```bash
cd frontend
npx eas build --platform ios
npx eas build --platform android
```

---

## 환경변수 정리

| 변수 | 설명 | 기본값 |
|------|------|--------|
| `OPENAI_API_KEY` | OpenAI API 키 | (필수) |
| `DB_USERNAME` | PostgreSQL 사용자명 | frimmy |
| `DB_PASSWORD` | PostgreSQL 비밀번호 | frimmy |

---

## 포트 정리

| 서비스 | 포트 |
|--------|------|
| 프론트엔드 (Expo) | 8081 |
| 백엔드 (Spring Boot) | 8080 |
| PostgreSQL | 5432 |
