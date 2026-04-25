---
title: "Print_PrintDocCallback"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-printdoccallback
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-print-print-printdoccallback
---

# Print\_PrintDocCallback

```
typedef struct {...} Print_PrintDocCallback
```

## 概述

表示打印文档状态回调结构体。

****起始版本：**** 13

****相关模块：**** [OH\_Print](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-print/capi-oh-print)

****所在头文件：**** [ohprint.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Print\_OnStartLayoutWrite](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_onstartlayoutwrite) startLayoutWriteCb | 打印开始布局回调。 |
| [Print\_OnJobStateChanged](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohprint-h/capi-ohprint-h#print_onjobstatechanged) jobStateChangedCb | 打印任务状态回调。 |
