---
title: "ProcessInformation"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-processinformation
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-inner-application-processinformation
---

# ProcessInformation

运行进程信息，可以通过appManager的[getRunningProcessInformation](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-appmanager/js-apis-app-ability-appmanager#appmanagergetrunningprocessinformation)来获取运行进程信息。

![](../../../../../images/be2582a4/note_3.0-zh-cn.png) 

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { appManager } from '@kit.AbilityKit';
```

## 属性

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pid | number | 否 | 否 | 进程ID。  ****元服务API****：从API version 11开始，该接口支持在元服务中使用。 |
| uid | number | 否 | 否 | 应用程序的UID。  ****元服务API****：从API version 11开始，该接口支持在元服务中使用。 |
| processName | string | 否 | 否 | 进程名称。  ****元服务API****：从API version 11开始，该接口支持在元服务中使用。 |
| bundleNames | Array&lt;string&gt; | 否 | 否 | 进程中所有运行的Bundle名称。  ****元服务API****：从API version 11开始，该接口支持在元服务中使用。 |
| state10+ | [appManager.ProcessState](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-appmanager/js-apis-app-ability-appmanager#processstate10) | 否 | 否 | 当前进程运行状态。  ****元服务API****：从API version 11开始，该接口支持在元服务中使用。 |
| bundleType12+ | [bundleManager.BundleType](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundletype) | 否 | 否 | 当前进程运行的包类型。  ****元服务API****：从API version 12开始，该接口支持在元服务中使用。 |
| appCloneIndex12+ | number | 否 | 是 | 分身应用索引。  ****元服务API****：从API version 12开始，该接口支持在元服务中使用。 |

****示例：****

```
import { appManager } from '@kit.AbilityKit';

appManager.getRunningProcessInformation((error, data) => {
  if (error) {
    console.error(`getRunningProcessInformation fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`getRunningProcessInformation success, data: ${JSON.stringify(data)}`);
  }
});
```
