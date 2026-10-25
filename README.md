# chromadb-embedding-visualizer

Shows a ChromaDB vector store as a 3D point cloud.

[![ci](https://github.com/koprjaa/chromadb-embedding-visualizer/actions/workflows/ci.yml/badge.svg)](https://github.com/koprjaa/chromadb-embedding-visualizer/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-AGPL--3.0-A31F34?style=flat-square)

https://github.com/user-attachments/assets/65218844-a127-4740-ab35-1d95218e9b30

I built it to inspect the `BAAI/bge-m3` embeddings in [protext-scraper](https://github.com/koprjaa/protext-scraper), so the default database path points there.

`backend/precompute.py` reads a ChromaDB folder, reduces the vectors to 3D with UMAP, labels clusters with HDBSCAN and writes `backend/embeddings_cache.json`. A FastAPI server serves that file, and the Next.js frontend draws it with hover tooltips. The view is a snapshot: rerun `precompute.py` after the collection changes.

## Install

```bash
cd backend
uv venv
uv pip install -r requirements.txt
cd ..
npm install
```

## Use

Put the ChromaDB folder at `data/chroma-db/protext/`, or point `CHROMA_DB_PATH` at it:

```bash
export CHROMA_DB_PATH="/absolute/path/to/chroma-db"
cd backend
python precompute.py    # writes embeddings_cache.json
python main.py          # API on 127.0.0.1:8000 (HOST and PORT override)
```

In a second terminal, from the repo root:

```bash
npm run dev             # http://localhost:3000
```

## License

[AGPL-3.0-or-later](LICENSE)
