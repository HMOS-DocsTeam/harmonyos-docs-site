"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["65083"], {
484465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_arktsnode_buildernode_arkts_user_defined_arktsnode_buildernode_md_183_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-nodes-arkts-user-defined-arktsnode-buildernode-arkts-user-defined-arktsnode-buildernode-md-183.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_arktsnode_buildernode_arkts_user_defined_arktsnode_buildernode_md_183_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode/arkts-user-defined-arktsnode-buildernode","title":"自定义声明式节点 (BuilderNode)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode/arkts-user-defined-arktsnode-buildernode.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"自定义声明式节点 (BuilderNode)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-arktsnode-buildernode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义渲染节点 (RenderNode)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode/"},"next":{"title":"设置自定义节点跨语言属性","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-crosslanguage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode/arkts-user-defined-arktsnode-buildernode.md


const frontMatter = {
	title: '自定义声明式节点 (BuilderNode)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-arktsnode-buildernode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义声明式节点 (BuilderNode)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "创建BuilderNode对象",
  "id": "创建buildernode对象",
  "level": 2
}, {
  "value": "创建组件树",
  "id": "创建组件树",
  "level": 2
}, {
  "value": "更新组件树",
  "id": "更新组件树",
  "level": 2
}, {
  "value": "解除实体节点引用关系",
  "id": "解除实体节点引用关系",
  "level": 2
}, {
  "value": "注入触摸事件",
  "id": "注入触摸事件",
  "level": 2
}, {
  "value": "BuilderNode内的BuilderProxyNode导致树结构发生变化",
  "id": "buildernode内的builderproxynode导致树结构发生变化",
  "level": 2
}, {
  "value": "BuilderNode调用reuse和recycle接口实现节点复用能力",
  "id": "buildernode调用reuse和recycle接口实现节点复用能力",
  "level": 2
}, {
  "value": "BuilderNode在子自定义组件中使用@Reusable装饰器",
  "id": "buildernode在子自定义组件中使用reusable装饰器",
  "level": 2
}, {
  "value": "通过系统环境变化更新节点",
  "id": "通过系统环境变化更新节点",
  "level": 2
}, {
  "value": "跨页面复用注意事项",
  "id": "跨页面复用注意事项",
  "level": 2
}, {
  "value": "BuilderNode中使用LocalStorage",
  "id": "buildernode中使用localstorage",
  "level": 2
}, {
  "value": "查询当前BuilderNode是否解除引用",
  "id": "查询当前buildernode是否解除引用",
  "level": 2
}, {
  "value": "设置BuilderNode继承冻结能力",
  "id": "设置buildernode继承冻结能力",
  "level": 2
}, {
  "value": "BuilderNode常用冻结场景（状态管理V1）",
  "id": "buildernode常用冻结场景状态管理v1",
  "level": 3
}, {
  "value": "BuilderNode常用冻结场景（状态管理V2）",
  "id": "buildernode常用冻结场景状态管理v2",
  "level": 3
}, {
  "value": "设置BuilderNode支持内部@Consume接收外部的@Provide数据（状态管理V1）",
  "id": "设置buildernode支持内部consume接收外部的provide数据状态管理v1",
  "level": 2
}, {
  "value": "设置BuilderNode支持内部@Consumer接收外部的@Provider数据（状态管理V2）",
  "id": "设置buildernode支持内部consumer接收外部的provider数据状态管理v2",
  "level": 2
}, {
  "value": "BuilderNode结合ArkWeb组件实现预渲染页面",
  "id": "buildernode结合arkweb组件实现预渲染页面",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义声明式节点-buildernode",
        children: "自定义声明式节点 (BuilderNode)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义声明式节点 (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), ")提供能够挂载系统组件的能力，支持采用无状态的UI方式，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E5%85%A8%E5%B1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
        children: "全局自定义构建函数"
      }), "@Builder定制组件树。组件树的根", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "节点可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#getframenode",
        children: "getFrameNode"
      }), "获取，该节点既可直接由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "返回并挂载于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "节点下，亦可在FrameNode树与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "树中嵌入声明式组件，实现混合显示。同时，BuilderNode具备纹理导出功能，导出的纹理可在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "中实现同层渲染。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由BuilderNode构建的ArkTS组件树，支持与自定义节点（如FrameNode、RenderNode）关联使用，确保了系统组件与自定义节点的混合显示效果。对于需与自定义节点对接的第三方框架，BuilderNode提供了嵌入系统组件的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此外，BuilderNode还提供了组件预创建的能力，能够自定义系统组件的创建开始的时间，在后续业务中实现动态挂载与显示。此功能尤其适用于初始化耗时较长的声明式组件，如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "Web"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "等，通过预创建，可以有效减少初始化时间，优化组件加载效率。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(653118)/* ["default"] */.A) + "",
        width: "1258",
        height: "830"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统组件：组件是UI的必要元素，形成了在界面中的样子，由ArkUI直接提供的称为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-development-overview",
          children: "系统组件"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实体节点：由后端创建的Native节点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode仅可作为叶子节点进行使用。如有更新需要，建议通过BuilderNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#update",
        children: "update"
      }), "方式触发更新，不建议通过BuilderNode中获取的RenderNode对节点进行修改操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(762163)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BuilderNode只支持一个由", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
          children: "wrapBuilder"
        }), "包装的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E5%85%A8%E5%B1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
          children: "全局自定义构建函数"
        }), "@Builder。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["一个新建的BuilderNode在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#build",
          children: "build"
        }), "之后才能通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#getframenode",
          children: "getFrameNode"
        }), "获取到一个指向根节点的FrameNode对象，否则返回null。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果传入的Builder的根节点为语法节点（if/else/foreach/...），需要额外生成一个FrameNode，在节点树中的显示为“BuilderProxyNode”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果BuilderNode通过getFrameNode将节点挂载在另一个FrameNode上，或者将其作为子节点挂载在NodeContainer节点上。则节点中使用父组件的布局约束进行布局。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果BuilderNode的FrameNode通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getrendernode",
          children: "getRenderNode"
        }), "形式将自己的节点挂载在RenderNode节点上，由于其FrameNode未上树，其大小默认为0，需要通过构造函数中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#renderoptions",
          children: "selfIdealSize"
        }), "显式指定布局约束大小，才能正常显示。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BuilderNode的预加载并不会减少组件的创建时间。Web组件创建的时候需要在内核中加载资源，预创建不能减少Web组件的创建的时间，但是可以让内核进行预加载，减少正式使用时候内核的加载耗时。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建buildernode对象",
      children: "创建BuilderNode对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode对象为一个模板类，需要在创建的时候指定类型。该类型需要与后续build方法中传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
        children: "WrappedBuilder"
      }), "的类型保持一致，否则会存在编译告警导致编译失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建组件树",
      children: "创建组件树"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过BuilderNode的build可以实现组件树的创建。依照传入的WrappedBuilder对象创建组件树，并持有组件树的根节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(800008)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无状态的UI方法全局@Builder最多拥有一个根节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build方法中对应的@Builder支持一个参数作为入参。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build中对于@Builder嵌套@Builder进行使用的场景，需要保证嵌套的参数与build的中提供的入参一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于@Builder嵌套@Builder进行使用的场景，如果入参类型不一致，则要求增加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#buildoptions12",
        children: "BuildOptions"
      }), "字段作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#build12",
        children: "build"
      }), "的入参。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要操作BuilderNode中的对象时，需要保证其引用不被回收。当BuilderNode对象被虚拟机回收之后，它的FrameNode、RenderNode对象也会与后端节点解引用。即从BuilderNode中获取的FrameNode对象不对应任何一个节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建离线节点以及组件树，结合FrameNode进行使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode的根节点直接作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller#makenode",
        children: "makeNode"
      }), "返回值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI';\n\nclass Params {\n  public text: string = '';\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = 'DEFAULT';\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message))\n    return this.textNode.getFrameNode();\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodePage {\n  @State message: string = 'hello';\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(new TextNodeController(this.message))\n          .width('100%')\n          .height(100)\n          .backgroundColor('#FFF0F0F0')\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将BuilderNode与RenderNode进行结合使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode的RenderNode挂载其它RenderNode下时，需要明确定义", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#renderoptions",
        children: "RenderOptions"
      }), "的selfIdealSize属性的大小作为BuilderNode的布局约束。不建议通过该方式挂载节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext, RenderNode } from '@kit.ArkUI';\n\nclass Params {\n  public text: string = '';\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = 'DEFAULT';\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    let renderNode = new RenderNode();\n    renderNode.clipToFrame = false;\n    this.textNode = new BuilderNode(context, { selfIdealSize: { width: 150, height: 150 } });\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    const textRenderNode = this.textNode?.getFrameNode()?.getRenderNode();\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n      renderNode.appendChild(textRenderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct RenderNodePage {\n  @State message: string = 'hello world';\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(new TextNodeController(this.message))\n          .width('100%')\n          .height(100)\n          .backgroundColor('#FFF0F0F0')\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新组件树",
      children: "更新组件树"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过BuilderNode对象的build创建组件树。依照传入的WrappedBuilder对象创建组件树，并持有组件树的根节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义组件的更新遵循", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "状态管理"
      }), "的更新机制。WrappedBuilder中直接使用的自定义组件其父组件为BuilderNode对象。因此，更新子组件即WrappedBuilder中定义的自定义组件，需要遵循状态管理的定义将相关的状态变量定义为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink"
      }), "。装饰器的选择请参照状态管理的装饰器规格结合应用开发需求进行选择。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用update更新BuilderNode中的节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#updateconfiguration12",
        children: "updateConfiguration"
      }), "触发BuilderNode中节点的全量更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新BuilderNode中的节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\nclass Params {\n  public text: string = '';\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n// 自定义组件\n@Component\nstruct TextBuilder {\n  // 作为自定义组件中需要更新的属性，数据类型为基础属性，定义为@Prop\n  @Prop message: string = 'TextBuilder';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(40)\n          .fontWeight(FontWeight.Bold)\n          .margin({ bottom: 10 })\n          .backgroundColor(Color.Gray)\n      }\n    }\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(40)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 10 })\n    TextBuilder({ message: params.text }) // 自定义组件\n  }\n  .width('100%')\n  .alignItems(HorizontalAlign.Center)\n  .justifyContent(FlexAlign.Center)\n\n}\n\nclass TextNodeController extends NodeController {\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = '';\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    return this.textNode.getFrameNode();\n  }\n\n  update(message: string) {\n    if (this.textNode !== null) {\n      // 调用update进行更新。\n      this.textNode.update(new Params(message));\n    }\n  }\n}\n\n@Entry\n@Component\nstruct WrappedBuilderPage {\n  @State message: string = 'hello';\n  private textNodeController: TextNodeController = new TextNodeController(this.message);\n  private count = 0;\n\n  build() {\n    Row() {\n      Column({ space: 25}) {\n        NodeContainer(this.textNodeController)\n          .width('100%')\n          .height(110)\n          .backgroundColor('#FFF0F0F0')\n        Button('Update')\n          .onClick(() => {\n            this.count += 1;\n            const message = 'Update' + this.count.toString();\n            this.textNodeController.update(message);\n          })\n          .fontSize(20)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(893313)/* ["default"] */.A) + "",
        width: "542",
        height: "324"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解除实体节点引用关系",
      children: "解除实体节点引用关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于BuilderNode对应的是后端的实体节点，正常的内存释放依赖前端对象的回收。如果期望直接释放后端的节点对象，则可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#dispose12",
        children: "dispose"
      }), "与实体节点解除引用关系，此时持有的前端BuilderNode对象不再影响实体节点的生命周期。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(610481)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当BuilderNode对象调用dispose之后，不仅BuilderNode对象与后端实体节点解除引用关系，BuilderNode中的FrameNode与RenderNode也会同步和实体节点解除引用关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若前端对象BuilderNode无法释放，容易导致内存泄漏。建议在不再需要对该BuilderNode对象进行操作时，开发者应主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏的风险。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注入触摸事件",
      children: "注入触摸事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode中提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#posttouchevent",
        children: "postTouchEvent"
      }), "，可以通过该接口向BuilderNode中绑定的组件注入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch",
        children: "触摸事件"
      }), "，实现事件的模拟转发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过postTouchEvent向BuilderNode对应的节点树中注入触摸事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向BuilderNode中的Column组件转发另一个Column接收的事件，即点击下方的Column组件，上方的Column组件也会收到同样的触摸事件。当Button中的事件被成功识别的时候，返回值为true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nclass Params {\n  public text: string = 'this is a text';\n}\n\n@Builder\nfunction buttonBuilder(params: Params) {\n  Column() {\n    Button(`button ` + params.text)\n      .borderWidth(2)\n      .backgroundColor(Color.Orange)\n      .width('100%')\n      .height('100%')\n      .gesture(\n        TapGesture()\n          .onAction((event: GestureEvent) => {\n            hilog.info(0xF811, 'testTag', '%{public}s', 'TapGesture');\n          })\n      )\n  }\n  .width(500)\n  .height(300)\n  .backgroundColor(Color.Gray)\n}\n\n// 创建并初始化BuilderNode\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(buttonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new BuilderNode(uiContext);\n    this.rootNode.build(this.wrapBuilder, { text: 'this is a string' });\n    return this.rootNode.getFrameNode();\n  }\n\n  // 转发触摸事件到BuilderNode\n  postTouchEvent(touchEvent: TouchEvent): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    let result = this.rootNode.postTouchEvent(touchEvent);\n    hilog.info(0xF811, 'testTag', '%{public}s', 'result' + result);\n  }\n}\n\n@Entry\n@Component\nstruct postTouchEventPage {\n  private nodeController: MyNodeController = new MyNodeController();\n  @State bgColor: Color = Color.Pink;\n\n  build() {\n    Column() {\n      NodeContainer(this.nodeController)\n        .height(300)\n        .width(500)\n      Column()\n        .id('onTouch')\n        .width(500)\n        .height(300)\n        .backgroundColor(this.bgColor)\n        .onTouch((event) => {\n          // 事件非空时，将触摸事件转发给节点控制器\n          if (event != undefined) {\n            this.nodeController.postTouchEvent(event);\n            this.bgColor = Color.Blue;\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildernode内的builderproxynode导致树结构发生变化",
      children: "BuilderNode内的BuilderProxyNode导致树结构发生变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若传入的Builder的根节点为语法节点（if/else/foreach/…）或自定义组件，将额外生成一个FrameNode，在节点树中显示为“BuilderProxyNode”，这会导致树结构变化，影响某些测试的传递过程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在以下示例中，Column和Row绑定了触摸事件，同时Column设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior#hittestbehavior",
        children: "hitTestBehavior"
      }), "属性为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#hittestmode9",
        children: "HitTestMode.Transparent"
      }), "。然而，由于生成了BuilderProxyNode，且BuilderProxyNode无法设置属性，因此在触摸Column时，Column的触摸测试无法传递到Row上。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(767472)/* ["default"] */.A) + "",
        width: "633",
        height: "738"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, typeNode, NodeController, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Component\nstruct BlueRowComponent {\n  build() {\n    Row() {\n      Row() {\n      }\n      .width('100%')\n      .height('200vp')\n      .backgroundColor(0xFF2787D9)\n      .onTouch((event: TouchEvent) => {\n        // 触摸绿色Column，蓝色Row的触摸事件不触发。\n        hilog.info(0xF811, 'testTag', '%{public}s', 'blue touched: ' + event.type);\n      })\n    }\n  }\n}\n\n@Component\nstruct GreenColumnComponent {\n  build() {\n    Column() {\n    }\n    .id('BuilderProxyNode01')\n    .width('100%')\n    .height('100vp')\n    .backgroundColor(0xFF17A98D)\n    .hitTestBehavior(HitTestMode.Transparent)\n    .onTouch((event: TouchEvent) => {\n      hilog.info(0xF811, 'testTag', '%{public}s', 'green touched: ' + event.type);\n    })\n  }\n}\n\n@Builder\nfunction buildBlueRow() {\n  // Builder直接挂载自定义组件，生成BuilderProxyNode。\n  BlueRowComponent()\n}\n\n@Builder\nfunction buildGreenColumn() {\n  // Builder直接挂载自定义组件，生成BuilderProxyNode。\n  GreenColumnComponent()\n}\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    const relativeContainer = typeNode.createNode(uiContext, 'RelativeContainer');\n\n    const blueRowNode = new BuilderNode(uiContext);\n    blueRowNode.build(wrapBuilder(buildBlueRow));\n\n    const greenColumnNode = new BuilderNode(uiContext);\n    greenColumnNode.build(wrapBuilder(buildGreenColumn));\n\n    // greenColumnNode覆盖在blueRowNode上。\n    relativeContainer.appendChild(blueRowNode.getFrameNode());\n    relativeContainer.appendChild(greenColumnNode.getFrameNode());\n\n    return relativeContainer;\n  }\n}\n\n@Entry\n@Component\nstruct BuilderProxyNode01 {\n  build() {\n    Column() {\n      NodeContainer(new MyNodeController())\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述场景中，若要实现触摸测试的传递，可以使用一个容器组件包裹语法节点或自定义组件，以避免生成BuilderProxyNode，并将容器组件的hitTestBehavior设置为HitTestMode.Transparent，从而向兄弟节点传递触摸测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(271178)/* ["default"] */.A) + "",
        width: "671",
        height: "736"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, typeNode, NodeController, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Component\nstruct BlueRowComponent {\n  build() {\n    Row() {\n      Row() {\n      }\n      .width('100%')\n      .height('200vp')\n      .backgroundColor(0xFF2787D9)\n      .onTouch((event: TouchEvent) => {\n        // 触摸绿色Column，蓝色Row的触摸事件触发。\n        hilog.info(0xF811, 'testTag', '%{public}s', 'blue touched: ' + event.type);\n      })\n    }\n  }\n}\n\n@Component\nstruct GreenColumnComponent {\n  build() {\n    Column() {\n    }\n    .width('100%')\n    .height('100vp')\n    .backgroundColor(0xFF17A98D)\n    .hitTestBehavior(HitTestMode.Transparent)\n    .onTouch((event: TouchEvent) => {\n      hilog.info(0xF811, 'testTag', '%{public}s', 'green touched: ' + event.type);\n    })\n  }\n}\n\n@Builder\nfunction buildBlueRow() {\n  // Builder直接挂载自定义组件，生成BuilderProxyNode。\n  BlueRowComponent()\n}\n\n@Builder\nfunction buildGreenColumn() {\n  // Builder根节点为容器组件，不会生成BuilderProxyNode，可以设置属性。\n  Stack() {\n    GreenColumnComponent()\n  }\n  .hitTestBehavior(HitTestMode.Transparent)\n}\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    const relativeContainer = typeNode.createNode(uiContext, 'RelativeContainer');\n\n    const blueRowNode = new BuilderNode(uiContext);\n    blueRowNode.build(wrapBuilder(buildBlueRow));\n\n    const greenColumnNode = new BuilderNode(uiContext);\n    greenColumnNode.build(wrapBuilder(buildGreenColumn));\n\n    // greenColumnNode覆盖在blueRowNode上。\n    relativeContainer.appendChild(blueRowNode.getFrameNode());\n    relativeContainer.appendChild(greenColumnNode.getFrameNode());\n\n    return relativeContainer;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      NodeContainer(new MyNodeController())\n        .id('BuilderProxyNode02')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此外，对于自定义组件，可以直接设置属性，此时将额外生成节点__Common__，自定义组件的属性将挂载于__Common__上，同样能够实现上述效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(621469)/* ["default"] */.A) + "",
        width: "648",
        height: "721"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, typeNode, NodeController, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Component\nstruct BlueRowComponent {\n  build() {\n    Row() {\n      Row() {\n      }\n      .width('100%')\n      .height('200vp')\n      .backgroundColor(0xFF2787D9)\n      .onTouch((event: TouchEvent) => {\n        // 触摸绿色Column，蓝色Row的触摸事件触发。\n        hilog.info(0xF811, 'testTag', '%{public}s', 'blue touched: ' + event.type);\n      })\n    }\n  }\n}\n\n@Component\nstruct GreenColumnComponent {\n  build() {\n    Column() {\n    }\n    .width('100%')\n    .height('100vp')\n    .backgroundColor(0xFF17A98D)\n    .hitTestBehavior(HitTestMode.Transparent)\n    .onTouch((event: TouchEvent) => {\n      hilog.info(0xF811, 'testTag', '%{public}s', 'green touched: ' + event.type);\n    })\n  }\n}\n\n@Builder\nfunction buildBlueRow() {\n  // Builder直接挂载自定义组件，生成BuilderProxyNode。\n  BlueRowComponent()\n}\n\n@Builder\nfunction buildGreenColumn() {\n  // 给自定义组件设置属性生成__Common__节点，Builder根节点为__Common__节点，不会生成BuilderProxyNode。\n  GreenColumnComponent()\n    .hitTestBehavior(HitTestMode.Transparent)\n}\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    const relativeContainer = typeNode.createNode(uiContext, 'RelativeContainer');\n\n    const blueRowNode = new BuilderNode(uiContext);\n    blueRowNode.build(wrapBuilder(buildBlueRow));\n\n    const greenColumnNode = new BuilderNode(uiContext);\n    greenColumnNode.build(wrapBuilder(buildGreenColumn));\n\n    // greenColumnNode覆盖在blueRowNode上。\n    relativeContainer.appendChild(blueRowNode.getFrameNode());\n    relativeContainer.appendChild(greenColumnNode.getFrameNode());\n\n    return relativeContainer;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      NodeContainer(new MyNodeController())\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildernode调用reuse和recycle接口实现节点复用能力",
      children: "BuilderNode调用reuse和recycle接口实现节点复用能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#reuse12",
        children: "reuse"
      }), "接口和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#recycle12",
        children: "recycle"
      }), "接口，将复用和回收事件传递至BuilderNode中的自定义组件，以实现BuilderNode节点内部的自定义组件的复用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下面的Demo为例，被复用的自定义组件ReusableChildComponent可以传递复用和回收事件到其下的自定义组件ChildComponent3，但无法传递给自定义组件ChildComponent2，因为被BuilderNode所隔断。因此需要主动调用BuilderNode的reuse和recycle接口，将复用和回收事件传递给自定义组件ChildComponent2，以实现复用效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(324924)/* ["default"] */.A) + "",
        width: "928",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, BuilderNode, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TEST_TAG: string = 'Reuse+Recycle';\n\nclass MyDataSource {\n  private dataArray: string[] = [];\n  private listener: DataChangeListener | null = null;\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number) {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string) {\n    this.dataArray.push(data);\n  }\n\n  public reloadListener(): void {\n    this.listener?.onDataReloaded();\n  }\n\n  public registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  public unregisterDataChangeListener(): void {\n    this.listener = null;\n  }\n}\n\nclass Params {\n  public item: string = '';\n\n  constructor(item: string) {\n    this.item = item;\n  }\n}\n\n@Builder\nfunction buildNode(param: Params = new Params('hello')) {\n  Row() {\n    Text(`C${param.item} -- `)\n    // 该自定义组件在BuilderNode中无法被正确复用\n    ChildComponent2({ item: param.item })\n  }\n}\n\nclass MyNodeController extends NodeController {\n  public builderNode: BuilderNode<[Params]> | null = null;\n  public item: string = '';\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.builderNode == null) {\n      this.builderNode = new BuilderNode(uiContext, { selfIdealSize: { width: 300, height: 200 } });\n      this.builderNode.build(wrapBuilder<[Params]>(buildNode), new Params(this.item));\n    }\n    return this.builderNode.getFrameNode();\n  }\n}\n\n// 被回收复用的自定义组件，其状态变量会更新，而子自定义组件ChildComponent3中的状态变量也会更新，但BuilderNode会阻断这一传递过程。\n@Reusable\n@Component\nstruct ReusableChildComponent {\n  @Prop item: string = '';\n  @Prop switch: string = '';\n  private controller: MyNodeController = new MyNodeController();\n\n  aboutToAppear() {\n    this.controller.item = this.item;\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(0xF811,'testTag','%{public}s',`${TEST_TAG} ReusableChildComponent aboutToRecycle ${this.item}`);\n\n    // 当开关为open，通过BuilderNode的reuse接口和recycle接口传递给其下的自定义组件，例如ChildComponent2，完成复用。\n    if (this.switch === 'open') {\n      this.controller?.builderNode?.recycle();\n    }\n  }\n\n  aboutToReuse(params: object): void {\n    hilog.info(0xF811,'testTag','%{public}s',`${TEST_TAG} ReusableChildComponent aboutToReuse ${JSON.stringify(params)}`);\n\n    // 当开关为open，通过BuilderNode的reuse接口和recycle接口传递给其下的自定义组件，例如ChildComponent2，完成复用。\n    if (this.switch === 'open') {\n      this.controller?.builderNode?.reuse(params);\n    }\n  }\n\n  build() {\n    Row() {\n      Text(`A${this.item}--`)\n      ChildComponent3({ item: this.item })\n      NodeContainer(this.controller);\n    }\n  }\n}\n\n@Component\nstruct ChildComponent2 {\n  @Prop item: string = 'false';\n\n  aboutToReuse(params: Record<string, object>) {\n    hilog.info(0xF811,'testTag','%{public}s',`${TEST_TAG} ChildComponent2 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(0xF811,'testTag','%{public}s',`${TEST_TAG} ChildComponent2 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`D${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@Component\nstruct ChildComponent3 {\n  @Prop item: string = 'false';\n\n  aboutToReuse(params: Record<string, object>) {\n    hilog.info(0xF811,'testTag','%{public}s',`${TEST_TAG} ChildComponent3 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(0xF811,'testTag','%{public}s',`${TEST_TAG} ChildComponent3 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`B${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n\n@Entry\n@Component\nstruct Index {\n  @State data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i < 100; i++) {\n      this.data.pushData(i.toString());\n    }\n  }\n\n  build() {\n    Column() {\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            ReusableChildComponent({\n              item: item,\n              switch: 'open' // 将open改为close可观察到，BuilderNode不通过reuse和recycle接口传递复用时，BuilderNode内部的自定义组件的行为表现。\n            })\n          }\n        }, (item: string) => item)\n      }\n      .id('List')\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildernode在子自定义组件中使用reusable装饰器",
      children: "BuilderNode在子自定义组件中使用@Reusable装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode节点的复用机制与使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable"
      }), "装饰器的自定义组件的复用机制会相互冲突。因此，当BuilderNode的子节点为自定义组件时，不支持该自定义组件使用@Reusable装饰器标记，否则将导致应用程序触发JSCrash。若需要使用@Reusable装饰器，应使用一个普通自定义组件包裹该自定义组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，ReusableChildComponent作为BuilderNode的子自定义组件，无法标记为@Reusable。通过ChildComponent2对其包裹，ReusableChildComponent可以使用@Reusable装饰器标记。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930899)/* ["default"] */.A) + "",
        width: "351",
        height: "550"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, BuilderNode, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TEST_TAG: string = 'Reusable';\n\nclass Params {\n  public item: string = '';\n\n  constructor(item: string) {\n    this.item = item;\n  }\n}\n\n@Builder\nfunction buildNode(param: Params = new Params('Hello')) {\n  ChildComponent2({ item: param.item })\n}\n\nclass MyNodeController extends NodeController {\n  public builderNode: BuilderNode<[Params]> | null = null;\n  public item: string = '';\n\n  constructor(item: string) {\n    super();\n    this.item = item;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.builderNode == null) {\n      this.builderNode = new BuilderNode(uiContext, { selfIdealSize: { width: 300, height: 200 } });\n      this.builderNode.build(wrapBuilder<[Params]>(buildNode), new Params(this.item));\n    }\n    return this.builderNode.getFrameNode();\n  }\n}\n\n// 标记了@Reusable的自定义组件，无法直接被BuilderNode挂载为子节点。\n@Reusable\n@Component\nstruct ReusableChildComponent {\n  @Prop item: string = '';\n\n  aboutToReuse(params: object): void {\n    hilog.info(0xF811, 'testTag', '%{public}s',\n      `${TEST_TAG} ReusableChildComponent aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(0xF811, 'testTag', '%{public}s', `${TEST_TAG} ReusableChildComponent aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Text(`A--${this.item}`)\n      .id('ReusablePage02')\n  }\n}\n\n// 未标记@Reusable的自定义组件。\n@Component\nstruct ChildComponent2 {\n  @Prop item: string = '';\n\n  aboutToReuse(params: Record<string, object>) {\n    hilog.info(0xF811, 'testTag', '%{public}s', `${TEST_TAG} ChildComponent2 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(0xF811, 'testTag', '%{public}s', `${TEST_TAG} ChildComponent2 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    ReusableChildComponent({ item: this.item })\n  }\n}\n\n\n@Entry\n@Component\nstruct Index {\n  @State controller: MyNodeController = new MyNodeController('Child');\n\n  build() {\n    Column() {\n      NodeContainer(this.controller)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过系统环境变化更新节点",
      children: "通过系统环境变化更新节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#updateconfiguration12",
        children: "updateConfiguration"
      }), "来监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
        children: "系统环境变化"
      }), "事件，以触发节点的全量更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10370)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateConfiguration接口用于通知对象进行更新，更新所使用的系统环境取决于应用当前系统环境的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\nimport { AbilityConstant, Configuration, EnvironmentCallback } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nclass Params {\n  public text: string = '';\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n// 自定义组件\n@Component\nstruct TextBuilder {\n  // 作为自定义组件中需要更新的属性，数据类型为基础属性，定义为@Prop\n  @Prop message: string = 'TextBuilder';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .margin({ bottom: 36 })\n          .fontColor($r(`app.color.text_color`)) // 开发者可在资源目录下的color.json文件中自定义颜色\n          .backgroundColor($r(`app.color.start_window_background`))\n      }\n    }\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n      .fontColor($r(`app.color.text_color`))\n    TextBuilder({ message: params.text }) // 自定义组件\n  }.backgroundColor($r(`app.color.start_window_background`))\n}\n\nclass TextNodeController extends NodeController {\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = '';\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    return this.textNode?.getFrameNode() ? this.textNode?.getFrameNode() : null;\n  }\n\n  createNode(context: UIContext) {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    builderNodeMap.push(this.textNode);\n  }\n\n  deleteNode() {\n    let node = builderNodeMap.pop();\n    node?.dispose();\n  }\n\n  update(message: string) {\n    if (this.textNode !== null) {\n      // 调用update进行更新。\n      this.textNode.update(new Params(message));\n    }\n  }\n}\n\n// 记录创建的自定义节点对象\nconst builderNodeMap: BuilderNode<[Params]>[] = [];\n\nfunction updateColorMode() {\n  builderNodeMap.forEach((value, index) => {\n    // 通知BuilderNode环境变量改变\n    value.updateConfiguration();\n  });\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello';\n  private textNodeController: TextNodeController = new TextNodeController(this.message);\n  private count = 0;\n\n  aboutToAppear(): void {\n    let environmentCallback: EnvironmentCallback = {\n      onMemoryLevel: (level: AbilityConstant.MemoryLevel): void => {\n        hilog.info(0xF811, 'testTag', '%{public}s', 'onMemoryLevel');\n      },\n      onConfigurationUpdated: (config: Configuration): void => {\n        hilog.info(0xF811, 'testTag', '%{public}s', 'onConfigurationUpdated ' + JSON.stringify(config));\n        updateColorMode();\n      }\n    };\n    // 注册监听回调\n    this.getUIContext().getHostContext()?.getApplicationContext().on('environment', environmentCallback);\n    // 创建自定义节点并添加至map\n    this.textNodeController.createNode(this.getUIContext());\n  }\n\n  aboutToDisappear(): void {\n    // 移除map中的引用，并将自定义节点释放\n    this.textNodeController.deleteNode();\n  }\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(this.textNodeController)\n          .width('100%')\n          .height(200)\n          .backgroundColor('#FFF0F0F0')\n        Button('Update')\n          .onClick(() => {\n            this.count += 1;\n            const message = 'Update ' + this.count.toString();\n            this.textNodeController.update(message);\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨页面复用注意事项",
      children: "跨页面复用注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router",
        children: "路由"
      }), "接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#replaceurl",
        children: "router.replaceUrl"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#back",
        children: "router.back"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#clear",
        children: "router.clear"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#replacenamedroute",
        children: "router.replaceNamedRoute"
      }), "操作页面时，若某个被缓存的BuilderNode位于即将销毁的页面内，那么在新页面中复用该BuilderNode时，可能会存在数据无法更新或新创建节点无法显示的问题。以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#replacenamedroute",
        children: "router.replaceNamedRoute"
      }), "为例，在以下示例代码中，当点击“router replace”按钮后，页面将切换至PageTwo，同时标志位isShowText会被设定为false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ets/pages/RouterPage3.ets\nimport { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\nimport 'ets/pages/RouterPage2';\n\n@Builder\nfunction buildText() {\n  // @Builder中使用语法节点生成BuilderProxyNode。\n  if (true) {\n    MyComponent()\n  }\n}\n\n@Component\nstruct MyComponent {\n  @StorageLink('isShowText') isShowText: boolean = true;\n\n  build() {\n    if (this.isShowText) {\n      Column() {\n        Text('BuilderNode Reuse')\n          .fontSize(36)\n          .fontWeight(FontWeight.Bold)\n          .padding(16)\n      }\n    }\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[]> | null = null;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n\n    if (AppStorage.has('textNode')) {\n      // 复用AppStorage中的BuilderNode。\n      this.textNode = AppStorage.get<BuilderNode<[]>>('textNode') as BuilderNode<[]>;\n      const parent = this.textNode.getFrameNode()?.getParent();\n      if (parent) {\n        parent.removeChild(this.textNode.getFrameNode());\n      }\n    } else {\n      this.textNode = new BuilderNode(context);\n      this.textNode.build(wrapBuilder<[]>(buildText));\n      // 将创建的BuilderNode存入AppStorage。\n      AppStorage.setOrCreate<BuilderNode<[]>>('textNode', this.textNode);\n    }\n    this.rootNode.appendChild(this.textNode.getFrameNode());\n\n    return this.rootNode;\n  }\n}\n\n@Entry({ routeName: 'myIndex' })\n@Component\nstruct Index {\n  aboutToAppear(): void {\n    AppStorage.setOrCreate<boolean>('isShowText', true);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(new TextNodeController())\n          .width('100%')\n          .backgroundColor('#FFF0F0F0')\n        Button('Router pageTwo')\n          .onClick(() => {\n            // 改变AppStorage中的状态变量触发Text节点的重新创建。\n            AppStorage.setOrCreate<boolean>('isShowText', false);\n            // 将BuilderNode从AppStorage中移除。\n            AppStorage.delete('textNode');\n\n            this.getUIContext().getRouter().replaceNamedRoute({ name: 'pageTwo' });\n          })\n          .margin({ top: 16 })\n      }\n      .width('100%')\n      .height('100%')\n      .padding(16)\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageTwo的实现如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ets/pages/RouterPage2.ets\n// 该页面中存在一个按钮，可跳转回主页面，回到主页面后，原有的文字消失。\nimport 'ets/pages/RouterPage1';\n\n@Entry({ routeName: 'pageTwo' })\n@Component\nstruct PageTwo {\n  build() {\n    Column() {\n      Button('Router replace to index')\n        .onClick(() => {\n          this.getUIContext().getRouter().replaceNamedRoute({ name: 'myIndex' });\n        })\n    }\n    .height('100%')\n    .width('100%')\n    .alignItems(HorizontalAlign.Center)\n    .padding(16)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(726725)/* ["default"] */.A) + "",
        width: "408",
        height: "275"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在API version 16之前，解决该问题的方法是在页面销毁时，将页面上的BuilderNode从缓存中移除。以上述例子为例，可以在页面跳转前，通过点击事件将BuilderNode从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中移除，以此达到预期效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 16及之后版本，BuilderNode在新页面被复用时，会自动刷新自身内容，无需在页面销毁时将BuilderNode从缓存中移除，如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ets/pages/RouterPage1.ets\nimport { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\nimport 'ets/pages/RouterPage2';\n\n@Builder\nfunction buildText() {\n  // @Builder中使用语法节点生成BuilderProxyNode\n  if (true) {\n    MyComponent()\n  }\n}\n\n@Component\nstruct MyComponent {\n  @StorageLink('isShowText') isShowText: boolean = true;\n\n  build() {\n    if (this.isShowText) {\n      Column() {\n        Text('BuilderNode Reuse')\n          .fontSize(36)\n          .fontWeight(FontWeight.Bold)\n          .padding(16)\n      }\n    }\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[]> | null = null;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n\n    if (AppStorage.has('textNode')) {\n      // 复用AppStorage中的BuilderNode\n      this.textNode = AppStorage.get<BuilderNode<[]>>('textNode') as BuilderNode<[]>;\n      const parent = this.textNode.getFrameNode()?.getParent();\n      if (parent) {\n        parent.removeChild(this.textNode.getFrameNode());\n      }\n    } else {\n      this.textNode = new BuilderNode(context);\n      this.textNode.build(wrapBuilder<[]>(buildText));\n      // 将创建的BuilderNode存入AppStorage\n      AppStorage.setOrCreate<BuilderNode<[]>>('textNode', this.textNode);\n    }\n    this.rootNode.appendChild(this.textNode.getFrameNode());\n\n    return this.rootNode;\n  }\n}\n\n@Entry({ routeName: 'myIndex' })\n@Component\nstruct Index {\n  aboutToAppear(): void {\n    AppStorage.setOrCreate<boolean>('isShowText', true);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(new TextNodeController())\n          .width('100%')\n          .backgroundColor('#FFF0F0F0')\n        Button('Router pageTwo')\n          .onClick(() => {\n            // 改变AppStorage中的状态变量触发Text节点的重新创建\n            AppStorage.setOrCreate<boolean>('isShowText', false);\n\n            this.getUIContext().getRouter().replaceNamedRoute({ name: 'pageTwo' });\n          })\n          .margin({ top: 16 })\n      }\n      .width('100%')\n      .height('100%')\n      .padding(16)\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildernode中使用localstorage",
      children: "BuilderNode中使用LocalStorage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，自定义组件支持接收", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
        children: "LocalStorage"
      }), "实例。可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E6%8E%A5%E6%94%B6localstorage%E5%AE%9E%E4%BE%8B",
        children: "传递LocalStorage实例"
      }), "来使用LocalStorage相关的装饰器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorageprop",
        children: "@LocalStorageProp"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstoragelink",
        children: "@LocalStorageLink"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, NodeController, UIContext } from '@kit.ArkUI';\n\nlet localStorage1: LocalStorage = new LocalStorage();\nlocalStorage1.setOrCreate('propA', 'propA');\n\nlet localStorage2: LocalStorage = new LocalStorage();\nlocalStorage2.setOrCreate('propB', 'propB');\n\n@Entry(localStorage1)\n@Component\nstruct Index {\n  @LocalStorageLink('propA') propA: string = 'Hello World';\n  @State count: number = 0;\n  private controller: NodeController = new MyNodeController(this.count, localStorage2);\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.propA)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        // 使用LocalStorage 实例localStorage2\n        Child({ count: this.count }, localStorage2)\n        NodeContainer(this.controller)\n      }\n      .id('LocalStoragePage')\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\ninterface Params {\n  count: number;\n  localStorage: LocalStorage;\n}\n\n@Builder\nfunction createChild(params: Params) {\n  // 构造过程中传递localStorage\n  Child({ count: params.count }, params.localStorage)\n}\n\nclass MyNodeController extends NodeController {\n  private count?: number;\n  private localStorage ?: LocalStorage;\n\n  constructor(count: number, localStorage: LocalStorage) {\n    super();\n    this.count = count;\n    this.localStorage = localStorage;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let builderNode = new BuilderNode<[Params]>(uiContext);\n    // 构造过程中传递localStorage\n    builderNode.build(wrapBuilder(createChild), { count: this.count, localStorage: this.localStorage });\n    return builderNode.getFrameNode();\n  }\n}\n\n@Component\nstruct Child {\n  @Prop count: number;\n  @LocalStorageLink('propB') propB: string = 'Hello World';\n\n  build() {\n    Text(this.propB)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询当前buildernode是否解除引用",
      children: "查询当前BuilderNode是否解除引用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#isdisposed20",
        children: "isDisposed"
      }), "接口查询当前BuilderNode对象是否已解除与后端实体节点的引用关系，从而可以在操作节点前检查其有效性，避免潜在风险。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, BuilderNode } from '@kit.ArkUI';\n\n@Builder\nfunction buildText() {\n  Text('Test')\n    .fontSize(20)\n    .fontWeight(FontWeight.Bold)\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private builderNode: BuilderNode<[]> | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(100)\n      .height(100)\n      .backgroundColor(Color.Pink);\n    this.builderNode = new BuilderNode<[]>(uiContext);\n    this.builderNode.build(wrapBuilder<[]>(buildText));\n\n    // 挂载BuilderNode。\n    this.rootNode.appendChild(this.builderNode.getFrameNode());\n    return this.rootNode;\n  }\n\n  disposeBuilderNode() {\n    // 解除BuilderNode与后端实体节点的引用关系。\n    this.builderNode?.dispose();\n  }\n\n  isDisposed(): string {\n    if (this.builderNode !== null) {\n      // 查询BuilderNode是否解除引用。\n      if (this.builderNode.isDisposed()) {\n        return 'builderNode isDisposed is true';\n      } else {\n        return 'builderNode isDisposed is false';\n      }\n    }\n    return 'builderNode is null';\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State text: string = '';\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('BuilderNode dispose')\n        .onClick(() => {\n          this.myNodeController.disposeBuilderNode();\n          this.text = '';\n        })\n        .width(200)\n        .height(50)\n      Button('BuilderNode isDisposed')\n        .onClick(() => {\n          this.text = this.myNodeController.isDisposed();\n        })\n        .width(200)\n        .height(50)\n      Text(this.text)\n        .fontSize(25)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置buildernode继承冻结能力",
      children: "设置BuilderNode继承冻结能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze",
        children: "自定义组件冻结"
      }), "，该功能冻结非激活状态组件的刷新能力。当组件处于非激活状态时，即便其绑定状态变量发生变化，也不会触发组件UI的重新渲染，从而减少复杂UI场景的刷新负载。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，BuilderNode节点可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "接口继承父自定义组件（即从该BuilderNode节点向上查找的第一个自定义组件）的冻结策略。当BuilderNode节点继承父自定义组件的冻结策略时，若父自定义组件的冻结策略设置为开启组件冻结（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-parameter/ts-custom-component-parameter#componentoptions",
        children: "freezeWhenInactive"
      }), "选项设为true），则BuilderNode节点在不活跃时将会冻结，当切换至活跃状态时解冻，并使用缓存的数据更新节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BuilderNode节点只有通过以下方式上下树时，才会根据该节点是否继承父自定义组件的冻结策略，来更新自己的冻结策略："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#appendchild12",
              children: "appendChild"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#insertchildafter12",
              children: "insertChildAfter"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#removechild12",
              children: "removeChild"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#clearchildren12",
              children: "clearChildren"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#addcomponentcontent12",
              children: "addComponentContent"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontent/js-apis-arkui-nodecontent",
              children: "NodeContent"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontent/js-apis-arkui-nodecontent#addframenode12",
              children: "addFrameNode"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontent/js-apis-arkui-nodecontent#removeframenode12",
              children: "removeFrameNode"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
              children: "NodeController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller#makenode",
              children: "makeNode"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#appendchild",
              children: "appendChild"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#insertchildafter",
              children: "insertChildAfter"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#removechild",
              children: "removeChild"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#clearchildren",
              children: "clearChildren"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#nodeadapter12",
              children: "NodeAdapter"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["节点通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
              children: "懒加载"
            }), "方式上下树时"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487844)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当BuilderNode节点设置为继承父自定义组件的冻结策略时，BuilderNode节点的冻结策略将与其上层最近的自定义组件或BuilderNode节点的冻结策略保持一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当BuilderNode节点被冻结时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#update",
        children: "update"
      }), "接口不会触发节点的更新，等其被解冻时再更新节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buildernode常用冻结场景状态管理v1",
      children: "BuilderNode常用冻结场景（状态管理V1）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，在状态管理V1中，当BuilderNode节点开启冻结（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "设置为true）并继承父自定义组件的冻结策略时，如果父自定义组件的冻结策略设置为开启组件冻结（即freezeWhenInactive选项设为true），则BuilderNode节点在不活跃时将会冻结。当切换至活跃状态时，节点将解冻并使用缓存的数据进行更新，示例如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common } from '@kit.AbilityKit';\n\nconst PAGE_ONE_INDEX = 1;\nconst PAGE_TWO_INDEX = 2;\n\nclass Params {\n  public count: number = 0;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n\n  Column() {\n    TextBuilder({ message: params.count })\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Params]> | null = null;\n  private count: number = 0;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.textNode = new BuilderNode(context, { selfIdealSize: { width: 150, height: 150 } });\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.count));\n    this.textNode.inheritFreezeOptions(true); // 设置BuilderNode的冻结继承状态为true\n    if (this.rootNode !== null) {\n      this.rootNode.appendChild(this.textNode.getFrameNode()); // 将BuilderNode上树\n    }\n    return this.rootNode;\n  }\n\n  update(): void {\n    if (this.textNode !== null) {\n      this.count += 1;\n      this.textNode.update(new Params(this.count)); // 更新BuilderNode中的数据，可以触发Log\n    }\n\n  }\n}\n\nconst textNodeController: TextNodeController = new TextNodeController();\n\n@Entry\n@Component\nstruct MyNavigationTestStack {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @State message: number = 0;\n  @State logNumber: number = 0;\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      pageOneStack({ message: this.message, logNumber: this.logNumber })\n    } else if (name === 'pageTwo') {\n      pageTwoStack({ message: this.message, logNumber: this.logNumber })\n    }\n  }\n\n  build() {\n    Column() {\n      Button('update builderNode') // 点击更新BuilderNode\n        .onClick(() => {\n          textNodeController.update();\n        })\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n  }\n}\n\n@Component\nstruct pageOneStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = PAGE_ONE_INDEX;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct pageTwoStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = PAGE_TWO_INDEX;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        // 请将$r('app.string.text1')替换为实际资源文件，在本示例中该资源文件的value值为\"BuilderNode处于冻结\"\n        Text($r('app.string.text1'))\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component({ freezeWhenInactive: true })\n  // 设置冻结策略为不活跃冻结\nstruct NavigationContentMsgStack {\n  @Link message: number;\n  @Link index: number;\n  @Link logNumber: number;\n\n  build() {\n    Column() {\n      if (this.index === 1) {\n        NodeContainer(textNodeController)\n      }\n    }\n  }\n}\n\n@Component({ freezeWhenInactive: true })\n  // 设置冻结策略为不活跃冻结\nstruct TextBuilder {\n  @Prop @Watch('info') message: number = 0;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  info(): void {\n    hilog.info(0xF811, 'testTag', '%{public}s',\n      `freeze-test TextBuilder message callback ${this.message}`); // 根据message内容变化来打印日志来判断是否冻结\n  }\n\n  build() {\n    Row() {\n      Column() {\n        // 请在resources\\base\\element\\string.json文件中配置name为'text2' ，value为非空字符串的资源\n        Text(this.context.resourceManager.getStringByNameSync('text2') + `${this.message}`)\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(95230)/* ["default"] */.A) + "",
        width: "297",
        height: "309"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buildernode常用冻结场景状态管理v2",
      children: "BuilderNode常用冻结场景（状态管理V2）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，在状态管理V2中，BuilderNode冻结开启方式和在状态管理V1中的开启方式一致，当BuilderNode节点开启冻结（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "设置为true）并继承父自定义组件的冻结策略时，如果父自定义组件的冻结策略设置为开启组件冻结（即freezeWhenInactive选项设为true），则BuilderNode节点在不活跃时将会冻结。当切换至活跃状态时，节点将解冻并使用缓存的数据进行更新。以下示例展示了几种状态管理V2常用的BuilderNode冻结场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "页面路由"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当BuilderNode节点开启冻结（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "设置为true）并且继承父自定义组件的冻结策略设置为开启组件冻结（即freezeWhenInactive选项设为true）时，页面1调用router.pushUrl接口跳转到页面2时，页面1为隐藏不可见状态，此时如果更新页面1中的状态变量，不会触发页面1刷新。图示如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(400993)/* ["default"] */.A) + "",
        width: "371",
        height: "351"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面1示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@ObservedV2\nexport class Book {\n  @Trace name: string = \"100\";\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Builder\nfunction buildText(book: Book) {\n  Column() {\n    BuildNodeChild()\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Book]> | null = null;\n  index: number = 0;\n  name: string = \"100\";\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.textNode = new BuilderNode(context, { selfIdealSize: { width: 150, height: 150 } });\n    this.textNode.build(wrapBuilder<[Book]>(buildText), new Book(this.name));\n    this.textNode.inheritFreezeOptions(true); // 设置BuilderNode的冻结继承状态为true。\n    if (this.rootNode !== null) {\n      this.rootNode.appendChild(this.textNode.getFrameNode()); // 将BuilderNode上树。\n    }\n    return this.rootNode;\n  }\n}\n\nconst textNodeController: TextNodeController = new TextNodeController();\n\n@Entry\n@ComponentV2({ freezeWhenInactive: true })\nexport struct Index3 {\n  build() {\n    Column() {\n      NodeContainer(textNodeController)\n    }\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true })\nstruct BuildNodeChild {\n  @Local bookTest: Book = new Book(\"A Midsummer Night’s Dream\");\n\n  @Monitor(\"bookTest.name\")\n  onMessageChange(monitor: IMonitor) {\n    console.info(`The book name change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Book name is  ${this.bookTest.name}`).fontSize(30)\n      Button('change')\n        .width('60%')\n        .height(40)\n        .fontSize(30)\n        .onClick(() => {\n          this.bookTest.name = \"The Old Man and the Sea\";\n        })\n        .margin(5)\n      Button('next').width('60%').height(40).fontSize(30)\n        .onClick(() => {\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/routing' });\n          setTimeout(() => {\n            this.bookTest = new Book(\"Jane Austen's Pride and Prejudice\");\n          }, 1000)\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面2-Routing2（即页面1的下一页）示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Page2 {\n  build() {\n    Column() {\n      Text(`This is the page2`).fontSize(25)\n      Button('Back')\n        .onClick(() => {\n          this.getUIContext().getRouter().back();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(874894)/* ["default"] */.A) + "",
        width: "1914",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在页面1中点击change按钮，bookTest变量的name属性改变，@Monitor中注册的方法onMessageChange会被调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在页面1中点击next按钮，跳转到页面2，然后延迟1s更新状态变量bookTest。在更新bookTest的时候，已经跳转到页面2，页面1处于inactive状态，@Local装饰的状态变量bookTest将不响应更新，其@Monitor不会调用，关联的节点不会刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TabContent"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当BuilderNode节点开启冻结（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "设置为true）并且继承父自定义组件的冻结策略设置为开启组件冻结（即freezeWhenInactive选项设为true）时，BuilderNode的子组件在不活跃时将会冻结，当切换至活跃状态时解冻。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在首次渲染的时候，Tabs只会创建当前正在显示的TabContent，当切换全部的TabContent后，TabContent才会被全部创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图示如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(3364)/* ["default"] */.A) + "",
        width: "451",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nclass Params {\n  message: number = 0;\n\n  constructor( message: number) {\n    this.message = message;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    buildNodeChild({ message: params.message});\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: number = 0;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.textNode = new BuilderNode(context, { selfIdealSize: { width: 150, height: 150 } });\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    this.textNode.inheritFreezeOptions(true); // 设置BuilderNode的冻结继承状态为true。\n    if (this.rootNode !== null) {\n      this.rootNode.appendChild(this.textNode.getFrameNode()); // 将BuilderNode上树。\n    }\n    return this.rootNode;\n  }\n\n  update(): void {\n    if (this.textNode !== null) {\n      this.message += 1;\n      this.textNode.update(new Params(this.message)); // 更新BuilderNode中的数据，可以触发Log。\n    }\n  }\n}\n\nconst textNodeController: TextNodeController = new TextNodeController();\n\n@Entry\n@ComponentV2\nstruct TabContentTest {\n  @Local message: number = 0;\n  @Local index:number = 0;\n\n  build() {\n    Row() {\n      Column() {\n        Button('change message').onClick(() => {\n          textNodeController.update();\n        })\n          .fontSize(25)\n          .height(40)\n\n        Tabs() {\n          TabContent() {\n            Column() {\n              FreezeBuildNode({ message: this.message })\n              Text('Tabs遍历后BuilderNode处于冻结')\n                .fontWeight(FontWeight.Bold)\n                .margin({ top: 48, bottom: 48 })\n                .fontSize(30)\n            }\n          }.tabBar(`tab`+`${this.index}`)\n          TabContent() {\n            Column() {\n              FreezeBuildNode({ message: this.message })\n            }\n          }.tabBar(`tab`+`${this.index+1}`)\n        }\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true })\nstruct FreezeBuildNode {\n  @Param message: number = 0;\n  @Param index: number = 0;\n  @Monitor('message') onMessageUpdated(mon: IMonitor) {\n    console.info(`FreezeBuildNode message callback func ${this.message}`);\n  }\n  build() {\n    if (this.index === 0) {\n      NodeContainer(textNodeController);\n    }\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true }) // BuilderNode下面的子组件开启冻结。\nstruct buildNodeChild {\n  @Param message: number = 0;\n  @Param index: number = 0;\n\n  @Monitor('message') onMessageUpdated(mon: IMonitor) {\n    console.info(`FreezeBuildNode buildNodeChild message callback func ${this.message}`);\n  }\n\n  build() {\n    Text('message' + `${this.message}`)\n      .fontSize(40)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(703468)/* ["default"] */.A) + "",
        width: "1916",
        height: "762"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.点击change message更改message的值，当前正在显示的BuilderNode下面的子组件buildNodeChild的message属性会被更新，buildNodeChild组件中@Monitor注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.点击tab1切换到另一个TabContent，该TabContent的状态由inactive变为active，对应的@Monitor注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.点击tab0切换回第一个TabContent，再切换到其他TabContent后点击change message更改message的值，此时tab0冻结，tab0的@Monitor注册的方法onMessageUpdated不会被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Navigation组件的BuilderNode冻结功能（通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "为true）是组件冻结机制在导航场景下的延伸，核心作用是优化包含BuilderNode的Navigation组件在页面切换或状态更新时的性能，避免非活跃状态下的冗余计算和渲染。当BuilderNode所在的Navigation页面处于非活跃状态（如被切换到后台、隐藏在Tab页/侧边栏后等），系统会将其标记为 “冻结”。冻结状态下，该BuilderNode的子组件会暂停状态更新、事件响应和渲染刷新（如@State、@Prop等状态变化不会触发重新渲染，生命周期回调暂时失效）。通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "为true，BuilderNode会继承父组件（如Navigation）的冻结状态，确保其下的整个子组件树同步进入冻结状态，避免局部未冻结导致的性能浪费。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nclass Params {\n  count: number = 0;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n\n  Column() {\n    TextBuilder({ message: params.count });\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Params]> | null = null;\n  private count: number = 0;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.textNode = new BuilderNode(context, { selfIdealSize: { width: 150, height: 150 } });\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.count));\n    this.textNode.inheritFreezeOptions(true); // 设置BuilderNode的冻结继承状态为true。\n    if (this.rootNode !== null) {\n      this.rootNode.appendChild(this.textNode.getFrameNode()); // 将BuilderNode上树。\n    }\n    return this.rootNode;\n  }\n\n  update(): void {\n    if (this.textNode !== null) {\n      this.count += 1;\n      this.textNode.update(new Params(this.count)); // 更新BuilderNode中的数据，可以触发Log。\n    }\n  }\n}\n\nconst textNodeController: TextNodeController = new TextNodeController();\n\n@Entry\n@ComponentV2\nstruct MyNavigationTestStack {\n  @Provider('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @Local message: number = 0;\n  @Local logNumber: number = 0;\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      PageOneStack({ message: this.message, logNumber: this.logNumber })\n    } else if (name === 'pageTwo') {\n      PageTwoStack({ message: this.message, logNumber: this.logNumber })\n    }\n  }\n\n  build() {\n    Column() {\n      Button('update builderNode') // 点击更新BuilderNode。\n        .onClick(() => {\n          textNodeController.update();\n        })\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈。\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n  }\n}\n\n@ComponentV2\nstruct PageOneStack {\n  @Consumer('pageInfo') pageInfo: NavPathStack=new NavPathStack();\n  @Local index: number = 1;\n  @Param @Require  message: number;\n  @Param @Require logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@ComponentV2\nstruct PageTwoStack {\n  @Consumer('pageInfo') pageInfo: NavPathStack=new NavPathStack();\n  @Local index: number = 2;\n  @Param @Require message: number;\n  @Param @Require logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Text('BuilderNode处于冻结')\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true }) // 设置冻结策略为不活跃冻结。\nstruct NavigationContentMsgStack {\n  @Param @Require message: number;\n  @Param @Require index: number;\n  @Param @Require logNumber: number;\n\n  build() {\n    Column() {\n      if (this.index === 1) {\n        NodeContainer(textNodeController);\n      }\n    }\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true }) // 设置冻结策略为不活跃冻结。\nstruct TextBuilder {\n  @Param  message: number = 0;\n\n  @Monitor('message')\n  info() {\n    console.info(` freeze-test TextBuilder message callback ${this.message}`); // 根据message内容变化来打印日志来判断是否冻结。\n  }\n  build() {\n    Row() {\n      Column() {\n        Text(`文本更新次数： ${this.message}`)\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258952)/* ["default"] */.A) + "",
        width: "1916",
        height: "766"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.进入Pageone页面，点击update builderNode按钮更改message的值，当前正在显示的BuilderNode下面的子组件TextBuilder组件中@Monitor注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.点击Next Page切换到PageTwo页面，点击update builderNode按钮，因为页面属于冻结状态，@Monitor注册的方法info不会被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.点击Back Page回到PageOne页面，因为在PageTwo页面时，message的值发生了变化，@Monitor注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat组件（用于循环生成子组件）的BuilderNode冻结功能（通过设置BuilderNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "为true启用），是组件冻结机制在循环列表场景下的具体应用，核心目的是优化列表中重复生成的子组件在非活跃状态下的性能，减少不必要的资源消耗。当BuilderNode生成的子组件处于非活跃状态（如列表项被滚动出屏幕、父组件进入冻结状态、或整个列表不可见时），系统会将该BuilderNode及其子组件树标记为“冻结”。冻结状态下，该BuilderNode对应的列表项会暂停状态更新（如@Local、@Param等状态变化不会触发重新渲染）、事件响应（如点击、滑动等事件暂时失效）和生命周期回调，避免后台无效计算。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "设置为true，BuilderNode会继承Repeat父组件的冻结状态，确保循环生成的每个子组件都能同步遵循冻结规则，避免局部未冻结导致的性能浪费。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI';\n\n// 定义一个Params类，用于传递参数。\n@ObservedV2\nclass Params {\n  // 单例模式，确保只有一个Params实例。\n  static singleton_: Params;\n\n  // 获取Params实例的方法。\n  static instance() {\n    if (!Params.singleton_) {\n      Params.singleton_ = new Params('');\n    }\n    return Params.singleton_;\n  }\n\n  // 使用@Trace装饰器装饰message、bgColor属性，以便跟踪其变化。\n  @Trace message: string = '';\n  @Trace bgColor: Color = Color.Pink;\n  index: number = 0;\n\n  constructor( message: string) {\n    this. message = message;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    BuildNodeChild({ message: params.message });\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = '';\n  // 构造函数接收一个message参数。\n  constructor(message: string){\n    super();\n    this.message = message;\n  }\n  // 创建并返回一个FrameNode。\n  makeNode(context: UIContext): FrameNode | null {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    this.textNode.inheritFreezeOptions(true); // BuilderNode开启冻结。\n    return this.textNode.getFrameNode();\n  }\n}\n\n@Entry\n@ComponentV2\nexport struct RepeatVirtualScrollFreeze {\n  @Local simpleList: Array<string> = [];\n  storage: Params = Params.instance();\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 7; i++) {\n      this.simpleList.push(`item${i}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Button('Reduce length to 5').width('60%').height(40).fontSize(25)\n        .onClick(() => {\n          this.simpleList = this.simpleList.slice(0, 5);\n        })\n        .margin(5)\n      Button('Change bgColor').width('60%').height(40).fontSize(25)\n        .onClick(() => {\n          this.storage.bgColor = this.storage.bgColor == Color.Pink ? Color.Yellow : Color.Pink;\n        })\n\n      List() {\n        Repeat(this.simpleList)\n          .each((obj: RepeatItem<string>) => {\n          })\n          .virtualScroll({ totalCount: this.simpleList.length })\n          .templateId(() => 'a')\n          .template('a', (ri) => {\n            FreezeBuildNode({\n              message: ri.item,\n              bgColor: this.storage.bgColor\n            })\n          }, { cachedCount: 2 })\n      }\n      .cachedCount(0)\n      .margin({top: 12, left: 180 })\n    }\n    .height('80%')\n    .justifyContent(FlexAlign.Center)\n    .margin({ top: 5 })\n  }\n}\n\n// 开启组件冻结。\n@ComponentV2({ freezeWhenInactive: true })\nstruct FreezeBuildNode {\n  storage: Params = Params.instance();\n  @Param @Require message: string ;\n  @Param @Require bgColor: Color;\n  @Monitor('storage.bgColor')\n  onBgColorChange(monitor: IMonitor) {\n    // bgColor改变时，缓存池中组件不刷新，不会打印日志。\n    console.info(`repeat---bgColor change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n  build() {\n    NodeContainer(new TextNodeController(this.message))\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true })\nstruct BuildNodeChild {\n  // 使用Params实例作为storage属性。\n  storage: Params = Params.instance();\n  @Param message: string = '';\n\n  // 使用@Monitor装饰器监听storage.message的变化。\n  @Monitor('storage.bgColor')\n  onMessageChange(monitor: IMonitor) {\n    console.info(`FreezeBuildNode buildNodeChild message callback func ${this.message}`);\n  }\n\n  build() {\n    Text(`[a]: ${this.message}`)\n      .fontSize(25)\n      .backgroundColor(this.storage.bgColor)\n      .margin(2)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(283373)/* ["default"] */.A) + "",
        width: "1916",
        height: "762"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Reduce length to 5后，被移除的两个组件会进入Repeat缓存池，然后点击Change bgColor更改bgColor的值触发节点刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启组件冻结（freezeWhenInactive: true）和BuilderNode节点开启冻结（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), ": true），只有剩余节点中@Monitor装饰的方法onMessageChange被触发，如示例中屏上的5个节点会刷新并打印BuilderNode子组件monitor的5条日志，缓存池中的节点则不会。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat和TabContent混用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode节点开启冻结功能（即通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "为true）后，支持与Repeat、TabContent等不同组件混合使用，示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI';\n\n// 定义一个Params类，用于传递参数。\n@ObservedV2\nclass Params {\n  // 单例模式，确保只有一个Params实例。\n  static singleton_: Params;\n\n  // 获取Params实例的方法。\n  static instance() {\n    if (!Params.singleton_) {\n      Params.singleton_ = new Params(0);\n    }\n    return Params.singleton_;\n  }\n\n  // 使用@Trace装饰器装饰message属性，以便跟踪其变化。\n  @Trace message: string = \"Hello\";\n  index: number = 0;\n\n  constructor(index: number) {\n    this.index = index;\n  }\n}\n\n// 定义一个buildNodeChild组件。\n@ComponentV2({ freezeWhenInactive: true }) // BuilderNode下面的子组件开启冻结。\nstruct buildNodeChild {\n  // 使用Params实例作为storage属性。\n  storage: Params = Params.instance();\n  @Param index: number = 0;\n\n  // 使用@Monitor装饰器监听storage.message的变化。\n  @Monitor(\"storage.message\")\n  onMessageChange(monitor: IMonitor) {\n    console.info(`FreezeBuildNode buildNodeChild message callback func ${this.storage.message}, index:${this.index}`);\n  }\n\n  build() {\n    Text(`buildNode Child message: ` +`\\n` + `${this.storage.message}`).fontSize(30)\n  }\n}\n\n// 定义一个buildText函数。\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    buildNodeChild({ index: params.index })\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private textNode: BuilderNode<[Params]> | null = null;\n  private index: number = 0;\n\n  // 构造函数接收一个index参数。\n  constructor(index: number) {\n    super();\n    this.index = index;\n  }\n\n  // 创建并返回一个FrameNode。\n  makeNode(context: UIContext): FrameNode | null {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.index));\n    this.textNode.inheritFreezeOptions(true); // BuilderNode开启冻结。\n    return this.textNode.getFrameNode();\n  }\n}\n\n// 定义一个Index组件。\n@Entry\n@ComponentV2\nexport struct RepeatTab {\n  // 使用Params实例作为storage属性。\n  storage: Params = Params.instance();\n  private data: number[] = [0, 1];\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"change\").width('80%').height(40).fontSize(30)\n          .onClick(() => {\n            this.storage.message += 'a';\n          })\n\n        Tabs() {\n          // 使用Repeat重复渲染TabContent组件。\n          Repeat<number>(this.data)\n            .each((obj: RepeatItem<number>) => {\n              TabContent() {\n                FreezeBuildNode({ index: obj.item })\n                  .margin({ top:20,bottom:5,left:5,right:5 })\n              }.tabBar(`tab${obj.item}`)\n            })\n            .key((item: number) => item.toString())\n        }\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n// 定义一个FreezeBuildNode组件。\n@ComponentV2({ freezeWhenInactive: true })\nstruct FreezeBuildNode {\n  // 使用Params实例作为storage属性。\n  storage: Params = Params.instance();\n  @Param index: number = 0;\n\n  // 使用@Monitor装饰器监听storage.message的变化。\n  @Monitor(\"storage.message\")\n  onMessageChange(monitor: IMonitor) {\n    console.info(`FreezeBuildNode message callback func ${this.storage.message}, index: ${this.index}`);\n  }\n\n  build() {\n    NodeContainer(new TextNodeController(this.index))\n      .width('100%')\n      .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193125)/* ["default"] */.A) + "",
        width: "1914",
        height: "758"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.点击change更改message的值，当前正在显示的BuilderNode下面的子组件buildNodeChild组件中@Monitor注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.点击tab1切换到另外的TabContent，该TabContent的状态由inactive变为active，对应的BuilderNode下面的子组件buildNodeChild组件中@Monitor注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.再次点击change更改message的值，仅当前显示的TabContent子组件中@Monitor注册的方法onMessageUpdated被触发。其他inactive的TabContent组件不会触发@Monitor。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置buildernode支持内部consume接收外部的provide数据状态管理v1",
      children: "设置BuilderNode支持内部@Consume接收外部的@Provide数据（状态管理V1）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，通过配置BuildOptions参数，BuilderNode内部自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
        children: "@Consume"
      }), "支持接收所在页面的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
        children: "@Provide"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#%E7%A4%BA%E4%BE%8B5buildernode%E6%94%AF%E6%8C%81%E5%86%85%E9%83%A8consume%E6%8E%A5%E6%94%B6%E5%A4%96%E9%83%A8%E7%9A%84provide%E6%95%B0%E6%8D%AE",
        children: "示例代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置buildernode支持内部consumer接收外部的provider数据状态管理v2",
      children: "设置BuilderNode支持内部@Consumer接收外部的@Provider数据（状态管理V2）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，通过配置BuildOptions参数，BuilderNode内部自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
        children: "@Consumer"
      }), "支持接收所在页面的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
        children: "@Provider"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#%E7%A4%BA%E4%BE%8B6buildernode%E6%94%AF%E6%8C%81%E5%86%85%E9%83%A8consumer%E6%8E%A5%E6%94%B6%E5%A4%96%E9%83%A8%E7%9A%84provider%E6%95%B0%E6%8D%AE",
        children: "示例代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildernode结合arkweb组件实现预渲染页面",
      children: "BuilderNode结合ArkWeb组件实现预渲染页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预渲染适用于Web页面启动与跳转等场景。通过结合BuilderNode，可以将ArkWeb组件提前进行离线预渲染，组件不会即时挂载至页面，而是在需要时通过NodeController动态挂载与显示。此举能够提高页面切换的流畅度及用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487310)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["访问在线网页时需添加网络权限：ohos.permission.INTERNET，具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建载体Ability，并创建Web组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { createNWeb } from '../Common/CommonIndex';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  // ···\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err) => {\n      createNWeb('', windowStage.getMainWindowSync().getUIContext());\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');\n    });\n  }\n\n  // ···\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建NodeContainer和对应的NodeController，渲染后台Web组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIContext } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\nimport { NodeController, BuilderNode, Size, FrameNode } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n// @Builder中为动态组件的具体组件内容。\n// Data为入参封装类。\nclass Data {\n  public url: string = '';\n  public controller: WebviewController = new webview.WebviewController();\n}\n\n// 通过布尔变量shouldInactive控制网页在后台完成预渲染后停止渲染。\nlet shouldInactive: boolean = true;\n\n@Builder\nfunction webBuilder(data: Data) {\n  Column() {\n    Web({ src: data.url, controller: data.controller })\n      .onPageBegin(() => {\n        // 调用onActive，开启渲染。\n        data.controller.onActive();\n      })\n      .onFirstMeaningfulPaint(() => {\n        if (!shouldInactive) {\n          return;\n        }\n        // 在预渲染完成时触发，停止渲染。\n        data.controller.onInactive();\n        shouldInactive = false;\n      })\n      .width('100%')\n      .height('100%')\n  }\n}\n\nlet wrap = wrapBuilder<Data[]>(webBuilder);\n\n// 用于控制和反馈对应的NodeContainer上的节点的行为，需要与NodeContainer一起使用。\nexport class MyNodeController2 extends NodeController {\n  private rootnode: BuilderNode<Data[]> | null = null;\n\n  // 必须要重写的方法，用于构建节点数、返回节点挂载在对应NodeContainer中。\n  // 在对应NodeContainer创建的时候调用、或者通过rebuild方法调用刷新。\n  makeNode(uiContext: UIContext): FrameNode | null {\n    hilog.info(0xF811, 'testTag', '%{public}s', ' uicontext is undefined :' + (uiContext === undefined));\n    if (this.rootnode != null) {\n      // 返回FrameNode节点。\n      return this.rootnode.getFrameNode();\n    }\n    // 返回null控制动态组件脱离绑定节点。\n    return null;\n  }\n\n  // 当布局大小发生变化时进行回调。\n  aboutToResize(size: Size) {\n    hilog.info(0xF811, 'testTag', '%{public}s', 'aboutToResize   width   : ' + size.width + ' height : ' + size.height);\n  }\n\n  // 当controller对应的NodeContainer在Appear的时候进行回调。\n  aboutToAppear() {\n    hilog.info(0xF811, 'testTag', '%{public}s', 'aboutToAppear');\n    // 切换到前台后，不需要停止渲染。\n    shouldInactive = false;\n  }\n\n  // 当controller对应的NodeContainer在Disappear的时候进行回调。\n  aboutToDisappear() {\n    hilog.info(0xF811, 'testTag', '%{public}s', 'aboutToDisappear');\n  }\n\n  // 此函数为自定义函数，可作为初始化函数使用。\n  // 通过UIContext初始化BuilderNode，再通过BuilderNode中的build接口初始化@Builder中的内容。\n  initWeb(url: string, uiContext: UIContext, control: WebviewController) {\n    if (this.rootnode != null) {\n      return;\n    }\n    // 创建节点，需要uiContext。\n    this.rootnode = new BuilderNode(uiContext);\n    // 创建动态Web组件。\n    this.rootnode.build(wrap, { url: url, controller: control });\n  }\n}\n\n// 创建Map保存所需要的NodeController。\nlet nodeMap: Map<string, MyNodeController2 | undefined> = new Map();\n// 创建Map保存所需要的WebViewController。\nlet controllerMap: Map<string, WebviewController | undefined> = new Map();\n\n// 初始化需要UIContext 需在Ability获取。\nexport const createNWeb = (url: string, uiContext: UIContext) => {\n  // 创建NodeController。\n  let baseNode = new MyNodeController2();\n  let controller = new webview.WebviewController();\n  // 初始化自定义Web组件。\n  baseNode.initWeb(url, uiContext, controller);\n  controllerMap.set(url, controller);\n  nodeMap.set(url, baseNode);\n}\n\n// 自定义获取NodeController接口。\nexport const getNWeb = (url: string): MyNodeController2 | undefined => {\n  return nodeMap.get(url);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过NodeContainer使用已经预渲染的页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 使用NodeController的Page页。\n// pages/ArkWebPage.ets\nimport { createNWeb, getNWeb } from '../Common/CommonIndex';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        // NodeContainer用于与NodeController节点绑定，rebuild会触发makeNode。\n        // Page页通过NodeContainer接口绑定NodeController，实现动态组件页面显示。\n        NodeContainer(getNWeb(''))\n          .height('90%')\n          .width('100%')\n          .id('ArkWebPage')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
