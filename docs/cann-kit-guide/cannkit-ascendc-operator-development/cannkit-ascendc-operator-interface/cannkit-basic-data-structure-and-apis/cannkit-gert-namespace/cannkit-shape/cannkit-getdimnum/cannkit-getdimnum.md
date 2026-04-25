---
title: "GetDimNum"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getdimnum
kit: ai
last_updated: "2026-04-22"
---

# GetDimNum

## 函数功能

获取dim\_num。

## 函数原型

```
size_t GetDimNum() const
```

## 参数说明

无

## 返回值

获取dim\_num，即Shape的长度。

## 约束说明

无

## 调用示例

```
Shape shape0({3, 256, 256});
auto dim_num = shape0.GetDimNum(); // 3
```
