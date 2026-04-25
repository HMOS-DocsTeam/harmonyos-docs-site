---
title: "AREngine_ARAugmentedImageSource"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-araugmentedimagesource
kit: 图形
last_updated: "2026-04-22"
slug: arengine-struct-araugmentedimagesource
---

# AREngine\_ARAugmentedImageSource

## 概述

图像数据。

****起始版本：**** 5.1.0(18)

****相关模块：**** [AR Engine](/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine)

****所在头文件：**** [ar\_engine\_core.h](/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char \*[imageName](#imagename) | 图像名，不允许为空，不能超出255字节，超出255字节的字符将会被丢弃。 |
| const uint8\_t \*[imageData](#imagedata) | 灰度图像元素数组地址。 |
| int32\_t [pixelWidth](#pixelwidth) | 图像像素宽度。 |
| int32\_t [pixelHeight](#pixelheight) | 图像像素高度。 |
| int32\_t [stride](#stride) | 图像步幅。 |
| float [realWidthInMeters](#realwidthinmeters) | 图像中对象的实际物理宽度。无限制，默认值为A4纸张尺寸。 |

## 结构体成员变量说明

### imageName

```
const char* AREngine_ARAugmentedImageSource::imageName
```

****描述****

图像名，不允许为空，不能超出255字节，超出255字节的字符将会被丢弃。

### imageData

```
const uint8_t* AREngine_ARAugmentedImageSource::imageData
```

****描述****

灰度图像元素数组地址。

### pixelWidth

```
int32_t AREngine_ARAugmentedImageSource::pixelWidth
```

****描述****

图像像素宽度。

### pixelHeight

```
int32_t AREngine_ARAugmentedImageSource::pixelHeight
```

****描述****

图像像素高度。

### stride

```
int32_t AREngine_ARAugmentedImageSource::stride
```

****描述****

图像步幅。

### realWidthInMeters

```
float AREngine_ARAugmentedImageSource::realWidthInMeters
```

****描述****

图像中对象的实际物理宽度。无限制，默认值为A4纸张尺寸。
