---
title: "ArkUI_AnimateCompleteCallback"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-arkui-nativemodule-arkui-animatecompletecallback
kit: 应用框架
last_updated: "2026-04-22"
slug: i-arkui-nativemodule-arkui-animatecompletecallback
---

# ArkUI\_AnimateCompleteCallback

```
typedef struct {...} ArkUI_AnimateCompleteCallback
```

## 概述

动画播放结束回调类型。

****起始版本：**** 12

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_animate.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-animate-h/capi-native-animate-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [ArkUI\_FinishCallbackType](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_finishcallbacktype) type | 在动画中定义结束回调的类型。 |
| void\* userData | 用于动画结束回调，传递用户自定义数据。 |

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [void (\*callback)(void\* userData)](#callback) | 动画播放结束回调。 |

## 成员函数说明

### callback()

```
void (*callback)(void* userData)
```

****描述：****

动画播放结束回调。
