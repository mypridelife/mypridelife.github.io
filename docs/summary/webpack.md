---
title: 技术栈总结-webpack
date: 2021-01-16
#sidebar: 'auto'
categories:
  - Summary
tags:
  - vue
#keys:
#  - 'vue'
#publish: true
---

## webpack

### webpack: hash/chunkhash/contenthash

**hash**是跟整个项目的构建相关，构建生成的文件 hash 值都是一样的，所以 hash 计算是跟整个项目的构建相关，同一次构建过程中生成的 hash 都是一样的，只要项目里有文件更改，整个项目构建的 hash 值都会更改。
**chunkhash**和 hash 不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的 hash 值。
**contenthash**表示由文件内容产生的 hash 值，内容不同产生的 contenthash 值也不一样。在项目中，通常做法是把项目中 css 都抽离出对应的 css 文件来加以引用。

<details>
<summary>参考配置</summary>

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  // entry: "./src/index.js",
  entry: {
    index: './src/index.js',
    login: './src/login.js',
  },
  output: {
    path: path.resolve(\__dirname, './dist'),
    //js 模块，咱们就是 chunkhash
    filename: '[name].js',
    // filename: "[name].js"
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8081,
    contentBase: './dist',
    open: true,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9092',
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        // use: "url-loader",
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].png',
            outputPath: 'images/',
            limit: 2048,
          },
        },
      },
      {
        test: /\.(woff2|woff)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.less\$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: '注册',
      template: './src/index.html',
      inject: true,
      chunks: ['login'],
      filename: 'login.html',
    }),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    // filename: "[name]_[contenthash:8].css"
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  // watch: true, //false
  // watchOptions: {
  // //默认为空，不监听的文件或者目录，支持正则
  // ignored: /node_modules/,
  // //监听到文件变化后，等 300ms 再去执行，默认 300ms,
  // aggregateTimeout: 300,
  // //判断文件是否发生变化是通过不停的询问系统指定文件有没有变化，默认每秒问 1 次
  // poll: 1000//ms
  // }
}
```

</details>
