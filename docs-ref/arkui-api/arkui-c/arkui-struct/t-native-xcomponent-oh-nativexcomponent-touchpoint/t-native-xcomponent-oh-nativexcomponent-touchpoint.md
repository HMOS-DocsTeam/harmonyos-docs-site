---
title: "OH_NativeXComponent_TouchPoint"
sidebar_position: 53
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/t-native-xcomponent-oh-nativexcomponent-touchpoint
kit: 应用框架
last_updated: "2026-04-22"
slug: t-native-xcomponent-oh-nativexcomponent-touchpoint
---

# OH\_NativeXComponent\_TouchPoint

```
typedef struct {...} OH_NativeXComponent_TouchPoint
```

## 概述

触摸事件中触摸点的信息。

****起始版本：**** 8

****相关模块：**** [OH\_NativeXComponent Native XComponent](/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent)

****所在头文件：**** [native\_interface\_xcomponent.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t id | 手指的唯一标识符。 |
| float screenX | 触摸点相对于XComponent所在应用窗口左上角的x坐标。 |
| float screenY | 触摸点相对于XComponent所在应用窗口左上角的y坐标。 |
| float x | 触摸点相对于XComponent组件左边缘的x坐标。 |
| float y | 触摸点相对于XComponent组件上边缘的y坐标。 |
| [OH\_NativeXComponent\_TouchEventType](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_nativexcomponent_toucheventtype) type | 触摸事件的触摸类型。 |
| double size | 指垫和屏幕之间的接触面积。 |
| float force | 当前触摸事件的压力。 |
| int64\_t timeStamp | 当前触摸事件的时间戳。触发事件时距离系统启动的时间间隔，单位纳秒。 |
| bool isPressed | 当前点是否被按下，按下时为true，离开时为false。 |
