---
title: "NetworkBoost_DataSpeedAction"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-data_speed_action
kit: 系统
last_updated: "2026-04-20"
slug: network-boost-c-struct-data_speed_action
---

# NetworkBoost\_DataSpeedAction

## 概述

发包速率建议。

****起始版本：**** 5.1.0(18)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost\_quality.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-quality/network-boost-c-files-quality)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NetworkBoost\_DataSpeedSimpleAction](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_dataspeedsimpleaction-1) [dataSpeedSimpleAction](#dataspeedsimpleaction) | 应用发包策略的简单建议。 |
| uint64\_t [linkUpBandwidth](#linkupbandwidth) | 上行带宽。 |
| uint64\_t [linkDownBandwidth](#linkdownbandwidth) | 下行带宽。 |

## 结构体成员变量说明

### dataSpeedSimpleAction

```
NetworkBoost_DataSpeedSimpleAction NetworkBoost_DataSpeedAction::dataSpeedSimpleAction
```

****描述****

应用发包策略的简单建议。

### linkDownBandwidth

```
uint64_t NetworkBoost_DataSpeedAction::linkDownBandwidth
```

****描述****

下行带宽。

### linkUpBandwidth

```
uint64_t NetworkBoost_DataSpeedAction::linkUpBandwidth
```

****描述****

上行带宽。
