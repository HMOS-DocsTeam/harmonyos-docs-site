---
title: "GetListInt"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getlistint
kit: ai
last_updated: "2026-04-22"
---

# GetListInt

## 函数功能

获取list int类型的属性值。

## 函数原型

```
const TypedContinuousVector<int64_t> *GetListInt(const size_t index) const
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| index | 输入 | 属性在IR原型定义中以及在OP\_IMPL注册中的索引。 |

## 返回值

指向属性值的指针。

关于TypedContinuousVector类型的定义，请参见[TypedContinuousVector](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-typedcontinuousvector/cannkit-typedcontinuousvector-introduction)。

## 约束说明

无

## 调用示例

```
const RuntimeAttrs * runtime_attrs = kernel_context->GetAttrs();
const TypedContinuousVector<int64_t> *attr0 = runtime_attrs->GetListInt(0);
```
