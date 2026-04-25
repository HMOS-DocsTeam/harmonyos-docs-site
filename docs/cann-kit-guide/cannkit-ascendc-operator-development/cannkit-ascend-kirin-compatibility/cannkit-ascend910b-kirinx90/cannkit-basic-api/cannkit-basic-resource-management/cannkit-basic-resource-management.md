---
title: "资源管理"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-resource-management
kit: ai
last_updated: "2026-04-22"
---

# 资源管理

KirinX90/Kirin9030 AI处理器为单核耦合架构，不支持资源管理类接口，具体如下。

****表1**** 资源管理兼容说明

| 基础API | 兼容说明 |
| --- | --- |
| CubeResGroupHandle、GroupBarrier、KfcWorkspace | 不支持。该API用于在分离模式下对AI Core计算资源分组管理，KirinX90/Kirin9030 AI处理器为单核耦合架构，不需要。 |
