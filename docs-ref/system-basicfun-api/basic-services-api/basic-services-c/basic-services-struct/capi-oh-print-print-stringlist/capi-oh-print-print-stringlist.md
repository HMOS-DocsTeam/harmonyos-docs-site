---
title: "Print_StringList"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-stringlist
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-stringlist
---

# Print\_StringList

```
typedef struct {...} Print_StringList
```

## 概述

表示字符串列表。

****起始版本：**** 12

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t count | 字符串数量。 |
| char \*\*list | 字符串指针数组。 |
