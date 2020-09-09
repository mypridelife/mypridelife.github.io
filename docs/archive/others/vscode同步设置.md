---
title: vscode 同步设置
date: 2018-09-09
#sidebar: 'auto'
categories:
  - Others
#tags:
#  - css
#keys:
#  - 'vue'
#publish: true
---

> 背景：换电脑需要重装 vscode。由于自己之前用的有很多偏好设置，也安装了很多插件，一个个的设置下载太慢了，即使复制 setting 也麻烦。

步骤：
1、生成 github 的 token
2、安装同步插件 Settings Sync
3、上传个人设置
4、同步个人设置

## 1、生成 github 的 token

user> settings > Developer settings > Personal access tokens > Generate new token
![settings ](./images/1981856-013cde4b6d97b465.png)

![Developer settings](./images/1981856-b6aeec2f91ff1776.png)

![Personal access tokens](./images/1981856-be44c590020c0095.png)

![Generate new token](./images/1981856-0f4c67dabc1cd32b.png)

**填写 Token description，勾选 gist**

![image.png](./images/1981856-8dc8787b5079cd65.png)

**复制生成的 token**

## 2、安装同步插件 Settings Sync

打开 vscode 安装同步插件 Settings Sync

## 3、上传个人设置

ctrl+p 输入>sync 点击 update/updload settings
输入 token 后回车

## 4、同步个人设置

第三步成功后控制台会打印信息，找到最上面 gist 的信息，复制下来。
![gist](./images/1981856-12fa659768201bce.png)
打开另一台电脑，安装 vscode 插件之后。
ctrl+p 输入>sync 点击 Download Settings，即可。
