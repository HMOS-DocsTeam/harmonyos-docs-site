---
title: "drawing_memory_stream.h"
sidebar_position: 22
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-memory-stream-h
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-memory-stream-h
---

# drawing\_memory\_stream.h

## 概述

文件中定义了与内存流相关的功能函数。

****引用文件：**** &lt;native\_drawing/drawing\_memory\_stream.h&gt;

****库：**** libnative\_drawing.so

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 12

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [OH\_Drawing\_MemoryStream\* OH\_Drawing\_MemoryStreamCreate(const void\* data, size\_t length, bool copyData)](#oh_drawing_memorystreamcreate) | 创建一个内存流对象。  本接口会产生错误码，可以通过[OH\_Drawing\_ErrorCodeGet](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。  data为NULL或者length等于0时返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER。 |
| [void OH\_Drawing\_MemoryStreamDestroy(OH\_Drawing\_MemoryStream\* memoryStream)](#oh_drawing_memorystreamdestroy) | 销毁内存流对象并回收该对象占用内存。 |

## 函数说明

### OH\_Drawing\_MemoryStreamCreate()

```
OH_Drawing_MemoryStream* OH_Drawing_MemoryStreamCreate(const void* data, size_t length, bool copyData)
```

****描述****

创建一个内存流对象。

本接口会产生错误码，可以通过[OH\_Drawing\_ErrorCodeGet](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。

data为NULL或者length等于0时返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const void\* data | 数据段。 |
| size\_t length | 数据段长度。 |
| bool copyData | 是否拷贝数据。true表示内存流对象会拷贝一份数据段数据，false表示内存流对象直接使用数据段数据，不拷贝。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_MemoryStream](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-memorystream/capi-drawing-oh-drawing-memorystream)\* | 函数会返回一个指针，指针指向创建的内存流对象[OH\_Drawing\_MemoryStream](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-memorystream/capi-drawing-oh-drawing-memorystream)。 |

### OH\_Drawing\_MemoryStreamDestroy()

```
void OH_Drawing_MemoryStreamDestroy(OH_Drawing_MemoryStream* memoryStream)
```

****描述****

销毁内存流对象并回收该对象占用的内存。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_MemoryStream](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-memorystream/capi-drawing-oh-drawing-memorystream)\* memoryStream | 指向内存流对象[OH\_Drawing\_MemoryStream](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-memorystream/capi-drawing-oh-drawing-memorystream)的指针。 |
