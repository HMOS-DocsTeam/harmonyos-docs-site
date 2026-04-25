---
title: "SetInferShape"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setinfershape
kit: ai
last_updated: "2026-04-22"
---

# SetInferShape

## 函数功能

注册Shape推导函数。

## 函数原型

```
OpDef &SetInferShape(gert::OpImplRegisterV2::InferShapeKernelFunc func);
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| func | 输入 | Shape推导函数。InferShapeKernelFunc类型定义如下。  using InferShapeKernelFunc = UINT32 (\*)(InferShapeContext \*); |

## 返回值

[OpDef](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opdef/cannkit-input)算子定义。

## 约束说明

无
