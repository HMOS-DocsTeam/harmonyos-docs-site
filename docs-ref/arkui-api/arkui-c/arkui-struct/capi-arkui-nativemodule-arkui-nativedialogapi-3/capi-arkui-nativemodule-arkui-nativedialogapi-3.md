---
title: "ArkUI_NativeDialogAPI_3"
sidebar_position: 25
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-3
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-nativedialogapi-3
---

# ArkUI\_NativeDialogAPI\_3

```
typedef struct {...} ArkUI_NativeDialogAPI_3
```

## 概述

ArkUI提供的Native侧自定义弹窗接口集合。

****起始版本：**** 19

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_dialog.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogAPI\_1](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1) nativeDialogAPI1 | ArkUI提供的Native侧自定义弹窗接口集合，范围是[ArkUI\_NativeDialogAPI\_1](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1)。  ****起始版本：**** 19 |
| [ArkUI\_NativeDialogAPI\_2](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-2/capi-arkui-nativemodule-arkui-nativedialogapi-2) nativeDialogAPI2 | ArkUI提供的Native侧自定义弹窗接口集合，范围是[ArkUI\_NativeDialogAPI\_2](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-2/capi-arkui-nativemodule-arkui-nativedialogapi-2)。  ****起始版本：**** 19 |

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [int32\_t (\*setLevelOrder)(ArkUI\_NativeDialogHandle handle, double levelOrder)](#setlevelorder) | 设置自定义弹窗显示的顺序。 |
| [int32\_t (\*registerOnWillAppear)(ArkUI\_NativeDialogHandle handle, void\* userData, void (\*callback)(void\* userData))](#registeronwillappear) | 注册自定义弹窗显示之前的回调函数。 |
| [int32\_t (\*registerOnDidAppear)(ArkUI\_NativeDialogHandle handle, void\* userData, void (\*callback)(void\* userData))](#registerondidappear) | 注册自定义弹窗显示之后的回调函数。 |
| [int32\_t (\*registerOnWillDisappear)(ArkUI\_NativeDialogHandle handle, void\* userData, void (\*callback)(void\* userData))](#registeronwilldisappear) | 注册自定义弹窗关闭之前的回调函数。 |
| [int32\_t (\*registerOnDidDisappear)(ArkUI\_NativeDialogHandle handle, void\* userData, void (\*callback)(void\* userData))](#registerondiddisappear) | 注册自定义弹窗关闭之后的回调函数。 |
| [int32\_t (\*setBorderWidth)(ArkUI\_NativeDialogHandle handle, float top, float right, float bottom, float left, ArkUI\_LengthMetricUnit unit)](#setborderwidth) | 设置自定义弹窗的边框宽度。 |
| [int32\_t (\*setBorderColor)(ArkUI\_NativeDialogHandle handle, uint32\_t top, uint32\_t right, uint32\_t bottom, uint32\_t left)](#setbordercolor) | 设置自定义弹窗的边框颜色。 |
| [int32\_t (\*setBorderStyle)(ArkUI\_NativeDialogHandle handle, int32\_t top, int32\_t right, int32\_t bottom, int32\_t left)](#setborderstyle) | 设置自定义弹窗的边框样式。 |
| [int32\_t (\*setWidth)(ArkUI\_NativeDialogHandle handle, float width, ArkUI\_LengthMetricUnit unit)](#setwidth) | 设置自定义弹窗的背板宽度。 |
| [int32\_t (\*setHeight)(ArkUI\_NativeDialogHandle handle, float height, ArkUI\_LengthMetricUnit unit)](#setheight) | 设置自定义弹窗的背板高度。 |
| [int32\_t (\*setShadow)(ArkUI\_NativeDialogHandle handle, ArkUI\_ShadowStyle shadow)](#setshadow) | 设置自定义弹窗的背板阴影。 |
| [int32\_t (\*setCustomShadow)(ArkUI\_NativeDialogHandle handle, const ArkUI\_AttributeItem\* customShadow)](#setcustomshadow) | 设置自定义弹窗的背板阴影。 |
| [int32\_t (\*setBackgroundBlurStyle)(ArkUI\_NativeDialogHandle handle, ArkUI\_BlurStyle blurStyle)](#setbackgroundblurstyle) | 设置自定义弹窗的背板模糊材质。 |
| [int32\_t (\*setKeyboardAvoidMode)(ArkUI\_NativeDialogHandle handle, ArkUI\_KeyboardAvoidMode keyboardAvoidMode)](#setkeyboardavoidmode) | 设置自定义弹窗避让键盘模式。 |
| [int32\_t (\*enableHoverMode)(ArkUI\_NativeDialogHandle handle, bool enableHoverMode)](#enablehovermode) | 设置自定义弹窗是否响应悬停态。 |
| [int32\_t (\*setHoverModeArea)(ArkUI\_NativeDialogHandle handle, ArkUI\_HoverModeAreaType hoverModeAreaType)](#sethovermodearea) | 设置悬停态下自定义弹窗默认展示区域。 |
| [int32\_t (\*setFocusable)(ArkUI\_NativeDialogHandle handle, bool focusable)](#setfocusable) | 设置自定义弹窗是否获取焦点。 |
| [int32\_t (\*setBackgroundBlurStyleOptions)(ArkUI\_NativeDialogHandle handle, const ArkUI\_AttributeItem\* backgroundBlurStyleOptions)](#setbackgroundblurstyleoptions) | 设置自定义弹窗的背景模糊效果。 |
| [int32\_t (\*setBackgroundEffect)(ArkUI\_NativeDialogHandle handle, const ArkUI\_AttributeItem\* backgroundEffect)](#setbackgroundeffect) | 设置自定义弹窗的背景效果参数。 |

## 成员函数说明

### setLevelOrder()

```
int32_t (*setLevelOrder)(ArkUI_NativeDialogHandle handle, double levelOrder)
```

****描述：****

设置自定义弹窗显示的顺序。

![](../../../../images/ca87e1f6/note_3.0-zh-cn.png) 

setLevelOrder方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| double levelOrder | 自定义弹窗显示的顺序。  默认值：0，取值范围：[-100000.0, 100000.0]。超出取值范围属性不生效。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### registerOnWillAppear()

```
int32_t (*registerOnWillAppear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData))
```

****描述：****

注册自定义弹窗显示之前的回调函数。

![](../../../../images/fba13beb/note_3.0-zh-cn.png) 

registerOnWillAppear方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| void\* userData | 用户自定义数据。 |
| callback | 自定义弹窗显示之前的回调函数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### registerOnDidAppear()

```
int32_t (*registerOnDidAppear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData))
```

****描述：****

注册自定义弹窗显示之后的回调函数。

![](../../../../images/2102a398/note_3.0-zh-cn.png) 

registerOnDidAppear方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| void\* userData | 用户自定义数据。 |
| callback | 自定义弹窗显示之后的回调函数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### registerOnWillDisappear()

```
int32_t (*registerOnWillDisappear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData))
```

****描述：****

注册自定义弹窗关闭之前的回调函数。

![](../../../../images/4e8fd237/note_3.0-zh-cn.png) 

registerOnWillDisappear方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| void\* userData | 用户自定义数据。 |
| callback | 自定义弹窗关闭之前的回调函数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### registerOnDidDisappear()

```
int32_t (*registerOnDidDisappear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData))
```

****描述：****

注册自定义弹窗关闭之后的回调函数。

![](../../../../images/75611806/note_3.0-zh-cn.png) 

registerOnDidDisappear方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| void\* userData | 用户自定义数据。 |
| callback | 自定义弹窗关闭之后的回调函数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setBorderWidth()

```
int32_t (*setBorderWidth)(ArkUI_NativeDialogHandle handle, float top, float right, float bottom, float left, ArkUI_LengthMetricUnit unit)
```

****描述：****

设置自定义弹窗的边框宽度。

![](../../../../images/a987631c/note_3.0-zh-cn.png) 

setBorderWidth方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| float top | 上边框的宽度。 |
| float right | 右边框的宽度。 |
| float bottom | 下边框的宽度。 |
| float left | 左边框的宽度。 |
| [ArkUI\_LengthMetricUnit](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_lengthmetricunit) unit | 指定宽度单位，默认为vp。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setBorderColor()

```
int32_t (*setBorderColor)(ArkUI_NativeDialogHandle handle, uint32_t top, uint32_t right, uint32_t bottom, uint32_t left)
```

****描述：****

设置自定义弹窗的边框颜色。

![](../../../../images/17836940/note_3.0-zh-cn.png) 

setBorderColor方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| uint32\_t top | 上边框的颜色。 |
| uint32\_t right | 右边框的颜色。 |
| uint32\_t bottom | 下边框的颜色。 |
| uint32\_t left | 左边框的颜色。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setBorderStyle()

```
int32_t (*setBorderStyle)(ArkUI_NativeDialogHandle handle, int32_t top, int32_t right, int32_t bottom, int32_t left)
```

****描述：****

设置自定义弹窗的边框样式。

![](../../../../images/c0b6b6c8/note_3.0-zh-cn.png) 

setBorderStyle方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| int32\_t top | 上边框的样式。参数类型[ArkUI\_BorderStyle](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI\_BORDER\_STYLE\_SOLID。 |
| int32\_t right | 右边框的样式。参数类型[ArkUI\_BorderStyle](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI\_BORDER\_STYLE\_SOLID。 |
| int32\_t bottom | 下边框的样式。参数类型[ArkUI\_BorderStyle](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI\_BORDER\_STYLE\_SOLID。 |
| int32\_t left | 左边框的样式。参数类型[ArkUI\_BorderStyle](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI\_BORDER\_STYLE\_SOLID。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setWidth()

```
int32_t (*setWidth)(ArkUI_NativeDialogHandle handle, float width, ArkUI_LengthMetricUnit unit)
```

****描述：****

设置自定义弹窗的背板宽度。

![](../../../../images/98909574/note_3.0-zh-cn.png) 

setWidth方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| float width | 背板宽度。 |
| [ArkUI\_LengthMetricUnit](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_lengthmetricunit) unit | 指定宽度的单位，默认为vp。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setHeight()

```
int32_t (*setHeight)(ArkUI_NativeDialogHandle handle, float height, ArkUI_LengthMetricUnit unit)
```

****描述：****

设置自定义弹窗的背板高度。

![](../../../../images/15bbdd74/note_3.0-zh-cn.png) 

setHeight方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| float height | 背板高度。 |
| [ArkUI\_LengthMetricUnit](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_lengthmetricunit) unit | 指定高度的单位，默认为vp。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setShadow()

```
int32_t (*setShadow)(ArkUI_NativeDialogHandle handle, ArkUI_ShadowStyle shadow)
```

****描述：****

设置自定义弹窗的背板阴影。

![](../../../../images/6a92c382/note_3.0-zh-cn.png) 

setShadow方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| [ArkUI\_ShadowStyle](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_shadowstyle) shadow | 背板阴影样式，枚举值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setCustomShadow()

```
int32_t (*setCustomShadow)(ArkUI_NativeDialogHandle handle, const ArkUI_AttributeItem* customShadow)
```

****描述：****

设置自定义弹窗的背板阴影。

![](../../../../images/09a34c7e/note_3.0-zh-cn.png) 

setCustomShadow方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| const [ArkUI\_AttributeItem](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-attributeitem/capi-arkui-nativemodule-arkui-attributeitem)\* customShadow | 自定义阴影参数，格式与[ArkUI\_NodeAttributeType](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype)中的NODE\_SHADOW属性一致。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setBackgroundBlurStyle()

```
int32_t (*setBackgroundBlurStyle)(ArkUI_NativeDialogHandle handle, ArkUI_BlurStyle blurStyle)
```

****描述：****

设置自定义弹窗的背板模糊材质。

![](../../../../images/dbcb598f/note_3.0-zh-cn.png) 

setBackgroundBlurStyle方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| [ArkUI\_BlurStyle](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_blurstyle) blurStyle | 背板模糊材质，枚举值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setKeyboardAvoidMode()

```
int32_t (*setKeyboardAvoidMode)(ArkUI_NativeDialogHandle handle, ArkUI_KeyboardAvoidMode keyboardAvoidMode)
```

****描述：****

设置自定义弹窗避让键盘模式。

![](../../../../images/cfdaa672/note_3.0-zh-cn.png) 

setKeyboardAvoidMode方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| [ArkUI\_KeyboardAvoidMode](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_keyboardavoidmode) keyboardAvoidMode | 避让键盘模式，枚举值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### enableHoverMode()

```
int32_t (*enableHoverMode)(ArkUI_NativeDialogHandle handle, bool enableHoverMode)
```

****描述：****

设置自定义弹窗是否响应悬停态。

![](../../../../images/f731a6d0/note_3.0-zh-cn.png) 

enableHoverMode方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| bool enableHoverMode | 是否响应悬停态，默认false。true表示响应悬停态，false表示不响应悬停态。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setHoverModeArea()

```
int32_t (*setHoverModeArea)(ArkUI_NativeDialogHandle handle, ArkUI_HoverModeAreaType hoverModeAreaType)
```

****描述：****

设置悬停态下自定义弹窗默认展示区域。

![](../../../../images/69627f1c/note_3.0-zh-cn.png) 

setHoverModeArea方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| [ArkUI\_HoverModeAreaType](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_hovermodeareatype) hoverModeAreaType | 悬停态区域，枚举值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setFocusable()

```
int32_t (*setFocusable)(ArkUI_NativeDialogHandle handle, bool focusable)
```

****描述：****

设置自定义弹窗是否获取焦点。

![](../../../../images/1e48af3e/note_3.0-zh-cn.png) 

setFocusable方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| bool focusable | 自定义弹窗是否获取焦点。true表示自动获取焦点，false表示不自动获取焦点。默认值：true |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setBackgroundBlurStyleOptions()

```
int32_t (*setBackgroundBlurStyleOptions)(ArkUI_NativeDialogHandle handle, const ArkUI_AttributeItem* backgroundBlurStyleOptions)
```

****描述：****

设置自定义弹窗的背景模糊效果。

![](../../../../images/10e34417/note_3.0-zh-cn.png) 

setBackgroundBlurStyleOptions方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| const [ArkUI\_AttributeItem](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-attributeitem/capi-arkui-nativemodule-arkui-attributeitem)\* backgroundBlurStyleOptions | 背景模糊效果。参数[ArkUI\_AttributeItem](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-attributeitem/capi-arkui-nativemodule-arkui-attributeitem)格式：  .value[0].i32：表示深浅色模式，取[ArkUI\_ColorMode](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_colormode)枚举值。  .value[1]?.i32：表示取色模式，取[ArkUI\_AdaptiveColor](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_adaptivecolor)枚举值。  .value[2]?.f32：表示模糊效果程度，取[0.0,1.0]范围内的值，超出有效值区间时取边界值。  .value[3]?.u32：表示灰阶模糊参数，对黑色的提亮程度，有效值范围为[0,127]，超出有效值范围，取0。  .value[4]?.u32：表示灰阶模糊参数，对白色的压暗程度，有效值范围为[0,127]，超出有效值范围，取0。  .value[5]?.i32：表示模糊激活策略，取[ArkUI\_BlurStyleActivePolicy](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_blurstyleactivepolicy)枚举值。  .value[6]?.u32：表示窗口失焦后，窗口内控件模糊效果会被移除，此时控件背板的颜色，0xargb类型。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setBackgroundEffect()

```
int32_t (*setBackgroundEffect)(ArkUI_NativeDialogHandle handle, const ArkUI_AttributeItem* backgroundEffect)
```

****描述：****

设置自定义弹窗的背景效果参数。

![](../../../../images/8b8b0cfb/note_3.0-zh-cn.png) 

setBackgroundEffect方法需要在调用[show](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

****起始版本：**** 19

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| const [ArkUI\_AttributeItem](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-attributeitem/capi-arkui-nativemodule-arkui-attributeitem)\* backgroundEffect | 背景效果参数。参数[ArkUI\_AttributeItem](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-attributeitem/capi-arkui-nativemodule-arkui-attributeitem)格式：  .value[0].f32：表示模糊半径，单位为vp。  .value[1]?.f32：表示饱和度。  .value[2]?.f32：表示亮度。  .value[3]?.u32：表示颜色，0xargb类型。  .value[4]?.i32：表示取色模式，取[ArkUI\_AdaptiveColor](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_adaptivecolor)枚举值。  .value[5]?.u32：表示灰阶模糊参数，对黑色的提亮程度，有效值范围为[0,127]，超出有效值范围，取0。  .value[6]?.u32：表示灰阶模糊参数，对白色的压暗程度，有效值范围为[0,127]，超出有效值范围，取0。  .value[7]?.i32：表示模糊激活策略，取[ArkUI\_BlurStyleActivePolicy](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_blurstyleactivepolicy)枚举值。  .value[8]?.u32：表示窗口失焦后，窗口内控件模糊效果会被移除，此时控件背板的颜色，0xargb类型。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |
