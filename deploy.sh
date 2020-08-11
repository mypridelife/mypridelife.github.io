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
cd docs/.vuepress

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
APP_NAME="blog"
dstr=`date +%Y-%m-%d-%H-%M-%S`
mv ./dist /usr/local/openresty/nginx/html/${APP_NAME}-${dstr}
rm -f /usr/local/openresty/nginx/html/${APP_NAME}
ln -s /usr/local/openresty/nginx/html/${APP_NAME}-${dstr} /usr/local/openresty/nginx/html/${APP_NAME}