"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["49994"], {
51370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_arktsnode_framenode_arkts_user_defined_arktsnode_framenode_md_9e0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-nodes-arkts-user-defined-arktsnode-framenode-arkts-user-defined-arktsnode-framenode-md-9e0.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_arktsnode_framenode_arkts_user_defined_arktsnode_framenode_md_9e0_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode/arkts-user-defined-arktsnode-framenode","title":"自定义组件节点 (FrameNode)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode/arkts-user-defined-arktsnode-framenode.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"自定义组件节点 (FrameNode)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-arktsnode-framenode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义占位节点","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder/"},"next":{"title":"自定义渲染节点 (RenderNode)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode/arkts-user-defined-arktsnode-framenode.md


const frontMatter = {
	title: '自定义组件节点 (FrameNode)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-arktsnode-framenode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义组件节点 (FrameNode)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "创建和删除节点",
  "id": "创建和删除节点",
  "level": 2
}, {
  "value": "判断节点是否可修改",
  "id": "判断节点是否可修改",
  "level": 2
}, {
  "value": "获取对应的RenderNode节点",
  "id": "获取对应的rendernode节点",
  "level": 2
}, {
  "value": "操作节点树",
  "id": "操作节点树",
  "level": 2
}, {
  "value": "使用moveTo移动命令式节点",
  "id": "使用moveto移动命令式节点",
  "level": 2
}, {
  "value": "设置节点通用属性和事件回调",
  "id": "设置节点通用属性和事件回调",
  "level": 2
}, {
  "value": "自定义测量布局与绘制",
  "id": "自定义测量布局与绘制",
  "level": 2
}, {
  "value": "查找节点及获取基础信息",
  "id": "查找节点及获取基础信息",
  "level": 2
}, {
  "value": "获取节点位置偏移信息",
  "id": "获取节点位置偏移信息",
  "level": 2
}, {
  "value": "通过typeNode创建具体类型的FrameNode节点",
  "id": "通过typenode创建具体类型的framenode节点",
  "level": 2
}, {
  "value": "解除当前FrameNode对象对实体FrameNode节点的引用关系",
  "id": "解除当前framenode对象对实体framenode节点的引用关系",
  "level": 2
}, {
  "value": "查询当前FrameNode是否解除引用",
  "id": "查询当前framenode是否解除引用",
  "level": 2
}, {
  "value": "FrameNode的数据懒加载能力",
  "id": "framenode的数据懒加载能力",
  "level": 2
}, {
  "value": "查询LazyForEach中的FrameNode节点信息",
  "id": "查询lazyforeach中的framenode节点信息",
  "level": 2
}, {
  "value": "调整自定义绘制Canvas的变换矩阵",
  "id": "调整自定义绘制canvas的变换矩阵",
  "level": 2
}, {
  "value": "更新当前帧节点",
  "id": "更新当前帧节点",
  "level": 2
}, {
  "value": "判断节点是否处于渲染状态",
  "id": "判断节点是否处于渲染状态",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义组件节点-framenode",
        children: "自定义组件节点 (FrameNode)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于拥有自定义前端的第三方框架（如JSON、XML、DOM树等），需将特定的DSL转换为ArkUI的声明式描述。如下图描述了JSON定义的前端框架和ArkUI声明式描述的对应关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(624139)/* ["default"] */.A) + "",
        width: "707",
        height: "329"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述转换过程需要依赖额外的数据驱动，绑定至", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "Builder"
      }), "中，较为复杂且性能欠佳。这类框架通常依赖于ArkUI的布局、事件处理、基础的节点操作和自定义能力。大部分组件通过自定义实现，但需结合使用部分系统组件以实现混合显示，如下图示例既使用了FrameNode的自定义方法进行绘制，又使用了系统组件Column及其子组件Text，通过BuilderNode的方式将其挂载到根节点的FrameNode上混合显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(748803)/* ["default"] */.A) + "",
        width: "1256",
        height: "1057"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "的设计初衷正是为了解决上述转换问题。FrameNode表示组件树中的实体节点，与自定义占位容器组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "相配合，实现在占位容器内构建一棵自定义的节点树。该节点树支持动态操作，如节点的增加、修改和删除。基础的FrameNode具备设置通用属性和事件回调的功能，同时提供完整的自定义能力，涵盖自定义测量、布局和绘制等方面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除此之外，ArkUI还提供了获取和遍历系统组件对应代理FrameNode对象的能力（下文简称代理节点）。代理节点能够用于遍历整个UI的树形结构，支持获取系统组件节点的详细信息，以及额外注册组件的事件监听回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建和删除节点",
      children: "创建和删除节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FrameNode提供了节点创建和删除的能力。可以通过FrameNode的构造函数创建自定义FrameNode节点，通过构造函数创建的节点对应一个实体的节点。同时，可以通过FrameNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#dispose12",
        children: "dispose"
      }), "接口来实现与实体节点的绑定关系的解除。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(512981)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在创建FrameNode对象的时候需要传入必选参数UIContext，若未传入UIContext对象或者传入不合法，则节点创建抛出异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义占位组件将节点进行显示的时候需要保证UI上下文一致，否则会出现显示异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若不持有FrameNode对象，则该对象会在GC的时候被回收。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "判断节点是否可修改",
      children: "判断节点是否可修改"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#ismodifiable12",
        children: "isModifiable"
      }), "用于查询当前节点类型是否为系统组件的代理节点。当FrameNode节点作为系统组件的代理节点的时候，该节点不可修改。即无法修改代理节点的自身属性以及其子节点的结构。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取对应的rendernode节点",
      children: "获取对应的RenderNode节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FrameNode提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getrendernode",
        children: "getRenderNode"
      }), "接口，用于获取FrameNode中的RenderNode。可以通过对获取到的RenderNode对象进行操作，动态修改FrameNode上绘制相关的属性，具体可修改的属性参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "的接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(885577)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无法获取系统组件代理FrameNode的RenderNode对象。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BuilderNode中调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#getframenode",
          children: "getFrameNode"
        }), "获取得到的FrameNode节点对象中，可以通过getRenderNode获取对应的根节点的RenderNode对象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作节点树",
      children: "操作节点树"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FrameNode提供了节点的增、删、查、改的能力，能够修改非代理节点的子树结构。可以对所有FrameNode的节点的父子节点做出查询操作，并返回查询结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(714876)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对节点进行增、删、改操作的时候，会对非法操作抛出异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过查询获得的系统组件的代理节点，仅具备查询节点信息的作用，不具备修改节点属性的功能。代理节点不持有组件的实体节点，即不影响对应的节点的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询节点仅查询获得UI相关的节点，不返回语法节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用自定义组件的场景下，可能查询获得自定义组件的新增节点，节点类型为“__Common__”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TEST_TAG: string = 'FrameNode'\n\nclass Params {\n  public text: string = 'this is a text'\n}\n\n@Builder\nfunction buttonBuilder(params: Params) {\n  Column({ space: 10 }) {\n    Button(params.text)\n      .fontSize(12)\n      .borderRadius(8)\n      .borderWidth(2)\n      .backgroundColor(Color.Orange)\n\n    Button(params.text)\n      .fontSize(12)\n      .borderRadius(8)\n      .borderWidth(2)\n      .backgroundColor(Color.Pink)\n  }\n}\n\nclass MyNodeController extends NodeController {\n  public buttonNode: BuilderNode<[Params]> | null = null;\n  public frameNode: FrameNode | null = null;\n  public childList: Array<FrameNode> = new Array<FrameNode>();\n  public rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(buttonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    if (this.rootNode === null) {\n      this.rootNode = new FrameNode(uiContext);\n      this.rootNode.commonAttribute\n        .width('50%')\n        .height(100)\n        .borderWidth(1)\n        .backgroundColor(Color.Gray)\n    }\n\n    if (this.frameNode === null) {\n      this.frameNode = new FrameNode(uiContext);\n      this.frameNode.commonAttribute\n        .width('100%')\n        .height(50)\n        .borderWidth(1)\n        .position({ x: 200, y: 0 })\n        .backgroundColor(Color.Pink);\n      this.rootNode.appendChild(this.frameNode);\n    }\n    if (this.buttonNode === null) {\n      this.buttonNode = new BuilderNode<[Params]>(uiContext);\n      this.buttonNode.build(this.wrapBuilder, { text: 'This is a Button' })\n      this.rootNode.appendChild(this.buttonNode.getFrameNode())\n    }\n    return this.rootNode;\n  }\n\n  operationFrameNodeWithFrameNode(frameNode: FrameNode | undefined | null) {\n    if (frameNode) {\n      hilog.info(0x0000, `${TEST_TAG} get ArkTSNode success.`, 'success')\n      hilog.info(0x0000, `${TEST_TAG} check rootNode whether is modifiable ${frameNode.isModifiable()}`,\n        'isModifiable');\n    }\n    if (this.uiContext) {\n      let frameNode1 = new FrameNode(this.uiContext);\n      let frameNode2 = new FrameNode(this.uiContext);\n      frameNode1.commonAttribute.size({ width: 50, height: 50 })\n        .backgroundColor(Color.Black)\n        .position({ x: 50, y: 60 })\n      frameNode2.commonAttribute.size({ width: 50, height: 50 })\n        .backgroundColor(Color.Orange)\n        .position({ x: 120, y: 60 })\n      try {\n        frameNode?.appendChild(frameNode1);\n        hilog.info(0x0000, `${TEST_TAG} appendChild success`, 'success');\n      } catch (err) {\n        hilog.error(0x0000, `${TEST_TAG} appendChild fail :${(err as BusinessError).code}:\n        ${(err as BusinessError).message}`, 'appendChild error');\n      }\n      try {\n        frameNode?.insertChildAfter(frameNode2, null);\n        hilog.info(0x0000, `${TEST_TAG} insertChildAfter success `, 'success');\n      } catch (err) {\n        hilog.error(0x0000, `${TEST_TAG} insertChildAfter fail :${(err as BusinessError).code}:\n        ${(err as BusinessError).message}`, 'insertChildAfter error');\n      }\n      setTimeout(() => {\n        try {\n          frameNode?.removeChild(frameNode?.getChild(0))\n          hilog.info(0x0000, `${TEST_TAG} removeChild success`, 'success');\n        } catch (err) {\n          hilog.error(0x0000, `${TEST_TAG} removeChild fail :${(err as BusinessError).code} :\n          ${(err as BusinessError).message}`, 'removeChild error');\n        }\n      }, 2000)\n      setTimeout(() => {\n        try {\n          frameNode?.clearChildren();\n          hilog.info(0x0000, `${TEST_TAG} clearChildren success `, 'success');\n        } catch (err) {\n          hilog.error(0x0000, `${TEST_TAG} clearChildren fail: (err as BusinessError).code:\n          ${(err as BusinessError).message}`, 'clearChildren error');\n        }\n      }, 4000)\n    }\n  }\n\n  testInterfaceAboutSearch(frameNode: FrameNode | undefined | null): string {\n    let result: string = '';\n    if (frameNode) {\n      result = result + `current node is ${frameNode.getNodeType()} \\n`;\n      result = result + `parent node is ${frameNode.getParent()?.getNodeType()} \\n`;\n      result = result + `child count is ${frameNode.getChildrenCount()} \\n`;\n      result = result + `first child node is ${frameNode.getFirstChild()?.getNodeType()} \\n`;\n      result = result + `second child node is ${frameNode.getChild(1)?.getNodeType()} \\n`;\n      result = result + `previousSibling node is ${frameNode.getPreviousSibling()?.getNodeType()} \\n`;\n      result = result + `nextSibling node is ${frameNode.getNextSibling()?.getNodeType()} \\n`;\n    }\n    return result;\n  }\n\n  checkAppendChild(parent: FrameNode | undefined | null, child: FrameNode | undefined | null) {\n    try {\n      if (parent && child) {\n        parent.appendChild(child);\n        hilog.info(0x0000, `${TEST_TAG} appendChild success`, 'success');\n      }\n    } catch (err) {\n      console.error(`${TEST_TAG} appendChild fail : ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State index: number = 0;\n  @State result: string = ''\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {\n      List({ space: 20, initialIndex: 0 }) {\n        ListItem() {\n          Column({ space: 5 }) {\n            /**\n             * 请将$r('app.string.Verify_The_Child_Node_Function_Of_FrameNode')替换为实际资源文件，\n             * 在本示例中该资源文件的value值为\"验证FrameNode子节点的增、删、改功能\"\n             */\n            Text($r('app.string.Verify_The_Child_Node_Function_Of_FrameNode'))\n            // 请将$r('app.string.Operate_On_Custom_FrameNode')替换为实际资源文件，在本示例中该资源文件的value值为\"对自定义FrameNode进行操作\"\n            Button($r('app.string.Operate_On_Custom_FrameNode'))\n              .fontSize(16)\n              .width(400)\n              .onClick(() => {\n                // 对FrameNode节点进行增、删、改操作，正常实现。\n                this.myNodeController.operationFrameNodeWithFrameNode(this.myNodeController?.frameNode);\n              })\n            /**\n             * 请将$r('app.string.Operate_On_Proxy_Nodes_In_BuilderNode')替换为实际资源文件，\n             * 在本示例中该资源文件的value值为\"对BuilderNode中的代理节点进行操作\"\n             */\n            Button($r('app.string.Operate_On_Proxy_Nodes_In_BuilderNode'))\n              .fontSize(16)\n              .width(400)\n              .onClick(() => {\n                // 对BuilderNode代理节点进行增、删、改操作，捕获异常信息。\n                this.myNodeController.operationFrameNodeWithFrameNode\n                (this.myNodeController?.buttonNode?.getFrameNode());\n              })\n            /**\n             * 请将$r('app.string.Operate_On_Proxy_Nodes_In_System_Components')替换为实际资源文件，\n             * 在本示例中该资源文件的value值为\"对系统组件中的代理节点进行操作\"\n             */\n            Button($r('app.string.Operate_On_Proxy_Nodes_In_System_Components'))\n              .fontSize(16)\n              .width(400)\n              .onClick(() => {\n                // 对代理节点进行增、删、改操作，捕获异常信息。\n                this.myNodeController.operationFrameNodeWithFrameNode(this.myNodeController?.rootNode?.getParent());\n              })\n          }\n        }\n\n        ListItem() {\n          Column({ space: 5 }) {\n            /**\n             * 请将$r('app.string.Verify_Special_Scenarios_Of_FrameNode_Adding_Child_Nodes')替换为实际资源文件，\n             * 在本示例中该资源文件的value值为\"验证FrameNode添加子节点的特殊场景\"\n             */\n            Text($r('app.string.Verify_Special_Scenarios_Of_FrameNode_Adding_Child_Nodes'))\n            // 请将$r('app.string.Add_Proxy_Nodes_Of_BuilderNode')替换为实际资源文件，在本示例中该资源文件的value值为\"新增BuilderNode的代理节点\"\n            Button($r('app.string.Add_Proxy_Nodes_Of_BuilderNode'))\n              .fontSize(16)\n              .width(400)\n              .onClick(() => {\n                let buttonNode = new BuilderNode<[Params]>(this.getUIContext());\n                buttonNode.build(wrapBuilder<[Params]>(buttonBuilder), { text: 'BUTTON' })\n                this.myNodeController.checkAppendChild(this.myNodeController?.frameNode, buttonNode?.getFrameNode());\n              })\n            // 请将$r('app.string.Add_Proxy_Nodes_Of_System_Components')替换为实际资源文件，在本示例中该资源文件的value值为\"新增系统组件代理节点\"\n            Button($r('app.string.Add_Proxy_Nodes_Of_System_Components'))\n              .fontSize(16)\n              .width(400)\n              .onClick(() => {\n                this.myNodeController.checkAppendChild(this.myNodeController?.frameNode,\n                  this.myNodeController?.rootNode?.getParent());\n              })\n            // 请将$r('app.string.Add_Custom_Nodes_With_Existing_Parent_Nodes')替换为实际资源文件，在本示例中该资源文件的value值为\"新增已有父节点的自定义节点\"\n            Button($r('app.string.Add_Custom_Nodes_With_Existing_Parent_Nodes'))\n              .fontSize(16)\n              .width(400)\n              .onClick(() => {\n                this.myNodeController.checkAppendChild(this.myNodeController?.frameNode,\n                  this.myNodeController?.rootNode);\n              })\n          }\n        }\n\n        ListItem() {\n          Column({ space: 5 }) {\n            // 请将$r('app.string.Verify_Query_Function_Of_FrameNode')替换为实际资源文件，在本示例中该资源文件的value值为\"验证FrameNode节点的查询功能\"\n            Text($r('app.string.Verify_Query_Function_Of_FrameNode'))\n            // 请将$r('app.string.Operate_On_Custom_FrameNode_Again')替换为实际资源文件，在本示例中该资源文件的value值为\"对自定义FrameNode进行操作\"\n            Button($r('app.string.Operate_On_Custom_FrameNode_Again'))\n              .fontSize(16)\n              .width(400)\n              .onClick(() => {\n                // 对FrameNode节点进行进行查询。当前节点为NodeContainer的子节点。\n                this.result = this.myNodeController.testInterfaceAboutSearch(this.myNodeController?.rootNode);\n                setTimeout(() => {\n                  // 对FrameNode节点进行进行查询。rootNode下的第一个子节点。\n                  this.result = this.myNodeController.testInterfaceAboutSearch(this.myNodeController?.frameNode);\n                }, 2000)\n              })\n            /**\n             * 请将$r('app.string.Operate_On_Proxy_Nodes_In_BuilderNode_Again')替换为实际资源文件，\n             * 在本示例中该资源文件的value值为\"对BuilderNode中的代理节点进行操作\"\n             */\n            Button($r('app.string.Operate_On_Proxy_Nodes_In_BuilderNode_Again'))\n              .fontSize(16)\n              .width(400)\n              .onClick(() => {\n                // 对BuilderNode代理节点进行进行查询。当前节点为BuilderNode中的Column节点。\n                this.result =\n                  this.myNodeController.testInterfaceAboutSearch(this.myNodeController?.buttonNode?.getFrameNode());\n              })\n            /**\n             * 请将$r('app.string.Operate_On_Proxy_Nodes_In_System_Components_Again')替换为实际资源文件，\n             * 在本示例中该资源文件的value值为\"对系统组件中的代理节点进行操作\"\n             */\n            Button($r('app.string.Operate_On_Proxy_Nodes_In_System_Components_Again'))\n              .fontSize(16)\n              .width(400)\n              .onClick(() => {\n                // 对代理节点进行查询。当前节点为NodeContainer。\n                this.result =\n                  this.myNodeController.testInterfaceAboutSearch(this.myNodeController?.rootNode?.getParent());\n              })\n          }\n        }\n      }.height('50%')\n\n      Text(`Result：\\n${this.result}`)\n        .fontSize(16)\n        .width(400)\n        .height(200)\n        .padding(30)\n        .borderWidth(1)\n      Column() {\n        Text('This is a NodeContainer.')\n          .textAlign(TextAlign.Center)\n          .borderRadius(10)\n          .backgroundColor(0xFFFFFF)\n          .width('100%')\n          .fontSize(16)\n        NodeContainer(this.myNodeController)\n          .borderWidth(1)\n          .width(400)\n          .height(150)\n      }\n    }\n    .padding({\n      left: 35,\n      right: 35,\n      top: 35,\n      bottom: 35\n    })\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用moveto移动命令式节点",
      children: "使用moveTo移动命令式节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#moveto18",
        children: "moveTo"
      }), "接口可以将FrameNode节点移动到新的父节点下，从而按需改变节点树结构。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(802772)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前FrameNode如果不可修改，抛出异常信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目标父节点为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#typenode12",
        children: "typeNode"
      }), "时会校验子组件类型或个数，不满足抛出异常信息，限制情况请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#typenode12",
        children: "typeNode"
      }), "描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前不支持对无组件类型的命令式节点进行移动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅支持以下类型的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#typedframenode12",
        children: "TypedFrameNode"
      }), "进行移动操作：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#stack12",
        children: "Stack"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#xcomponent12",
        children: "XComponent"
      }), "。对于其他类型的节点，移动操作不会生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅支持根节点为以下类型组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#buildernode-1",
        children: "BuilderNode"
      }), "进行移动操作：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
        children: "Stack"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component",
        children: "EmbeddedComponent"
      }), "。对于其他类型的组件，移动操作不会生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, UIContext, typeNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  public uiContext: UIContext | null = null;\n  public rootNode: FrameNode | null = null;\n  public rowNode: FrameNode | null = null;\n  public stackNode1: FrameNode | null = null;\n  public stackNode2: FrameNode | null = null;\n  public stackNode3: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    this.rootNode = new FrameNode(uiContext);\n\n    const row = typeNode.createNode(this.uiContext, 'Row');\n    row.initialize({ space: 10 });\n    this.rowNode = row;\n    this.rootNode.appendChild(this.rowNode);\n\n    const stack1 = typeNode.createNode(this.uiContext, 'Stack');\n    stack1.commonAttribute.width(50).height(50).backgroundColor(Color.Pink);\n    this.stackNode1 = stack1;\n    this.rowNode?.appendChild(this.stackNode1);\n    const stack2 = typeNode.createNode(this.uiContext, 'Stack');\n    stack2.commonAttribute.width(50).height(50).backgroundColor(Color.Yellow);\n    this.stackNode2 = stack2;\n    this.rowNode?.appendChild(this.stackNode2);\n    const stack3 = typeNode.createNode(this.uiContext, 'Stack');\n    stack3.commonAttribute.width(50).height(50).backgroundColor(Color.Green);\n    this.stackNode3 = stack3;\n    this.rowNode?.appendChild(this.stackNode3);\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController1: MyNodeController = new MyNodeController()\n  private myNodeController2: MyNodeController = new MyNodeController()\n\n  build() {\n    Column({ space: 20 }) {\n      NodeContainer(this.myNodeController1)\n      NodeContainer(this.myNodeController2)\n      Button('move')\n        .onClick(() => {\n          this.myNodeController1.stackNode1?.moveTo(this.myNodeController2.rowNode, 2);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(41012)/* ["default"] */.A) + "",
        width: "369",
        height: "200"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置节点通用属性和事件回调",
      children: "设置节点通用属性和事件回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FrameNode提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#commonattribute12",
        children: "commonAttribute"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#commonevent12",
        children: "commonEvent"
      }), "两个对象用于设置节点的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-component-general-attributes",
        children: "通用属性"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-uicommonevent/ts-uicommonevent",
        children: "设置事件回调"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100693)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于代理节点的属性不可修改，因此通过代理节点的commonAttribute修改节点的基础属性不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置的基础事件与系统组件定义的事件平行，参与事件竞争。设置的基础事件不覆盖系统组件事件。同时设置两个事件回调的时候，优先回调系统组件事件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nclass Params {\n  public text: string = 'this is a text';\n}\n\n@Builder\nfunction buttonBuilder(params: Params) {\n  Button(params.text)\n    .fontSize(12)\n    .borderRadius(8)\n    .borderWidth(2)\n    .backgroundColor(Color.Orange)\n    .onClick((event: ClickEvent) => {\n      hilog.info(0x0000, `Button ${JSON.stringify(event)}`, 'isClicked');\n    })\n}\n\nclass MyNodeController extends NodeController {\n  public buttonNode: BuilderNode<[Params]> | null = null;\n  public frameNode: FrameNode | null = null;\n  public rootNode: FrameNode | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(buttonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.rootNode === null) {\n      this.rootNode = new FrameNode(uiContext);\n      // 对rootNode进行属性修改，该节点为自定义的FrameNode节点，修改生效\n      this.rootNode.commonAttribute\n        .width('100%')\n        .height(100)\n        .borderWidth(1)\n        .backgroundColor(Color.Gray)\n    }\n\n    if (this.frameNode === null) {\n      this.frameNode = new FrameNode(uiContext);\n      // 对frameNode进行属性修改，该节点为自定义的FrameNode节点，修改生效\n      this.frameNode.commonAttribute\n        .width('50%')\n        .height(50)\n        .borderWidth(1)\n        .backgroundColor(Color.Pink);\n      this.rootNode.appendChild(this.frameNode);\n    }\n    if (this.buttonNode === null) {\n      this.buttonNode = new BuilderNode<[Params]>(uiContext);\n      this.buttonNode.build(this.wrapBuilder, { text: 'This is a Button' });\n      // 对BuilderNode中获取的FrameNode进行属性修改，该节点非自定义的FrameNode节点，修改不生效\n      this.buttonNode?.getFrameNode()?.commonAttribute.position({ x: 100, y: 100 });\n      this.rootNode.appendChild(this.buttonNode.getFrameNode());\n    }\n    return this.rootNode;\n  }\n\n  modifyNode(frameNode: FrameNode | null | undefined, sizeValue: SizeOptions, positionValue: Position) {\n    if (frameNode) {\n      frameNode.commonAttribute.size(sizeValue).position(positionValue);\n    }\n  }\n\n  addClickEvent(frameNode: FrameNode | null | undefined) {\n    if (frameNode) {\n      frameNode.commonEvent.setOnClick((event: ClickEvent) => {\n        console.info(`FrameNode ${JSON.stringify(event)}`);\n      })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {\n      Column({ space: 10 }) {\n        // 请将$r('app.string.Modify_Node_Common_Properties_Width_And_Height')替换为实际资源文件，在本示例中该资源文件的value值为\"修改节点通用属性-宽高\"\n        Text($r('app.string.Modify_Node_Common_Properties_Width_And_Height'))\n        Button('modify ArkTS-FrameNode')\n          .onClick(() => {\n            // 获取到的是当前页面中的开发者创建的FrameNode对象，该节点可修改。即节点大小与位置。\n            hilog.info(0x0000, `Check the weather the node can be modified ${this.myNodeController?.frameNode\n            ?.isModifiable()}`, 'isClicked');\n            this.myNodeController.modifyNode(this.myNodeController?.frameNode, { width: 150, height: 100 }, {\n              x: 100,\n              y: 0\n            });\n          })\n        Button('modify FrameNode get by BuilderNode')\n          .onClick(() => {\n            // 获取到的是当前页面中的BuilderNode的根节点，该节点不可修改。即节点大小与位置未发生改变。\n            hilog.info(0x0000, `Check the weather the node can be modified\n            ${this.myNodeController?.buttonNode?.getFrameNode()\n            ?.isModifiable()}`, 'isClicked');\n            this.myNodeController.modifyNode(this.myNodeController?.buttonNode?.getFrameNode(), {\n              width: 100,\n              height: 100\n            }, { x: 50, y: 50 });\n          })\n        Button('modify proxyFrameNode get by search')\n          .onClick(() => {\n            // rootNode调用getParent()获取到的是当前页面中的NodeContainer节点，该节点不可修改。即节点大小与位置未发生改变。\n            hilog.info(0x0000,\n              `Check the weather the node can be modified ${this.myNodeController?.rootNode?.getParent()\n              ?.isModifiable()}`, 'isClicked');\n            this.myNodeController.modifyNode(this.myNodeController?.rootNode?.getParent(), {\n              width: 500,\n              height: 500\n            }, {\n              x: 0,\n              y: 0\n            });\n          })\n      }\n      .padding({\n        left: 35,\n        right: 35,\n        top: 35,\n        bottom: 35\n      })\n\n      Column({ space: 10 }) {\n        // 请将$r('app.string.Modify_Node_Click_Event')替换为实际资源文件，在本示例中该资源文件的value值为\"修改节点点击事件\"\n        Text($r('app.string.Modify_Node_Click_Event'))\n        Button('add click event to ArkTS-FrameNode')\n          .onClick(() => {\n            // 获取到的是当前页面中的开发者创建的FrameNode对象，该节点可增加点击事件。\n            // 增加的点击事件参与事件竞争，即点击事件会在该节点被消费且不不再向父组件冒泡。\n            hilog.info(0x0000,\n              `Check the weather the node can be modified ${this.myNodeController?.rootNode?.getParent()\n              ?.isModifiable()}`, 'isClicked');\n            this.myNodeController.addClickEvent(this.myNodeController?.frameNode);\n          })\n        Button('add click event to FrameNode get by BuilderNode')\n          .onClick(() => {\n            // 获取到的是当前页面中的BuilderNode的根节点，该类节点可增加点击事件。\n            // 点击的时候优先回调通过系统组件接口设置的click事件回调，然后回调通过commonEvent增加的click监听。\n            hilog.info(0x0000, `Check the weather the node can be modified\n            ${this.myNodeController?.buttonNode?.getFrameNode()\n            ?.isModifiable()}`, 'isClicked');\n            this.myNodeController.addClickEvent(this.myNodeController?.buttonNode?.getFrameNode());\n          })\n        Button('add click event to proxyFrameNode get by search')\n          .onClick(() => {\n            // rootNode调用getParent()获取到的是当前页面中的NodeContainer节点，该类节点可增加点击事件。\n            hilog.info(0x0000,\n              `Check the weather the node can be modified ${this.myNodeController?.rootNode?.getParent()\n              ?.isModifiable()}`, 'isClicked');\n            this.myNodeController.addClickEvent(this.myNodeController?.rootNode?.getParent());\n          })\n      }\n      .padding({\n        left: 35,\n        right: 35,\n        top: 35,\n        bottom: 35\n      })\n\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n        .width('100%')\n        .height(100)\n        .onClick((event: ClickEvent) => {\n          hilog.info(0x0000, `NodeContainer ${JSON.stringify(event)}`, 'isClicked');\n        })\n    }\n    .padding({\n      left: 35,\n      right: 35,\n      top: 35,\n      bottom: 35\n    })\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义测量布局与绘制",
      children: "自定义测量布局与绘制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过重写", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#ondraw12",
        children: "onDraw"
      }), "方法，可以自定义FrameNode的绘制内容。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#invalidate12",
        children: "invalidate"
      }), "接口可以主动触发节点的重新绘制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过重写", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#onmeasure12",
        children: "onMeasure"
      }), "可以自定义FrameNode的测量方式，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#measure12",
        children: "measure"
      }), "可以主动传递布局约束触发重新测量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过重写", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#onlayout12",
        children: "onLayout"
      }), "方法可以自定义FrameNode的布局方式，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#layout12",
        children: "layout"
      }), "方法可以主动传递位置信息并触发重新布局。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#setneedslayout12",
        children: "setNeedsLayout"
      }), "可以将当前节点标记，在下一帧触发重新布局。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513708)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对节点进行dispose解引用后，由于FrameNode对象不再对应一个实体节点，invalidate无法触发原有绑定节点的刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过onDraw方法进行的自定义绘制，绘制内容大小无法超出组件大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawContext, FrameNode, NodeController, Position, Size, UIContext, LayoutConstraint } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nfunction getChildLayoutConstraint(constraint: LayoutConstraint, child: FrameNode): LayoutConstraint {\n  // 获取子节点用户设置的宽高\n  const size = child.getUserConfigSize();\n\n  // 计算子节点宽度\n  const width = Math.max(\n    Math.min(constraint.maxSize.width, size.width.value),\n    constraint.minSize.width\n  );\n\n  // 计算子节点高度\n  const height = Math.max(\n    Math.min(constraint.maxSize.height, size.height.value),\n    constraint.minSize.height\n  );\n  const finalSize: Size = { width, height };\n  const res: LayoutConstraint = {\n    maxSize: finalSize,\n    minSize: finalSize,\n    percentReference: finalSize\n  };\n\n  return res;\n}\n\nclass MyFrameNode extends FrameNode {\n  public width: number = 100;\n  public offsetY: number = 0;\n  private space: number = 1;\n  private uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    super(uiContext);\n    this.uiContext = uiContext;\n  }\n\n  // 重写布局测量方法\n  onMeasure(constraint: LayoutConstraint): void {\n    let sizeRes: Size = { width: this.uiContext.vp2px(100), height: this.uiContext.vp2px(100) };\n\n    // 遍历所有子节点，计算总尺寸\n    for (let i = 0; i < this.getChildrenCount(); i++) {\n      let child = this.getChild(i);\n      if (child) {\n        let childConstraint = getChildLayoutConstraint(constraint, child);\n        child.measure(childConstraint); // 触发子节点的测量\n        let size = child.getMeasuredSize();\n        sizeRes.height += size.height + this.space;\n        sizeRes.width = Math.max(sizeRes.width, size.width);\n      }\n    }\n    this.setMeasuredSize(sizeRes);\n  }\n\n  // 重写布局排列方法\n  onLayout(position: Position): void {\n    for (let i = 0; i < this.getChildrenCount(); i++) {\n      let child = this.getChild(i);\n      if (child) {\n        child.layout({\n          x: this.uiContext.vp2px(100),\n          y: this.uiContext.vp2px(this.offsetY)\n        });\n        let layoutPosition = child.getLayoutPosition();\n        hilog.info(0x0000, 'testTag', `child position: ${JSON.stringify(layoutPosition)}`);\n      }\n    }\n    this.setLayoutPosition(position);\n  }\n\n  // 重写自定义绘制方法\n  onDraw(context: DrawContext) {\n    const canvas = context.canvas;\n    const pen = new drawing.Pen();\n    pen.setStrokeWidth(15);\n    pen.setColor({\n      alpha: 255,\n      red: 255,\n      green: 0,\n      blue: 0\n    });\n    canvas.attachPen(pen);\n    canvas.drawRect({\n      left: 50,\n      right: this.width + 50,\n      top: 50,\n      bottom: this.width + 50,\n    });\n    canvas.detachPen();\n  }\n\n  addWidth() {\n    this.width = (this.width + 10) % 50 + 100;\n  }\n}\n\nclass MyNodeController extends NodeController {\n  public rootNode: MyFrameNode | null = null;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new MyFrameNode(context);\n    this.rootNode?.commonAttribute?.size({ width: 100, height: 100 }).backgroundColor(Color.Green);\n    let frameNode: FrameNode = new FrameNode(context);\n    this.rootNode.appendChild(frameNode);\n    frameNode.commonAttribute.width(10).height(10).backgroundColor(Color.Pink);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(this.nodeController)\n          .width('100%')\n          .height(200)\n          .backgroundColor('#FFF0F0F0')\n\n        // 触发节点重绘\n        Button('Invalidate')\n          .margin(10)\n          .onClick(() => {\n            this.nodeController?.rootNode?.addWidth();\n            this.nodeController?.rootNode?.invalidate();\n          })\n\n        // 触发布局更新\n        Button('UpdateLayout')\n          .onClick(() => {\n            let node = this.nodeController.rootNode;\n            node!.offsetY = (node!.offsetY + 10) % 110;\n            this.nodeController?.rootNode?.setNeedsLayout();\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查找节点及获取基础信息",
      children: "查找节点及获取基础信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FrameNode提供了查询接口用于返回实体节点的基础信息。具体返回的信息内容参考FrameNode中提供的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查找获得FrameNode的方式包括三种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getframenodebyid12",
          children: "getFrameNodeById"
        }), "获取。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getframenodebyuniqueid12",
          children: "getFrameNodeByUniqueId"
        }), "获取。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer",
          children: "无感监听"
        }), "获取。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(559565)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、当前接口提供的可查询的信息包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["节点大小：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getmeasuredsize12",
          children: "getMeasuredSize"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuserconfigsize12",
          children: "getUserConfigSize"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["布局信息：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontowindow12",
          children: "getPositionToWindow"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoparent12",
          children: "getPositionToParent"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getlayoutposition12",
          children: "getLayoutPosition"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuserconfigborderwidth12",
          children: "getUserConfigBorderWidth"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuserconfigpadding12",
          children: "getUserConfigPadding"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuserconfigmargin12",
          children: "getUserConfigMargin"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["节点信息：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getid12",
          children: "getId"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuniqueid12",
          children: "getUniqueId"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getnodetype12",
          children: "getNodeType"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getopacity12",
          children: "getOpacity"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#isvisible12",
          children: "isVisible"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#iscliptoframe12",
          children: "isClipToFrame"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#isattached12",
          children: "isAttached"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getinspectorinfo12",
          children: "getInspectorInfo"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getcustomproperty12",
          children: "getCustomProperty"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2、无法获取UINode类型节点，例如：JsView节点、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
        children: "Span"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan",
        children: "ContainerSpan"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot",
        children: "ContentSlot"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-foreach/ts-rendering-control-foreach",
        children: "ForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "、if/else组件等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取节点位置偏移信息",
      children: "获取节点位置偏移信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FrameNode提供了查询节点相对窗口、父组件以及屏幕位置偏移的信息接口（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontowindow12",
        children: "getPositionToWindow"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoparent12",
        children: "getPositionToParent"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoscreen12",
        children: "getPositionToScreen"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getglobalpositionondisplay20",
        children: "getGlobalPositionOnDisplay"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontowindowwithtransform12",
        children: "getPositionToWindowWithTransform"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoparentwithtransform12",
        children: "getPositionToParentWithTransform"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoscreenwithtransform12",
        children: "getPositionToScreenWithTransform"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getlayoutposition12",
        children: "getLayoutPosition"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuserconfigborderwidth12",
        children: "getUserConfigBorderWidth"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuserconfigpadding12",
        children: "getUserConfigPadding"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuserconfigmargin12",
        children: "getUserConfigMargin"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontowindow12",
        children: "getPositionToWindow"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoparent12",
        children: "getPositionToParent"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoscreen12",
        children: "getPositionToScreen"
      }), "三个接口获取到的位置信息关系如下图所示："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(457997)/* ["default"] */.A) + "",
        width: "666",
        height: "766"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TEST_TAG: string = 'FrameNode'\n\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.frameNode = new FrameNode(uiContext);\n    this.rootNode.appendChild(this.frameNode);\n    return this.rootNode;\n  }\n\n  getPositionToWindow() {\n    let positionToWindow = this.rootNode?.getPositionToWindow(); // 获取FrameNode相对于窗口的位置偏移\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(positionToWindow)}`, 'positionToWindow');\n  }\n\n  getPositionToParent() {\n    let positionToParent = this.rootNode?.getPositionToParent(); // 获取FrameNode相对于父组件的位置偏移\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(positionToParent)}`, 'positionToParent');\n  }\n\n  getPositionToScreen() {\n    let positionToScreen = this.rootNode?.getPositionToScreen(); // 获取FrameNode相对于屏幕的位置偏移\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(positionToScreen)}`, 'positionToScreen');\n  }\n\n  getGlobalPositionOnDisplay() {\n    let positionOnGlobalDisplay = this.rootNode?.getGlobalPositionOnDisplay(); // 获取FrameNode相对于全局屏幕的位置偏移\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(positionOnGlobalDisplay)}`, 'positionOnGlobalDisplay');\n  }\n\n  getPositionToWindowWithTransform() {\n    let positionToWindowWithTransform =\n      this.rootNode?.getPositionToWindowWithTransform(); // 获取FrameNode相对于窗口带有绘制属性的位置偏移\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(positionToWindowWithTransform)}`, 'positionToWindowWithTransform');\n  }\n\n  getPositionToParentWithTransform() {\n    let positionToParentWithTransform =\n      this.rootNode?.getPositionToParentWithTransform(); // 获取FrameNode相对于父组件带有绘制属性的位置偏移\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(positionToParentWithTransform)}`, 'positionToParentWithTransform');\n  }\n\n  getPositionToScreenWithTransform() {\n    let positionToScreenWithTransform =\n      this.rootNode?.getPositionToScreenWithTransform(); // 获取FrameNode相对于屏幕带有绘制属性的位置偏移\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(positionToScreenWithTransform)}`, 'positionToScreenWithTransform');\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {\n      Button('getPositionToWindow')\n        .width(300)\n        .onClick(() => {\n          this.myNodeController.getPositionToWindow();\n        })\n      Button('getPositionToParent')\n        .width(300)\n        .onClick(() => {\n          this.myNodeController.getPositionToParent();\n        })\n      Button('getPositionToScreen')\n        .width(300)\n        .onClick(() => {\n          this.myNodeController.getPositionToScreen();\n        })\n      Button('getGlobalPositionOnDisplay')\n        .width(300)\n        .onClick(() => {\n          this.myNodeController.getGlobalPositionOnDisplay();\n        })\n      Button('getPositionToParentWithTransform')\n        .width(300)\n        .onClick(() => {\n          this.myNodeController.getPositionToParentWithTransform();\n        })\n      Button('getPositionToWindowWithTransform')\n        .width(300)\n        .onClick(() => {\n          this.myNodeController.getPositionToWindowWithTransform();\n        })\n      Button('getPositionToScreenWithTransform')\n        .width(300)\n        .onClick(() => {\n          this.myNodeController.getPositionToScreenWithTransform();\n        })\n      Column() {\n        Text('This is a NodeContainer.')\n          .textAlign(TextAlign.Center)\n          .borderRadius(10)\n          .backgroundColor(0xFFFFFF)\n          .width('100%')\n          .fontSize(16)\n        NodeContainer(this.myNodeController)\n          .borderWidth(1)\n          .width(300)\n          .height(100)\n      }\n    }\n    .padding({\n      left: 35,\n      right: 35,\n      top: 35,\n      bottom: 35\n    })\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过typenode创建具体类型的framenode节点",
      children: "通过typeNode创建具体类型的FrameNode节点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过TypeNode创建具体类型的FrameNode节点，可以根据属性获取接口来检索用户设置的属性信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext, BuilderNode, typeNode } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nclass Params {\n  text: string = '';\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .id('buildText')\n      .border({ width: 1 })\n      .padding(1)\n      .fontSize(25)\n      .fontWeight(FontWeight.Bold)\n      .margin({ top: 10 })\n      .visibility(Visibility.Visible)\n      .opacity(0.7)\n      .customProperty('key1', 'value1')\n      .width(300)\n  }\n}\n\nconst TEST_TAG: string = 'FrameNode'\n\nclass MyNodeController extends NodeController {\n  public frameNode: typeNode.Column | null = null;\n  public uiContext: UIContext | undefined = undefined;\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Params]> | null = null;\n  public textTypeNode: typeNode.Text | null = null;\n  private message: string = 'DEFAULT';\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.uiContext = uiContext;\n    this.frameNode = typeNode.createNode(uiContext, 'Column');\n    this.frameNode.attribute\n      .width('100%')\n      .height('100%')\n    this.rootNode.appendChild(this.frameNode);\n    this.textNode = new BuilderNode(uiContext);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    this.frameNode.appendChild(this.textNode.getFrameNode());\n    this.textTypeNode = typeNode.createNode(uiContext, 'Text');\n    this.textTypeNode.initialize('textTypeNode')\n      .fontSize(25)\n      .visibility(Visibility.Visible)\n      .id('textTypeNode')\n    this.frameNode.appendChild(this.textTypeNode);\n    return this.rootNode;\n  }\n\n  removeChild(frameNode: FrameNode) {\n    let parent = frameNode.getParent();\n    if (parent) {\n      parent.removeChild(frameNode);\n\n    }\n  }\n\n  getUserConfigBorderWidth(frameNode: FrameNode) {\n    let userConfigBorderWidth = frameNode?.getUserConfigBorderWidth(); // 获取用户设置的边框宽度\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(userConfigBorderWidth)}`, 'userConfigBorderWidth');\n  }\n\n  getUserConfigPadding(frameNode: FrameNode) {\n    let userConfigPadding = frameNode?.getUserConfigPadding(); // 获取用户设置的内边距\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(userConfigPadding)}`, 'userConfigPadding');\n  }\n\n  getUserConfigMargin(frameNode: FrameNode) {\n    let userConfigMargin = frameNode?.getUserConfigMargin(); // 获取用户设置的外边距\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(userConfigMargin)}`, 'userConfigMargin');\n  }\n\n  getUserConfigSize(frameNode: FrameNode) {\n    let userConfigSize = frameNode?.getUserConfigSize(); // 获取用户设置的宽高\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(userConfigSize)}`, 'userConfigSize');\n  }\n\n  getId(frameNode: FrameNode) {\n    let id = frameNode?.getId(); // 获取用户设置的节点ID\n    hilog.info(0x0000, `${TEST_TAG} ${id}`, 'getId');\n  }\n\n  getUniqueId(frameNode: FrameNode) {\n    let uniqueId = frameNode?.getUniqueId(); // 获取系统分配的唯一标识的节点UniqueID\n    hilog.info(0x0000, `${TEST_TAG} ${uniqueId}`, 'uniqueId');\n  }\n\n  getNodeType(frameNode: FrameNode) {\n    let nodeType = frameNode?.getNodeType(); // 获取节点的类型\n    hilog.info(0x0000, `${TEST_TAG} ${nodeType}`, 'nodeType');\n  }\n\n  getOpacity(frameNode: FrameNode) {\n    let opacity = frameNode?.getOpacity(); // 获取节点的不透明度\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(opacity)}`, 'opacity');\n  }\n\n  isVisible(frameNode: FrameNode) {\n    let visible = frameNode?.isVisible(); // 获取节点是否可见\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(visible)}`, 'visible');\n  }\n\n  isClipToFrame(frameNode: FrameNode) {\n    let clipToFrame = frameNode?.isClipToFrame(); // 获取节点是否是剪裁到组件区域\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(clipToFrame)}`, 'clipToFrame');\n  }\n\n  isAttached(frameNode: FrameNode) {\n    let attached = frameNode?.isAttached(); // 获取节点是否被挂载到主节点树上\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(attached)}`, 'attached');\n  }\n\n  getInspectorInfo(frameNode: FrameNode) {\n    let inspectorInfo = frameNode?.getInspectorInfo(); // 获取节点的结构信息\n    hilog.info(0x0000, `${TEST_TAG} ${JSON.stringify(inspectorInfo)}`, 'inspectorInfo');\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  @State index: number = 0;\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {\n      Column() {\n        Text('This is a NodeContainer.')\n          .textAlign(TextAlign.Center)\n          .borderRadius(10)\n          .backgroundColor(0xFFFFFF)\n          .width('100%')\n          .fontSize(16)\n        NodeContainer(this.myNodeController)\n          .borderWidth(1)\n          .width(300)\n          .height(100)\n      }\n\n      Button('getUserConfigBorderWidth')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.getUserConfigBorderWidth(node);\n            }\n          }\n        })\n      Button('getUserConfigPadding')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.getUserConfigPadding(node);\n            }\n          }\n        })\n      Button('getUserConfigMargin')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.getUserConfigMargin(node);\n            }\n          }\n        })\n      Button('getUserConfigSize')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.getUserConfigSize(node);\n            }\n          }\n        })\n      Button('getId')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.getId(node);\n            }\n          }\n        })\n      Button('getUniqueId')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.getUniqueId(node);\n            }\n          }\n        })\n      Button('getNodeType')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.getNodeType(node);\n            }\n          }\n        })\n      Button('getOpacity')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.getOpacity(node);\n            }\n          }\n        })\n      Button('isVisible')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.isVisible(node);\n            }\n          }\n        })\n      Button('isClipToFrame')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.isClipToFrame(node);\n            }\n          }\n        })\n      Button('isAttached')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.isAttached(node);\n            }\n          }\n        })\n      Button('remove Text')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('textTypeNode') || null;\n            if (node) {\n              this.myNodeController.removeChild(node);\n              this.myNodeController.isAttached(node);\n            }\n          }\n        })\n      Button('getInspectorInfo')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              this.myNodeController.getInspectorInfo(node);\n            }\n          }\n        })\n      Button('getCustomProperty')\n        .width(300)\n        .onClick(() => {\n          const uiContext: UIContext = this.getUIContext();\n          if (uiContext) {\n            const node: FrameNode | null = uiContext.getFrameNodeById('buildText') || null;\n            if (node) {\n              const property = node.getCustomProperty('key1');\n              hilog.info(0x0000, TEST_TAG, JSON.stringify(property));\n            }\n          }\n        })\n    }\n    .padding({\n      left: 35,\n      right: 35,\n      top: 35,\n      bottom: 35\n    })\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解除当前framenode对象对实体framenode节点的引用关系",
      children: "解除当前FrameNode对象对实体FrameNode节点的引用关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#dispose12",
        children: "dispose"
      }), "接口可以立即解除当前FrameNode对象对实体FrameNode节点的引用关系。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(213273)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用dispose方法后，FrameNode对象不再对应任何实际的FrameNode节点。此时，若尝试调用以下查询接口：getMeasuredSize、getLayoutPosition、getUserConfigBorderWidth、getUserConfigPadding、getUserConfigMargin、getUserConfigSize，将导致应用程序触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-stability/arkts-stability-guide#jscrash",
        children: "jscrash"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuniqueid12",
        children: "getUniqueId"
      }), "可以判断当前FrameNode是否对应一个实体FrameNode节点。当UniqueId大于0时表示该对象对应一个实体FrameNode节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, BuilderNode } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TEST_TAG: string = 'FrameNode';\n\n@Component\nstruct TestComponent {\n  build() {\n    Column() {\n      Text('This is a BuilderNode.')\n        .fontSize(16)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info(`${TEST_TAG} aboutToAppear`);\n  }\n\n  aboutToDisappear() {\n    console.info(`${TEST_TAG} aboutToDisappear`);\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  TestComponent()\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private builderNode: BuilderNode<[]> | null = null;\n\n  // 创建并初始化自定义节点树\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.builderNode = new BuilderNode(uiContext, { selfIdealSize: { width: 200, height: 100 } });\n    this.builderNode.build(new WrappedBuilder(buildComponent));\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.size = { width: 200, height: 200 };\n      rootRenderNode.backgroundColor = 0xff00ff00;\n      rootRenderNode.appendChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n\n    return this.rootNode;\n  }\n\n  // 打印节点的唯一ID\n  printUniqueId(): void {\n    if (this.rootNode !== null && this.builderNode !== null) {\n      hilog.info(0x0000, `${TEST_TAG} rootNode's uniqueId: ${this.rootNode.getUniqueId()}`, 'isClicked');\n      const frameNode = this.builderNode.getFrameNode();\n      if (frameNode) {\n        hilog.info(0x0000, `${TEST_TAG} the uniqueId of builderNode's framenode: ${frameNode.getUniqueId()}`,\n          'isClicked');\n      } else {\n        hilog.info(0x0000, `${TEST_TAG} builderNode's framenode is undefined`, 'isClicked');\n      }\n    }\n  }\n\n  // 销毁所有自定义节点\n  disposeFrameNode(): void {\n    if (this.rootNode !== null && this.builderNode !== null) {\n      hilog.info(0x0000, `${TEST_TAG} disposeFrameNode`, 'isCLicked');\n      this.rootNode.removeChild(this.builderNode.getFrameNode());\n      this.builderNode.dispose();\n\n      this.rootNode.dispose();\n    }\n  }\n\n  removeBuilderNode(): void {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null && this.builderNode !== null && this.builderNode.getFrameNode() !== null) {\n      // 从根渲染节点中移除BuilderNode的渲染节点\n      rootRenderNode.removeChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('FrameNode dispose')\n        .onClick(() => {\n          this.myNodeController.printUniqueId();\n          this.myNodeController.disposeFrameNode(); // 执行节点销毁\n          this.myNodeController.printUniqueId();\n        })\n        .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询当前framenode是否解除引用",
      children: "查询当前FrameNode是否解除引用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#isdisposed20",
        children: "isDisposed"
      }), "接口查询当前FrameNode对象是否已解除与后端实体节点的引用关系，从而可以在操作节点前检查其有效性，避免潜在风险。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(100)\n      .height(100)\n      .backgroundColor(Color.Pink);\n\n    return this.rootNode;\n  }\n\n  disposeFrameNode() {\n    // 解除当前FrameNode对象对实体FrameNode节点的引用关系\n    this.rootNode?.dispose();\n  }\n\n  isDisposed(): string {\n    if (this.rootNode !== null) {\n      // 查询FrameNode是否解除引用\n      if (this.rootNode.isDisposed()) {\n        return 'frameNode isDisposed is true';\n      } else {\n        return 'frameNode isDisposed is false';\n      }\n    }\n    return 'frameNode is null';\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State text: string = ''\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('FrameNode dispose')\n        .onClick(() => {\n          this.myNodeController.disposeFrameNode();\n          this.text = '';\n        })\n        .width(200)\n        .height(50)\n      Button('FrameNode isDisposed')\n        .onClick(() => {\n          this.text = this.myNodeController.isDisposed();\n        })\n        .width(200)\n        .height(50)\n      Text(this.text)\n        .fontSize(25)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framenode的数据懒加载能力",
      children: "FrameNode的数据懒加载能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#nodeadapter12",
        children: "NodeAdapter"
      }), "对象替代ArkTS侧的LazyForEach功能，提供自定义节点的数据懒加载功能，实现按需迭代数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(119917)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入参不能为负数，入参为负数时不做处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, NodeAdapter, typeNode } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TEST_TAG: string = 'FrameNode';\n\nclass MyNodeAdapter extends NodeAdapter {\n  uiContext: UIContext;\n  cachePool: FrameNode[] = new Array();\n  changed: boolean = false;\n  reloadTimes: number = 0;\n  data: Array<string> = new Array();\n  hostNode?: FrameNode;\n\n  constructor(uiContext: UIContext, count: number) {\n    super();\n    this.uiContext = uiContext;\n    this.totalNodeCount = count;\n    this.loadData();\n  }\n\n  // 重新加载列表数据\n  reloadData(count: number): void {\n    this.reloadTimes++;\n    NodeAdapter.attachNodeAdapter(this, this.hostNode);\n    this.totalNodeCount = count;\n    this.loadData();\n    this.reloadAllItems();\n  }\n\n  // 刷新数据\n  refreshData(): void {\n    let items = this.getAllAvailableItems()\n    hilog.info(0x0000, `TEST_TAG ' get All items:' + ${items.length}`, 'isCLicked');\n    this.totalNodeCount -= 1;\n    this.reloadAllItems();\n  }\n\n  // 解除适配器与宿主节点的绑定\n  detachData(): void {\n    NodeAdapter.detachNodeAdapter(this.hostNode);\n    this.reloadTimes = 0;\n  }\n\n  // 根据当前节点总数和重载次数生成列表项的文本数据\n  loadData(): void {\n    for (let i = 0; i < this.totalNodeCount; i++) {\n      this.data[i] = 'Adapter ListItem ' + i + ' r:' + this.reloadTimes;\n    }\n  }\n\n  // 修改指定范围的列表数据\n  changeData(from: number, count: number): void {\n    this.changed = !this.changed;\n    for (let i = 0; i < count; i++) {\n      let index = i + from;\n      this.data[index] = 'Adapter ListItem ' + (this.changed ? 'changed:' : '') + index + ' r:' + this.reloadTimes;\n    }\n    this.reloadItem(from, count);\n  }\n\n  // 插入数据到指定位置\n  insertData(from: number, count: number): void {\n    for (let i = 0; i < count; i++) {\n      let index = i + from;\n      this.data.splice(index, 0, 'Adapter ListItem ' + from + '-' + i);\n    }\n    this.insertItem(from, count); // 通知列表插入对应节点\n    this.totalNodeCount += count;\n    hilog.info(0x0000, `TEST_TAG after insert count ${this.totalNodeCount}`, 'insertData');\n  }\n\n  // 从指定位置删除数据\n  removeData(from: number, count: number): void {\n    let arr = this.data.splice(from, count);\n    this.removeItem(from, count);\n    this.totalNodeCount -= arr.length;\n    hilog.info(0x0000, `TEST_TAG after remove count: ${this.totalNodeCount}`, 'removeData');\n  }\n\n  moveData(from: number, to: number): void {\n    let tmp = this.data.splice(from, 1);\n    this.data.splice(to, 0, tmp[0]);\n    this.moveItem(from, to); // 通知列表移动节点位置\n  }\n\n  onAttachToNode(target: FrameNode): void {\n    hilog.info(0x0000, `TEST_TAG onAttachToNode id: ${target.getUniqueId()}`, 'onAttachToNode');\n    this.hostNode = target;\n  }\n\n  // 适配器从宿主节点解绑时触发\n  onDetachFromNode(): void {\n    hilog.info(0x0000, 'TEST_TAG onDetachFromNode', 'onDetachFromNode');\n  }\n\n  // 获取指定索引的子节点ID\n  onGetChildId(index: number): number {\n    hilog.info(0x0000, `TEST_TAG onGetChildId: ${index}`, 'onGetChildId');\n    return index;\n  }\n\n  onCreateChild(index: number): FrameNode {\n    hilog.info(0x0000, `TEST_TAG + ' onCreateChild:' + ${index}`, 'onCreateChild');\n    // 缓存池有可用节点时，优先复用\n    if (this.cachePool.length > 0) {\n      let cacheNode = this.cachePool.pop();\n      if (cacheNode !== undefined) {\n        hilog.info(0x0000, `TEST_TAG onCreateChild reused id: ${cacheNode.getUniqueId()}`, 'getUniqueId');\n        let text = cacheNode?.getFirstChild();\n        let textNode = text as typeNode.Text;\n        textNode?.initialize(this.data[index]).fontSize(20);\n        return cacheNode;\n      }\n    }\n    // 无缓存时创建新节点\n    hilog.info(0x0000, 'TEST_TAG onCreateChild createNew', 'createNew');\n    let itemNode = typeNode.createNode(this.uiContext, 'ListItem');\n    let textNode = typeNode.createNode(this.uiContext, 'Text');\n    textNode.initialize(this.data[index]).fontSize(20);\n    itemNode.appendChild(textNode);\n    return itemNode;\n  }\n\n  onDisposeChild(id: number, node: FrameNode): void {\n    hilog.info(0x0000, `TEST_TAG onDisposeChild: ${id}`, 'onDisposeChild');\n    if (this.cachePool.length < 10) {\n      if (!this.cachePool.includes(node)) {\n        hilog.info(0x0000, `TEST_TAG caching node id: ${node.getUniqueId()}`, 'getUniqueId');\n        this.cachePool.push(node);\n      }\n    } else {\n      node.dispose();\n    }\n  }\n\n  onUpdateChild(id: number, node: FrameNode): void {\n    let index = id;\n    let text = node.getFirstChild();\n    let textNode = text as typeNode.Text;\n    textNode?.initialize(this.data[index]).fontSize(20);\n  }\n}\n\nclass MyNodeAdapterController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  public nodeAdapter: MyNodeAdapter | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    // 创建List节点并配置样式\n    let listNode = typeNode.createNode(uiContext, 'List');\n    listNode.initialize({ space: 3 }).borderWidth(2).borderColor(Color.Black);\n    this.rootNode.appendChild(listNode);\n    // 初始化适配器并关联到List节点\n    this.nodeAdapter = new MyNodeAdapter(uiContext, 100);\n    NodeAdapter.attachNodeAdapter(this.nodeAdapter, listNode);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  adapterController: MyNodeAdapterController = new MyNodeAdapterController();\n  aboutToDisappear(): void {\n    this.adapterController.nodeAdapter?.dispose();\n  }\n  build() {\n    Column() {\n      Text('ListNode Adapter');\n      NodeContainer(this.adapterController)\n        .width(300).height(300)\n        .borderWidth(1).borderColor(Color.Black)\n      Row() {\n        Button('Reload')\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.reloadData(50);\n          })\n        Button('Change')\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.changeData(5, 10)\n          })\n        Button('Insert')\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.insertData(10, 10);\n          })\n      }\n\n      Row() {\n        Button('Remove')\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.removeData(10, 10);\n          })\n        Button('Move')\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.moveData(2, 5);\n          })\n        Button('Refresh')\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.refreshData();\n          })\n        Button('Detach')\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.detachData();\n          })\n      }\n    }.borderWidth(1)\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询lazyforeach中的framenode节点信息",
      children: "查询LazyForEach中的FrameNode节点信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果FrameNode子节点中包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "节点，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getchild15",
        children: "getChild"
      }), "接口支持指定子节点展开模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#expandmode15",
        children: "ExpandMode"
      }), "，以不同展开模式获取子节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持如下子节点展开模式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExpandMode.NOT_EXPAND：表示不展开当前FrameNode的子节点。如果FrameNode子节点中包含LazyForEach节点，获取在主节点树上的子节点时，不展开当前FrameNode的子节点。子节点序列号按在主节点树上的子节点计算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExpandMode.EXPAND：表示展开当前FrameNode的子节点。如果FrameNode子节点中包含LazyForEach节点，获取任何子节点时，展开当前FrameNode的子节点。子节点序列号按所有子节点计算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExpandMode.LAZY_EXPAND：表示按需展开当前FrameNode的子节点。如果FrameNode子节点中包含LazyForEach节点，获取在主节点树上的子节点时，不展开当前FrameNode的子节点；获取不在主节点树上的子节点时，展开当前FrameNode的子节点。子节点序列号按所有子节点计算。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getfirstchildindexwithoutexpand15",
        children: "getFirstChildIndexWithoutExpand"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getlastchildindexwithoutexpand15",
        children: "getLastChildIndexWithoutExpand"
      }), "获取当前节点第一个和最后一个在主节点树上的子节点的序列号，其中子节点序列号按所有子节点计算。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext, BuilderNode, ExpandMode, LengthUnit } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TEST_TAG: string = 'FrameNode ';\n\n// BasicDataSource实现了IDataSource接口，用于管理listener监听，以及通知LazyForEach数据更新\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      hilog.info(0x0000, 'add listener', 'registerDataChangeListener');\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      hilog.info(0x0000, 'remove listener', 'unregisterDataChangeListener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.ADD, index: index}]);\n    })\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.CHANGE, index: index}]);\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.DELETE, index: index}]);\n    })\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.EXCHANGE, index: {start: from, end: to}}]);\n    })\n  }\n\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    })\n  }\n}\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\nclass Params {\n  public data: MyDataSource | null = null;\n  public scroller: Scroller | null = null;\n\n  constructor(data: MyDataSource, scroller: Scroller) {\n    this.data = data;\n    this.scroller = scroller;\n  }\n}\n\n@Builder\nfunction buildData(params: Params) {\n  List({ scroller: params.scroller }) {\n    LazyForEach(params.data, (item: string) => {\n      ListItem() {\n        Column() {\n          Text(item)\n            .fontSize(20)\n            .onAppear(() => {\n              hilog.info(0x0000, `TEST_TAG node appear: ${item}`, 'item');\n            })\n            .backgroundColor(Color.Pink)\n            .margin({\n              top: 30,\n              bottom: 30,\n              left: 10,\n              right: 10\n            })\n        }\n      }\n      .id(item)\n    }, (item: string) => item)\n  }\n  .cachedCount(5)\n  .listDirection(Axis.Horizontal)\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n  private data: MyDataSource = new MyDataSource();\n  private scroller: Scroller = new Scroller();\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`N${i}`);\n    }\n    const params: Params = new Params(this.data, this.scroller);\n    const dataNode: BuilderNode<[Params]> = new BuilderNode(uiContext);\n    dataNode.build(wrapBuilder<[Params]>(buildData), params);\n    this.rootNode = dataNode.getFrameNode();\n    const scrollToIndexOptions: ScrollToIndexOptions = {\n      extraOffset: {\n        value: 20, unit: LengthUnit.VP\n      }\n    };\n    this.scroller.scrollToIndex(6, true, ScrollAlign.START, scrollToIndexOptions);\n    return this.rootNode;\n  }\n\n  getFirstChildIndexWithoutExpand() {\n    hilog.info(0x0000,\n      `${TEST_TAG} getFirstChildIndexWithoutExpand: ${this.rootNode!.getFirstChildIndexWithoutExpand()}`,\n      'getFirstChildIndexWithoutExpand');\n  }\n\n  getLastChildIndexWithoutExpand() {\n    hilog.info(0x0000,\n      `${TEST_TAG} getLastChildIndexWithoutExpand: ${this.rootNode!.getLastChildIndexWithoutExpand()}`,\n      'getLastChildIndexWithoutExpand');\n  }\n\n  getChildWithNotExpand() {\n    const childNode = this.rootNode!.getChild(3, ExpandMode.NOT_EXPAND);\n    hilog.info(0x0000, `${TEST_TAG} getChild(3, ExpandMode.NOT_EXPAND): ${childNode!.getId()}`, 'getId');\n    if (childNode!.getId() === 'N9') {\n      hilog.info(0x0000, `${TEST_TAG} getChild(3, ExpandMode.NOT_EXPAND) result: success.`, 'success');\n    } else {\n      hilog.info(0x0000, `${TEST_TAG} getChild(3, ExpandMode.NOT_EXPAND)  result: fail.`, 'fail');\n    }\n  }\n\n  getChildWithExpand() {\n    const childNode = this.rootNode!.getChild(3, ExpandMode.EXPAND);\n    hilog.info(0x0000, `${TEST_TAG} getChild(3, ExpandMode.EXPAND): childNode!.getId()`, 'getId');\n    if (childNode!.getId() === 'N3') {\n      hilog.info(0x0000, `${TEST_TAG} getChild(3, ExpandMode.EXPAND)  result: success.`, 'success');\n    } else {\n      hilog.info(0x0000, `${TEST_TAG} getChild(3, ExpandMode.EXPAND)  result: fail.`, 'fail');\n    }\n  }\n\n  getChildWithLazyExpand() {\n    const childNode = this.rootNode!.getChild(3, ExpandMode.LAZY_EXPAND);\n    hilog.info(0x0000, `${TEST_TAG} getChild(3, ExpandMode.LAZY_EXPAND): childNode!.getId()`, 'getId');\n    if (childNode!.getId() === 'N3') {\n      hilog.info(0x0000, `${TEST_TAG} getChild(3, ExpandMode.LAZY_EXPAND) result: success.`, 'success');\n    } else {\n      hilog.info(0x0000, `${TEST_TAG} getChild(3, ExpandMode.LAZY_EXPAND)  result: fail.`, 'fail');\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Text('This is a NodeContainer.')\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button('getFirstChildIndexWithoutExpand')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getFirstChildIndexWithoutExpand();\n          })\n        Button('getLastChildIndexWithoutExpand')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getLastChildIndexWithoutExpand();\n          })\n        Button('getChildWithNotExpand')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getChildWithNotExpand();\n          })\n        Button('getChildWithExpand')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getChildWithExpand();\n          })\n        Button('getChildWithLazyExpand')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getChildWithLazyExpand();\n          })\n      }\n      .width('100%')\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调整自定义绘制canvas的变换矩阵",
      children: "调整自定义绘制Canvas的变换矩阵"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，通过重写FrameNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#ondraw12",
        children: "onDraw"
      }), "方法，可以重写默认绘制方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas#concatmatrix12",
        children: "concatMatrix"
      }), "可以调整自定义绘制画布的变换矩阵。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(869784)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas#gettotalmatrix12",
          children: "getTotalMatrix"
        }), "获取的是用来记录绘制指令的临时canvas的变换矩阵。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果开发者希望对画布进行预期的变换，应使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas#concatmatrix12",
          children: "concatMatrix"
        }), "而不是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas#setmatrix12",
          children: "setMatrix"
        }), "，因为setMatrix会覆盖原本真实canvas上存在的变换矩阵。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS接口调用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, UIContext, DrawContext, FrameNode } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\n\nfunction drawImage(canvas: DrawingCanvas) {\n  let matrix = new drawing.Matrix();\n  matrix.setTranslation(100, 100);\n  canvas.concatMatrix(matrix);\n  const pen = new drawing.Pen();\n  pen.setStrokeWidth(5);\n  pen.setColor({\n    alpha: 255,\n    red: 0,\n    green: 0,\n    blue: 255\n  });\n  canvas.attachPen(pen);\n  const brush = new drawing.Brush();\n  brush.setColor({\n    alpha: 255,\n    red: 0,\n    green: 0,\n    blue: 255\n  });\n  canvas.attachBrush(brush);\n  canvas.drawRect({\n    left: 10,\n    top: 10,\n    right: 110,\n    bottom: 60\n  });\n  canvas.detachPen();\n}\n\nfunction drawImage1(canvas: DrawingCanvas) {\n  let matrix = new drawing.Matrix();\n  matrix.setTranslation(100, 100);\n\n  // 1. getTotalMatrix获取的是用来记录绘制指令的临时canvas的变换矩阵\n  // 2. 如果开发者希望这个画布进行一个预期的变换，应该使用concatMatrix而不是setMatrix，因为setMatrix会覆盖原本真实canvas上存在的变换矩阵\n  canvas.getTotalMatrix();\n  canvas.setMatrix(matrix);\n  const pen = new drawing.Pen();\n  pen.setStrokeWidth(5);\n  pen.setColor({\n    alpha: 255,\n    red: 0,\n    green: 0,\n    blue: 255\n  });\n  canvas.attachPen(pen);\n  const brush = new drawing.Brush();\n  brush.setColor({\n    alpha: 255,\n    red: 0,\n    green: 0,\n    blue: 255\n  });\n  canvas.attachBrush(brush);\n  canvas.drawRect({\n    left: 10,\n    top: 10,\n    right: 110,\n    bottom: 60\n  });\n  canvas.detachPen();\n}\n\nclass MyFrameNode extends FrameNode {\n  onDraw(context: DrawContext): void {\n    drawImage(context.canvas);\n  }\n}\n\nclass MyFrameNode1 extends FrameNode {\n  onDraw(context: DrawContext): void {\n    drawImage1(context.canvas);\n  }\n}\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    const rootNode: FrameNode = new FrameNode(uiContext);\n    rootNode.commonAttribute.width(300).height(300);\n    const theFrameNode: MyFrameNode = new MyFrameNode(uiContext)\n    theFrameNode.commonAttribute.width(100)\n      .height(50)\n      .position({ x: 10, y: 20 })\n      .backgroundColor(0xFF2787D9);\n    rootNode.appendChild(theFrameNode);\n    return rootNode;\n  }\n}\n\nclass MyNodeController1 extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    const rootNode: FrameNode = new FrameNode(uiContext);\n    rootNode.commonAttribute.width(300).height(300);\n    const theFrameNode: MyFrameNode1 = new MyFrameNode1(uiContext);\n    theFrameNode.commonAttribute.width(100)\n      .height(50)\n      .position({ x: 10, y: 20 })\n      .backgroundColor(0xFF2787D9);\n    rootNode.appendChild(theFrameNode);\n    return rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  myNodeController: MyNodeController = new MyNodeController();\n  myNodeController1: MyNodeController = new MyNodeController1();\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(this.myNodeController);\n      }\n      .height('100%')\n      .width('45%')\n\n      Column() {\n        NodeContainer(this.myNodeController1);\n      }\n      .height('100%')\n      .width('45%')\n    }.height('100%')\n    .width('100%')\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(995703)/* ["default"] */.A) + "",
        width: "993",
        height: "336"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新当前帧节点",
      children: "更新当前帧节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，通过使用frameNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#invalidateattributes21",
        children: "invalidateAttributes"
      }), "方法，可以在当前帧触发节点更新，避免组件切换过程中出现闪烁。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode, NodeContent } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义NodeAdapter控制器\nclass MyNodeAdapterController extends NodeController {\n  rootNode: FrameNode | null = null;\n  imageUrl: string = \"\";\n\n  constructor(imageUrl: string) {\n    super();\n    this.imageUrl = imageUrl;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let imageNode = typeNode.createNode(uiContext, \"Image\");\n    imageNode.initialize($r(this.imageUrl))\n    imageNode.commonAttribute.margin({ left: 100 })\n    imageNode.attribute.syncLoad(true).width(100).height(100);\n    // 强制当前帧内即时节点更新，避免出现切换闪烁\n    imageNode.invalidateAttributes();\n    return imageNode;\n  }\n}\n\n// 自定义挂载事件的自定义组件，挂载前加载样例图片\n@Component\nstruct NodeComponent3 {\n  private rootSlot: NodeContent = new NodeContent();\n\n  aboutToAppear(): void {\n    const uiContext = this.getUIContext();\n    let imageNode = typeNode.createNode(uiContext, \"Image\");\n    imageNode.initialize($r('app.media.startIcon'))\n    imageNode.attribute.syncLoad(true).width(100).height(100);\n    imageNode.invalidateAttributes();\n    this.rootSlot.addFrameNode(imageNode);\n  }\n\n  build() {\n    ContentSlot(this.rootSlot)\n  }\n}\n\n// 自定义挂载事件的自定义组件，挂载前加载样例图片\n@Component\nstruct NodeComponent4 {\n  private rootSlot: NodeContent = new NodeContent();\n\n  aboutToAppear(): void {\n    const uiContext = this.getUIContext();\n    let imageNode = typeNode.createNode(uiContext, \"Image\");\n    imageNode.initialize($r('app.media.startIcon'))\n    imageNode.attribute.syncLoad(true).width(100).height(100);\n    imageNode.invalidateAttributes();\n    this.rootSlot.addFrameNode(imageNode);\n  }\n\n  build() {\n    ContentSlot(this.rootSlot)\n  }\n}\n\n@Entry\n@Component\nstruct ListNodeTest {\n  @State flag: boolean = true;\n  adapterController: MyNodeAdapterController = new MyNodeAdapterController('app.media.startIcon');\n\n  build() {\n    Column() {\n      Text(\"NodeComponent\")\n      if (this.flag) {\n        NodeComponent3()\n      } else {\n        NodeComponent4()\n      }\n      Text(\"NodeContainer\").margin({ top: 20 })\n      if (this.flag) {\n        NodeContainer(this.adapterController)\n          .width(300).height(100)\n      } else {\n        NodeContainer(this.adapterController)\n          .width(300).height(100)\n      }\n      // 点击后图片正常切换不闪烁\n      Button('change').onClick(() => {\n        this.flag = !this.flag;\n      }).margin({ top: 20 })\n    }\n    .width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(77600)/* ["default"] */.A) + "",
        width: "268",
        height: "445"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "判断节点是否处于渲染状态",
      children: "判断节点是否处于渲染状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，通过使用FrameNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#isinrenderstate23",
        children: "isInRenderState"
      }), "方法，判断FrameNode节点是否处于渲染状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'is on render tree';\n  @State @Watch('change') isShow: boolean = true;\n  data: Array<string> = ['hello1', 'hello2', 'hello3', 'hello4', 'hello5', 'hello6', 'hello7', 'hello8'];\n\n  // 监听状态变化后打印是否处于渲染状态\n  change() {\n    let buttonNode = this.getUIContext().getFrameNodeById(\"testButton\");\n    if (buttonNode == null) {\n      return;\n    }\n    let isOnRenderTree = buttonNode!.isInRenderState();\n    if (isOnRenderTree) {\n      hilog.info(1, 'frameNode', 'is on render tree');\n    } else {\n      hilog.info(1, 'frameNode', 'is not no render tree');\n    }\n  }\n\n  build() {\n    Column() {\n      Button('change button visibility').onClick(() => {\n        // 修改button的visibility状态\n        this.isShow = !this.isShow;\n      })\n        .margin({ top: 20 })\n      Button('test button')\n        .visibility(this.isShow ? Visibility.Visible : Visibility.Hidden)\n        .margin(20).id('testButton')\n\n      List() {\n        ForEach(this.data, (item: string, index: number) => {\n          ListItem() {\n            Text(item).id(item)\n          }.alignSelf(ItemAlign.Center).width('100%')\n        })\n      }\n      .width('30%')\n      .alignSelf(ItemAlign.Center)\n      .height(\"10%\")\n      .onReachEnd(() => {\n        let textNode8 = this.getUIContext().getFrameNodeById(\"hello8\");\n        if (textNode8 != null) {\n          let isOnRenderTree = textNode8!.isInRenderState();\n          hilog.info(1, 'frameNode', 'is hello8 on RenderTree: %{public}s', isOnRenderTree);\n        }\n        let textNode1 = this.getUIContext().getFrameNodeById(\"hello1\");\n        if (textNode1 != null) {\n          let isOnRenderTree = textNode1!.isInRenderState();\n          isOnRenderTree ? this.message = 'is on render tree' : 'is not no render tree'\n          hilog.info(1, 'frameNode', 'is hello1 on RenderTree: %{public}s', isOnRenderTree);\n        }\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(269016)/* ["default"] */.A) + "",
        width: "337",
        height: "298"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
