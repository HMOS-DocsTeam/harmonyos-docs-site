---
title: "NetworkBoost_MultiPathQuota"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-multipath_quota
kit: 系统
last_updated: "2026-04-22"
slug: network-boost-c-struct-multipath_quota
---

# NetworkBoost\_MultiPathQuota

## 概述

应用配额信息，包含应用已使用配额信息和剩余配额信息。

****起始版本：**** 6.0.2(22)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost\_handover.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NetworkBoost\_MultiPathQuotaInfo](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_quotainfo/network-boost-c-struct-multipath_quotainfo) [used](#used) | 应用已使用配额信息。 |
| [NetworkBoost\_MultiPathQuotaInfo](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_quotainfo/network-boost-c-struct-multipath_quotainfo) [remaining](#remaining) | 应用剩余使用配额信息。 |

## 结构体成员变量说明

## used

```
NetworkBoost_MultiPathQuotaInfo NetworkBoost_MultiPathQuota::used
```

****描述****

表明应用已使用配额信息。

## remaining

```
NetworkBoost_MultiPathQuotaInfo NetworkBoost_MultiPathQuota::remaining
```

****描述****

应用剩余使用配额信息。
