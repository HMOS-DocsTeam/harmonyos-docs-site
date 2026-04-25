---
title: "SetInferDataType"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setinferdatatype
kit: ai
last_updated: "2026-04-22"
---

# SetInferDataType

## 函数功能

注册DataType推导函数。

## 函数原型

```
OpDef &SetInferDataType(gert::OpImplRegisterV2::InferDataTypeKernelFunc func);
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| func | 输入 | DataType推导函数。****InferDataTypeKernelFunc****类型定义如下。  using InferDataTypeKernelFunc = UINT32 (\*)(InferDataTypeContext \*); |

## 返回值

[OpDef](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opdef/cannkit-input)算子定义。

## 约束说明

无
