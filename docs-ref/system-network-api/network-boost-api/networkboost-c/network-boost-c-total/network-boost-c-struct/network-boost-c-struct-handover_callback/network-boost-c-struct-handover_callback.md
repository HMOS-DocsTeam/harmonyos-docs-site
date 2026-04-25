---
title: "HMS_NetworkBoost_HandoverCallback"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-handover_callback
kit: 系统
last_updated: "2026-04-20"
slug: network-boost-c-struct-handover_callback
---

# HMS\_NetworkBoost\_HandoverCallback

## 概述

回调函数，返回连接迁移开始和完成的详细信息。

****起始版本：**** 5.1.0(18)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost\_handover.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [HMS\_NetworkBoost\_OnHandoverStart](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_onhandoverstart) onNetworkHandoverStart | 连接迁移开始的回调。 |
| [HMS\_NetworkBoost\_OnHandoverComplete](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_onhandovercomplete) onNetworkHandoverComplete | 连接迁移结束的回调。 |
