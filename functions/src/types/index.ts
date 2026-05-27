export type JobRole = 'frontend' | 'backend' | 'devops' | 'fullstack' | 'other'
export type WordId = string
export type UserId = string

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
  exampleTranslation: string
  importanceByRole: ImportanceByRole
  sources: string[]
}

export interface WordRecord {
  wordId: WordId
  repetitions: number
  efactor: number
  interval: number
  nextReviewDate: Date
  lastAnsweredAt: Date
  errorScore: number
  totalAnswers: number
  correctAnswers: number
}

export interface AnswerInput {
  wordId: WordId
  quality: 0 | 1
}

export interface AnswerCallData {
  sessionId: string
  answers: AnswerInput[]
}
