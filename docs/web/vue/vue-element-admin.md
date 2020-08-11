# vue-admin 使用

**首先，一句话：**

物有本末，事有始终，追根溯源，心无旁骛。

## 1. 以添加页面讲解所谓物有本末

> 添加一个页面，vue 中是在 views 中创建，在 router 中注册，即可。二者顺序无关紧要，成功访问的前提是你要完成这两个步骤。
>
> 我们习惯于先在脑海中建立一个框架，再去画页面，画页面时也是先在脑海中建立一个框架，再去添加页面元素。这都是一个从无到有的过程。
>
> 首先，我们要知道我们要画哪几个页面，其次，我们在 router 中注册，然后，我们去 views 中创建。

### 1.1 找到 src 下的 router.js，代码位置可参考已有页面对应的位置，代码示例：

```
  {
    path: '/sys',
    component: Layout,
    redirect: '/sys/user', //如果用户地址栏输入地址/sys则重定向到/sys/user
    alwaysShow: true,
    meta: {
      title: '系统设置',
      icon: 'setting',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: '/sys/user',
        component: () => import('@/views/sys/user/index.vue'),
        name: 'sysUser',
        meta: {
          title: '用户管理',
          icon: 'user',
          roles: ['admin']
        }
      },
      {
        path: '/sys/dept',
        component: () => import('@/views/sys/dept/index.vue'),
        name: 'sysDept',
        meta: {
          icon: 'dept',
          title: '部门管理'

        }
      },
      {
        path: '/sys/role',
        component: () => import('@/views/sys/role/index.vue'),
        name: 'sysRole',
        meta: {
          icon: 'role',
          title: '角色管理'

        }
      }
    ]
  },

```

路由配置项如下：

```
{
  path: '/permission',
  component: Layout,
  redirect: '/permission/index', //重定向地址，在面包屑中点击会重定向去的地址
  hidden: true, // 不在侧边栏线上
  alwaysShow: true, //一直显示根路由
  meta: { roles: ['admin','editor'] }, //你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
  children: [{
    path: 'index',
    component: ()=>import('permission/index'),
    name: 'permission',
    meta: {
      title: 'permission',
      icon: 'lock', //图标
      role: ['admin','editor'], //或者你可以给每一个子路由设置自己的权限
      noCache: true // 不会被 <keep-alive> 缓存
    }
  }]
}
```

### 1.2 新建你所添加的页面在相应的位置

如上示例，你需要在 views 中新建 sys/role/index.vue、sys/dept/index.vue、sys/user/index.vue 三个 vue 文件，并写入相关内容即可。

## 2. 以书写 api 来讲解所谓追根溯源

> 我们开发是使用前后端分离的方式，所以前端需要调用后端的接口来完成通信。
>
> 书写 api 很简单，发起 ajax 请求，传过去参数，接收到请求，这就完成了一次通信。
>
> vue-admin 中已经封装好了 axios 在 src/utils/request.js 中，我们直接使用即可。

**2.1 找到 src 下的 api 文件夹**

创建一个 js 文件，如下示例：

```
//login.js
import request from '@/utils/request' //引入封装好的axios请求

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/sys/user/info',
    method: 'get',
    params: { token }
  })
}

```

export 出去一个方法即可，方法内容参考上述示例

**几个重点**

- request.js 中有一个 baseURL 设置的是全局的接口前缀，你不需要设置它，你只需要在 config 文件夹中的 dev.env.js 文件和其他几个 js 文件中，设置

```
BASE_API: '"http://yapi.hzhengji.cn/mock/31/"' //使用对应的mock接口地址
```

- 登录时出现的问题汇总：

  - 登录失败：可能是接口地址不正确，或者是前缀不正确。首先，去查看 BASE_API 是否设置正确，其次，去查看接口文件（如上例 login.js）的 url 是否设置正确，最后，查看参数字段是否正确。

  - 获取用户信息失败：如果上述的几个过程都排查过了，却仍然登录不成功，比如报错 roles must be a non-null array，那是因为获取用户信息失败。 在 src 文件夹下，有一个 permission.js 文件，里面有个 router.beforeEach 钩子，其中设置了每次页面跳转之前调用判断用户信息，里面调用了一个 action，GetUserInfo。在 GetUserInfo 中设置了如果没有权限，则报错。

    解决办法：mock 一个接口来获取用户信息的，具体接口内容，参考以往项目的/user/info 接口。

## 3. 持续交付，切勿过多地停留

> 刚才讲个两个案例，分别举例说明如何开展工作以及可能遇到的问题。这些问题比较常见，当然还有很多不可预见的问题，接下来讲我们会讲如何定位问题和如何解决

**首先，如何开展工作：**

- 抓重点，略过无关紧要的东西，不要关心具体的细节的东西，先把握全局，知道每个部分如何协同工作的。像带兵打仗一样，不需要知道每个士兵的能力，只需要知道这个营这个团的能力。

- 追溯源头，先想要做什么，再想实现的路线，然后去实现。

- 最后学会问问题。

### 3.1 抓重点

看一个框架先看整体的结构和思路，然后逐步拆解消化。当然这个拆解消化的过程是你逐步完善一个项目的过程，而不是你先学会所有的，再去完善一个项目。

