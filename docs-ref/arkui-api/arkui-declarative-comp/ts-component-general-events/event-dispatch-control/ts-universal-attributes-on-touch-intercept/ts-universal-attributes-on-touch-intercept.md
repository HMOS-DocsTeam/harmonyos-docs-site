---
title: "自定义事件拦截"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-on-touch-intercept
kit: 应用框架
last_updated: "2026-04-22"
slug: ts-universal-attributes-on-touch-intercept
---

# 自定义事件拦截

为组件提供自定义的事件拦截能力，开发者可根据事件在控件上按下时的位置，输入源等事件信息决定控件上的HitTestMode属性。

![](../../../../../images/c60266b1/note_3.0-zh-cn.png) 

从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## onTouchIntercept

onTouchIntercept(callback: Callback&lt;TouchEvent, HitTestMode&gt;): T

给组件绑定自定义事件拦截回调。

![](../../../../../images/c1ce0d89/note_3.0-zh-cn.png) 

从API version 20开始，该接口支持在[attributeModifier](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;[TouchEvent](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent对象说明), [HitTestMode](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#hittestmode9)&gt; | 是 | 自定义事件拦截回调。在做[触摸测试](/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#触摸测试)时回调此函数。通过返回值设置组件的[触摸测试类型](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| T | 返回当前组件。 |

## 示例

该示例通过onTouchIntercept修改组件的HitTestMode属性。

```
// xxx.ets
@Entry
@Component
struct Index {
  isPolygon(event: TouchEvent) {
    return true;
  }

  build() {
    Row() {
      Column() {
        Text("hello world")
          .backgroundColor(Color.Blue)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            console.info("Text click");
          })
      }
      .width(400)
      .height(300)
      .backgroundColor(Color.Pink)
      .onClick(() => {
        console.info("Column click");
      })
      // 调用onTouchIntercept修改该组件的HitTestMode属性
      .onTouchIntercept((event: TouchEvent) => {
        console.info("OnTouchIntercept + " + JSON.stringify(event));
        // 使用touches时需要先校验是否为空
        if (event && event.touches) {
          let touches = event.touches;
          for (let i = 0; touches[i] != null; i++) {
            console.info('onTouchIntercept touches:', JSON.stringify(touches[i]));
          }
        }
        if (this.isPolygon(event)) {
          return HitTestMode.None;
        }
        return HitTestMode.Default;
      })
    }
    .width('100%')
  }
}
```
