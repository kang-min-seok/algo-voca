# Firestore 스키마 및 유저 데이터 관리 설계

## 개요

단어 DB는 Firestore(`words/`)에, 임베딩 벡터는 Pinecone에 분리 저장한다.
유저별 학습 이력은 `users/{uid}/wordRecords/{wordId}/answers/` 서브컬렉션에 답변 단위로 전부 저장한다.
추천 점수 중 오답률은 이 이력으로부터 계산하며, 세션 완료 시 `wordRecords`에 `errorScore`로 사전계산해 둔다.
단어 추천과 SM-2 갱신은 Firebase Functions에서 처리한다.

---

## 1. 컬렉션 구조 전체 개요

```
Firestore
├── words/                              # 전체 단어 DB (모든 유저 공유)
│   └── {wordId}/
│       ├── term: string
│       ├── definition: string
│       ├── example: string
│       ├── exampleTranslation: string
│       ├── importanceByRole: object    # 직군별 중요도 (1~10)
│       ├── sources: string[]
│       └── createdAt: Timestamp
│
└── users/                              # 유저 프로필 및 학습 데이터
    └── {uid}/
        ├── uid: string
        ├── email: string
        ├── jobRole: string
        ├── createdAt: Timestamp
        │
        ├── wordRecords/                # 단어별 SM-2 상태 + 사전계산 점수
        │   └── {wordId}/
        │       ├── wordId: string
        │       ├── repetitions: number
        │       ├── efactor: number
        │       ├── interval: number
        │       ├── nextReviewDate: Timestamp
        │       ├── lastAnsweredAt: Timestamp
        │       ├── errorScore: number  # 0~1, 추천 시 직접 사용 (세션 완료 시 갱신)
        │       ├── totalAnswers: number
        │       ├── correctAnswers: number
        │       │
        │       └── answers/            # 단어별 전체 답변 이력
        │           └── {answerId}/
        │               ├── answeredAt: Timestamp
        │               ├── quality: 0 | 1   # 사용자 응답 (0=모름, 1=알고있음)
        │               └── sessionId: string
        │
        └── studySessions/              # 학습 세션 이력
            └── {sessionId}/
                ├── completedAt: Timestamp
                ├── totalWords: number
                ├── knownWords: number
                ├── unknownWords: number
                ├── percent: number
                ├── recommendedWordIds: string[]
                └── answers: Answer[]

Pinecone (별도)
└── algvoca-words (index)
    └── {wordId} (vector)
        ├── values: number[3072]
        └── metadata: { term: string, importance_* }
```

---

## 2. 단어 컬렉션 (`words/`)

### TypeScript 타입 정의

```typescript
interface WordDocument {
  term: string;
  definition: string;
  example: string;
  exampleTranslation: string;
  importanceByRole: {
    frontend:  number;   // 1~10
    backend:   number;
    devops:    number;
    fullstack: number;
    other:     number;
  };
  sources: string[];
  createdAt: Timestamp;
}
```

---

## 3. 유저 컬렉션 (`users/`)

### UserDocument

```typescript
interface UserDocument {
  uid: string;
  email: string;
  jobRole: 'frontend' | 'backend' | 'devops' | 'fullstack' | 'other';
  createdAt: Timestamp;
}
```

### WordRecordDocument (서브컬렉션)

문서 ID = wordId

```typescript
interface WordRecordDocument {
  wordId: string;

  // SM-2 상태
  repetitions: number;       // 연속 성공 횟수 (초기값: 0)
  efactor: number;           // 난이도 지수 (초기값: 2.5, 최솟값: 1.3)
  interval: number;          // 복습 간격 일수 (초기값: 0)
  nextReviewDate: Timestamp; // 다음 복습일
  lastAnsweredAt: Timestamp; // 마지막 학습일

  // 추천 엔진이 읽는 사전계산 점수 (세션 완료 시 갱신)
  errorScore: number;        // 0~1, 높을수록 어렵고 잘 틀리는 단어

  // 통계 (대시보드용)
  totalAnswers: number;
  correctAnswers: number;
}

const DEFAULT_WORD_RECORD = {
  repetitions: 0,
  efactor: 2.5,
  interval: 0,
  nextReviewDate: new Date(),
  errorScore: 0.5,           // 미학습 단어 기본값: 중간
  totalAnswers: 0,
  correctAnswers: 0,
};
```

### AnswerDocument (wordRecords 하위 서브컬렉션)

문서 ID = Firestore 자동 생성 ID  
경로: `users/{uid}/wordRecords/{wordId}/answers/{answerId}`

```typescript
interface AnswerDocument {
  answeredAt: Timestamp;   // 답변 시각
  quality: 0 | 1;          // 사용자 응답 (0=모름, 1=알고있음)
  sessionId: string;        // 어떤 세션에서 답변했는지
}
```

### StudySessionDocument (서브컬렉션)

```typescript
interface StudySessionDocument {
  completedAt: Timestamp;
  totalWords: number;
  knownWords: number;
  unknownWords: number;
  percent: number;
  recommendedWordIds: string[];
  answers: {
    wordId: string;
    quality: 0 | 1;
    sm2Quality: 1 | 4;
    term: string;        // 스냅샷
    definition: string;  // 스냅샷
  }[];
}
```

---

## 4. 단어 추천 흐름 상세

### 4-1. Firebase Function: `recommend`

```
GET /words/recommend?uid={userId}
```

