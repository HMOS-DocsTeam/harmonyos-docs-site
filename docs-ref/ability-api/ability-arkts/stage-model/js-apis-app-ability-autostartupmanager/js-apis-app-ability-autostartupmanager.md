---
title: "@ohos.app.ability.autoStartupManager (开机自启管理能力)"
sidebar_position: 43
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-autostartupmanager
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-app-ability-autostartupmanager
---

# @ohos.app.ability.autoStartupManager (开机自启管理能力)

autoStartupManager模块提供获取自身应用的开机自启状态。

![](../../../../images/e61dfe5d/note_3.0-zh-cn.png) 

本模块首批接口从API version 21开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

## 导入模块

```
import { autoStartupManager } from '@kit.AbilityKit';
```

## autoStartupManager.getAutoStartupStatusForSelf

getAutoStartupStatusForSelf(): Promise&lt;boolean&gt;

获取当前应用的开机自启动状态。使用Promise异步回调。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****设备行为差异****：该接口仅在Phone、PC/2in1、Tablet和Wearable设备中可正常调用，在其他设备中返回801错误码。

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | Promise对象。返回true表示当前应用已被用户设置为开机自启动，false表示当前应用未被用户设置为开机自启动。 |

****错误码****：

以下错误码详细介绍请参考[通用错误码](/ref/errorcode-universal/errorcode-universal)和[元能力子系统错误码](/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed; 2.System service failed to communicate with dependency module. |

****示例****：

```
import { autoStartupManager, UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onForeground() {
    try {
      autoStartupManager.getAutoStartupStatusForSelf().then((isAutoStartup: boolean) => {
        console.info(`getAutoStartupStatusForSelf success, isAutoStartup: ${JSON.stringify(isAutoStartup)}.`);
      }).catch((err: BusinessError) => {
        console.error(`getAutoStartupStatusForSelf failed, err code: ${err.code}, err msg: ${err.message}.`);
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let msg = (err as BusinessError).message;
      console.error(`getAutoStartupStatusForSelf failed, err code: ${code}, err msg: ${msg}.`);
    }
  }
}
```
