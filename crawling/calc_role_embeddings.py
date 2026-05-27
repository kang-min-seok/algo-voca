"""
직군별 대표 임베딩 벡터를 계산해 functions/src/constants/roleEmbeddings.ts 로 출력.

사용법:
  1. .env.local(루트) 또는 crawling/.env 에 GEMINI_API_KEY 설정
  2. python crawling/calc_role_embeddings.py

출력: functions/src/constants/roleEmbeddings.ts (기존 파일 덮어씀)
"""

import os
import json
from pathlib import Path
from dotenv import load_dotenv
from google import genai
from google.genai import types

# 루트 .env.local 우선 로드, 없으면 crawling/.env 시도
ROOT_DIR = Path(__file__).resolve().parent.parent
load_dotenv(ROOT_DIR / ".env.local")
load_dotenv(Path(__file__).parent / ".env")

GEMINI_API_KEY  = os.environ["GEMINI_API_KEY"]
EMBEDDING_MODEL = "gemini-embedding-001"
OUTPUT_FILE     = ROOT_DIR / "functions" / "src" / "constants" / "roleEmbeddings.ts"

# 직군별 대표 쿼리 텍스트 (firestore-schema.md 설계 기반)
ROLE_QUERIES: dict[str, str] = {
    "frontend":  "React Next.js UI component CSS JavaScript TypeScript frontend web development",
    "backend":   "API server database Node.js REST microservice authentication backend",
    "devops":    "Docker Kubernetes Terraform CI/CD deployment infrastructure cloud orchestration",
    "fullstack": "React Node.js Docker REST API deployment full-stack web application",
    "other":     "software engineering programming algorithm data structure",
}


def embed(client: genai.Client, text: str) -> list[float]:
    response = client.models.embed_content(
        model=EMBEDDING_MODEL,
        contents=text,
        config=types.EmbedContentConfig(task_type="RETRIEVAL_QUERY"),
    )
    return response.embedding.values


def format_vector(values: list[float]) -> str:
    """number[] 리터럴을 한 줄로 직렬화."""
    return "[" + ", ".join(f"{v:.8f}" for v in values) + "]"


def write_ts(embeddings: dict[str, list[float]]) -> None:
    lines = [
        "import type { JobRole } from '../types'",
        "",
        "// crawling/calc_role_embeddings.py 로 생성된 파일 — 직접 수정 금지",
        "export const ROLE_EMBEDDINGS: Record<JobRole, number[]> = {",
    ]
    roles = ["frontend", "backend", "devops", "fullstack", "other"]
    for role in roles:
        lines.append(f"  {role}:  {format_vector(embeddings[role])},")
    lines += ["}", ""]

    OUTPUT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print(f"  → {OUTPUT_FILE}")


def main() -> None:
    client = genai.Client(api_key=GEMINI_API_KEY)
    embeddings: dict[str, list[float]] = {}

    print(f"직군 임베딩 계산 중 (모델: {EMBEDDING_MODEL})...")
    for role, query in ROLE_QUERIES.items():
        print(f"  {role}: \"{query[:50]}...\"")
        embeddings[role] = embed(client, query)
        print(f"    → {len(embeddings[role])}차원 벡터 완료")

    print("\nroleEmbeddings.ts 작성 중...")
    write_ts(embeddings)
    print("완료. Functions 재빌드 후 배포하세요: cd functions && npm run build")


if __name__ == "__main__":
    main()
