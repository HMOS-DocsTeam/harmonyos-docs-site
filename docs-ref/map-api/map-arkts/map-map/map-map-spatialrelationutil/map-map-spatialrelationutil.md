---
title: "SpatialRelationUtil"
sidebar_position: 27
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-spatialrelationutil
kit: 应用服务
last_updated: "2026-04-22"
slug: map-map-spatialrelationutil
---

# SpatialRelationUtil

## 导入模块

```
import { map, mapCommon } from '@kit.MapKit';
```

## SpatialRelationUtil

点面关系计算工具类。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 5.0.0(12)

### isPointContainedInPolygon

static isPointContainedInPolygon(points: Array&lt;mapCommon.LatLng&gt;, point: mapCommon.LatLng): boolean

判断点是否在多边形区域内。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 5.0.0(12)

****参数****：

| ****参数名**** | ****类型**** | 必填 | ****说明**** |
| --- | --- | --- | --- |
| points | Array&lt;[mapCommon.LatLng](/ref/map-api/map-arkts/map-common/map-common#latlng)&gt; | 是 | 多边形区域坐标。 |
| point | [mapCommon.LatLng](/ref/map-api/map-arkts/map-common/map-common#latlng) | 是 | 需要判断的点坐标。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| boolean | 点是否在多边形区域内。  - true：在区域内  - false：不在区域内 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/map-api/map-arkts/errorcode-map/errorcode-map)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid input parameter. |

****示例：****

```
let points: Array<mapCommon.LatLng> = [
  {
    latitude: 31.693478,
    longitude: 118.434595
  }, {
    latitude: 31.693478,
    longitude: 118.534595
  }, {
    latitude: 32.993478,
    longitude: 118.734595
  }, {
    latitude: 32.993478,
    longitude: 118.934595
  }
];
let point: mapCommon.LatLng = {
  latitude: 31.984,
  longitude: 118.766
};
let result: boolean = map.SpatialRelationUtil.isPointContainedInPolygon(points, point);
```
