---
title: "户外探险"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-adventures
kit: app-services
last_updated: "2026-04-22"
---

# 户外探险

户外探险相关锻炼记录类型如下：

| ****锻炼记录子类型常量**** | ****描述**** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.adventures.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-1) | 户外探险 | 部分专业手表 |

## 关联的统计数据说明

- 字段定义：[exerciseSequenceHelper.adventures.SummaryFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#summaryfields)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| calorie | 热量统计 | [CalorieSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#caloriesummary) | M |
| distance | 距离统计 | [DistanceSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#distancesummary) | M |
| step | 步数统计 | [StepSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#stepsummary) | O |
| cadence | 步频统计 | [CadenceSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#cadencesummary) | O |
| altitude | 海拔统计 | [AltitudeSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#altitudesummary) | O |

## 关联的明细数据说明

- 字段定义：[exerciseSequenceHelper.adventures.DetailFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#detailfields)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| markPoint | 标记点采样详情 | [MarkPoint](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#markpoint)[] | O |
| altitude | 海拔详情 | [Altitude](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#altitude)[] | O |
