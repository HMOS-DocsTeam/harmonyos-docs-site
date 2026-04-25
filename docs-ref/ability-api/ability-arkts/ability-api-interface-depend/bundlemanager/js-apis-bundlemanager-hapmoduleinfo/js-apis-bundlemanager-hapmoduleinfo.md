---
title: "HapModuleInfo"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-hapmoduleinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-bundlemanager-hapmoduleinfo
---

# HapModuleInfo

HAP信息，可以通过[getBundleInfoForSelf](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)获取自身的HAP信息，其中参数[bundleFlags](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundleflag)至少包含GET\_BUNDLE\_INFO\_WITH\_HAP\_MODULE。

![](../../../../../images/e28729e0/note_3.0-zh-cn.png) 

本模块首批接口从API version 9 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { bundleManager } from '@kit.AbilityKit';
```

## HapModuleInfo

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| name | string | 是 | 否 | 模块名称。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| icon | string | 是 | 否 | 当前模块入口Ability的[图标](/development-fundamentals/application-typical-scenarios/layered-image)，取值为图标资源文件的索引，与模块配置文件中[abilities标签](/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities标签)或[extensionAbilities标签](/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities标签)的icon字段值一致。若未配置入口Ability，则为空。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| iconId | number | 是 | 否 | 当前模块入口Ability的图标[资源ID](/resource-categories-and-access#资源目录)值。若未配置入口Ability，则为0。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| label | string | 是 | 否 | 当前模块入口Ability的名称，取值为字符串资源的索引，与模块配置文件中[abilities标签](/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities标签)或[extensionAbilities标签](/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities标签)的label字段值一致。若未配置入口Ability，则为空。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| labelId | number | 是 | 否 | 当前模块入口Ability名称的[资源ID](/resource-categories-and-access#资源目录)值。若未配置入口Ability，则为0。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| description | string | 是 | 否 | 模块描述信息。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| descriptionId | number | 是 | 否 | 描述信息的资源ID值。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| mainElementName | string | 是 | 否 | 当前模块的入口UIAbility名称或者ExtensionAbility名称。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| abilitiesInfo | Array&lt;[AbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-abilityinfo/js-apis-bundlemanager-abilityinfo)&gt; | 是 | 否 | 当前模块所有Ability的信息。通过调用[getBundleInfoForSelf](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)接口，bundleFlags参数传入GET\_BUNDLE\_INFO\_WITH\_HAP\_MODULE和GET\_BUNDLE\_INFO\_WITH\_ABILITY获取。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| extensionAbilitiesInfo | Array&lt;[ExtensionAbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-extensionabilityinfo/js-apis-bundlemanager-extensionabilityinfo)&gt; | 是 | 否 | 当前模块所有ExtensionAbility的信息。通过调用[getBundleInfoForSelf](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)接口，bundleFlags参数传入GET\_BUNDLE\_INFO\_WITH\_HAP\_MODULE和GET\_BUNDLE\_INFO\_WITH\_EXTENSION\_ABILITY获取。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| metadata | Array&lt;[Metadata](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-metadata/js-apis-bundlemanager-metadata)&gt; | 是 | 否 | 当前模块的元数据。通过调用[getBundleInfoForSelf](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)接口，bundleFlags参数传入GET\_BUNDLE\_INFO\_WITH\_HAP\_MODULE和GET\_BUNDLE\_INFO\_WITH\_METADATA获取。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| deviceTypes | Array&lt;string&gt; | 是 | 否 | 模块支持安装运行的[设备类型](/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes标签)的集合。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| installationFree | boolean | 是 | 否 | 模块是否支持免安装（无需用户通过应用市场显式安装），取值为true表示支持免安装，取值为false表示不支持免安装。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| hashValue | string | 是 | 否 | 模块的Hash值。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| type | [bundleManager.ModuleType](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#moduletype) | 是 | 否 | 标识当前模块的类型。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| preloads | Array&lt;[PreloadItem](#preloaditem)&gt; | 是 | 否 | 元服务中模块的预加载列表。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| dependencies | Array&lt;[Dependency](#dependency)&gt; | 是 | 否 | 模块运行依赖的动态共享库列表。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| fileContextMenuConfig11+ | string | 是 | 否 | 模块的文件菜单配置。通过调用[getBundleInfoForSelf](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)接口，bundleFlags参数传入GET\_BUNDLE\_INFO\_WITH\_HAP\_MODULE和GET\_BUNDLE\_INFO\_WITH\_MENU获取。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| routerMap12+ | Array&lt;[RouterItem](#routeritem12)&gt; | 是 | 否 | [模块的路由表配置](/development-fundamentals/application-configuration-file-stage/module-configuration-file#routermap标签)。通过调用[getBundleInfoForSelf](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)接口，bundleFlags参数传入GET\_BUNDLE\_INFO\_WITH\_HAP\_MODULE和GET\_BUNDLE\_INFO\_WITH\_ROUTER\_MAP获取。  ****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。 |
| codePath12+ | string | 是 | 否 | 模块的安装路径。  ****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。 |
| nativeLibraryPath12+ | string | 是 | 否 | 应用程序内模块本地库文件路径。 |

## PreloadItem

描述元服务中模块的预加载模块信息。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| moduleName | string | 是 | 否 | 模块名称。 |

## Dependency

描述模块所依赖的动态共享库信息。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| bundleName10+ | string | 是 | 否 | 标识当前模块依赖的共享包包名。 |
| moduleName | string | 是 | 否 | 标识当前模块依赖的共享包模块名。 |
| versionCode10+ | number | 是 | 否 | 标识当前共享包的版本号。 |

## RouterItem12+

描述模块配置的路由表信息。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| name | string | 是 | 否 | 标识跳转页面的名称。 |
| pageSourceFile | string | 是 | 否 | 标识页面在模块内的路径。 |
| buildFunction | string | 是 | 否 | 标识被@Builder修饰的函数，该函数描述页面的UI。 |
| data | Array&lt;[DataItem](#dataitem12)&gt; | 是 | 否 | 标识[路由表配置文件](/development-fundamentals/application-configuration-file-stage/module-configuration-file#routermap标签)中的字符串自定义数据，即data字段的信息，该字段已由系统解析，无需开发者自行解析。 |
| customData | string | 是 | 否 | 标识[路由表配置文件](/development-fundamentals/application-configuration-file-stage/module-configuration-file#routermap标签)中的任意类型的自定义数据，即customData字段的JSON字符串，开发者需要调用JSON.parse函数解析出具体内容。 |

## DataItem12+

描述模块配置的路由表中的自定义数据。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| key | string | 是 | 否 | 标识路由表自定义数据的键。 |
| value | string | 是 | 否 | 标识路由表自定义数据的值。 |
