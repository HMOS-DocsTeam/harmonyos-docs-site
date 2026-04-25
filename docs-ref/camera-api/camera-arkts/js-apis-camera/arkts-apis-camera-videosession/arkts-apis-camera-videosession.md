---
title: "Interface (VideoSession)"
sidebar_position: 31
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-videosession
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-camera-videosession
---

# Interface (VideoSession)

VideoSession 继承自 [Session](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session)、[Flash](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-flash/arkts-apis-camera-flash)、[AutoExposure](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-autoexposure/arkts-apis-camera-autoexposure)、 [WhiteBalance](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-whitebalance/arkts-apis-camera-whitebalance)、[Focus](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-focus/arkts-apis-camera-focus)、[Zoom](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-zoom/arkts-apis-camera-zoom)、[Stabilization](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-stabilization/arkts-apis-camera-stabilization)、[ColorManagement](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagement/arkts-apis-camera-colormanagement)、[AutoDeviceSwitch](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-autodeviceswitch/arkts-apis-camera-autodeviceswitch)、[Macro](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-macro/arkts-apis-camera-macro)、[ControlCenter](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-controlcenter/arkts-apis-camera-controlcenter)。

普通录像模式会话类，提供了对闪光灯、曝光、白平衡、对焦、变焦、视频防抖、色彩空间、微距及控制器的操作。

默认的视频录制模式，适用于一般场景。支持720P、1080p等多种分辨率的录制，可选择不同帧率（如30fps、60fps）。

![](../../../../images/ef3aa894/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 11开始支持。

## 导入模块

```
import { camera } from '@kit.CameraKit';
```

## canPreconfig12+

canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean

查询当前Session是否支持指定的预配置类型。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| preconfigType | [PreconfigType](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#preconfigtype12) | 是 | 指定配置预期分辨率。 |
| preconfigRatio | [PreconfigRatio](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#preconfigratio12) | 否 | 可选画幅比例，默认为16:9。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| boolean | true: 支持指定预配置类型。  false: 不支持指定预配置类型。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function testCanPreconfig(videoSession: camera.VideoSession, preconfigType: camera.PreconfigType,
  preconfigRatio: camera.PreconfigRatio): void {
  try {
    let result = videoSession.canPreconfig(preconfigType, preconfigRatio);
    console.info(`canPreconfig ${preconfigType} ${preconfigRatio} result is : ${result}`);
  } catch (error) {
    let err = error as BusinessError;
    console.error(`The canPreconfig call failed. error code: ${err.code}`);
  }
}
```

## preconfig12+

preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void

对当前Session进行预配置。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| preconfigType | [PreconfigType](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#preconfigtype12) | 是 | 指定配置预期分辨率。 |
| preconfigRatio | [PreconfigRatio](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#preconfigratio12) | 否 | 可选画幅比例，默认为16:9。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function testPreconfig(videoSession: camera.VideoSession, preconfigType: camera.PreconfigType,
  preconfigRatio: camera.PreconfigRatio): void {
  try {
    videoSession.preconfig(preconfigType, preconfigRatio);
    console.info(`preconfig ${preconfigType} ${preconfigRatio} success`);
  } catch (error) {
    let err = error as BusinessError;
    console.error(`The preconfig call failed. error code: ${err.code}`);
  }
}
```

## on('error')11+

on(type: 'error', callback: ErrorCallback): void

监听普通录像会话的错误事件，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/c4bb42f7/note_3.0-zh-cn.png) 

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'error'，session创建成功之后可监听该接口。session调用相关接口出现错误时会触发该事件，比如调用[beginConfig](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#beginconfig11)，[commitConfig](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11)，[addInput](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#addinput11)等接口发生错误时返回错误信息。 |
| callback | [ErrorCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback) | 是 | 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode)。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError): void {
  console.error(`Video session error code: ${err.code}`);
}

function registerSessionError(videoSession: camera.VideoSession): void {
  videoSession.on('error', callback);
}
```

## off('error')11+

off(type: 'error', callback?: ErrorCallback): void

注销监听普通录像会话的错误事件，通过注册回调函数获取结果。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'error'，session创建成功之后可监听该接口。 |
| callback | [ErrorCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback) | 否 | 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。 |

****示例：****

```
function unregisterSessionError(videoSession: camera.VideoSession): void {
  videoSession.off('error');
}
```

## on('focusStateChange')11+

on(type: 'focusStateChange', callback: AsyncCallback&lt;FocusState&gt;): void

监听相机聚焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/d86c4b8b/note_3.0-zh-cn.png) 

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'focusStateChange'，session创建成功可监听。仅当自动对焦模式时，且相机对焦状态发生改变时可触发该事件。 |
| callback | AsyncCallback&lt;[FocusState](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#focusstate)&gt; | 是 | 回调函数，用于获取当前对焦状态。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, focusState: camera.FocusState): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`Focus state: ${focusState}`);
}

function registerFocusStateChange(videoSession: camera.VideoSession): void {
  videoSession.on('focusStateChange', callback);
}
```

