---
title: "@ohos.telephony.observer (observer)"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-observer
kit: 系统
last_updated: "2026-04-22"
slug: js-apis-observer
---

# @ohos.telephony.observer (observer)

本模块提供订阅管理功能，可以订阅/取消订阅的事件包括：网络状态变化、信号状态变化、通话状态变化、蜂窝数据链路连接状态、蜂窝数据业务的上下行数据流状态、SIM状态变化。

![](../../../../images/021259bd/note_3.0-zh-cn.png) 

本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { observer } from '@kit.TelephonyKit';
```

## NetworkState

type NetworkState = radio.NetworkState

网络注册状态。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [radio.NetworkState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#networkstate) | 网络注册状态。 |

## SignalInformation

type SignalInformation = radio.SignalInformation

网络信号强度信息对象。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [radio.SignalInformation](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#signalinformation) | 网络信号强度信息对象。 |

## DataConnectState

type DataConnectState = data.DataConnectState

描述蜂窝数据链路连接状态。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [data.DataConnectState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataconnectstate) | 描述蜂窝数据链路连接状态。 |

## RatType

type RatType = radio.RadioTechnology

无线接入技术。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [radio.RadioTechnology](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#radiotechnology) | 无线接入技术。 |

## DataFlowType

type DataFlowType = data.DataFlowType

描述蜂窝数据流类型。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [data.DataFlowType](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataflowtype) | 描述蜂窝数据流类型。 |

## CallState

type CallState = call.CallState

通话状态码。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [call.CallState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#callstate) | 通话状态码（去电过程仅通知CALL\_STATE\_OFFHOOK状态）。 |

## CCallState23+

type CCallState = call.CCallState

运营商通话状态码。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [call.CCallState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#ccallstate23) | 通话状态码（运营商通话状态码）。 |

## CardType

type CardType = sim.CardType

卡类型。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [sim.CardType](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sim/js-apis-sim#cardtype7) | 卡类型。 |

## SimState

type SimState = sim.SimState

SIM卡状态。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [sim.SimState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sim/js-apis-sim#simstate) | SIM卡状态。 |

## TelCallState21+

type TelCallState = call.TelCallState

通话状态码。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 类型 | 说明 |
| --- | --- |
| [call.TelCallState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#telcallstate21) | 通话状态码（去电过程通知去电号码状态TEL\_CALL\_STATE\_OFFHOOK和去电接通状态TEL\_CALL\_STATE\_CONNECTED）。 |

## observer.on('networkStateChange')

on(type: 'networkStateChange', callback: Callback&lt;NetworkState&gt;): void

订阅网络状态变化事件，使用callback方式作为异步方法。

****需要权限****：ohos.permission.GET\_NETWORK\_INFO

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 网络状态变化事件，参数固定为'networkStateChange'。 |
| callback | Callback&lt;[NetworkState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#networkstate)&gt; | 是 | 以callback形式异步返回结果。参考radio的[NetworkState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#networkstate)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
observer.on('networkStateChange', (data: observer.NetworkState) => {
    console.info("on networkStateChange, data:" + JSON.stringify(data));
});
```

## observer.on('networkStateChange')

on(type: 'networkStateChange', options: ObserverOptions, callback: Callback&lt;NetworkState&gt;): void

订阅指定卡槽位的网络状态变化事件，使用callback方式作为异步方法。

****需要权限****：ohos.permission.GET\_NETWORK\_INFO

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 网络状态变化事件，参数固定为'networkStateChange'。 |
| options | [ObserverOptions](#observeroptions11) | 是 | 电话相关事件订阅参数可选项。 |
| callback | Callback&lt;[NetworkState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#networkstate)&gt; | 是 | 以callback形式异步返回结果，参考radio的[NetworkState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#networkstate)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('networkStateChange', options, (data: observer.NetworkState) => {
    console.info("on networkStateChange, data:" + JSON.stringify(data));
});
```

## observer.off('networkStateChange')

off(type: 'networkStateChange', callback?: Callback&lt;NetworkState&gt;): void

取消订阅网络状态变化事件，使用callback方式作为异步方法。

![](../../../../images/e5492933/note_3.0-zh-cn.png) 

可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 网络状态变化事件，参数固定为'networkStateChange'。 |
| callback | Callback&lt;[NetworkState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#networkstate)&gt; | 否 | 以callback形式异步返回结果，参考radio的[NetworkState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#networkstate)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
let callback: (data: observer.NetworkState) => void = (data: observer.NetworkState) => {
    console.info("on networkStateChange, data:" + JSON.stringify(data));
}
observer.on('networkStateChange', callback);
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
observer.off('networkStateChange', callback);
observer.off('networkStateChange');
```

