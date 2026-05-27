# AlgoVoca 개발 계획

> 설계 문서(`docs/design/`) 및 현재 구현 코드를 분석하여 작성한 실행 계획.

---

## 현재 구현 상태 요약

### 완료된 것

| 영역 | 내용 |
|------|------|
| 인증 | 이메일/비밀번호 + GitHub OAuth, Firestore 프로필 저장 |
| 라우팅 | 모든 페이지 라우팅 + ProtectedRoute |
| 플래시카드 UI | FlashCard, StudyPage, ResultPage, 학습 내역 |
| 세션 저장 | `studySessions/` Firestore 저장/조회 |
| 단어 데이터 | `src/data/` TS 파일 (~175개), Firestore 시드 스크립트 |
| 타입 정의 | `Word`, `WordRecord`, `StudySession`, `UserProfile` |

### 미구현된 것

| 영역 | 내용 |
|------|------|
| Firebase Functions | 프로젝트 자체가 없음 (`functions/` 디렉토리 부재) |
| 단어 추천 | `wordService.ts`가 목 데이터 10개 반환 중 |
| SM-2 연동 | 학습 완료 후 wordRecord 업데이트 안 됨 |
| 답변 이력 | `answers/` 서브컬렉션 저장 안 됨 |
| 세션 내 재학습 | 틀린 단어 다시 보여주는 Queue 미구현 |
| Pinecone 연동 | 벡터 검색 전혀 없음 |

### 구현 완성도

```
프론트엔드 UI/UX  ████████░░  80%
인증              ██████████  100%
Firestore 연동    ███░░░░░░░  30%  (세션 저장만)
Firebase Functions ░░░░░░░░░░   0%
Pinecone 연동     ░░░░░░░░░░   0%
추천 알고리즘     ░░░░░░░░░░   0%  (목 데이터)
```

---

## Phase 1 — 타입 & 데이터 레이어 정비

**목표**: 설계와 코드 간 불일치 해소, 이후 작업의 기반 확립

### 1-1. `types/index.ts` 보완

설계(`firestore-schema.md`)와 현재 타입 간 누락 필드 추가.

```typescript
// 추가할 필드
interface WordRecord {
  // 기존 필드 유지 ...
  errorScore: number        // 설계에 있으나 현재 없음
}

// 새로 추가할 타입
interface AnswerDocument {
  answeredAt: Date
  quality: 0 | 1
  sessionId: string
}
```

### 1-2. `studySessionService.ts` 보완

현재 `saveStudySession`에서 `sm2Quality`와 `recommendedWordIds`가 저장 안 됨.

```typescript
// 저장 payload에 추가
{
  recommendedWordIds: wordIds,   // 누락
  answers: enrichedAnswers.map(a => ({
    ...a,
    sm2Quality: a.quality === 1 ? 4 : 1,  // 누락
  }))
}
```

---

## Phase 2 — Firebase Functions 구축

**목표**: 추천 엔진과 SM-2 처리를 담당하는 서버리스 백엔드 구현

### 2-1. Functions 프로젝트 초기화

```bash
firebase init functions   # TypeScript 선택
```

디렉토리 구조:

```
functions/src/
  algorithms/
    sm2.ts               ← calculateSM2()
    errorScore.ts        ← calculateErrorScore()
    recommendation.ts    ← 추천 점수 계산
  services/
    wordRecordService.ts ← wordRecord + answers/ CRUD
    wordService.ts       ← words/ 조회
    pineconeService.ts   ← Pinecone 쿼리
  api/
    recommend.ts         ← GET /words/recommend
    answer.ts            ← POST /words/answer
  constants/
    roleEmbeddings.ts    ← 직군별 3072차원 벡터 상수
  index.ts               ← Functions 진입점
```

### 2-2. `POST /words/answer` 구현

학습 완료 후 호출. SM-2 갱신 + 답변 이력 저장 + errorScore 재계산.

```
입력: { uid, sessionId, answers: [{wordId, quality}] }

각 답변에 대해:
  1. wordRecords/{wordId} 조회 (없으면 DEFAULT_WORD_RECORD)
  2. calculateSM2(sm2Quality, record) → 새 SM-2 상태
  3. answers/{autoId} 저장 → { answeredAt, quality, sessionId }
  4. 최근 90일 answers/ 조회 → calculateErrorScore() → errorScore
  5. wordRecord upsert → { SM-2 상태, errorScore, totalAnswers, correctAnswers }
```

### 2-3. `GET /words/recommend` 구현

추천 점수 = 중요도(0.4) + errorScore(0.3) + Pinecone 연관성(0.3)

```
입력: ?uid={userId}

1. users/{uid} → jobRole
2. words/ 전체 조회 → Map<wordId, Word>
3. users/{uid}/wordRecords/ 전체 조회 → Map<wordId, WordRecord>
4. Pinecone query(ROLE_EMBEDDINGS[jobRole], topK=전체) → Map<wordId, score>
5. 전체 단어 채점:
   importance = importanceByRole[jobRole] / 10
   errorScore = wordRecord?.errorScore ?? 0.5
   relevance  = pineconeScore ?? 0
   score = 0.4×importance + 0.3×errorScore + 0.3×relevance
6. 정렬 → overdue 최소 3개 보장 → 상위 10개 반환
```

### 2-4. `calculateErrorScore()` 구현

`sm2-algorithm.md` 설계 기반.

