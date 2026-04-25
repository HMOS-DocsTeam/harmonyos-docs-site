---
title: "RawFileDescriptor64"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawfiledescriptor64
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rawfile-rawfiledescriptor64
---

# RawFileDescriptor64

```
typedef struct {...} RawFileDescriptor64
```

## 概述

提供较大rawfile文件描述符信息。RawFileDescriptor64是[OH\_ResourceManager\_GetRawFileDescriptor64](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_getrawfiledescriptor64)的输出参数,涵盖了rawfile文件的文件描述符以及在HAP包中的起始位置和长度。

****起始版本：**** 11

****相关模块：**** [rawfile](/ref/localization-api/localization-c/localization-module/capi-rawfile/capi-rawfile)

****所在头文件：**** [raw\_file.h](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int fd | rawfile文件描述符，单位为int。 |
| int64\_t start | rawfile在HAP包中的起始位置，单位为int64\_t。 |
| int64\_t length | rawfile在HAP包中的长度，单位为int64\_t。 |
