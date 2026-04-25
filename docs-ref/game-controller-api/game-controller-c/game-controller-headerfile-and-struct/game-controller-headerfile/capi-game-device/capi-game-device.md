---
title: "game_device.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device
kit: 应用服务
last_updated: "2026-04-22"
slug: capi-game-device
---

# game\_device.h

## 概述

定义游戏设备的接口。

****库：**** libohgame\_controller.z.so

****系统能力：**** SystemCapability.Game.GameController

****起始版本：**** 21

****相关模块：****[GameController](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller)

## 汇总

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [GameDevice\_AllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos) [GameDevice\_AllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos) | 定义[OH\_GameDevice\_GetAllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_getalldeviceinfos)接口的调用结果。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_GetAllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_getalldeviceinfos) ([GameDevice\_AllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos) \*\*allDeviceInfos) | 获取所有在线设备的信息。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_RegisterDeviceMonitor](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_registerdevicemonitor) ([GameDevice\_DeviceMonitorCallback](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_devicemonitorcallback) deviceMonitorCallback) | 注册设备状态变化事件的监听回调。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_UnregisterDeviceMonitor](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_unregisterdevicemonitor) (void) | 取消注册设备状态变化事件的监听回调。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DestroyAllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_destroyalldeviceinfos) ([GameDevice\_AllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos) \*\*allDeviceInfos) | 当[GameDevice\_AllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos)实例不再使用，销毁该实例。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_AllDeviceInfos\_GetCount](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_alldeviceinfos_getcount) (const struct [GameDevice\_AllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos) \*allDeviceInfos, int32\_t \*count) | 获取设备数量。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_AllDeviceInfos\_GetDeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_alldeviceinfos_getdeviceinfo) (const struct [GameDevice\_AllDeviceInfos](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos) \*allDeviceInfos, const int32\_t index, [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) \*\*deviceInfo) | 从所有设备信息中获取指定序号的设备信息。 |
