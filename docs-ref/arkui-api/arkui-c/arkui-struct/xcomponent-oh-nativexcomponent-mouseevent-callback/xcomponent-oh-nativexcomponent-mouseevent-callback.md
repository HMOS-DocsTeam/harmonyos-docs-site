---
title: "OH_NativeXComponent_MouseEvent_Callback"
sidebar_position: 57
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xcomponent-oh-nativexcomponent-mouseevent-callback
kit: 应用框架
last_updated: "2026-04-22"
slug: xcomponent-oh-nativexcomponent-mouseevent-callback
---

# OH\_NativeXComponent\_MouseEvent\_Callback

```
typedef struct OH_NativeXComponent_MouseEvent_Callback {...} OH_NativeXComponent_MouseEvent_Callback
```

## 概述

注册鼠标事件的回调。

****起始版本：**** 9

****相关模块：**** [OH\_NativeXComponent Native XComponent](/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent)

****所在头文件：**** [native\_interface\_xcomponent.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h)

## 汇总

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [void (\*DispatchMouseEvent)(OH\_NativeXComponent\* component, void\* window)](#dispatchmouseevent) | 当鼠标事件被触发时调用。 |
| [void (\*DispatchHoverEvent)(OH\_NativeXComponent\* component, bool isHover)](#dispatchhoverevent) | 当悬停事件被触发时调用。 |

## 成员函数说明

### DispatchMouseEvent()

```
void (*DispatchMouseEvent)(OH_NativeXComponent* component, void* window)
```

****描述：****

当鼠标事件被触发时调用。

****起始版本：**** 9

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)\* component | 表示指向[OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。 |
| void\* window | 表示NativeWindow句柄。 |

### DispatchHoverEvent()

```
void (*DispatchHoverEvent)(OH_NativeXComponent* component, bool isHover)
```

****描述：****

当悬停事件被触发时调用。

****起始版本：**** 9

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)\* component | 表示指向[OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。 |
| bool isHover | 表示鼠标或手写笔是否悬浮在组件上，进入时为true，离开时为false。 |
