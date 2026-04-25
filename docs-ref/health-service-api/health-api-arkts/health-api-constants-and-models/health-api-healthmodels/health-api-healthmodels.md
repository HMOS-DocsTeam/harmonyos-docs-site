---
title: "healthModels(运动健康数据模型)"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthmodels
kit: 应用服务
last_updated: "2026-04-22"
slug: health-api-healthmodels
---

# healthModels(运动健康数据模型)

本模块提供运动健康数据模型。

****起始版本：**** 5.0.0(12)

## 导入模块

```
import { healthStore } from '@kit.HealthServiceKit';
```

![](../../../../images/0d66f2a3/note_3.0-zh-cn.png) 

此模块为healthStore子模块，需通过healthStore.healthModels方式使用。

## Adventures

type Adventures = healthStore.ExerciseSequence&lt;healthFields.AdventuresSummary, healthFields.AdventuresDetail&gt;

户外探险锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.AdventuresSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#adventuressummary), [healthFields.AdventuresDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#adventuresdetail)> | 户外探险锻炼记录数据模型。 |

## Basketball

type Basketball = healthStore.ExerciseSequence&lt;healthFields.BasketballSummary, healthFields.BasketballDetail&gt;

篮球锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.BasketballSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#basketballsummary), [healthFields.BasketballDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#basketballdetail)> | 篮球锻炼记录数据模型。 |

## Biathlon

type Biathlon = healthStore.ExerciseSequence&lt;healthFields.BiathlonSummary, healthFields.BiathlonDetail&gt;

冬季两项锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.BiathlonSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#biathlonsummary), [healthFields.BiathlonDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#biathlondetail)> | 冬季两项锻炼记录数据模型。 |

## BloodOxygenSaturation

type BloodOxygenSaturation = healthStore.SamplePoint&lt;healthFields.BloodOxygenSaturation&gt;

血氧采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.BloodOxygenSaturation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bloodoxygensaturation)> | 血氧采样数据模型。 |

## BloodOxygenSaturationAggregateRequest

type BloodOxygenSaturationAggregateRequest = healthStore.AggregateRequest&lt;healthFields.BloodOxygenSaturationAggregation&gt;

血氧采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregaterequest)<[healthFields.BloodOxygenSaturationAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bloodoxygensaturationaggregation)> | 血氧采样数据聚合统计请求模型。 |

## BloodOxygenSaturationAggregateResult

type BloodOxygenSaturationAggregateResult = healthStore.AggregateResult&lt;healthFields.BloodOxygenSaturationAggregation&gt;

血氧聚合结果数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateResult](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregateresult)<[healthFields.BloodOxygenSaturationAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bloodoxygensaturationaggregation)> | 血氧聚合结果数据模型。 |

## BloodPressure

type BloodPressure = healthStore.SamplePoint&lt;healthFields.BloodPressure&gt;

血压采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.BloodPressure](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bloodpressure)> | 血压采样数据模型。 |

## Bmx

type Bmx = healthStore.ExerciseSequence&lt;healthFields.CyclingSummary, healthFields.CyclingDetail&gt;

BMX自行车锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.CyclingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingsummary), [healthFields.CyclingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingdetail)> | BMX自行车锻炼记录数据模型。 |

## BodyTemperature

type BodyTemperature = healthStore.SamplePoint&lt;healthFields.BodyTemperature&gt;

体温采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.BodyTemperature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bodytemperature)> | 体温采样数据模型。 |

## BodyTemperatureAggregateRequest

type BodyTemperatureAggregateRequest = healthStore.AggregateRequest&lt;healthFields.BodyTemperatureAggregation&gt;

体温采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregaterequest)<[healthFields.BodyTemperatureAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bodytemperatureaggregation)> | 体温采样数据聚合统计请求模型。 |

## BodyTemperatureAggregateResult

type BodyTemperatureAggregateResult = healthStore.AggregateResult&lt;healthFields.BodyTemperatureAggregation&gt;

体温聚合结果数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateResult](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregateresult)<[healthFields.BodyTemperatureAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#bodytemperatureaggregation)> | 体温聚合结果数据模型。 |

## BreathHoldingTest

type BreathHoldingTest = healthStore.ExerciseSequence&lt;healthFields.BreathHoldingTestSummary, healthFields.BreathHoldingTestDetail&gt;

闭气测试锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.BreathHoldingTestSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#breathholdingtestsummary), [healthFields.BreathHoldingTestDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#breathholdingtestdetail)> | 闭气测试锻炼记录数据模型。 |

## BreathHoldingTrain

type BreathHoldingTrain = healthStore.ExerciseSequence&lt;healthFields.BreathHoldingTrainSummary, healthFields.BreathHoldingTrainDetail&gt;

闭气训练锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.BreathHoldingTrainSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#breathholdingtrainsummary), [healthFields.BreathHoldingTrainDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#breathholdingtraindetail)> | 闭气训练锻炼记录数据模型。 |

## Cycling

type Cycling = healthStore.ExerciseSequence&lt;healthFields.CyclingSummary, healthFields.CyclingDetail&gt;

户外骑行锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.CyclingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingsummary), [healthFields.CyclingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingdetail)> | 户外骑行锻炼记录数据模型。 |

