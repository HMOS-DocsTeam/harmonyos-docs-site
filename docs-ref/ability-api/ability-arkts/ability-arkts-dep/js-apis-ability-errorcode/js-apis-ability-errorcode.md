---
title: "@ohos.ability.errorCode (ErrorCode)"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-errorcode
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-ability-errorcode
---

# @ohos.ability.errorCode (ErrorCode)

ErrorCode定义启动Ability时返回的错误码，包括无效的参数、权限拒绝等。

![](../../../../images/8db1654a/note_3.0-zh-cn.png) 

本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { ErrorCode } from '@kit.AbilityKit';
```

## ErrorCode

定义启动Ability时返回的错误码。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 值 | 说明 |
| --- | --- | --- |
| NO\_ERROR | 0 | 启动成功，无错误。 |
| INVALID\_PARAMETER | -1 | 无效的参数。 |
| ABILITY\_NOT\_FOUND | -2 | 找不到Ability。 |
| PERMISSION\_DENY | -3 | 权限拒绝。 |
