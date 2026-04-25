---
title: "概述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-extrapolation-overview
kit: graphics
last_updated: "2026-04-22"
---

# 概述

超帧外插模式是利用相邻两个真实渲染帧进行超帧计算并生成未来一帧预测帧，即利用第N-1帧、第N帧真实帧预测第N+0.5帧预测帧，如下图所示。由于外插模式不改变渲染时间线和显示时间线的帧间顺序，因此不会导致响应时延的增加。但由于外插模式预测的是未来帧画面，当发生场景画面帧间差异大、相机或物体运动方向突变时，在预测帧的画面边缘和物体边缘容易出现拖影和模糊现象。

![](../../../../../images/2b6de472/zh-cn_image_0000002552958708.png)