也就是说，从实战中去学习体会这个框架的一些思路。

很简单的一个例子，即使你不知道 x+y=z，你也可以写出来 x+y+x+y=z+z。模仿是我们的天性，你可以不知道 axios 的封装内容，但是你可以根据别人写过的如何调用后台 api 接口的方法去写你自己的 api 方法。

### 3.2 追溯源头

学会追溯源头而不是一筹莫展。

举个实战中的例子：**实现登录功能**（具体的原理思路手摸手已经讲得很清楚[https://juejin.im/post/59097cd7a22b9d0065fb61d2](https://juejin.im/post/59097cd7a22b9d0065fb61d2)，这里不再累述，只讲如何实现。）

你下载了 vue-admin，要把接口改成我们自己 mock 的，于是你需要（上面有过介绍，再来过一遍流程）：

（1）找到 BASE_API，改为我们自己的 mock 地址。

（2）找到 login.js，把 login 的 url 改为自己项目的，把 getuserinfo 也改成自己项目的。

那么要说一下怎么知道是这两个文件的。我们要改登录的接口，就要先看登录的逻辑，找到登录的页面。

（1）找到登录页面：如何找，如果这个项目比较大，不容易找，那么按照下面的步骤。

首先，启动项目，找到项目 url，（[http://localhost:9527/#/login?redirect=%2Fdashboard](http://localhost:9527/#/login?redirect=%2Fdashboard)），发现路 径是 login。

其次，去 router 中搜索这个 path，发现 component: () => import('@/views/login/index')

最后，找到 login 文件夹下的 index。

（2）打开登录页面，找到登录的方法，handleLogin，查看一下逻辑。

首先，验证登录表单，如果验证不通过，则 console.log('error submit!!')。可以得知，如果你控制台打印的是 error submit，那么问题就知道处在哪了。

其次，验证通过后，调用 this.\$store.dispatch('LoginByUsername', this.loginForm)，这是一个 vuex 的 action，如果你不知道，没关系，接着向下找。进入 store 的 modules 文件夹中，找到 user.js，打开。全局搜索一下 LoginByUsername，发现在一个 action 里面，这就是登录页面的登录按钮所执行的方法。

然后，我们看一下 LoginByUsername，逻辑大致是 LoginByUsername 这个 action 调用 LoginByUsername 这个同名的 api（这个 api 是在最上面引入的 import { loginByUsername, logout, getUserInfo } from '@/api/login'），传给服务器账号密码，服务器验证后传过来 token，然后把 token 存入 vuex 的 state 和 cookie 中。至此，登录就完成了。

（3）什么？有问题，看看控制台是否报接口地址的错误，如果是，看看你的 BASE_API 是否和控制台打印的错误一致。接口没问题却还是没有跳转？报的错是 roles must be a non-null array， 那就可能是前面说过的问题：在 src 文件夹下，有一个 permission.js 文件，里面的 router.beforeEach 的问题

经过如上的修改之后，你的登录功能应该就 ok 了，其他不可预见的问题自行排查。

### 3.3 学会问问题。

去问问题之前：

（1）明白你想问什么

（2）已经试过解决但没见成效

（3）话不在多

（4）去除无意义的提问

**其次，定位问题和如何解决：**

分享几个比较实用的技巧或者说是经验。

- 照葫芦画瓢页面也没有出现预期的效果

  这时，你需要从几个方面来排查

  - 是否报错，报的错是什么，能否在百度的第一页找到。

    首先，如果没有报错，很大可能是因为你的瓢不是比着画的，而是装逼闭着眼睛画的。

    其次，如果报的错在控制台显示，尝试根据提示信息去排查。排查的方法有两种，一是报的文件错误，vue 甚至都提示了你哪一行或者是哪个方法错了，一看就是你的语法或者是用法错误；二是 vue 报的错误 一般可以通过百度解决。这些一般也是比较容易解决的。如果报的错是弹窗提示的错误，这一般是框架里面某个地方设置的提示错误，你可以根据提示信息进去全局搜索，找到是哪个地方因为什么逻辑才会报的错，定位问题从而解决。

    最后，绝大多数你遇到的问题其实都可以在百度找到，关键在于你的百度方法是否正确。

    如果这些步骤你都没有经历过，就坐在那里一筹莫展，控制台的问题就是小事了，你的问题才是大事。

- 自己尝试添加一些新的功能

  如果没有出现预期的效果，那么问题很有可能是你的打开方式不对。是否按照官方的指南走的，是否自以为是自己加了一些不必要的代码（很多时候问题解决完总有人会说我以为这样可以）。

- 定位问题的关键在于不被其他东西干扰

  你要知道自己将要解决的问题是什么，而不是过分关心一些不相干的东西，比如你要注册一个路由，那么你就不要发愁 axios 是怎么封装的，自己完全不懂。这完全没有关系好吗，你不懂的东西不多了去了你还不懂 cpu 怎么造的呢你玩什么电脑啊。

  明确自己的问题，顺着逻辑一步步走，就像刚才梳理登录的过程找到登录的 api 一样。
