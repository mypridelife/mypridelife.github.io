---
title: 1px方案
date: 2018-09-09
#sidebar: 'auto'
categories:
  - CSS
#keys:
#  - 'vue'
#publish: true
---

## 使用 postcss-write-svg 绘制

一、实现方式

采用 postcss-write-svg 与 border-image 这个 css3 属性进行 1px 细线的绘制（仅适合直线，圆角建议用 transform 于伪类实现），其他的像 border-shadow、transform 与伪类的实现方式在这里就不说了，网上也搜得到。
二、border-image
简单介绍一下 border-image 的拆分：

```css
border-image-source: url("bg.jpg"); // 用于设置背景源图片
border-image-slice: 1; // 用于设置九宫格上右下左四个方向的裁切比例（也可设置百分比）
border-image-repeat: stretch; // 图片在各边进行拉伸、平铺或重复
border-image-width: 1; // 定义图像边框宽度假如border-image-width大于已指定的border-width，那么它将向内部(padding/content)扩展.
border-image-outset: 0; // 定义边框图像可超出边框盒的大小
```

三、postcss-write-svg 使用
首先我们先配置好 postcss-write-svg(vue-cli3 在 vue.config.js 中配置)，这里我们选择生成 base64 编码图片

```js{10}
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require("postcss-import")({}),
          require("postcss-url")({}),
          require("postcss-aspect-ratio-mini")({}),
          require("postcss-write-svg")({ utf8: false }),

          require("postcss-cssnext")({}),

          require("postcss-px-to-viewport")({
            viewportWidth: 750, // (Number) The width of the viewport.
            viewportHeight: 1334, // (Number) The height of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
            viewportUnit: "vw", // (String) Expected units.
            selectorBlackList: [".ignore", ".hairlines", "van"], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
            mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
          }),
          require("postcss-viewport-units")({}),
          require("cssnano")({
            "cssnano-preset-advanced": {
              zindex: false,
              autoprefixer: false,
            },
          }),
        ],
      },
    },
  },
}
```

四、在 css 中写一个 svg 的生成函数

```css
@svg 1px-border {
  width: 4px;
  height: 4px;
  @rect {
    fill: transparent; // content为透明
    width: 100%; // 宽度为4px * 100%
    height: 100%; // 高度为4px * 100%
    stroke-width: 25%; // 边框宽度 4px * 25%(即1px)
    stroke: var(--color, black); // 颜色
  }
}
```

上面的函数，可以让我们生成一个有 1px 边框，宽高为 4px 的矩形

五、demo

```css
.example {
  margin-top: 30px;
  border: 1px solid;
  border-image: svg(1px-border param(--color #00b1ff)) 1 stretch;
}
.example6 {
  margin-top: 30px;
  border: 0; // 将其余三遍的border宽度设置成0
  border-top: 1px solid; // 这里将单边覆盖上面border的宽度设置
  border-image: svg(1px-border param(--color #00b1ff)) 1 stretch;
}
```
