---
title: "NetworkBoost_NetworkQosArray"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-network_qos_array
kit: 系统
last_updated: "2026-04-20"
slug: network-boost-c-struct-network_qos_array
---

# NetworkBoost\_NetworkQosArray

## 概述

网络质量变化的详细信息。

****起始版本：**** 5.1.0(18)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost\_quality.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-quality/network-boost-c-files-quality)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [pathNum](#pathnum) | 网络质量信息中的路径数量，取值范围 [1, 4]。 |
| [NetworkBoost\_NetworkQos](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-network_qos/network-boost-c-struct-network_qos) [networkQos](#networkqos) [[NETBOOST\_MAX\_PATH\_NUM](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#netboost_max_path_num)] | 多条路径的网络质量信息，每一项为一条路径的网络质量信息，取值范围 [0, pathNum-1]。 |

## 结构体成员变量说明

### networkQos

```
NetworkBoost_NetworkQos NetworkBoost_NetworkQosArray::networkQos[NETBOOST_MAX_PATH_NUM]
```

****描述****

多条路径的网络质量信息，每一项为一条路径的网络质量信息，取值范围 [0, pathNum-1]。

### pathNum

```
uint32_t NetworkBoost_NetworkQosArray::pathNum
```

****描述****

网络质量信息中的路径数量，取值范围 [1, 4]。
