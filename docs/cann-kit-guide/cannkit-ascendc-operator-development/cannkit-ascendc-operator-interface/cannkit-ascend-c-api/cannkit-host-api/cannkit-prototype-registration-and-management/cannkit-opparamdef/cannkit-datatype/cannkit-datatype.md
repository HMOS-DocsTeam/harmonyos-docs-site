---
title: "DataType"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-datatype
kit: ai
last_updated: "2026-04-22"
---

# DataType

## 函数功能

定义算子参数数据类型。

## 函数原型

```
OpParamDef &DataType(std::vector<ge::DataType> types);
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| types | 输入 | 算子参数数据类型，ge::DataType请参考[DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype)。 |

## 返回值

[OpParamDef](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opparamdef/cannkit-paramtype)算子定义。

## 约束说明

无
