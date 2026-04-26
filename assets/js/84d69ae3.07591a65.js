"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["593648"], {
745566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_rendernode_js_apis_arkui_rendernode_md_84d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-ui-interface-arkui-js-apis-arkui-rendernode-js-apis-arkui-rendernode-md-84d.json
var site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_rendernode_js_apis_arkui_rendernode_md_84d_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode","title":"RenderNode","description":"提供自绘制渲染节点RenderNode，支持开发者通过C API进行开发，完成自定义绘制需求。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode.md","sourceDirName":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode","slug":"/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"RenderNode","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-rendernode","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-arkui-rendernode"},"sidebar":"ref","previous":{"title":"NodeController","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller"},"next":{"title":"AttributeUpdater","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode.md


const frontMatter = {
	title: 'RenderNode',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-rendernode',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-arkui-rendernode'
};
const contentTitle = 'RenderNode';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "RenderNode",
  "id": "rendernode-1",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "appendChild",
  "id": "appendchild",
  "level": 3
}, {
  "value": "insertChildAfter",
  "id": "insertchildafter",
  "level": 3
}, {
  "value": "removeChild",
  "id": "removechild",
  "level": 3
}, {
  "value": "clearChildren",
  "id": "clearchildren",
  "level": 3
}, {
  "value": "getChild",
  "id": "getchild",
  "level": 3
}, {
  "value": "getFirstChild",
  "id": "getfirstchild",
  "level": 3
}, {
  "value": "getNextSibling",
  "id": "getnextsibling",
  "level": 3
}, {
  "value": "getPreviousSibling",
  "id": "getprevioussibling",
  "level": 3
}, {
  "value": "backgroundColor",
  "id": "backgroundcolor",
  "level": 3
}, {
  "value": "clipToFrame",
  "id": "cliptoframe",
  "level": 3
}, {
  "value": "opacity",
  "id": "opacity",
  "level": 3
}, {
  "value": "size",
  "id": "size",
  "level": 3
}, {
  "value": "position",
  "id": "position",
  "level": 3
}, {
  "value": "frame",
  "id": "frame",
  "level": 3
}, {
  "value": "pivot",
  "id": "pivot",
  "level": 3
}, {
  "value": "scale",
  "id": "scale",
  "level": 3
}, {
  "value": "translation",
  "id": "translation",
  "level": 3
}, {
  "value": "rotation",
  "id": "rotation",
  "level": 3
}, {
  "value": "transform",
  "id": "transform",
  "level": 3
}, {
  "value": "shadowColor",
  "id": "shadowcolor",
  "level": 3
}, {
  "value": "shadowOffset",
  "id": "shadowoffset",
  "level": 3
}, {
  "value": "label12+",
  "id": "label12",
  "level": 3
}, {
  "value": "shadowAlpha",
  "id": "shadowalpha",
  "level": 3
}, {
  "value": "shadowElevation",
  "id": "shadowelevation",
  "level": 3
}, {
  "value": "shadowRadius",
  "id": "shadowradius",
  "level": 3
}, {
  "value": "draw",
  "id": "draw",
  "level": 3
}, {
  "value": "invalidate",
  "id": "invalidate",
  "level": 3
}, {
  "value": "borderStyle12+",
  "id": "borderstyle12",
  "level": 3
}, {
  "value": "borderWidth12+",
  "id": "borderwidth12",
  "level": 3
}, {
  "value": "borderColor12+",
  "id": "bordercolor12",
  "level": 3
}, {
  "value": "borderRadius12+",
  "id": "borderradius12",
  "level": 3
}, {
  "value": "shapeMask12+",
  "id": "shapemask12",
  "level": 3
}, {
  "value": "shapeClip12+",
  "id": "shapeclip12",
  "level": 3
}, {
  "value": "dispose12+",
  "id": "dispose12",
  "level": 3
}, {
  "value": "markNodeGroup12+",
  "id": "marknodegroup12",
  "level": 3
}, {
  "value": "lengthMetricsUnit12+",
  "id": "lengthmetricsunit12",
  "level": 3
}, {
  "value": "isDisposed20+",
  "id": "isdisposed20",
  "level": 3
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
    number: "number",
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
        id: "rendernode",
        children: "RenderNode"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供自绘制渲染节点RenderNode，支持开发者通过C API进行开发，完成自定义绘制需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(216713)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不建议对", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
          children: "BuilderNode"
        }), "中的RenderNode进行修改操作。BuilderNode中持有的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
          children: "FrameNode"
        }), "仅用于将该BuilderNode作为子节点挂载到其他FrameNode上，对该FrameNode或对应的RenderNode进行属性设置与子节点操作可能会产生未定义行为，包括但不限于显示异常、事件异常、稳定性问题等。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RenderNode对象不支持使用JSON序列化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rendernode-1",
      children: "RenderNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RenderNode的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 100,\n  height: 100\n};\nrenderNode.backgroundColor = 0xffff0000;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "appendchild",
      children: "appendChild"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "appendChild(node: RenderNode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在RenderNode最后一个子节点后添加新的子节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rendernode-1",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的RenderNode。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: \"The parameter 'node' is invalid: its corresponding FrameNode cannot be adopted.\""
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 100,\n  height: 100\n};\nrenderNode.backgroundColor = 0xffff0000;\nconst child = new RenderNode();\nchild.frame = {\n  x: 10,\n  y: 10,\n  width: 50,\n  height: 50\n};\nchild.backgroundColor = 0xff00ff00;\nrenderNode.appendChild(child);\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      // 在RenderNode最后一个子节点后添加新的子节点\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insertchildafter",
      children: "insertChildAfter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "insertChildAfter(child: RenderNode, sibling: RenderNode | null): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在RenderNode指定子节点之后添加新的子节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rendernode-1",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的子节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sibling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rendernode-1",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: \"The parameter 'child' is invalid: its corresponding FrameNode cannot be adopted.\""
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 200,\n  height: 350\n};\nrenderNode.backgroundColor = 0xffff0000;\nfor (let i = 0; i < 5; i++) {\n  const node = new RenderNode();\n  node.frame = {\n    x: 10,\n    y: 10 + 60 * i,\n    width: 50,\n    height: 50\n  };\n  node.backgroundColor = 0xff00ff00;\n  renderNode.appendChild(node);\n}\n\nconst child = new RenderNode();\nchild.frame = {\n  x: 70,\n  y: 70,\n  width: 50,\n  height: 50\n};\nchild.backgroundColor = 0xffffff00;\nconst sibling = renderNode.getChild(1);\n// 将child节点插入至sibling节点之后\nrenderNode.insertChildAfter(child, sibling);\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removechild",
      children: "removeChild"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeChild(node: RenderNode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从RenderNode中删除指定的子节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rendernode-1",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要删除的子节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 200,\n  height: 350\n};\nrenderNode.backgroundColor = 0xffff0000;\nfor (let i = 0; i < 5; i++) {\n  const node = new RenderNode();\n  node.frame = {\n    x: 10,\n    y: 10 + 60 * i,\n    width: 50,\n    height: 50\n  };\n  node.backgroundColor = 0xff00ff00;\n  renderNode.appendChild(node);\n}\n\n// 删除renderNode下序列号为1的子节点\nconst node = renderNode.getChild(1);\nrenderNode.removeChild(node);\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clearchildren",
      children: "clearChildren"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clearChildren(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除当前RenderNode的所有子节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.size = { width: 200, height: 300 };\nfor (let i = 0; i < 10; i++) {\n  let childNode = new RenderNode();\n  childNode.size = { width: i * 10, height: i * 10 };\n  childNode.position = { x: i * 10, y: i * 10 };\n  childNode.backgroundColor = 0xFF0000FF - 0X11 * i;\n  renderNode.appendChild(childNode);\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n        .width(200)\n        .height(300)\n      Button(\"clearChildren\")\n        .onClick(() => {\n          renderNode.clearChildren(); // 清除renderNode的所有子节点\n        })\n    }.width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getchild",
      children: "getChild"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getChild(index: number): RenderNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode指定位置的子节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要查询的子节点的序列号。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rendernode-1",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.size = { width: 200, height: 300 };\nfor (let i = 0; i < 10; i++) {\n  let childNode = new RenderNode();\n  childNode.size = { width: i * 10, height: i * 10 };\n  childNode.position = { x: i * 10, y: i * 10 };\n  childNode.backgroundColor = 0xFF0000FF - 0X11 * i;\n  renderNode.appendChild(childNode);\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n        .width(200)\n        .height(300)\n      Button(\"getChild\")\n        .onClick(() => {\n          for (let i = 0; i < 11; i++) {\n            let childNode: RenderNode | null = renderNode.getChild(i);\n            if (childNode == null) {\n              // renderNode不存在序列号为10的子节点，此时返回null\n              console.error(`the ${i} of renderNode's childNode is null`);\n            } else {\n              // 正常获取子节点并打印节点属性\n              console.info(`the ${i} of renderNode's childNode has a size of {${childNode.size.width},${childNode.size.height}}`);\n            }\n          }\n\n        })\n    }.width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getfirstchild",
      children: "getFirstChild"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFirstChild(): RenderNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的第一个子节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rendernode-1",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 200,\n  height: 350\n};\nrenderNode.backgroundColor = 0xffff0000;\nfor (let i = 0; i < 5; i++) {\n  const node = new RenderNode();\n  node.frame = {\n    x: 10,\n    y: 10 + 60 * i,\n    width: 50,\n    height: 50\n  };\n  node.backgroundColor = 0xff00ff00;\n  renderNode.appendChild(node);\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n        .width(200)\n        .height(350)\n      Button('getFirstChild')\n        .onClick(() => {\n          // 获取renderNode的首个子节点\n          const firstChild = renderNode.getFirstChild();\n          if (firstChild === null) {\n            console.error('the fist child is null');\n          } else {\n            console.info(`the position of fist child is x: ${firstChild.position.x}, y: ${firstChild.position.y}`);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnextsibling",
      children: "getNextSibling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNextSibling(): RenderNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的下一个同级节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rendernode-1",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 200,\n  height: 350\n};\nrenderNode.backgroundColor = 0xffff0000;\nfor (let i = 0; i < 5; i++) {\n  const node = new RenderNode();\n  node.frame = {\n    x: 10,\n    y: 10 + 60 * i,\n    width: 50,\n    height: 50\n  };\n  node.backgroundColor = 0xff00ff00;\n  renderNode.appendChild(node);\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n        .width(200)\n        .height(350)\n      Button('getNextSibling')\n        .onClick(() => {\n          const child = renderNode.getChild(1);\n          // 获取renderNode序列号为1的子节点后，再获取它的下一个同级节点\n          const nextSibling = child!.getNextSibling()\n          if (nextSibling === null || child === null) {\n            console.error('the child or nextChild is null');\n          } else {\n            console.info(`the position of child is x: ${child.position.x}, y: ${child.position.y}, the position of nextSibling is x: ${nextSibling.position.x}, y: ${nextSibling.position.y}`);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getprevioussibling",
      children: "getPreviousSibling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPreviousSibling(): RenderNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的上一个同级节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rendernode-1",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 200,\n  height: 350\n};\nrenderNode.backgroundColor = 0xffff0000;\nfor (let i = 0; i < 5; i++) {\n  const node = new RenderNode();\n  node.frame = {\n    x: 10,\n    y: 10 + 60 * i,\n    width: 50,\n    height: 50\n  };\n  node.backgroundColor = 0xff00ff00;\n  renderNode.appendChild(node);\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n        .width(200)\n        .height(350)\n      Button('getPreviousSibling')\n        .onClick(() => {\n          const child = renderNode.getChild(1);\n          // 获取renderNode序列号为1的子节点后，再获取它的上一个同级节点\n          const previousSibling = child!.getPreviousSibling()\n          if (child === null || previousSibling === null) {\n            console.error('the child or previousChild is null');\n          } else {\n            console.info(`the position of child is x: ${child.position.x}, y: ${child.position.y}, the position of previousSibling is x: ${previousSibling.position.x}, y: ${previousSibling.position.y}`);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backgroundcolor",
      children: "backgroundColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set backgroundColor(color: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的背景颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "背景颜色值，ARGB格式，示例：0xE5E5E5。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get backgroundColor(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的背景颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前RenderNode的背景颜色，默认值为0X00000000。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 100, height: 100 };\n// 设置renderNode的背景颜色\nrenderNode.backgroundColor = 0XFF00FF00;\n// 获取renderNode的背景颜色\nconst backgroundColor = renderNode.backgroundColor;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cliptoframe",
      children: "clipToFrame"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set clipToFrame(useClip: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否对当前RenderNode剪裁。若设置为true，则超出该RenderNode大小的部分将会被截断。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useClip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否进行剪裁。  true表示对当前RenderNode剪裁，false表示不对当前RenderNode剪裁。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get clipToFrame(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode是否需要进行剪裁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前RenderNode是否需要进行剪裁，默认值为true。  true表示对当前RenderNode剪裁，false表示不对当前RenderNode剪裁。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 100, height: 100 };\nrenderNode.backgroundColor = 0xffff0000;\n// 设置renderNode是否需要剪裁\nrenderNode.clipToFrame = true;\n// 获取renderNode是否需要剪裁\nconst clipToFrame = renderNode.clipToFrame;\n\nconst childNode = new RenderNode();\nchildNode.frame = { x: 10, y: 10, width: 150, height: 50 };\nchildNode.backgroundColor = 0xffffff00;\nrenderNode.appendChild(childNode);\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opacity",
      children: "opacity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set opacity(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的不透明度。若输入的数值小于0，会被视为0。若输入的数值大于1，会被视为1。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的不透明度，数据范围为[0, 1]，值越大透明度越低。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get opacity(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的不透明度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前RenderNode的不透明度，默认值为1，不透明。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 100, height: 100 };\nrenderNode.backgroundColor = 0xffff0000;\n// 设置renderNode的不透明度\nrenderNode.opacity = 0.5;\n// 获取renderNode的不透明度\nconst opacity = renderNode.opacity;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "size",
      children: "size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set size(size: Size)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的大小。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get size(): Size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前RenderNode的大小，默认值宽度和高度为0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\n// 设置renderNode的大小\nrenderNode.size = { width: 100, height: 100 };\n// 获取renderNode的大小\nconst size = renderNode.size;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "position",
      children: "position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set position(position: Position)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的位置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get position(): Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前RenderNode的位置，默认位置为{ x: 0, y: 0 }。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.size = { width: 100, height: 100 };\n// 设置renderNode的位置\nrenderNode.position = { x: 10, y: 10 };\n// 获取renderNode的位置\nconst position = renderNode.position;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frame",
      children: "frame"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set frame(frame: Frame)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前RenderNode的大小和位置。当和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#position",
        children: "position"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#size",
        children: "size"
      }), "同时使用时，以后设置的为准。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#frame",
              children: "Frame"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的大小和位置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get frame(): Frame"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的大小和位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#frame",
              children: "Frame"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前RenderNode的大小和位置，默认值为{ x: 0, y: 0, width: 0, height: 0 }。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\n// 设置renderNode的大小和位置\nrenderNode.frame = { x: 10, y: 10, width: 100, height: 100 };\n// 获取renderNode的大小和位置\nconst frame = renderNode.frame;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pivot",
      children: "pivot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set pivot(pivot: Pivot)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的轴心，影响RenderNode的缩放和旋转效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pivot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#pivot",
              children: "Pivot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的轴心。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get pivot(): Pivot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的轴心。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#pivot",
              children: "Pivot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前RenderNode的轴心，默认值为{ x: 0.5, y: 0.5}。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.frame = { x: 10, y: 10, width: 100, height: 100 };\n// 设置renderNode的轴心\nrenderNode.pivot = { x: 0.5, y: 0.6 };\n// 获取renderNode的轴心\nconst pivot = renderNode.pivot;\n\nrenderNode.rotation = { x: 15, y: 0, z: 0 };\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scale",
      children: "scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set scale(scale: Scale)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的比例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#scale",
              children: "Scale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的缩放比例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get scale(): Scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的比例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#scale",
              children: "Scale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前RenderNode的比例，默认值为{ x: 1, y: 1 }。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.frame = { x: 10, y: 10, width: 100, height: 100 };\n// 设置renderNode的比例\nrenderNode.scale = { x: 0.5, y: 1 };\n// 获取renderNode的比例\nconst scale = renderNode.scale;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "translation",
      children: "translation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set translation(translation: Translation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的平移量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#translation",
              children: "Translation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的平移量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get translation(): Translation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的平移量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#translation",
              children: "Translation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前RenderNode的平移量，默认值为{ x: 0, y: 0 }。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.frame = { x: 10, y: 10, width: 100, height: 100 };\n// 设置renderNode的平移量\nrenderNode.translation = { x: 100, y: 0 };\n// 获取renderNode的平移量\nconst translation = renderNode.translation;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rotation",
      children: "rotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set rotation(rotation: Rotation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的旋转角度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#rotation",
              children: "Rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的旋转角度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get rotation(): Rotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的旋转角度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#rotation",
              children: "Rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前RenderNode的旋转角度。默认值为{ x: 0, y: 0, z: 0}。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.frame = { x: 10, y: 10, width: 100, height: 100 };\n// 设置renderNode的旋转角度\nrenderNode.rotation = { x: 45, y: 0, z: 0 };\n// 获取renderNode的旋转角度\nconst rotation = renderNode.rotation;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transform",
      children: "transform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set transform(transform: Matrix4)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的变换矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#matrix4",
              children: "Matrix4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的变换矩阵。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get transform(): Matrix4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的变换矩阵。默认值为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[\n  1, 0, 0, 0,\n  0, 1, 0, 0,\n  0, 0, 1, 0,\n  0, 0, 0, 1\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#matrix4",
              children: "Matrix4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前RenderNode的变换矩阵。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.frame = { x: 10, y: 10, width: 100, height: 100 };\n// 设置renderNode的变换矩阵\nrenderNode.transform = [\n  1, 0, 0, 0,\n  0, 2, 0, 0,\n  0, 0, 1, 0,\n  0, 0, 0, 1\n];\n// 获取renderNode的变换矩阵\nconst transform = renderNode.transform;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowcolor",
      children: "shadowColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set shadowColor(color: number)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前RenderNode的阴影颜色，ARGB格式。若设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#shadowalpha",
        children: "shadowAlpha"
      }), "，则不透明度以shadowAlpha为准。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的阴影颜色，ARGB格式。  取值范围是符合ARGB格式的颜色。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get shadowColor(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的阴影颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前RenderNode的阴影颜色，ARGB格式，默认值为0X00000000。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.frame = { x: 10, y: 10, width: 100, height: 100 };\nrenderNode.shadowElevation = 10;\n// 设置renderNode的阴影颜色\nrenderNode.shadowColor = 0XFF00FF00;\n// 获取renderNode的阴影颜色\nconst shadowColor = renderNode.shadowColor;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowoffset",
      children: "shadowOffset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set shadowOffset(offset: Offset)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的阴影偏移。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#offset",
              children: "Offset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的阴影偏移。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get shadowOffset(): Offset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的阴影偏移。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#offset",
              children: "Offset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前RenderNode的阴影偏移，默认值为{ x: 0, y: 0 }。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.frame = { x: 10, y: 10, width: 100, height: 100 };\nrenderNode.shadowElevation = 10;\nrenderNode.shadowColor = 0XFF00FF00;\n// 设置renderNode的阴影偏移\nrenderNode.shadowOffset = { x: 10, y: 10 };\n// 获取renderNode的阴影偏移\nconst shadowOffset = renderNode.shadowOffset;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "label12",
      children: "label12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set label(label: string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的标签。若当前节点是通过new创建的RenderNode，则设置的标签信息会在节点Inspector信息的属性中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的标签。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get label(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前RenderNode的标签，默认值为\"\"。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    const renderNode: RenderNode | null = this.rootNode.getRenderNode();\n    if (renderNode !== null) {\n      const renderChildNode: RenderNode = new RenderNode();\n      renderChildNode.frame = { x: 0, y: 0, width: 100, height: 100 };\n      renderChildNode.backgroundColor = 0xffff0000;\n      // 设置renderNode的标签\n      renderChildNode.label = 'customRenderChildNode';\n      // 获取renderNode的标签并打印日志\n      console.info('label:', renderChildNode.label);\n      renderNode.appendChild(renderChildNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .width(300)\n        .height(700)\n        .backgroundColor(Color.Gray)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowalpha",
      children: "shadowAlpha"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set shadowAlpha(alpha: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的阴影颜色的Alpha值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alpha"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的阴影颜色的Alpha值。  取值范围是alpha值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get shadowAlpha(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的阴影颜色的Alpha值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前RenderNode的阴影颜色的Alpha值，默认值为0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.frame = { x: 10, y: 10, width: 100, height: 100 };\nrenderNode.shadowElevation = 10;\nrenderNode.shadowColor = 0XFF00FF00;\nrenderNode.shadowOffset = { x: 10, y: 10 };\n// 设置renderNode的阴影颜色Alpha值\nrenderNode.shadowAlpha = 0.1;\n// 获取renderNode的阴影颜色Alpha值\nconst shadowAlpha = renderNode.shadowAlpha;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowelevation",
      children: "shadowElevation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set shadowElevation(elevation: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的阴影的光照高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "elevation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的光照高度。  取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get shadowElevation(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的阴影的光照高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前RenderNode的阴影高度，默认值为0。  取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xffff0000;\nrenderNode.frame = { x: 0, y: 0, width: 100, height: 100 };\nrenderNode.shadowOffset = { x: 10, y: 10 };\nrenderNode.shadowAlpha = 0.7;\n// 设置renderNode的阴影光照高度\nrenderNode.shadowElevation = 30;\n// 获取renderNode的阴影光照高度\nconst shadowElevation = renderNode.shadowElevation;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625411)/* ["default"] */.A) + "",
        width: "320",
        height: "320"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowradius",
      children: "shadowRadius"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set shadowRadius(radius: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的阴影模糊半径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的RenderNode的阴影模糊半径。  取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get shadowRadius(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的阴影模糊半径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前RenderNode的阴影模糊半径，默认值为0。  取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.backgroundColor = 0xff0000ff;\nrenderNode.frame = {\n  x: 100,\n  y: 100,\n  width: 100,\n  height: 100\n};\nrenderNode.shadowOffset = { x: 10, y: 10 };\nrenderNode.shadowAlpha = 0.7;\n// 设置renderNode的阴影模糊半径\nrenderNode.shadowRadius = 30;\n// 获取renderNode的阴影模糊半径\nconst shadowRadius = renderNode.shadowRadius;\nconsole.info(`FrameNode ${shadowRadius}`);\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(544254)/* ["default"] */.A) + "",
        width: "320",
        height: "320"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "draw",
      children: "draw"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "draw(context: DrawContext): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制方法，需要开发者进行实现。该方法会在RenderNode进行绘制时被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#drawcontext",
        children: "DrawContext"
      }), "中的Canvas是用于记录指令的临时Canvas，并非节点的真实Canvas。使用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode#%E8%B0%83%E6%95%B4%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%98%E5%88%B6canvas%E7%9A%84%E5%8F%98%E6%8D%A2%E7%9F%A9%E9%98%B5",
        children: "调整自定义绘制Canvas的变换矩阵"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206625)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RenderNode初始化时，会调用两次draw方法。第一次调用是在首次创建FrameNode时触发Render流程，第二次调用是在首次设置modifier时触发绘制。后续绘制流程皆由modifier触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#drawcontext",
              children: "DrawContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形绘制上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport bridge from \"libentry.so\"; // 该 so 由开发者通过 NAPI 编写并生成\nimport { RenderNode, FrameNode, NodeController, DrawContext } from '@kit.ArkUI';\n\n// 继承RenderNode，实现自定义绘制方法\nclass MyRenderNode extends RenderNode {\n  uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    super();\n    this.uiContext = uiContext;\n  }\n\n  // 绘制RenderNode时调用此函数\n  draw(context: DrawContext) {\n    // 需要将 context 中的宽度和高度从vp转换为px\n    bridge.nativeOnDraw(0, context, this.uiContext.vp2px(context.size.height), this.uiContext.vp2px(context.size.width));\n  }\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      const renderNode = new MyRenderNode(uiContext);\n      renderNode.size = { width: 100, height: 100 }\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++侧可通过NAPI来获取Canvas，并进行后续的自定义绘制操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// native_bridge.cpp\n#include \"napi/native_api.h\"\n#include <native_drawing/drawing_canvas.h>\n#include <native_drawing/drawing_color.h>\n#include <native_drawing/drawing_path.h>\n#include <native_drawing/drawing_pen.h>\n\nstatic napi_value OnDraw(napi_env env, napi_callback_info info)\n{\n    size_t argc = 4;\n    napi_value args[4] = { nullptr };\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    int32_t id;\n    napi_get_value_int32(env, args[0], &id);\n    \n    // 获取 Canvas 指针\n    void* temp = nullptr;\n    napi_unwrap(env, args[1], &temp);\n    OH_Drawing_Canvas *canvas = reinterpret_cast<OH_Drawing_Canvas*>(temp);\n    \n    // 获取 Canvas 宽度\n    int32_t width;\n    napi_get_value_int32(env, args[2], &width);\n    \n    // 获取 Canvas 高度\n    int32_t height;\n    napi_get_value_int32(env, args[3], &height);\n    \n    // 传入canvas、height、width等信息至绘制函数中进行自定义绘制\n    auto path = OH_Drawing_PathCreate();\n    OH_Drawing_PathMoveTo(path, width / 4, height / 4);\n    OH_Drawing_PathLineTo(path, width * 3 / 4, height / 4);\n    OH_Drawing_PathLineTo(path, width * 3 / 4, height * 3 / 4);\n    OH_Drawing_PathLineTo(path, width / 4, height * 3 / 4);\n    OH_Drawing_PathLineTo(path, width / 4, height / 4);\n    OH_Drawing_PathClose(path);\n    \n    auto pen = OH_Drawing_PenCreate();\n    OH_Drawing_PenSetWidth(pen, 10);\n    OH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(0xFF, 0xFF, 0x00, 0x00));\n    OH_Drawing_CanvasAttachPen(canvas, pen);\n    \n    OH_Drawing_CanvasDrawPath(canvas, path);\n\n    return nullptr;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"nativeOnDraw\", nullptr, OnDraw, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version =1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改工程中的src/main/cpp/CMakeLists.txt文件，添加如下内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(NapiTest)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED native_bridge.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so)\ntarget_link_libraries(entry PUBLIC libace_ndk.z.so)\ntarget_link_libraries(entry PUBLIC libnative_drawing.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时在工程中的src/main/cpp/types/libentry/index.d.ts文件中，添加自定义绘制函数在ArkTs侧的定义，如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawContext } from '@kit.ArkUI';\n\nexport const nativeOnDraw: (id: number, context: DrawContext, width: number, height: number) => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invalidate",
      children: "invalidate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invalidate(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法会触发RenderNode的重新渲染。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import bridge from \"libentry.so\"; // 该 so 由开发者通过 NAPI 编写并生成\nimport { RenderNode, FrameNode, NodeController, DrawContext } from '@kit.ArkUI';\n\n// 继承RenderNode，实现自定义绘制方法\nclass MyRenderNode extends RenderNode {\n  uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    super();\n    this.uiContext = uiContext;\n  }\n\n  draw(context: DrawContext) {\n    // 需要将 context 中的宽度和高度从vp转换为px\n    bridge.nativeOnDraw(0, context, this.uiContext.vp2px(context.size.height), this.uiContext.vp2px(context.size.width));\n  }\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  newNode: MyRenderNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode === null) {\n      return this.rootNode;\n    }\n    this.newNode = new MyRenderNode(uiContext);\n    this.newNode.size = { width: 100, height: 100 };\n    renderNode.appendChild(this.newNode);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      Column() {\n        NodeContainer(this.myNodeController)\n          .width('100%')\n        Button('Invalidate')\n          .onClick(() => {\n            // 触发RenderNode的重新渲染\n            this.myNodeController.newNode?.invalidate()\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "libentry.so的构建方式见draw方法的示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "borderstyle12",
      children: "borderStyle12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set borderStyle(style: Edges<BorderStyle>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的边框样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#edgest12",
              children: "Edges"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#borderstyle",
              children: "BorderStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的边框样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get borderStyle(): Edges<BorderStyle>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的边框样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#edgest12",
              children: "Edges"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#borderstyle",
              children: "BorderStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的边框样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 150, height: 150 };\nrenderNode.backgroundColor = 0XFF00FF00;\nrenderNode.borderWidth = { left: 8, top: 8, right: 8, bottom: 8 };\n// 设置renderNode的边框样式\nrenderNode.borderStyle = {\n  left: BorderStyle.Solid,\n  top: BorderStyle.Dotted,\n  right: BorderStyle.Dashed,\n  bottom: BorderStyle.Solid\n}\n// 获取renderNode的边框样式\nconst borderStyle = renderNode.borderStyle;\n\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "borderwidth12",
      children: "borderWidth12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set borderWidth(width: Edges<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的边框宽度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#edgest12",
              children: "Edges"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的边框宽度，单位为vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get borderWidth(): Edges<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的边框宽度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#edgest12",
              children: "Edges"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的边框宽度，默认所有边框宽度为0vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 150, height: 150 };\nrenderNode.backgroundColor = 0XFF00FF00;\n// 设置renderNode的边框宽度\nrenderNode.borderWidth = { left: 8, top: 8, right: 8, bottom: 8 };\n// 获取renderNode的边框宽度\nconst borderWidth = renderNode.borderWidth;\n\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bordercolor12",
      children: "borderColor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set borderColor(color: Edges<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的边框颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#edgest12",
              children: "Edges"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的边框颜色。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get borderColor(): Edges<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的边框颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#edgest12",
              children: "Edges"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的边框颜色，默认所有边框颜色为0XFF000000。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 150, height: 150 };\nrenderNode.backgroundColor = 0XFF00FF00;\nrenderNode.borderWidth = { left: 8, top: 8, right: 8, bottom: 8 };\n// 设置renderNode的边框颜色\nrenderNode.borderColor = { left: 0xFF0000FF, top: 0xFF0000FF, right: 0xFF0000FF, bottom: 0xFF0000FF };\n// 获取renderNode的边框颜色\nconst borderColor = renderNode.borderColor;\n\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "borderradius12",
      children: "borderRadius12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set borderRadius(radius: BorderRadiuses)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的边框圆角。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#borderradiuses12",
              children: "BorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的边框圆角，单位为vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get borderRadius(): BorderRadiuses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的边框圆角。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#borderradiuses12",
              children: "BorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的边框圆角，默认所有边框圆角为0vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 150, height: 150 };\nrenderNode.backgroundColor = 0XFF00FF00;\n// 设置renderNode的边框圆角\nrenderNode.borderRadius = { topLeft: 32, topRight: 32, bottomLeft: 32, bottomRight: 32 };\n// 获取renderNode的边框圆角\nconst borderRadius = renderNode.borderRadius;\n\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shapemask12",
      children: "shapeMask12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set shapeMask(shapeMask: ShapeMask)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的遮罩。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shapeMask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#shapemask12",
              children: "ShapeMask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的遮罩。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get shapeMask(): ShapeMask"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的遮罩。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#shapemask12",
              children: "ShapeMask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的边框遮罩。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController, ShapeMask } from '@kit.ArkUI';\n\n// 创建遮罩并设置填充颜色、边框颜色、边框宽度\nconst mask = new ShapeMask();\nmask.setRectShape({ left: 0, right: 150, top: 0, bottom: 150 });\nmask.fillColor = 0X55FF0000;\nmask.strokeColor = 0XFFFF0000;\nmask.strokeWidth = 24;\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 150, height: 150 };\nrenderNode.backgroundColor = 0XFF00FF00;\n// 设置renderNode的遮罩\nrenderNode.shapeMask = mask;\n// 获取renderNode的遮罩\nconst shapeMask = renderNode.shapeMask;\n\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shapeclip12",
      children: "shapeClip12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set shapeClip(shapeClip: ShapeClip)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前RenderNode的裁剪形状。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shapeClip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#shapeclip12",
              children: "ShapeClip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的裁剪形状。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get shapeClip(): ShapeClip"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前RenderNode的裁剪形状。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#shapeclip12",
              children: "ShapeClip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RenderNode的裁剪形状。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController, ShapeClip } from '@kit.ArkUI';\n\n// 创建图形裁剪形状并设置路径绘制指令\nconst clip = new ShapeClip();\nclip.setCommandPath({ commands: \"M100 0 L0 100 L50 200 L150 200 L200 100 Z\" });\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0XFF00FF00;\n// 设置renderNode的裁剪形状\nrenderNode.shapeClip = clip;\n// 获取renderNode的裁剪形状\nconst shapeClip = renderNode.shapeClip;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n      Button(\"setRectShape\")\n        .onClick(() => {\n          shapeClip.setRectShape({\n            left: 0,\n            right: 150,\n            top: 0,\n            bottom: 150\n          });\n          renderNode.shapeClip = shapeClip;\n        })\n      Button(\"setRoundRectShape\")\n        .onClick(() => {\n          shapeClip.setRoundRectShape({\n            rect: {\n              left: 0,\n              top: 0,\n              right: this.getUIContext().vp2px(150),\n              bottom: this.getUIContext().vp2px(150)\n            },\n            corners: {\n              topLeft: { x: 32, y: 32 },\n              topRight: { x: 32, y: 32 },\n              bottomLeft: { x: 32, y: 32 },\n              bottomRight: { x: 32, y: 32 }\n            }\n          });\n          renderNode.shapeClip = shapeClip;\n        })\n      Button(\"setCircleShape\")\n        .onClick(() => {\n          shapeClip.setCircleShape({ centerY: 75, centerX: 75, radius: 75 });\n          renderNode.shapeClip = shapeClip;\n        })\n      Button(\"setOvalShape\")\n        .onClick(() => {\n          shapeClip.setOvalShape({\n            left: 0,\n            right: this.getUIContext().vp2px(150),\n            top: 0,\n            bottom: this.getUIContext().vp2px(100)\n          });\n          renderNode.shapeClip = shapeClip;\n        })\n      Button(\"setCommandPath\")\n        .onClick(() => {\n          shapeClip.setCommandPath({ commands: \"M100 0 L0 100 L50 200 L150 200 L200 100 Z\" });\n          renderNode.shapeClip = shapeClip;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispose12",
      children: "dispose12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dispose(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "立即释放当前RenderNode。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 100, width: 100, height: 100 };\nrenderNode.backgroundColor = 0xffff0000;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.size = { width: 200, height: 200 };\n      rootRenderNode.backgroundColor = 0xff00ff00;\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n\n  disposeRenderNode() {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    // 释放当前renderNode前，移除该renderNode的所有子节点\n    if (rootRenderNode !== null) {\n      rootRenderNode.removeChild(renderNode);\n    }\n    renderNode.dispose();\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('RenderNode dispose')\n        .onClick(() => {\n          this.myNodeController.disposeRenderNode();\n        })\n        .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "marknodegroup12",
      children: "markNodeGroup12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set markNodeGroup(isNodeGroup: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记是否优先绘制节点及其子节点。若设置为true，则透明度等属性将在节点绘制完毕后再进行合成。设置效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(386754)/* ["default"] */.A) + "",
        width: "776",
        height: "189"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isNodeGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否优先绘制节点及其子节点。  true表示优先绘制节点及其子节点，false表示不是优先绘制节点及其子节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get markNodeGroup(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点是否标记了优先绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前节点是否标记了优先绘制。  true表示当前节点标记了优先绘制，false表示当前节点没有标记优先绘制。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController, DrawContext } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\n\n// 继承RenderNode，实现自定义绘制方法\nclass MyRenderNode extends RenderNode {\n  draw(context: DrawContext) {\n    const canvas = context.canvas;\n    const brush = new drawing.Brush();\n    brush.setColor({ alpha: 255, red: 255, green: 0, blue: 0 });\n    canvas.attachBrush(brush);\n    canvas.drawRect({ left: 0, right: 200, top: 0, bottom: 200 });\n    canvas.detachBrush();\n\n    brush.setColor({ alpha: 255, red: 0, green: 255, blue: 0 });\n    canvas.attachBrush(brush);\n    canvas.drawRect({ left: 100, right: 300, top: 100, bottom: 300 });\n    canvas.detachBrush();\n  }\n}\n\nconst renderNode = new MyRenderNode();\nrenderNode.frame = { x: 100, y: 100, width: 200, height: 200 };\nrenderNode.backgroundColor = 0xff0000ff;\n// 标记当前renderNode为优先绘制\nrenderNode.markNodeGroup = true;\nrenderNode.opacity = 0.5;\n\nconst isNodeGroup = renderNode.markNodeGroup;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lengthmetricsunit12",
      children: "lengthMetricsUnit12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set lengthMetricsUnit(unit: LengthMetricsUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置RenderNode各个属性使用的单位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetricsunit12",
              children: "LengthMetricsUnit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置RenderNode各个属性使用的单位。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get lengthMetricsUnit(): LengthMetricsUnit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取RenderNode各个属性使用的单位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetricsunit12",
              children: "LengthMetricsUnit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取RenderNode各个属性使用的单位，默认值为LengthMetricsUnit.DEFAULT。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController, DrawContext } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\nimport { LengthMetricsUnit } from '@kit.ArkUI';\n\n// 继承RenderNode，设置RenderNode各个属性使用的单位\nclass BaseRenderNode extends RenderNode {\n  constructor() {\n    super();\n    this.lengthMetricsUnit = LengthMetricsUnit.PX;\n  }\n}\n\n// 继承BaseRenderNode，实现自定义绘制方法\nclass MyRenderNode extends BaseRenderNode {\n  draw(context: DrawContext) {\n    const canvas = context.canvas;\n    const brush = new drawing.Brush();\n    brush.setColor({ alpha: 255, red: 255, green: 0, blue: 0 });\n    canvas.attachBrush(brush);\n    canvas.drawRect({ left: 0, right: 200, top: 0, bottom: 200 });\n    canvas.detachBrush();\n  }\n}\n\nconst renderNode = new MyRenderNode();\nrenderNode.frame = { x: 100, y: 100, width: 200, height: 200 };\nrenderNode.backgroundColor = 0xff0000ff;\nrenderNode.rotation = { x: 0, y: 0, z: 45 };\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdisposed20",
      children: "isDisposed20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDisposed(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前RenderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 100, y: 100, width: 100, height: 100 };\nrenderNode.backgroundColor = 0xff2787d9;\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.size = { width: 300, height: 300 };\n      rootRenderNode.backgroundColor = 0xffd5d5d5;\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n\n  disposeRenderNode() {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.removeChild(renderNode);\n    }\n    renderNode.dispose();\n  }\n\n  isDisposed() : string {\n    if (renderNode !== null) {\n      // 检查当前renderNode是否已经与后端节点解除引用\n      if (renderNode.isDisposed()) {\n        return 'renderNode isDisposed is true';\n      }\n      else {\n        return 'renderNode isDisposed is false';\n      }\n    }\n    return 'renderNode is null';\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State text: string = ''\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('RenderNode dispose')\n        .onClick(() => {\n          this.myNodeController.disposeRenderNode();\n          this.text = '';\n        })\n        .width(200)\n        .height(50)\n      Button('RenderNode isDisposed')\n        .onClick(() => {\n          this.text = this.myNodeController.isDisposed();\n        })\n        .width(200)\n        .height(50)\n      Text(this.text)\n        .fontSize(25)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(237339)/* ["default"] */.A) + "",
        width: "392",
        height: "571"
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
206625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
544254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAFAAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopKAFopKKAFpKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKKAFopKKAFopKWgAooooAKKKKACiiigAooooAKKKKACiiigAoopKAFpKKKACikooAXNJmkzRmgBc0ZpuaM0AOzSZpuaM0AOzRmm5ozQA7NGabmjNADs0ZpuaM0AOzRmm5ozQA7NLmmZozQA/NGabmjNADs0uabmjNADqKSigBaWkooAWiiigAooooAKKKKACiiigAooooASiiigApKKbmgBc0maQmkJoAXNJmmk00tQA/NJupham7qAJd1JuqLfSb6AJt1G6od9JvoAm3Ubqh30b6AJt1LuqDfRvoAn3Ubqg30u+gCbdS7qg30u+gCbNLmod1O3UAS5pc1GGpQaAJM0uaYDTs0AOpabmloAWlpKKAFooooAKKKKACiiigApKKKACkopDQAhNITQTTCaAAmmlqQtUZagBxaml6jZ6jL0ASl6aXqAyUwyUAWN9J5lVjLTTLQBa8yk8yqnm0nm0AXPMo8yqfm0ebQBc8yjzKp+bR5tAFzzKXzKpebSiWgC75lKHqmJacJKALgenh6piSniSgC2Gp4aqoepFagCwGp4NQBqkBoAlBpwNRg04GgB9LTRS0ALS0lAoAWiiigAoopKACkpaSgBDTSaU00mgBpNMJpWNRMaAMHxb4usfB2lxahqEVzLFJMIAtuqltxVmzyRxhTXFH46eGj/wAuGrf9+o//AI5R8dDnwXZf9hFP/RclfP8AX2mRZFhMbhPbVr3u1ozmq1ZRlZHvp+OPhs/8uOrf9+o//jlMPxu8OH/lx1X/AL9R/wDxdeC0V7P+quX9n95n7eZ7ufjZ4dP/AC5ar/36j/8Ai6YfjT4eP/Llqn/fqP8A+Lrwuij/AFVy7s/vD28z3I/Gfw//AM+Wqf8AfqP/AOLpD8ZvD/8Az56p/wB+o/8A4uvDqKP9Vcu7P7w9vM9w/wCFy6B/z56n/wB+o/8A4uk/4XJoH/Pnqf8A36j/APi68Qoo/wBVcu7P7w9vM9v/AOFyaB/z56n/AN+o/wD4uj/hcmgf8+ep/wDfqP8A+LrxCin/AKq5d2f3h7eZ7f8A8Lk0D/nz1P8A79R//F0f8Lk0D/nz1P8A79R//F14hRR/qrl3Z/eHt5nt/wDwuXQP+fPU/wDv1H/8XS/8Ll8P/wDPnqn/AH6j/wDi68Popf6q5d2f3h7eZ7iPjN4f/wCfPVP+/Uf/AMXTh8aPD3/Plqn/AH6j/wDi68Moo/1Vy7s/vD28z3UfGrw8P+XLVP8Av1H/APF11/hbxXZeK9NkvrGK4jijmMJE6gNkAHsTx8wr5br3D4NPt8JXY/6f3/8ARcdePnuRYTBYR1qKd7rdmlKrKUrM9TV6mV6z0kqwj18UdJdVqlVqqI9Tq1AFlTTwagU1KpoAlFKKYDTxQA4UUlLQAtFFFABSUtJQAGmmlNIaAGmmE041GxoAYxqF2qRzVdzQB5j8cTnwbZ/9hBP/AEXJXgVe9fG458HWf/YQT/0XJXgtfpvCv/IvXqzir/GFFFFfSGIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFe0fCF9vhW6H/T8//oEdeL17D8KH2+GLkf8AT63/AKAlfOcVf8i5+qNqHxnp0clWUesuOSrcb1+YnaaSPVhGqhG9Wo2oAuqamU1VQ1OpoAnBp4qJTUgoAeKWminCgBaKKKACkoooAQ0004000AMNRsae1RNQBE5qtIanc1VkNAHmXxsOfCFn/wBhBP8A0XJXhFe6fGk58I2n/X+n/ouSvC6/TeFf+RevVnFX+MKKKK+kMQooooAKKKKACiiigAooooAKKKKACiiigAooooAK9a+FzbfDlwP+nxv/AEBK8lr1P4Ztt8P3H/X23/oCV85xV/yLn6o2ofGejxSVdifpWTC/Sr8LdK/MTtNSJquRtWbE1XYjQBfjNWENVIzVlDQBYWpBUS1IKAJBSiminUAOooooASiiigBDTDTjTTQAxqhepWqF6AIHNVZTVmSqkpoA8x+M5/4pK0/6/wBP/RcleG17j8Zj/wAUnaf9f6f+i5K8Or9N4V/5Fy9WcVf4wooor6QxCiiigAooooAKKKKACiiigAooooAKKKKACiiigAr074cNjQZx/wBPTf8AoCV5jXpXw7ONDn/6+m/9BWvnOKv+Rc/VG1D4z0CFulaELdKyYW6VowHpX5idpqwt0q9EazYT0q/CaANCM1ZSqkZq1HQBZWpVqFalWgCQU6minCgB1FFFACUUUUANNNNONNNAEbVC9TNUD0AV5Kpy1bkqnLQB5l8Zf+RTtP8Ar/T/ANFyV4fXt/xk/wCRTtP+v5P/AEXJXiFfpvCv/IuXqzir/GFFFFfSGIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFekfD040Sf/r5b/0Fa83r0b4fn/iSzf8AXy3/AKCtfOcVf8i5+qNqHxndwHpWjAelZcB6VpQHpX5idpqQnpWhCazYO1aENAF+KrcdVIqtx0AWEqZahWploAeKeKYKeKAHUUUUAJRRRQA00004000ARNUL9KmaoXoArSVTlq5JVOXpQB5j8ZP+RUtf+v5P/RcleIV7f8ZP+RTtP+v5P/RcleIV+m8K/wDIuXqzir/GFFFFfSGIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFei+AP+QLN/18t/6CtedV6L4A/5As3/AF8t/wCgrXznFX/Iufqjah8Z3EHatKDtWZB2rTg7V+YnaaUHatGGs6DtWjD2oAvRdqtx1Ui6CrcdAFlamWoUqZaAHinimCnigB1FFFACUUUUANNNNONNNAETVC9TtUD9KAK0lU5auSVTloA8x+Mn/Ip2n/X8n/ouSvEK9v8AjJ/yKlr/ANfyf+i5K8Qr9N4V/wCRcvVnFX+MKKKK+kMQooooAKKKKACiiigAooooAKKKKACiiigAooooAK9F8Af8gWb/AK+W/wDQVrzqvRfAH/IFm/6+W/8AQVr5zir/AJFz9UbUPjO3g7VpwdqzYO1aUHavzE7TSg7Vow9qz4O1aENAF6LoKtx1Uiq3HQBZSplqFamWgB4p4pgp4oAdRRRQAlFFFADTTTTjTTQBG1QPU7VC9AFWSqctXZKpyigDzD4y/wDIp2n/AF/J/wCi5K8Qr3D4y/8AIp2n/X+n/ouSvD6/TeFf+RcvVnFX+MKKKK+kMQooooAKKKKACiiigAooooAKKKKACiiigAooooAK9G+H4/4ks3/Xy3/oK15zXpHw9GdEn/6+W/8AQVr5zir/AJFz9UbUPjO3gHStKAdKz4B0rSgHSvzE7TQgHStCGqEI6VoQigC7FVuOqsVWo6ALCVMtQrUy0APFPFMFPFADqKKKAEooooAaaaaeaYaAI2qF6naoXoArSVUlFXHFVZBQB5d8Zh/xSVp/1/p/6Lkrw6vc/jQP+KRtP+v9P/RcleGV+m8K/wDIuXqzir/GFFFFfSGIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFel/DoZ0Kf/AK+m/wDQVrzSvT/huudAn/6+m/8AQEr5zir/AJFz9UbUPjO3hXpWhCvSqkK9K0IVr8xO0uQjpV+IVUhWr0QoAtRirSVXjFWkFAEy1KtRrUq0APFOFNFOoAdRRRQAlFLSUAIaaacaaaAIzUTVMajagCs4qtIKuOKrSCgDyz41DHhC0/6/0/8ARcleFV9SeK/C1l4r02OxvpbiOKOYTAwMobcAR3B4+Y1xb/Brw+vS81T/AL+x/wDxFfa5FnuEwWEVGs3e7exzVaUpSujw+ivaH+EOgr0u9S/7+R//ABFQP8KNDXpdaj/38T/4ivZ/1qy7u/uM/YTPHqK9ab4XaMvS61D/AL+J/wDEVA3wz0gf8vN//wB9p/8AE0f61Zd3f3B7CZ5ZRXpzfDjSh/y8Xv8A32n/AMTUZ+Helj/l4vf++0/+Jo/1qy7u/uD2EzzWivSD8PdMH/Lxef8Afa//ABNNPw/0z/nvef8Afa//ABNH+tWXd39wewmec0V6L/wgGm/897z/AL7X/wCJo/4QDTf+e95/32v/AMTR/rVl3d/cHsJnnVFei/8ACAab/wA97z/vtf8A4mj/AIQDTf8Anvef99r/APE0f61Zd3f3B7CZ51RXow+H+mf897z/AL7X/wCJpw+Huln/AJeLz/vtf/iaP9asu7v7g9hM83or0sfDrSz/AMvF7/32n/xNSL8N9JP/AC8X3/faf/E0f61Zd3f3B7CZ5hXqvwyXd4euD/09t/6AlC/DLRz1ub//AL+J/wDE11Hh7w9beH7J7S0eZ0eQykykE5IA7AccCvGz3PcJjcI6NFu910NKVKUZXZrQp0q9CnSooo6uxJ0r4o6SaJauxCoIlq5GtAE8YqwgqJBU6CgCVRUgpiipBQA4U6kFKKAHUUUUAFJS0lACGkNONNNADDTGFSGmEUAQMKgcVaYVC4oApOtVZErQdarulAGbJHVSSOtR0qs8dAGU8XtVZ4fatZ4vaoGh9qAMlofaoWh9q1mh9qiMHtQBlmD2phg9q1DB7U0we1AGZ5HtSeR7Vp+R7UeR7UAZnke1L5HtWl5HtR5HtQBniD2pwg9q0BB7U4Qe1AFJYfapUh9qtrD7VKsPtQBXSH2qzHFUqQ+1WEioAZHHVuNKEjqyiUAOjSrSLTESrCLQA9BU6imKKlUUAPUU8U0CnigBRThSUtAC0UUUAFJS0UAJSUtJQA000inmkIoAhYVGwqcimEUAVWWoXSrbLUbLQBRdKgeOr7JUTR0AZ7RVC0XtWk0dRGKgDOMPtUZh9q0jFTDD7UAZxh9qb5HtWkYfam+T7UAZ3ke1Hke1aPk+1Hk+1AGd5HtS+R7VoeT7UeT7UAUPI9qUQ+1X/J9qUQ+1AFIQ+1SLD7VbEVPEVAFVYvapliqdYqlWOgCJI6nRKeqVKqUAIiVMq0KtSqtAAoqQCkAqQCgBQKcKQU6gApaKKAFooooAKKKKAEopaSgBKQinUlADCKaRUhFNIoAiK1GVqcimlaAK5WoylWitMK0AVTHTDHVspTSlAFMx0hjq3spPLoAp+V7UeVVvy6PLoAp+V7UeV7Vb8v2o8ugCp5XtR5XtVvy6PLoAq+VS+VVry6PLoArCOnCOrGynbKAIBHTwlShKcEoAjCVIFp4WnBaAGhaeBSgU8CgBAKcBSgUoFAAKWiloAKUUlLQAUUUUAFFFFABRRRQAlFLSUAJSYp1JQA3FNIp+KMUARkU0rUuKTFAEW2k21LikxQBFtpNtTbaTbQBDso21Nto20AQ7aNlTbaNtAEOyjbU22jbQBDso21Nto20ARbaXbUm2l20AR7aULT8UuKAGhaUCnYpcUAIBS4pcUuKAExS0UtABRRS0AFFFFABRRRQAUUUUAFFFFABRRRQAlFLSYoAMUlLRQAmKTFOoxQA3FJinYooAbijFOoxQAzFGKfijFADMUYp+KMUAMxRin4oxQAzFGKfijFADcUYp2KKAG4pcUtGKAExS0uKKAEpaKKACilxRQAUUUUAFFFFAH//Z");

},
216713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
237339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439503-4fce8e1044b351a9e87c2138df9d6346.gif");

},
625411(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
386754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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