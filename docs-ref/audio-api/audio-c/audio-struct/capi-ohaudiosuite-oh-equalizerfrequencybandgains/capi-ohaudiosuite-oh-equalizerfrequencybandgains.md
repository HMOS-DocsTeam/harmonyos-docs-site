---
title: "OH_EqualizerFrequencyBandGains"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudiosuite-oh-equalizerfrequencybandgains
kit: 媒体
last_updated: "2026-04-22"
slug: capi-ohaudiosuite-oh-equalizerfrequencybandgains
---

# OH\_EqualizerFrequencyBandGains

```
typedef struct {...} OH_EqualizerFrequencyBandGains
```

## 概述

定义音频编创均衡器效果节点配置参数。

****起始版本：**** 22

****相关模块：**** [OHAudioSuite](/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite)

****所在头文件：**** [native\_audio\_suite\_base.h](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t gains[EQUALIZER\_BAND\_NUM] | 均衡器频带增益配置，EQUALIZER\_BAND\_NUM为10，输入范围为[-10, 10]，单位为dB（分贝）。  频带：31Hz、62Hz、125Hz、250Hz、500Hz、1kHz、2kHz、4kHz、8kHz、16kHz。  ****起始版本：**** 22 |
