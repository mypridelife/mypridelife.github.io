(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{240:function(n,s,e){"use strict";e.r(s);var t=e(0),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"分治法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分治法"}},[n._v("#")]),n._v(" 分治法")]),n._v(" "),e("p",[n._v("1、分治策略\n"),e("strong",[n._v("分治法")]),n._v("是采用分而治之，逐个解决的策略。孙子兵法曰：凡治众如寡者，分数是也。")]),n._v(" "),e("p",[n._v("采用分治求解的问题必须具有两个性质：最优子结构和子问题独立。\n（1）最优子结构。最优子结构，指一个问题可以分解为若干个规模较小的子问题，各子问题与原问题类型相同；问题的规模缩小到一定的规模就能够直接解决，将子问题的解合并最终能够得到原问题的解。\n（2）子问题独立。问题所分解出来的各子问题是相互独立的，没有重叠部分。")]),n._v(" "),e("p",[n._v("分治法将一个难以直接解决的大问题分解成若干规模较小的子问题，子问题与原问题类型相同，则切结算法相同；递推分解子问题直到可解的最小规模；分别求子问题，再将子问题的解合并为一个规模较大的子问题的解，从而自底向上地逐步求得原问题的解。因此，分治策略可以用递归算法表达。例如，深度优先搜索遍历二叉树，树和图，二分查找法，快速排序等算法嗾使采用的分治策略。")]),n._v(" "),e("p",[n._v("#####2、分治与递归\n采用分治策略的递归算法描述如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("结果 求解问题 （问题规模）\n{\n    if（问题规模足够小）\n        求解小规模子问题；\n    else\n        while（存在子问题）\n            求解问题（子问题规模）；\n     return 各子问题合并后的解；\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br")])]),e("p",[n._v("#####3、分治法的效率分析\n如果每次划分子问题的规模近乎相等，则分治复杂度策略效率高。例如，快速排序最好的情况的是，每趟排序的两个子序列长度相近，时间复杂度为"),e("em",[n._v("O")]),n._v("(nlog"),e("sub",[n._v("2")]),n._v("n)；最坏情况是，每趟排序的两个子序列长度分别为 0 和 n-1，时间复杂度为"),e("em",[n._v("O")]),n._v("(n"),e("sup",[n._v("2")]),n._v(")。同理，二分法最好情况是"),e("em",[n._v("O")]),n._v("(log"),e("sub",[n._v("2")]),n._v("n)；最坏是"),e("em",[n._v("O")]),n._v("(n)。")]),n._v(" "),e("p",[n._v("用递归算法表达分治策略，优点是算法结构清晰，可读性强；缺点是递归算法运行效率低，无论是耗时的计算时间还是占用的存储空间都比相同问题规模的非递归算法要多。")]),n._v(" "),e("p",[n._v("有些递归定义的问题可以采用循环方式解决，如求阶乘、二分法查找、二叉排序树查找等。那么那些能那些不能，为什么？\n      1、对于只分解成一个子问题的递归定义，可采用循环方式，通过递推表达为非递归算法、如求阶乘、遍历线性表、顺序查找等，时间效率和空间效率较高。\n       虽然二分法查找、二叉排序树查找将问题分解为两个子问题，但每次比较在 2 个子问题中选择了其中一个，后继子问题也只有一个，因此可以采用循环方式。\n      2、对于分解成多个子问题的递归定义，采用递归算法。例如，深度优先遍历二叉树、树和图，以及表达式的求值、快速排序等，都将问题分解成 2 至多个子问题。如果要表达为非递归算法，则必须使用栈。因为，每个元素有多个后继元素，通过循环方式只能遍历一条路径，当访问完一条路径的元素时，必须通过栈返回前一元素寻找其他路径。这种使用栈将递归定义问题表达为非递归算法的方式，本质上还是递归，只不过本来由运行系统负责实现递归算法的种种操作（如设置系统工作栈，执行递归调用时保存函数参数和局部变量，等等），改由应用程序实现了而已，时间效率和空间效率都没有明显提高。")])])}),[],!1,null,null,null);s.default=a.exports}}]);