## DailyActivities

type DailyActivities = healthStore.SamplePoint&lt;healthFields.DailyActivities&gt;

日常活动采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.DailyActivities](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#dailyactivities)> | 日常活动采样数据模型。 |

## DailyActivitiesAggregateRequest

type DailyActivitiesAggregateRequest = healthStore.AggregateRequest&lt;healthFields.DailyActivitiesAggregation&gt;

日常活动采样数据聚合统计请求模型。

****元服务API****：从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregaterequest)<[healthFields.DailyActivitiesAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#dailyactivitiesaggregation)> | 日常活动采样数据聚合统计请求模型。 |

## DailyActivitiesAggregateResult

type DailyActivitiesAggregateResult = healthStore.AggregateResult&lt;healthFields.DailyActivitiesAggregation&gt;

日常活动聚合结果数据模型。

****元服务API：**** 从版本5.0.0(12)开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateResult](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregateresult)<[healthFields.DailyActivitiesAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#dailyactivitiesaggregation)> | 日常活动聚合结果数据模型。 |

## Diving

type Diving = healthStore.ExerciseSequence&lt;healthFields.DivingSummary, healthFields.DivingDetail&gt;

自由潜水锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.DivingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#divingsummary), [healthFields.DivingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#divingdetail)> | 自由潜水锻炼记录数据模型。 |

## Elliptical

type Elliptical = healthStore.ExerciseSequence&lt;healthFields.EllipticalSummary, healthFields.EllipticalDetail&gt;

椭圆机锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.EllipticalSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#ellipticalsummary), [healthFields.EllipticalDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#ellipticaldetail)> | 椭圆机锻炼记录数据模型。 |

## Emotion

type Emotion = healthStore.SamplePoint&lt;healthFields.Emotion&gt;

情绪采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.Emotion](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#emotion)> | 情绪采样数据模型。 |

## GolfCourseModel

type GolfCourseModel = healthStore.ExerciseSequence&lt;healthFields.GolfCourseModelSummary, healthFields.GolfCourseModelDetail&gt;

高尔夫场地模式锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.GolfCourseModelSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#golfcoursemodelsummary), [healthFields.GolfCourseModelDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#golfcoursemodeldetail)> | 高尔夫场地模式锻炼记录数据模型。 |

## GolfPractice

type GolfPractice = healthStore.ExerciseSequence&lt;healthFields.GolfPracticeSummary, healthFields.GolfPracticeDetail&gt;

高尔夫练习场模式锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.GolfPracticeSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#golfpracticesummary), [healthFields.GolfPracticeDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#golfpracticedetail)> | 高尔夫练习场模式锻炼记录数据模型。 |

## HeartRate

type HeartRate = healthStore.SamplePoint&lt;healthFields.HeartRate&gt;

动态心率采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.HeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#heartrate)> | 动态心率采样数据模型。 |

## HeartRateAggregateRequest

type HeartRateAggregateRequest = healthStore.AggregateRequest&lt;healthFields.HeartRateAggregation&gt;

动态心率采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregaterequest)<[healthFields.HeartRateAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#heartrateaggregation)> | 动态心率采样数据聚合统计请求模型。 |

## HeartRateAggregateResult

type HeartRateAggregateResult = healthStore.AggregateResult&lt;healthFields.HeartRateAggregation&gt;

动态心率聚合结果数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateResult](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregateresult)<[healthFields.HeartRateAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#heartrateaggregation)> | 动态心率聚合结果数据模型。 |

## HeartRateVariability

type HeartRateVariability = healthStore.SamplePoint&lt;healthFields.HeartRateVariability&gt;

心率变异性采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.1.0(18)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.HeartRateVariability](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#heartratevariability)> | 心率变异性采样数据模型。 |

## Height

type Height = healthStore.SamplePoint&lt;healthFields.Height&gt;

身高采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.Height](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#height)> | 身高采样数据模型。 |

## Hiking

type Hiking = healthStore.ExerciseSequence&lt;healthFields.WalkingSummary, healthFields.WalkingDetail&gt;

徒步锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.WalkingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingsummary), [healthFields.WalkingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingdetail)> | 徒步锻炼记录数据模型。 |

