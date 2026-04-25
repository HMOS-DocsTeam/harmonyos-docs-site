---
title: "HiDebug_MemoryLimit"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-memorylimit
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidebug-hidebug-memorylimit
---

# HiDebug\_MemoryLimit

```
typedef struct HiDebug_MemoryLimit {...} HiDebug_MemoryLimit
```

## 概述

应用程序进程内存限制结构类型定义。

****起始版本：**** 12

****相关模块：**** [HiDebug](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug)

****所在头文件：**** [hidebug\_type.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint64\_t rssLimit | 应用程序进程可用的物理内存限制，以KB为单位，实际当前系统未对进程可用物理内存做限制，但是进程的可用物理内存仍然不会超过设备的实际最大可用物理内存，当前设备的物理内存使用情况可通过[OH\_HiDebug\_GetSystemMemInfo](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-h/capi-hidebug-h#oh_hidebug_getsystemmeminfo)获取。 |
| uint64\_t vssLimit | 应用程序进程的虚拟内存限制，以KB为单位。 |
