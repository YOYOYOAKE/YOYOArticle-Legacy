---
title: Part 5 Java 字符串
createTime: 2025/04/22 14:43:41
permalink: /java/05/
---

## 1 String 类

查看源码，可以发现 String 类被`final`关键字修饰，因此 String 类不会被继承。

而字符串是以字符型数组的形式存储的，而这个数组也被`final`修饰，因此 String 类实现的对象无法被二次修改。

```java
public final class String implements java.io.Serializable, Comparable<String>, CharSequence {
    // ...
    private final char value[];
    // ...
}
```

同样，我们可以使用字面量来创建字符串，也可以从 String 类中实现。

```java
String str2 = "这是一个字符串";
String str1 = new String("这是一个字符串"); // IDEA 会建议你使用第一种方法
```

这两种方式有不小的区别，先暂时按下不表。

## 2 StringBuilder 类

由于字符串是不可变的，所以当遇到字符串的截取、拼接时，就需要产生一个新的 String。这显然会造成严重的性能问题，我们不可能每次都要在内存中产生一个新的 String。

所以 Java 设计了 StringBuffer 类和 StringBuilder 类来解决这个问题。二者几乎完全一致，只有一个区别：为了线程安全，StringBuffer 类中操作字符串的方法为同步方法。

因此，当在单线程环境下使用时，一般使用 StringBuilder。

实际开发中，StringBuilder 的使用频率也是远高于 StringBuffer，甚至可以这么说，StringBuilder 完全取代了 StringBuffer。

### 2.1 创建一个 StringBuilder

要使用 StringBuilder 类操作字符串，我们首先要将字符串转换为 StringBuilder。

```java
StringBuilder strb1 = new StringBuilder("这是一个直接实现的 StringBuilder");

String str = "这是一个 String 转化来的 StringBuilder";
StringBuilder strb2 = new StringBuilder(str);

System.out.println(strb1); // 这是一个直接实现的 StringBuilder
System.out.println(strb2); // 这是一个 String 转化来的 StringBuilder
```

### 2.2 拼接字符串

使用`StringBuilder.append()`方法来拼接字符串。

```java
StringBuilder strb = new StringBuilder("这是一个 StringBuilder");
String str = "，后边是待拼接的字符串";

strb.append(str);

System.out.println(strb); // 这是一个 StringBuilder，后边是待拼接的字符串
```

从这里我们也可以看出来 StringBuilder 的可变性，`.append()`方法会改变原 StringBuilder。

事实上，`.append()`方法可以拼接大部分基本数据类型、String，以及另一个 StringBuilder。

或者使用语法糖`+`:

```java
StringBuilder strb = new StringBuilder("这是一个 StringBuilder");
String str = "，后边是待拼接的字符串";
        
System.out.println(strb + str); // 这是一个 StringBuilder，后边是待拼接的字符串
System.out.println(strb); // 这是一个 StringBuilder
```

这种方法并不会改变原来的 StringBuilder。

### 2.3 判断字符串相等

无论是 String 还是 StringBuilder，其本质都是个对象。对于这种引用数据类型，直接使用`==`运算符比较的是其内存地址而不是本身。

于字符串而言，我们使用`String.contentEquals()`这个方法判断。

例如我们比较两个 StringBuilder 是否相等，需要先使用`StringBuilder.toString()`方法将其转换为字符串：

```java
StringBuilder strb = new StringBuilder("这是一个 StringBuilder");
String str = "，后边是待拼接的字符串";

StringBuilder str2 = new StringBuilder(strb + str);

strb.append(str);

System.out.println(strb.toString().contentEquals(str2)); // true
```

### 2.4 字符串逆序

```java
StringBuilder strb = new StringBuilder("这是一个 StringBuilder");
strb.reverse();
System.out.println(strb); // redliuBgnirtS 个一是这
```

### 2.5 字符串的插入与删减

我们可以在字符串的指定位置插入、删减、替换字符（或字符串）。

```java
StringBuilder strb = new StringBuilder("这是一个StringBuilder");

strb.delete(0, 4);
System.out.println(strb); // StringBuilder

strb.insert(0,"是");
System.out.println(strb); // 是StringBuilder

strb.replace(1, 14,"StringBuffer");
System.out.println(strb); // 是StringBuffer
```
