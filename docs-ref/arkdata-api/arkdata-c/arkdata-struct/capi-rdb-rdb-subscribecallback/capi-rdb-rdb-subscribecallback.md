---
title: "Rdb_SubscribeCallback"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-subscribecallback
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-subscribecallback
---

# Rdb\_SubscribeCallback

```
typedef union Rdb_SubscribeCallback {...} Rdb_SubscribeCallback
```

## 概述

表示回调函数。

****起始版本：**** 11

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rdb\_DetailsObserver](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h#rdb_detailsobserver) detailsObserver | 端云数据更改事件的细节的回调函数。 |
| [Rdb\_BriefObserver](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h#rdb_briefobserver) briefObserver | 端云数据更改事件的回调函数。 |
