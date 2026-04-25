---
title: "MenuItemGroup"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menuitemgroup
kit: 应用框架
last_updated: "2026-04-22"
slug: ts-basic-components-menuitemgroup
---

# MenuItemGroup

该组件用来展示菜单MenuItem的分组。

![](../../../../images/c76c81d1/note_3.0-zh-cn.png) 

该组件从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## 子组件

包含[MenuItem](/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem)子组件。

## 接口

MenuItemGroup(value?: MenuItemGroupOptions)

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [MenuItemGroupOptions](#menuitemgroupoptions对象说明) | 否 | 包含设置MenuItemGroup的标题和尾部显示信息。  未设置时，不显示标题和尾部信息。 |

## MenuItemGroupOptions对象说明

菜单MenuItem分组的标题和尾部信息。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| header | [ResourceStr](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr) | [CustomBuilder](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8) | 否 | 是 | 设置对应group的标题显示信息。  未设置时，不显示标题信息。 |
| footer | [ResourceStr](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr) | [CustomBuilder](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8) | 否 | 是 | 设置对应group的尾部显示信息。  未设置时，不显示尾部信息。 |

## 示例

详见[Menu组件示例](/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu#示例)。
