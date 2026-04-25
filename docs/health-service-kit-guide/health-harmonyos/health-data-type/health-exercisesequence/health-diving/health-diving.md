---
title: "潜水"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-diving
kit: app-services
last_updated: "2026-04-22"
---

# 潜水

## 自由潜水

### 自由潜水相关锻炼记录类型如下：

| ****锻炼记录子类型常量**** | ****描述**** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.diving.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-8) | 自由潜水 | 部分专业手表 |

### 自由潜水关联的统计数据说明

- 字段定义：[exerciseSequenceHelper.diving.SummaryFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#summaryfields-7)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| divingFeature | 自由潜水特征数据 | [DivingFeature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#divingfeature) | M |
| location | 位置统计 | [LocationSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#locationsummary) | O |
| divingDepth | 潜水深度统计 | [DivingDepthSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#divingdepthsummary) | O |
| waterTemperature | 水温统计 | [WaterTemperatureSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#watertemperaturesummary) | O |

### 自由潜水关联的明细数据说明

- 字段定义：[exerciseSequenceHelper.diving.DetailFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#detailfields-7)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| divingDepth | 潜水深度详情 | [DivingDepth](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#divingdepth)[] | O |
| waterTemperature | 水温详情 | [WaterTemperature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#watertemperature)[] | O |

## 水肺潜水

### 水肺潜水相关锻炼记录类型如下：

| ****锻炼记录子类型常量**** | ****描述**** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.scubaDiving.EXERCISE\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#常量-23) | 水肺潜水 | 部分专业手表 |

### 水肺潜水关联的统计数据说明

- 字段定义：[exerciseSequenceHelper.scubaDiving.SummaryFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#summaryfields-22)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| scubaDivingFeature | 水肺潜水特征数据 | [ScubaDivingFeature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#scubadivingfeature) | M |
| location | 位置统计 | [LocationSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#locationsummary) | O |
| divingDepth | 潜水深度统计 | [DivingDepthSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#divingdepthsummary) | O |
| waterTemperature | 水温统计 | [WaterTemperatureSummary](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#watertemperaturesummary) | O |

### 水肺潜水关联的明细数据说明

- 字段定义：[exerciseSequenceHelper.scubaDiving.DetailFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#detailfields-22)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 |
| --- | --- | --- | --- |
| divingDepth | 潜水深度详情 | [DivingDepth](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#divingdepth)[] | O |
| waterTemperature | 水温详情 | [WaterTemperature](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#watertemperature)[] | O |
