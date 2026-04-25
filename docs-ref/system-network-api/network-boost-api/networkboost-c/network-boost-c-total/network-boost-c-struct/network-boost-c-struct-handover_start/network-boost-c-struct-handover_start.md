---
title: "NetworkBoost_HandoverStart"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-handover_start
kit: 系统
last_updated: "2026-04-20"
slug: network-boost-c-struct-handover_start
---

# NetworkBoost\_HandoverStart

## 概述

连接迁移开始信息。

****起始版本：**** 5.1.0(18)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost\_handover.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [expires](#expires) | 连接迁移全流程的超时时间，单位为s，取值为任意正整数或者0。 |
| [NetworkBoost\_DataSpeedAction](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-data_speed_action/network-boost-c-struct-data_speed_action) [dataSpeedAction](#dataspeedaction) | 老链路的发包建议。 |

## 结构体成员变量说明

### dataSpeedAction

```
NetworkBoost_DataSpeedAction NetworkBoost_HandoverStart::dataSpeedAction
```

****描述****

老链路的发包建议。

### expires

```
uint32_t NetworkBoost_HandoverStart::expires
```

****描述****

连接迁移全流程的超时时间，单位为s，取值为任意正整数或者0。
