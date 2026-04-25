---
title: "AbilityStageContext"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitystagecontext
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-inner-application-abilitystagecontext
---

# AbilityStageContext

AbilityStageContext是AbilityStage的上下文环境，继承自[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。

AbilityStageContext提供允许访问特定于abilityStage的资源的能力，包括获取AbilityStage对应的ModuleInfo对象、环境变化对象。

![](../../../../../images/2e1c474c/note_3.0-zh-cn.png) 

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

## 导入模块

```
import { common } from '@kit.AbilityKit';
```

## 属性

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| currentHapModuleInfo | [HapModuleInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-hapmoduleinfo/js-apis-bundlemanager-hapmoduleinfo) | 否 | 否 | AbilityStage对应的ModuleInfo对象。 |
| config | [Configuration](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration) | 否 | 否 | 环境变量。 |

****示例：****

```
import { AbilityStage } from '@kit.AbilityKit';

class MyAbilityStage extends AbilityStage {
  onCreate() {
    let abilityStageContext = this.context;
    // 获取当前模块名
    let name = abilityStageContext.currentHapModuleInfo.name;
    // 获取当前模块语言
    let language = abilityStageContext.config.language;
  }
}
```
