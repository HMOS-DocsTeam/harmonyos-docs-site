---
title: "场景化消息中的请求URL版本问题"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-8
kit: app-services
last_updated: "2026-04-22"
---

# 场景化消息中的请求URL版本问题

场景化消息[请求体结构](/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct)中，请求URL版本为V3（`https://push-api.cloud.huawei.com/v3/[projectId]/messages:send）时`，仅支持给HarmonyOS Next/5.x及之后的系统版本推送通知；版本为V2（`https://push-api.cloud.huawei.com/v2/[projectId]/messages:send）时`，仅支持给HarmonyOS 3.x/4.x的系统版本推送通知。

****请使用V3版本****的请求URL（`https://push-api.cloud.huawei.com/v3/[projectId]/messages:send）进行消息推送`。
