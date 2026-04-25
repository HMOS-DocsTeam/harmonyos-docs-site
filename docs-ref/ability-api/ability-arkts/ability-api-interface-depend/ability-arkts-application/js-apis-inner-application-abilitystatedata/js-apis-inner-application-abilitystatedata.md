---
title: "AbilityStateData"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitystatedata
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-inner-application-abilitystatedata
---

# AbilityStateData

AbilityStateData是Ability状态信息的数据结构。使用[on](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-appmanager/js-apis-app-ability-appmanager#appmanageronapplicationstate14)注册生命周期变化监听后，可以通过[ApplicationStateObserver](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationstateobserver/js-apis-inner-application-applicationstateobserver)的onAbilityStateChanged回调的入参获取该数据结构。

![](../../../../../images/0b2734e1/note_3.0-zh-cn.png) 

本模块首批接口从API version 14开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { appManager } from '@kit.AbilityKit';
```

## AbilityStateData

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pid | number | 否 | 否 | 进程ID。 |
| bundleName | string | 否 | 否 | 应用Bundle名称。 |
| abilityName | string | 否 | 否 | Ability名称。 |
| uid | number | 否 | 否 | 所属应用程序的UID。 |
| state | number | 否 | 否 | Ability状态。  - [Stage模型](/ability-kit/ability-terminology#stage模型)：[UIAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability)的状态参见[UIAbility状态](#uiability状态)；[ExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability)的状态参见[ExtensionAbility状态](#extensionability状态)；[UIExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability)的状态参见[UIExtensionAbility状态](#uiextensionability状态)。  - [FA模型](/ability-kit/ability-terminology#fa模型)：参见[Ability状态](#ability状态)。 |
| moduleName | string | 否 | 否 | Ability所属的模块名称。 |
| abilityType | number | 否 | 否 | [Ability类型](#ability类型)：[UIAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability)或[ExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability)等。 |
| isAtomicService | boolean | 否 | 否 | 判断Ability所属应用是否为元服务。  true: 是元服务。  false: 不是元服务。 |
| appCloneIndex | number | 否 | 是 | 应用包的[分身](/development-fundamentals/application-typical-scenarios/app-clone)索引标识。 |
| callerBundleName23+ | string | 否 | 是 | Ability创建时的拉起方Bundle名称。 |

### UIAbility状态

| 值 | 状态 | 说明 |
| --- | --- | --- |
| 0 | ABILITY\_STATE\_CREATE | UIAbility正在创建中。 |
| 1 | ABILITY\_STATE\_READY | UIAbility已创建完成。 |
| 2 | ABILITY\_STATE\_FOREGROUND | UIAbility处于前台。 |
| 3 | ABILITY\_STATE\_FOCUS | UIAbility已获得焦点。 |
| 4 | ABILITY\_STATE\_BACKGROUND | UIAbility处于后台。 |
| 5 | ABILITY\_STATE\_TERMINATED | UIAbility已经销毁。 |

### ExtensionAbility状态

| 值 | 状态 | 说明 |
| --- | --- | --- |
| 0 | EXTENSION\_STATE\_CREATE | ExtensionAbility正在创建中。 |
| 1 | EXTENSION\_STATE\_READY | ExtensionAbility已创建完成。 |
| 2 | EXTENSION\_STATE\_CONNECTED | ExtensionAbility已与客户端建立连接。 |
| 3 | EXTENSION\_STATE\_DISCONNECTED | ExtensionAbility与客户端断开连接。 |
| 4 | EXTENSION\_STATE\_TERMINATED | ExtensionAbility已经销毁。 |

### UIExtensionAbility状态

| 值 | 状态 | 说明 |
| --- | --- | --- |
| 0 | ABILITY\_STATE\_CREATE | UIExtensionAbility正在创建中。 |
| 1 | ABILITY\_STATE\_READY | UIExtensionAbility已创建完成。 |
| 2 | ABILITY\_STATE\_FOREGROUND | UIExtensionAbility处于前台。 |
| 4 | ABILITY\_STATE\_BACKGROUND | UIExtensionAbility处于后台。 |
| 5 | ABILITY\_STATE\_TERMINATED | UIExtensionAbility已经销毁。 |

### Ability状态

| 值 | 状态 | 说明 |
| --- | --- | --- |
| 0 | ABILITY\_STATE\_CREATE | Ability正在创建中。 |
| 1 | ABILITY\_STATE\_READY | Ability已创建完成。 |
| 2 | ABILITY\_STATE\_FOREGROUND | Ability处于前台。 |
| 3 | ABILITY\_STATE\_FOCUS | Ability已获得焦点。 |
| 4 | ABILITY\_STATE\_BACKGROUND | Ability处于后台。 |
| 5 | ABILITY\_STATE\_TERMINATED | Ability已经销毁。 |
| 7 | ABILITY\_STATE\_CONNECTED | 后台服务已被客户端连接。 |
| 8 | ABILITY\_STATE\_DISCONNECTED | 后台服务与客户端断开连接。 |

### Ability类型

| 值 | 状态 | 说明 |
| --- | --- | --- |
| 0 | UNKNOWN | 未知类型。（系统错误） |
| 1 | PAGE | UI界面类型的Ability，即[UIAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability)。 |
| 2 | SERVICE | 后台服务类型的Ability。（FA模型） |
| 3 | DATA | 数据类型的Ability。（FA模型） |
| 4 | FORM | 卡片类型的Ability。（FA模型） |
| 5 | EXTENSION | 扩展类型的Ability。（Stage模型） |
