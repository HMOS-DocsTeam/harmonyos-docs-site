---
title: "NodeContent"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-nodecontent
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-arkui-nodecontent
---

# NodeContent

NodeContent是ArkUI提供的[ContentSlot](/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot)的管理器。

![](../../../../../images/63cc22dc/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- NodeContent对象不支持使用JSON序列化。

## 导入模块

```
import { NodeContent } from '@kit.ArkUI';
```

## NodeContent

NodeContent是节点内容的实体封装。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

### constructor

constructor()

节点内容的实体封装。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****示例：****

```
import { nativeNode } from 'libNativeNode.so'; // 开发者自己实现的so
import { NodeContent } from '@kit.ArkUI';

@Component
struct Parent {
  private nodeContent: Content = new NodeContent();

  aboutToAppear() {
    // 通过C-API创建节点，并添加到管理器nodeContent上
    nativeNode.createNativeNode(this.nodeContent);
  }

  build() {
    Column() {
      // 显示nodeContent管理器里存放的Native侧的组件
      ContentSlot(this.nodeContent)
    }
  }
}
```

上述代码中so的实现可参考[Native XComponent](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeXComponentSample)。

### addFrameNode12+

addFrameNode(node: FrameNode): void

根据参数将FrameNode添加到NodeContent中。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| node | [FrameNode](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode) | 是 | 需要添加的FrameNode。 |

****错误码：****

以下错误码的详细介绍请参见[自定义节点错误码](/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node)。

| 错误码ID | 错误信息 |
| --- | --- |
| 100025 | The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: "The parameter 'node' is invalid: it cannot be adopted." |

### removeFrameNode12+

removeFrameNode(node: FrameNode): void

根据参数将FrameNode从NodeContent中删除。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| node | [FrameNode](/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode) | 是 | 需要删除的FrameNode。 |

****示例：****

添加删除NodeContent中的FrameNode节点。

```
// xxx.ets
import { NodeContent, typeNode } from '@kit.ArkUI';

class NodeContentCtrl {
  content: NodeContent;
  textNode: Array<typeNode.Text> = new Array();
  uiContext: UIContext;
  width: number;

  constructor(uiContext: UIContext) {
    this.content = new NodeContent();
    this.uiContext = uiContext;
    this.width = Infinity;
  }

  AddNode() {
    let node = typeNode.createNode(this.uiContext, "Text");
    node.initialize("ContentText:" + this.textNode.length).fontSize(20);
    this.textNode.push(node);
    this.content.addFrameNode(node);
  }

  RemoveNode() {
    let node = this.textNode.pop();
    this.content.removeFrameNode(node);
  }

  RemoveFront() {
    let node = this.textNode.shift();
    this.content.removeFrameNode(node);
  }

  GetContent(): NodeContent {
    return this.content;
  }
}

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  controller = new NodeContentCtrl(this.getUIContext());

  build() {
    Row() {
      Column() {
        ContentSlot(this.controller.GetContent())
        Button("AddToSlot")
          .onClick(() => {
            this.controller.AddNode();
          })
        Button("RemoveBack")
          .onClick(() => {
            this.controller.RemoveNode();
          })
        Button("RemoveFront")
          .onClick(() => {
            this.controller.RemoveFront();
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
