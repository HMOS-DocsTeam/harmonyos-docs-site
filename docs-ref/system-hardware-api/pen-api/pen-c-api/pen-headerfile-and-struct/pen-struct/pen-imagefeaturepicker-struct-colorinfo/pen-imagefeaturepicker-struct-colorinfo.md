---
title: "HMS_GCP_PickedColorInfo"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-struct-colorinfo
kit: 系统
last_updated: "2026-04-22"
slug: pen-imagefeaturepicker-struct-colorinfo
---

# HMS\_GCP\_PickedColorInfo

## 概述

定义取色颜色信息的结构体。

****系统能力：**** SystemCapability.Stylus.ColorPicker

****起始版本：**** 5.0.0(12)

****相关模块：**** [GlobalColorPicker](/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c)

****所在头文件：**** [native\_gcp\_api.h](/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-headerfile-declare/pen-headerfile-declare)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [HMS\_GCP\_Color](/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-imagefeaturepicker-struct-color/pen-imagefeaturepicker-struct-color) color | 提取的颜色值。 |
| [HMS\_GCP\_ColorSpace](/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_colorspace) colorSpace | 颜色所属的颜色空间。 |
| int64\_t [timestamp](#timestamp) | 提取颜色的时间戳。 |

## 结构体成员变量说明

### color

```
HMS_GCP_Color HMS_GCP_PickedColorInfo::color
```

****描述****

提取的颜色值。

### colorSpace

```
HMS_GCP_ColorSpace HMS_GCP_PickedColorInfo::colorSpace
```

****描述****

颜色所属的颜色空间。

### timestamp

```
int64_t HMS_GCP_PickedColorInfo::timestamp
```

****描述****

提取颜色的时间戳。
