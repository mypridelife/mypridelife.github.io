# flutter 父子组件通信

完整代码

```java
class ParentState extends State<Parent> {
  String data = "父组件传递给子组件的值";

  void onChanged(val){
    setState(() {
      data = val;
    });
  }

  @override
  Widget build(BuildContext context) {
    ......
    //省略非关键代码
    new Child(data: data,callBack: (value)=>onChanged(value)),
  }
}

```

```java
class child extends StatefulWidget {
  childTwo({Key key, this.data, this.callBack}) : super(key: key);
  final callBack;
  String data;

  @override
  void initState() {
    data = widget.data;
    super.initState();
  }
  ......
  //省略非关键代码
  widget.callBack(data);
}
```

**父->子**

定义父组件变量 data，在子组件 Child 的构造方法中把 data 值传进去，子组件接收 data。

**父->子**

子组件接收 callBack 并调用 callBack 将 data 值传过去。
父组件定义 onChanged，绑定到 callBack 中，接收子组件传过来的 data 值。
