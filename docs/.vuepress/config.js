const themeConfig = require('./config/theme/index.js')
const pluginsConf = require('./config/plugins/index')

module.exports = {
  title: "Gyh's blog",
  description: '',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    ['meta', { name: 'robots', content: 'all' }],
    ['meta', { name: 'author', content: 'Gyh' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'gyh,guoyiheng,blog,前端,vuepress-blog',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it'))
      md.use(require('markdown-it-mark'))
    },
  },
  theme: 'reco',
  themeConfig: themeConfig,
  plugins: pluginsConf,
}
