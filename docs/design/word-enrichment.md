# 단어 뜻/설명 추가 설계 (Word Enrichment)

## 개요

크롤링으로 수집한 기술 용어(term만 있음)에 한국어 뜻, 예문, 직군 분류를 자동으로 추가한다.
Free Dictionary API(일반 단어)와 Gemini API(기술 용어)를 혼합해 처리하고,
결과를 JSON으로 검토 후 Firestore에 업로드한다.

---

## 1. 방법 비교

| 방법 | 정확도 | 비용 | 속도 | 기술 용어 지원 |
|------|--------|------|------|----------------|
| Free Dictionary API | 일반 단어 높음 | 무료 | 빠름 | ❌ 미지원 |
| Gemini API (배치) | 기술 용어 높음 | 무료 티어 | 보통 | ✅ |
| 수동 작성 | 최고 | 시간 비용 큼 | 매우 느림 | ✅ |
| **혼합 방식 (채택)** | **높음** | **무료** | **보통** | ✅ |

**채택 이유:** 10,000개 단어를 수동 처리하는 것은 비현실적이며, 기술 용어는 일반 사전에 없다.
Gemini Flash는 무료 티어(15 RPM)로 약 30분 내 처리 가능하다.

---

## 2. 혼합 파이프라인

```
[word_list.txt]  ← refined_tech_stack.txt에서 단어만 추출
      ↓
[1단계] Free Dictionary API
  성공 → 영어 정의 + 예문 획득
  실패 → Gemini 처리 큐로 이동
      ↓
[2단계] Gemini API (배치 20개)
  한국어 뜻 + 영어 예문 + 직군 분류 생성
  배치당 4초 대기 (15 RPM 제한)
      ↓
[enriched_words.json]  ← 검토용 중간 결과 저장
      ↓
[검토 및 보정]
  - JSON 파싱 실패 단어 재시도
  - definition 길이 5자 미만 단어 재시도
  - 샘플링으로 품질 확인
      ↓
[upload_to_firestore.py]
  Firestore words/ 컬렉션 업로드
  Pinecone 메타데이터 업데이트
```

---

## 3. Gemini 프롬프트 설계

### 핵심 프롬프트

```python
ENRICHMENT_PROMPT = """
다음은 소프트웨어 개발 공식 문서(React, Kubernetes, Docker 등)에서 추출한 기술 용어들입니다.
각 단어에 대해 JSON 형식으로 정보를 반환해주세요.

규칙:
- definition: 한국어로 간결한 뜻 (최대 2문장, 반드시 기술적 맥락 포함)
- example: 실제 개발/운영 상황의 자연스러운 영어 예문 (1문장, 기술 문서 수준)
- exampleTranslation: example의 자연스러운 한국어 해석 (1문장)
- roles: 주로 관련된 직군 (frontend/backend/devops/fullstack/other 중 해당하는 것들)

단어 목록: {word_list}

반환 형식 (JSON만, 설명 없이):
{{
  "word1": {{"definition": "...", "example": "...", "exampleTranslation": "...", "roles": ["backend", "devops"]}},
  "word2": {{"definition": "...", "example": "...", "exampleTranslation": "...", "roles": ["frontend"]}}
}}
"""
```

### 프롬프트 예시 결과

```json
{
  "kubernetes": {
    "definition": "컨테이너화된 애플리케이션의 배포, 스케일링, 관리를 자동화하는 오픈소스 플랫폼이다.",
    "example": "We use Kubernetes to orchestrate microservices and ensure zero-downtime deployments.",
    "exampleTranslation": "쿠버네티스를 사용해 마이크로서비스를 오케스트레이션하고 무중단 배포를 보장한다.",
    "roles": ["devops", "fullstack"]
  },
  "idempotent": {
    "definition": "동일한 요청을 여러 번 실행해도 결과가 항상 같은 성질을 의미한다. REST API 설계에서 중요한 개념이다.",
    "example": "A PUT request should be idempotent, meaning repeated calls produce the same result.",
    "exampleTranslation": "PUT 요청은 멱등해야 하며, 반복 호출해도 동일한 결과가 나와야 한다.",
    "roles": ["backend", "fullstack"]
  },
  "reconciliation": {
    "definition": "React에서 가상 DOM과 실제 DOM을 비교해 변경된 부분만 효율적으로 업데이트하는 과정이다.",
    "example": "React's reconciliation algorithm compares the virtual DOM tree to minimize actual DOM updates.",
    "exampleTranslation": "React의 재조정 알고리즘은 가상 DOM 트리를 비교해 실제 DOM 업데이트를 최소화한다.",
    "roles": ["frontend"]
  }
}
```

