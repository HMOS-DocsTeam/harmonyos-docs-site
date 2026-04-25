---
title: "SetResourceContext"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setresourcecontext
kit: ai
last_updated: "2026-04-22"
---

# SetResourceContext

## 函数功能

为标识为key的资源，设置资源上下文对象，并交由资源上下文管理器管理。

此接口一般由写类型的资源类算子调用，如stack push等。

## 函数原型

```
graphStatus SetResourceContext(const ge::AscendString &key, ResourceContext *resource_context)
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| key | 输入 | 资源唯一标识。 |
| resource\_context | 输入 | 资源上下文对象指针，可参见[GetResourceContext](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-inferencecontext/cannkit-getresourcecontext)接口的[返回值](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-inferencecontext/cannkit-getresourcecontext#返回值)。 |

## 返回值

graphStatus：GRAPH\_SUCCESS，代表成功；GRAPH\_FAILED，代表失败。

## 约束说明

若使用[Create](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-inferencecontext/cannkit-create)接口创建InferenceContext时未传入resource context管理器指针，则该接口返回失败。
