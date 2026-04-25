---
title: "构造函数"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-computenodeinfo-constructor
kit: ai
last_updated: "2026-04-22"
---

# 构造函数

## 函数功能

ComputeNodeInfo类的构造函数。

## 函数原型

```
ComputeNodeInfo() = delete;
ComputeNodeInfo(const ComputeNodeInfo &) = delete;
ComputeNodeInfo(ComputeNodeInfo &&) = delete;
ComputeNodeInfo &operator=(const ComputeNodeInfo &) = delete;
ComputeNodeInfo &operator=(ComputeNodeInfo &&) = delete;
```

## 参数说明

无

## 返回值

无

## 约束说明

POD类型，当前不允许通过调用构造函数显式构造，可通过显式申请内存构造。
