---
title: "Skill"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-skill
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-bundlemanager-skill
---

# Skill

skill标签对象，可以通过[bundleManager.getBundleInfoForSelf](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)获取skill([BundleInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo)->[HapModuleInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-hapmoduleinfo/js-apis-bundlemanager-hapmoduleinfo)->[AbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-abilityinfo/js-apis-bundlemanager-abilityinfo)或[ExtensionAbilityInfo](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-extensionabilityinfo/js-apis-bundlemanager-extensionabilityinfo)中)信息，其中参数bundleFlags至少包含GET\_BUNDLE\_INFO\_WITH\_HAP\_MODULE和GET\_BUNDLE\_INFO\_WITH\_ABILITY和GET\_BUNDLE\_INFO\_WITH\_SKILL。

![](../../../../../images/26213a31/note_3.0-zh-cn.png) 

本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { bundleManager } from '@kit.AbilityKit';
```

## Skill

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力****: SystemCapability.BundleManager.BundleFramework.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| actions | Array&lt;string&gt; | 是 | 否 | Skill接收的[Action集合](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant/js-apis-ability-wantconstant#action)。 |
| entities | Array&lt;string&gt; | 是 | 否 | Skill接收的[Entity集合](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant/js-apis-ability-wantconstant#entity)。 |
| uris | Array&lt;SkillUri&gt; | 是 | 否 | Want匹配的Uri集合。 |
| domainVerify | boolean | 是 | 否 | Skill接收的DomainVerify值，仅在AbilityInfo中存在，表示是否开启域名校验，取值为true表示开启域名校验，取值为false表示未开启域名校验。 |

## SkillUri

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| scheme | string | 是 | 否 | 标识 URI 协议名，常见的有http、https、file、ftp等。 |
| host | string | 是 | 否 | 标识 URI 主机地址部分，仅当 scheme 存在时才生效。 |
| port | number | 是 | 否 | 标识 URI 端口，仅当 scheme 和 host 同时存在时才生效。 |
| path | string | 是 | 否 | 标识 URI 路径部分，仅当 scheme 和 host 同时存在时才生效。 |
| pathStartWith | string | 是 | 否 | 标识 URI 路径部分，用于前缀匹配，仅当 scheme 和 host 同时存在时才生效。 |
| pathRegex | string | 是 | 否 | 标识 URI 路径部分，用于正则匹配，仅当 scheme 和 host 同时存在时才生效。 |
| type | string | 是 | 否 | 标识与Want相匹配的数据类型，使用MIME（Multipurpose Internet Mail Extensions）类型规范和[UniformDataType](/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor#uniformdatatype)类型规范。 |
| utd | string | 是 | 否 | 标识与 Want 相匹配的 URI 的标准化数据类型，适用于分享等场景。 |
| maxFileSupported | number | 是 | 否 | 对于指定类型的文件，标识一次能接收或打开的最大数量。取值范围：不小于0的整数。 |
| linkFeature | string | 是 | 否 | 标识 URI 提供的[功能类型](/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config#linkfeature标签说明)，用于实现应用间跳转，仅在AbilityInfo中存在。 |
