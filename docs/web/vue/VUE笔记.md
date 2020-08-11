# VUE笔记

##  准备工作

### 一、安装脚手架

1、安装vue脚手架，这是构建vue项目的工具-g为全局安装
​	 npm install -g vue-cli
2、使用webpack打包工具
​	 vue init webpack my-project
 //之后会提示一些信息，全部选择yes,一直敲回车即可
 3、完成之后，进入到创建的项目根目录下
​	 cd my-project
 4、安装依赖包
​	 yarn
 //说明：yarn是yarn install的简写，可直接敲击yarn，功能和npm install一样
 5、最后运行项目
​	 yarn run dev
 浏览器会自动打开运行一个页面，出现以下页面，说明成功了。

### 二、NPM

#### 1、修改npm网址

淘宝 npm 网址
https://npm.taobao.org/
修改
npm config set registry http://registry.npm.taobao.org/
还原
npm config set registry https://registry.npmjs.org/

**查看源**

```javascript
npm config get registry
// 或
npm config list
1234
```

**修改源**

```javascript
# 默认源
npm config set registry https://registry.npmjs.org

# https -> http，这样网速就会好很多
npm config set registry http://registry.npmjs.org 

# 如果还不能下载，就切换成淘宝源
npm config set registry https://registry.npm.taobao.org
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 2、发布

1、手动创建 package.json或者npm init

```json
{
  "name": "mypridelife",
  "version": "1.0.0",
  "description": "npm of mypridelife",
  "main": "a.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "mypridelife"
  ],
  "author": "mypridelife",
  "license": "ISC"
}
```

2、创建文件first.js

```javascript
function hello(){
  console.log("I am the most handsome man. ");
  console.log("Do not accept any rebuttal. ");
}
exports.hello=hello;
```

3、发布

```javascript
npm adduser
npm publish
```

4、使用

```javascript
npm install mypridelife
```

5、创建测试文件test.js

```javascript
var gyh = require("mypridelife"); 
gyh.hello();
```

6、运行

```
node test.js
```

### 三、yarn命令列表

**常用命令**：

创建项目：`yarn init`

安装依赖包：`yarn` == `yarn install`

添加依赖包：`yarn add`

**Yarn命令列表**

| 命令                     | 操作                                   | 参数                                                         | 标签                                                         |
| ------------------------ | -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| yarn add                 | 添加依赖包                             | 包名                                                         | --dev/-D                                                     |
| yarn bin                 | 显示yarn安装目录                       | 无                                                           | 无                                                           |
| yarn cache               | 显示缓存                               | 列出缓存包：`ls`，打出缓存目录路径：`dir`，清除缓存：`clean` | 无                                                           |
| yarn check               | 检查包                                 |                                                              |                                                              |
| yarn clean               | 清理不需要的依赖文件                   |                                                              |                                                              |
| yarn config              | 配置                                   | 设置：`set <key> <value>`， 删除：`delete`， 列出：`list`    | [-g \| --global]                                             |
| yarn generate-lock-entry | 生成锁定文件                           | 无                                                           | 无                                                           |
| yarn global              | 全局安装依赖包                         | yarn global <add/bin/ls/remove/upgrade> [--prefix]           | --prefix 包路径前缀                                          |
| yarn info                | 显示依赖包的信息                       | 包名                                                         | --json：json格式显示结果                                     |
| yarn init                | 互动式创建/更新package.json文件        | 无                                                           | --yes/-y：以默认值生成package.json文件                       |
| yarn install             | 安装所有依赖包                         |                                                              | --flat：只安装一个版本；--force：强制重新下载安装；--har：输出安装时网络性能日志；--no-lockfile：不生成yarn.lock文件；--production：生产模式安装（不安装devDependencies中的依赖） |
| yarn licenses            | 列出已安装依赖包的证书                 | ls：证书列表；generate-disclaimer：生成免责声明              |                                                              |
| yarn link                | 开发时链接依赖包，以便在其他项目中使用 | 包名                                                         |                                                              |
| yarn login               | 保存你的用户名、邮箱                   |                                                              |                                                              |
| yarn logout              | 删除你的用户名、邮箱                   |                                                              |                                                              |
| yarn list                | 列出已安装依赖包                       |                                                              | --depth=0：列表深度，从0开始                                 |
| yarn outdated            | 检查过时的依赖包                       | 包名                                                         |                                                              |
| yarn owner               | 管理拥有者                             | ls/add/remove                                                |                                                              |
| yarn pack                | 给包的依赖打包                         | --filename                                                   |                                                              |
| yarn publish             | 将包发布到npm                          |                                                              | --tag：版本标签；--access：公开（public）还是限制的（restricted） |
| yarn remove              | 卸载包，更新package.json和yarn.lock    | 包名                                                         |                                                              |
| yarn run                 | 运行package.json中预定义的脚本         |                                                              |                                                              |
| yarn self-update         | yarn自身更新--未实现                   |                                                              |                                                              |
| yarn tag                 | 显示包的标签                           | add/rm/ls                                                    |                                                              |
| yarn team                | 管理团队                               | create/destroy/add/rm/ls                                     |                                                              |
| yarn test                | 测试 = yarn run test                   |                                                              |                                                              |
| yarn unlink              | 取消链接依赖包                         |                                                              |                                                              |
| yarn upgrade             | 升级依赖包                             |                                                              |                                                              |
| yarn version             | 管理当前项目的版本号                   | --new-version ：直接记录版本号；--no-git-tag-version：不生成git标签 |                                                              |
| yarn why                 | 分析为什么需要安装依赖包               | 包名/包目录/包目录中的文件名                                 |                                                              |

### 四、NPM和Yarn命令对比

|	npm 命令	|	Yarn 命令 | 备注 |
|---------------------|---------------------|---------------------|
|	npm install |	yarn install |	安装所有依赖包（依据package.json中的依赖配置参数） |
|	(N/A)	|	yarn install --flat | 单版本模式 |
|	(N/A)	|	yarn install --har| 生成har文件，记录安装时网络请求性能 |
|	(N/A)	|	yarn install --no-lockfile| 不读写lockfile方式 |
|	(N/A)	|	yarn install --pure-lockfile| 不生成yarn.lock文件 |
|	npm install [package]	|	(N/A)| 安装依赖 |
|	npm install --save [package]	|	yarn add [package]|	添加生产模式依赖到项目	|
|	npm install --save-dev [package]	| yarn add [package][--dev/-D] | 添加开发模式的依赖 |
|	(N/A)	|	yarn add [package][--peer/-P] | 对等模式添加依赖，发布/分享项目时的依赖 |
|	npm install --save-optional [package]	|	yarn add [package] [--optional/-O]| 添加可选依赖包 |
|	npm install --save-exact [package]	|	yarn add [package] [--exact/-E]| 精准添加某版本的包 |
|	(N/A)	|	yarn add [package] [--tilde/-T]| 添加同一次版本的包，如指定版本为1.2.3，可接受1.2.x的其他版本，但不接受1.3.x的版本 |
|	npm install --global [package]	|	yarn global add [package] | 添加全局包 |
|	npm rebuild	|	yarn install --force| 重建 |
|	npm uninstall [package]	|	(N/A)| 删除本地依赖包 |
|	npm uninstall --save [package]	|	yarn remove [package]| 删除正式依赖包|
|	npm uninstall --save-dev [package]	|	yarn remove [package]| 删除开发依赖包 |
|	npm uninstall --save-optional [package]	|	yarn remove [package] | 删除可选依赖包 |
|	npm cache clean	|	yarn cache clean| 清除缓存 |
|	rm -rf node_modules && npm install	|	yarn upgrade | 更新包管理器自身 |

## VUE

### 一、VUE基础

#### 1、标签

```javascript
v-bind:title="message",
v-if="seen"
```

> v-show是初始就加载
>
> v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
>
> v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块

```
v-for="todo in todos"
v-on:click="reverseMessage" v-on  缩写 @
<input v-model="message">
v-bind:id="dynamicId"     缩写 :
```

提升性能：v-pre

- 说明：vue会跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。

```
<span v-pre>{{ this will not be compiled }}</span>
```

提升性能：v-once

- 说明：vue只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

```
<span v-once>This will never change: {{msg}}</span>
```

#### 2、组件化与应用构建

import的名字!\==下面components的名字==调用时候的标签名字，然后把import的源文件里的template里的div渲染给网页。

```
文件名：MyComponent
路径：../../components/MyComponent
导入：import MyComponent from '../../components/MyComponent'
声明：components:{
    	my-components : MyComponent
	}
