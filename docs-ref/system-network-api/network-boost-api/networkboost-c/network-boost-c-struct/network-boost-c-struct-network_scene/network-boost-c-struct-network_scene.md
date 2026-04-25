---
title: "NetworkBoost_NetworkScene"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-network_scene
kit: 系统
last_updated: "2026-04-22"
slug: network-boost-c-struct-network_scene
---

# NetworkBoost\_NetworkScene

## 概述

网络场景状态变更回调信息。

****起始版本：**** 5.1.0(18)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost\_quality.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-quality/network-boost-c-files-quality)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NetworkBoost\_PathType](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_pathtype-1) [pathType](#pathtype) | 表明相应的数据路径上的网络场景信息。 |
| [NetworkBoost\_Scene](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_scene-1) [scene](#scene) | 网络场景类型。 |
| [NetworkBoost\_RecommendedAction](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_recommendedaction-1) [recommendedAction](#recommendedaction) | 建议的数传策略。 |
| [NetworkBoost\_WeakSignalPrediction](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-weak_signal_prediction/network-boost-c-struct-weak_signal_prediction) [weakSignalPrediction](#weaksignalprediction) | 弱信号预测相关信息。 |

## 结构体成员变量说明

### pathType

```
NetworkBoost_PathType NetworkBoost_NetworkScene::pathType
```

****描述****

表明相应的数据路径上的网络场景信息。

### recommendedAction

```
NetworkBoost_RecommendedAction NetworkBoost_NetworkScene::recommendedAction
```

****描述****

建议的数传策略。

### scene

```
NetworkBoost_Scene NetworkBoost_NetworkScene::scene
```

****描述****

网络场景类型。

### weakSignalPrediction

```
NetworkBoost_WeakSignalPrediction NetworkBoost_NetworkScene::weakSignalPrediction
```

****描述****

弱信号预测相关信息。
