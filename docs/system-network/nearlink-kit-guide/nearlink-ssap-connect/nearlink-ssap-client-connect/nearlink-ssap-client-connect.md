---
title: "SSAP客户端"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-ssap-client-connect
kit: system/network
last_updated: "2026-04-22"
---

# SSAP客户端

![](../../../../images/b4953e34/note_3.0-zh-cn.png) 

提供SSAP（SparkLink Service Access Protocol）客户端相关的连接、数据传输和服务操作功能。

## 场景介绍

提供设备作为客户端的能力，客户端可连接服务端进行数据传输。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [createClient](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#createclient)(address: string): Client | 创建ssap客户端实例。 |
| [connect](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#connect)(): Promise&lt;void&gt; | 向服务端发起连接。 |
| [getServices](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#getservices)(): Promise&lt;Array&lt;Service&gt;&gt;; | 获取服务端支持的服务列表。 |
| [readProperty](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#readproperty)(property: Property): Promise&lt;Property&gt; | 读取服务端property。 |
| [writeProperty](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#writeproperty)(property: Property, writeType: PropertyWriteType): Promise&lt;void&gt; | 写入服务端property。 |
| [setPropertyNotification](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#setpropertynotification)(property: Property, enable: boolean): Promise&lt;void&gt; | 启用/禁用某个property变化的通知。 |
| [on](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#on-propertychange)(type: 'propertyChange', callback: Callback&lt;Property&gt;): void | 订阅property变化事件。 |
| [on](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#on-connectionstatechange)(type: 'connectionStateChange', callback: Callback&lt;ConnectionChangeState&gt;): void | 订阅连接状态变化事件。 |

## 开发步骤

1. 导入相关模块。

   ```
   import { ssap } from '@kit.NearLinkKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 创建ssap客户端实例。其中参数addr是通过[扫描流程](/system-network/nearlink-kit-guide/nearlink-start-scan)获取的远端设备地址。

   ```
   let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址
   let client: ssap.Client;
   try {
     client = ssap.createClient(addr);
     console.info('client: ' + JSON.stringify(client));
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
3. 订阅连接状态变化事件。其中client对象在步骤2创建，后续步骤中使用的client对象也是一样，不再赘述。

   ```
   let onReceiveConnectionChangeEvent:(data: ssap.ConnectionChangeState) => void = (data: ssap.ConnectionChangeState) => {
     console.info('data:'+ JSON.stringify(data));
   }
   try {
     client.on('connectionStateChange', onReceiveConnectionChangeEvent);
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
4. 订阅Property变化事件。

   ```
   let onReceivePropertyChangeEvent:(data: ssap.Property) => void = (data: ssap.Property) => {
     console.info('data:'+ JSON.stringify(data));
   }
   try {
     client.on('propertyChange', onReceivePropertyChangeEvent);
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
5. 向服务端发起连接。连接成功后会收到步骤3中订阅的连接状态变化的回调，之后可以进行数据交互。

   ```
   try {
     client.connect().then(() => {
       console.info("connect success");
     }).catch ((err: BusinessError) => {
       console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
     });
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
6. 获取服务端支持的服务列表。

   ```
   try {
     client.getServices().then((result: Array<ssap.Service>) => {
       console.info('getServices successfully:' + JSON.stringify(result));
     }).catch ((err: BusinessError) => {
       console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
     });
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
7. 读取指定服务的Property值，参数property中的[serviceUuid](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property)以及[propertyUuid](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property)通过步骤6获取。

   ```
   try {
     // 创建property,实际开发时需要通过getServices接口从服务端获取
     let arrayBufferC = new ArrayBuffer(1);
     let properV = new Uint8Array(arrayBufferC);
     properV[0] = 1;
     let property: ssap.Property = {
       serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
       propertyUuid: '37bea880-fc70-11ea-b720-000000001234',
       value: arrayBufferC
     };
     client.readProperty(property).then((result: ssap.Property) => {
       console.info('readProperty successfully:' + JSON.stringify(result));
     }).catch ((err: BusinessError) => {
       console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
     });
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
8. 写入指定服务的Property值，参数property中的[serviceUuid](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property)以及[propertyUuid](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property)通过步骤6获取。

   ```
   try {
     let arrayBufferC = new ArrayBuffer(1);
     // 期望写入的property值
     let properV = new Uint8Array(arrayBufferC);
     properV[0] = 1;
     let property: ssap.Property = {
       serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
       propertyUuid: '37bea880-fc70-11ea-b720-000000001234',
       value: arrayBufferC
     };
     client.writeProperty(property, ssap.PropertyWriteType.WRITE_NO_RESPONSE).then(() => {
       console.info('writeProperty success');
     }).catch ((err: BusinessError) => {
       console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
     });
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
9. 设置支持Property变化通知，参数property中的[serviceUuid](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property)以及[propertyUuid](/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property)通过步骤6获取。

   之后如果服务端Property值发生变化，则客户端通过步骤4订阅的事件接收新数据。

   ```
   try {
     let arrayBufferC = new ArrayBuffer(1);
     let properV = new Uint8Array(arrayBufferC);
     properV[0] = 1;
     let property: ssap.Property = {
       serviceUuid:'37bea880-fc70-11ea-b720-000000004386',
       propertyUuid: '37bea880-fc70-11ea-b720-000000001234',
       value: arrayBufferC
     };
     client.setPropertyNotification(property, true).then(() => {
       console.info('setPropertyNotification success');
     }).catch ((err: BusinessError) => {
       console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
     });
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```

## 示例代码

SSAP客户端功能可参考[星闪示例代码](https://gitcode.com/harmonyos_samples/nearlink-kit_-sample-code)，entry/src/main/ets/pages/SsapClientPage.ets中的实现方法。
