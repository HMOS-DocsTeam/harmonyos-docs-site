---
title: "DataTypeToAscendString"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-datatypetoascendstring
kit: ai
last_updated: "2026-04-22"
---

# DataTypeToAscendString

## 函数功能

将DataType类型值转化为字符串表达。

使用该接口需要包含type\_utils.h头文件。

```
#include "graph/utils/type_utils.h"
```

## 函数原型

```
static AscendString DataTypeToAscendString(const DataType &data_type);
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| data\_type | 输入 | 待转换的DataType，支持的DataType请参考[DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype)。 |

## 返回值

转换后的DataType字符串，[AscendString](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ascendstring/cannkit-ascendstring-construction-and-destructor)类型。

## 约束说明

无

## 调用示例

```
DataType data_type = ge::DT_UINT32;
auto type_str = DataTypeToAscendString(data_type); // "DT_UINT32"
const char *ptr = type_str.GetString();  // 获取char*指针
```
