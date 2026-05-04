# Phase 3 — 백엔드 개발

## 목표

Firebase Functions로 추천 엔진 API를 구현한다.
프론트엔드가 호출할 수 있는 명확한 인터페이스를 제공한다.

## API 엔드포인트 목록

| 메서드 | 경로 | 설명 |
|--------|------|------|
| POST | `/auth/register` | 회원가입 (직군 정보 포함) |
| GET | `/words/recommend` | 오늘의 추천 단어 10개 반환 |
| POST | `/words/answer` | 플래시카드 정답/오답 제출 |
| GET | `/words/history` | 학습 기록 조회 |

## 함수별 상세 설계

### `recommend` 함수

입력: `userId`
처리 흐름:
1. 유저 프로필(직군, 관심사) 조회
2. 1단계: ANN으로 후보 50개 추출
3. 2단계: 추천 점수 계산 (Phase 2 알고리즘 적용)
4. 상위 10개 반환

출력:
```ts
interface RecommendResponse {
  words: Word[];
  generatedAt: Date;
}
```

### `answer` 함수

입력: `userId`, `wordId`, `quality` (0: 모름 / 1: 알고있음)
처리:
1. 기존 학습 기록 조회
2. SM-2 알고리즘으로 `easeFactor`, `interval`, `nextReviewDate` 갱신
3. Firestore에 저장

## Firestore 컬렉션 구조

```
words/                        # 전체 단어 DB
  {wordId}/
    word, meaning, example,
    roles, importanceByRole,
    embedding, source

users/                        # 유저 프로필
  {userId}/
    email, role, createdAt
    wordRecords/              # 서브컬렉션
      {wordId}/
        easeFactor, interval,
        repetitions, nextReviewDate,
        lastAnswered
```

## 작업 목록

- [ ] Firebase Functions 프로젝트 초기화 (TypeScript)
- [ ] Firestore 보안 규칙 설정 (인증된 유저만 자신의 데이터 접근)
- [ ] Firebase Authentication 설정 (이메일/비밀번호)
- [ ] `recommend` 함수 구현
- [ ] `answer` 함수 구현 (SM-2 갱신 포함)
- [ ] `register` 함수 구현 (직군 정보 저장)
- [ ] API 응답 타입 정의 (`src/types/api.ts`)
- [ ] Postman 또는 Firebase Emulator로 수동 테스트

## 완료 기준

- Firebase Emulator 환경에서 모든 API 정상 동작
- 인증 없이 API 호출 시 403 응답 확인
- `answer` 호출 후 Firestore에 SM-2 값이 올바르게 갱신됨 확인
