---
title: "GetTensorDesc"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gettensordesc
kit: ai
last_updated: "2026-04-22"
---

# GetTensorDesc

## 函数功能

获取Tensor的描述符。

## 函数原型

```
TensorDesc GetTensorDesc() const;
```

## 参数说明

无

## 返回值

| 类型 | 描述 |
| --- | --- |
| [TensorDesc](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensordesc/cannkit-tensordesc-construction-and-destructor) | 返回当前Tensor的描述符。 |

## 异常处理

无

## 约束说明

修改返回的TensorDesc信息，不影响Tensor对象中已有的TensorDesc信息。
