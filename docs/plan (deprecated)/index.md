# AlgoVoca 개발 계획

개발자를 위한 개인 맞춤형 영단어 학습 서비스.
직군 관심사 + 단어 중요도 + 학습 이력을 결합한 지능형 추천 엔진 구현이 핵심 목표.

## 전체 Phase 구성

| Phase | 제목 | 상태 |
|-------|------|------|
| [Phase 0](phase-0-setup.md) | 프로젝트 셋업 | 진행 중 |
| [Phase 1](phase-1-data.md) | 단어 데이터 수집 및 가공 | 대기 |
| [Phase 2](phase-2-algorithm.md) | 핵심 알고리즘 개발 | 대기 |
| [Phase 3](phase-3-backend.md) | 백엔드 개발 | 대기 |
| [Phase 4](phase-4-frontend.md) | 프론트엔드 개발 | 대기 |
| [Phase 5](phase-5-integration.md) | 통합 및 테스트 | 대기 |
| [Phase 6](phase-6-optimization.md) | 알고리즘 최적화 및 연구 | 대기 |

## 추천 엔진 핵심 공식

```
추천 점수 = w1 × 직군_연관도 + w2 × 단어_중요도 + w3 × SM2_우선순위
```

- `w1`, `w2`, `w3`는 Phase 6에서 실험을 통해 최적값을 탐색
- 직군 연관도: Vector DB + 코사인 유사도
- 단어 중요도: 직군별 사전 정의 점수
- SM2 우선순위: 에빙하우스 망각 곡선 기반 복습 긴급도

## 시스템 아키텍처

```
[React + Vite]  →  Cloudflare Pages
      ↓
[Firebase Functions]  →  추천 알고리즘 연산 (SM-2, 코사인 유사도)
      ↓
[Firebase Firestore]  →  단어 DB, 유저 학습 기록
```

## 변경 이력

| 날짜 | 내용 |
|------|------|
| 2026-05-04 | 초기 계획서 작성 |