## observer.on('signalInfoChange')

on(type: 'signalInfoChange', callback: Callback&lt;Array&lt;SignalInformation&gt;>): void

订阅信号状态变化事件，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 信号状态变化事件，参数固定为'signalInfoChange'。 |
| callback | Callback&lt;Array&lt;[SignalInformation](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#signalinformation)&gt;&gt; | 是 | 以callback形式异步返回结果，参考radio的[SignalInformation](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#signalinformation)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
import { radio } from '@kit.TelephonyKit';

observer.on('signalInfoChange', (data: Array<radio.SignalInformation>) => {
    console.info("on signalInfoChange, data:" + JSON.stringify(data));
});
```

## observer.on('signalInfoChange')

on(type: 'signalInfoChange', options: ObserverOptions, callback: Callback&lt;Array&lt;SignalInformation&gt;>): void

订阅指定卡槽位的信号状态变化事件，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 信号状态变化事件，参数固定为'signalInfoChange'。 |
| options | [ObserverOptions](#observeroptions11) | 是 | 电话相关事件订阅参数可选项。 |
| callback | Callback&lt;Array&lt;[SignalInformation](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#signalinformation)&gt;&gt; | 是 | 以callback形式异步返回结果，参考radio的[SignalInformation](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#signalinformation)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
import { radio } from '@kit.TelephonyKit';

let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('signalInfoChange', options, (data: Array<radio.SignalInformation>) => {
    console.info("on signalInfoChange, data:" + JSON.stringify(data));
});
```

## observer.off('signalInfoChange')

off(type: 'signalInfoChange', callback?: Callback&lt;Array&lt;SignalInformation&gt;>): void

取消订阅信号状态变化事件，使用callback方式作为异步方法。

![](../../../../images/fd6c7a00/note_3.0-zh-cn.png) 

可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 信号状态变化事件，参数固定为'signalInfoChange'。 |
| callback | Callback&lt;Array&lt;[SignalInformation](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#signalinformation)&gt;&gt; | 否 | 以callback形式异步返回结果，参考radio的[SignalInformation](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#signalinformation)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
import { radio } from '@kit.TelephonyKit';

let callback: (data: Array<radio.SignalInformation>) => void = (data: Array<radio.SignalInformation>) => {
    console.info("on signalInfoChange, data:" + JSON.stringify(data));
}
observer.on('signalInfoChange', callback);
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
observer.off('signalInfoChange', callback);
observer.off('signalInfoChange');
```

## observer.on('callStateChange')

on(type: 'callStateChange', callback: Callback&lt;CallStateInfo&gt;): void

订阅通话状态变化事件，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 通话状态变化事件，参数固定为'callStateChange'。 |
| callback | Callback&lt;[CallStateInfo](#callstateinfo11)&gt; | 是 | 以callback形式异步返回结果。  应用可获取到CallStateInfo。  其中，三方应用仅能获取state通话状态。number受系统权限管控，仅面向系统应用开放。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
observer.on('callStateChange', (data: observer.CallStateInfo) => {
    console.info("on callStateChange, data:" + JSON.stringify(data));
});
```

## observer.on('callStateChange')

on(type: 'callStateChange', options: ObserverOptions, callback: Callback&lt;CallStateInfo&gt;): void

订阅通话状态变化事件，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 通话状态变化事件，参数固定为'callStateChange'。 |
| options | [ObserverOptions](#observeroptions11) | 是 | 电话相关事件订阅参数可选项。 |
| callback | Callback&lt;[CallStateInfo](#callstateinfo11)&gt; | 是 | 以callback形式异步返回结果。  应用可获取到CallStateInfo。  其中，三方应用仅能获取state通话状态。number受系统权限管控，仅面向系统应用开放。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('callStateChange', options, (data: observer.CallStateInfo) => {
    console.info("on callStateChange, data:" + JSON.stringify(data));
});
```

## observer.off('callStateChange')

off(type: 'callStateChange', callback?: Callback&lt;CallStateInfo&gt;): void

取消订阅通话状态变化事件，使用callback方式作为异步方法。

![](../../../../images/339a3213/note_3.0-zh-cn.png) 

可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 通话状态变化事件，参数固定为'callStateChange'。 |
| callback | Callback&lt;[CallStateInfo](#callstateinfo11)&gt; | 否 | 以callback形式异步返回结果，参考call的[CallState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#callstate)。  number：电话号码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
let callback: (data: observer.CallStateInfo) => void = (data: observer.CallStateInfo) => {
    console.info("on callStateChange, data:" + JSON.stringify(data));
}
observer.on('callStateChange', callback);
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
observer.off('callStateChange', callback);
observer.off('callStateChange');
```

## observer.on('callStateChangeEx')21+

on(type: 'callStateChangeEx', callback: Callback&lt;TelCallState&gt;, options?: ObserverOptions): void

订阅通话状态变化拓展事件，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 通话状态变化事件，参数固定为'callStateChangeEx'。 |
| callback | Callback&lt;[TelCallState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#telcallstate21)&gt; | 是 | 以callback形式异步返回结果。  应用可获取到TelCallState。 |
| options | [ObserverOptions](#observeroptions11) | 否 | 电话相关事件订阅参数可选项。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 8800001 | Invalid parameter value. |
| 8800002 | Service connection failed. |
| 8800003 | System internal error. |
| 8800999 | Unknown error. |

****示例：****

```
import { call } from '@kit.TelephonyKit';

let callback: (data: call.TelCallState) => void = (data: call.TelCallState) => {
    console.info("on callStateChangeEx, data:" + JSON.stringify(data));
}
let options: observer.ObserverOptions = {
    slotId: 0
}

observer.on('callStateChangeEx', callback, options);
observer.on('callStateChangeEx', callback);
```

## observer.off('callStateChangeEx')21+

off(type: 'callStateChangeEx', callback?: Callback&lt;TelCallState&gt;): void

取消订阅通话状态变化拓展事件，使用callback方式作为异步方法。

![](../../../../images/9aaebc68/note_3.0-zh-cn.png) 

可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 通话状态变化事件，参数固定为'callStateChange'。 |
| callback | Callback&lt;[TelCallState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#telcallstate21)&gt; | 否 | 以callback形式异步返回结果，参考call的[TelCallState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#telcallstate21)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 8800001 | Invalid parameter value. |
| 8800002 | Service connection failed. |
| 8800003 | System internal error. |
| 8800999 | Unknown error. |

****示例：****

```
import { call } from '@kit.TelephonyKit';
let callback: (data: call.TelCallState) => void = (data: call.TelCallState) => {
    console.info("on callStateChangeEx, data:" + JSON.stringify(data));
}
observer.on('callStateChangeEx', callback);
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
observer.off('callStateChangeEx', callback);
observer.off('callStateChangeEx');
```

## observer.on('cellularDataConnectionStateChange')7+

on(type: 'cellularDataConnectionStateChange', callback: Callback&lt;DataConnectionStateInfo&gt;): void

订阅蜂窝数据链路连接状态，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 蜂窝数据链路连接状态事件，参数固定为'cellularDataConnectionStateChange'。 |
| callback | Callback&lt;[DataConnectionStateInfo](#dataconnectionstateinfo11)&gt; | 是 | 以callback形式异步返回结果，参考data的[DataConnectState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataconnectstate)，radio的[RadioTechnology](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#radiotechnology)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
observer.on('cellularDataConnectionStateChange', (data: observer.DataConnectionStateInfo) => {
    console.info("on cellularDataConnectionStateChange, data:" + JSON.stringify(data));
});
```

## observer.on('cellularDataConnectionStateChange')7+

on(type: 'cellularDataConnectionStateChange', options: ObserverOptions, callback: Callback&lt;DataConnectionStateInfo&gt;): void

订阅指定卡槽位的蜂窝数据链路连接状态，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 蜂窝数据链路连接状态事件，参数固定为'cellularDataConnectionStateChange'。 |
| options | [ObserverOptions](#observeroptions11) | 是 | 电话相关事件订阅参数可选项。 |
| callback | Callback&lt;[DataConnectionStateInfo](#dataconnectionstateinfo11)&gt; | 是 | 以callback形式异步返回结果，参考data的[DataConnectState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataconnectstate)，radio的[RadioTechnology](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#radiotechnology)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('cellularDataConnectionStateChange', options, (data: observer.DataConnectionStateInfo) => {
    console.info("on cellularDataConnectionStateChange, data:" + JSON.stringify(data));
});
```

## observer.off('cellularDataConnectionStateChange')7+

off(type: 'cellularDataConnectionStateChange', callback?: Callback&lt;DataConnectionStateInfo&gt;): void

移除订阅蜂窝数据链路连接状态，使用callback方式作为异步方法。

![](../../../../images/adffef7c/note_3.0-zh-cn.png) 

可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 蜂窝数据链路连接状态事件，参数固定为'cellularDataConnectionStateChange'。 |
| callback | Callback&lt;[DataConnectionStateInfo](#dataconnectionstateinfo11)&gt; | 否 | 以callback形式异步返回结果，参考data的[DataConnectState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataconnectstate)，radio的[RadioTechnology](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio#radiotechnology)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
let callback: (data: observer.DataConnectionStateInfo) => void = (data: observer.DataConnectionStateInfo) => {
    console.info("on cellularDataConnectionStateChange, data:" + JSON.stringify(data));
}
observer.on('cellularDataConnectionStateChange', callback);
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
observer.off('cellularDataConnectionStateChange', callback);
observer.off('cellularDataConnectionStateChange');
```

## observer.on('cellularDataFlowChange')7+

on(type: 'cellularDataFlowChange', callback: Callback&lt;DataFlowType&gt;): void

订阅蜂窝数据业务的上下行数据流状态，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 蜂窝数据业务的上下行数据流状态事件，参数固定为'cellularDataFlowChange'。 |
| callback | Callback&lt;[DataFlowType](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataflowtype)&gt; | 是 | 以callback形式异步返回结果，参考data的[DataFlowType](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataflowtype)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
import { data } from '@kit.TelephonyKit';

observer.on('cellularDataFlowChange', (data: data.DataFlowType) => {
    console.info("on cellularDataFlowChange, data:" + JSON.stringify(data));
});
```

## observer.on('cellularDataFlowChange')7+

on(type: 'cellularDataFlowChange', options: ObserverOptions, callback: Callback&lt;DataFlowType&gt;): void

订阅指定卡槽位的蜂窝数据业务的上下行数据流状态，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 蜂窝数据业务的上下行数据流状态事件，参数固定为'cellularDataFlowChange'。 |
| options | [ObserverOptions](#observeroptions11) | 是 | 电话相关事件订阅参数可选项。 |
| callback | Callback&lt;[DataFlowType](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataflowtype)&gt; | 是 | 以callback形式异步返回结果，参考data的[DataFlowType](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataflowtype)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
import { data } from '@kit.TelephonyKit';

let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('cellularDataFlowChange', options, (data: data.DataFlowType) => {
    console.info("on cellularDataFlowChange, data:" + JSON.stringify(data));
});
```

## observer.off('cellularDataFlowChange')7+

off(type: 'cellularDataFlowChange', callback?: Callback&lt;DataFlowType&gt;): void

移除订阅蜂窝数据业务的上下行数据流状态，使用callback方式作为异步方法。

![](../../../../images/dcba1870/note_3.0-zh-cn.png) 

可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 蜂窝数据业务的上下行数据流状态事件，参数固定为'cellularDataFlowChange'。 |
| callback | Callback&lt;[DataFlowType](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataflowtype)&gt; | 否 | 以callback形式异步返回结果，参考data的[DataFlowType](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataflowtype)。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
import { data } from '@kit.TelephonyKit';

let callback: (data: data.DataFlowType) => void = (data: data.DataFlowType) => {
    console.info("on cellularDataFlowChange, data:" + JSON.stringify(data));
}
observer.on('cellularDataFlowChange', callback);
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
observer.off('cellularDataFlowChange', callback);
observer.off('cellularDataFlowChange');
```

## observer.on('simStateChange')7+

on(type: 'simStateChange', callback: Callback&lt;SimStateData&gt;): void

订阅sim状态更改事件，使用callback方式作为异步方法。

![](../../../../images/8e19e215/note_3.0-zh-cn.png) 

此接口不包含sim卡的激活状态，具体请参见[sim.isSimActive](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sim/js-apis-sim#simissimactive7)接口。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | sim状态更改事件，参数固定为'simStateChange'。 |
| callback | Callback&lt;[SimStateData](#simstatedata7)&gt; | 是 | 以callback形式异步返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
observer.on('simStateChange', (data: observer.SimStateData) => {
    console.info("on simStateChange, data:" + JSON.stringify(data));
});
```

## observer.on('simStateChange')7+

on(type: 'simStateChange', options: ObserverOptions, callback: Callback&lt;SimStateData&gt;): void

订阅指定卡槽位的sim状态更改事件，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | sim状态更改事件，参数固定为'simStateChange'。 |
| options | [ObserverOptions](#observeroptions11) | 是 | 电话相关事件订阅参数可选项。 |
| callback | Callback&lt;[SimStateData](#simstatedata7)&gt; | 是 | 以callback形式异步返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('simStateChange', options, (data: observer.SimStateData) => {
    console.info("on simStateChange, data:" + JSON.stringify(data));
});
```

## observer.off('simStateChange')7+

off(type: 'simStateChange', callback?: Callback&lt;SimStateData&gt;): void

移除订阅sim状态更改事件，使用callback方式作为异步方法。

![](../../../../images/192d6088/note_3.0-zh-cn.png) 

可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | sim状态更改事件，参数固定为'simStateChange'。 |
| callback | Callback&lt;[SimStateData](#simstatedata7)&gt; | 否 | 以callback形式异步返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
let callback: (data: observer.SimStateData) => void = (data: observer.SimStateData) => {
    console.info("on simStateChange, data:" + JSON.stringify(data));
}
observer.on('simStateChange', callback);
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
observer.off('simStateChange', callback);
observer.off('simStateChange');
```

## observer.on('iccAccountInfoChange')10+

on(type: 'iccAccountInfoChange', callback: Callback&lt;void&gt;): void

订阅卡帐户变化事件，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 卡帐户变化事件，参数固定为'iccAccountInfoChange'。 |
| callback | Callback&lt;void&gt; | 是 | 以callback形式异步返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
observer.on('iccAccountInfoChange', () => {
    console.info("on iccAccountInfoChange success");
});
```

## observer.off('iccAccountInfoChange')10+

off(type: 'iccAccountInfoChange', callback?: Callback&lt;void&gt;): void

移除订阅卡帐户变化事件，使用callback方式作为异步方法。

![](../../../../images/6a57ef0c/note_3.0-zh-cn.png) 

可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 卡帐户变化事件，参数固定为'iccAccountInfoChange'。 |
| callback | Callback&lt;void&gt; | 否 | 以callback形式异步返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
let callback: () => void = () => {
    console.info("on iccAccountInfoChange success");
}
observer.on('iccAccountInfoChange', callback);
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
observer.off('iccAccountInfoChange', callback);
observer.off('iccAccountInfoChange');
```

## observer.onGetSimActiveState23+

onGetSimActiveState(slotId: number, callback: Callback&lt;boolean&gt;): void

SIM卡激活状态变化的监听，使用callback方式作为异步方法。

****需要权限****：ohos.permission.GET\_TELEPHONY\_STATE

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | number | 是 | 卡槽ID。  - 0：卡槽1。  - 1：卡槽2。 |
| callback | Callback&lt;boolean&gt; | 是 | 以callback形式返回结果。  - true：激活。  - false：未激活。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

let sislotId = 0;
let simActiveState: Callback<boolean> = (isSimActive: boolean) => {
    console.info(`simActiveState slotId ${JSON.stringify(isSimActive)}`);
}
observer.onGetSimActiveState(sislotId, simActiveState);
```

## observer.offGetSimActiveState23+

offGetSimActiveState(callback?: Callback&lt;boolean&gt;): void

取消SIM卡激活状态变化的监听，使用callback方式作为异步方法。

****需要权限****：ohos.permission.GET\_TELEPHONY\_STATE

****系统能力****：SystemCapability.Telephony.StateRegistry

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean&gt; | 否 | 以callback形式返回结果。  - true：激活。  - false：未激活。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

let simActiveState: Callback<boolean> = (isSimActive: boolean) => {
    console.info(`simActiveState slotId ${JSON.stringify(isSimActive)}`);
}
observer.offGetSimActiveState(simActiveState);
```

## observer.onCCallStateChange23+

onCCallStateChange(callback: Callback&lt;CCallStateInfo&gt;, options?: ObserverOptions): void

三方应用监听运营商通话状态并获取通话号码，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****需要权限****：ohos.permission.MANAGE\_CALL\_FOR\_DEVICES

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;[CCallStateInfo](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-observer/js-apis-observer#ccallstateinfo23)&gt; | 是 | 以callback形式异步返回结果。  应用可获取到CCallState。 |
| options | [ObserverOptions](#observeroptions11) | 否 | 电话相关事件订阅参数可选项。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 8800001 | Invalid parameter value. |
| 8800002 | Service connection failed. |
| 8800003 | System internal error. |
| 8800999 | Unknown error. |

****示例：****

```
import { call, observer } from '@kit.TelephonyKit';

let callback: (data: observer.CCallStateInfo) => void = (data: observer.CCallStateInfo) => {
    console.info("onCCallStateChange, data:" + JSON.stringify(data));
}
let options: observer.ObserverOptions = {
    slotId: 0
}

observer.onCCallStateChange(callback, options);
observer.onCCallStateChange(callback);
```

## observer.offCCallStateChange23+

offCCallStateChange(callback?: Callback&lt;CCallStateInfo&gt;): void

取消三方应用监听运营商通话状态并获取通话号码，使用callback方式作为异步方法。

****系统能力****：SystemCapability.Telephony.StateRegistry

****需要权限****：ohos.permission.MANAGE\_CALL\_FOR\_DEVICES

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;[CCallStateInfo](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-observer/js-apis-observer#ccallstateinfo23)&gt; | 否 | 以callback形式异步返回结果。  应用可获取到CCallState。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[电话子系统错误码](/ref/system-network-api/telephony-api/telephony-arkts-errcode/errorcode-telephony/errorcode-telephony)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 8800001 | Invalid parameter value. |
| 8800002 | Service connection failed. |
| 8800003 | System internal error. |
| 8800999 | Unknown error. |

****示例：****

```
import { call, observer } from '@kit.TelephonyKit';

let callback: (data: observer.CCallStateInfo) => void = (data: observer.CCallStateInfo) => {
    console.info("onCCallStateChange, data:" + JSON.stringify(data));
}

observer.offCCallStateChange(callback);
observer.offCCallStateChange();
```

## LockReason8+

SIM卡锁类型。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SIM\_NONE | 0 | 无锁。 |
| SIM\_PIN | 1 | PIN锁。 |
| SIM\_PUK | 2 | PUK锁。 |
| SIM\_PN\_PIN | 3 | 网络PIN锁。 |
| SIM\_PN\_PUK | 4 | 网络PUK锁。 |
| SIM\_PU\_PIN | 5 | 子网PIN锁。 |
| SIM\_PU\_PUK | 6 | 子网PUK锁。 |
| SIM\_PP\_PIN | 7 | 服务提供商PIN锁。 |
| SIM\_PP\_PUK | 8 | 服务提供商PUK锁。 |
| SIM\_PC\_PIN | 9 | 组织PIN锁。 |
| SIM\_PC\_PUK | 10 | 组织PUK锁。 |
| SIM\_SIM\_PIN | 11 | SIM PIN锁。 |
| SIM\_SIM\_PUK | 12 | SIM PUK锁。 |

## SimStateData7+

SIM卡类型和状态。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| type | [CardType](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sim/js-apis-sim#cardtype7) | 否 | 否 | SIM卡类型。 |
| state | [SimState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sim/js-apis-sim#simstate) | 否 | 否 | SIM卡状态。 |
| reason8+ | [LockReason](#lockreason8) | 否 | 否 | SIM卡锁类型。 |

## CallStateInfo11+

通话状态相关信息。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| state | [CallState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#callstate) | 否 | 否 | 通话类型。 |
| number | string | 否 | 否 | 电话号码。 |

## CCallStateInfo23+

通话状态相关信息。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| state | [CCallState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call#ccallstate23) | 否 | 否 | 通话类型。 |
| teleNumber | string | 否 | 否 | 电话号码。 |

## DataConnectionStateInfo11+

数据连接状态相关信息。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| state | [DataConnectState](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data#dataconnectstate) | 否 | 否 | 数据连接状态。 |
| network | [RatType](#rattype) | 否 | 否 | 网络类型。 |

## ObserverOptions11+

电话相关事件订阅参数可选项。

****系统能力****：SystemCapability.Telephony.StateRegistry

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| slotId | number | 否 | 否 | 卡槽ID。  - 0：卡槽1。  - 1：卡槽2。 |
