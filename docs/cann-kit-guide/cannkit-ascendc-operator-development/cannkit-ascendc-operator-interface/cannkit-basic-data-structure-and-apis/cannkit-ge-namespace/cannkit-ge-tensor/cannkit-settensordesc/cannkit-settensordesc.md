---
title: "SetTensorDesc"
sidebar_position: 26
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-settensordesc
kit: ai
last_updated: "2026-04-22"
---

# SetTensorDesc

## 函数功能

设置Tensor的描述符（TensorDesc）。

## 函数原型

```
graphStatus SetTensorDesc(const TensorDesc &tensor_desc);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| tensor\_desc | 输入 | 需设置的Tensor描述符。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | 设置成功返回GRAPH\_SUCCESS，否则，返回GRAPH\_FAILED。 |

## 异常处理

无

## 约束说明

无
