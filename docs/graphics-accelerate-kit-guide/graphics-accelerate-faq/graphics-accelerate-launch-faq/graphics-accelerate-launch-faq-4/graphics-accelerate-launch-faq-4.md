---
title: "游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-4
kit: graphics
last_updated: "2026-04-22"
---

# 游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？

需根据“退出后是否希望继续使用****秒级启动****能力”选择不同的退出策略：

1. ****希望下次启动仍支持秒级启动****

   在侧滑退出场景下，应调用[terminateSelf](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#terminateself)实现退出，确保进程状态可被系统正确保留，避免出现黑屏问题。
2. ****不希望下次启动使用秒级启动****

   在侧滑退出场景下，应调用[killAllProcesses](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextkillallprocesses)实现强制退出，彻底清理进程，避免残留状态引发异常。
