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
    "paths", "root", "command", "commands", "script", "scripts", "task", "tasks"
}

# 2. 기술 용어 필터링 함수
def is_valid_tech_term(token):
    token = token.lower()
    if len(token) < 3 or token.isdigit(): return False
    
    if re.search(r'\d{4}-\d{2}', token): return False
    if re.search(r'[0-9a-f]{8}-', token): return False
    if re.search(r'^\d+-\d+$', token): return False
    if re.search(r'^\d+(\.\d+)+$', token): return False
    
    if token in STOPWORDS: return False
    
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
