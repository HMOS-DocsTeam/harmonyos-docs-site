---
title: "MutableData"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-mutabledata
kit: ai
last_updated: "2026-04-22"
---

# MutableData

## 函数功能

获取首个元素的指针地址，[GetData(), reinterpret\_cast&lt;T \*&gt;(GetData()) + GetSize())]中的数据即为当前容器中保存的数据。

## 函数原型

```
T *MutableData()
```

## 参数说明

无

## 返回值

首个元素的指针地址。

## 约束说明

无

## 调用示例

```
size_t capacity = 100U;
auto cv_holder = ContinuousVector::Create<int64_t>(capacity);
auto cv = reinterpret_cast<TypedContinuousVector *>(cv_holder.get());
auto cap = cv->MutableData();
```
