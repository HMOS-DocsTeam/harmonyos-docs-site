---
title: "healthSequenceHelper(健康记录类型常量)"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthsequencehelper
kit: 应用服务
last_updated: "2026-04-22"
slug: health-api-healthsequencehelper
---

# healthSequenceHelper(健康记录类型常量)

本模块提供健康记录数据类型常量及数据模型。

****起始版本：**** 5.0.0(12)

## 导入模块

```
import { healthStore } from '@kit.HealthServiceKit';
```

![](../../../../images/4b365fe4/note_3.0-zh-cn.png) 

此模块为healthStore子模块，需通过healthStore.healthSequenceHelper方式使用。

## sleepRecord

夜间睡眠数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 夜间睡眠数据类型。 |

### Model

type Model = healthModels.SleepRecord

夜间睡眠健康记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.SleepRecord](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#sleeprecord) | 夜间睡眠健康记录数据模型。 |

### Fields

type Fields = healthFields.Sleep

夜间睡眠健康记录数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.Sleep](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleep) | 夜间睡眠健康记录数据字段列表。 |

### DetailFields

type DetailFields = healthFields.SleepDetail

睡眠详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SleepDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleepdetail) | 睡眠详情数据字段列表。 |

## sleepNapRecord

零星小睡数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 零星小睡数据类型。 |

### Model

type Model = healthModels.SleepNapRecord

零星小睡健康记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.SleepNapRecord](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#sleepnaprecord) | 零星小睡健康记录数据模型。 |

### Fields

type Fields = healthFields.SleepNap

零星小睡健康记录数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SleepNap](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleepnap) | 零星小睡健康记录数据字段列表。 |

### DetailFields

type DetailFields = healthFields.SleepDetail

睡眠详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SleepDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleepdetail) | 睡眠详情数据字段列表。 |