使用：<my-components></my-components>
```

在一个大型应用中，有必要将整个应用程序划分为组件，以使开发更易管理。在后续教程中我们将详述组件，不过这里有一个 (假想的) 例子，以展示使用了组件的应用模板是什么样的：

```
<div id="app">
    <app-nav></app-nav>
    <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
    </app-view>
</div>
```

#### 3、数组更新机制

```
为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)

为了解决第二类问题，你可以使用 splice：
vm.items.splice(newLength)
```

#### 4、对象更改检测

```
Vue.set(vm.userProfile, 'age', 27)
```

#### 5、组件怎么显示

##### 5.1、全局注册

在脚手架创建的项目中，通过在main.js中声明

```
Vue.component('button-counter', {
 		data: function () {
					    return {
					      count: 0
					    }
		},
		template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```

然后在页面app.vue中引用button-counter即可
这样看起来更加清晰：

```
Vue.component('component-a', { /* ... */ })
Vue.component('component-b', { /* ... */ })
Vue.component('component-c', { /* ... */ })
```

```
new Vue({ el: '#app' })
<div id="app">
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>
```

##### 5.2、局部注册

```
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }
```

然后在 components 选项中定义你想要使用的组件：

```
new Vue({
  el: '#app'
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```

##### 5.3、Babel和webpack的模块系统

然后你需要在局部注册之前导入每个你想使用的组件。例如，在一个假设的ComponentB.js或ComponentB.vue文件中。
我们推荐创建一个 components 目录，并将每个组件放置在其各自的文件中。

```
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  // ...
}

}
```

```
import Vue from 'vue';
import MyComponent from '@/components/MyComponent.vue'; // 导入自己写的组件文件
 
Vue.use(MyComponent); // 自定义全局组件的时候需要Vue.use();
 
Vue.component('my-component', MyComponent); //初始化组件
 
new Vue({
  el: '#app',
  router,
  components: {
    App,
    MyComponent
  },
  template: '<App/>',
});
```

```
1、先写组件
var tempalateDiv；
2、把组件写进一个对象里
var templateObject = {
    props: ['product'],
    template: tempalateDiv,
      methods: {
            increaseSales: function () {
                this.product.sale = parseInt(this.product.sale);
              this.product.sale += 1
              this.$emit('increment')
            }
      }
}
3、生命全局组件
Vue.component('product', templateObject)
```

### 二、Vue.js 组件编码规范

本规范提供了一种统一的编码规范来编写 [Vue.js](http://vuejs.org/) 代码。这使得代码具有如下的特性：

- 其它开发者或是团队成员更容易阅读和理解。
- IDEs 更容易理解代码，从而提供高亮、格式化等辅助功能
- 更容易使用现有的工具
- 更容易实现缓存以及代码包的分拆

[参考链接](https://pablohpsilva.github.io/vuejs-component-style-guide/#/chinese?id=怎么做？6)

#### 1、组件名称用横线-连接

```
<!-- 推荐 -->
<app-header></app-header>
<user-list></user-list>
<range-slider></range-slider>

<!-- 避免 -->
<btn-group></btn-group> <!-- 虽然简短但是可读性差. 使用 `button-group` 替代 -->
<ui-slider></ui-slider> <!-- ui 前缀太过于宽泛，在这里意义不明确 -->
<slider></slider> <!-- 与自定义元素规范不兼容 -->
```



#### 2、组件结构化

```javascript
<template lang="html">
  <div class="Ranger__Wrapper">
    <!-- ... -->
  </div>
</template>

<script type="text/javascript">
  export default {
    // 不要忘记了 name 属性
    name: 'RangeSlider',
    // 使用组件 mixins 共享通用功能
    mixins: [],
    // 组成新的组件
    extends: {},
    // 组件属性、变量
    props: {
      bar: {}, // 按字母顺序
      foo: {},
      fooBar: {},
    },
    // 变量
    data() {},
    computed: {},
    // 使用其它组件
    components: {},
    // 方法
    watch: {},
    methods: {},
    // 生命周期函数
    beforeCreate() {},
    mounted() {},
  };
</script>

<style scoped>
  .Ranger__Wrapper { /* ... */ }
</style>
```

#### 3、子组件父组件

```html
<div id="app">
	//父组件
    <my-component message="来自父组件的数据"></my-component>
</div>
<script>
	//子组件
    Vue.component('my-component',{
        props:['message'],
        template:`<div>{{message}}</div>`
    })
    var app=new Vue({
        el:'#app'
    })
</script>

```

#### 4、谨慎使用 this.$refs

```html
<!-- 推荐，并未使用 this.$refs -->
<range :max="max"
  :min="min"
  @current-value="currentValue"
  :step="1"></range>
```

```html
<!-- 使用 this.$refs 的适用情况-->
<modal ref="basicModal">
  <h4>Basic Modal</h4>
  <button class="primary" @click="$refs.basicModal.hide()">Close</button>
</modal>
<button @click="$refs.basicModal.open()">Open modal</button>

<!-- Modal component -->
<template>
  <div v-show="active">
    <!-- ... -->
  </div>
</template>

<script>
  export default {
    // ...
    data() {
      return {
        active: false,
      };
    },
    methods: {
      open() {
        this.active = true;
      },
      hide() {
        this.active = false;
      },
    },
    // ...
  };
</script>
```

```html
<!-- 如果可通过 emited 来做则避免通过 this.$refs 直接访问 -->
<template>
  <range :max="max"
    :min="min"
    ref="range"
    :step="1"></range>
</template>

<script>
  export default {
    // ...
    methods: {
      getRangeCurrentValue() {
        return this.$refs.range.currentValue;
      },
    },
    // ...
  };
</script>
```

#### 5、使用组件名作为样式作用域空间

```
使用组件名作为样式命名的前缀，可基于 BEM 或 OOCSS 范式。
同时给 style 标签加上 scoped 属性。
加上 scoped 属性编译后会给组件的 class 自动加上唯一的前缀从而避免样式的冲突。

<style scoped>
  /* 推荐 */
  .MyExample { }
  .MyExample li { }
  .MyExample__item { }

  /* 避免 */
  .My-Example { } /* 没有用组件名或模块名限制作用域, 不符合 BEM 规范 */
</style>

```

#### 6、提供组件 API 文档

在模块目录中添加 `README.md` 文件：

```
range-slider/
├── range-slider.vue
├── range-slider.less
└── README.md

```

在 README 文件中说明模块的功能以及使用场景。对于 vue 组件来说，比较有用的描述是组件的自定义属性即 API 的描述介绍。

**README.md**

**功能**

range slider 组件可通过拖动的方式来设置一个给定范围内的数值。

该模块使用 [noUiSlider](http://refreshless.com/nouislider/) 来实现跨浏览器和 touch 功能的支持。

**如何使用**

`<range-slider>` 支持如下的自定义属性：

| attribute  | type                | description                                                  |
| ---------- | ------------------- | ------------------------------------------------------------ |
| `min`      | Number              | 可拖动的最小值.                                              |
| `max`      | Number              | 可拖动的最大值.                                              |
| `values`   | Number[] *optional* | 包含最大值和最小值的数组. 如. `values="[10, 20]"`. Defaults to `[opts.min, opts.max]`. |
| `step`     | Number *optional*   | 增加减小的数值单位，默认为 1.                                |
| `on-slide` | Function *optional* | 用户拖动开始按钮或者结束按钮时的回调函数，函数接受 `(values, HANDLE)` 格式的参数。 如： `on-slide={ updateInputs }`, `component.updateInputs = (values, HANDLE) => { const value = values[HANDLE]; }`. |
| `on-end`   | Function *optional* | 当用户停止拖动时触发的回调函数，函数接受 `(values, HANDLE)` 格式的参数。 |

如需要自定义 slider 的样式可参考 [noUiSlider 文档](url)

#### 7、尽可能使用 mixins

**为什么**?

Mixins 封装可重用的代码，避免了重复。如果两个组件共享有相同的功能，则可以使用 mixin。通过 mixin，你可以专注于单个组件的任务和抽象的通用代码。这有助于更好地维护你的应用程序。

**怎么做**?

假设你有一个移动端和桌面端的菜单组件，它们共享一些功能。我们可以抽象出这两个组件的核心功能到一个 mixin 中，例如：

```
const MenuMixin = {
  data () {
    return {
      language: 'EN'
    }
  },

  methods: {
    changeLanguage () {
      if (this.language === 'DE') this.$set(this, 'language', 'EN')
      if (this.language === 'EN') this.$set(this, 'language', 'DE')
    }
  }
}

export default MenuMixin

```

要使用 mixin，只需将其导入到两个组件中（我只展示移动组件）。

```
<template>
  <ul class="mobile">
    <li @click="changeLanguage">Change language</li>
  </ul>
</template>

<script>
  import MenuMixin from './MenuMixin'

  export default {
    mixins: [MenuMixin]
  }
</script>

```

#### 8、组件选项的顺序

组件选项应该有统一的顺序。

```
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
};

