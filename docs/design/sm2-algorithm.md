# SM-2 알고리즘 구현 설계

## 개요

에빙하우스 망각 곡선 기반의 SM-2(SuperMemo 2) 알고리즘을 AlgoVoca에 맞게 구현한다.
이진 응답(알고있음/모름)을 받아 내부적으로 SM-2 품질 점수로 매핑해 복습 간격을 계산한다.

---

## 1. 사용자 응답과 SM-2 품질 점수 매핑

현재 UI는 플래시카드에서 두 가지 응답만 받는다.

| 사용자 응답 | UI 버튼 | SM-2 quality (q) | 근거 |
|-------------|---------|-------------------|------|
| 알고있음 (1) | ✅ 알고있음 | **4** | "기억남 — 약간 뜸 들였지만 올바르게 맞춤" |
| 모름 (0) | ❌ 모름 | **1** | "틀렸고, 정답을 봐도 생소함" |

> q ≥ 3이면 성공(Pass), q ≤ 2이면 실패(Fail).
> 알고있음 → 4(성공), 모름 → 1(실패)로 매핑된다.

---

## 2. 핵심 알고리즘 로직

### SM-2 계산 함수 (TypeScript)

```typescript
interface WordRecord {
  repetitions: number;    // 연속 성공 횟수 (초기값: 0)
  efactor: number;        // 난이도 지수 (초기값: 2.5, 최솟값: 1.3)
  interval: number;       // 다음 복습까지 일수 (초기값: 0)
  nextReviewDate: Date;   // 다음 복습일 (초기값: 오늘)
}

function calculateSM2(quality: number, record: WordRecord): WordRecord {
  const { repetitions, efactor, interval } = record;
  let nextRep: number;
  let nextInterval: number;

  if (quality >= 3) {
    // 성공: 복습 간격 증가
    if (repetitions === 0) nextInterval = 1;
    else if (repetitions === 1) nextInterval = 6;
    else nextInterval = Math.round(interval * efactor);
    nextRep = repetitions + 1;
  } else {
    // 실패: 처음부터 다시
    nextRep = 0;
    nextInterval = 1;
  }

  // EF 업데이트 (SM-2 공식)
  let nextEF = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  nextEF = Math.max(1.3, parseFloat(nextEF.toFixed(2)));

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + nextInterval);

  return { repetitions: nextRep, efactor: nextEF, interval: nextInterval, nextReviewDate };
}
```

### EF 변화 계산 예시

| 사용자 응답 | q | EF 변화 (초기 2.50 기준) |
|-------------|---|--------------------------|
| 알고있음     | 4 | +0.10 → 2.60 |
| 모름         | 1 | -0.32 → 2.18 |
| (연속 모름) | 1 | 2.18 → 1.86 → ... → 1.30 (하한선) |

---

## 3. 이력 기반 errorScore 계산

추천 엔진에서 사용하는 오답 점수. 단어별 전체 답변 이력(`answers/` 서브컬렉션)과 SM-2 efactor를 결합해 계산한다.
세션 완료 시점에 한 번 계산하고 `wordRecords`에 저장해 두어, 추천 요청 시에는 저장된 값을 그대로 읽는다.

### 계산 공식

```typescript
interface AnswerRecord {
  answeredAt: Timestamp;
  quality: 0 | 1;
}

function calculateErrorScore(
  record: WordRecord,
  recentAnswers: AnswerRecord[],  // 최근 90일 이내 answers/ 조회 결과
): number {
  // 미학습 단어: 기본값 0.5
  if (recentAnswers.length === 0) return 0.5;

  const now = Date.now();

  // 최근 답변일수록 높은 가중치 (지수 감쇠)
  // λ = 0.1 → 10일 전 답변은 현재의 약 37% 가중치
  let weightedErrors = 0;
  let totalWeight = 0;

  for (const answer of recentAnswers) {
    const daysAgo = (now - answer.answeredAt.toMillis()) / (1000 * 60 * 60 * 24);
    const weight = Math.exp(-0.1 * daysAgo);
    weightedErrors += weight * (1 - answer.quality);  // 오답이면 1, 정답이면 0
    totalWeight += weight;
  }

  // 최근 오답률 (0~1)
  const recentErrorRate = weightedErrors / totalWeight;

  // SM-2 efactor 기반 장기 난이도 (1.3=최저/어려움, 2.5=초기/쉬움)
  // (2.5 - efactor) / 1.2 → 0(쉬움)~1(어려움)
  const difficultyScore = (2.5 - record.efactor) / 1.2;

  // 최근 오답률 + SM-2 장기 난이도 혼합
  return 0.6 * recentErrorRate + 0.4 * difficultyScore;
}
```

