---
title: Part 4 Java 数组
createTime: 2025/04/21 08:36:41
permalink: /java/basic/04/
---

## 1 数组的声明和初始化

Java 中有多种方法声明数组。

```java
int[] array;
int brray[];
```

中括号放在类型后与变量名后的区别。前一种方式更加常用。

以及两种初始化方式：

```java
int[] array = new int[10];
int brray[] = new int[] {1, 2, 3, 4, 5};
```

第一种方式会初始化得到一个长度为 10 的、元素全为 0 的数组（int 型默认值为 0）；第二种方式会按照给定的值初始化。

## 2 数组的访问和遍历

Java 中按照索引访问数组中的元素。Java 数组的索引从 0 开始。

```java
int[] array = new int[] {1, 2, 3, 4, 5};

System.out.println(array[3]); // 4

array[4] = 0
```

由此我们可以使用循环来遍历数组：

```java
int[] array = new int[] {1, 2, 3, 4, 5};
for(int i = 0; i<array.length; i++){
    System.out.println(array[i]);
}
```

可以用 for-each 语法简化遍历：

```java
int[] array = new int[] {1, 2, 3, 4, 5};
for (int j : array) {
    System.out.println(j);
}
```

## 3 二维数组

二维数组用的不多，简单了解一下即可。与一维数组大同小异。

```java
// 声明
int[][] numbers = { {1, 3, 5, 7}, {9, 11, 13, 15} };
// 访问
int thisNumber = numbers[0][3];
System.out.println(thisNumber); // 7
```

## 4 Java Arrays 工具类

Java Arrays 工具类用于完成一些数组操作，如创建数组、数组排序、数组检索等。

在使用 Arrays 工具类之前，需要先引入。

```java
import java.util.Arrays;
```

### 4.1 数组的打印

对于一个数组，如果我们直接打印它的话，会得到它的地址：

```java
String[] arr = new String[] { "这", "是", "一", "个", "字", "符", "串", "数", "组" };
System.out.println(arr); // [Ljava.lang.String;@1b6d3586
```

我们当然可以使用遍历的方式打印元素，但是有更优雅的方式：

```java
System.out.println(Arrays.toString(arr)); // [这, 是, 一, 个, 字, 符, 串, 数, 组]
```

### 4.2 数组的创建

`Arrays`工具类中有`.copyOf()` `.copyOfRange()` `fill()`三个方法用于创建新数组。

`.copyOf()`接收两个参数。依次为：待复制的数组、新创建数组的长度。

若新数组长度比原数组长度短则截取；长则填充为`null`。

```java
String[] arr = new String[] { "这", "是", "一", "个", "字", "符", "串", "数", "组" };
String[] brr = Arrays.copyOf(arr, 7);
String[] crr = Arrays.copyOf(arr, 12);
System.out.println(Arrays.toString(brr)); // [这, 是, 一, 个, 字, 符, 串]
System.out.println(Arrays.toString(crr)); // [这, 是, 一, 个, 字, 符, 串, 数, 组, null, null, null]
```

`.copyOfRange()`接收三个参数。依次为：待复制的数组、复制起始位置（含）、复制终止位置（不含）。

```java
String[] drr = Arrays.copyOfRange(arr, 2,7);
System.out.println(Arrays.toString(drr)); // [一, 个, 字, 符, 串]
```

`.full()`接收一个参数，即待填充的数组。

```java
String[] arr = new String[5];
Arrays.fill(arr, "哈");
System.out.println(Arrays.toString(arr)); // [哈, 哈, 哈, 哈, 哈]
```

### 4.3 数组的相等判断

`Arrays`工具类中提供了`.equals()`方法用于判断两数组是否相等。

该方法接收两个参数，即待比较的两个数组。相等返回`true`，不等返回`false`。

这里的相等指的是数组长度、数组内对应位置的元素均相等。

`.equals()`方法提供了多种实现：

```java
equals(long[], long[])
equals(int[], int[])
equals(short[],short[])
equals(char[], char[])
equals(byte[], byte[])
equals(boolean[], boolean[])
equals(double[], double[])
equals(float[], float[])
equals(Object[], Object[])
```

以`.equals(Object[], Object[])`为例，查看该方法的实现：

```java
public static boolean equals(Object[] a, Object[] a2) {
    if (a==a2)
        return true;
    if (a==null || a2==null)
        return false;

    int length = a.length;
    if (a2.length != length)
        return false;

    for (int i=0; i<length; i++) {
        Object o1 = a[i];
        Object o2 = a2[i];
        if (!(o1==null ? o2==null : o1.equals(o2)))
            return false;
    }

    return true;
}
```

首先使用`==`对比两个数组的内存地址，若一致则直接返回`true`。

然后检查数组是否为`null`，二者中任一为`null`则直接返回`false`。

接着检查长度是否一致，若不一致则直接返回`false`。

最后检查数组中对应元素是否相同。

### 4.4 数组的排序

`Arrays`工具类中提供了`.sort()`方法用于判断两数组是否相等。

```java
String[] arr = new String[] {"zhao", "qian", "sun", "li"};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // [li, qian, sun, zhao]
```

值得注意的是，`.sort()`方法会改变原数组，因此需要谨慎使用。

### 4.5 数组的检索

如果要从数组中查找某个特定元素的索引的话，通常只能从 0 开始依次查找。

但是在排序之后，就可以使用`Arrays`工具类中的`.binarySearch()`方法进行二分查找了。

```java
String[] arr = new String[] {"zhao", "qian", "sun", "li"};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // [li, qian, sun, zhao]

int indexQian = Arrays.binarySearch(arr, "qian");  
System.out.println(indexQian); // 1
```

注意，在使用`.binarySearch()`前一定要进行排序，否则查找结果是不确定的。