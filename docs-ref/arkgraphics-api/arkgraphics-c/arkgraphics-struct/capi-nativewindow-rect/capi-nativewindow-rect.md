---
title: "Rect"
sidebar_position: 38
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativewindow-rect
kit: 图形
last_updated: "2026-04-22"
slug: capi-nativewindow-rect
---

# Rect

```
struct Rect { ... }
```

## 概述

如果rects是空指针nullptr，默认Buffer大小为脏区。

****相关模块：**** [NativeWindow](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativewindow/capi-nativewindow)

****所在头文件：**** [external\_window.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t x | 矩形框起始x坐标。 |
| int32\_t y | 矩形框起始y坐标。 |
| uint32\_t w | 矩形框宽度。 |
| uint32\_t h | 矩形框高度。 |
