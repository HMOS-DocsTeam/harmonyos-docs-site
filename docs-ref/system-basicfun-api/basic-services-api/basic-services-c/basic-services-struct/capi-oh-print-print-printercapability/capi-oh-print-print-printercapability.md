---
title: "Print_PrinterCapability"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-printercapability
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-printercapability
---

# Print\_PrinterCapability

```
typedef struct {...} Print_PrinterCapability
```

## 概述

表示打印机能力。

****起始版本：**** 12

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Print\_ColorMode](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_colormode) \*supportedColorModes | 支持的色彩模式数组。 |
| uint32\_t supportedColorModesCount | 支持的色彩模式数量。 |
| [Print\_DuplexMode](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_duplexmode) \*supportedDuplexModes | 支持的双面打印模式数组。 |
| uint32\_t supportedDuplexModesCount | 支持的双面打印模式数量。 |
| [Print\_PageSize](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-pagesize/capi-oh-print-print-pagesize) \*supportedPageSizes | 支持的打印纸张尺寸数组。 |
| uint32\_t supportedPageSizesCount | 支持的打印纸张尺寸数量。 |
| char \*supportedMediaTypes | JSON 字符串数组格式的支持的打印介质类型。 |
| [Print\_Quality](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_quality) \*supportedQualities | 支持的打印质量数组。 |
| uint32\_t supportedQualitiesCount | 支持的打印质量数量。 |
| char \*supportedPaperSources | JSON 字符串数组格式的支持的纸张来源。 |
| uint32\_t supportedCopies | 支持的份数。 |
| [Print\_Resolution](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-resolution/capi-oh-print-print-resolution) \*supportedResolutions | 支持的打印机分辨率数组。 |
| uint32\_t supportedResolutionsCount | 支持的打印机分辨率数量。 |
| [Print\_OrientationMode](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_orientationmode) \*supportedOrientations | 支持的方向数组。 |
| uint32\_t supportedOrientationsCount | 支持的方向数量。 |
| char \*advancedCapability | JSON 格式的高级能力。 |
