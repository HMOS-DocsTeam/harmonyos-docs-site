---
title: "潜水闭气训练"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-breath-holding-train
kit: app-services
last_updated: "2026-04-22"
---

# 潜水闭气训练

潜水闭气训练相关锻炼记录类型如下：

| ****锻炼记录子类型常量**** | ****描述**** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.breathHoldingTrain.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-6) | 潜水闭气训练 | 部分专业手表、手环 |

## 关联的统计数据说明

- 字段定义：[exerciseSequenceHelper.breathHoldingTrain.SummaryFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#summaryfields-5)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| breathHoldingTrainFeature | 潜水闭气训练特征数据 | [BreathHoldingTrainFeature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#breathholdingtrainfeature) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#exerciseheartratesummary) | O |

## 关联的明细数据说明

- 字段定义：[exerciseSequenceHelper.breathHoldingTrain.DetailFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#detailfields-5)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#exerciseheartrate)[] | O |
