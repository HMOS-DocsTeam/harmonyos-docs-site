---
title: "drawing_record_cmd.h"
sidebar_position: 29
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-record-cmd-h
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-record-cmd-h
---

# drawing\_record\_cmd.h

## 概述

文件中定义了与录制指令对象相关的功能函数。

****引用文件：**** &lt;native\_drawing/drawing\_record\_cmd.h&gt;

****库：**** libnative\_drawing.so

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 13

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [OH\_Drawing\_RecordCmdUtils\* OH\_Drawing\_RecordCmdUtilsCreate(void)](#oh_drawing_recordcmdutilscreate) | 创建一个录制指令工具对象。 |
| [OH\_Drawing\_ErrorCode OH\_Drawing\_RecordCmdUtilsDestroy(OH\_Drawing\_RecordCmdUtils\* recordCmdUtils)](#oh_drawing_recordcmdutilsdestroy) | 销毁一个录制指令工具对象，并回收该对象占用的内存。 |
| [OH\_Drawing\_ErrorCode OH\_Drawing\_RecordCmdUtilsBeginRecording(OH\_Drawing\_RecordCmdUtils\* recordCmdUtils,int32\_t width, int32\_t height, OH\_Drawing\_Canvas\*\* canvas)](#oh_drawing_recordcmdutilsbeginrecording) | 开始录制。此接口需要与[OH\_Drawing\_RecordCmdUtilsFinishRecording](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-record-cmd-h/capi-drawing-record-cmd-h#oh_drawing_recordcmdutilsfinishrecording)接口成对使用。  指令录制工具生成录制类型的画布对象，可调用drawing的绘制接口，记录接下来所有的绘制指令。 |
| [OH\_Drawing\_ErrorCode OH\_Drawing\_RecordCmdUtilsFinishRecording(OH\_Drawing\_RecordCmdUtils\* recordCmdUtils,OH\_Drawing\_RecordCmd\*\* recordCmd)](#oh_drawing_recordcmdutilsfinishrecording) | 结束录制。在调用此接口前，需要先调用[OH\_Drawing\_RecordCmdUtilsBeginRecording](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-record-cmd-h/capi-drawing-record-cmd-h#oh_drawing_recordcmdutilsbeginrecording)接口。  指令录制工具结束录制指令，将录制类型画布对象记录的绘制指令存入生成的录制指令对象。 |
| [OH\_Drawing\_ErrorCode OH\_Drawing\_RecordCmdDestroy(OH\_Drawing\_RecordCmd\* recordCmd)](#oh_drawing_recordcmddestroy) | 销毁录制指令对象，并回收该对象占用的内存。 |

## 函数说明

### OH\_Drawing\_RecordCmdUtilsCreate()

```
OH_Drawing_RecordCmdUtils* OH_Drawing_RecordCmdUtilsCreate(void)
```

****描述****

创建一个录制指令工具对象。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 13

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_RecordCmdUtils](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmdutils/capi-drawing-oh-drawing-recordcmdutils)\* | 返回用于录制指令的工具对象。 |

### OH\_Drawing\_RecordCmdUtilsDestroy()

```
OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsDestroy(OH_Drawing_RecordCmdUtils* recordCmdUtils)
```

****描述****

销毁一个录制指令工具对象，并回收该对象占用的内存。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_RecordCmdUtils](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmdutils/capi-drawing-oh-drawing-recordcmdutils)\* recordCmdUtils | 指向录制指令工具对象[OH\_Drawing\_RecordCmdUtils](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmdutils/capi-drawing-oh-drawing-recordcmdutils)的指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ErrorCode](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode) | 函数返回执行错误码。  返回OH\_DRAWING\_SUCCESS，表示执行成功。  返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER，表示参数recordCmdUtils为空。 |

### OH\_Drawing\_RecordCmdUtilsBeginRecording()

```
OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsBeginRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils,int32_t width, int32_t height, OH_Drawing_Canvas** canvas)
```

****描述****

开始录制。此接口需要与[OH\_Drawing\_RecordCmdUtilsFinishRecording](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-record-cmd-h/capi-drawing-record-cmd-h#oh_drawing_recordcmdutilsfinishrecording)接口成对使用。

指令录制工具生成录制类型的画布对象，可调用drawing的绘制接口，记录接下来所有的绘制指令。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_RecordCmdUtils](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmdutils/capi-drawing-oh-drawing-recordcmdutils)\* recordCmdUtils | 指向录制工具对象[OH\_Drawing\_RecordCmdUtils](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmdutils/capi-drawing-oh-drawing-recordcmdutils)的指针。 |
| int32\_t width | 画布的宽度。 |
| int32\_t height | 画布的高度。 |
| [OH\_Drawing\_Canvas](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas)\*\* canvas | 指向画布对象[OH\_Drawing\_Canvas](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas)的二级指针，作为出参，开发者无需释放。  该画布对象不支持嵌套调用[OH\_Drawing\_CanvasDrawRecordCmd](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_canvasdrawrecordcmd)接口。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ErrorCode](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode) | 函数返回执行错误码。  返回OH\_DRAWING\_SUCCESS, 表示执行成功。  返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER, 表示参数recordCmdUtils或者canvas为空。  当width和height小于等于0的时，也会返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER。  返回OH\_DRAWING\_ERROR\_ALLOCATION\_FAILED，表示系统内存不足。 |

### OH\_Drawing\_RecordCmdUtilsFinishRecording()

```
OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsFinishRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils,OH_Drawing_RecordCmd** recordCmd)
```

****描述****

结束录制。在调用此接口前，需要先调用[OH\_Drawing\_RecordCmdUtilsBeginRecording](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-record-cmd-h/capi-drawing-record-cmd-h#oh_drawing_recordcmdutilsbeginrecording)接口。

指令录制工具结束录制指令，将录制类型画布对象记录的绘制指令存入生成的录制指令对象。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_RecordCmdUtils](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmdutils/capi-drawing-oh-drawing-recordcmdutils)\* recordCmdUtils | 指向录制指令工具对象[OH\_Drawing\_RecordCmdUtils](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmdutils/capi-drawing-oh-drawing-recordcmdutils)的指针。 |
| [OH\_Drawing\_RecordCmd](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmd/capi-drawing-oh-drawing-recordcmd)\*\* recordCmd | 指向录制指令对象[OH\_Drawing\_RecordCmd](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmd/capi-drawing-oh-drawing-recordcmd)的二级指针，作为出参，开发者调用[OH\_Drawing\_CanvasDrawRecordCmd](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_canvasdrawrecordcmd)接口绘制该对象。需要调用[OH\_Drawing\_RecordCmdDestroy](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-record-cmd-h/capi-drawing-record-cmd-h#oh_drawing_recordcmddestroy)接口释放。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ErrorCode](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode) | 函数返回执行错误码。  返回OH\_DRAWING\_SUCCESS，表示执行成功。  返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER，表示参数recordCmdUtils或者recordCmd为空。  返回OH\_DRAWING\_ERROR\_ALLOCATION\_FAILED，表示系统内存不足。 |

### OH\_Drawing\_RecordCmdDestroy()

```
OH_Drawing_ErrorCode OH_Drawing_RecordCmdDestroy(OH_Drawing_RecordCmd* recordCmd)
```

****描述****

销毁录制指令对象，并回收该对象占用的内存。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_RecordCmd](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmd/capi-drawing-oh-drawing-recordcmd)\* recordCmd | 指向对象[OH\_Drawing\_RecordCmd](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmd/capi-drawing-oh-drawing-recordcmd)的指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ErrorCode](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode) | 函数返回执行错误码。  返回OH\_DRAWING\_SUCCESS，表示执行成功。  返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER，表示参数recordCmd为空。 |