---

## 4. 구현 코드

### `crawling/enrich_words.py`

```python
"""
단어에 한국어 뜻과 예문을 추가하는 enrichment 스크립트.

사용법:
  python crawling/enrich_words.py --input refined_tech_stack.txt --output enriched_words.json
"""

import json
import time
import argparse
import requests
from pathlib import Path
from dotenv import load_dotenv
from google import genai

load_dotenv(Path(__file__).parent / ".env")
GEMINI_API_KEY = os.environ["GEMINI_API_KEY"]

DICT_API_URL    = "https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
GEMINI_BATCH    = 20
GEMINI_INTERVAL = 4  # 초 (15 RPM = 4초 간격)


def load_words_from_file(path: str) -> list[str]:
    """refined_tech_stack.txt에서 단어 목록 추출 (빈도 숫자 제거)."""
    words = []
    with open(path, encoding="utf-8") as f:
        for line in f:
            parts = line.strip().split()
            if parts:
                words.append(parts[0])
    return words


def fetch_from_dict_api(word: str) -> dict | None:
    """Free Dictionary API로 영어 뜻과 예문 가져오기."""
    try:
        resp = requests.get(DICT_API_URL.format(word=word), timeout=5)
        if resp.status_code != 200:
            return None
        data = resp.json()[0]
        meanings = data.get("meanings", [])
        if not meanings:
            return None
        definition = meanings[0]["definitions"][0].get("definition", "")
        example    = meanings[0]["definitions"][0].get("example", "")
        if len(definition) < 10:
            return None
        return {"definition_en": definition, "example": example, "roles": ["other"]}
    except Exception:
        return None


def enrich_with_gemini(batch: list[str], client) -> dict:
    """Gemini API로 기술 용어 enrichment (배치 처리)."""
    word_list = ", ".join(batch)
    prompt = ENRICHMENT_PROMPT.format(word_list=word_list)

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt
    )
    text = response.text.strip()

    # ```json ... ``` 블록 제거
    if text.startswith("```"):
        lines = text.split("\n")
        text = "\n".join(lines[1:-1])

    result = json.loads(text)

    # definition이 없거나 너무 짧은 단어는 실패 처리
    return {
        word: data for word, data in result.items()
        if len(data.get("definition", "")) >= 5
    }


def run(input_path: str, output_path: str):
    client = genai.Client(api_key=GEMINI_API_KEY)
    words  = load_words_from_file(input_path)
    words  = list(dict.fromkeys(words))  # 중복 제거

    print(f"총 {len(words)}개 단어 처리 시작")
    results      = {}
    gemini_queue = []
    retry_queue  = []

    # 1단계: Dictionary API
    print("\n[1/3] Free Dictionary API 처리 중...")
    for word in words:
        result = fetch_from_dict_api(word)
        if result:
            results[word] = result
        else:
            gemini_queue.append(word)
    print(f"  성공: {len(results)}개 | Gemini 필요: {len(gemini_queue)}개")

    # 2단계: Gemini API 배치 처리
    print("\n[2/3] Gemini API 처리 중...")
    for i in range(0, len(gemini_queue), GEMINI_BATCH):
        batch = gemini_queue[i:i + GEMINI_BATCH]
        print(f"  배치 {i // GEMINI_BATCH + 1} / {len(gemini_queue) // GEMINI_BATCH + 1}")
        try:
            gemini_result = enrich_with_gemini(batch, client)
            results.update(gemini_result)
            # 실패한 단어 재시도 큐에 추가
            failed = [w for w in batch if w not in gemini_result]
            retry_queue.extend(failed)
        except Exception as e:
            print(f"  ⚠️ 배치 실패: {e}")
            retry_queue.extend(batch)

        if i + GEMINI_BATCH < len(gemini_queue):
            time.sleep(GEMINI_INTERVAL)

    # 3단계: 재시도 (1개씩)
    if retry_queue:
        print(f"\n[3/3] 재시도 {len(retry_queue)}개...")
        for word in retry_queue:
            try:
                result = enrich_with_gemini([word], client)
                results.update(result)
                time.sleep(GEMINI_INTERVAL)
            except Exception:
                print(f"  ⚠️ 최종 실패: {word}")

    # 결과 저장
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    success_rate = len(results) / len(words) * 100
    print(f"\n완료. {len(results)}/{len(words)}개 ({success_rate:.1f}%) → {output_path}")
