---
title: "ExtensionContext"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-inner-application-extensioncontext
---

# ExtensionContext

ExtensionContext是[ExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability)的上下文环境，继承自[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context)。

ExtensionContext模块提供访问特定[ExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability)的资源的能力。

![](../../../../../images/09961e0e/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。

## 导入模块

```
import { common } from '@kit.AbilityKit';
```

## 属性

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| currentHapModuleInfo | [HapModuleInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-hapmoduleinfo/js-apis-bundlemanager-hapmoduleinfo) | 否 | 否 | 所属Hap包的信息。 |
| config | [Configuration](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration) | 否 | 否 | 所属Module的配置信息。 |
| extensionAbilityInfo | [ExtensionAbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-extensionabilityinfo/js-apis-bundlemanager-extensionabilityinfo) | 否 | 否 | 所属[ExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability)的信息。 |

## 使用场景

ExtensionContext主要用于查询所属ExtensionAbility的信息、Module的配置信息以及HAP包的信息，开发者可根据自身业务需求使用对应的信息。

****示例：****

在扩展的[FormExtensionAbility](/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability)中获取上下文，查询该扩展的FormExtensionAbility所属HAP包等信息。

```
import { FormExtensionAbility, formBindingData } from '@kit.FormKit';
import { Want } from '@kit.AbilityKit';

export default class MyFormExtensionAbility extends FormExtensionAbility {
  onAddForm(want: Want) {
    console.info(`FormExtensionAbility onAddForm, want: ${want.abilityName}`);
    let extensionContext = this.context;
    let hapInfo = extensionContext.currentHapModuleInfo;
    console.info(`HAP name is: ${hapInfo.name}`);
    let dataObj1: Record<string, string> = {
      'temperature': '11c',
      'time': '11:00'
    };
    let obj1: formBindingData.FormBindingData = formBindingData.createFormBindingData(dataObj1);
    return obj1;
  }
};
```
