---
title: Part 3 Java 流程控制
createTime: 2025/04/20 16:20:52
permalink: /java/basic/03/
---

所有编程语言中都有流程控制，包括顺序、分支、循环。Java 在这一方面和 C/C++ 基本一致。

## 1 分支

### 1.1 if-else 分支

这个就不用讲了吧~

```java
if(条件1){
    // 条件1 为 true 时执行的代码
} else if (条件2) {
    // 条件2 为 true 时执行的代码
} else if (条件3) {
    // 条件3 为 true 时执行的代码
} else{
    // 以上条件均为 false 时执行的代码
}
```

if-else 可以嵌套使用。

```java
if(外侧条件) {
     // 外侧条件为 true 时执行的代码
    if(内侧条件) {
        // 内侧条件为 true 时执行的代码
    }
}
```

### 1.2 switch-case 分支

```java
switch(变量) {
    case 值1:
        // 可选值1匹配后执行的代码
        break;
    case 值2:
        // 可选值2匹配后执行的代码
        break;
    default:
        // 所有可选值都不匹配后执行的代码
}
```

case 关键字后的值的类型必须与变量类型一致，并且为常量或常量表达式，不能为变量。值必须是唯一，不能重复，否则编译会出错。

```java
switch(x) {
    case 1:
        // 当 x = 1 时执行
        break;
    case 3-1:
        // 当 x = 3 - 1 时执行
        break;
    default:
        // 所有可选值都不匹配后执行的代码
}
```

`break`关键字是可选的。如果没有`break`，则执行完该 case 后继续执行下一个 case；如果有，则跳出 switch 语句。

`default`关键字也是可选的。

## 2 循环

### 2.1 for 循环

```java
for(i = 0; i<=10; i++){  
// 循环体
}
```

除此之外，对于数组或集合，Java 有更方便的 for-each 语法：

```java
for(int number : numberList){  
    // 要执行的代码
}
```

该语法等效于

```java
for(int i = 0; i < numberList.length; i++){
    // 要执行的代码
}
```

for 循环也可以嵌套使用。

### 2.2 while 循环

结构为

```java
while(表达式) {
    // 要执行的代码
}
```

一旦表达式的值为真，循环体便会开始执行。循环一次后再次判断表达式是否为真。若在一次循环后表达式为假，则终止循环。

当不确定循环次数时，使用 while 循环是比 for 循环更好的选择。

### 2.3 do-while 循环

do-while 循环和 while 循环差不多，区别在于：do-while 循环是先执行一次循环，再判断表达式真假；while 循环是先判断表达式真假，再执行循环。

也就是说，do-while 循环至少会执行一次循环体。

```java
do{
    // 要执行的代码
} while (表达式);
```

## 3 其他

### 3.1 break

break 语句我们已经在 switch-case 语句中见到过了，它用于在执行完 case 中的代码后从 break 中跳出来。

break 语句还用于终止循环：

```java
int i = 1;
while (i <= 10) {
    if (i == 5) {
        i++;
        break;
    }
    System.out.println(i);
    i++;
} // 1 2 3 4
```

### 3.2 continue

continue 语句用于跳过满足条件的循环，而非终止。

```java
int i = 1;
while (i <= 10) {
    if (i == 5) {
        i++;
        continue;
    }
    System.out.println(i);
    i++;
} // 1 2 3 4 6 7 8 9 10
```