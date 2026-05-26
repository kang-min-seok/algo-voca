# 기술 문서 기반 핵심 기술 용어 자동 탐지 통합 크롤러
# MDN / React / Next.js / Tailwind / AWS / Terraform / Docker / Flutter / Kubernetes

import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import Counter
import re

# =============================================
# 전역 설정
# =============================================
MAX_DEPTH = 2
term_counter = Counter()

# =============================================
# 통합 불용어
# =============================================
STOPWORDS = {
    # 관사 / 전치사 / 접속사
    "the", "and", "for", "with", "from", "into",
    "of", "in", "on", "at", "by", "to", "a", "an", "as",
    "or", "but", "not", "nor", "so", "yet",
    "up", "out", "off", "over", "under", "after", "before",
    # 대명사 / 지시어
    "this", "that", "these", "those",
    "it", "its", "you", "your", "they", "them", "their", "they",
    "there", "here", "where", "which", "who", "whom", "what",
    "when", "while", "than", "then", "also",
    # be동사 / 조동사
    "is", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did",
    "will", "would", "shall", "should",
    "can", "could", "may", "might", "must",
    # 일반 동사
    "using", "use", "used", "uses",
    "get", "set", "run", "add", "see", "let", "put",
    "make", "take", "give", "go", "comes", "come",
    "build", "built", "create", "update", "delete", "remove",
    "support", "supports", "supported",
    "show", "shows", "shown", "know", "find",
    "start", "stop", "enable", "disable",
    # 부사 / 형용사
    "all", "any", "both", "each", "how",
    "more", "most", "other", "such", "same",
    "new", "old", "own", "very", "just",
    "only", "even", "still", "already", "always",
    "never", "often", "well", "long", "high", "low",
    # 일반 명사
    "way", "part", "time", "day", "year", "end",
    "step", "case", "form", "mode", "item", "items",
    "section", "content", "result", "results",
    "option", "options", "property", "properties",
    "method", "methods", "object", "objects",
    "field", "fields", "view", "views",
    "user", "users", "app", "apps",
    # 문서 관련
    "page", "pages", "guide", "guides",
    "learn", "docs", "documentation",
    "example", "examples",
    "reference", "references",
    "about", "overview", "introduction",
    "getting", "started", "install", "installation",
    "project", "tutorial", "tutorials",
    "blog", "post", "changelog", "image", "children" ,"html"
    # 브랜드명 / 크롤링 대상 도구명
    "mozilla", "developer",
    "react", "javascript",
    "next", "nextjs", "vercel",
    "tailwind", "class", "classes",
    "amazon", "aws",
    "terraform", "hashicorp", "configuration",
    "docker",
    "flutter", "dart", "android", "ios",
    "kubernetes",
    # JS / 프로그래밍 키워드
    "const", "let", "var",
    "function", "return",
    "import", "export", "default",
    "true", "false", "null", "undefined",
    "async", "await", "new", "void", "typeof",
    # 일반 기술 문서 단어
    "service", "services", "management", "console",
    "type", "types", "value", "values",
    "list", "data", "file", "files",
    "code", "text", "name", "number",
    "first", "last",
    "note", "info", "link", "links",
    "click", "open", "close", "read", "write",
    "version", "versions",
    "following", "below", "above",
    "following", "here", "next", "previous", "prev",
}

# =============================================
# 기술 용어 저장
# =============================================
def save_term(word, weight=1):
    word = word.strip()
    if len(word) < 2:
        return
    lower_word = word.lower()
    if lower_word in STOPWORDS:
        return
    if word.isdigit():
        return
    term_counter[lower_word] += weight


# =============================================
# 분석 함수
# =============================================

def analyze_general_terms(text, weight=1):
    for word in re.findall(r'\b[A-Za-z][A-Za-z0-9\-_\.]+\b', text):
        lower = word.lower()
        if lower in STOPWORDS or len(word) < 3:
            continue
        has_camel = bool(re.search(r'[A-Z][a-z]+[A-Z]', word))
        has_snake = "_" in word
        has_dash = "-" in word
        has_number = bool(re.search(r'\d', word))
        is_upper = word.isupper()
        starts_upper = word[0].isupper()
        is_long = len(word) >= 7
        if not (has_camel or has_snake or has_dash or has_number or is_upper or starts_upper or is_long):
            continue
        w = weight
        if has_snake:      w += 8
        if has_camel:      w += 7
        if is_upper:       w += 5
        if has_number:     w += 3
        if starts_upper:   w += 2
        save_term(word, w)


