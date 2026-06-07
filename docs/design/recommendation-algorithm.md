# 영단어 추천 알고리즘 설계 문서

## 개요

AlgoVoca의 추천 엔진은 세 가지 신호를 결합하여 사용자에게 최적의 단어 10개를 선정한다.

- **중요도** — 직무별 단어 중요도 (1~10 스케일)
- **직무 연관성** — Pinecone Vector DB를 통한 코사인 유사도
- **오답 기여도** — 최근 학습 이력 기반 오답 점수 (errorScore)

복습 기한 관리에는 **SM-2 알고리즘**(간격 반복)을 사용한다.

---

## 1. 추천 후보 필터링

```
functions/src/algorithms/recommendation.ts → getEligibleWords()
```

단어 전체 목록 중 아래 조건을 만족하는 단어만 추천 대상에 포함한다.

| 조건 | 설명 |
|------|------|
| `record == null` | 한 번도 학습하지 않은 단어 |
| `record.nextReviewDate ≤ today` | 복습 기한이 된 단어 |

아직 복습일이 되지 않은 단어는 후보에서 제외된다.

---

## 2. 점수 계산 공식

```
functions/src/algorithms/recommendation.ts → scoreWords()
```

```
최종 점수 = 0.4 × 중요도 + 0.4 × 직무_연관성 + 0.2 × 오답_기여도
```

### 2.1 중요도 (importance) — 가중치 40%

```typescript
const importance = word.importanceByRole[jobRole] / 10
```

- `word.importanceByRole`에 직무별로 1~10의 값이 저장된다.
- 10으로 나눠 **0~1 범위**로 정규화한다.
- 중요한 단어일수록 높은 점수를 받는다.

### 2.2 직무 연관성 (relevance) — 가중치 40%

```typescript
const relevance = pineconeScores.get(word.id) ?? 0
```

- Pinecone에서 반환한 코사인 유사도 점수 (**0~1 범위**).
- 직무 임베딩 벡터와 단어 벡터의 유사도가 높을수록 점수가 높다.
- Pinecone 쿼리 실패 시 0으로 대체하여 추천은 계속 진행된다.

### 2.3 오답 기여도 (errorContribution) — 가중치 20%

```typescript
const errorContribution = record ? record.errorScore * 2 - 1 : 0
```

| 상태 | errorScore | errorContribution |
|------|-----------|-------------------|
| 미학습 | — | 0 (중립) |
| 정답 위주 | → 0 | → -1 (점수 감소) |
| 오답 위주 | → 1 | → +1 (점수 증가) |

오답이 많은 단어일수록 추천 점수가 높아지고, 잘 아는 단어는 점수가 낮아진다.

---

## 3. SM-2 알고리즘 (간격 반복 학습)

```
functions/src/algorithms/sm2.ts → calculateSM2()
```

SM-2는 학습 성공률에 따라 다음 복습일을 지수적으로 늘려가는 알고리즘이다.

### 3.1 상태 변수

| 변수 | 초기값 | 설명 |
|------|--------|------|
| `repetitions` | 0 | 연속 성공 횟수 |
| `efactor` | 2.5 | 난이도 지수 (최솟값 1.3) |
| `interval` | 0 | 현재 복습 간격 (일수) |
| `nextReviewDate` | 오늘 | 다음 복습 날짜 |

### 3.2 quality 맵핑

클라이언트에서 사용자의 답변(`0` = 모름, `1` = 알고있음)을 SM-2용 quality로 변환한다.

```typescript
// functions/src/services/wordRecordService.ts
const sm2Quality = quality === 1 ? 4 : 1
```

| 사용자 답변 | sm2Quality | 의미 |
|-------------|-----------|------|
| `1` (알고있음) | `4` | 정답 (완전 이해 수준) |
| `0` (모름) | `1` | 오답 |

### 3.3 복습 간격 계산

**성공 (quality ≥ 3)**

| repetitions | 다음 interval |
|-------------|--------------|
| 0 (첫 성공) | 1일 |
| 1 (두 번째 성공) | 6일 |
| 2 이상 | `interval × efactor` 일 |

**실패 (quality < 3)**

- `repetitions = 0` (초기화)
- `interval = 1` (1일 후 재학습)

### 3.4 난이도 지수 (Ease Factor) 갱신

```
nextEF = efactor + (0.1 - (5 - quality) × (0.08 + (5 - quality) × 0.02))
nextEF = max(1.3, nextEF)
```

