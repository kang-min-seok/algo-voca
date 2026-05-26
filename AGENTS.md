# AlgoVoca - Codex 규칙

개발자를 위한 개인 맞춤형 영단어 학습 서비스입니다.
사용자의 직군 관심사, 단어 중요도, 학습 이력을 결합한 지능형 추천 엔진이 핵심입니다.

## 규칙 목록

규칙은 카테고리별로 분리된 문서에 정의되어 있습니다.

- [코드 품질](docs/rules/code-quality.md) — SRP, 매직 넘버 금지, 코드 간결성
- [워크플로우](docs/rules/workflow.md) — 계획 준수, 커밋 메세지 추천, 타입/린트 체크
- [문서화](docs/rules/documentation.md) — 진행 내용 문서화 의무

## 기술 스택

- **Frontend**: React 19 + TypeScript + Vite → Cloudflare Pages 배포
- **Backend**: Firebase Functions (Serverless)
- **Database**: Firebase Firestore
- **Algorithm**: Vector DB + 코사인 유사도, SM-2

## 개발 계획

단계별 계획은 [docs/plan/index.md](docs/plan/index.md)를 참고하세요.
