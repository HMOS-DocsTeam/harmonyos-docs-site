---
title: "TranslateAnimation"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-translateanimation
kit: 应用服务
last_updated: "2026-04-22"
slug: map-map-translateanimation
---

# TranslateAnimation

## 导入模块

```
import { map, mapCommon } from '@kit.MapKit';
```

## TranslateAnimation

控制移动的动画类，继承[Animation](/ref/map-api/map-arkts/map-map/map-map-animation/map-map-animation)。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 4.1.0(11)

### constructor

constructor(target: mapCommon.LatLng)

构造器，构造控制移动的动画实例。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 4.1.0(11)

****参数：****

| ****参数名**** | ****类型**** | 必填 | ****说明**** |
| --- | --- | --- | --- |
| target | [mapCommon.LatLng](/ref/map-api/map-arkts/map-common/map-common#latlng) | 是 | 需要移动的目标位置，位置类型为经纬度，异常值不处理。 |

****示例：****

```
let target: mapCommon.LatLng = {
  latitude: 31,
  longitude: 118
};
let animation: map.TranslateAnimation = new map.TranslateAnimation(target);
```
