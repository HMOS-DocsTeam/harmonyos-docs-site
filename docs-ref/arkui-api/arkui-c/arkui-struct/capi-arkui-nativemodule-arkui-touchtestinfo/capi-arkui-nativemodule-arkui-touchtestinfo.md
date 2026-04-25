---
title: "ArkUI_TouchTestInfo"
sidebar_position: 170
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-touchtestinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-touchtestinfo
---

# ArkUI\_TouchTestInfo

```
typedef struct ArkUI_TouchTestInfo ArkUI_TouchTestInfo
```

## 概述

定义触摸测试信息。

当用户通过[registerNodeEvent](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent)注册了[NODE\_ON\_CHILD\_TOUCH\_TEST](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype)事件时，才能接收到此事件。触摸测试信息包含触摸测试策略、命中测试过程中需要作用的子组件ID和触摸测试信息项的列表。

****起始版本：**** 22

****相关模块：**** [ArkUI\_EventModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-eventmodule/capi-arkui-eventmodule)

****所在头文件：**** [ui\_input\_event.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h)
