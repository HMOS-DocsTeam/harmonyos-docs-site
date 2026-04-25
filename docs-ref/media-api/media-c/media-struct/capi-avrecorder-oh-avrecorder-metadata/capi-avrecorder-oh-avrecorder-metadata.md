---
title: "OH_AVRecorder_Metadata"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-metadata
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avrecorder-oh-avrecorder-metadata
---

# OH\_AVRecorder\_Metadata

```
typedef struct OH_AVRecorder_Metadata {...} OH_AVRecorder_Metadata
```

## 概述

元数据信息数据结构。

****起始版本：**** 18

****相关模块：**** [AVRecorder](/ref/media-api/media-c/media-module/capi-avrecorder/capi-avrecorder)

****所在头文件：**** [avrecorder\_base.h](/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* genre | 媒体资源的类型或体裁。 |
| char\* videoOrientation | 视频的旋转方向，单位为度。 |
| [OH\_AVRecorder\_Location](/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-location/capi-avrecorder-oh-avrecorder-location) location | 视频的地理位置信息。 |
| [OH\_AVRecorder\_MetadataTemplate](/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-metadatatemplate/capi-avrecorder-oh-avrecorder-metadatatemplate) customInfo | 从 moov.meta.list 读取的自定义参数键值映射。 |
