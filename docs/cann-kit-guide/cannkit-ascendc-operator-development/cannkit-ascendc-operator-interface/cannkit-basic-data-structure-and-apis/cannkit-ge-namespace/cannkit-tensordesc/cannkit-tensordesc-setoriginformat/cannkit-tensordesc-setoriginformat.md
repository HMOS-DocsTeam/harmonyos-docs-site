---
title: "SetOriginFormat"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-setoriginformat
kit: ai
last_updated: "2026-04-22"
---

# SetOriginFormat

## 函数功能

向TensorDesc中设置Tensor的原始Format。

该Format是指原始网络模型的Format。

## 函数原型

```
void SetOriginFormat(Format origin_format);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| origin\_format | 输入 | 需设置的原始Format信息。  关于Format数据类型的定义，请参见[Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format)。 |

## 返回值

无

## 异常处理

无

## 约束说明

无
