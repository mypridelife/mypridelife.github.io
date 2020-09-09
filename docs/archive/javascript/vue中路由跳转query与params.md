---
title: vue 中路由跳转 query 与 params
date: 2018-09-09
#sidebar: 'auto'
categories:
  - JavaScript
#keys:
#  - 'vue'
#publish: true
---

## params

- 只能使用命名的路由
- 地址栏不可见，请求类似 localhost:4396/user
- 在目标页面使用 this.\$route.params.id 来获取

**例：**

```javascript
router.push({
  name: "user",
  params: {
    id: 123,
  },
})
```

**需要注意的是，使用 params 传值的话，目标页面刷新后就会丢失 params 的值。如果要保留的话，可在 router.js 中配置目标页面的 path**
**例：**

```javascript
{
        path: 'user/:id',
        name: 'user',
        meta: {
          title: '参数'
        },
        component: () => import('@/views/argu.vue'),
}
```

## query

- 可使用命名或 path 的路由
- 地址栏不可见，请求类似 localhost:4396/user?id=3
- 在目标页面使用 this.\$route.query.id 来获取

**例：**

```javascript
router.push({
  name: "user",
  query: {
    id: 123,
  },
})
或
router.push({
  path: "/user",
  query: {
    id: 123,
  },
})
```
