---
title: 关于this
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

以前看某本书上讲：

> 掌握了 JS 中 this 的用法才算真正的跨过 了 JS 的门槛 我深以为是！

但是 JS 的 this 却并不是那么简单的内容，许多同学都很困惑，也肯定有同学像我曾经一样查阅各种资料想知

道`How to understand this of javascript`。很幸运的是，网上有非常非常多的文章关于`this`的，简

直就是琳琅满目…曾经，我看到某些文章非常开心，因为他们讲得确实非常好，以至于我确信我已掌握了

this 的用法。然而可能是由于我太笨了，经常过一段时间就忘得一干二净了，这真的是一件很尴尬的事情……

直到后来我仔细地琢磨又琢磨，终于感觉我可能以后不会再忘记了。所以想把我琢磨的内容和大家分享一下

说到 this，就不得不提到 function，相信看过其它类似文章的同学也知道，正是由于调用 function 的对象不

同，才导致了 this 的指向不同。所以以前老是去记忆每种调用 function 的情况所对应的 this，因为情况有限而

且很少，所以这当然是可行的——对于聪明人来说。所以我不得不思考另外一些方式来让我记住。

那么首先我们需要明确的一个事情是：function 也是对象

同时我们还需要明确的一个事情是：function 执行时是在某个特定的上下文中执行的。那什么是上下文呢？

打个比方，比如你练会了辟邪剑谱，那这时候你的掌门让你用辟邪剑谱砍人。如果仅仅是这样的话，你是没

法完成这个任务的，因为你必须得知道要砍谁吧，其次去哪儿砍吧，那么是个地下通道还是一望无尽的大草

原，要是地下通道你走路都困难，还怎么用辟邪剑谱呢对吧。这就是上下文，函数执行时它也需要一些额外

的信息来支撑它的运行。那么既然 function 是对象的话，就会有方法。而 function 中最核心的方法是 call 方

法。因此我们就从这儿入手。

## call 方法

先来看一下如何使用 call 方法:

```
function say(content) { console.log("From " + this + ": Hello "+ content); }
say.call("Bob", "World"); //==> From Bob: Hello World
```

接下来仔细分析一下 call 的用法：

- Step1: 把第二个到最后一个参数作为函数执行时要传入的参数
- Step2: 把函数执行时的 this 指向第一个参数
- Step3: 在上面这个特殊的上下文中执行函数
  上面例子中，我们通过 call 方法，让 say 函数执行时的 this 指向"Bob"，然后把"World"作为参数传进去，所以输出结果是可以预见的。

#### js 执行函数时会默认完成以上的步骤，你可以把直接调用函数理解为一种语法糖

比如

```
function say(word) { console.log(world); }
say("Hello world"); say.call(window, "Hello world");
```

以上可以把 say("Hello world")看做是 say.call(window,"Hello world")的语法糖。

这个结论非常关键 所以以后每次看见 functionName(xxx)的时候，你需要马上在脑海中把它替换为

functionName.call(window,xxxx)，这对你理解 this 的指向非常重要。不过也有例外，在 ES5 的 strict mode

中 call 的第一个参数不是 window 而是 undefined。之后的例子我假设总是不在 strictmode 下，但你需要记住

strictmode 有一点儿不同。 对于匿名函数来说，上面的结论也是成立的

```
 (function(name) { // })("aa"); //等价于 (function(name) { // }).call(window, "aa");
```

函数作为对象的方法被调用

直接来看代码：

```
var person = {
name : "caibirdme",
run : function(time) {
console.log(this.name + "has been running for over "+ time+ " minutes");
} };
person.run(30); //==> caibirdme has been running for over 30 minutes //等价于 person.run.call(person, 30); // the same
```

你会发现这里 call 的第一个参数是 person 而不是 window。

当你明白了这两点，下意识地把函数调用翻译成 foo.call()的形式，明确 call 的第一个参数，那基本上 this 的问

题就难不住你了。

还是来举几个例子吧

例一：

```
function hello(thing) {
console.log(this + " says hello " + thing);
}
person = { name: "caibirdme" }
person.hello = hello;
person.hello("world") // 相当于执行 person.hello.call(person, "world") //caibirdme says hello world hello("world") // 相当于执行 hello.call(window, "world") //[object DOMWindow]world
```

例二：

```
var obj = {
 x: 20,
 f: function(){
console.log(this.x);
 } };
obj.f(); // obj.f.call(obj) //==> 20
obj.innerobj = {
 x: 30,
f: function(){
console.log(this.x);
} }
obj.innerobj.f(); // obj.innerobj.f.call(obj.innerobj) // ==> 30
```

例三：

```
var x = 10;
var obj = {
x: 20, f: function(){
console.log(this.x); //this equals obj // ==> 20
var foo = function(){
console.log(this.x);
}
foo(); // foo.call(window) //foo中this被指定为window，所以==> 10 } }; obj.f(); // obj.f.call(obj) // ==> 20 10
```

由例三引出一个非常 common 的问题，如果我想让 foo 输出 20 怎么办？这时候需要用到一点小技巧

例四：

```
var x = 10;
var obj = {
x: 20,
f: function(){
console.log(this.x);
var that = this; //使用that保留当前函数执行上下文的this
var foo = function(){ console.log(that.x); } //此时foo函数中的this仍然指向window，但我们使用that取得obj foo(); // foo.call(window) } };
obj.f();
obj.f.call(obj) // ==> 20 20
```

再来一个稍微难一点点的(但其实用 call 替换法一点儿也不难)

例五：

```
var x = 10;
var obj = {
x: 20,
f: function(){
console.log(this.x);
} };
obj.f(); // obj.f.call(obj) // ==> 20
var fOut = obj.f;
 fOut(); // fOut.call(window) //==> 10
var obj2 = { x: 30, f: obj.f } obj2.f(); // obj2.f.call(obj2) //==> 30
```

例五有些同学会可能出错的原因，是没有明确我上面说的：

###### this 是在执行是才会被确认的

他可能会认为说 obj.f 那个函数定义在 obj 里面，那 this 就该指向 obj。如果看完这篇文章你还这么想的话，我

会觉得我的表达水平太失败了…… 用于构造函数 先看一段代码：

```
 func person(name) { this.name = name; }
var caibirdme = new person("deen"); // caibirdme.name == deen
```

我上面也说了，函数在用作构造函数时同样可以用 call 方法去代替，那这里怎么代替呢？

这里你又需要明确一点：

###### `new constrcut()`是一种创建对象的语法糖 它等价于

```
function person(name) { this.name = name; }
var foo = new person("deen"); //通过new创建了一个对象 //new是一种语法糖，new person等价于 var bar = (function(name) { var _newObj = { constructor : person, __proto__ : person.prototype, };
 _newObj.constructor(name); // _newObj.constructor.call(_newObj, name) return _newObj; })();
```

So you can see……为什么 new 的时候 this 就指向新的对象了吧？

通过我这篇文章，我希望学会通过把一个函数调用替换成 funcName.call 的形式，从而理解运行时上下文中

this 到底指向谁。

总结来说就是下面两个等价变形：

- foo() ---> foo.call(window)
- obj.foo() --> obj.foo.call(obj) 只要理解以上两个变形，this 就不再是问题啦
