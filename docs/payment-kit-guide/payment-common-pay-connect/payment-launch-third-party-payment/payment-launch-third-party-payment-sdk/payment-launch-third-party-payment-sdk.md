---
title: "基于接口拉起方式"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-launch-third-party-payment-sdk
kit: app-services
last_updated: "2026-04-22"
---

# 基于接口拉起方式

![](../../../../images/7ce453d6/note_3.0-zh-cn.png) 

- 当前基于接口拉起方式拉起三方支付收银台支持的支付方式参见[PayMethod](/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#paymethod)。
- 基于接口拉起三方支付收银台起始版本为：6.0.0(20)。

1. 商户客户端根据Payment Kit接口返回的支付信息[PayResult](/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#payresult)(混合支付场景）/[PickerResult](/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#pickerresult)（纯外部支付场景），按照三方支付平台接入要求构建三方支付信息[payInfo](/ref/payment-api/payment-model/payment-model#payinfo)调用[ThirdPayClient.pay](/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#pay)接口拉起三方支付收银台。

   拉起三方支付收银台示例代码如下：

   ```
   import { BusinessError } from '@kit.BasicServicesKit';
   import { thirdPaymentService } from '@kit.PaymentKit';
   import { common } from '@kit.AbilityKit';

   export let thirdPayClient: thirdPaymentService.ThirdPayClient | undefined = undefined;

   @Entry
   @Component
   struct Index {
     context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
     thirdPaymentServicePayPromise() {
       thirdPayClient = new thirdPaymentService.ThirdPayClient(this.context, thirdPaymentService.PayMethod.WECHAT_PAY, "appid_123456");
       // use your own payInfo
       const payInfo = '{"xxx1":"***", "xxx2":"***", "token":"***"}';
       thirdPayClient.pay(payInfo).then(() => {
           // succeeded in paying
           console.info('succeeded in paying.');
         }).catch((error: BusinessError) => {
           // failed to pay
           console.error(`failed to pay, error.code: ${error.code}, error.message: ${error.message}`);
         });
     }

     build() {
       Column() {
         Button('thirdPaymentServicePayPromise')
           .type(ButtonType.Capsule)
           .width('50%')
           .margin(20)
           .onClick(() => {
             this.thirdPaymentServicePayPromise();
           })
         }
       .width('100%')
       .height('100%')
     }
   }
   ```
2. 拉起三方支付收银台可同步通过调用[ThirdPayClient.handlePayCallback](/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#handlepaycallback)接口（用户支付完成后，会将支付操作结果回调给商户客户端），获取三方支付处理结果，完成支付操作处理。参考示例代码如下：

   ```
   import { hilog } from '@kit.PerformanceAnalysisKit';
   import { UIAbility, Want } from '@kit.AbilityKit';
   // 需要从thirdPayClient对象定义的代码文件中导入三方支付客户端对象，以下为示例，具体以应用定义路径为准。
   import { thirdPayClient } from '../pages/thirdPaymentServicetest';

   // 如果已有Ability实现类，可直接添加onNewWant生命周期方法处理即可。
   export default class EntryAbility extends UIAbility {
     onNewWant(want: Want): void {
       // 需要和拉起支付收银台的三方支付客户端对象为同一个
       if (thirdPayClient) {
         hilog.info(0x0000, 'testTag', '%{public}s','clientForThirdPayment handlePayCallback');
         let handlePayCallback = thirdPayClient.handlePayCallback(want);
         hilog.info(0x0000, 'testTag', 'clientForThirdPayment handlePayCallback result: %{public}s', handlePayCallback);
       }
     }
   }
   ```
3. 商户客户端收到三方支付回调通知或主动查询订单支付结果成功后，按照三方支付平台要求完成订单支付后的下一步业务处理，如对返回的支付结果信息验签等。
