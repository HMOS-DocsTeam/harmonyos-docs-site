---
title: "VoIPExtensionAbility（应用内通话消息扩展Ability）"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-voip-ability
kit: 应用服务
last_updated: "2026-04-22"
slug: push-voip-ability
---

# VoIPExtensionAbility（应用内通话消息扩展Ability）

VoIPExtensionAbility为应用内通话消息扩展Ability，继承自[UIExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability)，增加获取场景化消息数据的回调。有如下约束：

- VoIPExtensionAbility为独立子进程，轻量级。
- 不允许调用卡片API。

****模型约束：**** 此接口仅可在Stage模型下使用。

****系统能力：**** SystemCapability.Push.PushService

****起始版本：**** 4.1.0(11)

## 导入模块

```
import { VoIPExtensionAbility } from '@kit.PushKit';
```

## 属性

****模型约束：**** 属性仅可在Stage模型下使用。

****系统能力：**** SystemCapability.Push.PushService

****设备行为差异：**** 对于6.1.0(23)以前版本，该属性在Phone、Tablet中可正常使用，在其他设备类型中无效果。对于6.1.0(23)及之后版本，该属性在Phone、Tablet、PC/2in1中可正常使用，在其他设备类型中无效果。

****起始版本：**** 4.1.0(11)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [VoIPExtensionContext](/ref/push-api/push-arkts/push-voip-context/push-voip-context#voipextensioncontext) | 否 | 否 | VoIPExtensionAbility的上下文环境，继承自[UIExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext)。 |

## onReceiveMessage

onReceiveMessage(voipInfo: pushCommon.VoIPInfo): void

应用继承VoIPExtensionAbility后接收应用内通话消息的接口。

****模型约束：**** 此接口仅可在Stage模型下使用。

****系统能力：**** SystemCapability.Push.PushService

****设备行为差异：**** 对于6.1.0(23)以前版本，该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。对于6.1.0(23)及之后版本，该接口在Phone、Tablet、PC/2in1中可正常调用，在其他设备类型中无效果。

****起始版本：**** 4.1.0(11)

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| voipInfo | pushCommon.[VoIPInfo](/ref/push-api/push-arkts/push-pushcommon/push-pushcommon#voipinfo) | 是 | 网络音视频通话消息数据。 |

****示例：****

```
import { VoIPExtensionAbility, pushCommon } from '@kit.PushKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class VoipExtAbility extends VoIPExtensionAbility {
  // voipInfo为场景化消息数据
  onReceiveMessage(voipInfo: pushCommon.VoIPInfo): void {
    hilog.info(0x0000, 'testTag', 'TestExtAbility onReceiveMessage');
  }
}
```
