---
title: "ImageProcessing_ColorSpaceInfo"
sidebar_position: 61
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-imageprocessing-imageprocessing-colorspaceinfo
kit: 媒体
last_updated: "2026-04-22"
slug: api-imageprocessing-imageprocessing-colorspaceinfo
---

# ImageProcessing\_ColorSpaceInfo

```
typedef struct ImageProcessing_ColorSpaceInfo {...} ImageProcessing_ColorSpaceInfo
```

## 概述

色彩空间信息，用于色彩空间转换能力查询。

****参考：****

[OH\_ImageProcessing\_IsColorSpaceConversionSupported](/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_iscolorspaceconversionsupported), [OH\_ImageProcessing\_IsCompositionSupported](/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_iscompositionsupported), [OH\_ImageProcessing\_IsDecompositionSupported](/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_isdecompositionsupported)

****起始版本：**** 13

****相关模块：**** [ImageProcessing](/ref/image-api/image-c/image-module/capi-imageprocessing/capi-imageprocessing)

****所在头文件：**** [image\_processing\_types.h](/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t metadataType | 定义元数据类型，参考[OH\_Pixelmap\_HdrMetadataKey](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatakey)。 |
| int32\_t colorSpace | 定义色彩空间，参考[ColorSpaceName](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h#colorspacename)。 |
| int32\_t pixelFormat | 定义像素格式，参考[PIXEL\_FORMAT](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format)。 |
