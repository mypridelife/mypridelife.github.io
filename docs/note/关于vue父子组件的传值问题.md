---
title: 关于vue父子组件的传值问题
date: 2020-09-09
#sidebar: 'auto'
categories:
  - JavaScript
tags:
  - vue
#keys:
#  - 'vue'
#publish: true
---

在 vue 中，父组件通过 props 将值传给子组件，形成单向数据流。

> 所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。[来自 vue 文档](https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)

但是，考虑到一些场景，我们需要子组件进行修改父组件的值。应该怎么做呢？

有以下**两**种情况：

1、我们需要修改传过来的值，但是不用修改源数据。

2、我们需要修改传过来的值，同时修改源数据。（类似双向绑定）

这两种情况，官方文档里面都有说明。我就不再赘述。

_我接下来要说的事，你们千万别害怕。_

我发现：

**当父组件用基本数据类型当做 props 传过去，子组件试图修改，会有问题。**

**但是，当父组件用对象传值过去，子组件试图修改对象中的值，成功。**

talk is cheap

```js
//父组件
<template>
  <input-text
    :input-value.sync="fatherInputValue"
    :origin-data="formData"
  />
</template>

<script>
import InputText from './components/InputText.vue'
export default {
  name: 'passvalue',
  components: {
    InputText
  },
  props: {},
  data() {
    return {
      fatherInputValue: '',
      formData: {
        inputValue: ''
      }
    }
  },
}
</script>
```

```js
//子组件
<template>
   <input
    :value="inputValue"
    @input="$emit('update:input-value', $event.target.value)"
  />
  <input type="text" v-model="originData.inputValue" />
</template>

<script>
export default {
  name: 'InputText',
  components: {},
  props: {
    inputValue: {
      type: String,
      default: ''
    },
    originData: {
      type: Object,
      default: () => {
        return {
          inputValue: ''
        }
      }
    }
  },
}
</script>
```

说好的子组件直接不能修改父组件的值呢，这就让人很疑惑。

不过可以归可以，还是不建议这么做，理由还是官方文档所说的，数据修改来源不清晰。

至于为啥呢，我一开始也不清楚，直到今天我看到了 vue3.0 的说明，在@vue/reactivity 中有 shallowReadonly 这样一个函数。该函数的目的是定义浅只读数据，这意味着深层次的对象值是可以被修改的。并且：在 Vue 内部中，props 就是使用 shallowReadonly()函数来定义的。

那是否意味着，上述现象的产生是因为这个原因呢，让我去看看具体代码再谈。

有大佬知道原因可留言解惑。
