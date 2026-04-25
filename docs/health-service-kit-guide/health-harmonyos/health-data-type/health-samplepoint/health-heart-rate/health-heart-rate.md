---
title: "心率"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-heart-rate
kit: app-services
last_updated: "2026-04-22"
---

# 心率

## 动态心率

此数据记录用户在一段时间内的动态心率。

- Harmony SDK类型常量：[samplePointHelper.heartRate.DATA\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#常量-5)

### OAuth权限

联盟卡片申请的权限名称：健康数据 > 心率数据

### 采样明细数据

****明细字段说明****

字段定义：[samplePointHelper.heartRate.Fields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#fields-5)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 | 单位 | 取值范围 |
| --- | --- | --- | --- | --- | --- |
| bpm | 心率 | number | M | 次/分钟 | [0, ∞) |

****数据开放说明****

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.readData](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata) | 小时级 | 手表、手环等 |

### 采样统计数据

****聚合统计策略说明****

- 字段定义：[samplePointHelper.heartRate.AggregateFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#aggregatefields-3)

| ****字段****列表 | 描述 | 聚合策略 | ****类型**** | 单位 |
| --- | --- | --- | --- | --- |
| bpm | 心率 | max | min | last | number | 次/分钟 |

****数据开放说明****

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.aggregateData](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreaggregatedata) | 小时级 | 手表、手环等 |

## 静息心率

此数据记录用户一天中在静止且清醒状态下静息心率值。

Harmony SDK类型常量：[samplePointHelper.restingHeartRate.DATA\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#常量-8)

### OAuth权限

联盟卡片申请的权限名称：健康数据 > 心率数据

### 采样明细数据

****明细字段说明****

字段定义：[samplePointHelper.restingHeartRate.Fields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#fields-8)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 | 单位 | 取值范围 |
| --- | --- | --- | --- | --- | --- |
| restBpm | 静息心率 | number | M | 次/分钟 | [0, ∞) |

****数据开放说明****

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.readData](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata) | 小时级 | 手表、手环等 |

### 采样统计数据

****聚合统计策略说明****

字段定义：[samplePointHelper.restingHeartRate.AggregateFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#aggregatefields-4)

| ****字段****列表 | 描述 | 聚合策略 | ****类型**** | 单位 |
| --- | --- | --- | --- | --- |
| restBpm | 静息心率 | last | number | 次/分钟 |

****数据开放说明****

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.aggregateData](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreaggregatedata) | 小时级 | 手表、手环等 |
