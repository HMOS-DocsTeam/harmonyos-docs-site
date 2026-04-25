---
title: "buffer_handle.h"
sidebar_position: 52
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-buffer-handle-h
kit: 图形
last_updated: "2026-04-22"
slug: capi-buffer-handle-h
---

# buffer\_handle.h

## 概述

定义NativeWindow模块使用的BufferHandle的结构体。

****引用文件：**** &lt;native\_window/buffer\_handle.h&gt;

****库：**** libnative\_window.so

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeWindow

****起始版本：**** 8

****相关模块：**** [NativeWindow](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativewindow/capi-nativewindow)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [BufferHandle](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-bufferhandle/capi-nativewindow-bufferhandle) | BufferHandle | 缓冲区句柄，用于对缓冲区的信息传递和获取。句柄包含了缓冲区的文件描述符、尺寸、格式、用途、虚拟地址、共享内存键、物理地址、自定义数据。 |
