---
title: "aip_retrieval_query.h"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-retrieval-query
kit: 应用框架
last_updated: "2026-04-22"
slug: dataaugmentation-aip-retrieval-query
---

# aip\_retrieval\_query.h

## 概述

提供与检索查询相关的接口。

****引用文件：**** #include "dataaugmentation/retrieval/aip\_retrieval\_query.h"

****库：**** libretrieval\_ndk.so

****系统能力：**** SystemCapability.DataAugmentation.Retrieval

****起始版本：**** 6.0.0(20)

****相关模块：**** [Retrieval](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval)

## 汇总

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [OH\_Retrieval\_Query](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_query) [OH\_Retrieval\_Query](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_query) | 定义检索词，当前只支持纯文本检索。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [OH\_Retrieval\_Query](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_query) \* [OH\_Retrieval\_CreateQuery](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createquery) () | 创建检索词，作为检索接口的入参。 |
| int [OH\_Retrieval\_DestroyQuery](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_destroyquery) ([OH\_Retrieval\_Query](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_query) \*query) | 销毁通过[OH\_Retrieval\_CreateQuery](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createquery)获得的检索词。 |
| int [OH\_Retrieval\_SetOriginalQuestion](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_setoriginalquestion) ([OH\_Retrieval\_Query](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_query) \*query, const char \*question) | 设置[OH\_Retrieval\_Query](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_query)中的检索词。 |
