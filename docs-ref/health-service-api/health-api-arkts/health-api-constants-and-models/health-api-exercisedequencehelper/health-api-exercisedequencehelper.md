---
title: "exerciseSequenceHelper(锻炼记录类型常量)"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper
kit: 应用服务
last_updated: "2026-04-22"
slug: health-api-exercisedequencehelper
---

# exerciseSequenceHelper(锻炼记录类型常量)

本模块提供锻炼记录数据类型常量及数据模型。

****起始版本：**** 5.0.0(12)

## 导入模块

```
import { healthStore } from '@kit.HealthServiceKit';
```

![](../../../../images/ceb875ee/note_3.0-zh-cn.png) 

此模块为healthStore子模块，需通过healthStore.exerciseSequenceHelper方式使用。

## 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 锻炼记录数据类型。 |

## adventures

户外探险数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 户外探险子数据类型。 |

### Model

type Model = healthModels.Adventures

户外探险锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Adventures](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#adventures) | 户外探险锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.AdventuresSummary

户外探险统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.AdventuresSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#adventuressummary) | 户外探险统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.AdventuresDetail

户外探险详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.AdventuresDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#adventuresdetail) | 户外探险详情数据字段列表。 |

## basketball

篮球数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 篮球子数据类型。 |

### Model

type Model = healthModels.Basketball

篮球锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Basketball](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#basketball) | 篮球锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.BasketballSummary

篮球统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BasketballSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#basketballsummary) | 篮球统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.BasketballDetail

篮球详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BasketballDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#basketballdetail) | 篮球详情数据字段列表。 |

## biathlon

冬季两项数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 冬季两项子数据类型。 |

### Model

type Model = healthModels.Biathlon

冬季两项锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Biathlon](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#biathlon) | 冬季两项锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.BiathlonSummary

冬季两项统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BiathlonSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#biathlonsummary) | 冬季两项统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.BiathlonDetail

冬季两项详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BiathlonDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#biathlondetail) | 冬季两项详情数据字段列表。 |

## bmx

BMX自行车数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | BMX自行车子数据类型。 |

### Model

type Model = healthModels.Bmx

BMX自行车锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Bmx](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#bmx) | BMX自行车锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.CyclingSummary

BMX自行车统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.CyclingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingsummary) | BMX自行车统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.CyclingDetail

BMX自行车详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.CyclingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingdetail) | BMX自行车详情数据字段列表。 |

## breathHoldingTest

闭气测试数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 闭气测试子数据类型。 |

### Model

type Model = healthModels.BreathHoldingTest

闭气测试锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.BreathHoldingTest](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#breathholdingtest) | 闭气测试锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.BreathHoldingTestSummary

闭气测试统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BreathHoldingTestSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#breathholdingtestsummary) | 闭气测试统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.BreathHoldingTestDetail

闭气测试详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BreathHoldingTestDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#breathholdingtestdetail) | 闭气测试详情数据字段列表。 |

## breathHoldingTrain

闭气训练数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 闭气训练子数据类型。 |

### Model

type Model = healthModels.BreathHoldingTrain

闭气训练锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.BreathHoldingTrain](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#breathholdingtrain) | 闭气训练锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.BreathHoldingTrainSummary

闭气训练统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BreathHoldingTrainSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#breathholdingtrainsummary) | 闭气训练统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.BreathHoldingTrainDetail

闭气训练详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BreathHoldingTrainDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#breathholdingtraindetail) | 闭气训练详情数据字段列表。 |

## cycling

户外骑行数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 户外骑行子数据类型。 |

### Model

type Model = healthModels.Cycling

户外骑行锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Cycling](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#cycling) | 户外骑行锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.CyclingSummary

户外骑行统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.CyclingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingsummary) | 户外骑行统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.CyclingDetail

户外骑行详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.CyclingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingdetail) | 户外骑行详情数据字段列表。 |

## diving

自由潜水数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 自由潜水子数据类型。 |

### Model

type Model = healthModels.Diving

