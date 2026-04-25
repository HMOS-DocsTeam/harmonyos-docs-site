---
title: "Format"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-format
kit: ai
last_updated: "2026-04-22"
---

# Format

## 函数功能

定义算子参数数据格式。

## 函数原型

```
OpParamDef &Format(std::vector<ge::Format> formats);
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| formats | 输入 | 算子参数数据格式，ge::Format请参考[Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format)。 |

## 返回值

[OpParamDef](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opparamdef/cannkit-paramtype)算子定义。

## 约束说明

无
