---
title: "OH_NativeBuffer_Planes"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer-oh-nativebuffer-planes
kit: 图形
last_updated: "2026-04-22"
slug: capi-oh-nativebuffer-oh-nativebuffer-planes
---

# OH\_NativeBuffer\_Planes

```
typedef struct OH_NativeBuffer_Planes {...} OH_NativeBuffer_Planes
```

## 概述

OH\_NativeBuffer的图像平面格式信息。

****起始版本：**** 12

****相关模块：**** [OH\_NativeBuffer](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativebuffer/capi-oh-nativebuffer)

****所在头文件：**** [native\_buffer.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t planeCount | 不同平面的数量。 |
| [OH\_NativeBuffer\_Plane](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-plane/capi-oh-nativebuffer-oh-nativebuffer-plane) planes[4] | 图像平面格式信息数组。 |
