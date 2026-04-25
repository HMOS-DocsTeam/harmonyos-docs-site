---
title: "@ohos.bundle.shortcutManager (shortcutManager模块)"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-shortcutmanager
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-shortcutmanager
---

# @ohos.bundle.shortcutManager (shortcutManager模块)

本模块提供应用对于[快捷方式](/development-fundamentals/application-typical-scenarios/typical-scenario-configuration)的管理能力，包括设置快捷方式是否显示等。

![](../../../../images/85816692/note_3.0-zh-cn.png) 

本模块首批接口从API version 20开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { shortcutManager } from '@kit.AbilityKit';
```

## shortcutManager.setShortcutVisibleForSelf

setShortcutVisibleForSelf(id: string, visible: boolean) : Promise&lt;void&gt;

设置当前应用指定的快捷方式是否显示。使用Promise异步回调。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 快捷方式的ID，通过[module.json5配置文件](/development-fundamentals/application-configuration-file-stage/module-configuration-file)中的shortcuts标签下的shortcutId字段获取，取值为长度不超过63字节的字符串。 |
| visible | boolean | 是 | 快捷方式是否显示。true：快捷方式显示；false：快捷方式不显示。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象，无返回结果。 |

****错误码：****

以下错误码的详细介绍请参见[包管理子系统通用错误码](/ref/ability-api/ability-arkts-errcode/errorcode-bundle/errorcode-bundle)。

| 错误码ID | 错误信息 |
| --- | --- |
| 17700070 | The specified shortcut id is illegal. |

****示例：****

```
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 请替换为module.json5配置文件中的shortcuts标签下实际配置的shortcutId字段
shortcutManager.setShortcutVisibleForSelf("shortcut_id", false)
  .then(() => {
    console.info('setShortcutVisibleForSelf success');
  }).catch((err: BusinessError) => {
  console.error(`setShortcutVisibleForSelf errData is errCode:${err.code}  message:${err.message}`);
});
```

## shortcutManager.getAllShortcutInfoForSelf

getAllShortcutInfoForSelf(): Promise&lt;Array&lt;ShortcutInfo&gt;>

查询当前应用[配置文件](/development-fundamentals/application-configuration-file-stage/module-configuration-file#shortcuts标签)中定义的所有快捷方式信息。使用Promise异步回调。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[ShortcutInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-shortcutinfo/js-apis-bundlemanager-shortcutinfo)&gt;&gt; | Promise对象，返回应用配置文件中定义的所有快捷方式信息。 |

****示例：****

```
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

shortcutManager.getAllShortcutInfoForSelf()
  .then((data: shortcutManager.ShortcutInfo[]) => {
    console.info('getAllShortcutInfoForSelf shortcut data is' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
  console.error(`getAllShortcutInfoForSelf errData is errCode:${err.code}  message:${err.message}`);
});
```

## ShortcutInfo

type ShortcutInfo = \_ShortcutInfo

应用[module.json5配置文件](/development-fundamentals/application-configuration-file-stage/module-configuration-file#shortcuts标签)中定义的快捷方式信息。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

| 类型 | 说明 |
| --- | --- |
| [\_ShortcutInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-shortcutinfo/js-apis-bundlemanager-shortcutinfo#shortcutinfo-1) | 应用module.json5配置文件中定义的快捷方式信息。 |

## ShortcutWant

type ShortcutWant = \_ShortcutWant

快捷方式内定义的目标[wants](/development-fundamentals/application-configuration-file-stage/module-configuration-file#wants标签)信息集合。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

| 类型 | 说明 |
| --- | --- |
| [\_ShortcutWant](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-shortcutinfo/js-apis-bundlemanager-shortcutinfo#shortcutwant) | 快捷方式内定义的目标[wants](/development-fundamentals/application-configuration-file-stage/module-configuration-file#wants标签)信息集合。 |

## ParameterItem

type ParameterItem = \_ParameterItem

快捷方式配置信息中的自定义数据。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Launcher

| 类型 | 说明 |
| --- | --- |
| [\_ParameterItem](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-shortcutinfo/js-apis-bundlemanager-shortcutinfo#parameteritem) | 快捷方式配置信息中的自定义数据。 |
