(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{275:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"移动端适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端适配"}},[s._v("#")]),s._v(" 移动端适配")]),s._v(" "),a("blockquote",[a("p",[s._v("lib-flexxble适配方案现已废弃，新方案参考 https://www.jianshu.com/p/1f1b23f8348f\n需要注意Viewport Units Buggyfill还提供了其他的功能。详细的这里不阐述了。但是content也会引起一定的副作用。比如img和伪元素::before(:before)或::after（:after）。在img中content会引起部分浏览器下，图片不会显示。这个时候需要全局添加：")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" normal "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://github.com/amfe/lib-flexible",target:"_blank",rel:"noopener noreferrer"}},[s._v("lib-flexxble"),a("OutboundLink")],1),s._v("\n一、项目中安装 lib-flexible")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install lib-flexible --save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("二、在项目的入口 js 文件中引入 lib-flexible")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import 'lib-flexible'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("三、使用 px2rem-loader 自动将 css 中的 px 转换成 rem\n安装 px2rem-loader")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install px2rem-loader --save-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置 px2rem-loader 1.打开 build/utils.js 文件，找到 exports.cssLoaders 方法，在里面添加如下代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const px2remLoader = {\n    loader: 'px2rem-loader',\n    options: {\n      remUint: 75\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("2.修改 generateLoaders 方法中的 loaders")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 注释掉这一行\n// const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 修改为\nconst loaders = [cssLoader, px2remLoader]\nif (options.usePostCSS) {\n  loaders.push(postcssLoader)\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后重新 npm run dev，打开控制台可以看到代码中的 px 已经被转成了 rem")]),s._v(" "),a("p",[s._v("注意： 1.此方法只能将.vue 文件 style 标签中的 px 转成 rem，不能将 script 标签和元素 style 里面定义的 px 转成 rem\n 2.如果在.vue 文件 style 中的某一行代码不希望被转成 rem，只要在后面写上注释 /_ no_/就可以了")])])}),[],!1,null,null,null);e.default=n.exports}}]);