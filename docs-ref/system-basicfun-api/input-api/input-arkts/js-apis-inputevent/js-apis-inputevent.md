---
title: "@ohos.multimodalInput.inputEvent (输入事件)"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputevent
kit: 系统
last_updated: "2026-04-22"
slug: js-apis-inputevent
---

# @ohos.multimodalInput.inputEvent (输入事件)

设备上报的基本事件。

![](../../../../images/060a6d9e/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { InputEvent } from '@kit.InputKit';
```

## InputEvent

输入事件。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.MultimodalInput.Input.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id | number | 否 | 否 | 事件ID。 |
| deviceId | number | 否 | 否 | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |
| actionTime | number | 否 | 否 | 上报输入事件的时间。 |
| screenId | number | 否 | 否 | 目标屏幕ID。 |
| windowId | number | 否 | 否 | 目标窗口ID。 |