193125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958016-2486f8c5e7bbf98d783f0e586ea80451.gif");

},
893313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958010-f3b0dfa14fe9ecd6a17409ce4a13d6df.gif");

},
800008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
767472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478011-88d08a4fefd80ce07ac4e5238c8db1eb.png");

},
703468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478015-50ed594d40e3a38f0ce2d9920caa5d79.gif");

},
10370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
283373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438061-b695e3933c12ee4ef6159e839def3774.gif");

},
3364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477561-65e3d5ade6f97ed9f176754966e47912.png");

},
653118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438055-d13b134cc614f60d8e4fe0519ec6b643.png");

},
487844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
930899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478013-11142a0be6cd8e1ae1b2f2c3200fce59.png");

},
874894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958014-2bbd367e6c034184e89aa293f250f193.gif");

},
621469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438057-8869141dd3a8a98ffbf6be85da7181ea.png");

},
258952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798366-c3c690e1ce946e5f86e7da85ffc1c1dd.gif");

},
762163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
95230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438059-34e3d3a3a9860baca05a48f87f1582ae.gif");

},
726725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798364-831b590aa392dfef6d9cc7f0813e1ea1.gif");

},
324924(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958012-0d5b4e4d389a68f269da3ac3178b3503.png");

},
487310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
271178(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798362-712afbb69d2ef94f7ce3d7299b71d4e3.png");

},
400993(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957560-c9a79ef7931bd183f8b6518fda171470.png");

},
610481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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