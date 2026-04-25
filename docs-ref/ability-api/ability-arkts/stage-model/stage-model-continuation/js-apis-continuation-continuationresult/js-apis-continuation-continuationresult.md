---
title: "ContinuationResult"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-continuation-continuationresult
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-continuation-continuationresult
---

# ContinuationResult

流转管理入口返回的设备信息。

![](../../../../../images/843ea1c3/note_3.0-zh-cn.png) 

本模块首批接口从API version 8开始支持，从API version 22开始废弃，建议使用[分布式设备管理](/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributeddevicemanager/js-apis-distributeddevicemanager)替代。

本模块接口仅可在Stage模型下使用。

## ContinuationResult(deprecated)

ContinuationManager的[on](/ref/ability-api/ability-arkts/stage-model/js-apis-continuation-continuationmanager/js-apis-continuation-continuationmanager#continuationmanagerondeviceselecteddeprecated)接口返回此对象表示流转管理入口返回的设备信息。

![](../../../../../images/dcc063fd/note_3.0-zh-cn.png) 

从API version 22开始废弃，建议使用[DeviceBasicInfo](/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributeddevicemanager/js-apis-distributeddevicemanager#devicebasicinfo)代替。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****模型约束****：此接口仅可在Stage模型下使用。

****系统能力****：以下各项对应的系统能力均为SystemCapability.Ability.DistributedAbilityManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id | string | 否 | 否 | 表示设备标识。 |
| type | string | 否 | 否 | 表示设备类型。 |
| name | string | 否 | 否 | 表示设备名称。 |