CLOUD_KEYWORDS = {
    "cloud", "instance", "container", "cluster", "lambda",
    "serverless", "storage", "database", "network", "security",
    "identity", "scaling", "compute", "deployment", "pipeline",
    "microservice", "monitoring",
}

def analyze_cloud_terms(text, weight=1):
    analyze_general_terms(text, weight)
    for word in re.findall(r'\b[A-Za-z][A-Za-z0-9\-_\.]+\b', text):
        lower = word.lower()
        if any(kw in lower for kw in CLOUD_KEYWORDS):
            save_term(word, weight + 6)


def analyze_html_tags(text, weight=1):
    for tag in re.findall(r'<([a-zA-Z0-9]+)', text):
        save_term(f"html_{tag}", weight + 5)


def analyze_js_code(text, weight=1):
    for hook in re.findall(r'\buse[A-Z][A-Za-z]+\b', text):
        save_term(hook, weight + 10)
    for func in re.findall(r'\b([A-Za-z0-9_]+)\(', text):
        if len(func) >= 4:
            save_term(func, weight + 3)
    for term in re.findall(r'\b[A-Za-z]+(?:Props|Component|Router|Layout|Provider)\b', text):
        save_term(term, weight + 8)


def analyze_ngrams(text, weight=1):
    lower = text.lower()
    for pattern in [
        r'\b([a-z]+\s+[a-z]+)\b',
        r'\b([a-z]+\s+[a-z]+\s+[a-z]+)\b',
    ]:
        for phrase in re.findall(pattern, lower):
            parts = phrase.split()
            if any(len(p) < 3 for p in parts):
                continue
            if any(p in STOPWORDS for p in parts):
                continue
            save_term(phrase, weight)


def analyze_tailwind_classes(text, weight=1):
    for block in re.findall(r'(?:class|className)=["\']([^"\']+)["\']', text):
        for cls in block.split():
            if len(cls) >= 2:
                save_term(cls, weight + 5)
    for util in re.findall(r'\b[a-z]+(?:-[a-z0-9]+)+\b', text):
        save_term(util, weight + 3)


def analyze_aws_patterns(text, weight=1):
    for term in re.findall(r'\b[A-Z0-9]{2,}\b', text):
        save_term(term, weight + 8)
    for term in re.findall(r'\b[A-Z][a-zA-Z0-9]+\b', text):
        w = weight + 5
        if "Cloud" in term:  w += 5
        if "DB" in term:     w += 4
        if "Lambda" in term: w += 6
        save_term(term, w)


def analyze_terraform_code(text, weight=1):
    for term in re.findall(r'\b[a-z]+_[a-z0-9_]+\b', text):
        save_term(term, weight + 8)
    for term in re.findall(
        r'\b(provider|resource|module|output|variable|locals|backend|workspace|provisioner|data)\b',
        text,
    ):
        save_term(term, weight + 10)


def analyze_flutter_code(text, weight=1):
    for term in re.findall(r'\b[A-Z][A-Za-z0-9]+\b', text):
        w = weight
        if "Widget"  in term: w += 10
        if "Context" in term: w += 7
        if "Builder" in term: w += 5
        save_term(term, w)
    for term in re.findall(r'extends\s+([A-Z][A-Za-z0-9]+)', text):
        save_term(term, weight + 12)


K8S_KEYWORDS = {
    "pod", "node", "deployment", "service", "namespace",
    "configmap", "secret", "daemonset", "statefulset",
    "replicaset", "scheduler", "controller", "etcd",
    "kubelet", "kubectl", "ingress", "container",
    "persistentvolume", "persistentvolumeclaim",
    "autoscaling", "cni", "cri", "csi", "sidecar",
    "operator", "helm",
}

def analyze_k8s_terms(text, weight=1):
    analyze_general_terms(text, weight)
    for word in re.findall(r'\b[A-Za-z][A-Za-z0-9\-_]+\b', text):
        if word.lower() in K8S_KEYWORDS:
            save_term(word, weight + 12)


