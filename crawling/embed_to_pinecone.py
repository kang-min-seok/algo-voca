"""
단어 목록을 Gemini API로 임베딩한 뒤 Pinecone에 upsert하는 스크립트.

사용법:
  1. crawling/.env 파일에 API 키 설정 (crawling/.env.example 참고)
  2. pip install -r crawling/requirements.txt
  3. python crawling/embed_to_pinecone.py
"""

import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai import types
from pinecone import Pinecone, ServerlessSpec

# .env 파일을 이 스크립트 기준 경로에서 로드
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

GEMINI_API_KEY      = os.environ["GEMINI_API_KEY"]
PINECONE_API_KEY    = os.environ["PINECONE_API_KEY"]
PINECONE_INDEX_NAME = os.getenv("PINECONE_INDEX_NAME", "algvoca-words")
PINECONE_CLOUD      = os.getenv("PINECONE_CLOUD", "aws")
PINECONE_REGION     = os.getenv("PINECONE_REGION", "us-east-1")

EMBEDDING_MODEL     = "gemini-embedding-001"  # text-embedding-004 후속 모델
EMBEDDING_DIMENSION = 3072  # gemini-embedding-001 기본 차원
UPSERT_BATCH_SIZE   = 100   # Pinecone 권장 배치 크기
EMBED_BATCH_SIZE    = 20    # Gemini 무료 티어 RPM 제한 고려


def build_pinecone_index() -> "pinecone.Index":
    pc = Pinecone(api_key=PINECONE_API_KEY)
    existing = {idx.name for idx in pc.list_indexes()}
    if PINECONE_INDEX_NAME not in existing:
        print(f"인덱스 '{PINECONE_INDEX_NAME}' 생성 중...")
        pc.create_index(
            name=PINECONE_INDEX_NAME,
            dimension=EMBEDDING_DIMENSION,
            metric="cosine",
            spec=ServerlessSpec(cloud=PINECONE_CLOUD, region=PINECONE_REGION),
        )
        # 인덱스 준비 대기
        while not pc.describe_index(PINECONE_INDEX_NAME).status["ready"]:
            time.sleep(1)
        print("인덱스 생성 완료")
    return pc.Index(PINECONE_INDEX_NAME)


def embed_words(words: list[str]) -> list[dict]:
    """단어 리스트를 Gemini로 임베딩. [{word, embedding}, ...] 반환."""
    client = genai.Client(api_key=GEMINI_API_KEY)
    results = []

    for i in range(0, len(words), EMBED_BATCH_SIZE):
        batch = words[i : i + EMBED_BATCH_SIZE]
        print(f"  임베딩 중... {i + len(batch)}/{len(words)}")

        response = client.models.embed_content(
            model=EMBEDDING_MODEL,
            contents=batch,
            config=types.EmbedContentConfig(task_type="RETRIEVAL_DOCUMENT"),
        )
        # 배치 응답: response.embeddings (list), 단일 응답: response.embedding
        embeddings = response.embeddings if len(batch) > 1 else [response.embedding]
        for word, emb in zip(batch, embeddings):
            results.append({"word": word, "embedding": emb.values})

        # 무료 티어 RPM(분당 요청 수) 초과 방지
        if i + EMBED_BATCH_SIZE < len(words):
            time.sleep(1)

    return results


def push_to_pinecone(index, embedded: list[dict]) -> None:
    """임베딩 결과를 Pinecone에 배치 upsert."""
    vectors = [
        {
            "id": item["word"],
            "values": item["embedding"],
            "metadata": {"word": item["word"]},
        }
        for item in embedded
    ]

    for i in range(0, len(vectors), UPSERT_BATCH_SIZE):
        batch = vectors[i : i + UPSERT_BATCH_SIZE]
        index.upsert(vectors=batch)
        print(f"  Pinecone upsert: {min(i + UPSERT_BATCH_SIZE, len(vectors))}/{len(vectors)}")


def run(words: list[str]) -> None:
    if not words:
        print("단어 목록이 비어 있습니다.")
        return

    words = list(dict.fromkeys(w.strip() for w in words if w.strip()))  # 중복·공백 제거
    print(f"\n총 {len(words)}개 단어를 처리합니다.")

    print("\n[1/2] Gemini 임베딩...")
    embedded = embed_words(words)

    print("\n[2/2] Pinecone 업로드...")
    index = build_pinecone_index()
    push_to_pinecone(index, embedded)

    print(f"\n완료. {len(embedded)}개 벡터가 '{PINECONE_INDEX_NAME}' 인덱스에 저장되었습니다.")


if __name__ == "__main__":
    # ── 여기에 단어 목록을 넣거나, crawler.py 결과를 연동하세요 ──
    sample_words = [
        "algorithm",
        "deployment",
        "kubernetes",
        "serverless",
        "containerization",
        "microservice",
        "orchestration",
        "idempotent",
        "asynchronous",
        "middleware",
    ]
    run(sample_words)
