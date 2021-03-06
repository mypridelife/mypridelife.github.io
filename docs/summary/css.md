---
title: 技术栈总结-css
date: 2020-05-20
#sidebar: 'auto'
categories:
  - Summary
tags:
  - vue
#keys:
#  - 'vue'
#publish: true
---

## css

### css: 中英文换行

<details>
<summary>展开查看</summary>
```css
white-space:nowrap;         //强制不换行（中英文都起作用）
white-space:pre-wrap;       //只对中文起作用，强制换行
word-break:break-all;        // 只对英文起作用，以字母作为依据，强制换行
word-break:break-word;    //只对英文起作用，以单词作为依据，强制换行
overflow:hidden;               //超出的内容隐藏
text-overflow:ellipsis;        //超出的内容为省略号
```

</details>

### css: 动画

<details>
<summary>属性: transition</summary>

```js
transition-property: 动画展示哪些属性，可以使用 all 关键字；
transition--duration: 动画过程有多久；
transition-timing-function:linear,ease,ease-in,ease-out,ease-in-out，贝塞尔曲线等:控制动画速度变化；
transition-delay: 动画是否延迟执行；
一般来说，将 transition 属性应用到最初的样式里，而不是放在结束的样式里，
即定义动画开始之前的元素外观的样式。
只需要给元素设置一次 transition，浏览器就会负责以动画展示从一个样式到另一个样式，再返回最初样式的变化过程。

1. 需要一个事件来触发，比如 hover，所以没法在网页加载时自动触发。 2.是一次性的，不能重复发生，除非一再触发。 3.只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。 4.一条 transition 规则，只能定义一个属性的变化，不能涉及多个属性。
```

</details>

<details>
<summary>属性:animation</summary>

```js
animation-name: keyframes 中定义的动画名称；
animation-duration:动画执行一次持续的时长；
animation-timing-function:动画速率变化函数；
animation-delay:动画延迟执行的时间；
animation-iteration-count:动画执行的次数，可以是数字，或者关键字（infinite）;
animation-direction:alternate(奇数次超前运行，偶数次后退运行)。
animation-fill-mode:告诉浏览器将元素的格式保持为动画结束时候的样子/或没开始。
animation-paly-state:paused|running;
```

</details>

### css: iphone 刘海屏 安全区域

