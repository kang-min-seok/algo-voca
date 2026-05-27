# 단어별 중요도 부여 설계

## 개요

크롤링으로 수집한 기술 용어에 직군별 중요도(0.0~1.0)를 자동으로 산출한다.
중요도는 추천 점수 공식의 w2 항목에 사용되며, 직군에 따라 다르게 적용된다.

```
score = 0.4 × cosine_sim + 0.3 × importance[jobRole] + 0.3 × sm2_priority
```

---

## 1. 소스 → 직군 매핑

크롤러가 수집하는 공식 문서 소스를 직군별로 매핑한다.

| 소스 키 | 크롤링 대상 | 관련 직군 |
|---------|------------|----------|
| `react` | React 공식 문서 | frontend, fullstack |
| `nextjs` | Next.js 공식 문서 | frontend, fullstack |
| `tailwind` | Tailwind CSS 문서 | frontend |
| `flutter` | Flutter 공식 문서 | frontend |
| `docker` | Docker 공식 문서 | devops, fullstack |
| `kubernetes` | Kubernetes 공식 문서 | devops |
| `terraform` | Terraform 공식 문서 | devops |

### 직군별 소스 그룹

```python
ROLE_SOURCES = {
    "frontend":  ["react", "nextjs", "tailwind", "flutter"],
    "backend":   ["nodejs"],  # 추후 Node.js, Django 등 추가
    "devops":    ["docker", "kubernetes", "terraform"],
    "fullstack": ["react", "nextjs", "docker", "kubernetes"],
    "other":     ["react", "nextjs", "tailwind", "flutter", "docker", "kubernetes", "terraform"],
}
```

---

## 2. 크롤러 수정: 소스별 빈도 기록

현재 크롤러는 단어별 총 빈도만 수집한다. **소스별 빈도를 분리 기록하도록 수정**해야 한다.

### 수정 후 출력 형식 (`word_freq_by_source.json`)

```json
{
  "kubernetes": { "docker": 45, "kubernetes": 230, "terraform": 12, "react": 2 },
  "component":  { "react": 180, "nextjs": 95, "flutter": 120, "docker": 5 },
  "deployment": { "docker": 88, "kubernetes": 140, "terraform": 60, "react": 10 }
}
```

---

## 3. 직군별 중요도 계산 (빈도 기반)

### 알고리즘

```python
def calc_importance_by_role(word_freq: dict, all_words_freq: dict) -> dict:
    """
    word_freq: {"docker": 45, "kubernetes": 230, ...}  ← 단어 하나의 소스별 빈도
    all_words_freq: 전체 단어 소스별 빈도 (정규화 기준)
    """
    importance = {}

    for role, sources in ROLE_SOURCES.items():
        # 해당 직군 소스에서의 총 등장 횟수
        role_count = sum(word_freq.get(src, 0) for src in sources)

        # 해당 직군 소스 전체에서 가장 많이 등장한 단어의 빈도 (정규화 기준)
        max_in_role = max(
            sum(freq.get(src, 0) for src in sources)
            for freq in all_words_freq.values()
        )

        importance[role] = min(1.0, role_count / max(1, max_in_role))

    return importance
```

---

## 4. LLM 기반 중요도 보정 (Gemini API)

빈도만으로는 기술적 중요성을 판단하기 어렵다.
(예: "the"가 많이 등장해도 중요하지 않음 — 이미 불용어 처리됨)
(예: "idempotent"는 빈도가 낮아도 backend 개발자에게 핵심 개념)

Gemini API로 기술적 중요도를 0.0~1.0으로 평가받아 빈도 점수와 가중합한다.

### 프롬프트 전략

```python
LLM_IMPORTANCE_PROMPT = """
다음 기술 용어들이 각 직군 개발자에게 얼마나 중요한지 0.0~1.0으로 평가해주세요.

평가 기준:
- 1.0: 해당 직군 개발자라면 반드시 알아야 하는 핵심 개념
- 0.7: 실무에서 자주 접하는 중요한 용어
- 0.4: 알면 도움이 되는 용어
- 0.1: 관련성이 낮거나 매우 드물게 사용

단어 목록: {word_list}

반환 형식 (JSON):
{{
  "word": {{
    "frontend": 0.8,
    "backend": 0.3,
    "devops": 0.1,
    "fullstack": 0.6,
    "other": 0.4
  }}
}}
"""
```

### 최종 중요도 계산

```python
FREQ_WEIGHT = 0.6
LLM_WEIGHT  = 0.4

final_importance[role] = (
    FREQ_WEIGHT * freq_importance[role] +
    LLM_WEIGHT  * llm_importance[role]
)
```

---

## 5. 글로벌 중요도 (importanceGlobal)

특정 직군에 종속되지 않는 단어의 전반적 중요도.
추천 점수에서 `jobRole = 'other'` 유저에게 사용된다.

```python
# 직군별 가중 평균 (fullstack에 높은 가중치 → 범용 중요도 반영)
GLOBAL_ROLE_WEIGHTS = {
    "frontend": 0.2,
    "backend":  0.2,
    "devops":   0.2,
    "fullstack": 0.3,
    "other":    0.1,
}

importance_global = sum(
    importance[role] * weight
    for role, weight in GLOBAL_ROLE_WEIGHTS.items()
)
```

---

## 6. 처리 파이프라인

```
[크롤러 실행]
word_freq_by_source.json 생성
        ↓
[빈도 기반 중요도 계산]
calculate_freq_importance()
        ↓
[Gemini API 배치 호출 (20개씩)]
evaluate_llm_importance()
배치당 4초 대기 (15 RPM 제한)
        ↓
[가중합 계산]
final = 0.6 × freq + 0.4 × llm
        ↓
[word_importance.json 저장]
{term: {frontend, backend, devops, fullstack, other, global}}
        ↓
[검토 및 이상값 수동 보정]
(중요도 0.05 미만 또는 0.95 초과 단어 샘플링 확인)
        ↓
[Firestore & Pinecone 메타데이터 업로드]
```

### 예상 소요 시간 (10,000단어 기준)

| 단계 | 예상 시간 |
|------|-----------|
| 빈도 기반 계산 | 1분 이내 |
| Gemini 배치 호출 (500배치 × 4초) | ~35분 |
| 결과 저장 및 업로드 | ~5분 |
| **총계** | **약 40분** |

---

## 7. Pinecone 메타데이터에 중요도 포함

벡터 검색 시 Pinecone 메타데이터 필터를 활용할 수 있도록,
중요도를 Pinecone 벡터 메타데이터에도 함께 저장한다.

```python
pinecone_vector = {
    "id": word_id,
    "values": embedding_vector,
    "metadata": {
        "term": term,
        "importance_frontend": importance["frontend"],
        "importance_backend":  importance["backend"],
        "importance_devops":   importance["devops"],
        "importance_fullstack": importance["fullstack"],
        "importance_other":    importance["other"],
    }
}
```

이를 통해 Pinecone 쿼리 단계에서 중요도 하한 필터를 적용할 수 있다.

```python
# 예: devops 직군 유저에게 devops 중요도 0.3 이상 단어만 추출
query_result = index.query(
    vector=role_embedding,
    top_k=50,
    filter={"importance_devops": {"$gte": 0.3}}
)
```

---

## 8. 구현 파일 위치

```
crawling/
  LastCode_R.py            ← 소스별 빈도 분리 기록으로 수정 필요
  calculate_importance.py  ← 빈도 + LLM 중요도 계산 신규 작성
  word_importance.json     ← 결과 파일 (gitignore 권장)
  upload_to_firestore.py   ← Firestore 업로드 (word-enrichment.md 참고)
```
