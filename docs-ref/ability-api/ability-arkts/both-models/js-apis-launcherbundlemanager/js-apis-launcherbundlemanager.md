---
title: "@ohos.bundle.launcherBundleManager (launcherBundleManager模块)"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-launcherbundlemanager
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-launcherbundlemanager
---

# @ohos.bundle.launcherBundleManager (launcherBundleManager模块)

本模块支持launcher应用（桌面有图标的应用）所需的查询能力，支持[LauncherAbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-launcherabilityinfo/js-apis-bundlemanager-launcherabilityinfo)信息的查询。

![](../../../../images/01acad3d/note_3.0-zh-cn.png) 

本模块首批接口从API version 18开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { launcherBundleManager } from '@kit.AbilityKit';
```

## launcherBundleManager.getLauncherAbilityInfoSync

getLauncherAbilityInfoSync(bundleName: string, userId: number) : Array<[LauncherAbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-launcherabilityinfo/js-apis-bundlemanager-launcherabilityinfo)>

查询指定bundleName及用户的[LauncherAbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-launcherabilityinfo/js-apis-bundlemanager-launcherabilityinfo)。

****需要权限：**** ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| userId | number | 是 | 被查询的用户ID，可以通过[getOsAccountLocalId接口](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-osaccount/js-apis-osaccount#getosaccountlocalid9)获取。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;[LauncherAbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-launcherabilityinfo/js-apis-bundlemanager-launcherabilityinfo)&gt; | Array形式返回bundle包含的[LauncherAbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-launcherabilityinfo/js-apis-bundlemanager-launcherabilityinfo)信息。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)和[ohos.bundle错误码](/ref/ability-api/ability-arkts-errcode/errorcode-bundle/errorcode-bundle)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Verify permission denied. |
| 801 | Capability not support. |
| 17700001 | The specified bundle name is not found. |
| 17700004 | The specified user ID is not found. |

****示例：****

```
import { launcherBundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = launcherBundleManager.getLauncherAbilityInfoSync("com.example.demo", 100);
  console.info("data is " + JSON.stringify(data));
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}
```

## LauncherAbilityInfo

type LauncherAbilityInfo = \_LauncherAbilityInfo

LauncherAbilityInfo信息。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

| 类型 | 说明 |
| --- | --- |
| [\_LauncherAbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-launcherabilityinfo/js-apis-bundlemanager-launcherabilityinfo) | 桌面应用的Ability信息。 |

## ShortcutInfo20+

type ShortcutInfo = \_ShortcutInfo

应用[module.json5配置文件](/development-fundamentals/application-configuration-file-stage/module-configuration-file#shortcuts标签)中定义的快捷方式信息。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

| 类型 | 说明 |
| --- | --- |
| [\_ShortcutInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-shortcutinfo/js-apis-bundlemanager-shortcutinfo#shortcutinfo-1) | 应用module.json5配置文件中定义的快捷方式信息。 |

## ShortcutWant20+

type ShortcutWant = \_ShortcutWant

快捷方式内定义的目标[wants](/development-fundamentals/application-configuration-file-stage/module-configuration-file#wants标签)信息集合。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

| 类型 | 说明 |
| --- | --- |
| [\_ShortcutWant](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-shortcutinfo/js-apis-bundlemanager-shortcutinfo#shortcutwant) | 快捷方式内定义的目标[wants](/development-fundamentals/application-configuration-file-stage/module-configuration-file#wants标签)信息集合。 |

## ParameterItem20+

type ParameterItem = \_ParameterItem

快捷方式配置信息中的自定义数据。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

| 类型 | 说明 |
| --- | --- |
| [\_ParameterItem](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-shortcutinfo/js-apis-bundlemanager-shortcutinfo#parameteritem) | 快捷方式配置信息中的自定义数据。 |
