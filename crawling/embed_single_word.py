"""
단어 하나를 Gemini로 임베딩해 벡터 값을 출력하는 스크립트.
Pinecone 콘솔 > Query 탭에서 수동 테스트할 때 사용.

사용법:
  python crawling/embed_single_word.py algorithm
  python crawling/embed_single_word.py  # 프롬프트 입력 모드
"""

import sys
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

GEMINI_API_KEY  = os.environ["GEMINI_API_KEY"]
EMBEDDING_MODEL = "gemini-embedding-001"


def embed_word(word: str) -> list[float]:
    client = genai.Client(api_key=GEMINI_API_KEY)
    response = client.models.embed_content(
        model=EMBEDDING_MODEL,
        contents=[word],
        config=types.EmbedContentConfig(task_type="RETRIEVAL_DOCUMENT"),
    )
    return response.embeddings[0].values


if __name__ == "__main__":
    word = sys.argv[1] if len(sys.argv) > 1 else input("임베딩할 단어: ").strip()
    if not word:
        print("단어를 입력하세요.")
        sys.exit(1)

    print(f"\n'{word}' 임베딩 중...")
    vector = embed_word(word)

    out_path = os.path.join(os.path.dirname(__file__), f"{word}.txt")
    with open(out_path, "w") as f:
        f.write(", ".join(str(v) for v in vector))

    print(f"저장 완료: {out_path} (차원: {len(vector)})")
