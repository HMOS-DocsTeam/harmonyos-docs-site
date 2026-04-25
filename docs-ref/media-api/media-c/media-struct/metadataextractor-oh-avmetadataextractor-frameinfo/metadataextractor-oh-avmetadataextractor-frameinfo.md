---
title: "OH_AVMetadataExtractor_FrameInfo"
sidebar_position: 51
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/metadataextractor-oh-avmetadataextractor-frameinfo
kit: 媒体
last_updated: "2026-04-22"
slug: metadataextractor-oh-avmetadataextractor-frameinfo
---

# OH\_AVMetadataExtractor\_FrameInfo

```
typedef struct {...} OH_AVMetadataExtractor_FrameInfo
```

## 概述

定义从视频中提取出的帧的信息。

****起始版本：**** 23

****相关模块：**** [AVMetadataExtractor](/ref/media-api/media-c/media-module/capi-avmetadataextractor/capi-avmetadataextractor)

****所在头文件：**** [avmetadata\_extractor\_base.h](/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int64\_t requestTimeUs | 用户传入的请求时间。 |
| int64\_t actualTimeUs | 实际提取到的帧的时间；若提取失败，则为-1。 |
| [OH\_PixelmapNative\*](/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative) image | 从视频中提取出的帧图像；若提取失败，则为空指针。 |
| [OH\_AVMetadataExtractor\_FetchState](/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h#oh_avmetadataextractor_fetchstate) result | 本次帧提取操作的结果状态。 |
