---
title: "Print_PrintAttributes"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-printattributes
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-printattributes
---

# Print\_PrintAttributes

```
typedef struct {...} Print_PrintAttributes
```

## 概述

表示打印属性结构体。

****起始版本：**** 13

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Print\_Range](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-range/capi-oh-print-print-range) pageRange | 打印范围。 |
| [Print\_PageSize](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-pagesize/capi-oh-print-print-pagesize) pageSize | 打印纸张尺寸。 |
| [Print\_Margin](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-margin/capi-oh-print-print-margin) pageMargin | 打印边距。 |
| uint32\_t copyNumber | 份数。 |
| uint32\_t duplexMode | 双面模式。 |
| uint32\_t colorMode | 色彩模式。 |
| bool isSequential | 顺序打印。  true表示顺序打印，false表示逆序打印。 |
| bool isLandscape | 打印方向（是否横向）。  true表示打印方式为横向，false表示打印方向为竖向。 |
| bool hasOption | 打印选项标志。  true表示有打印选项，false表示没有打印选项。 |
| char options[256] | 打印选项。 |
