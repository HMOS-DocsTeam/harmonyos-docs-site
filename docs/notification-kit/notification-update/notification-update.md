---
title: "更新通知"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-update
kit: app-services
last_updated: "2026-04-22"
---

# 更新通知

从API version 18开始，支持应用只更新已发布的通知。主要用于上传下载进度更新、IM会话消息更新等场景。

## 接口说明

通知发布更新接口说明详见下表，通知更新可通过入参[NotificationRequest](/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationrequest/js-apis-inner-notification-notificationrequest#notificationrequest-1)携带updateOnly字段来指定，不指定该字段默认为false。

- 当updateOnly为true时，若相同ID通知存在，则更新通知；若相同ID通知不存在，则更新失败，并且不创建新的通知。
- 当updateOnly为false时，若相同ID通知存在，则更新通知；若相同ID通知不存在，则创建通知。

| ****接口名**** | ****描述**** |
| --- | --- |
| [publish](/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagerpublish)(request: NotificationRequest, callback: AsyncCallback&lt;void&gt;): void | 发布更新通知。 |

## 开发步骤

下面以进度条通知发布更新为例。

1. 导入模块。

   ```
   import { notificationManager } from '@kit.NotificationKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = '[PublishOperation]';
   const DOMAIN_NUMBER: number = 0xFF00;
   ```
2. 发布进度条通知。

   ```
   let notificationRequest: notificationManager.NotificationRequest = {
     id: 5,
     content: {
       notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
       normal: {
         title: 'test_title',
         text: 'test_text',
         additionalText: 'test_additionalText'
       }
     },
     // 构造进度条模板，name字段当前需要固定配置为downloadTemplate
     template: {
       name: 'downloadTemplate',
       data: { title: 'File Title', fileName: 'music.mp4', progressValue: 50 }
     }
   };

   // 发布通知
   notificationManager.publish(notificationRequest, (err: BusinessError) => {
     if (err) {
       hilog.error(DOMAIN_NUMBER, TAG,
         `Failed to publish notification. Code is ${err.code}, message is ${err.message}`);
       return;
     }
     hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in publishing notification.');
   });
   ```
3. 通过[NotificationRequest](/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationrequest/js-apis-inner-notification-notificationrequest#notificationrequest-1)接口携带updateOnly字段更新进度条通知。

   ```
   let notificationRequest: notificationManager.NotificationRequest = {
     id: 5,
     updateOnly: true,
     content: {
       notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
       normal: {
         title: 'test_title',
         text: 'test_text',
         additionalText: 'test_additionalText'
       }
     },
     // 构造进度条模板，name字段当前需要固定配置为downloadTemplate
     template: {
       name: 'downloadTemplate',
       data: { title: 'File Title', fileName: 'music.mp4', progressValue: 99 }
     }
   };

   // 更新发布通知
   notificationManager.publish(notificationRequest, (err: BusinessError) => {
     if (err) {
       hilog.error(DOMAIN_NUMBER, TAG,
         `Failed to update notification. Code is ${err.code}, message is ${err.message}`);
       return;
     }
     hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in updating notification.');
   });
   ```
