# Frimmy Frontend

냉장고 재료 기반 AI 레시피 추천 서비스의 iOS 앱

## Tech Stack

| | Stack | Version |
|---|---|---|
| **Framework** | React Native (Expo) | 56.0 / RN 0.85 |
| **Language** | TypeScript | 6.x |
| **UI** | React | 19.2 |

## 프로젝트 구조

```
frontend/
├── App.tsx             # 앱 엔트리 포인트
├── app.json            # Expo 설정
├── assets/             # 아이콘, 이미지
├── index.ts            # 등록 파일
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+ (LTS)
- Xcode (iOS 시뮬레이터 실행 시)
- Expo Go 앱 (실제 디바이스 테스트 시)

### 실행

```bash
npm install
npm run ios        # iOS 시뮬레이터에서 실행
npm run start      # Expo Dev Server (QR코드로 실기기 테스트)
```

### 빌드

```bash
# EAS Build (클라우드 빌드)
npx eas build --platform ios

# 로컬 빌드 (Xcode 필요)
npx expo prebuild --platform ios
cd ios && pod install
```
