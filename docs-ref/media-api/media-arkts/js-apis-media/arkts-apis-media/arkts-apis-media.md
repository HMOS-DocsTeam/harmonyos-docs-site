---
title: "模块描述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media
kit: 媒体
last_updated: "2026-04-22"
slug: arkts-apis-media
---

# 模块描述

媒体子系统为开发者提供一套简单且易于理解的接口，使得开发者能够方便接入系统并使用系统的媒体资源。

![](../../../../images/09960158/note_3.0-zh-cn.png) 

本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

媒体子系统包含了音视频相关媒体业务，提供以下常用功能：

- 音视频播放（[AVPlayer](/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer)9+）
- 音视频录制（[AVRecorder](/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder)9+）
- 视频转码（[AVTranscoder](/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avtranscoder/arkts-apis-media-avtranscoder)12+）
- 获取音视频元数据（[AVMetadataExtractor](/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avmetadataextractor/arkts-apis-media-avmetadataextractor)11+）
- 获取视频缩略图（[AVImageGenerator](/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avimagegenerator/arkts-apis-media-avimagegenerator)12+）
- 屏幕录制（[AVScreenCaptureRecorder](/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avscreencapturerecorder/arkts-apis-media-avscreencapturerecorder)12+）

## 导入模块

```
import { media } from '@kit.MediaKit';
```
