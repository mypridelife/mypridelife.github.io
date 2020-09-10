module.exports = {
  "vuepress-plugin-comment": {
    choosen: "valine",
    options: {
      el: "#valine-vuepress-comment",
      appId: "vYkETROVb1A9jGlh7mCKbgBd-gzGzoHsz",
      appKey: "PTCmTLoNHVT2Lz99HJlVQUCJ",
      placeholder: "骚年，填写邮箱地址可以及时收到回复喔~",
      path: '<%- frontmatter.to.path ? "/" + frontmatter.to.path : window.location.pathname %>',
      visitor: true,
    },
  },
  "vuepress-plugin-nuggets-style-copy": {
    copyText: "复制代码",
    tip: {
      content: "复制成功!",
    },
  },
  "@vuepress/medium-zoom": {
    selector: ".theme-reco-content:not(a) img",
    options: {
      background: "#fff",
    },
  },
}
