---
title: "GetAutoMappingSubgraphIOIndexFunc"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getautomappingsubgraphioindexfunc
kit: ai
last_updated: "2026-04-22"
---

# GetAutoMappingSubgraphIOIndexFunc

## 函数功能

根据网络类型，获取已经注册的自动映射函数。

## 函数原型

```
AutoMappingSubgraphIOIndexFunc GetAutoMappingSubgraphIOIndexFunc(domi::FrameworkType framework)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| framework | 输入 | 网络类型，FrameworkType类型定义请参考[FrameworkType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-frameworktype)。 |

## 返回值

AutoMappingSubgraphIOIndexFunc：自动映射输入输出函数，函数类型详见[AutoMappingSubgraphIndex](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-automappingsubgraphindex)。

## 异常处理

无

## 约束说明

无
