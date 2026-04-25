---
title: "AbilityStageMonitor"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitystagemonitor
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-inner-application-abilitystagemonitor
---

# AbilityStageMonitor

本模块提供监听指定[AbilityStage](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage)对象的能力。开发者可以将AbilityStageMonitor作为[abilityDelegator.waitAbilityStageMonitor](/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator#waitabilitystagemonitor9)的入参来注册监听。

![](../../../../../images/86639bc1/note_3.0-zh-cn.png) 

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { abilityDelegatorRegistry } from '@kit.TestKit';
```

## AbilityStageMonitor

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| moduleName | string | 否 | 否 | 被监听的AbilityStage的模块名。 |
| srcEntrance | string | 否 | 否 | 被监听的AbilityStage的源路径。 |

****示例：****

```
import { abilityDelegatorRegistry } from '@kit.TestKit';

let monitor: abilityDelegatorRegistry.AbilityStageMonitor = {
  moduleName: 'feature_as1',
  srcEntrance: './ets/Application/MyAbilityStage.ts',
}

let abilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
abilityDelegator.waitAbilityStageMonitor(monitor, (error, data) => {
  if (error) {
    console.error(`waitAbilityStageMonitor fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`waitAbilityStageMonitor success, data: ${JSON.stringify(data)}`);
  }
});
```
