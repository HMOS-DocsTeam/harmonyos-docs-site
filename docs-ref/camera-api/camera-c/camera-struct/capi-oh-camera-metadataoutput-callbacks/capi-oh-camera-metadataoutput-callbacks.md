---
title: "MetadataOutput_Callbacks"
sidebar_position: 30
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-metadataoutput-callbacks
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-metadataoutput-callbacks
---

# MetadataOutput\_Callbacks

```
typedef struct MetadataOutput_Callbacks {...} MetadataOutput_Callbacks
```

## 概述

元数据输出的回调。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [metadata\_output.h](/ref/camera-api/camera-c/camera-headerfile/capi-metadata-output-h/capi-metadata-output-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_MetadataOutput\_OnMetadataObjectAvailable](/ref/camera-api/camera-c/camera-headerfile/capi-metadata-output-h/capi-metadata-output-h#oh_metadataoutput_onmetadataobjectavailable) onMetadataObjectAvailable | 此回调将调用元数据输出结果数据。 |
| [OH\_MetadataOutput\_OnError](/ref/camera-api/camera-c/camera-headerfile/capi-metadata-output-h/capi-metadata-output-h#oh_metadataoutput_onerror) onError | 元数据输出错误事件。 |
