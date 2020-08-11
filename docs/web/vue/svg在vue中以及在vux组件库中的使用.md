# svg 在 vue 中以及在 vux 组件库中的使用

## 1、在 vue 项目中使用

**在没有其他组件库的情况下，需要安装第三方插件 vue-svg-icon**
步骤如下：

- 安装第三方插件
  npm i vue-svg-icon
- 在入口文件 main.js 引入

```
import Vue from from 'vue'
import Icon from 'vue-svg-icon/Icon.vue' //引入
Vue.component('icon', Icon) //注册
```

- 将下载好的 svg 资源放到 src\assets\svg 中
- 使用：

```
<icon name="example"></icon>
```

name 的值为 svg 文件名

## 2、在 vux 组件库中的使用

官方文档链接：
https://doc.vux.li/zh-CN/components/x-icon.html
官方文档说的不够详细，具体使用如下：

- 将下载好的 svg 资源放在 node_modules\vux\src\icons 下

- 在组件中直接使用

```
<x-icon type="ios-arrow-up" class="icon-red"></x-icon>
```

type 的值为 svg 文件名，class 为你要自定义的样式
