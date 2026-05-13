import type { Word } from '@/types'
import { STUDY_WORD_COUNT } from '@/constants'

const MOCK_WORDS: Word[] = [
  {
    id: '1',
    term: 'abstraction',
    definition: '추상화',
    example: 'Abstraction hides complexity and exposes only essential features.',
    category: 'programming',
    importance: 5,
  },
  {
    id: '2',
    term: 'idempotent',
    definition: '멱등성',
    example: 'A DELETE request should be idempotent — calling it twice has the same effect.',
    category: 'backend',
    importance: 4,
  },
  {
    id: '3',
    term: 'debounce',
    definition: '디바운스',
    example: 'Debounce the search input so it only fires after the user stops typing.',
    category: 'frontend',
    importance: 4,
  },
  {
    id: '4',
    term: 'reconciliation',
    definition: '재조정 (리액트)',
    example: "React's reconciliation algorithm determines the minimum DOM updates needed.",
    category: 'frontend',
    importance: 4,
  },
  {
    id: '5',
    term: 'memoization',
    definition: '메모이제이션',
    example: 'Memoization caches the result of expensive function calls.',
    category: 'programming',
    importance: 4,
  },
  {
    id: '6',
    term: 'sharding',
    definition: '샤딩',
    example: 'Database sharding splits data across multiple servers to scale horizontally.',
    category: 'backend',
    importance: 3,
  },
  {
    id: '7',
    term: 'hydration',
    definition: '하이드레이션',
    example: 'Hydration attaches event listeners to server-rendered HTML on the client.',
    category: 'frontend',
    importance: 4,
  },
  {
    id: '8',
    term: 'throughput',
    definition: '처리량',
    example: 'We need to increase throughput by optimizing the database queries.',
    category: 'backend',
    importance: 3,
  },
  {
    id: '9',
    term: 'canary deployment',
    definition: '카나리 배포',
    example: 'We use canary deployment to roll out features to 5% of users first.',
    category: 'devops',
    importance: 4,
  },
  {
    id: '10',
    term: 'eventual consistency',
    definition: '최종 일관성',
    example: 'Distributed systems often rely on eventual consistency rather than strong consistency.',
    category: 'backend',
    importance: 4,
  },
]

export async function getRecommendedWords(_uid: string): Promise<Word[]> {
  // TODO: replace with Firebase Functions call when backend is ready
  return MOCK_WORDS.slice(0, STUDY_WORD_COUNT)
}
