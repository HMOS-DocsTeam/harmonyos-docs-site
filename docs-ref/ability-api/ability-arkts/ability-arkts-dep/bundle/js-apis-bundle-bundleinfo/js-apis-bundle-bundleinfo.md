---
title: "BundleInfo"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundle-bundleinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-bundle-bundleinfo
---

# BundleInfo

应用包的信息，通过[bundle.getBundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-bundle/js-apis-bundle#bundlegetbundleinfodeprecated)获取。

![](../../../../../images/adb1895d/note_3.0-zh-cn.png) 

本模块首批接口从API version 7 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

从API version 9开始，该模块不再维护，建议使用[bundleManager-BundleInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo)替代。

## BundleInfo(deprecated)

![](../../../../../images/06fd93ac/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager-BundleInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo#bundleinfo-1)替代。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| name | string | 是 | 否 | 应用包的名称。 |
| type | string | 是 | 否 | 应用包类型。 |
| appId | string | 是 | 否 | 应用包里应用程序的id。 |
| uid | number | 是 | 否 | 应用包里应用程序的uid。 |
| installTime | number | 是 | 否 | HAP安装时间，单位：毫秒。 |
| updateTime | number | 是 | 否 | HAP更新时间，单位：毫秒。 |
| appInfo | [ApplicationInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-applicationinfo/js-apis-bundle-applicationinfo) | 是 | 否 | 应用程序的配置信息。 |
| abilityInfos | Array&lt;[AbilityInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-abilityinfo/js-apis-bundle-abilityinfo)&gt; | 是 | 否 | Ability的配置信息  通过调用[bundle.getBundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-bundle/js-apis-bundle#bundlegetbundleinfodeprecated)接口时，传入GET\_BUNDLE\_WITH\_ABILITIES获取。 |
| reqPermissions | Array&lt;string&gt; | 是 | 否 | 应用运行时需向系统申请的权限集合  通过调用[bundle.getBundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-bundle/js-apis-bundle#bundlegetbundleinfodeprecated)接口时，传入GET\_BUNDLE\_WITH\_REQUESTED\_PERMISSION获取。 |
| reqPermissionDetails | Array&lt;[ReqPermissionDetail](#reqpermissiondetaildeprecated)&gt; | 是 | 否 | 应用运行时需向系统申请的权限集合的详细信息  通过调用[bundle.getBundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-bundle/js-apis-bundle#bundlegetbundleinfodeprecated)接口时，传入GET\_BUNDLE\_WITH\_REQUESTED\_PERMISSION获取。 |
| vendor | string | 是 | 否 | 应用包的供应商。 |
| versionCode | number | 是 | 否 | 应用包的版本号。 |
| versionName | string | 是 | 否 | 应用包的版本文本描述信息。 |
| compatibleVersion | number | 是 | 否 | 运行应用包所需要最低的SDK版本号。 |
| targetVersion | number | 是 | 否 | 运行应用包所需要最高SDK版本号。 |
| isCompressNativeLibs | boolean | 是 | 否 | 是否压缩应用包的本地库，取值为true表示压缩应用包的本地库，取值为false表示不压缩应用包的本地库。 |
| hapModuleInfos | Array&lt;[HapModuleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-hapmoduleinfo/js-apis-bundle-hapmoduleinfo)&gt; | 是 | 否 | 模块的配置信息。 |
| entryModuleName | string | 是 | 否 | Entry的模块名称。 |
| cpuAbi | string | 是 | 否 | 应用包的cpuAbi信息。 |
| isSilentInstallation | string | 是 | 否 | 是否通过静默安装。 |
| minCompatibleVersionCode | number | 是 | 否 | 分布式场景下的应用包兼容的最低版本。 |
| entryInstallationFree | boolean | 是 | 否 | Entry是否支持免安装，取值为true表示支持免安装，取值为false表示不支持免安装。 |
| reqPermissionStates8+ | Array&lt;number&gt; | 是 | 否 | 申请权限的授予状态。0表示申请成功，-1表示申请失败。 |

## ReqPermissionDetail(deprecated)

![](../../../../../images/206a9c3f/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[ReqPermissionDetail](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo#reqpermissiondetail)替代。

应用运行时需向系统申请的权限集合的详细信息。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| name | string | 否 | 否 | 需要使用的权限名称。 |
| reason | string | 否 | 否 | 描述申请权限的原因。 |
| usedScene | [UsedScene](#usedscenedeprecated) | 否 | 否 | 权限使用的场景和时机。 |

## UsedScene(deprecated)

![](../../../../../images/f6b02721/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[UsedScene](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo#usedscene)替代。

描述权限使用的场景和时机。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| abilities | Array&lt;string&gt; | 否 | 否 | 使用到该权限的Ability集合。 |
| when | string | 否 | 否 | 使用该权限的时机。 |
