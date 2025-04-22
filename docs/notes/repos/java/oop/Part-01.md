---
title: Part 1 类与对象
createTime: 2025/04/22 19:03:29
permalink: /java/oop/01/
---

作为面向对象编程的代表语言，Java 几乎将“一切皆对象”的设计思想做到了极致。你可以在几乎所有地方看到 Java 类。

## 1 面向对象

面向对象思想中最重要的概念是类与对象。

类是一种抽象，你可以把任何具有相似性的物体抽象为类。

例如书架上的书，它们都具有书名、作者、编号等信息，因此我们可以将这些书抽象为`Book`类，并在类中定义它们的属性。

```
class Book {
    String name;
    String author;
    int id;
}
```

这样我们就能以统一的结构管理书的属性。

除了属性外，对象还有方法。例如，当打开书的时候，书中的知识就会出现：

```
Book {
    String name;
    String author;
    int id;
    
    String open(){
        return "书中的知识";
    };
}
```

如果说类描述的是一类事物的共性，那么对象描述的就是一个具体的事物。

我们用`new`从类中实现一个对象。

```
Book threebody = new Book("三体", "刘慈欣", 666);
```

## 2 Java 项目结构

IDEA 创建的项目会有两个文件夹`out`和`src`。其中`out`文件夹用于输出编译结果，一般不用关心。而所有的 Java 代码都写在`src`文件夹中。

在什么都不做的情况下，IDEA 创建的项目应该是如下结构：

::: file-tree
- out 编译输出
- src 源代码
  - Main.java （即使`.java`后缀名不会在 IDEA 中显示）
  - ...
:::

其中`Main`就是 Java 项目的入口类，你会在其中看到一个`Main`函数。

```java
public class Main {
    public static void main(String[] args) {
        // 一些代码
    }
}
```

一般而言，一个`.java`文件中只定义一个类。

## 3 Java 类

在刚才，我们使用伪代码定义了一个`Book`类。接下来我们使用真正的 Java 代码定义：

在`src`文件夹下新建一个名为`Book`的 Java 类，然后编写如下代码：

```java
public class Book {
    private String name;
    private String author;
    int id;

    public Book(String name, String author, int id){
    }

    public String open(){
        return "书中的知识";
    };
}
```

其中的`name` `author` `id`称为成员变量，`Book()` `open()`称为方法，`private` `public`称为访问修饰符。

值得一提的是，`Book()`这个方法称为构造方法。每个类必须拥有一个构造方法。

## 4 对象

我们用`new`从类中实现一个对象。注意，这段代码应该写在`Book`类之外、需要使用这个对象的地方。

例如写在`Main`方法中：

```java
public class Main {
    public static void main(String[] args) {
        Book threebody = new Book("三体", "刘慈欣", 666);
    }
}
```