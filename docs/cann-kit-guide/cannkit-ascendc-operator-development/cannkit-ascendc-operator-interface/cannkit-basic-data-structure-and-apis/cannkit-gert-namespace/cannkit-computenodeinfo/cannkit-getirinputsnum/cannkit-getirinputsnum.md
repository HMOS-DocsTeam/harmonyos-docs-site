---
title: "GetIrInputsNum"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getirinputsnum
kit: ai
last_updated: "2026-04-22"
---

# GetIrInputsNum

## 函数功能

获取算子IR原型定义中的输入个数。

## 函数原型

```
size_t GetIrInputsNum() const
```

## 参数说明

无

## 返回值

IR原型中定义的输入个数，size\_t类型。

## 约束说明

无

## 调用示例

```
size_t index = compute_node_info->GetIrInputsNum();
```