## off('focusStateChange')11+

off(type: 'focusStateChange', callback?: AsyncCallback&lt;FocusState&gt;): void

注销监听相机聚焦的状态变化。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'focusStateChange'，session创建成功可监听。 |
| callback | AsyncCallback&lt;[FocusState](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#focusstate)&gt; | 否 | 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。 |

****示例：****

```
function unregisterFocusStateChange(videoSession: camera.VideoSession): void {
  videoSession.off('focusStateChange');
}
```

## on('smoothZoomInfoAvailable')11+

on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback&lt;SmoothZoomInfo&gt;): void

监听相机平滑变焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/0e98c71f/note_3.0-zh-cn.png) 

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'smoothZoomInfoAvailable'，session创建成功可监听。 |
| callback | AsyncCallback&lt;[SmoothZoomInfo](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#smoothzoominfo11)&gt; | 是 | 回调函数，用于获取当前平滑变焦状态。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, smoothZoomInfo: camera.SmoothZoomInfo): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`The duration of smooth zoom: ${smoothZoomInfo.duration}`);
}

function registerSmoothZoomInfo(videoSession: camera.VideoSession): void {
  videoSession.on('smoothZoomInfoAvailable', callback);
}
```

## off('smoothZoomInfoAvailable')11+

off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback&lt;SmoothZoomInfo&gt;): void

注销监听相机平滑变焦的状态变化。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'smoothZoomInfoAvailable'，session创建成功可监听。 |
| callback | AsyncCallback&lt;[SmoothZoomInfo](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#smoothzoominfo11)&gt; | 否 | 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。 |

****示例：****

```
function unregisterSmoothZoomInfo(videoSession: camera.VideoSession): void {
  videoSession.off('smoothZoomInfoAvailable');
}
```

## on('autoDeviceSwitchStatusChange')13+

on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback&lt;AutoDeviceSwitchStatus&gt;): void

监听相机自动切换镜头状态变化，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/a4540004/note_3.0-zh-cn.png) 

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'autoDeviceSwitchStatusChange'，session创建成功可监听。 |
| callback | AsyncCallback&lt;[AutoDeviceSwitchStatus](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#autodeviceswitchstatus13)&gt; | 是 | 回调函数，用于获取当前自动切换镜头的状态。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, autoDeviceSwitchStatus: camera.AutoDeviceSwitchStatus): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`isDeviceSwitched: ${autoDeviceSwitchStatus.isDeviceSwitched}, isDeviceCapabilityChanged: ${autoDeviceSwitchStatus.isDeviceCapabilityChanged}`);
}

function registerAutoDeviceSwitchStatus(videoSession: camera.VideoSession): void {
  videoSession.on('autoDeviceSwitchStatusChange', callback);
}
```

## off('autoDeviceSwitchStatusChange')13+

off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback&lt;AutoDeviceSwitchStatus&gt;): void

