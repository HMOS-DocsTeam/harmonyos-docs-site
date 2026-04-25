---
title: "GetSizeByDataType"
sidebar_position: 35
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getsizebydatatype
kit: ai
last_updated: "2026-04-22"
---

# GetSizeByDataType

## 函数功能

根据传入的data\_type，获取该data\_type所占用的内存大小。

## 函数原型

```
inline int GetSizeByDataType(DataType data_type)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| data\_type | 输入 | 数据类型，请参见[DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype)。 |

## 返回值

该data\_type所占用的内存大小（单位为bytes），如果传入非法值或不支持的数据类型，返回-1。

## 异常处理

无

## 约束说明

无
