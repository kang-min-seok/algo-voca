# Phase 0 — 프로젝트 셋업

## 목표

개발을 시작하기 위한 모든 기반 환경을 구성한다.
이 Phase가 완료되면 로컬에서 개발 서버가 동작하고 Firebase와 연결된 상태여야 한다.

## 작업 목록

### 프론트엔드 환경

- [ ] React + TypeScript + Vite 초기 구조 정리 (보일러플레이트 제거)
- [ ] 디렉토리 구조 확정 및 생성
- [ ] ESLint + TypeScript strict 모드 설정
- [ ] 절대 경로 임포트 설정 (`@/` alias)
- [ ] 상수 파일 구조 생성 (`src/constants/`)

### Firebase 설정

- [ ] Firebase 프로젝트 생성
- [ ] Firestore 데이터베이스 초기화
- [ ] Firebase Functions 프로젝트 초기화
- [ ] 환경 변수 설정 (`.env.local`)
- [ ] Firebase SDK 설치 및 연결 확인

### 배포 환경

- [ ] Cloudflare Pages 프로젝트 연결
- [ ] GitHub 저장소 생성 및 연결
- [ ] 배포 파이프라인 동작 확인

## 확정된 디렉토리 구조

```
src/
├── assets/
├── components/       # 재사용 UI 컴포넌트
│   └── ui/
├── constants/        # 매직 넘버/스트링 상수
├── features/         # 기능 단위 모듈
│   ├── auth/
│   ├── flashcard/
│   └── recommendation/
├── hooks/            # 공통 커스텀 훅
├── services/         # Firebase API 호출
├── types/            # TypeScript 타입 정의
└── utils/            # 순수 유틸리티 함수
```

## 완료 기준

- `pnpm dev` 실행 시 정상 동작
- `pnpm build` 타입 오류 없음
- `pnpm lint` 오류 없음
- Firebase Firestore 연결 후 테스트 문서 읽기/쓰기 성공
