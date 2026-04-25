---
title: "跑步"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-running
kit: app-services
last_updated: "2026-04-22"
---

# 跑步

跑步相关锻炼记录类型如下：

| ****锻炼记录子类型常量**** | ****描述**** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.running.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-22) | 户外跑步 | 手机、手表、手环 |
| [exerciseSequenceHelper.indoorRunning.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-14) | 室内跑步/跑步机 | 手机、手表、手环 |
| [exerciseSequenceHelper.trailRunning.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-29) | 越野跑 | 手机、手表、手环 |

## 关联的统计数据说明

- 字段定义：[exerciseSequenceHelper.running.SummaryFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#summaryfields-21)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| distance | 距离统计 | [DistanceSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#distancesummary) | M |
| calorie | 热量统计 | [CalorieSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#caloriesummary) | M |
| speed | 速度统计 | [SpeedSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#speedsummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#exerciseheartratesummary) | O |
| step | 步数统计 | [StepSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#stepsummary) | O |
| cadence | 步频统计 | [CadenceSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cadencesummary) | O |
| altitude | 海拔统计 | [AltitudeSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#altitudesummary) | O |
| location | 位置统计 | [LocationSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#locationsummary) | O |
| runningForm | 跑姿统计 | [RunningFormSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningformsummary) | O |
| runningFeature | 跑步特征数据 | [RunningFeature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningfeature) | O |

## 关联的明细数据说明

- 字段定义：[exerciseSequenceHelper.running.DetailFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#detailfields-21)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#exerciseheartrate)[] | O |
| speed | 速度详情 | [Speed](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#speed)[] | O |
| cadence | 步频详情 | [Cadence](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cadence)[] | O |
| runningForm | 跑姿详情 | [RunningForm](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#runningform)[] | O |
| location | 位置详情 | [Location](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#location)[] | O |
| altitude | 海拔详情 | [Altitude](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#altitude)[] | O |
