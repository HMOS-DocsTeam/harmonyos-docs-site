---
title: "设置组件绑定的手势"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-uigestureevent
kit: 应用框架
last_updated: "2026-04-22"
slug: ts-uigestureevent
---

# 设置组件绑定的手势

用于设置组件绑定的手势。可以通过UIGestureEvent对象调用其接口添加或删除手势。

![](../../../../../images/16875ff6/note_3.0-zh-cn.png) 

本模块首批接口从API version 12开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。

在[GestureEvent](/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent对象说明)的fingerList元素中，手指索引编号与位置相对应，即fingerList[index]的id为index。对于先按下但未参与当前手势触发的手指，fingerList中对应的位置为空。建议优先使用fingerInfos。

## UIGestureEvent

用于设置组件绑定的手势。

### addGesture

addGesture&lt;T&gt;(gesture: GestureHandler&lt;T&gt;, priority?: GesturePriority, mask?: GestureMask): void

添加手势。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| gesture | [GestureHandler&lt;T&gt;](/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#gesturehandlert) | 是 | 手势处理器对象。 |
| priority | [GesturePriority](/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#gesturepriority枚举说明) | 否 | 绑定手势的优先级。  默认值：GesturePriority.NORMAL |
| mask | [GestureMask](/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturemask枚举说明) | 否 | 事件响应设置。  默认值：GestureMask.Normal |

### addParallelGesture

addParallelGesture&lt;T&gt;(gesture: GestureHandler&lt;T&gt;, mask?: GestureMask): void

绑定可与子组件手势同时触发的手势。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| gesture | [GestureHandler&lt;T&gt;](/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#gesturehandlert) | 是 | 手势处理器对象。 |
| mask | [GestureMask](/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturemask枚举说明) | 否 | 事件响应设置。  默认值：GestureMask.Normal |

### removeGestureByTag

removeGestureByTag(tag: string): void

移除该组件上通过modifier绑定的设置为指定标志的手势。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tag | string | 是 | 手势处理器标志。 |

### clearGestures

clearGestures(): void

清除该组件上通过modifier绑定的所有手势。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

## 示例

见[动态手势设置](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-gesture-modifier/ts-universal-attributes-gesture-modifier)。