## IndoorCycling

type IndoorCycling = healthStore.ExerciseSequence&lt;healthFields.CyclingSummary, healthFields.CyclingDetail&gt;

室内单车锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.CyclingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingsummary), [healthFields.CyclingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingdetail)> | 室内单车锻炼记录数据模型。 |

## IndoorRunning

type IndoorRunning = healthStore.ExerciseSequence&lt;healthFields.RunningSummary, healthFields.RunningDetail&gt;

室内跑步锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.RunningSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningsummary), [healthFields.RunningDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningdetail)> | 室内跑步锻炼记录数据模型。 |

## IndoorWalking

type IndoorWalking = healthStore.ExerciseSequence&lt;healthFields.WalkingSummary, healthFields.WalkingDetail&gt;

室内步行锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.WalkingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingsummary), [healthFields.WalkingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingdetail)> | 室内步行锻炼记录数据模型。 |

## JumpingRope

type JumpingRope = healthStore.ExerciseSequence&lt;healthFields.JumpingRopeSummary, healthFields.JumpingRopeDetail&gt;

跳绳锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.JumpingRopeSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#jumpingropesummary), [healthFields.JumpingRopeDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#jumpingropedetail)> | 跳绳锻炼记录数据模型。 |

## MountainHike

type MountainHike = healthStore.ExerciseSequence&lt;healthFields.MountainHikeSummary, healthFields.MountainHikeDetail&gt;

登山锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.MountainHikeSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#mountainhikesummary), [healthFields.MountainHikeDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#mountainhikedetail)> | 登山锻炼记录数据模型。 |

## OpenWaterSwim

type OpenWaterSwim = healthStore.ExerciseSequence&lt;healthFields.OpenWaterSwimSummary, healthFields.OpenWaterSwimDetail&gt;

开放水域游泳锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.OpenWaterSwimSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#openwaterswimsummary), [healthFields.OpenWaterSwimDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#openwaterswimdetail)> | 开放水域游泳锻炼记录数据模型。 |

## PoolSwim

type PoolSwim = healthStore.ExerciseSequence&lt;healthFields.PoolSwimSummary, healthFields.PoolSwimDetail&gt;

泳池游泳锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.PoolSwimSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#poolswimsummary), [healthFields.PoolSwimDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#poolswimdetail)> | 泳池游泳锻炼记录数据模型。 |

## RestingHeartRate

type RestingHeartRate = healthStore.SamplePoint&lt;healthFields.RestingHeartRate&gt;

静息心率采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.RestingHeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#restingheartrate)> | 静息心率采样数据模型。 |

## RestingHeartRateAggregateRequest

type RestingHeartRateAggregateRequest = healthStore.AggregateRequest&lt;healthFields.RestingHeartRateAggregation&gt;

静息心率采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregaterequest)<[healthFields.RestingHeartRateAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#restingheartrateaggregation)> | 静息心率采样数据聚合统计请求模型。 |

## RestingHeartRateAggregateResult

type RestingHeartRateAggregateResult = healthStore.AggregateResult&lt;healthFields.RestingHeartRateAggregation&gt;

静息心率聚合结果数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateResult](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregateresult)<[healthFields.RestingHeartRateAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#restingheartrateaggregation)> | 静息心率聚合结果数据模型。 |

## Rower

type Rower = healthStore.ExerciseSequence&lt;healthFields.RowerSummary, healthFields.RowerDetail&gt;

划船机锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.RowerSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#rowersummary), [healthFields.RowerDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#rowerdetail)> | 划船机锻炼记录数据模型。 |

## Rowing

type Rowing = healthStore.ExerciseSequence&lt;healthFields.RowingSummary, healthFields.RowingDetail&gt;

赛艇锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.RowingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#rowingsummary), [healthFields.RowingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#rowingdetail)> | 赛艇锻炼记录数据模型。 |

## Running

type Running = healthStore.ExerciseSequence&lt;healthFields.RunningSummary, healthFields.RunningDetail&gt;

户外跑步锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.RunningSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningsummary), [healthFields.RunningDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningdetail)> | 户外跑步锻炼记录数据模型。 |

## ScubaDiving

type ScubaDiving = healthStore.ExerciseSequence&lt;healthFields.ScubaDivingSummary, healthFields.ScubaDivingDetail&gt;

水肺潜水锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.ScubaDivingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#scubadivingsummary), [healthFields.ScubaDivingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#scubadivingdetail)> | 水肺潜水锻炼记录数据模型。 |

## Skiing

type Skiing = healthStore.ExerciseSequence&lt;healthFields.SkiingSummary, healthFields.SkiingDetail&gt;

