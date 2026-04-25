---
title: "media_types.h"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-types-h
kit: 媒体
last_updated: "2026-04-22"
slug: capi-media-types-h
---

# media\_types.h

## 概述

声明了常见媒体类型的定义。

****引用文件：**** &lt;multimedia/player\_framework/media\_types.h&gt;

****库：**** libnative\_media\_core.so

****系统能力：**** SystemCapability.Multimedia.Media.Core

****起始版本：**** 18

****相关模块：**** [Core](/ref/avcodec-api/avcodec-c/avcodec-module/capi-core/capi-core)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_Core\_HdrType](#oh_core_hdrtype) | OH\_Core\_HdrType | HDR类型枚举。 |

## 枚举类型说明

### OH\_Core\_HdrType

```
enum OH_Core_HdrType
```

****描述****

HDR类型枚举。

****系统能力：**** SystemCapability.Multimedia.Media.Core

****起始版本：**** 18

| 枚举项 | 描述 |
| --- | --- |
| OH\_CORE\_HDR\_TYPE\_NONE = 0 | 此选项用于标记非HDR类型。 |
| OH\_CORE\_HDR\_TYPE\_VIVID = 1 | 此选项用于标记HDR Vivid类型。 |
