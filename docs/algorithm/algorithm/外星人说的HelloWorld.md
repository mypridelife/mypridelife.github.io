# 外星人说的 HelloWorld

```c
 #include <iostream>

 using namespace std;

 void alien_say(char * p)
 {
     while (putchar(*(p += *(p + 1) - *p)));
 }

 int main()
 {
     return alien_say("BETHO! Altec oh liryom(a loadjudas!) dowd."), 0;
 }
```

代码如上，输出结果就是 Hello world!
