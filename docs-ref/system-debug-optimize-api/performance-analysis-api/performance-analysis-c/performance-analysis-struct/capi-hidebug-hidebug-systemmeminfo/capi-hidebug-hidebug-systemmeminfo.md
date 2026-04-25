---
title: "HiDebug_SystemMemInfo"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-systemmeminfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidebug-hidebug-systemmeminfo
---

# HiDebug\_SystemMemInfo

```
typedef struct HiDebug_SystemMemInfo {...} HiDebug_SystemMemInfo
```

## 概述

系统内存信息结构类型定义。

****起始版本：**** 12

****相关模块：**** [HiDebug](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug)

****所在头文件：**** [hidebug\_type.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t totalMem | 系统总的内存，以KB为单位。 |
| uint32\_t freeMem | 系统空闲的内存，以KB为单位。 |
| uint32\_t availableMem | 系统可用的内存，以KB为单位。 |
