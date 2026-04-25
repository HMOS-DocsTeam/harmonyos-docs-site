---
title: "Interface (CameraOutput)"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameraoutput
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-camera-cameraoutput
---

# Interface (CameraOutput)

会话中[Session](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session)使用的输出信息，output的基类。

![](../../../../images/2afb129d/note_3.0-zh-cn.png) 

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { camera } from '@kit.CameraKit';
```

## release

release(callback: AsyncCallback&lt;void&gt;): void

释放输出资源，通过注册回调函数获取结果。使用callback异步回调。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数。当释放输出资源成功，err为undefined，否则为错误对象。错误码类型[CameraErrorCode](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode)。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function releasePreviewOutput(previewOutput: camera.PreviewOutput): void {
  previewOutput.release((err: BusinessError) => {
    if (err) {
      console.error(`Failed to release the Preview output instance ${err.code}`);
      return;
    }
    console.info('Callback invoked to indicate that the preview output instance is released successfully.');
  });
}

function releaseVideoOutput(videoOutput: camera.VideoOutput): void {
  videoOutput.release((err: BusinessError) => {
    if (err) {
      console.error(`Failed to release the video output instance ${err.code}`);
      return;
    }
    console.info('Callback invoked to indicate that the video output instance is released successfully.');
  });
}
```

## release

release(): Promise&lt;void&gt;

释放输出资源。使用Promise异步回调。

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
| 7400201 | Camera service fatal error. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function releasePreviewOutput(previewOutput: camera.PreviewOutput): void {
  previewOutput.release().then(() => {
    console.info('Promise returned to indicate that the preview output instance is released successfully.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to preview output release, error code: ${error.code}`);
  });
}

function releaseVideoOutput(videoOutput: camera.VideoOutput): void {
  videoOutput.release().then(() => {
    console.info('Promise returned to indicate that the video output instance is released successfully.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to video output release, error code: ${error.code}`);
  });
}
```
