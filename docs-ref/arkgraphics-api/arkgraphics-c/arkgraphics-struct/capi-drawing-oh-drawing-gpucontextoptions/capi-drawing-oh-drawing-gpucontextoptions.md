---
title: "OH_Drawing_GpuContextOptions"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontextoptions
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-gpucontextoptions
---

# OH\_Drawing\_GpuContextOptions

```
typedef struct {...} OH_Drawing_GpuContextOptions
```

## 概述

定义有关图形处理器上下文的选项。

****起始版本：**** 12

****废弃版本：**** 18

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_gpu\_context.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-gpu-context-h/capi-drawing-gpu-context-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| bool allowPathMaskCaching | 用于控制是否启用路径蒙版缓存，如果为true，则允许缓存路径蒙版纹理，如果为false，则不允许。 |
