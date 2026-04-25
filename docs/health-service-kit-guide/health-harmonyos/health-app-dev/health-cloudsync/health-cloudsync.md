---
title: "手动数据同步"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-cloudsync
kit: app-services
last_updated: "2026-04-22"
---

# 手动数据同步

## 场景介绍

为了保障生态应用数据的实时性，当运动健康App数据未能及时同步到云端时，生态App应用在获得用户授权的前提下，通过让用户主动触发数据同步的操作，以达到用户数据实时上云的目的，便于能够从Health Service Kit云及时获取到用户最新的运动健康数据。

## OAuth权限

联盟卡片申请的权限名称：数据同步 > 手动数据同步

| 权限 | 权限描述 |
| --- | --- |
| <`https://www.huawei.com/healthkit/huaweihealthdata.cloudsync>` | 允许触发华为运动健康应用同步个人数据到云（基于华为运动健康应用的数据同步管理设置）。 |

![](../../../../images/be8e0c95/note_3.0-zh-cn.png) 

该权限仅企业开发者账号可见。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [syncAll](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoresyncall)(): Promise&lt;void&gt; | 用户主动触发数据同步。 |

## 开发前检查

- 完成[申请运动健康服务](/health-service-kit-guide/health-harmonyos/health-preparations/health-apply)与[配置Client ID](/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id)。
- 接口首次调用前，需先使用[init](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreinit)方法进行初始化。
- 需先通过[用户授权](/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions#用户授权)接口引导用户授权，参见[AuthorizationRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#authorizationrequest)中scopes参数。用户授权数据同步权限后，才可调用手动数据同步接口。
- 错误码请参考[ArkTS API错误码](/ref/health-service-api/errorcode-healthservice/errorcode-healthservice)，常见问题请参考[Health Service Kit常见问题](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-faqs)。

## 开发步骤

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 调用[syncAll](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoresyncall)方法同步数据，并处理返回结果。

   ```
   try {
     await healthStore.syncAll();
     hilog.info(0x0000, 'testTag', 'Succeeded in synchronizing data.');
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to synchronize data. Code: ${err.code}, message: ${err.message}`);
   }
   ```
