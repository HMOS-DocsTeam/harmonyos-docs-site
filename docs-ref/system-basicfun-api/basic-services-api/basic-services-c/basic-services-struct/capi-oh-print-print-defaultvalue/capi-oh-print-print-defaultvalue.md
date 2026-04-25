---
title: "Print_DefaultValue"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-defaultvalue
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-defaultvalue
---

# Print\_DefaultValue

```
typedef struct {...} Print_DefaultValue
```

## 概述

表示当前属性。

****起始版本：**** 12

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Print\_ColorMode](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_colormode) defaultColorMode | 默认色彩模式。 |
| [Print\_DuplexMode](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_duplexmode) defaultDuplexMode | 默认双面模式。 |
| char \*defaultMediaType | 默认介质类型。 |
| char \*defaultPageSizeId | 默认纸张尺寸 ID。 |
| [Print\_Margin](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-margin/capi-oh-print-print-margin) defaultMargin | 默认边距。 |
| char \*defaultPaperSource | 默认纸张来源。 |
| [Print\_Quality](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_quality) defaultPrintQuality | 默认打印质量。 |
| uint32\_t defaultCopies | 默认份数。 |
| [Print\_Resolution](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-resolution/capi-oh-print-print-resolution) defaultResolution | 默认打印机分辨率。 |
| [Print\_OrientationMode](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_orientationmode) defaultOrientation | 默认方向。 |
| char \*otherDefaultValues | JSON 格式的其他默认值。 |
