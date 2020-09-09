const themeConfig = require("./config/theme/index.js")
const pluginsConf = require("./config/plugins/index")

module.exports = {
  title: "Gyh's blog",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "Gyh" }],
    [
      "meta",
      {
        name: "keywords",
        content: "gyh,guoyiheng,blog,前端,vuepress-blog",
      },
    ],
  ],
  markdown: { lineNumbers: true },
  theme: "reco",
  themeConfig: themeConfig,
  plugins: pluginsConf,
}
