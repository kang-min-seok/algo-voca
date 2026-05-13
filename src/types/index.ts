export type UserId = string
export type WordId = string

export type JobRole = 'frontend' | 'backend' | 'devops' | 'fullstack' | 'other'

export interface Word {
  id: WordId
  term: string
  definition: string
  example: string
  category: string
  importance: number
}

export interface UserProfile {
  uid: UserId
  jobRole: JobRole
  createdAt: Date
}

export interface StudyAnswer {
  wordId: WordId
  quality: 0 | 1
}

export interface StudyResult {
  answers: StudyAnswer[]
  words: Word[]
}
