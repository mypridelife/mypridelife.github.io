var fs = require("fs")

const oldData = `module.exports = {
        title: "GYH",
        head: [["link", { rel: "icon", href: "/favicon.jpg" }]],
        base: "/",
        markdown: { lineNumbers: true },
        theme: 'reco',
        themeConfig: {
            nav: [
                {
                    text: "前端",
                    items: [
                        { text: "javascript", link: "/web/javascript/JavaScript浮点数运算的精度问题" },
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
        },
        plugins: [
            [
              'vuepress-plugin-comment',
              {
                choosen: 'valine', 
                options: {
                  el: '#valine-vuepress-comment',
                  appId: 'vYkETROVb1A9jGlh7mCKbgBd-gzGzoHsz',
                  appKey: 'PTCmTLoNHVT2Lz99HJlVQUCJ',
                  placeholder: '骚年，你有啥想说的~',
                  path: '<%- frontmatter.to.path ? "/" + frontmatter.to.path : window.location.pathname %>'
                }
              }
            ]
        ]
    };`
function getFileArr(directory) {
  let wenjianjia = []
  const files = fs.readdirSync("./docs" + directory)
  for (let i = 0; i < files.length; i++) {
    let filename = files[i]
    wenjianjia.push(`${directory}/${filename}`)
  }
  return wenjianjia
}
function wirteFileArr(newData) {
  //   var oldData = fs.readFileSync("./docs/.vuepress/config.js", "utf8");
  fs.writeFileSync("./docs/.vuepress/config.js", newData + oldData)
}
function generate() {
  console.log("generate menu...")

  let javascript = getFileArr("/web/javascript")
  javascript = "const javascript=" + JSON.stringify(javascript) + "\n"

  let css = getFileArr("/web/css")
  css = "const css=" + JSON.stringify(css) + "\n"

  let vue = getFileArr("/web/vue")
  vue = "const vue=" + JSON.stringify(vue) + "\n"

  let others = getFileArr("/web/others")
  others = "const others=" + JSON.stringify(others) + "\n"

  let server = getFileArr("/server/server")
  server = "const server=" + JSON.stringify(server) + "\n"

  let algorithm = getFileArr("/algorithm/algorithm")
  algorithm = "const algorithm=" + JSON.stringify(algorithm) + "\n"

  let standard = getFileArr("/standard/standard")
  standard = "const standard=" + JSON.stringify(standard) + "\n"

  let utils = getFileArr("/utils/utils")
  utils = "const utils=" + JSON.stringify(utils) + "\n"

  let youth = getFileArr("/youth/youth")
  youth = "const youth=" + JSON.stringify(youth) + "\n"

  let article = getFileArr("/article/article")
  article = "const article=" + JSON.stringify(article) + "\n"

  const newDate =
    javascript + css + vue + others + server + algorithm + standard + utils + article + youth
  wirteFileArr(newDate)
  console.log("generate finish...")
}
generate()
