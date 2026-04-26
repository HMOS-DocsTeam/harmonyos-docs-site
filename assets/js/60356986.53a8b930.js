"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["873941"], {
100048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_place_holder_arkts_user_defined_place_holder_md_603_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-nodes-arkts-user-defined-place-holder-arkts-user-defined-place-holder-md-603.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_place_holder_arkts_user_defined_place_holder_md_603_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder/arkts-user-defined-place-holder","title":"自定义占位节点","description":"ArkUI提供了系统组件NodeContainer和ContentSlot作为自定义节点的占位节点。主要用于自定义节点以及自定义节点树的显示。","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder/arkts-user-defined-place-holder.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"自定义占位节点","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-place-holder","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义节点概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node/"},"next":{"title":"自定义组件节点 (FrameNode)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder/arkts-user-defined-place-holder.md


const frontMatter = {
	title: '自定义占位节点',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-place-holder',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义占位节点';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "使用NodeContainer挂载自定义节点",
  "id": "使用nodecontainer挂载自定义节点",
  "level": 2
}, {
  "value": "NodeContainer和ContentSlot添加子节点布局差异",
  "id": "nodecontainer和contentslot添加子节点布局差异",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义占位节点",
        children: "自定义占位节点"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI提供了系统组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot",
        children: "ContentSlot"
      }), "作为自定义节点的占位节点。主要用于自定义节点以及自定义节点树的显示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "作为容器节点存在，具备通用属性，是UI节点。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot",
        children: "ContentSlot"
      }), "只是一个语法节点，无通用属性，不参与布局和渲染。支持混合模式开发，当容器是ArkTS组件，子组件在Native侧创建时，推荐使用ContentSlot占位组件。具体使用参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot",
        children: "ContentSlot"
      }), "的接口文档说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "是用来占位的系统组件，主要用于自定义节点以及自定义节点树的显示，支持组件的通用属性，对通用属性的处理请参考默认左上角对齐的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
        children: "Stack"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "提供了一系列生命周期回调，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller#makenode",
        children: "makeNode"
      }), "回调返回一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "节点树的根节点。将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "节点树挂载到对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "下。同时提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
        children: "aboutToAppear"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
        children: "aboutToDisappear"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller#abouttoresize",
        children: "aboutToResize"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller#ontouchevent",
        children: "onTouchEvent"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller#rebuild",
        children: "rebuild"
      }), "五个回调方法用于监听对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "的状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每个生命周期的回调的具体含义参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "的接口文档说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962239)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NodeContainer下仅支持挂载自定义的FrameNode节点以及BuilderNode创建的组件树的根节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API Version 12开始支持的接口，可以通过FrameNode的查询接口返回系统组件的代理节点，代理节点可以作为makeNode的返回值进行返回，但代理节点无法成功挂载在组件树上，最终的显示结果为代理节点挂载失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要保证一个节点只能作为一个父节点的子节点去使用，否则可能存在显示异常或者功能异常，尤其是页面路由场景或者动效场景。例如，如果通过NodeController将同一个节点挂载在多个NodeContainer上，仅一个占位容器下会显示节点，且多个NodeContainer的可见性、透明度等影响子组件状态的属性更新均会影响被挂载的子节点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义节点：使用ArkUI提供的接口，以命令式创建的节点。包括自定义组件节点（FrameNode）、自定义渲染节点（RenderNode）、自定义声明式节点（BuilderNode）、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
          children: "ComponentContent"
        }), "等。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义节点树：根节点为自定义节点的节点树。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "声明式节点树：根节点为声明式节点的节点树。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "节点树：一种常见的数据结构，用于表示节点的层级关系。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "占位节点：用于在声明式节点树上为自定义节点树预留位置的节点，主要包括NodeContainer和ContentSlot。鉴于页面的主树采用声明式节点树，因此，唯有借助占位节点，才能将命令式构建的自定义节点成功挂载至声明式节点树上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用nodecontainer挂载自定义节点",
      children: "使用NodeContainer挂载自定义节点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过NodeController在NodeContainer下挂载自定义节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// common.ets\nimport { BuilderNode, UIContext } from '@kit.ArkUI';\n\nclass Params {\n  public text: string = 'this is a text';\n}\n\nlet buttonNode: BuilderNode<[Params]> | null = null;\n\n@Builder\nfunction buttonBuilder(params: Params) {\n  Column() {\n    Button(params.text)\n      .fontSize(12)\n      .borderRadius(8)\n      .borderWidth(2)\n      .backgroundColor(Color.Orange)\n  }\n}\n\nexport function createNode(uiContext: UIContext) {\n  buttonNode = new BuilderNode<[Params]>(uiContext);\n  buttonNode.build(wrapBuilder(buttonBuilder), { text: 'This is a Button' });\n  return buttonNode;\n}\n\nexport function getOrCreateNode(uiContext: UIContext): BuilderNode<[Params]> | null {\n  if (buttonNode?.getFrameNode() && buttonNode?.getFrameNode()?.getUniqueId() != -1) {\n    return buttonNode;\n  } else {\n    return createNode(uiContext);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { FrameNode, NodeController, Size, UIContext } from '@kit.ArkUI';\nimport { getOrCreateNode } from './Common';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0xF811\nconst TAG = '[Sample_ArkTSUserPlaceHolder]';\n\nclass MyNodeController extends NodeController {\n  private isShow: boolean = false;\n\n  constructor(isShow: boolean) {\n    super();\n    this.isShow = isShow;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (!this.isShow) {\n      return null;\n    }\n    let frameNode = getOrCreateNode(uiContext)?.getFrameNode();\n    return frameNode ? frameNode : null;\n  }\n\n  aboutToResize(size: Size) {\n    hilog.info(DOMAIN, TAG,' aboutToResize width : ' + size.width + ' height : ' + size.height);\n  }\n\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG,' aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    hilog.info(DOMAIN, TAG,' aboutToDisappear');\n  }\n\n  onTouchEvent(event: TouchEvent) {\n    hilog.info(DOMAIN, TAG,' onTouchEvent');\n  }\n\n  toShow() {\n    this.isShow = true;\n    this.rebuild();\n  }\n\n  toHide() {\n    this.isShow = false;\n    this.rebuild();\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController1: MyNodeController = new MyNodeController(true);\n  private myNodeController2: MyNodeController = new MyNodeController(false);\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController1)\n        .width('100%')\n        .height('40%')\n        .backgroundColor(Color.Brown)\n      NodeContainer(this.myNodeController2)\n        .width('100%')\n        .height('40%')\n        .backgroundColor(Color.Gray)\n      Button('Change the place of button')\n        .onClick(() => {\n          // 先在原始占位节点中下树\n          // 后在新的占位节点中上树\n          // 保证自定义节点仅作为一个节点的子节点存在\n          this.myNodeController1.toHide();\n          this.myNodeController2.toShow();\n        })\n    }\n    .padding({ left: 35, right: 35, top: 35 })\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nodecontainer和contentslot添加子节点布局差异",
      children: "NodeContainer和ContentSlot添加子节点布局差异"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "是一个容器节点，布局参考左上角对齐的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
        children: "Stack"
      }), "组件，不会按照父容器的布局规则进行布局。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot",
        children: "ContentSlot"
      }), "只是一个语法节点，不参与布局，添加的子节点会按照父容器的布局规则进行布局。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeContent, NodeController, typeNode, UIContext } from '@kit.ArkUI';\n\nclass NodeContentCtrl {\n  public content: NodeContent\n  public textNode: Array<typeNode.Text> = [];\n  public uiContext: UIContext\n  public width: number\n\n  constructor(uiContext: UIContext) {\n    this.content = new NodeContent();\n    this.uiContext = uiContext;\n    this.width = Infinity;\n  }\n\n  AddNode() {\n    let node = typeNode.createNode(this.uiContext, 'Text');\n    node.initialize('ContentText:' + this.textNode.length).fontSize(20);\n    this.textNode.push(node);\n    this.content.addFrameNode(node);\n  }\n\n  RemoveNode() {\n    let node = this.textNode.pop();\n    this.content.removeFrameNode(node);\n  }\n\n  RemoveFront() {\n    let node = this.textNode.shift();\n    this.content.removeFrameNode(node);\n  }\n\n  GetContent(): NodeContent {\n    return this.content;\n  }\n}\n\nclass MyNodeController extends NodeController {\n  public rootNode: FrameNode | null = null;\n  public textNode: Array<typeNode.Text> = [];\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext);\n    return this.rootNode;\n  }\n\n  AddNode(frameNode: FrameNode | null, uiContext: UIContext) {\n    let node = typeNode.createNode(uiContext, 'Text');\n    node.initialize('ControllerText:' + this.textNode.length).fontSize(20);\n    this.textNode.push(node);\n    frameNode?.appendChild(node);\n  }\n\n  RemoveNode(frameNode: FrameNode | null) {\n    let node = this.textNode.pop();\n    frameNode?.removeChild(node);\n  }\n\n  RemoveFront(frameNode: FrameNode | null) {\n    let node = this.textNode.shift();\n    frameNode?.removeChild(node);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  controller = new NodeContentCtrl(this.getUIContext());\n  myNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      Column() {\n        ContentSlot(this.controller.GetContent())\n        Button('AddToSlot')\n          .onClick(() => {\n            this.controller.AddNode();\n          })\n          .margin(10)\n        Button('RemoveBack')\n          .onClick(() => {\n            this.controller.RemoveNode();\n          })\n          .margin(10)\n        Button('RemoveFront')\n          .onClick(() => {\n            this.controller.RemoveFront();\n          })\n          .margin(10)\n      }\n      .width('50%')\n\n      Column() {\n        NodeContainer(this.myNodeController)\n        Button('AddToNodeContainer')\n          .onClick(() => {\n            this.myNodeController.AddNode(this.myNodeController.rootNode, this.getUIContext());\n          })\n          .margin(10)\n        Button('RemoveBack')\n          .onClick(() => {\n            this.myNodeController.RemoveNode(this.myNodeController.rootNode);\n          })\n          .margin(10)\n        Button('RemoveFront')\n          .onClick(() => {\n            this.myNodeController.RemoveFront(this.myNodeController.rootNode);\n          })\n          .margin(10)\n      }\n      .width('50%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(573231)/* ["default"] */.A) + "",
        width: "699",
        height: "518"
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
573231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798356-808e0a46561312654c23f316f82771d1.gif");

},
962239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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