```

#### 9、ESLINT

```js
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/name-property-casing": ["error", "PascalCase"],
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never']
  }
}
```



### 三、前端路由与Vue-router

- 

#### 1、基本用法

- **在main.js里使用Vue.use()加载插件**
- **创建一个数组来自定路由匹配列表**
- **继续在main.js中完成配置和路由实例**
- **在根实例app.vue中添加一个路由视图`<router-view/>`来挂载所有的路由组件**

1、在main.js里使用Vue.use()加载插件

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue'

Vue.use(VueRouter);
```

2、创建一个数组来自定路由匹配列表，每一个路由映射一个组件：

```javascript
const Routers = [
    {
        path:'/index',
        components:(resolve) => require(['./views/index.vue'],resolve)
    },
    {
        path:'/about',
        components:(resolve) => require(['./views/about.vue'],resolve)
    },
    {
        path:'/user:id',
        component:(resolve) => require(['./views/user.vue],resolve)
    }
    {
        path:'*',
        redirect:'/index'
    }
]
//在路由列表里，可以再最后添加意向，当访问的路径不存在时，重定向到首页。
//通过this.$route.params.id获取到id，然后进行分发
```

3、继续在main.js中完成配置和路由实例

```
const RouterConfig={
    //使用HTML5的History路由模式
    mode: 'history',
    routers: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el:'#app',
    router:router,
    render: h => {
        return h(App)
    }
})
```

