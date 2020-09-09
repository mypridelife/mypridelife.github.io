---
title: SpringBoot Controller接收参数的几种常用方式
date: 2018-09-09
#sidebar: 'auto'
categories:
  - Server
#tags:
# -
#keys:
# - ''
#publish: true
---

## 第一类：请求路径参数

- @PathVariable

获取路径参数。即*url/{id}*。

- @RequestParam

获取查询参数。即*url?name=我是渣渣辉*

### 例子

GET
http://localhost:8080/demo/1?name=我是渣渣辉
对应的 java 代码：

```java
@GetMapping("/demo/{id}")
public void demo(@PathVariable(name = "id") String id, @RequestParam(name = "name") String name) {
    System.out.println("id="+id);
    System.out.println("name="+name);
}
```

输出结果：
id=1
name=我是渣渣辉

## 第二类：Body 参数

'content-type' : application/json

```java
@PostMapping(path = "/demo")
public void demo1(@RequestBody Person person) {
    System.out.println(person.toString());
}
```

```java
@PostMapping(path = "/demo")
public void demo1(@RequestBody Map<String, String> person) {
    System.out.println(person.get("name"));
}
```

'content-type' : form-data

```java
@PostMapping(path = "/demo2")
public void demo2(Person person) {
    System.out.println(person.toString());
}
```

'content-type' :x-www-form-urlencoded

```
multipart/form-data与x-www-form-urlencoded的区别:
 multipart/form-data：可以上传文件或者键值对，最后都会转化为一条消息
 x-www-form-urlencoded：只能上传键值对，而且键值对都是通过&间隔分开的。
```

## 第三类：请求头参数以及 Cookie

```java
@GetMapping("/demo3")
public void demo3(@RequestHeader(name = "myHeader") String myHeader,
        @CookieValue(name = "myCookie") String myCookie) {
    System.out.println("myHeader=" + myHeader);
    System.out.println("myCookie=" + myCookie);
}
```

或者

```java
@GetMapping("/demo3")
public void demo3(HttpServletRequest request) {
    System.out.println(request.getHeader("myHeader"));
    for (Cookie cookie : request.getCookies()) {
        if ("myCookie".equals(cookie.getName())) {
            System.out.println(cookie.getValue());
        }
    }
}
```
