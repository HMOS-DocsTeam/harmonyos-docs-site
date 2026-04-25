---
title: "DrmSubsample"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-multimedia-drm-drmsubsample
kit: 媒体
last_updated: "2026-04-22"
slug: capi-multimedia-drm-drmsubsample
---

# DrmSubsample

```
typedef struct DrmSubsample {...} DrmSubsample
```

## 概述

Subsample结构类型定义。

****起始版本：**** 12

****相关模块：**** [Multimedia\_Drm](/ref/avcodec-api/avcodec-c/avcodec-module/capi-multimedia-drm/capi-multimedia-drm)

****所在头文件：**** [native\_cencinfo.h](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-cencinfo-h/capi-native-cencinfo-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t clearHeaderLen | 头部清流数据的长度。 |
| uint32\_t payLoadLen | 加密数据的长度。 |
