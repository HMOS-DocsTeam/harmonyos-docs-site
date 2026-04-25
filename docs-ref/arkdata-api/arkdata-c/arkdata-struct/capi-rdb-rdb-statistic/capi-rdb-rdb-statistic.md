---
title: "Rdb_Statistic"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-statistic
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-statistic
---

# Rdb\_Statistic

```
typedef struct Rdb_Statistic {...} Rdb_Statistic
```

## 概述

描述数据库表的端云同步过程的统计信息。

****起始版本：**** 11

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int total | 表示数据库表中需要端云同步的总行数。 |
| int successful | 表示数据库表中端云同步成功的行数。 |
| int failed | 表示数据库表中端云同步失败的行数。 |
| int remained | 表示数据库表中端云同步剩余未执行的行数。 |
