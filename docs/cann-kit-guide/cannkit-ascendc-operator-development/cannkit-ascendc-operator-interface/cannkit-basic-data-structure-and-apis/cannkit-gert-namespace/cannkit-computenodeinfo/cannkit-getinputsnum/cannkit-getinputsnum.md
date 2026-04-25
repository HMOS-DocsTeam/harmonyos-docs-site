---
title: "GetInputsNum"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getinputsnum
kit: ai
last_updated: "2026-04-22"
---

# GetInputsNum

## 函数功能

获取算子在网络中的实际输入个数。

## 函数原型

```
size_t GetInputsNum() const
```

## 参数说明

无

## 返回值

算子的实际输入个数。

## 约束说明

无

## 调用示例

```
size_t index = compute_node_info->GetInputsNum();
```
