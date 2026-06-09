# SM-2 알고리즘 구현 설명서

> 이 문서는 [sm2-algorithm.md](sm2-algorithm.md) (설계 문서)와 별개로,
> **현재 코드에 실제로 구현된 동작**을 "데이터 → 활용 → 계산 → 흐름" 순서로 설명한다.
> 코드를 처음 보는 사람이 "무엇이 저장되고, 그 값이 어디서 어떻게 쓰이고, 최종 계산이 어떻게 이뤄지는지"를
> 따라갈 수 있도록 정리했다.

---

## 1. 어떤 데이터가 저장되는가

SM-2는 "단어 하나를 얼마나 잘 기억하고 있는가"를 몇 개의 숫자로 표현하고,
사용자가 답을 맞히거나 틀릴 때마다 그 숫자들을 갱신하는 방식으로 동작한다.
이 숫자들이 저장되는 곳이 Firestore의 `users/{uid}/wordRecords/{wordId}` 문서다.

타입 정의: [src/types/index.ts:44-55](../../src/types/index.ts), [functions/src/types/index.ts:23-33](../../functions/src/types/index.ts)

```typescript
export interface WordRecord {
  wordId: WordId
  repetitions: number     // 연속 정답 횟수 (초기값 0)
  efactor: number         // 난이도 지수, Easiness Factor (초기값 2.5, 하한 1.3)
  interval: number        // 다음 복습까지 며칠을 띄울지 (초기값 0)
  nextReviewDate: Date    // interval을 오늘 날짜에 더해 계산한 "다음 복습 권장일"
  lastAnsweredAt: Date    // 마지막으로 이 단어를 학습한 시각
  errorScore: number      // 0~1, 추천 엔진이 사용하는 사전 계산된 "오답 가중치"
  totalAnswers: number    // 누적 응답 횟수
  correctAnswers: number  // 누적 정답 횟수
}
```

각 단어 기록 아래에는 답변 이력을 쌓는 서브컬렉션 `answers/`가 따로 있다 (`wordRecordService.ts:22`).

```
users/{uid}/wordRecords/{wordId}/answers/{answerId}
  - answeredAt: Timestamp
  - quality: 0 | 1        // 사용자가 누른 버튼 그대로 (0=모름, 1=알고있음)
  - sessionId: string
```

`wordRecord` 자체는 "현재 SM-2 상태의 스냅샷"이고, `answers/`는 "그 스냅샷이 어떤 이력을 거쳐 만들어졌는지"를
보여주는 원본 로그다. 이 둘의 역할 분리가 중요한데, 이유는 2절에서 설명한다.

---

## 2. 저장된 데이터는 어디에, 왜 쓰이는가

### 2-1. `repetitions` / `efactor` / `interval` / `nextReviewDate` → 다음 복습 시점 계산의 입력값

사용자가 다시 같은 단어를 학습하면, 이 네 값이 SM-2 계산 함수의 "이전 상태"로 그대로 들어가서
"다음 상태"를 만드는 재료가 된다. 즉 매번 처음부터 계산하는 게 아니라, 직전에 저장해둔 값을 이어받아
누적적으로 갱신하는 구조다.

### 2-2. `nextReviewDate` → 학습 화면에 보여줄 단어를 고르는 기준

추천 알고리즘([recommendation.ts](../../functions/src/algorithms/recommendation.ts))은
"오늘 복습해야 하는 단어"만 추천 대상으로 추린다.

```typescript
function getEligibleWords(words, wordRecords) {
  const today = new Date()
  return words
    .map((word) => ({ word, record: wordRecords.get(word.id) ?? null }))
    .filter(({ record }) => !record || record.nextReviewDate <= today)
}
```

`record`가 없으면(한 번도 학습 안 한 신규 단어) 무조건 후보에 포함되고,
있으면 `nextReviewDate`가 오늘이거나 지난 단어만 후보가 된다. SM-2가 "아직 복습할 때가 아니다"라고
판단한 단어(미래의 `nextReviewDate`)는 추천에서 자연스럽게 제외된다.

