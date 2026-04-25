---
title: "@ohos.arkui.node"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-node
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-arkui-node
---

# @ohos.arkui.node

Node将自定义节点的二级模块API组织在一起，方便开发者进行导出使用。

![](../../../../images/873ecd32/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 当前不支持在预览器中使用自定义节点。

## BuilderNode

[BuilderNode](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode)模块提供能够挂载系统组件的自定义节点BuilderNode。不建议将BuilderNode作为子节点挂载到其他自定义节点上。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

## FrameNode

[FrameNode](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode)模块提供自定义节点FrameNode，表示组件树的实体节点。[NodeController](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller)可通过[BuilderNode](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode)持有的FrameNode将其挂载到[NodeContainer](/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer)上，也可通过FrameNode获取[RenderNode](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode)，挂载到其他FrameNode上。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

## NodeController

[NodeController](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller)模块提供NodeController，用于实现自定义节点的创建、显示、更新等操作，并负责将自定义节点挂载到[NodeContainer](/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer)上。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

## Graphics

[Graphics](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics)模块：提供自定义节点相关属性设置的定义。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

## RenderNode

[RenderNode](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode)模块提供自绘制渲染节点RenderNode，支持开发者通过C API进行开发，完成自定义绘制需求。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

## XComponentNode

[XComponentNode](/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-arkui-xcomponentnode/js-apis-arkui-xcomponentnode)模块提供XComponent节点XComponentNode，表示组件树中的XComponent组件，用于EGL/OpenGLES和媒体数据写入，并支持动态修改节点渲染类型。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

## UIContext获取方法

1.使用ohos.window中的[getUIContext()](/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getuicontext10)方法获取UIContext实例。

2.可以通过自定义组件内置方法[getUIContext()](/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getuicontext)获取。

3.可以在[NodeController](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller)的[makeNode](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller#makenode)回调方法中获取。
