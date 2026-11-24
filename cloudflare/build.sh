#!/usr/bin/env bash
# Build da Cloudflare Pages (projeto cemdobrasil).
# Publica só a página e os arquivos dela em dist/ (sem README.md, cloudflare/ e
# arquivos ocultos) e junta cloudflare/404.html: sem ela, a Cloudflare responde
# 200 com o index.html em endereço que não existe; a Vercel respondia 404.
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf dist
mkdir dist
cp index.html dist/
cp -R assets dist/
cp cloudflare/404.html dist/
find dist -name .DS_Store -delete
echo "dist/: $(find dist -type f | wc -l) arquivos"
