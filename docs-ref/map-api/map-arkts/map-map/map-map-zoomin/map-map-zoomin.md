---
title: "zoomIn"
sidebar_position: 46
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-zoomin
kit: 应用服务
last_updated: "2026-04-22"
slug: map-map-zoomin
---

# zoomIn

## 导入模块

```
import { map } from '@kit.MapKit';
```

## zoomIn

zoomIn(): CameraUpdate

放大地图缩放级别，在当前地图显示的级别基础上加1。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 4.1.0(11)

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [CameraUpdate](/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate) | 描述地图状态将要发生的变化。 |

****示例：****

```
let cameraUpdate: map.CameraUpdate = map.zoomIn();
```
