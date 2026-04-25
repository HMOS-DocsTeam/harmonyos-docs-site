---
title: "Rdb_DistributedConfig"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-distributedconfig
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-distributedconfig
---

# Rdb\_DistributedConfig

```
typedef struct Rdb_DistributedConfig {...} Rdb_DistributedConfig
```

## 概述

记录表的分布式配置信息。

****起始版本：**** 11

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int version | 用于唯一标识Rdb\_DistributedConfig结构的版本。 |
| bool isAutoSync | 表示该表是否支持端云自动同步。为true时，支持系统自动触发端云同步；为false时不支持系统自动触发端云同步，需要调用[OH\_Rdb\_CloudSync](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h#oh_rdb_cloudsync)接口触发端云同步。 |
