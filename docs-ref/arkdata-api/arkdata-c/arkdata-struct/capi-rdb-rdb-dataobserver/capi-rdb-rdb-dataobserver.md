---
title: "Rdb_DataObserver"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-dataobserver
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-dataobserver
---

# Rdb\_DataObserver

```
typedef struct Rdb_DataObserver {...} Rdb_DataObserver
```

## 概述

表示数据观察者。

****起始版本：**** 11

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| void\* context | 表示数据观察者的上下文。 |
| [Rdb\_SubscribeCallback](/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-rdb-subscribecallback/capi-rdb-rdb-subscribecallback) callback | 数据观察者的回调。 |
