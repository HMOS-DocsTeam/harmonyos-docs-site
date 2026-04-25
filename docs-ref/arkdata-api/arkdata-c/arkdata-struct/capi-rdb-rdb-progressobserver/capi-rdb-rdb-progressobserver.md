---
title: "Rdb_ProgressObserver"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-progressobserver
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-rdb-rdb-progressobserver
---

# Rdb\_ProgressObserver

```
typedef struct Rdb_ProgressObserver {...} Rdb_ProgressObserver
```

## 概述

端云同步进度观察者。

****起始版本：**** 11

****相关模块：**** [RDB](/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb)

****所在头文件：**** [relational\_store.h](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| void\* context | 端云同步进度观察者的上下文。 |
| [Rdb\_ProgressCallback](/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h#rdb_progresscallback) callback | 端云同步进度观察者的回调函数。 |
