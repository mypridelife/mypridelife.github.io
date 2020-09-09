---
title: memset 函数
date: 2018-09-09
#sidebar: 'auto'
categories:
  - Algorithm
#tags:
# -
#keys:
# - ''
#publish: true
---

---

memset 是计算机中 C/C++语言函数。
void \**memset(void *s, int ch, [size_t](http://baike.baidu.com/item/size_t) n);
函数解释：将 s 中当前位置后面的 n 个字节 （typedef unsigned int size_t ）用 ch 替换并返回 s 。
作用：在一段内存块中填充某个给定的值，它是对较大的[结构体](http://baike.baidu.com/item/%E7%BB%93%E6%9E%84%E4%BD%93)或[数组](http://baike.baidu.com/item/%E6%95%B0%E7%BB%84)进行清零操作的一种最快方法。

---

简单示例 1：
如下 demo 是可以的，能把数组中的元素值都设置成字符 1

```
#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    char a[5];
    memset(a,'1',5）;
    for(int i=0;i<5;i++)
        cout<<a[i]<<"";
    system("pause");
    return 0;
}
```

而，如下程序想把数组中的元素值设置成 1，却是不可行的

```
#include <iostream>
#include <cstring>
#include <windows.h>
using namespace std;
int main()
{
    int a[5];
    memset(a,1,20）;


                    //也等价于memset(a,1,sizeof(a));.
    for(int i=0;i<5;i++)
        cout<<a[i]<<"";
    system("pause");
    return 0;
}
```

问题是： 1.第一个程序为什么可以，而第二个不行？
因为第一个程序的数组 a 是字符型的，字符型占据内存大小是 1Byte，而 memset 函数也是以字节为单位进行赋值的，所以你输出没有问题。而第二个程序 a 是整型的，使用 memset 还是按字节赋值，这样赋值完以后，每个数组元素的值实际上是 0x01010101 即十进制的 16843009。
如果用 memset(a,1,20)，就是对 a 指向的内存的 20 个字节进行赋值，每个都用数 1 去填充，转为二进制后，1 就是 00000001，占一个字节。一个 int 元素是 4 字节，合一起是 0000 0001,0000 0001,0000 0001,0000 0001，转化成十六进制就是 0x01010101，就等于 16843009，就完成了对一个 int 元素的赋值了。

简单示例 2：

```
#include <string.h>
#include <stdio.h>
#include <memory.h>

int main(void)
{
    char buffer[]="Helloworld\n";
    printf("Buffer before memset:%s\n",buffer);
    memset(buffer,'*',strlen(buffer));
    printf("Buffer after memset:%s\n",buffer);
    return 0;
}
```

输出结果：
Buffer before memset:Helloworld
Buffer after memset:\***\*\*\*\*\*\***
