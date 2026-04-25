---
title: "复用标识"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-reuse-id
kit: 应用框架
last_updated: "2026-04-22"
slug: ts-universal-attributes-reuse-id
---

# 复用标识

reuseId用于标记自定义组件复用组，当组件回收复用时，复用框架将根据组件的reuseId来划分组件的复用组。

![](../../../../../images/7b9bb236/note_3.0-zh-cn.png) 

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## reuseId

reuseId(id: string): T

复用标识，用于划分自定义组件的复用组。

![](../../../../../images/12784847/note_3.0-zh-cn.png) 

- 根据不同场景灵活设置reuseId，实现最佳复用效果。最佳实践请参考[组件复用-使用reuseId标记布局发生变化的组件](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-component-reuse#section1239555818211)。
- 该接口不支持在[attributeModifier](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 复用标识，用于划分自定义组件的复用组。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| T | 返回当前组件。 |

## 示例

该示例通过reuseId标识自定义组件的复用组。

```
// xxx.ets
@Entry
@Component
struct MyComponent {
  @State switch: boolean = true;
  private type: string = "type1";

  build() {
    Column() {
      Button("ChangeType")
        .onClick(() => {
          this.type = "type2"
        })
      Button("Switch")
        .onClick(() => {
          this.switch = !this.switch
        })
      if (this.switch) {
        ReusableChildComponent({ type: this.type })
          .reuseId(this.type)
      }
    }
    .width('100%')
    .height('100%')
  }
}

@Reusable
@Component
struct ReusableChildComponent {
  @State type: string = ''

  aboutToAppear() {
    console.info(`ReusableChildComponent Appear ${this.type}`)
  }

  aboutToReuse(params: ESObject) {
    console.info(`ReusableChildComponent Reuse ${this.type}`)
    this.type = params.type;
  }

  build() {
    Row() {
      Text(this.type)
        .fontSize(20)
        .margin({ left: 10 })
    }.margin({ left: 10, right: 10 })
  }
}
```
