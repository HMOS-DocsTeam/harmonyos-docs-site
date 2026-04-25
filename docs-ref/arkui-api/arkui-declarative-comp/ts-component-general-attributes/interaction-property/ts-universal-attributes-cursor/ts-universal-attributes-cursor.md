---
title: "鼠标光标控制"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-cursor
kit: 应用框架
last_updated: "2026-04-22"
slug: ts-universal-attributes-cursor
---

# 鼠标光标控制

控制鼠标光标的显示样式。

![](../../../../../images/f5974c94/note_3.0-zh-cn.png) 

从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## cursorControl

### setCursor

setCursor(value: PointerStyle): void

方法语句中可使用的全局接口，调用该接口可更改当前的鼠标光标样式。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [PointerStyle](#pointerstyle) | 是 | 设置的鼠标样式。 |

### restoreDefault

restoreDefault(): void

方法语句中可使用的全局接口，调用此接口可将鼠标光标恢复成默认箭头样式。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

## PointerStyle

type PointerStyle = pointer.PointerStyle

光标样式。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

| 类型 | 说明 |
| --- | --- |
| [pointer.PointerStyle](/ref/system-basicfun-api/input-api/input-arkts/js-apis-pointer/js-apis-pointer#pointerstyle) | 光标样式。 |

![](../../../../../images/eb32e578/note_3.0-zh-cn.png) 

直接使用cursorControl可能导致[UI上下文不明确](/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui上下文不明确)的问题，建议使用getUIContext()获取[UIContext](/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext)实例，并使用[getCursorController](/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getcursorcontroller12)获取绑定实例的cursorControl。

## 示例

该示例通过setCursor实现了鼠标光标样式的更改。

```
// xxx.ets
import { pointer } from '@kit.InputKit';

@Entry
@Component
struct CursorControlExample {
  @State text: string = '';
  controller: TextInputController = new TextInputController()

  build() {
    Column() {
      Row()
        .height(200)
        .width(200)
        .backgroundColor(Color.Green)
        .position({ x: 60, y: 70 })
        .onHover((flag) => {
          if (flag) {
            // 建议使用this.getUIContext().getCursorController().setCursor()
            cursorControl.setCursor(pointer.PointerStyle.EAST)
          } else {
            // 建议使用this.getUIContext().getCursorController().restoreDefault()
            cursorControl.restoreDefault()
          }
        })
      Row()
        .height(200)
        .width(200)
        .backgroundColor(Color.Blue)
        .position({ x: 130, y: 120 })
        .onHover((flag) => {
          if (flag) {
            // 建议使用this.getUIContext().getCursorController().setCursor()
            cursorControl.setCursor(pointer.PointerStyle.WEST)
          } else {
            // 建议使用this.getUIContext().getCursorController().restoreDefault()
            cursorControl.restoreDefault()
          }
        })
    }.width('100%')
  }
}
```

示意图：

当鼠标悬浮在蓝色区域时，显示：向西箭头光标样式。

![](../../../../../images/4ccd85d8/zh-cn_image_0000002583479545.jpg)

当鼠标悬浮在绿色区域时，显示：向东箭头光标样式。

![](../../../../../images/03ee25a1/zh-cn_image_0000002552799896.jpg)
