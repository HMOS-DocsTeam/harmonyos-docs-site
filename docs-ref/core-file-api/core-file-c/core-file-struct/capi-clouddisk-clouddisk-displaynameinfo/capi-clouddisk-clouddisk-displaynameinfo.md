---
title: "CloudDisk_DisplayNameInfo"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-displaynameinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-clouddisk-clouddisk-displaynameinfo
---

# CloudDisk\_DisplayNameInfo

```
typedef struct CloudDisk_DisplayNameInfo {...} CloudDisk_DisplayNameInfo
```

## 概述

定义同步根路径的显示名称信息。

****起始版本：**** 21

****相关模块：**** [CloudDisk](/ref/core-file-api/core-file-c/core-file-module/capi-clouddisk/capi-clouddisk)

****所在头文件：**** [oh\_cloud\_disk\_manager.h](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t displayNameResId | 应用同步根路径显示名称对应的静态资源ID。 |
| char \*customAlias | 自定义的别名，不能包含字符：\/\*?<>|:"，以及不能以"."、".."和纯空格作为完整名称。 |
| size\_t customAliasLength | 自定义别名的长度，范围：[0, 255]。 |
