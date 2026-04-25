---
title: "HiDebug_NativeMemInfo"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-nativememinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidebug-hidebug-nativememinfo
---

# HiDebug\_NativeMemInfo

```
typedef struct HiDebug_NativeMemInfo {...} HiDebug_NativeMemInfo
```

## 概述

应用程序进程本机内存信息结构类型定义。

****起始版本：**** 12

****相关模块：**** [HiDebug](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug)

****所在头文件：**** [hidebug\_type.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t pss | 进程比例集大小内存，以KB为单位。 |
| uint32\_t vss | 虚拟内存大小，以KB为单位。 |
| uint32\_t rss | 常驻集大小，以KB为单位。 |
| uint32\_t sharedDirty | 共享脏内存的大小，以KB为单位。 |
| uint32\_t privateDirty | 专用脏内存的大小，以KB为单位。 |
| uint32\_t sharedClean | 共享干净内存的大小，以KB为单位。 |
| uint32\_t privateClean | 专用干净内存的大小，以KB为单位。 |
