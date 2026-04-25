---
title: "LauncherAbilityInfo"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-launcherabilityinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-bundlemanager-launcherabilityinfo
---

# LauncherAbilityInfo

桌面应用的Ability信息，可以通过[getLauncherAbilityInfoSync](/ref/ability-api/ability-arkts/both-models/js-apis-launcherbundlemanager/js-apis-launcherbundlemanager#launcherbundlemanagergetlauncherabilityinfosync)获取。

![](../../../../../images/25ba5b28/note_3.0-zh-cn.png) 

本模块首批接口从API version 18 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { launcherBundleManager } from '@kit.AbilityKit';
```

## LauncherAbilityInfo

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| applicationInfo | [ApplicationInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-applicationinfo/js-apis-bundlemanager-applicationinfo) | 是 | 否 | launcher ability的应用程序配置信息。 |
| elementName | [ElementName](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-elementname/js-apis-bundlemanager-elementname) | 是 | 否 | launcher ability的ElementName信息。 |
| labelId | number | 是 | 否 | launcher ability的名称的资源ID值。 |
| iconId | number | 是 | 否 | launcher ability的图标的资源ID值。 |
| userId | number | 是 | 否 | launcher ability的用户ID。 |
| installTime | number | 是 | 否 | launcher ability的安装时间戳，单位毫秒。 |
