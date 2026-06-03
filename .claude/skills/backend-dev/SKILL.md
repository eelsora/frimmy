---
name: backend-dev
description: "Frimmy 백엔드 개발 스킬. Spring Boot 3.4.5, Spring AI (GPT-4o), LangGraph4j, PostgreSQL 기반 API/서비스 구현. 백엔드 API 개발, DB 엔티티 설계, AI 레시피 추천 로직, 에이전트 그래프 구현 시 이 스킬을 사용."
---

# Backend Development Skill

Frimmy 백엔드의 Spring Boot + Spring AI 기반 개발 가이드.

## 프로젝트 구조 (클린 아키텍처)

```
backend/src/main/java/com/frimmy/
├── presentation/      # REST Controller (외부 요청 수신)
├── application/       # Service (비즈니스 로직, 유스케이스)
├── domain/            # Entity (핵심 도메인 모델)
├── infrastructure/    # Repository, 외부 연동 (DB, API)
├── config/            # Spring 설정 (AI, CORS 등)
├── agent/             # LangGraph4j 에이전트 그래프
└── FrimmyApplication.java
```

## 클린 아키텍처 규칙

### 계층별 역할과 의존 방향

```
presentation → application → domain ← infrastructure
```

| 계층 | 패키지 | 역할 | 의존 대상 |
|------|--------|------|----------|
| **presentation** | `com.frimmy.presentation` | REST Controller, 요청/응답 DTO | application, domain |
| **application** | `com.frimmy.application` | Service, 유스케이스 구현 | domain, infrastructure |
| **domain** | `com.frimmy.domain` | Entity, 핵심 비즈니스 규칙 | 없음 (최하위) |
| **infrastructure** | `com.frimmy.infrastructure` | Repository, 외부 API 연동 | domain |

**핵심 원칙:**
- domain은 다른 계층에 의존하지 않는다
- presentation은 domain을 직접 참조할 수 있지만, infrastructure는 직접 참조하지 않는다
- 새 기능 추가 시 반드시 이 계층 구조를 따른다

### 새 도메인 추가 시

```
com.frimmy.domain/{Domain}.java                      # Entity
com.frimmy.infrastructure/{Domain}Repository.java     # Repository
com.frimmy.application/{Domain}Service.java           # Service
com.frimmy.presentation/{Domain}Controller.java       # Controller
com.frimmy.presentation/dto/{Domain}Request.java      # 요청 DTO (필요 시)
com.frimmy.presentation/dto/{Domain}Response.java     # 응답 DTO (필요 시)
```

## 개발 규칙

### REST API 설계

```java
@RestController
@RequestMapping("/api/ingredients")
public class IngredientController {

    private final IngredientService ingredientService;

    // 생성자 주입

    @GetMapping
    public List<Ingredient> getAll() {
        return ingredientService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Ingredient create(@RequestBody Ingredient ingredient) {
        return ingredientService.save(ingredient);
    }
}
```

**API 응답 규칙:**
- 단일 객체: 직접 반환
- 목록: `List<T>` 직접 반환
- 페이지네이션: `Page<T>` 반환 (Spring Data 기본)
- 에러: `@ExceptionHandler`로 일관된 에러 응답

### Spring AI 활용

```java
@Service
public class RecipeService {
    private final ChatClient chatClient;

    public RecipeService(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    public String recommendRecipe(List<String> ingredients) {
        return chatClient.prompt()
            .user("다음 재료로 만들 수 있는 레시피를 추천해주세요: "
                + String.join(", ", ingredients))
            .call()
            .content();
    }
}
```

### LangGraph4j 에이전트

`com.frimmy.agent/` 하위에 에이전트 그래프를 정의한다. 노드(함수)와 엣지(전이)로 구성하며, 각 노드는 상태를 받아 다음 상태를 반환한다.

### 설정

`backend/src/main/resources/application.yml`:
- `spring.ai.openai.api-key`: `${OPENAI_API_KEY}`
- `spring.ai.openai.chat.options.model`: `gpt-4o`
- `spring.datasource.url`: `jdbc:postgresql://localhost:5432/frimmy`

### API 계약서 작성

새 API를 구현하면 `_workspace/`에 API 계약서를 작성한다. 프론트엔드 에이전트가 이를 참조하여 타입을 정의한다:

```markdown
## POST /api/recipes/recommend
Request: { "ingredientIds": [1, 2, 3] }
Response: { "recipes": [{ "title": "...", "description": "...", ... }] }
```

## 빌드 검증

코드 작성 후 사용자에게 빌드 실행을 요청한다:
```bash
cd backend && ./gradlew build
```
