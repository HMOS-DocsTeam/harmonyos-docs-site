---
title: "WindowManager_Rect"
sidebar_position: 134
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-windowmanager-rect
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-windowmanager-rect
---

# WindowManager\_Rect

```
typedef struct {...} WindowManager_Rect
```

## 概述

定义窗口矩形结构体，包含窗口位置和宽高信息。

****起始版本：**** 15

****相关模块：**** [WindowManager](/ref/arkui-api/arkui-c/arkui-module/capi-windowmanager/capi-windowmanager)

****所在头文件：**** [oh\_window\_comm.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-comm-h/capi-oh-window-comm-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t posX | 窗口的x轴，单位为px，该参数为整数。 |
| int32\_t posY | 窗口的y轴，单位为px，该参数为整数。 |
| uint32\_t width | 窗口的宽度，单位为px，该参数为整数。 |
| uint32\_t height | 窗口的高度，单位为px，该参数为整数。 |
