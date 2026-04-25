---
title: "Region"
sidebar_position: 37
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativewindow-region
kit: 图形
last_updated: "2026-04-22"
slug: capi-nativewindow-region
---

# Region

```
typedef struct {...} Region
```

## 概述

表示本地窗口OHNativeWindow需要更新内容的矩形区域（脏区）。

****起始版本：**** 8

****相关模块：**** [NativeWindow](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativewindow/capi-nativewindow)

****所在头文件：**** [external\_window.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| \* rects | 如果rects是空指针nullptr，默认Buffer大小为脏区。 |
| int32\_t rectNumber | 如果rectNumber为0，默认Buffer大小为脏区。 |
