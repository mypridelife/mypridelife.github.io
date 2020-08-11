const javascript=["/web/javascript/AES和Base64加解密.md","/web/javascript/base64转二进制数组ArrayBuffer.md","/web/javascript/byte转换.md","/web/javascript/common.js.md","/web/javascript/JavaScript浮点数运算的精度问题.md","/web/javascript/JS事件循环机制.md","/web/javascript/js常用函数.md","/web/javascript/VUE首屏加载速度优化.md","/web/javascript/关于this.md","/web/javascript/实现一个深克隆.md","/web/javascript/获取页面元素宽高.md","/web/javascript/视频播放相关.md"]
const css=["/web/css/1px方案.md","/web/css/CSS中几种常用的居中.md","/web/css/tailwind.md","/web/css/用div画三角.md","/web/css/移动端适配.md","/web/css/移动端适配2.md"]
const vue=["/web/vue/i18n.md","/web/vue/svg在vue中以及在vux组件库中的使用.md","/web/vue/vue-element-admin.md","/web/vue/vue中引入第三方库.md","/web/vue/vue中路由跳转query与params.md","/web/vue/vue定义全局方法.md","/web/vue/VUE实现局部刷新.md","/web/vue/VUE笔记.md","/web/vue/实现一个极简版的双向绑定.md","/web/vue/项目部署多环境.md"]
const others=["/web/others/flutter父子组件通信.md","/web/others/github表情.md","/web/others/h5与原生app交互的原理.md","/web/others/resolve.md","/web/others/vscode同步设置.md","/web/others/wepy子组件未更新的问题.md","/web/others/__dirname.md","/web/others/技巧.md","/web/others/钉钉手机网页应用更改标题栏.md","/web/others/需要调用钉钉的api时如何调试页面.md","/web/others/骚操作.md"]
const server=["/server/server/RSA_premaster_secret_error.md","/server/server/springboot接收参数的几种方式.md"]
const algorithm=["/algorithm/algorithm/memset函数.md","/algorithm/algorithm/分治法.md","/algorithm/algorithm/动态规划.md","/algorithm/algorithm/图论算法之最短路径之Bell-Ford算法算法.md","/algorithm/algorithm/图论算法之最短路径之Dijkstra算法.md","/algorithm/algorithm/图论算法之最短路径之Floyd算法.md","/algorithm/algorithm/外星人说的HelloWorld.md","/algorithm/algorithm/大数问题.md","/algorithm/algorithm/棋盘覆盖问题.md"]
const standard=["/standard/standard/设计规范合集.md"]
const utils=["/utils/utils/使用spark-md5对文件进行加密.md","/utils/utils/依赖库.md"]
const article=["/article/article/你在遗憾什么.md","/article/article/劝学.md","/article/article/北冥有鱼.md","/article/article/呐喊.md","/article/article/四书五经.md","/article/article/如是我闻.md","/article/article/师说.md","/article/article/心经.md","/article/article/热风.md","/article/article/琵琶行.md","/article/article/生于忧患，死于安乐.md","/article/article/送东阳马生序.md","/article/article/金刚经.md","/article/article/陋室铭.md"]
const youth=["/youth/youth/一直不擅于表达.md","/youth/youth/与你有关的回忆.md","/youth/youth/仙人掌.md","/youth/youth/你比从前快乐.md","/youth/youth/你画了谁.md","/youth/youth/入戏.md","/youth/youth/分手是一个人的事.md","/youth/youth/单人旅途.md","/youth/youth/听见下雨的声音.md","/youth/youth/坏人.md","/youth/youth/够了.md","/youth/youth/她的诗.md","/youth/youth/如戏人生.md","/youth/youth/如是我闻.md","/youth/youth/小情绪.md","/youth/youth/当爱已成往事.md","/youth/youth/微凉.md","/youth/youth/惯犯.md","/youth/youth/我不是一米五九.md","/youth/youth/接吻前的味道.md","/youth/youth/旧.md","/youth/youth/是我.md","/youth/youth/晴天.md","/youth/youth/暗恋.md","/youth/youth/暧昧.md","/youth/youth/最初的快乐.md","/youth/youth/有个爱你的人不容易.md","/youth/youth/有些事情只能在心底美丽.md","/youth/youth/有病的人.md","/youth/youth/极其细腻的喜欢.md","/youth/youth/枕着雨声入睡.md","/youth/youth/棉花糖.md","/youth/youth/漠不关心.md","/youth/youth/犯贱.md","/youth/youth/瘾.md","/youth/youth/练习.md","/youth/youth/至死不渝.md","/youth/youth/蒲公英的约定.md","/youth/youth/认真的吻.md","/youth/youth/说谎.md","/youth/youth/选择.md","/youth/youth/邂逅.md","/youth/youth/随性.md","/youth/youth/雨伤.md","/youth/youth/青春.md"]
  module.exports = {
        title: "GYH",
        head: [["link", { rel: "icon", href: "/favicon.jpg" }]],
        base: "/",
        markdown: { lineNumbers: true },
        themeConfig: {
            nav: [
                {
                    text: "前端",
                    items: [
                        { text: "js", link: "/web/javascript/JavaScript浮点数运算的精度问题" },
                        { text: "css", link: "/web/css/移动端适配" },
                        { text: "vue", link: "/web/vue/vue-element-admin" },
                        { text: "其他", link: "/web/others/骚操作" }
                    ]
                },
                { text: "服务端", link: "/server/",href:"./pubilc/favicon.jpg" },
                { text: "数据结构", link: "/algorithm/" },
                { text: "代码规范", link: "/standard/" },
                { text: "工具", link: "/utils/" },
                { text: "笔记", link: "/article/" },
                { text: "关于", link: "/about/" }
            ],
            sidebar: {
                "/web/": [
                    { collapsable: false, title: "Javascript", children: javascript },
                    { collapsable: false, title: "CSS", children: css },
                    { collapsable: false, title: "VUE", children: vue },
                    { collapsable: false, title: "其他", children: others }
                ],
                "/server/": [{ collapsable: false, title: "Server", children: server }],
                "/algorithm/": [
                    { collapsable: false, title: "Algorithm", children: algorithm }
                ],
                "/utils/": [{ collapsable: false, title: "Utils", children: utils }],
                "/youth/": [{ collapsable: false, title: "Youth", children: youth }],
                "/standard/": [
                    { collapsable: false, title: "Standard", children: standard }
                ],
                "/article/": [{ collapsable: false, title: "Article", children: article }],
                "/": []
            },
            sidebarDepth: 2
        }
    };