# tailwind

1.安装

```
npm install tailwindcss
```

2.配置 main.js

```
import 'tailwindcss/tailwind.css'
```

3.创建 Tailwind 配置文件

```
npx tailwind init
```

4.配置 vue.config.js 文件

```js
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")]
      }
    }
  }
};
```
