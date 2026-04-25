---
title: "@ohos.notificationExtensionSubscription (notificationExtensionSubscription模块)"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationextensionsubscription
kit: 应用服务
last_updated: "2026-04-22"
slug: js-apis-notificationextensionsubscription
---

# @ohos.notificationExtensionSubscription (notificationExtensionSubscription模块)

本模块提供管理通知扩展的能力，具体包括：打开通知扩展订阅设置界面、订阅和取消订阅通知扩展、获取和设置通知授权状态。

![](../../../images/1d025658/note_3.0-zh-cn.png) 

本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { notificationExtensionSubscription } from '@kit.NotificationKit';
import { BusinessError } from '@kit.BasicServicesKit';
```

## notificationExtensionSubscription.openSubscriptionSettings

openSubscriptionSettings(context: UIAbilityContext): Promise&lt;void&gt;

打开应用的通知扩展订阅授权页面，以半模态弹窗形式显示。用户可在该页面授权“允许获取本机通知”开关与“已获取的本机通知”应用开关。使用Promise异步回调。

****系统能力****：SystemCapability.Notification.Notification

****需要权限****：ohos.permission.SUBSCRIBE\_NOTIFICATION

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | [UIAbilityContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext) | 是 | 通知设置页面绑定Ability的上下文。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象，无返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)和[通知错误码](/ref/notification-api/notification-arkts-errcode/errorcode-notification/errorcode-notification)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600018 | The notification settings window is already displayed. |
| 1600023 | The application does not implement the NotificationSubscriberExtensionAbility. |

****示例：****

```
import { common } from '@kit.AbilityKit';

try {
  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  notificationExtensionSubscription.openSubscriptionSettings(context).then(() => {
    console.info(`openSubscriberSettings success`);
  }).catch((e:Error) => {
    let error = e as BusinessError
    console.error(`failed to call openSubscriptionSettings ${JSON.stringify(error)}`)
  });
} catch (error) {
  console.error(`failed to call openSubscriptionSettings ${JSON.stringify(error)}`)
}
```

## notificationExtensionSubscription.subscribe

subscribe(info: NotificationExtensionSubscriptionInfo[]): Promise&lt;void&gt;

订阅通知扩展。使用[蓝牙模块](/system-network/connectivity-kit/connectivity-kit-intro#蓝牙简介)相关接口获取蓝牙设备的唯一地址后方可订阅。使用Promise异步回调。

****系统能力****：SystemCapability.Notification.Notification

****需要权限****：ohos.permission.SUBSCRIBE\_NOTIFICATION

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | [NotificationExtensionSubscriptionInfo[]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/s-apis-inner-notificationextensionsubscriptioninfo`) | 是 | 订阅的信息列表（数组）。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象，无返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)和[通知错误码](/ref/notification-api/notification-arkts-errcode/errorcode-notification/errorcode-notification)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600023 | The application does not implement the NotificationSubscriberExtensionAbility. |

****示例：****

```
let infos: notificationExtensionSubscription.NotificationExtensionSubscriptionInfo[] = [
  {
    addr: '01:23:45:67:89:AB', // 使用动态获取的蓝牙地址
    type: notificationExtensionSubscription.SubscribeType.BLUETOOTH
  }
];
notificationExtensionSubscription.subscribe(infos).then(() => {
  console.info("subscribe success");
}).catch((err: BusinessError) => {
  console.error(`subscribe fail: ${JSON.stringify(err)}`);
});
```

## notificationExtensionSubscription.unsubscribe

unsubscribe(): Promise&lt;void&gt;

取消通知扩展的订阅。使用Promise异步回调。

****系统能力****：SystemCapability.Notification.Notification

****需要权限****：ohos.permission.SUBSCRIBE\_NOTIFICATION

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象，无返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)和[通知错误码](/ref/notification-api/notification-arkts-errcode/errorcode-notification/errorcode-notification)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

****示例：****

```
notificationExtensionSubscription.unsubscribe().then(() => {
  console.info("unsubscribe success");
}).catch((err: BusinessError) => {
  console.error(`unsubscribe fail: ${JSON.stringify(err)}`);
});
```

## notificationExtensionSubscription.getSubscribeInfo

getSubscribeInfo(): Promise&lt;NotificationExtensionSubscriptionInfo[]&gt;

获取当前应用的通知扩展订阅信息。使用Promise异步回调。

****系统能力****：SystemCapability.Notification.Notification

