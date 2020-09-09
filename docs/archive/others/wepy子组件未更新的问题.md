---
title: wepy 子组件未更新的问题
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

子父组件传值需要注意的问题：

1、不能传递对象的属性
wepy 中传递数据不能直接像 vue 中可以传递对象的属性。

```javascript
<child :data="data.tochild"></child>
```

2、动态绑定数据需要 sync 修饰符

```javascript
<child :data.sync="tochild"></child>
```

3、异步获取的服务端数据，必须要在父组件使用 this.\$apply()方法来触发子组件的刷新

4、异步获取的服务端数据，子组件需要通过 computed 返回数据

```javascript
<view>{{child}}</view>
# script
props = {
  data: Object
}
computed = {
  child() {
    return this.data&&this.data.name
  }
}
```
