---
title: Part 2 变量
createTime: 2025/04/23 08:51:39
permalink: /java/oop/02/
---

## 1 成员变量

在类内部、但在方法外声明的变量称为成员变量。成员变量只能通过类的实例（对象）来访问。

```java
// 定义一个 Demo 类，其中有一个成员变量`aSpectialNumber`。
public class Demo {
    int aSpectialNumber = 666;
}

// 在 Main 类的 Main 方法中尝试使用
public class Main {
    public static void main(String[] args) {
        // 尝试直接访问
        System.out.println(Demo.aSpectialNumber); // 编译不通过，直接报错

        // 将 Demo 类实例化后访问
        Demo demo = new Demo();
        System.out.println(demo.aSpectialNumber); // 66
    }
}
```

当一个类被实例化为对象后，每个成员变量的值随之确定。成员变量在对象创建时创建，在对象销毁时销毁。

成员变量可被访问修饰符修饰。

成员变量对于类中的方法、构造方法、代码块是可见的。一般情况下将成员变量设为私有，而使用`Getter()`方法和`Setter()`方法对外暴露这些成员变量。

若没有为成员变量赋值，则其会被初始化为对应数据类型的默认值。

## 2 局部变量

写在方法内部的变量为局部变量。局部变量只对方法内部可见，其他方法不可访问。

```java
// 还是声明一个 Demo 类
public class Demo {
    // 在一个方法中声明两个成员变量`a` `b`
    int aSpectialMethod(){
        int a = 10;
        int b = 20;
        return a + b;
    };
    
    // 在另一个方法中访问`a` `b`
    void printSpectialNumber(){
        System.out.println(a);
        System.out.println(b);
    }
}

// 在 Main 中访问`printSpectialNumber()`方法
public class Main {
    public static void main(String[] args) {
        Demo demo = new Demo();
        demo.printSpectialNumber(); // 编译不通过，找不到符号`a`和`b`
    }
}
```

局部变量在方法、构造方法、代码块被执行的时候创建，在方法、构造方法、代码块执行完成后销毁。

局部方法不能用访问修饰符修饰。

局部变量没有默认值，必须在被初始化后才能使用。

## 3 常量

常量是不可变的变量（？），用`final`关键字修饰。

常量一旦被声明就不可被再次赋值。

```java
public class Main {
    public static void main(String[] args) {
        final double CONSTANT = 3.1415926;
        CONSTANT = 2.71828; // 编译不通过，无法为最终变量CONSTANT分配值
    }
}
```

常量通常用全大写字母命名。

## 4 静态变量

我们在[成员变量](#_1-成员变量)中提到，成员变量只能通过类的实例（对象）来访问。

还有一类变量能直接通过类来访问，而不用实例化。这类变量用`static`关键字修饰，被称为静态变量。

```java
// 还是在 Demo 类中定义一个变量`aSpectialNumber`，但是被`static`关键字修饰。
public class Demo {
    static int aSpectialNumber = 666;
}

// 在 Main 中就可以正常访问这个变量
public class Main {
    public static void main(String[] args) {
        System.out.println(Demo.aSpectialNumber); // 666
    }
}
```

静态变量通常用于工具类中，确定某些重要的常数。如`Math.PI` `Math.E`：

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.PI); // 3.141592653589793
        System.out.println(Math.E); // 2.718281828459045
    }
}
```