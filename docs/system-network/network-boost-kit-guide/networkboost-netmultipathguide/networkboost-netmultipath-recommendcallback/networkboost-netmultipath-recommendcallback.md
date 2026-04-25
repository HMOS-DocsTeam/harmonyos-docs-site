---
title: "多网建议监听"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-netmultipath-recommendcallback
kit: system/network
last_updated: "2026-04-22"
---

# 多网建议监听

## 场景介绍

系统感知到应用可能需要使用多网络加速的场景时，如弱网、网络切换等特定场景，会给出建议。应用通过监听多网络加速的建议，决策发起多网络加速的请求。

## 接口说明

具体API说明详见[接口文档](/ref/system-network-api/network-boost-api/networkboost-arkts/networkboost-nethandover/networkboost-nethandover#nethandoveronmultipathrecommendation)。

| 接口名 | 描述 |
| --- | --- |
| on(type: 'multiPathRecommendation', callback: Callback&lt;MultiPathRecommendationInfo&gt;): void | 订阅多网建议信息变化。 |
| off(type: 'multiPathRecommendation', callback?: Callback&lt;MultiPathRecommendationInfo&gt;): void | 取消订阅多网建议信息变化。 |

## 开发步骤

1. 导入Network Boost Kit模块。

   ```
   import { netHandover } from '@kit.NetworkBoostKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 通过订阅的方式监听系统多网建议变化信息。

   ```
   try {
     netHandover.on('multiPathRecommendation', (data: netHandover.MultiPathRecommendationInfo) => {
       // 回调信息处理
       console.info("on multiPathRecommendation: " + JSON.stringify(data));
     });
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
3. 当应用业务流程结束，取消订阅系统多网建议变化信息。

   ```
   try {
     netHandover.off('multiPathRecommendation');
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
