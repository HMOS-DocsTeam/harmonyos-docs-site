---
title: "XEG_HPSRadixSortDescription"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsortdescription
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-hpsradixsortdescription
---

# XEG\_HPSRadixSortDescription

## 概述

此结构体描述使用[XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps_radix_sort_extension_name)扩展进行排序时所需的信息。

****起始版本：**** 6.0.0(20)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_hps.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-hps-8h/xengine-kit-xeg-vulkan-hps-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| XEG\_StructureType [sType](#stype) | 识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_HPS\_RADIX\_SORT\_DESCRIPTION。 |
| const void \* [pNext](#pnext) | 指向扩展结构的指针。 |
| VkBuffer [sortCount](#sortcount) | 存储要排序的索引数量的缓冲区，数量值从缓冲区第0位读取。 |
| VkBuffer [keyBuffer](#keybuffer) | 存储排序使用的key值的缓冲区，数据格式为32位无符号整数。 |
| VkBuffer [indexBuffer](#indexbuffer) | 存储待排序value值的缓冲区，数据格式为32位无符号整数。 |

## 结构体成员变量说明

### indexBuffer

```
VkBuffer XEG_HPSRadixSortDescription::indexBuffer
```

****描述****

存储待排序value值的缓冲区，数据格式为32位无符号整数。

### keyBuffer

```
VkBuffer XEG_HPSRadixSortDescription::keyBuffer
```

****描述****

存储排序使用的key值的缓冲区，数据格式为32位无符号整数。

### pNext

```
const void* XEG_HPSRadixSortDescription::pNext
```

****描述****

指向扩展结构的指针。

### sortCount

```
VkBuffer XEG_HPSRadixSortDescription::sortCount
```

****描述****

存储要排序的索引数量的缓冲区，数量值从缓冲区第0位读取。

### sType

```
XEG_StructureType XEG_HPSRadixSortDescription::sType
```

****描述****

识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_HPS\_RADIX\_SORT\_DESCRIPTION。
