---
title: "ModuleInfo"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundle-moduleinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-bundle-moduleinfo
---

# ModuleInfo

应用程序的模块信息。

![](../../../../../images/7f9e655b/note_3.0-zh-cn.png) 

本模块首批接口从API version 7 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

从API version 9开始，该模块不再维护，建议使用[bundleManager-HapModuleInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-hapmoduleinfo/js-apis-bundlemanager-hapmoduleinfo)替代。

## ModuleInfo(deprecated)

![](../../../../../images/1507f310/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager-HapModuleInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-hapmoduleinfo/js-apis-bundlemanager-hapmoduleinfo#hapmoduleinfo-1)替代。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| moduleName | string | 是 | 否 | 模块名称。 |
| moduleSourceDir | string | 是 | 否 | 安装目录。不能拼接路径访问资源文件，请使用[资源管理接口](/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager)访问资源。 |
