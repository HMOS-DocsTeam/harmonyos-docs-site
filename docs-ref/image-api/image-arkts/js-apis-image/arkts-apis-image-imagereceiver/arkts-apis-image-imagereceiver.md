---
title: "Interface (ImageReceiver)"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagereceiver
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-image-imagereceiver
---

# Interface (ImageReceiver)

ImageReceiver类，用于获取组件surface id、接收最新的图片和读取下一张图片以及释放ImageReceiver实例。ImageReceiver作为图片的接收方和消费者，其参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方和生产者上进行，如相机预览流[createPreviewOutput](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createpreviewoutput)。

在调用以下方法前需要先通过[image.createImageReceiver](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagecreateimagereceiver11)创建ImageReceiver实例。

从API version 23开始，更推荐使用[image.createImageReceiver](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagecreateimagereceiver23)，通过传入[ImageReceiverOptions](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-i/arkts-apis-image-i#imagereceiveroptions23)创建ImageReceiver实例。

由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release](#release9)方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

![](../../../../images/5e350ec1/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 9开始支持。

## 导入模块

```
import { image } from '@kit.ImageKit';
```

## 属性

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| size9+ | [Size](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-i/arkts-apis-image-i#size) | 是 | 否 | 图片大小。该参数不会影响接收到的图片大小，实际返回大小由生产者决定，如相机。 |
| capacity9+ | number | 是 | 否 | 同时访问的图像数。该参数仅作为期望值，实际capacity由设备硬件决定。 |
| format9+ | [ImageFormat](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#imageformat9) | 是 | 否 | 图像格式，取值为[ImageFormat](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#imageformat9)常量（目前仅支持 ImageFormat:JPEG，实际返回格式由生产者决定，如相机）。 |

## getReceivingSurfaceId9+

getReceivingSurfaceId(callback: AsyncCallback&lt;string&gt;): void

用于获取一个surface id供Camera或其他组件使用。使用callback异步回调。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string&gt; | 是 | 回调函数，当获取surface id成功，err为undefined，data为获取到的surface id；否则为错误对象。 |

****示例:****

```
import { BusinessError } from '@kit.BasicServicesKit';

async function GetReceivingSurfaceId(receiver : image.ImageReceiver) {
  receiver.getReceivingSurfaceId((err: BusinessError, id: string) => {
    if (err) {
      console.error(`Failed to get the ReceivingSurfaceId.code ${err.code},message is ${err.message}`);
    } else {
      console.info('Succeeded in getting the ReceivingSurfaceId.');
    }
  });
}
```

## getReceivingSurfaceId9+

getReceivingSurfaceId(): Promise&lt;string&gt;

用于获取一个surface id供Camera或其他组件使用。使用Promise异步回调。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回surface id。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

async function GetReceivingSurfaceId(receiver : image.ImageReceiver) {
  receiver.getReceivingSurfaceId().then((id: string) => {
    console.info('Succeeded in getting the ReceivingSurfaceId.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to get the ReceivingSurfaceId.code ${error.code},message is ${error.message}`);
  })
}
```

## readLatestImage9+

readLatestImage(callback: AsyncCallback&lt;Image&gt;): void

从ImageReceiver读取最新的图片。使用callback异步回调。

![](../../../../images/4b9bf691/caution_3.0-zh-cn.png) 

此接口需要在[on](#on9)回调触发后调用，才能正常的接收到数据。且此接口返回的[Image](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image)对象使用完毕后需要调用[release](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image#release9)方法释放，释放后才可以继续接收新的数据。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;[Image](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image)&gt; | 是 | 回调函数，当读取最新图片成功，err为undefined，data为获取到的最新图片；否则为错误对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

async function ReadLatestImage(receiver : image.ImageReceiver) {
  receiver.readLatestImage((err: BusinessError, img: image.Image) => {
    if (err) {
      console.error(`Failed to read the latest Image.code ${err.code},message is ${err.message}`);
    } else {
      console.info('Succeeded in reading the latest Image.');
    }
  });
}
```

## readLatestImage9+

readLatestImage(): Promise&lt;Image&gt;

从ImageReceiver读取最新的图片。使用Promise异步回调。

![](../../../../images/57efab7e/caution_3.0-zh-cn.png) 

此接口需要在[on](#on9)回调触发后调用，才能正常的接收到数据。且此接口返回的[Image](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image)对象使用完毕后需要调用[release](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image#release9)方法释放，释放后才可以继续接收新的数据。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[Image](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image)&gt; | Promise对象，返回最新图片。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

async function ReadLatestImage(receiver : image.ImageReceiver) {
  receiver.readLatestImage().then((img: image.Image) => {
    console.info('Succeeded in reading the latest Image.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to read the latest Image.code ${error.code},message is ${error.message}`);
  });
}
```

## readNextImage9+

readNextImage(callback: AsyncCallback&lt;Image&gt;): void

从ImageReceiver读取下一张图片。使用callback异步回调。

![](../../../../images/35a4e5d0/caution_3.0-zh-cn.png) 

此接口需要在[on](#on9)回调触发后调用，才能正常的接收到数据。且此接口返回的[Image](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image)对象使用完毕后需要调用[release](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image#release9)方法释放，释放后才可以继续接收新的数据。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;[Image](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image)&gt; | 是 | 回调函数，当获取下一张图片成功，err为undefined，data为获取到的下一张图片；否则为错误对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

async function ReadNextImage(receiver : image.ImageReceiver) {
  receiver.readNextImage((err: BusinessError, img: image.Image) => {
    if (err) {
      console.error(`Failed to read the next Image.code ${err.code},message is ${err.message}`);
    } else {
      console.info('Succeeded in reading the next Image.');
    }
  });
}
```

## readNextImage9+

readNextImage(): Promise&lt;Image&gt;

从ImageReceiver读取下一张图片。使用Promise异步回调。

![](../../../../images/ef71bac8/caution_3.0-zh-cn.png) 

此接口需要在[on](#on9)回调触发后调用，才能正常的接收到数据。且此接口返回的[Image](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image)对象使用完毕后需要调用[release](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image#release9)方法释放，释放后才可以继续接收新的数据。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[Image](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image)&gt; | Promise对象，返回下一张图片。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

async function ReadNextImage(receiver : image.ImageReceiver) {
  receiver.readNextImage().then((img: image.Image) => {
    console.info('Succeeded in reading the next Image.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to read the next Image.code ${error.code},message is ${error.message}`);
  });
}
```

## on9+

on(type: 'imageArrival', callback: AsyncCallback&lt;void&gt;): void

接收图片时注册回调。使用callback异步回调。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 注册事件的类型，固定为'imageArrival'，接收图片时触发。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数，当注册事件触发成功，err为undefined，否则为错误对象。 |

****示例：****

```
async function On(receiver : image.ImageReceiver) {
  receiver.on('imageArrival', () => {
    // 接收到图片，实现回调函数逻辑。
  });
}
```

## off13+

off(type: 'imageArrival', callback?: AsyncCallback&lt;void&gt;): void

释放buffer时移除注册回调。使用callback异步回调。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 注册事件的类型，固定为'imageArrival'，释放buffer时触发。 |
| callback | AsyncCallback&lt;void&gt; | 否 | 移除的回调函数。 |

****示例：****

```
async function Off(receiver : image.ImageReceiver) {
  let callbackFunc = ()=>{
      // 实现回调函数逻辑。
  };
  receiver.on('imageArrival', callbackFunc);
  receiver.off('imageArrival', callbackFunc);
}
```

## release9+

release(callback: AsyncCallback&lt;void&gt;): void

释放ImageReceiver实例。使用callback异步回调。

由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用该方法，及时释放内存。

释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数，当释放ImageReceiver实例成功，err为undefined，否则为错误对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

async function Release(receiver : image.ImageReceiver) {
  receiver.release((err: BusinessError) => {
    if (err) {
      console.error(`Failed to release the receiver.code ${err.code},message is ${err.message}`);
    } else {
      console.info('Succeeded in releasing the receiver.');
    }
  })
}
```

## release9+

release(): Promise&lt;void&gt;

释放ImageReceiver实例。使用Promise异步回调。

由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用该方法，及时释放内存。

释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

****系统能力：**** SystemCapability.Multimedia.Image.ImageReceiver

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

async function Release(receiver : image.ImageReceiver) {
  receiver.release().then(() => {
    console.info('Succeeded in releasing the receiver.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to release the receiver.code ${error.code},message is ${error.message}`);
  })
}
```
