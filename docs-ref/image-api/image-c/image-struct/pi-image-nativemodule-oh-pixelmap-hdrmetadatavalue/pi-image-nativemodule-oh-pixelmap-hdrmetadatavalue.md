---
title: "OH_Pixelmap_HdrMetadataValue"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-image-nativemodule-oh-pixelmap-hdrmetadatavalue
kit: 媒体
last_updated: "2026-04-22"
slug: pi-image-nativemodule-oh-pixelmap-hdrmetadatavalue
---

# OH\_Pixelmap\_HdrMetadataValue

```
typedef struct OH_Pixelmap_HdrMetadataValue {...} OH_Pixelmap_HdrMetadataValue
```

## 概述

Pixelmap使用的HDR元数据值，和OH\_Pixelmap\_HdrMetadataKey关键字相对应。用于[OH\_PixelmapNative\_SetMetadata](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_setmetadata)及[OH\_PixelmapNative\_GetMetadata](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_getmetadata)，有相应[OH\_Pixelmap\_HdrMetadataKey](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatakey)关键字作为入参时，设置或获取到本结构体中相对应的元数据类型的值。

****起始版本：**** 12

****相关模块：**** [Image\_NativeModule](/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule)

****所在头文件：**** [pixelmap\_native.h](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_Pixelmap\_HdrMetadataType](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatatype) type | HDR\_METADATA\_TYPE关键字对应的具体值。 |
| [OH\_Pixelmap\_HdrStaticMetadata](/ref/image-api/image-c/image-struct/i-image-nativemodule-oh-pixelmap-hdrstaticmetadata/i-image-nativemodule-oh-pixelmap-hdrstaticmetadata) staticMetadata | HDR\_STATIC\_METADATA关键字对应的具体值。 |
| [OH\_Pixelmap\_HdrDynamicMetadata](/ref/image-api/image-c/image-struct/x-image-nativemodule-oh-pixelmap-hdrdynamicmetadata/x-image-nativemodule-oh-pixelmap-hdrdynamicmetadata) dynamicMetadata | HDR\_DYNAMIC\_METADATA关键字对应的具体值。 |
| [OH\_Pixelmap\_HdrGainmapMetadata](/ref/image-api/image-c/image-struct/x-image-nativemodule-oh-pixelmap-hdrgainmapmetadata/x-image-nativemodule-oh-pixelmap-hdrgainmapmetadata) gainmapMetadata | HDR\_GAINMAP\_METADATA关键字对应的具体值。 |
