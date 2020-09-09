module.exports = {
  type: "blog",
  noFoundPageByTencent: false,
  smoothScroll: true,
  sidebar: "auto",
  lastUpdated: "lastUpdated",
  repo: "mypridelife/mypridelife.github.io",
  editLinkText: "Edit on GitHub~",
  // 作者
  author: "gyh",
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  nav: [
    { text: "Home", link: "/", icon: "reco-home" },
    { text: "Timeline", link: "/timeline/", icon: "reco-date" },
    { text: "About", link: "/about/", icon: "reco-message" },
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
