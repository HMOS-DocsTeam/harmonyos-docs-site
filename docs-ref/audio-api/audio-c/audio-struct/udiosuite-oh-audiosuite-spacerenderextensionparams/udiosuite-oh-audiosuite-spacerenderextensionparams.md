---
title: "OH_AudioSuite_SpaceRenderExtensionParams"
sidebar_position: 28
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/udiosuite-oh-audiosuite-spacerenderextensionparams
kit: 媒体
last_updated: "2026-04-22"
slug: udiosuite-oh-audiosuite-spacerenderextensionparams
---

# OH\_AudioSuite\_SpaceRenderExtensionParams

```
struct OH_AudioSuite_SpaceRenderExtensionParams {...}
```

## 概述

定义空间渲染效果节点扩展模式配置参数。

****起始版本：**** 23

****相关模块：**** [OHAudioSuite](/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite)

****所在头文件：**** [native\_audio\_suite\_base.h](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| float extRadius | 扩展半径。取值范围为[1.0, 5.0]，单位为米。 |
| int32\_t extAngle | 扩展角度。取值范围为(0, 360)，单位为度。 |
