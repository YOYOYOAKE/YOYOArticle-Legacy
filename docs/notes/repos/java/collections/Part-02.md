---
title: Part 2 列表
createTime: 2025/05/07 15:37:53
permalink: /java/collection/02/
---

ArrayList 和 LinkedList 的使用方法几乎一致。主要区别在于 ArrayList 基于数组实现，而 LinkedList 基于链表实现。

## 1 ArrayList 基本使用

在使用 ArrayList 之前，需要先导入：

```java
import java.util.ArrayList;
```

### 1.1 创建一个 ArrayList

ArrayList 支持泛型，因此可以在`< >`中指定 ArrayList 存储的数据类型。

```java
ArrayList<String> stringList = new ArrayList<String>();
```

或者使用简化写法：

```java
ArrayList<String> stringList = new ArrayList<>();
```

### 1.2 添加元素

使用`.add()`方法向 ArrayList 中添加元素。

```java
stringList.add("Hello");
```

向 ArrayList 添加元素时，会按顺序添加进 ArrayList 的末尾。

此外，`.add()`方法还可以接收两个参数，将元素插入到指定位置。

```java
// 将 World 字符串添加到索引 1
stringList.add(1, "World");
```

### 1.3 访问元素

使用`.get()`方法访问指定位置的元素。

```java
System.out.println(stringList.get(0)); // Hello
System.out.println(stringList.get(1)); // World
```

### 1.4 修改元素

使用`.set()`方法修改指定位置的元素。

```java
stringList.set(0, "Java");
System.out.println(stringList.get(0)); // Java
```

### 1.5 删除元素

使用`.remove()`方法删除指定位置的元素。

```java
System.out.println(stringList.size()); // 2
stringList.remove(1);
System.out.println(stringList.size()); // 1
```

### 1.6 查找元素

使用`.indexOf()`方法查找一个元素的位置。

```java

stringList.add("Hello");
stringList.add("Java");
stringList.add("World");
ystem.out.println(stringList.indexOf("Java")); // 1
```

## 2 ArrayList 源码解析

待填坑……

## 3 LinkedList 源码解析

待填坑……

## 4 ArrayList 和 LinkedList 的区别

待填坑……