滑雪锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.SkiingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skiingsummary), [healthFields.SkiingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skiingdetail)> | 滑雪锻炼记录数据模型。 |

## SkinTemperature

type SkinTemperature = healthStore.SamplePoint&lt;healthFields.SkinTemperature&gt;

皮肤体温采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.SkinTemperature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skintemperature)> | 皮肤体温采样数据模型。 |

## SkinTemperatureAggregateRequest

type SkinTemperatureAggregateRequest = healthStore.AggregateRequest&lt;healthFields.SkinTemperatureAggregation&gt;

皮肤体温采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregaterequest)<[healthFields.SkinTemperatureAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skintemperatureaggregation)> | 皮肤体温采样数据聚合统计请求模型。 |

## SkinTemperatureAggregateResult

type SkinTemperatureAggregateResult = healthStore.AggregateResult&lt;healthFields.SkinTemperatureAggregation&gt;

皮肤体温聚合结果数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateResult](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregateresult)<[healthFields.SkinTemperatureAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skintemperatureaggregation)> | 皮肤体温聚合结果数据模型。 |

## Sled

type Sled = healthStore.ExerciseSequence&lt;healthFields.SledSummary, healthFields.SledDetail&gt;

滑雪橇锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.SledSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sledsummary), [healthFields.SledDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleddetail)> | 滑雪橇锻炼记录数据模型。 |

## SleepNapRecord

type SleepNapRecord = healthStore.HealthSequence&lt;healthFields.SleepNap, healthFields.SleepDetail&gt;

零星小睡健康记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.HealthSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthsequence)<[healthFields.SleepNap](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleepnap), [healthFields.SleepDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleepdetail)> | 零星小睡健康记录数据模型。 |

## SleepRecord

type SleepRecord = healthStore.HealthSequence&lt;healthFields.Sleep, healthFields.SleepDetail&gt;

夜间睡眠健康记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.HealthSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthsequence)<[healthFields.Sleep](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleep), [healthFields.SleepDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleepdetail)> | 夜间睡眠健康记录数据模型。 |

## Snowboarding

type Snowboarding = healthStore.ExerciseSequence&lt;healthFields.SnowboardingSummary, healthFields.SnowboardingDetail&gt;

单板滑雪锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.SnowboardingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#snowboardingsummary), [healthFields.SnowboardingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#snowboardingdetail)> | 单板滑雪锻炼记录数据模型。 |

## Spinning

type Spinning = healthStore.ExerciseSequence&lt;healthFields.CyclingSummary, healthFields.CyclingDetail&gt;

动感单车锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.CyclingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingsummary), [healthFields.CyclingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cyclingdetail)> | 动感单车锻炼记录数据模型。 |

## Sports

type Sports = healthStore.ExerciseSequence&lt;healthFields.SportsSummary, healthFields.SportsDetail&gt;

通用锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.SportsSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sportssummary), [healthFields.SportsDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sportsdetail)> | 通用锻炼记录数据模型。 |

## Stress

type Stress = healthStore.SamplePoint&lt;healthFields.Stress&gt;

压力采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.Stress](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#stress)> | 压力采样数据模型。 |

## StressAggregateRequest

type StressAggregateRequest = healthStore.AggregateRequest&lt;healthFields.StressAggregation&gt;

压力采样数据聚合统计请求模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregaterequest)<[healthFields.StressAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#stressaggregation)> | 压力采样数据聚合统计请求模型。 |

## StressAggregateResult

type StressAggregateResult = healthStore.AggregateResult&lt;healthFields.StressAggregation&gt;

压力聚合结果数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.AggregateResult](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregateresult)<[healthFields.StressAggregation](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#stressaggregation)> | 压力聚合结果数据模型。 |

## TrailRunning

type TrailRunning = healthStore.ExerciseSequence&lt;healthFields.RunningSummary, healthFields.RunningDetail&gt;

越野跑锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.RunningSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningsummary), [healthFields.RunningDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningdetail)> | 越野跑锻炼记录数据模型。 |

## Walking

type Walking = healthStore.ExerciseSequence&lt;healthFields.WalkingSummary, healthFields.WalkingDetail&gt;

户外步行锻炼记录数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.ExerciseSequence](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence)<[healthFields.WalkingSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingsummary), [healthFields.WalkingDetail](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#walkingdetail)> | 户外步行锻炼数据模型记录。 |

## Weight

type Weight = healthStore.SamplePoint&lt;healthFields.Weight&gt;

体重采样数据模型。

****系统能力：**** SystemCapability.Health.HealthStore

****起始版本：**** 5.0.0(12)

| 类型 | ****说明**** |
| --- | --- |
| [healthStore.SamplePoint](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint)<[healthFields.Weight](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#weight)> | 体重采样数据模型。 |
