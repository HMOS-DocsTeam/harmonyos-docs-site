---
title: "为通知添加行为意图"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-with-wantagent
kit: app-services
last_updated: "2026-04-22"
---

# 为通知添加行为意图

应用向Ability Kit申请[WantAgent](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent)，并将WantAgent封装至通知中。当发布通知时，用户便可以通过点击通知栏中的消息或按钮，拉起目标应用组件或发布公共事件。

携带了actionButtons的通知示意图如下。

![](../../../images/f0258dc3/zh-cn_image_0000002552799412.png)

## 运行机制

![](../../../images/7ac6bea9/zh-cn_image_0000002583439107.png)

## 接口说明

| ****接口名**** | ****描述**** |
| --- | --- |
| [publish](/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagerpublish-1)(request: NotificationRequest): Promise&lt;void&gt; | 发布通知。 |
| [getWantAgent](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent#wantagentgetwantagent)(info: WantAgentInfo, callback: AsyncCallback&lt;WantAgent&gt;): void | 创建WantAgent。 |

## 开发步骤

1. 导入模块。

   ```
   import { notificationManager } from '@kit.NotificationKit';
   import { wantAgent, WantAgent } from '@kit.AbilityKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = '[PublishOperation]';
   const DOMAIN_NUMBER: number = 0xFF00;
   ```
2. 创建WantAgentInfo信息。

   场景一：创建拉起UIAbility的WantAgent的[WantAgentInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-wantagentinfo/js-apis-inner-wantagent-wantagentinfo)信息。

   ```
   let wantAgentObj: WantAgent | null = null; // 用于保存创建成功的wantAgent对象，后续使用其完成触发的动作。

   // 通过WantAgentInfo的operationType设置动作类型
   let wantAgentInfo: wantAgent.WantAgentInfo = {
     wants: [
       {
         deviceId: '',
         bundleName: 'com.sample.eventnotification', // 需要替换为对应的bundleName。
         abilityName: 'EntryAbility', // 需要替换为对应的abilityName。
         action: '',
         entities: [],
         uri: '',
         parameters: {}
       }
     ],
     actionType: wantAgent.OperationType.START_ABILITY,
     requestCode: 0,
     actionFlags: [wantAgent.WantAgentFlags.CONSTANT_FLAG]
   };
   ```

   场景二：创建发布[公共事件](/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview)的WantAgent的[WantAgentInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-wantagentinfo/js-apis-inner-wantagent-wantagentinfo)信息。

   ```
   let wantAgentObj: WantAgent | null = null; // 用于保存创建成功的WantAgent对象，后续使用其完成触发的动作。

   // 通过WantAgentInfo的operationType设置动作类型
   let wantAgentInfo: wantAgent.WantAgentInfo = {
     wants: [
       {
         action: 'event_name', // 设置事件名
         parameters: {},
       }
     ],
     actionType: wantAgent.OperationType.SEND_COMMON_EVENT,
     requestCode: 0,
     actionFlags: [wantAgent.WantAgentFlags.CONSTANT_FLAG],
   };
   ```
3. 调用[getWantAgent()](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent#wantagentgetwantagent)方法进行创建WantAgent。

   ```
   // 创建WantAgent
   wantAgent.getWantAgent(wantAgentInfo, (err: BusinessError, data: WantAgent) => {
     if (err) {
       hilog.error(DOMAIN_NUMBER, TAG,
         `Failed to get want agent. Code is ${err.code}, message is ${err.message}`);
       return;
     }
     hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in getting want agent.');
     wantAgentObj = data;

     // ...
   });
   ```
4. 构造NotificationRequest对象，并发布携带WantAgent的通知。

   ![](../../../images/2f1e906e/note_3.0-zh-cn.png) 

   - 如果封装WantAgent至通知消息中，可以点击通知触发WantAgent。当通知消息存在actionButtons时，点击通知会先显示actionButtons，再次点击通知触发WantAgent。
   - 如果封装WantAgent至通知按钮中，点击通知后，该通知下方会出现通知按钮，可以点击按钮触发WantAgent。

   ```
   // 构造NotificationActionButton对象
   let actionButton: notificationManager.NotificationActionButton = {
     title: 'open_the_app',
     // wantAgentObj使用前需要保证已被赋值（即步骤3执行完成）
     // 通知按钮的WantAgent
     wantAgent: wantAgentObj!
   };

   // 构造NotificationRequest对象
   let notificationRequest: notificationManager.NotificationRequest = {
     content: {
       notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
       normal: {
         title: 'one_button_notify',
         text: 'Click on this notification twice to open the app',
         additionalText: 'Test_AdditionalText',
       },
     },
     id: 6,
     // 通知消息的WantAgent
     wantAgent: wantAgentObj!,
     // 通知按钮
     actionButtons: [actionButton],
   };

   notificationManager.publish(notificationRequest, (err: BusinessError) => {
     if (err) {
       hilog.error(DOMAIN_NUMBER, TAG,
         `Failed to publish notification. Code is ${err.code}, message is ${err.message}`);
       return;
     }
     hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in publishing notification.');
   });
   ```

## 示例代码

- [自定义通知](https://gitcode.com/HarmonyOS_Samples/custom-notification-badge/blob/master/README.md)
