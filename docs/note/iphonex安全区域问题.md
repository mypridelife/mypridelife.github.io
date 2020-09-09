---
title: iphonex安全区域问题
date: 2020-09-09
#sidebar: 'auto'
categories:
  - Note
tags:
  - 移动端适配
#keys:
#  - 'vue'
#publish: true
---

::: tip
iphoneX 的“刘海”为相机和其他组件留出了空间，同时在底部也留有可操作区域。
那么网站就被限制在了这样的“安全区域”内，两边会出现一道白条。
:::

## 解决方案

1、给 body 添加一个 background；

2、添加 viewport-fit=cover meta 标签，使页面占满整个屏幕。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

为了处理这些需求，iOS 11 的 Safari 引入了一些 constant 来处理 viewport-fit=cover 属性。
`safe-area-inset-top` `safe-area-inset-right` `safe-area-inset-left` `safe-area-inset-bottom` 这些值可以应用到 margin、padding 上，也可以应用到绝对定位的 top 或 left 上。

```css
padding: constant(safe-area-inset-top) constant(safe-area-inset-right) constant(
    safe-area-inset-bottom
  ) constant(safe-area-inset-left);
```

参考：[Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