自由潜水锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Diving](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#diving) | 自由潜水锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.DivingSummary

自由潜水统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.DivingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#divingsummary) | 自由潜水统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.DivingDetail

自由潜水详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.DivingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#divingdetail) | 自由潜水详情数据字段列表。 |

## elliptical

椭圆机数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 椭圆机子数据类型。 |

### Model

type Model = healthModels.Elliptical

椭圆机锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Elliptical](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#elliptical) | 椭圆机锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.EllipticalSummary

椭圆机统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.EllipticalSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#ellipticalsummary) | 椭圆机统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.EllipticalDetail

椭圆机详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.EllipticalDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#ellipticaldetail) | 椭圆机详情数据字段列表。 |

## golfCourseModel

高尔夫场地模式数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 高尔夫场地模式子数据类型。 |

### Model

type Model = healthModels.GolfCourseModel

高尔夫场地模式锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.GolfCourseModel](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#golfcoursemodel) | 高尔夫场地模式锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.GolfCourseModelSummary

高尔夫场地模式统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.GolfCourseModelSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#golfcoursemodelsummary) | 高尔夫场地模式统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.GolfCourseModelDetail

高尔夫场地模式详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.GolfCourseModelDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#golfcoursemodeldetail) | 高尔夫场地模式详情数据字段列表。 |

## golfPractice

高尔夫练习场模式数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 高尔夫练习场模式子数据类型。 |

### Model

type Model = healthModels.GolfPractice

高尔夫练习场模式锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.GolfPractice](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#golfpractice) | 高尔夫练习场模式锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.GolfPracticeSummary

高尔夫练习场模式统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.GolfPracticeSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#golfpracticesummary) | 高尔夫练习场模式统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.GolfPracticeDetail

高尔夫练习场模式详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.GolfPracticeDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#golfpracticedetail) | 高尔夫练习场模式详情数据字段列表。 |

## hiking

徒步数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 徒步子数据类型。 |

### Model

type Model = healthModels.Hiking

徒步锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Hiking](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#hiking) | 徒步锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.WalkingSummary

徒步统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.WalkingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingsummary) | 徒步统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.WalkingDetail

徒步详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.WalkingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingdetail) | 徒步详情数据字段列表。 |

## indoorCycling

室内骑行数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 室内骑行子数据类型。 |

### Model

type Model = healthModels.IndoorCycling

室内骑行锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.IndoorCycling](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#indoorcycling) | 室内骑行锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.CyclingSummary

室内骑行统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.CyclingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingsummary) | 室内骑行统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.CyclingDetail

室内骑行详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.CyclingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingdetail) | 室内骑行详情数据字段列表。 |

## indoorRunning

室内跑步数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 室内跑步子数据类型。 |

### Model

type Model = healthModels.IndoorRunning

室内跑步锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.IndoorRunning](#indoorrunning) | 室内跑步锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.RunningSummary

室内跑步统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RunningSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningsummary) | 室内跑步统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.RunningDetail

室内跑步详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RunningDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningdetail) | 室内跑步详情数据字段列表。 |

## indoorWalking

室内步行数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 室内步行子数据类型。 |

### Model

type Model = healthModels.IndoorWalking

室内步行锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.IndoorWalking](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#indoorwalking) | 室内步行锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.WalkingSummary

室内步行统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.WalkingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingsummary) | 室内步行统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.WalkingDetail

室内步行详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.WalkingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingdetail) | 室内步行详情数据字段列表。 |

## jumpingRope

跳绳数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 跳绳子数据类型。 |

### Model

type Model = healthModels.JumpingRope

