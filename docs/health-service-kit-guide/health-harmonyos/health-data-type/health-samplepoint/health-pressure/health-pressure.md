---
title: "压力"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-pressure
kit: app-services
last_updated: "2026-04-22"
---

# 压力

此数据记录用户在某一刻的压力数据，每一条数据都代表该时刻的压力状态。

- Harmony SDK类型常量：[samplePointHelper.stress.DATA\_TYPE](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#常量-10)

## OAuth权限

联盟卡片申请的权限名称：健康数据 > 压力数据

## 采样明细数据

### 明细字段说明

- 字段定义：[samplePointHelper.stress.Fields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#fields-10)

| ****字段****列表 | 描述 | ****类型**** | 可选/必选 | 单位 | 取值范围 |
| --- | --- | --- | --- | --- | --- |
| stressScore | 压力得分 | number | M | - | [1, 99] |

### 数据开放说明

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.readData](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata) | 小时级 | 手表、手环等 |

## 采样统计数据

****聚合统计策略说明****

- 字段定义：[samplePointHelper.stress.AggregateFields](/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#aggregatefields-6)

| ****字段****列表 | 描述 | 聚合策略 | ****类型**** | 单位 |
| --- | --- | --- | --- | --- |
| stressScore | 压力得分 | avg | max | min | last | count | number | - |

### 数据开放说明

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.aggregateData](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreaggregatedata) | 小时级 | 手表、手环等 |