[详细文档](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

### css: vertical-align

CSS 的属性 vertical-align 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。

### css: font-family

- serif(衬线)
- sans-serif(无衬线)
- monospace(等宽)
- fantasy(梦幻)
- cuisive(草体)

<details>
<summary>展开查看</summary>
1、serif -- 衬线字体

serif，意为有衬线的字体，衬线的意思是在字符笔画末端有叫做衬线的小细节的额外装饰，而且笔画的粗细会有所不同，这些细节在大写字母中特别明显。

OK，那么有哪些常用字体属于衬线字体呢？

宋体（SimSun）
Windows 下大部分浏览器的默认中文字体，是为适应印刷术而出现的一种汉字字体。笔画有粗细变化，是一种衬线字体，宋体在小字号下的显示效果还可以接受，但是字号一大体验就很差了，所以使用的时候要注意，不建议做标题字体使用。

Times New Roman
Mac 平台 Safari 下默认的英文字体，是最常见且广为人知的西文衬线字体之一，众多网页浏览器和文字处理软件都是用它作为默认字体。

2、sans-serif -- 无衬线字体

微软雅黑（Microsoft Yahei）
大名鼎鼎的微软雅黑相信都不陌生，从 windows Vista 开始，微软提供了这款新的字体，一款无衬线的黑体类字体，显著提高了字体的显示效果。现在这款字体已经成为 windows 浏览器最值得使用的中文字体。

华文黑体（STHeiti）、华文细黑（STXihei）
属于同一字体家族系列，MAC OS X 10.6 之前的简体中文系统界面的默认中文字体，正常粗细就是华文细黑，粗体下则是华文黑体。

黑体-简（Heiti SC）
从 MAC OS X 10.6 开始，黑体-简代替华文黑体用作简体中文系统界面默认字体，苹果生态最常用的字体之一，包括 iPhone、iPad 等设备用的也是这款字体。

冬青黑体（Hiragino Sans GB）
又叫苹果丽黑，Hiragino 是字游工房设计的系列字体名称。是一款清新的专业印刷字体，小字号时足够清晰，Mac OS X 10.6 开始自带有 W3 和 W6 。

Helvetica、Helvetica Neue
被广泛用于全世界使用拉丁字母和西里尔字母的国家。Helvetica 是苹果电脑的默认字体，微软常用的 Arial 字体也来自于它。

Arial
Windows 平台上默认的无衬线西文字体，有多种变体，比例及字重（weight）和 Helvetica 极为相近。

Verdana
无衬线字体，优点在于它在小字上仍结构清晰端整、阅读辨识容易。

Tahoma
十分常见的无衬线字体，字体结构和 Verdana 很相似，其字元间距较小，而且对 Unicode 字集的支持范围较大。许多不喜欢 Arial 字体的人常常会改用 Tahoma 来代替，除了是因为 Tahoma 很容易取得之外，也是因为 Tahoma 没有一些 Arial 为人诟病的缺点，例如大写“i”与小写“L”难以分辨等。（这里故意反过来写）。
3、monospace -- 等宽字体
这系列字体程序员们其实都不陌生。我们用来敲代码的编辑器，字体的选择经常就是一类等宽字体。
等宽字体是指字符宽度相同的电脑字体，常见于 IDE 或者编辑器中，每个字母的宽度相等，通常用于计算机相关书籍中排版代码块。

除了 IDE ，我们看到的技术文章中的代码块中，经常也是使用等宽字体进行排版。
Consolas
这是一套等宽的字体，属无衬线字体。这个字体使用了微软的 ClearType 字型平滑技术，主要是设计做为代码的显示字型之用，特别之处是它的“0”字加入了一斜撇，以方便与字母“O”分辨。
ClearType：由微软在其操作系统中提供的屏幕亚像素微调字体平滑工具，让 Windows 字体更加漂亮。在 Windows XP 平台上，这项技术默认是关闭，到了 Windows Vista 才默认为开启。

上图是 Github 代码区块的字体设置，可以看到，默认字体就是  Consolas ，紧接着的几个都是其它等宽字体，如果用户的系统中都没有预装这些字体，则会匹配最后一个  monospace ，它表示等宽字体系列，会从用户系统中的等宽字体中选取一个展示。

4、fantasy 、cuisive
fantasy 和 cuisive 字体在浏览器中不常用，在各个浏览器中有明显的差异。

中文字体的兼容写法
一些中文字体，例如 font-family: '宋体'，由于字符编码的问题，少部分浏览器解释这个代码的时候，中文出现乱码，这个时候设定的字体无法正常显示。

所以通常会转化成对应的英文写法或者是对应的 unicode 编码，font-family:'宋体' -> font-family: '\5b8b\4f53'。

\5b8b\4f53 是宋体两个中文字的 unicode 编码表示。类似的写法还有：

黑体：\9ED1\4F53
微软雅黑：\5FAE\8F6F\96C5\9ED1
华文细黑：\534E\6587\7EC6\9ED1
华文黑体：\534E\6587\9ED1\4F53
Unicode 编码： 人们希望在一套系统里面能够容纳所有字符，Unicode 编码解决传统的字符编码方案的局限性，每个字符占用 2 字节。这样理论上一共最多可以表示 2^16（即 65536）个字符。基本满足各种语言的使用。

字体定义的细节
其他一些小细节也很重要，譬如定义字体的时候，何时需要在字体两端添加引号？像这样：

p{
font-family: 'Microsoft YaHei', '黑体-简', '\5b8b\4f53';
}
当字体名字中间有空格，中文名字体及 Unicode 字符编码表示的中文字体，为了保证兼容性，都建议在字体两端添加单引号或者双引号。

字体定义顺序
字体定义顺序是一门学问，通常而言，我们定义字体的时候，会定义多个字体或字体系列。举个栗子：

body {
font-family: tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
}
别看短短 5 个字体名，其实其中门道很深。解释一下：

    • 使用 tahoma 作为首选的西文字体，小字号下结构清晰端整、阅读辨识容易；
    • 用户电脑未预装 tohoma，则选择 arial 作为替代的西文字体，覆盖 windows 和 MAC OS；
    • Hiragino Sans GB 为冬青黑体，首选的中文字体，保证了 MAC 用户的观看体验；
    • Windows 下没有预装冬青黑体，则使用 '\5b8b\4f53' 宋体为替代的中文字体方案，小字号下有着不错的效果；
    • 最后使用无衬线系列字体 sans-serif 结尾，保证旧版本操作系统用户能选中一款电脑预装的无衬线字体，向下兼容。
    • 嗯，其实上面的 font-family 就是淘宝首页 body 的字体定义，非常的规范，每一个字体的定义都有它的意义。surprised

字体书写规则
综上，总结一下，我觉得字体 font-family 定义的原则大概遵循：

1、兼顾中西
中文或者西文（英文）都要考虑到。

2、西文在前，中文在后
由于大部分中文字体也是带有英文部分的，但是英文部分又不怎么好看，同理英文字体中大多不包含中文。

所以通常会先进行英文字体的声明，选择最优的英文字体，这样不会影响到中文字体的选择，中文字体声明则紧随其次。

3、兼顾多操作系统
选择字体的时候要考虑多操作系统。例如 MAC OS 下的很多中文字体在 Windows 都没有预装，为了保证 MAC 用户的体验，在定义中文字体的时候，先定义 MAC 用户的中文字体，再定义 Windows 用户的中文字体。其次很多人都不知道 Android 下没有预装微软雅黑和宋体，那么 Android 机型下的中文字体设置又是很考究的。

4、兼顾旧操作系统，以字体族系列 serif 和 sans-serif 结尾
当使用一些非常新的字体时，要考虑向下兼容，兼顾到一些极旧的操作系统，使用字体族系列 serif 和 sans-serif 结尾总归是不错的选择。

</details>

### css: Image

![-w525](https://i.imgur.com/jeqnI8W.jpg)

### css: How CSS works

CSS 究竟是怎么工作的？
当浏览器展示一个文件的时候，它必须兼顾文件的内容和文件的样式信息，下面我们会了解到它处理文件的标准的流程。需要知道的是，下面的步骤是浏览加载网页的简化版本，而且不同的浏览器在处理文件的时候会有不同的方式，但是下面的步骤基本都会出现。

1. 浏览器载入 HTML 文件（比如从网络上获取）。
2. 将 HTML 文件转化成一个 DOM（Document Object Model），DOM 是文件在计算机内存中的表现形式，下一节将更加详细的解释 DOM。
3. 接下来，浏览器会拉取该 HTML 相关的大部分资源，比如嵌入到页面的图片、视频和 CSS 样式。JavaScript 则会稍后进行处理，简单起见，同时此节主讲 CSS，所以这里对如何加载 JavaScript 不会展开叙述。
4. 浏览器拉取到 CSS 之后会进行解析，根据选择器的不同类型（比如 element、class、id 等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id 选择器等）应用在对应的 DOM 的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）。
5. 上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行布局。
6. 网页展示在屏幕上（这一步被称为着色）。
   结合下面的图示更形象：
   ![-w513](https://i.imgur.com/oAB8M0W.jpg)

### getBoundingClientRect

Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。

### 禁止 IOS 长按下载图片

` -webkit-touch-callout:none;`

### 点击延迟

使用 `fastclick.js`

### 滚动传播

`@touchmove.prevent`
