---
title: "commentManager（应用评论服务）"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/appgallery-commentmanager
kit: 应用服务
last_updated: "2026-04-22"
slug: appgallery-commentmanager
---

# commentManager（应用评论服务）

提供应用内评论能力，用户无需进入应用市场应用详情页进行评论。

![](../../../images/6dd262ea/note_3.0-zh-cn.png) 

调用接口需捕获异常。

****起始版本：**** 6.0.0(20)

## 导入模块

```
import { commentManager } from '@kit.AppGalleryKit';
```

## commentManager.showCommentDialog

showCommentDialog(context: common.UIExtensionContext | common.UIAbilityContext): Promise&lt;void&gt;

拉起应用评分弹窗。使用Promise异步回调。

****模型约束：**** 此接口仅可在Stage模型下使用。

****系统能力：**** SystemCapability.AppGalleryService.Distribution.Comment

****起始版本：**** 6.0.0(20)

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | [common.UIExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext) | [common.UIAbilityContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext) | 是 | 应用上下文。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

****错误码：****

以下错误码的详细介绍请参见[ArkTS API错误码](/ref/store-api/store-arkts/store-error-code/store-error-code)。

| 错误码ID | 错误信息 |
| --- | --- |
| 1021500001 | Internal system error. |
| 1021500002 | Service request failed. |
| 1021500003 | Failed to connect to AppGallery. |
| 1021500004 | Failed to write parameters. |
| 1021500005 | The app context is invalid. |
| 1021500006 | The user has not signed in to their HUAWEI ID. |
| 1021500007 | The user has already commented on the current version. |
| 1021500008 | The number of comments has reached the maximum limit. |
| 1021500009 | The user has already left a comment, and less than a year has elapsed since then. |

****示例：****

```
import { commentManager } from '@kit.AppGalleryKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import type { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  @State message: string = 'showCommentDialog'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            try {
              const uiContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
              // 拉起应用评分弹窗
              commentManager.showCommentDialog(uiContext).then(()=>{
                hilog.info(0, 'TAG', "succeeded in showing commentDialog.");
              }).catch((error: BusinessError<Object>) => {
                hilog.error(0, 'TAG', `showCommentDialog failed, Code: ${error.code}, message: ${error.message}`);
              });
            } catch (error) {
              hilog.error(0, 'TAG', `showCommentDialog failed, Code: ${error.code}, message: ${error.message}`);
            }
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
