---
name: frontend-dev
description: "Frimmy 프론트엔드 개발 스킬. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4 기반 페이지/컴포넌트 구현. 프론트엔드 페이지 생성, UI 컴포넌트 개발, API 연동 훅 작성, 스타일링 작업 시 이 스킬을 사용."
---

# Frontend Development Skill

Frimmy 프론트엔드의 Next.js 16 App Router 기반 개발 가이드.

## 프로젝트 구조

```
frontend/
├── src/
│   ├── app/           # App Router 페이지 (layout.tsx, page.tsx)
│   ├── components/    # 재사용 컴포넌트
│   └── lib/           # 유틸리티, API 클라이언트, 커스텀 훅
├── public/            # 정적 에셋
├── next.config.ts
├── tailwind.config.ts (Tailwind CSS 4 — postcss.config.mjs 기반)
└── tsconfig.json
```

## 개발 규칙

### 페이지 생성

App Router 규칙을 따른다:
- `src/app/{route}/page.tsx` — 페이지 컴포넌트
- `src/app/{route}/layout.tsx` — 레이아웃 (필요 시)
- `src/app/{route}/loading.tsx` — 로딩 UI (필요 시)
- Server Component가 기본. `'use client'`는 상호작용이 필요한 컴포넌트에만 사용한다

### 컴포넌트 작성

```typescript
// Server Component (기본)
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return <div className="rounded-xl p-4 shadow-md">...</div>
}

// Client Component (상호작용 필요 시)
'use client'
export default function IngredientInput() {
  const [ingredients, setIngredients] = useState<string[]>([])
  // ...
}
```

### API 연동

백엔드 API(localhost:8080) 호출은 `src/lib/` 하위에 함수로 관리한다:

```typescript
// src/lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

export async function fetchRecipes(ingredientIds: number[]): Promise<RecipeResponse> {
  const res = await fetch(`${API_BASE}/api/recipes/recommend`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredientIds }),
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}
```

### 타입 정의

API 응답 타입은 `src/lib/types.ts`에 정의한다. 백엔드 API 계약서(`_workspace/`)와 반드시 일치시킨다:

```typescript
// src/lib/types.ts
export interface Ingredient {
  id: number
  name: string
  category: string
  expirationDate: string  // ISO 8601
}

export interface Recipe {
  id: string
  title: string
  description: string
  ingredients: string[]
  instructions: string[]
  cookingTime: number     // 분 단위
  difficulty: string
}
```

### 스타일링

- Tailwind CSS 4 유틸리티 클래스를 사용한다
- 모바일 퍼스트: 기본 스타일은 모바일, `md:`, `lg:` 접두사로 데스크탑 대응
- 색상/간격/폰트 등 디자인 토큰은 Tailwind 설정을 따른다

## 빌드 검증

코드 작성 후 반드시 확인:
```bash
cd frontend && npm run build
```

빌드 에러 발생 시 즉시 수정한다.
