---
title: "remoteDevice（对端设备的连接能力）"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-remote-device
kit: 系统
last_updated: "2026-04-22"
slug: nearlink-remote-device
---

# remoteDevice（对端设备的连接能力）

本模块提供了查询远端设备信息、发起配对等功能。

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

## 导入模块

```
import { remoteDevice } from '@kit.NearLinkKit';
```

## PairingState

type PairingState = [constant.PairingState](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#pairingstate)

表示和远端设备的配对状态，为枚举值。

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

| 类型 | 说明 |
| --- | --- |
| [constant.PairingState](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#pairingstate) | 和远端设备的配对状态。 |

## ConnectionState

type ConnectionState = [constant.ConnectionState](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#connectionstate)

表示和远端设备的连接状态，为枚举值。

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

| 类型 | 说明 |
| --- | --- |
| [constant.ConnectionState](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#connectionstate) | 和远端设备的连接状态。 |

## DeviceClass

type DeviceClass = [constant.DeviceClass](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#deviceclass)

表示设备类型，为枚举值。

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

| 类型 | 说明 |
| --- | --- |
| [constant.DeviceClass](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#deviceclass) | 设备类型。 |

## AcbState

type AcbState = [constant.AcbState](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#acbstate)

表示和远端设备的逻辑链路连接状态，为枚举值。

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.1.0(18)

| 类型 | 说明 |
| --- | --- |
| [constant.AcbState](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#acbstate) | 和远端设备的逻辑链路连接状态。 |

## createRemoteDevice

createRemoteDevice(address: string): RemoteDevice

创建远端设备实例。

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| address | string | 是 | 远端设备地址。地址格式参考："11:22:33:AA:BB:FF"。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [RemoteDevice](#remotedevice) | 远端设备实例。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-error-code/nearlink-error-code)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid parameter |
| 801 | Capability not supported |

****示例：****

```
import { remoteDevice } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址
let device: remoteDevice.RemoteDevice;
try {
  device = remoteDevice.createRemoteDevice(addr);
  console.info('device: ' + JSON.stringify(device));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

## RemoteDevice

![](../../../../images/e20a7799/note_3.0-zh-cn.png) 

提供远端设备的操作方法，使用前需要使用[remoteDevice.createRemoteDevice](#createremotedevice)方法创建一个远端设备[RemoteDevice](#remotedevice)实例。一个设备只需要创建一次，无需多次创建。

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

### startPairing

startPairing(): Promise&lt;void&gt;

发起与远端设备的配对。使用Promise异步回调。发起配对后，将依据本端与远端设备的输入输出能力标识弹出不同类型的弹窗，需使用者进一步确认。

****需要权限：**** ohos.permission.ACCESS\_NEARLINK

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.1.0(18)

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象，无返回值。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-error-code/nearlink-error-code)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 801 | Capability not supported |
| 1009700003 | Nearlink is off |
| 1009700099 | Operation failed |

****示例：****

```
import { remoteDevice } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址
let device: remoteDevice.RemoteDevice;
try {
  device = remoteDevice.createRemoteDevice(addr);
  device.startPairing().then(()=>{
    console.info('start pairing success');
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

### getPairingState

getPairingState(): PairingState

获取和远端设备的配对状态。

****需要权限：**** ohos.permission.ACCESS\_NEARLINK

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [PairingState](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#pairingstate) | 和远端设备的配对状态。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-error-code/nearlink-error-code)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 801 | Capability not supported |
| 1009700003 | Nearlink is off |
| 1009700099 | Operation failed |

****示例：****

```
import { remoteDevice } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址
let device: remoteDevice.RemoteDevice;
try {
  device = remoteDevice.createRemoteDevice(addr);
  let state: remoteDevice.PairingState = device.getPairingState();
  console.info('state:' + JSON.stringify(state));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

### getDeviceName

getDeviceName(): string

获取远端设备名称。

****需要权限：**** ohos.permission.ACCESS\_NEARLINK

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 远端设备名称。最大长度为30。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-error-code/nearlink-error-code)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 801 | Capability not supported |
| 1009700003 | Nearlink is off |
| 1009700099 | Operation failed |

****示例：****

```
import { remoteDevice } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址
let device: remoteDevice.RemoteDevice;
try {
  device = remoteDevice.createRemoteDevice(addr);
  let name: string = device.getDeviceName();
  console.info('state:' + JSON.stringify(name));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

### getDeviceClass

getDeviceClass(): DeviceClass

获取远端设备类型。

****需要权限：**** ohos.permission.ACCESS\_NEARLINK

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [DeviceClass](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#deviceclass) | 远端设备类型。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-error-code/nearlink-error-code)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 801 | Capability not supported |
| 1009700003 | Nearlink is off |
| 1009700099 | Operation failed |

****示例：****

```
import { remoteDevice } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址
let device: remoteDevice.RemoteDevice;
try {
  device = remoteDevice.createRemoteDevice(addr);
  let type: remoteDevice.DeviceClass = device.getDeviceClass();
  console.info('type:' + JSON.stringify(type));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

### getConnectionState

getConnectionState(): ConnectionState

获取本端设备和远端设备的连接状态。

****需要权限：**** ohos.permission.ACCESS\_NEARLINK

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.0.1(13)

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [ConnectionState](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#connectionstate) | 本端设备和远端设备的连接状态。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-error-code/nearlink-error-code)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 801 | Capability not supported |
| 1009700003 | Nearlink is off |
| 1009700099 | Operation failed |

****示例：****

```
import { remoteDevice } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址
let device: remoteDevice.RemoteDevice;
try {
  device = remoteDevice.createRemoteDevice(addr);
  let state: remoteDevice.ConnectionState = device.getConnectionState();
  console.info('state:' + JSON.stringify(state));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

### getAcbState

getAcbState(): AcbState

获取和远端设备的逻辑链路连接状态。

****需要权限：**** ohos.permission.ACCESS\_NEARLINK

****系统能力：**** SystemCapability.Communication.NearLink.Core

****起始版本：**** 5.1.0(18)

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [AcbState](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-constant/nearlink-constant#acbstate) | 和远端设备的逻辑链路连接状态。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-error-code/nearlink-error-code)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 801 | Capability not supported |
| 1009700003 | Nearlink is off |
| 1009700099 | Operation failed |

****示例：****

```
import { remoteDevice } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址
let device: remoteDevice.RemoteDevice;
try {
  device = remoteDevice.createRemoteDevice(addr);
  let state: remoteDevice.AcbState = device.getAcbState();
  console.info('state:' + JSON.stringify(state));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
