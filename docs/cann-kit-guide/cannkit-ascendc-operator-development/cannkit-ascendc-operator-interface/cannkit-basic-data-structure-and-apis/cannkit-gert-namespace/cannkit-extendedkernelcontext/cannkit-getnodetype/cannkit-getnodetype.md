---
title: "GetNodeType"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getnodetype
kit: ai
last_updated: "2026-04-22"
---

# GetNodeType

## 函数功能

获取算子的类型。

## 函数原型

```
const char *GetNodeType() const
```

## 参数说明

无

## 返回值

算子的类型。

## 约束说明

无

## 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto node_type = extend_context->GetNodeType();
```
