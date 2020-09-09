---
title: VUE 实现局部刷新
date: 2018-09-09
#sidebar: 'auto'
categories:
  - JavaScript
#keys:
#  - 'vue'
#publish: true
---

我们可以利用 Vue 里面的 provide+inject 组合

- 首先需要修改 App.vue

  ```javascript
  //App.vue
  <template>
    <div id="app">
      <div>
        <router-view v-if="alive" />
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'App',
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        alive: true
      }
    },
    methods: {
      reload() {
        this.alive= false
        this.$nextTick(() => {
          this.alive = true
        })
      }
    }
  }
  </script>
  ```

- 其次到需要刷新的页面进行引用

  使用 inject 导入引用 reload

  ```
   inject: ['reload'],
   this.reload()
  ```
