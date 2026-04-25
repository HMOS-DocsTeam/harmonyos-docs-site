---
title: "OH_AudioDataArray"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudiosuite-oh-audiodataarray
kit: 媒体
last_updated: "2026-04-22"
slug: capi-ohaudiosuite-oh-audiodataarray
---

# OH\_AudioDataArray

```
typedef struct {...} OH_AudioDataArray
```

## 概述

定义多路输出渲染接口的输入数据描述。当管线中存在多输出效果节点时，通过多输出渲染接口获取处理过后的音频数据。

****起始版本：**** 22

****相关模块：**** [OHAudioSuite](/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite)

****所在头文件：**** [native\_audio\_suite\_base.h](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| void \*\*audioDataArray | 需要输出的音频数据地址。 |
| int32\_t arraySize | 音频数组大小。 |
| int32\_t requestFrameSize | audioDataArray数组中地址的内存大小（单位为字节），应确保每个地址均具有requestFrameSize字节个大小。 |
