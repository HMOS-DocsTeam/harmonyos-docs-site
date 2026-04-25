---
title: "GetDynamicOutputDesc"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getdynamicoutputdesc
kit: ai
last_updated: "2026-04-22"
---

# GetDynamicOutputDesc

## 函数功能

根据name和index的组合获取算子动态Output的TensorDesc。

## 函数原型

![](../../../../../../../images/27e4f533/note_3.0-zh-cn.png) 

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
TensorDesc GetDynamicOutputDesc(const std::string &name, uint32_t index) const;
TensorDesc GetDynamicOutputDesc(const char_t *name, uint32_t index) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| name | 输入 | 算子动态Output的名称。 |
| index | 输入 | 算子动态Output编号，编号起始值从1开始。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| [TensorDesc](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensordesc/cannkit-tensordesc-construction-and-destructor) | 获取TensorDesc成功，则返回算子动态Output的TensorDesc；获取失败，则返回TensorDesc默认构造的对象，其中，主要设置DataType为DT\_FLOAT（表示float类型），Format为FORMAT\_NCHW（表示NCHW）。 |

## 异常处理

无

## 约束说明

无
