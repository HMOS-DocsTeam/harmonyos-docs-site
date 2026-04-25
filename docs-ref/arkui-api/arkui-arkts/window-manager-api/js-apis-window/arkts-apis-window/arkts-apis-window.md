---
title: "模块描述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-apis-window
---

# 模块描述

提供管理窗口的一些基础能力，包括对当前窗口的创建、销毁、各属性设置，以及对各窗口间的管理调度。

该模块提供以下窗口相关的常用功能：

- [Window](/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window)：当前窗口实例，窗口管理器管理的基本单元。
- [WindowStage](/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage)：窗口管理器。管理各个基本窗口单元。

![](../../../../../images/27bf9192/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 针对系统能力SystemCapability.Window.SessionManager，请先使用[canIUse()](/ref/common-basic-arkts/js-apis-syscap/js-apis-syscap#caniuse)接口判断当前设备是否支持此syscap及对应接口。

## 导入模块

```
import { window } from '@kit.ArkUI';
```