| quality | 변화량 | 설명 |
|---------|--------|------|
| 5 | +0.10 | 완벽한 답변, 쉬워짐 |
| 4 | +0.00 | 정답, 유지 |
| 3 | -0.14 | 정답이지만 어려움 |
| 1 | -0.32 | 오답 |
| 0 | -0.50 | 완전 오답, 매우 어려워짐 |

efactor가 낮을수록 단어를 어렵다고 판단하여 복습 간격이 짧게 유지된다.

---

## 4. errorScore 계산

```
functions/src/algorithms/errorScore.ts → calculateErrorScore()
```

errorScore는 추천 엔진이 "이 단어를 자주 틀리는가"를 측정하는 **0~1 범위**의 점수다.

```
errorScore = 0.6 × 최근_오답률 + 0.4 × 난이도_점수
```

### 4.1 최근 오답률 (recentErrorRate)

최근 90일 이내 답변 기록에 **시간 기반 지수 가중치**를 적용한다.

```
weight = exp(-0.1 × 경과_일수)

recentErrorRate = Σ(weight × (1 - quality)) / Σ(weight)
```

| 경과 일수 | 가중치 |
|----------|--------|
| 0일 (오늘) | 1.000 |
| 1일 전 | 0.905 |
| 7일 전 | 0.497 |
| 10일 전 | 0.368 |
| 30일 전 | 0.050 |
| 90일 전 | 0.0001 |

오래된 답변은 거의 무시되고, 최근 오답에 가중치가 집중된다.

### 4.2 난이도 점수 (difficultyScore)

```
difficultyScore = (2.5 - efactor) / 1.2
```

| efactor | difficultyScore | 해석 |
|---------|-----------------|------|
| 1.3 (최소) | 1.00 | 매우 어려운 단어 |
| 2.5 (초기) | 0.00 | 보통 |
| 2.5 초과 | 음수 | 쉬운 단어 |

### 4.3 갱신 시점

답변 처리 시 매번 최근 90일 답변을 조회하여 errorScore를 재계산하고 WordRecord에 저장한다.

---

## 5. 직무 연관성 — Pinecone Vector DB

```
functions/src/services/pineconeService.ts → queryRoleRelevance()
functions/src/constants/roleEmbeddings.ts
```

### 5.1 직무별 임베딩 벡터

`roleEmbeddings.ts`에 5개 직무의 고정 임베딩 벡터가 저장되어 있다.

| 직무 | 키 |
|------|-----|
| 프론트엔드 개발자 | `frontend` |
| 백엔드 개발자 | `backend` |
| DevOps 엔지니어 | `devops` |
| 풀스택 개발자 | `fullstack` |
| 기타 | `other` |

벡터는 `crawling/calc_role_embeddings.py` 스크립트로 생성된 사전 계산 임베딩이다.

### 5.2 쿼리 흐름

1. 사용자의 `jobRole`에 해당하는 임베딩 벡터를 가져온다.
2. Pinecone에 해당 벡터를 쿼리한다 (`topK = min(전체_단어_수, 10000)`).
3. 각 단어 ID에 대한 코사인 유사도 점수 맵을 반환한다.
4. 쿼리 실패 또는 플레이스홀더 벡터(전부 0)인 경우 빈 맵을 반환한다.

---

## 6. 전체 추천 흐름

```
functions/src/api/recommend.ts → recommend()
```

```
[클라이언트]
    │
    ▼
recommend() Cloud Function 호출
    │
    ├─ (1) 사용자 인증 확인
    │
    ├─ (2) 사용자 jobRole 조회 (Firestore users/{uid})
    │
    ├─ (3) 병렬 조회
    │       ├─ getAllWords() → 전체 단어 목록
    │       └─ getWordRecords(uid) → 사용자 학습 기록
    │
    ├─ (4) queryRoleRelevance(jobRole) → Pinecone 코사인 유사도
    │       └─ 실패 시 relevance = 0 으로 계속 진행
    │
    ├─ (5) getEligibleWords() → 미학습 or 복습 기한 도래 단어 필터링
    │
    ├─ (6) scoreWords() → 최종 점수 계산
    │       score = 0.4×중요도 + 0.4×연관성 + 0.2×오답기여도
    │
    └─ (7) selectRecommendedWords(10) → 상위 10개 반환
```

---

## 7. 답변 처리 흐름

```
functions/src/services/wordRecordService.ts → processAnswer()
```

