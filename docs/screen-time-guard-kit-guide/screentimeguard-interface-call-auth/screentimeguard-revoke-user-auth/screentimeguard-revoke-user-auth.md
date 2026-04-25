---
title: "取消用户授权"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-revoke-user-auth
kit: app-services
last_updated: "2026-04-22"
---

# 取消用户授权

## 场景介绍

当开发者希望取消应用的Screen Time Guard Kit授权时，可以通过调用取消用户授权的接口进行取消。一旦权限被取消，应用将无法再访问或使用对用户设备的时间管理等功能。如果应用尝试继续调用与屏幕守护时间模块相关的接口，系统会返回用户未授权使用的错误码，以确保功能的安全性和隐私保护。

## 业务流程

![](../../../images/de013ace/zh-cn_image_0000002583479165.png)

流程说明：

1. 应用想要取消访问Screen Time Guard Kit的权限，需要调用拉起取消用户授权的接口，拉起健康使用设备查询本地数据库中该应用的授权状态。
2. 若状态为未授权，则直接正常返回；若状态为已授权，修改为未授权状态后正常返回。

## 接口说明

取消用户授权关键接口如下表所示：

| 接口名 | 描述 |
| --- | --- |
| [revokeUserAuth](/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#revokeuserauth)(): Promise&lt;void&gt; | 取消用户授权访问Screen Time Guard Kit的相关管控接口。 |
| [getUserAuthStatus](/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#getuserauthstatus)(): Promise&lt;[AuthStatus](/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#authstatus)&gt; | 获取用户授权状态。 |

## 开发步骤

1. 导入相关模块。

   ```
   import { guardService } from '@kit.ScreenTimeGuardKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 调用revokeUserAuth，取消用户授权。

   ```
   async function testRevokeUserAuth() {
      try {
         await guardService.revokeUserAuth();
      } catch (err) {
         const message = (err as BusinessError).message;
         const code = (err as BusinessError).code;
         hilog.error(0x0000, `ScreenTimeGuard:revokeUserAuth`, `revokeUserAuth failed with error code: ${code}, message: ${message}`);
      }
   }
   ```
3. 获取用户授权状态。

   ```
   async function testGetUserAuthStatus() {
      try {
         const status = await guardService.getUserAuthStatus();
         hilog.info(0x0000, `ScreenTimeGuard:getUserAuthStatus`, `user auth status: ${status}`);
      } catch (err) {
         const message = (err as BusinessError).message;
         const code = (err as BusinessError).code;
         hilog.error(0x0000, `ScreenTimeGuard:getUserAuthStatus`, `getUserAuthStatus failed with error code: ${code}, message: ${message}`);
      }
   }
   ```
