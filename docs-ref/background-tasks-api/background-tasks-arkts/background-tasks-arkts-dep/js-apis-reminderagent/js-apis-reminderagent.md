---
title: "@ohos.reminderAgent (后台代理提醒)"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-reminderagent
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-reminderagent
---

# @ohos.reminderAgent (后台代理提醒)

本模块提供后台代理提醒的能力。

开发应用时，开发者可以调用相关接口创建定时提醒，包括倒计时、日历、闹钟这三类提醒类型。使用后台代理提醒能力后，应用被冻结或退出后，计时和弹出提醒的功能将被后台系统服务代理。

![](../../../../images/b77a5579/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[@ohos.reminderAgentManager (后台代理提醒)](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager)替代。

本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import reminderAgent from'@ohos.reminderAgent';
```

## reminderAgent.publishReminder(deprecated)

publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback&lt;number&gt;): void

发布一个后台代理提醒，使用回调的方式实现异步调用，该方法需要申请通知弹窗权限[Notification.requestEnableNotification](/ref/notification-api/notification-arkts/notification-arkts-dep/js-apis-notification/js-apis-notification#notificationrequestenablenotification8)后才能调用。

![](../../../../images/c4dfff48/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.publishReminder](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagerpublishreminder)替代。

****需要权限****：ohos.permission.PUBLISH\_AGENT\_REMINDER

****系统能力****：SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reminderReq | [ReminderRequest](#reminderrequestdeprecated) | 是 | 需要发布的提醒实例。 |
| callback | AsyncCallback&lt;number&gt; | 是 | 异步回调，返回当前发布的提醒的id。 |

****示例****：

```
import { BusinessError } from '@ohos.base';

let timer:reminderAgent.ReminderRequestTimer = {
  reminderType: reminderAgent.ReminderType.REMINDER_TYPE_TIMER,
  triggerTimeInSeconds: 10
}

reminderAgent.publishReminder(timer, (err: BusinessError, reminderId: number) => {
  console.info("callback, reminderId = " + reminderId);
});
```

## reminderAgent.publishReminder(deprecated)

publishReminder(reminderReq: ReminderRequest): Promise&lt;number&gt;

发布一个后台代理提醒，使用Promise方式实现异步调用，该方法需要申请通知弹窗权限[Notification.requestEnableNotification](/ref/notification-api/notification-arkts/notification-arkts-dep/js-apis-notification/js-apis-notification#notificationrequestenablenotification8)后才能调用。

![](../../../../images/13a6c5f1/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.publishReminder](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagerpublishreminder-1)替代。

****需要权限****：ohos.permission.PUBLISH\_AGENT\_REMINDER

****系统能力****：SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reminderReq | [ReminderRequest](#reminderrequestdeprecated) | 是 | 需要发布的提醒实例。 |

****返回值****：

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | 返回提醒的Id。 |

****示例****：

```
let timer:reminderAgent.ReminderRequestTimer = {
  reminderType: reminderAgent.ReminderType.REMINDER_TYPE_TIMER,
  triggerTimeInSeconds: 10
}

reminderAgent.publishReminder(timer).then((reminderId: number) => {
  console.info("promise, reminderId = " + reminderId);
});
```

## reminderAgent.cancelReminder(deprecated)

cancelReminder(reminderId: number, callback: AsyncCallback&lt;void&gt;): void

取消指定id的提醒，使用回调的方式实现异步调用。

![](../../../../images/cb66702b/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.cancelReminder](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagercancelreminder)替代。

****系统能力****： SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reminderId | number | 是 | 目标reminder的id号。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 异步回调。 |

****示例****：

```
import { BusinessError } from '@ohos.base';

reminderAgent.cancelReminder(1, (err: BusinessError, data: void) => {
  console.info("cancelReminder callback");
});
```

## reminderAgent.cancelReminder(deprecated)

cancelReminder(reminderId: number): Promise&lt;void&gt;

取消指定id的提醒，使用Promise方式实现异步调用。

![](../../../../images/62c57ba6/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.cancelReminder](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagercancelreminder-1)替代。

****系统能力****： SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reminderId | number | 是 | 目标reminder的id号。 |

****返回值****：

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise类型异步回调。 |

****示例****：

```
reminderAgent.cancelReminder(1).then(() => {
    console.info("cancelReminder promise");
});
```

## reminderAgent.getValidReminders(deprecated)

getValidReminders(callback: AsyncCallback&lt;Array&lt;ReminderRequest&gt;>): void

获取当前应用已设置的所有有效（未过期）的提醒，使用回调的方式实现异步调用。

![](../../../../images/5aa758dc/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.getValidReminders](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagergetvalidreminders)替代。

****系统能力****： SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;[ReminderRequest](#reminderrequestdeprecated)&gt;&gt; | 是 | 异步回调，返回当前应用已设置的所有有效（未过期）的提醒。 |

****示例****：

```
import { BusinessError } from '@ohos.base';

reminderAgent.getValidReminders((err: BusinessError, reminders: Array<reminderAgent.ReminderRequest>) => {
  console.info("callback, getValidReminders length = " + reminders.length);
  for (let i = 0; i < reminders.length; i++) {
    console.info("getValidReminders = " + reminders[i]);
    console.info("getValidReminders, reminderType = " + reminders[i].reminderType);
    const actionButton = reminders[i].actionButton || [];
    for (let j = 0; j < actionButton.length; j++) {
      console.info("getValidReminders, actionButton.title = " + actionButton[j]?.title);
      console.info("getValidReminders, actionButton.type = " + actionButton[j]?.type);
    }
    console.info("getValidReminders, wantAgent.pkgName = " + reminders[i].wantAgent?.pkgName);
    console.info("getValidReminders, wantAgent.abilityName = " + reminders[i].wantAgent?.abilityName);
    console.info("getValidReminders, ringDuration = " + reminders[i].ringDuration);
    console.info("getValidReminders, snoozeTimes = " + reminders[i].snoozeTimes);
    console.info("getValidReminders, timeInterval = " + reminders[i].timeInterval);
    console.info("getValidReminders, title = " + reminders[i].title);
    console.info("getValidReminders, content = " + reminders[i].content);
    console.info("getValidReminders, expiredContent = " + reminders[i].expiredContent);
    console.info("getValidReminders, snoozeContent = " + reminders[i].snoozeContent);
    console.info("getValidReminders, notificationId = " + reminders[i].notificationId);
    console.info("getValidReminders, slotType = " + reminders[i].slotType);
  }
})
```

## reminderAgent.getValidReminders(deprecated)

getValidReminders(): Promise&lt;Array&lt;ReminderRequest&gt;>

获取当前应用已设置的所有有效（未过期）的提醒，使用Promise方式实现异步调用。

![](../../../../images/9a99cd3f/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.getValidReminders](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagergetvalidreminders-1)替代。

****系统能力****： SystemCapability.Notification.ReminderAgent

****返回值****：

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[ReminderRequest](#reminderrequestdeprecated)&gt;&gt; | 返回当前应用已设置的所有有效（未过期）的提醒。 |

****示例****：

```
reminderAgent.getValidReminders().then((reminders: Array<reminderAgent.ReminderRequest>) => {
  console.info("promise, getValidReminders length = " + reminders.length);
  for (let i = 0; i < reminders.length; i++) {
    console.info("getValidReminders = " + reminders[i]);
    console.info("getValidReminders, reminderType = " + reminders[i].reminderType);
    const actionButton = reminders[i].actionButton || [];
    for (let j = 0; j < actionButton.length; j++) {
      console.info("getValidReminders, actionButton.title = " + actionButton[j]?.title);
      console.info("getValidReminders, actionButton.type = " + actionButton[j]?.type);
    }
    console.info("getValidReminders, wantAgent.pkgName = " + reminders[i].wantAgent?.pkgName);
    console.info("getValidReminders, wantAgent.abilityName = " + reminders[i].wantAgent?.abilityName);
    console.info("getValidReminders, ringDuration = " + reminders[i].ringDuration);
    console.info("getValidReminders, snoozeTimes = " + reminders[i].snoozeTimes);
    console.info("getValidReminders, timeInterval = " + reminders[i].timeInterval);
    console.info("getValidReminders, title = " + reminders[i].title);
    console.info("getValidReminders, content = " + reminders[i].content);
    console.info("getValidReminders, expiredContent = " + reminders[i].expiredContent);
    console.info("getValidReminders, snoozeContent = " + reminders[i].snoozeContent);
    console.info("getValidReminders, notificationId = " + reminders[i].notificationId);
    console.info("getValidReminders, slotType = " + reminders[i].slotType);
  }
})
```

## reminderAgent.cancelAllReminders(deprecated)

cancelAllReminders(callback: AsyncCallback&lt;void&gt;): void

取消当前应用所有的提醒，使用回调的方式实现异步调用。

![](../../../../images/53ee4e28/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.cancelAllReminders](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagercancelallreminders)替代。

****系统能力****： SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | 是 | 异步回调。 |

****示例****：

```
import { BusinessError } from '@ohos.base';

reminderAgent.cancelAllReminders((err: BusinessError, data: void) =>{
  console.info("cancelAllReminders callback")
})
```

## reminderAgent.cancelAllReminders(deprecated)

cancelAllReminders(): Promise&lt;void&gt;

取消当前应用所有的提醒，使用Promise方式实现异步调用。

![](../../../../images/bd4025c6/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.cancelAllReminders](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagercancelallreminders-1)替代。

****系统能力****： SystemCapability.Notification.ReminderAgent

****返回值****：

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise类型异步回调。 |

****示例****：

```
reminderAgent.cancelAllReminders().then(() => {
    console.info("cancelAllReminders promise")
})
```

## reminderAgent.addNotificationSlot(deprecated)

addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback&lt;void&gt;): void

添加一个NotificationSlot，使用回调的方式实现异步调用。

![](../../../../images/085eb546/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.addNotificationSlot](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanageraddnotificationslot)替代。

****系统能力****： SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slot | [NotificationSlot](/ref/notification-api/notification-arkts/notification-arkts-dep/js-apis-notification/js-apis-notification#notificationslot) | 是 | notification.slot实例，仅支持设置其type属性。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 异步回调。 |

****示例****：

```
import notification from '@ohos.notificationManager'
import { BusinessError } from '@ohos.base';

let mySlot:notification.NotificationSlot = {
  type: notification.SlotType.SOCIAL_COMMUNICATION
}
reminderAgent.addNotificationSlot(mySlot, (err: BusinessError, data: void) => {
  console.info("addNotificationSlot callback");
});
```

## reminderAgent.addNotificationSlot(deprecated)

addNotificationSlot(slot: NotificationSlot): Promise&lt;void&gt;

添加一个NotificationSlot，使用Promise方式实现异步调用。

![](../../../../images/82ff369e/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.addNotificationSlot](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanageraddnotificationslot-1)替代。

****系统能力****： SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slot | [NotificationSlot](/ref/notification-api/notification-arkts/notification-arkts-dep/js-apis-notification/js-apis-notification#notificationslot) | 是 | notification.slot实例，仅支持设置其type属性。 |

****返回值****：

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise类型异步回调。 |

****示例****：

```
import notification from '@ohos.notificationManager'

let mySlot:notification.NotificationSlot = {
  type: notification.SlotType.SOCIAL_COMMUNICATION
}
reminderAgent.addNotificationSlot(mySlot).then(() => {
  console.info("addNotificationSlot promise");
});
```

## reminderAgent.removeNotificationSlot(deprecated)

removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback&lt;void&gt;): void

删除目标NotificationSlot，使用callback方式实现异步调用。

![](../../../../images/462adda6/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.removeNotificationSlot](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagerremovenotificationslot)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotType | [notification.SlotType](/ref/notification-api/notification-arkts/notification-arkts-dep/js-apis-notification/js-apis-notification#slottype) | 是 | 目标notification.slot的类型。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 异步回调。 |

****示例****：

```
import notification from '@ohos.notification'
import { BusinessError } from '@ohos.base';

reminderAgent.removeNotificationSlot(notification.SlotType.CONTENT_INFORMATION, (err: BusinessError, data: void) => {
  console.info("removeNotificationSlot callback");
});
```

## reminderAgent.removeNotificationSlot(deprecated)

removeNotificationSlot(slotType: notification.SlotType): Promise&lt;void&gt;

删除目标NotificationSlot，使用Promise方式实现异步调用。

![](../../../../images/a590e255/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.removeNotificationSlot](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderagentmanagerremovenotificationslot-1)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

****参数****：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotType | [notification.SlotType](/ref/notification-api/notification-arkts/notification-arkts-dep/js-apis-notification/js-apis-notification#slottype) | 是 | 目标notification.slot的类型。 |

****返回值****：

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise类型异步回调。 |

****示例****：

```
import notification from '@ohos.notification'

reminderAgent.removeNotificationSlot(notification.SlotType.CONTENT_INFORMATION).then(() => {
    console.info("removeNotificationSlot promise");
});
```

## ActionButtonType(deprecated)

按钮的类型。

![](../../../../images/0b86dc6d/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.ActionButtonType](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#actionbuttontype)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 值 | 说明 |
| --- | --- | --- |
| ACTION\_BUTTON\_TYPE\_CLOSE | 0 | 表示关闭提醒的按钮。 |
| ACTION\_BUTTON\_TYPE\_SNOOZE | 1 | 表示延迟提醒的按钮。 |

## ReminderType(deprecated)

提醒的类型。

![](../../../../images/bc21e433/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.ReminderType](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#remindertype)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 值 | 说明 |
| --- | --- | --- |
| REMINDER\_TYPE\_TIMER | 0 | 表示提醒类型：倒计时。 |
| REMINDER\_TYPE\_CALENDAR | 1 | 表示提醒类型：日历。 |
| REMINDER\_TYPE\_ALARM | 2 | 表示提醒类型：闹钟。 |

## ActionButton(deprecated)

用于设置弹出的提醒通知信息上显示的按钮类型和标题。

![](../../../../images/d6188cb3/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.ActionButton](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#actionbutton)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| title | string | 否 | 否 | 按钮显示的标题。 |
| type | [ActionButtonType](#actionbuttontypedeprecated) | 否 | 否 | 按钮的类型。 |

## WantAgent(deprecated)

点击提醒通知后跳转的目标ability信息。

![](../../../../images/ab78ca4d/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.WantAgent](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#wantagent)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pkgName | string | 否 | 否 | 指明点击提醒通知栏后跳转的目标HAP名。 |
| abilityName | string | 否 | 否 | 指明点击提醒通知栏后跳转的目标ability名称。 |

## MaxScreenWantAgent(deprecated)

全屏显示提醒到达时自动拉起的目标ability信息，该接口预留。

![](../../../../images/0fddd9b8/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.MaxScreenWantAgent](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#maxscreenwantagent)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pkgName | string | 否 | 否 | 指明提醒到达时自动拉起的目标HAP名（如果设备在使用中，则只弹出通知横幅框）。 |
| abilityName | string | 否 | 否 | 指明提醒到达时自动拉起的目标ability名（如果设备在使用中，则只弹出通知横幅框）。 |

## ReminderRequest(deprecated)

提醒实例对象，用于设置提醒类型、响铃时长等具体信息。

![](../../../../images/fcd2cb7e/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.ReminderRequest](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderrequest)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| reminderType | [ReminderType](#remindertypedeprecated) | 否 | 否 | 指明提醒类型。 |
| actionButton | [[ActionButton](#actionbuttondeprecated)?, [ActionButton](#actionbuttondeprecated)?] | 否 | 是 | 弹出的提醒通知栏中显示的按钮（参数可选，支持0/1/2个按钮）。 |
| wantAgent | WantAgent | 否 | 是 | 点击通知后需要跳转的目标ability信息。 |
| maxScreenWantAgent | [MaxScreenWantAgent](#maxscreenwantagentdeprecated) | 否 | 是 | 提醒到达时跳转的目标包。如果设备正在使用中，则弹出一个通知框。 |
| ringDuration | number | 否 | 是 | 指明响铃时长（单位：秒），默认1秒。 |
| snoozeTimes | number | 否 | 是 | 指明延迟提醒次数，默认0次。 |
| timeInterval | number | 否 | 是 | 执行延迟提醒间隔（单位：秒），默认0秒。 |
| title | string | 否 | 是 | 指明提醒标题。 |
| content | string | 否 | 是 | 指明提醒内容。 |
| expiredContent | string | 否 | 是 | 指明提醒过期后需要显示的内容。 |
| snoozeContent | string | 否 | 是 | 指明延迟提醒时需要显示的内容。 |
| notificationId | number | 否 | 是 | 指明提醒使用的通知的id号，相同id号的提醒会覆盖。 |
| slotType | [notification.SlotType](/ref/notification-api/notification-arkts/notification-arkts-dep/js-apis-notification/js-apis-notification#slottype) | 否 | 是 | 指明提醒的slot类型。 |

## ReminderRequestCalendar(deprecated)

日历实例对象，用于设置提醒的时间。

![](../../../../images/2ebb3da4/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.ReminderRequestCalendar](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderrequestcalendar)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| dateTime | [LocalDateTime](#localdatetimedeprecated) | 否 | 否 | 指明提醒的目标时间。 |
| repeatMonths | Array&lt;number&gt; | 否 | 是 | 指明重复提醒的月份。 |
| repeatDays | Array&lt;number&gt; | 否 | 是 | 指明重复提醒的日期。 |

## ReminderRequestAlarm(deprecated)

闹钟实例对象，用于设置提醒的时间。

![](../../../../images/e719968a/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.ReminderRequestAlarm](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderrequestalarm)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| hour | number | 否 | 否 | 指明提醒的目标时刻。 |
| minute | number | 否 | 否 | 指明提醒的目标分钟。 |
| daysOfWeek | Array&lt;number&gt; | 否 | 是 | 指明每周哪几天需要重复提醒。范围为周一到周末，对应数字为1到7。 |

## ReminderRequestTimer(deprecated)

倒计时实例对象，用于设置提醒的时间。

![](../../../../images/77e96b43/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.ReminderRequestTimer](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#reminderrequesttimer)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| triggerTimeInSeconds | number | 否 | 否 | 指明倒计时的秒数。 |

## LocalDateTime(deprecated)

用于日历类提醒设置时指定时间信息。

![](../../../../images/19000929/note_3.0-zh-cn.png) 

从 API version 7开始支持，从API version 9开始废弃。建议使用[reminderAgentManager.LocalDateTime](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager#localdatetime)替代。

****系统能力****：SystemCapability.Notification.ReminderAgent

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| year | number | 否 | 否 | 年 |
| month | number | 否 | 否 | 月 |
| day | number | 否 | 否 | 日 |
| hour | number | 否 | 否 | 时 |
| minute | number | 否 | 否 | 分 |
| second | number | 否 | 是 | 秒 |