跳绳锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.JumpingRope](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#jumpingrope) | 跳绳锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.JumpingRopeSummary

跳绳统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.JumpingRopeSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#jumpingropesummary) | 跳绳统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.JumpingRopeDetail

跳绳详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.JumpingRopeDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#jumpingropedetail) | 跳绳详情数据字段列表。 |

## mountainHike

登山数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 登山子数据类型。 |

### Model

type Model = healthModels.MountainHike

登山锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.MountainHike](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#mountainhike) | 登山锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.MountainHikeSummary

登山统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.MountainHikeSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#mountainhikesummary) | 登山统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.MountainHikeDetail

登山详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.MountainHikeDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#mountainhikedetail) | 登山详情数据字段列表。 |

## openWaterSwim

开放水域游泳数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 开放水域游泳子数据类型。 |

### Model

type Model = healthModels.OpenWaterSwim

开放水域游泳锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.OpenWaterSwim](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#openwaterswim) | 开放水域游泳锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.OpenWaterSwimSummary

开放水域游泳统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.OpenWaterSwimSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#openwaterswimsummary) | 开放水域游泳统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.OpenWaterSwimDetail

开放水域游泳详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.OpenWaterSwimDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#openwaterswimdetail) | 开放水域游泳详情数据字段列表。 |

## poolSwim

泳池游泳数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 泳池游泳子数据类型。 |

### Model

type Model = healthModels.PoolSwim

泳池游泳锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.PoolSwim](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#poolswim) | 泳池游泳锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.PoolSwimSummary

泳池游泳统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.PoolSwimSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#poolswimsummary) | 泳池游泳统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.PoolSwimDetail

泳池游泳详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.PoolSwimDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#poolswimdetail) | 泳池游泳详情数据字段列表。 |

## rower

划船机数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 划船机子数据类型。 |

### Model

type Model = healthModels.Rower

划船机锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Rower](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#rower) | 划船机锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.RowerSummary

划船机统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RowerSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#rowersummary) | 划船机统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.RowerDetail

划船机详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RowerDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#rowerdetail) | 划船机详情数据字段列表。 |

## rowing

赛艇数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 赛艇子数据类型。 |

### Model

type Model = healthModels.Rowing

赛艇锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Rowing](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#rowing) | 赛艇锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.RowingSummary

赛艇统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RowingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#rowingsummary) | 赛艇统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.RowingDetail

赛艇详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RowingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#rowingdetail) | 赛艇详情数据字段列表。 |

## running

户外跑步数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 户外跑步子数据类型。 |

### Model

type Model = healthModels.Running

户外跑步锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Running](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#running) | 户外跑步锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.RunningSummary

户外跑步统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RunningSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningsummary) | 户外跑步统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.RunningDetail

户外跑步详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RunningDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningdetail) | 户外跑步详情数据字段列表。 |

## scubaDiving

水肺潜水数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 水肺潜水子数据类型。 |

### Model

type Model = healthModels.ScubaDiving

水肺潜水锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.ScubaDiving](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#scubadiving) | 水肺潜水锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.ScubaDivingSummary

水肺潜水统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.ScubaDivingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#scubadivingsummary) | 水肺潜水统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.ScubaDivingDetail

水肺潜水详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.ScubaDivingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#scubadivingdetail) | 水肺潜水详情数据字段列表。 |

## skiing

滑雪数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 滑雪子数据类型。 |

### Model

type Model = healthModels.Skiing

滑雪锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Skiing](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#skiing) | 滑雪锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.SkiingSummary

滑雪统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SkiingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skiingsummary) | 滑雪统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.SkiingDetail

滑雪详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SkiingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skiingdetail) | 滑雪详情数据字段列表。 |

## sled

滑雪橇数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 滑雪橇子数据类型。 |

### Model

type Model = healthModels.Sled

滑雪橇锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Sled](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#sled) | 滑雪橇锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.SledSummary

滑雪橇统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SledSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sledsummary) | 滑雪橇统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.SledDetail

滑雪橇详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SledDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleddetail) | 滑雪橇详情数据字段列表。 |

## snowboarding

单板滑雪数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 单板滑雪子数据类型。 |

### Model

type Model = healthModels.Snowboarding

单板滑雪锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Snowboarding](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#snowboarding) | 单板滑雪锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.SnowboardingSummary

单板滑雪统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SnowboardingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#snowboardingsummary) | 单板滑雪统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.SnowboardingDetail

单板滑雪详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SnowboardingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#snowboardingdetail) | 单板滑雪详情数据字段列表。 |

## spinning

动感单车数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 动感单车子数据类型。 |

### Model

type Model = healthModels.Spinning

动感单车锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Spinning](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#spinning) | 动感单车锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.CyclingSummary

动感单车统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.CyclingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingsummary) | 动感单车统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.CyclingDetail

动感单车详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.CyclingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingdetail) | 动感单车详情数据字段列表。 |

## sports

