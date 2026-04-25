---
title: "OH_AudioDeviceDescriptorArray"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiodevicedescriptorarray
kit: 媒体
last_updated: "2026-04-22"
slug: capi-ohaudio-oh-audiodevicedescriptorarray
---

# OH\_AudioDeviceDescriptorArray

```
typedef struct OH_AudioDeviceDescriptorArray {...} OH_AudioDeviceDescriptorArray
```

## 概述

声明音频设备描述符数组。

****起始版本：**** 12

****相关模块：**** [OHAudio](/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio)

****所在头文件：**** [native\_audio\_device\_base.h](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t size | 音频设备描述符数组大小。 |
| [OH\_AudioDeviceDescriptor](/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor)\*\* descriptors | 音频设备描述符数组。 |
