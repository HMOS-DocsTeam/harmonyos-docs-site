---
title: "SetDataType"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setdatatype
kit: ai
last_updated: "2026-04-22"
---

# SetDataType

## 函数功能

设置Tensor的数据类型。

## 函数原型

```
void SetDataType(const ge::DataType data_type)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| data\_type | 输入 | 需要设置的Tensor的数据类型。  关于ge::DataType的定义，请参见[DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype)。 |

## 返回值

无

## 约束说明

无

## 调用示例

```
StorageShape sh({1, 2, 3}, {1, 2, 3});
Tensor t = {sh, {}, {}, ge::DT_FLOAT, nullptr};
t.SetDataType(ge::DT_DOUBLE);
```
