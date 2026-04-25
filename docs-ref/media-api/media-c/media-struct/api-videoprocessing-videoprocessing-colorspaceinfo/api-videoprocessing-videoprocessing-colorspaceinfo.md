---
title: "VideoProcessing_ColorSpaceInfo"
sidebar_position: 39
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-videoprocessing-videoprocessing-colorspaceinfo
kit: 媒体
last_updated: "2026-04-22"
slug: api-videoprocessing-videoprocessing-colorspaceinfo
---

# VideoProcessing\_ColorSpaceInfo

```
typedef struct VideoProcessing_ColorSpaceInfo {...} VideoProcessing_ColorSpaceInfo
```

## 概述

视频颜色空间信息数据结构。

****参考：**** [OH\_VideoProcessing\_IsColorSpaceConversionSupported](/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_iscolorspaceconversionsupported)

****起始版本：**** 12

****相关模块：**** [VideoProcessing](/ref/media-api/media-c/media-module/capi-videoprocessing/capi-videoprocessing)

****所在头文件：**** [video\_processing\_types.h](/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t metadataType | 视频元数据类型，参考[OH\_NativeBuffer\_MetadataType](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype)。 |
| int32\_t colorSpace | 视频颜色空间类型，参考[OH\_NativeBuffer\_ColorSpace](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace)。 |
| int32\_t pixelFormat | 视频像素格式，参考[OH\_NativeBuffer\_Format](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format)。 |
