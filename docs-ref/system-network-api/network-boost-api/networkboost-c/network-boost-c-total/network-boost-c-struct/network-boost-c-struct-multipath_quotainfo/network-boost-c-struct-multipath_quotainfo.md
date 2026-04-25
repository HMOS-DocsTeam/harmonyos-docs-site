---
title: "NetworkBoost_MultiPathQuotaInfo"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-multipath_quotainfo
kit: 系统
last_updated: "2026-04-20"
slug: network-boost-c-struct-multipath_quotainfo
---

# NetworkBoost\_MultiPathQuotaInfo

## 概述

多网配额信息，包含配额次数信息和时长信息。

****起始版本：**** 6.0.2(22)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost\_handover.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint16\_t [count](#count) | 配额次数信息。 |
| uint16\_t [duration](#duration) | 配额时长信息，单位为s。 |

## 结构体成员变量说明

## count

```
uint16_t NetworkBoost_MultiPathQuotaInfo::count
```

****描述****

配额次数信息。

## duration

```
uint16_t NetworkBoost_MultiPathQuotaInfo::duration
```

****描述****

配额时长信息，单位为s。
