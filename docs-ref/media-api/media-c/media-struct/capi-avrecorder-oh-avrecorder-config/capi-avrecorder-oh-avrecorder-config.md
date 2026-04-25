---
title: "OH_AVRecorder_Config"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-config
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avrecorder-oh-avrecorder-config
---

# OH\_AVRecorder\_Config

```
typedef struct OH_AVRecorder_Config {...} OH_AVRecorder_Config
```

## 概述

提供媒体AVRecorder的配置定义。

****起始版本：**** 18

****相关模块：**** [AVRecorder](/ref/media-api/media-c/media-module/capi-avrecorder/capi-avrecorder)

****所在头文件：**** [avrecorder\_base.h](/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_AVRecorder\_AudioSourceType](/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h#oh_avrecorder_audiosourcetype) audioSourceType | 录制音频源类型。 |
| [OH\_AVRecorder\_VideoSourceType](/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h#oh_avrecorder_videosourcetype) videoSourceType | 录制视频源类型。 |
| [OH\_AVRecorder\_Profile](/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-profile/capi-avrecorder-oh-avrecorder-profile) profile | 包含音频和视频编码配置。 |
| char\* url | 定义文件URL，格式为fd://xx。 |
| [OH\_AVRecorder\_FileGenerationMode](/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h#oh_avrecorder_filegenerationmode) fileGenerationMode | 指定录制输出文件的生成模式。 |
| [OH\_AVRecorder\_Metadata](/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-metadata/capi-avrecorder-oh-avrecorder-metadata) metadata | 包含录制媒体的附加元数据。 |
| int32\_t maxDuration | 指定录制的最大时长，单位为秒。 |
