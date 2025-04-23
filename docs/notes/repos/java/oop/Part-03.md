---
title: Part 3 方法
createTime: 2025/04/23 09:24:07
permalink: /java/oop/03/
---

## 1 实例方法

类中最普通的方法就是实例方法。

```java
public class Demo {
    // 一个非常简单的实例方法
    int add(int a, int b){
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        // 将类实例化后才能调用实例方法
        Demo demo = new Demo();
        int res = demo.add(10, 20);
        System.out.println(res); // 66
    }
}
```

## 2 Getter 和 Setter

Getter 和 Setter 是一类特殊的实例方法。

在[成员变量](/java/oop/02/#_1-成员变量)中提到，为了数据安全、不被随意篡改，一般情况下将成员变量设为私有，而使用Getter和Setter对外暴露这些成员变量。

被`private`关键字修饰的变量（方法）只能在类的内部被访问（私有），被`public`关键字修饰的变量（方法）在任何地方都可以被访问。

```java
public class Demo {
    // 私有成员变量
    private int number;

    // Getter
    public int getNumber() {
        return number;
    }

    // Setter
    public void setNumber(int number) {
        this.number = number; // 这里的 this 指代当前实例，先按下不表
    }
}

public class Main {
    public static void main(String[] args) {
        Demo demo = new Demo();

        // 直接访问私有成员变量
        System.out.println(demo.number); // 编译不通过，number 在 Demo 中是 private 访问控制

        // 使用 Getter 访问
        System.out.println(demo.getNumber()); // 666

        // 使用 Setter 修改值
        demo.setNumber(888);
        System.out.println(demo.getNumber()); // 888
    }
}

```

## 3 构造方法

构造方法是一种特殊的方法。当一个类被实例化时，构造方法被调用并返回一个对象。只有在构造方法被调用的时候，对象才会被分配内存空间。

每次使用`new`关键字创建对象的时候，构造方法至少会被调用一次。

构造方法的名字必须与类名相同，且没有返回值（包括`void`）。

```java
public class Demo {
    public Demo(){
        System.out.println("构造方法被调用");
    }
}

public class Main {
    public static void main(String[] args) {
        Demo demo = new Demo(); // 构造方法被调用
    }
}
```

和普通方法一样，构造方法也可以传入参数。

### 3.1 无参构造方法

当使用`new`关键字创建对象时，如果没有传入参数，则会调用无参构造方法，也被称为默认构造方法。

通常情况下，无参构造方法是可以缺省不写的。开发者并不需要显式的声明无参构造方法，编译器会自动生成。

如果类中有成员变量，那么无参构造方法生成的对象中，成员变量都为对应数据类型的默认值。

```java
public class Demo {
    private int a;

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }
}

public class Main {
    public static void main(String[] args) {
        Demo demo = new Demo();
        System.out.println(demo.getA()); // 0
    }
}
```

### 3.2 有参构造方法

和无参构造方法类似，有参构造方法可以把成员变量初始化为我们想要的值。

```java
public class Demo {
    private int a;

    // 有参构造方法
    public Demo(int a) {
        this.a = a;
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }
}

public class Main {
    public static void main(String[] args) {
        // 为有参构造方法传入参数
        Demo demo = new Demo(666);
        System.out.println(demo.getA()); // 666
    }
}
```

## 4 静态方法

与[静态变量](/java/oop/02/#_4-静态变量)一样，被`static`关键字修饰的方法称为静态方法，它们也能直接通过类来访问，而不用实例化。

静态方法通常用在工具类中。

```java
public class Demo {
    public static int add(int a, int b){
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        int res = Demo.add(10, 20);
        System.out.println(res); // 30
    }
}
```