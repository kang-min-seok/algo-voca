# Phase 1 — 단어 데이터 수집 및 가공

## 목표

추천 엔진에서 사용할 영단어 데이터셋을 구성한다.
직군별로 자주 등장하는 기술 영단어를 수집하고, Firestore에 적재할 수 있는 형태로 가공한다.

## 단어 데이터 수집 전략

### 방법 1 — 공식 문서 크롤링 (우선순위 높음)

각 직군별 주요 공식 문서에서 빈출 단어를 추출한다.

| 직군 | 크롤링 대상 문서 |
|------|----------------|
| 프론트엔드 | MDN Web Docs, React Docs, TypeScript Handbook |
| 백엔드 | Node.js Docs, Spring Docs, PostgreSQL Docs |
| DevOps | Kubernetes Docs, Docker Docs, Terraform Docs |
| 공통 | GitHub Docs, REST API 가이드 |

크롤링 처리 흐름:
1. 문서 HTML 수집
2. 불용어(stopwords) 제거
3. 단어 빈도 계산 (TF-IDF 적용 고려)
4. 상위 N개 단어 추출

### 방법 2 — 기존 데이터셋 활용 (보조)

- IT/CS 분야 영단어 데이터셋 (Kaggle, Hugging Face 등)
- 사전 정의된 개발 용어집 (glossary)

## 단어 데이터 스키마 (Firestore)

```ts
interface Word {
  id: string;
  word: string;
  meaning: string;             // 한국어 뜻
  example: string;             // 예문 (공식 문서에서 발췌)
  roles: Role[];               // 관련 직군 태그
  importanceByRole: Record<Role, number>;  // 직군별 중요도 (0~1)
  embedding: number[];         // 벡터 임베딩 (코사인 유사도용)
  source: string;              // 출처 문서
}

type Role = "frontend" | "backend" | "devops" | "common";
```

## 작업 목록

- [ ] 크롤링 스크립트 작성 (Python 또는 Node.js)
- [ ] 불용어 처리 및 빈도 기반 필터링 구현
- [ ] 단어별 한국어 뜻 및 예문 수집 (번역 API 또는 수동)
- [ ] 직군별 중요도 점수 초기값 정의
- [ ] 단어 임베딩 생성 (OpenAI Embeddings API 또는 로컬 모델)
- [ ] Firestore 스키마 생성 및 초기 데이터 적재 스크립트 작성
- [ ] 최소 직군당 200개 이상 단어 적재 확인

## 완료 기준

- Firestore `words` 컬렉션에 최소 500개 단어 적재
- 각 단어에 `embedding`, `importanceByRole` 필드 포함
- 직군(role)별로 단어가 고르게 분포됨을 확인
