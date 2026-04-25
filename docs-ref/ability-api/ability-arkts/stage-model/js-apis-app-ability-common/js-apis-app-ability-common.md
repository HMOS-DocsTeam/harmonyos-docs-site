---
title: "@ohos.app.ability.common (Ability公共模块)"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-common
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-app-ability-common
---

# @ohos.app.ability.common (Ability公共模块)

本模块提供Ability Kit中常用公共能力的纯类型定义，包含各类上下文对象、回调接口和数据结构。本模块仅导出类型声明，不包含具体实现逻辑或可执行代码。

![](../../../../images/df689d72/note_3.0-zh-cn.png) 

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { common } from '@kit.AbilityKit';
```

## UIAbilityContext

type UIAbilityContext = \_UIAbilityContext.default

[UIAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability)组件上下文，继承自Context。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_UIAbilityContext.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext) | UIAbilityContext组件上下文。 |

## AbilityStageContext

type AbilityStageContext = \_AbilityStageContext.default

[AbilityStage](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage)组件上下文，继承自Context。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_AbilityStageContext.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagecontext/js-apis-inner-application-abilitystagecontext) | AbilityStage组件上下文。 |

## ApplicationContext

type ApplicationContext = \_ApplicationContext.default

应用上下文，继承自Context。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_ApplicationContext.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext) | 应用上下文。 |

## BaseContext

type BaseContext = \_BaseContext.default

所有Context类型的父类。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_BaseContext.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-basecontext/js-apis-inner-application-basecontext) | 所有Context的父类。 |

## Context

type Context = \_Context.default

[Stage模型](/ability-kit/ability-terminology#stage模型)的上下文基类。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_Context.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context) | Stage模型的上下文基类。 |

## ExtensionContext

type ExtensionContext = \_ExtensionContext.default

[ExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability)组件上下文，继承自Context。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_ExtensionContext.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext) | ExtensionAbility组件上下文。 |

## FormExtensionContext

type FormExtensionContext = \_FormExtensionContext.default

[FormExtensionAbility](/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability)组件上下文，继承自[ExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext)。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_FormExtensionContext.default](/ref/form-api/form-arkts/form-arkts-application/js-apis-inner-application-formextensioncontext/js-apis-inner-application-formextensioncontext) | FormExtensionAbility组件上下文。 |

## VpnExtensionContext11+

type VpnExtensionContext = \_VpnExtensionContext.default

[VpnExtensionAbility](/ref/system-network-api/network-api/network-api-arkts/js-apis-vpnextensionability/js-apis-vpnextensionability)组件上下文，继承自Context。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_VpnExtensionContext.default](/ref/system-network-api/network-api/network-api-arkts/js-apis-inner-application-vpnextensioncontext/js-apis-inner-application-vpnextensioncontext) | VpnExtensionAbility组件上下文。 |

## EventHub

type EventHub = \_EventHub.default

EventHub是系统提供的基于发布-订阅模式实现的事件通信机制。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_EventHub.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub) | 系统提供的基于发布-订阅模式实现的事件通信机制。 |

## PacMap

type PacMap = \_PacMap

存储基础数据类型的容器。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

| 类型 | 说明 |
| --- | --- |
| [\_PacMap](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-dataabilityhelper/js-apis-inner-ability-dataabilityhelper#pacmap) | 存储基础数据类型的容器。 |

## AbilityResult

type AbilityResult = \_AbilityResult

定义Ability被拉起并退出后返回的结果码和数据。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_AbilityResult](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-abilityresult/js-apis-inner-ability-abilityresult) | 定义Ability被拉起并退出后返回的结果码和数据。 |

## AbilityStartCallback11+

type AbilityStartCallback = \_AbilityStartCallback

定义了拉起UIExtensionAbility的回调结果，通常作为[UIAbilityContext.startAbilityByType](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybytype11)/[UIExtensionContext.startAbilityByType](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession#startabilitybytype11)的入参传入。

****元服务API****：从API version 11开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_AbilityStartCallback](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystartcallback/js-apis-inner-application-abilitystartcallback) | 定义拉起UIExtensionAbility的回调结果。 |

## ConnectOptions

type ConnectOptions = \_ConnectOptions

在连接指定的后台服务时作为入参，用于接收与后台服务的连接状态。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_ConnectOptions](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-connectoptions/js-apis-inner-ability-connectoptions) | 在连接指定的后台服务时作为入参，用于接收与后台服务的连接状态。 |

## UIExtensionContext10+

type UIExtensionContext = \_UIExtensionContext.default

[UIExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability)组件上下文，继承自Context。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_UIExtensionContext.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext) | UIExtensionAbility组件上下文。 |

## EmbeddableUIAbilityContext12+

type EmbeddableUIAbilityContext = \_EmbeddableUIAbilityContext.default

[EmbeddableUIAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddableuiability/js-apis-app-ability-embeddableuiability)组件上下文，继承自Context。

****元服务API****：从API version 12开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_EmbeddableUIAbilityContext.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/x-apis-inner-application-embeddableuiabilitycontext/x-apis-inner-application-embeddableuiabilitycontext) | EmbeddableUIAbility组件上下文。 |

## PhotoEditorExtensionContext12+

type PhotoEditorExtensionContext = \_PhotoEditorExtensionContext.default

[PhotoEditorExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability/js-apis-app-ability-photoeditorextensionability)组件上下文，继承自Context。

****系统能力****：SystemCapability.Ability.AppExtension.PhotoEditorExtension

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_PhotoEditorExtensionContext.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-app-ability-photoeditorextensioncontext/js-apis-app-ability-photoeditorextensioncontext) | PhotoEditorExtensionAbility组件上下文。 |

## UIServiceProxy14+

type UIServiceProxy = \_UIServiceProxy.default

UIServiceProxy提供了与UIServiceExtensionAbility服务端数据通信的能力。UIServiceExtensionAbility是一类特殊的ExtensionAbility组件，这类组件由系统提供，通常用于提供浮窗组件相关扩展能力。

****元服务API****：从API version 14开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_UIServiceProxy.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiserviceproxy/js-apis-inner-application-uiserviceproxy) | 提供与UIServiceExtensionAbility服务端数据通信的能力。 |

## UIServiceExtensionConnectCallback14+

type UIServiceExtensionConnectCallback = \_UIServiceExtensionConnectCallback.default

在连接指定的UIServiceExtensionAbility服务时作为入参，用于提供UIServiceExtensionAbility连接回调数据能力。

****元服务API****：从API version 14开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_UIServiceExtensionConnectCallback.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/nner-application-uiserviceextensionconnectcallback/nner-application-uiserviceextensionconnectcallback) | 提供UIServiceExtensionAbility连接回调数据能力。 |

## AppServiceExtensionContext20+

type AppServiceExtensionContext = \_AppServiceExtensionContext.default

[AppServiceExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability)组件上下文，继承自Context。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_AppServiceExtensionContext.default](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/x-apis-inner-application-appserviceextensioncontext/x-apis-inner-application-appserviceextensioncontext) | AppServiceExtensionAbility组件上下文。 |

## FormEditExtensionContext22+

type FormEditExtensionContext = \_FormEditExtensionContext.default

[FormEditExtensionAbility](/ref/form-api/form-arkts/js-apis-app-form-formeditextensionability/js-apis-app-form-formeditextensionability)组件上下文，继承自[UIExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext)。

****元服务API****：从API version 22开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.Form

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_FormEditExtensionContext.default](/ref/form-api/form-arkts/form-arkts-application/js-apis-inner-application-formeditextensioncontext/js-apis-inner-application-formeditextensioncontext) | FormEditExtensionAbility组件上下文。 |

## LiveFormExtensionContext22+

type LiveFormExtensionContext = \_LiveFormExtensionContext.default

[LiveFormExtensionAbility](/ref/form-api/form-arkts/js-apis-app-form-liveformextensionability/js-apis-app-form-liveformextensionability)组件上下文，继承自[ExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext)。

****元服务API****：从API version 22开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.Form

****模型约束****：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [\_LiveFormExtensionContext.default](/ref/form-api/form-arkts/form-arkts-application/js-apis-application-liveformextensioncontext/js-apis-application-liveformextensioncontext) | LiveFormExtensionAbility组件上下文。 |

****示例：****

```
import { common } from '@kit.AbilityKit';

let uiAbilityContext: common.UIAbilityContext;
let abilityStageContext: common.AbilityStageContext;
let applicationContext: common.ApplicationContext;
let baseContext: common.BaseContext;
let context: common.Context;
let uiExtensionContext: common.UIExtensionContext;
let extensionContext: common.ExtensionContext;
let formExtensionContext: common.FormExtensionContext;
let vpnExtensionContext: common.VpnExtensionContext;
let eventHub: common.EventHub;
let pacMap: common.PacMap;
let abilityResult: common.AbilityResult;
let abilityStartCallback: common.AbilityStartCallback;
let connectOptions: common.ConnectOptions;
let embeddableUIAbilityContext: common.EmbeddableUIAbilityContext;
let photoEditorExtensionContext: common.PhotoEditorExtensionContext;
let uiServiceProxy : common.UIServiceProxy;
let uiServiceExtensionConnectCallback : common.UIServiceExtensionConnectCallback;
let appServiceExtensionContext : common.AppServiceExtensionContext;
let formEditExtensionContext : common.FormEditExtensionContext;
let liveFormExtensionContext : common.LiveFormExtensionContext;
```
