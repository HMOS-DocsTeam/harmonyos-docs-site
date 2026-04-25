---
title: "XEG_HPSRadixSort"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsort
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-hpsradixsort
---

# XEG\_HPSRadixSort

## 概述

此结构体描述HPS基数排序扩展结构信息。

****起始版本：**** 6.0.0(20)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_hps.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-hps-8h/xengine-kit-xeg-vulkan-hps-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| XEG\_StructureType [sType](#stype) | 识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_HPS\_RADIX\_SORT。 |
| const void \* [pNext](#pnext) | 指向扩展结构的指针。 |

## 结构体成员变量说明

### pNext

```
const void* XEG_HPSRadixSort::pNext
```

****描述****

指向扩展结构的指针。

### sType

```
XEG_StructureType XEG_HPSRadixSort::sType
```

****描述****

识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_HPS\_RADIX\_SORT。
