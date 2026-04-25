---
title: "GetOutputDesc"
sidebar_position: 25
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-getoutputdesc
kit: ai
last_updated: "2026-04-22"
---

# GetOutputDesc

## 函数功能

根据算子Output名称或Output索引获取算子Output的TensorDesc。

## 函数原型

![](../../../../../../../images/7d3bb3c9/note_3.0-zh-cn.png) 

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
TensorDesc GetOutputDesc(const std::string &name) const;
TensorDesc GetOutputDescByName(const char_t *name) const;
TensorDesc GetOutputDesc(uint32_t index) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| name | 输入 | 算子Output名称。  当无此算子Output名称时，返回TensorDesc默认构造的对象，其中，主要设置[DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype)为DT\_FLOAT（表示float类型），[Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format)为FORMAT\_NCHW（表示NCHW）。 |
| index | 输入 | 算子Output索引。  当无此算子Output索引时，则返回TensorDesc默认构造的对象，其中，主要设置[DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype)为DT\_FLOAT（表示float类型），[Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format)为FORMAT\_NCHW（表示NCHW）。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| [TensorDesc](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensordesc/cannkit-tensordesc-construction-and-destructor) | 算子Output的TensorDesc。 |

## 异常处理

无

## 约束说明

无
