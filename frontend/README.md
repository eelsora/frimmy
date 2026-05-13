# Frimmy Frontend

냉장고 재료 기반 AI 레시피 추천 서비스의 프론트엔드 (PWA)

## Tech Stack

| | Stack | Version |
|---|---|---|
| **Framework** | Next.js | 15.5.18 |
| **UI** | React | 19.2.4 |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 4.x |
| **PWA** | next-pwa | 5.6.0 |

## PWA

Progressive Web App으로 구성되어 웹 브라우저에서 앱처럼 사용할 수 있습니다.

- **Service Worker**: 빌드 시 `next-pwa`가 `public/sw.js`를 자동 생성. 네트워크 요청을 가로채는 프록시 역할
- **오프라인 캐싱**: 온라인 시 리소스를 캐시에 저장하고, 오프라인 시 캐시에서 제공
- **앱 설치**: `manifest.json`을 통해 홈 화면에 추가 가능 (standalone 모드)

## 프로젝트 구조

```
frontend/
├── src/app/            # App Router 페이지
├── public/
│   ├── manifest.json   # PWA 매니페스트
│   └── icons/          # 앱 아이콘 (192x192, 512x512)
├── types/              # 커스텀 타입 선언
├── next.config.ts      # Next.js + PWA 설정
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+

### 실행

```bash
npm install
npm run dev        # http://localhost:3000
```

### 빌드

```bash
npm run build
npm run start      # 프로덕션 서버 (PWA 동작 확인용)
```

> PWA(Service Worker)는 프로덕션 빌드에서만 동작합니다. `npm run dev`에서는 비활성화됩니다.
