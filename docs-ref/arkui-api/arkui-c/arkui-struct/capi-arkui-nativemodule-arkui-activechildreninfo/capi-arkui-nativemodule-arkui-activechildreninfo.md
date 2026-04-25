---
title: "ArkUI_ActiveChildrenInfo"
sidebar_position: 105
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-activechildreninfo
---

# ArkUI\_ActiveChildrenInfo

```
typedef struct ArkUI_ActiveChildrenInfo ArkUI_ActiveChildrenInfo
```

## 概述

定义ActiveChildrenInfo类信息。

****起始版本：**** 14

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_type.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h)

****相关接口：****

| 名称 | 描述 |
| --- | --- |
| [OH\_ArkUI\_NodeUtils\_GetActiveChildrenInfo](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getactivechildreninfo) | 获取某个节点所有活跃的子节点。 |
| [OH\_ArkUI\_ActiveChildrenInfo\_GetNodeByIndex](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_activechildreninfo_getnodebyindex) | 获取ActiveChildrenInfo结构体的下标为index的子节点。 |
| [OH\_ArkUI\_ActiveChildrenInfo\_GetCount](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_activechildreninfo_getcount) | 获取ActiveChildrenInfo结构体内的节点数量。 |
| [OH\_ArkUI\_ActiveChildrenInfo\_Destroy](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_activechildreninfo_destroy) | 销毁ActiveChildrenInfo实例。 |
