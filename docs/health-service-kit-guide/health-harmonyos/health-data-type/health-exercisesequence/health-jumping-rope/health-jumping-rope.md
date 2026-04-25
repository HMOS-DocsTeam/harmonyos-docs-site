---
title: "跳绳"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-jumping-rope
kit: app-services
last_updated: "2026-04-22"
---

# 跳绳

跳绳相关锻炼记录类型如下：

| ****锻炼记录子类型常量**** | ****描述**** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.jumpingRope.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-16) | 跳绳 | AI跳绳、智能跳绳设备 |

## 关联的统计数据说明

- 字段定义：[exerciseSequenceHelper.jumpingRope.SummaryFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#summaryfields-15)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| jumpingRopeFeature | 跳绳特征数据 | [JumpingRopeFeature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#jumpingropefeature) | M |
| calorie | 热量统计 | [CalorieSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#caloriesummary) | M |
| skipSpeed | 跳跃速度统计 | [SkipSpeedSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skipspeedsummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#exerciseheartratesummary) | O |

## 关联的明细数据说明

- 字段定义：[exerciseSequenceHelper.jumpingRope.DetailFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#detailfields-15)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#exerciseheartrate)[] | O |
| skipSpeed | 跳跃速度详情 | [SkipSpeed](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#skipspeed)[] | O |
