module.exports = {
  type: "blog",
  noFoundPageByTencent: false,
  smoothScroll: true,
  sidebar: "auto",
  lastUpdated: "LastUpdated",
  // 可选，默认为 master
  docsBranch: "reco-dev",
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
