---
title: "game_device_event.h"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device-event
kit: 应用服务
last_updated: "2026-04-22"
slug: capi-game-device-event
---

# game\_device\_event.h

## 概述

定义游戏设备事件的接口。

****库：**** libohgame\_controller.z.so

****系统能力：**** SystemCapability.Game.GameController

****起始版本：**** 21

****相关模块：****[GameController](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller)

## 汇总

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef enum [GameDevice\_StatusChangedType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_statuschangedtype) [GameDevice\_StatusChangedType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_statuschangedtype) | 此枚举定义设备的状态变化类型。 |
| typedef enum [GameDevice\_DeviceType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_devicetype) [GameDevice\_DeviceType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_devicetype) | 此枚举定义设备类型。 |
| typedef struct [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) | 定义设备信息。 |
| typedef struct [GameDevice\_DeviceEvent](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceevent) [GameDevice\_DeviceEvent](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceevent) | 定义设备状态变化事件。 |
| typedef void(\*[GameDevice\_DeviceMonitorCallback](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_devicemonitorcallback)) (const struct [GameDevice\_DeviceEvent](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceevent) \*deviceEvent) | 定义[OH\_GameDevice\_RegisterDeviceMonitor](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_registerdevicemonitor)中使用的回调函数。当设备上线或下线时，该回调函数将被调用。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [GameDevice\_StatusChangedType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_statuschangedtype) {  OFFLINE = 0,  ONLINE = 1  } | 设备的状态变化类型。 |
| [GameDevice\_DeviceType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_devicetype) {  UNKNOWN = 0,  GAME\_PAD = 1  } | 设备类型。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DeviceEvent\_GetChangedType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_deviceevent_getchangedtype) (const struct [GameDevice\_DeviceEvent](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceevent) \*deviceEvent, [GameDevice\_StatusChangedType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_statuschangedtype) \*statusChangedType) | 从设备状态变化事件中获取状态变化类型。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DeviceEvent\_GetDeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_deviceevent_getdeviceinfo) (const struct [GameDevice\_DeviceEvent](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceevent) \*deviceEvent, [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) \*\*deviceInfo) | 从设备状态变化事件中获取设备信息。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DestroyDeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_destroydeviceinfo) ([GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) \*\*deviceInfo) | 当[GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo)实例不再使用，销毁该实例。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DeviceInfo\_GetDeviceId](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_deviceinfo_getdeviceid) (const struct [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) \*deviceInfo, char \*\*deviceId) | 从设备信息[GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo)中获取设备ID。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DeviceInfo\_GetName](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_deviceinfo_getname) (const struct [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) \*deviceInfo, char \*\*name) | 从设备信息[GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo)中获取设备名称。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DeviceInfo\_GetProduct](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_deviceinfo_getproduct) (const struct [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) \*deviceInfo, int32\_t \*product) | 从设备信息[GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo)中获取产品信息。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DeviceInfo\_GetVersion](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_deviceinfo_getversion) (const struct [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) \*deviceInfo, int32\_t \*version) | 从设备信息[GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo)中获取版本信息。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DeviceInfo\_GetPhysicalAddress](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_deviceinfo_getphysicaladdress) (const struct [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) \*deviceInfo, char \*\*physicalAddress) | 从设备信息[GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo)中获取物理地址。 |
| [GameController\_ErrorCode](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode) [OH\_GameDevice\_DeviceInfo\_GetDeviceType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_deviceinfo_getdevicetype) (const struct [GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo) \*deviceInfo, [GameDevice\_DeviceType](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_devicetype) \*deviceType) | 从设备信息[GameDevice\_DeviceInfo](/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo)中获取设备类型。 |
