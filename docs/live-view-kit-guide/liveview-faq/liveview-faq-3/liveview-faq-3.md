---
title: "关于实况窗生命周期的问题"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-faq-3
kit: app-services
last_updated: "2026-04-22"
---

# 关于实况窗生命周期的问题

## 如何实现“App关闭时，自动关闭构建的实况窗”

当App关闭时，可以调用[liveViewManager.stopLiveView](/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagerstopliveview)方法，设置参数[PrimaryData](/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#primarydata)实例的keepTime值为0，即可实现立即关闭实况窗。

## 本地更新如何获取实况窗实例以及实况窗被清除后的限制

1. 本地更新实况窗时，可以通过[liveViewManager.getActiveLiveView](/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagergetactiveliveview)函数获取活动的[LiveView](/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveview)实例。
2. 如果想要结束实况窗，建议使用[liveViewManager.stopLiveView](/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagerstopliveview)方法。如果实况窗被notificationManager.cancel或notificationManager.cancelAll清除后，无论是Live View Kit还是Push Kit，无法再次通过该id更新或结束实况窗。
3. 再次创建该id的实况窗时，Live View Kit可以通过该id再次创建实况窗，Push Kit在12小时内无法通过该id再次创建实况窗。
