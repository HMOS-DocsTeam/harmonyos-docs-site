---
title: "OH_AudioSuite_PureVoiceChangeOption"
sidebar_position: 27
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption
kit: 媒体
last_updated: "2026-04-22"
slug: i-ohaudiosuite-oh-audiosuite-purevoicechangeoption
---

# OH\_AudioSuite\_PureVoiceChangeOption

```
typedef struct {...} OH_AudioSuite_PureVoiceChangeOption
```

## 概述

定义音频编创传统变声选项。

****起始版本：**** 23

****相关模块：**** [OHAudioSuite](/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite)

****所在头文件：**** [native\_audio\_suite\_base.h](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_AudioSuite\_PureVoiceChangeGenderOption](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_purevoicechangegenderoption) optionGender | 定义传统变声性别。 |
| [OH\_AudioSuite\_PureVoiceChangeType](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_purevoicechangetype) optionType | 定义传统变声类型。 |
| float pitch | 定义传统变声音调。如果使用系统中的默认音调以获得最佳效果, 设置为[OH\_PURE\_VOICE\_DEFAULT\_PITCH](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#宏定义)。  设置自定义音调的取值范围为[0.3f, 3.0f]。 |
