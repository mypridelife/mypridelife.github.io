#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# "upload": "scp docs/.vuepress/dist root@114.215.242.5:/var/www/class/"
npm i

# 生成侧边栏
npm run gen

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/mypridelife/mypridelife.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages