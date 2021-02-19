---
title: 技术栈总结-npm
date: 2021-01-16
#sidebar: 'auto'
categories:
  - Summary
tags:
  - vue
#keys:
#  - 'vue'
#publish: true
---

## npm

### npm: 相关命令

<details>
<summary>相关命令</summary>

```js
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

</details>

### npm: About semantic versioning

| Code status                               | Stage         | Rule                                                               | Example version |
| ----------------------------------------- | ------------- | ------------------------------------------------------------------ | --------------- |
| First release                             | New product   | Start with 1.0.0                                                   | 1.0.0           |
| Backward compatible bug fixes             | Patch release | Increment the third digit                                          | 1.0.1           |
| Backward compatible new features          | Minor release | Increment the middle digit and reset last digit to zero            | 1.1.0           |
| Changes that break backward compatibility | Major release | Increment the first digit and reset middle and last digits to zero | 2.0.0           |

### npm: npm-package.json

[npm-package.json](https://docs.npmjs.com/files/package.json#bin)

### npm: node_modules .bin

Q1: scripts 里面配置的 mocha 是哪来的呢？
答：通过 npm 启动的脚本，会默认把 node_modules/.bin 加到 PATH 环境变量中
[具体文档](https://docs.npmjs.com/cli/v6/commands/npm-run-script)

Q2: node_modules/.bin/mocha 是哪来的？
答：当某个模块配置了 bin 定义时，就会被安装的时候，自动软链了过去。
[具体文档](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)

```json
{
  "name": "mocha",
  "bin": {
    "mocha": "./bin/mocha"
  }
}
```
