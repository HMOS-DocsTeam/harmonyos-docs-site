---
title: "@ohos.graphics.hdrCapability (HDR能力)"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hdrcapability
kit: 图形
last_updated: "2026-04-22"
slug: js-apis-hdrcapability
---

# @ohos.graphics.hdrCapability (HDR能力)

本模块提供HDR（高动态显示范围）能力涉及到的相关枚举类型。

![](../../../images/b614514c/note_3.0-zh-cn.png) 

本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { hdrCapability } from '@kit.ArkGraphics2D';
```

## HDRFormat

HDR格式枚举。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Graphic.Graphic2D.ColorManager.Core

| 名称 | 值 | 说明 |
| --- | --- | --- |
| NONE | 0 | 不支持HDR类型。 |
| VIDEO\_HLG | 1 | 支持视频的HLG格式。 |
| VIDEO\_HDR10 | 2 | 支持视频的HDR10格式。 |
| VIDEO\_HDR\_VIVID | 3 | 支持视频的HDR\_VIVID格式。 |
| IMAGE\_HDR\_VIVID\_DUAL | 4 | 支持图片的HDR\_VIVID格式，以dual JPEG格式存储。 |
| IMAGE\_HDR\_VIVID\_SINGLE | 5 | 支持图片的HDR\_VIVID格式，以single HEIF格式存储。 |
| IMAGE\_HDR\_ISO\_DUAL | 6 | 支持图片的HDR\_ISO格式，以dual JPEG格式存储。 |
| IMAGE\_HDR\_ISO\_SINGLE | 7 | 支持图片的HDR\_ISO格式，以single HEIF格式存储。 |
