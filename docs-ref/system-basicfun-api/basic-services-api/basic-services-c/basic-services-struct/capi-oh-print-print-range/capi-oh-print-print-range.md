---
title: "Print_Range"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-range
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-range
---

# Print\_Range

```
typedef struct {...} Print_Range
```

## 概述

表示打印范围结构体。

****起始版本：**** 13

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t startPage | 打印起始页。 |
| uint32\_t endPage | 打印结束页。 |
| uint32\_t pagesArrayLen | 打印页数组长度。 |
| uint32\_t\* pagesArray | 打印页数组。 |
