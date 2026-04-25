---
title: "概述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-systempresent-overview
kit: graphics
last_updated: "2026-04-22"
---

# 概述

从5.1.0(18)版本开始，新增支持系统送显模式。

系统送显模式是相较于游戏送显模式，能减少开发者集成复杂度的方案。在游戏送显模式下，系统完成预测后需要游戏应用主动调用图形API来完成预测帧的送显。 系统送显模式下游戏虽仍需要触发插帧任务，但不再需要负责预测帧送显，系统会完成送显。当前系统送显模式仅支持内插模式。

![](../../../../../images/e1739f6c/zh-cn_image_0000002583478711.png)
