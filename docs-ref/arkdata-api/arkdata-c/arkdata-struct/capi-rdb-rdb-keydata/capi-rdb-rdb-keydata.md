---
title: "Rdb_KeyData"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-keydata
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-keydata
---

# Rdb\_KeyData

```
union Rdb_KeyData { ... }
```

## 概述

存放变化的具体数据。

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint64\_t integer | 存放uint64\_t类型的数据。 |
| double real | 存放double类型的数据。 |
| const char\* text | 存放char类型的数据。 |
