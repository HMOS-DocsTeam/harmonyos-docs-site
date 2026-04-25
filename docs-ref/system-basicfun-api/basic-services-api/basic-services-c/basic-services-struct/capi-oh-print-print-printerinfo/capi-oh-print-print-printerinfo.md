---
title: "Print_PrinterInfo"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-printerinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-printerinfo
---

# Print\_PrinterInfo

```
typedef struct {...} Print_PrinterInfo
```

## 概述

表示打印机信息。

****起始版本：**** 12

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Print\_PrinterState](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_printerstate) printerState | 打印机状态。 |
| [Print\_PrinterCapability](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-printercapability/capi-oh-print-print-printercapability) capability | 打印机能力。 |
| [Print\_DefaultValue](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-defaultvalue/capi-oh-print-print-defaultvalue) defaultValue | 打印机当前属性。 |
| bool isDefaultPrinter | 默认打印机。 |
| char \*printerId | 打印机 ID。 |
| char \*printerName | 打印机名称。 |
| char \*description | 打印机描述。 |
| char \*location | 打印机位置。 |
| char \*makeAndModel | 打印机品牌和型号信息。 |
| char \*printerUri | 打印机 URI。 |
| char \*detailInfo | JSON 格式的详细信息。 |
