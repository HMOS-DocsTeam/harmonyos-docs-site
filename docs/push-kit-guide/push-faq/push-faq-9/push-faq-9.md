---
title: "应用处于后台时应用内如何接收消息"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-9
kit: app-services
last_updated: "2026-04-22"
---

# 应用处于后台时应用内如何接收消息

应用处于后台时仅有如下两个场景可以在应用内接收消息：

- 若应用需要实现语音播报等能力时，服务端可发送****语音播报消息****（即[push-type](/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#场景介绍)为****2****）。该场景中客户端应用内消息接收请参考RemoteNotificationExtensionAbility中[接口调用示例](/ref/push-api/push-arkts/push-remote-notification-extension-ability/push-remote-notification-extension-ability#onreceivemessage)。
- 若应用需要实现网络音视频通话能力时，服务端可发送****应用内通话消息****（即push-type为****10****）。该场景中客户端应用内消息接收请参考VoIPExtensionAbility中[接口调用示例](/ref/push-api/push-arkts/push-voip-ability/push-voip-ability#onreceivemessage)。

当应用处于内容不频繁更新，不会显示通知、播放铃声或改变应用角标场景时，服务端可发送****后台消息****（即push-type为****6****），若[proxyData](/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#backgroundpayload-后台消息)为“ENABLE”时，推送服务将后台消息写入到数据库中，不会拉起应用进程。
