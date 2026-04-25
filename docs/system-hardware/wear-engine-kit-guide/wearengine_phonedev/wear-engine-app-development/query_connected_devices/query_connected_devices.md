---
title: "已连接穿戴设备查询"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/query_connected_devices
kit: system/hardware
last_updated: "2026-04-22"
---

# 已连接穿戴设备查询

![](../../../../../images/eb1ec29f/note_3.0-zh-cn.png) 

该接口的调用前，需要在开发者联盟申请设备基础信息权限（具体请参考[申请接入Wear Engine服务](/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply)）。

Wear Engine提供查询用户已连接的穿戴设备列表（即支持Wear Engine能力且与手机侧运动健康App处于连接状态的穿戴设备）的接口。

建议开发者在使用Wear Engine其他API接口前先实现该接口功能。

1. 应用调用[wearEngine](/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api)中的[getDeviceClient](/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetdeviceclient)方法，获取[DeviceClient](/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#deviceclient)对象。
2. 调用[getConnectedDevices](/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#getconnecteddevices)方法，查询用户已连接的穿戴设备列表。

   ```
   // 在使用Wear Engine服务前，请导入WearEngine与相关模块
   import { wearEngine } from '@kit.WearEngine';
   import { BusinessError } from '@kit.BasicServicesKit';

   // 步骤1：获取DeviceClient对象
   // this.getUIContext().getHostContext() 表示应用上下文Context对象
   let deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());
   // 创建一个设备列表用于存储返回的设备
   let deviceList: wearEngine.Device[] = [];

   // 步骤2：调用getConnectedDevices方法，查询用户是否有已连接的穿戴设备
   deviceClient.getConnectedDevices().then(devices => {
     // 处理返回的设备列表
     deviceList = devices ;
     console.info(`Succeeded in getting deviceList, deviceList number is ${deviceList.length}`);
   }).catch((error: BusinessError) => {
     // 处理调用失败时捕获到的异常
     console.error(`Failed to get deviceList. Code is ${error.code}, message is ${error.message}`);
   })
   ```
