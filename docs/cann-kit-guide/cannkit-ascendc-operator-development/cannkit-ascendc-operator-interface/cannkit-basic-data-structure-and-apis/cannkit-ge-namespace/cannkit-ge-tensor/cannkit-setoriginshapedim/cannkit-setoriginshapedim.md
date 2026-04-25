---
title: "SetOriginShapeDim"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setoriginshapedim
kit: ai
last_updated: "2026-04-22"
---

# SetOriginShapeDim

## 函数功能

设置原始shape第idx维度。

## 函数原型

```
graphStatus SetOriginShapeDim(const size_t idx, const int64_t dim_value);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| idx | 输入 | 维度的索引，索引从0开始。 |
| dim\_value | 输入 | 需设置的值。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | 设置成功返回GRAPH\_SUCCESS，否则，返回GRAPH\_FAILED。 |

## 异常处理

无

## 约束说明

无
