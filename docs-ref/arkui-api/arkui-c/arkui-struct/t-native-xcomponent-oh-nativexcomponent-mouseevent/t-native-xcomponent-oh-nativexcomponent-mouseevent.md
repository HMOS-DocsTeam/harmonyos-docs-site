---
title: "OH_NativeXComponent_MouseEvent"
sidebar_position: 55
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/t-native-xcomponent-oh-nativexcomponent-mouseevent
kit: 应用框架
last_updated: "2026-04-22"
slug: t-native-xcomponent-oh-nativexcomponent-mouseevent
---

# OH\_NativeXComponent\_MouseEvent

```
typedef struct {...} OH_NativeXComponent_MouseEvent
```

## 概述

鼠标事件。

****起始版本：**** 9

****相关模块：**** [OH\_NativeXComponent Native XComponent](/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent)

****所在头文件：**** [native\_interface\_xcomponent.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| float x | 点击触点相对于当前组件左上角的x轴坐标。单位：vp。 |
| float y | 点击触点相对于当前组件左上角的y轴坐标。单位：vp。 |
| float screenX | 点击触点相对于XComponent所在应用屏幕左上角的x轴坐标。单位：vp。 |
| float screenY | 点击触点相对于XComponent所在应用屏幕左上角的y轴坐标。单位：vp。 |
| int64\_t timestamp | 当前鼠标事件的时间戳。触发事件时距离系统启动的时间间隔，单位纳秒。 |
| [OH\_NativeXComponent\_MouseEventAction](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_nativexcomponent_mouseeventaction) action | 当前鼠标事件动作。 |
| [OH\_NativeXComponent\_MouseEventButton](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_nativexcomponent_mouseeventbutton) button | 鼠标事件按键。 |
