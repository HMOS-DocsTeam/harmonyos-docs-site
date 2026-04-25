---
title: "GetInputHandleShapesAndTypes"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getinputhandleshapesandtypes
kit: ai
last_updated: "2026-04-22"
---

# GetInputHandleShapesAndTypes

## 函数功能

在推理上下文中，获取算子输入句柄的[ShapeAndType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-shapeandtype/cannkit-shapeandtype-construction-and-destructor)。

## 函数原型

```
const std::vector<std::vector<ShapeAndType>> &GetInputHandleShapesAndTypes() const
```

## 参数说明

无

## 返回值

| 类型 | 描述 |
| --- | --- |
| const std::vector&lt;std::vector&lt;ShapeAndType&gt;&gt; | 算子输入句柄的[ShapeAndType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-shapeandtype/cannkit-shapeandtype-construction-and-destructor)。 |

## 异常处理

无

## 约束说明

无