def analyze_k8s_yaml(text, weight=1):
    for pattern in [
        r'kind:\s*([A-Za-z]+)',
        r'apiVersion:\s*([A-Za-z0-9\/\.]+)',
        r'name:\s*([A-Za-z0-9\-_]+)',
    ]:
        for match in re.findall(pattern, text):
            save_term(match, weight + 10)
    for cmd in re.findall(r'kubectl\s+([a-z]+)', text):
        save_term(f"kubectl_{cmd}", weight + 12)


# =============================================
# 링크 필터 생성
# =============================================
def make_link_filter(start_url, required_path=None):
    netloc = urlparse(start_url).netloc
    def link_filter(href, base_url):
        next_url = urljoin(base_url, href)
        parsed = urlparse(next_url)
        if parsed.netloc != netloc:
            return None
        if required_path and required_path not in parsed.path:
            return None
        return parsed.scheme + "://" + parsed.netloc + parsed.path
    return link_filter


# =============================================
# 크롤링 대상 설정
# =============================================
CRAWL_TARGETS = [
    {
        "name": "MDN Web Docs",
        "start_url": "https://developer.mozilla.org/en-US/docs/Web",
        "max_pages": 30,
        "link_filter": make_link_filter("https://developer.mozilla.org/en-US/docs/Web"),
        "tag_weights": {
            "title": 10, "h1": 10, "h2": 8, "h3": 6,
            "code": 15, "pre": 15, "strong": 5,
            "a": 2, "p": 1, "li": 1,
        },
        "text_analyzers": [analyze_general_terms],
        "code_analyzers": [analyze_html_tags, analyze_js_code],
    },
    {
        "name": "React",
        "start_url": "https://react.dev/learn",
        "max_pages": 30,
        "link_filter": make_link_filter("https://react.dev/learn"),
        "tag_weights": {
            "h1": 10, "h2": 8, "h3": 6,
            "code": 15, "pre": 15, "strong": 5,
            "p": 1, "li": 1,
        },
        "text_analyzers": [analyze_general_terms],
        "code_analyzers": [analyze_js_code],
    },
    {
        "name": "Next.js",
        "start_url": "https://nextjs.org/docs",
        "max_pages": 30,
        "link_filter": make_link_filter("https://nextjs.org/docs", "/docs"),
        "tag_weights": {
            "title": 10, "h1": 10, "h2": 8, "h3": 6,
            "code": 15, "pre": 15, "strong": 5,
            "p": 1, "li": 1,
        },
        "text_analyzers": [analyze_general_terms, analyze_ngrams],
        "code_analyzers": [analyze_js_code],
    },
    {
        "name": "Tailwind CSS",
        "start_url": "https://tailwindcss.com/docs",
        "max_pages": 20,
        "link_filter": make_link_filter("https://tailwindcss.com/docs"),
        "tag_weights": {
            "h1": 10, "h2": 8, "h3": 6,
            "code": 15, "pre": 15, "strong": 5,
            "p": 1, "li": 1,
        },
        "text_analyzers": [analyze_general_terms],
        "code_analyzers": [analyze_tailwind_classes],
    },
    {
        "name": "AWS Docs",
        "start_url": "https://docs.aws.amazon.com/",
        "max_pages": 40,
        "link_filter": make_link_filter("https://docs.aws.amazon.com/"),
        "tag_weights": {
            "code": 18, "pre": 18,
            "h1": 12, "h2": 10, "h3": 8,
            "strong": 5, "a": 2,
        },
        "text_analyzers": [analyze_cloud_terms],
        "code_analyzers": [analyze_aws_patterns],
    },
    {
        "name": "Terraform",
        "start_url": "https://developer.hashicorp.com/terraform/docs",
        "max_pages": 30,
        "link_filter": make_link_filter(
            "https://developer.hashicorp.com/terraform/docs", "/terraform/"
        ),
        "tag_weights": {
            "code": 15, "pre": 15,
            "h1": 10, "h2": 8, "h3": 6,
            "strong": 4, "a": 1,
        },
        "text_analyzers": [analyze_general_terms],
        "code_analyzers": [analyze_terraform_code],
    },
    {
        "name": "Docker",
        "start_url": "https://docs.docker.com/get-started/",
        "max_pages": 20,
        "link_filter": make_link_filter("https://docs.docker.com/get-started/"),
        "tag_weights": {
            "code": 15, "pre": 15,
            "h1": 10, "h2": 8, "h3": 6,
            "strong": 4, "p": 1, "li": 1,
        },
        "text_analyzers": [analyze_general_terms],
        "code_analyzers": [],
    },
    {
        "name": "Flutter",
        "start_url": "https://docs.flutter.dev/",
        "max_pages": 30,
        "link_filter": make_link_filter("https://docs.flutter.dev/"),
        "tag_weights": {
            "code": 15, "pre": 15,
            "h1": 10, "h2": 8, "h3": 6,
            "strong": 4, "a": 1,
        },
        "text_analyzers": [analyze_general_terms],
        "code_analyzers": [analyze_flutter_code],
    },
    {
        "name": "Kubernetes",
        "start_url": "https://kubernetes.io/docs/",
        "max_pages": 30,
        "link_filter": make_link_filter("https://kubernetes.io/docs/", "/docs/"),
        "tag_weights": {
            "code": 18, "pre": 18,
            "h1": 12, "h2": 10, "h3": 8,
            "strong": 5, "a": 2,
        },
        "text_analyzers": [analyze_k8s_terms],
        "code_analyzers": [analyze_k8s_yaml],
    },
]


