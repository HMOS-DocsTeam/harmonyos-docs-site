---
title: "支持表冠输入事件"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-events-crown-event
kit: application-framework
last_updated: "2026-04-22"
---

# 支持表冠输入事件

表冠事件从API version 18开始支持，是指通过旋转表冠触发的事件，通过硬件采样频率上报旋转角度的变化。

表冠事件分发依赖于应用内组件焦点，只有拥有焦点的组件才能接收到该事件。因此，接收此事件的组件应正确管理其焦点状态，并通过[onFocus](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event#onfocus)和[onBlur](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event#onblur)接口监听自身焦点状态变化。当正在接收表冠事件的组件失焦时，接下来的表冠事件都不会再发送给这个组件。

目前，系统中一些组件已默认支持与表冠的交互，例如，旋转手表表冠后，滚动条会根据表冠的旋转方向滚动。

当前，默认支持表冠事件的组件包括： [Slider](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider)、[DatePicker](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker)、[TextPicker](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker)、 [TimePicker](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker)、[Scroll](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll)、[List](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list)、[Grid](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid)、[WaterFlow](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow)、[ArcList](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist)、[Refresh](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh)和[Swiper](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper)。

此外，应用也可以自行通过[onDigitalCrown](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-crown/ts-universal-events-crown#ondigitalcrown)接口感知表冠事件的上报。

其中，event参数提供表冠事件的时间戳、旋转角速度、旋转角度和[表冠动作](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#crownaction18)信息。

![](../../../../../images/15c0c573/note_3.0-zh-cn.png) 

- 当前仅Wearable设备支持表冠事件。
- 组件对表冠事件的接收受自身获焦状态影响，接收到BEGIN后，如果失焦，则无法继续再接收到后续的UPDATE和END。

当组件需要获取旋转角度等信息时，可以通过onDigitalCrown接收表冠事件来获得上报信息。以下以Text组件为例，介绍表冠事件开发的基本步骤及开发过程中需要注意的事项。

1. 组件获焦

   确保接收事件的组件获焦，可以通过使用[focusable](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusable)、[defaultFocus](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#defaultfocus9)、[focusOnTouch](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusontouch9)等方法来实现。如需更详细的焦点控制信息，请参考[焦点控制](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus)文档。

   ```
   Text(this.message)
     .fontSize(20)
     .fontColor(Color.White)
     .backgroundColor("#262626")
     .textAlign(TextAlign.Center)
     .focusable(true)
     .focusOnTouch(true)
     .defaultFocus(true)
   ```
2. 注册事件回调

   接收表冠事件需要注册表冠事件回调，当触发表冠事件时会执行回调函数。

   ```
   .onDigitalCrown((event: CrownEvent) => {
   // ···
   })
   ```
3. 事件字段的含义

   表冠事件提供了时间戳，旋转角速度，旋转角度和表冠动作。此外表冠事件会触发事件冒泡，可通过[stopPropagation](/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-crown/ts-universal-events-crown#crownevent对象说明)阻止事件冒泡。

   ```
   event.stopPropagation();
   this.message = "CrownEvent\n\n" + JSON.stringify(event);
   hilog.debug(0x0000, 'Tag',
     "action:%{public}d, angularVelocity:%{public}f, degree:%{public}f, timestamp:%{public}f",
     event.action, event.angularVelocity, event.degree, event.timestamp);
   ```

****完整示例：****

```
// xxx.ets
@Entry
@Component
struct Index {
  @State message: string = 'onDigitalCrown';

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
              hilog.debug(0x0000, 'Tag',
                "action:%{public}d, angularVelocity:%{public}f, degree:%{public}f, timestamp:%{public}f",
                event.action, event.angularVelocity, event.degree, event.timestamp);
            })
        }.width("100%").height("100%")
      }.width("100%").height("100%")
    }
  }
}
```

![](../../../../../images/26fd3dd9/zh-cn_image_0000002583477955.gif)
