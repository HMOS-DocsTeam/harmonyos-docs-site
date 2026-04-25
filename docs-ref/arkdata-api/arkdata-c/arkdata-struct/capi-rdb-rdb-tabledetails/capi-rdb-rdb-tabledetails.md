---
title: "Rdb_TableDetails"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-tabledetails
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-tabledetails
---

# Rdb\_TableDetails

```
typedef struct Rdb_TableDetails {...} Rdb_TableDetails
```

## 概述

描述数据库表执行端云同步任务上传和下载的统计信息。

****起始版本：**** 11

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* table | 数据库表名。 |
| [Rdb\_Statistic](/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-rdb-statistic/capi-rdb-rdb-statistic) upload | 表示数据库表中端云同步上传过程的统计信息。 |
| [Rdb\_Statistic](/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-rdb-statistic/capi-rdb-rdb-statistic) download | 表示数据库表中端云同步下载过程的统计信息。 |
