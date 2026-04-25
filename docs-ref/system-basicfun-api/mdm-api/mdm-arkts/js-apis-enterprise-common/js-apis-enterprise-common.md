---
title: "@ohos.enterprise.common（Enterprise公共模块）"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-common
kit: 系统
last_updated: "2026-04-22"
slug: js-apis-enterprise-common
---

# @ohos.enterprise.common（Enterprise公共模块）

本模块提供MDM Kit中常用公共能力的纯类型定义，包含枚举类型和数据结构。本模块仅导出类型声明，不包含具体实现逻辑或可执行代码。

![](../../../../images/0847bb2e/note_3.0-zh-cn.png) 

本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

## 导入模块

```
import { common } from '@kit.MDMKit';
```

## ManagedPolicy

企业设备管控策略。

****系统能力：**** SystemCapability.Customization.EnterpriseDeviceManager

| 名称 | 值 | 说明 |
| --- | --- | --- |
| DEFAULT | 0 | 默认，无管控策略。 |
| DISALLOW | 1 | 禁用。 |
| FORCE\_OPEN | 2 | 强制开启。 |

## ApplicationInstance

应用的实例数据。

该接口目前在[addUserNonStopApps](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanageraddusernonstopapps22)、[removeUserNonStopApps](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanagerremoveusernonstopapps22)、[addFreezeExemptedApps](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanageraddfreezeexemptedapps22)、[removeFreezeExemptedApps](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanagerremovefreezeexemptedapps22)接口中作为入参使用。

****系统能力：**** SystemCapability.Customization.EnterpriseDeviceManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| appIdentifier | string | 否 | 否 | 应用[唯一标识符](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo#signatureinfo)，可以通过接口[bundleManager.getBundleInfo](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfo14-2)获取bundleInfo.signatureInfo.appIdentifier。 |
| accountId | number | 否 | 否 | 用户ID。取值范围：大于等于0的整数。  accountId可以通过[getOsAccountLocalId](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-osaccount/js-apis-osaccount#getosaccountlocalid9-1)接口获取。 |
| appIndex | number | 否 | 否 | 应用分身索引。取值范围：大于等于0的整数。  appIndex可以通过[getAppCloneIdentity](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetappcloneidentity14)接口获取。 |

## InstallationResult

应用安装结果。

该对象目前在[EnterpriseAdminExtensionAbility.onMarketAppInstallResult](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability#onmarketappinstallresult22)作为回调入参使用。

****系统能力：**** SystemCapability.Customization.EnterpriseDeviceManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| result | [Result](#result) | 否 | 否 | 应用安装结果码。 |
| message | string | 否 | 否 | 应用安装结果消息。 |

## Result

应用安装结果码。

****系统能力：**** SystemCapability.Customization.EnterpriseDeviceManager

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SUCCESS | 0 | 应用安装成功。 |
| FAIL | -1 | 应用安装失败。 |

## EnterpriseAdminExtensionContext23+

type EnterpriseAdminExtensionContext = \_EnterpriseAdminExtensionContext.default

EnterpriseAdminExtensionContext是[EnterpriseAdminExtensionAbility](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability)的上下文环境，继承自[ExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext)。

****系统能力****: SystemCapability.Customization.EnterpriseDeviceManager

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_EnterpriseAdminExtensionContext.default](/ref/system-basicfun-api/mdm-api/mdm-arkts/mdm-arkts-application/s-apis-application-enterpriseadminextensioncontext/s-apis-application-enterpriseadminextensioncontext) | EnterpriseAdminExtensionAbility组件的上下文。 |
