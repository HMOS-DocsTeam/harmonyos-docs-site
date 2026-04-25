---
title: "MassPointOverlayCallback"
sidebar_position: 38
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-masspointoverlaycallback
kit: 应用服务
last_updated: "2026-04-22"
slug: map-map-masspointoverlaycallback
---

# MassPointOverlayCallback

## MassPointOverlayCallback

type MassPointOverlayCallback = (massPointOverlay: MassPointOverlay, massPointItem: mapCommon.MassPointItem) => void

无返回结果的回调函数，用于监听海量点图层的点击事件。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本6.0.0(20)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 6.0.0(20)

****参数****：

| ****名称**** | ****类型**** | 必填 | ****说明**** |
| --- | --- | --- | --- |
| massPointOverlay | [MassPointOverlay](/ref/map-api/map-arkts/map-map/map-map-masspointoverlay/map-map-masspointoverlay) | 是 | 海量点管理对象。 |
| massPointItem | [mapCommon.MassPointItem](/ref/map-api/map-arkts/map-common/map-common#masspointitem) | 是 | 海量点列表。 |