```
사용자 답변 (quality: 0|1)
    │
    ├─ (1) 기존 WordRecord 조회 (없으면 DEFAULT_SM2 사용)
    │
    ├─ (2) quality 변환: 0 → sm2Quality=1, 1 → sm2Quality=4
    │
    ├─ (3) calculateSM2() → 새로운 repetitions, efactor, interval, nextReviewDate
    │
    ├─ (4) answers 하위 컬렉션에 답변 기록 추가
    │
    ├─ (5) 최근 90일 답변 조회
    │
    ├─ (6) calculateErrorScore() → 새로운 errorScore 계산
    │
    └─ (7) WordRecord 업데이트 (merge)
            ├─ SM-2 상태 (repetitions, efactor, interval, nextReviewDate)
            ├─ lastAnsweredAt
            ├─ errorScore
            ├─ totalAnswers += 1
            └─ correctAnswers += (quality === 1 ? 1 : 0)
```

---

## 8. 데이터 모델

### Word (Firestore: `words/{wordId}`)

```typescript
interface Word {
  id: WordId
  term: string                          // 영단어
  definition: string                    // 한국어 정의
  example: string                       // 예문
  exampleTranslation: string            // 예문 번역
  importanceByRole: {                   // 직무별 중요도 (1~10)
    frontend: number
    backend: number
    devops: number
    fullstack: number
    other: number
  }
  sources: string[]
}
```

### WordRecord (Firestore: `users/{uid}/wordRecords/{wordId}`)

```typescript
interface WordRecord {
  wordId: WordId
  repetitions: number      // 연속 성공 횟수 (초기: 0)
  efactor: number          // SM-2 난이도 지수 (초기: 2.5, 최솟값: 1.3)
  interval: number         // 복습 간격 일수 (초기: 0)
  nextReviewDate: Date     // 다음 복습일
  lastAnsweredAt: Date     // 마지막 답변 시각
  errorScore: number       // 추천 엔진용 오답 점수 (0~1)
  totalAnswers: number     // 전체 풀이 횟수
  correctAnswers: number   // 정답 횟수
}
```

### Answer (Firestore: `users/{uid}/wordRecords/{wordId}/answers/{answerId}`)

```typescript
interface AnswerRecord {
  answeredAt: Timestamp
  quality: 0 | 1    // 0: 모름, 1: 알고있음
  sessionId: string
}
```

---

## 9. 알고리즘 파라미터 요약

| 파라미터 | 값 | 위치 |
|----------|----|------|
| 추천 단어 개수 | 10 | `api/recommend.ts` |
| 점수 가중치 (중요도) | 40% | `algorithms/recommendation.ts` |
| 점수 가중치 (연관성) | 40% | `algorithms/recommendation.ts` |
| 점수 가중치 (오답) | 20% | `algorithms/recommendation.ts` |
| errorScore 가중치 (오답률) | 60% | `algorithms/errorScore.ts` |
| errorScore 가중치 (난이도) | 40% | `algorithms/errorScore.ts` |
| 최근 답변 고려 기간 | 90일 | `services/wordRecordService.ts` |
| 시간 가중 감소 계수 | -0.1 | `algorithms/errorScore.ts` |
| SM-2 초기 efactor | 2.5 | `services/wordRecordService.ts` |
| SM-2 최소 efactor | 1.3 | `algorithms/sm2.ts` |
| SM-2 첫 번째 성공 간격 | 1일 | `algorithms/sm2.ts` |
| SM-2 두 번째 성공 간격 | 6일 | `algorithms/sm2.ts` |
| Pinecone topK | min(단어수, 10000) | `services/pineconeService.ts` |

---

## 10. 파일 구조

```
functions/src/
├── algorithms/
│   ├── recommendation.ts    — 점수 계산, 단어 선택
│   ├── sm2.ts               — SM-2 간격 반복 로직
│   └── errorScore.ts        — 오답 점수 계산
├── api/
│   ├── recommend.ts         — 추천 Cloud Function
│   └── answer.ts            — 답변 처리 Cloud Function
├── services/
│   ├── wordService.ts       — 전체 단어 조회
│   ├── wordRecordService.ts — 답변 처리 및 레코드 저장
│   └── pineconeService.ts   — 벡터 유사도 쿼리
├── constants/
│   └── roleEmbeddings.ts    — 직무별 사전 계산 임베딩 벡터
└── types/
    └── index.ts             — 공통 타입 정의
```
