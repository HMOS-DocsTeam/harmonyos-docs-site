---
title: "Rdb_ProgressDetails"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-progressdetails
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-progressdetails
---

# Rdb\_ProgressDetails

```
typedef struct Rdb_ProgressDetails {...} Rdb_ProgressDetails
```

## 概述

描述数据库整体执行端云同步任务上传和下载的统计信息。

****起始版本：**** 11

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int version | 用于唯一标识OH\_TableDetails结构的版本。 |
| int schedule | 表示端云同步过程。 |
| int code | 表示端云同步过程的状态。 |
| int32\_t tableLength | 表示端云同步的表的数量。 |
