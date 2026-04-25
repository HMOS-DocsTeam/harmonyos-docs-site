---
title: "samplePointHelper(采样数据类型常量)"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper
kit: 应用服务
last_updated: "2026-04-22"
slug: health-api-samplepointhelper
---

# samplePointHelper(采样数据类型常量)

本模块提供采样数据类型常量及数据模型。

****起始版本：**** 5.0.0(12)

## 导入模块

```
import { healthStore } from '@kit.HealthServiceKit';
```

![](../../../../images/2be46efd/note_3.0-zh-cn.png) 

此模块为healthStore子模块，需通过healthStore.samplePointHelper方式使用。

## bloodOxygenSaturation

血氧数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 血氧数据类型。 |

### Model

type Model = healthModels.BloodOxygenSaturation

血氧采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.BloodOxygenSaturation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#bloodoxygensaturation) | 血氧采样数据模型。 |

### Fields

type Fields = healthFields.BloodOxygenSaturation

血氧采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BloodOxygenSaturation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bloodoxygensaturation) | 血氧采样数据字段列表。 |

### AggregateResult

type AggregateResult = healthModels.BloodOxygenSaturationAggregateResult

血氧采样数据聚合统计结果模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.BloodOxygenSaturationAggregateResult](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#bloodoxygensaturationaggregateresult) | 血氧采样数据聚合统计结果模型 |

### AggregateRequest

type AggregateRequest = healthModels.BloodOxygenSaturationAggregateRequest

血氧采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.BloodOxygenSaturationAggregateRequest](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#bloodoxygensaturationaggregaterequest) | 血氧采样数据聚合统计请求模型 |

### AggregateFields

type AggregateFields = healthFields.BloodOxygenSaturationAggregation

血氧采样数据支持的聚合统计字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BloodOxygenSaturationAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bloodoxygensaturationaggregation) | 血氧采样数据支持的聚合统计字段列表。 |

## bloodPressure

血压数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 血压数据类型。 |

### Model

type Model = healthModels.BloodPressure

血压采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.BloodPressure](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#bloodpressure) | 血压采样数据模型。 |

### Fields

type Fields = healthFields.BloodPressure

血压采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BloodPressure](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bloodpressure) | 血压采样数据字段列表。 |

## bodyTemperature

体温数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 体温数据类型。 |

### Model

type Model = healthModels.BodyTemperature

体温采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.BodyTemperature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#bodytemperature) | 体温采样数据模型。 |

### Fields

type Fields = healthFields.BodyTemperature

体温采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BodyTemperature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bodytemperature) | 体温采样数据字段列表。 |

### AggregateResult

type AggregateResult = healthModels.BodyTemperatureAggregateResult

体温采样数据聚合统计结果模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.BodyTemperatureAggregateResult](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#bodytemperatureaggregateresult) | 体温采样数据聚合统计结果模型。 |

### AggregateRequest

type AggregateRequest = healthModels.BodyTemperatureAggregateRequest

体温采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.BodyTemperatureAggregateRequest](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#bodytemperatureaggregaterequest) | 体温采样数据聚合统计请求模型。 |

### AggregateFields

type AggregateFields = healthFields.BodyTemperatureAggregation

体温采样数据支持的聚合统计字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.BodyTemperatureAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bodytemperatureaggregation) | 体温采样数据支持的聚合统计字段列表。 |

## dailyActivities

日常活动数据类型常量及数据模型。

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 日常活动数据类型。 |

### Model

type Model = healthModels.DailyActivities

