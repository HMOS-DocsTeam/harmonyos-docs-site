---
title: "CloudDisk_SyncFolder"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-syncfolder
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-clouddisk-clouddisk-syncfolder
---

# CloudDisk\_SyncFolder

```
typedef struct CloudDisk_SyncFolder {...} CloudDisk_SyncFolder
```

## 概述

同步根属性信息。

****起始版本：**** 21

****相关模块：**** [CloudDisk](/ref/core-file-api/core-file-c/core-file-module/capi-clouddisk/capi-clouddisk)

****所在头文件：**** [oh\_cloud\_disk\_manager.h](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| CloudDisk\_SyncFolderPath path | 同步根路径。 |
| [CloudDisk\_SyncFolderState](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h#clouddisk_syncfolderstate) state | 同步根路径状态。 |
| [CloudDisk\_DisplayNameInfo](/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-displaynameinfo/capi-clouddisk-clouddisk-displaynameinfo) displayNameInfo | 同步根路径别名信息。 |
