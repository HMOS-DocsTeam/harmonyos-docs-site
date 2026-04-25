---
title: "Interface (Stabilization)"
sidebar_position: 28
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-stabilization
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-camera-stabilization
---

# Interface (Stabilization)

Stabilization 继承自 [StabilizationQuery](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-stabilizationquery/arkts-apis-camera-stabilizationquery)。

提供设备在录像模式下设置视频防抖的操作。

需要会话中有录像流（[VideoOutput](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videooutput/arkts-apis-camera-videooutput)）的前提下，才可以对视频进行防抖设置。

![](../../../../images/61d7e8a0/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 11开始支持。

## 导入模块

```
import { camera } from '@kit.CameraKit';
```

## getActiveVideoStabilizationMode11+

getActiveVideoStabilizationMode(): VideoStabilizationMode

查询当前正在使用的视频防抖模式。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [VideoStabilizationMode](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#videostabilizationmode) | 视频防抖是否正在使用。若接口调用失败，返回undefined。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function getActiveVideoStabilizationMode(videoSession: camera.VideoSession): camera.VideoStabilizationMode | undefined {
  let vsMode: camera.VideoStabilizationMode | undefined = undefined;
  try {
    vsMode = videoSession.getActiveVideoStabilizationMode();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The getActiveVideoStabilizationMode call failed. error code: ${err.code}`);
  }
  return vsMode;
}
```

## setVideoStabilizationMode11+

setVideoStabilizationMode(mode: VideoStabilizationMode): void

设置视频防抖模式。需要先检查设备是否支持对应的防抖模式，可以通过[isVideoStabilizationModeSupported](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-stabilizationquery/arkts-apis-camera-stabilizationquery#isvideostabilizationmodesupported11)方法判断所设置的模式是否支持。建议在[commitConfig](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11-1)与[Start](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#start11-1)之间设置视频防抖。

****元服务API：**** 从API version 19开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | [VideoStabilizationMode](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#videostabilizationmode) | 是 | 需要设置的视频防抖模式。 |

****错误码：****

以下错误码的详细介绍请参见[Camera错误码](/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

function setVideoStabilizationMode(videoSession: camera.VideoSession): void {
  try {
    videoSession.setVideoStabilizationMode(camera.VideoStabilizationMode.OFF);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The setVideoStabilizationMode call failed. error code: ${err.code}`);
  }
}
```
