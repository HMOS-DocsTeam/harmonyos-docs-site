---
title: "信息展示公共接口"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-information-display-common
kit: 应用框架
last_updated: "2026-04-22"
slug: ts-information-display-common
---

# 信息展示公共接口

用于修饰组件，为[Gauge](/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-gauge/ts-basic-components-gauge)和[DataPanel](/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel)组件提供信息展示能力的公共接口。

![](../../../../images/2095a5c8/note_3.0-zh-cn.png) 

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## MultiShadowOptions

投影样式。

****卡片能力：**** 从API version 23开始，该接口支持在ArkTS卡片中使用。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| radius | number | [Resource](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource) | 否 | 是 | 投影模糊半径。  API version 10及以前，默认值：5  API version 11及以后，默认值：20  单位：vp  number类型取值范围大于0。  ****说明：****  设置小于等于0的值时，按默认值显示。 |
| offsetX | number | [Resource](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource) | 否 | 是 | X轴偏移量。  number类型取值范围不做限制。  默认值：5  单位：vp |
| offsetY | number | [Resource](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource) | 否 | 是 | Y轴偏移量。  number类型取值范围不做限制。  默认值：5  单位：vp |
