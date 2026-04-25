---
title: "健走"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-walking
kit: app-services
last_updated: "2026-04-22"
---

# 健走

健走相关锻炼记录类型如下：

| ****锻炼记录子类型常量**** | ****描述**** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.walking.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-30) | 户外步行 | 手机、手表、手环 |
| [exerciseSequenceHelper.indoorWalking.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-15) | 室内步行 | 漫步机 |
| [exerciseSequenceHelper.hiking.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-12) | 徒步/远足 | 手机、手表、手环 |

## 关联的统计数据说明

- 字段定义：[exerciseSequenceHelper.walking.SummaryFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#summaryfields-29)

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

## 关联的详情数据说明

- 字段定义：[exerciseSequenceHelper.walking.DetailFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#detailfields-29)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#exerciseheartrate)[] | O |
| speed | 速度详情 | [Speed](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#speed)[] | O |
| cadence | 步频详情 | [Cadence](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cadence)[] | O |
| location | 位置详情 | [Location](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#location)[] | O |
| altitude | 海拔详情 | [Altitude](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#altitude)[] | O |