### 2-3. `efactor` / `errorScore` → 추천 점수 계산의 입력값

후보로 걸러진 단어들은 [recommendation.ts](../../functions/src/algorithms/recommendation.ts)의
`scoreWords`에서 최종 점수를 받는다.

```typescript
const errorContribution = record ? record.errorScore * 2 - 1 : 0  // 0~1 → -1~1로 재매핑
score = 0.4 * importance + 0.4 * relevance + 0.2 * errorContribution
```

`errorScore`가 높을수록(자주 틀리고 어려운 단어일수록) `errorContribution`이 양수 쪽으로 커져서
점수가 올라간다. 즉 "최근에 자주 틀리고 SM-2 상으로도 어려운 단어"가 더 자주 추천 후보 상위에 오르도록
SM-2의 결과값이 추천 가중치에 직접 반영되는 구조다.

### 2-4. `interval` / `nextReviewDate` → 학습 통계 화면

[useStats.ts](../../src/features/stats/useStats.ts)와 [StatsPage.tsx](../../src/features/stats/StatsPage.tsx)는
저장된 SM-2 상태를 그대로 사용자에게 보여준다.

- **복습 대기 단어 (overdue)**: `nextReviewDate <= 오늘`인 단어 — "SM-2가 지금 복습하라고 판단한 단어"
- **잘 기억하는 단어 (strongest)**: `interval`이 긴 단어 내림차순 — "SM-2 복습 주기가 긴 단어"
- 단어별로 `interval`을 "OO일 주기"로 표시

여기서는 SM-2가 추가 계산 없이 "결과를 해석해서 보여주는 용도"로만 쓰인다.

### 2-5. `answers/` 서브컬렉션 → errorScore 계산의 원본 데이터

`wordRecord`의 숫자들은 "현재 상태"만 담고 있어서 "최근에 얼마나 자주 틀렸는지" 같은 시계열 정보를
복원할 수 없다. 그래서 매 응답마다 `answers/`에 원본 로그를 남겨두고, `errorScore`를 다시 계산할 때
이 로그를 90일치 조회해서 사용한다 (`wordRecordService.ts:47-58`).

---

## 3. 계산은 어떻게 이뤄지는가

### 3-1. SM-2 본 계산 — `calculateSM2`

파일: [functions/src/algorithms/sm2.ts](../../functions/src/algorithms/sm2.ts)

```typescript
export interface SM2State {
  repetitions: number
  efactor: number
  interval: number
  nextReviewDate: Date
}

export function calculateSM2(quality: number, state: SM2State): SM2State {
  const { repetitions, efactor, interval } = state
  let nextRep: number
  let nextInterval: number

  if (quality >= 3) {
    if (repetitions === 0) nextInterval = 1
    else if (repetitions === 1) nextInterval = 6
    else nextInterval = Math.round(interval * efactor)
    nextRep = repetitions + 1
  } else {
    nextRep = 0
    nextInterval = 1
  }

  let nextEF = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  nextEF = Math.max(1.3, parseFloat(nextEF.toFixed(2)))

  const nextReviewDate = new Date()
  nextReviewDate.setDate(nextReviewDate.getDate() + nextInterval)

  return { repetitions: nextRep, efactor: nextEF, interval: nextInterval, nextReviewDate }
}
```

**입력값 `quality`는 0~5 척도지만, AlgoVoca는 사용자에게 "알고있음 / 모름" 두 버튼만 제공한다.**
이 둘을 SM-2가 기대하는 척도로 옮기는 매핑이 [wordRecordService.ts:41](../../functions/src/services/wordRecordService.ts)에 있다.

| 사용자 응답 | 내부 quality (`0\|1`) | SM-2 quality | 의미 |
|---|---|---|---|
| 모름 | 0 | **1** | "틀렸고 정답을 봐도 생소함" — 실패 |
| 알고있음 | 1 | **4** | "기억은 났지만 약간 망설임" — 성공 |

`quality >= 3`을 성공/실패의 경계로 삼는 SM-2 규칙에 맞춰, 모름(0)→1(실패), 알고있음(1)→4(성공)로 변환한다.