4、在根实例app.vue中添加一个路由视图

```
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
export default{
    
}
</script>
//运行网页时，<router-view>会根据当前路由动态渲染不同的页面组件。网页中一些公共部分，比如顶部的导航栏，侧边导航栏，底部的版权信息，这些也可以直接写在app.vue中，与<router-view>同级。路由切换时，切换的时<router-view>挂载的组件，其他的内容不会变化。
```

#### 2、跳转

```
方式1：
直接修改地址栏

方式2：
this.$router.push(‘路由地址’);
this.$router.replace(‘路由地址’);
this.$router.go(int);

router.push({ path: 'home' })
// 命名的路由
router.push({
  name: 'user', 
  params: { 
    userId: 123 
  }
})
// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
方式3：
<router-link to="路由地址" replace></router-link>
使用replace不会留下History记录，不能用后退键返回上一个页面
```

#### 3、vue-router的高级用法

**场景：如何修改spa项目的网页标题**

比较理想的一个思路是，在页面发生路由改变时，统一设置。vue-router提供了导航钩子beforeEach和afterEach，他们会在路由即将改变前和改变后触发，所以设置标题可以在beforeEach钩子完成。

```
const Routers= [
    {
        path:'/index',
        meta:{
            title: '首页'
        },
        component:(resolve) => require(['./views/index.vue'],resolve)
    }
];

const router = new VueRouter(RouterConfig);
router.brforeEach((to,from,next) =>{
    				window.document.title = to.meta.title;
    				next();
				} 
);
```

