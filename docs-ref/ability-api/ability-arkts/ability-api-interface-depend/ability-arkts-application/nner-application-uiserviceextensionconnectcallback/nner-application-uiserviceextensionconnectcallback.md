---
title: "UIServiceExtensionConnectCallback"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nner-application-uiserviceextensionconnectcallback
kit: 应用框架
last_updated: "2026-04-22"
slug: nner-application-uiserviceextensionconnectcallback
---

# UIServiceExtensionConnectCallback

UIServiceExtensionConnectCallback是UIServiceExtension连接回调接口类，提供UIServiceExtension连接回调数据能力。

![](../../../../../images/883f04fe/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 14开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。
- 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。

## 导入模块

```
import { common } from '@kit.AbilityKit';
```

## UIServiceExtensionConnectCallback.onData

onData(data: Record&lt;string, Object&gt;): void

接收UIServiceExtension连接的回调数据。

![](../../../../../images/6c4d53ec/note_3.0-zh-cn.png) 

组件启动规则详见：[组件启动规则（Stage模型）](/ability-kit/stage-model-development/stage-model-application-components/component-startup-rules)。

****元服务API****：从 API version 14开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | Record&lt;string, Object&gt; | 是 | 接收UIServiceExtension连接回调数据。 |

****示例：****

```
import { common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

const TAG: string = '[Extension] ';

@Entry
@Component
struct UIServiceExtensionAbility {
  comProxy: common.UIServiceProxy | null = null;
  dataCallBack: common.UIServiceExtensionConnectCallback = {
    onData: (data: Record<string, Object>) => {
      console.info(`${TAG} dataCallBack received data: ${JSON.stringify(data)}.`);
    },
    onDisconnect: () => {
      console.info(`${TAG} dataCallBack onDisconnect.`);
      this.comProxy = null;
    }
  }

  build() {
    Scroll() {
      Column() {
        // 创建一个按钮，点击按钮后连接UIServiceExtensionAbility
        Button('connectUIServiceExtensionAbility', { type: ButtonType.Capsule, stateEffect: true })
          .margin({
            top: 5,
            left: 10,
            right: 10,
            bottom: 5
          })
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
          .onClick(() => {
            this.myConnectUIServiceExtensionAbility()
          });
      }
      .width('100%')
    }
    .height('100%')
  }

  myConnectUIServiceExtensionAbility() {
    // 获取上下文
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let startWant: Want = {
      deviceId: '',
      bundleName: 'com.acts.myapplication',
      abilityName: 'UiServiceExtensionAbility'
    };

    try {
      // 连接到UIServiceExtensionAbility
      context.connectUIServiceExtensionAbility(startWant, this.dataCallBack)
        .then((proxy: common.UIServiceProxy) => {
          console.info(TAG + `try to connectUIServiceExtensionAbility ${proxy}`);
          this.comProxy = proxy;
          let formData: Record<string, string> = {
            'PATH': '/tmp/aaa.jpg'
          };
          try {
            console.info(`${TAG} sendData.`);
            this.comProxy.sendData(formData);
          } catch (err) {
            let code = (err as BusinessError).code;
            let message = (err as BusinessError).message;
            console.error(`${TAG} sendData failed, code is ${code}, message is ${message}.`);
          }
        }).catch((err: Error) => {
        let code = (err as BusinessError).code;
        let message = (err as BusinessError).message;
        console.error(`${TAG} connectUIServiceExtensionAbility failed, code is ${code}, message is ${message}.`);
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`${TAG} connectUIServiceExtensionAbility failed, code is ${code}, message is ${message}.`);
    }
  }
}
```

## UIServiceExtensionConnectCallback.onDisconnect

onDisconnect(): void

成功断开UIServiceExtension连接的回调。

![](../../../../../images/252dfa7a/note_3.0-zh-cn.png) 

组件启动规则详见：[组件启动规则（Stage模型）](/ability-kit/stage-model-development/stage-model-application-components/component-startup-rules)。

****元服务API****：从 API version 14开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Ability.AbilityRuntime.Core

****示例：****

```
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

const TAG: string = '[Extension] ';

@Entry
@Component
struct UIServiceExtensionAbility {
  comProxy: common.UIServiceProxy | null = null;
  // 连接时的回调接口
  dataCallBack: common.UIServiceExtensionConnectCallback = {
    onData: (data: Record<string, Object>) => {
      console.info(`${TAG} dataCallBack received data: ${JSON.stringify(data)}.`);
    },
    onDisconnect: () => {
      // 连接断链后的触发
      console.info(`${TAG} dataCallBack onDisconnect.`);
      this.comProxy = null;
    }
  }

  build() {
    Scroll() {
      Column() {
        // 创建一个按钮，点击后断开已连接的UIServiceExtensionAbility
        Button('disConnectUIServiceExtensionAbility', { type: ButtonType.Capsule, stateEffect: true })
          .margin({
            top: 5,
            left: 10,
            right: 10,
            bottom: 5
          })
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
          .onClick(() => {
            this.myConnectUIServiceExtensionAbility()
          });
      }
      .width('100%')
    }
    .height('100%')
  }

  myConnectUIServiceExtensionAbility() {
    // 获取上下文
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    // 断开连接的UIServiceExtensionAbility
    try {
      // this.comProxy在连接成功后保存
      context.disconnectUIServiceExtensionAbility(this.comProxy).then(() => {
        console.info(`${TAG} disconnectUIServiceExtensionAbility success.`);
      }).catch((err: Error) => {
        let code = (err as BusinessError).code;
        let message = (err as BusinessError).message;
        console.error(`${TAG} disconnectUIServiceExtensionAbility failed, code is ${code}, message is ${message}.`);
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`${TAG} disconnectUIServiceExtensionAbility failed, code is ${code}, message is ${message}.`);
    }
  }
}
```
