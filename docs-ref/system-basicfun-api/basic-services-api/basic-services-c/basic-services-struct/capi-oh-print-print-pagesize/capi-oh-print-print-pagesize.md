---
title: "Print_PageSize"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-pagesize
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-pagesize
---

# Print\_PageSize

```
typedef struct {...} Print_PageSize
```

## 概述

表示纸张尺寸信息。

****起始版本：**** 12

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \*id | 纸张 ID。 |
| char \*name | 纸张名称。 |
| uint32\_t width | 纸张宽度，单位：毫米。 |
| uint32\_t height | 纸张高度，单位：毫米。 |
