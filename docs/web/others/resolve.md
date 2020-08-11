# resolve

var path = require("path") //引入 node 的 path 模块

```js
path.resolve("/foo/bar", "./baz"); // returns '/foo/bar/baz'
path.resolve("/foo/bar", "baz"); // returns '/foo/bar/baz'
path.resolve("/foo/bar", "/baz"); // returns '/baz'
path.resolve("/foo/bar", "../baz"); // returns '/foo/baz'
path.resolve("home", "/foo/bar", "../baz"); // returns '/foo/baz'
path.resolve("home", "./foo/bar", "../baz"); // returns '/home/foo/baz'
path.resolve("home", "foo/bar", "../baz"); // returns '/home/foo/baz'
```

从后向前，若字符以 / 开头，不会拼接到前面的路径(因为拼接到此已经是一个绝对路径)；若以 ../ 开头，拼接前面的路径，且不含最后一节路径；若以 ./ 开头 或者没有符号 则拼接前面路径；

> 需要注意的是：如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录。
