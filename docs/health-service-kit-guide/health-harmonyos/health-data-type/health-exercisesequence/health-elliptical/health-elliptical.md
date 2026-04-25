---
title: "椭圆机"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-elliptical
kit: app-services
last_updated: "2026-04-22"
---

# 椭圆机

椭圆机相关锻炼记录类型如下：

| ****锻炼记录子类型常量**** | ****描述**** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.elliptical.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-9) | 椭圆机 | 手环、手表 |

## 椭圆机关联的统计数据说明

字段定义：[exerciseSequenceHelper.elliptical.SummaryFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#summaryfields-8)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| calorie | 热量统计 | [CalorieSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#caloriesummary) | M |
| distance | 距离统计 | [DistanceSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#distancesummary) | O |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#exerciseheartratesummary) | O |
| speed | 速度统计 | [SpeedSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#speedsummary) | O |
| step | 步数统计 | [StepSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#stepsummary) | O |
| cadence | 步频统计 | [CadenceSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cadencesummary) | O |
| resistance | 阻力统计 | [ResistanceSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#resistancesummary) | O |
| pedalingCadence | 踏频统计 | [PedalingCadenceSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#pedalingcadencesummary) | O |
| power | 功率统计 | [PowerSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#powersummary) | O |

## 关联的明细数据说明

字段定义：[exerciseSequenceHelper.elliptical.DetailFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#detailfields-8)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#exerciseheartrate)[] | O |
| speed | 速度详情 | [Speed](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#speed)[] | O |
| pedalingCadence | 踏频详情 | [PedalingCadence](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#pedalingcadence)[] | O |
| power | 功率详情 | [Power](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#power)[] | O |
| cadence | 步频详情 | [Cadence](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cadence)[] | O |
