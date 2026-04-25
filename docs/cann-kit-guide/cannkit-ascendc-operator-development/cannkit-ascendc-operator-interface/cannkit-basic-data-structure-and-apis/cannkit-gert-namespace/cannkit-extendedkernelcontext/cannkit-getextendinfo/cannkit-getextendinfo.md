---
title: "GetExtendInfo"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getextendinfo
kit: ai
last_updated: "2026-04-22"
---

# GetExtendInfo

## 函数功能

获取本kernel的扩展信息。

## 函数原型

```
const KernelExtendInfo *GetExtendInfo() const
```

## 参数说明

无

## 返回值

本kernel的扩展信息。

关于KernelExtendInfo类型的定义，请参见[内部关联接口](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-internal-associated-apis)KernelExtendInfo类。

## 约束说明

无

## 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto extend_info = extend_context->GetExtendInfo();
```
