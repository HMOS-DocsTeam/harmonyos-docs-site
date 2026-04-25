---
title: "SendableContext"
sidebar_position: 27
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-sendablecontext
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-inner-application-sendablecontext
---

# SendableContext

SendableContext符合[Sendable协议](/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable协议)，继承自[lang.ISendable](/ref/arkts-api/arkts-arkts/js-apis-arkts-lang/js-apis-arkts-lang#langisendable)。

![](../../../../../images/34a5a875/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 12 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。

## 导入模块

```
import { sendableContextManager } from '@kit.AbilityKit';
```

## SendableContext

SendableContext符合[Sendable协议](/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable协议)，可以与Context对象相互转换，用于ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）的数据传递。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****元服务API****：从API version 12开始，该接口支持在元服务中使用。
