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
  },
  {
    id: "w_206",
    term: "schema",
    definition: "스키마 (데이터베이스나 API 데이터의 구조, 필드, 타입, 관계를 정의한 설계)",
    example: "The API response schema changed after the backend team added a required status field.",
    exampleTranslation: "백엔드 팀이 필수 status 필드를 추가한 뒤 API 응답 스키마가 변경되었습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_207",
    term: "indexing",
    definition: "인덱싱 (검색이나 조회 속도를 높이기 위해 데이터 위치 정보를 별도로 구성하는 작업)",
    example: "Proper indexing reduced the query time from several seconds to a few milliseconds.",
    exampleTranslation: "적절한 인덱싱으로 쿼리 시간이 몇 초에서 몇 밀리초로 줄었습니다.",
    importanceByRole: { frontend: 5, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_208",
    term: "transaction",
    definition: "트랜잭션 (여러 데이터 작업을 하나의 논리적 단위로 묶어 모두 성공하거나 모두 실패하게 하는 처리)",
    example: "The payment service uses a transaction to update the order and inventory records together.",
    exampleTranslation: "결제 서비스는 주문과 재고 기록을 함께 업데이트하기 위해 트랜잭션을 사용합니다.",
    importanceByRole: { frontend: 5, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_209",
    term: "atomicity",
    definition: "원자성 (작업이 중간 상태 없이 완전히 성공하거나 완전히 실패해야 하는 성질)",
    example: "Atomicity prevents partial updates when a database transaction fails halfway.",
    exampleTranslation: "원자성은 데이터베이스 트랜잭션이 중간에 실패했을 때 부분 업데이트를 방지합니다.",
    importanceByRole: { frontend: 4, backend: 10, devops: 7, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_210",
    term: "isolation",
    definition: "격리성 (동시에 실행되는 트랜잭션들이 서로의 중간 결과에 부정확하게 영향을 주지 않도록 분리되는 성질)",
    example: "Higher isolation levels can prevent dirty reads but may reduce database throughput.",
    exampleTranslation: "더 높은 격리 수준은 더티 리드를 방지할 수 있지만 데이터베이스 처리량을 낮출 수 있습니다.",
    importanceByRole: { frontend: 4, backend: 10, devops: 7, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_211",
    term: "durability",
    definition: "지속성 (커밋된 데이터 변경 사항이 장애 이후에도 영구 저장소에 안전하게 남아 있는 성질)",
    example: "Durability guarantees that committed financial records survive a server crash.",
    exampleTranslation: "지속성은 커밋된 금융 기록이 서버 장애 이후에도 보존되도록 보장합니다.",
    importanceByRole: { frontend: 4, backend: 10, devops: 9, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_212",
    term: "normalization",
    definition: "정규화 (데이터 중복과 이상 현상을 줄이기 위해 테이블 구조를 체계적으로 분리하는 데이터베이스 설계 방식)",
    example: "Normalization keeps user profile data separate from order history records.",
    exampleTranslation: "정규화는 사용자 프로필 데이터를 주문 이력 기록과 분리해 유지합니다.",
    importanceByRole: { frontend: 4, backend: 10, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_213",
    term: "denormalization",
    definition: "반정규화 (조회 성능이나 단순화를 위해 의도적으로 중복 데이터를 저장하는 데이터베이스 설계 방식)",
    example: "The analytics table uses denormalization to avoid expensive joins during dashboard rendering.",
    exampleTranslation: "분석 테이블은 대시보드 렌더링 중 비용이 큰 조인을 피하기 위해 반정규화를 사용합니다.",
    importanceByRole: { frontend: 5, backend: 10, devops: 6, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_214",
    term: "replication",
    definition: "복제 (가용성과 읽기 성능 향상을 위해 데이터를 여러 서버나 리전에 복사해 유지하는 방식)",
    example: "Database replication lets read-only traffic go to replicas instead of the primary node.",
    exampleTranslation: "데이터베이스 복제는 읽기 전용 트래픽이 기본 노드 대신 복제본으로 가도록 합니다.",
    importanceByRole: { frontend: 4, backend: 9, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_215",
    term: "sharding",
    definition: "샤딩 (대규모 데이터를 여러 데이터베이스 조각으로 나누어 저장하고 처리하는 확장 방식)",
    example: "The team introduced sharding after a single database instance could no longer handle the load.",
    exampleTranslation: "단일 데이터베이스 인스턴스가 더 이상 부하를 감당하지 못하자 팀은 샤딩을 도입했습니다.",
    importanceByRole: { frontend: 3, backend: 10, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_216",
    term: "partitioning",
    definition: "파티셔닝 (큰 데이터셋이나 테이블을 기준에 따라 더 작은 부분으로 나누어 관리하는 방식)",
    example: "Log records are stored with monthly partitioning to make old data easier to archive.",
    exampleTranslation: "로그 기록은 오래된 데이터를 쉽게 보관하기 위해 월별 파티셔닝으로 저장됩니다.",
    importanceByRole: { frontend: 3, backend: 10, devops: 9, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_217",
    term: "consistency",
    definition: "일관성 (여러 저장소나 노드가 동일한 규칙과 최신 상태를 유지하는 성질)",
    example: "Strong consistency ensures every user sees the latest account balance immediately.",
    exampleTranslation: "강한 일관성은 모든 사용자가 최신 계좌 잔액을 즉시 보도록 보장합니다.",
    importanceByRole: { frontend: 5, backend: 10, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_218",
    term: "eventual consistency",
    definition: "최종적 일관성 (분산 시스템에서 시간이 지나면 모든 복제본이 같은 상태에 도달하는 성질)",
    example: "Search results may lag behind writes because the index relies on eventual consistency.",
    exampleTranslation: "검색 인덱스가 최종적 일관성에 의존하기 때문에 검색 결과가 쓰기 작업보다 늦게 반영될 수 있습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_219",
    term: "backpressure",
    definition: "백프레셔 (생산자가 소비자보다 빠를 때 처리 속도를 조절하여 시스템 과부하를 막는 흐름 제어)",
    example: "The streaming service applies backpressure when downstream consumers become slow.",
    exampleTranslation: "스트리밍 서비스는 하위 소비자가 느려질 때 백프레셔를 적용합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_220",
    term: "retry",
    definition: "재시도 (일시적인 실패가 발생했을 때 같은 작업을 다시 수행하는 복구 전략)",
    example: "The client uses exponential backoff before each retry to avoid overwhelming the server.",
    exampleTranslation: "클라이언트는 서버에 과부하를 주지 않기 위해 각 재시도 전에 지수 백오프를 사용합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 9, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_221",
    term: "timeout",
    definition: "타임아웃 (작업이나 응답이 정해진 시간 안에 끝나지 않으면 실패로 처리하는 제한)",
    example: "Set a timeout on external API calls so the request thread does not hang forever.",
    exampleTranslation: "요청 스레드가 영원히 멈춰 있지 않도록 외부 API 호출에 타임아웃을 설정하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_222",
    term: "circuit breaker",
    definition: "서킷 브레이커 (연속 실패가 감지되면 외부 서비스 호출을 일시 차단해 장애 확산을 막는 패턴)",
    example: "A circuit breaker protects the checkout service when the payment provider is unstable.",
    exampleTranslation: "결제 제공자가 불안정할 때 서킷 브레이커는 체크아웃 서비스를 보호합니다.",
    importanceByRole: { frontend: 5, backend: 10, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_223",
    term: "rate limiting",
    definition: "요청 제한 (특정 사용자나 클라이언트가 일정 시간 동안 보낼 수 있는 요청 수를 제한하는 보호 기법)",
    example: "Rate limiting prevents abusive clients from exhausting backend resources.",
    exampleTranslation: "요청 제한은 악의적인 클라이언트가 백엔드 자원을 고갈시키는 것을 방지합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_224",
    term: "pagination",
    definition: "페이지네이션 (큰 결과 목록을 여러 페이지나 작은 단위로 나누어 조회하는 방식)",
    example: "The comments API supports pagination to avoid returning thousands of records at once.",
    exampleTranslation: "댓글 API는 수천 개의 기록을 한 번에 반환하지 않도록 페이지네이션을 지원합니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 5, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_225",
    term: "cursor",
    definition: "커서 (다음 데이터 묶음을 이어서 가져오기 위해 현재 조회 위치를 나타내는 포인터나 토큰)",
    example: "Cursor-based pagination works better than offset pagination for rapidly changing feeds.",
    exampleTranslation: "커서 기반 페이지네이션은 빠르게 변하는 피드에서 오프셋 페이지네이션보다 더 잘 작동합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 5, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_226",
    term: "endpoint",
    definition: "엔드포인트 (클라이언트가 특정 기능이나 리소스에 접근하기 위해 호출하는 API 주소)",
    example: "The frontend calls the recommendation endpoint when a user starts a new study session.",
    exampleTranslation: "사용자가 새 학습 세션을 시작하면 프론트엔드는 추천 엔드포인트를 호출합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_227",
    term: "webhook",
    definition: "웹훅 (특정 이벤트가 발생했을 때 외부 시스템으로 HTTP 요청을 보내 알리는 통합 방식)",
    example: "The payment provider sends a webhook after a subscription renewal succeeds.",
    exampleTranslation: "결제 제공자는 구독 갱신이 성공한 뒤 웹훅을 보냅니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_228",
    term: "validation",
    definition: "검증 (입력 데이터가 필요한 형식, 타입, 범위, 비즈니스 규칙을 만족하는지 확인하는 과정)",
    example: "Server-side validation is required even when the frontend already checks the form.",
    exampleTranslation: "프론트엔드가 이미 폼을 검사하더라도 서버 측 검증은 필요합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 5, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_229",
    term: "encryption",
    definition: "암호화 (데이터를 권한 없는 사용자가 읽을 수 없도록 특정 키로 변환하는 보안 기술)",
    example: "Sensitive user data should use encryption both in transit and at rest.",
    exampleTranslation: "민감한 사용자 데이터는 전송 중과 저장 중 모두 암호화를 사용해야 합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_230",
    term: "hashing",
    definition: "해싱 (입력 데이터를 고정 길이의 값으로 변환하며 원문 복원이 어렵도록 만드는 처리)",
    example: "Passwords must be stored with secure hashing algorithms instead of plain text.",
    exampleTranslation: "비밀번호는 평문 대신 안전한 해싱 알고리즘으로 저장해야 합니다.",
    importanceByRole: { frontend: 5, backend: 10, devops: 9, fullstack: 8, other: 8 },
    sources: []
  },
  {
    id: "w_231",
    term: "salting",
    definition: "솔팅 (해시 전에 임의의 값을 추가하여 동일한 비밀번호도 서로 다른 해시를 갖게 하는 보안 기법)",
    example: "Salting makes precomputed password hash attacks much harder to execute.",
    exampleTranslation: "솔팅은 미리 계산된 비밀번호 해시 공격을 훨씬 더 어렵게 만듭니다.",
    importanceByRole: { frontend: 4, backend: 10, devops: 9, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_232",
    term: "vulnerability",
    definition: "취약점 (공격자가 악용할 수 있는 소프트웨어나 설정상의 약점)",
    example: "The security scan found a critical vulnerability in an outdated dependency.",
    exampleTranslation: "보안 스캔은 오래된 의존성에서 치명적인 취약점을 발견했습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_233",
    term: "exploit",
    definition: "익스플로잇 (취약점을 실제로 악용하여 시스템 동작을 조작하거나 침해하는 방법 또는 코드)",
    example: "Attackers used a public exploit against servers that had not received the patch.",
    exampleTranslation: "공격자들은 패치를 받지 않은 서버를 대상으로 공개 익스플로잇을 사용했습니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_234",
    term: "injection",
    definition: "인젝션 (검증되지 않은 입력을 통해 명령어나 쿼리를 삽입하여 실행 흐름을 조작하는 공격 유형)",
    example: "Parameterized queries help prevent SQL injection attacks.",
    exampleTranslation: "파라미터화된 쿼리는 SQL 인젝션 공격을 방지하는 데 도움이 됩니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_235",
    term: "xss",
    definition: "교차 사이트 스크립팅 (악성 스크립트를 웹 페이지에 삽입해 사용자의 브라우저에서 실행시키는 공격)",
    example: "Escaping user-generated HTML is essential to prevent XSS in comment sections.",
    exampleTranslation: "댓글 영역에서 XSS를 방지하려면 사용자가 생성한 HTML을 이스케이프하는 것이 필수입니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_236",
    term: "csrf",
    definition: "사이트 간 요청 위조 (사용자가 의도하지 않은 요청을 인증된 세션으로 보내게 만드는 공격)",
    example: "CSRF tokens verify that a state-changing request originated from the legitimate application.",
    exampleTranslation: "CSRF 토큰은 상태를 변경하는 요청이 정상 애플리케이션에서 시작되었는지 확인합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_237",
    term: "environment variable",
    definition: "환경 변수 (실행 환경별 설정값이나 비밀 값을 코드 외부에서 주입하기 위해 사용하는 변수)",
    example: "Store the API key in an environment variable instead of committing it to the repository.",
    exampleTranslation: "API 키를 저장소에 커밋하지 말고 환경 변수에 저장하세요.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_238",
    term: "feature flag",
    definition: "기능 플래그 (배포된 코드 안의 특정 기능을 설정값으로 켜거나 끌 수 있게 하는 운영 기법)",
    example: "The team enabled the new recommendation algorithm gradually with a feature flag.",
    exampleTranslation: "팀은 기능 플래그를 사용해 새 추천 알고리즘을 점진적으로 활성화했습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_239",
    term: "canary deployment",
    definition: "카나리 배포 (새 버전을 일부 사용자나 트래픽에 먼저 노출해 안정성을 확인하는 배포 전략)",
    example: "Canary deployment helped us detect the memory leak before a full rollout.",
    exampleTranslation: "카나리 배포는 전체 배포 전에 메모리 누수를 발견하는 데 도움이 되었습니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_240",
    term: "blue green deployment",
    definition: "블루-그린 배포 (두 개의 동일한 운영 환경을 준비하고 트래픽 전환으로 새 버전을 배포하는 전략)",
    example: "Blue green deployment allows instant rollback by switching traffic back to the previous environment.",
    exampleTranslation: "블루-그린 배포는 트래픽을 이전 환경으로 되돌려 즉시 롤백할 수 있게 합니다.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_241",
    term: "logging",
    definition: "로깅 (시스템 동작, 오류, 사용자 요청 등의 이벤트를 기록하여 분석과 디버깅에 활용하는 작업)",
    example: "Structured logging makes it easier to search production errors by request id.",
    exampleTranslation: "구조화된 로깅은 요청 ID로 프로덕션 오류를 검색하기 쉽게 만듭니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_242",
    term: "metrics",
    definition: "메트릭 (시스템 상태나 성능을 수치로 측정한 관찰 데이터)",
    example: "CPU usage, request latency, and error rate are key metrics for service health.",
    exampleTranslation: "CPU 사용량, 요청 지연 시간, 오류율은 서비스 상태를 나타내는 핵심 메트릭입니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_243",
    term: "tracing",
    definition: "트레이싱 (분산 시스템에서 하나의 요청이 여러 서비스와 단계를 거치는 흐름을 추적하는 관찰 기법)",
    example: "Distributed tracing revealed that the slow request spent most of its time in the billing service.",
    exampleTranslation: "분산 트레이싱은 느린 요청이 대부분의 시간을 결제 서비스에서 보냈음을 보여주었습니다.",
    importanceByRole: { frontend: 5, backend: 9, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_244",
    term: "alerting",
    definition: "알림 설정 (장애나 이상 징후가 감지되었을 때 담당자에게 자동으로 알려주는 운영 체계)",
    example: "Alerting should notify the on-call engineer before users start reporting the outage.",
    exampleTranslation: "알림 설정은 사용자가 장애를 보고하기 전에 온콜 엔지니어에게 알려야 합니다.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_245",
    term: "regression",
    definition: "회귀 버그 (기존에 정상 동작하던 기능이 변경 이후 다시 깨지는 문제)",
    example: "The latest release introduced a regression in the login form validation logic.",
    exampleTranslation: "최신 릴리즈는 로그인 폼 검증 로직에 회귀 버그를 만들었습니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_246",
    term: "unit test",
    definition: "단위 테스트 (함수나 컴포넌트 같은 작은 코드 단위를 독립적으로 검증하는 테스트)",
    example: "A focused unit test can catch edge cases before the feature reaches integration testing.",
    exampleTranslation: "집중된 단위 테스트는 기능이 통합 테스트에 도달하기 전에 엣지 케이스를 잡아낼 수 있습니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 6, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_247",
    term: "integration test",
    definition: "통합 테스트 (여러 모듈이나 서비스가 함께 연결되었을 때 올바르게 동작하는지 검증하는 테스트)",
    example: "The integration test verifies that the API writes data to Firestore correctly.",
    exampleTranslation: "통합 테스트는 API가 Firestore에 데이터를 올바르게 쓰는지 검증합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_248",
    term: "end to end test",
    definition: "엔드투엔드 테스트 (사용자 흐름 전체를 실제 환경과 가깝게 검증하는 테스트)",
    example: "An end to end test confirms that users can sign up, study words, and view results.",
    exampleTranslation: "엔드투엔드 테스트는 사용자가 가입하고 단어를 학습한 뒤 결과를 볼 수 있는지 확인합니다.",
    importanceByRole: { frontend: 10, backend: 8, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_249",
    term: "mock",
    definition: "목 객체 (실제 의존성을 대신해 테스트에서 통제된 동작을 제공하는 가짜 객체)",
    example: "The test uses a mock Firebase client to avoid writing real data.",
    exampleTranslation: "테스트는 실제 데이터를 쓰지 않기 위해 목 Firebase 클라이언트를 사용합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 5, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_250",
    term: "stub",
    definition: "스텁 (테스트나 개발 중 아직 구현되지 않은 기능을 단순한 고정 응답으로 대체하는 코드)",
    example: "The frontend used a stub response while the recommendation API was still under development.",
    exampleTranslation: "추천 API가 아직 개발 중일 때 프론트엔드는 스텁 응답을 사용했습니다.",
    importanceByRole: { frontend: 8, backend: 8, devops: 4, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_251",
    term: "fixture",
    definition: "픽스처 (테스트를 반복 가능하게 만들기 위해 미리 준비한 고정 데이터나 환경)",
    example: "The test fixture contains sample vocabulary records for several job roles.",
    exampleTranslation: "테스트 픽스처에는 여러 직무에 대한 샘플 단어 기록이 포함되어 있습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 5, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_252",
    term: "assertion",
    definition: "어설션 / 검증문 (테스트에서 실제 결과가 기대한 조건을 만족하는지 확인하는 문장)",
    example: "The assertion checks that the recommendation list never contains duplicate word ids.",
    exampleTranslation: "어설션은 추천 목록에 중복된 단어 ID가 절대 포함되지 않는지 확인합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 5, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_253",
    term: "test coverage",
    definition: "테스트 커버리지 (전체 코드 중 테스트가 실행하거나 검증하는 코드의 비율)",
    example: "High test coverage does not guarantee quality, but it helps reveal untested paths.",
    exampleTranslation: "높은 테스트 커버리지가 품질을 보장하지는 않지만, 테스트되지 않은 경로를 드러내는 데 도움이 됩니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_254",
    term: "flaky test",
    definition: "불안정한 테스트 (코드 변경이 없어도 실행할 때마다 성공과 실패가 달라지는 테스트)",
    example: "The flaky test failed only on CI because it depended on real network timing.",
    exampleTranslation: "그 불안정한 테스트는 실제 네트워크 타이밍에 의존했기 때문에 CI에서만 실패했습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_255",
    term: "snapshot test",
    definition: "스냅샷 테스트 (렌더링 결과나 출력 구조를 저장된 기준값과 비교하는 테스트)",
    example: "A snapshot test can quickly reveal unexpected changes in a shared UI component.",
    exampleTranslation: "스냅샷 테스트는 공유 UI 컴포넌트의 예상치 못한 변경을 빠르게 드러낼 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 5, devops: 3, fullstack: 7, other: 6 },
    sources: []
  },
  {
    id: "w_256",
    term: "accessibility",
    definition: "접근성 (장애 여부나 사용 환경과 관계없이 사용자가 서비스를 이용할 수 있게 만드는 품질)",
    example: "Accessibility improvements made the flashcard buttons usable with a keyboard and screen reader.",
    exampleTranslation: "접근성 개선으로 플래시카드 버튼을 키보드와 스크린 리더로 사용할 수 있게 되었습니다.",
    importanceByRole: { frontend: 10, backend: 4, devops: 3, fullstack: 8, other: 8 },
    sources: []
  },
  {
    id: "w_257",
    term: "semantic html",
    definition: "시맨틱 HTML (요소의 의미와 구조를 명확히 드러내는 HTML 작성 방식)",
    example: "Semantic HTML helps assistive technologies understand the page structure.",
    exampleTranslation: "시맨틱 HTML은 보조 기술이 페이지 구조를 이해하는 데 도움을 줍니다.",
    importanceByRole: { frontend: 10, backend: 3, devops: 2, fullstack: 7, other: 7 },
    sources: []
  },
  {
    id: "w_258",
    term: "responsive design",
    definition: "반응형 디자인 (화면 크기와 기기에 따라 레이아웃과 UI가 자연스럽게 적응하도록 만드는 설계)",
    example: "Responsive design keeps the study page readable on both phones and desktop monitors.",
    exampleTranslation: "반응형 디자인은 학습 페이지가 휴대폰과 데스크톱 모니터 모두에서 읽기 좋게 유지되도록 합니다.",
    importanceByRole: { frontend: 10, backend: 3, devops: 2, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_259",
    term: "viewport",
    definition: "뷰포트 (브라우저나 기기에서 웹 페이지가 실제로 표시되는 화면 영역)",
    example: "The layout changes when the viewport width drops below the tablet breakpoint.",
    exampleTranslation: "뷰포트 너비가 태블릿 브레이크포인트 아래로 내려가면 레이아웃이 변경됩니다.",
    importanceByRole: { frontend: 10, backend: 2, devops: 2, fullstack: 7, other: 6 },
    sources: []
  },
  {
    id: "w_260",
    term: "breakpoint",
    definition: "브레이크포인트 (반응형 디자인에서 특정 화면 너비를 기준으로 스타일이나 레이아웃이 바뀌는 지점)",
    example: "The navigation collapses into a menu at the mobile breakpoint.",
    exampleTranslation: "모바일 브레이크포인트에서 내비게이션은 메뉴로 접힙니다.",
    importanceByRole: { frontend: 10, backend: 2, devops: 2, fullstack: 7, other: 6 },
    sources: []
  },
  {
    id: "w_261",
    term: "rendering",
    definition: "렌더링 (데이터나 컴포넌트 상태를 화면에 보이는 UI로 변환하는 과정)",
    example: "Unnecessary rendering can make a complex dashboard feel slow.",
    exampleTranslation: "불필요한 렌더링은 복잡한 대시보드를 느리게 느껴지게 만들 수 있습니다.",
    importanceByRole: { frontend: 10, backend: 5, devops: 4, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_262",
    term: "paint",
    definition: "페인트 (브라우저가 계산된 스타일과 레이아웃을 실제 픽셀로 화면에 그리는 단계)",
    example: "Large box shadows can increase paint cost on low-end mobile devices.",
    exampleTranslation: "큰 박스 섀도우는 저사양 모바일 기기에서 페인트 비용을 증가시킬 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 2, devops: 2, fullstack: 6, other: 5 },
    sources: []
  },
  {
    id: "w_263",
    term: "reflow",
    definition: "리플로우 (DOM이나 스타일 변화로 브라우저가 요소의 크기와 위치를 다시 계산하는 과정)",
    example: "Reading layout values inside a loop can trigger repeated reflow operations.",
    exampleTranslation: "반복문 안에서 레이아웃 값을 읽으면 반복적인 리플로우 작업이 발생할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 2, devops: 2, fullstack: 6, other: 5 },
    sources: []
  },
  {
    id: "w_264",
    term: "lazy loading",
    definition: "지연 로딩 (처음부터 모든 자원을 불러오지 않고 필요해지는 시점에 로드하는 최적화 기법)",
    example: "Lazy loading images reduces the initial loading time of the documentation page.",
    exampleTranslation: "이미지 지연 로딩은 문서 페이지의 초기 로딩 시간을 줄입니다.",
    importanceByRole: { frontend: 10, backend: 5, devops: 5, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_265",
    term: "prefetching",
    definition: "프리페칭 (곧 필요할 가능성이 높은 데이터를 미리 가져와 대기 시간을 줄이는 기법)",
    example: "The app uses prefetching to load the next study session before the user clicks start.",
    exampleTranslation: "앱은 사용자가 시작을 클릭하기 전에 다음 학습 세션을 불러오기 위해 프리페칭을 사용합니다.",
    importanceByRole: { frontend: 9, backend: 7, devops: 5, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_266",
    term: "code splitting",
    definition: "코드 스플리팅 (애플리케이션 번들을 여러 조각으로 나누어 필요한 코드만 먼저 로드하는 최적화)",
    example: "Code splitting keeps the initial JavaScript bundle smaller for first-time visitors.",
    exampleTranslation: "코드 스플리팅은 처음 방문한 사용자를 위한 초기 JavaScript 번들을 더 작게 유지합니다.",
    importanceByRole: { frontend: 10, backend: 4, devops: 6, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_267",
    term: "tree shaking",
    definition: "트리 셰이킹 (사용하지 않는 코드를 번들에서 제거해 최종 파일 크기를 줄이는 빌드 최적화)",
    example: "Tree shaking removed unused utility functions from the production bundle.",
    exampleTranslation: "트리 셰이킹은 프로덕션 번들에서 사용하지 않는 유틸리티 함수를 제거했습니다.",
    importanceByRole: { frontend: 10, backend: 4, devops: 6, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_268",
    term: "source map",
    definition: "소스맵 (압축되거나 변환된 코드와 원본 소스코드의 위치를 연결해 디버깅을 돕는 파일)",
    example: "Source maps helped the team trace the production error back to the original TypeScript file.",
    exampleTranslation: "소스맵은 팀이 프로덕션 오류를 원본 TypeScript 파일까지 추적하는 데 도움을 주었습니다.",
    importanceByRole: { frontend: 9, backend: 6, devops: 6, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_269",
    term: "cookie",
    definition: "쿠키 (브라우저가 도메인별로 저장하고 요청과 함께 전송할 수 있는 작은 데이터)",
    example: "The server sets an HTTP-only cookie after a successful login.",
    exampleTranslation: "서버는 로그인 성공 후 HTTP-only 쿠키를 설정합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 5, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_270",
    term: "session",
    definition: "세션 (사용자의 연속된 상호작용이나 인증 상태를 일정 기간 유지하는 논리적 단위)",
    example: "The application stores the current study session so users can review their answers later.",
    exampleTranslation: "애플리케이션은 사용자가 나중에 답변을 복습할 수 있도록 현재 학습 세션을 저장합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_271",
    term: "cache control",
    definition: "캐시 제어 (브라우저나 프록시가 응답을 얼마나 오래 저장하고 재사용할지 지시하는 HTTP 정책)",
    example: "Cache control headers prevent stale JavaScript files from breaking the deployed app.",
    exampleTranslation: "캐시 제어 헤더는 오래된 JavaScript 파일이 배포된 앱을 망가뜨리는 것을 방지합니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_272",
    term: "content negotiation",
    definition: "콘텐츠 협상 (클라이언트와 서버가 언어, 형식, 압축 방식 같은 응답 표현을 결정하는 과정)",
    example: "Content negotiation lets the API return JSON or CSV based on request headers.",
    exampleTranslation: "콘텐츠 협상은 요청 헤더에 따라 API가 JSON 또는 CSV를 반환할 수 있게 합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_273",
    term: "compression",
    definition: "압축 (네트워크 전송량이나 저장 공간을 줄이기 위해 데이터를 더 작은 표현으로 바꾸는 처리)",
    example: "HTTP compression reduced the size of API responses for mobile users.",
    exampleTranslation: "HTTP 압축은 모바일 사용자를 위한 API 응답 크기를 줄였습니다.",
    importanceByRole: { frontend: 8, backend: 8, devops: 8, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_274",
    term: "proxy",
    definition: "프록시 (클라이언트와 서버 사이에서 요청을 대신 전달하거나 제어하는 중간 서버)",
    example: "The development proxy forwards frontend requests to the local backend emulator.",
    exampleTranslation: "개발 프록시는 프론트엔드 요청을 로컬 백엔드 에뮬레이터로 전달합니다.",
    importanceByRole: { frontend: 8, backend: 8, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_275",
    term: "reverse proxy",
    definition: "리버스 프록시 (서버 앞단에서 클라이언트 요청을 받아 적절한 내부 서비스로 전달하는 프록시)",
    example: "A reverse proxy terminates TLS and routes traffic to multiple backend services.",
    exampleTranslation: "리버스 프록시는 TLS를 종료하고 트래픽을 여러 백엔드 서비스로 라우팅합니다.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_276",
    term: "dns",
    definition: "도메인 이름 시스템 (사람이 읽는 도메인 이름을 서버의 IP 주소로 변환하는 인터넷 기반 시스템)",
    example: "A DNS misconfiguration caused the production domain to point to the wrong load balancer.",
    exampleTranslation: "DNS 설정 오류로 인해 프로덕션 도메인이 잘못된 로드 밸런서를 가리켰습니다.",
    importanceByRole: { frontend: 6, backend: 7, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_277",
    term: "tls",
    definition: "전송 계층 보안 (네트워크 통신을 암호화하고 서버 신뢰성을 검증하는 보안 프로토콜)",
    example: "TLS protects user credentials while they travel between the browser and the server.",
    exampleTranslation: "TLS는 사용자 인증 정보가 브라우저와 서버 사이를 이동하는 동안 보호합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_278",
    term: "certificate",
    definition: "인증서 (서버의 신원을 증명하고 암호화 통신에 필요한 공개 키 정보를 제공하는 디지털 문서)",
    example: "The browser rejected the request because the certificate had expired.",
    exampleTranslation: "인증서가 만료되었기 때문에 브라우저는 요청을 거부했습니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_279",
    term: "secret",
    definition: "시크릿 (API 키, 토큰, 비밀번호처럼 코드에 노출되면 안 되는 민감한 설정값)",
    example: "Production secrets should be managed by the platform instead of hardcoded in source files.",
    exampleTranslation: "프로덕션 시크릿은 소스 파일에 하드코딩하지 말고 플랫폼이 관리해야 합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_280",
    term: "credential",
    definition: "자격 증명 정보 (사용자나 서비스의 신원을 증명하는 비밀번호, 키, 토큰 등의 정보)",
    example: "Never expose cloud credentials in client-side JavaScript bundles.",
    exampleTranslation: "클라우드 자격 증명 정보를 클라이언트 측 JavaScript 번들에 절대 노출하지 마세요.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_281",
    term: "least privilege",
    definition: "최소 권한 원칙 (사용자나 서비스가 필요한 작업을 수행하는 데 필요한 최소한의 권한만 갖도록 하는 보안 원칙)",
    example: "Apply least privilege when creating service accounts for deployment automation.",
    exampleTranslation: "배포 자동화를 위한 서비스 계정을 만들 때 최소 권한 원칙을 적용하세요.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_282",
    term: "audit log",
    definition: "감사 로그 (누가 언제 어떤 작업을 수행했는지 추적하기 위해 남기는 보안 및 운영 기록)",
    example: "Audit logs showed that the production configuration was changed by an automated deploy job.",
    exampleTranslation: "감사 로그는 프로덕션 설정이 자동 배포 작업에 의해 변경되었음을 보여주었습니다.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_283",
    term: "rollback",
    definition: "롤백 (문제가 있는 배포나 변경 사항을 이전의 안정적인 상태로 되돌리는 작업)",
    example: "The team performed a rollback after the new build increased the error rate.",
    exampleTranslation: "새 빌드가 오류율을 높인 뒤 팀은 롤백을 수행했습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_284",
    term: "rollout",
    definition: "롤아웃 (새 기능이나 버전을 사용자 또는 서버에 점진적으로 배포하는 과정)",
    example: "The rollout was paused when monitoring detected elevated latency.",
    exampleTranslation: "모니터링에서 높아진 지연 시간이 감지되자 롤아웃이 일시 중지되었습니다.",
    importanceByRole: { frontend: 8, backend: 8, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_285",
    term: "incident",
    definition: "인시던트 / 장애 사건 (서비스 품질이나 안정성에 영향을 주는 운영상의 문제 상황)",
    example: "The incident started when the cache cluster began rejecting write requests.",
    exampleTranslation: "캐시 클러스터가 쓰기 요청을 거부하기 시작하면서 장애 사건이 시작되었습니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_286",
    term: "mandatory",
    definition: "의무적인 / 필수적인 (생략하면 반드시 에러가 발생하는 요소)",
    example: "The API key parameter is mandatory for all authenticated endpoints.",
    exampleTranslation: "API 키 매개변수는 모든 인증된 엔드포인트에 필수적입니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_287",
    term: "deprecated",
    definition: "중단된 / 더 이상 권장되지 않는 (최신 버전에서 사라지거나 곧 지원이 끊길 예정인 기능)",
    example: "This method has been deprecated since version 2.4 and will be removed in the next major release.",
    exampleTranslation: "이 메서드는 2.4 버전부터 지원이 중단되었으며 다음 메이저 릴리스에서 제거될 예정입니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 9, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "w_288",
    term: "legacy",
    definition: "레거시 / 이전 버전의 (낡았거나 과거 시스템에서 호환성을 위해 남겨둔 코드/환경)",
    example: "The legacy configuration adapter is maintained solely for backward compatibility.",
    exampleTranslation: "레거시 설정 어댑터는 오직 하위 호환성을 위해서만 유지됩니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "w_289",
    term: "prerequisite",
    definition: "전제 조건 / 선행 조건 (특정 기능을 사용하거나 도구를 설치하기 전에 미리 완료해야 하는 사항)",
    example: "Having Node.js installed on your local machine is a prerequisite for this tutorial.",
    exampleTranslation: "로컬 컴퓨터에 Node.js가 설치되어 있는 것은 이 튜토리얼의 선행 조건입니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_290",
    term: "omit",
    definition: "생략하다 / 제외하다 (문서에서 값을 생략했을 때의 기본 동작을 설명할 때 자주 등장)",
    example: "If you omit the optional argument, the function defaults to the current system timestamp.",
    exampleTranslation: "선택적 인자를 생략하면 함수는 기본적으로 현재 시스템 타임스탬프를 사용합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_291",
    term: "mutable",
    definition: "가변의 / 변경 가능한 (데이터나 객체의 내부 값을 생성 후에도 바꿀 수 있는 성질)",
    example: "JavaScript objects are mutable by default, unlike frozen or primitive constants.",
    exampleTranslation: "동결되거나 원시 타입인 상수와 달리 자바스크립트 객체는 기본적으로 가변적입니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 4, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_292",
    term: "retrieve",
    definition: "검색하다 / 가져오다 (Fetch 또는 Get 연산으로 서버나 DB에서 데이터를 읽어오는 행위)",
    example: "Use the GET request method to retrieve user profile metadata from the database backend.",
    exampleTranslation: "데이터베이스 백엔드로부터 사용자 프로필 메타데이터를 가져오려면 GET 요청 메서드를 사용하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_293",
    term: "explicitly",
    definition: "명시적으로 / 분명하게 (코드나 설정에 직접 명확히 선언해야 함을 강조하는 단어)",
    example: "Unless explicitly stated otherwise, all connection timeouts are evaluated in milliseconds.",
    exampleTranslation: "명시적으로 다르게 명시되지 않는 한, 모든 연결 타임아웃은 밀리초 단위로 계산됩니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "w_294",
    term: "implicitly",
    definition: "암시적으로 / 은연중에 (코드로 적지 않아도 프레임워크나 언어가 내부 엔진에서 자동으로 처리해 주는)",
    example: "The variable type is implicitly inferred based on its assigned initial value.",
    exampleTranslation: "변수 타입은 할당된 초기값을 바탕으로 암시적으로 유추됩니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_295",
    term: "leverage",
    definition: "활용하다 / 이용하다 (기존의 라이브러리, API, 하드웨어 성능을 효과적으로 끌어다 쓰는 것)",
    example: "Developers can leverage service workers to enable robust offline functionality for web applications.",
    exampleTranslation: "개발자는 웹 애플리케이션에 견고한 오프라인 기능을 부여하기 위해 서비스 워커를 활용할 수 있습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_296",
    term: "violation",
    definition: "위반 (보안 정책, 제약 조건, 스키마 규칙을 어겼을 때 에러 메시지에 자주 나옴)",
    example: "The system threw an exception due to a strict database unique constraint violation.",
    exampleTranslation: "엄격한 데이터베이스 고유 제약 조건 위반으로 인해 시스템이 예외(에러)를 발생시켰습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_297",
    term: "agnostic",
    definition: "~에 독립적인 / 구애받지 않는 (플랫폼, 운영체제, 프레임워크의 종류에 영향받지 않는 특성)",
    example: "The core utility logic was built to be completely framework-agnostic.",
    exampleTranslation: "핵심 유틸리티 로직은 특정 프레임워크에 완전히 독립적이도록(구애받지 않도록) 빌드되었습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_298",
    term: "consecutive",
    definition: "연속적인 / 이어서 일어나는 (연속된 요청 실패, 연속된 공백 문자 등을 다룰 때 단골 등장)",
    example: "Five consecutive failed password entries will trigger a temporary account lockout scenario.",
    exampleTranslation: "5회 연속으로 비밀번호 입력을 실패하면 임시 계정 잠금 시나리오가 트리거됩니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_299",
    term: "discard",
    definition: "폐기하다 / 버리다 (유효하지 않은 패킷, 캐시 데이터, 변경 사항 등을 무시하고 없애는 행위)",
    example: "Any modifications made to the staging buffer will be discarded unless committed.",
    exampleTranslation: "커밋되지 않는 한 스테이징 버퍼에 가해진 모든 수정 사항은 폐기됩니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_300",
    term: "simultaneously",
    definition: "동시에 / 일제히 (여러 유저가 동시에 접속하거나 스레드가 같은 자원을 건드릴 때 설명)",
    example: "The database handles thousands of transactions executing simultaneously without race issues.",
    exampleTranslation: "그 데이터베이스는 경쟁 문제 없이 동시에 실행되는 수천 개의 트랜잭션을 처리합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_301",
    term: "obsolete",
    definition: "구식의 / 더 이상 쓸모없는 (완전히 지원이 만료되어 코드가 폐기된 상태를 가리킴)",
    example: "This legacy package configuration adapter is now completely obsolete and unsupported.",
    exampleTranslation: "이 레거시 패키지 설정 어댑터는 이제 완전히 구식이며 지원되지 않습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_302",
    term: "sanitize",
    definition: "정화하다 / 깨끗이 가공하다 (입력 문자열에서 악성 주입 스크립트를 걸러내는 작업)",
    example: "Always sanitize user-submitted data before appending it directly into the inner markup text nodes.",
    exampleTranslation: "내부 마크업 텍스트 노드에 직접 추가하기 전에 항상 사용자가 제출한 데이터를 정화(sanitize)하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 6, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_303",
    term: "populate",
    definition: "(데이터를) 채우다 / 거주시키다 (빈 배열이나 DB 테이블, UI 요소를 데이터로 채워 넣는 행위)",
    example: "The initialization helper will automatically populate the local testing schema with dummy data rows.",
    exampleTranslation: "초기화 도우미는 로컬 테스트 스키마를 더미 데이터 행으로 자동으로 채워 줍니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_304",
    term: "truncate",
    definition: "길이를 줄이다 / 끝을 잘라내다 (문자열이 길어 자르거나, DB 테이블의 행을 전부 비울 때 사용)",
    example: "Executing this admin command will truncate the log history table entirely.",
    exampleTranslation: "이 관리자 명령을 실행하면 로그 히스토리 테이블의 모든 데이터를 전부 비우게(잘라내게) 됩니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_305",
    term: "traverse",
    definition: "순회하다 / 가로지르다 (트리 구조나 가상 DOM, 폴더 경로 등을 위아래로 탐색하는 연산)",
    example: "The optimization script will traverse the document object model to detect unused class selectors.",
    exampleTranslation: "최적화 스크립트는 사용되지 않는 클래스 선택자를 감지하기 위해 문서 객체 모델(DOM)을 순회합니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_306",
    term: "precede",
    definition: "~에 앞서다 / 먼저 일어나다 (실행 순서나 코드 배치에서 무엇이 먼저 와야 하는지 정의할 때)",
    example: "An authorization token declaration block must precede the core api payload delivery configuration parameters.",
    exampleTranslation: "인가 토큰 선언 블록은 반드시 핵심 API 페이로드 전송 설정 매개변수보다 앞서 위치해야(먼저 처리되어야) 합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_307",
    term: "subsequent",
    definition: "그 다음의 / 차후의 (첫 단계가 성공한 후 이어지는 요청이나 연산을 칭할 때)",
    example: "The initial authentication request establishes a valid session key used for all subsequent client calls.",
    exampleTranslation: "최초의 인증 요청은 그 다음 이어지는 모든 클라이언트 호출에 사용될 유효한 세션 키를 생성합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_308",
    term: "intercept",
    definition: "가로채다 (중간에 패킷이나 API 흐름을 가로채서 조작하거나 검증하는 컴포넌트 설명용)",
    example: "The global helper routing module can intercept broken link connections to prevent error blank states.",
    exampleTranslation: "전역 헬퍼 라우팅 모듈은 빈 화면 에러를 방지하기 위해 끊어진 링크 연결을 가로챌 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_309",
    term: "resolve",
    definition: "해결하다 / 분석해 찾아내다 (에러 해결 외에도 Promise가 성공하거나, 도메인 주소가 IP로 번역되는 과정)",
    example: "DNS servers function to resolve human-readable domain names into absolute destination server IP addresses.",
    exampleTranslation: "DNS 서버는 사람이 읽을 수 있는 도메인 이름을 절대적인 목적지 서버 IP 주소로 분석해내는(찾아내는) 기능을 합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "w_310",
    term: "terminate",
    definition: "종료하다 / 강제 마감하다 (프로세스, 루프, 유저 세션, 연결 통신 등을 끝마치는 동작)",
    example: "If a cluster health check node returns a critical memory crash error, the cluster will terminate that container instance immediately.",
    exampleTranslation: "클러스터 헬스 체크 노드가 심각한 메모리 크래시 에러를 반환하면, 클러스터는 즉시 해당 컨테이너 인스턴스를 종료합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_311",
    term: "permissive",
    definition: "허용하는 / 관대한 (보안 정책이나 라이선스가 제약을 크게 두지 않는 상태)",
    example: "The MIT license is highly permissive, allowing commercial reuse with minimal restrictions.",
    exampleTranslation: "MIT 라이선스는 매우 허용적(관대)이어서 최소한의 제한으로 상업적 재사용을 허용합니다.",
    importanceByRole: { frontend: 8, backend: 8, devops: 9, fullstack: 8, other: 10 },
    sources: []
  },
  {
    id: "w_312",
    term: "restrictive",
    definition: "제한적인 / 구속력이 있는 (조건이나 보안 강도가 매우 엄격함을 뜻하는 단어)",
    example: "Production database environments usually implement more restrictive network firewalls.",
    exampleTranslation: "운영 데이터베이스 환경은 대개 더 제한적인 네트워크 방화벽을 구현합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_313",
    term: "compatibility",
    definition: "호환성 (버전 업그레이드 시 이전 코드가 깨지지 않고 돌아가는지 다룰 때의 핵심 키워드)",
    example: "Always test your codebase thoroughly to ensure backward compatibility before pushing the patch.",
    exampleTranslation: "패치를 푸시하기 전에 하위 호환성을 보장할 수 있도록 코드를 철저히 테스트하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 9, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "w_314",
    term: "enforce",
    definition: "(규칙을) 강제하다 / 적용하다 (린터 설정이나 스키마 제약 조건을 설명할 때 자주 사용)",
    example: "The strict mode compiler setting will enforce explicit return types for all public functions.",
    exampleTranslation: "엄격 모드 컴파일러 설정은 모든 퍼블릭 함수에 대해 명시적인 반환 타입을 강제합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_315",
    term: "suppress",
    definition: "억제하다 / 지우다 (에러 메시지나 경고 알림창을 안 나오게 가릴 때 명세에 등장)",
    example: "You can append a specific comment tag to suppress unwanted TypeScript linting warnings.",
    exampleTranslation: "원치 않는 TypeScript 린팅 경고를 억제하기 위해 특정 주석 태그를 추가할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_316",
    term: "nested",
    definition: "중첩된 / 내포된 (객체 안에 다른 객체가 들어가 있거나, 루프 안에 루프가 있는 구조)",
    example: "The API response contains a nested JSON structure for the user's address history.",
    exampleTranslation: "API 응답에는 사용자의 주소 이력을 위한 중첩된 JSON 구조가 포함되어 있습니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_317",
    term: "flatten",
    definition: "평탄화하다 / 단일 계층으로 만들다 (중첩된 구조를 하나의 배열이나 얕은 객체로 펼치는 작업)",
    example: "You may need to flatten the hierarchical directory tree before processing the migration asset files.",
    exampleTranslation: "마이그레이션 자산 파일들을 처리하기 전에 계층적인 디렉터리 트리를 평탄화해야 할 수도 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_318",
    term: "guarantee",
    definition: "보장하다 / 보증 (특정 네트워크 조건이나 트랜잭션 성공을 시스템이 확실히 책임진다는 의미)",
    example: "The messaging broker does not guarantee the exact ordering of delivered events under heavy loads.",
    exampleTranslation: "해당 메시징 브로커는 부하가 심할 때 전달되는 이벤트의 정확한 순서를 보장하지 않습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_319",
    term: "assume",
    definition: "가정하다 / 추정하다 (설정값이나 환경이 특정 상태라고 전제하고 작동함을 서술할 때)",
    example: "The configuration framework will assume the deployment environment is production if left unspecified.",
    exampleTranslation: "설정 프레임워크는 명시되지 않은 경우 배포 환경이 프로덕션(운영)이라고 가정합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_320",
    term: "specify",
    definition: "명시하다 / 구체적으로 적다 (파라미터나 타입을 확실하게 지정하라는 지침에 단골 등장)",
    example: "You must specify the destination layout type inside your initial setup options object.",
    exampleTranslation: "초기 설정 옵션 객체 내부에 대상 레이아웃 타입을 반드시 명시해야 합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_321",
    term: "optional",
    definition: "선택적인 (값을 주지 않아도 시스템이 기본값을 사용하여 정상 작동하는 요소)",
    example: "The profile description attribute is completely optional and can accept null inputs safely.",
    exampleTranslation: "프로필 설명 속성은 완전히 선택적이며 null 입력을 안전하게 허용할 수 있습니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_322",
    term: "isolate",
    definition: "격리하다 / 분리하다 (보안이나 간섭 방지를 위해 메모리 공간이나 네트워크 영역을 떼어놓는 것)",
    example: "Container runtimes use kernel namespaces to isolate application processing environments completely.",
    exampleTranslation: "컨테이너 런타임은 애플리케이션 처리 환경을 완전히 격리하기 위해 커널 네임스페이스를 사용합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_323",
    term: "mutate",
    definition: "변형시키다 / 값을 변경하다 (원본 데이터를 직접 수정하여 상태를 바꿀 때 쓰이는 표현)",
    example: "It is a bad practice to mutate the react state variable directly without utilizing the set method handler.",
    exampleTranslation: "set 메서드 핸들러를 활용하지 않고 React 상태 변수를 직접 변형시키는 것은 좋지 않은 관행입니다.",
    importanceByRole: { frontend: 10, backend: 8, devops: 3, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_324",
    term: "granularly",
    definition: "세밀하게 / 세분화하여 (속성이나 제어 단위를 하나하나 잘게 쪼개어 다루는 뉘앙스)",
    example: "Security policies can be granularly tailored down to the individual document node entry block level.",
    exampleTranslation: "보안 정책은 개별 문서 노드 진입 블록 수준까지 세밀하게 조정될 수 있습니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_325",
    term: "inspect",
    definition: "검사하다 / 조사하다 (디버깅 도구로 상태나 네트워크 패킷의 내부를 들여다볼 때)",
    example: "Open your web browser tools panel to inspect the exact network request headers being transmitted.",
    exampleTranslation: "전송되고 있는 정확한 네트워크 요청 헤더를 검사하려면 웹 브라우저 도구 창을 여세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_326",
    term: "comply",
    definition: "따르다 / 준수하다 (표준 규격, 보안 요구사항, API 명세를 준수해야 함을 명시할 때)",
    example: "All outbound server payloads must comply with the strict enterprise compliance security protocol guidelines.",
    exampleTranslation: "모든 외부 발송 서버 페이로드는 엄격한 기업 컴플라이언스 보안 프로토콜 가이드라인을 준수해야 합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 9, fullstack: 9, other: 9 },
    sources: []
  },
  {
    id: "w_327",
    term: "validate",
    definition: "검증하다 / 유효성을 확인하다 (입력값이 형식이나 제약 조건에 맞는지 체크하는 필수 어휘)",
    example: "Backend services always validate user credentials locally before allocating access tokens.",
    exampleTranslation: "백엔드 서비스는 액세스 토큰을 할당하기 전에 항상 로컬에서 사용자 자격 증명을 검증합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_328",
    term: "invalidate",
    definition: "무효화하다 (기존 토큰, 캐시 데이터, 세션을 만료시켜 더 이상 사용할 수 없게 폐기하는 것)",
    example: "Logging out will immediately invalidate the active JSON Web Token stored inside the global context registry.",
    exampleTranslation: "로그아웃하면 전역 컨텍스트 레지스트리 내부에 저장된 활성 JSON 웹 토큰이 즉시 무효화됩니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_329",
    term: "configure",
    definition: "설정하다 (옵션, 환경, 도구의 동작 방식을 목적에 맞게 지정하는 것)",
    example: "Configure the client before sending requests to the production API.",
    exampleTranslation: "프로덕션 API로 요청을 보내기 전에 클라이언트를 설정하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_330",
    term: "initialize",
    definition: "초기화하다 (객체, 앱, 연결 등을 사용 가능한 초기 상태로 준비하는 것)",
    example: "Initialize the SDK once at application startup.",
    exampleTranslation: "애플리케이션 시작 시 SDK를 한 번 초기화하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_331",
    term: "instantiate",
    definition: "인스턴스화하다 (클래스나 정의로부터 실제 객체를 생성하는 것)",
    example: "Instantiate the service class with a valid configuration object.",
    exampleTranslation: "유효한 설정 객체로 서비스 클래스를 인스턴스화하세요.",
    importanceByRole: { frontend: 8, backend: 9, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_332",
    term: "invoke",
    definition: "호출하다 (함수, 명령, API 작업을 실행하도록 부르는 것)",
    example: "Invoke the callback after the asynchronous task completes.",
    exampleTranslation: "비동기 작업이 완료된 후 콜백을 호출하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_333",
    term: "declare",
    definition: "선언하다 (변수, 타입, 함수, 설정 등을 코드나 문서에 명시하는 것)",
    example: "Declare the environment variable before running the deployment script.",
    exampleTranslation: "배포 스크립트를 실행하기 전에 환경 변수를 선언하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_334",
    term: "assign",
    definition: "할당하다 (변수, 속성, 권한 등에 값을 부여하는 것)",
    example: "Assign a unique identifier to each generated record.",
    exampleTranslation: "생성된 각 기록에 고유 식별자를 할당하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_335",
    term: "append",
    definition: "추가하다 / 뒤에 붙이다 (목록, 문자열, DOM 노드 등의 끝에 새 항목을 더하는 것)",
    example: "Append the new item to the existing results array.",
    exampleTranslation: "새 항목을 기존 결과 배열의 끝에 추가하세요.",
    importanceByRole: { frontend: 9, backend: 8, devops: 5, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_336",
    term: "prepend",
    definition: "앞에 붙이다 (목록이나 문자열의 시작 부분에 새 항목을 추가하는 것)",
    example: "Prepend the base URL before resolving the relative asset path.",
    exampleTranslation: "상대 자산 경로를 해석하기 전에 기본 URL을 앞에 붙이세요.",
    importanceByRole: { frontend: 8, backend: 7, devops: 5, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_337",
    term: "merge",
    definition: "병합하다 (두 개 이상의 객체, 설정, 변경 사항을 하나로 합치는 것)",
    example: "Merge the default options with the user-provided configuration.",
    exampleTranslation: "기본 옵션과 사용자가 제공한 설정을 병합하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_338",
    term: "extend",
    definition: "확장하다 (기존 기능, 클래스, 설정에 새 동작이나 속성을 더하는 것)",
    example: "Extend the base component to support custom keyboard shortcuts.",
    exampleTranslation: "사용자 지정 키보드 단축키를 지원하도록 기본 컴포넌트를 확장하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 5, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_339",
    term: "enable",
    definition: "활성화하다 (비활성 상태의 기능이나 옵션을 사용할 수 있게 켜는 것)",
    example: "Enable debug logging only in local development environments.",
    exampleTranslation: "디버그 로깅은 로컬 개발 환경에서만 활성화하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_340",
    term: "disable",
    definition: "비활성화하다 (기능, 옵션, 연결 등을 작동하지 않도록 끄는 것)",
    example: "Disable automatic retries when testing failure handling logic.",
    exampleTranslation: "실패 처리 로직을 테스트할 때 자동 재시도를 비활성화하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_341",
    term: "require",
    definition: "필요로 하다 / 요구하다 (특정 값, 조건, 권한이 반드시 있어야 함을 나타내는 것)",
    example: "This endpoint requires an authenticated user session.",
    exampleTranslation: "이 엔드포인트는 인증된 사용자 세션을 요구합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_342",
    term: "provide",
    definition: "제공하다 (값, 함수, 설정, 리소스를 다른 코드나 사용자에게 넘겨주는 것)",
    example: "Provide a fallback value when the response field is missing.",
    exampleTranslation: "응답 필드가 없을 때 대체 값을 제공하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_343",
    term: "return",
    definition: "반환하다 (함수나 API가 처리 결과를 호출자에게 돌려주는 것)",
    example: "The function returns null when no matching document exists.",
    exampleTranslation: "일치하는 문서가 없으면 함수는 null을 반환합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 5, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_344",
    term: "pass",
    definition: "전달하다 (인자, 값, 콜백, 옵션을 함수나 컴포넌트에 넘기는 것)",
    example: "Pass the user token as the second argument.",
    exampleTranslation: "사용자 토큰을 두 번째 인자로 전달하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 5, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_345",
    term: "accept",
    definition: "허용하다 / 받아들이다 (입력, 타입, 옵션, 요청을 유효한 것으로 받는 것)",
    example: "The method accepts either a string path or a URL object.",
    exampleTranslation: "이 메서드는 문자열 경로나 URL 객체를 허용합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_346",
    term: "reject",
    definition: "거부하다 (입력, 요청, Promise 등이 실패하거나 허용되지 않는 상태가 되는 것)",
    example: "The promise rejects if the network request times out.",
    exampleTranslation: "네트워크 요청이 타임아웃되면 Promise는 거부됩니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_347",
    term: "emit",
    definition: "내보내다 / 발생시키다 (이벤트, 로그, 신호 등을 외부로 전달하는 것)",
    example: "The stream emits an error event when parsing fails.",
    exampleTranslation: "파싱이 실패하면 스트림은 오류 이벤트를 발생시킵니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_348",
    term: "subscribe",
    definition: "구독하다 (이벤트, 데이터 변경, 메시지 흐름을 계속 받아보도록 등록하는 것)",
    example: "Subscribe to authentication state changes when the app starts.",
    exampleTranslation: "앱이 시작될 때 인증 상태 변경을 구독하세요.",
    importanceByRole: { frontend: 10, backend: 8, devops: 5, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_349",
    term: "unsubscribe",
    definition: "구독 해제하다 (이벤트나 데이터 변경 알림을 더 이상 받지 않도록 등록을 해제하는 것)",
    example: "Unsubscribe from the listener when the component unmounts.",
    exampleTranslation: "컴포넌트가 언마운트될 때 리스너 구독을 해제하세요.",
    importanceByRole: { frontend: 10, backend: 7, devops: 4, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_350",
    term: "expose",
    definition: "노출하다 / 공개하다 (API, 메서드, 설정, 내부 상태를 외부에서 접근 가능하게 만드는 것)",
    example: "The library exposes a helper function for custom validation.",
    exampleTranslation: "이 라이브러리는 사용자 지정 검증을 위한 헬퍼 함수를 공개합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_351",
    term: "consume",
    definition: "소비하다 / 사용하다 (API, 이벤트, 메시지, 리소스를 받아 처리하는 것)",
    example: "The worker consumes messages from the queue in batches.",
    exampleTranslation: "워커는 큐에서 메시지를 묶음 단위로 받아 처리합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_352",
    term: "obtain",
    definition: "얻다 / 획득하다 (토큰, 결과, 핸들, 리소스 등을 가져오는 것)",
    example: "Obtain a refresh token before requesting long-lived access.",
    exampleTranslation: "장기 접근을 요청하기 전에 refresh token을 획득하세요.",
    importanceByRole: { frontend: 8, backend: 9, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_353",
    term: "perform",
    definition: "수행하다 (작업, 검사, 요청, 계산 등을 실행하는 것)",
    example: "Perform input validation before writing data to the database.",
    exampleTranslation: "데이터베이스에 데이터를 쓰기 전에 입력값 검증을 수행하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_354",
    term: "refer",
    definition: "참조하다 / 가리키다 (문서, 값, 변수, 리소스를 언급하거나 연결하는 것)",
    example: "Refer to the migration guide before upgrading the package.",
    exampleTranslation: "패키지를 업그레이드하기 전에 마이그레이션 가이드를 참조하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 9 },
    sources: []
  },
  {
    id: "w_355",
    term: "include",
    definition: "포함하다 (목록, 응답, 설정, 결과 안에 특정 항목을 넣거나 가지고 있는 것)",
    example: "Include the authorization header in every protected request.",
    exampleTranslation: "보호된 모든 요청에 인가 헤더를 포함하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_356",
    term: "exclude",
    definition: "제외하다 (특정 파일, 값, 항목을 처리 대상에서 빼는 것)",
    example: "Exclude generated files from the linting process.",
    exampleTranslation: "생성된 파일은 린트 과정에서 제외하세요.",
    importanceByRole: { frontend: 9, backend: 8, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_357",
    term: "retain",
    definition: "유지하다 / 보존하다 (값, 상태, 로그, 데이터를 지우지 않고 남겨두는 것)",
    example: "Retain audit logs for at least ninety days.",
    exampleTranslation: "감사 로그를 최소 90일 동안 보존하세요.",
    importanceByRole: { frontend: 6, backend: 8, devops: 9, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_358",
    term: "release",
    definition: "해제하다 / 릴리스하다 (리소스 점유를 풀거나 새 버전을 배포하는 것)",
    example: "Release the database connection after the query finishes.",
    exampleTranslation: "쿼리가 끝난 후 데이터베이스 연결을 해제하세요.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_359",
    term: "allocate",
    definition: "할당하다 (메모리, 리소스, 용량, 권한 등을 특정 작업에 배정하는 것)",
    example: "Allocate enough memory for the build process in CI.",
    exampleTranslation: "CI에서 빌드 과정에 충분한 메모리를 할당하세요.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_360",
    term: "deallocate",
    definition: "할당 해제하다 (사용이 끝난 메모리나 리소스를 다시 반환하는 것)",
    example: "The runtime will deallocate unused objects during garbage collection.",
    exampleTranslation: "런타임은 가비지 컬렉션 중 사용하지 않는 객체를 할당 해제합니다.",
    importanceByRole: { frontend: 5, backend: 9, devops: 7, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_361",
    term: "persist",
    definition: "영속화하다 / 유지되다 (데이터나 상태가 종료 후에도 사라지지 않게 저장되는 것)",
    example: "Persist the user preferences in local storage.",
    exampleTranslation: "사용자 설정을 로컬 스토리지에 영속화하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_362",
    term: "derive",
    definition: "파생시키다 / 도출하다 (기존 값이나 상태로부터 새 값을 계산해 얻는 것)",
    example: "Derive the display label from the selected language code.",
    exampleTranslation: "선택된 언어 코드에서 표시 라벨을 도출하세요.",
    importanceByRole: { frontend: 9, backend: 8, devops: 5, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_363",
    term: "infer",
    definition: "추론하다 (명시적으로 적지 않은 타입이나 값을 주변 정보로부터 알아내는 것)",
    example: "TypeScript can infer the return type from the function body.",
    exampleTranslation: "TypeScript는 함수 본문에서 반환 타입을 추론할 수 있습니다.",
    importanceByRole: { frontend: 10, backend: 8, devops: 4, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_364",
    term: "enclose",
    definition: "감싸다 / 둘러싸다 (값, 코드 블록, 문자열을 괄호나 특정 구조 안에 넣는 것)",
    example: "Enclose string values in quotation marks when writing JSON.",
    exampleTranslation: "JSON을 작성할 때 문자열 값을 따옴표로 감싸세요.",
    importanceByRole: { frontend: 8, backend: 8, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_365",
    term: "escape",
    definition: "이스케이프하다 (특수 문자가 코드나 마크업으로 해석되지 않도록 안전하게 처리하는 것)",
    example: "Escape user input before inserting it into an HTML template.",
    exampleTranslation: "사용자 입력을 HTML 템플릿에 넣기 전에 이스케이프하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 5, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_366",
    term: "concatenate",
    definition: "연결하다 (문자열이나 배열을 이어 붙여 하나로 만드는 것)",
    example: "Concatenate the base path and the file name to build the download URL.",
    exampleTranslation: "다운로드 URL을 만들기 위해 기본 경로와 파일 이름을 연결하세요.",
    importanceByRole: { frontend: 8, backend: 8, devops: 4, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_367",
    term: "normalize",
    definition: "정규화하다 / 표준화하다 (데이터 형식이나 값의 형태를 일관되게 맞추는 것)",
    example: "Normalize email addresses before comparing user accounts.",
    exampleTranslation: "사용자 계정을 비교하기 전에 이메일 주소를 정규화하세요.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_368",
    term: "evaluate",
    definition: "평가하다 (조건, 표현식, 설정, 결과가 어떤 값이나 상태인지 판단하는 것)",
    example: "Evaluate the condition before rendering the optional section.",
    exampleTranslation: "선택적 섹션을 렌더링하기 전에 조건을 평가하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_369",
    term: "ensure",
    definition: "보장하다 / 확실히 하다 (특정 조건이나 동작이 반드시 만족되도록 확인하는 것)",
    example: "Ensure that the configuration file exists before starting the server.",
    exampleTranslation: "서버를 시작하기 전에 설정 파일이 존재하는지 확인하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "w_370",
    term: "determine",
    definition: "결정하다 / 판단하다 (조건이나 입력을 바탕으로 결과나 동작을 정하는 것)",
    example: "The runtime determines the correct handler based on the request method.",
    exampleTranslation: "런타임은 요청 메서드를 바탕으로 올바른 핸들러를 결정합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_371",
    term: "indicate",
    definition: "나타내다 / 가리키다 (상태, 의미, 원인, 결과를 신호나 값으로 보여주는 것)",
    example: "A status code of 401 indicates that authentication is required.",
    exampleTranslation: "401 상태 코드는 인증이 필요하다는 것을 나타냅니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_372",
    term: "represent",
    definition: "나타내다 / 표현하다 (값이나 객체가 특정 개념, 상태, 데이터를 대신 보여주는 것)",
    example: "Each item in the array represents a single document record.",
    exampleTranslation: "배열의 각 항목은 하나의 문서 기록을 나타냅니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_373",
    term: "define",
    definition: "정의하다 (타입, 함수, 규칙, 설정의 의미와 구조를 명확히 지정하는 것)",
    example: "Define the schema before writing validation rules.",
    exampleTranslation: "검증 규칙을 작성하기 전에 스키마를 정의하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_374",
    term: "describe",
    definition: "설명하다 / 묘사하다 (동작, 매개변수, 반환값, 제한 사항을 문장으로 알려주는 것)",
    example: "The following section describes how errors are reported to the client.",
    exampleTranslation: "다음 섹션은 오류가 클라이언트에 어떻게 보고되는지 설명합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 8, fullstack: 9, other: 9 },
    sources: []
  },
  {
    id: "w_375",
    term: "clarify",
    definition: "명확히 하다 (모호한 조건, 용어, 동작을 더 분명하게 설명하는 것)",
    example: "The note clarifies which permissions are required for deployment.",
    exampleTranslation: "이 참고 사항은 배포에 어떤 권한이 필요한지 명확히 합니다.",
    importanceByRole: { frontend: 8, backend: 8, devops: 8, fullstack: 8, other: 9 },
    sources: []
  },
  {
    id: "w_376",
    term: "attempt",
    definition: "시도하다 (작업이나 요청을 수행하려고 해보는 것)",
    example: "The client will attempt to reconnect after a short delay.",
    exampleTranslation: "클라이언트는 짧은 지연 후 재연결을 시도합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_377",
    term: "handle",
    definition: "처리하다 (입력, 오류, 이벤트, 요청을 받아 적절히 대응하는 것)",
    example: "Handle empty responses before updating the user interface.",
    exampleTranslation: "사용자 인터페이스를 업데이트하기 전에 빈 응답을 처리하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_378",
    term: "process",
    definition: "처리하다 (데이터나 요청을 단계적으로 변환하거나 계산하는 것)",
    example: "The worker processes queued jobs in the order they were received.",
    exampleTranslation: "워커는 받은 순서대로 대기 중인 작업을 처리합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_379",
    term: "convert",
    definition: "변환하다 (값, 파일, 데이터 형식을 다른 형태로 바꾸는 것)",
    example: "Convert the timestamp to a readable date before displaying it.",
    exampleTranslation: "타임스탬프를 표시하기 전에 읽기 쉬운 날짜로 변환하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_380",
    term: "transform",
    definition: "변형하다 / 변환하다 (데이터 구조나 값을 목적에 맞게 가공하는 것)",
    example: "Transform the raw API response into a view model.",
    exampleTranslation: "원시 API 응답을 뷰 모델로 변환하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 5, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_381",
    term: "compare",
    definition: "비교하다 (두 값, 상태, 버전, 객체의 차이나 같음을 확인하는 것)",
    example: "Compare the current value with the previous value before saving changes.",
    exampleTranslation: "변경 사항을 저장하기 전에 현재 값을 이전 값과 비교하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_382",
    term: "combine",
    definition: "결합하다 (여러 값, 옵션, 결과를 하나로 합쳐 사용하는 것)",
    example: "Combine the query parameters with the default filter options.",
    exampleTranslation: "쿼리 매개변수를 기본 필터 옵션과 결합하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_383",
    term: "arrange",
    definition: "배치하다 / 정렬하다 (항목이나 단계를 특정 순서나 구조로 놓는 것)",
    example: "Arrange the middleware functions from most general to most specific.",
    exampleTranslation: "미들웨어 함수를 가장 일반적인 것부터 가장 구체적인 것 순서로 배치하세요.",
    importanceByRole: { frontend: 8, backend: 8, devops: 6, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_384",
    term: "attach",
    definition: "첨부하다 / 연결하다 (리스너, 파일, 헤더, 메타데이터를 대상에 붙이는 것)",
    example: "Attach the authorization header to every outgoing request.",
    exampleTranslation: "모든 나가는 요청에 인가 헤더를 첨부하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_385",
    term: "detach",
    definition: "분리하다 / 떼어내다 (리스너, 프로세스, 연결, 리소스를 대상에서 해제하는 것)",
    example: "Detach the event listener when the modal closes.",
    exampleTranslation: "모달이 닫힐 때 이벤트 리스너를 분리하세요.",
    importanceByRole: { frontend: 9, backend: 7, devops: 6, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_386",
    term: "replace",
    definition: "대체하다 / 교체하다 (기존 값이나 요소를 새 값이나 요소로 바꾸는 것)",
    example: "Replace the deprecated option with the new configuration field.",
    exampleTranslation: "지원 중단된 옵션을 새 설정 필드로 교체하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_387",
    term: "remove",
    definition: "제거하다 (파일, 항목, 설정, 의존성을 대상에서 없애는 것)",
    example: "Remove unused dependencies before publishing the package.",
    exampleTranslation: "패키지를 게시하기 전에 사용하지 않는 의존성을 제거하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_388",
    term: "preserve",
    definition: "보존하다 / 유지하다 (기존 값, 순서, 상태를 변경하지 않고 남겨두는 것)",
    example: "Preserve the original query string when redirecting the user.",
    exampleTranslation: "사용자를 리다이렉트할 때 원래 쿼리 문자열을 보존하세요.",
    importanceByRole: { frontend: 9, backend: 8, devops: 6, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_389",
    term: "prevent",
    definition: "방지하다 (오류, 기본 동작, 보안 문제, 중복 처리가 발생하지 않게 막는 것)",
    example: "Prevent the default form submission when handling the event manually.",
    exampleTranslation: "이벤트를 수동으로 처리할 때 기본 폼 제출을 방지하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_390",
    term: "avoid",
    definition: "피하다 (문제나 비효율이 생기지 않도록 특정 방식 사용을 삼가는 것)",
    example: "Avoid storing sensitive tokens in client-side storage.",
    exampleTranslation: "민감한 토큰을 클라이언트 측 저장소에 저장하는 것을 피하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 8, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "w_391",
    term: "allow",
    definition: "허용하다 (특정 동작, 값, 접근, 요청이 가능하도록 하는 것)",
    example: "Allow only trusted domains to access this resource.",
    exampleTranslation: "신뢰할 수 있는 도메인만 이 리소스에 접근하도록 허용하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_392",
    term: "deny",
    definition: "거부하다 (접근, 요청, 권한, 작업을 허용하지 않는 것)",
    example: "Deny requests that do not include a valid access token.",
    exampleTranslation: "유효한 액세스 토큰을 포함하지 않는 요청을 거부하세요.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_393",
    term: "grant",
    definition: "부여하다 (권한, 접근, 역할, 허가를 사용자나 서비스에 주는 것)",
    example: "Grant read-only access to the reporting service account.",
    exampleTranslation: "보고 서비스 계정에 읽기 전용 접근 권한을 부여하세요.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 8, other: 8 },
    sources: []
  },
  {
    id: "w_394",
    term: "revoke",
    definition: "취소하다 / 회수하다 (권한, 토큰, 인증서 등을 더 이상 유효하지 않게 하는 것)",
    example: "Revoke the token immediately if suspicious activity is detected.",
    exampleTranslation: "의심스러운 활동이 감지되면 즉시 토큰을 회수하세요.",
    importanceByRole: { frontend: 7, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_395",
    term: "request",
    definition: "요청하다 / 요청 (클라이언트가 서버나 함수에 특정 작업을 요구하는 것)",
    example: "Request a new access token when the current one expires.",
    exampleTranslation: "현재 토큰이 만료되면 새 액세스 토큰을 요청하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_396",
    term: "respond",
    definition: "응답하다 (요청이나 이벤트에 대해 결과나 상태를 돌려주는 것)",
    example: "The server responds with a JSON object when the request succeeds.",
    exampleTranslation: "요청이 성공하면 서버는 JSON 객체로 응답합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_397",
    term: "submit",
    definition: "제출하다 / 전송하다 (폼, 요청, 작업, 데이터를 처리 대상으로 보내는 것)",
    example: "Submit the form only after all required fields are valid.",
    exampleTranslation: "모든 필수 필드가 유효한 후에만 폼을 제출하세요.",
    importanceByRole: { frontend: 10, backend: 8, devops: 5, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_398",
    term: "store",
    definition: "저장하다 (데이터, 설정, 상태를 나중에 사용할 수 있도록 보관하는 것)",
    example: "Store the user preference after the settings page is saved.",
    exampleTranslation: "설정 페이지가 저장된 후 사용자 설정을 저장하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_399",
    term: "load",
    definition: "불러오다 / 로드하다 (파일, 데이터, 모듈, 리소스를 사용할 수 있게 가져오는 것)",
    example: "Load the initial data before rendering the dashboard.",
    exampleTranslation: "대시보드를 렌더링하기 전에 초기 데이터를 불러오세요.",
    importanceByRole: { frontend: 10, backend: 8, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_400",
    term: "refresh",
    definition: "새로고침하다 / 갱신하다 (데이터, 토큰, 화면 상태를 최신 상태로 다시 가져오는 것)",
    example: "Refresh the cache after the user updates their profile.",
    exampleTranslation: "사용자가 프로필을 업데이트한 후 캐시를 갱신하세요.",
    importanceByRole: { frontend: 10, backend: 8, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_401",
    term: "update",
    definition: "업데이트하다 / 갱신하다 (기존 값이나 상태를 새 값으로 바꾸는 것)",
    example: "Update the local state after the API call completes.",
    exampleTranslation: "API 호출이 완료된 후 로컬 상태를 업데이트하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 7, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_402",
    term: "verify",
    definition: "확인하다 / 검증하다 (값, 신원, 결과가 올바른지 검사하는 것)",
    example: "Verify the signature before trusting the incoming webhook.",
    exampleTranslation: "들어오는 웹훅을 신뢰하기 전에 서명을 확인하세요.",
    importanceByRole: { frontend: 8, backend: 10, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_403",
    term: "await",
    definition: "기다리다 (비동기 작업이 완료될 때까지 다음 처리를 미루는 것)",
    example: "Await the database write before returning the success response.",
    exampleTranslation: "성공 응답을 반환하기 전에 데이터베이스 쓰기가 완료될 때까지 기다리세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 5, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_404",
    term: "trigger",
    definition: "트리거하다 / 유발하다 (이벤트, 작업, 흐름이 시작되도록 만드는 것)",
    example: "Saving the file triggers an automatic rebuild.",
    exampleTranslation: "파일을 저장하면 자동 리빌드가 트리거됩니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_405",
    term: "observe",
    definition: "관찰하다 (상태 변화, 이벤트, 성능 지표를 계속 지켜보는 것)",
    example: "Observe memory usage while running the load test.",
    exampleTranslation: "부하 테스트를 실행하는 동안 메모리 사용량을 관찰하세요.",
    importanceByRole: { frontend: 7, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_406",
    term: "monitor",
    definition: "모니터링하다 (시스템 상태나 성능을 지속적으로 측정하고 확인하는 것)",
    example: "Monitor error rates after deploying the new release.",
    exampleTranslation: "새 릴리즈를 배포한 후 오류율을 모니터링하세요.",
    importanceByRole: { frontend: 7, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_407",
    term: "maintain",
    definition: "유지하다 / 관리하다 (기능, 상태, 호환성, 코드 품질을 계속 보존하는 것)",
    example: "Maintain backward compatibility when changing public APIs.",
    exampleTranslation: "공개 API를 변경할 때 하위 호환성을 유지하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "w_408",
    term: "modify",
    definition: "수정하다 (기존 코드, 설정, 값, 문서를 변경하는 것)",
    example: "Modify the configuration only after reading the migration notes.",
    exampleTranslation: "마이그레이션 노트를 읽은 후에만 설정을 수정하세요.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  }
];
