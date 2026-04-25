---
title: "MutableFormat"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-mutableformat
kit: ai
last_updated: "2026-04-22"
---

# MutableFormat

## 函数功能

获取Tensor的format，包含运行时format和原始format。

## 函数原型

```
StorageFormat &MutableFormat()
```

## 参数说明

无

## 返回值

format引用。

关于StorageFormat类型的定义，请参见[StorageFormat](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageformat/cannkit-storageformat-constructor)。

## 约束说明

无

## 调用示例

```
Tensor tensor{{{8, 3, 224, 224}, {16, 3, 224, 224}},       // shape
              {ge::FORMAT_ND, ge::FORMAT_FRACTAL_NZ, {}},  // format
              kFollowing,                                  // placement
              ge::DT_FLOAT16,                              // dt
              nullptr};
auto fmt = tensor.MutableFormat();
```
