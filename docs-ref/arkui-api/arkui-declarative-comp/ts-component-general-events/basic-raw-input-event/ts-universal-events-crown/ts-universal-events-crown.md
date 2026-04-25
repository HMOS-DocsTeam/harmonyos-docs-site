---
title: "表冠事件"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-crown
kit: 应用框架
last_updated: "2026-04-22"
slug: ts-universal-events-crown
---

# 表冠事件

指旋转表冠时触发的事件，事件的分发依赖于应用焦点，开发者可以通过[焦点事件](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event)自定义事件处理。

![](../../../../../images/ad19e96a/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 18开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 手动旋转表冠以触发其存在默认的交互逻辑，例如旋转手表的表冠后，滚动条会根据旋转表冠的旋转方向进行滚动。
- 组件收到表冠事件的前提是该组件获焦，焦点控制可以通过[focusable](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusable)、[defaultFocus](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#defaultfocus9)、[focusOnTouch](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusontouch9)进行管理。
- 仅穿戴设备支持该事件。
- 默认支持表冠事件的组件: [Slider](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider)、[DatePicker](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker)、[TextPicker](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker)、 [TimePicker](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker)、[Scroll](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll)、[List](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list)、[Grid](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid)、[WaterFlow](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow)、[ArcList](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist)、[Refresh](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh)和[ArcSwiper](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arcswiper/ts-container-arcswiper)。

## onDigitalCrown

onDigitalCrown(handler: Optional&lt;Callback&lt;CrownEvent&gt;>): T

组件获焦以后旋转表冠时触发该回调。

![](../../../../../images/64b725f6/note_3.0-zh-cn.png) 

该接口不支持在[attributeModifier](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

****元服务API：**** 从API version 18开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | Optional&lt;Callback&lt;[CrownEvent](#crownevent对象说明)&gt;&gt; | 是 | 获得[CrownEvent](#crownevent对象说明)对象。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| T | 返回当前组件。 |

## CrownEvent对象说明

组件接收表冠事件的数据结构。内容包括时间戳、旋转角速度、旋转角度、表冠动作和阻止事件冒泡。

****元服务API：**** 从API version 18开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| timestamp | number | 否 | 否 | 时间戳。 |
| angularVelocity | number | 否 | 否 | 旋转角速度，每秒转的角度(°/s)。 |
| degree | number | 否 | 否 | 相对旋转角度。  单位：度。  取值范围:[-360, 360]。 |
| action | [CrownAction](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#crownaction18) | 否 | 否 | 表冠动作。 |
| stopPropagation | Callback&lt;void&gt; | 否 | 否 | 阻止[事件冒泡](/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#事件冒泡)。 |

## 示例

该示例实现了组件注册表冠事件，接收表冠事件数据上报内容。

```
// xxx.ets
@Entry
@Component
struct CityList {
  @State message: string = "onDigitalCrown";

  build() {
    Column() {
      Row() {
        Stack() {
          Text(this.message)
            .fontSize(20)
            .fontColor(Color.White)
            .backgroundColor("#262626")
            .textAlign(TextAlign.Center)
            .focusable(true)
            .focusOnTouch(true)
            .defaultFocus(true)
            .borderWidth(2)
            .width(223)
            .height(223)
            .borderRadius(110)
            .onDigitalCrown((event: CrownEvent) => {
              event.stopPropagation();
              this.message = "CrownEvent\n\n" + JSON.stringify(event);
              console.info(`action: ${event.action}, angularVelocity: ${event.angularVelocity}, degree: ${event.degree}, timestamp: ${event.timestamp}`);
            })
        }.width("100%").height("100%")
      }.width("100%").height("100%")
    }
  }
}
```

![](../../../../../images/323377cc/zh-cn_image_0000002583477955.gif)
