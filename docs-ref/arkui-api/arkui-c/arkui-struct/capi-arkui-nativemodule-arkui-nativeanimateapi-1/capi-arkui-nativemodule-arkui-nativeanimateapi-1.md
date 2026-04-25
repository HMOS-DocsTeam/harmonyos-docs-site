---
title: "ArkUI_NativeAnimateAPI_1"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativeanimateapi-1
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-nativeanimateapi-1
---

# ArkUI\_NativeAnimateAPI\_1

```
typedef struct {...} ArkUI_NativeAnimateAPI_1
```

## 概述

ArkUI提供的Native侧动画接口集合。

****起始版本：**** 12

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_animate.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-animate-h/capi-native-animate-h)

## 汇总

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [int32\_t (\*animateTo)(ArkUI\_ContextHandle context, ArkUI\_AnimateOption\* option, ArkUI\_ContextCallback\* update,ArkUI\_AnimateCompleteCallback\* complete)](#animateto) | 显式动画接口。 |
| [int32\_t (\*keyframeAnimateTo)(ArkUI\_ContextHandle context, ArkUI\_KeyframeAnimateOption\* option)](#keyframeanimateto) | 关键帧动画接口。 |
| [ArkUI\_AnimatorHandle (\*createAnimator)(ArkUI\_ContextHandle context, ArkUI\_AnimatorOption\* option)](#createanimator) | 创建animator动画对象。 |
| [void (\*disposeAnimator)(ArkUI\_AnimatorHandle animatorHandle)](#disposeanimator) | 销毁animator动画对象。 |

## 成员函数说明

### animateTo()

```
int32_t (*animateTo)(ArkUI_ContextHandle context, ArkUI_AnimateOption* option, ArkUI_ContextCallback* update,ArkUI_AnimateCompleteCallback* complete)
```

****描述：****

显式动画接口。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_ContextHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-context8h/capi-arkui-nativemodule-arkui-context8h) context | UIContext实例。 |
| [ArkUI\_AnimateOption](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-animateoption/capi-arkui-nativemodule-arkui-animateoption)\* option | 设置动画效果相关参数。 |
| [ArkUI\_ContextCallback](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-contextcallback/capi-arkui-nativemodule-arkui-contextcallback)\* update | 指定动效的闭包函数，在闭包函数中导致的状态变化系统会自动插入过渡动画。  ****说明****：在闭包函数中要设置的组件属性，必须在其之前设置过。 |
| [ArkUI\_AnimateCompleteCallback](/ref/arkui-api/arkui-c/arkui-struct/i-arkui-nativemodule-arkui-animatecompletecallback/i-arkui-nativemodule-arkui-animatecompletecallback)\* complete | 设置动画播放完成回调参数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### keyframeAnimateTo()

```
int32_t (*keyframeAnimateTo)(ArkUI_ContextHandle context, ArkUI_KeyframeAnimateOption* option)
```

****描述：****

关键帧动画接口。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_ContextHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-context8h/capi-arkui-nativemodule-arkui-context8h) context | UIContext实例。 |
| [ArkUI\_KeyframeAnimateOption](/ref/arkui-api/arkui-c/arkui-struct/api-arkui-nativemodule-arkui-keyframeanimateoption/api-arkui-nativemodule-arkui-keyframeanimateoption)\* option | 关键帧动画参数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### createAnimator()

```
ArkUI_AnimatorHandle (*createAnimator)(ArkUI_ContextHandle context, ArkUI_AnimatorOption* option)
```

****描述：****

创建animator动画对象。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_ContextHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-context8h/capi-arkui-nativemodule-arkui-context8h) context | UIContext实例。 |
| [ArkUI\_AnimatorOption](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-animatoroption/capi-arkui-nativemodule-arkui-animatoroption)\* option | animator动画参数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [ArkUI\_AnimatorHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-animator8h/capi-arkui-nativemodule-arkui-animator8h) | animator动画对象指针。函数参数异常时返回NULL。 |

### disposeAnimator()

```
void (*disposeAnimator)(ArkUI_AnimatorHandle animatorHandle)
```

****描述：****

销毁animator动画对象。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_AnimatorHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-animator8h/capi-arkui-nativemodule-arkui-animator8h) animatorHandle | animator动画对象。 |
