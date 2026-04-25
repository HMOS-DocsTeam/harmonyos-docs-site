---
title: "@ohos.customization.customConfig (定制配置)"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-customization-customconfig
kit: 系统
last_updated: "2026-04-22"
slug: js-apis-customization-customconfig
---

# @ohos.customization.customConfig (定制配置)

本模块接口为应用提供定制配置的获取能力，如渠道号等。

![](../../../../../images/a4050174/note_3.0-zh-cn.png) 

本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { customConfig } from '@kit.BasicServicesKit';
```

## customConfig.getChannelId

getChannelId(): string

获取应用的预装渠道号。

****元服务API：**** 从API version 13开始，该接口支持在元服务中使用。

\*\*系统能力：\*\*SystemCapability.Customization.CustomConfig

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 渠道号 |

****示例：****

```
import { customConfig } from '@kit.BasicServicesKit';

let channelId: string = customConfig.getChannelId();
console.info('app channelId is ' + channelId);
```
