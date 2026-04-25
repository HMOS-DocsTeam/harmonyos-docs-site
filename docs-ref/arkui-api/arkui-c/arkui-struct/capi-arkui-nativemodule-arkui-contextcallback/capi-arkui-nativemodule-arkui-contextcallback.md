---
title: "ArkUI_ContextCallback"
sidebar_position: 75
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-contextcallback
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-contextcallback
---

# ArkUI\_ContextCallback

```
typedef struct {...} ArkUI_ContextCallback
```

## 概述

事件回调类型。

****起始版本：**** 12

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_type.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| void\* userData | 自定义类型，开发者自定义类型的数据，在回调时作为参数传入。 |

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [void (\*callback)(void\* userData)](#callback) | 事件回调。 |

## 成员函数说明

### callback()

```
void (*callback)(void* userData)
```

****描述：****

事件回调。
