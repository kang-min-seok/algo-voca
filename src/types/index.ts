export type UserId = string
export type WordId = string

export type JobRole = 'frontend' | 'backend' | 'devops' | 'fullstack' | 'other'

export const WORD_SOURCE = {
  DOCKER:     'docker',
  KUBERNETES: 'kubernetes',
  TERRAFORM:  'terraform',
  FLUTTER:    'flutter',
  REACT:      'react',
  NEXTJS:     'nextjs',
  TAILWIND:   'tailwind',
} as const

export type WordSource = typeof WORD_SOURCE[keyof typeof WORD_SOURCE]

// 1~10
export interface ImportanceByRole {
  frontend: number
  backend: number
  devops: number
  fullstack: number
  other: number
}

export interface Word {
  id: WordId
  term: string
  definition: string
  example: string
  exampleTranslation: string // example의 한국어 해석
  importanceByRole: ImportanceByRole
  sources: WordSource[] // 어떤 공식문서에서 크롤링 해왔는가
}

export interface UserProfile {
  uid: UserId
  email: string
  jobRole: JobRole
  createdAt: Date
}

// SM-2 알고리즘 학습 이력 (Firestore: users/{uid}/wordRecords/{wordId})
export interface WordRecord {
  wordId: WordId
  repetitions: number     // 연속 성공 횟수 (초기값: 0)
  efactor: number         // 난이도 지수 (초기값: 2.5, 최솟값: 1.3)
  interval: number        // 복습 간격 일수 (초기값: 0)
  nextReviewDate: Date    // 다음 복습일 (초기값: 오늘)
  lastAnsweredAt: Date
  errorScore: number      // 0~1, 추천 엔진용 사전계산 오답 점수 (세션 완료 시 갱신)
  totalAnswers: number
  correctAnswers: number
}

// 단어별 답변 이력 (Firestore: users/{uid}/wordRecords/{wordId}/answers/{answerId})
export interface AnswerDocument {
  answeredAt: Date
  quality: 0 | 1          // 0: 모름, 1: 알고있음
  sessionId: string
}

export interface StudyAnswer {
  wordId: WordId
  quality: 0 | 1          // 0: 모름, 1: 알고있음
}

export interface StudyResult {
  answers: StudyAnswer[]
  words: Word[]
}

export interface StudySessionAnswer {
  wordId: WordId
  quality: 0 | 1
  sm2Quality: 1 | 4       // SM-2 계산에 사용된 품질값 (0→1, 1→4)
  term: string
  definition: string
}

export interface StudySession {
  id: string
  completedAt: Date
  totalWords: number
  knownWords: number
  unknownWords: number
  percent: number
  recommendedWordIds: string[]
  answers: StudySessionAnswer[]
}
