---
title: "GetOriginFormat"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getoriginformat
kit: ai
last_updated: "2026-04-22"
---

# GetOriginFormat

## 函数功能

获取原始format。

## 函数原型

```
ge::Format GetOriginFormat() const
```

## 参数说明

无

## 返回值

原始format。

## 约束说明

无

## 调用示例

```
ExpandDimsType dim_type("1100");
StorageFormat format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_C1HWNC0, dim_type);
auto origin_format = format.GetOriginFormat();  // Format::FORMAT_NCHW
```
