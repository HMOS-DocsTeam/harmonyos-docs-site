---
title: "Rdb_ChangeInfo"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-changeinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-changeinfo
---

# Rdb\_ChangeInfo

```
typedef struct Rdb_ChangeInfo {...} Rdb_ChangeInfo
```

## 概述

记录端云同步过程详情。

****起始版本：**** 11

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int version | 用于唯一标识Rdb\_DistributedConfig结构的版本。 |
| const char\* tableName | 表示发生变化的表的名称。 |
| int ChangeType | 表示发生变化的数据的类型，数据或者资产附件发生变化。 |
| [Rdb\_KeyInfo](/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-rdb-keyinfo/capi-rdb-rdb-keyinfo) inserted | 记录插入数据的位置，如果该表的主键是string类型，该值是主键的值，否则该值表示插入数据的行号。 |
| [Rdb\_KeyInfo](/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-rdb-keyinfo/capi-rdb-rdb-keyinfo) updated | 记录更新数据的位置，如果该表的主键是string类型，该值是主键的值，否则该值表示更新数据的行号。 |
| [Rdb\_KeyInfo](/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-rdb-keyinfo/capi-rdb-rdb-keyinfo) deleted | 记录删除数据的位置，如果该表的主键是string类型，该值是主键的值，否则该值表示删除数据的行号。 |
