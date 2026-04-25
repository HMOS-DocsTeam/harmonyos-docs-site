---
title: "GetOriginFormat"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-getoriginformat
kit: ai
last_updated: "2026-04-22"
---

# GetOriginFormat

## 函数功能

获取TensorDesc所描述Tensor的原始Format。

该Format是指原始网络模型的Format。

## 函数原型

```
Format GetOriginFormat() const;
```

## 参数说明

无

## 返回值

| 类型 | 描述 |
| --- | --- |
| [Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format) | TensorDesc所描述的Tensor的originFormat信息。  关于Format数据类型的定义，请参见[Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format)。 |

## 异常处理

无

## 约束说明

无
