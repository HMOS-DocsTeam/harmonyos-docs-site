---
title: "OH_AVDataSourceExt"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase-oh-avdatasourceext
kit: 媒体
last_updated: "2026-04-22"
slug: capi-codecbase-oh-avdatasourceext
---

# OH\_AVDataSourceExt

```
typedef struct OH_AVDataSourceExt {...} OH_AVDataSourceExt
```

## 概述

用户自定义数据源，回调支持通过userData传递用户自定义数据。

****起始版本：**** 20

****相关模块：**** [CodecBase](/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase)

****所在头文件：**** [native\_avcodec\_base.h](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int64\_t size | 数据源的总大小。 |
| [OH\_AVDataSourceReadAtExt](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avdatasourcereadatext) readAt | 数据源的数据回调。 |
