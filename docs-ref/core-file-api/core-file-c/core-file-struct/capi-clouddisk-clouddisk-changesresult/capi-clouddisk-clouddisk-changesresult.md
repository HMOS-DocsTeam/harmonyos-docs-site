---
title: "CloudDisk_ChangesResult"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-changesresult
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-clouddisk-clouddisk-changesresult
---

# CloudDisk\_ChangesResult

```
typedef struct CloudDisk_ChangesResult {...} CloudDisk_ChangesResult
```

## 概述

查询同步根路径中文件变更的结果。该结构体包含同步根路径中文件的变更数据，包括下一个更新序列号、结尾标志以及变更数据项数组。

****起始版本：**** 21

****相关模块：**** [CloudDisk](/ref/core-file-api/core-file-c/core-file-module/capi-clouddisk/capi-clouddisk)

****所在头文件：**** [oh\_cloud\_disk\_manager.h](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint64\_t nextUsn{0} | 下一次可查询的有效起始变更序列号。 |
| bool isEof{false} | 本次变更是否为同步根路径中记录的最后的修改记录。true：表示是最后的修改记录；false：表示不是最后的修改记录。 |
| size\_t bufferLength{0} | 历史变更记录数组中的元素数量。 |
| [CloudDisk\_ChangeData](/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changedata/capi-clouddisk-clouddisk-changedata) changeDatas[] | 历史变更记录数组。 |
