---
title: "aip_retrieval_condition_vector.h"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-retrieval-condition-vector
kit: 应用框架
last_updated: "2026-04-22"
slug: dataaugmentation-aip-retrieval-condition-vector
---

# aip\_retrieval\_condition\_vector.h

## 概述

提供与向量条件相关的接口。

****引用文件：**** #include "dataaugmentation/retrieval/aip\_retrieval\_condition\_vector.h"

****库：**** libretrieval\_ndk.so

****系统能力：**** SystemCapability.DataAugmentation.Retrieval

****起始版本：**** 6.0.0(20)

****相关模块：**** [Retrieval](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval)

## 汇总

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [OH\_Retrieval\_SubCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_subcondition) [OH\_Retrieval\_VectorCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition) | 定义向量检索条件，包含检索的字段、检索参数、过滤条件等。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [OH\_Retrieval\_VectorCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition) \* [OH\_Retrieval\_CreateVectorCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createvectorcondition) () | 创建向量检索条件。 |
| int [OH\_Retrieval\_DestroyVectorCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_destroyvectorcondition) ([OH\_Retrieval\_VectorCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition) \*condition) | 销毁通过[OH\_Retrieval\_CreateVectorCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createvectorcondition)获得的检索条件。 |
| int [OH\_Retrieval\_SetVectorRecallLimit](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_setvectorrecalllimit) ([OH\_Retrieval\_VectorCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition) \*condition, uint32\_t limit) | 在检索条件中，设置向量检索结果数量上限。 |
| int [OH\_Retrieval\_SetSimilarityThreshold](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_setsimilaritythreshold) ([OH\_Retrieval\_VectorCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition) \*condition, double threshold) | 在检索条件中，设置向量检索的相似度阈值。 |
