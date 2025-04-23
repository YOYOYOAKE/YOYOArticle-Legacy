---
title: Part 5 类的继承
createTime: 2025/04/23 14:42:09
permalink: /java/oop/05/
---

铺垫了好多，终于到继承了。

继承允许我们从一个已有的类中创造一个新的类。即子类继承父类。

子类除了拥有父类的全部成员变量和方法，还拥有自己的成员变量和方法。

## 1 继承的语法

使用`extends`关键字声明继承。

```java
class Base {
    
}

// 类 Upper 继承自类 Base
class Upper extends Base {
    
}
```

父类可以被多个子类继承。

```java
class Base {

}

class UpperA extends Base {

}

class UpperB extends Base {
    
}
```

子类也可以被继承。

```java
class Base {

}

class Upper extends Base {

}

class UpUpper extends Upper {

}
```

但是子类只能继承一个父类，不能同时继承两个父类。

## 2 `super`关键字

我们可以通过`super`关键字来引用当前类的父类。

### 2.1 子类的有参构造

子类是不继承父类的构造方法。在子类的有参构造方法中，必须使用`super`实现对父类的有参构造（如果父类有成员变量的话）。

```java
// 父类的有参构造为成员变量`a`赋值
class Base {
    private int a;

    public Base(int a) {
        this.a = a;
    }
}

// 子类继承父类的成员变量`a`
class Upper extends Base {
    // 子类自身有一个成员变量`b`
    private int b;
    
    // 子类的构造方法
    public Upper(int a, int b) {
        // 使用`super()`访问父类的有参构造方法，为父类的成员变量赋值
        super(a);
        // 为自己的成员变量赋值
        this.b =b;
    }
}
```
### 2.2 访问父类的成员变量和方法

```java
class Base {
    private int a;

    public Base(int a) {
        this.a = a;
    }

    public int getA() {
        return a;
    }
}

class Upper extends Base {
    private int b;

    public Upper(int a, int b) {
        super(a);
        this.b = b;
    }

    // 这里使用了`super`关键字访问父类的`getA()`方法
    public void getAB() {
        System.out.println(super.getA());
        System.out.println(b);
        return;
    }
}

public class Main {
    public static void main(String[] args) {
        Upper upper = new Upper(666,888);
        upper.getAB(); // 666 888
    }
}
```

## 3 `final`关键字

`final`关键字可用来修饰类、变量、方法。

被`final`修饰的类不能被继承。

被`final`修饰的方法不能被子类重写。

被`final`修饰的变量不能被再次修改。

但是被`final`修饰的类，其成员变量和成员方法不是 final 的。