#### (1) 복습 간격(`interval`) 계산 — "이번에 며칠 뒤에 다시 보여줄까"

- **성공(quality ≥ 3)**
  - 처음 맞힌 거라면(`repetitions === 0`) → 1일 뒤
  - 두 번째로 연속 맞혔다면(`repetitions === 1`) → 6일 뒤
  - 세 번째 이상 연속 성공 → `이전 interval × efactor`를 반올림한 값
    - 예: interval 6, efactor 2.6 → `round(6 × 2.6) = 16`일 뒤
  - `repetitions`는 +1
- **실패(quality < 3)**
  - `repetitions`를 0으로 초기화 (연속 기록이 끊김)
  - `interval`도 1일로 리셋 → 내일 다시 보여줌

이 규칙 덕분에 "잘 외운 단어일수록 점점 더 긴 간격으로, 못 외운 단어는 매일" 보여주는 간격 곡선이 만들어진다.

#### (2) 난이도 지수(`efactor`) 계산 — "이 단어가 나에게 얼마나 어려운가"

```
nextEF = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
nextEF = max(1.3, round(nextEF, 2))
```

이는 SM-2 원 알고리즘의 EF 공식을 그대로 사용한 것이다. `quality`가 클수록(쉽게 맞힐수록) `efactor`가
증가하고, 작을수록(어렵게 틀릴수록) 감소한다. `efactor`가 클수록 `interval × efactor` 계산에서
간격이 더 빨리 늘어나므로 — 결국 "쉬운 단어는 복습 주기가 빠르게 길어지고, 어려운 단어는 짧게 유지"되는
효과를 만든다. 1.3은 SM-2 표준에서 정한 하한선이며, 이보다 efactor가 낮아지면 간격이 거의 늘지 않는
수준까지 단어가 "어렵다"고 고정된다.

| 응답 | q | EF 변화 (초기 2.50 기준) |
|---|---|---|
| 알고있음 | 4 | +0.10 → 2.60 |
| 모름 | 1 | −0.32 → 2.18 |
| (모름 반복) | 1 | 2.18 → 1.86 → … → 1.30 (하한 고정) |

#### (3) 다음 복습일(`nextReviewDate`) 계산

단순히 "오늘 날짜 + `nextInterval`일"이다. 이 값이 그대로 추천 알고리즘의 필터 기준이 된다.

### 3-2. errorScore 계산 — `calculateErrorScore`

파일: [functions/src/algorithms/errorScore.ts](../../functions/src/algorithms/errorScore.ts)

SM-2의 `efactor`/`interval`은 "장기적으로 이 단어가 얼마나 어려운가"는 잘 보여주지만,
"최근 며칠간 갑자기 자주 틀리기 시작했다" 같은 단기 변화는 반영하지 못한다 (간격이 길어진 단어는
한동안 학습 기회 자체가 없기 때문). 그래서 별도로 "최근 오답률"과 "SM-2 장기 난이도"를 섞은
`errorScore`를 계산해 추천 점수에 보조적으로 사용한다.

```typescript
export function calculateErrorScore(efactor: number, recentAnswers: AnswerRecord[]): number {
  if (recentAnswers.length === 0) return 0.5  // 이력 없음 → 중립값

  const now = Date.now()
  let weightedErrors = 0
  let totalWeight = 0

  for (const answer of recentAnswers) {
    const daysAgo = (now - answer.answeredAt.toMillis()) / (1000 * 60 * 60 * 24)
    const weight = Math.exp(-0.1 * daysAgo)             // 최근일수록 가중치 ↑ (지수 감쇠)
    weightedErrors += weight * (1 - answer.quality)     // 오답(quality=0)이면 1, 정답이면 0
    totalWeight += weight
  }

  const recentErrorRate = weightedErrors / totalWeight       // 최근 90일 가중 오답률 (0~1)
  const difficultyScore = (2.5 - efactor) / 1.2              // efactor를 0(쉬움)~1(어려움)로 정규화

  return 0.6 * recentErrorRate + 0.4 * difficultyScore       // 60:40 가중 합
}
```

