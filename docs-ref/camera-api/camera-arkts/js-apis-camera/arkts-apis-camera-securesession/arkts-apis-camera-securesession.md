---
title: "Interface (SecureSession)"
sidebar_position: 26
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-securesession
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-camera-securesession
---

# Interface (SecureSession)

SecureSession 继承自 [Session](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session)、[Flash](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-flash/arkts-apis-camera-flash)、[AutoExposure](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-autoexposure/arkts-apis-camera-autoexposure)、[WhiteBalance](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-whitebalance/arkts-apis-camera-whitebalance)、[Focus](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-focus/arkts-apis-camera-focus)、[Zoom](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-zoom/arkts-apis-camera-zoom)。

安全模式会话类，提供了对闪光灯、曝光、白平衡、对焦、变焦的操作。

通过[createSession](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createsession11)接口传入[SceneMode](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#scenemode11)为SECURE\_PHOTO模式创建一个安全模式的会话。该模式开放给人脸识别、银行等有安全诉求的应用，需要结合Device Security Kit使用，支持同时输出普通预览流和安全流的业务场景。请参考[安全相机开发指导](/camera-kit/camera-dev-arkts/camera-secure-photo)。

![](../../../../images/f26a51c6/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 12开始支持。

## 导入模块

```
import { camera } from '@kit.CameraKit';
```

## addSecureOutput12+

addSecureOutput(previewOutput: PreviewOutput): void

将其中一条[PreviewOutput](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput)标记成安全输出。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| previewOutput | [PreviewOutput](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput) | 是 | 需要标记成安全输出的预览流，传参异常时，会返回错误码。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function addSecureOutput(session: camera.SecureSession, previewOutput: camera.PreviewOutput): void {
  try {
    session.addSecureOutput(previewOutput);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The addOutput call failed. error code: ${err.code}`);
  }
}
```

## on('error')12+

on(type: 'error', callback: ErrorCallback): void

监听安全相机会话的错误事件，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/67857f1a/note_3.0-zh-cn.png) 

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'error'，session创建成功之后可监听该接口。session调用相关接口出现错误时会触发该事件，比如调用[beginConfig](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#beginconfig11)，[commitConfig](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11-1)，[addInput](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#addinput11)等接口发生错误时返回错误信息。 |
| callback | [ErrorCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback) | 是 | 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode)。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError): void {
  console.error(`Video session error code: ${err.code}`);
}

function registerSessionError(secureSession: camera.SecureSession): void {
  secureSession.on('error', callback);
}
```

## off('error')12+

off(type: 'error', callback?: ErrorCallback): void

注销监听安全相机会话的错误事件，通过注册回调函数获取结果。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'error'，session创建成功之后可监听该接口。 |
| callback | [ErrorCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback) | 否 | 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。 |

****示例：****

```
function unregisterSessionError(secureSession: camera.SecureSession): void {
  secureSession.off('error');
}
```

## on('focusStateChange')12+

on(type: 'focusStateChange', callback: AsyncCallback&lt;FocusState&gt;): void

监听相机聚焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/9e27d854/note_3.0-zh-cn.png) 

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

function registerFocusStateChange(secureSession: camera.SecureSession): void {
  secureSession.on('focusStateChange', callback);
}
```

## off('focusStateChange')12+

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
function unregisterFocusStateChange(secureSession: camera.SecureSession): void {
  secureSession.off('focusStateChange');
}
```
