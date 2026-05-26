import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import Counter
import re

# 1. 수집 설정
TARGET_SOURCES = {
    "DOCKER": {"START_URL": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/", "PATH_GUARD": "/get-started/"},
    "KUBERNETES": {"START_URL": "https://kubernetes.io/docs/home/", "PATH_GUARD": "/docs/"},
    "TERRAFORM": {"START_URL": "https://developer.hashicorp.com/terraform/language", "PATH_GUARD": "/terraform/"},
    "FLUTTER": {"START_URL": "https://docs.flutter.dev/", "PATH_GUARD": "/"},
    "REACT": {"START_URL": "https://react.dev/learn", "PATH_GUARD": "/learn"},
    "NEXT_JS": {"START_URL": "https://nextjs.org/docs", "PATH_GUARD": "/docs"},
    "TAILWIND": {"START_URL": "https://tailwindcss.com/docs", "PATH_GUARD": "/docs"}
}

MAX_PAGES_PER_TARGET = 50
global_term_counter = Counter()

# 불용어 리스트 (글로벌 변수로 정의)
STOPWORDS = {
    # === 기존 불용어 ===
    "the", "and", "for", "with", "this", "that", "from", "into", "have", "using",
    "page", "pages", "guide", "learn", "docs", "documentation", "example", "examples",
    "content_copy", "todo", "ok", "ui", "yes", "no", "file", "files", "folder",
    "directory", "project", "projects", "line", "lines", "value", "values", "key",
    "keys", "data", "text", "string", "number", "code", "output", "input", "error",
    "errors", "success", "successfully", "result", "results", "user", "users",
    "system", "systems", "version", "versions", "latest", "new", "old", "click",
    "select", "choose", "need", "must", "want", "like", "well", "just", "now",
    "time", "home", "back", "next", "previous", "search", "menu", "close", "open",
    "edit", "view", "link", "links", "show", "hide", "button", "buttons", "name",
    "id", "url", "ip", "type", "default", "create", "created", "delete", "deleted",
    "update", "updated", "status", "state", "mode", "base", "basic", "level",
    "kind", "set", "get", "add", "remove", "change", "apply", "run", "yaml", "xml",
    "json", "config", "configuration", "spec", "metadata", "parameters", "parameter",
    "you", "your", "can", "are", "not", "will", "would", "should", "could", "been",
    "being", "also", "does", "done", "doing", "make", "made", "makes", "many",
    "much", "more", "some", "such", "than", "they", "them", "these", "those",
    "which", "while", "where", "how", "either", "neither",
    "div", "class", "span", "section", "article", "header", "footer", "nav",
    "main", "body", "container", "wrapper", "element", "elements", "component",
    "components", "props", "children", "template", "templates", "demo", "demos",
    "expand_more", "open_in_new", "overview", "installation", "setup", "getting",
    "started", "getting-started", "reference", "tutorial", "tutorials",
    "function", "functions", "method", "methods", "interface", "interfaces",
    "object", "objects", "array", "arrays", "boolean",
    "integer", "float", "double", "void", "null", "undefined", "true", "false",
    "const", "let", "var", "import", "export", "return", "require", "module",
    "modules", "package", "packages", "library", "libraries", "dependency",
    "dependencies", "build", "building", "built", "install", "installed",
    "local", "remote", "global", "host", "port", "address", "path",
    "paths", "root", "command", "commands", "script", "scripts", "task", "tasks",

    # === 일반 영어 단어 (학습 가치 없음) ===
    "when", "about", "but", "all", "other", "see", "out", "top", "what", "same",
    "each", "its", "only", "any", "both", "then", "here", "there", "first", "last",
    "most", "may", "might", "even", "over", "under", "above", "below", "before",
    "after", "without", "within", "inside", "outside", "since", "once", "via",
    "few", "our", "own", "two", "one", "three", "think", "know", "look", "move",
    "take", "give", "find", "call", "send", "right", "good", "long", "high", "low",
    "large", "join", "stop", "wait", "miss", "live", "play", "stay", "sure", "yet",
    "try", "put", "got", "was", "end", "don", "note", "part", "step", "start",
    "focus", "pass", "read", "write", "etc", "too", "again", "ago", "let",
    "however", "because", "whether", "through", "although", "otherwise", "instead",
    "often", "always", "sometimes", "currently", "automatically", "directly",
    "manually", "immediately", "another", "something", "everything", "every",
    "between", "across", "during", "following", "available", "possible", "existing",
    "similar", "happens", "itself", "certain", "helpful", "general", "common",
    "topic", "people", "second", "days", "room", "post", "posts", "team", "fast",
    "work", "show", "else", "still", "very", "also", "only", "just", "well",
    "allows", "provides", "creates", "includes", "requires", "returns", "supports",
    "used", "called", "named", "required", "enabled", "disabled", "supported",
    "different", "additional", "multiple", "together", "completely", "recently",
    "typical", "related", "means", "uses", "adds", "runs", "gets", "sets", "lets",
    "sign", "keep", "note", "hold", "draw", "goes", "comes", "puts", "fell",
    "has", "had", "its", "own", "may", "got", "was", "did", "said",
    "hello", "world", "foo", "bar", "baz",

    # === 브랜드명 / 기술 도구명 (고유명사) ===
    "kubernetes", "flutter", "react", "terraform", "docker", "typescript",
    "javascript", "firebase", "github", "google", "windows", "linux", "macos",
    "ios", "android", "apple", "vercel", "hashicorp", "css", "html", "jsx",
    "mdx", "aws", "mysql", "redis", "sqlite", "python", "php", "swift", "dart",
    "jest", "babel", "vite", "eslint", "webpack", "sass", "intellij", "discord",
    "consul", "nomad", "vault", "calico", "cilium", "antrea", "romana", "weave",
    "playwright", "cypress", "vitest", "minikube", "kubeadm", "opentelemetry",
    "kustomize", "pnpm", "npm", "rspack", "turbopack", "postcss", "tailwindcss",
    "tailwind", "cdk", "cdktf", "swiftui", "uikit", "xamarin", "dartpad", "hcp",
    "packer", "waypoint", "vagrant", "heroicons", "jetpack", "admob", "cupertino",
    "bluesky", "chromeos", "kuberc", "kubectl", "kubelet", "kubeadm",
    "cloudflare", "netlify", "heroku", "azure", "gcp", "grafana", "prometheus",
    "istio", "envoy", "linkerd", "nginx", "haproxy", "traefik", "helm", "argo",
    "etcd", "zookeeper", "loki", "nats", "kafka", "rabbitmq", "pulsar",
    "svelte", "angular", "vue", "nuxt", "gatsby", "remix", "astro",
    "dra", "cri", "icp", "kyaml",

    # === 파일 확장자 / 짧은 경로 토큰 ===
    "jpg", "txt", "tsx", "src", "html", "lib", "bin", "env", "pub", "png", "svg",
    "gif", "toml", "ini", "cfg", "conf", "scss", "less", "rst", "csv", "mjs",

    # === 외국어 단어 ===
    "pour", "une", "avec", "dans", "les", "des", "sur", "yang", "untuk", "dan",
    "para", "und", "que", "deutsch", "italiano", "polski", "bahasa", "menggunakan",
    "dengan", "sie", "klaster", "kubernetesa", "uwu", "plz",

    # === 국가명/언어명 (네비게이션 항목) ===
    "english", "chinese", "japanese", "korean", "french", "german", "spanish",
    "portuguese", "russian", "italian", "polish", "bengali", "hindi", "persian",
    "vietnamese", "indonesian", "ukrainian", "arabic", "turkish", "india", "mumbai",

    # === 법적/저작권 관련 ===
    "copyright", "trademark", "licensed", "trademarks", "license", "legal",
    "confidential", "bsd", "rights", "inc", "creative", "commons", "attribution",
    "international", "brand", "terms", "conduct", "governance",

    # === 소셜/마케팅 (기술 개념 아님) ===
    "blog", "community", "forum", "subscribe", "sponsor", "newsletter", "showcase",
    "partners", "sales", "certifications", "certified", "workshop",
    "kubecon", "cloudnativecon", "hashiconf",

    # === Kubernetes 내부 API 리소스 타입 ===
    "networkpolicy", "statefulset", "daemonset", "replicaset",
    "replicationcontroller", "horizontalpodautoscaler",
    "persistentvolume", "storageclass", "volumeattributesclass",
    "certificatesigningrequest", "servicecidr", "endpointslice",
    "limitrange", "podsecuritypolicy", "customresourcedefinition",
    "customresourcedefinitions", "serviceaccount",
    "apiservice", "controllerrevision", "clustertrustbundle", "leasecandidate",
    "componentstatus", "persistentvolumeclaim", "podtemplate", "resourcequota",
    "flowschema", "ipaddress", "ingressclass", "poddisruptionbudget",
    "clusterrole", "clusterrolebinding", "rolebinding", "deviceclass",
    "devicetaintrule", "resourceclaim", "resourceclaimtemplate", "priorityclass",
    "csidriver", "csinode", "csistoragecapacity", "volumeattachment",
    "storageversionmigration", "validatingadmissionpolicy", "resourceslice",
    "mutatingadmissionpolicy", "admissionregistration", "apiextensions",
    "apiregistration", "apiserverinternal", "storageversion",
    "podcertificaterequest", "coordination", "flowcontrol",
    "resourcepoolstatusrequest", "storagemigration", "podgroup",
    "cronjob",  # CronJob은 스케줄링 개념(CronJob)이 아닌 k8s 리소스

    # === kubectl CLI 명령어 ===
    "kube-apiserver", "kube-proxy", "kube-scheduler", "kube-controller-manager",
    "metrics-server", "cluster-info", "hello-node", "create-next-app",
    "api-resources", "api-versions", "edit-last-applied", "set-last-applied",
    "view-last-applied", "can-i", "current-context", "delete-cluster",
    "delete-context", "delete-user", "get-clusters", "get-contexts", "get-users",
    "rename-context", "set-cluster", "set-context", "set-credentials", "use-context",
    "port-forward", "docker-registry", "externalname",

    # === Next.js / 프레임워크 내부 API 이름 ===
    "getstaticprops", "getserversideprops", "getstaticpaths", "getinitialprops",
    "generatestaticparams", "generatemetadata", "generateviewport",
    "generateimagemetadata", "generatesitemaps", "dynamicparams",
    "revalidatepath", "revalidatetag",
    "nextresponse", "nextrequest", "draftmode", "permanentredirect",
    "notfound", "not-found", "mdxrs", "pageextensions", "basepath", "assetprefix",
    "exportpathmap", "generatebuildid", "generateetags", "ondemandentries",
    "poweredbyheader", "proxyclientmaxbodysize", "reactstrictmode",
    "serverexternalpackages", "trailingslash", "transpilepackages", "urlimports",
    "uselightningcss", "webvitalsattribution", "appdir", "expiretime", "inlinecss",
    "reactcompiler", "reactmaxheaderslength", "sassoptions", "staletimes",
    "staticgeneration", "turbopackfilesystemcache", "ignoreissue", "typedroutes",
    "viewtransition", "devindicators", "distdir", "optimizepackageimports",
    "adapterpath", "serveractions", "htmllimitedbots", "servercomponentshmrcache",
    "csschunking", "authinterrupts", "cachelife", "cachetag", "cachehandlers",
    "cachehandler", "cachecomponents", "updatetag",
    "mdx-components", "instrumentation-client", "opengraph-image",
    "twitter-image", "apple-icon", "favicon", "board-row",
    "unstable_cache", "unstable_catcherror", "unstable_nostore", "unstable_rethrow",

    # === CSS 특수 값 (어휘 아님) ===
    "oklch",

    # === 기타 의미없는 토큰 ===
    "qme", "sawaratsuki1004", "uwu", "plz", "gordon", "rbac", "abac",
}

# 2. 기술 용어 필터링 함수
def is_valid_tech_term(token):
    original = token
    token = token.lower()
    if len(token) < 3 or token.isdigit(): return False

    if re.search(r'\d{4}-\d{2}', token): return False
    if re.search(r'[0-9a-f]{8}-', token): return False
    if re.search(r'^\d+-\d+$', token): return False
    if re.search(r'^\d+(\.\d+)+$', token): return False

    # 숫자로 시작하는 토큰 (34m, 3-Clause 등)
    if re.match(r'^\d', token): return False

    if token in STOPWORDS: return False

    # camelCase 코드 식별자 (useState, onClick, BuildContext 등)
    if re.search(r'[a-z][A-Z]', original): return False

    # CSS 속성명 (flex-basis, grid-column, font-size 등)
    CSS_PREFIXES = (
        'flex-', 'grid-', 'font-', 'border-', 'text-', 'background-',
        'outline-', 'object-', 'break-', 'list-', 'box-', 'white-',
        'vertical-', 'inline-', 'overscroll-', 'stroke-', 'mask-',
        'aspect-', 'justify-', 'align-', 'hue-', 'drop-', 'line-', 'tab-',
    )
    if any(token.startswith(p) for p in CSS_PREFIXES): return False

    # Material Design 아이콘명 (chevron_right, light_mode 등)
    if re.match(r'^[a-z]+_[a-z]', token): return False

    # Kubernetes API 버전 문자열 (v1alpha1, v1beta2 등)
    if re.match(r'^v\d+(alpha|beta|gamma|rc)\d*$', token): return False

    # kube- 접두사 k8s 컴포넌트명
    if token.startswith('kube-'): return False

    return True

# 3. 크롤링 로직
def crawl_target(url, start_url, path_guard, page_counter, visited):
    if page_counter[0] >= MAX_PAGES_PER_TARGET or url in visited: return
    visited.add(url)
    page_counter[0] += 1
    
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(url, timeout=5, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        text_content = soup.get_text(separator=' ')
        tokens = re.findall(r'\b[a-zA-Z0-9_-]{3,25}\b', text_content)
        
        for token in tokens:
            if is_valid_tech_term(token):
                global_term_counter[token] += 1
        
        for link in soup.find_all("a", href=True):
            next_url = urljoin(url, link.get("href"))
            if path_guard in next_url and urlparse(next_url).netloc == urlparse(start_url).netloc:
                crawl_target(next_url.split('#')[0], start_url, path_guard, page_counter, visited)
    except Exception as e:
        print(f"Error accessing {url}: {e}")

# 4. 실행 및 결과 저장
if __name__ == "__main__":
    print("🚀 전문 기술 스택 분석 엔진 가동")
    for key, config in TARGET_SOURCES.items():
        print(f"분석 중: {key}")
        crawl_target(config['START_URL'], config['START_URL'], config['PATH_GUARD'], [0], set())

    print("\n🏆 데이터 정제 완료. 결과를 저장합니다.")
    with open("refined_tech_stack.txt", "w", encoding="utf-8") as f:
        for term, count in global_term_counter.most_common(2000):
            f.write(f"{term}: {count}\n")
    print("완료: refined_tech_stack.txt 파일에 저장되었습니다.")
