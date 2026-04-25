---
title: "Interface (MetadataOutput)"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-metadataoutput
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-camera-metadataoutput
---

# Interface (MetadataOutput)

metadata流。继承[CameraOutput](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameraoutput/arkts-apis-camera-cameraoutput)。

![](../../../../images/5105eaa5/note_3.0-zh-cn.png) 

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { camera } from '@kit.CameraKit';
```

## start

start(callback: AsyncCallback&lt;void&gt;): void

开始输出metadata，通过注册回调函数获取结果。使用callback异步回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数。当开始输出metadata成功，err为undefined，否则为错误对象。错误码类型[CameraErrorCode](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode)。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function startMetadataOutput(metadataOutput: camera.MetadataOutput): void {
  metadataOutput.start((err: BusinessError) => {
    if (err) {
      console.error(`Failed to start metadata output, error code: ${err.code}.`);
      return;
    }
    console.info('Callback returned with metadata output started.');
  });
}
```

## start

start(): Promise&lt;void&gt;

开始输出metadata。使用Promise异步回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象，无返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function startMetadataOutput(metadataOutput: camera.MetadataOutput): void {
  metadataOutput.start().then(() => {
    console.info('Callback returned with metadata output started.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to metadata output start, error code: ${error.code}`);
  });
}
```

## stop

stop(callback: AsyncCallback&lt;void&gt;): void

停止输出metadata，通过注册回调函数获取结果。使用callback异步回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数。当停止输出metadata成功，err为undefined，否则为错误对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function stopMetadataOutput(metadataOutput: camera.MetadataOutput): void {
  metadataOutput.stop((err: BusinessError) => {
    if (err) {
      console.error(`Failed to stop the metadata output, error code: ${err.code}.`);
      return;
    }
    console.info('Callback returned with metadata output stopped.');
  })
}
```

## stop

stop(): Promise&lt;void&gt;

停止输出metadata。使用Promise异步回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象，无返回结果。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function stopMetadataOutput(metadataOutput: camera.MetadataOutput): void {
  metadataOutput.stop().then(() => {
    console.info('Callback returned with metadata output stopped.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to metadata output stop, error code: ${error.code}`);
  });
}
```

## on('metadataObjectsAvailable')

on(type: 'metadataObjectsAvailable', callback: AsyncCallback&lt;Array&lt;MetadataObject&gt;>): void

监听检测到的metadata对象，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/5d1b9fd9/note_3.0-zh-cn.png) 

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'metadataObjectsAvailable'，metadataOutput创建成功后可监听。  检测到有效的metadata数据时，触发该事件发生并返回相应的metadata数据。如果输入错误字段，则不会创建有效监听。 |
| callback | AsyncCallback&lt;Array&lt;[MetadataObject](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#metadataobject)&gt;&gt; | 是 | 回调函数，用于获取metadata数据。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, metadataObjectArr: Array<camera.MetadataObject>): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info('metadata output metadataObjectsAvailable');
}

function registerMetadataObjectsAvailable(metadataOutput: camera.MetadataOutput): void {
  metadataOutput.on('metadataObjectsAvailable', callback);
}
```

## off('metadataObjectsAvailable')

off(type: 'metadataObjectsAvailable', callback?: AsyncCallback&lt;Array&lt;MetadataObject&gt;>): void

注销监听检测到的metadata对象。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'metadataObjectsAvailable'，metadataOutput创建成功后可监听。 |
| callback | AsyncCallback&lt;Array&lt;[MetadataObject](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#metadataobject)&gt;&gt; | 否 | 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。 |

****示例：****

```
function unregisterMetadataObjectsAvailable(metadataOutput: camera.MetadataOutput): void {
  metadataOutput.off('metadataObjectsAvailable');
}
```

## on('error')

on(type: 'error', callback: ErrorCallback): void

监听metadata流的错误，通过注册回调函数获取结果。使用callback异步回调。

![](../../../../images/af10dd25/note_3.0-zh-cn.png) 

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'error'，metadataOutput创建成功后可监听。metadata接口使用错误时触发该事件并返回对应错误码，比如调用[start](#start-1)，[CameraOutput.release](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameraoutput/arkts-apis-camera-cameraoutput#release-1)接口时发生错误返回对应错误信息。 |
| callback | [ErrorCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback) | 是 | 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode)。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(metadataOutputError: BusinessError): void {
  console.error(`Metadata output error code: ${metadataOutputError.code}`);
}

function registerMetadataOutputError(metadataOutput: camera.MetadataOutput): void {
  metadataOutput.on('error', callback);
}
```

## off('error')

off(type: 'error', callback?: ErrorCallback): void

注销监听metadata流的错误。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 监听事件，固定为'error'，metadataOutput创建成功后可监听。 |
| callback | [ErrorCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback) | 否 | 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。 |

****示例：****

```
function unregisterMetadataOutputError(metadataOutput: camera.MetadataOutput): void {
  metadataOutput.off('error');
}
```

## addMetadataObjectTypes23+

addMetadataObjectTypes(types: Array&lt;MetadataObjectType&gt;): void

新增需要上报的检测对象类型。

****元服务API：**** 从API version 23开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| types | Array&lt;[MetadataObjectType](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#metadataobjecttype)&gt; | 是 | metadata流类型信息，通过getSupportedOutputCapability接口获取。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function addMetadataObjectTypes(metadataOutput: camera.MetadataOutput, types: Array<camera.MetadataObjectType>): void {
  try {
    metadataOutput.addMetadataObjectTypes(types);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`addMetadataObjectTypes error. error code: ${err.code}`);
  }
}
```

## removeMetadataObjectTypes23+

removeMetadataObjectTypes(types: Array&lt;MetadataObjectType&gt;): void

删除需要上报的检测对象类型。

****元服务API：**** 从API version 23开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| types | Array&lt;[MetadataObjectType](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#metadataobjecttype)&gt; | 是 | metadata流类型信息，通过getSupportedOutputCapability接口获取。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function removeMetadataObjectTypes(metadataOutput: camera.MetadataOutput, types: Array<camera.MetadataObjectType>): void {
  try {
    metadataOutput.removeMetadataObjectTypes(types);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`removeMetadataObjectTypes error. error code: ${err.code}`);
  }
}
```
