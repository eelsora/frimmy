---
name: backend-dev
description: "Frimmy 백엔드 개발 스킬. Spring Boot 3.4.5, Spring AI (GPT-4o), LangGraph4j, PostgreSQL 기반 API/서비스 구현. 백엔드 API 개발, DB 엔티티 설계, AI 레시피 추천 로직, 에이전트 그래프 구현 시 이 스킬을 사용."
---

# Backend Development Skill

Frimmy 백엔드의 Spring Boot + Spring AI 기반 개발 가이드.

## 프로젝트 구조

```
backend/src/main/java/com/frimmy/backend/
├── config/         # Spring AI 설정, CORS, 공통 설정
├── ingredient/     # 재료 도메인 (Entity, Repository, Service, Controller)
├── recipe/         # 레시피 추천 도메인 (Service, Controller)
├── agent/          # LangGraph4j 에이전트 그래프
└── FrimmyApplication.java
```

## 개발 규칙

### 패키지 구조

도메인별 패키지로 분리한다. 새 도메인 추가 시:
```
com.frimmy.backend.{domain}/
├── {Domain}Entity.java       # JPA Entity
├── {Domain}Repository.java   # Spring Data JPA Repository
├── {Domain}Service.java      # 비즈니스 로직
├── {Domain}Controller.java   # REST Controller
└── dto/                      # 요청/응답 DTO (필요 시)
```

### REST API 설계

```java
@RestController
@RequestMapping("/api/ingredients")
public class IngredientController {

    private final IngredientService ingredientService;

    // 생성자 주입 (Lombok @RequiredArgsConstructor 또는 명시적 생성자)

    @GetMapping
    public List<IngredientEntity> getAll() {
        return ingredientService.findAll();
    }

    @PostMapping
    public IngredientEntity create(@RequestBody IngredientEntity ingredient) {
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

    public RecipeService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    public String recommendRecipe(List<String> ingredients) {
        String prompt = String.format(
            "다음 재료로 만들 수 있는 레시피를 추천해주세요: %s",
            String.join(", ", ingredients)
        );
        return chatClient.prompt()
            .user(prompt)
            .call()
            .content();
    }
}
```

### LangGraph4j 에이전트

`backend/src/main/java/com/frimmy/backend/agent/` 하위에 에이전트 그래프를 정의한다. 노드(함수)와 엣지(전이)로 구성하며, 각 노드는 상태를 받아 다음 상태를 반환한다.

### JPA Entity

```java
@Entity
@Table(name = "ingredients")
public class IngredientEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String category;

    private LocalDate expirationDate;

    // Getters, Setters (또는 Lombok @Data)
}
```

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

코드 작성 후 반드시 확인:
```bash
cd backend && ./gradlew build
```

빌드 에러 발생 시 즉시 수정한다.
