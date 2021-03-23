---
title: 技术栈总结-git
date: 2020-02-03
#sidebar: 'auto'
categories:
  - Summary
tags:
  - vue
#keys:
#  - 'vue'
#publish: true
---

## git

### git: 命令 && 表情

```
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

<details>
<summary>表情列表</summary>

在 commit 时添加一个 emoji 表情图标

git commit -m ':emoji: 此次提交的内容说明'

添加多个 emoji 表情图标

git commit -m ':emoji1: :emoji2: :emoji3: 此次提交的内容说明'

| emoji        | emoji 代码                 | commit 说明           |
| ------------ | -------------------------- | --------------------- |
| (调色板)     | :art:                      | 改进代码结构/代码格式 |
| (闪电)       | :zap: :racehorse:          | 提升性能              |
| (火焰)       | :fire:                     | 移除代码或文件        |
| (bug)        | :bug:                      | 修复 bug              |
| (急救车)     | :ambulance:                | 重要补丁              |
| (火花)       | :sparkles:                 | 引入新功能            |
| (备忘录)     | :memo:                     | 撰写文档              |
| (火箭)       | :rocket:                   | 部署功能              |
| (口红)       | :lipstick:                 | 更新 UI 和样式文件    |
| (庆祝)       | :tada:                     | 初次提交              |
| (白色复选框) | :white_check_mark:         | 增加测试              |
| (锁)         | :lock:                     | 修复安全问题          |
| (苹果)       | :apple:                    | 修复 macOS 下的问题   |
| (企鹅)       | :penguin:                  | 修复 Linux 下的问题   |
| (旗帜)       | :checked_flag:             | 修复 Windows 下的问题 |
| (书签)       | :bookmark:                 | 发行/版本标签         |
| (警车灯)     | :rotating_light:           | 移除 linter 警告      |
| (施工)       | :construction:             | 工作进行中            |
| (绿心)       | :green_heart:              | 修复 CI 构建问题      |
| (下降箭头)   | :arrow_down:               | 降级依赖              |
| (上升箭头)   | :arrow_up:                 | 升级依赖              |
| (工人)       | :construction_worker:      | 添加 CI 构建系统      |
| (上升趋势图) | :chart_with_upwards_trend: | 添加分析或跟踪代码    |
| (锤子)       | :hammer:                   | 重大重构              |
| (减号)       | :heavy_minus_sign:         | 减少一个依赖          |
| (鲸鱼)       | :whale:                    | Docker 相关工作       |
| (加号)       | :heavy_plug_sign:          | 增加一个依赖          |
| (扳手)       | :wrench:                   | 修改配置文件          |
| (地球)       | :globe_with_meridians:     | 国际化与本地化        |
| (铅笔)       | :pencil2:                  | 修复 typo             |

</details>

