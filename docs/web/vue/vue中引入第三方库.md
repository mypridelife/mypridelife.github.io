# vue 项目中如何引入第三方库

#### 一、绝对路径直接引入，全局可用

主入口页面 index.html 中用 script 标签引入：

```javascript
<script src="./static/jquery-1.12.4.js" />
```

由于开启了 ESLint 检测，所以会报一个 warning[警告] ：'\$' is not defined 。需要加 /_ eslint-disable _/

#### 二、绝对路径直接引入，配置后，import 引入后再使用

还是先在主入口页面 index.html 中用 script 标签引入：

```javascript
<script src="./static/jquery-1.12.4.js" />
```

然后，在 webpack 中配置一个 externals
`externals: { 'jquery': 'jQuery' }`
这样，就可以在每一个组件中用 import 来引用这个 jquery 了。

```javascript
import $ from 'jquery'

export default {
    created() {
    console.log(\$)
    }
}
```

#### 三、webpack 中配置 alias，import 引入后再使用

只需要在 webpack 的配置文件中，在 resolve 中为 jQuery 添加一个 alias[别名] 。

`resolve: { extensions: ['.js', '.vue', '.json'], alias: { '@': resolve('src'), 'jquery': resolve('static/jquery-1.12.4.js') } }`

在任意组件中，通过 import 的方式来使用 jquery 了

#### 四、webpack 中配置 plugins，无需 import 全局可用

在第三种的基础上，如果我们增加一个 plugins 的配置，那么，我们在使用的时候，无需 `import $ from 'jquery'` 也可以

`resolve: { extensions: ['.js', '.vue', '.json'], alias: { '@': resolve('src'), 'jquery': resolve('static/jquery-1.12.4.js') } }, plugins: [ new webpack.ProvidePlugin({ $: 'jquery' }) ]`

在项目中，就可以直接使用 \$ 了。
