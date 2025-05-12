---
title: Part 1 Java 容器概述
createTime: 2025/05/07 15:14:27
permalink: /java/container/01/
---

## 1 Java 容器简介

Java 容器用于存储和管理对象集合的数据结构。它们是 Java 标准库的一部分，封装在`java.util`包中。容器提供了统一的 API 接口，帮助开发者以一致的方式操作数据类型的集合。

Java 容器除了最基本的数据存储功能外，还提供了遍历、查找等高级功能。

## 2 容器的分类

按照存储元素的不同，可分为两类：Collection 和 Map。

### 2.1 Collection

Collection 用于存储单个元素的集合，如列表（List）、集合（Set）、队列（Queue）等。

- 列表：元素有序、可重复（`ArrayList` `LinkedList`）；
- 集合：元素无序、不可重复（`HashSet` `TreeSet`）；
- 队列：支持队列特性（`LinkedList` `ArrayQueue`）

### 2.2 Map

Map 用于存储键值对（key-value）的集合，每个 key 都对应一个 value。

如`HashMap` `TreeMap` `LinkedHashMap`等。