---
title: "请求用户授权"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-request-user-auth
kit: app-services
last_updated: "2026-04-22"
---

# 请求用户授权

## 场景介绍

Screen Time Guard Kit支持对用户设备的时间管理和应用限制，因此在功能启用前，必须获得用户的明确授权。应用可以调用请求用户授权接口，系统会弹出授权请求界面，明确告知用户功能的作用和必要性，并在用户允许之后，才可正常访问。如果用户未同意授权，则无法再提供相关管控能力，此时如果继续调用管控相关接口，会抛出用户未授权使用的错误码。

## 用户体验设计

![](../../../images/bf9568da/zh-cn_image_0000002583439209.png)

## 业务流程

![](../../../images/f7c8fe60/zh-cn_image_0000002552959164.png)

流程说明：

1. 应用请求访问Screen Time Guard Kit的权限，需要调用拉起请求用户授权的接口，拉起健康使用设备查询本地数据库中该应用的授权状态。
2. 若状态为已授权，则直接正常返回；若状态为未授权，则拉起授权弹框。
3. 若用户取消授权，则抛出对应错误码，若用户允许授权，则正常返回。

## 接口说明

请求用户授权关键接口如下表所示：

| 接口名 | 描述 |
| --- | --- |
| [requestUserAuth](/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#requestuserauth)(context: [common.UIAbilityContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext)): Promise&lt;void&gt; | 请求用户授权访问Screen Time Guard Kit的相关管控接口。 |
| [getUserAuthStatus](/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#getuserauthstatus)(): Promise&lt;[AuthStatus](/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#authstatus)&gt; | 获取用户授权状态。 |

## 开发步骤

1. 导入相关模块。

   ```
   import { guardService } from '@kit.ScreenTimeGuardKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { common } from '@kit.AbilityKit';
   ```
2. 调用requestUserAuth，请求用户授权。

   ```
   @Entry
   @Component
   struct TestPage {
      build() {
         Column() {
            Button("TestRequestUserAuth")
               .onClick(async () => {
                  try {
                     await guardService.requestUserAuth(this.getUIContext().getHostContext() as common.UIAbilityContext);
                  } catch (err) {
                     const message = (err as BusinessError).message;
                     const code = (err as BusinessError).code;
                     hilog.error(0x0000, `ScreenTimeGuard:requestUserAuth`, `requestUserAuth failed with error code: ${code}, message: ${message}`);
                  }
               })
         }
      }
   }
   ```
3. 获取用户授权状态。

   ```
   @Entry
   @Component
   struct TestPage {
      build() {
         Column() {
            Button("TestGetUserAuthStatus")
               .onClick(async () => {
                  try {
                     const status = await guardService.getUserAuthStatus();
                     hilog.info(0x0000, `ScreenTimeGuard:getUserAuthStatus`, `user auth status: ${status}`);
                  } catch (err) {
                     const message = (err as BusinessError).message;
                     const code = (err as BusinessError).code;
                     hilog.error(0x0000, `ScreenTimeGuard:getUserAuthStatus`, `getUserAuthStatus failed with error code: ${code}, message: ${message}`);
                  }
               })
         }
      }
   }
   ```
