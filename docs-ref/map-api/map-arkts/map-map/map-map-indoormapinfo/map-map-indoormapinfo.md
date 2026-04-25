---
title: "IndoorMapInfo"
sidebar_position: 33
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-indoormapinfo
kit: 应用服务
last_updated: "2026-04-22"
slug: map-map-indoormapinfo
---

# IndoorMapInfo

## 导入模块

```
import { map } from '@kit.MapKit';
```

## IndoorMapInfo

室内图信息。使用[on](/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onindoormapenter)(type: 'indoorMapEnter', callback: Callback<[IndoorMapInfo](/ref/map-api/map-arkts/map-map/map-map-indoormapinfo/map-map-indoormapinfo)>)方法会在进入室内图时触发回调，并返回[IndoorMapInfo](/ref/map-api/map-arkts/map-map/map-map-indoormapinfo/map-map-indoormapinfo)类型的实例。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本5.1.1(19)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****设备行为差异：**** 在API19及之后版本该接口在phone、tablet、2in1均可正常使用，在其他设备中返回801错误。

****起始版本：**** 5.1.1(19)

| ****名称**** | ****类型**** | 只读 | 可选 | ****说明**** |
| --- | --- | --- | --- | --- |
| buildingId | string | 否 | 否 | 表示建筑物的id。 |
| floorNames | string[] | 否 | 否 | 建筑物楼层名称数组。 |
| floorOrders | number[] | 否 | 否 | 建筑楼层顺序数组。 |
| currentFloorName | string | 否 | 否 | 当前展示楼层的名称。 |

****示例：****

```
mapEventManager.on('indoorMapEnter', (indoorMapInfo: map.IndoorMapInfo)=>{
  console.info('indoorMapinfo: ' , indoorMapInfo);
})
```
