---
title: "telephony_radio.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-telephony-radio-h
---

# telephony\_radio.h

## 概述

为网络搜索模块定义C接口。

****引用文件：**** &lt;telephony/core\_service/telephony\_radio.h&gt;

****库：**** libtelephony\_radio.so

****系统能力：**** SystemCapability.Telephony.CoreService

****起始版本：**** 13

****相关模块：**** [Telephony](/ref/system-network-api/telephony-api/telephony-c/telephony-module/capi-telephony/capi-telephony)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [Telephony\_RadioResult OH\_Telephony\_GetNetworkState(Telephony\_NetworkState \*state)](#oh_telephony_getnetworkstate) | 获取网络状态。 |
| [Telephony\_RadioResult OH\_Telephony\_GetNetworkStateForSlot(int32\_t slotId, Telephony\_NetworkState \*state)](#oh_telephony_getnetworkstateforslot) | 获取给定卡槽ID的网络状态。 |

## 函数说明

### OH\_Telephony\_GetNetworkState()

```
Telephony_RadioResult OH_Telephony_GetNetworkState(Telephony_NetworkState *state)
```

****描述****

获取网络状态。

****系统能力：**** SystemCapability.Telephony.CoreService

****需要权限：**** ohos.permission.GET\_NETWORK\_INFO

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [Telephony\_NetworkState](/ref/system-network-api/telephony-api/telephony-c/telephony-struct/capi-telephony-telephony-networkstate/capi-telephony-telephony-networkstate) \*state | 用户接收网络状态信息的结构体。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [Telephony\_RadioResult](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) | 结果定义在 [Telephony\_RadioResult](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult)。  [TEL\_RADIO\_SUCCESS](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 成功。  [TEL\_RADIO\_PERMISSION\_DENIED](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 权限错误。  [TEL\_RADIO\_ERR\_MARSHALLING\_FAILED](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 编组错误。  [TEL\_RADIO\_ERR\_SERVICE\_CONNECTION\_FAILED](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 连接电话服务错误。  [TEL\_RADIO\_ERR\_OPERATION\_FAILED](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 操作电话服务错误。  [TEL\_RADIO\_ERR\_INVALID\_PARAM](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 参数错误。 |

### OH\_Telephony\_GetNetworkStateForSlot()

```
Telephony_RadioResult OH_Telephony_GetNetworkStateForSlot(int32_t slotId, Telephony_NetworkState *state)
```

****描述****

获取给定卡槽ID的网络状态。

****系统能力：**** SystemCapability.Telephony.CoreService

****需要权限：**** ohos.permission.GET\_NETWORK\_INFO

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| int32\_t slotId | 卡槽ID。 |
| [Telephony\_NetworkState](/ref/system-network-api/telephony-api/telephony-c/telephony-struct/capi-telephony-telephony-networkstate/capi-telephony-telephony-networkstate) \*state | 用户接收网络状态信息的结构体。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [Telephony\_RadioResult](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) | 结果定义在 [Telephony\_RadioResult](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult)。  [TEL\_RADIO\_SUCCESS](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 成功。  [TEL\_RADIO\_PERMISSION\_DENIED](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 权限错误。  [TEL\_RADIO\_ERR\_MARSHALLING\_FAILED](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 编组错误。  [TEL\_RADIO\_ERR\_SERVICE\_CONNECTION\_FAILED](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 连接电话服务错误。  [TEL\_RADIO\_ERR\_OPERATION\_FAILED](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 操作电话服务错误。  [TEL\_RADIO\_ERR\_INVALID\_PARAM](/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h#telephony_radioresult) 参数错误。 |
