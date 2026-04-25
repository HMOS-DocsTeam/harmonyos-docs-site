---
title: "Print_PrintJob"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-printjob
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-printjob
---

# Print\_PrintJob

```
typedef struct {...} Print_PrintJob
```

## 概述

表示打印任务结构体。

****起始版本：**** 12

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \*jobName | 任务名称。 |
| uint32\_t \*fdList | 待打印的文件描述符数组。 |
| uint32\_t fdListCount | 待打印的文件描述符数量。 |
| char \*printerId | 打印机 ID。 |
| uint32\_t copyNumber | 打印份数。 |
| char \*paperSource | 纸张来源。 |
| char \*mediaType | 介质类型。 |
| char \*pageSizeId | 纸张尺寸 ID。 |
| [Print\_ColorMode](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_colormode) colorMode | 色彩模式。 |
| [Print\_DuplexMode](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_duplexmode) duplexMode | 双面模式。 |
| [Print\_Resolution](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-resolution/capi-oh-print-print-resolution) resolution | 以 dpi 为单位的打印分辨率。 |
| [Print\_Margin](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-margin/capi-oh-print-print-margin) printMargin | 打印边距。 |
| bool borderless | 无边距。 |
| [Print\_OrientationMode](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_orientationmode) orientationMode | 方向模式。 |
| [Print\_Quality](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_quality) printQuality | 打印质量。 |
| [Print\_DocumentFormat](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_documentformat) documentFormat | 文档格式。 |
| char \*advancedOptions | JSON 格式的高级选项。  支持的键包括：  - ****isReverse****：布尔类型，表示是否逆序打印。  - ****isCollate****：布尔类型，表示是否逐份打印。 |
