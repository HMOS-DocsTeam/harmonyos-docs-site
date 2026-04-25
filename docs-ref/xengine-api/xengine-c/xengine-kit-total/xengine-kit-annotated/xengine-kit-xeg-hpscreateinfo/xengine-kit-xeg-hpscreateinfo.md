---
title: "XEG_HPSCreateInfo"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpscreateinfo
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-hpscreateinfo
---

# XEG\_HPSCreateInfo

## 概述

此结构体描述创建[XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps)对象的信息。

****起始版本：**** 6.0.0(20)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_hps.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-hps-8h/xengine-kit-xeg-vulkan-hps-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| XEG\_StructureType [sType](#stype) | 识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_HPS\_CREATE\_INFO。 |
| const void \* [pNext](#pnext) | 指向扩展结构的指针，不允许为空。表示启用的XEngine HPS扩展，如当使用[XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps_radix_sort_extension_name)扩展时，必须指定为[XEG\_HPSRadixSort](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsort/xengine-kit-xeg-hpsradixsort)。 |

## 结构体成员变量说明

### pNext

```
const void* XEG_HPSCreateInfo::pNext
```

****描述****

指向扩展结构的指针，不允许为空。表示启用的XEngine HPS扩展，如当使用[XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps_radix_sort_extension_name)扩展时，必须指定为[XEG\_HPSRadixSort](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsort/xengine-kit-xeg-hpsradixsort)。

### sType

```
XEG_StructureType XEG_HPSCreateInfo::sType
```

****描述****

识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_HPS\_CREATE\_INFO。
