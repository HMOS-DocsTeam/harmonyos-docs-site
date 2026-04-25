---
title: "RawFileDescriptor"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile-rawfiledescriptor
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rawfile-rawfiledescriptor
---

# RawFileDescriptor

```
typedef struct {...} RawFileDescriptor
```

## 概述

提供rawfile文件描述符信息。RawFileDescriptor是[OH\_ResourceManager\_GetRawFileDescriptor](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_getrawfiledescriptor)的输出参数，涵盖了rawfile文件的文件描述符以及在HAP包中的起始位置和长度。

****起始版本：**** 8

****相关模块：**** [rawfile](/ref/localization-api/localization-c/localization-module/capi-rawfile/capi-rawfile)

****所在头文件：**** [raw\_file.h](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int fd | rawfile文件描述符，单位为int。 |
| long start | rawfile在HAP包中的起始位置，单位为long。 |
| long length | rawfile在HAP包中的长度，单位为long。 |
