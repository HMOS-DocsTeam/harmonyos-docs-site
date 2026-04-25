---
title: "NotificationFlags"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-notification-notificationflags
kit: 应用服务
last_updated: "2026-04-22"
slug: js-apis-inner-notification-notificationflags
---

# NotificationFlags

描述通知标志的实例。

![](../../../../images/b2ee602e/note_3.0-zh-cn.png) 

本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## NotificationFlags

描述通知标志位。

****系统能力****：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| soundEnabled | [NotificationFlagStatus](#notificationflagstatus11) | 否 | 是 | 是否启用声音提示功能。默认值为TYPE\_NONE。从API version 23开始成为可写参数，设置时仅[TYPE\_CLOSE](#notificationflagstatus11)会生效。 |
| vibrationEnabled | [NotificationFlagStatus](#notificationflagstatus11) | 否 | 是 | 是否启用振动提醒功能。默认值为TYPE\_NONE。从API version 23开始成为可写参数，设置时仅[TYPE\_CLOSE](#notificationflagstatus11)会生效。 |
| bannerEnabled23+ | [NotificationFlagStatus](#notificationflagstatus11) | 否 | 是 | 是否启用横幅功能。默认值为TYPE\_NONE。设置时仅[TYPE\_CLOSE](#notificationflagstatus11)会生效。 |
| lockScreenEnabled23+ | [NotificationFlagStatus](#notificationflagstatus11) | 否 | 是 | 是否启用锁屏功能。默认值为TYPE\_NONE。设置时仅[TYPE\_CLOSE](#notificationflagstatus11)会生效。 |

## NotificationFlagStatus11+

描述通知标志状态。

****系统能力****：SystemCapability.Notification.Notification

| 名称 | 值 | 说明 |
| --- | --- | --- |
| TYPE\_NONE | 0 | 默认标志，与TYPE\_OPEN效果相同。 |
| TYPE\_OPEN | 1 | 通知标志打开。 |
| TYPE\_CLOSE | 2 | 通知标志关闭。 |
