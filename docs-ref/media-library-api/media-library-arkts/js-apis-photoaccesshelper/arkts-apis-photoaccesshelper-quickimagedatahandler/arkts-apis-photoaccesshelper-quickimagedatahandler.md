---
title: "Interface (QuickImageDataHandler)"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-quickimagedatahandler
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-photoaccesshelper-quickimagedatahandler
---

# Interface (QuickImageDataHandler)

媒体资源处理器，应用在onDataPrepared方法中可自定义媒体资源处理逻辑。

![](../../../../images/a87fad36/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 13开始支持。

## 导入模块

```
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## onDataPrepared13+

onDataPrepared(data: T, imageSource: image.ImageSource, map: Map&lt;string, string&gt;): void

当请求的图片资源准备就绪时，系统会回调媒体资源就绪通知方法。如果资源准备出错，回调的data将为undefined。

map支持返回的信息：

| map键名 | 值说明 |
| --- | --- |
| 'quality' | 图片质量。高质量为'high'，低质量为'low'。 |

****系统能力****：SystemCapability.FileManagement.PhotoAccessHelper.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | T | 是 | 已就绪的图片资源数据。泛型，支持[Picture](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-picture/arkts-apis-image-picture)数据类型。 |
| imageSource | image.ImageSource | 是 | 已就绪的图片资源数据。 |
| map13+ | Map&lt;string, string&gt; | 是 | 用于获取图片资源的额外信息，如图片质量。仅支持'quality'。 |

****示例：****

```
import { image } from '@kit.ImageKit';

class MediaHandler implements photoAccessHelper.QuickImageDataHandler<image.Picture> {
  onDataPrepared(data: image.Picture, imageSource: image.ImageSource, map: Map<string, string>) {
    console.info('on image data prepared');
  }
}
```
