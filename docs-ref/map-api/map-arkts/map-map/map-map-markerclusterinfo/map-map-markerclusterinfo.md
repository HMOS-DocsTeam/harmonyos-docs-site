---
title: "MarkerClusterInfo"
sidebar_position: 31
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-markerclusterinfo
kit: 应用服务
last_updated: "2026-04-22"
slug: map-map-markerclusterinfo
---

# MarkerClusterInfo

## 导入模块

```
import { map, mapCommon } from '@kit.MapKit';
```

## MarkerClusterInfo

聚合图层的标记的信息。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本5.0.3(15)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 5.0.3(15)

| ****名称**** | ****类型**** | 只读 | 可选 | ****说明**** |
| --- | --- | --- | --- | --- |
| marker | [Marker](/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker) | 否 | 否 | 聚合图层的标记。 |
| clusterItems | Array&lt;[mapCommon.ClusterItem](/ref/map-api/map-arkts/map-common/map-common#clusteritem)&gt; | 否 | 否 | 聚合节点数组。 |

****示例：****

```
let clusterItem1: mapCommon.ClusterItem = {
  position: {
    latitude: 31.984,
    longitude: 118.766
  }
};
let clusterItem2: mapCommon.ClusterItem = {
  position: {
    latitude: 31.974,
    longitude: 118.75
  }
};
let array: Array<mapCommon.ClusterItem> = [
  clusterItem1,
  clusterItem2
];
let clusterOverlayParams: mapCommon.ClusterOverlayParams = {
  distance: 40,
  clusterItems: array
};
let clusterOverlay: map.ClusterOverlay = await this.mapController.addClusterOverlay(clusterOverlayParams);
let callback1 = (markerClusterInfo: map.MarkerClusterInfo) => {
  console.info("markerClusterClick", `callback1 markerClusterInfo`);
};
clusterOverlay.on("markerClusterClick", callback1);
```
