---
title: "OH_AVDataSource"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase-oh-avdatasource
kit: 媒体
last_updated: "2026-04-22"
slug: capi-codecbase-oh-avdatasource
---

# OH\_AVDataSource

```
typedef struct OH_AVDataSource {...} OH_AVDataSource
```

## 概述

用户自定义数据源。

****起始版本：**** 12

****相关模块：**** [CodecBase](/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase)

****所在头文件：**** [native\_avcodec\_base.h](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int64\_t size | 数据源的总大小。 |
| [OH\_AVDataSourceReadAt](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avdatasourcereadat) readAt | 数据源的数据回调。 |
