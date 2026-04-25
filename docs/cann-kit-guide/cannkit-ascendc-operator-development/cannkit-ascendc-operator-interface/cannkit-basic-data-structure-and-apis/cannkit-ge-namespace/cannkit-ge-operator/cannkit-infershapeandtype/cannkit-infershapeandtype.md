---
title: "InferShapeAndType"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-infershapeandtype
kit: ai
last_updated: "2026-04-22"
---

# InferShapeAndType

## 函数功能

推导Operator输出的shape和DataType。

关于DataType数据类型的定义，请参见[DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype)。

## 函数原型

```
graphStatus InferShapeAndType();
```

## 参数说明

无

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | 推导成功，返回GRAPH\_SUCCESS，否则，返回GRAPH\_FAILED。 |

## 异常处理

无

## 约束说明

无
