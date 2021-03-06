---
title: h5 与原生 app 交互的原理
date: 2018-09-09
#sidebar: 'auto'
categories:
  - Others
#tags:
#  - css
#keys:
#  - 'vue'
#publish: true
---

现在移动端 web 应用，很多时候都需要与原生 app 进行交互、沟通（运行在 webview 中），比如微信的 jssdk，通过 window.wx 对象调用一些原生 app 的功能。所以，这次就来捋一捋 h5 与原生 app 交互的原理。

h5 与原生 app 的交互，本质上说，就是两种调用：

app 调用 h5 的代码

h5 调用 app 的代码

1. app 调用 h5 的代码

因为 app 是宿主，可以直接访问 h5，所以这种调用比较简单，就是在 h5 中曝露一些全局对象（包括方法），然后在原生 app 中调用这些对象。

![img](./images/jsbridge1.png)

javascript

```javascript
window.sdk = {
    double = value => value _ 2,
    triple = value => value _ 3,
};
```

android

```java
webview.evaluateJavascript('window.sdk.double(10)', new ValueCallback<String>() {
  @Override
  public void onReceiveValue(String s) {
    // 20
  }
});
```

ios

```c
NSString *func = @"window.sdk.double(10)";
NSString *str = [webview stringByEvaluatingJavaScriptFromString:func]; // 20
```

2. h5 调用 app 的代码

因为 h5 不能直接访问宿主 app，所以这种调用就相对复杂一点。

这种调用常用有两种方式：

由 app 向 h5 注入一个全局 js 对象，然后在 h5 直接访问这个对象

由 h5 发起一个自定义协议请求，app 拦截这个请求后，再由 app 调用 h5 中的回调函数

2.1 由 app 向 h5 注入一个全局 js 对象

这种方式沟通机制简单，比较好理解，并且对于 h5 来说，没有新的东西，所以是比较推荐的一种方式。但这种方式可能存在安全隐患，详细查看 你不知道的 Android WebView 使用漏洞。

![img](./images/jsbridge2.png)

android

```java
webview.addJavascriptInterface(new Object() {
  @JavascriptInterface
  public int double(value) {
    return value * 2;
  }

  @JavascriptInterface
  public int triple(value) {
    return value * 3;
  }
}, "appSdk");
```

ios

```c
@interface AppSdk : NSObject
{}
- (int) double:(int)value;
- (int) triple:(int)value;
@end

@implementation AppSdk
- (int) double:(int)value {
  return value * 2;
}
- (int) triple:(int)value {
  return value * 3;
}
@end

JSContext *context=[webview valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];

AppSdk *appSdk = [AppSdk new];

context[@"appSdk"] = appSdk;
```

javascript

```javascript
window.appSdk.double(10) // 20
```

2.2 由 h5 发起一个自定义协议请求
这种方式要稍复杂一点，因为需要自定义协议，这对很多前端开发者来说是比较新的东西。所以一般不推荐这种方式，可以作为第一种方式的补充。

大致需要以下几个步骤：

由 app 自定义协议，比如 sdk://action?params
在 h5 定义好回调函数，比如 window.bridge = {getDouble: value => {}, getTriple: value => {}}
由 h5 发起一个自定义协议请求，比如 location.href = 'sdk://double?value=10'
app 拦截这个请求后，进行相应的操作，获取返回值
由 app 调用 h5 中的回调函数，比如 window.bridge.getDouble(20);

![img](./images/jsbridge3.png)

javascript

```javascript
window.bridge = {
  getDouble: (value) => {
    // 20
  },
  getTriple: (value) => {
    // more
  },
}

location.href = "sdk://double?value=10"
```

android

```java
webview.setWebViewClient(new WebViewClient() {
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        // 判断如果 url 是 sdk:// 打头的就拦截掉
        // 然后从 url sdk://action?params 中取出 action 与params

        Uri uri = Uri.parse(url);
        if ( uri.getScheme().equals("sdk")) {

            // 比如 action = double, params = value=10
            webview.evaluateJavascript('window.bridge.getDouble(20)');

            return true;
        }
        return super.shouldOverrideUrlLoading(view, url);
    }
});
```

ios

```c
- (BOOL)webview:(UIWebView *)webview shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType {
  // 判断如果 url 是 sdk:// 打头的就拦截掉
  // 然后从 url sdk://action?params 中取出 action 与params

  NSString *urlStr = request.URL.absoluteString;

  if ([urlStr hasPrefix:@"sdk://"]) {

    // 比如 action = double, params = value=10
    NSString *func = @"window.bridge.getDouble(20)";
    [webview stringByEvaluatingJavaScriptFromString:func];

    return NO;
  }

  return YES;
}
```
