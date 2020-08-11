# vue 定义全局方法

## 两种方式：

## 第一种

挂载到 Vue 的 prototype 上。把全局方法写到一个文件里面，然后 for 循环挂载到 Vue 的 prototype 上，缺点是调用这个方法的时候没有提示

```javascript
Object.keys(tools).forEach(key => {
  Vue.prototype[key] = tools[key]
})
```

##第二种

利用全局混入 mixin，因为 mixin 里面的 methods 会和创建的每个单文件组件合并。这样做的优点是调用这个方法的时候有提示

```javascript
Vue.mixin(mixin)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

import tools from './tools'
import filters from './filters'
import Config from '../config'
import CONSTANT from './const_var'

export default {
  data() {
    return {
      CONFIG: Config,
      CONSTANT: CONSTANT
    }
  },
  methods: {
    // //将tools里面的方法挂载到vue上,以方便调用，直接this.$xxx方法名就可以了
    // Object.keys(tools).forEach(key => {
    //     Vue.prototype[key] = tools[key]
    // })
    //将tools里面的方法用对象展开符混入到mixin上,以方便调用，直接this.$xxx方法名就可以了
    ...tools
  },
  filters: {
    // //将filter里面的方法添加了vue的筛选器上
    // Object.keys(filters).forEach(key => {
    //     Vue.filter(key, filters[key])
    // })
    ...filters
  }
}
```
