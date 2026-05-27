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
    id: "w_033",
    term: "middleware",
    definition: "미들웨어 (요청과 응답 사이에서 목적에 맞는 처리를 수행하는 중간 소프트웨어)",
    example: "Express middleware functions can execute code and modify request objects.",
    exampleTranslation: "Express 미들웨어 함수는 코드를 실행하고 요청 객체를 수정할 수 있습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_034",
    term: "payload",
    definition: "페이로드 (전송되는 데이터에서 오버헤드를 제외한 실제 데이터 내용물)",
    example: "The HTTP POST request payload contains the user registration details.",
    exampleTranslation: "HTTP POST 요청 페이로드에는 사용자 등록 세부 정보가 포함되어 있습니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_035",
    term: "serialize",
    definition: "직렬화하다 (객체나 데이터 구조를 전송 또는 저장 가능한 포맷으로 변환하는 것)",
    example: "JSON.stringify is used to serialize a JavaScript object into a string.",
    exampleTranslation: "JSON.stringify는 자바스크립트 객체를 문자열로 직렬화하는 데 사용됩니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 5, fullstack: 9, other: 6 },
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
    id: "w_037",
    term: "concurrency",
    definition: "동시성 (여러 작업이 마치 동시에 일어나는 것처럼 인터리빙되어 실행되는 성질)",
    example: "Go handles high concurrency efficiently using goroutines.",
    exampleTranslation: "Go 언어는 고루틴을 사용하여 높은 동시성을 효율적으로 처리합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 8, fullstack: 9, other: 7 },
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
    id: "w_039",
    term: "idempotent",
    definition: "멱등성의 (연산을 여러 번 적용하더라도 결과가 달라지지 않는 성질)",
    example: "An idempotent API endpoint produces the same result no matter how many times it is called.",
    exampleTranslation: "멱등성을 가진 API 엔드포인트는 아무리 여러 번 호출해도 동일한 결과를 생성합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_040",
    term: "telemetry",
    definition: "원격 측정 데이터 (시스템의 원격 성능 모니터링을 위해 수집되는 로그, 메트릭, 트레이스 등의 정보)",
    example: "OpenTelemetry helps developers collect telemetry data from cloud-native software.",
    exampleTranslation: "OpenTelemetry는 개발자가 클라우드 네이티브 소프트웨어에서 원격 측정 데이터를 수집하도록 도와줍니다.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_041",
    term: "provision",
    definition: "프로비저닝하다 (사용자의 요구에 맞게 인프라 자원을 준비, 할당, 설정해 두는 것)",
    example: "Terraform allows you to provision infrastructure using code.",
    exampleTranslation: "Terraform을 사용하면 코드를 사용하여 인프라를 프로비저닝할 수 있습니다.",
    importanceByRole: { frontend: 3, backend: 8, devops: 10, fullstack: 7, other: 6 },
    sources: []
  },
  {
    id: "w_042",
    term: "orchestration",
    definition: "오케스트레이션 (복잡한 컴퓨터 시스템, 서비스, 컨테이너 등의 배치와 관리를 자동화하는 것)",
    example: "Kubernetes is a powerful tool for container orchestration.",
    exampleTranslation: "쿠버네티스는 컨테이너 오케스트레이션을 위한 강력한 도구입니다.",
    importanceByRole: { frontend: 3, backend: 8, devops: 10, fullstack: 7, other: 6 },
    sources: []
  },
  {
    id: "w_043",
    term: "manifest",
    definition: "매니페스트 (메타데이터나 배포 설정, 리소스 정의 등을 포함하고 있는 명세 파일)",
    example: "You need to apply the Kubernetes manifest file to deploy the application.",
    exampleTranslation: "애플리케이션을 배포하려면 쿠버네티스 매니페스트 파일을 적용해야 합니다.",
    importanceByRole: { frontend: 4, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_044",
    term: "persistence",
    definition: "지속성 / 영속성 (애플리케이션이 종료되어도 데이터가 사라지지 않고 유지되는 성질)",
    example: "Docker containers use volumes to achieve data persistence.",
    exampleTranslation: "도커 컨테이너는 데이터 영속성을 달성하기 위해 볼륨을 사용합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_045",
    term: "latency",
    definition: "지연 시간 (자극과 반응 사이의 시간, 혹은 데이터 패킷이 목적지에 도달하는 데 걸리는 시간)",
    example: "We must optimize database queries to reduce response latency.",
    exampleTranslation: "응답 지연 시간을 줄이기 위해 데이터베이스 쿼리를 최적화해야 합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 9, other: 7 },
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
    id: "w_047",
    term: "throttle",
    definition: "스토틀링 (자원의 과도한 사용을 막기 위해 API 요청이나 이벤트 실행 빈도를 강제로 제한하는 것)",
    example: "The API will throttle clients who exceed 100 requests per minute.",
    exampleTranslation: "해당 API는 분당 100회 요청을 초과하는 클라이언트의 요청 빈도를 제한합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_048",
    term: "debounce",
    definition: "디바운싱 (짧은 시간 동안 연속된 이벤트를 그룹화하여 마지막(혹은 처음) 하나만 처리하는 기술)",
    example: "Debounce the window resize event to prevent performance degradation.",
    exampleTranslation: "성능 저하를 방지하기 위해 창 크기 조정 이벤트를 디바운싱 처리하세요.",
    importanceByRole: { frontend: 10, backend: 4, devops: 3, fullstack: 7, other: 5 },
    sources: []
  },
  {
    id: "w_049",
    term: "propagate",
    definition: "전파하다 (이벤트나 상태값, 에러 등이 계층 구조나 네트워크를 통해 퍼져 나가는 것)",
    example: "Exceptions will propagate up the call stack if they are not caught.",
    exampleTranslation: "예외가 처리되지 않으면 콜 스택을 따라 위로 전파됩니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_050",
    term: "fallback",
    definition: "대체 솔루션 (시스템 오류나 기능 실패 시 정상 작동을 위해 대신 실행되는 예비 메커니즘)",
    example: "The application provides a offline fallback mode when internet connection is lost.",
    exampleTranslation: "인터넷 연결이 끊기면 애플리케이션은 오프라인 대체 모드를 제공합니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 9, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_051",
    term: "override",
    definition: "오버라이드 / 재정의하다 (상속관계나 기본값으로 설정된 동작을 무시하고 새로 정의하는 것)",
    example: "Subclasses can override methods of their parent class.",
    exampleTranslation: "서브클래스는 부모 클래스의 메서드를 재정의할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_052",
    term: "interceptor",
    definition: "인터셉터 (요청이 목적지에 도달하기 전이나 응답이 반환되기 전에 중간에서 가로채는 컴포넌트)",
    example: "We use an HTTP interceptor to automatically inject bearer tokens.",
    exampleTranslation: "우리는 베어러 토큰을 자동으로 주입하기 위해 HTTP 인터셉터를 사용합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 5, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_053",
    term: "stateless",
    definition: "무상태의 (이전 요청의 상태나 세션 정보를 보존하지 않고 각 요청을 독립적으로 처리하는 방식)",
    example: "JWT enables stateless authentication, which scales beautifully.",
    exampleTranslation: "JWT는 무상태 인증을 가능하게 하여 확장성이 매우 뛰어납니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_054",
    term: "granular",
    definition: "세밀한 (더 이상 쪼개기 힘들 정도로 아주 상세하게 제어 또는 분할된 상태)",
    example: "Microservices provide more granular control over resource allocation.",
    exampleTranslation: "마이크로서비스는 자원 할당에 대해 더 세밀한 제어를 제공합니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_055",
    term: "redundancy",
    definition: "중복성 / 이중화 (시스템 장애 발생 시 복구를 위해 의도적으로 복수의 자원을 배치하는 것)",
    example: "Infrastructure redundancy minimizes the risk of a single point of failure.",
    exampleTranslation: "인프라 이중화는 단일 장애점(SPOF)의 위험을 최소화합니다.",
    importanceByRole: { frontend: 4, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_056",
    term: "migration",
    definition: "마이그레이션 (데이터베이스 스키마를 변경하거나 시스템을 새로운 환경으로 전환하는 작업)",
    example: "Please run the migration script to update the production database.",
    exampleTranslation: "운영 데이터베이스를 업데이트하려면 마이그레이션 스크립트를 실행해 주세요.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 7 },
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
    id: "w_071",
    term: "payload",
    definition: "페이로드 (프로토콜 오버헤드나 메타데이터를 제외하고 실제 전송하고자 하는 데이터 본문)",
    example: "The webhook payload contains event data sent by the third-party service.",
    exampleTranslation: "웹훅 페이로드에는 서드파티 서비스가 전송한 이벤트 데이터가 포함되어 있습니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 10, other: 7 },
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
    id: "w_073",
    term: "stateless",
    definition: "무상태의 (서버가 클라이언트의 이전 상태를 저장하지 않고 각각의 요청을 완전히 독립적으로 처리하는 구조)",
    example: "Because JWT tokens contain all necessary information, the authentication mechanism is stateless.",
    exampleTranslation: "JWT 토큰은 필요한 모든 정보를 포함하고 있기 때문에 인증 메커니즘이 무상태로 유지됩니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
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
    id: "w_078",
    term: "concurrency",
    definition: "동시성 (단일 코어에서 여러 작업이 번갈아 실행되며 동시에 실행되는 것처럼 보이는 논리적 성질)",
    example: "Node.js achieves high concurrency despite being single-threaded thanks to its non-blocking event loop.",
    exampleTranslation: "Node.js는 논블로킹 이벤트 루프 덕분에 싱글 스레드임에도 불구하고 높은 동시성을 달성합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_079",
    term: "parallelism",
    definition: "병렬성 (멀티 코어 환경에서 여러 작업이 물리적으로 완벽히 동일한 시간에 나누어 실행되는 물리적 성질)",
    example: "Using Web Workers in browsers allows you to leverage parallelism for heavy computations.",
    exampleTranslation: "브라우저에서 Web Worker를 사용하면 무거운 연산을 위해 병렬성을 활용할 수 있습니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 8, fullstack: 8, other: 7 },
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
    id: "w_082",
    term: "idempotent",
    definition: "멱등성의 (작업을 여러 번 수행하더라도 시스템의 최종 상태가 동일하게 유지되는)",
    example: "Ensuring that setup scripts are idempotent allows them to be rerun safely at any time.",
    exampleTranslation: "설정 스크립트를 멱등하게 만들면 언제든 안전하게 다시 실행할 수 있습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 10, fullstack: 9, other: 7 },
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
    id: "w_084",
    term: "latency",
    definition: "지연 시간 (요청을 보낸 시점부터 데이터 전송이나 처리가 시작되거나 완료될 때까지 걸리는 시간 인터벌)",
    example: "Deploying servers closer to users via edge computing reduces latency.",
    exampleTranslation: "엣지 컴퓨팅을 통해 서버를 사용자에게 더 가깝게 배치하면 지연 시간이 단축됩니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_085",
    term: "throughput",
    definition: "처리량 (시스템이 특정 시간 동안 성공적으로 처리할 수 있는 데이터나 트랜잭션의 총량)",
    example: "Load tests were conducted to evaluate the maximum throughput of our API gateway.",
    exampleTranslation: "우리 API 게이트웨이의 최대 처리량을 평가하기 위해 부하 테스트가 진행되었습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 10, fullstack: 9, other: 7 },
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
    id: "w_087",
    term: "telemetry",
    definition: "원격 측정 데이터 (시스템의 동작 상태를 파악하기 위해 실시간으로 수집하고 전송하는 메트릭, 로그 등의 진단 정보)",
    example: "Disabling telemetry in the IDE configuration stops the software from sending usage analytics.",
    exampleTranslation: "IDE 설정에서 원격 측정 데이터를 비활성화하면 소프트웨어가 사용 분석 정보를 전송하는 것을 중단합니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
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
    id: "w_089",
    term: "orchestration",
    definition: "오케스트레이션 (수많은 컨테이너나 서비스들의 생명주기, 네트워크 설정, 배치를 중앙에서 자동화하고 조율하는 관리 기술)",
    example: "Microservices architectures usually rely on orchestration platforms to maintain system health.",
    exampleTranslation: "마이크로서비스 아키텍처는 일반적으로 시스템 헬스를 유지하기 위해 오케스트레이션 플랫폼에 의존합니다.",
    importanceByRole: { frontend: 3, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_090",
    term: "manifest",
    definition: "매니페스트 (배포 단위나 시스템 구성에 필요한 파일 목록, 버전, 인프라 상태 정의 등을 선언적으로 명시한 메타데이터 파일)",
    example: "The deployment failed because of a syntax error inside the YAML manifest.",
    exampleTranslation: "YAML 매니페스트 파일 내부의 구문 오류로 인해 배포가 실패했습니다.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_091",
    term: "persistence",
    definition: "지속성 / 영속성 (프로그램이 종료되거나 프로세스가 재시작되어도 생성된 데이터가 스토리지 등에 온전히 보존되는 성질)",
    example: "Local storage provides data persistence within the user's browser session.",
    exampleTranslation: "로컬 스토리지는 사용자 브라우저 세션 범위 내에서 데이터 영속성을 제공합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_092",
    term: "fallback",
    definition: "대체 작동 / 폴백 (주 기능이 실패하거나 시스템에 장애가 났을 때 우아하게 대처하기 위해 제공되는 차선책이나 안전장치)",
    example: "If the primary database goes down, the system triggers an automatic fallback to the read replica.",
    exampleTranslation: "기본 데이터베이스가 다운되면 시스템은 읽기 전용 복제본으로의 자동 폴백을 수행합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_093",
    term: "interceptor",
    definition: "인터셉터 (프레임워크나 라이브러리 수준에서 요청이나 응답을 최종 목적지 직전에 가로채 조작할 수 있도록 돕는 컴포넌트)",
    example: "An error interceptor can log every failing HTTP connection globally.",
    exampleTranslation: "에러 인터셉터를 사용하면 실패하는 모든 HTTP 연결을 전역적으로 로깅할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 5, fullstack: 9, other: 6 },
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
    id: "w_095",
    term: "redundancy",
    definition: "이중화 / 중복성 (일부 인프라에 결함이 생겨도 서비스 중단이 없도록 의도적으로 예비 자원을 여분으로 준비해 두는 아키텍처 구조)",
    example: "Redundancy is heavily utilized in high availability setups to minimize downtime.",
    exampleTranslation: "가동 중지 시간을 최소화하기 위한 고가용성 구성에서는 이중화가 집중적으로 활용됩니다.",
    importanceByRole: { frontend: 4, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_096",
    term: "migration",
    definition: "마이그레이션 (데이터베이스 구조 변경, 신규 클라우드로의 시스템 이전 등 기존 운영 환경을 다른 형태로 변형하여 이동시키는 작업)",
    example: "The seamless data migration was executed without dropping a single record.",
    exampleTranslation: "단 하나의 레코드 유실도 없이 원활한 데이터 마이그레이션이 실행되었습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 7 },
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
    id: "w_099",
    term: "sanitization",
    definition: "정화 / 새니타이징 (입력 폼 등으로 들어오는 텍스트 데이터에 포함된 위험한 태그나 제어 문자를 사전에 무해하게 걸러내거나 이스케이프하는 작업)",
    example: "Without proper text sanitization, your web application is heavily exposed to SQL injection.",
    exampleTranslation: "적절한 텍스트 정화 작업이 없다면, 웹 애플리케이션은 SQL 인젝션 공격에 심각하게 노출됩니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 6, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_100",
    term: "override",
    definition: "오버라이드 / 재정의 (상위 클래스나 시스템의 기본 동작 방식을 하위 컴포넌트에서 같은 시그니처를 사용해 덮어쓰고 새로 정의하는 행위)",
    example: "You can use environment variables to override the hardcoded configurations.",
    exampleTranslation: "하드코딩된 설정값들을 덮어쓰기 위해 환경 변수를 사용할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
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
    id: "w_124",
    term: "telemetry",
    definition: "원격 측정 (원격 시스템의 메트릭, 로그, 트레이스 정보를 모니터링하기 위해 실시간 자동 수집하는 과정)",
    example: "Telemetry features give engineers a deep insight into how apps perform under heavy loads.",
    exampleTranslation: "원격 측정 기능은 엔지니어들에게 앱이 과부하 상태에서 어떻게 작동하는지에 대한 깊은 통찰을 제공합니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
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
    id: "w_126",
    term: "idempotent",
    definition: "멱등성의 (동일한 명령이나 API를 반복 호출해도 부작용 없이 한 번 실행한 것과 완전히 같은 결과 상태를 내는)",
    example: "An idempotent deployment script can run multiple times without corrupting environment setups.",
    exampleTranslation: "멱등성을 가진 배포 스크립트는 환경 설정을 망가뜨리지 않고 여러 번 실행할 수 있습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_127",
    term: "middleware",
    definition: "미들웨어 (OS와 애플리케이션 사이, 혹은 요청과 응답 흐름의 중간에 위치하여 가로채기나 제어를 수행하는 소프트웨어)",
    example: "We can write custom middleware to handle corporate token validation.",
    exampleTranslation: "우리는 기업용 토큰 검증을 처리하기 위한 커스텀 미들웨어를 작성할 수 있습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_128",
    term: "payload",
    definition: "페이로드 (헤더, 검증 데이터 등을 제외하고 실제 비즈니스 로직에 실어 보내는 데이터 본체)",
    example: "The webhook event payload contains specific metadata about the user's transaction.",
    exampleTranslation: "웹훅 이벤트 페이로드에는 사용자의 트랜잭션에 대한 구체적인 메타데이터가 들어 있습니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_129",
    term: "serialization",
    definition: "직렬화 (메모리 상의 객체를 네트워크 전송이나 파일 저장을 위해 일렬로 늘어선 문자열/바이트 단위로 가공하는 과정)",
    example: "XML and JSON are common serialization formats used across distributed microservices.",
    exampleTranslation: "XML과 JSON은 분산 마이크로서비스 전체에서 흔히 사용되는 직렬화 포맷입니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_130",
    term: "deserialization",
    definition: "역직렬화 (스트림이나 JSON 텍스트 상태의 데이터를 구문 분석하여 다시 본래 객체의 형태로 조립하는 과정)",
    example: "The application threw an error during deserialization due to an unmapped property.",
    exampleTranslation: "매핑되지 않은 프로퍼티 때문에 역직렬화 도중 애플리케이션이 에러를 발생시켰습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_131",
    term: "latency",
    definition: "지연 시간 (자원이 요청을 인식하고 응답 데이터를 실제로 전송하기 시작할 때까지 소비되는 대기 시간)",
    example: "Network latency can be minimized by utilizing edge compute caching models.",
    exampleTranslation: "네트워크 지연 시간은 엣지 컴퓨팅 캐싱 모델을 활용함으로써 최소화할 수 있습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_132",
    term: "throughput",
    definition: "처리량 (시스템이 주어진 일정 시간 범위 동안 성공적으로 완수해 낸 데이터 처리 건수나 용량)",
    example: "To support millions of active connections, we must optimize database read throughput.",
    exampleTranslation: "수백만 개의 활성 연결을 지원하려면 데이터베이스 읽기 처리량을 최적화해야 합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_133",
    term: "throttle",
    definition: "스로틀 / 조절 (과도한 부하 차단을 위해 데이터 유입 속도나 실행 주기를 제한 제어하는 행위)",
    example: "We throttle unauthorized login attempts to protect against brute-force security attacks.",
    exampleTranslation: "무차별 대입 보안 공격을 방어하기 위해 비인증 로그인 시도를 스로틀링(제한)합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_134",
    term: "debounce",
    definition: "디바운스 (빠르게 이어지는 이벤트를 감지하여 마지막 요청이 끝난 후 일정 시간 뒤 단 한 번만 반응하게 하는 기법)",
    example: "Debounce input event listeners to drastically lower unnecessary API loads.",
    exampleTranslation: "불필요한 API 부하를 획기적으로 낮추기 위해 입력 이벤트 리스너를 디바운스 처리하세요.",
    importanceByRole: { frontend: 10, backend: 4, devops: 3, fullstack: 7, other: 5 },
    sources: []
  },
  {
    id: "w_135",
    term: "sanitization",
    definition: "새니타이징 / 정화 (입력값에 섞인 유해한 HTML 코드나 이진 제어 기호를 이스케이프 또는 필터링하는 보안 처리)",
    example: "Malicious inputs must undergo proper sanitization to prevent Cross-Site Scripting injections.",
    exampleTranslation: "크로스 사이트 스크립팅(XSS) 인젝션을 막기 위해 악성 입력값은 적절한 정화 과정을 거쳐야 합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 6, fullstack: 10, other: 8 },
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
    id: "w_141",
    term: "idempotent",
    definition: "멱등성의 (동일한 작업을 수없이 반복 실행해도 시스템의 최종 결과가 항상 일관되게 유지되는)",
    example: "An idempotent API ensure safety even if the network retries the exact same transaction request.",
    exampleTranslation: "멱등성 API는 네트워크가 완전히 동일한 트랜잭션 요청을 재시도하더라도 안전성을 보장합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_142",
    term: "asynchronous",
    definition: "비동기식의 (호출된 작업의 완료를 기다리지 않고 다음 줄의 코드를 즉시 계속 실행하는 방식)",
    example: "Asynchronous processing prevents the browser layout from freezing during large file uploads.",
    exampleTranslation: "비동기 처리는 대용량 파일 업로드 중에 브라우저 레이아웃이 멈추는 것을 방지합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 6, fullstack: 10, other: 7 },
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
    id: "w_144",
    term: "concurrency",
    definition: "동시성 (단일 코어가 여러 작업을 잘게 쪼개어 번갈아 수행함으로써 동시에 진행되는 것처럼 보이게 하는 성질)",
    example: "Handling database concurrency correctly requires strict isolation levels to prevent data corruption.",
    exampleTranslation: "데이터베이스 동시성을 올바르게 처리하려면 데이터 손상을 방지하기 위한 엄격한 격리 수준이 필요합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_145",
    term: "parallelism",
    definition: "병렬성 (멀티 코어 프로세서가 여러 개의 연산 작업을 물리적으로 완전히 동일한 시간에 동시 실행하는 성질)",
    example: "Parallelism leverages multi-threading computing architectures to process heavy data matrices.",
    exampleTranslation: "병렬성은 대용량 데이터 행렬을 프로세싱하기 위해 멀티스레딩 컴퓨팅 아키텍처를 활용합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 8, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_146",
    term: "provisioning",
    definition: "프로비저닝 (클라우드 환경에서 가상 인프라 자원을 자동으로 할당하고 사용할 수 있도록 구성하는 작업)",
    example: "Shell scripts were replaced by Infrastructure as Code tools for more robust server provisioning.",
    exampleTranslation: "더 견고한 서버 프로비저닝을 위해 쉘 스크립트가 코드 기반 인프라(IaC) 도구로 대체되었습니다.",
    importanceByRole: { frontend: 3, backend: 8, devops: 10, fullstack: 7, other: 6 },
    sources: []
  },
  {
    id: "w_147",
    term: "orchestration",
    definition: "오케스트레이션 (복잡하게 분산된 다수의 서버, 컨테이너, 네트워크 환경을 중앙에서 통합 제어하고 자동 관리하는 기술)",
    example: "Container orchestration tools coordinate networking and storage configurations dynamically.",
    exampleTranslation: "컨테이너 오케스트레이션 도구는 네트워킹 및 스토리지 설정을 동적으로 조율합니다.",
    importanceByRole: { frontend: 3, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_148",
    term: "telemetry",
    definition: "원격 측정 (원격 시스템 인프라 내부에서 생성되는 모니터링 목적의 가용성, 로그, 성능 지표 데이터 수집 체계)",
    example: "Telemetry collection must be optimized to ensure it does not cause additional resource overhead.",
    exampleTranslation: "원격 측정 데이터 수집은 추가적인 자원 오버헤드를 유발하지 않도록 최적화되어야 합니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_149",
    term: "observability",
    definition: "관찰 가능성 (시스템 외부로 수집되는 지표 데이터를 바탕으로 복잡한 내부 동작 상태를 유추하고 진단해낼 수 있는 역량)",
    example: "Distributed tracing is a key pillar of observability in complex backend microservices.",
    exampleTranslation: "분산 트레이싱은 복잡한 백엔드 마이크로서비스에서 관찰 가능성을 구성하는 핵심 기둥입니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_150",
    term: "persistence",
    definition: "영속성 / 지속성 (프로세스가 꺼지거나 하드웨어가 재부팅되어도 생성된 정보 데이터가 영구히 저장 및 유지되는 성질)",
    example: "Object-relational mapping frameworks simplify entity persistence by connecting classes directly to tables.",
    exampleTranslation: "객체 관계 매핑(ORM) 프레임워크는 클래스를 테이블에 직접 연결함으로써 엔티티 영속성을 단순화합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_151",
    term: "fallback",
    definition: "폴백 / 대체 작동 (주 시스템 실패 시 사용자 경험 중단이나 크래시를 막기 위해 사전에 정의해 둔 예비 안전장치)",
    example: "We implemented a custom component fallback UI using React Error Boundary hooks.",
    exampleTranslation: "우리는 React Error Boundary 훅을 사용하여 커스텀 컴포넌트 폴백 UI를 구현했습니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 9, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_152",
    term: "interceptor",
    definition: "인터셉터 (요청이나 데이터 전송 패킷이 최종 처리기에 닿기 전에 중간에서 낚아채 부가 로직을 주입하는 객체)",
    example: "The interceptor appends a specific correlation ID to every outbound system request.",
    exampleTranslation: "인터셉터는 모든 외부로 나가는 시스템 요청에 특정 상관관계 ID(Correlation ID)를 추가합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 5, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_153",
    term: "granularity",
    definition: "세분성 / 입도 (모듈, 권한, 데이터 테이블 등이 얼마나 상세하고 잘게 쪼개져 있는지를 나타내는 정도)",
    example: "Fine granularity provides better security access options but increases system complexity.",
    exampleTranslation: "미세한 세분성은 더 나은 보안 접근 옵션을 제공하지만 시스템 복잡성을 증가시킵니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_154",
    term: "redundancy",
    definition: "이중화 / 중복성 (일부 인프라 장비의 예기치 못한 물리 장애에 대처하기 위해 동일 자원을 여분으로 가동하는 아키텍처)",
    example: "Network route redundancy prevents a single clipped cable from bringing down the datacenter.",
    exampleTranslation: "네트워크 경로 이중화는 단 한 개의 케이블 절단이 데이터센터를 다운시키는 것을 방지합니다.",
    importanceByRole: { frontend: 4, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_155",
    term: "migration",
    definition: "마이그레이션 (데이터 스키마 버전 업데이트 혹은 새로운 플랫폼 인프라 환경으로 데이터를 이전하는 가공 작업)",
    example: "Automated database migration scripts must roll back completely if an unexpected execution error occurs.",
    exampleTranslation: "자동화된 데이터베이스 마이그레이션 스크립트는 예기치 않은 실행 오류 발생 시 완전히 롤백되어야 합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_156",
    term: "throttling",
    definition: "스로틀링 (과도한 서비스 트래픽 유입 시 가용성 확보를 위해 인위적으로 요청 처리 한도나 대역폭 속도를 제어하는 방식)",
    example: "The system triggers throttling metrics when a user exceeds the standard API tier bandwidth.",
    exampleTranslation: "사용자가 표준 API 티어 대역폭을 초과하면 시스템은 스로틀링 메트릭을 트리거합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_157",
    term: "debouncing",
    definition: "디바운싱 (단기간 내 연이어 입력되는 신호들을 필터링하여 지연시간 만료 후 최종 1회만 유효 처리하는 최적화 기법)",
    example: "Implementing debouncing logic on user window search input filters eliminates unnecessary query loads.",
    exampleTranslation: "사용자 창 검색 입력 필터에 디바운싱 로직을 구현하면 불필요한 쿼리 부하가 제거됩니다.",
    importanceByRole: { frontend: 10, backend: 4, devops: 3, fullstack: 7, other: 5 },
    sources: []
  },
  {
    id: "w_158",
    term: "sanitization",
    definition: "정화 / 새니타이징 (입력 필드를 통해 유입된 원시 문자열에서 악성 스크립트 코드 요소를 필터링하여 안전하게 가공하는 보안)",
    example: "Sanitization engines strip out potential code block script tags from user profile comment text fields.",
    exampleTranslation: "정화 엔진은 사용자 프로필 댓글 텍스트 필드에서 잠재적인 코드 블록 스크립트 태그를 벗겨냅니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 6, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_159",
    term: "override",
    definition: "오버라이드 / 재정의 (상위 계층의 설정이나 클래스가 보유한 기존 메서드 명세를 하위 컨텍스트에서 무시하고 변경하는 행위)",
    example: "Children layouts can override global thematic tailwind padding settings when specified locally.",
    exampleTranslation: "하위 레이아웃은 로컬에 지정되었을 때 전역 테마 tailwind 패딩 설정을 덮어쓸(오버라이드할) 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
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
    id: "w_161",
    term: "idempotency",
    definition: "멱등성 (동일한 연산이나 요청 처리를 수차례 가하더라도 최초 1회 처리와 완전히 일치하는 동일 결과 상태를 갖는 특성)",
    example: "Idempotency tokens are absolutely mandatory for developing secure financial transaction ledger endpoints.",
    exampleTranslation: "안전한 금융 거래 장부 엔드포인트를 개발하려면 멱등성 토큰이 절대적으로 필수적입니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 8, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_162",
    term: "manifest",
    definition: "매니페스트 (빌드 산출물 정보, 패키지 구성 메타데이터, 클라우드 리소스 설정 규격을 구조화해 기재한 선언서 파일)",
    example: "Ensure your docker container runtime points to the matching build architecture image manifest file.",
    exampleTranslation: "도커 컨테이너 런타임이 일치하는 빌드 아키텍처 이미지 매니페스트 파일을 가리키고 있는지 확인하세요.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_163",
    term: "payload",
    definition: "페이로드 (프로토콜 제어 코드나 전송 메타데이터 레이어를 제외한 전송 대상 본연의 순수 가치 데이터 덩어리)",
    example: "We minimized the HTTP transmission network cost by reducing the size of our JSON payload.",
    exampleTranslation: "우리는 JSON 페이로드 크기를 줄임으로써 HTTP 전송 네트워크 비용을 최소화했습니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_164",
    term: "serialization",
    definition: "직렬화 (메모리 구조체나 오브젝트 개체를 저장, 전송하기 용이한 일렬의 텍스트나 바이트 바이트 단위 배열로 바꾸는 것)",
    example: "The class instance failed serialization because it contained a non-serializable websocket file pointer property.",
    exampleTranslation: "클래스 인스턴스가 직렬화 불가능한 웹소켓 파일 포인터 프로퍼티를 포함하고 있어 직렬화에 실패했습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_165",
    term: "deserialization",
    definition: "역직렬화 (전송받은 데이터 스트림이나 문자열 플랫 포맷을 파싱하여 본래의 인메모리 구조 객체 상태로 복구하는 작업)",
    example: "The client application experienced a crash when the deserialization schema did not match the API response server version.",
    exampleTranslation: "역직렬화 스키마가 API 응답 서버 버전과 일치하지 않을 때 클라이언트 애플리케이션에 크래시가 발생했습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_166",
    term: "latency",
    definition: "지연 시간 (데이터 송신 혹은 어떤 작업 명령이 하달된 직후 실질적인 첫 반응이나 처리가 개시될 때까지 걸리는 대기 시차)",
    example: "Engineers used multi-region read replicas to solve deep database latency blockers for international clients.",
    exampleTranslation: "엔지니어들은 해외 고객들의 심각한 데이터베이스 지연 시간 병목을 해결하기 위해 멀티 리전 읽기 복제본을 사용했습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_167",
    term: "throughput",
    definition: "처리량 (정해진 단위 시간 범위 동안 컴퓨터 시스템 하드웨어가 완수해 낼 수 있는 작업 트랜잭션의 실질 가동 용량 총계)",
    example: "Optimizing the event-driven loop configuration increased the microservice server throughput by nearly forty percent.",
    exampleTranslation: "이벤트 기반 루프 설정을 최적화함으로써 마이크로서비스 서버 처리량이 거의 40% 증가했습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_168",
    term: "stateless",
    definition: "무상태의 (개별 요청이 독립적이며 서버 메모리에 이전 기록이나 세션 컨텍스트 데이터를 남기지 않는 방식)",
    example: "Stateless nodes are effortless to auto-scale horizontally because any cluster instance can process any request payload.",
    exampleTranslation: "무상태 노드는 어떤 클러스터 인스턴스든 어떤 요청 페이로드든 처리할 수 있기 때문에 수평적으로 자동 확장하기 매우 쉽습니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_169",
    term: "stateful",
    definition: "상태 유지의 (이전 클라이언트 요청 및 히스토리 컨텍스트 세션 정보 상태를 메모리나 캐시에 지속적으로 유지 관리하는 구조)",
    example: "Stateful streaming pipelines require localized persistent storage solutions to handle window aggregation computations.",
    exampleTranslation: "상태 유지 스트리밍 파이프라인은 윈도우 집계 연산을 처리하기 위해 로컬화된 영속성 스토리지 솔루션을 필요로 합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_170",
    term: "middleware",
    definition: "미들웨어 (요청과 응답 엔드포인트 파이프라인 정중앙 레이어에 배치되어 공통 비즈니스 로직 연산을 대행하는 인터셉터 소프트웨어)",
    example: "We deployed nextjs edge middleware to redirect users automatically based on geo-location localization lookup parameters.",
    exampleTranslation: "우리는 지리적 위치 현지화 조회 매개변수를 바탕으로 사용자를 자동 리다이렉트하기 위해 nextjs 엣지 미들웨어를 배포했습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_171",
    term: "deadlock",
    definition: "교착 상태 (두 개 이상의 프로세스가 서로 상대방이 가진 자원을 기다리며 무한 대기에 빠지는 현상)",
    example: "Thread synchronization errors frequently introduce potential database deadlock issues.",
    exampleTranslation: "스레드 동기화 오류는 잠재적인 데이터베이스 교착 상태 문제를 자주 유발합니다.",
    importanceByRole: { frontend: 4, backend: 10, devops: 7, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_172",
    term: "race condition",
    definition: "경쟁 상태 / 레이스 컨디션 (공유 자원에 복수의 프로세스가 동시 접근할 때 실행 순서에 따라 결과가 변하는 취약 상태)",
    example: "Using mutex locks is a standardized technique to resolve a backend race condition.",
    exampleTranslation: "뮤텍스 락을 사용하는 것은 백엔드 경쟁 상태를 해결하기 위한 표준화된 기술입니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_173",
    term: "propagation",
    definition: "전파 (상태, 에러, 혹은 네트워크 패킷이나 변경 사항이 하위나 주변 시스템으로 퍼져나가는 것)",
    example: "React handles state propagation seamlessly from parent components down to child nodes.",
    exampleTranslation: "React는 부모 컴포넌트에서 자식 노드로 상태 전파를 매끄럽게 처리합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 10, fullstack: 9, other: 7 },
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
    id: "w_176",
    term: "bundling",
    definition: "번들링 (의존성이 얽힌 여러 소스 파일과 자원들을 브라우저용 단일 또는 소수의 파일로 묶어주는 빌드 프로세스)",
    example: "Webpack handles asset bundling for legacy web setups, while Vite is favored for modern apps.",
    exampleTranslation: "Webpack은 레거시 웹 환경의 에셋 번들링을 처리하며, Vite는 현대적 앱에서 선호됩니다.",
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
    id: "w_179",
    term: "hydration",
    definition: "하이드레이션 (서버 측 정적 HTML 구조 위에 클라이언트 자바스크립트 모듈이 결합하여 인터랙티브한 상태가 되는 과정)",
    example: "Hydration errors usually reveal that your server side markup differs from your client state configuration.",
    exampleTranslation: "하이드레이션 에러는 주로 서버 측 마크업이 클라이언트 상태 설정과 다를 때 발생합니다.",
    importanceByRole: { frontend: 10, backend: 4, devops: 4, fullstack: 8, other: 5 },
    sources: []
  },
  {
    id: "w_180",
    term: "reconciliation",
    definition: "재조정 / 리컨실리에이션 (가상 DOM의 변경점을 연산하여 실제 브라우저 DOM에 효과적으로 동기화하는 React의 핵심 알고리즘)",
    example: "React leverages unique array keys to optimize the runtime reconciliation process efficiently.",
    exampleTranslation: "React는 런타임 재조정 프로세스를 효율적으로 최적화하기 위해 고유한 배열 key를 활용합니다.",
    importanceByRole: { frontend: 10, backend: 3, devops: 2, fullstack: 7, other: 5 },
    sources: []
  },
  {
    id: "w_181",
    term: "scaffolding",
    definition: "스캐폴딩 (프로젝트 시작 시 폴더 구조, 기본 빌드 구성, 의존성 뼈대 코드를 자동으로 생성해 주는 명령 도구)",
    example: "CLI utilities provide convenient scaffolding layouts for microservice boilerplates.",
    exampleTranslation: "CLI 유틸리티는 마이크로서비스 보일러플레이트를 위한 편리한 스캐폴딩 레이아웃을 제공합니다.",
    importanceByRole: { frontend: 8, backend: 7, devops: 6, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_182",
    term: "concurrency",
    definition: "동시성 (단일 프로세서 스케줄링을 통해 마치 여러 작업이 한 번에 번갈아 구동되는 것처럼 연산하는 논리 패턴)",
    example: "Goroutines offer a highly cost-effective model for structuring cloud concurrency routines.",
    exampleTranslation: "고루틴은 클라우드 동시성 루틴을 구조화하기 위한 매우 비용 효율적인 모델을 제공합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_183",
    term: "parallelism",
    definition: "병렬성 (멀티 코어의 물리적 하드웨어 파워를 이용해 독자적인 작업을 완전한 동일 초 단위에 나누어 가동하는 컴퓨터 과학 기법)",
    example: "Data engineers exploit GPU parallelism models to train advanced artificial neural network layers.",
    exampleTranslation: "데이터 엔지니어들은 고도화된 인공 신경망 계층을 학습시키기 위해 GPU 병렬성 모델을 활용합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 8, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_184",
    term: "middleware",
    definition: "미들웨어 (어플리케이션 요청/응답 라이프사이클 중간 영역에서 공통 인증, 가로채기, 데이터 전처리를 도맡는 모듈)",
    example: "Express uses route-level middleware blocks to safely parse incoming JSON request buffers.",
    exampleTranslation: "Express는 들어오는 JSON 요청 버퍼를 안전하게 파싱하기 위해 라우트 수준의 미들웨어 블록을 사용합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_185",
    term: "payload",
    definition: "페이로드 (프로토콜 헤더, 세션 패킷 오버헤드를 제외한 전송 비즈니스 로직에 핵심이 되는 알맹이 데이터)",
    example: "Reviewing the network analyzer logs confirmed that the JWT token payload was corrupted.",
    exampleTranslation: "네트워크 분석기 로그를 검토한 결과 JWT 토큰 페이로드가 손상되었음이 확인되었습니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "w_186",
    term: "serialization",
    definition: "직렬화 (인메모리 객체 데이터 구조를 파일 저장이나 네트워크 스트림 전송에 적합한 플랫한 텍스트/바이트 단위로 변형하는 행위)",
    example: "Ensure proper model serialization settings to handle deep custom class instances cleanly.",
    exampleTranslation: "깊은 커스텀 클래스 인스턴스를 깔끔하게 처리하려면 올바른 모델 직렬화 설정을 확인하세요.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_187",
    term: "deserialization",
    definition: "역직렬화 (전송된 스트림이나 JSON 플랫 문자열 포맷을 구문 해독하여 본래 메모리 형태의 온전한 오브젝트 객체로 되돌리는 공정)",
    example: "If the input string structure is manipulated illegally, the server deserialization handler will throw a panic.",
    exampleTranslation: "입력 문자열 구조가 불법적으로 조작되면 서버 역직렬화 핸들러가 패닉을 발생시킵니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_188",
    term: "latency",
    definition: "지연 시간 (자극 신호를 인가한 직후 실질적인 시스템 처리 응답 패킷이 반환되어 도달할 때까지 소요되는 절대 대기 시차)",
    example: "Integrating global edge content delivery networks dramatically reduced visual media rendering latency.",
    exampleTranslation: "전역 엣지 콘텐츠 전송 네트워크를 통합함으로써 시각 미디어 렌더링 지연 시간이 극적으로 감소했습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_189",
    term: "throughput",
    definition: "처리량 (시스템 인프라가 지정된 특정 단위 시간 범위 안에 성공적으로 종결해 낸 비즈니스 작업 연산의 총 가동 역량 건수)",
    example: "Horizontal scaling logic was activated to keep the microservice backend throughput above target thresholds.",
    exampleTranslation: "마이크로서비스 백엔드 처리량을 목표 임계값 위로 유지하기 위해 수평 확장 로직이 활성화되었습니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_190",
    term: "idempotency",
    definition: "멱등성 (동일 명령을 의도적으로 수차례 중복 요청하더라도 시스템에 사이드 이펙트 부작용 없이 맨 처음 1회와 똑같은 상태를 내는 성질)",
    example: "Idempotency validation mechanisms protect distributed banking software against duplicate wire transfers.",
    exampleTranslation: "멱등성 검증 메커니즘은 중복 계좌 이체로부터 분산 금융 소프트웨어를 보호합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 8, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_191",
    term: "manifest",
    definition: "매니페스트 (패키지 정보, 빌드 버전, 리소스 구성 정의를 구조화해 기재해 둔 선언 문서 사양 파일)",
    example: "Check whether your Android development manifest explicitly registers the required internet permissions.",
    exampleTranslation: "안드로이드 개발 매니페스트가 필요한 인터넷 권한을 명시적으로 등록하고 있는지 확인하세요.",
    importanceByRole: { frontend: 5, backend: 8, devops: 10, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "w_192",
    term: "stateless",
    definition: "무상태의 (이전 트랜잭션 문맥 상태나 세션 히스토리를 로컬 서버 메모리에 누적 저장하지 않고 매번 독립 처리를 하는 설계)",
    example: "Stateless architectures are highly suitable for modern serverless auto-scaling cloud nodes.",
    exampleTranslation: "무상태 아키텍처는 현대적인 서버리스 자동 확장 클라우드 노드에 매우 적합합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_193",
    term: "stateful",
    definition: "상태 유지의 (이전 클라이언트 요청 내역이나 세션 정보 상태를 메모리, 세션 스토리지에 지속 보유하며 비즈니스를 수행하는 구조)",
    example: "Stateful backend clusters depend on sticky session routing to ensure users land on the same host instance.",
    exampleTranslation: "상태 유지 백엔드 클러스터는 사용자가 동일한 호스트 인스턴스에 도달하도록 보장하기 위해 스티키 세션 라우팅에 의존합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_194",
    term: "caching",
    definition: "캐싱 (동일 연산의 반복을 회피하고자 고속의 임시 저장 메모리 계층에 기존 계산 데이터를 사전에 복사 보관하는 기술)",
    example: "Redis is an outstanding distributed memory framework to leverage low-latency query caching.",
    exampleTranslation: "Redis는 저지연 쿼리 캐싱을 활용하기 위한 뛰어난 분산 메모리 프레임워크입니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_195",
    term: "invalidation",
    definition: "무효화 (원본 소스가 수정되거나 유효기간이 끝났을 때 임시 캐시 메모리에서 관리하던 기존 타깃 데이터를 파기하는 연산)",
    example: "Triggering a clean cache invalidation pipeline guarantees that users view the latest frontend updates.",
    exampleTranslation: "깔끔한 캐시 무효화 파이프라인을 트리거하는 것은 사용자가 최신 프론트엔드 업데이트를 보도록 보장합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_196",
    term: "staleness",
    definition: "신선하지 않음 / 오래됨 (캐시 임시 레이어 데이터가 원본 저장소 소스와 비교해 볼 때 일치하지 않고 오염 또는 만료된 상태)",
    example: "The HTTP header configuration handles staleness tolerances by managing stale-while-revalidate policies.",
    exampleTranslation: "HTTP 헤더 설정은 stale-while-revalidate 정책을 관리함으로써 데이터 만료 허용치를 처리합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "w_197",
    term: "throttling",
    definition: "스로틀링 (시스템 과부하 모니터링 시 자원 가용 한도 보호를 목표로 특정 주체의 처리 빈도나 속도를 인위적으로 억제하는 것)",
    example: "The infrastructure automatically enforces throttling limits when suspicious high-frequency web scraping is flagged.",
    exampleTranslation: "의심스러운 고빈도 웹 스크래핑이 감지되면 인프라가 자동으로 스로틀링 제한을 적용합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_198",
    term: "debouncing",
    definition: "디바운싱 (단기간 연속 유입되는 고주파 이벤트를 그룹화하여, 입력 활동이 완전 정지되고 일정 시간 만료 후 딱 1번 실행하는 것)",
    example: "Apply debouncing filters on search bar entry fields to optimize layout rendering computational cost.",
    exampleTranslation: "레이아웃 렌더링 연산 비용을 최적화하려면 검색바 입력 필드에 디바운싱 필터를 적용하세요.",
    importanceByRole: { frontend: 10, backend: 4, devops: 3, fullstack: 7, other: 5 },
    sources: []
  },
  {
    id: "w_199",
    term: "sanitization",
    definition: "정화 / 새니타이징 (인젝션 공격 차단을 목적으로 폼 필드 원시 입력 문자열 안에 내포된 위험 태그, 스크립트 기호를 무해화하는 보안)",
    example: "Robust server sanitization rules strip hidden HTML entities from user registration inputs.",
    exampleTranslation: "견고한 서버 정화 규칙은 사용자 가입 입력값에서 숨겨진 HTML 엔티티를 제거합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 6, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_200",
    term: "override",
    definition: "오버라이드 / 재정의 (상위 상속 관계 클래스 메서드 혹은 글로벌 시스템 기본 옵션 명세를 하위 컨텍스트 영역에서 덮어쓰는 행위)",
    example: "Custom sub-themes can override default interface design specifications programmatically.",
    exampleTranslation: "커스텀 서브 테마는 프로그램 방식으로 기본 인터페이스 디자인 명세를 오버라이드할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "w_201",
    term: "authentication",
    definition: "인증 (특정 시스템 권한 획득 전에 접근하려는 주체가 주장하는 그 신원/사람이 맞는지 신뢰 증명을 확인하는 프로세스)",
    example: "Configuring robust multi-factor authentication policies blocks malicious system entry risks.",
    exampleTranslation: "견고한 다요소 인증 정책을 설정하면 악의적인 시스템 진입 위험을 차단합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_202",
    term: "authorization",
    definition: "인가 / 권한 부여 (신원이 식별된 인증 완료 주체에게 허용된 데이터 리소스 도메인 접근 자격을 명확히 배분하는 보안 검증)",
    example: "Role-based access controls dictate the user authorization levels across our cloud workspace.",
    exampleTranslation: "역할 기반 액세스 제어(RBAC)는 우리 클라우드 워크스페이스 전반의 사용자 인가 수준을 결정합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "w_203",
    term: "telemetry",
    definition: "원격 측정 (중앙 관제 및 모니터링 지표 확보 목적으로 격리 분산 실행 중인 노드의 상태 데이터를 자동 원격 추출하는 구조)",
    example: "Kubernetes nodes forward telemetry variables directly to central enterprise logging servers.",
    exampleTranslation: "쿠버네티스 노드는 원격 측정 변수를 중앙 엔터프라이즈 로깅 서버로 직접 전달합니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "w_204",
    term: "observability",
    definition: "관찰 가능성 (시스템 외부로 수집되는 지표(로그, 메트릭, 트레이스)들을 기반으로 블랙박스 내부 원인 상태를 파악할 수 있는 역량 정도)",
    example: "Our operations engineering stack prioritizes deep service observability to resolve transient production infrastructure spikes.",
    exampleTranslation: "우리 운영 엔지니어링 스택은 일시적인 프로덕션 인프라 스파크 문제를 해결하기 위해 깊은 서비스 관찰 가능성을 우선시합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "w_205",
    term: "persistence",
    definition: "영속성 / 지속성 (실행 어플리케이션 프로세스 종료 후에도 인메모리 핵심 자산 데이터가 스토리지에 유실 없이 보관 보존되는 성질)",
    example: "Relational database transaction logs guarantee atomicity and reliable ledger records persistence.",
    exampleTranslation: "관계형 데이터베이스 트랜잭션 로그는 원자성과 신뢰할 수 있는 장부 기록 영속성을 보장합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  }
];