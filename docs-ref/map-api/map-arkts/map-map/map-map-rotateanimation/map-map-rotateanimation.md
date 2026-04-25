---
title: "RotateAnimation"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-rotateanimation
kit: 应用服务
last_updated: "2026-04-22"
slug: map-map-rotateanimation
---

# RotateAnimation

## 导入模块

```
import { map } from '@kit.MapKit';
```

## RotateAnimation

控制旋转的动画类，继承[Animation](/ref/map-api/map-arkts/map-map/map-map-animation/map-map-animation)。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 4.1.0(11)

### constructor

constructor(fromDegree: number, toDegree: number)

构造器，构造控制旋转的动画实例。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本4.1.0(11)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 4.1.0(11)

****参数：****

| ****参数名**** | ****类型**** | 必填 | ****说明**** |
| --- | --- | --- | --- |
| fromDegree | number | 是 | 起始角度，单位：度，角度的范围为[0, 360]，超出按边界值处理。 |
| toDegree | number | 是 | 目标角度，单位：度，角度的范围为[0, 360]，超出按边界值处理。 |

****示例：****

```
let animation: map.RotateAnimation = new map.RotateAnimation(15, 150);
```
