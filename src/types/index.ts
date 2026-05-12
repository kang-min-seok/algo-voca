export type UserId = string
export type WordId = string

export interface Word {
  id: WordId
  term: string
  definition: string
  category: string
  importance: number
}

export interface UserProfile {
  uid: UserId
  jobRole: string
  interests: string[]
  createdAt: Date
}
