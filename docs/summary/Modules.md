---
title: 技术栈总结-Modules
date: 2020-01-20
#sidebar: 'auto'
categories:
  - Summary
tags:
  - vue
#keys:
#  - 'vue'
#publish: true
---

## Modules

### Modules: CJS 规范

规范代表库：CommonJS

common.js 主要用于后端，在 nodejs 中，node 应用是由模块组成，采用的 commonjs 模块规范。每一个文件就是一个模块，拥有自己独立的作用域，变量，以及方法等，对其他的模块都不可见。
模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
模块加载的顺序，按照其在代码中出现的顺序。

<details>
<summary>展开查看</summary>

```js
// 定义模块math.js
var basicNum = 0;
function add(a, b) {
  return a + b;
}
module.exports = { //在这里写上需要向外暴露的函数、变量
  add: add,
  basicNum: basicNum
}

/** 必须加./路径，不加的话只会去node_modules文件找 **/
// 引用自定义的模块时，参数包含路径，可省略.js
var math = require('./math');
math.add(2, 5);

// 引用核心模块时，不需要带路径
var http = require('http');
http.createService(...).listen(3000);
```

</details>

### Modules: AMD规范

规范代表库：require.js

RequireJS 是一个 JavaScript 模块加载器（文件和模块载入工具），使用 RequireJS 加载模块化脚本将提高代码的加载速度和质量它针对浏览器使用场景进行了优化，并且也可以应用到其他 JavaScript 环境中，例如 Rhino 和 Node.js。

<details>
<summary>展开查看</summary>

```js
/** 网页中引入require.js及main.js **/
;<script src='js/require.js' data-main='js/main'></script>

/** main.js 入口文件/主模块 **/
// 首先用config()指定各模块路径和引用名
require.config({
  baseUrl: 'js/lib',
  paths: {
    jquery: 'jquery.min', //实际路径为js/lib/jquery.min.js
    underscore: 'underscore.min',
  },
})
// 执行基本操作
require(['jquery', 'underscore'], function($, _) {
  // some code here
})
```

</details>

### Modules: CMD 规范

规范代表库：sea.js

SeaJS 是一个 JavaScript 模块加载框架，可以实现 JavaScript 的模块化开发及加载机制。
CMD 与 AMD 很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD 推崇依赖就近、延迟执行。此规范其实是在 sea.js 推广过程中产生的。

<details>
<summary>展开查看</summary>

```js
/** 网页中引入require.js及main.js **/
;<script src='js/require.js' data-main='js/main'></script>

/** main.js 入口文件/主模块 **/
// 首先用config()指定各模块路径和引用名
require.config({
  baseUrl: 'js/lib',
  paths: {
    jquery: 'jquery.min', //实际路径为js/lib/jquery.min.js
    underscore: 'underscore.min',
  },
})
// 执行基本操作
require(['jquery', 'underscore'], function($, _) {
  // some code here
})
```

</details>

### Modules: UMD 规范

UMD 规范只是一种通用的写法，是在 amd 和 cjs 两个流行而不统一的规范情况下，才催生出 umd 来统一规范的，umd 前后端均可通用。

<details>
<summary>展开查看</summary>

```js
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'underscore'], factory)
  } else if (typeof exports === 'object') {
    // Node, CommonJS之类的
    module.exports = factory(require('jquery'), require('underscore'))
  } else {
    // 浏览器全局变量(root 即 window)
    root.returnExports = factory(root.jQuery, root._)
  }
})(this, function($, _) {
  // 属性
  var PI = Math.PI

  // 方法
  function a() {} // 私有方法，因为它没被返回
  function b() {
    return a()
  } // 公共方法，因为被返回了
  function c(x, y) {
    return x + y
  } // 公共方法，因为被返回了

  // 暴露公共方法
  return {
    ip: PI,
    b: b,
    c: c,
  }
})
```

</details>

### Modules: ESM 规范

esm 规范是 es6 原生支持的，很多浏览器开始支持，类似 commonjs 的写法和同、异步加载机制能通过设置 type=module，用于 html 中，而且在 node 中也开始支持啦！

`export 向外暴露或导出模块 export default xxx;`

`import 引入暴露或导出的模块 import {xx, xx} from './xxx.js';`

  <details>
<summary>展开查看</summary>

```js
/** 定义模块 math.js **/
var basicNum = 0
var add = function(a, b) {
  return a + b
}
export { basicNum, add }

/** 引用模块 **/
import { basicNum, add } from './math'
function test(ele) {
  ele.textContent = add(99 + basicNum)
}
```

</details>

<details>
<summary>CJS&ES6展开查看</summary>

```js
// commonjs 导出
var x = 5
var addX = function(value) {
  return value + x
}
module.exports.x = x
module.exports.addX = addX
//or
module.exports = {
  x,
  addX,
}
// commonjs 导入
var example = require('./example.js')
console.log(example.x) // 5
console.log(example.addX(1)) // 6
// exports,相当于最上面有一行
var exports = module.exports
exports.area = function(r) {
  return Math.PI * r * r
}
exports.circumference = function(r) {
  return 2 * Math.PI * r
}
// es6 第一组
export default function crc32() {
  // 输出
  // ...
}
import crc32 from 'crc32' // 输入
// es6 第二组
export function crc32() {
  // 输出
  // ...
}
import { crc32 } from 'crc32' // 输入
```

</details>

