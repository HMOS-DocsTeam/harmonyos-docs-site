---
title: "CloudDisk_FailedList"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-failedlist
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-clouddisk-clouddisk-failedlist
---

# CloudDisk\_FailedList

```
typedef struct CloudDisk_FailedList {...} CloudDisk_FailedList
```

## 概述

同步操作中失败的文件列表信息。该结构包含文件路径信息以及失败的具体错误原因。

****起始版本：**** 21

****相关模块：**** [CloudDisk](/ref/core-file-api/core-file-c/core-file-module/capi-clouddisk/capi-clouddisk)

****所在头文件：**** [oh\_cloud\_disk\_manager.h](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [CloudDisk\_PathInfo](/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo) pathInfo | 失败文件的绝对路径信息。 |
| [CloudDisk\_ErrorReason](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h#clouddisk_errorreason) errorReason | 文件同步失败的原因。 |
