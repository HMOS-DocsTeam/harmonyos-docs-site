---
title: "CloudDisk_PathInfo"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-pathinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-clouddisk-clouddisk-pathinfo
---

# CloudDisk\_PathInfo

```
typedef struct CloudDisk_PathInfo {...} CloudDisk_PathInfo
typedef struct CloudDisk_PathInfo CloudDisk_FieldInfo
typedef struct CloudDisk_PathInfo CloudDisk_SyncFolderPath
```

## 概述

文件路径信息。

****起始版本：**** 21

****相关模块：**** [CloudDisk](/ref/core-file-api/core-file-c/core-file-module/capi-clouddisk/capi-clouddisk)

****所在头文件：**** [oh\_cloud\_disk\_manager.h](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \*value | 文件的路径，以'\0'字符结尾。 |
| size\_t length | 文件路径的长度，不包括结尾的'\0'字符。 |
