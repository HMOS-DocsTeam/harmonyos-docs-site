---
title: "Input_InterceptorEventCallback"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input-input-interceptoreventcallback
kit: 系统
last_updated: "2026-04-22"
slug: capi-input-input-interceptoreventcallback
---

# Input\_InterceptorEventCallback

```
typedef struct Input_InterceptorEventCallback {...} Input_InterceptorEventCallback
```

## 概述

拦截回调事件结构体，拦截鼠标事件、触屏输入事件和轴事件。

****起始版本：**** 12

****相关模块：**** [input](/ref/system-basicfun-api/input-api/input-c/input-module/capi-input/capi-input)

****所在头文件：**** [oh\_input\_manager.h](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Input\_MouseEventCallback](#input_mouseeventcallback) mouseCallback | 鼠标事件的回调函数。 |
| [Input\_TouchEventCallback](#input_toucheventcallback) touchCallback | 触屏输入事件的回调函数。 |
| [Input\_AxisEventCallback](#input_axiseventcallback) axisCallback | 轴事件的回调函数。 |

### 成员函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (\*Input\_KeyEventCallback)(const Input\_KeyEvent\* keyEvent)](#input_keyeventcallback) | Input\_KeyEventCallback() | 按键事件的回调函数，keyEvent的生命周期为回调函数内。 |
| [typedef void (\*Input\_MouseEventCallback)(const Input\_MouseEvent\* mouseEvent)](#input_mouseeventcallback) | Input\_MouseEventCallback() | 鼠标事件的回调函数，mouseEvent的生命周期为回调函数内。 |
| [typedef void (\*Input\_TouchEventCallback)(const Input\_TouchEvent\* touchEvent)](#input_toucheventcallback) | Input\_TouchEventCallback() | 触屏输入事件的回调函数，touchEvent的生命周期为回调函数内。 |
| [typedef void (\*Input\_AxisEventCallback)(const Input\_AxisEvent\* axisEvent)](#input_axiseventcallback) | Input\_AxisEventCallback() | 轴事件的回调函数，axisEvent的生命周期为回调函数内。 |

## 成员函数说明

### Input\_KeyEventCallback()

```
typedef void (*Input_KeyEventCallback)(const Input_KeyEvent* keyEvent)
```

****描述****

按键事件的回调函数，keyEvent的生命周期为回调函数内。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [Input\_KeyEvent](/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent)\* keyEvent | 按键事件对象。 |

### Input\_MouseEventCallback()

```
typedef void (*Input_MouseEventCallback)(const Input_MouseEvent* mouseEvent)
```

****描述****

鼠标事件的回调函数，mouseEvent的生命周期为回调函数内。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [Input\_MouseEvent](/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent)\* mouseEvent | 鼠标事件对象。 |

### Input\_TouchEventCallback()

```
typedef void (*Input_TouchEventCallback)(const Input_TouchEvent* touchEvent)
```

****描述****

触屏输入事件的回调函数，touchEvent的生命周期为回调函数内。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [Input\_TouchEvent](/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent)\* touchEvent | 触屏输入事件对象。 |

### Input\_AxisEventCallback()

```
typedef void (*Input_AxisEventCallback)(const Input_AxisEvent* axisEvent)
```

****描述****

轴事件的回调函数，axisEvent的生命周期为回调函数内。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [Input\_AxisEvent](/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent)\* axisEvent | 轴事件对象。 |
