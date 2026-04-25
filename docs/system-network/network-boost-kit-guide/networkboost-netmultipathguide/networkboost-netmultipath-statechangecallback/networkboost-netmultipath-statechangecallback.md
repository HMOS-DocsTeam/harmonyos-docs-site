---
title: "多网状态监听"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-netmultipath-statechangecallback
kit: system/network
last_updated: "2026-04-22"
---

# 多网状态监听

## 场景介绍

应用通过监听多网络状态的变化，感知可用网络的变化，从而选择在多网络上传输数据的策略。

## 接口说明

具体API说明详见[接口文档](/ref/system-network-api/network-boost-api/networkboost-arkts/networkboost-nethandover/networkboost-nethandover#nethandoveronmultipathstatechange)。

| 接口名 | 描述 |
| --- | --- |
| on(type: 'multiPathStateChange', callback: Callback&lt;MultiPathStateInfo&gt;): void | 订阅多网状态信息变化。 |
| off(type: 'multiPathStateChange', callback?: Callback&lt;MultiPathStateInfo&gt;): void | 取消订阅多网状态信息变化。 |

## 开发步骤

1. 导入Network Boost Kit模块。

   ```
   import { netHandover } from '@kit.NetworkBoostKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 通过订阅的方式监听多网状态变化信息。

   ```
   try {
     netHandover.on('multiPathStateChange', (data: netHandover.MultiPathStateInfo) => {
       // 回调信息处理
       console.info("on multiPathStateChange: " + JSON.stringify(data));
     });
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
3. 当应用业务流程结束和应用退出时，取消订阅多网状态变化信息。

   ```
   try {
     netHandover.off('multiPathStateChange');
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
