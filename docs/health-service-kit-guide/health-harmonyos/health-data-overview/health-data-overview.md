---
title: "数据开放总览"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-data-overview
kit: app-services
last_updated: "2026-04-22"
---

# 数据开放总览

当前提供如下Health Service Kit数据，开发者可申请对应数据权限进行应用开发。开放等级中，![](../../../images/abd5ec65/zh-cn_image_0000002552799258.png)表示该数据权限为高阶数据，暂不对个人开发者开放。如需使用，请使用企业账号重新注册并申请权限；![](../../../images/a02a7861/zh-cn_image_0000002583438953.png)表示该数据权限为基础数据，个人及企业开发者均可申请查询/使用。

![](../../../images/20afc7ca/note_3.0-zh-cn.png) 

- 数据及时性体验依赖用户使用方式，若穿戴设备未连接至手机蓝牙、华为运动健康App未设置后台保活等情况下，将无法保证数据及时性体验。开发者需考虑数据及时性体验各类极端情况，综合判断合适的数据使用场景，确保给用户提供的产品/服务的稳定性，保证用户体验。
- 相关数据类型对应权限参考[权限说明](/health-service-kit-guide/health-harmonyos/health-data-type/health-permission-description)。

****表1**** ****采样数据****

| 数据子类 | 数据项 | 开放等级 | 数据及时性 | 支持读 | 支持写 |
| --- | --- | --- | --- | --- | --- |
| [日常活动](/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-daily-activities) | 步数、热量、距离等日常活动数据 |  | 小时级 | Y | Y |
| [心率](/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-heart-rate) | 动态心率、静息心率、心率变异性 |  | 小时级 | Y | Y |
| [血氧](/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-blood-oxygen) | 瞬时血氧饱和度 |  | 小时级 | Y | Y |
| [压力](/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-pressure) | 压力得分 |  | 小时级 | Y | Y |
| [体温](/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-body-temperature) | 体温、皮肤体温 |  | 分钟级 | Y | Y |
| [血压](/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-blood-pressure) | 收缩压、舒张压、脉搏等 |  | 分钟级 | Y | Y |
| [体重](/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-weight) | 体重、体脂、BMI等 |  | 分钟级 | Y | Y |
| [身高](/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-height) | 身高 |  | 分钟级 | Y | Y |
| [情绪](/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-emotion) | 情绪数据 |  | 小时级 | Y | Y |

****表2**** ****健康记录和锻炼记录****

| 数据子类 | 数据项 | 开放等级 | 数据及时性 | 支持读 | 支持写 |
| --- | --- | --- | --- | --- | --- |
| [睡眠](/health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-sleeprecord) | 睡眠分期采样数据、睡眠记录 |  | 分钟级 | Y | Y |
| [锻炼记录数据](/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-exercisesequence-summary) | 跑步、骑行、健走、跳绳、跑步机等运动和健身类型 |  | 分钟级 | Y | Y |
