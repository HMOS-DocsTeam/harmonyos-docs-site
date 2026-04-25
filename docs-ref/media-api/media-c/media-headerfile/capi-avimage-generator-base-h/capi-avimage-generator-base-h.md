---
title: "avimage_generator_base.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avimage-generator-base-h
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avimage-generator-base-h
---

# avimage\_generator\_base.h

## 概述

定义AVImageGenerator的枚举。

****引用文件：**** &lt;multimedia/player\_framework/avimage\_generator\_base.h&gt;

****库：**** libavimage\_generator.so

****系统能力：**** SystemCapability.Multimedia.Media.AVImageGenerator

****起始版本：**** 18

****相关模块：**** [AVImageGenerator](/ref/media-api/media-c/media-module/capi-avimagegenerator/capi-avimagegenerator)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_AVImageGenerator\_QueryOptions](#oh_avimagegenerator_queryoptions) | OH\_AVImageGenerator\_QueryOptions | 指定时间点与视频帧对应关系的枚举类型。 |

## 枚举类型说明

### OH\_AVImageGenerator\_QueryOptions

```
enum OH_AVImageGenerator_QueryOptions
```

****描述****

指定时间点与视频帧对应关系的枚举类型。

****系统能力：**** SystemCapability.Multimedia.Media.AVImageGenerator

****起始版本：**** 18

| 枚举项 | 描述 |
| --- | --- |
| OH\_AVIMAGE\_GENERATOR\_QUERY\_NEXT\_SYNC = 0 | 此选项用于选取传入时间点或之后的关键帧。 |
| OH\_AVIMAGE\_GENERATOR\_QUERY\_PREVIOUS\_SYNC = 1 | 此选项用于选取传入时间点或之前的关键帧。 |
| OH\_AVIMAGE\_GENERATOR\_QUERY\_CLOSEST\_SYNC = 2 | 此选项用于选取离传入时间点最近的关键帧。 |
| OH\_AVIMAGE\_GENERATOR\_QUERY\_CLOSEST = 3 | 此选项用于选取离传入时间点最近的帧，该帧不一定是关键帧。 |
