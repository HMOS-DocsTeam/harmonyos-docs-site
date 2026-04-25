---
title: "Print_PropertyList"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-propertylist
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-propertylist
---

# Print\_PropertyList

```
typedef struct {...} Print_PropertyList
```

## 概述

打印机属性列表。

****起始版本：**** 12

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t count | 属性数量。 |
| [Print\_Property](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-print-print-property/capi-oh-print-print-property) \*list | 属性指针数组。 |