624139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438051-8c4ee19df650ec4e9c312a19b8229629.png");

},
885577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
512981(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
714876(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
995703(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
513708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
457997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798358-0ce45a9c3a89706faa4c676105e5733c.png");

},
213273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
77600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958008-be11d641bf9ad6450ea00a9097a0a25a.png");

},
100693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
802772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
559565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
119917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
269016(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVEAAAEqCAYAAACsk2NAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACOoSURBVHhe7Z15nBTFocff34lJPJ4x0VzvyvGO5EVR8TbeoESfRI0IAoJ4oHgAoiKCIKjoUxRRMOJ9gIoSY/B4ouIR1CjeiGIAjYpyqMixc+xuvc+ve2unu2Zmd3ard3d69vv9fH7KVNf0HD393e7q6qp/MAAA0G7+wS0AAIDKQaIAAB4gUQAAD5AoAIAHSBQAwAMkCgDgARIFAPAAiQIAeIBEAQA8QKIAAB4gUQAAD5AoAIAHSBQAwAMkCgDgARIFAPAAiQIAeIBEAQA8QKIAAB4gUQAAD5AoAIAHSBQAwAMkCgDgARIFAPAAiQIAeIBEAQA8QKIAAB4gUQAAD5AoAIAHSBQAwAMkCgDgARIFAPAAiQIAeIBEAQA8QKIAAB4gUQAAD5BoK3y4ttE8/XaDuXNRvbl4Tt4Mm5kzfadmzYETsma3MVnzH2dnzL+cnjE/HJYxO5yUMdsNzJitB2TMt/vXma1OqDPf7BfmG4RUafT71G/1W/3rzHcG1JltB2bM9oMzZsehGfOT0zLm5yMyZudRGbPvRVnTZ0rWDJyeM6Nvz5sbHqs3j7zSYN7+qNFk8+6e031AohEyOWMWv9dgek3Omm8cX0cIaWP++fSMuf7RvPnsq0Z396pZkGgT/zo8U/SDIIT45fHXG9xdrebo1hLdkjXml+cgT0I6MjucVGeeX1a7Mu22Er3kvnzRxiaEdFz2G5c1tXiS3y0lustojj4J6YroguvKNbWl0m4l0foGU7RRCSGdn7c+qh2RdiuJ/uOg4o1JCOmavLqiNtpJu41EfzGCU3hCqi2rv0j/EWm3kOhps3JFG48Q0vX5/pCMaUy5R2teop9+0Vi04Qgh1ZODLkn3Vfual+i2JxZvNEJIdWXthvRqtKYleuPj9AUlJA3Z5sS61J7W17RE3Q1FCKnevJDSu5pqVqL3/6W+aCMRQqo3Pzk1nReZalai3zqheCN1ZHYckgniltdivj8k/Lyd/R131+jec5/f1vaDwufrbiF3WbVlU527J1c/NSnRXL7zT+UtbnktZlMm/KzcPttyzrg5Zz5pY++Qn56RMWs2NMb6Na/4PDw8+2aJ+m6+078u6JEy9IZCt75Hl4Snyb+9rDDE4/+9EY4D6j6/qzPmznzqrtTXpEQ1nqG7cTo6Fre8FtOREh0/J2+mzs+b7QYWLzt0YjZYJtG4y6oxVgaT7q/896jxbMV7nzQ2S7MtEj11Vs7+FJvruxLddmDhvfWIbMOx94TfvbvOzsw/nZa+U/qalOhBEzp/UGWLW16L6UiJft40mO9OJxevW4IV+1/c+du3PTn9ppz56wcNReUtRSPIv7Gq0ew+pn1HorrKvWRFoxl2Y8tHopqp4bHX4u9NszhU+jodGSRaBWiqA3fDdHQsbnktBol2btoi0VIpJdFSqRaJ1mXD31daqEmJuhslqdgfs/hyU2MwH41dFn3tuS/UNz9+9W+lj0S+O7jObNhSWN+7Hxe3T13zp/pgyhL9+5BLCr8sjUa1/eDidSrD/1A4nVPbsOrZUzy3rv7YLP+08B7WbiiuUypRiWrHtGieHc01Fa17/NXhaz/4YnFvCYv+ffjk8nuOLmCVwz3tv2xeYbIfHdHscUGxOF56vyH4XjW30IjZhfr5emO2jmzTUtHzlCOmFK9XcxBp2Vebw2351Fvh67j1Xl9Z6Mqj38B2kYFxLrwrFzxH83nZsqhEz7uj8H6/2lQsPH3/dTljFr5Z+N2VkuiXm8PPoef3vrT8d7/D4HB9GsDcfS3lwcXhb3TE7ORurZ77Qrq6OiHRCrLvuEzZxm7NKaM6lpUR0VrWfR1/TyffWBBdlFx9vN70BaGMR95Wuv7Pz4wLa9knxa8tZi8M1xOtu9eF5Xec1kb7txJd9E7pH3t0rILOlOhXm92lIZpoMPq6r60Iv6dFbxe/f4m3JZFKlELftbtM4hL6A6nHz70bPrbLt+pXF2zjUvz4lPA7v/jeUJITI4OGW4nqD3Ipdouc+v9oWPhbfXZpyxLd0vSTak2iWq4LXeI/zy7+XWSanK7P5i5rb865NV0Xl5BoK9FOavmfKwo/wn7X5MyXm4z59ai4RDdsMUEXIJWpS4n+igvtfPa5DyyuN5szcQHc+Fi4d0V//FaiQj90W253Tl1htWW6Git0+5y6tNhyuwMJWxZ9vweML6z3yMvDnam1cVetREWfyI55ZNNRaUNj4fmVStSmvafz7zSNT7ng1cLrqGuQjgrF764sPMdKVPzq3PB1JOrNmbC8tQtBVoRulyGxYXPh87gSnfFo+MTbni68RwlQR3mHTQrfX0sS1feqGWZtudpcLfYosT0StWXlTuf7XxtuV/2Wo8s0y62eofW7z/FJn8tySLSrcTeKT3SaInTV1F0WjSV6tVO59alwx5EQ3edEY4+27KmgYiWqnTFa93tDigVkKdVOaRvq7ePB14efaenfi4+mLLpK6i6zsRK98fHiz/TIK+F7HnBdeDTaWRIV+pxuuSTlvo6V6KDp8VPQH5wc1m1tW9/7XPgZZz1R+Ez27CI67YwrUftbWPx++fW3JNGRtxXL3Qq9d9MMtR0hUcVK7fsnFcpeXxWW/nfTH6Kk8pvx6RqQBIm2kheadgTNL+8ui6bca/e7Jvwrfs9zcYkcd3U2dhXyi03h/zfWFdZhJeq266kvoKW111eed3bmO58pc04ZIXqE6sZK9DclZHbideHeadt4O0Oi/z4ifENqg3SfE30de8ppJeq239q6pdqn3Qi1AdvHf/ssXGe0jitRtcGqndqy9OPG4Gq8ym2dliRaSm5TH2qq33T03FEStb/F8XPD19F7Vm39hkvV90nvyRyJdjnuRvHJayvDzdnalMrlXvuYq4olatsu9V8duT36Wn1wCi1KSdQdUFqnke7ruY+jefy1+M485/lwveqL+JdlDSXzM6e9NRor0Wg3HJtjrwr3zo/Xd55E9xobfscP/7VlieqPjx5bie40tPg1RCUStf05/zXSJu52GXIlquiM44Rp8TZInSbb5W2V6Hl3hvVt/86Okmgw7mf4lGC5mn70uP+1yV1QstHFUSTaxbgbxSczHg1/pNqB3WXRlHttV6LbDQoNpB3DrSt8JWovakSjdrpoXSuj6BXctsRKtNRg11f9MVz3zKZT/b5Tw8/v3h2jIxlLtNxK9IctSPRA5yhZO7XQhSX3OWofdl8nCYmq2UZ8tLbRTF8Qvq+fO9uplESj0QWsJ98I67z/afiaLUn0FyX+sNlJ3+wdSh0lUWVTU5vx/uOy5pP1jcHrbN0Bt5LeUcGZUjVRkxKNnh75RhceLNELQfqhXXh34YducZ/vStTufNGLQkrfK8N67ZXoc0vDHeWuRfEjvoMjXaNsmY4qhI5+3fFW571YH7S5RsvcWIluVreXyHetIz3bRGHvq//ZGWFldYOJXsG1bc3R96Vo5xSl+jRK2uLaPxf/QdOFOmHbBm0e/mv4HUb/YCQhUUUXhIRO63XPt7vclejA63Jm+er4unucF75xXRDU45YkqguZ0e9wp6GFtsodmv54+khUIhe7NF0sdWPXbY/C9T2VE65PvtjY9KFSQk1KdO+xxTugT+zOIHSFdebjhYYt7RiqY3Gf60pUsaLRfcK7npcJdhhLeyWq2IsMf1/XGHSLsj92rdOte/OThb/20x6pD+5w0fPE6i9bloiVqI4a9Yxpf8qbKQ/kg6vHwr1LR5IR6g4zeV4+aEaIEq076vawsr6jCXPz5pm3G5onGFT7oeX6R+uDCzz/1dRWvU/TKb1Q2+gFd+XM+o3h60h20ddISqL9pxX+EKi3hrvcleifmoSu7aHnDpkR9gkV598VSrMlidomnyseypvrIz03dORm6/pI1PYQUX/Zi+7JBV2q3CNN+1sS3x1c/P0lEe5YqgIuf6j4SMU3tq9llOgpvsV9XimJRmVgkTCEj0QV7QBR1J3G7kRu3YuadtgopY6o3FiJ6t+2n6BF7alu/R2HFn/eaCd9t77aU6NIvHbZo0viH/CDyJGdvicXid5df1IStfWFW664ElXs6XsUdXmzy1uS6DYD6kzeebrb1uwjUWXt1/H1n+V0otcfS/H1luLnJhGdBSHRKqBU21gS0anUvw3PBANgJNFkoPETta6kh5RTVx0JxV5I0SmkcOvZqL+fOu67p/aVRqeVej3dt+0ui+afT6v8u5N4tU719XSXqVlFy0pdXVdUruXVOkW2tre+BzV1uH1NK8mPTgm3V3ueW0l0UU/fX7S/sY0u6unXFO3KlWTSdlFJ1KRERZJ3UKQlUyJHbNGIUn0oCWlr7FlCRxyFKrZNPE3UrERLdQSv5ei0Xai/Ys/zM8GR3O5jss0/+nLdfwhpLWoG0NHvqNvDNoB5L3bMb0njPKTtVF7UrESFu5FqPWrLK4V7oYeQSqMmg+ivSm3uHXWW9/jrxe3FaaCmJTr69uIrprUetQfqosSCJfVm8gP5oH3UrUNIpVH7dd+pueCmEPUgsO3sHZE0HoWKmpaouoR05EYnhCSTV1ek8yhU1LREhYZrczcYIaR6opHQUnoQGlDzEhXuXSyEkOqIbn1N62m8pVtIVFTSN5EQ0rmxfZjTTLeRqO6ycTcgIaTr8uBLxXcBppFuI1GhW9XcDUkI6fzMicxDlna6lUQt6jjsblRCSMdHfUwXNY04Vit0S4mKUkOtEUI6LhoHIe0XkUrRbSUq7OjrhJCOzR2Lauf03aVbS9Si4du4s4eQ5KO75+w4qLUKEo2wfqMxlz6QN79MePZCQrpLNB7o8ddkmwcE7w4g0VZ4+YMGc80j9cEslj0vyAbThWgSN00prKNXtfNo3EqNpfmdAeGADVudEDag0zeVpCX6rSr63Wq8U90uvfWJ4ditmrdrx6F15senZILxdP/z7EwwI4Pmh9fA3rqvXoN5d1eQKACAB0gUAMADJAoA4AESBQDwAIkCAHiARAEAPECiAAAeIFEAAA+QKACAB0gUAMADJAoA4AESBQDwAIkCAHiARAEAPECiAAAeIFEAAA+QKACAB0gUAMADJAoA4AESBQDwAIkCAHiARAEAPECiAAAeINFuTKMxZvnqRvPokgYz8/G8uXhu3pz+h7zpd00umFP8gAlZs+eFWdPjvKz51bnZYL7xX4zImJ+PyJifnZkxP+2G+VnT5/+PszPmv87JmJ1HZ83u52fNfhdnTa9Ls+aYq3Jm6A05M+bOvLn6T3lz/1/qzasrGkxd1v32oVZAot2ALzc1mql/zJt9Lsqa7w+pM984nnRlvnVCnfnVyIw5dVbOvLy8wd1ckDKQaI2Srzdm3L15s82JxTsxqb4ceXnWLPtE5waQNpBojSF5jr4jX7STknRETSaff4VM0wQSrSFeWNZQtFOSdOaMP+TdzQtVChKtEY66Ilu0I5J0R+3XGzPuloZqA4nWALufnynaAUntZMUaTu+rGSSacnYZjUC7Q/6+DpFWK0g0xex5IQLtTsnWu78AqAaQaEq56F6uwHe3qI2U49HqA4mmEHWed3cw0j0ycHrO/TlAF4NEU4i7Y5HulfdXczxaTSDRlHHPc/VFOxXpXvnByRlO66sIJJoy3B2KdM888zb33FcLSDRF3PIUR6EkzL+fxdFotYBEU8QPh9GliRSSo8tTVYBEU0J9Q/c4lbeDb+x0Mn8wWsspM7lSXw0g0ZQweV6y/UJ/dErG/PiUjPlmv+JlSeZ7J9UFr7PVCcXLSqUjJfqDYeFndsuV7w4O3+e3+xcvq9b8aBin9NUAEk0JGkXd3Yl8Yk8F/3FQ8bIkc98L4Qv99IzK3n9HSvSjteG63XLlpv8L36dG8neXVXOQaNeDRFPCdxI+QkKi8SBRaC9INCW4O097s8cFGXPB3fmgjVWMn5MPHivRelv1qzNn35IzC99qCDJidq5oXcovz82YW5+qN395r8Hctaje7DamID+t842V4W5++YOF19H0GO56bKIS/dW5GTPn+Xrz/LsNZuJ9+aJTbQ2+ovUdML5YfJrjyH4mzQelf3+5KfzM9n0o3z4hfJ8vvhd+IdMXlP4+lF6Tsmbei+H7ufKPebPj0GLR6zsbdXv4XE3H8uCL9WbROw3mgrvywXfq1vfNXc/S1amrQaIpwd152ptzbyt/McLWUdtgKepy8SPii+8tPXDwFQ+FEinHNgOK35eNlWi5dUd7KJx8Q/hZJj9QLDx7pK1/9760/Cxx255Y/n1G11du6o4TpsX/uGxp+nr1nlw2bEn+dt3fXVV+e0LngERTgrvz+Kal03m77MybC4KYtzgsfP/TgghKvbfGRmM2Zwpl7T2dFzp6teVznw/Xk8kX1l2pRG3aezqvI0mx9uvCZ+95fkHMuoPIlluJCs2bpLKtB9SZhqaPNezG0kf07c0/ncbFpa4GiaYEd+fxTTmJHnJJKIfHXiueasR9L0JzOkXrbD84/pz2SlTSdpet/iJcpimL9bizJGpxy3UUKjZsLiyzEj3n1rgsT5sVLvjjy8Xfq0/UuwKJdi1INCW4O49vykn03Y/DXfLNVY3msSUNsUiY0fey8vOwbkODCdpD9ygxwn57JdqzxLqG/yEU0Q2PhYLtDIkePiX8o/L468XyU9uuxZZZif7b8OL3L557t3g9Ptl2IEeiXQ0STQnuzuObchLNNjXlfbW50az5qnSi9a+cnzfrNxZ2Y522Ri8utVei6gPpLvvdlaHQ/vxq50n0nFvDL+T2p4uPjBWLfWwlqn64peomLVF919C1INGU4O48vikn0SdeD9v/3NPRSmLbLdUuasvaK9FelxafVl9yXyi0S+aG0hwyIzTW7IVxwX2zhNyU9kh01/NCcb/4frH89N25r9PZElUvBOhakGhKcHce3+giiXC76exwUrizb6wrfs3fXBwXzC2OvBT3/d72VCgnXUV265aKlejbHxXLxnbLsoKSaIWOfqP19h5buOgTLf/bZ6U/s6IeBaLv1GJ5W9y7u6Y9Ej4nKtjOlug7H3Ey39Ug0ZSQ9OAj6tspVnzeaPYblzVTIreV2knRtOzgS7Lml+dkzNymI0p7db5H0xGa+l4ePjlrth+UMWPvDqWio1y7rqFNp9yZnDGHTsqa02/KmW0HFr8fGytRHc2+vrIh6J6k9dujyLUbCs0J0TbJ+S/VB+/1xscLR8Miuu4/vxJaeNWaRrPP2IyZdH/hM+s7ELm8MX2mZIP70u2yy5sEq6aOETfngv6f818K1yWBb3Ni4TU6W6IotOtBoilBAnJ3IJ/sOCTTLBrL0VML4nhjVfHuKYFtFxGguiC5SCoSUvS1Vn8ZX5cE7r4fGyvRUm19H64t7md5/NWRPkVNXPfnevNFUztttK4669c5XUaP/d/wM+soc93X8WVPv10Qntp+Xb6uM+bHp8TfT2dKVH9EircSdDZINCW88kFyO180OsobdXuu5L356t84bGYuaB+N9oV08z9XZIO2uf0deUazy+iwzkETytcplSMmZ83I23PmJ6eWf31l8PW5oBtRJQOdHDoxfC//PbJ4nSobfUc+qOMuU3RxS++n0jbejszOo7gyXw0g0RTh7kSke0d9eaHrQaIp4ugSFz1I9w1HodUBEk0Ralt0dyTSPWNvPICuB4mmjFLteKT7pZ7D0KoBiaaMj9dzNNrdc2FTVzKoDpBoCon2YSTdLxyFVhdINIWoL6Z7uybpHvmg6a4rqB6QaErRHUDuDkZqO7rDCqoPJJpiFr/XMR3wSfVF3dugOkGiKSfJ2whJdeawSQi0mkGiNcBrKxFprUa33UJ1g0RrBA1d970hxTshSW/mv9w06CtUNUi0xpgcGdKOpDN2WD5IB0i0RvndVdmiQYRJdWenkzPm06bJ+CA9INEaRoMja7oPzSPv7rCkenLRPXmzYYu79SAtINFuhEZ0f/LNhmCn7T052+oYnSS5bDcoE8zfpDFP71xUb976sLF59lRIN0gUoBV0gs1JNpQDiQIAeIBEAQA8QKIAAB4gUQAAD5AoAIAHSBQAwAMkCgDgARIFAPAAiQIAeIBEAQA8QKIAAB4gUQAAD5AoAIAHSBQAwAMkCgDgARIFAPAAiQIAeIBEAQA8QKIAAB4gUQAAD5AoAIAHSBQAwAMkCgDgARIFAPAAiQIAeIBEIVGWL19uHnroIbfYi1WrVhWtU4+ff/75WBlAV4BEIVHuvPNO8+tf/9ot9kLCdNepx8OGDYuVtZcrrrgiWF99fb27CKBVkCgkSpokunjx4mA9NkgU2gMShURJi0StOHfbbTezcOFCJArtBolCoqRForvssot55513gn8vWrQIiUK7QaKQKFGJDh48uPmIr2fPnubDDz90qwfiOvXUU2On1ePHj4/VaYtEr7vuuti6Bg4caDKZjFstBhIFH5AoJIqVaI8ePUyfPn3MzTffbKZOndostc2bN8fq63R65513NpdddllwWn3WWWcF9fr3799cp1KJDhgwICgfMmSIefDBB83kyZOD96Gjznw+H6sbBYmCD0gUEsVKtHfv3rHy1atXB+X33Xdfc5kkq7I1a9bE6k6aNCkoX7duXfC4EokuWLAgKLvlllti9erq6oJyibocSBR8QKKQKOXaRBsbG4PyUaNGNZfp8SGHHBKrJxoaGoJlY8eODR5XItFDDz20qI5lwoQJwbKNGze6iwKQKPiARCFRyklU7Lrrrub0008P/i2hqV5LUXumqESiOtLs27dvrI7ljTfeCOqvXLnSXRSARMEHJAqJUqlEN23aFNQ7//zzzdKlS0vm448/DupWKtGjjz46Vsfy2muvIVHoMJAoJEqlEhWqt//++8fqlKISiR522GFFdSxjxowJlkncpUCi4AMShURpi0SPOeaYoO4HH3wQq6cr6fPnz29+XIlEn3jiiaDs2muvjdWzR7y6Ql8OJAo+IFFIlLZIVKj/qOqfdNJJZu7cueaiiy4KuiWprqUSiQqtQ+U6rb/pppvMmWeeGZzma326WFUOJAo+IFFIlLZKVFftJU49x2b48OGx/qSVSlTcfffdsXWp32lLfUQFEgUfkCgAgAdIFADAAyQKAOABEgUA8ACJAgB4gEQBADxAogAAHiBRSBSNFn/HHXe4xV5oBlF3nXqsu5QAuhokConSUmf79tKWzvaVoo716vgf7ZivQZ2z2axbFaBFkCgkShokmsvlmsV54YUXmscee8ycffbZwePo7aYAlYBEIVHSINFp06YFz//kk09i5ePGjQvKX3jhhVg5QEsgUUiUNEh07dq15qCDDnKLA7TeWbNmucUAZUGikChRidqh7hRNSKcLRC5qm+zXr19zPWXEiBGxOm2RqJ0KxEaj3W/ZssWtVhI7hck999zjLgIoCxKFRLES1fidxx13nJk3b56ZPXt2s9TceY7UBqnh6jR03YsvvmgmTpwY1JOALZVK9Nhjjw3KNY/Tk08+aWbOnBkMg6f1V3LB6Pe//33w/M8++8xdBFAWJAqJYiUqgUaRmFR+7733Npf16tUrKFu/fn2srp1iWTOEikokqimS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");

},
869784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
748803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958006-8b8981273f72b00d26c5e3b8a500e2f7.png");

},
41012(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478007-55a9b72735093baac94744a2583d2929.gif");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);