---
title: "DriverExtensionContext"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-driverextensioncontext
kit: 系统
last_updated: "2026-04-22"
slug: js-apis-inner-application-driverextensioncontext
---

# DriverExtensionContext

DriverExtensionContext模块是DriverExtensionAbility的上下文环境，继承自ExtensionContext。

DriverExtensionContext模块提供DriverExtensionAbility实现中需要主动发起的操作。

![](../../../../../images/a41d58b6/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。

## 导入模块

```
import { common } from '@kit.AbilityKit';
```

## 使用说明

在使用DriverExtensionContext的功能前，需要通过DriverExtensionAbility子类实例获取。

```
  import { DriverExtensionAbility, DriverExtensionContext } from '@kit.DriverDevelopmentKit';

  let context : DriverExtensionContext | undefined;
  class EntryAbility extends DriverExtensionAbility {
    onInit() {
      context = this.context; // 获取DriverExtensionContext
    }
  }
```

## DriverExtensionContext.updateDriverState

updateDriverState(): void

驱动状态上报。预留接口，暂不提供具体功能。

****系统能力****：SystemCapability.Driver.ExternalDevice

****示例：****

```
// 当前代码实现依赖上一节代码实现
if (context != null) {
  context.updateDriverState();
}
```
