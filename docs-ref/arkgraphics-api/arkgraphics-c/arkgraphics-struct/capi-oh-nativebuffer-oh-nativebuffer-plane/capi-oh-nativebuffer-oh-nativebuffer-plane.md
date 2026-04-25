---
title: "OH_NativeBuffer_Plane"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer-oh-nativebuffer-plane
kit: 图形
last_updated: "2026-04-22"
slug: capi-oh-nativebuffer-oh-nativebuffer-plane
---

# OH\_NativeBuffer\_Plane

```
typedef struct {...} OH_NativeBuffer_Plane
```

## 概述

单个图像平面格式信息。

****起始版本：**** 12

****相关模块：**** [OH\_NativeBuffer](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativebuffer/capi-oh-nativebuffer)

****所在头文件：**** [native\_buffer.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint64\_t offset | 图像平面的偏移量，单位为Byte。 |
| uint32\_t rowStride | 从图像一行的第一个值到下一行的第一个值的距离，单位为Byte。 |
| uint32\_t columnStride | 从图像一列的第一个值到下一列的第一个值的距离，单位为Byte。 |
