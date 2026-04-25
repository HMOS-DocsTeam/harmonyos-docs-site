---
title: "GetIrOutputsNum"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getiroutputsnum
kit: ai
last_updated: "2026-04-22"
---

# GetIrOutputsNum

## 函数功能

获取算子IR原型定义中的输出个数。

## 函数原型

```
size_t GetIrOutputsNum() const
```

## 参数说明

无

## 返回值

IR原型中定义的输出个数，size\_t类型。

## 约束说明

无

## 调用示例

```
size_t index = compute_node_info->GetIrOutputsNum();
```