```typescript
// 최근 90일 답변 이력 + SM-2 efactor 혼합
errorScore = 0.6 × recentErrorRate   // 지수 감쇠 가중치 오답률
           + 0.4 × difficultyScore   // (2.5 - efactor) / 1.2
```

### 2-5. Pinecone 연동

`crawling/embed_to_pinecone.py`로 이미 벡터 업로드 코드 존재. Functions에서 호출하는 클라이언트만 구현.

```typescript
// pineconeService.ts
const index = pinecone.index('algvoca-words')
const result = await index.query({
  vector: ROLE_EMBEDDINGS[jobRole],
  topK: 10000,
  includeMetadata: false,
})
```

---

## Phase 3 — 프론트엔드 Firebase Functions 연동

**목표**: 목 데이터 제거, 실제 추천·학습 이력 연동

### 3-1. `wordService.ts` 교체

```typescript
// 목 데이터 → Firebase Functions 호출
export async function getRecommendedWords(uid: string): Promise<Word[]> {
  const fn = httpsCallable(functions, 'recommend')
  const result = await fn({ uid })
  return result.data as Word[]
}
```

### 3-2. `StudyPage.tsx` / `ResultPage.tsx` 연동

학습 완료 시 `POST /words/answer` 호출 추가.

```typescript
// 현재: saveStudySession()만 호출
// 추가: answer Function 호출
const answerFn = httpsCallable(functions, 'answer')
await answerFn({ uid, sessionId, answers })
await saveStudySession(uid, answers, words, sessionId)
```

### 3-3. 세션 내 재학습(Queue) 구현

`useStudySession.ts` 수정. 틀린 단어를 세션 끝에 재추가.

```typescript
// 설계(sm2-algorithm.md): 틀린 단어는 세션 내 재시도
// 현재: 단순 index++ 방식 → Queue 방식으로 변경

const handleAnswer = (quality: 0 | 1) => {
  if (quality === 0) {
    setQueue(prev => [...prev, currentWord])  // 틀리면 뒤에 재추가
  }
  setAnswers(prev => ({ ...prev, [currentWord.id]: quality }))  // 최종 결과만 보관
  advanceQueue()
}
```

---

## Phase 4 — 단어 데이터 파이프라인

**목표**: 실제 서비스용 단어 DB 구축 (크롤링 → 중요도 → Firestore + Pinecone)

### 현재 크롤링 코드 상태

`crawling/` 디렉토리에 코드 존재:
- `crawler.py` — 공식문서 크롤러
- `LastCode_R.py` — 최신 크롤러 (필터링 포함)
- `embed_to_pinecone.py` — 벡터 업로드
- `embed_single_word.py` — 단어 단위 임베딩

### 파이프라인 순서

```
1. LastCode_R.py 실행
   → word_freq_by_source.json (소스별 빈도)

2. 중요도 계산 (word-importance.md 설계)
   → 빈도 60% + Gemini LLM 40%
   → word_importance.json

3. 단어 enrichment (word-enrichment.md 설계)
   → Gemini API로 definition, example, exampleTranslation, roles 생성
   → enriched_words.json

4. Firestore 업로드
   → scripts/seedWords.ts 실행 (이미 구현됨)

5. Pinecone 벡터 업로드
   → embed_to_pinecone.py 실행

6. 직군별 임베딩 상수 계산
   → calc_role_embeddings.py 실행
   → functions/src/constants/roleEmbeddings.ts 출력
```

---

## 작업 우선순위

```
Phase 1  타입 & 서비스 정비       ░░ 1~2일   ← 지금 당장
Phase 2  Firebase Functions      ░░ 3~5일   ← 핵심
Phase 3  프론트엔드 연동           ░░ 1~2일
Phase 4  단어 데이터 파이프라인    ░░ 병렬 진행 가능
```

Phase 2가 가장 크고 핵심적인 작업. Phase 4(데이터)는 Phase 2 개발 중 병렬로 진행 가능.

---

## 파일별 작업 목록

| 파일 | 작업 | Phase |
|------|------|-------|
| `src/types/index.ts` | `WordRecord.errorScore` 추가, `AnswerDocument` 추가 | 1 |
| `src/services/studySessionService.ts` | `sm2Quality`, `recommendedWordIds` 저장 추가 | 1 |
| `functions/` | 프로젝트 초기화 | 2 |
| `functions/src/algorithms/sm2.ts` | `calculateSM2()` | 2 |
| `functions/src/algorithms/errorScore.ts` | `calculateErrorScore()` | 2 |
| `functions/src/algorithms/recommendation.ts` | 추천 점수 계산 | 2 |
| `functions/src/services/wordRecordService.ts` | wordRecord + answers CRUD | 2 |
| `functions/src/services/pineconeService.ts` | Pinecone 클라이언트 | 2 |
| `functions/src/api/answer.ts` | POST /words/answer | 2 |
| `functions/src/api/recommend.ts` | GET /words/recommend | 2 |
| `functions/src/constants/roleEmbeddings.ts` | 직군 임베딩 벡터 상수 | 2 |
| `src/services/wordService.ts` | Functions 호출로 교체 | 3 |
| `src/features/flashcard/useStudySession.ts` | Queue 재학습 구현 | 3 |
| `src/features/flashcard/ResultPage.tsx` | answer Function 호출 추가 | 3 |
| `crawling/calc_role_embeddings.py` | 직군 임베딩 계산 스크립트 | 4 |
