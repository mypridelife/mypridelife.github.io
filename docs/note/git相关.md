---
title: git相关
date: 2020-09-09
#sidebar: 'auto'
categories:
  - Note
  - Git
tags:
  - git
#keys:
#  - 'vue'
#publish: true
---

## 常用 git 命令

```
# 设置邮箱
git config --global user.email "张三的邮箱地址"
# 设置用户名
git config --global user.name "张三"
# 生成公钥（一路回车）
ssh-keygen -t rsa
cd ~/.ssh
cat id_rsa.pub

Git 管理的文件分为：工作区，版本库，版本库又分为暂存区 stage 和暂存区分支 master(仓库)

工作区>>>>暂存区>>>>仓库

git add 把文件从工作区>>>>暂存区，git commit 把文件从暂存区>>>>仓库，

git diff 查看工作区和暂存区差异，git diff --cached 查看暂存区和仓库差异，git diff HEAD 查看工作区和仓库的差异，

git add 的反向命令 git checkout，撤销工作区修改，即把暂存区最新版本转移到工作区，

git commit 的反向命令 git reset –-soft，就是把仓库最新版本转移到暂存区。

git revert 反向操作某一条记录

git tag v0.9 f52c633 / git tag -d v0.9 / git push origin :refs/tags/v0.9 打 tag

git log git reflog 查看 log/查看所有 log

git commit –amend 修改 commit 信息

git cherry-pick 合并某个 commit
```

## 表情

### 在 commit 时添加一个 emoji 表情图标

```git
git commit -m ':emoji: 此次提交的内容说明'
```

### 添加多个 emoji 表情图标

```git
git commit -m ':emoji1: :emoji2: :emoji3: 此次提交的内容说明'
```

### 表情列表

在提交内容的前面增加了 emoji 标签： **:emoji:**，其中 emoji 是表情图标的标签，列表见下面的附录表格。

| emoji                                   | emoji 代码                   | commit 说明           |
| --------------------------------------- | ---------------------------- | --------------------- |
| :art: (调色板)                          | `:art:`                      | 改进代码结构/代码格式 |
| :zap: (闪电):racehorse: (赛马)          | `:zap: :racehorse:`          | 提升性能              |
| :fire: (火焰)                           | `:fire:`                     | 移除代码或文件        |
| :bug: (bug)                             | `:bug:`                      | 修复 bug              |
| :ambulance: (急救车)                    | `:ambulance:`                | 重要补丁              |
| :sparkles: (火花)                       | `:sparkles:`                 | 引入新功能            |
| :memo: (备忘录)                         | `:memo:`                     | 撰写文档              |
| :rocket: (火箭)                         | `:rocket:`                   | 部署功能              |
| :lipstick: (口红)                       | `:lipstick:`                 | 更新 UI 和样式文件    |
| :tada: (庆祝)                           | `:tada:`                     | 初次提交              |
| :white_check_mark: (白色复选框)         | `:white_check_mark:`         | 增加测试              |
| :lock: (锁)                             | `:lock:`                     | 修复安全问题          |
| :apple: (苹果)                          | `:apple:`                    | 修复 macOS 下的问题   |
| :penguin: (企鹅)                        | `:penguin:`                  | 修复 Linux 下的问题   |
| :checkered_flag: (旗帜)                 | `:checked_flag:`             | 修复 Windows 下的问题 |
| :bookmark: (书签)                       | `:bookmark:`                 | 发行/版本标签         |
| :rotating_light: (警车灯)               | `:rotating_light:`           | 移除 linter 警告      |
| :construction: (施工)                   | `:construction:`             | 工作进行中            |
| :green_heart: (绿心)                    | `:green_heart:`              | 修复 CI 构建问题      |
| :arrow_down: (下降箭头)                 | `:arrow_down:`               | 降级依赖              |
| :arrow_up: (上升箭头)                   | `:arrow_up:`                 | 升级依赖              |
| :construction_worker: (工人)            | `:construction_worker:`      | 添加 CI 构建系统      |
| :chart_with_upwards_trend: (上升趋势图) | `:chart_with_upwards_trend:` | 添加分析或跟踪代码    |
| :hammer: (锤子)                         | `:hammer:`                   | 重大重构              |
| :heavy_minus_sign: (减号)               | `:heavy_minus_sign:`         | 减少一个依赖          |
| :whale: (鲸鱼)                          | `:whale:`                    | Docker 相关工作       |
| :heavy_plus_sign: (加号)                | `:heavy_plug_sign:`          | 增加一个依赖          |
| :wrench: (扳手)                         | `:wrench:`                   | 修改配置文件          |
| :globe_with_meridians: (地球)           | `:globe_with_meridians:`     | 国际化与本地化        |
| :pencil2: (铅笔)                        | `:pencil2:`                  | 修复 typo             |
