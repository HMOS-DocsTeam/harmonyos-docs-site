---
title: "NetworkBoost_SceneDesc"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-scene_desc
kit: 系统
last_updated: "2026-04-22"
slug: network-boost-c-struct-scene_desc
---

# NetworkBoost\_SceneDesc

## 概述

业务场景描述信息。

****起始版本：**** 6.0.2(22)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-boost/network-boost-c-files-boost)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NetworkBoost\_ServiceType](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_servicetype) [scene](#scene) | 表示业务场景类型。 |
| [NetworkBoost\_SceneEvent](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_sceneevent) [sceneEvent](#sceneevent) | 表示业务场景事件。 |
| uint32\_t [startTime](#starttime) | 表示要经过多长时间进入到sceneEvent事件，单位为s。  - 0表示立即发生sceneEvent事件，默认为0。  - 大于0表示预测未来多长时间进入sceneEvent事件。 |
| uint32\_t [duration](#duration) | 预计本次设置的业务场景会持续的时长，单位为s。0表示持续时长未知，以SceneEvent的离开事件表示终止。开发者可以依据实际的场景类型进行选填。  例如：应用即将在10s后进入秒杀场景，预计持续20s。scene可以传入'seckillService'类型，sceneEvent填写SCENE\_EVENT\_ENTER，startTime可填写10，duration填写20。 |

## 结构体成员变量说明

## scene

```
NetworkBoost_ServiceType NetworkBoost_SceneDesc::scene
```

****描述****

表示业务场景类型。

## sceneEvent

```
NetworkBoost_SceneEvent NetworkBoost_SceneDesc::sceneEvent
```

****描述****

表示业务场景事件。

## startTime

```
uint32_t NetworkBoost_SceneDesc::startTime
```

****描述****

表示要经过多长时间进入到sceneEvent事件，单位为s。

## duration

```
uint32_t NetworkBoost_SceneDesc::duration
```

****描述****

预计本次设置的业务场景会持续的时长，单位为s。
