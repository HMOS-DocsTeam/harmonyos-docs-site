---
title: "轨迹绑路"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-navi-snap
kit: app-services
last_updated: "2026-04-22"
---

# 轨迹绑路

## 场景介绍

根据给定的坐标点捕捉道路，将用户的轨迹纠正到道路上，从而返回用户实际驾车经过的道路坐标。

## 接口说明

以下是路径规划功能相关接口，主要由[navi](/ref/map-api/map-arkts/map-navi-api/map-navi-api)命名空间下的方法提供，更多接口及使用方法请参见[接口文档](/ref/map-api/map-arkts/map-navi-api/map-navi-api)。

| 接口名 | 描述 |
| --- | --- |
| [SnapToRoadsParams](/ref/map-api/map-arkts/map-navi-api/map-navi-api#snaptoroadsparams) | 轨迹绑路的参数。 |
| [snapToRoads](/ref/map-api/map-arkts/map-navi-api/map-navi-api#snaptoroads)(params: [SnapToRoadsParams](/ref/map-api/map-arkts/map-navi-api/map-navi-api#snaptoroadsparams)): Promise&lt;[SnapToRoadsResult](/ref/map-api/map-arkts/map-navi-api/map-navi-api#snaptoroadsresult)&gt; | 轨迹绑路。 |
| [snapToRoads](/ref/map-api/map-arkts/map-navi-api/map-navi-api#snaptoroads-1)(context: [common.Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context), params: [SnapToRoadsParams](/ref/map-api/map-arkts/map-navi-api/map-navi-api#snaptoroadsparams)): Promise&lt;[SnapToRoadsResult](/ref/map-api/map-arkts/map-navi-api/map-navi-api#snaptoroadsresult)&gt; | 轨迹绑路。支持传入Context上下文。 |
| [SnapToRoadsResult](/ref/map-api/map-arkts/map-navi-api/map-navi-api#snaptoroadsresult) | 轨迹绑路的结果。 |

## 开发步骤

导入相关模块。

```
import { navi } from '@kit.MapKit';
import { BusinessError } from '@kit.BasicServicesKit';
```

### 轨迹绑路

根据给定的坐标点捕捉道路，将用户的轨迹纠正到道路上，从而返回用户实际驾车经过的道路坐标。

```
async testSnapToRoads() {
  let params: navi.SnapToRoadsParams = {
    // 道路贴合点集合，不能超过100个，且相邻两个点距离需小于等于500米
    points: [{
      latitude: 31.984410259206815,
      longitude: 118.76625379397866
    }]
  };
  try {
    const result = await navi.snapToRoads(params);
    console.info(`Succeeded in snapping to roads. result is ${JSON.stringify(result)}`);
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    console.error(`Failed in snapping to roads. Code is ${err.code}, message is ${err.message}`);
  }
}
```
