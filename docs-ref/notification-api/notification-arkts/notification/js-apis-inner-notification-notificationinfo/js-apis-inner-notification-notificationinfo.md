---
title: "NotificationInfo"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-notification-notificationinfo
kit: 应用服务
last_updated: "2026-04-22"
slug: js-apis-inner-notification-notificationinfo
---

# NotificationInfo

通知订阅扩展能力中[onReceiveMessage](/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability#onreceivemessage)回调的通知信息。

![](../../../../images/8d8b464c/note_3.0-zh-cn.png) 

本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## NotificationInfo

****系统能力****：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| hashCode | string | 是 | 否 | 通知的唯一标识符。 |
| notificationSlotType | [notificationManager.SlotType](/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#slottype) | 是 | 否 | 通知渠道类型。 |
| content | [NotificationExtensionContent](/ref/notification-api/notification-arkts/notification/is-inner-notification-notificationextensioncontent/is-inner-notification-notificationextensioncontent) | 是 | 否 | 通知内容。 |
| bundleName | string | 是 | 否 | 创建通知的包名。 |
| appIndex | number | 是 | 否 | 创建通知的应用包的分身索引标识，仅在分身应用中生效。 |
| appName | string | 是 | 是 | 创建通知的应用程序名称。 |
| deliveryTime | number | 是 | 是 | 通知发布的时间戳（毫秒数）。 |
| groupName | string | 是 | 是 | 通知组名称。默认情况下此参数为空。 |
