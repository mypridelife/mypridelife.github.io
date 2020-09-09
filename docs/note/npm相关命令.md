---
title: npm相关命令
#date: 2020-09-09
#sidebar: 'auto'
categories:
  - Npm
  - Note
tags:
  - npm
#keys:
#  - 'vue'
#publish: true
---

```shell
// nrm 相关命令
npm i nrm -g
nrm // 展示 nrm 可用命令
nrm ls // 列出已经配置的所有仓库
nrm test // 测试所有仓库的响应时间
nrm add <registry> <url> // 新增仓库
nrm use <registry> // 切换仓库

// 创建 package.json
npm init
// 发布
npm publish
npm publish --access public
// 登录
npm adduser
// 加作用域
npm init --scope=@mypridelife -y
// 下载
npm i name
npm rm name
// 迭代
npm version <major | minor | patch>
// 查看版本
npm view name versions
// 更新
npm up name
// 废弃
npm deprecate <pkg>[@<version>] <message>
// 删除已发布
npm unpublish xxx --force
```
