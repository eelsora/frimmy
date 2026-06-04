---
name: frontend-dev
description: "Frimmy 프론트엔드 개발 스킬. React Native (Expo), TypeScript 기반 모바일 앱 화면/컴포넌트 구현. 프론트엔드 화면 생성, UI 컴포넌트 개발, API 연동 훅 작성, 스타일링 작업 시 이 스킬을 사용."
---

# Frontend Development Skill

Frimmy 프론트엔드의 React Native (Expo) 기반 개발 가이드.

## 프로젝트 구조

```
frontend/
├── src/
│   ├── app/           # Expo Router 화면
│   ├── components/    # 재사용 컴포넌트
│   └── lib/           # 유틸리티, API 클라이언트, 커스텀 훅
├── assets/            # 이미지, 폰트 등 정적 에셋
├── app.json           # Expo 설정
└── tsconfig.json
```

## 개발 규칙

### 화면 생성

Expo Router 규칙을 따른다:
- `src/app/{route}.tsx` 또는 `src/app/{route}/index.tsx` — 화면 컴포넌트
- `src/app/_layout.tsx` — 레이아웃 (탭 네비게이션, 스택 등)
- `src/app/(tabs)/` — 탭 기반 네비게이션 그룹

### 컴포넌트 작성

```typescript
import { View, Text, StyleSheet } from 'react-native'

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{recipe.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: { borderRadius: 12, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold' },
})
```

### API 연동

백엔드 API(localhost:8080) 호출은 `src/lib/` 하위에 함수로 관리한다:

```typescript
// src/lib/api.ts
const API_BASE = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8080'

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

- `StyleSheet.create()`로 스타일을 정의한다
- 공통 색상/간격/폰트는 `src/lib/theme.ts`에 디자인 토큰으로 관리한다
- 플랫폼별 차이가 필요하면 `Platform.select()`를 사용한다

## 빌드 검증

코드 작성 후 Expo 실행 가능 여부를 확인:
```bash
cd frontend && npx expo start
```

EAS 빌드:
```bash
cd frontend && npx eas build --platform ios
```
