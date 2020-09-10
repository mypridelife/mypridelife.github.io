module.exports = {
  type: "blog",
  noFoundPageByTencent: false,
  smoothScroll: true,
  sidebar: "auto",
  lastUpdated: "LastUpdated",
  // 可选，默认为 master
  docsBranch: "reco-dev",
  // 如果你的文档不在仓库的根部
  docsDir: "docs",
  repo: "mypridelife/mypridelife.github.io",
  editLinks: true,
  editLinkText: "Edit on GitHub~",
  // 作者
  author: "gyh",
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  logo: "/logo.svg",
  authorAvatar: "/avatar.png",
  nav: [
    { text: "Home", link: "/", icon: "reco-home" },
    { text: "Timeline", link: "/timeline/", icon: "reco-date" },
    { text: "About", link: "/about/", icon: "reco-message" },
    {
      text: "JavaScript高级程序设计第三版",
      link: "https://mypridelife.github.io/Professional-JavaScript-for-Web-Developers",
      target: "_blank",
      icon: "reco-document",
    },
  ],
  // 博客配置
  blogConfig: {
    category: {
      location: 2,
      text: "Category",
    },
    tag: {
      location: 3,
      text: "Tag",
    },
  },
}
