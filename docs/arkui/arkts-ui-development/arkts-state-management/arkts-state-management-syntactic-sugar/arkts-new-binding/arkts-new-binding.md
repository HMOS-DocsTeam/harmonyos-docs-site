---
title: "!!语法：双向绑定"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-binding
kit: application-framework
last_updated: "2026-04-22"
---

# !!语法：双向绑定

在状态管理V1中，推荐使用[$$](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync)实现系统组件的双向绑定。

在状态管理V2中，推荐使用!!语法糖统一处理双向绑定。

![](../../../../../images/23dfa648/note_3.0-zh-cn.png) 

!!语法从API version 12开始支持。

## 概述

!!双向绑定语法，是一个语法糖方便开发者实现数据双向绑定，用于初始化子组件的[@Param](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param)和[@Event](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event)。其中@Event方法名需要声明为“$”+ @Param属性名，详见[使用场景](#使用场景)。

- 如果使用了!!双向绑定语法，表明父组件的变化会同步给子组件，子组件的变化也会同步给父组件。
- 父组件未使用!!时，变化是单向的。

## 使用场景

### 自定义组件间双向绑定

1. 在Index中构造Star子组件，双向绑定父子组件中的value属性，并初始化子组件的@Param value和@Event $value。

   @Param与@Event装饰器配合使用的双向绑定语法糖。

   ```
   Child({ value: this.value, $value: (val: number) => { this.value = val; } })
   ```

   上述语法可以简化为!!双向绑定语法糖。

   ```
   Star({ value: this.value!! })
   ```
2. 使用@Param value与@Event $value语法实现自定义组件双向绑定。

   ```
   @Entry
   @ComponentV2
   struct Parent {
     @Local value: number = 0;

     build() {
       Column() {
         Text(`${this.value}`)
         // 点击Index中的Button改变value值，父组件Parent和子组件Child中的Text将同步更新。
         Button(`change value in parent component`).onClick(() => {
           this.value++;
         })
         // 使用@Param与@Event语法实现自定义组件双向绑定。
         Child({ value: this.value, $value: (val: number) => { this.value = val; } })
         // ...
       // ···
       }
     }
   }

   @ComponentV2
   struct Child {
     @Param value: number = 0;
     @Event $value: (val: number) => void = (val: number) => {};

     build() {
       Column() {
         Text(`${this.value}`)
         // 点击子组件Child中的Button，调用`this.$value(10)`方法，父组件Parent和子组件Child中的Text将同步更新。
         Button(`change value in child component`).onClick(() => {
           this.$value(10);
         })
       }
     }
   }
   ```
3. 使用!!语法糖实现自定义组件双向绑定。

   ```
   @Entry
   @ComponentV2
   struct Index {
     @Local value: number = 0;

     build() {
       Column() {
         Text(`${this.value}`)
         // 点击Index中的Button改变value值，父组件Index和子组件Star中的Text将同步更新。
         Button(`change value in parent component`).onClick(() => {
           this.value++;
         })
         // 使用!!语法糖实现自定义组件双向绑定。
         Star({ value: this.value!! })
         // ...
       }
     }
   }

   @ComponentV2
   struct Star {
     @Param value: number = 0;
     @Event $value: (val: number) => void = (val: number) => {};

     build() {
       Column() {
         Text(`${this.value}`)
         // 点击子组件Star中的Button，调用`this.$value(10)`方法，父组件Index和子组件Star中的Text将同步更新。
         Button(`change value in child component`).onClick(() => {
           this.$value(10);
         })
       }
     }
   }
   ```

****使用限制****

- !!双向绑定语法不支持多层父子组件传递。
- 不支持与@Event混用。从API version 18开始，当使用!!双向绑定语法给子组件传递参数时，给对应的@Event方法传参会编译报错。
- 当使用3个或更多感叹号（!!!、!!!!、!!!!!等）时，不支持双向绑定功能。

### 系统组件参数双向绑定

!!运算符为系统组件提供TS变量的引用，使得TS变量和系统组件的内部状态保持同步。添加方式是在变量名后添加，例如isShow!!。

内部状态的含义由组件决定。例如：[bindMenu](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu11)组件的isShow参数。

```
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = 'click show Menu';
const DOMAIN = 0xFF00;

@Entry
@ComponentV2
struct BindMenuInterface {
  @Local isShow: boolean = false;

  build() {
    Column() {
      Row() {
        Text('click show Menu')
          .bindMenu(this.isShow!!, // 双向绑定。
            [
              {
                value: 'Menu1',
                action: () => {
                  hilog.info(DOMAIN, TAG, 'handle Menu1 click');
                }
              },
              {
                value: 'Menu2',
                action: () => {
                  hilog.info(DOMAIN, TAG, 'handle Menu2 click');
                }
              },
            ])
      }.height('50%')
      
      Text('isShow: ' + this.isShow).fontSize(18).fontColor(Color.Red)
      Row() {
        Button('Click')
          .onClick(() => {
            this.isShow = true;
          })
          .width(100)
          .fontSize(20)
          .margin(10)
      }
    }.width('100%')
  }
}
```

![](../../../../../images/bbd4d232/zh-cn_image_0000002583477623.gif)

****使用规则****

- 当前!!双向绑定支持基础类型变量，当该变量使用[@State](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state)等状态管理V1装饰器装饰，或者[@Local](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local)等状态管理V2装饰器装饰时，变量值的变化会触发UI刷新。

  | 属性 | 支持的参数 | 起始API版本 |
  | --- | --- | --- |
  | [bindMenu](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu11) | isShow | 18 |
  | [bindContextMenu](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu12) | isShown | 18 |
  | [bindPopup](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#bindpopup) | show | 18 |
  | [TextInput](/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#textinputoptions对象说明) | text | 18 |
  | [TextArea](/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#textareaoptions对象说明) | text | 18 |
  | [Search](/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#searchoptions18对象说明) | value | 18 |
  | [BindSheet](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindsheet) | isShow | 18 |
  | [BindContentCover](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition#bindcontentcover) | isShow | 18 |
  | [SideBarContainer](/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer#sidebarwidth) | sideBarWidth | 18 |
  | [Navigation](/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navbarwidth9) | navBarWidth | 18 |
  | [Toggle](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle#toggleoptions18对象说明) | isOn | 18 |
  | [Checkbox](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox#select) | select | 18 |
  | [CheckboxGroup](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup#selectall) | selectAll | 18 |
  | [Radio](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio#checked) | checked | 18 |
  | [Rating](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating#ratingoptions18对象说明) | rating | 18 |
  | [Slider](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider#slideroptions对象说明) | value | 18 |
  | [Select](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#selected) | selected | 18 |
  | [Select](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#value) | value | 18 |
  | [MenuItem](/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem#selected) | selected | 18 |