```
1. Firestore에서 users/{uid} 조회 → jobRole 획득

2. Firestore words/ 전체 조회
   → Map<wordId, Word>

3. Firestore users/{uid}/wordRecords/ 전체 조회
   → Map<wordId, WordRecord>
   (errorScore가 이미 사전계산되어 있음 → 추가 서브컬렉션 조회 불필요)

4. Pinecone 쿼리: 직군 임베딩 벡터로 전체 단어 연관성 점수 획득
   index.query({
     vector: ROLE_EMBEDDINGS[jobRole],
     topK: 전체 단어 수 (최대 10,000),
     includeMetadata: false
   })
   → Map<wordId, relevanceScore>
   ※ Pinecone에 없는 단어는 relevanceScore = 0

5. 전체 단어 대상 추천 점수 계산
   importance    = importanceByRole[jobRole] / 10         // 1~10 → 0~1
   errorScore    = wordRecord?.errorScore ?? 0.5          // 미학습: 기본값 0.5
   relevance     = pineconeScore                          // 0~1

   score = 0.4 × importance
         + 0.3 × errorScore
         + 0.3 × relevance

6. 점수 순 정렬 후 상위 10개 선택
   ※ 복습 기한 초과(overdue) 단어 최소 3개 보장 (4-2 참고)

7. 선택된 wordId로 words/ 전체 데이터 반환
```

### 4-2. 복습 대상 최소 보장 로직

```typescript
function selectRecommendedWords(scored: ScoredWord[], today: Date): Word[] {
  const overdue = scored.filter(w => w.wordRecord?.nextReviewDate <= today);
  const others  = scored.filter(w => !overdue.includes(w));

  const forcedOverdue = overdue.slice(0, 3);
  const remaining = [...overdue.slice(3), ...others]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10 - forcedOverdue.length);

  return [...forcedOverdue, ...remaining];
}
```

### 4-3. 직군 대표 임베딩 사전 계산

```python
# crawling/calc_role_embeddings.py
ROLE_QUERIES = {
    "frontend":  "React Next.js UI component CSS JavaScript TypeScript frontend web development",
    "backend":   "API server database Node.js REST microservice authentication backend",
    "devops":    "Docker Kubernetes Terraform CI/CD deployment infrastructure cloud orchestration",
    "fullstack": "React Node.js Docker REST API deployment full-stack web application",
    "other":     "software engineering programming algorithm data structure",
}
# → functions/src/constants/roleEmbeddings.ts 로 출력
```

---

## 5. 학습 완료 처리 흐름

### Firebase Function: `answer`

```
POST /words/answer
Body: { uid: string, sessionId: string, answers: [{wordId, quality}][] }
```

```
1. answers 배열 순회 — 각 {wordId, quality}에 대해:

   a. wordRecords/{wordId} 조회
      (없으면 DEFAULT_WORD_RECORD 사용)

   b. SM-2 업데이트
      sm2Quality = quality === 1 ? 4 : 1
      calculateSM2(sm2Quality, currentRecord) → 새 SM-2 상태

   c. answers/{autoId} 에 이력 저장
      { answeredAt: now(), quality, sessionId }

   d. 최근 90일 이내 answers/ 조회 → errorScore 재계산
      (sm2-algorithm.md 참고)

   e. wordRecord upsert
      { ...newSM2State, errorScore, lastAnsweredAt: now(),
        totalAnswers: +1, correctAnswers: quality === 1 ? +1 : 0 }

2. studySessions/{sessionId} 기록 저장
```

### errorScore 갱신 시점

| 시점 | 동작 |
|------|------|
| 세션 완료 (POST /words/answer) | 모든 학습 단어의 errorScore 재계산 후 저장 |
| 추천 요청 (GET /words/recommend) | wordRecords에서 저장된 값 그대로 읽기 (재계산 없음) |

---

## 6. Firestore 보안 규칙

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /words/{wordId} {
      allow read: if request.auth != null;
      allow write: if false;
    }

    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;

      match /wordRecords/{wordId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;

        match /answers/{answerId} {
          allow read, write: if request.auth != null && request.auth.uid == userId;
        }
      }

      match /studySessions/{sessionId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

---

## 7. Firestore 인덱스 설계

| 컬렉션 | 필드 | 용도 |
|--------|------|------|
| `wordRecords` | `nextReviewDate ASC` | 복습 대상 조회 |
| `studySessions` | `completedAt DESC` | 학습 이력 최신순 |
| `answers` | `answeredAt DESC` | 최근 90일 이력 조회 |

---

## 8. 데이터 규모 추정

| 컬렉션 | 예상 문서 수 | 문서당 크기 |
|--------|-------------|------------|
| `words/` | 5,000 ~ 10,000 | ~500 bytes |
| `users/{uid}` | 유저 수 | ~200 bytes |
| `wordRecords/` | 유저당 최대 단어 수 | ~200 bytes |
| `answers/` | 유저 × 단어 × 학습 횟수 | ~100 bytes |
| `studySessions/` | 유저당 세션 수 | ~3KB |

Firestore 무료 티어 (50,000 읽기/일, 20,000 쓰기/일)로 충분히 운영 가능한 규모.

---

## 9. 구현 파일 위치

```
functions/src/
  algorithms/
    sm2.ts               ← calculateSM2
    errorScore.ts        ← calculateErrorScore (이력 기반 오답 점수)
    recommendation.ts    ← 추천 점수 계산, 후보 선택
  services/
    wordRecordService.ts ← wordRecord + answers CRUD
    wordService.ts       ← words 컬렉션 조회
    pineconeService.ts   ← Pinecone 쿼리
  api/
    recommend.ts         ← GET /words/recommend
    answer.ts            ← POST /words/answer
  constants/
    roleEmbeddings.ts    ← 직군별 임베딩 벡터 상수
```
