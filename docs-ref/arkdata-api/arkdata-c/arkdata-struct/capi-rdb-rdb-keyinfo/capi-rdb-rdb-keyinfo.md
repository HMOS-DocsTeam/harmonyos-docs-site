---
title: "Rdb_KeyInfo"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-keyinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-keyinfo
---

# Rdb\_KeyInfo

```
typedef struct {...} Rdb_KeyInfo
```

## 概述

描述发生变化的行的主键或者行号。

****起始版本：**** 11

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int count | 表示发生变化的主键或者行号的数量。 |
| int type | 表示主键的类型[OH\_ColumnType](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-value-h/capi-oh-data-value-h#oh_columntype)。 |
| [Rdb\_KeyData](/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-rdb-keydata/capi-rdb-rdb-keydata)\* data | 存放变化的具体数据 |
