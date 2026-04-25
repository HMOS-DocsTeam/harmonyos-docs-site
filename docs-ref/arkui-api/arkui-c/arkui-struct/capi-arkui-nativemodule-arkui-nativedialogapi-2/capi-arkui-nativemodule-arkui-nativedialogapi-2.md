---
title: "ArkUI_NativeDialogAPI_2"
sidebar_position: 24
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-2
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-nativedialogapi-2
---

# ArkUI\_NativeDialogAPI\_2

```
typedef struct {...} ArkUI_NativeDialogAPI_2
```

## 概述

ArkUI提供的Native侧自定义弹窗接口集合。

****起始版本：**** 15

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_dialog.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogAPI\_1](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1) nativeDialogAPI1 | ArkUI提供的Native侧自定义弹窗接口集合，范围是[ArkUI\_NativeDialogAPI\_1](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1)。  ****起始版本：**** 15 |

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [int32\_t (\*setKeyboardAvoidDistance)(ArkUI\_NativeDialogHandle handle, float distance, ArkUI\_LengthMetricUnit unit)](#setkeyboardavoiddistance) | 弹窗避让键盘后，和键盘之间距离。 |
| [int32\_t (\*setLevelMode)(ArkUI\_NativeDialogHandle handle, ArkUI\_LevelMode levelMode)](#setlevelmode) | 设置弹窗的显示层级。 |
| [int32\_t (\*setLevelUniqueId)(ArkUI\_NativeDialogHandle handle, int32\_t uniqueId)](#setleveluniqueid) | 设置弹窗显示层级页面下的节点id。 |
| [int32\_t (\*setImmersiveMode)(ArkUI\_NativeDialogHandle handle, ArkUI\_ImmersiveMode immersiveMode)](#setimmersivemode) | 设置嵌入式弹窗蒙层的显示区域。 |

## 成员函数说明

### setKeyboardAvoidDistance()

```
int32_t (*setKeyboardAvoidDistance)(ArkUI_NativeDialogHandle handle, float distance, ArkUI_LengthMetricUnit unit)
```

****描述：****

弹窗避让键盘后，和键盘之间距离。

![](../../../../images/ff7980bf/note_3.0-zh-cn.png) 

setKeyboardAvoidDistance方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)方法之前调用。

****起始版本：**** 15

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| float distance | 避让键盘的距离，单位为vp。 |
| [ArkUI\_LengthMetricUnit](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_lengthmetricunit) unit | 避让距离的单位，参数类型[ArkUI\_LengthMetricUnit](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_lengthmetricunit)。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_CAPI\_INIT\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 接口初始化错误。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setLevelMode()

```
int32_t (*setLevelMode)(ArkUI_NativeDialogHandle handle, ArkUI_LevelMode levelMode)
```

****描述：****

设置弹窗的显示层级。

![](../../../../images/a21cad6e/note_3.0-zh-cn.png) 

setLevelMode方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)方法之前调用。

****起始版本：**** 15

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| [ArkUI\_LevelMode](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h#arkui_levelmode) levelMode | 显示层级的枚举值， 类型为[ArkUI\_LevelMode](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h#arkui_levelmode)。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setLevelUniqueId()

```
int32_t (*setLevelUniqueId)(ArkUI_NativeDialogHandle handle, int32_t uniqueId)
```

****描述：****

设置弹窗显示层级页面下的节点id。

![](../../../../images/7efccb02/note_3.0-zh-cn.png) 

setLevelUniqueId方法需要在调用[setLevelMode](#setlevelmode)方法之前调用。

****起始版本：**** 15

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| int32\_t uniqueId | 指定节点id，会查找该节点所在页面，并将弹窗显示在该页面下。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setImmersiveMode()

```
int32_t (*setImmersiveMode)(ArkUI_NativeDialogHandle handle, ArkUI_ImmersiveMode immersiveMode)
```

****描述：****

设置嵌入式弹窗蒙层的显示区域。

![](../../../../images/e5485eac/note_3.0-zh-cn.png) 

setImmersiveMode方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)方法之前调用。

****起始版本：**** 15

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| [ArkUI\_ImmersiveMode](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h#arkui_immersivemode) immersiveMode | 显示区域类型的枚举值， 类型为[ArkUI\_ImmersiveMode](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h#arkui_immersivemode)。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |
