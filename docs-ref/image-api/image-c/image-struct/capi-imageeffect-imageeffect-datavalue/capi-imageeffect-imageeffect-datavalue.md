---
title: "ImageEffect_DataValue"
sidebar_position: 52
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-imageeffect-datavalue
kit: 媒体
last_updated: "2026-04-22"
slug: capi-imageeffect-imageeffect-datavalue
---

# ImageEffect\_DataValue

```
typedef union ImageEffect_DataValue {...} ImageEffect_DataValue
```

## 概述

数据值联合体。

****起始版本：**** 12

****相关模块：**** [ImageEffect](/ref/image-api/image-c/image-module/capi-imageeffect/capi-imageeffect)

****所在头文件：**** [image\_effect\_filter.h](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t int32Value | 整型值，对应[EFFECT\_DATA\_TYPE\_INT32](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#imageeffect_datatype)。 |
| float floatValue | 单精度浮点值，对应[EFFECT\_DATA\_TYPE\_FLOAT](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#imageeffect_datatype)。 |
| double doubleValue | 双精度浮点值，对应[EFFECT\_DATA\_TYPE\_DOUBLE](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#imageeffect_datatype)。 |
| char charValue | 字节值，对应[EFFECT\_DATA\_TYPE\_CHAR](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#imageeffect_datatype)。 |
| long longValue | 长整型值，对应[EFFECT\_DATA\_TYPE\_LONG](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#imageeffect_datatype)。 |
| bool boolValue | 布尔值，对应[EFFECT\_DATA\_TYPE\_BOOL](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#imageeffect_datatype)。 |
| void \*ptrValue | 指针值，对应[EFFECT\_DATA\_TYPE\_PTR](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#imageeffect_datatype)。 |