注销监听相机自动切换镜头状态变化。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'autoDeviceSwitchStatusChange'，session创建成功可监听。 |
| callback | AsyncCallback&lt;[AutoDeviceSwitchStatus](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#autodeviceswitchstatus13)&gt; | 否 | 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。 |

****示例：****

```
function unregisterSmoothZoomInfo(videoSession: camera.VideoSession): void {
  videoSession.off('autoDeviceSwitchStatusChange');
}
```

## setQualityPrioritization14+

setQualityPrioritization(quality : QualityPrioritization) : void;

设置录像质量优先级。

![](../../../../images/a2787c52/note_3.0-zh-cn.png) 

- 默认为高录像质量，设置为功耗平衡将降低录像质量以减少功耗。实际功耗收益因平台而异。
- 建议该接口在[commitConfig](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11)和[start](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#start11-1)之间调用。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| quality | [QualityPrioritization](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#qualityprioritization14) | 是 | 需要设置的视频质量优先级（默认为高录像质量）。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)和[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 7400103 | Session not config. The session has not been committed or configured. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function setQualityPrioritization(videoSession: camera.VideoSession): void {
  try {
    videoSession.setQualityPrioritization(camera.QualityPrioritization.POWER_BALANCE);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The setQualityPrioritization call failed. error code: ${err.code}`);
  }
}
```

## on('systemPressureLevelChange')20+

on(type: 'systemPressureLevelChange', callback: AsyncCallback&lt;SystemPressureLevel&gt;): void

监听系统压力状态变化，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/ce08c565/note_3.0-zh-cn.png) 

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'systemPressureLevelChange'，session创建成功可监听。 |
| callback | AsyncCallback&lt;[SystemPressureLevel](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#systempressurelevel20)&gt; | 是 | 回调函数，用于获取当前系统压力状态。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, systemPressureLevel: camera.SystemPressureLevel): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`systemPressureLevel: ${systemPressureLevel}`);
}

function registerSystemPressureLevelChangeCallback(videoSession: camera.VideoSession): void {
    videoSession.on('systemPressureLevelChange', callback);
}
```

## off('systemPressureLevelChange')20+

off(type: 'systemPressureLevelChange', callback?: AsyncCallback&lt;SystemPressureLevel&gt;): void

注销监听系统压力状态变化。

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 注销监听事件，固定为'systemPressureLevelChange'，session创建成功可触发此事件。 |
| callback | AsyncCallback&lt;[SystemPressureLevel](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#systempressurelevel20)&gt; | 否 | 回调函数，如果指定参数则取消对应callback (callback对象不可是匿名函数)，否则参数默认为空，取消所有callback。 |

****示例：****

```
function unregisterSystemPressureLevelChangeCallback(videoSession: camera.VideoSession): void {
  videoSession.off('systemPressureLevelChange');
}
```

## on('controlCenterEffectStatusChange')20+

on(type: 'controlCenterEffectStatusChange', callback: AsyncCallback&lt;ControlCenterStatusInfo&gt;): void

监听相机控制器效果激活状态变化，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/7aa193b1/note_3.0-zh-cn.png) 

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'controlCenterEffectStatusChange'，session创建成功可监听。 |
| callback | AsyncCallback&lt;[ControlCenterStatusInfo](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#controlcenterstatusinfo20)&gt; | 是 | 回调函数，用于获取当前控制器激活状态。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, status: camera.ControlCenterStatusInfo): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`controlCenterEffectStatusChange: ${status}`);
}

function registerControlCenterEffectStatusChangeCallback(videoSession: camera.VideoSession): void {
  videoSession.on('controlCenterEffectStatusChange', callback);
}
```

## off('controlCenterEffectStatusChange')20+

off(type: 'controlCenterEffectStatusChange', callback?: AsyncCallback&lt;ControlCenterStatusInfo&gt;): void

注销监听相机控制器激活状态变化。

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 注销监听事件，固定为'controlCenterEffectStatusChange'，session创建成功可触发此事件。 |
| callback | AsyncCallback&lt;[ControlCenterStatusInfo](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#controlcenterstatusinfo20)&gt; | 否 | 回调函数，如果指定参数则取消对应callback (callback对象不可是匿名函数)，否则参数默认为空，取消所有callback。 |

****示例：****

```
function unregisterControlCenterEffectStatusChange(videoSession: camera.VideoSession): void {
  videoSession.off('controlCenterEffectStatusChange');
}
```

## on('macroStatusChanged')20+

on(type: 'macroStatusChanged', callback: AsyncCallback&lt;boolean&gt;): void

监听相机微距状态变化，通过注册回调函数获取结果。使用callback异步回调。

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'macroStatusChanged'，session创建成功可监听。 |
| callback | AsyncCallback&lt;boolean&gt; | 是 | 回调函数，用于获取当前微距状态，返回true是开启状态，返回false是禁用状态。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, macroStatus: boolean): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`Macro state: ${macroStatus}`);
}

function registerMacroStatusChanged(videoSession: camera.VideoSession): void {
  videoSession.on('macroStatusChanged', callback);
}
```

## off('macroStatusChanged')20+

off(type: 'macroStatusChanged', callback?: AsyncCallback&lt;boolean&gt;): void

注销相机微距状态变化的监听。

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 注销监听事件，固定为'macroStatusChanged'，session创建成功可触发此事件。 |
| callback | AsyncCallback&lt;boolean&gt; | 否 | 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则参数默认为空，取消所有callback, 返回true表示成功，false表示失败。 |

****示例：****

```
function unregisterMacroStatusChanged(videoSession: camera.VideoSession): void {
  videoSession.off('macroStatusChanged');
}
```

## onIsoInfoChange22+

onIsoInfoChange(callback: Callback&lt;IsoInfo&gt;): void

监听相机感光度（ISO）状态变化，通过注册回调函数获取最新ISO值。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从API version 22开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;[IsoInfo](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#isoinfo22)&gt; | 是 | 回调函数，用于获取相机当前的ISO值。 |

****示例：****

```
function callback(isoInfo: camera.IsoInfo): void {
  console.info(`Iso : ${isoInfo}`);
}

function registerIsoInfoChanged(videoSession: camera.VideoSession): void {
  videoSession.onIsoInfoChange(callback);
}
```

## offIsoInfoChange22+

offIsoInfoChange(callback?: Callback&lt;IsoInfo&gt;): void

取消监听相机感光度（ISO）状态的变化。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从API version 22开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;[IsoInfo](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#isoinfo22)&gt; | 否 | 回调函数，可选。  如果指定callback参数则注销该callback监听，callback不可是匿名函数。  如果未指定callback，则注销所有已存在的callback监听。 |

****示例：****

```
function callback(isoInfo: camera.IsoInfo): void {
  console.info(`Iso : ${isoInfo}`);
}

function unregisterIsoInfoChanged(videoSession: camera.VideoSession): void {
  videoSession.offIsoInfoChange(callback);
}

function unregisterAllIsoInfoChanged(videoSession: camera.VideoSession): void {
  videoSession.offIsoInfoChange();
}
```
