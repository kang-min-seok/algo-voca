import type { Word } from '@/types'
import { STUDY_WORD_COUNT } from '@/constants'

const MOCK_WORDS: Word[] = [
  {
    id: "w_001",
    term: "state",
    definition: "상태 (컴포넌트나 애플리케이션의 메모리에 저장된 데이터)",
    example: "The component's state updates whenever the user clicks the button.",
    exampleTranslation: "사용자가 버튼을 클릭할 때마다 컴포넌트의 상태가 업데이트됩니다.",
    importanceByRole: { frontend: 10, backend: 7, devops: 4, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_002",
    term: "immutable",
    definition: "불변의 (생성 후 변경할 수 없는)",
    example: "In functional programming, strings and objects are often immutable.",
    exampleTranslation: "함수형 프로그래밍에서 문자열과 객체는 종종 불변성을 가집니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_003",
    term: "asynchronous",
    definition: "비동기식의 (작업이 독립적으로 실행되어 완료를 기다리지 않는)",
    example: "Use asynchronous functions to fetch data from the API without blocking the UI.",
    exampleTranslation: "UI를 차단하지 않고 API에서 데이터를 가져오려면 비동기 함수를 사용하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 6, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_004",
    term: "idempotent",
    definition: "멱등성의 (여러 번 수행해도 결과가 같은)",
    example: "The HTTP GET and PUT methods are designed to be idempotent.",
    exampleTranslation: "HTTP GET과 PUT 메서드는 멱등성을 갖도록 설계되었습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_005",
    term: "hydrate",
    definition: "하이드레이션 (정적 HTML에 자바스크립트 이벤트 리스너를 결합하는 과정)",
    example: "Next.js will hydrate the static HTML on the client side.",
    exampleTranslation: "Next.js는 클라이언트 측에서 정적 HTML에 하이드레이션을 수행합니다.",
    importanceByRole: { frontend: 10, backend: 4, devops: 4, fullstack: 8, other: 5 },
    sources: []
  },
  {
    id: "w_006",
    term: "concurrency",
    definition: "동시성 (여러 작업이 겹치는 기간에 실행되는 성질)",
    example: "Go handles high concurrency efficiently using goroutines.",
    exampleTranslation: "Go 언어는 고루틴을 사용하여 높은 동시성을 효율적으로 처리합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_007",
    term: "orchestration",
    definition: "오케스트레이션 (복잡한 컴퓨터 시스템, 서비스, 컨테이너의 자동화된 배치 및 관리)",
    example: "Kubernetes is widely used for container orchestration.",
    exampleTranslation: "쿠버네티스는 컨테이너 오케스트레이션을 위해 널리 사용됩니다.",
    importanceByRole: { frontend: 3, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_008",
    term: "deprecate",
    definition: "중요도를 떨어뜨리다 (향후 삭제될 예정이므로 사용을 권장하지 않음)",
    example: "This package will be deprecated in the next major release.",
    exampleTranslation: "이 패키지는 다음 메이저 릴리즈에서 사용이 중단될 예정입니다.",
    importanceByRole: { frontend: 8, backend: 8, devops: 8, fullstack: 8, other: 8 },
    sources: []
  },
  {
    id: "w_009",
    term: "optimize",
    definition: "최적화하다 (최대한 효율적으로 만들다)",
    example: "We need to optimize our database queries to reduce latency.",
    exampleTranslation: "지연 시간을 줄이기 위해 데이터베이스 쿼리를 최적화해야 합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_010",
    term: "reconcile",
    definition: "조화시키다 / 비교 분석하다 (React에서 가상 DOM과 실제 DOM을 비교하는 과정)",
    example: "React uses a diffing algorithm to reconcile the virtual DOM with the real DOM.",
    exampleTranslation: "React는 가상 DOM과 실제 DOM을 비교 분석하기 위해 디핑(diffing) 알고리즘을 사용합니다.",
    importanceByRole: { frontend: 10, backend: 4, devops: 3, fullstack: 7, other: 5 },
    sources: []
  },
]

export async function getRecommendedWords(_uid: string): Promise<Word[]> {
  // TODO: replace with Firebase Functions call when backend is ready
  return MOCK_WORDS.slice(0, STUDY_WORD_COUNT)
}
