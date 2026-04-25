---
title: "@ohos.ability.ability (Ability模块)"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-ability
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-ability-ability
---

# @ohos.ability.ability (Ability模块)

Ability模块将二级模块API组织在一起方便开发者进行导出。

![](../../../../images/a55301a4/note_3.0-zh-cn.png) 

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { ability } from '@kit.AbilityKit';
```

## DataAbilityHelper

type DataAbilityHelper = \_DataAbilityHelper

DataAbilityHelper二级模块。

****系统能力****：SystemCapability.Ability.AbilityRuntime.FAModel

****模型约束****：此接口仅可在FA模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_DataAbilityHelper](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-dataabilityhelper/js-apis-inner-ability-dataabilityhelper) | DataAbilityHelper二级模块。 |

## PacMap

type PacMap = \_PacMap

PacMap二级模块。

****系统能力****：SystemCapability.Ability.AbilityRuntime.FAModel

| 类型 | 说明 |
| --- | --- |
| [\_PacMap](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-dataabilityhelper/js-apis-inner-ability-dataabilityhelper#pacmap) | DataAbilityHelper二级模块。 |

## DataAbilityOperation

type DataAbilityOperation = \_DataAbilityOperation

DataAbilityOperation二级模块。

****系统能力****：SystemCapability.Ability.AbilityRuntime.FAModel

****模型约束****：此接口仅可在FA模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_DataAbilityOperation](/ref/ability-api/ability-arkts/fa-model/fa-model-ability/js-apis-inner-ability-dataabilityoperation/js-apis-inner-ability-dataabilityoperation) | DataAbilityOperation二级模块。 |

## DataAbilityResult

type DataAbilityResult = \_DataAbilityResult

DataAbilityResult二级模块。

****系统能力****：SystemCapability.Ability.AbilityRuntime.FAModel

****模型约束****：此接口仅可在FA模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_DataAbilityResult](/ref/ability-api/ability-arkts/fa-model/fa-model-ability/js-apis-inner-ability-dataabilityresult/js-apis-inner-ability-dataabilityresult) | DataAbilityResult二级模块。 |

## AbilityResult

type AbilityResult = \_AbilityResult

AbilityResult二级模块。

****系统能力****：SystemCapability.Ability.AbilityBase

****模型约束****：此接口仅可在FA模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_AbilityResult](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-abilityresult/js-apis-inner-ability-abilityresult) | AbilityResult二级模块。 |

## ConnectOptions

type ConnectOptions = \_ConnectOptions

ConnectOptions二级模块。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在FA模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_ConnectOptions](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-connectoptions/js-apis-inner-ability-connectoptions) | ConnectOptions二级模块。 |

## StartAbilityParameter

type StartAbilityParameter = \_StartAbilityParameter

StartAbilityParameter二级模块。

****系统能力****：SystemCapability.Ability.AbilityRuntime.FAModel

****模型约束****：此接口仅可在FA模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_StartAbilityParameter](/ref/ability-api/ability-arkts/fa-model/fa-model-ability/js-apis-inner-ability-startabilityparameter/js-apis-inner-ability-startabilityparameter) | StartAbilityParameter二级模块。 |

****示例：****

```
import { ability } from '@kit.AbilityKit';

let dataAbilityHelper: ability.DataAbilityHelper;
let pacMap: ability.PacMap;
let dataAbilityOperation: ability.DataAbilityOperation;
let dataAbilityResult: ability.DataAbilityResult;
let abilityResult: ability.AbilityResult;
let connectOptions: ability.ConnectOptions;
let startAbilityParameter: ability.StartAbilityParameter;
```