### 가중치 감쇠 예시 (λ = 0.1)

| 답변 시점 | 가중치 |
|-----------|--------|
| 오늘 | 1.00 |
| 7일 전 | 0.50 |
| 14일 전 | 0.25 |
| 30일 전 | 0.05 |
| 90일 전 | ~0.00 |

### errorScore 해석

| 단어 상태 | errorScore |
|-----------|------------|
| 미학습 | 0.5 (기본값) |
| 최근에 계속 맞춘 쉬운 단어 | 0.0 ~ 0.2 |
| 절반씩 맞고 틀리는 단어 | 0.4 ~ 0.6 |
| 최근에 계속 틀린 어려운 단어 | 0.8 ~ 1.0 |

---

## 4. 단어 상태 구분 및 처리

### 신규 단어 초기값

처음 추천된 단어는 아직 wordRecord가 없다.

```typescript
const DEFAULT_WORD_RECORD: Omit<WordRecord, 'nextReviewDate'> = {
  repetitions: 0,
  efactor: 2.5,
  interval: 0,
};
```

첫 학습 후 `calculateSM2(q, DEFAULT_WORD_RECORD)`를 호출해 wordRecord를 생성한다.

### 단어 상태 분류

```typescript
type WordStatus = 'new' | 'due' | 'not_due';

function getWordStatus(record: WordRecord | null, today: Date): WordStatus {
  if (!record || record.interval === 0) return 'new';
  if (record.nextReviewDate <= today) return 'due';
  return 'not_due';
}
```

---

## 5. 당일 세션 내 재학습 (Queue 방식)

플래시카드 세션 내에서 틀린 단어를 당일 다시 보여주는 UX를 구현한다.

```
세션 시작: [A, B, C, D, E, F, G, H, I, J]
  → B 모름, E 모름, H 모름

세션 내 큐 추가: [C, D, F, G, I, J, B, E, H]
  → B 두 번째 시도: 맞음
  → E 두 번째 시도: 모름
  → H 두 번째 시도: 맞음

세션 내 큐 추가: [E]
  → E 세 번째 시도: 맞음

세션 완료
```

**규칙:**
- DB 업데이트는 세션이 완전히 끝난 후 한 번만 수행
- 단어별 최종 응답(마지막 시도 결과)만 SM-2 계산에 사용
- 세션 내에서 여러 번 시도한 경우, Firestore에는 최종 결과만 저장

---

## 6. SM-2 데이터 Firestore 업데이트 흐름

```
사용자 학습 완료
      ↓
POST /words/answer
{ uid, answers: [{wordId, quality}] }
      ↓
각 wordId에 대해:
  1. wordRecords/{wordId} 조회 (없으면 DEFAULT_WORD_RECORD 사용)
  2. quality → SM-2 quality 매핑 (0→1, 1→4)
  3. calculateSM2() 호출
  4. wordRecords/{wordId} upsert
  5. totalAnswers, correctAnswers 업데이트
      ↓
studySessions에 세션 기록 저장
```

---

## 7. 엣지케이스 처리

| 케이스 | 처리 방법 |
|--------|-----------|
| 같은 단어를 하루에 두 번 학습 | answers/에 둘 다 저장, SM-2는 마지막 결과만 반영 |
| interval이 매우 커진 단어 | nextReviewDate가 미래 → overdue 보장 로직에서 제외, 점수 낮아 자연 탈락 |
| efactor가 1.3 하한에 도달한 단어 | difficultyScore = 1.0 → errorScore 높아져 추천 우선순위 상승 |
| 장기 미접속 후 복습 재개 | overdue 단어가 많아 최소 보장 로직에 의해 강제 포함 |
| 90일 이상 이력 없는 단어 | recentAnswers = [] → errorScore = 0.5 (기본값, 미학습과 동일 취급) |

---

## 8. 구현 파일 위치

```
functions/src/
  algorithms/
    sm2.ts           ← calculateSM2
    errorScore.ts    ← calculateErrorScore (이력 기반 오답 점수)
  services/
    wordRecordService.ts  ← wordRecord + answers/ CRUD
  api/
    answer.ts        ← POST /words/answer 핸들러
```
