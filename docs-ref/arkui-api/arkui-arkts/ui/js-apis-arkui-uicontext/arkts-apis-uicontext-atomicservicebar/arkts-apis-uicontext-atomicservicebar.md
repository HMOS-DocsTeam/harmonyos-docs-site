---
title: "Interface (AtomicServiceBar)"
sidebar_position: 24
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-atomicservicebar
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-apis-uicontext-atomicservicebar
---

# Interface (AtomicServiceBar)

提供设置元服务menuBar的属性。

![](../../../../../images/59a5c89d/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 11开始支持。
- 以下接口需要先使用UIContext中的[getAtomicServiceBar](/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getatomicservicebar11)方法获取到AtomicServiceBar对象，再通过该对象调用对应方法。
- 从API version 12开始元服务menuBar样式变更，以下接口将失效。

## setVisible11+

setVisible(visible: boolean): void

通过该方法设置元服务menuBar是否可见。

![](../../../../../images/3f905c99/note_3.0-zh-cn.png) 

从API version 12开始元服务menuBar样式变更，menuBar默认隐藏，变为悬浮按钮，通过该接口无法改变menuBar的可见性。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| visible | boolean | 是 | 元服务menuBar是否可见。true表示设置menuBar可见，false表示设置menuBar不可见。 |

****示例：****

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setVisible(false);
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

## setBackgroundColor11+

setBackgroundColor(color:Nullable&lt;Color | number | string&gt;): void

通过该方法设置元服务menuBar的背景颜色。

![](../../../../../images/51f867b8/note_3.0-zh-cn.png) 

从API version 12开始元服务menuBar样式变更，menuBar的背景默认隐藏，通过该接口无法改变menuBar的背景颜色。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | Nullable&lt;[Color](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color) | number | string> | 是 | 通过该方法设置元服务menuBar的背景颜色，undefined代表使用默认颜色。number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。 |

****示例：****

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setBackgroundColor(0x88888888);
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

## setTitleContent11+

setTitleContent(content:string): void

通过该方法设置元服务menuBar的标题内容。

![](../../../../../images/06d93564/note_3.0-zh-cn.png) 

从API version 12开始元服务menuBar样式变更，menuBar的标题默认隐藏，通过该接口无法改变menuBar的标题内容。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | string | 是 | 元服务menuBar中的标题内容。 |

****示例：****

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setTitleContent('text2');
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

## setTitleFontStyle11+

setTitleFontStyle(font:FontStyle):void

通过该方法设置元服务menuBar的字体样式。

![](../../../../../images/2134a093/note_3.0-zh-cn.png) 

从API version 12开始元服务menuBar样式变更，menuBar的标题默认隐藏，通过该接口无法改变menuBar的字体样式。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| font | [FontStyle](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontstyle) | 是 | 元服务menuBar中的字体样式。 |

****示例：****

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setTitleFontStyle(FontStyle.Normal);
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

## setIconColor11+

setIconColor(color:Nullable&lt;Color | number | string&gt;): void

通过该方法设置元服务图标的颜色。

![](../../../../../images/eb3357db/note_3.0-zh-cn.png) 

从API version 12开始元服务menuBar样式变更，menuBar默认隐藏，悬浮按钮图标不予用户设置，通过该接口无法改变menuBar的图标颜色。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | Nullable&lt;[Color](/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color) | number | string> | 是 | 元服务图标的颜色，undefined代表使用默认颜色。number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。 |

****示例：****

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setIconColor(0x12345678);
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

## getBarRect15+

getBarRect(): Frame

获取元服务menuBar相对窗口的布局信息。

![](../../../../../images/20b9afea/note_3.0-zh-cn.png) 

布局信息包含了元服务menuBar的左右margin。

****元服务API：**** 从API version 15开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [Frame](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#frame) | 元服务menuBar的大小和位置。 |

****示例：****

```
import { AtomicServiceBar } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct Index {
  build() {
    Button("getBarRect")
      .onClick(() => {
        let uiContext: UIContext = this.getUIContext();
        let currentBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
        if (currentBar != undefined) {
          let rect = currentBar.getBarRect();
          hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully. x:'
            + rect.x + ' y:' + rect.y + ' width:' + rect.width + ' height:' + rect.height);
        } else {
          hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
        }
      })
  }
}
```
