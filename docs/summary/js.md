---
title: 技术栈总结-js
date: 2021-01-16
#sidebar: 'auto'
categories:
  - Summary
tags:
  - vue
#keys:
#  - 'vue'
#publish: true
---

## js

### js: Object.is()

能使用`==`和`===`时就尽量不要使用 Object.is()，因为前者效率更高，更为通用。Object.is()主要用来处理那些特殊的比较相等。

### js: closure

函数和对其周围状态的引用(词法环境)捆绑在一起构成闭包。

### js: this

this  的值是在代码运行时计算出来的，它取决于代码上下文

`foo() ---> foo.call(window)`
`obj.foo() --> obj.foo.call(obj)`

### js: autobox

[参考](https://segmentfault.com/a/1190000024558738)

- 直接调用 `原始值.方法`
- 传入一个原始值作为 this 的绑定对象，这个原始值会被转换成他的对象形式(new String()、new Boolean()...)

### js: Object

**数据属性**
数据属性包含一个保存数据值的位置。值会从这个位置读取，也会写入到这个位置。数据属性有 4 个特性描述它们的行为。

- [[Configurable]]:表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true，如前面的例子所示。
- [[Enumerable]]:表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true，如前面的- 例子所示。
- [[Writable]]:表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的这个特性都是 true，如前面的例子所示。
- [[Value]]:包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性的默认值为 undefined。

**访问器属性**
访问器属性不包含数据值。相反，它们包含一个获取(getter)函数和一个设置(setter)函数，不过这两个函数不是必需的。在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效的值。在写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。访问器属性有 4 个特性描述它们的行为。

- [[Configurable]]:表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。
- [[Enumerable]]:表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。
- [[Get]]:获取函数，在读取属性时调用。默认值为 undefined。
- [[Set]]:设置函数，在写入属性时调用。默认值为 undefined。

**方法**

- Object.defineProperty()
- Object.defineProperties()
- Object.getOwnPropertyDescriptor()
- Object.assign() 合并对象
- Object.is() 判断一些边缘情况

**ES6 对象增强**

- 属性值简写
- 可计算属性
  对象的解构

#### 拷贝

- 浅拷贝 `Object.assign(dest, [src1, src2, src3...])`
- 深拷贝 lodash
  <details>
  <summary>展开查看</summary>
  为了解决此问题，我们应该使用会检查每个 user[key] 的值的克隆循环，如果值是一个对象，那么也要复制它的结构。这就叫“深拷贝”。
  这里有一个标准的深拷贝算法，它不仅能处理上面的例子，还能应对更多复杂的情况，它被称为 [结构化拷贝算法](https://html.spec.whatwg.org/multipage/structured-data.html#safe-passing-of-structured-data)。
  我们可以用递归来实现。或者不自己造轮子，使用现成的实现，例如 JavaScript 库 lodash 中的 _.cloneDeep(obj)。
  </details>

#### “for…in” 遍历对象

为了遍历一个对象的所有键（key），可以使用一个特殊形式的循环：for..in。这跟我们在前面学到的  for(;;)  循环是完全不一样的东西。

```js
for (key in object) {
  // 对此对象属性中的每个键执行的代码
}
```

#### instanceof

`key in object` 不具体：原型链上存在 key 即可
`object.hasOwnProperty(key)` 具体：对象本身有这个属性 key

`Class.prototype.isPrototypeOf(object) / prototypeObj.isPrototypeOf(object)` 不具体：原型链上查找
(测试一个对象是否存在于另一个对象的原型链上)
`object instanceof Class / object instanceof constructor` 不具体：原型链上查找

(用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上)

> isPrototypeOf() 与 instanceof 运算符不同。在表达式 "object instanceof AFunction"中，object 的原型链是针对 AFunction.prototype 进行检查的，而不是针对 AFunction 本身。 —— MDN

> 其中 Vue2.0 源码在 Vue 构造函数中检查是否用 New 来初始化时，用到了 instanceof 详情见 Vue 源码学习
> 此处为语雀文档，点击链接查看：https://www.yuque.com/guoyiheng/babgb3/gaiovg

设置和直接访问原型的现代方法有：

- `Object.create(proto, [descriptors])` —— 利用给定的 proto 作为 [[Prototype]]（可以是 null）和可选的属性描述来创建一个空对象。
- `Object.getPrototypeOf(obj)` —— 返回对象 obj 的 [[Prototype]]（与 `__proto__` 的 getter 相同）
- `Object.setPrototypeOf(obj, proto)` —— 将对象 obj 的 [[Prototype]] 设置为 proto（与 `__proto__` 的 setter 相同）。

#### “in” 操作符 属性存在性测试

相比于其他语言，JavaScript 的对象有一个需要注意的特性：能够被访问任何属性。即使属性不存在也不会报错！

读取不存在的属性只会得到  undefined。所以我们可以很容易地判断一个属性是否存在：
`let user = {};`
`alert( user.noSuchProperty === undefined );` // true 意思是没有这个属性

这里还有一个特别的，检查属性是否存在的操作符  "in"。
语法是：
`"key" in object`

为何会有  in  运算符呢？与  undefined  进行比较来判断还不够吗？

确实，大部分情况下与  undefined  进行比较来判断就可以了。但有一个例外情况，这种比对方式会有问题，但  in  运算符的判断结果仍是对的。
那就是属性存在，但存储的值是  undefined  的时候：

```js
let obj = {
  test: undefined,
}
alert(obj.test) // 显示 undefined，所以属性不存在？
alert('test' in obj) // true，属性存在！
```

#### 构造函数

构造函数在技术上是常规函数。不过有两个约定： 1. 它们的命名以大写字母开头。 2. 它们只能由 "new" 操作符来执行。
`new User(...)`做的就是类似的事情：

```js
function User(name) {
  // this = {};（隐式创建）
  // 添加属性到 this
  this.name = name
  this.isAdmin = false
  // return this;（隐式返回）
}
```

带有对象的  return  返回该对象，在所有其他情况下返回  this。
通常构造器没有  return  语句。这里我们主要为了完整性而提及返回对象的特殊行为。

我们也可以让  new  调用和常规调用做相同的工作，像这样：

```js
function User(name) {
  if (!new.target) {
    // 如果你没有通过 new 运行我
    return new User(name) // ……我会给你添加 new
  }
  this.name = name
}
let john = User('John') // 将调用重定向到新用户
alert(john.name) // John
```

### 原型继承与类继承

#### 原型

```js
function Person(name) {
  this.name = name
}
Person.prototype.sayName = function() {
  console.log('person say name', this.name)
}
let person = new Person('Person')
console.log('父类 person', person)
for (const key in person) {
  console.log('父类 person key', key)
}
```

#### 原型继承

```js
/**
 * 设置和直接访问原型的现代方法有：
 * Object.create(proto, [descriptors]) —— 利用给定的 proto 作为 [[Prototype]]（可以是 null）和可选的属性描述来创建一个空对象。
 * Object.getPrototypeOf(obj) —— 返回对象 obj 的 [[Prototype]]（与 __proto__ 的 getter 相同）。
 * Object.setPrototypeOf(obj, proto) —— 将对象 obj 的 [[Prototype]] 设置为 proto（与 __proto__ 的 setter 相同）。
 */
function Teacher(name, age) {
  Person.call(this, name)
  this.age = age
}
// 废弃的写法
// Teacher.prototype.__proto__ = Person.prototype
Teacher.prototype = Object.create(Person.prototype)
//修正 constructor
Teacher.prototype.constructor = Teacher
Teacher.prototype.sayAge = function() {
  console.log('teacher say age ', this.age)
}
let teacher = new Teacher('Teacher', '18')
console.log('子类 teacher', teacher)
for (const key in teacher) {
  if (teacher.hasOwnProperty(key)) {
    console.log('子类 teacher key', key, teacher[key])
  }
}
//第二种
const person1 = {
  name: 'person1',
  sayName: function() {
    console.log('person1 say name', this.name)
  },
}
const me = Object.create(person1)
// 废弃的写法
// console.log("me", me.__proto__)
console.log('me', Object.getPrototypeOf(me))
```

#### 类

```js
/**
 * 区别：
 * 1、classConstructor
 * 2、new
 * 3、类方法不可枚举 (enumerable: false)
 * 4、类内部默认使用 use strict
 * 5、类字段重要的不同之处在于，它们会在每个独立对象中被设好，而不是设在 User.prototype
 */
// 类
class Animal {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log('animal say name', this.name)
  }
}
let animal = new Animal('Animal')
console.log('父类 animal', animal)
for (const key in animal) {
  console.log('父类 animal key', key)
}
```

#### 类继承

```js
//继承
class Rabbit extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  sayAge() {
    super.sayName() // 调用父类的 stop
    console.log('teacher say age', this.age)
  }
}
let rabbit = new Rabbit('Rabbit', '18')
console.log('子类 rabbit', rabbit)
for (const key in rabbit) {
  console.log('子类 rabbit key', key)
}
```

<details>
<summary>展开图示</summary>

![-w1454](https://i.imgur.com/VVChH4k.jpg)
![-w586](https://i.imgur.com/nHMHtT1.jpg)

</details>

### js: 高程 数据类型

![-w1503](https://i.imgur.com/NdAtndz.jpg)

### js: 高程 String

![-w1503](https://i.imgur.com/9xJYhNV.jpg)

### js: 高程 Array

![-w1002](https://i.imgur.com/ACxLmeG.jpg)

### js: 柯里化

柯里化（Currying）是一种关于函数的高阶技术。它不仅被用于 JavaScript，还被用于其他编程语言。

柯里化是一种函数的转换，它是指将一个函数从可调用的  f(a, b, c)  转换为可调用的  f(a)(b)(c)。

柯里化不会调用函数。它只是对函数进行转换。

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
```

### js: 宏任务，微任务

每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再执行其他的宏任务，或渲染，或进行其他任何操作。

![-w500](https://i.imgur.com/rvyKISS.jpg)

```
宏任务
微任务
requestAnimationFrame
IntersectionObserver
更新界面
requestIdleCallback
下一帧
```

### typescript

<details>
<summary>展开查看</summary>

```js
/**
 * 原始数据类型
 * JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
 * 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol
 */
let isDone: boolean = false
let decLiteral: number = 6
let myName: string = "Tom"
function alertName(): void {
  alert("My name is Tom")
}
let u: undefined = undefined
let n: null = null
/**
 * 任意值
 */
let anyThing: any = "hello"
/**
 * 类型推论
 */
// let myFavoriteNumber = "seven";
// myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// 事实上，它等价于：
// let myFavoriteNumber: string = "seven";
// myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let myFavoriteNumber
myFavoriteNumber = "seven"
myFavoriteNumber = 7
/**
 * 联合类型（Union Types）表示取值可以为多种类型中的一种。
 */
let myFavoriteNumber2: string | number
myFavoriteNumber2 = "seven"
myFavoriteNumber2 = 7
// 访问 string 和 number 的共有属性是没问题的：
function getString(something: string | number): string {
  return something.toString()
}
/**
 * 接口（Interfaces）来定义对象的类型。
 * ?可选属性
 * 任意属性[propName: string]: any;
 * 只读属性 readonly
 */
interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}
let tom: Person = {
  id: 89757,
  name: "Tom",
  age: 25,
}
/**
 * 数组的类型
 */
let fibonacci: number[] = [1, 1, 2, 3, 5]
/**
 * 函数的类型
 */
// 有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：
// 函数声明（Function Declaration）
function sum(x, y) {
  return x + y
}
// 函数表达式（Function Expression）
let mySum = function (x, y) {
  return x + y
}
function sum1(x: number, y: number): number {
  return x + y
}
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}
// 重载
// 我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""))
  } else if (typeof x === "string") {
    return x.split("").reverse().join("")
  }
}
/**
 * 类型断言
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型。
 * <类型>值
 * 值 as 类型
 */
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length
  } else {
    return something.toString().length
  }
}
/**
 * 用 TypeScript 写 Node.js
 * Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
 * npm install @types/node --save-dev
 */
```

</details>

### js: event.preventDefault()

取消事件的默认动作。

```js
document.querySelector('#id-checkbox').addEventListener(
  'click',
  function(event) {
    document.getElementById('output-box').innerHTML +=
      "Sorry! <code>preventDefault()</code> won't let you check this!<br>"
    event.preventDefault()
  },
  false
)
```

选中复选框是点击复选框的默认行为。上面这个例子说明了怎样阻止默认行为的发生

### 内存泄露的查询

Chrome浏览器 -> Performance 勾选 Memory -> 录制 -> 会展示Heap占用情况

### 微信支付

https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_4


![支付流程](https://pay.weixin.qq.com/wiki/doc/api/img/chapter15_1.png)