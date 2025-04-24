---
title: Part 6 抽象方法与抽象类
createTime: 2025/04/24 18:20:22
permalink: /java/oop/06/
---

使用`abstract`声明抽象方法和抽象类。

## 1 抽象方法

抽象方法总在抽象类中声明，也就是说如果一个类有抽象方法的话，这个类就必须是抽象的。

当一个类继承了抽象类后，就必须重写抽象方法。

## 2 抽象类

抽象类的命名一般以`Abstract`开头。

抽象类不能被实例化。

```java
abstract class AbstractDemo {
    // 一些代码
}

public class Main {
    public static void main(String[] args) {
        AbstractDemo demo = new AbstractDemo(); // 编译不通过，'AbstractDemo' 为 abstract；无法实例化
    }
}
```

抽象类只能被继承，继承抽象类的子类可以被实例化。

```java
class Demo extends AbstractDemo {
    // 一些代码
}

public class Main {
    public static void main(String[] args) {
        Demo demo = new Demo(); // 能被顺利实例化
    }
}
```

抽象类中可以定义抽象方法，也可以定义普通方法。抽象类中的抽象方法必须在子类中得到实现。

```java
abstract class AbstractDemo {
    // 抽象方法
    abstract void func1();
    
    // 普通方法
    void func2(){
        System.out.println("抽象类中的普通方法");
    }
    
}

class Demo extends AbstractDemo {
    // 实现抽象类的抽象方法
    @Override
    void func1() {
        System.out.println("在子类中实现抽象类的抽象方法");
    }
}
```


