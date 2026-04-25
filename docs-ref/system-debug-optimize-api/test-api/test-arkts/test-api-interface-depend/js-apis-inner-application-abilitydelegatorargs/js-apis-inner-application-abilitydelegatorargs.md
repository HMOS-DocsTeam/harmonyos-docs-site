---
title: "AbilityDelegatorArgs"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs
kit: 系统
last_updated: "2026-04-22"
slug: js-apis-inner-application-abilitydelegatorargs
---

# AbilityDelegatorArgs

AbilityDelegatorArgs模块提供在应用程序执行测试用例期间，获取测试用例参数AbilityDelegatorArgs对象的能力。

![](../../../../../images/da0539f7/note_3.0-zh-cn.png) 

本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在[单元测试框架](/ut/arkxtest-guidelines/unittest-guidelines)中使用。

## 导入模块

```
import { abilityDelegatorRegistry } from '@kit.TestKit';
```

## 使用说明

通过AbilityDelegatorRegistry中[getArguments](/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-app-ability-abilitydelegatorregistry/js-apis-app-ability-abilitydelegatorregistry#abilitydelegatorregistrygetarguments)方法获取。

## AbilityDelegatorArgs

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力****：以下各项对应的系统能力均为SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| bundleName | string | 否 | 否 | 当前被测试应用的包名。 |
| parameters | Record&lt;string, string&gt; | 否 | 否 | 当前启动单元测试的参数。 |
| testCaseNames | string | 否 | 否 | 测试用例名称。 |
| testRunnerClassName | string | 否 | 否 | 执行测试用例的测试执行器名称。 |

****示例：****

```
import { abilityDelegatorRegistry } from '@kit.TestKit';

let args: abilityDelegatorRegistry.AbilityDelegatorArgs = abilityDelegatorRegistry.getArguments();
```