****需要权限****：ohos.permission.SUBSCRIBE\_NOTIFICATION

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[NotificationExtensionSubscriptionInfo[]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/s-apis-inner-notificationextensionsubscriptioninfo`)&gt; | Promise对象，返回一个[NotificationExtensionSubscriptionInfo[]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/s-apis-inner-notificationextensionsubscriptioninfo`)对象数组，表示应用的订阅信息。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)和[通知错误码](/ref/notification-api/notification-arkts-errcode/errorcode-notification/errorcode-notification)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

****示例：****

```
notificationExtensionSubscription.getSubscribeInfo().then((data: notificationExtensionSubscription.NotificationExtensionSubscriptionInfo[]) => {
  console.info(`getSubscribeInfo successfully. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getSubscribeInfo fail: ${JSON.stringify(err)}`);
});
```

## notificationExtensionSubscription.isUserGranted

isUserGranted(): Promise&lt;boolean&gt;

查询“允许获取本机通知”的开关状态。使用Promise异步回调。

****系统能力****：SystemCapability.Notification.Notification

****需要权限****：ohos.permission.SUBSCRIBE\_NOTIFICATION

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | Promise对象。返回true表示功能已启用；返回false表示功能未启用。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)和[通知错误码](/ref/notification-api/notification-arkts-errcode/errorcode-notification/errorcode-notification)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

****示例：****

```
notificationExtensionSubscription.isUserGranted().then((isOpen: boolean) => {
  if (isOpen) {
    console.info('isUserGranted true');
  } else {
    console.info('isUserGranted false');
  }
}).catch((err: BusinessError) => {
  console.error(`isUserGranted fail: ${JSON.stringify(err)}`);
});
```

## notificationExtensionSubscription.getUserGrantedEnabledBundles

getUserGrantedEnabledBundles(): Promise&lt;GrantedBundleInfo[]&gt;

获取指定应用中“已获取的本机通知”通知开关开启的应用列表。使用Promise异步回调。

****系统能力****：SystemCapability.Notification.Notification

****需要权限****：ohos.permission.SUBSCRIBE\_NOTIFICATION

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[GrantedBundleInfo[]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-notification-notificationcommondef#grantedbundleinfo22`)&gt; | Promise对象，返回获取指定应用中“已获取的本机通知”通知开关开启的应用列表。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)和[通知错误码](/ref/notification-api/notification-arkts-errcode/errorcode-notification/errorcode-notification)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

****示例：****

```
notificationExtensionSubscription.getUserGrantedEnabledBundles().then((data: notificationExtensionSubscription.GrantedBundleInfo[]) => {
  console.info(`getUserGrantedEnabledBundles successfully. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getUserGrantedEnabledBundles fail: ${JSON.stringify(err)}`);
});
```

## NotificationExtensionSubscriptionInfo

type NotificationExtensionSubscriptionInfo = \_NotificationExtensionSubscriptionInfo

用于描述通知扩展订阅的信息。

****系统能力****： SystemCapability.Notification.Notification

| 类型 | 说明 |
| --- | --- |
| [\_NotificationExtensionSubscriptionInfo](/ref/notification-api/notification-arkts/notification/s-apis-inner-notificationextensionsubscriptioninfo/s-apis-inner-notificationextensionsubscriptioninfo) | 用于描述通知扩展订阅的信息。 |

## NotificationInfo

type NotificationInfo = \_NotificationInfo

通知订阅扩展能力中[onReceiveMessage](/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability#onreceivemessage)回调的通知信息。

****系统能力****：SystemCapability.Notification.Notification

| 类型 | 说明 |
| --- | --- |
| [\_NotificationInfo](/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationinfo/js-apis-inner-notification-notificationinfo) | 通知订阅扩展能力中[onReceiveMessage](/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability#onreceivemessage)回调的通知信息。 |

## SubscribeType

表示通知扩展订阅的类型。

****系统能力****：SystemCapability.Notification.Notification

| 名称 | 值 | 说明 |
| --- | --- | --- |
| BLUETOOTH | 0 | 通过蓝牙订阅通知。 |

## BundleOption

type BundleOption = \_BundleOption

指定应用的包信息。

****系统能力****： SystemCapability.Notification.Notification

| 类型 | 说明 |
| --- | --- |
| [\_BundleOption](/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationcommondef/js-apis-inner-notification-notificationcommondef#bundleoption) | 指定应用的包信息。 |

## GrantedBundleInfo

type GrantedBundleInfo = \_GrantedBundleInfo

授权应用的包信息。

****系统能力****： SystemCapability.Notification.Notification

| 类型 | 说明 |
| --- | --- |
| [\_GrantedBundleInfo](/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationcommondef/js-apis-inner-notification-notificationcommondef#grantedbundleinfo22) | 授权应用的包信息。 |