导航钩子有三个参数：

to：即将进入的目标的路由对象

from：当前导航即将要离开的路由对象

next：调用该方法后，才能进入下一个钩子

**场景：返回上一个页面，滚动条的位置**

```
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
})
```

**场景三：检验登录**

```
router.beforeEach((to,from,next) => {
    if('登陆了'){
    	next();
    }else{
        next('/login');
    }
})
```

#### 4、路由器懒加载

结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。

```js
const Foo = () => import('./Foo.vue')
```

在路由配置中什么都不需要改变，只需要像往常一样使用 `Foo`：

```js
const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```

### 四、状态管理与Vuex

场景：跨组件共享数据的需求

#### 1、基本用法

基本用法同vue-router

数据保存在Vuex选项的state字段内

```
const store = new Vuex.Store({
    state:{
        count:0
    }
})
```

在任何组件内，可以直接通过$store.state.count读取

Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：
1.最好提前在你的 store 中初始化好所有所需属性。
2.当需要在对象上添加新属性时，你应该使用 Vue.set(obj, 'newProp', 123), 或者
以新对象替换老对象：state.obj = { ...state.obj, newProp: 123 }
一般会独立开来（使用mutation-types.js存放mutation常量）如：

```
//mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'

// store.js
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'

const store = new Vuex.Store({
  state: { ... },
  mutations: {
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [SOME_MUTATION] (state) {
      // mutate state
    }
  }
})
```



