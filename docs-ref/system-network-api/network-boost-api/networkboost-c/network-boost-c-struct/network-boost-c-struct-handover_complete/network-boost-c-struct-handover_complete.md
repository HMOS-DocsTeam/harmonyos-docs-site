---
title: "NetworkBoost_HandoverComplete"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-handover_complete
kit: 系统
last_updated: "2026-04-22"
slug: network-boost-c-struct-handover_complete
---

# NetworkBoost\_HandoverComplete

## 概述

连接迁移完成信息。

****起始版本：**** 5.1.0(18)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

****所在头文件：**** [network\_boost\_handover.h](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NetworkBoost\_ErrorResult](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_errorresult-1) [result](#result) | 连接迁移结果。 |
| bool [handoverContinue](#handovercontinue) | 是否继续等待HandoverComplete消息，当存在两条以上路径时，会存在多个HandoverComplete消息。  true表示还有新链路待激活，系统还会上报HandoverComplete消息，一般发生在连接迁移到多个网络的场景。  false表示当前已经是最后一个HandoverComplete消息，连接迁移流程完成。 |
| uint32\_t [oldPathLifetime](#oldpathlifetime) | 老链路的剩余生存时长，单位为s，取值为任意正整数或0。 |
| [NetworkBoost\_DataSpeedAction](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-data_speed_action/network-boost-c-struct-data_speed_action) [oldDataSpeedAction](#olddataspeedaction) | 老链路发包建议。 |
| bool [pathTypeChanged](#pathtypechanged) | 新老链路类型是否发生变更。true表示发生变化，如Wi-Fi&lt;-&gt;蜂窝。false表示没有发生变化。 |
| [NetworkBoost\_NetHandle](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-net_handle/network-boost-c-struct-net_handle) [newNetHandle](#newnethandle) | 新链路的NetHandle信息。 |
| [NetworkBoost\_ReEstAction](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_reestaction-1) [reEstAction](#reestaction) | 链路重建类型。 |
| [NetworkBoost\_DataSpeedAction](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-data_speed_action/network-boost-c-struct-data_speed_action) [newDataSpeedAction](#newdataspeedaction) | 新链路发包建议。 |

## 结构体成员变量说明

### handoverContinue

```
bool NetworkBoost_HandoverComplete::handoverContinue
```

****描述****

是否继续等待HandoverComplete消息，当存在两条以上路径时，会存在多个HandoverComplete消息。

true表示还有新链路待激活，系统还会上报HandoverComplete消息，一般发生在连接迁移到多个网络的场景。

false表示当前已经是最后一个HandoverComplete消息，连接迁移流程完成。

### newDataSpeedAction

```
NetworkBoost_DataSpeedAction NetworkBoost_HandoverComplete::newDataSpeedAction
```

****描述****

新链路发包建议。

### newNetHandle

```
NetworkBoost_NetHandle NetworkBoost_HandoverComplete::newNetHandle
```

****描述****

新链路的NetHandle信息。

### oldDataSpeedAction

```
NetworkBoost_DataSpeedAction NetworkBoost_HandoverComplete::oldDataSpeedAction
```

****描述****

老链路发包建议。

### oldPathLifetime

```
uint32_t NetworkBoost_HandoverComplete::oldPathLifetime
```

****描述****

老链路的剩余生存时长，单位为s，取值为任意正整数或0。

### pathTypeChanged

```
bool NetworkBoost_HandoverComplete::pathTypeChanged
```

****描述****

新老链路类型是否发生变更。true表示发生变化，如Wi-Fi<->蜂窝。false表示没有发生变化。

### reEstAction

```
NetworkBoost_ReEstAction NetworkBoost_HandoverComplete::reEstAction
```

****描述****

链路重建类型。

### result

```
NetworkBoost_ErrorResult NetworkBoost_HandoverComplete::result
```

****描述****

连接迁移结果。
