import type { JobRole } from '../types'

// Phase 4에서 crawling/calc_role_embeddings.py 실행 후 실제 벡터로 교체
// 현재는 플레이스홀더(영벡터) → pineconeService에서 쿼리를 건너뜀
const ZERO_VECTOR: number[] = new Array(3072).fill(0)

export const ROLE_EMBEDDINGS: Record<JobRole, number[]> = {
  frontend:  ZERO_VECTOR,
  backend:   ZERO_VECTOR,
  devops:    ZERO_VECTOR,
  fullstack: ZERO_VECTOR,
  other:     ZERO_VECTOR,
}
