---
title: "aip_retrieval_condition.h"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-retrieval-condition
kit: 应用框架
last_updated: "2026-04-22"
slug: dataaugmentation-aip-retrieval-condition
---

# aip\_retrieval\_condition.h

## 概述

提供与检索条件相关的接口。

****引用文件：**** #include "dataaugmentation/retrieval/aip\_retrieval\_condition.h"

****库：**** libretrieval\_ndk.so

****系统能力：**** SystemCapability.DataAugmentation.Retrieval

****起始版本：**** 6.0.0(20)

****相关模块：**** [Retrieval](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval)

## 汇总

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [OH\_Retrieval\_Condition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_condition) [OH\_Retrieval\_Condition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_condition) | 定义检索条件，可包含多个子检索条件等。 |
| typedef struct [OH\_Retrieval\_SubCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_subcondition) [OH\_Retrieval\_SubCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_subcondition) | 定义子检索条件，可以是向量检索。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [OH\_Retrieval\_Condition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_condition) \* [OH\_Retrieval\_CreateCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createcondition) () | 创建检索条件，作为检索接口的入参。 |
| int [OH\_Retrieval\_DestroyCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_destroycondition) ([OH\_Retrieval\_Condition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_condition) \*condition) | 销毁通过[OH\_Retrieval\_CreateCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createcondition)获得的检索条件。 |
| int [OH\_Retrieval\_DestroySubCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_destroysubcondition) ([OH\_Retrieval\_SubCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_subcondition) \*condition) | 销毁通过[OH\_Retrieval\_SubCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_subcondition)创建的条件。 |
| int [OH\_Retrieval\_AddSubCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_addsubcondition) ([OH\_Retrieval\_Condition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_condition) \*condition, [OH\_Retrieval\_SubCondition](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_subcondition) \*subCondition) | 在检索条件中，增加子检索条件。 |
