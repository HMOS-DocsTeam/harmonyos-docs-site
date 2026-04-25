---
title: "@ohos.hiviewdfx.FaultLogExtensionContext (故障延迟通知上下文)"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-faultlogextensioncontext
kit: 系统
last_updated: "2026-04-22"
slug: js-apis-hiviewdfx-faultlogextensioncontext
---

# @ohos.hiviewdfx.FaultLogExtensionContext (故障延迟通知上下文)

FaultLogExtensionContext是[FaultLogExtensionAbility](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability)的上下文环境，继承自[ExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext)。

FaultLogExtensionContext模块提供访问[FaultLogExtensionAbility](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability)的资源的能力，对于扩展的ExtensionAbility，可直接将ExtensionContext作为上下文环境，或者定义一个继承自ExtensionContext的类型作为上下文环境。

![](../../../../images/30faf67a/note_3.0-zh-cn.png) 

- 本模块接口从API version 21开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。

## 使用说明

通过FaultLogExtensionAbility子类实例来获取。

```
import { FaultLogExtensionAbility } from '@kit.PerformanceAnalysisKit';

export default class MyFaultLogExtension extends FaultLogExtensionAbility {
    onFaultReportReady() {
        let context = this.context; // 获取FaultLogExtensionContext
        console.info('cache dir is ' + context.cacheDir); // 访问context中的成员
    }
}
```

## FaultLogExtensionContext

FaultLogExtensionContext是[FaultLogExtensionAbility](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability)的上下文环境。

****系统能力****：SystemCapability.HiviewDFX.Hiview.FaultLogger
