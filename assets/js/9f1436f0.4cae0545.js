"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["327757"], {
423098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_arktsnode_rendernode_arkts_user_defined_arktsnode_rendernode_md_9f1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-nodes-arkts-user-defined-arktsnode-rendernode-arkts-user-defined-arktsnode-rendernode-md-9f1.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_arktsnode_rendernode_arkts_user_defined_arktsnode_rendernode_md_9f1_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode/arkts-user-defined-arktsnode-rendernode","title":"自定义渲染节点 (RenderNode)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode/arkts-user-defined-arktsnode-rendernode.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"自定义渲染节点 (RenderNode)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-arktsnode-rendernode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义组件节点 (FrameNode)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode/"},"next":{"title":"自定义声明式节点 (BuilderNode)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode/arkts-user-defined-arktsnode-rendernode.md


const frontMatter = {
	title: '自定义渲染节点 (RenderNode)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-arktsnode-rendernode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义渲染节点 (RenderNode)';

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
  "value": "操作节点树",
  "id": "操作节点树",
  "level": 2
}, {
  "value": "设置和获取渲染相关属性",
  "id": "设置和获取渲染相关属性",
  "level": 2
}, {
  "value": "自定义绘制",
  "id": "自定义绘制",
  "level": 2
}, {
  "value": "调整自定义绘制Canvas的变换矩阵",
  "id": "调整自定义绘制canvas的变换矩阵",
  "level": 2
}, {
  "value": "设置标签",
  "id": "设置标签",
  "level": 2
}, {
  "value": "查询当前RenderNode是否解除引用",
  "id": "查询当前rendernode是否解除引用",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义渲染节点-rendernode",
        children: "自定义渲染节点 (RenderNode)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于不具备自己的渲染环境的三方框架，尽管已实现前端解析、布局及事件处理等功能，但仍需依赖系统的基础渲染和动画能力。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode",
        children: "FrameNode"
      }), "上的通用属性与通用事件对这类框架而言是冗余的，会导致多次不必要的操作，涵盖布局、事件处理等逻辑。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义渲染节点 (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), ")是更加轻量的渲染节点，仅具备与渲染相关的功能。它提供了设置基础渲染属性的能力，以及节点的动态添加、删除和自定义绘制的能力。RenderNode能够为第三方框架提供基础的渲染和动画支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建和删除节点",
      children: "创建和删除节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RenderNode提供了节点创建和删除的能力。可以通过RenderNode的构造函数创建自定义的RenderNode节点。通过构造函数创建的节点对应一个实体的节点。同时，可以通过RenderNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#dispose12",
        children: "dispose"
      }), "接口来实现与实体节点的绑定关系的解除。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作节点树",
      children: "操作节点树"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RenderNode提供了节点的增、删、查、改的能力，能够修改节点的子树结构；可以对所有RenderNode的节点的父子节点做出查询操作，并返回查询结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(332166)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RenderNode中获取的子树结构由开发通过RenderNode的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#appendchild",
          children: "appendChild"
        }), "接口传入的参数构建。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RenderNode如果要与系统直接结合显示，需通过FrameNode中获取的RenderNode进行挂载上树。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, RenderNode } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nconst TEST_TAG: string = 'RenderNode';\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 200,\n  height: 350\n};\nrenderNode.backgroundColor = 0xffff0000;\nfor (let i = 0; i < 5; i++) {\n  const node = new RenderNode();\n  // 设置node节点的Frame大小\n  node.frame = {\n    x: 10,\n    y: 10 + 60 * i,\n    width: 50,\n    height: 50\n  };\n  // 设置node节点的背景颜色\n  node.backgroundColor = 0xff00ff00;\n  // 将新增节点挂载在renderNode上\n  renderNode.appendChild(node);\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode?.getRenderNode();\n    if (rootRenderNode) {\n      rootRenderNode.appendChild(renderNode);\n    }\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nexport struct OperationNodeTree {\n  private myNodeController: MyNodeController = new MyNodeController();\n  @State myLog: string = '';\n\n  build() {\n    // ...\n      Column() {\n        NodeContainer(this.myNodeController)\n          .width(200)\n          .height(350);\n        Text(this.myLog).width(300).height(40).margin({ top: 20, left: 20, bottom: 20 });\n        Button('getNextSibling')\n          .onClick(() => {\n            const child = renderNode.getChild(1);\n            const nextSibling = child!.getNextSibling()\n            if (child === null || nextSibling === null) {\n              hilog.info(DOMAIN, TEST_TAG, ' the child or nextChild is null');\n              this.myLog = 'the child or nextChild is null';\n            } else {\n              // 获取子节点的位置信息\n              hilog.info(DOMAIN, TEST_TAG, `the position of child is x: ${child.position.x}, y: ${child.position.y}, ` +\n                `the position of nextSibling is x: ${nextSibling.position.x}, y: ${nextSibling.position.y}`);\n              this.myLog = `the position of child is x: ${child.position.x}, y: ${child.position.y}, ` +\n                `the position of nextSibling is x: ${nextSibling.position.x}, y: ${nextSibling.position.y}`;\n            }\n          });\n      }.width(300).margin({ left: 20 });\n\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置和获取渲染相关属性",
      children: "设置和获取渲染相关属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RenderNode中可以设置渲染相关的属性，包括：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#backgroundcolor",
        children: "backgroundColor"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#cliptoframe",
        children: "clipToFrame"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#opacity",
        children: "opacity"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#size",
        children: "size"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#position",
        children: "position"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#frame",
        children: "frame"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#pivot",
        children: "pivot"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#scale",
        children: "scale"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#translation",
        children: "translation"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#rotation",
        children: "rotation"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#transform",
        children: "transform"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#shadowcolor",
        children: "shadowColor"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#shadowoffset",
        children: "shadowOffset"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#shadowalpha",
        children: "shadowAlpha"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#shadowelevation",
        children: "shadowElevation"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#shadowradius",
        children: "shadowRadius"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#borderstyle12",
        children: "borderStyle"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#borderwidth12",
        children: "borderWidth"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#bordercolor12",
        children: "borderColor"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#borderradius12",
        children: "borderRadius"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#shapemask12",
        children: "shapeMask"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#shapeclip12",
        children: "shapeClip"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#marknodegroup12",
        children: "markNodeGroup"
      }), "等。具体属性支持范围参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "接口说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(132180)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RenderNode中获取的属性为设置的属性值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若未传入参数或者传入参数为非法值则查询获得的为默认值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议对BuilderNode中的RenderNode进行修改操作。BuilderNode中具体属性设置是由状态管理实现的，属性更新的时序开发者不可控，BuilderNode和FrameNode中同时设置RenderNode属性可能会导致RenderNode属性设置与预期不相符。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController, ShapeMask, ShapeClip } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nconst TEST_TAG: string = 'RenderNode';\nconst mask = new ShapeMask();\nmask.setRectShape({\n  left: 0,\n  right: 150,\n  top: 0,\n  bottom: 150\n});\nmask.fillColor = 0X55FF0000;\nmask.strokeColor = 0XFFFF0000;\nmask.strokeWidth = 24;\n\nconst clip = new ShapeClip();\nclip.setCommandPath({ commands: 'M100 0 L0 100 L50 200 L150 200 L200 100 Z' });\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xff519db4;\nrenderNode.size = { width: 100, height: 100 };\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nexport struct RenderingProperties {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    // ...\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {\n      Column() {\n        NodeContainer(this.myNodeController).height(260);\n      };\n\n      Flex() {\n        // 设置RenderNode的位置\n        Button('position')\n          .width(300)\n          .onClick(() => {\n            renderNode.position = { x: 10, y: 10 };\n            hilog.info(DOMAIN, TEST_TAG, ' position:' + JSON.stringify(renderNode.position));\n          });\n        Column().width(20);\n        // 设置RenderNode的轴心\n        Button('pivot')\n          .width(300)\n          .onClick(() => {\n            renderNode.pivot = { x: 0.5, y: 0.6 };\n            hilog.info(DOMAIN, TEST_TAG, ' pivot:' + JSON.stringify(renderNode.pivot));\n          });\n      }\n\n      Flex() {\n        // 修改RenderNode的缩放比例\n        Button('scale')\n          .width(300)\n          .onClick(() => {\n            renderNode.scale = { x: 0.5, y: 1 };\n            hilog.info(DOMAIN, TEST_TAG, ' scale:' + JSON.stringify(renderNode.scale));\n          });\n        Column().width(20);\n        // 设置RenderNode的平移量\n        Button('translation')\n          .width(300)\n          .onClick(() => {\n            renderNode.translation = { x: 100, y: 0 };\n            hilog.info(DOMAIN, TEST_TAG, ' translation:' + JSON.stringify(renderNode.translation));\n          });\n      }\n\n      Flex() {\n        // 设置RenderNode的旋转角度\n        Button('rotation')\n          .width(300)\n          .onClick(() => {\n            renderNode.rotation = { x: 45, y: 0, z: 0 };\n            hilog.info(DOMAIN, TEST_TAG, ' rotation:' + JSON.stringify(renderNode.rotation));\n          });\n        Column().width(20);\n        // 设置RenderNode的变换矩阵\n        Button('transform')\n          .width(300)\n          .onClick(() => {\n            renderNode.transform = [\n              1, 0, 0, 0,\n              0, 2, 0, 0,\n              0, 0, 1, 0,\n              0, 0, 0, 1\n            ];\n            hilog.info(DOMAIN, TEST_TAG, ' transform:' + JSON.stringify(renderNode.transform));\n          });\n      }\n\n      Flex() {\n        // 设置RenderNode的阴影属性\n        Button('shadow')\n          .width(300)\n          .onClick(() => {\n            renderNode.shadowElevation = 10; // 设置阴影的光照高度\n            renderNode.shadowColor = 0xff2787d9;\n            renderNode.shadowOffset = { x: 10, y: 10 };\n            renderNode.shadowAlpha = 0.1;\n            hilog.info(DOMAIN, TEST_TAG, ' shadowElevation:' + JSON.stringify(renderNode.shadowElevation));\n            hilog.info(DOMAIN, TEST_TAG, ' shadowColor:' + JSON.stringify(renderNode.shadowColor));\n            hilog.info(DOMAIN, TEST_TAG, ' shadowOffset:' + JSON.stringify(renderNode.shadowOffset));\n            hilog.info(DOMAIN, TEST_TAG, ' shadowAlpha:' + JSON.stringify(renderNode.shadowAlpha));\n          });\n        Column().width(20);\n        // 设置RenderNode的阴影模糊半径\n        Button('shadowRadius')\n          .width(300)\n          .onClick(() => {\n            renderNode.shadowOffset = { x: 10, y: 10 };\n            renderNode.shadowAlpha = 0.7;\n            renderNode.shadowRadius = 30;\n            hilog.info(DOMAIN, TEST_TAG, ' shadowOffset:' + JSON.stringify(renderNode.shadowOffset));\n            hilog.info(DOMAIN, TEST_TAG, ' shadowAlpha:' + JSON.stringify(renderNode.shadowAlpha));\n            hilog.info(DOMAIN, TEST_TAG, ' shadowRadius:' + JSON.stringify(renderNode.shadowRadius));\n          });\n      }\n\n      Flex() {\n        // 设置RenderNode的边框样式\n        Button('border')\n          .width(300)\n          .onClick(() => {\n            renderNode.borderWidth = {\n              left: 8,\n              top: 8,\n              right: 8,\n              bottom: 8\n            };\n            renderNode.borderStyle = {\n              left: BorderStyle.Solid,\n              top: BorderStyle.Dotted,\n              right: BorderStyle.Dashed,\n              bottom: BorderStyle.Solid\n            }\n            renderNode.borderColor = {\n              left: 0xffd5d5d5,\n              top: 0xffd5d5d5,\n              right: 0xffd5d5d5,\n              bottom: 0xffd5d5d5\n            };\n            renderNode.borderRadius = {\n              topLeft: 32,\n              topRight: 32,\n              bottomLeft: 32,\n              bottomRight: 32\n            };\n            hilog.info(DOMAIN, TEST_TAG, ' borderWidth:' + JSON.stringify(renderNode.borderWidth));\n            hilog.info(DOMAIN, TEST_TAG, ' borderStyle:' + JSON.stringify(renderNode.borderStyle));\n            hilog.info(DOMAIN, TEST_TAG, ' borderColor:' + JSON.stringify(renderNode.borderColor));\n            hilog.info(DOMAIN, TEST_TAG, ' borderRadius:' + JSON.stringify(renderNode.borderRadius));\n          })\n        Column().width(20);\n        // 设置RenderNode的遮罩\n        Button('shapeMask')\n          .width(300)\n          .onClick(() => {\n            renderNode.shapeMask = mask;\n            hilog.info(DOMAIN, TEST_TAG, ' shapeMask:' + JSON.stringify(renderNode.shapeMask));\n          });\n      }\n\n        // 设置RenderNode的剪裁形状\n        Button('shapeClip')\n          .width(300)\n          .onClick(() => {\n            renderNode.shapeClip = clip;\n            hilog.info(DOMAIN, TEST_TAG, ' shapeClip:' + JSON.stringify(renderNode.shapeClip));\n          });\n      }\n      .padding({\n        left: 35,\n        right: 35,\n        top: 35,\n        bottom: 35\n      })\n      .width('100%')\n      .height('100%');\n\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义绘制",
      children: "自定义绘制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过重写RenderNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#draw",
        children: "draw"
      }), "方法，可以自定义RenderNode的绘制内容，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#invalidate",
        children: "invalidate"
      }), "接口可以主动触发节点的重新绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(777117)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同时同步触发多个invalidate仅会触发一次重新绘制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义绘制有两种绘制方式：通过ArkTS接口进行调用和通过Node-API进行调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS接口调用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, RenderNode } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nclass MyRenderNode extends RenderNode {\n  public width: number = 200;\n\n  draw(context: DrawContext) {\n    // 获取canvas对象\n    const canvas = context.canvas;\n    // 创建笔刷\n    const brush = new drawing.Brush();\n    // 设置笔刷颜色\n    brush.setColor({\n      alpha: 255,\n      red: 81,\n      green: 157,\n      blue: 180\n    });\n    canvas.attachBrush(brush);\n    // 绘制矩阵\n    canvas.drawRect({\n      left: 0,\n      right: this.width,\n      top: 0,\n      bottom: 200\n    });\n    canvas.detachBrush();\n    hilog.info(DOMAIN, 'testTag', `RenderNode draw width = ${this.width}`);\n  }\n}\n\nconst renderNode = new MyRenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 300,\n  height: 300\n};\nrenderNode.backgroundColor = 0xffd5d5d5;\nrenderNode.opacity = 0.5;\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode?.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.frame = {\n        x: 0,\n        y: 0,\n        width: 500,\n        height: 500\n      };\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nexport struct CustomDraw {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    // ...\n      Column() {\n        NodeContainer(this.myNodeController)\n          .width('100%').height(320);\n        Button('Invalidate')\n          .onClick(() => {\n            // 同步调用多次，仅触发一次重绘，draw回调中的日志仅打印一次\n            renderNode.width += 10;\n            renderNode.invalidate();\n            renderNode.invalidate();\n          }).margin({left: -80});\n      };\n\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调整自定义绘制canvas的变换矩阵",
      children: "调整自定义绘制Canvas的变换矩阵"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，通过重写RenderNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#draw",
        children: "draw"
      }), "方法，可以自定义RenderNode的绘制内容。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas#concatmatrix12",
        children: "concatMatrix"
      }), "可以调整自定义绘制Canvas的变换矩阵。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(141773)/* ["default"] */.A) + "",
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
        children: "import { NodeController, UIContext, RenderNode, DrawContext, FrameNode } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\n\nfunction drawImage(canvas: DrawingCanvas) {\n  let matrix = new drawing.Matrix();\n  matrix.setTranslation(100, 100);\n  canvas.concatMatrix(matrix);\n  const pen = new drawing.Pen();\n  pen.setStrokeWidth(5);\n  pen.setColor({\n    alpha: 255,\n    red: 0,\n    green: 74,\n    blue: 175\n  });\n  canvas.attachPen(pen);\n  const brush = new drawing.Brush();\n  brush.setColor({\n    alpha: 255,\n    red: 0,\n    green: 74,\n    blue: 175\n  });\n  canvas.attachBrush(brush);\n  canvas.drawRect({\n    left: 10,\n    top: 10,\n    right: 110,\n    bottom: 60\n  });\n  canvas.detachPen();\n}\n\nfunction drawImage1(canvas: DrawingCanvas) {\n  let matrix = new drawing.Matrix();\n  matrix.setTranslation(100, 100);\n  // 1. getTotalMatrix获取的是用来记录绘制指令的临时canvas的变换矩阵\n  // 2. 如果开发者希望这个画布进行一个预期的变换，应该使用concatMatrix而不是setMatrix，因为setMatrix会覆盖原本真实canvas上存在的变换矩阵\n  canvas.getTotalMatrix();\n  canvas.setMatrix(matrix);\n  const pen = new drawing.Pen();\n  pen.setStrokeWidth(5);\n  pen.setColor({\n    alpha: 255,\n    red: 0,\n    green: 74,\n    blue: 175\n  });\n  canvas.attachPen(pen);\n  const brush = new drawing.Brush();\n  brush.setColor({\n    alpha: 255,\n    red: 0,\n    green: 74,\n    blue: 175\n  });\n  canvas.attachBrush(brush);\n  canvas.drawRect({\n    left: 10,\n    top: 10,\n    right: 110,\n    bottom: 60\n  });\n  canvas.detachPen();\n}\n\nclass MyRenderNode extends RenderNode {\n  draw(context: DrawContext): void {\n    drawImage(context.canvas);\n  }\n}\n\nclass MyRenderNode1 extends RenderNode {\n  draw(context: DrawContext): void {\n    drawImage1(context.canvas);\n  }\n}\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    const rootNode: FrameNode = new FrameNode(uiContext);\n    rootNode.commonAttribute.width(300).height(300);\n    const theRenderNode: MyRenderNode = new MyRenderNode();\n    theRenderNode.frame = {\n      x: 10,\n      y: 100,\n      width: 100,\n      height: 50\n    };\n    theRenderNode.backgroundColor = 0xFF2787D9;\n    rootNode.getRenderNode()?.appendChild(theRenderNode);\n    return rootNode;\n  }\n}\n\nclass MyNodeController1 extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    const rootNode: FrameNode = new FrameNode(uiContext);\n    rootNode.commonAttribute.width(300).height(300);\n    const theRenderNode: MyRenderNode1 = new MyRenderNode1();\n    theRenderNode.frame = {\n      x: 10,\n      y: 100,\n      width: 100,\n      height: 50\n    };\n    theRenderNode.backgroundColor = 0xFF2787D9;\n    rootNode.getRenderNode()?.appendChild(theRenderNode);\n    return rootNode;\n  }\n}\n\n@Entry\n@Component\nexport struct CustomDrawCanvas {\n  myNodeController: MyNodeController = new MyNodeController();\n  myNodeController1: MyNodeController1 = new MyNodeController1();\n\n  build() {\n    // ...\n      Row() {\n        Column() {\n          NodeContainer(this.myNodeController)\n        }\n        .height('100%')\n        .width('45%');\n\n        Column() {\n          NodeContainer(this.myNodeController1)\n        }\n        .height('100%')\n        .width('45%');\n      };\n\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(451134)/* ["default"] */.A) + "",
        width: "1080",
        height: "406"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Node-API调用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++侧可通过Node-API来获取Canvas，并进行后续的自定义绘制操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// native_bridge.cpp\n#include \"napi/native_api.h\"\n#include <native_drawing/drawing_canvas.h>\n#include <native_drawing/drawing_color.h>\n#include <native_drawing/drawing_path.h>\n#include <native_drawing/drawing_pen.h>\n\nnamespace {\n    const int32_t ARG_NUM0 = 0;\n    const int32_t ARG_NUM1 = 1;\n    const int32_t ARG_NUM2 = 2;\n    const int32_t ARG_NUM3 = 3;\n    const int32_t ARG_NUM4 = 4;\n}\n\nstatic napi_value OnDraw(napi_env env, napi_callback_info info)\n{\n    size_t argc = ARG_NUM4;\n    napi_value args[ARG_NUM4] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    int32_t id;\n    napi_get_value_int32(env, args[ARG_NUM0], &id);\n\n    // 获取 Canvas 指针\n    void *temp = nullptr;\n    napi_unwrap(env, args[ARG_NUM1], &temp);\n    OH_Drawing_Canvas *canvas = reinterpret_cast<OH_Drawing_Canvas *>(temp);\n\n    // 获取 Canvas 宽度\n    int32_t width;\n    napi_get_value_int32(env, args[ARG_NUM2], &width);\n\n    // 获取 Canvas 高度\n    int32_t height;\n    napi_get_value_int32(env, args[ARG_NUM3], &height);\n\n    const float kQuarter = 0.25f;\n    const float kThreeQuarters  = 0.75f;\n    // 传入canvas、height、width等信息至绘制函数中进行自定义绘制\n    auto path = OH_Drawing_PathCreate();\n    OH_Drawing_PathMoveTo(path, width * kQuarter, height * kQuarter);\n    OH_Drawing_PathLineTo(path, width * kThreeQuarters, height * kQuarter);\n    OH_Drawing_PathLineTo(path, width * kThreeQuarters, height * kThreeQuarters);\n    OH_Drawing_PathLineTo(path, width * kQuarter, height * kThreeQuarters);\n    OH_Drawing_PathLineTo(path, width * kQuarter, height * kQuarter);\n    OH_Drawing_PathClose(path);\n\n    auto pen = OH_Drawing_PenCreate();\n    const int lineWidth = 10;\n    OH_Drawing_PenSetWidth(pen, lineWidth);\n    OH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(0xFF, 0xFF, 0x00, 0x00));\n    OH_Drawing_CanvasAttachPen(canvas, pen);\n\n    OH_Drawing_CanvasDrawPath(canvas, path);\n\n    return nullptr;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"nativeOnDraw\", nullptr, OnDraw, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改工程中的src/main/cpp/CMakeLists.txt文件，添加如下内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(NapiTest)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED NativeBridge.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so)\ntarget_link_libraries(entry PUBLIC libace_ndk.z.so)\ntarget_link_libraries(entry PUBLIC libnative_drawing.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时在工程中的src/main/cpp/types/libentry/index.d.ts文件中，添加自定义绘制函数在ArkTS侧的定义，如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawContext } from '@kit.ArkUI'\n\nexport const nativeOnDraw: (id: number, context: DrawContext, width: number, height: number) => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import bridge from 'libentry.so'; // 该 so 由 Node-API 编写并生成\nimport { DrawContext, FrameNode, NodeController, RenderNode } from '@kit.ArkUI';\n\nclass MyRenderNode extends RenderNode {\n  private uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    super();\n    this.uiContext = uiContext;\n  }\n\n  draw(context: DrawContext) {\n    // 需要将 context 中的宽度和高度从vp转换为px\n    bridge.nativeOnDraw(0, context, this.uiContext.vp2px(context.size.height),\n      this.uiContext.vp2px(context.size.width));\n  }\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      const renderNode = new MyRenderNode(uiContext);\n      renderNode.size = { width: 100, height: 100 };\n      rootRenderNode.appendChild(renderNode);\n    }\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nexport struct CustomDrawCanvasNative {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    // ...\n      Row() {\n        NodeContainer(this.myNodeController);\n      };\n\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置标签",
      children: "设置标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#label12",
        children: "label"
      }), "接口向RenderNode设置标签信息，这有助于在节点Inspector中更清晰地区分各节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    const renderNode: RenderNode | null = this.rootNode.getRenderNode();\n    if (renderNode !== null) {\n      const renderChildNode: RenderNode = new RenderNode();\n      renderChildNode.frame = {\n        x: 0,\n        y: 0,\n        width: 100,\n        height: 100\n      };\n      renderChildNode.backgroundColor = 0xff519db4;\n      renderChildNode.label = 'customRenderChildNode';\n      hilog.info(DOMAIN, 'label:', renderChildNode.label);\n      renderNode.appendChild(renderChildNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nexport struct SetLabel {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    // ...\n      Column() {\n        NodeContainer(this.myNodeController)\n          .width(300)\n          .height(700)\n          .backgroundColor(0xffd5d5d5);\n      };\n\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询当前rendernode是否解除引用",
      children: "查询当前RenderNode是否解除引用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。在ArkUI框架中，前端节点是在ArkTS代码层面创建的节点，负责与开发者交互；后端节点是在ArkUI框架底层维护的实体节点，负责具体逻辑的处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#isdisposed20",
        children: "isDisposed"
      }), "接口查询当前RenderNode对象是否已解除与后端实体节点的引用关系，从而可以在操作节点前检查其有效性，避免潜在风险。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, RenderNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private renderNode: RenderNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.renderNode = new RenderNode();\n    this.renderNode.size = { width: 300, height: 300 };\n    this.renderNode.backgroundColor = 0xffd5d5d5;\n\n    // 挂载RenderNode\n    this.rootNode.getRenderNode()?.appendChild(this.renderNode);\n    return this.rootNode;\n  }\n\n  disposeRenderNode() {\n    // 解除RenderNode与后端实体节点的引用关系\n    this.renderNode?.dispose();\n  }\n\n  isDisposed(): string {\n    if (this.renderNode !== null) {\n      // 查询RenderNode是否解除引用\n      if (this.renderNode.isDisposed()) {\n        return 'renderNode isDisposed is true';\n      } else {\n        return 'renderNode isDisposed is false';\n      }\n    }\n    return 'renderNode is null';\n  }\n}\n\n@Entry\n@Component\nexport struct CheckRanderNodeDisposed {\n  @State text: string = '';\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    // ...\n      Column({ space: 4 }) {\n        NodeContainer(this.myNodeController);\n        Button('RenderNode dispose')\n          .onClick(() => {\n            this.myNodeController.disposeRenderNode();\n            this.text = '';\n          })\n          .width(200)\n          .height(50);\n        Button('RenderNode isDisposed')\n          .onClick(() => {\n            this.text = this.myNodeController.isDisposed();\n          })\n          .width(200)\n          .height(50);\n        Text(this.text)\n          .fontSize(25);\n      }\n      .width('100%')\n      .height('100%');\n\n      // ...\n  }\n}\n"
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
132180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
777117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
451134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
332166(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
141773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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