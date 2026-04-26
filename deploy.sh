#!/bin/bash
# 本地构建并推送到 output 分支，Vercel 自动部署
set -e

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SITE_DIR"

echo "=== Build ==="
NODE_OPTIONS='--max-old-space-size=6144' npx docusaurus build --no-minify

echo "=== Push to output branch ==="
# 把 build/ 目录推到 output 分支
cd build

# 初始化临时 git
git init
git checkout -b output
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M')"

# 推送到 output 分支（强制覆盖）
git push -f git@github.com:HMOS-DocsTeam/harmonyos-docs-site.git output:output

echo "=== Done! Vercel will auto-deploy ==="
