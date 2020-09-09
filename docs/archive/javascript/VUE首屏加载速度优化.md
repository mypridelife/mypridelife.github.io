---
title: VUE 首屏加载速度优化
date: 2018-09-09
#sidebar: 'auto'
categories:
  - JavaScript
#tags:
#  - js
#keys:
#  - 'vue'
#publish: true
---

- 使用 CDN 资源,减小服务器带宽压力
- 路由懒加载
- 将一些静态 js css 放到其他地方，减小服务器压力
- 按需加载三方资源，如第三方组件库
- 使用 nginx 开启 gzip 减小网络传输的流量大小
- 若首屏为登录页，可以做成多入口，登录页单独分离为一个入口
- 使用 uglifyjs-webpack-plugin 插件代替 webpack 自带 UglifyJsPlugin 插件

CDN 资源引入优化：

安装

```javascript
npm i --save-dev html-webpack-plugin
```

配置-示例

```javascript
let cdn
if (env === "development") {
  cdn = {
    js: [
      "https://jic.talkingdata.com/app/h5/v1?appid=76034ADCDE254FEA8E59372051AB0AB2&vn=flipped-web-2.0本地环境&vc=2.0",
    ],
  }
} else {
  if (process.env.VUE_APP_ENV === "preview") {
    cdn = {
      js: [
        "https://jic.talkingdata.com/app/h5/v1?appid=76034ADCDE254FEA8E59372051AB0AB2&vn=flipped-web-2.0测试环境&vc=2.0",
      ],
    }
  } else {
    cdn = {
      js: [
        "https://jic.talkingdata.com/app/h5/v1?appid=76034ADCDE254FEA8E59372051AB0AB2&vn=flipped-web-2.0正式环境&vc=2.0",
      ],
    }
  }
}

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].cdn = cdn
      return args
    })
  },
}
```
