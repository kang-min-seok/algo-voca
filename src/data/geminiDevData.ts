import type { Word } from '@/types';

export const DEV_WORDS_DATASET: Word[] = [
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
  {
    id: "w_011",
    term: "latency",
    definition: "지연 시간 (데이터가 전송되는 데 걸리는 지연 시간)",
    example: "CDN helps to minimize network latency for global users.",
    exampleTranslation: "CDN은 글로벌 사용자의 네트워크 지연 시간을 최소화하는 데 도움이 됩니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_012",
    term: "throttle",
    definition: "스토틀링 (이벤트를 일정 주기마다 한 번만 실행하도록 제한하는 것)",
    example: "Implement a throttle on the resize event handler to improve performance.",
    exampleTranslation: "성능을 향상시키기 위해 크기 조정(resize) 이벤트 핸들러에 스로틀링을 구현하세요.",
    importanceByRole: { frontend: 9, backend: 6, devops: 5, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_013",
    term: "debounce",
    definition: "디바운싱 (연이어 호출되는 함수들 중 마지막 혹은 처음 함수만 실행하도록 하는 것)",
    example: "We should debounce the search input to avoid making too many API calls.",
    exampleTranslation: "과도한 API 호출을 방지하기 위해 검색 입력창에 디바운싱을 적용해야 합니다.",
    importanceByRole: { frontend: 10, backend: 5, devops: 4, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_014",
    term: "serialize",
    definition: "직렬화하다 (객체 데이터를 전송 가능한 형태로 변환하다)",
    example: "You must serialize the object into a JSON string before sending it.",
    exampleTranslation: "객체를 전송하기 전에 JSON 문자열로 직렬화해야 합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_015",
    term: "telemetry",
    definition: "원격 측정 데이터 (시스템의 원격 진단 및 모니터링 데이터)",
    example: "OpenTelemetry collection is essential for modern cloud monitoring.",
    exampleTranslation: "클라우드 모니터링을 위해서는 OpenTelemetry 수집이 필수적입니다.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_016",
    term: "propagate",
    definition: "전파하다 (이벤트나 데이터가 상위/하위 요소로 퍼져나가는 것)",
    example: "Setting stopPropagation will prevent the event from bubbling up.",
    exampleTranslation: "stopPropagation을 설정하면 이벤트가 상위로 버블링되는 것을 막아줍니다.",
    importanceByRole: { frontend: 9, backend: 6, devops: 4, fullstack: 8, other: 5 },
    sources: []
  },
  {
    id: "w_017",
    term: "middleware",
    definition: "미들웨어 (요청과 응답 사이에 위치하여 특정 기능을 수행하는 소프트웨어)",
    example: "We added authentication middleware to protect our backend routes.",
    exampleTranslation: "백엔드 라우트를 보호하기 위해 인증 미들웨어를 추가했습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_018",
    term: "provision",
    definition: "프로비저닝하다 (인프라 인스턴스를 준비하고 설정하다)",
    example: "Terraform is used to provision cloud infrastructure automatically.",
    exampleTranslation: "테라폼은 클라우드 인프라를 자동으로 프로비저닝하는 데 사용됩니다.",
    importanceByRole: { frontend: 3, backend: 7, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_019",
    term: "manifest",
    definition: "매니페스트 (메타데이터나 설정 정보를 담고 있는 파일)",
    example: "The Kubernetes deployment configuration is written in a manifest file.",
    exampleTranslation: "쿠버네티스 배포 설정은 매니페스트 파일에 작성됩니다.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_020",
    term: "persistence",
    definition: "지속성 / 영속성 (데이터가 사라지지 않고 계속 유지되는 성질)",
    example: "A database provides data persistence even after a server restart.",
    exampleTranslation: "데이터베이스는 서버가 재시작된 후에도 데이터 영속성을 제공합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_021",
    term: "payload",
    definition: "페이로드 (전송되는 데이터의 실제 내용물)",
    example: "The JWT payload contains information about the authenticated user.",
    exampleTranslation: "JWT 페이로드에는 인증된 사용자에 대한 정보가 포함되어 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_022",
    term: "fallback",
    definition: "대체 솔루션 (실패 시 복구하기 위한 예비 수단)",
    example: "Provide a fallback image in case the main source fails to load.",
    exampleTranslation: "기본 소스를 로드하는 데 실패할 경우를 대비해 대체 이미지를 제공하세요.",
    importanceByRole: { frontend: 9, backend: 8, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_023",
    term: "override",
    definition: "오버라이드 / 재정의하다 (기존의 것을 덮어쓰다)",
    example: "You can override the default CSS styles by using a custom class.",
    exampleTranslation: "커스텀 클래스를 사용하여 기본 CSS 스타일을 재정의할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 7, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_024",
    term: "cors",
    definition: "교차 출처 리소스 공유 (다른 도메인의 리소스를 요청할 때 보안을 제어하는 체제)",
    example: "You need to configure CORS headers on the server to allow access from the frontend.",
    exampleTranslation: "프론트엔드에서의 접근을 허용하려면 서버에 CORS 헤더를 설정해야 합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 7, fullstack: 10, other: 6 },
    sources: []
  },
  {
    id: "w_025",
    term: "interceptor",
    definition: "인터셉터 (요청이나 응답을 가로채서 처리하는 기능)",
    example: "Axios interceptors are useful for injecting auth tokens into headers.",
    exampleTranslation: "Axios 인터셉터는 헤더에 인증 토큰을 주입하는 데 유용합니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 5, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_026",
    term: "stateless",
    definition: "무상태의 (이전 상태의 세션 데이터를 저장하지 않는)",
    example: "REST APIs are designed to be stateless to ensure scalability.",
    exampleTranslation: "REST API는 확장성을 보장하기 위해 무상태로 설계되었습니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_027",
    term: "granular",
    definition: "세밀한 / 알갱이 형태의 (상세하게 쪼개진 제어 수준)",
    example: "AWS Identity and Access Management allows for granular permission control.",
    exampleTranslation: "AWS IAM을 사용하면 세밀한 권한 제어가 가능합니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_028",
    term: "redundancy",
    definition: "중복성 / 이중화 (장애 대비를 위해 동일 기능을 복수 배치하는 것)",
    example: "Data redundancy in multiple regions ensures high availability.",
    exampleTranslation: "여러 리전에 데이터를 이중화하면 높은 가용성이 보장됩니다.",
    importanceByRole: { frontend: 4, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_029",
    term: "cohesive",
    definition: "응집력 있는 (모듈이나 컴포넌트의 내부 요소들이 서로 긴밀히 결합된 정도)",
    example: "A good module should be highly cohesive and loosely coupled.",
    exampleTranslation: "좋은 모듈은 응집도가 높고 결합도가 낮아야 합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_030",
    term: "migration",
    definition: "마이그레이션 (데이터나 시스템을 하나의 환경에서 다른 환경으로 이동하는 것)",
    example: "We ran a database migration to add a new column to the users table.",
    exampleTranslation: "유저 테이블에 새 컬럼을 추가하기 위해 데이터베이스 마이그레이션을 실행했습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_031",
    term: "prop",
    definition: "소품 / 프로퍼티 (상위 컴포넌트가 하위 컴포넌트로 전달하는 데이터)",
    example: "React components accept arbitrary inputs called props.",
    exampleTranslation: "React 컴포넌트는 props라고 불리는 임의의 입력을 받습니다.",
    importanceByRole: { frontend: 10, backend: 3, devops: 2, fullstack: 8, other: 5 },
    sources: []
  },
  {
    id: "w_032",
    term: "routing",
    definition: "라우팅 (네트워크 안에서 데이터를 전송할 경로를 선택하거나, URL에 따라 페이지를 전환하는 과정)",
    example: "Next.js uses a file-system based router to handle routing.",
    exampleTranslation: "Next.js는 라우팅을 처리하기 위해 파일 시스템 기반 라우터를 사용합니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 8, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_036",
    term: "deserialize",
    definition: "역직렬화하다 (직렬화된 데이터를 다시 원래의 객체나 구조로 복원하는 것)",
    example: "We need to deserialize the incoming byte stream back into an object.",
    exampleTranslation: "들어오는 바이트 스트림을 다시 객체로 역직렬화해야 합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 5, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_038",
    term: "parallelism",
    definition: "병렬성 (멀티코어 프로세서에서 여러 작업을 물리적으로 동시에 물리적인 시간대에 실행하는 것)",
    example: "Parallelism requires multiple CPU cores to run tasks at the exact same time.",
    exampleTranslation: "병렬성은 작업을 완전히 동일한 시간에 실행하기 위해 여러 CPU 코어가 필요합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 8, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_046",
    term: "throughput",
    definition: "처리량 (단위 시간당 컴퓨터 시스템이 처리할 수 있는 작업이나 데이터의 양)",
    example: "The system upgrade significantly increased the network throughput.",
    exampleTranslation: "시스템 업그레이드로 인해 네트워크 처리량이 크게 증가했습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_057",
    term: "scaffolding",
    definition: "스캐폴딩 (프로젝트의 뼈대나 기본 디렉토리 구조를 자동으로 생성해 주는 것)",
    example: "Many frameworks provide modern CLI tools for project scaffolding.",
    exampleTranslation: "많은 프레임워크가 프로젝트 뼈대 생성을 위한 현대적인 CLI 도구를 제공합니다.",
    importanceByRole: { frontend: 8, backend: 7, devops: 6, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_058",
    term: "compile",
    definition: "컴파일하다 (사람이 읽을 수 있는 소스 코드를 기계어나 바이트코드로 변환하는 것)",
    example: "TypeScript must compile into clean JavaScript before running in browsers.",
    exampleTranslation: "TypeScript는 브라우저에서 실행되기 전에 깨끗한 JavaScript로 컴파일되어야 합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_059",
    term: "transpile",
    definition: "트랜스파일하다 (유사한 추상화 수준을 가진 하나의 프로그래밍 언어 소스코드를 다른 언어로 변환하는 것)",
    example: "Babel is used to transpile modern ES6 code into older ES5 JavaScript.",
    exampleTranslation: "Babel은 최신 ES6 코드를 구형 ES5 JavaScript로 트랜스파일하는 데 사용됩니다.",
    importanceByRole: { frontend: 10, backend: 5, devops: 5, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_060",
    term: "bundling",
    definition: "번들링 (여러 개의 분산된 파일들을 하나의 최적화된 파일로 묶는 과정)",
    example: "Webpack and Vite handle asset bundling for web applications.",
    exampleTranslation: "Webpack과 Vite는 웹 애플리케이션의 에셋 번들링을 처리합니다.",
    importanceByRole: { frontend: 10, backend: 5, devops: 6, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_061",
    term: "minify",
    definition: "미니파이 / 축소화하다 (코드의 기능은 유지하면서 공백, 줄바꿈, 변수명을 축소해 용량을 줄이는 작업)",
    example: "Production builds automatically minify code to speed up page loads.",
    exampleTranslation: "프로덕션 빌드는 페이지 로드 속도를 높이기 위해 코드를 자동으로 축소화합니다.",
    importanceByRole: { frontend: 9, backend: 5, devops: 6, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_062",
    term: "obfuscate",
    definition: "난독화하다 (코드를 읽기 어렵게 복잡하게 꼬아서 리버스 엔지니어링을 방지하는 것)",
    example: "Companies often obfuscate their proprietary code before distribution.",
    exampleTranslation: "기업들은 배포 전에 독점 코드를 종종 난독화합니다.",
    importanceByRole: { frontend: 8, backend: 7, devops: 5, fullstack: 7, other: 7 },
    sources: []
  },
  {
    id: "w_063",
    term: "hydration",
    definition: "하이드레이션 (서버에서 생성된 정적 HTML 파일에 클라이언트 측 자바스크립트 이벤트와 상태를 결합하는 과정)",
    example: "Hydration mismatches can occur if the server and client render different HTML.",
    exampleTranslation: "서버와 클라이언트가 서로 다른 HTML을 렌더링하면 하이드레이션 불일치가 발생할 수 있습니다.",
    importanceByRole: { frontend: 10, backend: 4, devops: 4, fullstack: 8, other: 5 },
    sources: []
  },
  {
    id: "w_064",
    term: "reconciliation",
    definition: "재조정 (React에서 가상 DOM 트리가 변경되었을 때 어떤 부분을 실제 DOM에 반영할지 비교하고 결정하는 알고리즘)",
    example: "The reconciliation process ensures that the UI matches the internal state.",
    exampleTranslation: "재조정 프로세스는 UI가 내부 상태와 일치하도록 보장합니다.",
    importanceByRole: { frontend: 10, backend: 3, devops: 2, fullstack: 7, other: 5 },
    sources: []
  },
  {
    id: "w_065",
    term: "sanitization",
    definition: "새니타이징 / 정화 (XSS 공격 등을 막기 위해 사용자 입력에서 유해한 스크립트나 특수문자를 제거/치환하는 것)",
    example: "Always perform input sanitization before rendering raw HTML to avoid security flaws.",
    exampleTranslation: "보안 취약점을 피하려면 원시 HTML을 렌더링하기 전에 항상 입력값 정화(sanitization)를 수행하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 6, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_066",
    term: "serialization",
    definition: "직렬화 (객체 상태를 저장되거나 전송 가능한 바이트 스트림 등의 포맷으로 변환하는 프로세스)",
    example: "JSON is the most common format for data serialization in web APIs.",
    exampleTranslation: "JSON은 웹 API에서 데이터 직렬화를 위해 가장 흔히 사용되는 포맷입니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_067",
    term: "deserialization",
    definition: "역직렬화 (바이트 스트림이나 문자열 데이터를 파싱하여 다시 메모리 상의 객체로 복원하는 프로세스)",
    example: "Secure deserialization is critical to prevent remote code execution vulnerabilities.",
    exampleTranslation: "원격 코드 실행 취약점을 방지하기 위해서는 안전한 역직렬화가 필수적입니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_068",
    term: "authentication",
    definition: "인증 (로그인 등을 통해 사용자가 누구인지 신원을 확인하는 과정)",
    example: "Multi-factor authentication adds an extra layer of security to user accounts.",
    exampleTranslation: "다요소 인증은 사용자 계정에 추가적인 보안 계층을 더해줍니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_069",
    term: "authorization",
    definition: "인가 / 권한 부여 (인증된 사용자가 특정 리소스에 접근할 수 있는 권한이 있는지 확인하고 허용하는 과정)",
    example: "The API returned a 403 Forbidden error due to insufficient authorization.",
    exampleTranslation: "인증 권한 부족으로 인해 API가 403 Forbidden 에러를 반환했습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_070",
    term: "tokenization",
    definition: "토큰화 (민감한 데이터를 고유한 식별자인 토큰으로 대체하여 보호하는 행위)",
    example: "Credit card payment gateways use tokenization to secure sensitive financial data.",
    exampleTranslation: "신용카드 결제 게이트웨이는 민감한 금융 데이터를 보호하기 위해 토큰화를 사용합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 7, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_072",
    term: "idempotency",
    definition: "멱등성 (동일한 연산을 여러 번 수행해도 결과가 항상 같고 시스템에 부작용이 없는 성질)",
    example: "Idempotency keys ensure that making the same payment request twice charges the customer only once.",
    exampleTranslation: "멱등성 키는 동일한 결제 요청을 두 번 보내더라도 고객에게 비용이 한 번만 청구되도록 보장합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 8, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_074",
    term: "stateful",
    definition: "상태 유지의 (서버가 클라이언트의 세션이나 이전 상태 정보를 유지하고 이를 바탕으로 요청을 처리하는 구조)",
    example: "Traditional session-based authentication using cookies is inherently stateful.",
    exampleTranslation: "쿠키를 사용하는 전통적인 세션 기반 인증은 본질적으로 상태 유지 방식입니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_075",
    term: "caching",
    definition: "캐싱 (데이터에 더 빠르게 접근할 수 있도록 임시 저장소나 메모리에 복사본을 보관하는 기술)",
    example: "Configuring proper HTTP caching headers can drastically reduce server load.",
    exampleTranslation: "적절한 HTTP 캐싱 헤더를 설정하면 서버 부하를 급격히 줄일 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_076",
    term: "invalidation",
    definition: "무효화 (캐시된 데이터가 최신 상태가 아닐 때 이를 강제로 삭제하거나 만료시키는 작업)",
    example: "Cache invalidation is notorious for being one of the hardest problems in computer science.",
    exampleTranslation: "캐시 무효화는 컴퓨터 과학에서 가장 어려운 문제 중 하나로 악명 높습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_077",
    term: "staleness",
    definition: "오래됨 / 신선하지 않음 (캐시된 데이터가 원본 데이터와 일치하지 않고 만료되었음을 나타내는 상태)",
    example: "The 'stale-while-revalidate' strategy serves old data while fetching the fresh update in the background.",
    exampleTranslation: "'stale-while-revalidate' 전략은 백그라운드에서 신선한 업데이트를 가져오는 동안 기존의 오래된 데이터를 제공합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_080",
    term: "deadlock",
    definition: "교착 상태 (두 개 이상의 작업이 서로가 가진 자원을 기다리며 영원히 무한 대기에 빠지는 현상)",
    example: "Poorly designed database transactions can result in a deadlock situation.",
    exampleTranslation: "잘못 설계된 데이터베이스 트랜잭션은 교착 상태를 유발할 수 있습니다.",
    importanceByRole: { frontend: 4, backend: 10, devops: 7, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_081",
    term: "race condition",
    definition: "경쟁 상태 / 레이스 컨디션 (여러 프로세스나 스레드가 공유 자원에 동시에 접근할 때 실행 순서에 따라 결과가 달라지는 취약점)",
    example: "We implemented a distributed lock to prevent a race condition during stock updates.",
    exampleTranslation: "재고 업데이트 중 경쟁 상태가 발생하는 것을 막기 위해 분산 락을 구현했습니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_083",
    term: "propagation",
    definition: "전파 (이벤트, 예외, 데이터, 또는 DNS 설정 변경 등이 네트워크나 시스템 전반으로 퍼져나가는 현상)",
    example: "DNS propagation can take up to 48 hours to complete globally.",
    exampleTranslation: "DNS 전파가 전 세계적으로 완료되는 데는 최대 48시간이 걸릴 수 있습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_086",
    term: "bottleneck",
    definition: "병목 현상 (전체 시스템의 성능이나 속도가 전체 중 가장 느리거나 용량이 작은 특정 컴포넌트에 의해 제한되는 상태)",
    example: "An unindexed database table turned out to be the main performance bottleneck.",
    exampleTranslation: "인덱스가 생성되지 않은 데이터베이스 테이블이 주요 성능 병목 구간으로 밝혀졌습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_088",
    term: "provisioning",
    definition: "프로비저닝 (사용자나 시스템의 요구에 맞춰 서버, 네트워크, 스토리지 등 인프라 자원을 적절히 준비하고 배치하는 모든 과정)",
    example: "Automated provisioning saves operational teams from manually setting up virtual machines.",
    exampleTranslation: "자동화된 프로비저닝 덕분에 운영 팀이 가상 머신을 수동으로 설정하는 수고를 덜 수 있습니다.",
    importanceByRole: { frontend: 3, backend: 8, devops: 10, fullstack: 7, other: 6 },
    sources: []
  },
  {
    id: "w_094",
    term: "granularity",
    definition: "세분성 / 세밀함 (시스템이나 기능을 얼마나 잘게 쪼갰는지에 대한 정도나 제어할 수 있는 최소 단위의 척도)",
    example: "We need to adjust the granularity of our microservices to prevent them from becoming too nanosized.",
    exampleTranslation: "마이크로서비스가 너무 나노 단위로 쪼개지는 것을 막기 위해 세분성을 조정해야 합니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_097",
    term: "throttling",
    definition: "스로틀링 (시스템 과부하를 막기 위해 특정 주체나 API 클라이언트의 처리 속도 또는 접근 횟수를 강제로 제약하는 제어 기법)",
    example: "Rate limiting and throttling are effective defenses against Denial of Service attacks.",
    exampleTranslation: "レート 리미팅과 스로틀링은 서비스 거부(DoS) 공격에 대한 효과적인 방어 수단입니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_098",
    term: "debouncing",
    definition: "디바운싱 (사용자 입력처럼 고빈도로 연속해서 터지는 이벤트를 감지한 후 지정된 대기시간이 지날 때까지 추가 입력이 없을 때 비로소 최종 한 번만 실행하는 최적화 기법)",
    example: "Debouncing the autocomplete field prevents sending an HTTP request on every single keystroke.",
    exampleTranslation: "자동완성 입력 필드에 디바운싱을 적용하면 매 키 입력마다 HTTP 요청이 전송되는 것을 방지합니다.",
    importanceByRole: { frontend: 10, backend: 4, devops: 3, fullstack: 7, other: 5 },
    sources: []
  },
  {
    id: "w_101",
    term: "side effect",
    definition: "부작용 / 사이드 이펙트 (함수가 외부에 영향을 주거나 외부 상태를 변경하는 작업)",
    example: "Data fetching and manual DOM manipulations are common side effects in React.",
    exampleTranslation: "데이터 가져오기와 수동 DOM 조작은 React에서 흔히 발생하는 사이드 이펙트입니다.",
    importanceByRole: { frontend: 10, backend: 8, devops: 4, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_102",
    term: "pure function",
    definition: "순수 함수 (동일한 입력에 대해 항상 동일한 출력을 반환하고 부작용이 없는 함수)",
    example: "Reducers in Redux must be pure functions that return a new state object.",
    exampleTranslation: "Redux의 리듀서는 반드시 새로운 상태 객체를 반환하는 순수 함수여야 합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 3, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_103",
    term: "memoization",
    definition: "메모이제이션 (이전 연산 결과를 캐싱하여 동일한 계산의 반복을 방지하는 최적화 기법)",
    example: "Use useMemo to apply memoization to expensive calculations inside your components.",
    exampleTranslation: "컴포넌트 내부의 비용이 많이 드는 계산에 메모이제이션을 적용하려면 useMemo를 사용하세요.",
    importanceByRole: { frontend: 10, backend: 7, devops: 3, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_104",
    term: "interoperability",
    definition: "상호 운용성 (서로 다른 시스템, 언어, 플랫폼이 정보를 교환하고 호환될 수 있는 성질)",
    example: "Kotlin provides seamless interoperability with existing Java codebases.",
    exampleTranslation: "Kotlin은 기존 Java 코드베이스와의 매끄러운 상호 운용성을 제공합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_105",
    term: "abstraction",
    definition: "추상화 (복잡한 내부 구현을 숨기고 중요한 핵심 개념만 외부로 노출하는 설계 원칙)",
    example: "An ORM provides a high-level abstraction layer over raw SQL queries.",
    exampleTranslation: "ORM은 원시 SQL 쿼리에 대해 높은 수준의 추상화 계층을 제공합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_106",
    term: "encapsulation",
    definition: "캡슐화 (데이터와 이를 처리하는 메서드를 하나로 묶고 내부 상세를 외부에 숨기는 것)",
    example: "Encapsulation helps prevent external code from accidentally modifying internal object states.",
    exampleTranslation: "캡슐화는 외부 코드가 객체 내부의 상태를 무작위로 수정하는 것을 방지하는 데 도움이 됩니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 5, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_107",
    term: "polymorphism",
    definition: "다형성 (동일한 인터페이스나 상위 클래스를 통해 서로 다른 데이터 타입을 처리할 수 있는 성질)",
    example: "Polymorphism allows different classes to implement the same method in unique ways.",
    exampleTranslation: "다형성은 서로 다른 클래스들이 동일한 메서드를 고유한 방식으로 구현할 수 있도록 합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 5, fullstack: 8, other: 8 },
    sources: []
  },
  {
    id: "w_108",
    term: "inheritance",
    definition: "상속 (기존 클래스의 특성과 기능을 부모로부터 물려받아 새로운 클래스를 생성하는 것)",
    example: "In object-oriented programming, inheritance promotes code reuse among related classes.",
    exampleTranslation: "객체 지향 프로그래밍에서 상속은 연관된 클래스들 간의 코드 재사용을 촉진합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_109",
    term: "coupling",
    definition: "결합도 (모듈이나 컴포넌트 간에 서로 의존하고 있는 긴밀한 정도)",
    example: "Tightly coupled components are incredibly difficult to maintain and test individually.",
    exampleTranslation: "단단히 결합된(의존성이 높은) 컴포넌트들은 개별적으로 유지보수하고 테스트하기가 매우 어렵습니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_110",
    term: "cohesion",
    definition: "응집도 (모듈 내부의 요소들이 하나의 책임이나 목적을 위해 얼마나 밀접하게 결합되어 있는지의 정도)",
    example: "We should refactor this service class to achieve higher internal cohesion.",
    exampleTranslation: "더 높은 내부 응집도를 달성하기 위해 이 서비스 클래스를 리팩토링해야 합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_111",
    term: "refactoring",
    definition: "리팩토링 (결과의 외부 동작은 바꾸지 않으면서 내부 코드의 구조와 가독성을 개선하는 작업)",
    example: "Refactoring the legacy codebase improved our overall test coverage and scalability.",
    exampleTranslation: "레거시 코드베이스를 리팩토링하여 전반적인 테스트 커버리지와 확장성을 개선했습니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "w_112",
    term: "pipeline",
    definition: "파이프라인 (데이터 처리나 CI/CD 배포 과정처럼 일련의 단계들이 순차적으로 이어지는 자동화 흐름)",
    example: "The CI/CD pipeline triggers an automated build every time a pull request is merged.",
    exampleTranslation: "풀 리퀘스트가 머지될 때마다 CI/CD 파이프라인이 자동 빌드를 트리거합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_113",
    term: "orchestrator",
    definition: "오케스트레이터 (컨테이너나 마이크로서비스 인프라의 배포 및 수명 주기를 조율하고 통제하는 중앙 관리 주체)",
    example: "As an orchestrator, Kubernetes monitors the health of containers and restarts failing ones.",
    exampleTranslation: "오케스트레이터로서 쿠버네티스는 컨테이너의 상태를 모니터링하고 실패한 컨테이너를 재시작합니다.",
    importanceByRole: { frontend: 3, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_114",
    term: "virtualization",
    definition: "가상화 (물리적인 하드웨어 자원을 추상화하여 독립된 가상 머신이나 환경으로 분할하는 기술)",
    example: "Hypervisors are used to manage hardware virtualization for enterprise servers.",
    exampleTranslation: "하이퍼바이저는 엔터프라이즈 서버를 위한 하드웨어 가상화를 관리하는 데 사용됩니다.",
    importanceByRole: { frontend: 4, backend: 8, devops: 10, fullstack: 7, other: 7 },
    sources: []
  },
  {
    id: "w_115",
    term: "containerization",
    definition: "컨테이너화 (OS 커널을 공유하며 전용 라이브러리와 앱을 격리된 공간인 컨테이너로 묶어 배포하는 기술)",
    example: "Containerization ensures that the application runs identically across different OS environments.",
    exampleTranslation: "컨테이너화는 애플리케이션이 서로 다른 OS 환경에서도 완전히 동일하게 작동하도록 보장합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_116",
    term: "ephemeral",
    definition: "일시적인 / 단명하는 (생성되었다가 사용 목적이 끝나면 언제든 쉽게 파괴될 수 있는 성질)",
    example: "Docker containers should be ephemeral; do not store persistent application states inside them.",
    exampleTranslation: "도커 컨테이너는 일시적이어야 하므로, 내부에 영구적인 애플리케이션 상태를 저장하지 마세요.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_117",
    term: "statelessness",
    definition: "무상태성 (서버가 클라이언트의 세션 데이터나 문맥을 따로 기억하지 않고 처리를 완료하는 성질)",
    example: "Statelessness is a core constraint of architectural styles like REST.",
    exampleTranslation: "무상태성은 REST와 같은 아키텍처 스타일의 핵심 제약 조건입니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_118",
    term: "scalability",
    definition: "확장성 (사용자 수나 트래픽 증가에 맞추어 시스템이 유연하게 용량을 늘리거나 성능을 높일 수 있는 역량)",
    example: "Horizontal scaling involves adding more servers to handle increased traffic and achieve high scalability.",
    exampleTranslation: "수평 확장은 증가한 트래픽을 처리하고 높은 확장성을 달성하기 위해 서버를 추가하는 것을 포함합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_119",
    term: "elasticity",
    definition: "탄력성 (부하 변화에 따라 컴퓨팅 자원을 실시간으로 자동 확장하거나 축소하는 클라우드의 성질)",
    example: "Cloud service elasticity automatically adjusts server instances based on user traffic peaks.",
    exampleTranslation: "클라우드 서비스의 탄력성은 사용자 트래픽 피크에 따라 서버 인스턴스를 자동으로 조절합니다.",
    importanceByRole: { frontend: 4, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_120",
    term: "availability",
    definition: "가용성 (시스템이 중단 없이 정상적으로 서비스를 제공할 수 있는 가동 시간 비율)",
    example: "Our goal is to achieve 99.99% service availability for the database layer.",
    exampleTranslation: "우리의 목표는 데이터베이스 계층에 대해 99.99%의 서비스 가용성을 달성하는 것입니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_121",
    term: "fault tolerance",
    definition: "결함 허용 / 결함 내성 (일부 하드웨어나 서비스에 결함이 발생하더라도 멈추지 않고 계속 정상 작동하는 능력)",
    example: "The architecture provides fault tolerance by failing over to a secondary region automatically.",
    exampleTranslation: "이 아키텍처는 보조 리전으로 자동 페일오버를 수행함으로써 결함 내성을 제공합니다.",
    importanceByRole: { frontend: 5, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_122",
    term: "failover",
    definition: "페일오버 / 장애 조치 (주 시스템 장애 시 예비 시스템이나 복제본으로 운영을 자동 전환하는 메커니즘)",
    example: "The database failover process completed within seconds without dropping any incoming data.",
    exampleTranslation: "데이터베이스 페일오버 프로세스는 유입 데이터를 유실하지 않고 수 초 내에 완료되었습니다.",
    importanceByRole: { frontend: 4, backend: 9, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_123",
    term: "load balancing",
    definition: "부하 분산 / 로드 밸런싱 (유입되는 네트워크 트래픽을 여러 대의 서버로 고르게 나누어 주는 처리 방식)",
    example: "Load balancing prevents any single server from becoming an overloaded bottleneck.",
    exampleTranslation: "로드 밸런싱은 특정 단일 서버가 과부하되어 병목 지점이 되는 것을 방지합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_125",
    term: "observability",
    definition: "관찰 가능성 (시스템의 외부 출력인 로그, 메트릭, 트레이스를 통해 내부 상태를 명확히 파악할 수 있는 정도)",
    example: "Modern cloud infrastructures require high observability to debug microservice issues.",
    exampleTranslation: "현대 클라우드 인프라는 마이크로서비스 문제를 디버깅하기 위해 높은 관찰 가능성을 요구합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_136",
    term: "monolithic",
    definition: "모놀리식의 (애플리케이션의 모든 기능이 단일 코드베이스와 하나의 서비스로 통합된 구조)",
    example: "Migrating from a monolithic architecture to microservices can improve development velocity.",
    exampleTranslation: "모놀리식 아키텍처에서 마이크로서비스로 마이그레이션하면 개발 속도를 높일 수 있습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_137",
    term: "microservices",
    definition: "마이크로서비스 (애플리케이션을 느슨하게 결합된 작은 독립적 서비스들의 집합으로 구성하는 아키텍처)",
    example: "Microservices allow teams to deploy individual features without affecting the whole system.",
    exampleTranslation: "마이크로서비스를 사용하면 팀들이 전체 시스템에 영향을 주지 않고 개별 기능을 배포할 수 있습니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_138",
    term: "decoupling",
    definition: "디커플링 / 결합도 분리 (컴포넌트 간의 상호 의존성을 줄여 독립적으로 변경 가능하게 만드는 것)",
    example: "Message queues are excellent tools for decoupling frontend requests from backend processing.",
    exampleTranslation: "메시지 큐는 백엔드 처리로부터 프론트엔드 요청을 분리(디커플링)하는 데 훌륭한 도구입니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_139",
    term: "dependency injection",
    definition: "의존성 주입 (객체가 필요로 하는 의존 객체를 외부에서 생성하여 전달하는 디자인 패턴)",
    example: "Dependency injection makes code more testable by allowing developers to inject mock object providers.",
    exampleTranslation: "의존성 주입은 개발자가 모의(mock) 객체 공급자를 주입할 수 있게 함으로써 코드를 더 테스트하기 쉽게 만듭니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_140",
    term: "inversion of control",
    definition: "제어의 역전 / IoC (프로그램의 제어 흐름을 개발자가 아닌 프레임워크가 주도하는 설계 원칙)",
    example: "The Spring framework uses inversion of control to manage application component lifecycles.",
    exampleTranslation: "Spring 프레임워크는 애플리케이션 컴포넌트 수명 주기를 관리하기 위해 제어의 역전을 사용합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_143",
    term: "synchronous",
    definition: "동기식의 (호출된 작업이 끝날 때까지 스레드가 대기하며 순차적으로 진행되는 방식)",
    example: "Synchronous HTTP requests block execution threads until the server returns an explicit response.",
    exampleTranslation: "동기식 HTTP 요청은 서버가 명시적인 응답을 반환할 때까지 실행 스레드를 차단합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 5, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_160",
    term: "overloading",
    definition: "오버로딩 / 과적 (동일한 이름을 가지되 매개변수 타입이나 개수가 다른 메서드를 여러 개 정의할 수 있는 문법 기능)",
    example: "TypeScript allows function overloading by providing multiple signatures before the main logic implementation.",
    exampleTranslation: "TypeScript는 메인 로직 구현 전에 여러 시그니처를 제공함으로써 함수 오버로딩을 허용합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 4, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_174",
    term: "obfuscation",
    definition: "난독화 (소스 코드를 기능적으로 유지하되 사람이 읽기 어렵고 복잡하게 변형하여 지적 재산을 보호하는 기술)",
    example: "Code obfuscation is highly recommended before releasing native client mobile bundles to app stores.",
    exampleTranslation: "네이티브 클라이언트 모바일 번들을 앱 스토어에 출시하기 전에 코드 난독화를 강력히 권장합니다.",
    importanceByRole: { frontend: 8, backend: 7, devops: 5, fullstack: 7, other: 7 },
    sources: []
  },
  {
    id: "w_175",
    term: "minification",
    definition: "축소화 / 미니피케이션 (기능적 변화 없이 코드 내부의 공백, 주석 등을 지워 파일 용량을 최적화하는 과정)",
    example: "Modern production bundlers perform code minification automatically to speed up web delivery.",
    exampleTranslation: "현대적인 프로덕션 번들러는 웹 전송 속도를 높이기 위해 코드 축소화를 자동으로 수행합니다.",
    importanceByRole: { frontend: 10, backend: 5, devops: 6, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_177",
    term: "transpilation",
    definition: "트랜스파일 / 소스 대 소스 컴파일 (TypeScript를 JavaScript로 바꾸는 것처럼 비슷한 추상화 수준의 언어로 소스코드를 변환하는 것)",
    example: "Babel manages the transpilation of modern ESNext logic into browser-compatible enterprise code frameworks.",
    exampleTranslation: "Babel은 최신 ESNext 로직을 브라우저 호환이 가능한 엔터프라이즈 코드 프레임워크로 변환(트랜스파일)하는 작업을 관리합니다.",
    importanceByRole: { frontend: 10, backend: 5, devops: 5, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_178",
    term: "compilation",
    definition: "컴파일 (고수준 소스코드를 컴퓨터가 실행 가능한 저수준 기계어나 바이트코드로 최종 변환하는 작업)",
    example: "The build pipeline stopped immediately because a severe compilation syntax bug was detected.",
    exampleTranslation: "심각한 컴파일 구문 버그가 감지되어 빌드 파이프라인이 즉시 중단되었습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  }
];
