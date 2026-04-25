---
title: "@ohos.app.appstartup.StartupListener (启动框架任务监听器)"
sidebar_position: 40
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-appstartup-startuplistener
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-app-appstartup-startuplistener
---

# @ohos.app.appstartup.StartupListener (启动框架任务监听器)

本模块提供[应用启动框架](/ability-kit/stage-model-development/stage-model-application-components/app-startup)任务监听器的定义。

![](../../../../images/44792e6b/note_3.0-zh-cn.png) 

本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

## 导入模块

```
import { StartupListener } from '@kit.AbilityKit';
```

## StartupListener.onCompleted

onCompleted?(error: BusinessError&lt;void&gt;): void

在所有启动任务完成时调用。

****系统能力****：SystemCapability.Ability.AppStartup

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| error | [BusinessError&lt;void&gt;](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#businesserror) | 是 | 错误信息。 |

****示例：****

```
import { StartupConfig, StartupConfigEntry, StartupListener } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class MyStartupConfigEntry extends StartupConfigEntry {
  onConfig() {
    hilog.info(0x0000, 'testTag', `onConfig`);
    let onCompletedCallback = (error: BusinessError<void>) => {
      hilog.info(0x0000, 'testTag', `onCompletedCallback`);
      if (error) {
        hilog.error(0x0000, 'testTag', 'onCompletedCallback: %{public}d, message: %{public}s', error.code,
          error.message);
      } else {
        hilog.info(0x0000, 'testTag', `onCompletedCallback: success.`);
      }
    };
    let startupListener: StartupListener = {
      'onCompleted': onCompletedCallback
    };
    let config: StartupConfig = {
      'timeoutMs': 10000,
      'startupListener': startupListener
    };
    return config;
  }
}
```