- **가중 오답률**: 최근 90일간의 `answers/` 로그를 시간 가중 평균한다. `λ=0.1`이라 7일 전 답변은
  현재 가중치의 약 50%, 30일 전은 약 5%로 빠르게 줄어든다. → "최근에 더 자주 틀렸다"가 점수에 강하게 반영됨.
- **장기 난이도**: SM-2가 누적해온 `efactor`(1.3=가장 어려움 ~ 2.5=초기/평이함)를 0~1로 환산한다.
- 두 값을 0.6 : 0.4로 섞어, "최근 추세 위주로 보되 장기 데이터로 보정"하는 식으로 최종 점수를 만든다.
- 학습 이력이 아예 없으면 0.5(중립)를 반환해 "모르지도 알지도 않은 상태"로 취급한다.

---

## 4. 전체 흐름 — 코드 상에서 실제로 어떻게 연결되는가

```
[1] 사용자가 플래시카드에서 "알고있음(1)" / "모름(0)" 클릭
        ↓
[2] ResultPage.tsx — 세션 종료 시 1회 실행
    saveStudySession(...) → answerFn({ sessionId, answers })
        ↓
[3] Cloud Function `answer` (functions/src/api/answer.ts)
    answers 배열의 각 wordId에 대해 processAnswer(uid, wordId, quality, sessionId) 병렬 호출
        ↓
[4] processAnswer (functions/src/services/wordRecordService.ts:14-76)
    ① wordRecords/{wordId} 조회
       - 있으면 저장된 repetitions/efactor/interval/nextReviewDate를 그대로 사용
       - 없으면 DEFAULT_SM2 = { repetitions: 0, efactor: 2.5, interval: 0 } 사용
    ② quality(0|1) → SM-2 quality(1|4) 매핑
    ③ calculateSM2(sm2Quality, sm2Input) 호출 → 새 SM-2 상태 산출
    ④ answers/ 서브컬렉션에 이번 응답 원본 기록 추가
    ⑤ 최근 90일치 answers/ 조회
    ⑥ calculateErrorScore(새 efactor, 최근 90일 답변) 호출 → errorScore 산출
    ⑦ wordRecords/{wordId} 문서를 새 SM-2 값 + errorScore + 누적 카운트로 upsert (merge)
        ↓
[5] 다음 추천 요청 시
    - getEligibleWords: nextReviewDate <= 오늘 인 단어만 후보로
    - scoreWords: importance(0.4) + relevance(0.4) + errorScore 기반 가중치(0.2)로 정렬
        ↓
[6] 학습 통계 화면(StatsPage)
    - 저장된 nextReviewDate, interval을 그대로 읽어 "복습 대기 단어", "잘 기억하는 단어" 등을 표시
```

### 한 단어를 둘러싼 데이터의 한살이 요약

1. **처음 학습** → `wordRecord` 없음 → `DEFAULT_SM2`(efactor 2.5, interval 0, repetitions 0)로 시작
2. **응답마다** → `calculateSM2`로 `repetitions`/`efactor`/`interval`/`nextReviewDate` 갱신,
   `answers/`에 원본 로그 적재, `errorScore` 재계산, `wordRecord` 전체를 upsert
3. **추천 시점** → `nextReviewDate`로 "오늘 볼 단어"를 거르고, `efactor`/`errorScore`로 "얼마나 우선순위를 둘지"를 정함
4. **통계 화면** → 저장된 값을 그대로 사람이 읽을 수 있는 형태(주기, 복습 대기 여부)로 변환해 노출

---

## 5. 함께 보면 좋은 문서

- [sm2-algorithm.md](sm2-algorithm.md) — 설계 당시의 의사결정 배경, 엣지케이스, UX 흐름(세션 내 재학습 큐 등)
- [recommendation-algorithm.md](recommendation-algorithm.md) — `errorScore`/`efactor`가 추천 점수에 결합되는 전체 로직
- [firestore-schema.md](firestore-schema.md) — `wordRecords`, `answers` 컬렉션의 전체 스키마
