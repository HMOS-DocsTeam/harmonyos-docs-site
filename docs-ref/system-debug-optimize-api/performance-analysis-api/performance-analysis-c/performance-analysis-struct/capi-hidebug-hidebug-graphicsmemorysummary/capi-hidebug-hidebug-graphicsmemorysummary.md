---
title: "HiDebug_GraphicsMemorySummary"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-graphicsmemorysummary
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidebug-hidebug-graphicsmemorysummary
---

# HiDebug\_GraphicsMemorySummary

```
typedef struct HiDebug_GraphicsMemorySummary {...} HiDebug_GraphicsMemorySummary
```

## 概述

应用图形显存占用详情的结构定义。

****起始版本：**** 21

****相关模块：**** [HiDebug](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug)

****所在头文件：**** [hidebug\_type.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t gl | gl内存大小，RenderService渲染进程加载所需资源占用的内存，例如图片、纹理等，以KB为单位。 |
| uint32\_t graph | graph内存大小，进程统计的DMA内存占用，包括直接通过接口申请的DMA buffer和通过allocator\_host申请的DMA buffer，以KB为单位。 |
