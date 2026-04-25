---
title: "Input_DeviceListener"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input-input-devicelistener
kit: 系统
last_updated: "2026-04-22"
slug: capi-input-input-devicelistener
---

# Input\_DeviceListener

```
typedef struct Input_DeviceListener {...} Input_DeviceListener
```

## 概述

定义一个结构体用于监听设备热插拔。

****起始版本：**** 13

****相关模块：**** [input](/ref/system-basicfun-api/input-api/input-c/input-module/capi-input/capi-input)

****所在头文件：**** [oh\_input\_manager.h](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Input\_DeviceAddedCallback](#input_deviceaddedcallback) deviceAddedCallback | 定义一个回调函数，用于接收设备热插事件。 |
| [Input\_DeviceRemovedCallback](#input_deviceremovedcallback) deviceRemovedCallback | 定义一个回调函数，用于接收设备热拔事件。 |

### 成员函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (\*Input\_DeviceAddedCallback)(int32\_t deviceId)](#input_deviceaddedcallback) | Input\_DeviceAddedCallback() | 回调函数，用于接收输入设备的热插事件。 |
| [typedef void (\*Input\_DeviceRemovedCallback)(int32\_t deviceId)](#input_deviceremovedcallback) | Input\_DeviceRemovedCallback() | 回调函数，用于接收输入设备的热拔事件。 |

## 成员函数说明

### Input\_DeviceAddedCallback()

```
typedef void (*Input_DeviceAddedCallback)(int32_t deviceId)
```

****描述****

回调函数，用于接收输入设备的热插事件。

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| int32\_t deviceId | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |

### Input\_DeviceRemovedCallback()

```
typedef void (*Input_DeviceRemovedCallback)(int32_t deviceId)
```

****描述****

回调函数，用于接收输入设备的热拔事件。

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| int32\_t deviceId | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |
