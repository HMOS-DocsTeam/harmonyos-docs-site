---
title: "oh_bluetooth.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-bluetooth-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-bluetooth-h
---

# oh\_bluetooth.h

## 概述

定义查询蓝牙开关状态的接口。

****引用文件：**** &lt;ConnectivityKit/bluetooth/oh\_bluetooth.h&gt;

****库：**** libbluetooth\_ndk.so

****系统能力：**** SystemCapability.Communication.Bluetooth.Core

****起始版本：**** 13

****相关模块：**** [Bluetooth](/ref/system-network-api/connectivity-api/connectivity-c/connectivity-module/capi-bluetooth/capi-bluetooth)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [Bluetooth\_SwitchState](#bluetooth_switchstate) | Bluetooth\_SwitchState | 定义蓝牙开关状态的枚举值。 |
| [Bluetooth\_ResultCode](#bluetooth_resultcode) | Bluetooth\_ResultCode | 定义蓝牙返回值。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [Bluetooth\_ResultCode OH\_Bluetooth\_GetBluetoothSwitchState(Bluetooth\_SwitchState \*state)](#oh_bluetooth_getbluetoothswitchstate) | 获取蓝牙开关状态。 |

## 枚举类型说明

### Bluetooth\_SwitchState

```
enum Bluetooth_SwitchState
```

****描述****

定义蓝牙开关状态的枚举值。

****起始版本：**** 13

| 枚举项 | 描述 |
| --- | --- |
| BLUETOOTH\_STATE\_OFF = 0 | 表示蓝牙关闭。 |
| BLUETOOTH\_STATE\_TURNING\_ON = 1 | 表示蓝牙打开中。 |
| BLUETOOTH\_STATE\_ON = 2 | 表示蓝牙已打开，使用就绪。 |
| BLUETOOTH\_STATE\_TURNING\_OFF = 3 | 表示蓝牙关闭中。 |
| BLUETOOTH\_STATE\_BLE\_TURNING\_ON = 4 | 表示蓝牙LE only模式打开中。 |
| BLUETOOTH\_STATE\_BLE\_ON = 5 | 表示蓝牙处于LE only模式。 |
| BLUETOOTH\_STATE\_BLE\_TURNING\_OFF = 6 | 表示蓝牙LE only模式关闭中。 |

### Bluetooth\_ResultCode

```
enum Bluetooth_ResultCode
```

****描述****

定义蓝牙返回值。

****起始版本：**** 13

| 枚举项 | 描述 |
| --- | --- |
| BLUETOOTH\_SUCCESS = 0 | 操作成功。 |
| BLUETOOTH\_INVALID\_PARAM = 401 | 参数错误。可能原因：1. 输入参数为空指针；2. 参数数值超出定义范围。 |

## 函数说明

### OH\_Bluetooth\_GetBluetoothSwitchState()

```
Bluetooth_ResultCode OH_Bluetooth_GetBluetoothSwitchState(Bluetooth_SwitchState *state)
```

****描述****

获取蓝牙开关状态。

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [Bluetooth\_SwitchState](/ref/system-network-api/connectivity-api/connectivity-c/connectivity-headerfile/capi-oh-bluetooth-h/capi-oh-bluetooth-h#bluetooth_switchstate) \*state | - 指向接收蓝牙开关状态的枚举值的指针。需要传入非空指针，否则将返回错误码。详细定义请参考[Bluetooth\_SwitchState](/ref/system-network-api/connectivity-api/connectivity-c/connectivity-headerfile/capi-oh-bluetooth-h/capi-oh-bluetooth-h#bluetooth_switchstate)。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [Bluetooth\_ResultCode](/ref/system-network-api/connectivity-api/connectivity-c/connectivity-headerfile/capi-oh-bluetooth-h/capi-oh-bluetooth-h#bluetooth_resultcode) | 蓝牙开关状态函数返回值。  详细定义请参考[Bluetooth\_ResultCode](/ref/system-network-api/connectivity-api/connectivity-c/connectivity-headerfile/capi-oh-bluetooth-h/capi-oh-bluetooth-h#bluetooth_resultcode)。  [BLUETOOTH\_SUCCESS](/ref/system-network-api/connectivity-api/connectivity-c/connectivity-headerfile/capi-oh-bluetooth-h/capi-oh-bluetooth-h#bluetooth_resultcode) 成功获取蓝牙开关状态。  [BLUETOOTH\_INVALID\_PARAM](/ref/system-network-api/connectivity-api/connectivity-c/connectivity-headerfile/capi-oh-bluetooth-h/capi-oh-bluetooth-h#bluetooth_resultcode) 输入参数为空指针。 |