## 问题

#### 1、修改mintui样式

修改样式的核心是：自己写的样式优先级>第三方组件样式。

以此为原则：1)使用！important提升优先级  2)main.js映入第三方组件后面，引入自定义的样式表，webpack打包后样式会覆盖。

找到页面中的css进行覆盖。

```css
内容居左：
text-align:left
<div style="text-align:center">
  <span>span的居中可以通过放置在div中，然后让div text-align实现居中</span>
</div>
```

#### 2、路由跳转

https://blog.csdn.net/qq_15646957/article/details/78070862

1.Params

由于动态路由也是传递params的，所以在 this.$router.push() 方法中path不能和params一起使用，否则params将无效。需要用name来指定页面。

2.Query

页面通过path和query传递参数，该实例中row为某行表格数据

在目标页面通过this.$route.query获取参数：

```
this.$route.query.row.xxx
```

#### 3、异步问题

因为要等到页面更新过之后才能执行某些操作，所以用：

```
vm.$nextTick( [callback] )
```

**示例**：

```
new Vue({
  // ...
  methods: {
    // ...
    example: function () {
      // 修改数据
      this.message = 'changed'
      // DOM 还没有更新
      this.$nextTick(function () {
        // DOM 现在更新了
        // `this` 绑定到当前实例
        this.doSomethingElse()
      })
    }
  }
})
```

#### 4、axios请求中

当请求成功时，会执行 .then，否则执行 .catch

这两个回调函数都有各自独立的作用域，**如果直接在里面访问 this，无法访问到 Vue 实例**

这时只要添加一个 .bind(this) 就能解决这个问题

```
.then(function(res){
  console.log(this.data)
}.bind(this))
```

#### 5、局部修改第三方组件库样式

为什么需要穿透scoped？

scoped看起来很美，但是，在很多项目中，会出现这么一种情况，即：引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除scoped属性造成组件之间的样式污染。此时只能通过特殊的方式，穿透scoped。

```css
<style scoped>
    外层 >>> 第三方组件 {
        样式
    }
#myCell >>> .van-cell__value {
  color: #ff0000;
}
</style>	

```

具体参考：https://www.cnblogs.com/karthuslorin/p/9038854.html

**修改element样式问题：** 用ui组件总免不了需要对它做一些个性化定制的需求，所以我们就要覆盖element的一些样式。 首先我们要了解一下vue scoped是什么，很多人非常喜欢用scoped，妈妈再也不用担心样式冲突问题了，其实scoped也没有很神秘的，它就是基于PostCss的，加了一个作用局的概念。

```
//编译前
.example {
  color: red;
}
//编译后
.example[_v-f3f3eg9] {
  color: red;
}
复制代码
```

它和我们传统的命名空间的方法避免css冲突没有什么本质性的区别。 现在我们来说说怎么覆盖element-ui样式。由于element-ui的样式我们是在全局引入的，所以你想在某个view里面覆盖它的样式就不能加scoped，但你又想只覆盖这个页面的element样式，你就可在它的父级加一个class，以用命名空间来解决问题。

```
.aritle-page{ //你的命名空间
    .el-tag { //element-ui 元素
      margin-right: 0px;
    }
}
```

建议向楼主一样专门建一个scss文件里专门自定义element-ui的各种样式



#### 6、vscode的eslint

