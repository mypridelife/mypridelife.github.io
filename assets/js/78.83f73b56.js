(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{453:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vue-项目中如何引入第三方库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-项目中如何引入第三方库"}},[s._v("#")]),s._v(" vue 项目中如何引入第三方库")]),s._v(" "),t("h4",{attrs:{id:"一、绝对路径直接引入，全局可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、绝对路径直接引入，全局可用"}},[s._v("#")]),s._v(" 一、绝对路径直接引入，全局可用")]),s._v(" "),t("p",[s._v("主入口页面 index.html 中用 script 标签引入：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./static/jquery-1.12.4.js"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("由于开启了 ESLint 检测，所以会报一个 warning[警告] ：'$' is not defined 。需要加 /_ eslint-disable _/")]),s._v(" "),t("h4",{attrs:{id:"二、绝对路径直接引入，配置后，import-引入后再使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、绝对路径直接引入，配置后，import-引入后再使用"}},[s._v("#")]),s._v(" 二、绝对路径直接引入，配置后，import 引入后再使用")]),s._v(" "),t("p",[s._v("还是先在主入口页面 index.html 中用 script 标签引入：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./static/jquery-1.12.4.js"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后，在 webpack 中配置一个 externals\n"),t("code",[s._v("externals: { 'jquery': 'jQuery' }")]),s._v("\n这样，就可以在每一个组件中用 import 来引用这个 jquery 了。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" $ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jquery'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("created")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"三、webpack-中配置-alias，import-引入后再使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、webpack-中配置-alias，import-引入后再使用"}},[s._v("#")]),s._v(" 三、webpack 中配置 alias，import 引入后再使用")]),s._v(" "),t("p",[s._v("只需要在 webpack 的配置文件中，在 resolve 中为 jQuery 添加一个 alias[别名] 。")]),s._v(" "),t("p",[t("code",[s._v("resolve: { extensions: ['.js', '.vue', '.json'], alias: { '@': resolve('src'), 'jquery': resolve('static/jquery-1.12.4.js') } }")])]),s._v(" "),t("p",[s._v("在任意组件中，通过 import 的方式来使用 jquery 了")]),s._v(" "),t("h4",{attrs:{id:"四、webpack-中配置-plugins，无需-import-全局可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、webpack-中配置-plugins，无需-import-全局可用"}},[s._v("#")]),s._v(" 四、webpack 中配置 plugins，无需 import 全局可用")]),s._v(" "),t("p",[s._v("在第三种的基础上，如果我们增加一个 plugins 的配置，那么，我们在使用的时候，无需 "),t("code",[s._v("import $ from 'jquery'")]),s._v(" 也可以")]),s._v(" "),t("p",[t("code",[s._v("resolve: { extensions: ['.js', '.vue', '.json'], alias: { '@': resolve('src'), 'jquery': resolve('static/jquery-1.12.4.js') } }, plugins: [ new webpack.ProvidePlugin({ $: 'jquery' }) ]")])]),s._v(" "),t("p",[s._v("在项目中，就可以直接使用 $ 了。")])])}),[],!1,null,null,null);a.default=r.exports}}]);