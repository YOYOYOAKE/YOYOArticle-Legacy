---
title: Part 1 Java 数据类型
createTime: 2025/04/20 14:33:52
permalink: /java/basic/01/
---

与 JavaScript 和 Python 不同，Java是一种静态类型语言。这就意味着在声明变量时需要同时声明其变量类型。

而同样的，Java 也分为基本数据类型和引用数据类型。

## 1 基本数据类型

### 1.1 布尔型

布尔型仅存储两个值：`true`和`false`，即真与假。

在 Java 中使用`boolean`来声明布尔型变量。

```java
boolean isStudent = true;
boolean hasMoney = false;
```

理论上来讲布尔型的大小应该仅占用一个字节，但事实上并非如此。主要有两种说法。

第一种说法认为，对于单独声明的布尔型变量，JVM将其按整型来处理，即占用 4 个字节。若将其作为数组元素来使用，JVM会将其按字节型来处理，即占用 1 个字节。

第二种说法认为，布尔型具体占用的大小是不确定的，取决于 JVM 的具体实现。

### 1.2 数值型

#### 1.2.1 字节型

一个字节型变量占用 1 字节的空间，而 1 Byte 等于 8 bit，因此一个字节型变量使用 8 个二进制位存储数据。

其中符号固定占用一位，剩余 7 位存储数据。因此字节型可以表示 -128 ~ 127 之间的整数。

在 Java 中使用`byte`声明字节型变量。

```java
byte number = 66
```

#### 1.2.2 短整型

一个短整型变量占用 2 字节的空间。

符号表示占用一位，剩余 15 位保存存储数据。因此字节型可以表示 -32,768 ~ 32,767 之间的整数。

在 Java 中使用`short`声明短整型变量。

```java
short number = 6666
```

#### 1.2.3 整型

一个整型变量占用 4 字节的空间。

符号表示占用一位，剩余 31 位保存存储数据。因此字节型可以表示 -2,147,483,648 ~ 2,147,483,647 之间的整数。

在 Java 中使用`int`声明整型变量。

```java
int number = 666666666
```

#### 1.2.4 长整型

一个长整型变量占用 8 字节的空间。

符号表示占用一位，剩余 63 位保存存储数据。因此字节型可以表示 -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807 之间的整数。

在 Java 中使用`long`声明整型变量。需要注意的是，长整型变量在数字之后还要加上`L`进行标识。

```java
long number = 66666666666666L
```

#### 1.2.5 单精度浮点型

一个单精度浮点型变量占用 4 字节的空间。

其中，符号占用 1 位，指数占用 8 位，剩余 23 位存储数字。

在 Java 中使用`float`声明单精度浮点型变量。需要注意的是，单精度浮点型变量在数字之后还要加上`f`进行标识。

```java
float number = 66.666f
```

#### 1.2.6 双精度浮点型

一个双精度浮点型变量占用 8 字节的空间。

其中，符号占用 1 位，指数占用 11 位，剩余 52 位存储数字。

在 Java 中使用`double`声明双精度浮点型变量。

```java
double number = 66666.666666
```

### 1.3 字符型

字符型变量用于存储 Unicode 字符。一个字符型变量占用 2 字节的空间。

在 Java 中使用`char`声明字符型变量。需要注意的是，字符字面量应该用单引号包裹，而非双引号。

```java
char letter = 'A'
```

## 2 引用数据类型

除了基本数据类型外的，都为引用数据类型。在存储引用数据类型时，并不存储其本身的值，而是存储其内存地址（有些语言中叫做“引用”），因此得名。

常见的引用数据类型有字符串（String）和数组（Array），这些等到后面再讲。

除此之外，Java 还有一种特殊的包装器类型（Wrapper Types），用于将八种基本数据类型转换为对应的引用数据类型。

| 包装器类型 | 基本数据类型 |
| :--------: | :----------: |
| Boolean    | boolean      |
| Byte       | byte         |
| Short      | short        |
| Integer    | int          |
| Long       | long         |
| Float      | float        |
| Double     | double       |
| Character  | char         |

包装器类型中封装了针对基本数据类型的各种实用方法，并兼容需要对象类型的场景。

```java
// 使用 Integer 包装器类型
Integer integerValue = new Integer(42);
System.out.println("整数值: " + integerValue);

// 将字符串转换为整数
String numberString = "123";
int parsedNumber = Integer.parseInt(numberString);
System.out.println("整数值: " + parsedNumber);

// 使用 Character 包装器类型
Character charValue = new Character('A');
System.out.println("字符: " + charValue);

// 检查字符是否为数字
char testChar = '9';
if (Character.isDigit(testChar)) {
System.out.println("字符是个数字.");
}
```

从 Java 5 开始，自动装箱（Autoboxing）和自动拆箱（Unboxing）机制允许基本数据类型和包装器类型之间自动转换，而无需显式地调用构造方法或转换方法。

```java
Integer integerValue = 42; // 自动装箱
int primitiveValue = integerValue; // 自动拆箱
```

## 3 数据类型转换

### 3.1 自动类型转换

自动类型转换通常发生在有不同数据类型参与运算的表达式中。自动类型转换遵循以下规则：

- 如果任一操作数是 double 类型，其他操作数将被转换为 double 类型；
- 否则，如果任一操作数是 float 类型，其他操作数将被转换为 float 类型；
- 否则，如果任一操作数是 long 类型，其他操作数将被转换为 long 类型；
- 否则，所有操作数将被转换为 int 类型。

不难发现，自动类型转换都有朝着较大数据类型转换的趋势。

```text
byte -> short -> int -> long -> float -> double
```

char 类型较为特殊，不会被转换为浮点型。

```text
char -> int -> long -> float -> double
```

### 3.2 强制类型转换

在

- 将较大的数据类型转换为较小的数据类型；
- 将浮点数转换为整数；
- 将字符类型转换为数值类型

时，需要进行强制类型转换。

在进行强制类型转换时，需要显式声明转换后的数据类型。

```java
double doubleValue = 42.8;

int intValue = (int) doubleValue;

System.out.println("整数值: " + intValue); // 输出：整数值: 42
```