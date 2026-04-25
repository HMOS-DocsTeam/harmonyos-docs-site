---
title: "PlayImageAnimation"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-playimageanimation
kit: 应用服务
last_updated: "2026-04-22"
slug: map-map-playimageanimation
---

# PlayImageAnimation

## 导入模块

```
import { map } from '@kit.MapKit';
import { image } from '@kit.ImageKit';
```

## PlayImageAnimation

控制多张图片的帧动画，继承[Animation](/ref/map-api/map-arkts/map-map/map-map-animation/map-map-animation)。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 5.0.0(12)

****示例：****

```
let images: Array<ResourceStr | image.PixelMap> = [
   // 图片存放在resources/rawfile
   'test1.png',
   'test2.png',
   'test3.png',
   'test4.png'
];
let playImageAnimation: map.PlayImageAnimation = new map.PlayImageAnimation();
await playImageAnimation.addImages(images);
```

### addImages

addImages(images: Array&lt;ResourceStr | image.PixelMap&gt;): Promise&lt;void&gt;

添加动画的图片资源。使用Promise异步回调。

****模型约束：**** 此接口仅可在Stage模型下使用。

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Map.Core

****起始版本：**** 5.0.0(12)

****参数：****

| ****参数名**** | ****类型**** | 必填 | ****说明**** |
| --- | --- | --- | --- |
| images | Array&lt;[ResourceStr](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr) | [image.PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap)> | 是 | 动画的图片资源。  ****说明：****  - 建议图片大小相同。  - 图片数量不超过200张。  - 持续时间需要大于33ms。如果不是，它将被更改为33ms。  - string类型入参，图片存放在resources/rawfile。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/map-api/map-arkts/errorcode-map/errorcode-map)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid input parameter. |

****示例：****

```
let images: Array<ResourceStr | image.PixelMap> = [
   // 图片存放在resources/rawfile
   'test1.png',
   'test2.png',
   'test3.png',
   'test4.png'
];
await playImageAnimation.addImages(images);
```
