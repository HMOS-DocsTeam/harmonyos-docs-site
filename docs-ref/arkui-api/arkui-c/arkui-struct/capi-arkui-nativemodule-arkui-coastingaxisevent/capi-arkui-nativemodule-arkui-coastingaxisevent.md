---
title: "ArkUI_CoastingAxisEvent"
sidebar_position: 166
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-coastingaxisevent
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-coastingaxisevent
---

# ArkUI\_CoastingAxisEvent

```
typedef struct ArkUI_CoastingAxisEvent ArkUI_CoastingAxisEvent
```

## 概述

定义惯性滚动轴事件。

当用户在触控板上用双指滑动时，系统会根据手指抬起时的速度，按照一定的衰减曲线构造滑动事件。可以监听此类事件，以便在常规轴事件之后立即处理抛滑效果。

仅当用户在触控板上双指抛滑，且指针位置下存在通过[registerNodeEvent](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent)注册了[NODE\_ON\_COASTING\_AXIS\_EVENT](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype)事件的组件时，才能接收到此事件。

****起始版本：**** 22

****相关模块：**** [ArkUI\_EventModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-eventmodule/capi-arkui-eventmodule)

****所在头文件：**** [ui\_input\_event.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h)