日常活动采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.DailyActivities](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#dailyactivities) | 日常活动采样数据模型。 |

### Fields

type Fields = healthFields.DailyActivities

日常活动采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.DailyActivities](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#dailyactivities) | 日常活动采样数据字段列表。 |

### AggregateResult

type AggregateResult = healthModels.DailyActivitiesAggregateResult

日常活动采样数据聚合统计结果模型。

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.DailyActivitiesAggregateResult](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#dailyactivitiesaggregateresult) | 日常活动采样数据聚合结果模型。 |

### AggregateRequest

type AggregateRequest = healthModels.DailyActivitiesAggregateRequest

日常活动采样数据聚合统计请求模型。

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.DailyActivitiesAggregateRequest](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#dailyactivitiesaggregaterequest) | 日常活动采样数据聚合请求模型。 |

### AggregateFields

type AggregateFields = healthFields.DailyActivitiesAggregation

日常活动采样数据支持的聚合统计字段列表。

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.DailyActivitiesAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#dailyactivitiesaggregation) | 日常活动采样数据支持的聚合统计字段列表。 |

## emotion

情绪数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 情绪数据类型。 |

### Model

type Model = healthModels.Emotion

情绪采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Emotion](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#emotion) | 情绪采样数据模型。 |

### Fields

type Fields = healthFields.Emotion

情绪采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.Emotion](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#emotion) | 情绪采样数据字段列表。 |

## heartRate

动态心率数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 动态心率数据类型。 |

### Model

type Model = healthModels.HeartRate

动态心率采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.HeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#heartrate) | 动态心率采样数据模型。 |

### Fields

type Fields = healthFields.HeartRate

动态心率采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.HeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#heartrate) | 动态心率采样数据字段列表。 |

### AggregateResult

type AggregateResult = healthModels.HeartRateAggregateResult

动态心率采样数据聚合统计结果模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.HeartRateAggregateResult](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#heartrateaggregateresult) | 动态心率采样数据聚合统计结果模型。 |

### AggregateRequest

type AggregateRequest = healthModels.HeartRateAggregateRequest

动态心率采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.HeartRateAggregateRequest](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#heartrateaggregaterequest) | 动态心率采样数据聚合统计请求模型。 |

### AggregateFields

type AggregateFields = healthFields.HeartRateAggregation

动态心率采样数据支持的聚合统计字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.HeartRateAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#heartrateaggregation) | 动态心率采样数据支持的聚合统计字段列表。 |

## heartRateVariability

心率变异性数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 心率变异性数据类型。 |

### Model

type Model = healthModels.HeartRateVariability

心率变异性采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.HeartRateVariability](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#heartratevariability) | 心率变异性采样数据模型。 |

### Fields

type Fields = healthFields.HeartRateVariability

心率变异性采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.HeartRateVariability](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#heartratevariability) | 心率变异性采样数据字段列表。 |

## height

身高数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 身高数据类型。 |

### Model

type Model = healthModels.Height

身高采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Height](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#height) | 身高采样数据模型。 |

### Fields

type Fields = healthFields.Height

身高采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.Height](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#height) | 身高采样数据字段列表。 |

## restingHeartRate

静息心率数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 静息心率数据类型。 |

### Model

type Model = healthModels.RestingHeartRate

静息心率采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.RestingHeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#restingheartrate) | 静息心率采样数据模型。 |

### Fields

type Fields = healthFields.RestingHeartRate

静息心率采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RestingHeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#restingheartrate) | 静息心率采样数据字段列表。 |

### AggregateResult

type AggregateResult = healthModels.RestingHeartRateAggregateResult

静息心率采样数据聚合统计结果模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.RestingHeartRateAggregateResult](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#restingheartrateaggregateresult) | 静息心率采样数据聚合统计结果模型。 |

### AggregateRequest

type AggregateRequest = healthModels.RestingHeartRateAggregateRequest

静息心率采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.RestingHeartRateAggregateRequest](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#restingheartrateaggregaterequest) | 静息心率采样数据聚合统计请求模型。 |

### AggregateFields

type AggregateFields = healthFields.RestingHeartRateAggregation

静息心率采样数据支持的聚合统计字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.RestingHeartRateAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#restingheartrateaggregation) | 静息心率采样数据支持的聚合统计字段列表。 |

## skinTemperature

皮肤体温数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 皮肤体温数据类型。 |

### Model

type Model = healthModels.SkinTemperature

皮肤体温采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.SkinTemperature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#skintemperature) | 皮肤体温采样数据模型。 |

### Fields

type Fields = healthFields.SkinTemperature

皮肤体温采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SkinTemperature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skintemperature) | 皮肤体温采样数据字段列表。 |

### AggregateResult

type AggregateResult = healthModels.SkinTemperatureAggregateResult

皮肤体温采样数据聚合统计结果模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.SkinTemperatureAggregateResult](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#skintemperatureaggregateresult) | 皮肤体温采样数据聚合统计结果模型。 |

### AggregateRequest

type AggregateRequest = healthModels.SkinTemperatureAggregateRequest

皮肤体温采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.SkinTemperatureAggregateRequest](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#skintemperatureaggregaterequest) | 皮肤体温采样数据聚合统计请求模型。 |

### AggregateFields

type AggregateFields = healthFields.SkinTemperatureAggregation

皮肤体温采样数据支持的聚合统计字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.SkinTemperatureAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skintemperatureaggregation) | 皮肤体温采样数据支持的聚合统计字段列表。 |

## stress

压力数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 压力数据类型。 |

### Model

type Model = healthModels.Stress

压力采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Stress](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#stress) | 压力采样数据模型。 |

### Fields

type Fields = healthFields.Stress

压力采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.Stress](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#stress) | 压力采样数据字段列表。 |

### AggregateResult

type AggregateResult = healthModels.StressAggregateResult

压力采样数据聚合统计结果模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.StressAggregateResult](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#stressaggregateresult) | 压力采样数据聚合统计结果模型。 |

### AggregateRequest

type AggregateRequest = healthModels.StressAggregateRequest

压力采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.StressAggregateRequest](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#stressaggregaterequest) | 压力采样数据聚合统计请求模型。 |

### AggregateFields

type AggregateFields = healthFields.StressAggregation

压力采样数据支持的聚合统计字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.StressAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#stressaggregation) | 压力采样数据支持的聚合统计字段列表。 |

## weight

体重数据类型常量及数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

### 常量

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA\_TYPE | [healthStore.DataType](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datatype) | 体重数据类型。 |

### Model

type Model = healthModels.Weight

体重采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthModels.Weight](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthmodels/health-api-healthmodels#weight) | 体重采样数据模型。 |

### Fields

type Fields = healthFields.Weight

体重采样数据字段列表。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthFields.Weight](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#weight) | 体重采样数据字段列表。 |
