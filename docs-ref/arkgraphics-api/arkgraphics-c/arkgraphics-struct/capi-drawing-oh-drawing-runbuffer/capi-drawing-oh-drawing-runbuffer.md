---
title: "OH_Drawing_RunBuffer"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-runbuffer
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-runbuffer
---

# OH\_Drawing\_RunBuffer

```
typedef struct {...} OH_Drawing_RunBuffer
```

## 概述

结构体用于描述一块内存，描述文字和位置信息。

****起始版本：**** 11

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_text\_blob.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-blob-h/capi-drawing-text-blob-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint16\_t\* glyphs | 存储文字索引。 |
| float\* pos | 存储文字的位置。 |
| char\* utf8text | 存储文字UTF-8编码。 |
| uint32\_t\* clusters | 存储文字簇UTF-8编码（簇指的是集合）。 |
