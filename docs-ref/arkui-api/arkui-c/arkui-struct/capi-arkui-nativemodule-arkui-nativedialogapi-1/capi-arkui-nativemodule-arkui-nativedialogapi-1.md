---
title: "ArkUI_NativeDialogAPI_1"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-nativedialogapi-1
---

# ArkUI\_NativeDialogAPI\_1

```
typedef struct {...} ArkUI_NativeDialogAPI_1
```

## 概述

ArkUI提供的Native侧自定义弹窗接口集合。

****起始版本：**** 12

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_dialog.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h)

## 汇总

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle (\*create)()](#create) | 创建自定义弹窗并返回指向自定义弹窗的指针。 |
| [void (\*dispose)(ArkUI\_NativeDialogHandle handle)](#dispose) | 销毁自定义弹窗。 |
| [int32\_t (\*setContent)(ArkUI\_NativeDialogHandle handle, ArkUI\_NodeHandle content)](#setcontent) | 挂载自定义弹窗内容。 |
| [int32\_t (\*removeContent)(ArkUI\_NativeDialogHandle handle)](#removecontent) | 卸载自定义弹窗内容。 |
| [int32\_t (\*setContentAlignment)(ArkUI\_NativeDialogHandle handle, int32\_t alignment, float offsetX, float offsetY)](#setcontentalignment) | 设置自定义弹窗对齐方式。 |
| [int32\_t (\*resetContentAlignment)(ArkUI\_NativeDialogHandle handle)](#resetcontentalignment) | 重置setContentAlignment方法设置的属性，使用系统默认的对齐方式。 |
| [int32\_t (\*setModalMode)(ArkUI\_NativeDialogHandle handle, bool isModal)](#setmodalmode) | 设置自定义弹窗是否开启模态样式的弹窗。 |
| [int32\_t (\*setAutoCancel)(ArkUI\_NativeDialogHandle handle, bool autoCancel)](#setautocancel) | 设置自定义弹窗是否允许通过点击遮罩层退出。 |
| [int32\_t (\*setMask)(ArkUI\_NativeDialogHandle handle, uint32\_t maskColor, const ArkUI\_Rect\* maskRect)](#setmask) | 设置自定义弹窗遮罩属性。 |
| [int32\_t (\*setBackgroundColor)(ArkUI\_NativeDialogHandle handle, uint32\_t backgroundColor)](#setbackgroundcolor) | 设置弹窗背景色。 |
| [int32\_t (\*setCornerRadius)(ArkUI\_NativeDialogHandle handle, float topLeft, float topRight,float bottomLeft, float bottomRight)](#setcornerradius) | 设置弹窗背板圆角半径。 |
| [int32\_t (\*setGridColumnCount)(ArkUI\_NativeDialogHandle handle, int32\_t gridCount)](#setgridcolumncount) | 设置弹窗宽度占栅格宽度的个数。 |
| [int32\_t (\*enableCustomStyle)(ArkUI\_NativeDialogHandle handle, bool enableCustomStyle)](#enablecustomstyle) | 弹窗容器样式是否可以自定义。 |
| [int32\_t (\*enableCustomAnimation)(ArkUI\_NativeDialogHandle handle, bool enableCustomAnimation)](#enablecustomanimation) | 弹窗容器是否使用自定义弹窗动画。 |
| [int32\_t (\*registerOnWillDismiss)(ArkUI\_NativeDialogHandle handle, ArkUI\_OnWillDismissEvent eventHandler)](#registeronwilldismiss) | 当触发系统定义的返回操作、键盘ESC关闭交互操作时，如果注册了该回调函数，弹窗不会立即关闭，而是由用户决定是否关闭。 |
| [int32\_t (\*show)(ArkUI\_NativeDialogHandle handle, bool showInSubWindow)](#show) | 显示自定义弹窗。 |
| [int32\_t (\*close)(ArkUI\_NativeDialogHandle handle)](#close) | 关闭自定义弹窗，如已关闭，则不生效。该接口后台执行是异步的，在关闭动画执行完成后弹窗节点才会下树。如需关闭后再次打开弹窗，请在延迟300ms以后再执行。 |
| [int32\_t (\*registerOnWillDismissWithUserData)(ArkUI\_NativeDialogHandle handle, void\* userData, void (\*callback)(ArkUI\_DialogDismissEvent\* event))](#registeronwilldismisswithuserdata) | 注册系统关闭自定义弹窗的监听事件。 |

## 成员函数说明

### create()

```
ArkUI_NativeDialogHandle (*create)()
```

****描述：****

创建自定义弹窗并返回指向自定义弹窗的指针。

![](../../../../images/8e7712b1/note_3.0-zh-cn.png) 

create方法需要在调用[show](#show)方法之前调用。

****返回：****

| 类型 | 说明 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) | 返回指向自定义弹窗的指针，如果创建失败，则返回空指针。 |

### dispose()

```
void (*dispose)(ArkUI_NativeDialogHandle handle)
```

****描述：****

销毁自定义弹窗。

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |

### setContent()

```
int32_t (*setContent)(ArkUI_NativeDialogHandle handle, ArkUI_NodeHandle content)
```

****描述：****

挂载自定义弹窗内容。

![](../../../../images/d7550098/note_3.0-zh-cn.png) 

setContent方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| [ArkUI\_NodeHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h) content | 弹窗内容根节点指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### removeContent()

```
int32_t (*removeContent)(ArkUI_NativeDialogHandle handle)
```

****描述：****

卸载自定义弹窗内容。

![](../../../../images/8c730a2a/note_3.0-zh-cn.png) 

removeContent方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setContentAlignment()

```
int32_t (*setContentAlignment)(ArkUI_NativeDialogHandle handle, int32_t alignment, float offsetX, float offsetY)
```

****描述：****

设置自定义弹窗对齐方式。

![](../../../../images/c719f2e4/note_3.0-zh-cn.png) 

setContentAlignment方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| int32\_t alignment | 对齐方式，参数类型[ArkUI\_Alignment](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_alignment)。 |
| float offsetX | 弹窗的水平偏移量，浮点型，单位：vp。 |
| float offsetY | 弹窗的垂直偏移量，浮点型，单位：vp。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### resetContentAlignment()

```
int32_t (*resetContentAlignment)(ArkUI_NativeDialogHandle handle)
```

****描述：****

重置setContentAlignment方法设置的属性，使用系统默认的对齐方式，默认值：ARKUI\_ALIGNMENT\_TOP\_START，参考[ArkUI\_Alignment](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_alignment)。

![](../../../../images/55742ee4/note_3.0-zh-cn.png) 

resetContentAlignment方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setModalMode()

```
int32_t (*setModalMode)(ArkUI_NativeDialogHandle handle, bool isModal)
```

****描述：****

设置自定义弹窗是否开启模态样式的弹窗。

![](../../../../images/08be690d/note_3.0-zh-cn.png) 

setModalMode方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| bool isModal | 设置是否开启模态窗口，模态窗口有蒙层，非模态窗口无蒙层。为true时开启模态窗口，为false时不开启模态窗口。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setAutoCancel()

```
int32_t (*setAutoCancel)(ArkUI_NativeDialogHandle handle, bool autoCancel)
```

****描述：****

设置自定义弹窗是否允许通过点击遮罩层退出。

![](../../../../images/31480011/note_3.0-zh-cn.png) 

setAutoCancel方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| bool autoCancel | 设置是否允许通过点击遮罩层退出，true表示关闭弹窗，false表示不关闭弹窗。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setMask()

```
int32_t (*setMask)(ArkUI_NativeDialogHandle handle, uint32_t maskColor, const ArkUI_Rect* maskRect)
```

****描述：****

设置自定义弹窗遮罩属性。

![](../../../../images/d9ae5a9b/note_3.0-zh-cn.png) 

setMask方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| uint32\_t maskColor | 设置遮罩颜色，0xargb格式。 |
| const [ArkUI\_Rect](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-rect/capi-arkui-nativemodule-arkui-rect)\* maskRect | 遮蔽层区域范围的指针，遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。参数类型[ArkUI\_Rect](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-rect/capi-arkui-nativemodule-arkui-rect)。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setBackgroundColor()

```
int32_t (*setBackgroundColor)(ArkUI_NativeDialogHandle handle, uint32_t backgroundColor)
```

****描述：****

设置弹窗背景色。

![](../../../../images/33b85a16/note_3.0-zh-cn.png) 

setBackgroundColor方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| uint32\_t backgroundColor | 设置弹窗背景颜色，0xargb格式。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setCornerRadius()

```
int32_t (*setCornerRadius)(ArkUI_NativeDialogHandle handle, float topLeft, float topRight,float bottomLeft, float bottomRight)
```

****描述：****

设置弹窗背板圆角半径。

![](../../../../images/1d0d85cb/note_3.0-zh-cn.png) 

setCornerRadius方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| float topLeft | 设置弹窗背板左上角圆角半径，单位：vp。默认值：从API version 12开始，为32vp。API version 11及之前版本，为24vp。 |
| float topRight | 设置弹窗背板右上角圆角半径，单位：vp。默认值：从API version 12开始，为32vp。API version 11及之前版本，为24vp。 |
| float bottomLeft | 设置弹窗背板左下圆角半径，单位：vp。默认值：从API version 12开始，为32vp。API version 11及之前版本，为24vp。 |
| float bottomRight | 设置弹窗背板右下角圆角半径，单位：vp。默认值：从API version 12开始，为32vp。API version 11及之前版本，为24vp。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### setGridColumnCount()

```
int32_t (*setGridColumnCount)(ArkUI_NativeDialogHandle handle, int32_t gridCount)
```

****描述：****

设置弹窗宽度占栅格宽度的个数。

![](../../../../images/e47ddbba/note_3.0-zh-cn.png) 

setGridColumnCount方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| int32\_t gridCount | 默认为按照窗口大小自适应，最大栅格数为[系统最大栅格数](/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout#布局的总列数)。  取值范围：大于等于0的整数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### enableCustomStyle()

```
int32_t (*enableCustomStyle)(ArkUI_NativeDialogHandle handle, bool enableCustomStyle)
```

****描述：****

弹窗容器样式是否可以自定义。

![](../../../../images/38b6bd66/note_3.0-zh-cn.png) 

enableCustomStyle方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| bool enableCustomStyle | 弹窗容器样式是否可以自定义。  默认值：false  true：弹窗容器样式不能自定义，宽度自适应子节点，圆角为0，弹窗背景色透明；false：弹窗容器样式可以自定义，高度自适应子节点，宽度由栅格系统定义，圆角半径24vp，PC/2in1设备避让屏幕边缘以及窗口标题栏。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### enableCustomAnimation()

```
int32_t (*enableCustomAnimation)(ArkUI_NativeDialogHandle handle, bool enableCustomAnimation)
```

****描述：****

弹窗容器是否使用自定义弹窗动画。

![](../../../../images/60fc2bf9/note_3.0-zh-cn.png) 

enableCustomAnimation方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| bool enableCustomAnimation | true:使用自定义动画，关闭系统默认动画；false:使用系统默认动画。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### registerOnWillDismiss()

```
int32_t (*registerOnWillDismiss)(ArkUI_NativeDialogHandle handle, ArkUI_OnWillDismissEvent eventHandler)
```

****描述：****

当触发系统定义的返回操作、键盘ESC关闭交互操作时，如果注册了该回调函数，弹窗不会立即关闭，而是由用户决定是否关闭。

![](../../../../images/52b13312/note_3.0-zh-cn.png) 

registerOnWillDismiss方法需要在调用[show](#show)方法之前调用。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| [ArkUI\_OnWillDismissEvent](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h#arkui_onwilldismissevent) eventHandler | 弹窗关闭的回调函数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### show()

```
int32_t (*show)(ArkUI_NativeDialogHandle handle, bool showInSubWindow)
```

****描述：****

显示自定义弹窗。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| bool showInSubWindow | 是否在子窗口显示弹窗。true表示在子窗显示弹窗。false表示不在子窗显示弹窗。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### close()

```
int32_t (*close)(ArkUI_NativeDialogHandle handle)
```

****描述：****

关闭自定义弹窗，如已关闭，则不生效。该接口后台执行是异步的，在关闭动画执行完成后弹窗节点才会下树。如需关闭后再次打开弹窗，请在延迟300ms以后再执行。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。此时仅表示关闭指令下发成功，不代表弹窗完全关闭。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

### registerOnWillDismissWithUserData()

```
int32_t (*registerOnWillDismissWithUserData)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(ArkUI_DialogDismissEvent* event))
```

****描述：****

注册系统关闭自定义弹窗的监听事件。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_NativeDialogHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h) handle | 指向自定义弹窗控制器的指针。 |
| void\* userData | 用户自定义数据指针。 |
| callback | 监听自定义弹窗关闭的回调事件。  - event: 回调函数的入参，捕获关闭原因。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 错误码。  [ARKUI\_ERROR\_CODE\_NO\_ERROR](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 成功。  [ARKUI\_ERROR\_CODE\_PARAM\_INVALID](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode) 函数参数异常。 |
