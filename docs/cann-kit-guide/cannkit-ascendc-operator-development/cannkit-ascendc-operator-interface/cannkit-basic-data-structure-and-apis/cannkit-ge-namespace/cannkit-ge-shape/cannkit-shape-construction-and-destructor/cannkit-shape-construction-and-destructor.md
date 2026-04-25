---
title: "构造函数和析构函数"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shape-construction-and-destructor
kit: ai
last_updated: "2026-04-22"
---

# 构造函数和析构函数

## 函数功能

Shape构造函数和析构函数。

## 函数原型

```
Shape();
~Shape() = default;
explicit Shape(const std::vector<int64_t> &dims);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| dims | 输入 | Shape的取值内容。  Shape表征张量数据的维度大小，用std::vector&lt;int64\_t&gt;表征每一个维度的具体大小。 |

## 返回值

Shape构造函数返回Shape类型的对象。

## 异常处理

无

## 约束说明

无