```

---

## 5. Firestore 업로드 스크립트

### `crawling/upload_to_firestore.py`

```python
"""
enriched_words.json + word_importance.json → Firestore words/ 컬렉션 업로드.

사전 조건:
  - serviceAccountKey.json 필요 (Firebase 콘솔 → 프로젝트 설정 → 서비스 계정)
  - pip install firebase-admin
"""

import json
import firebase_admin
from firebase_admin import credentials, firestore
from google.cloud.firestore_v1 import SERVER_TIMESTAMP


def upload_words(enriched_path: str, importance_path: str):
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
    db = firestore.client()

    with open(enriched_path, encoding="utf-8") as f:
        enriched = json.load(f)

    with open(importance_path, encoding="utf-8") as f:
        importance = json.load(f)

    DEFAULT_IMPORTANCE = {
        "frontend": 0.3, "backend": 0.3,
        "devops": 0.3, "fullstack": 0.3, "other": 0.3
    }

    batch  = db.batch()
    count  = 0
    errors = []

    for term, data in enriched.items():
        try:
            word_ref = db.collection("words").document()
            imp = importance.get(term, DEFAULT_IMPORTANCE)

            batch.set(word_ref, {
                "term":       term,
                "definition": data.get("definition", data.get("definition_en", "")),
                "example":    data.get("example", ""),
                "importanceByRole": {
                    "frontend":  imp.get("frontend", 0.3),
                    "backend":   imp.get("backend", 0.3),
                    "devops":    imp.get("devops", 0.3),
                    "fullstack": imp.get("fullstack", 0.3),
                    "other":     imp.get("other", 0.3),
                },
                "sources":   data.get("roles", []),
                "createdAt": SERVER_TIMESTAMP,
            })

            count += 1
            if count % 500 == 0:
                batch.commit()
                batch = db.batch()
                print(f"  업로드: {count}개")

        except Exception as e:
            errors.append((term, str(e)))

    batch.commit()
    print(f"\n완료. {count}개 업로드 | 실패: {len(errors)}개")
    if errors:
        for term, err in errors[:10]:
            print(f"  ❌ {term}: {err}")
```

---

## 6. 품질 검증 체크리스트

업로드 전 다음 항목을 확인한다.

```
□ definition 없는 단어 수 (0이어야 함)
□ definition 길이 < 10자인 단어 샘플링 확인
□ example 없는 단어 수 (10% 이하 권장)
□ roles가 []인 단어 → "other"로 기본 지정
□ 상위 50개 단어 수동 검토 (정확도 확인)
□ 특수문자/깨진 한글 확인
□ 중복 단어 없음 확인
```

---

## 7. 소요 시간 예측 (10,000단어 기준)

| 단계 | 예상 시간 |
|------|-----------|
| Dictionary API (~3,000단어, 0.1초/단어) | ~5분 |
| Gemini 배치 (~7,000단어, 350배치 × 4초) | ~24분 |
| 재시도 (~200단어 예상) | ~14분 |
| Firestore 업로드 (20배치 × 500개) | ~3분 |
| **총계** | **약 50분** |

---

## 8. 구현 파일 위치

```
crawling/
  enrich_words.py        ← 신규 작성 (이 문서 기준)
  upload_to_firestore.py ← 신규 작성
  enriched_words.json    ← 결과 파일 (.gitignore에 추가)
  word_importance.json   ← word-importance.md에서 생성
  serviceAccountKey.json ← .gitignore에 반드시 추가
```

### `.gitignore`에 추가할 항목

```
crawling/enriched_words.json
crawling/word_importance.json
crawling/serviceAccountKey.json
crawling/word_freq_by_source.json
```
