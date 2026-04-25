---
title: "设置事件回调"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-uicommonevent
kit: 应用框架
last_updated: "2026-04-22"
slug: ts-uicommonevent
---

# 设置事件回调

![](../../../../images/daec1e72/note_3.0-zh-cn.png) 

本模块首批接口从API version 12开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。

## UICommonEvent

用于设置基础事件回调。方法入参为undefined的时候，重置对应的事件回调。

### setOnClick

setOnClick(callback: Callback&lt;ClickEvent&gt; | undefined): void

设置[点击事件](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click)的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12)<[ClickEvent](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#clickevent)> | undefined | 是 | 点击事件的回调函数。 |

### setOnTouch

setOnTouch(callback: Callback&lt;TouchEvent&gt; | undefined): void

设置[触摸事件](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch)的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12)<[TouchEvent](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent对象说明)> | undefined | 是 | 触摸事件的回调函数。 |

### setOnAppear

setOnAppear(callback: Callback&lt;void&gt; | undefined): void

设置[onAppear](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#onappear)挂载显示事件的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12)<void> | undefined | 是 | 挂载显示事件的回调函数。 |

### setOnDisappear

setOnDisappear(callback: Callback&lt;void&gt; | undefined): void

设置[onDisAppear](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#ondisappear)卸载消失事件的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12)<void> | undefined | 是 | 卸载消失事件的回调。 |

### setOnKeyEvent

setOnKeyEvent(callback: Callback&lt;KeyEvent&gt; | undefined): void

设置[按键事件](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key)的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12)<[KeyEvent](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#keyevent对象说明)> | undefined | 是 | 按键事件的回调函数。 |

### setOnFocus

setOnFocus(callback: Callback&lt;void&gt; | undefined): void

设置[onFocus](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event#onfocus)获焦事件的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12)<void> | undefined | 是 | 获焦事件的回调。 |

### setOnBlur

setOnBlur(callback: Callback&lt;void&gt; | undefined): void

设置[onBlur](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event#onblur)失焦事件的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12)<void> | undefined | 是 | 失焦事件的回调。 |

### setOnHover

setOnHover(callback: HoverCallback | undefined): void

设置[onHover](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover#onhover)悬浮事件的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [HoverCallback](#hovercallback) | undefined | 是 | 悬浮事件的回调函数。 |

### setOnMouse

setOnMouse(callback: Callback&lt;MouseEvent&gt; | undefined): void

设置[onMouse](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#onmouse)鼠标事件的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12)<[MouseEvent](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#mouseevent对象说明)> | undefined | 是 | 鼠标事件的回调函数。 |

### setOnSizeChange

setOnSizeChange(callback: SizeChangeCallback | undefined): void

设置[onSizeChange](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-size-change-event/ts-universal-component-size-change-event#onsizechange)组件区域变化事件的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [SizeChangeCallback](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-size-change-event/ts-universal-component-size-change-event#sizechangecallback) | undefined | 是 | 组件区域变化事件的回调函数。 |

### setOnVisibleAreaApproximateChange

setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void

设置限制回调间隔的[onVisibleAreaChange](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareachange)可见区域变化事件的回调。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [VisibleAreaEventOptions](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#visibleareaeventoptions12) | 是 | 可见区域变化相关的参数。 |
| event | [VisibleAreaChangeCallback](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#visibleareachangecallback12) | undefined | 是 | 可见区域变化事件的回调函数。当组件可见面积与自身面积的比值接近options中设置的阈值时触发该回调。 |

![](../../../../images/dd3a76f0/note_3.0-zh-cn.png) 

此接口与[onVisibleAreaChange](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareachange)接口存在如下差异，onVisibleAreaChange在每一帧都会进行可见区域比例的计算，如果注册节点太多，系统功耗存在劣化。此接口降低了可见区域比例计算的频度，计算间隔由[VisibleAreaEventOptions](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#visibleareaeventoptions12)的expectedUpdateInterval参数决定。

当前接口的可见区域回调阈值默认包含0。例如，开发者设置回调阈值为[0.5]，实际生效的阈值为[0.0, 0.5]。

## HoverCallback

type HoverCallback = (isHover: boolean, event: HoverEvent)=> void

hover事件的回调类型。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isHover | boolean | 是 | 是否处于hover状态，true表示处于hover状态，false表示不在hover状态。 |
| event | [HoverEvent](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover#hoverevent10对象说明) | 是 | 获取鼠标或手写笔悬浮的位置坐标。 |
