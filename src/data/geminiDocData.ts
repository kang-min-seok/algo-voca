import type { Word } from '@/types';

export const DOC_READING_WORDS_DATASET: Word[] = [
  {
    id: "doc_001",
    term: "mandatory",
    definition: "의무적인 / 필수적인 (생략하면 반드시 에러가 발생하는 요소)",
    example: "The API key parameter is mandatory for all authenticated endpoints.",
    exampleTranslation: "API 키 매개변수는 모든 인증된 엔드포인트에 필수적입니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_002",
    term: "deprecated",
    definition: "중단된 / 더 이상 권장되지 않는 (최신 버전에서 사라지거나 곧 지원이 끊길 예정인 기능)",
    example: "This method has been deprecated since version 2.4 and will be removed in the next major release.",
    exampleTranslation: "이 메서드는 2.4 버전부터 지원이 중단되었으며 다음 메이저 릴리스에서 제거될 예정입니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 9, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_003",
    term: "legacy",
    definition: "레거시 / 이전 버전의 (낡았거나 과거 시스템에서 호환성을 위해 남겨둔 코드/환경)",
    example: "The legacy configuration adapter is maintained solely for backward compatibility.",
    exampleTranslation: "레거시 설정 어댑터는 오직 하위 호환성을 위해서만 유지됩니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_004",
    term: "prerequisite",
    definition: "전제 조건 / 선행 조건 (특정 기능을 사용하거나 도구를 설치하기 전에 미리 완료해야 하는 사항)",
    example: "Having Node.js installed on your local machine is a prerequisite for this tutorial.",
    exampleTranslation: "로컬 컴퓨터에 Node.js가 설치되어 있는 것은 이 튜토리얼의 선행 조건입니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_005",
    term: "omit",
    definition: "생략하다 / 제외하다 (문서에서 값을 생략했을 때의 기본 동작을 설명할 때 자주 등장)",
    example: "If you omit the optional argument, the function defaults to the current system timestamp.",
    exampleTranslation: "선택적 인자를 생략하면 함수는 기본적으로 현재 시스템 타임스탬프를 사용합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_006",
    term: "mutable",
    definition: "가변의 / 변경 가능한 (데이터나 객체의 내부 값을 생성 후에도 바꿀 수 있는 성질)",
    example: "JavaScript objects are mutable by default, unlike frozen or primitive constants.",
    exampleTranslation: "동결되거나 원시 타입인 상수와 달리 자바스크립트 객체는 기본적으로 가변적입니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 4, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_007",
    term: "immutable",
    definition: "불변의 / 변경 불가능한 (생성된 후 상태나 데이터를 절대로 수정할 수 없는 성질)",
    example: "Strings are immutable; any modification creates an entirely new string instance.",
    exampleTranslation: "문자열은 불변입니다. 어떤 수정이든 완전히 새로운 문자열 인스턴스를 생성합니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 5, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_008",
    term: "retrieve",
    definition: "검색하다 / 가져오다 (Fetch 또는 Get 연산으로 서버나 DB에서 데이터를 읽어오는 행위)",
    example: "Use the GET request method to retrieve user profile metadata from the database backend.",
    exampleTranslation: "데이터베이스 백엔드로부터 사용자 프로필 메타데이터를 가져오려면 GET 요청 메서드를 사용하세요.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_009",
    term: "override",
    definition: "재정의하다 / 무시하고 덮어쓰다 (상위나 전역 설정을 무효화하고 로컬 설정을 적용하는 행위)",
    example: "Environment variables will always override properties defined inside the static app config file.",
    exampleTranslation: "환경 변수는 정적 앱 설정 파일 내부에 정의된 프로퍼티들을 항상 덮어씁니다(우선합니다).",
    importanceByRole: { frontend: 9, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_010",
    term: "fallback",
    definition: "대체 솔루션 / 예비 메커니즘 (실패나 에러 시 시스템이 다운되지 않도록 대신 실행하는 장치)",
    example: "If the CDN fails, the client uses a fallback URL pointing directly to the origin server.",
    exampleTranslation: "CDN이 실패할 경우, 클라이언트는 오리진 서버를 직접 가리키는 대체 URL을 사용합니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 9, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "doc_011",
    term: "granular",
    definition: "세부적인 / 정밀한 (제어나 설정의 범위가 아주 꼼꼼하고 미세하게 나누어진 상태)",
    example: "The identity service offers granular permission settings for individual cloud storage buckets.",
    exampleTranslation: "해당 ID 서비스는 개별 클라우드 스토리지 버킷에 대한 세부적인 권한 설정을 제공합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "doc_012",
    term: "explicitly",
    definition: "명시적으로 / 분명하게 (코드나 설정에 직접 명확히 선언해야 함을 강조하는 단어)",
    example: "Unless explicitly stated otherwise, all connection timeouts are evaluated in milliseconds.",
    exampleTranslation: "명시적으로 다르게 명시되지 않는 한, 모든 연결 타임아웃은 밀리초 단위로 계산됩니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_013",
    term: "implicitly",
    definition: "암시적으로 / 은연중에 (코드로 적지 않아도 프레임워크나 언어가 내부 엔진에서 자동으로 처리해 주는)",
    example: "The variable type is implicitly inferred based on its assigned initial value.",
    exampleTranslation: "변수 타입은 할당된 초기값을 바탕으로 암시적으로 유추됩니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_014",
    term: "leverage",
    definition: "활용하다 / 이용하다 (기존의 라이브러리, API, 하드웨어 성능을 효과적으로 끌어다 쓰는 것)",
    example: "Developers can leverage service workers to enable robust offline functionality for web applications.",
    exampleTranslation: "개발자는 웹 애플리케이션에 견고한 오프라인 기능을 부여하기 위해 서비스 워커를 활용할 수 있습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_015",
    term: "violation",
    definition: "위반 (보안 정책, 제약 조건, 스키마 규칙을 어겼을 때 에러 메시지에 자주 나옴)",
    example: "The system threw an exception due to a strict database unique constraint violation.",
    exampleTranslation: "엄격한 데이터베이스 고유 제약 조건 위반으로 인해 시스템이 예외(에러)를 발생시켰습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_017",
    term: "agnostic",
    definition: "~에 독립적인 / 구애받지 않는 (플랫폼, 운영체제, 프레임워크의 종류에 영향받지 않는 특성)",
    example: "The core utility logic was built to be completely framework-agnostic.",
    exampleTranslation: "핵심 유틸리티 로직은 특정 프레임워크에 완전히 독립적이도록(구애받지 않도록) 빌드되었습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_018",
    term: "propagate",
    definition: "전파되다 / 퍼지다 (에러, 이벤트, 설정 변경사항 등이 계층이나 네트워크를 따라 흘러갈 때)",
    example: "Unhandled rejections will propagate up to the global root event listener window.",
    exampleTranslation: "처리되지 않은 거부(rejection)는 전역 루트 이벤트 리스너 창까지 위로 전파됩니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_019",
    term: "consecutive",
    definition: "연속적인 / 이어서 일어나는 (연속된 요청 실패, 연속된 공백 문자 등을 다룰 때 단골 등장)",
    example: "Five consecutive failed password entries will trigger a temporary account lockout scenario.",
    exampleTranslation: "5회 연속으로 비밀번호 입력을 실패하면 임시 계정 잠금 시나리오가 트리거됩니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_020",
    term: "discard",
    definition: "폐기하다 / 버리다 (유효하지 않은 패킷, 캐시 데이터, 변경 사항 등을 무시하고 없애는 행위)",
    example: "Any modifications made to the staging buffer will be discarded unless committed.",
    exampleTranslation: "커밋되지 않는 한 스테이징 버퍼에 가해진 모든 수정 사항은 폐기됩니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_021",
    term: "simultaneously",
    definition: "동시에 / 일제히 (여러 유저가 동시에 접속하거나 스레드가 같은 자원을 건드릴 때 설명)",
    example: "The database handles thousands of transactions executing simultaneously without race issues.",
    exampleTranslation: "그 데이터베이스는 경쟁 문제 없이 동시에 실행되는 수천 개의 트랜잭션을 처리합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_022",
    term: "vulnerability",
    definition: "취약점 / 보안 약점 (패치 노트나 보안 문서에 빠짐없이 나오는 최고 빈출 단어)",
    example: "Upgrading your core dependency packages immediately patches the discovered remote code execution vulnerability.",
    exampleTranslation: "핵심 의존성 패키지를 업그레이드하면 발견된 원격 코드 실행 취약점이 즉시 패치됩니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_023",
    term: "obsolete",
    definition: "구식의 / 더 이상 쓸모없는 (완전히 지원이 만료되어 코드가 폐기된 상태를 가리킴)",
    example: "This legacy package configuration adapter is now completely obsolete and unsupported.",
    exampleTranslation: "이 레거시 패키지 설정 어댑터는 이제 완전히 구식이며 지원되지 않습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_024",
    term: "serialize",
    definition: "직렬화하다 (객체를 전송 가능한 플랫 문자열/바이트 상태로 포맷 가공하는 것)",
    example: "The system must serialize custom session instances before saving them into the local browser cookie storage.",
    exampleTranslation: "시스템은 커스텀 세션 인스턴스를 로컬 브라우저 쿠키 저장소에 저장하기 전에 직렬화해야 합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_025",
    term: "sanitize",
    definition: "정화하다 / 깨끗이 가공하다 (입력 문자열에서 악성 주입 스크립트를 걸러내는 작업)",
    example: "Always sanitize user-submitted data before appending it directly into the inner markup text nodes.",
    exampleTranslation: "내부 마크업 텍스트 노드에 직접 추가하기 전에 항상 사용자가 제출한 데이터를 정화(sanitize)하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 6, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_026",
    term: "populate",
    definition: "(데이터를) 채우다 / 거주시키다 (빈 배열이나 DB 테이블, UI 요소를 데이터로 채워 넣는 행위)",
    example: "The initialization helper will automatically populate the local testing schema with dummy data rows.",
    exampleTranslation: "초기화 도우미는 로컬 테스트 스키마를 더미 데이터 행으로 자동으로 채워 줍니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_027",
    term: "truncate",
    definition: "길이를 줄이다 / 끝을 잘라내다 (문자열이 길어 자르거나, DB 테이블의 행을 전부 비울 때 사용)",
    example: "Executing this admin command will truncate the log history table entirely.",
    exampleTranslation: "이 관리자 명령을 실행하면 로그 히스토리 테이블의 모든 데이터를 전부 비우게(잘라내게) 됩니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_029",
    term: "traverse",
    definition: "순회하다 / 가로지르다 (트리 구조나 가상 DOM, 폴더 경로 등을 위아래로 탐색하는 연산)",
    example: "The optimization script will traverse the document object model to detect unused class selectors.",
    exampleTranslation: "최적화 스크립트는 사용되지 않는 클래스 선택자를 감지하기 위해 문서 객체 모델(DOM)을 순회합니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "doc_030",
    term: "scaffolding",
    definition: "스캐폴딩 / 프로젝트 뼈대 생성 (새 앱 시작 시 명령어 하나로 기본 환경과 폴더를 다 짜주는 기능)",
    example: "The framework CLI provides convenient interactive tools for modern react application scaffolding setups.",
    exampleTranslation: "프레임워크 CLI는 현대적인 React 애플리케이션 뼈대 설정을 위한 편리한 대화형 도구를 제공합니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 7, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "doc_031",
    term: "precede",
    definition: "~에 앞서다 / 먼저 일어나다 (실행 순서나 코드 배치에서 무엇이 먼저 와야 하는지 정의할 때)",
    example: "An authorization token declaration block must precede the core api payload delivery configuration parameters.",
    exampleTranslation: "인가 토큰 선언 블록은 반드시 핵심 API 페이로드 전송 설정 매개변수보다 앞서 위치해야(먼저 처리되어야) 합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_032",
    term: "subsequent",
    definition: "그 다음의 / 차후의 (첫 단계가 성공한 후 이어지는 요청이나 연산을 칭할 때)",
    example: "The initial authentication request establishes a valid session key used for all subsequent client calls.",
    exampleTranslation: "최초의 인증 요청은 그 다음 이어지는 모든 클라이언트 호출에 사용될 유효한 세션 키를 생성합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_033",
    term: "intercept",
    definition: "가로채다 (중간에 패킷이나 API 흐름을 가로채서 조작하거나 검증하는 컴포넌트 설명용)",
    example: "The global helper routing module can intercept broken link connections to prevent error blank states.",
    exampleTranslation: "전역 헬퍼 라우팅 모듈은 빈 화면 에러를 방지하기 위해 끊어진 링크 연결을 가로챌 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_034",
    term: "resolve",
    definition: "해결하다 / 분석해 찾아내다 (에러 해결 외에도 Promise가 성공하거나, 도메인 주소가 IP로 번역되는 과정)",
    example: "DNS servers function to resolve human-readable domain names into absolute destination server IP addresses.",
    exampleTranslation: "DNS 서버는 사람이 읽을 수 있는 도메인 이름을 절대적인 목적지 서버 IP 주소로 분석해내는(찾아내는) 기능을 합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_035",
    term: "terminate",
    definition: "종료하다 / 강제 마감하다 (프로세스, 루프, 유저 세션, 연결 통신 등을 끝마치는 동작)",
    example: "If a cluster health check node returns a critical memory crash error, the cluster will terminate that container instance immediately.",
    exampleTranslation: "클러스터 헬스 체크 노드가 심각한 메모리 크래시 에러를 반환하면, 클러스터는 즉시 해당 컨테이너 인스턴스를 종료합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_036",
    term: "permissive",
    definition: "허용하는 / 관대한 (보안 정책이나 라이선스가 제약을 크게 두지 않는 상태)",
    example: "The MIT license is highly permissive, allowing commercial reuse with minimal restrictions.",
    exampleTranslation: "MIT 라이선스는 매우 허용적(관대)이어서 최소한의 제한으로 상업적 재사용을 허용합니다.",
    importanceByRole: { frontend: 8, backend: 8, devops: 9, fullstack: 8, other: 10 },
    sources: []
  },
  {
    id: "doc_037",
    term: "restrictive",
    definition: "제한적인 / 구속력이 있는 (조건이나 보안 강도가 매우 엄격함을 뜻하는 단어)",
    example: "Production database environments usually implement more restrictive network firewalls.",
    exampleTranslation: "운영 데이터베이스 환경은 대개 더 제한적인 네트워크 방화벽을 구현합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_038",
    term: "override",
    definition: "우선하다 / 무효화하다 (동사형으로 쓰여 전역 설정을 로컬 설정이 덮어써서 무시함을 뜻함)",
    example: "Passing inline configuration flags will override any default settings defined in the project root.",
    exampleTranslation: "인라인 설정 플래그를 전달하면 프로젝트 루트에 정의된 모든 기본 설정을 덮어씁니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 10, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_039",
    term: "agnostic",
    definition: "독립적인 / 플랫폼을 가리지 않는 (하드웨어나 특정 벤더에 종속되지 않는 기술을 묘사할 때)",
    example: "WebAssembly provides a runtime ecosystem that is entirely machine-agnostic.",
    exampleTranslation: "웹어셈블리는 완전히 기계 독립적인 런타임 생태계를 제공합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_040",
    term: "idempotent",
    definition: "멱등성의 (수차례 반복해도 상태 변화가 없고 문서상 안전함을 보장할 때 나오는 형용사)",
    example: "The HTTP PUT specification mandates that the target receiver endpoint must be idempotent.",
    exampleTranslation: "HTTP PUT 명세는 대상 수신 엔드포인트가 반드시 멱등성을 가져야 한다고 규정합니다.",
    importanceByRole: { frontend: 6, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_041",
    term: "compatibility",
    definition: "호환성 (버전 업그레이드 시 이전 코드가 깨지지 않고 돌아가는지 다룰 때의 핵심 키워드)",
    example: "Always test your codebase thoroughly to ensure backward compatibility before pushing the patch.",
    exampleTranslation: "패치를 푸시하기 전에 하위 호환성을 보장할 수 있도록 코드를 철저히 테스트하세요.",
    importanceByRole: { frontend: 10, backend: 10, devops: 9, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_043",
    term: "enforce",
    definition: "(규칙을) 강제하다 / 적용하다 (린터 설정이나 스키마 제약 조건을 설명할 때 자주 사용)",
    example: "The strict mode compiler setting will enforce explicit return types for all public functions.",
    exampleTranslation: "엄격 모드 컴파일러 설정은 모든 퍼블릭 함수에 대해 명시적인 반환 타입을 강제합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_044",
    term: "suppress",
    definition: "억제하다 / 지우다 (에러 메시지나 경고 알림창을 안 나오게 가릴 때 명세에 등장)",
    example: "You can append a specific comment tag to suppress unwanted TypeScript linting warnings.",
    exampleTranslation: "원치 않는 TypeScript 린팅 경고를 억제하기 위해 특정 주석 태그를 추가할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 7, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_045",
    term: "leverage",
    definition: "활용하다 (서드파티 도구나 기존 엔진의 기능을 끌어다 고도화할 때 빈출)",
    example: "The modern framework is designed to leverage native browser storage APIs for performance caching.",
    exampleTranslation: "이 현대적인 프레임워크는 성능 캐싱을 위해 브라우저 네이티브 스토리지 API를 활용하도록 설계되었습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_046",
    term: "granular",
    definition: "상세한 / 세분화된 (설정 범위를 미세하게 조정할 수 있는 단계를 묘사할 때)",
    example: "Cloud platform roles provide granular control over individual system metrics logging fields.",
    exampleTranslation: "클라우드 플랫폼 역할은 개별 시스템 메트릭 로깅 필드에 대한 세분화된 제어 권한을 제공합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "doc_047",
    term: "implicitly",
    definition: "암시적으로 (엔진 내부에서 자동으로 추론되어 별도 선언이 필요 없을 때)",
    example: "Variables initialized without an explicit type signature are implicitly evaluated by the compiler.",
    exampleTranslation: "명시적인 타입 시그니처 없이 초기화된 변수들은 컴파일러에 의해 암시적으로 평가됩니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_048",
    term: "explicitly",
    definition: "명시적으로 (설정 파일이나 코드에 확실하게 직접 적어주어야 할 때)",
    example: "Developers must explicitly enable the experimental module flag in the configuration settings.",
    exampleTranslation: "개발자는 설정 파일에 실험적 모듈 플래그를 명시적으로 활성화해야 합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_049",
    term: "retrieve",
    definition: "가져오다 / 검색하다 (조회 API 및 데이터베이스 패치 가이드에 단골 등장)",
    example: "The library provides an asynchronous method to retrieve updated configuration records from the server.",
    exampleTranslation: "이 라이브러리는 서버로부터 업데이트된 설정 레코드를 가져오는 비동기 메서드를 제공합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 7, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_051",
    term: "populate",
    definition: "(데이터를) 주입하다 / 채우다 (스키마나 배열 구조체에 값을 대입하는 과정 설명)",
    example: "The mock initialization script will automatically populate your local cache fields with testing objects.",
    exampleTranslation: "모의(mock) 초기화 스크립트는 로컬 캐시 필드를 테스트용 객체들로 자동으로 채워줍니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_052",
    term: "serialize",
    definition: "직렬화하다 (메모리 내 상태를 텍스트 데이터 스트림 형태로 변환하는 법을 서술할 때)",
    example: "You need to serialize custom classes before transmitting them over the standard WebSocket channel.",
    exampleTranslation: "표준 웹소켓 채널을 통해 전송하기 전에 커스텀 클래스를 직렬화해야 합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_053",
    term: "sanitize",
    definition: "정화하다 (보안 가이드에서 유해 문자를 필터링하라는 필수 지침에 등장)",
    example: "The framework layout engine will automatically sanitize raw string values to block cross-site scripting.",
    exampleTranslation: "프레임워크 레이아웃 엔진은 크로스 사이트 스크립팅을 차단하기 위해 원시 문자열 값을 자동으로 정화합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 6, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_054",
    term: "violation",
    definition: "위반 (제약 조건이나 스키마 타입을 어겨 에러가 난 상황의 디버깅 문서에 출몰)",
    example: "The program execution panicked due to a memory boundary access rule violation.",
    exampleTranslation: "메모리 경계 접근 규칙 위반으로 인해 프로그램 실행이 패닉에 빠졌습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_057",
    term: "obsolete",
    definition: "쓸모없어진 / 만료된 (더 이상 완전히 사용되지 않는 스키마나 파라미터를 경고할 때)",
    example: "Using the old XML request header configuration properties is now completely obsolete.",
    exampleTranslation: "예전 XML 요청 헤더 설정 프로퍼티를 사용하는 것은 이제 완전히 쓸모없어졌습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_058",
    term: "vulnerability",
    definition: "취약점 (보안 권고문 및 패치 업데이트 가이드의 핵심 단어)",
    example: "The patch was urgently deployed to secure a critical buffer overflow vulnerability in the core engine.",
    exampleTranslation: "핵심 엔진의 심각한 버퍼 오버플로우 취약점을 해결하기 위해 패치가 긴급히 배포되었습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_059",
    term: "truncate",
    definition: "끝을 자르다 (글자 수 제한을 초과하거나 로그 파일의 용량을 비울 때의 표현)",
    example: "The system will truncate the output text string if it exceeds the column length constraints.",
    exampleTranslation: "컬럼 길이 제약 조건을 초과하면 시스템이 출력 텍스트 문자열의 끝을 잘라냅니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_060",
    term: "fallback",
    definition: "대체 작동 (메인 로직이나 연결이 무너졌을 때 시스템이 취하는 안전 가이드라인)",
    example: "The web client maintains a local offline store as a fallback when api nodes are unreachable.",
    exampleTranslation: "웹 클라이언트는 API 노드에 도달할 수 없을 때 대체 작동을 위해 로컬 오프라인 저장소를 유지합니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 9, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "doc_061",
    term: "scaffolding",
    definition: "프로젝트 기초 뼈대 (CLI 도구의 새 어플리케이션 시작 안내서에 단골 등장)",
    example: "Run the interactive npx script to generate the initial workspace directory scaffolding layouts.",
    exampleTranslation: "초기 워크스페이스 디렉터리 뼈대 레이아웃을 생성하려면 대화형 npx 스크립트를 실행하세요.",
    importanceByRole: { frontend: 9, backend: 8, devops: 7, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "doc_062",
    term: "precede",
    definition: "~보다 앞서다 / 먼저 발생하다 (초기화 함수나 토큰 선언의 순서를 정하는 문맥)",
    example: "The database setup verification commands must precede any service deployment operations.",
    exampleTranslation: "데이터베이스 설정 검증 명령은 모든 서비스 배포 작업보다 앞서 실행되어야 합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_063",
    term: "subsequent",
    definition: "그 뒤의 / 다음의 (첫 단계를 마친 후 이어지는 네트워크 호출 등을 서술할 때)",
    example: "Once the handshake completes, all subsequent messaging transfers use advanced binary tokens.",
    exampleTranslation: "핸드셰이크가 완료되면, 그 뒤의 모든 메시징 전송은 고급 바이너리 토큰을 사용합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_064",
    term: "intercept",
    definition: "가로채다 (요청과 응답 파이프라인의 조작 방식을 안내할 때)",
    example: "You can write custom request adapters to intercept error status parameters globally.",
    exampleTranslation: "에러 상태 매개변수들을 전역적으로 가로채기 위해 커스텀 요청 어댑터를 작성할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_065",
    term: "resolve",
    definition: "해결하다 / 분석해 찾아내다 (도메인 주소를 분석하거나 프라미스를 이행할 때의 서술)",
    example: "The network router will attempt to resolve internal hostnames into cluster IP pointers.",
    exampleTranslation: "네트워크 라우터는 내부 호스트네임을 클러스터 IP 포인터로 분석해내려고 시도합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_066",
    term: "terminate",
    definition: "종료하다 (커넥션을 끊거나 백그라운드 프로세스를 죽이는 가이드에 등장)",
    example: "The gateway will automatically terminate client channels that remain idle for over ten minutes.",
    exampleTranslation: "게이트웨이는 10분 이상 유휴 상태로 남아있는 클라이언트 채널을 자동으로 종료합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_068",
    term: "discard",
    definition: "폐기하다 / 버리다 (유효성 검사 실패 데이터 처리법을 설명할 때)",
    example: "The ingress controller will instantly discard incoming requests lacking a valid correlation signature.",
    exampleTranslation: "인그레스 컨트롤러는 유효한 상관관계 서명이 결여된 유입 요청을 즉시 폐기합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_069",
    term: "simultaneously",
    definition: "동시에 (멀티스레딩이나 동시 요청 테스트 가이드의 빈출 핵심 어휘)",
    example: "Load utilities test how infrastructure nodes react when multiple clients update a row simultaneously.",
    exampleTranslation: "부하 유틸리티는 복수의 클라이언트가 한 행을 동시에 업데이트할 때 인프라 노드가 어떻게 반응하는지 테스트합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_070",
    term: "consecutive",
    definition: "연속적인 (서킷 브레이커 조건이나 연속 에러 임계치를 정의하는 문서에 등장)",
    example: "Three consecutive timeouts will trigger the automated routing backup systems instantly.",
    exampleTranslation: "3회 연속 타임아웃이 발생하면 즉시 자동 라우팅 백업 시스템이 트리거됩니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_071",
    term: "nested",
    definition: "중첩된 / 내포된 (객체 안에 다른 객체가 들어가 있거나, 루프 안에 루프가 있는 구조)",
    example: "The API response contains a nested JSON structure for the user's address history.",
    exampleTranslation: "API 응답에는 사용자의 주소 이력을 위한 중첩된 JSON 구조가 포함되어 있습니다.",
    importanceByRole: { frontend: 10, backend: 9, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_072",
    term: "flatten",
    definition: "평탄화하다 / 단일 계층으로 만들다 (중첩된 구조를 하나의 배열이나 얕은 객체로 펼치는 작업)",
    example: "You may need to flatten the hierarchical directory tree before processing the migration asset files.",
    exampleTranslation: "마이그레이션 자산 파일들을 처리하기 전에 계층적인 디렉터리 트리를 평탄화해야 할 수도 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 7, fullstack: 9, other: 6 },
    sources: []
  },
  {
    id: "doc_073",
    term: "guarantee",
    definition: "보장하다 / 보증 (특정 네트워크 조건이나 트랜잭션 성공을 시스템이 확실히 책임진다는 의미)",
    example: "The messaging broker does not guarantee the exact ordering of delivered events under heavy loads.",
    exampleTranslation: "해당 메시징 브로커는 부하가 심할 때 전달되는 이벤트의 정확한 순서를 보장하지 않습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_074",
    term: "assume",
    definition: "가정하다 / 추정하다 (설정값이나 환경이 특정 상태라고 전제하고 작동함을 서술할 때)",
    example: "The configuration framework will assume the deployment environment is production if left unspecified.",
    exampleTranslation: "설정 프레임워크는 명시되지 않은 경우 배포 환경이 프로덕션(운영)이라고 가정합니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_075",
    term: "specify",
    definition: "명시하다 / 구체적으로 적다 (파라미터나 타입을 확실하게 지정하라는 지침에 단골 등장)",
    example: "You must specify the destination layout type inside your initial setup options object.",
    exampleTranslation: "초기 설정 옵션 객체 내부에 대상 레이아웃 타입을 반드시 명시해야 합니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_077",
    term: "optional",
    definition: "선택적인 (값을 주지 않아도 시스템이 기본값을 사용하여 정상 작동하는 요소)",
    example: "The profile description attribute is completely optional and can accept null inputs safely.",
    exampleTranslation: "프로필 설명 속성은 완전히 선택적이며 null 입력을 안전하게 허용할 수 있습니다.",
    importanceByRole: { frontend: 10, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_078",
    term: "interoperability",
    definition: "상호 운용성 (서로 다른 시스템, 언어, 프레임워크가 문제없이 데이터를 주고받는 능력)",
    example: "Standardizing the data schema format ensures smooth interoperability between legacy and new services.",
    exampleTranslation: "데이터 스키마 포맷을 표준화하면 레거시 서비스와 신규 서비스 간의 원활한 상호 운용성이 보장됩니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 9 },
    sources: []
  },
  {
    id: "doc_079",
    term: "isolate",
    definition: "격리하다 / 분리하다 (보안이나 간섭 방지를 위해 메모리 공간이나 네트워크 영역을 떼어놓는 것)",
    example: "Container runtimes use kernel namespaces to isolate application processing environments completely.",
    exampleTranslation: "컨테이너 런타임은 애플리케이션 처리 환경을 완전히 격리하기 위해 커널 네임스페이스를 사용합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_080",
    term: "mutate",
    definition: "변형시키다 / 값을 변경하다 (원본 데이터를 직접 수정하여 상태를 바꿀 때 쓰이는 표현)",
    example: "It is a bad practice to mutate the react state variable directly without utilizing the set method handler.",
    exampleTranslation: "set 메서드 핸들러를 활용하지 않고 React 상태 변수를 직접 변형시키는 것은 좋지 않은 관행입니다.",
    importanceByRole: { frontend: 10, backend: 8, devops: 3, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "doc_081",
    term: "granularly",
    definition: "세밀하게 / 세분화하여 (속성이나 제어 단위를 하나하나 잘게 쪼개어 다루는 뉘앙스)",
    example: "Security policies can be granularly tailored down to the individual document node entry block level.",
    exampleTranslation: "보안 정책은 개별 문서 노드 진입 블록 수준까지 세밀하게 조정될 수 있습니다.",
    importanceByRole: { frontend: 6, backend: 8, devops: 10, fullstack: 8, other: 7 },
    sources: []
  },
  {
    id: "doc_082",
    term: "inspect",
    definition: "검사하다 / 조사하다 (디버깅 도구로 상태나 네트워크 패킷의 내부를 들여다볼 때)",
    example: "Open your web browser tools panel to inspect the exact network request headers being transmitted.",
    exampleTranslation: "전송되고 있는 정확한 네트워크 요청 헤더를 검사하려면 웹 브라우저 도구 창을 여세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_083",
    term: "comply",
    definition: "따르다 / 준수하다 (표준 규격, 보안 요구사항, API 명세를 준수해야 함을 명시할 때)",
    example: "All outbound server payloads must comply with the strict enterprise compliance security protocol guidelines.",
    exampleTranslation: "모든 외부 발송 서버 페이로드는 엄격한 기업 컴플라이언스 보안 프로토콜 가이드라인을 준수해야 합니다.",
    importanceByRole: { frontend: 7, backend: 9, devops: 9, fullstack: 9, other: 9 },
    sources: []
  },
  {
    id: "doc_084",
    term: "serialize",
    definition: "직렬화하다 (메모리 구조체 데이터를 네트워크 전송을 위해 플랫한 바이너리나 텍스트로 바꾸는 서술)",
    example: "The storage adapter will automatically serialize your database instances into portable text arrays.",
    exampleTranslation: "스토리지 어댑터는 데이터베이스 인스턴스들을 이식 가능한 텍스트 배열로 자동으로 직렬화합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_085",
    term: "deserialize",
    definition: "역직렬화하다 (받은 바이트 스트림이나 JSON 플랫 문자열을 원래 객체 형태로 해독하여 복구하는 과정)",
    example: "The compiler will fail to deserialize the message layout payload if any critical data property mapping is broken.",
    exampleTranslation: "핵심 데이터 프로퍼티 매핑이 깨져 있으면 컴파일러가 메시지 레이아웃 페이로드를 역직렬화하는 데 실패합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_086",
    term: "validate",
    definition: "검증하다 / 유효성을 확인하다 (입력값이 형식이나 제약 조건에 맞는지 체크하는 필수 어휘)",
    example: "Backend services always validate user credentials locally before allocating access tokens.",
    exampleTranslation: "백엔드 서비스는 액세스 토큰을 할당하기 전에 항상 로컬에서 사용자 자격 증명을 검증합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 8, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_087",
    term: "invalidate",
    definition: "무효화하다 (기존 토큰, 캐시 데이터, 세션을 만료시켜 더 이상 사용할 수 없게 폐기하는 것)",
    example: "Logging out will immediately invalidate the active JSON Web Token stored inside the global context registry.",
    exampleTranslation: "로그아웃하면 전역 컨텍스트 레지스트리 내부에 저장된 활성 JSON 웹 토큰이 즉시 무효화됩니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "doc_088",
    term: "violation",
    definition: "위반 (보안상 금지된 행위를 하거나 제약 조건을 깨뜨렸을 때 에러 가이드에 등장)",
    example: "A content security policy violation error was logged due to an unapproved external source script inject.",
    exampleTranslation: "승인되지 않은 외부 소스 스크립트 주입으로 인해 콘텐츠 보안 정책(CSP) 위반 오류가 기록되었습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_089",
    term: "obsolete",
    definition: "더 이상 사용되지 않는 / 구식의 (기술이나 옵션의 수명이 다해 완전히 폐기되었음을 알릴 때)",
    example: "The legacy encryption schema block library has officially become obsolete and insecure for enterprise production.",
    exampleTranslation: "레거시 암호화 스키마 블록 라이브러리는 기업 프로덕션 환경에서 공식적으로 구식이며 안전하지 않은 상태가 되었습니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_090",
    term: "vulnerability",
    definition: "취약점 (보안 권고나 패치 문서에서 해킹 위험 요소를 설명할 때의 단골 단어)",
    example: "The latest system package update patches a severe cross-site scripting vulnerability discovered in the core layout loop.",
    exampleTranslation: "최신 시스템 패키지 업데이트는 핵심 레이아웃 루프에서 발견된 심각한 크로스 사이트 스크립팅 취약점을 패치합니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_091",
    term: "truncate",
    definition: "잘라내다 / 일부를 버리다 (용량이 넘쳐 로그 끝을 날리거나 DB 행을 비울 때)",
    example: "Database migration helpers can truncate temporary tables automatically after completing data verification operations.",
    exampleTranslation: "데이터베이스 마이그레이션 도우미는 데이터 검증 작업을 완료한 후 임시 테이블을 자동으로 비울(truncate) 수 있습니다.",
    importanceByRole: { frontend: 8, backend: 10, devops: 8, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_092",
    term: "fallback",
    definition: "대체 작동 / 예비 메커니즘 (장애 발생 시 자동으로 활성화되는 안전장치 가이드)",
    example: "Always structure a robust client-side fallback component to gracefully handle unexpected API downtime.",
    exampleTranslation: "예기치 않은 API 다운타임을 우아하게 처리할 수 있도록 항상 견고한 클라이언트 측 대체 작동(fallback) 컴포넌트를 구조화하세요.",
    importanceByRole: { frontend: 10, backend: 9, devops: 9, fullstack: 10, other: 7 },
    sources: []
  },
  {
    id: "doc_093",
    term: "scaffolding",
    definition: "프로젝트 기초 뼈대 생성 (프레임워크 가이드 초반의 자동 프로젝트 빌드 단계 안내)",
    example: "The CLI engine builds the standard workspace directory scaffolding layouts for quick initialization setup.",
    exampleTranslation: "CLI 엔진은 빠른 초기화 설정을 위해 표준 워크스페이스 디렉터리 뼈대(scaffolding) 레이아웃을 빌드합니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 7, fullstack: 8, other: 6 },
    sources: []
  },
  {
    id: "doc_094",
    term: "precede",
    definition: "~보다 앞서다 / 먼저 실행되다 (미들웨어나 초기화 함수들의 우선순위를 정할 때)",
    example: "The global environment evaluation setup configurations must precede any modular router connection initializations.",
    exampleTranslation: "전역 환경 평가 설정 구성은 반드시 모듈형 라우터 연결 초기화보다 앞서 실행되어야 합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 8, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_095",
    term: "subsequent",
    definition: "그 다음의 / 이어지는 (인증 직후 발생하는 연쇄 요청 가이드에 빈출)",
    example: "Once the handshake transaction successfully validates, all subsequent data packages use lightweight token IDs.",
    exampleTranslation: "핸드셰이크 트랜잭션이 성공적으로 검증되면, 그 다음 이어지는 모든 데이터 패키지는 가벼운 토큰 ID를 사용합니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 9, fullstack: 10, other: 8 },
    sources: []
  },
  {
    id: "doc_096",
    term: "intercept",
    definition: "가로채다 / 가로막다 (인터셉터나 가로채기 필터의 원리를 설명하는 서술어)",
    example: "You can implement network route hooks to intercept bad credential errors and auto-trigger refresh sessions.",
    exampleTranslation: "잘못된 자격 증명 에러를 가로채고 세션 갱신을 자동 트리거하기 위해 네트워크 라우트 훅을 구현할 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 9, devops: 6, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_097",
    term: "resolve",
    definition: "해결하다 / 분석하다 (에러 디버깅뿐 아니라 비동기 처리 완료나 주소 변환을 뜻함)",
    example: "The core framework client can easily resolve internal modular dependency pathways dynamically at runtime.",
    exampleTranslation: "핵심 프레임워크 클라이언트는 런타임에 내부 모듈형 의존성 경로를 동적으로 쉽게 분석(resolve)해낼 수 있습니다.",
    importanceByRole: { frontend: 9, backend: 10, devops: 10, fullstack: 10, other: 9 },
    sources: []
  },
  {
    id: "doc_098",
    term: "terminate",
    definition: "종료하다 / 폐기하다 (연결 수명 주기 관리나 무효 세션 해제 지침에 등장)",
    example: "The central server cluster administrator engine will instantly terminate corrupted websocket connections.",
    exampleTranslation: "중앙 서버 클러스터 관리자 엔진은 손상된 웹소켓 연결을 즉시 종료합니다.",
    importanceByRole: { frontend: 6, backend: 9, devops: 10, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_100",
    term: "discard",
    definition: "버리다 / 폐기하다 (유효하지 않은 응답이나 비정상 패킷을 걸러내 덤프 처리할 때)",
    example: "The ingestion route filter will discard incoming packages lacking an approved cryptographic timestamp tracker code.",
    exampleTranslation: "수집 라우트 필터는 승인된 암호화 타임스탬프 추적기 코드가 없는 유입 패키지를 폐기(discard)합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_101",
    term: "simultaneously",
    definition: "동시에 / 일제히 (동시성 제어나 다중 접속 동기화 처리 문맥에 단골 등장)",
    example: "Clustered architectures handle millions of microservice transaction buffers firing simultaneously across instances.",
    exampleTranslation: "클러스터 아키텍처는 인스턴스 전반에서 동시에 발생하는 수백만 개의 마이크로서비스 트랜잭션 버퍼를 처리합니다.",
    importanceByRole: { frontend: 7, backend: 10, devops: 9, fullstack: 9, other: 7 },
    sources: []
  },
  {
    id: "doc_102",
    term: "consecutive",
    definition: "연속적인 / 이어서 발생하는 (연속 실패 횟수에 따른 백오프 가이드라인에 등장)",
    example: "After experiencing five consecutive network failure reports, the client package activates its backup cluster array.",
    exampleTranslation: "5회 연속 네트워크 실패 보고를 경험한 후, 클라이언트 패키지는 백업 클러스터 배열을 활성화합니다.",
    importanceByRole: { frontend: 8, backend: 9, devops: 9, fullstack: 9, other: 8 },
    sources: []
  },
  {
    id: "doc_103",
    term: "traverse",
    definition: "순회하다 / 가로지르다 (데이터 노드나 소스 트리를 처음부터 끝까지 훑는 동작)",
    example: "The layout rendering loop will traverse the virtual DOM array map to refresh layout elements cleanly.",
    exampleTranslation: "레이아웃 렌더링 루프는 레이아웃 요소를 깔끔하게 새로 고치기 위해 가상 DOM 배열 맵을 순회합니다.",
    importanceByRole: { frontend: 9, backend: 8, devops: 5, fullstack: 8, other: 7 },
    sources: []
  },
];