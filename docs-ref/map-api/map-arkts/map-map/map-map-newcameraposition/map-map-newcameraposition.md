---
title: "newCameraPosition"
sidebar_position: 41
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-newcameraposition
kit: 应用服务
last_updated: "2026-04-22"
slug: map-map-newcameraposition
---

# newCameraPosition

## 导入模块

```
import { map, mapCommon } from '@kit.MapKit';
```

## newCameraPosition

newCameraPosition(cameraPosition: mapCommon.CameraPosition): CameraUpdate

创建CameraUpdate对象，更新地图状态。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 4.1.0(11)

****参数：****

| ****参数名**** | ****类型**** | 必填 | ****说明**** |
| --- | --- | --- | --- |
| cameraPosition | [mapCommon.CameraPosition](/ref/map-api/map-arkts/map-common/map-common#cameraposition) | 是 | 新的地图状态。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [CameraUpdate](/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate) | 描述地图状态将要发生的变化。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/map-api/map-arkts/errorcode-map/errorcode-map)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid input parameter. |

****示例：****

```
let target: mapCommon.LatLng = {
  latitude: 39.9,
  longitude: 116.4
};
let cameraPosition: mapCommon.CameraPosition = {
  target: target,
  zoom: 10
};
let cameraUpdate: map.CameraUpdate = map.newCameraPosition(cameraPosition);
```
