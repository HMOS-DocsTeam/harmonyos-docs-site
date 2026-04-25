---
title: "Types"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-t
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-image-t
---

# Types

![](../../../../images/5db2c8c1/note_3.0-zh-cn.png) 

本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## HdrMetadataValue12+

type HdrMetadataValue = HdrMetadataType | HdrStaticMetadata | ArrayBuffer | HdrGainmapMetadata

PixelMap使用的HDR元数据值类型，和[HdrMetadataKey](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#hdrmetadatakey12)关键字相对应。

****系统能力：**** SystemCapability.Multimedia.Image.Core

| 类型 | 说明 |
| --- | --- |
| [HdrMetadataType](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#hdrmetadatatype12) | [HdrMetadataKey](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#hdrmetadatakey12)中HDR\_METADATA\_TYPE关键字对应的元数据值类型。 |
| [HdrStaticMetadata](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-i/arkts-apis-image-i#hdrstaticmetadata12) | [HdrMetadataKey](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#hdrmetadatakey12)中HDR\_STATIC\_METADATA关键字对应的元数据值类型。 |
| ArrayBuffer | [HdrMetadataKey](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#hdrmetadatakey12)中HDR\_DYNAMIC\_METADATA关键字对应的元数据值类型。 |
| [HdrGainmapMetadata](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-i/arkts-apis-image-i#hdrgainmapmetadata12) | [HdrMetadataKey](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#hdrmetadatakey12)中HDR\_GAINMAP\_METADATA关键字对应的元数据值类型。 |
