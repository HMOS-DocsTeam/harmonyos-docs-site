---
title: "GetDataType"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getdatatype
kit: ai
last_updated: "2026-04-22"
---

# GetDataType

## 函数功能

获取Tensor的数据类型。

## 函数原型

```
ge::DataType GetDataType() const
```

## 参数说明

无

## 返回值

返回Tensor中的数据类型。

关于ge::DataType的定义，请参见[DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype)。

## 约束说明

无

## 调用示例

```
StorageShape sh({1, 2, 3}, {1, 2, 3});
Tensor t = {sh, {}, {}, ge::DT_FLOAT, nullptr};
// ge::DT_FLOAT
auto dt = t.GetDataType();
```
