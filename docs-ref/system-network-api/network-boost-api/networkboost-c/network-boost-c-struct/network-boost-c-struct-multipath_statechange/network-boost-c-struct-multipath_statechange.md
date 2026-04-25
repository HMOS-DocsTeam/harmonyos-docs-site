---
title: "NetworkBoost_MultiPathStateChange"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-multipath_statechange
kit: 系统
last_updated: "2026-04-22"
slug: network-boost-c-struct-multipath_statechange
---

# NetworkBoost\_MultiPathStateChange

## 概述

多网状态信息，用于注册多网状态变化事件回调后，系统多网状态发生变化的事件通知。

****起始版本：**** 6.0.2(22)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost\_handover.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NetworkBoost\_MultiPathState](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_multipathstate) [multiPathState](#multipathstate) | 多网状态。 |
| [NetworkBoost\_MultiPathChangeCause](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_multipathchangecause) [changeCause](#changecause) | 多网状态变化原因。 |
| [NetworkBoost\_NetHandle](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_nethandle) [netHandle](#nethandle) | 多网链路的netHandle。 |
| [NetworkBoost\_PathState](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_pathstate) [pathState](#pathstate) | 多网链路状态。 |
| [NetworkBoost\_PathType](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_pathtype) [pathType](#pathtype) | 多网链路类型。 |

## 结构体成员变量说明

## multiPathState

```
NetworkBoost_MultiPathState NetworkBoost_MultiPathStateChange::multiPathState
```

****描述****

多网状态，可以通过该信息获取当前多网所处状态，包含空闲态、建立中、已建立和释放中四种状态。

## changeCause

```
NetworkBoost_MultiPathChangeCause NetworkBoost_MultiPathStateChange::changeCause
```

****描述****

多网状态变化原因，在多网状态发生变化时，通过该信息可以获取发生多网状态发生变化的原因。

## netHandle

```
NetworkBoost_NetHandle NetworkBoost_MultiPathStateChange::netHandle
```

****描述****

多网链路的netHandle。

## pathState

```
NetworkBoost_PathState NetworkBoost_MultiPathStateChange::pathState
```

****描述****

多网链路状态。

## pathType

```
NetworkBoost_PathType NetworkBoost_MultiPathStateChange::pathType
```

****描述****

多网链路类型。
