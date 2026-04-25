---
title: "距离计算"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-calculate-distance
kit: app-services
last_updated: "2026-04-22"
---

# 距离计算

## 场景介绍

根据用户指定的两个经纬度坐标点，计算这两个点间的直线距离，单位为米。

## 接口说明

以下是距离计算功能相关接口，主要由[map](/ref/map-api/map-arkts/map-map/map-module-desc/map-module-desc)命名空间下的[calculateDistance](/ref/map-api/map-arkts/map-map/map-map-calculatedistance/map-map-calculatedistance)方法提供，更多接口及使用方法请参见[接口文档](/ref/map-api/map-arkts/map-map/map-map-calculatedistance/map-map-calculatedistance)。

| 接口名 | 描述 |
| --- | --- |
| [mapCommon.LatLng](/ref/map-api/map-arkts/map-common/map-common#latlng) | 经纬度对象。 |
| [calculateDistance](/ref/map-api/map-arkts/map-map/map-map-calculatedistance/map-map-calculatedistance)(from: [mapCommon.LatLng](/ref/map-api/map-arkts/map-common/map-common#latlng), to: [mapCommon.LatLng](/ref/map-api/map-arkts/map-common/map-common#latlng)): number | 计算坐标点之间的距离。 |

## 开发步骤

1. 导入相关模块。

   ```
   import { map, mapCommon } from '@kit.MapKit';
   ```
2. 初始化需要计算的坐标，调用[calculateDistance](/ref/map-api/map-arkts/map-map/map-map-calculatedistance/map-map-calculatedistance)方法计算距离。

   ```
   let fromLatLng: mapCommon.LatLng = {
     latitude: 38,
     longitude: 118
   };
   let toLatLng: mapCommon.LatLng = {
     latitude: 39,
     longitude: 119
   };
   // 计算坐标点之间的距离
   let distance = map.calculateDistance(fromLatLng, toLatLng);
   ```