其他运动数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| AEROBICS | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 健美操 |
| AIR\_WALKER | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 漫步机 |
| ARCHERY | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 射箭 |
| BADMINTON | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 羽毛球 |
| BALLET | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 芭蕾舞 |
| BASEBALL | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 棒球 |
| BEACH\_SOCCER | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 沙滩足球 |
| BEACH\_VOLLEYBALL | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 沙滩排球 |
| BELLY\_DANCE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 肚皮舞 |
| BODY\_COMBAT | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 搏击操 |
| BOWLING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 保龄球 |
| BOXING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 拳击 |
| BUNGEE\_JUMPING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 蹦极 |
| CANOEING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 皮划艇 |
| CORE\_TRAINING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 核心训练 |
| CRICKET | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 板球 |
| CROSS\_COUNTRY\_SKIING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 越野滑雪 |
| CROSS\_FIT | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | Cross fit |
| CURLING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 冰壶 |
| DANCE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 舞蹈 |
| DARTS | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 飞镖 |
| DODGE\_BALL | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 躲避球 |
| DRAGON\_BOAT | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 龙舟 |
| DRIFTING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 漂流 |
| ESPORTS | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 电子竞技 |
| FENCING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 击剑 |
| FISHING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 钓鱼 |
| FREE\_SPARRING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 自由搏击 |
| FREE\_TRAINING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 自由训练 |
| FRISBEE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 飞盘 |
| FUNCTIONAL\_TRAINING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 功能性训练 |
| GATEBALL | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 门球 |
| HANDBALL | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 手球 |
| HIIT | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | HIIT |
| HOCKEY | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 曲棍球 |
| HORSE\_RIDING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 骑马 |
| HULA\_HOOP | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 呼啦圈 |
| HUNTING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 对战游戏 |
| ICE\_HOCKEY | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 冰球 |
| JAZZ\_DANCE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 爵士舞 |
| KARATE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 空手道 |
| KENDO | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 剑道 |
| KITE\_FLYING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 放风筝 |
| LATIN\_DANCE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 拉丁舞 |
| MARTIAL\_ARTS | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 武术 |
| MOTORBOAT | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 摩托艇 |
| OBSTACLE\_RACE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 障碍赛 |
| ORIENTEERING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 定向越野 |
| PADEL | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 笼式网球 |
| PARACHUTE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 跳伞 |
| PARALLEL\_BARS | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 双杠 |
| PARKOUR | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 跑酷 |
| PHYSICAL\_TRAINING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 体能训练 |
| PILATES | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 普拉提 |
| PLAYGROUND\_RACE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 操场赛跑 |
| PLAZA\_DANCING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 广场舞 |
| POOL | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 台球 |
| RACING\_CAR | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 赛车 |
| ROCK\_CLIMBING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 攀岩 |
| ROLLER\_SKATING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 轮滑 |
| RUGBY | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 橄榄球 |
| SAILBOAT | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 帆船 |
| SENSE\_SPORT | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 体感运动 |
| SEPAKTAKRAW | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 藤球 |
| SHUTTLECOCK | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 毽球 |
| SINGLE\_BAR | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 单杠 |
| SKATEBOARD | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 滑板 |
| SKATING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 滑冰 |
| SNOWMOBILE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 雪地摩托 |
| SOCCER | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 足球 |
| SOFTBALL | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 垒球 |
| SQUASH | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 壁球 |
| STAIR\_CLIMBING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 爬楼 |
| STEPPER | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 踏步机 |
| STREET\_DANCE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 街舞 |
| STRENGTH\_TRAINING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 力量训练 |
| SUP | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 桨板冲浪 |
| SURFING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 冲浪 |
| SWINGING | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 秋千 |
| TABLE\_TENNIS | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 乒乓球 |
| TAEKWONDO | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 跆拳道 |
| TAI\_CHI | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 太极拳 |
| TENNIS | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 网球 |
| TRIATHLON | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 铁人三项 |
| TUG\_OF\_WAR | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 拔河 |
| VOLLEYBALL | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 排球 |
| YOGA | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 瑜伽 |

### Model

type Model = healthModels.Sports

通用锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Sports](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#sports) | 通用锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.SportsSummary

通用统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SportsSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sportssummary) | 通用统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.SportsDetail

通用详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SportsDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sportsdetail) | 通用详情数据字段列表。 |

## trailRunning

越野跑数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 越野跑子数据类型。 |

### Model

type Model = healthModels.TrailRunning

越野跑锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.TrailRunning](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#trailrunning) | 越野跑锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.RunningSummary

越野跑统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RunningSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningsummary) | 越野跑统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.RunningDetail

越野跑详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RunningDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningdetail) | 越野跑详情数据字段列表。 |

## walking

户外步行数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE\_TYPE | [healthStore.SubDataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#subdatatype) | 户外步行子数据类型。 |

### Model

type Model = healthModels.Walking

户外步行锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Walking](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#walking) | 户外步行锻炼记录数据模型。 |

### SummaryFields

type SummaryFields = healthFields.WalkingSummary

户外步行统计数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.WalkingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingsummary) | 户外步行统计数据字段列表。 |

### DetailFields

type DetailFields = healthFields.WalkingDetail

户外步行详情数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.WalkingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingdetail) | 户外步行详情数据字段列表。 |
