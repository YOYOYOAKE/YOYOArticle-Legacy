---
title: Part 2 Java 运算符
createTime: 2025/04/20 15:57:06
permalink: /java/02/
---

Java 运算符可分为六类：算术运算符、关系运算符、位运算符、逻辑运算符、赋值运算符、三元运算符。

## 1 算术运算符

### 1.1 加、减、乘、除、模

与 C/C++ 相同。

需要注意的是，当除法运算中只有整数参与时，两数之商为整数而非浮点数。当其中有浮点数参与运算时，所得结果才为浮点数。

```java
int a = 10;
int b = 5;

System.out.println(a + b);  // 15
System.out.println(a - b);  // 5
System.out.println(a * b);  // 50
System.out.println(a / b);  // 2
System.out.println(a % b);  // 0

b = 3;
System.out.println(a / b);  // 3
System.out.println(a % b);  // 1

double c = 4.6;
System.out.println(a / c); // 2.173913043478261
System.out.println(a % c); // 0.8000000000000007
```

当浮点数除以 0 时，所得结果为 Infinity 或 NaN。

```java
System.out.println(10.0 / 0.0); // Infinity
System.out.println(0.0 / 0.0); // NaN
```

当整数除以 0 时，会抛出异常。因此在进行整数除法时，需要判断除数是否为 0。

### 1.2 自增、自减

同 C/C++ 。

```java
int x = 10;
System.out.println(x++);  // 10 先打印 x 再自增，执行后 x 为 11
System.out.println(++x);  // 12 先自增，此时 x 为 12，再打印 x
System.out.println(x--);  // 12
System.out.println(--x);  // 10
```

## 2 关系运算符

同 C/C++。

```java
int a = 10, b = 20;
System.out.println(a == b); // false
System.out.println(a != b); // true
System.out.println(a > b); // false
System.out.println(a < b); // true
System.out.println(a >= b); // false
System.out.println(a <= b); // true
```

## 3 位运算符

待填坑……

## 4 逻辑运算符

同 C/C++。

```java
int a = 10;
int b = 5;
int c = 20;
System.out.println(a < b && a < c); // false && true = false

System.out.println(a > b || a < c); // true || true = true

System.out.println(!(a > b)); // !true = false
```

Java 中还有单逻辑与运算符（&）和单逻辑或运算符（|），但是很少用。

因为不管第一个条件为 true 还是 false，依然会检查第二个。

## 5 赋值运算符

这个还用说吗？

## 6 三元运算符

同 C/C++。

三元运算符是一个简单的分支控制。当表达式为真时，返回第一个值；当表达式为假时，返回第二个值。

合理运用三元运算符可以简化代码，使其变得优雅易读。但是不要嵌套使用！

```java
int a = 2;
int b = 5;
int min = (a < b) ? a : b;
System.out.println(min);
```