```
{
  "workbench.colorTheme": "One Dark Pro",
  "editor.formatOnSave": true,
  "editor.formatOnType": false,
  "editor.minimap.enabled": false,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vsicons.dontShowNewVersionMessage": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    },
    "html",
    "vue"
  ],
  "prettier.eslintIntegration": true,
  "workbench.iconTheme": "material-icon-theme",
  "terminal.integrated.shell.windows": "C:\\\\Windows\\\\System32\\\\cmd.exe",
  "eslint.run": "onSave"
}
```

#### 7、屏幕适配

```
分辨率：1334pt x 750pt
指的是屏幕上垂直有1136个物理像素，水平有750个物理像素。

屏幕尺寸：4.7in
注意英寸是长度单位，不是面积单位。4.7英寸指的是屏幕对角线的长度，1英寸等于2.54cm。

屏幕像素密度：326ppi
指的是每英寸屏幕所拥有的像素数，在显示器中，dpi=ppi。dpi强调的是每英寸多少点。
同时，屏幕像素密度=分辨率/屏幕尺寸

然而，这段代码其实也并不完美，在IE浏览器中，由于横屏竖屏的切换会对其造成影响。
为了解决这个兼容性的问题，最后再加上一句，就有了现在的：
响应式布局：
<meta name = "viewport" content = "width=device-width,initial-scale=1" >
media="(orientation:landscape) and (min-width:500px)"横向 
media="(max-width:500px)"


<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
在这个里面主要有这几个属性：
width             - viewport的宽度 
height            - viewport的高度
initial-scale     - 初始的缩放比例
minimum-scale     - 允许用户缩放到的最小比例
maximum-scale     - 允许用户缩放到的最大比例
user-scalable     - 用户是否可以手动缩放

如果要禁止页面缩放，只要把user-scalable 设置成no 就可以
```

#### 8、滚动条

有时候我们需要页面滚动条滚动到某一固定的位置，一般使用`Window scrollTo() `方法。

语法就是：`scrollTo(xpos,ypos)`

xpos：必需。要在窗口文档显示区左上角显示的文档的 x 坐标。

ypos：必需。要在窗口文档显示区左上角显示的文档的 y 坐标。

例如滚动内容的坐标位置100,500：

```
window.scrollTo(100,500);
```







## Your Repositorie项目

### 一、页面布局

#### 1、边距问题

- 首先在html里面设置全局

  ```html
  body {
      margin: 0px;
      padding: 0px;
  }
  ```

- 其次在App.vue里面设置

```html
  <div id="app">
    <x-header :left-options="{showBack: false}">
      <x-icon type="github" class="icon-style" />
      {{ title }}
      <a v-show="token" slot="right" @click="handleLogout">logout</a>
    </x-header>
    <box gap="10px 10px">
      <router-view />
    </box>
  </div>
<style lang="less">
.icon-style {
  width: 30px;
  vertical-align: middle;
  margin-right: 6px;
}
</style>
```

使用box设置`<router-view />`的页面边距



### 二、svg在vux中的使用

#### 1、在vue项目中使用

**在没有其他组件库的情况下，需要安装第三方插件vue-svg-icon**
步骤如下：

- 安装第三方插件
  npm i vue-svg-icon
- 在入口文件main.js引入

```
import Vue from from 'vue'
import Icon from 'vue-svg-icon/Icon.vue' //引入
Vue.component('icon', Icon) //注册
```

- 将下载好的svg资源放到src\assets\svg中
- 使用：

```
<icon name="example"></icon>
```

name的值为svg文件名

#### 2、在vux组件库中的使用

官方文档链接：
<https://doc.vux.li/zh-CN/components/x-icon.html>
官方文档说的不够详细，具体使用如下：

- 将下载好的svg资源放在node_modules\vux\src\icons下
- 在组件中直接使用

```
<x-icon type="ios-arrow-up" class="icon-red"></x-icon>
```

type的值为svg文件名，class为你要自定义的样式



### 三、alias

文件的引用

alias(在webpack配置文件里面改)



# VUE-CLI 3

1、打开cmd，输入vue ui

# VUE实现局部刷新

利用Vue里面的provide+inject组合

- 首先需要修改App.vue

  ```javascript
  //App.vue
  <template>
    <div id="app">
      <div>
        <router-view v-if="isRouterAlive" />
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
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      }
    }
  }
  </script>
  ```

- 其次到需要刷新的页面进行引用

  使用inject导入引用reload

  ```
   inject: ['reload'],
   this.reload()
  ```


