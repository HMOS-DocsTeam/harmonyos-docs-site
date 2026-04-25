---
title: "OH_RecorderInfo"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-recorderinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avscreencapture-oh-recorderinfo
---

# OH\_RecorderInfo

```
typedef struct OH_RecorderInfo {...} OH_RecorderInfo
```

## 概述

录制文件信息。

****起始版本：**** 10

****相关模块：**** [AVScreenCapture](/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture)

****所在头文件：**** [native\_avscreen\_capture\_base.h](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* url | 录制文件的URL。 |
| uint32\_t urlLen | 录制文件的URL的长度值。 |
| [OH\_ContainerFormatType](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_containerformattype) fileFormat | 录制文件的格式。 |