# =============================================
# 기술 용어 추출
# =============================================
def extract_terms(soup, config):
    code_tags = {"code", "pre"}
    for tag_name, weight in config["tag_weights"].items():
        for tag in soup.find_all(tag_name):
            text = tag.get_text(separator=" ", strip=True)
            if not text:
                continue
            for analyzer in config["text_analyzers"]:
                analyzer(text, weight)
            if tag_name in code_tags:
                for analyzer in config["code_analyzers"]:
                    analyzer(text, weight)


# =============================================
# 크롤링 함수
# =============================================
def crawl(url, depth, config, visited_set):
    if depth > MAX_DEPTH:
        return
    if len(visited_set) >= config["max_pages"]:
        return
    if url in visited_set:
        return

    visited_set.add(url)

    print(f"\n{'=' * 60}")
    print(f"[{config['name']}] [{len(visited_set)}] 분석 페이지")
    print(url)
    print("=" * 60)

    try:
        response = requests.get(
            url,
            headers={"User-Agent": "Mozilla/5.0"},
            timeout=10,
        )
        print("응답 코드:", response.status_code)

        if response.status_code != 200:
            return

        soup = BeautifulSoup(response.text, "html.parser")

        for tag in soup(["script", "style", "noscript"]):
            tag.decompose()

        article = soup.find("main") or soup

        extract_terms(article, config)

        print(f"누적 기술 용어 수: {len(term_counter)}")

        link_filter = config["link_filter"]

        for link in article.find_all("a"):
            href = link.get("href")
            if not href:
                continue
            if href.startswith(("#", "javascript", "mailto:")):
                continue
            clean_url = link_filter(href, url)
            if clean_url:
                crawl(clean_url, depth + 1, config, visited_set)

    except Exception as e:
        print("오류 발생:", e)


# =============================================
# 실행
# =============================================
total_visited = 0

for config in CRAWL_TARGETS:
    print(f"\n{'#' * 70}")
    print(f"# {config['name']} 크롤링 시작")
    print(f"# 시작 URL : {config['start_url']}")
    print(f"{'#' * 70}")

    visited_set = set()
    crawl(config["start_url"], 0, config, visited_set)
    total_visited += len(visited_set)

    print(f"\n[완료] {config['name']} — {len(visited_set)} 페이지")

# =============================================
# 결과 출력 및 저장
# =============================================
print(f"\n{'=' * 70}")
print("통합 기술 용어 분석 결과")
print("=" * 70)
print(f"총 방문 페이지 수 : {total_visited}")
print(f"총 기술 용어 수   : {len(term_counter)}")

if term_counter:
    top_word, top_count = term_counter.most_common(1)[0]
    print(f"가장 많이 등장한 기술 용어: '{top_word}' → {top_count}회")
else:
    print("기술 용어를 찾지 못했습니다.")

out_path = os.path.join(os.path.dirname(__file__), "crawl_result.txt")
with open(out_path, "w", encoding="utf-8") as f:
    f.write(f"총 방문 페이지 수 : {total_visited}\n")
    f.write(f"총 기술 용어 수   : {len(term_counter)}\n\n")
    for word, count in term_counter.most_common():
        f.write(f"{word:<35} : {count}\n")

print(f"\n결과 저장 완료: {out_path}")
