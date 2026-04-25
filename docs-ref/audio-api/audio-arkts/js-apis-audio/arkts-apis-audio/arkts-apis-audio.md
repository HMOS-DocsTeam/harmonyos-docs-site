---
title: "模块描述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-audio
---

# 模块描述

音频管理提供基础的音频控制能力，包括音量调节、设备管理、数据采集及渲染。

该模块提供以下音频相关的常用功能：

- [AudioManager](/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager)：音频管理器。
- [AudioRenderer](/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer)：音频渲染，用于播放PCM（Pulse Code Modulation）音频数据。
- [AudioCapturer](/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer)：音频采集，用于录制PCM音频数据。

![](../../../../images/efd31758/note_3.0-zh-cn.png) 

本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { audio } from '@kit.AudioKit';
```
