"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["534307"], {
549894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_componentcontent_js_apis_arkui_componentcontent_md_3cb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-ui-interface-arkui-js-apis-arkui-componentcontent-js-apis-arkui-componentcontent-md-3cb.json
var site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_componentcontent_js_apis_arkui_componentcontent_md_3cb_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent","title":"ComponentContent","description":"有两种创建实体封装组件的方式。开发者在开发过程中任选下面方式其一即可。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent.md","sourceDirName":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent","slug":"/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ComponentContent","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-arkui-componentcontent"},"sidebar":"ref","previous":{"title":"BuilderNode","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode"},"next":{"title":"FrameNode","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent.md


const frontMatter = {
	title: 'ComponentContent',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-arkui-componentcontent'
};
const contentTitle = 'ComponentContent';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "ComponentContent",
  "id": "componentcontent-1",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-1",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-2",
  "level": 3
}, {
  "value": "update",
  "id": "update",
  "level": 3
}, {
  "value": "reuse",
  "id": "reuse",
  "level": 3
}, {
  "value": "recycle",
  "id": "recycle",
  "level": 3
}, {
  "value": "dispose",
  "id": "dispose",
  "level": 3
}, {
  "value": "updateConfiguration",
  "id": "updateconfiguration",
  "level": 3
}, {
  "value": "isDisposed20+",
  "id": "isdisposed20",
  "level": 3
}, {
  "value": "inheritFreezeOptions20+",
  "id": "inheritfreezeoptions20",
  "level": 3
}, {
  "value": "ReactiveComponentContent22+",
  "id": "reactivecomponentcontent22",
  "level": 2
}, {
  "value": "constructor22+",
  "id": "constructor22",
  "level": 3
}, {
  "value": "reuse22+",
  "id": "reuse22",
  "level": 3
}, {
  "value": "recycle22+",
  "id": "recycle22",
  "level": 3
}, {
  "value": "dispose22+",
  "id": "dispose22",
  "level": 3
}, {
  "value": "updateConfiguration22+",
  "id": "updateconfiguration22",
  "level": 3
}, {
  "value": "flushState22+",
  "id": "flushstate22",
  "level": 3
}, {
  "value": "inheritFreezeOptions22+",
  "id": "inheritfreezeoptions22",
  "level": 3
}, {
  "value": "isDisposed22+",
  "id": "isdisposed22",
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
        id: "componentcontent",
        children: "ComponentContent"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有两种创建实体封装组件的方式。开发者在开发过程中任选下面方式其一即可。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ComponentContent表示组件内容的实体封装，其对象支持在非UI组件中创建与传递，便于开发者对弹窗类组件进行解耦封装。其底层使用了BuilderNode，具体使用规格参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ReactiveComponentContent表示组件内容的实体封装，其对象支持在非UI组件中创建与传递，便于开发者对弹窗类组件进行解耦封装。其底层使用了ReactiveBuilderNode，具体使用规格参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#reactivebuildernode22",
        children: "ReactiveBuilderNode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567253)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前不支持在预览器中使用ComponentContent和ReactiveComponentContent。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ComponentContent对象不支持使用JSON序列化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentContent, ReactiveComponentContent } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "componentcontent-1",
      children: "ComponentContent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-content/js-apis-arkui-content#content-1",
        children: "Content"
      }), "。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(uiContext: UIContext, builder: WrappedBuilder<[]>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentContent的构造函数。"
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
            children: "uiContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需要的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "%60https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-wrapbuilder%60",
              children: "WrappedBuilder<[]>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装不带参builder函数的WrappedBuilder对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor-1",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentContent的构造函数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uiContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需要的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "%60https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-wrapbuilder%60",
              children: "WrappedBuilder<[T]>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装带参builder函数的WrappedBuilder对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WrappedBuilder对象封装的builder函数的参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor-2",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentContent的构造函数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uiContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需要的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "%60https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-wrapbuilder%60",
              children: "WrappedBuilder<[T]>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装带参builder函数的WrappedBuilder对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WrappedBuilder对象封装的builder函数的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#buildoptions12",
              children: "BuildOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "build的配置参数，判断是否支持@Builder中嵌套@Builder的行为。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentContent, NodeContent, typeNode } from \"@kit.ArkUI\";\n\ninterface ParamsInterface {\n  text: string;\n  func: Function;\n}\n\n@Builder\nfunction buildTextWithFunc(fun: Function) {\n  Text(fun())\n    .fontSize(20)\n    .fontWeight(FontWeight.Bold)\n    .margin({ bottom: 36 })\n}\n\n@Builder\nfunction buildText(params: ParamsInterface) {\n  Column() {\n    Text(params.text)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 12 })\n    buildTextWithFunc(params.func)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"HELLO\";\n  private content: NodeContent = new NodeContent();\n\n  build() {\n    Row() {\n      Column({ space: 12 }) {\n        Button('addComponentContent')\n          .onClick(() => {\n            let column = typeNode.createNode(this.getUIContext(), \"Column\");\n            column.initialize();\n            column.addComponentContent(new ComponentContent<ParamsInterface>(this.getUIContext(),\n              wrapBuilder<[ParamsInterface]>(buildText), {\n                text: this.message, func: () => {\n                  return \"FUNCTION\"\n                }\n              }, { nestingBuilderSupported: true }));\n            this.content.addFrameNode(column);\n          })\n        ContentSlot(this.content)\n      }\n      .id(\"column\")\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(853334)/* ["default"] */.A) + "",
        width: "256",
        height: "125"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update",
      children: "update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "update(args: T): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于更新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
        children: "WrappedBuilder"
      }), "对象封装的builder函数参数，与constructor传入的参数类型保持一致。"]
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
            children: "args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于更新", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
              children: "WrappedBuilder"
            }), "对象封装的builder函数参数，与constructor传入的参数类型保持一致。"]
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
        children: "import { ComponentContent } from \"@kit.ArkUI\";\n\nclass Params {\n  text: string = \"\";\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n  }.backgroundColor('#FFF0F0F0')\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"hello\";\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"click me\")\n          .margin({ top: 200 })\n          .onClick(() => {\n            let uiContext = this.getUIContext();\n            let promptAction = uiContext.getPromptAction();\n            let contentNode = new ComponentContent(uiContext, wrapBuilder(buildText), new Params(this.message));\n            promptAction.openCustomDialog(contentNode);\n\n            setTimeout(() => {\n              contentNode.update(new Params(\"new message\"));\n            }, 2000); // 2秒后自动更新弹窗内容文本\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625071)/* ["default"] */.A) + "",
        width: "746",
        height: "755"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reuse",
      children: "reuse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reuse(param?: Object): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触发ComponentContent中的自定义组件的复用。组件复用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable装饰器：V1组件复用"
      }), "。关于ComponentContent的解绑场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%A7%A3%E9%99%A4%E5%AE%9E%E4%BD%93%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%E5%85%B3%E7%B3%BB",
        children: "解除实体节点引用关系"
      }), "。"]
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
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于复用ComponentContent的参数。该参数将直接用于ComponentContent中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则会导致未定义行为。调用此方法将同步触发内部自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse10",
              children: "aboutToReuse"
            }), "生命周期回调，并将该参数作为回调的入参。默认值为undefined，此时ComponentContent中的自定义组件将直接使用构造时的数据源。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recycle",
      children: "recycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "recycle(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["触发ComponentContent中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
          children: "@Reusable装饰器：V1组件复用"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ComponentContent通过reuse和recycle完成其内外自定义组件之间的复用事件传递，具体使用场景请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#buildernode%E8%B0%83%E7%94%A8reuse%E5%92%8Crecycle%E6%8E%A5%E5%8F%A3%E5%AE%9E%E7%8E%B0%E8%8A%82%E7%82%B9%E5%A4%8D%E7%94%A8%E8%83%BD%E5%8A%9B",
          children: "BuilderNode调用reuse和recycle接口实现节点复用能力"
        }), "。"]
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeContent, typeNode, ComponentContent } from \"@kit.ArkUI\";\n\nconst TEST_TAG: string = \"Reuse+Recycle\";\n\nclass MyDataSource {\n  private dataArray: string[] = [];\n  private listener: DataChangeListener | null = null;\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number) {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string) {\n    this.dataArray.push(data);\n  }\n\n  public reloadListener(): void {\n    this.listener?.onDataReloaded();\n  }\n\n  public registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  public unregisterDataChangeListener(): void {\n    this.listener = null;\n  }\n}\n\nclass Params {\n  item: string = '';\n\n  constructor(item: string) {\n    this.item = item;\n  }\n}\n\n@Builder\nfunction buildNode(param: Params = new Params(\"hello\")) {\n  Row() {\n    Text(`C${param.item} -- `)\n    ReusableChildComponent2({ item: param.item }) // 该自定义组件在ComponentContent中无法被正确复用\n  }\n}\n\n// 被回收复用的自定义组件，其状态变量会更新，而子自定义组件ReusableChildComponent3中的状态变量也会更新，但ComponentContent会阻断这一传递过程\n@Reusable\n@Component\nstruct ReusableChildComponent {\n  @Prop item: string = '';\n  @Prop switch: string = '';\n  private content: NodeContent = new NodeContent();\n  private componentContent: ComponentContent<Params> = new ComponentContent<Params>(\n    this.getUIContext(),\n    wrapBuilder<[Params]>(buildNode),\n    new Params(this.item),\n    { nestingBuilderSupported: true });\n\n  aboutToAppear() {\n    let column = typeNode.createNode(this.getUIContext(), \"Column\");\n    column.initialize();\n    column.addComponentContent(this.componentContent);\n    this.content.addFrameNode(column);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent aboutToRecycle ${this.item}`);\n\n    // 当开关为open，通过ComponentContent的reuse接口和recycle接口传递给其下的自定义组件，例如ReusableChildComponent2，完成复用\n    if (this.switch === 'open') {\n      this.componentContent.recycle();\n    }\n  }\n\n  aboutToReuse(params: object): void {\n    console.info(`${TEST_TAG} ReusableChildComponent aboutToReuse ${JSON.stringify(params)}`);\n\n    // 当开关为open，通过ComponentContent的reuse接口和recycle接口传递给其下的自定义组件，例如ReusableChildComponent2，完成复用\n    if (this.switch === 'open') {\n      this.componentContent.reuse(params);\n    }\n  }\n\n  build() {\n    Row() {\n      Text(`A${this.item}--`)\n      ReusableChildComponent3({ item: this.item })\n      ContentSlot(this.content)\n    }\n  }\n}\n\n@Component\nstruct ReusableChildComponent2 {\n  @Prop item: string = \"false\";\n\n  aboutToReuse(params: Record<string, object>) {\n    console.info(`${TEST_TAG} ReusableChildComponent2 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent2 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`D${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@Component\nstruct ReusableChildComponent3 {\n  @Prop item: string = \"false\";\n\n  aboutToReuse(params: Record<string, object>) {\n    console.info(`${TEST_TAG} ReusableChildComponent3 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent3 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`B${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n\n@Entry\n@Component\nstruct Index {\n  @State data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i < 100; i++) {\n      this.data.pushData(i.toString());\n    }\n  }\n\n  build() {\n    Column() {\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            ReusableChildComponent({\n              item: item,\n              switch: 'open' // 将open改为close可观察到，ComponentContent不通过reuse和recycle接口传递复用时，ComponentContent内部的自定义组件的行为表现\n            })\n          }\n        }, (item: string) => item)\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180120)/* ["default"] */.A) + "",
        width: "306",
        height: "246"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispose",
      children: "dispose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dispose(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["立即释放当前ComponentContent对象对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
        children: "基本概念：实体节点"
      }), "的引用关系。关于ComponentContent的解绑场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%A7%A3%E9%99%A4%E5%AE%9E%E4%BD%93%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%E5%85%B3%E7%B3%BB",
        children: "解除实体节点引用关系"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(574507)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当ComponentContent对象调用dispose之后，会与后端实体节点解除引用关系。若前端对象ComponentContent无法释放，容易导致内存泄漏。建议在不再需要操作该ComponentContent对象时，开发者主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏的风险。"
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { ComponentContent } from '@kit.ArkUI';\n\nclass Params {\n  text: string = \"\";\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n  }.backgroundColor('#FFF0F0F0')\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"hello\";\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"click me\")\n          .onClick(() => {\n            let uiContext = this.getUIContext();\n            let promptAction = uiContext.getPromptAction();\n            let contentNode = new ComponentContent(uiContext, wrapBuilder(buildText), new Params(this.message));\n            promptAction.openCustomDialog(contentNode);\n\n            setTimeout(() => {\n              promptAction.closeCustomDialog(contentNode)\n                .then(() => {\n                  console.info('customDialog closed.');\n                  if (contentNode !== null) {\n                    contentNode.dispose(); // 释放contentNode\n                  }\n                }).catch((error: BusinessError) => {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`closeCustomDialog args error code is ${code}, message is ${message}`);\n              })\n            }, 2000); // 2秒后自动关闭\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(935284)/* ["default"] */.A) + "",
        width: "300",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updateconfiguration",
      children: "updateConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateConfiguration(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["传递", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
        children: "系统环境变化"
      }), "事件，触发节点的全量更新。"]
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(4920)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateConfiguration接口用于通知对象更新当前的系统环境变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, ComponentContent, UIContext, FrameCallback } from '@kit.ArkUI';\nimport { AbilityConstant, Configuration, EnvironmentCallback, ConfigurationConstant } from '@kit.AbilityKit';\n\n@Builder\nfunction buildText() {\n  Column() {\n    Text('Hello')\n      .fontSize(36)\n      .fontWeight(FontWeight.Bold)\n  }\n  .backgroundColor($r('sys.color.ohos_id_color_background'))\n  .width('100%')\n  .alignItems(HorizontalAlign.Center)\n  .padding(16)\n}\n\nconst componentContentMap: Array<ComponentContent<[Object]>> = new Array();\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    return this.rootNode;\n  }\n\n  createNode(context: UIContext) {\n    this.rootNode = new FrameNode(context);\n    let component = new ComponentContent<Object>(context, wrapBuilder(buildText));\n    componentContentMap.push(component);\n    this.rootNode.addComponentContent(component);\n  }\n\n  deleteNode() {\n    let node = componentContentMap.pop();\n    this.rootNode?.dispose();\n    node?.dispose();\n  }\n}\n\nclass MyFrameCallback extends FrameCallback {\n  onFrame() {\n    updateColorMode();\n  }\n}\n\nfunction updateColorMode() {\n  componentContentMap.forEach((value, index) => {\n    value.updateConfiguration();\n  })\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  aboutToAppear(): void {\n    let environmentCallback: EnvironmentCallback = {\n      onMemoryLevel: (level: AbilityConstant.MemoryLevel): void => {\n        console.info('onMemoryLevel');\n      },\n      onConfigurationUpdated: (config: Configuration): void => {\n        console.info(`onConfigurationUpdated ${config}`);\n        this.getUIContext()?.postFrameCallback(new MyFrameCallback());\n      }\n    }\n    // 注册监听回调\n    this.getUIContext().getHostContext()?.getApplicationContext().on('environment', environmentCallback);\n    // 设置应用深浅色跟随系统\n    this.getUIContext()\n      .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n    this.myNodeController.createNode(this.getUIContext());\n  }\n\n  aboutToDisappear(): void {\n    // 移除map中的引用，并将自定义节点释放\n    this.myNodeController.deleteNode();\n  }\n\n  build() {\n    Column({ space: 16 }) {\n      NodeContainer(this.myNodeController);\n      Button('切换深色')\n        .onClick(() => {\n          this.getUIContext()\n            .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);\n        })\n      Button('设置浅色')\n        .onClick(() => {\n          this.getUIContext()\n            .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(592308)/* ["default"] */.A) + "",
        width: "250",
        height: "193"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdisposed20",
      children: "isDisposed20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDisposed(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前ComponentContent对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。"
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { ComponentContent } from '@kit.ArkUI';\n\nclass Params {\n  text: string = \"\";\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n  }.backgroundColor('#FFF0F0F0')\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"hello\";\n  @State beforeDispose: string = ''\n  @State afterDispose: string = ''\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"click me\")\n          .onClick(() => {\n            let uiContext = this.getUIContext();\n            let promptAction = uiContext.getPromptAction();\n            let contentNode = new ComponentContent(uiContext, wrapBuilder(buildText), new Params(this.message));\n            promptAction.openCustomDialog(contentNode);\n\n            setTimeout(() => {\n              promptAction.closeCustomDialog(contentNode)\n                .then(() => {\n                  console.info('customDialog closed.');\n                  if (contentNode !== null) {\n                    this.beforeDispose =\n                      contentNode.isDisposed() ? 'before dispose componentContent isDisposed is true' :\n                        'before dispose componentContent isDisposed is false';\n                    contentNode.dispose(); // 释放contentNode\n                    this.afterDispose = contentNode.isDisposed() ? 'after dispose componentContent isDisposed is true' :\n                      'after dispose componentContent isDisposed is false';\n                  }\n                }).catch((error: BusinessError) => {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`closeCustomDialog args error code is ${code}, message is ${message}`);\n              })\n            }, 1000); // 1秒后自动关闭\n          })\n        Text(this.beforeDispose)\n          .fontSize(25)\n          .margin({ top: 10, bottom: 10 })\n        Text(this.afterDispose)\n          .fontSize(25)\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(177883)/* ["default"] */.A) + "",
        width: "505",
        height: "702"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inheritfreezeoptions20",
      children: "inheritFreezeOptions20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "inheritFreezeOptions(enabled: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前ComponentContent对象是否设置为继承父组件中自定义组件的冻结策略。如果设置继承状态为false，则ComponentContent对象的冻结策略为false。在这种情况下，节点在不活跃状态下不会被冻结。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13464)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentContent设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，其冻结策略不会传递给子组件。"
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
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ComponentContent对象是否设置为继承父组件中自定义组件的冻结策略。true为继承父组件中自定义组件的冻结策略，false为不继承父组件中自定义组件的冻结策略。"
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
        children: "import { ComponentContent, FrameNode, NodeController } from '@kit.ArkUI';\n\nclass Params {\n  count: number = 0;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n\n@Builder\n// builder组件\nfunction buildText(params: Params) {\n\n  Column() {\n    TextBuilder({ message: params.count })\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private contentNode: ComponentContent<Params> | null = null;\n  private count: number = 0;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.contentNode =\n      new ComponentContent(context, wrapBuilder(buildText), new Params(this.count)); // 通过buildText创建ComponentContent\n    this.contentNode.inheritFreezeOptions(true); // 设置ComponentContent的冻结继承状态为True\n    if (this.rootNode !== null) {\n      this.rootNode.addComponentContent(this.contentNode); // 将ComponentContent上树\n    }\n    return this.rootNode;\n  }\n\n  update(): void {\n    if (this.contentNode !== null) {\n      this.count += 1;\n      this.contentNode.update(new Params(this.count)); // 更新ComponentContent中的数据，可以触发Log\n    }\n  }\n}\n\nconst textNodeController: TextNodeController = new TextNodeController();\n\n@Entry\n@Component\nstruct MyNavigationTestStack {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @State message: number = 0;\n  @State logNumber: number = 0;\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      pageOneStack({ message: this.message, logNumber: this.logNumber })\n    } else if (name === 'pageTwo') {\n      pageTwoStack({ message: this.message, logNumber: this.logNumber })\n    }\n  }\n\n  build() {\n    Column() {\n      Button('update ComponentContent') // 点击更新ComponentContent\n        .onClick(() => {\n          textNodeController.update();\n        })\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n  }\n}\n\n@Component\nstruct pageOneStack { // 页面一\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = 1;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule }) // 切换至页面二\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule }) // 返回主页面\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct pageTwoStack { // 页面二\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = 2;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Text('BuilderNode处于冻结')\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule }) // 返回至页面一\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component({ freezeWhenInactive: true })\n  // 设置冻结策略为不活跃冻结\nstruct NavigationContentMsgStack {\n  @Link message: number;\n  @Link index: number;\n  @Link logNumber: number;\n\n  build() {\n    Column() {\n      if (this.index === 1) {\n        NodeContainer(textNodeController)\n      }\n    }\n  }\n}\n\n@Component({ freezeWhenInactive: true })\n  // 设置冻结策略为不活跃冻结\nstruct TextBuilder {\n  @Prop @Watch(\"info\") message: number = 0;\n\n  info() {\n    console.info(`freeze-test TextBuilder message callback ${this.message}`); // 根据message内容变化来打印日志来判断是否冻结\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(`文本更新次数： ${this.message}`)\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721290)/* ["default"] */.A) + "",
        width: "336",
        height: "131"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reactivecomponentcontent22",
      children: "ReactiveComponentContent22+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ReactiveComponentContent继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-content/js-apis-arkui-content#content-1",
        children: "Content"
      }), "，是一个用于动态承载和复用UI内容的容器组件。它通过@Builder函数构建UI，并利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#reactivebuildernode22",
        children: "ReactiveBuilderNode"
      }), "生成和管理组件树。该组件的核心价值在于为动态内容提供完整的生命周期管理，使其能够融入ArkUI的组件复用体系，特别适用于长列表等需要高性能渲染的场景。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor22",
      children: "constructor22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(uiContext: UIContext, builder: WrappedBuilder<T>, config: BuildOptions, ...args: T)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ReactiveComponentContent的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uiContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
              children: "WrappedBuilder<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装带参@Builder函数的WrappedBuilder对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#buildoptions12",
              children: "BuildOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作用是配置Builder的构建行为，BuildOptions中所有属性都是可选的，默认值为BuildOptions中对应的默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "...args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WrappedBuilder对象封装的builder函数的参数。负责将外部数据传递给构造函数中指定的WrappedBuilder<T>构建函数。支持多个入参。默认值为undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了如何使用ReactiveComponentContent构造函数动态创建包含响应式内容的UI组件，实现了Builder函数的嵌套调用和函数参数的灵活传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ReactiveComponentContent, NodeContent, typeNode } from '@kit.ArkUI';\n\n@Builder\nfunction buildTextWithFunc(fun: Function) {\n  Text(fun())\n    .fontSize(20)\n    .fontWeight(FontWeight.Bold)\n    .margin({ bottom: 36 })\n}\n\n@Builder\nfunction buildText(text: string, func: Function) {\n  Column() {\n    Text(text)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 12 })\n    buildTextWithFunc(func)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'HELLO';\n  private content: NodeContent = new NodeContent();\n\n  build() {\n    Row() {\n      Column({ space: 12 }) {\n        Button('addComponentContent')\n          .onClick(() => {\n            // 动态创建Column节点\n            let column = typeNode.createNode(this.getUIContext(), 'Column');\n            column.initialize();\n            // 创建ReactiveComponentContent并添加到Column节点\n            column.addComponentContent(new ReactiveComponentContent<[string, Function]>(this.getUIContext(),\n              wrapBuilder<[string, Function]>(buildText), { nestingBuilderSupported: true },\n              this.message,\n              () => {\n                return 'FUNCTION'\n              }\n            ));\n            // 将构建好的节点添加到内容容器\n            this.content.addFrameNode(column);\n          })\n        ContentSlot(this.content) // 显示动态添加的内容\n      }\n      .id('column')\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(371800)/* ["default"] */.A) + "",
        width: "256",
        height: "125"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reuse22",
      children: "reuse22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reuse(param?: Object): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触发ReactiveComponentContent中的自定义组件的复用。组件复用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable装饰器：V1组件复用"
      }), "。关于ReactiveComponentContent的解绑场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%A7%A3%E9%99%A4%E5%AE%9E%E4%BD%93%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%E5%85%B3%E7%B3%BB",
        children: "解除实体节点引用关系"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ReactiveComponentContent通过reuse和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#recycle",
        children: "recycle"
      }), "接口完成其内外自定义组件之间的复用事件传递，具体使用场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#buildernode%E8%B0%83%E7%94%A8reuse%E5%92%8Crecycle%E6%8E%A5%E5%8F%A3%E5%AE%9E%E7%8E%B0%E8%8A%82%E7%82%B9%E5%A4%8D%E7%94%A8%E8%83%BD%E5%8A%9B",
        children: "BuilderNode调用reuse和recycle接口实现节点复用能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于复用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#reactivebuildernode22",
              children: "ReactiveComponentContent"
            }), "的参数。该参数将直接用于ReactiveComponentContent中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则会导致未定义行为。调用此方法将同步触发内部自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse10",
              children: "aboutToReuse"
            }), "生命周期回调，并将该参数作为回调的入参。默认值为undefined，此时ReactiveComponentContent中的自定义组件将直接使用构造时的数据源。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#recycle22",
        children: "recycle"
      }), "中的示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recycle22",
      children: "recycle22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "recycle(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触发ReactiveComponentContent中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable装饰器：V1组件复用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ReactiveComponentContent通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#reuse",
        children: "reuse"
      }), "和recycle完成其内外自定义组件之间的复用事件传递，具体使用场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#buildernode%E8%B0%83%E7%94%A8reuse%E5%92%8Crecycle%E6%8E%A5%E5%8F%A3%E5%AE%9E%E7%8E%B0%E8%8A%82%E7%82%B9%E5%A4%8D%E7%94%A8%E8%83%BD%E5%8A%9B",
        children: "BuilderNode调用reuse和recycle接口实现节点复用能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现了一个包含多层组件复用的高性能长列表，通过ReactiveComponentContent动态管理Builder内容，在列表滚动时实现组件的自动回收与复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeContent, typeNode, ReactiveComponentContent } from '@kit.ArkUI';\n\nconst TEST_TAG: string = 'Reuse+Recycle';\n\n// 自定义数据源类，用于管理列表数据\nclass MyDataSource {\n  private dataArray: string[] = [];\n  private listener: DataChangeListener | null = null;\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number) {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string) {\n    this.dataArray.push(data);\n  }\n\n  public reloadListener(): void {\n    this.listener?.onDataReloaded();\n  }\n\n  public registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  public unregisterDataChangeListener(): void {\n    this.listener = null;\n  }\n}\n\n@Builder\nfunction buildNode(param: string) {\n  Row() {\n    Text(`C${param} -- `)\n    ReusableChildComponent2({ item: param })\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableChildComponent {\n  @Prop item: string = '';\n  @Prop switch: string = '';\n  private content: NodeContent = new NodeContent();\n  // 创建ReactiveComponentContent实例，封装Builder动态内容\n  private componentContent: ReactiveComponentContent<[string]> = new ReactiveComponentContent<[string]>(\n    this.getUIContext(),\n    wrapBuilder<[string]>(buildNode),\n    { nestingBuilderSupported: true },\n    this.item);\n\n  aboutToAppear() {\n    let column = typeNode.createNode(this.getUIContext(), 'Column');\n    column.initialize();\n    column.addComponentContent(this.componentContent);\n    this.content.addFrameNode(column);\n  }\n\n  // 组件回收生命周期回调\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent aboutToRecycle ${this.item}`);\n\n    // 当开关开启时，触发内部ReactiveComponentContent的回收\n    if (this.switch === 'open') {\n      this.componentContent.recycle();\n    }\n  }\n\n  // 组件复用时命周期回调\n  aboutToReuse(params: object): void {\n    console.info(`${TEST_TAG} ReusableChildComponent aboutToReuse ${JSON.stringify(params)}`);\n\n    // 当开关开启时，触发内部ReactiveComponentContent的复用\n    if (this.switch === 'open') {\n      this.componentContent.reuse(params);\n    }\n  }\n\n  build() {\n    Row() {\n      Text(`A${this.item}--`)\n      ReusableChildComponent3({ item: this.item })\n      ContentSlot(this.content)\n    }\n  }\n}\n\n@Component\nstruct ReusableChildComponent2 {\n  @Prop item: string = 'false';\n\n  aboutToReuse(params: Record<string, object>) {\n    console.info(`${TEST_TAG} ReusableChildComponent2 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent2 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`D${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@Component\nstruct ReusableChildComponent3 {\n  @Prop item: string = 'false';\n\n  aboutToReuse(params: Record<string, object>) {\n    console.info(`${TEST_TAG} ReusableChildComponent3 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent3 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`B${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    // 初始化100条测试数据\n    for (let i = 0; i < 100; i++) {\n      this.data.pushData(i.toString());\n    }\n  }\n\n  build() {\n    Column() {\n      // 使用LazyForEach渲染长列表，启用组件复用\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            ReusableChildComponent({\n              item: item,\n              switch: 'open'\n            })\n          }\n        }, (item: string) => item)\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(985629)/* ["default"] */.A) + "",
        width: "306",
        height: "246"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispose22",
      children: "dispose22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dispose(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["立即释放当前ReactiveComponentContent对象对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
        children: "实体节点"
      }), "的引用关系。关于ReactiveComponentContent的解绑场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%A7%A3%E9%99%A4%E5%AE%9E%E4%BD%93%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%E5%85%B3%E7%B3%BB",
        children: "解除实体节点引用关系"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520742)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ReactiveComponentContent对象调用dispose接口后，会与后端实体节点解除引用关系。若前端ReactiveComponentContent对象无法释放，容易导致内存泄漏。建议开发者在不需要操作该ReactiveComponentContent对象时，主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏风险。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了如何使用dispose接口正确释放ReactiveComponentContent对象，管理节点生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  ReactiveComponentContent,\n  Binding,\n  MutableBinding,\n  UIContext,\n  UIUtils,\n  NodeController,\n  FrameNode\n} from '@kit.ArkUI';\n\n// dispose\n@Builder\nfunction buildText(\n  MsgAge: MutableBinding<number>,\n  message: MutableBinding<string>\n) {\n  Column() {\n    Row() {\n      Text(`age: ${MsgAge.value}, name: ${message.value}`)\n    }\n  }\n  .justifyContent(FlexAlign.Center)\n  .alignItems(HorizontalAlign.Center)\n  .width('100%')\n  .height('100%')\n}\n\ninterface GeneratedObjectLiteralInterface_1 {\n  MsgAge: number;\n  message: string;\n}\n\nconst params: GeneratedObjectLiteralInterface_1 = {\n  MsgAge: 10,\n  message: 'Mike',\n};\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private contentNode: ReactiveComponentContent<[Binding<number>, Binding<string>]> | null = null;\n\n  makeNode(context: UIContext): FrameNode | null {\n    // 创建FrameNode作为根容器\n    this.rootNode = new FrameNode(context);\n    // 创建ReactiveComponentContent响应式内容\n    this.contentNode = new ReactiveComponentContent <[Binding<number>, Binding<string>]>(context,\n      wrapBuilder<[Binding<number>, Binding<string>]>(buildText),\n      {},\n      UIUtils.makeBinding<number>(() => params.MsgAge, (val: number) => {\n        params.MsgAge = val\n        console.info(\"NodeTest1 get\", params.MsgAge);\n      }),\n      UIUtils.makeBinding<string>(() => params.message, val => {\n        console.info(\"NodeTest2 set before\", params.message);\n        params.message = val;\n        console.info(\"NodeTest3 set after\", params.message);\n      }),\n    );\n    // 将响应式内容添加到根节点\n    if (this.rootNode !== null) {\n      this.rootNode.addComponentContent(this.contentNode);\n    }\n    return this.rootNode;\n  }\n\n  // 释放资源的方法\n  dispose() {\n    if (this.contentNode !== null) {\n      this.contentNode.dispose(); // 释放ReactiveComponentContent资源\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      Column() {\n        // 显示自定义节点内容\n        NodeContainer(this.myNodeController)\n          .width('100%')\n          .height(100)\n          .backgroundColor('#FFF0F0F0')\n        // 触发资源释放\n        Button('ReactiveComponentContent dispose')\n          .onClick(() => {\n            this.myNodeController.dispose(); // 调用dispose释放资源\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(590049)/* ["default"] */.A) + "",
        width: "382",
        height: "152"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updateconfiguration22",
      children: "updateConfiguration22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateConfiguration(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["传递", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
        children: "系统环境变化"
      }), "事件，触发节点的全量更新。可用于通知对象更新，是否更新所使用的系统环境由应用当前的系统环境变化决定。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了如何使用updateConfiguration接口响应系统环境配置变化，实现ReactiveComponentContent构建的UI节点的动态适配更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, ReactiveComponentContent, UIContext, FrameCallback } from '@kit.ArkUI';\nimport { AbilityConstant, Configuration, EnvironmentCallback, ConfigurationConstant } from '@kit.AbilityKit';\n\n@Builder\nfunction buildText() {\n  Column() {\n    Text('Hello')\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n  }\n  .backgroundColor($r('sys.color.ohos_id_color_background')) // 使用系统颜色资源，会根据深浅色模式自动切换\n  .width('100%')\n  .alignItems(HorizontalAlign.Center)\n  .padding(16)\n}\n\nconst componentContentMap: Array<ReactiveComponentContent<[]>> = new Array();\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    return this.rootNode;\n  }\n\n  createNode(context: UIContext) {\n    this.rootNode = new FrameNode(context);\n    let component = new ReactiveComponentContent<[]>(context, wrapBuilder(buildText), {});\n    componentContentMap.push(component);\n    this.rootNode.addComponentContent(component);\n  }\n\n  deleteNode() {\n    let node = componentContentMap.pop();\n    this.rootNode?.dispose();\n    node?.dispose();\n  }\n}\n\nclass MyFrameCallback extends FrameCallback {\n  onFrame() {\n    updateColorMode();\n  }\n}\n\n// 遍历所有ReactiveComponentContent实例，调用updateConfiguration通知系统环境变化\nfunction updateColorMode() {\n  componentContentMap.forEach((value, index) => {\n    // updateConfiguration()的作用：传递系统环境变化事件，触发节点的全量更新\n    // 当系统深浅色模式、语言、字体大小等配置发生变化时，调用此接口会通知ReactiveComponentContent重新应用最新的系统配置\n    value.updateConfiguration();\n  })\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  aboutToAppear(): void {\n    let environmentCallback: EnvironmentCallback = {\n      onMemoryLevel: (level: AbilityConstant.MemoryLevel): void => {\n        console.info('onMemoryLevel');\n      },\n      onConfigurationUpdated: (config: Configuration): void => {\n        console.info(`onConfigurationUpdated ${config}`);\n        // 当系统配置更新时，通过帧回调触发updateConfiguration调用\n        this.getUIContext()?.postFrameCallback(new MyFrameCallback());\n      }\n    }\n    // 注册监听系统环境变化的回调\n    this.getUIContext().getHostContext()?.getApplicationContext().on('environment', environmentCallback);\n    // 设置应用深浅色跟随系统\n    this.getUIContext()\n      .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n    this.myNodeController.createNode(this.getUIContext());\n  }\n\n  aboutToDisappear(): void {\n    // 移除componentContentMap中的引用，并将自定义节点释放\n    this.myNodeController.deleteNode();\n  }\n\n  build() {\n    Column({ space: 16 }) {\n      NodeContainer(this.myNodeController);\n      Button('设置深色')\n        .onClick(() => {\n          this.getUIContext()\n            .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);\n        })\n      Button('设置浅色')\n        .onClick(() => {\n          this.getUIContext()\n            .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(673007)/* ["default"] */.A) + "",
        width: "250",
        height: "193"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flushstate22",
      children: "flushState22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "flushState(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更新ReactiveComponentContent。当ReactiveComponentContent中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
        children: "WrappedBuilder"
      }), "对象封装的builder函数中使用的绑定参数是由V1装饰器（如@Observed）装饰的类实例时，需要在此类数据变更后手动调用本接口更新数据，当使用V2装饰器（如@ObservedV2）装饰的类实例时，支持自动更新，无需手动调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了flushState接口在ReactiveComponentContent中的使用场景，通过对比V1和V2装饰器的数据更新机制，演示了不同响应式方案下的状态更新策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  ReactiveComponentContent, NodeContent, Binding, UIUtils, typeNode\n} from '@kit.ArkUI';\n\n// Builder函数，用于构建显示年龄的文本组件\n@Builder\nfunction buildText(age: Binding<number>) {\n  Column() {\n    Text(`age: ${age.value}`); // 显示年龄值\n  }\n}\n\n// 使用V2装饰器的类，支持自动状态更新\n@ObservedV2\nclass GeneratedObjectLiteralInterface_1 {\n  constructor(age: number) {\n    this.age = age;\n  }\n\n  @Trace age: number = 0; // 使用@Trace装饰器追踪属性变化\n}\n\n// 使用普通类（V1装饰器风格），需要手动触发更新\nclass GeneratedObjectLiteralInterface_2 {\n  constructor(age: number) {\n    this.age = age;\n  }\n\n  age: number = 0; // 普通属性，无自动追踪\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  private content: NodeContent = new NodeContent();\n  // V2装饰器的数据对象，支持自动更新\n  params: GeneratedObjectLiteralInterface_1 = new GeneratedObjectLiteralInterface_1(25);\n  // V1装饰器的数据对象，需要手动更新\n  params2: GeneratedObjectLiteralInterface_2 = new GeneratedObjectLiteralInterface_2(25);\n  private componentContent: ReactiveComponentContent<[Binding<number>]> | null = null\n\n  build() {\n    Row() {\n      Scroll() {\n        Column({ space: 12 }) {\n          // 创建使用V2装饰器的ReactiveComponentContent\n          Button('绑定参数由V2装饰器装饰').onClick(\n            () => {\n              let column = typeNode.createNode(this.getUIContext(), \"Column\");\n              column.initialize();\n              // 创建ReactiveComponentContent，使用V2装饰器的数据绑定\n              column.addComponentContent(new ReactiveComponentContent<[Binding<number>]>(this.getUIContext(),\n                wrapBuilder<[Binding<number>]>(buildText),\n                {},\n                UIUtils.makeBinding<number>(() => {\n                  return this.params.age; // 绑定V2装饰器的数据\n                })));\n\n              this.content.addFrameNode(column);\n            })\n\n          // 创建使用V1装饰器的ReactiveComponentContent\n          Button('绑定参数由V1装饰器装饰').onClick(\n            () => {\n              let column = typeNode.createNode(this.getUIContext(), \"Column\");\n              column.initialize();\n              // 创建ReactiveComponentContent，使用V1装饰器的数据绑定\n              this.componentContent =\n                new ReactiveComponentContent<[Binding<number>]>(this.getUIContext(),\n                  wrapBuilder<[Binding<number>]>(buildText),\n                  {},\n                  UIUtils.makeBinding<number>(() => {\n                    return this.params2.age; // 绑定V1装饰器的数据\n                  })\n                );\n              column.addComponentContent(this.componentContent);\n              this.content.addFrameNode(column);\n            })\n\n          // 更新V2装饰器的数据（自动更新）\n          Button('change age - V2可自动更新').onClick(() => {\n            this.params.age += 1; // V2装饰器会自动检测变化并更新UI\n          })\n\n          // 更新V1装饰器的数据（需要手动更新）\n          Button('change age - V1需手动更新').onClick(() => {\n            this.params2.age += 1;\n            // 对于V1装饰器的数据，需要手动调用flushState来触发UI更新\n            this.componentContent?.flushState();\n          })\n\n          // 显示动态创建的内容\n          ContentSlot(this.content)\n        }\n        .id(\"column\")\n        .width('100%')\n      }\n      .scrollable(ScrollDirection.Vertical)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Gray)\n      .scrollBarWidth(10)\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(885157)/* ["default"] */.A) + "",
        width: "328",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inheritfreezeoptions22",
      children: "inheritFreezeOptions22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "inheritFreezeOptions(enabled: boolean): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询当前ReactiveComponentContent对象是否设置为继承父组件中自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-parameter/ts-custom-component-parameter#componentoptions",
        children: "冻结策略"
      }), "。如果设置继承状态为false，则ReactiveComponentContent对象的冻结策略为false。在这种情况下，节点在不活跃状态下不会被冻结。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(778556)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ReactiveComponentContent设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，其冻结策略不会传递给子组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReactiveComponentContent对象是否设置为继承父组件中自定义组件的冻结策略。  true：继承父组件中自定义组件的冻结策略；false：不继承父组件中自定义组件的冻结策略。"
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
      children: "该示例演示了ReactiveComponentContent设置继承状态为true，继承父自定义组件的冻结策略，在不活跃的时候进行冻结，切换为活跃状态解冻，更新缓存的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ReactiveComponentContent, FrameNode, NodeController, Binding, UIUtils } from '@kit.ArkUI';\n\n@Builder\n// builder组件\nfunction buildText(count: Binding<number>) {\n\n  Column() {\n    TextBuilder({ message: count.value })\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private contentNode: ReactiveComponentContent<[Binding<number>]> | null = null;\n  private count: number = 0;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.contentNode = new ReactiveComponentContent(context, wrapBuilder<[Binding<number>]>(buildText), {},\n      UIUtils.makeBinding<number>(() => {\n        return this.count\n      }));\n    this.contentNode.inheritFreezeOptions(true);\n    if (this.rootNode !== null) {\n      this.rootNode.addComponentContent(this.contentNode);\n    }\n    return this.rootNode;\n  }\n\n  update(): void {\n    if (this.contentNode !== null) {\n      this.count += 1;\n      this.contentNode.flushState();\n    }\n  }\n}\n\nconst textNodeController: TextNodeController = new TextNodeController();\n\n@Entry\n@Component\nstruct MyNavigationTestStack {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @State message: number = 0;\n  @State logNumber: number = 0;\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      pageOneStack({ message: this.message, logNumber: this.logNumber })\n    } else if (name === 'pageTwo') {\n      pageTwoStack({ message: this.message, logNumber: this.logNumber })\n    }\n  }\n\n  build() {\n    Column() {\n      Button('update ComponentContent')\n        .onClick(() => {\n          textNodeController.update();\n        })\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n  }\n}\n\n@Component\nstruct pageOneStack { // 页面一\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = 1;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule }) // 切换至页面二\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule }) // 返回主页面\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct pageTwoStack { // 页面二\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = 2;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Text('BuilderNode处于冻结状态')\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule }) // 返回至页面一\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component({ freezeWhenInactive: true })\n  // 设置冻结策略为不活跃冻结\nstruct NavigationContentMsgStack {\n  @Link message: number;\n  @Link index: number;\n  @Link logNumber: number;\n\n  build() {\n    Column() {\n      if (this.index === 1) {\n        NodeContainer(textNodeController)\n      }\n    }\n  }\n}\n\n@Component({ freezeWhenInactive: true })\n  // 设置冻结策略为不活跃冻结\nstruct TextBuilder {\n  @Prop @Watch('info') message: number = 0;\n\n  info() {\n    console.info(`freeze-test TextBuilder message callback ${this.message}`); // 根据message内容变化来打印日志来判断是否冻结\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(`文本更新次数： ${this.message}`)\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(11737)/* ["default"] */.A) + "",
        width: "283",
        height: "87"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdisposed22",
      children: "isDisposed22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDisposed(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前ReactiveComponentContent对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。因为在节点dispose后可能仍存在被调用dispose接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "后端实体节点是否解除引用。  true：节点已与后端实体节点解除引用；false：节点未与后端实体节点解除引用。"
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
      children: "该示例展示了如何使用isDisposed接口检查ReactiveComponentContent对象是否已解除与后端实体节点的引用关系，提供了节点状态安全检测的完整实现方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  ReactiveComponentContent,\n  Binding,\n  MutableBinding,\n  UIContext,\n  UIUtils,\n  NodeController,\n  FrameNode\n} from '@kit.ArkUI';\n\n@Builder\nfunction buildText(\n  MsgAge: MutableBinding<number>,\n  message: MutableBinding<string>\n) {\n  Column() {\n    Row() {\n      Text(`age: ${MsgAge.value}, name: ${message.value}`)\n        .fontSize(15)\n    }\n  }\n  .justifyContent(FlexAlign.Center)\n  .alignItems(HorizontalAlign.Center)\n  .width('100%')\n  .height('100%')\n}\n\ninterface GeneratedObjectLiteralInterface_1 {\n  MsgAge: number;\n  message: string;\n}\n\nconst params: GeneratedObjectLiteralInterface_1 = {\n  MsgAge: 10,\n  message: 'Mike',\n};\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private contentNode: ReactiveComponentContent<[Binding<number>, Binding<string>]> | null = null;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.contentNode = new ReactiveComponentContent <[Binding<number>, Binding<string>]>(context,\n      wrapBuilder<[Binding<number>, Binding<string>]>(buildText),\n      {},\n      UIUtils.makeBinding<number>(() => params.MsgAge, (val: number) => {\n        params.MsgAge = val\n        console.info(\"NodeTest1 get\", params.MsgAge);\n      }),\n      UIUtils.makeBinding<string>(() => params.message, val => {\n        console.info(\"NodeTest2 set before\", params.message);\n        params.message = val;\n        console.info(\"NodeTest3 set after\", params.message);\n      }),\n    );\n    if (this.rootNode !== null) {\n      this.rootNode.addComponentContent(this.contentNode);\n    }\n    return this.rootNode;\n  }\n\n  dispose() {\n    if (this.contentNode !== null) {\n      this.contentNode.dispose();\n    }\n  }\n\n  // 检验当前Node是否已被释放\n  isDisposed(): string {\n    if (this.contentNode !== null) {\n      if (this.contentNode.isDisposed()) {\n        return 'contentNode isDisposed is true';\n      } else {\n        return 'contentNode isDisposed is false';\n      }\n    }\n    return 'contentNode is null';\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State text: string = ''\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      Column({ space: 12 }) {\n        NodeContainer(this.myNodeController)\n          .width('100%')\n          .height(100)\n          .backgroundColor('#FFF0F0F0')\n        Button('dispose')\n          .onClick(() => {\n            this.myNodeController.dispose();\n            this.text = '';\n          })\n          .fontSize(15)\n          .width(200)\n          .height(30)\n        Button('isDisposed')\n          .onClick(() => {\n            this.text = this.myNodeController.isDisposed();\n          })\n          .width(200)\n          .height(30)\n          .fontSize(15)\n        Text(this.text)\n          .fontSize(15)\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(151934)/* ["default"] */.A) + "",
        width: "343",
        height: "216"
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
985629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799792-191bb79e182dd840c3b6ceb41417d96d.gif");

},
778556(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
721290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799794-d6b2d37752066fd05dcac0b3ff573278.gif");

},
151934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799796-559748d259ddef8b816132c3a9d45e2e.gif");

},
574507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
592308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959442-749af92400171b1717b4ace12686b493.gif");

},
180120(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799792-191bb79e182dd840c3b6ceb41417d96d.gif");

},
853334(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
11737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,R0lGODlhGwFXAHcAACH5BADmAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAGwFXAKf5+fozOkPy+Pk5PEM5QEnw8fLw8vgyOT3U2N08QEMwMzg1PUhCSVLu8fJCRUtgY2jDyMppanDk6es4OTwsMjvW2+RLUVm6vcPDxslYYGKhpavo6OlJSVHY2Nrg4eJyeYMvOEF8gILIy8y5ubpkaGldYmvBwsOosLiJjJNUWWG9wcRhaXFrcHY5PUrR0dLR1dk3QUve4uRpcnosMDXc5emprbNYW2QyNkGQlJtwc3ni5eqOkJWFi5KztbtDSE7J0dnm6fCboqaBhIt4eoR2eX2Tm6NDREW1u8L1+PmdoqtSVFmLkZl8gYqTmZ3L09e8w8ursrZUWlrDydKmqrH49/hhZW2anaKkqK1HTFtwc4Pq7vHJzdGrrriipKWYmZqzub2DiI2NjI9JTlhMUFRaXF5GTVZOUGBJSk6pqq5jaHZWX2jb3uEsNkFBSlXv8O+3v8h5fImutLpTVFbo7PU1Nz01NjooLCudoaBQV2Dv8/l2fYXa3d3S1uM/RlDW1tdBQ1CvuMHh5fA+P1F7enzFx8xhYmVhZmmFhYV/h5EtLz19foJqa20mLDgyNDb5+PZpbHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/wABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4jrGgBQwKCjjga2FBQwsfHigkgwUk7cssQACAsjWDBYgEQGEqYjnH7wIMIOxgV6HLhgwICEH0nAkOkBwMWgxgBETMBgUJGIGg4KHDLxYgCCjJs5m3QxYsSXIysUDLmgYoSKxjFcuP9A4AQPgR8IEPhxwZgIkRwfcgTg8OGDey8AvCg4QGDGgRw7UBBAAoZ0AUANEwQhkA0DLKHBg2h0AMAOHGjAAA4OOPFBAE+44ARFEJDgAwugSVdSGBNMEAAMBAQQwAEHDAgaCTHCwEYAC7iY4gQCNVBEE03wMIMPOFhhBQ4CeRABBxeU4MMWQgQQw0CUOeDcDxQQ0AIBBBwwQxcFQMHDBwQUwYQUASiQpgMvSATBAAn4cMAEHTRg4khubBAChxLQIMGeEEhAGQRPnAAIAyCAQIAGX1wwgkAx4DgAlwpwyQAFAhXwhQUClCADAFFGJ1AHAwTBAgMVVABEA1Ec4MEGA+D/CAIMFJQQQBJctDAEcBCRccAVSOxwQAh3ltQBDB/0OCCvAFD2xgJYLMCIBgVFWsQRUwSQggoqOJCAQBwkEEAfIARQAg8LlGGBBVEIZMALUFAARyA38FBBAGAIRMMKICxgxhEMBFCBFBToQJkHY4TRUAEDOAdABQlkUGxJK3AqwBUJXEEQZRIEwEQaWCxBwHMDRcpACha4mEIKLQp0QQ9FBCDDCSoIscAHDBAQwmYFQJCDAXzoWkEGawDQAQErFNEGIgxUQUASSTiwmRN1tMuQBwkoIAFjCXAwMUkQKMACEGM4YJABEQSgQxViGMDAA7xGCoUECIAgAw00qEEAZT2E/7ACizJMwQQbndowkA4O1AAAFVzcIERtAgmAAwZp/NAAEALoUUbFBO3hRkMe7GcnEgT48DVJKAx4gAnMTjiD4o+IAcATE0RQcowuwjArBQI2u4QFOQZQBhNZLNBpCgPhMABxVDDo9UAbJNDCAgRYQEADPwQAAg8CiNoQrAPQAEADBDBw+khoKqCEFgU1MYANXGgQrQZTyDADCxs06/4JRyyAAnrp6R4APpCtE8gAASlIgAAegLxmGcEIdsKAAyIwACEMxAAoWEAWemABHxSgAAw4AMkok5mGCCBWGBAAmmTgvfNppAM8aFgEtqQBIAhEBwp4AAZuwMMbEGAAYECBAv8eBQAVKKF8CqhAswhSgQG8IQAnsEEIBsACAGRAYgDAQAKGAIALDMABG0gdDhYjgBqYQRBw+AMUAHAFARFBgBIggYIaogEKVCEObbiVCzvSATJMYABK0IEBLpCz/7QpDBsQgAHmoAYx5KEBBUCCghrQgArMsGEcWMIFECCBrbHABi8IwAVQkIMBSIY1lBmCc1CQAAfoAAAGyMAAIrA1IByhBYkIQAiCoIAMTJEFlBGBHc7gEAM8IFZIa+EeLbKIRijBBLB01wjOMIA7GKQKWGgdBDgwgwFk4QVWGEPDFDAAr/WgCw6gAyEA8AAjCCQDhRAIGuSgggOsjyARMIIXmjOqgAd4wArtjEJjhOUBgYigoMWswAlo0D1lLnMiHmDPQQwgAipM5gInMEgZMZC/gWihAyIwQYkAMAJoAmADxAmOCAqCgdYBwASUGUHRLGo0Xpn0oTjNqU53ytOe+vSnQA2qUIdK1KIa9ahITapSl8rUpjr1qVCNqlSnStWqWvWqWM2qVrfK1a569atgDatYx0rWspr1rGhNq1rXyta2uvWtcI2rXOdK17puJCAAIfkEAXgAAQAsuAAgABMAFACl+Pr7AP8A8PT48vn7MjtCOT1BMTU4QUZJ5uXmS09VnaGi2t7iVlpgsK+yyc3OZ2tx6e3wLTI46/DzrLCyiZKYmZ2em6Koi4+T5+vt4ubn9fX38/b33eHi1Njbu7q+2d3e1dveeYKKOj5CUVZcND5HLDE3MTg+XGNra3F2a3B2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoVAgHAYKAKKgWNyyGwKBkJj88iEQqNTKmDCSDwcWWJSYTgcIoXPBsssag4GjmRkUkyRRkhHmCpUmkhsAAMLaGBtUkkSAAIMBRd3iUMoBg8CkYIhBCeXWYGMFCUkFg0NHpF5BKoGCSIJd0QDGCAZCwi3YbmAYVKomIi9gMF4nsFRxsdGeMtBACH5BAFuAAEALLgAIAATABQApfj5+gD/APP4+/Hw8TE6QXiBiDk4QOrq8Obr7tPU1UxQU05XX0NKUvf4+bO2uqeqrVdfZFtjakNCSO/29jtAQzU0O77Dw42RlPL19pmanZSZnKCfpb7AxiszQPP2+DM4PuHl6PDv8sfGzMrW34SMmUBITGBkZ2NncElNUS8zNlBaY3F7ejg8SPj59wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaTwIBwSAQYjwEjMQlICgCYY1O59DwBE+m0WQQ8FqiVRcpcBi4VRSlFSbSU1CHApEBMIJTMAM6VC0AAAgsfD0hxQkcaEAQnB4Z9iEYFDB0RAw18S0cDByQsBY9aAAkOgSMEEaJaAwYGGw4qBKCqWwkSBhIEDAi0Uw0hAyIcCI6iZb2htExkkVShXcyq0MhIkUlm2ERBACH5BAHcAAEALDgAIACvABQAp/j5+gD/APL4+jQ6QjM5PTk9Q/Hy+DxCSjE1O+Tp60FFSzhAQiwzO+rx8+np6+rt8vHy8kRITHyDikRKUllcYsTJzElQWVNZYZSZnNLZ3eHm6eHi4zg6PnuAg2VobLK5vW1yeuvz+WJla3p9g8vL0rzBxLq9wmhwd1JVW93h5DI3QZyhpXV7grS0tmJocC44QZudoZCTmJCSksnMzoKFi6qwtIOLkrG1uUhLUJmana2zul1iZTU+SFJYXnBzeJWcoaKlqY2SlaSqskNHUmhqbs3R1EpQVlFQV8DCxUFDRjZASdnc3UhKTmBhZcTK0F1iatHV2airscLGyTk+Stzj6tje4o6Smfb49ri6uoOJjdbd42hqd7rByNDS03V6fVFWYfj596SqrrK6waiqrKGio2xueVVdaFhaXjdARC42QDI0NUtNWeHn8FdgaS0xNebq8oyNj3+IkIGFkHqAhXh6fICBhZ6kqZmhqMbP2MzP0mdweG1xdS84P01VWz9EUHR2gk9XY6+4vbS8xicxO2JoZ1dgZ09RXO3w8r3FyLS3wCIsNfj3+JSVlyMmK+Tm5jxAQ3F1ftLW4d7e6KqutoqNkiwuMqGlsM7T2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAj/AAEACCCwoEGBAQgeXGgw4UKFDwcynBiR4kSHEi0WhKjxoUKCCUOC5NjxYkiEGjEyFMCQZEmKLhmCKelkxIOCjPYInGnQAAADPgVCKBhUgAAJRlgu9ELCIQYKPkUCONFDoIMjNxJscCDwSkEpCjK0PJkRwA0TJrB0aehyCRyuJ04ENeiFTMWFFWYYdIBlycsWe/RSBKKAq0AUBQ7W4bCAQAECAwYUKLBF4AgcADRUEIImQom8M4YCiEKgiwENCTog2OoATIANAJ4wEJiAgRARFARukJHjBwYPA7LkWIEhh9+BZBU6KKBiAIIFCkggVClQQYEWEBYgUFoQAoERLwFQ/ziApCASDjleykhil6KLAWY8iGAjIrHBFjEoxbAxwEIMGTK0IJAUHMAAAwF8EIAGGhwQ8EgKADigAAujaVcABwoQwEFfChQByAACaTCAEE4MUAcAJSwQwQEHRDbAAhcm8cF0GCn0wGQ3iOGBdg1QRAIREDyAAAEL3dhBeDsgwAFsAORBQHolYcDBGBSlMMAQQ/AwABVfTBFJTwUlcIAEAHAnUBNHbFDCAX2IgUheFQwFxAJajKADEEDUt0IUY2wQABNxPKFEAgmU+EMKOmhQZkE38DAEAh+YiVyNAgk5AUshNNaFAFhQKVALYs2Q1QORiSYFDR80gAANBX0QRBgCCf8A6m4riMcAATsI9AEBKyglBRwwHFQDDVDIQACsAo2RhQkFZYEAGyFIcIAAX6hwQA0MaTCmpACQQYcDGPBRgRHTKgVFAQOsMQAeIRxFwAMNROVFBG0MIMIAPAyiZWQGWeLHGg98UUAQB0mV0SEFTECCE0EQgIMDGhDAhEBFEIDBVARIYQADB4RgAB1qJIGACwwcmYAIBLhxwA6E4hqBGkQAcMEEICBwcQlPlukBBxwUgEMFAlGA7gATHAtABkcgMFnMBkQwgA4CXNAGAF2aMYUXsqLZBAUXEHDABT1Q0ASrBT0wgR5iDtDA2gA8YIEEDMyhxQDNDXBrEwllYMELDFT/8MEdPLQRyAfMJrDCE5HxEIMGZRAQAQYQTvpRiAUgwIDdA/wAQAILJCFQCgTEAIAPBFTQgN0hVMDBGUiQYMEAEgiwBQMwCMDfD5wTEMQGCchsQQgWHCAFFwMEa4MKI2gQhQJmABBDAS5U8UEEBAAhgAcEmGDACAi0UMMAbFKhhBUCmDHA9ig40IIITYjggQccu+ABEUTIIBASMDjAwAsuaqjAA0bhTwbeoIMbTEIHYqhBCRIiAC0oQQkCIcEULmAUgXTAa1ZgAwgukAADrKAHBIiZ5FDStgIoQAhCsMELriUiBQgkAwvoFQsGYDoGKKEBK8ieQPDwAgk04HIsAAEL/w4AggQQYAEQEM0FLCCAEk2ACwv4QQgGMIUEsMQFKtDAGgpQBJawYAFCEMAEIhBEERzgCQCwQxAmYAQCUIFqswEAk7iTAAWQaSEjOIIDJBCHOLDIChKgQQMEwAUGgEAPYrCBBGxggzlIAFsB0MIElKAIgeRAaV0USB7SQygDSCByGkCCYAymHATggCWEHAALEqC0MmVAdwAAAQ1DkIYBhMAKCCiCQBrwgjn88AAu8AIIXHCHBHSGOxe4QJmsAL4BYKABE1CBT2SHgCowJ3JZIIAdAHAAP7CgDGXwwQ+MkoHIZCFoB5jLQcR0x4NEwAdHcYEAgmcCqJTpAi/gwQQEkf+GfK6QAB0QwAoO8AK+AQACBYiAAsCzCIEQwgMUsAArdyCADHSvYCRJQH/alQBIDEAOpJpCFQRwAosJAASlM0BzDHCDNPwBgLKMnQUQUAIANCBSVoqAQQrBxJ+AAF3jRJwOfjIEHBjgDwOIgVEucIAwXmAIXaRCTVniBDcwgAU92sECNnKQG7WzVQXQQQMUAIJ5HsAEA4CnAEhQASoEoAoqsIFR3jCBDgTgAz3IQA8YIIAgFKALHShAFF5osS1YAAJQ2MKwUKAALWhEozZ0kQKgYAARIEABKKAeBkhaugYQgAEh0MAFVEABxg4goDNQwAI8gIMCIMGIE1NKD1BQkBT/KMCZAIDCEOwFVABUQQEjQwEOEDDYGlzWB6rdgABSFAHsGQEDQFjBElKwBO4IwABQsONCnjAEug5ALBM4AABoUAAuGIAEQpDDBOSggjIkwgQ6iIBdA+CAAFAAATUogAfaxgQF6IUFCgiBCyYgEAPEwBCSUIAPHrvEMVKABm9smwcUQAQHPBcAHWDCDBpwBgrcxAA+sICHH/zCHUTgDDNqABMoWpC4GKQERgiDTzQgggWggFk/uQQFItCEDxgBCAKpwBEi0IMKCKBiC5CODCLQGAIcEQE9sqAbFlCJYB2kB0HQwRBuEAMKNEIBAlhOBzKQsAlYAAbOsc5k5psQCnRu/wFRrsARNwAE8JQUBSNgKm1hIJ2ScGsoLPHKTg7ik6CI5iBJDA9D5jKXHgnaII8GABw2AAEBXMEBjsBfDmTQHoFg4QRniMGhC3JdAKSApUlIAo5vAoESOAACAdCAGkbgAAdsgAl0EMkJjiCDtQilBH32yQPqgAPh+mAJ6ryLopcNkZgsW9HOfvazHSKSap+EOtJODralbRFrk4WrJOQ2Rr1NI4NtxCXb9oi3yS3ulHx72shRt7VhEm1or/ve6G5IePD9bn7fuyPm7ja7t/1vk7xb32ypkb8V7mzqpHvc+E74wg9ucIhXG+AUf0nGE14WebN7UibBqLv9fe6CM3viKBdP+UiuPW+Pq5zfIL/4xQUO85e3/CEBAQAh+QQBbgABACw4ACAArwAUAKf5+foA/wAzOkPy+Po5PEPw8fI5QEkyOT3w8vg1PUjU2N1ESlPk6ew4OT0xMzhCRUs7QENgY2hLUVlyeYPDxslhaXFcYmtJSVFqbHK6vcOQlJuJjJOhpau9wcTBwsNYYGJUWlq5ubp4eoQsMjvu8PLi5ek5PUnY2NrIy8xkaGlYW2Th4eFUWmIvOEHo6Om1u8LW3OXDyMrR0dLf4eGprbNpcntwc3lrcHbJ0dmztLuosLgyNkHm6fDR1dmBhIt9gIL5+fbq6vCTm6OanaKboqb49/hxe3o3QUtSVFksMTVDREVJTlhMUFQsNUGZmpyDiI1CSU17gYpHTFuLkZnL09eipKWdoquzub2pqq6TmZyFi5KrsrYyNDby9Pbb3uHJzdGNjI+mqrHv8vpjZ3Dc5em8wsqlqKzDydI/RlCNkJWrrrh5fIlhYmXGxsxlbHXW1tfw7/JWX2hOUGDv8O9wc4NJSk5BQ1A+P1HEyc41NTrS1uPQz9XK1t/a3d2utbrt9fWmq7bo7PW3v8jh5fCvuMFcXGYoLCsnMDNaXF59foJQV2AtLz1qa21pbHh7enxTVFaEjJksLjSgn6UmLDiFhYV/h5EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/wABAAggsKBBgQEIHlxoMOFChQ8HMpwYkeJEhxItFoSo8aFCjh1DHkyIEaRHkRsNFgCw8iCQkCYnDijw5eAAi0UWvly5MmfBligX3uwSFCXJjx0xFhU4wAIBCggnVpCwsECKDymuYsAaIQKGNCwL5DjwAgECBjisPAHhB4AMRy1RNIB6MBEKGg8KUPLQg4ACgy9R3mS6VOTRqBpJBpURIsSVFxUciAjRgfLKGTJkKKACwgAOBQreyGBpxIiNCTUOXBAxwbQTIE4cCDCQ5ICNDSMEQEhRBQCWBkQEqiAwhYNxLCcApLnAYYGGB1QmCKAgg0phADRALDDi4XpixRm9T/8E06DBbAMC0h8QQCAGgBTrjzRJkCB9+QYCgwwRkmVDEigaDDGEBgKtgMEFGVgAxRc+CDBDQTc94BcOIxhgggEGHJBEFQVsocUEBggRxRkCyOaAAX8VpQEXTEBxCARvBCbeSODFNCMAc7jwgwB4MEAGAzvGwABBMZShAyELtNCCARxckUEIAs0ggAkEYHiiAQuMIFABV0gwQAQ1ANDgYAWdQAARFaABAww8kADCASu4QIAACbRwxAgWCGAFICaIABRKbDDBwB8fQODEnzcOVGOiE52QwAQ3kaDbnzcJkoAUCUzCwUFSCvFCGAKw0EEHEgp0AQQCoNGCABZokcASEkj/AIJACCiwxQhrDLKDFjAI8IRAZFTQQgJyvLCAADCc4UAJN63ABBgiDcAAAAMocgAWjDa0aLYLTTXAAGZAYIZBN5UgQBQVSDEFigZJuQALEqTHAgvoCZRBDkIIUIMOHfjw6AIG/DBYATHYgIAeBIgAwwdeAHCCAW4IsUAlaIxhgBVW2DEYFXnMilIWH7RQQRDcIrRtyQXF4MANPDDxwEIIYCBACWMsgcACEQAl5RYMKNBCDT/GYcBNOYhQwREG1BCGD000pUJBJTxAg0Bq7OCDWbRqUIYbOIjBwwATLDGVQX3MEdQECzRhQQEIlHxYeCgLtMEBShzgAaIaJDF1I0sA/1DGARgUNMN66cmXwAi5UTuFBEekt0AUdCSAgAUsFKTBUwAUUQgBFxjkAgQmJGCABAaQgEMCBzzx7XUDkABJn3ErGvtCJDqABMkGZdGACmpwgCkHNNyQxA0uDJSFADq8kMAGn4E2AEETgKpDDQqwAMEAKXg8gBJKkAAABQ9gQIAPEiGwQQJ05CABFAUUsMABKQ6FUg85DMQHq7PnX6YWBBCAwYUc4IFASuCACFBgBwjcAXqesAEuvEAgHUCCAS7gABhQyyAwIEAGkKeCHxDgBgD4wNO+BwERACADBHiAC+amgbYNgAZyuMMa7LAFAJhhBAeA1E0YkILgdKQA/avCFf9YcC4y6a9kJ0BEAwiAhBIgIAMAs00PAACG4okhEHFYghhI0L7gkIAEXqgBlTg3hQwogAHTuoEKeiCADGzACASoSVduIgK/bAACDygBACbnv2nx4AUmWIQAfkAEB3TwgzdBgSHqIJI9PMABDxDAAqZ1xLgxggtI6E7bWBKCOjRAEhASyBikgKgYXCASBLBBD4bAhP45oAGdy0EVHtCANgAgAkoQyAfYIBAsPKIDB7idQTBgqL4QIAIrGAIuQbASDTRgBQJBATQ7UgQ4wKENHWCAAI9ooxmtYDSIGQgCUCCUDOhAKDSggB4LEoQToMAD7hFICLoDABdAJQAoIKdBKICWKADQMwQN88kJWtIFelYyKDVSStyOwtCRpIRRDH1bREGiUJN5p5soe1thCFJRRU2UIh3d6ERHCp6GmHQp2zIJSUmalJJaZKQWpdFHL6JRh2qrJCuVaEhltxGMeqSkKs1pQ1tKUZh+Z6dEPSrcZGpUj9KURoaJSVBnWhShWvWqMG0oVW+KVaw6Vas1ZQhHV+rRrg71IQEBACH5BAFkAAEALLgAIAAUABQApfj4+AD/ADQ4O7/Cw0NISzU8Runp6evw9PHx8Wdrbfj49VpbXJCTmKWpsMzP0dbY3DExMjI1O62xs9rb3pCQkImJiaWorZCWoiAmNCktMfX5+S8zOtbb4eTk5Orr8HN3eExRWkFGSTg9Q09UWD5BRzs/SUBAQDxASzY5Pm9ye2ZrcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaMQIBwCAgEhkYjkrgcKopHpjAqhVaLQkmC8BkAFMop8sgQEAgkgZdJNRoEG8dhIEhIk8lJpnDQHEQjd2EBHigRFhwXBSqCUUcNIRElGAUNjWIADwwpJyBVSVIGCxAOTVBUQxQQFVd4VA8mC1enYQAIHQYIrWOzmKi1n6BjqFPCv3hEyFjJwsPFtK7RSUEAOw==");

},
520742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
177883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479443-8b7623938206e401cc337079caaf81f3.gif");

},
567253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
590049(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439489-ee5a5b7a7062f403743d28fffb8275c0.gif");

},
625071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479441-22d1396a94be740eb51a53eb83433b12.gif");

},
885157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959444-845c4f722eb9119e07c12aea3bd3e5ce.gif");

},
673007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959442-749af92400171b1717b4ace12686b493.gif");

},
4920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
371800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,R0lGODlhAAF9AHcAACH5BACqAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAAAF9AKf+/v4BfP4CgfoJevv0/v6Au+obeNb9/fQKevMDfPTb/P4UefXj/f7r/f4Vg/YKe+zM/P7T/P4LdfsTeuvG6fwFgenT9P7L8/0DdfwmiPQTeeOW1fsbgutVpvSXyPfE8/41iOgsi9wSdOQDe+yn5/yIxffb9P2z4/xnqPMKdPMnh+Ube+syiPTE+/79/eyo1/o3mPW74/276v2GufMZc+s4h9safNyp1+0Ldescg+O06/5mtPcPk/789vl3t/Ox3PwrfePV6voSetwbfOOK0/YshNsDdfINeuILdeVXpuuVvfUhedtotOpBlPAadNOXzOobddr1/PQplPRMpfMYbfYTdexNpOqkzPi08v5Di+YjfNVoqNlNk+WJvd8DdORbnOtNmvE4ou0kfOoXgNgka9V2qeYjdNRYt/l7t+tVlNSByu1mp+j+9fO9/f9LmORomsyk8f7E3fqX0OEEdesCe+UXetAMdNqny+YYdssLbdd8wvwphNQ5leokfeQoedM1eNvi9P5UmuJqwvp5ptaa9P+o4u9snORZnOBSm+1MtO1YotlKh9kkdsc3l9ktmOwWbOcSdN3r9f4adeIUguwrgs3p7fwpfPQte9ojdtoyeMcjgttLk9tBk+1DleZEnOW64/ZEnvRVjdv//eNKmtUhb/m3zvmz1PSDrtYjd+K53fqW5f4EcNuPwu/19PMPeNEWbceWveQNfMe72vNBnO5Fmtpwm8mo8P90mtq89P9SmtdXlctSmfBNk9Iak/VxqPR0w/19zv12z/c5ich3udtNmfkjgdMhidO30/+2/v++0fLM8fbV3Ou58vT98+pIecwQgMk1cuwncu0od+MUg+UkkNoxlM4cqPMViukbiOYFa80He90yc7MTbr8rc74Mfd8tbccraOABbPcVctUGbOdNispfu+VlmNtOqtlLl/hQluW9zeu41u2DxuV41v+YsMlJlPNTldxHlctCmNZElNtRn9lJnO5Bnfxcl9JHivIAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/wABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyAPHEDJsqXLly9VroRJs+bHmTZHyiSoMqfPnwJxAj0pc+ZOgQSSDl1q8ihTlD0HJiVwwEWUqVizat3KtavXr2DDih1LdmsDpUUBEDgb9KnGqkLVMoCARc87IENEaBBioK/fv4ADCx5MuLDhw4gTK15swAaUvlo6/YLTooFaAkHjuq3YA8DOBgxi0DPm6giCAQMkSBgQoLXr17Bjy55Nu7bt27hz694NO8GIB0hycJGhgEAzFysxb35LgMGJQH0mIDiNoTUG1ryza9/Ovbt31wOmI/+AdEgWgc5ql2tszsrPAvDYv8ufT78+7/gBJlxCYwKzZvUQrdSAAr5ggoQACAaAYILgxRZeawKcpmAA+FFo34W2JfCdAApy2BpqtDHYoWseTtBBBASI8h+ACLnAEwARJPFAaxq+5mGDDKImYYSrcYgfiBjSt+CIrwEJYYNEzjZkgkbGJmKHHoKYQgcWsBFUFJmxeBBOKjUwgwgDPDkbazV+CCKPEwI5ZJMTfuhhlD7GSaGcYc5pZ514yrnbgm+S2CZ3dd52I4V5lGHZUVFp+WJQDbxABmsVDNpnb2XGKcCZFB7B2poPbOrpkR/62eakpIJaqo1mxrYAAmtCOKiolyr/iJ14CBzJ4KQWFkkkggPgUQJmyA20oqICRVDDAtWJWVutR4b55qQJROqqqahy+Gp9eqKGXXwPsDpkbrhqO920RUY5oYfTvSqAAzZcQJWLxCLUCgCtEIDCBLveiKuT5wYggYIJGAHbrdfGGmuoBn+asKwML7zwqDbyiaARm/qIJ4kVRvzniAffiN2gCUjKoQNrMBAFvPESpNwBBJhgSQDS0qgsfjci8ECnHEqAoCt9UPjjg6AGferQ1EJsNKq2FlmrtlXUeq3R+m4sarMChIx0AjT7EQNVKSN0QKM6P5lgn+ZGyYEgQMgapgNW7LBaChoA0UQnmmjQ5MEYS42tnbIN/5AA1jSKwMUiWazQrYaB5t0xxeTSHFsFI8RXNWsVrqAGA8OyiKVnACjAxXvwOVjkpgouAEILbiCoGswbXPDvEUwowIACEJwRaJ1wwpbnnXT2zjvfT4f3QAYcaDCjBBmQoIACEdjCQrcVi3njBCCIgIPubV48wBzZSKHBakdvW4MCAKDXdU9sEHCBEzPSKCHSDmhL+gDUQ5BGaxLgO0HrNNDARAs+WAQ5htECFCwNSJ5CDa8qdqYI6U5Nl5Jfs7RlJh1NRwRw2IANAoAAYcjgA/fghS4uYAsHOIBxAxNPnUBgP3E4oEPh+Zj8ULOKOrQBDDQg3bTiA4UPdC0hJ1gBbf8GgIFIJYADU7CCFEjHAhSAogYQGAUGJMCBJHyhCET4gAZC0IANOCABCHDAFFSArAwkYQoZ8BkMltCEDnDADiE4AwyOcCliOMARieADsljjAHt0AAadCoA1QgCNDnSABae5FCissAsaBMABMMgACzrgie+BgQJxgAcMUuABBbAABwMYASdggJoFtHEWK0jBABYAgzocwhBSeGTJThGIDKAmA4mwQggwIAApsEAMX1gDBx4ghk1EwAdNeGH7ZlOFF6jshzMpBBJo80UOhQEXFgiCBd4wAQGgIAgmMIE6GBCP4Z1AASagQCFaYIByMIADFGJVyASwAwuYwAK4CMEExnf/hwhEQAGDiIAFFNCBAWSAAXfIJgNKIAIHDOEHEbiAAn7xgAVsQBYUYAYEdACCAazgBgpQRguC4QAOfMADAmXADGxACAU04ANwIEMQ4oCDCrAqADXlQCcvcIEfcGABh2gBCS5gAQjwIQkQYIAJWnCGBFgBAtqUAQwQsIF1fFABMlCBJywAgEpcIAzVCdECStAW5fyQAHKYppJyhgIiQIEMd5CBCHKgAA/8QQU/IEAatJHFPdiACQy4gAa6AAghBOAB3WyNFBhQgGJQQgcfsEERCBADJ4SCAArIQg0Y8AMJNCGwIIjGDBrwhQnoIALVMEYtItABIWzAXn7gAgR8kABg/5gABGIYBQSSIIYLQKAIlABpJlRAgkJoAgFLMEEpYLYgyO1AAZuoQxgUoIcpNaAE0uBDC0ogiXlAoBYi4EEdIgALLdjgEy+ABAUYsINHEEMBTJjANhhwixV4oV8bE4AEysC5H6pMDsvEG4SwBo4/nOEMN7gAHnygABWgZgoKcMMEWvAEVtkgBiZYQBdMAIUALOA9CPJBJIrAwRoQwA2OYEASjqiAEozAAR6gACpCoABFIAsPF1ADEBiwhQoEgAwU2EAsNmCBCUiAChR4ggousAwU+GAQDFDCHwBxigUIQB4RyAINPmEKIfBgDBa4wgAqgLXwiAALJ6iABBZwBQhoIP8JkViE3ygggyqwQAFv+KIhIgELJjAhFQrARBwi8IoBeOEDw5gAIyKwCyNo6GkekgAanulftIIOvxbigR18cAFVEIECFsjEDCJQgTCBIAJgsMQxWaOBF1RiAWtQQBHIJICb/apnGDBDD9aQAQXQQgBIiIAequYBC5gBirT41wNkUAIQAEIRRCRFMkjwjA1QwMdUiMMd9pDNDXjbAzvIgQUG8YgAOCIC+BDBCUyxgAqMQQefcIK3HkEDVARZAFQghRIgsIctNOASrLoBFiZw5zfMQQBoIMANvL2BK1AhFTqQRACEQIEu2EELEOiAAOjwr6IpKAUzMKtZU9aZG2iANtf/CUAfPiAHRpihCxRwAgoUEIIFzAEFDQgFDT7wBL9pgQKAeAAHLqCDHCTAAUvYQQ0MFYIIIaIBnFABA3KRgCEoQA02VcIHlrDZLeQwBBfQwxIWel+ZEmEML7i2ABYQgyfkQAalcMI0cCAGEfTiAlvAFx8UEAobkOAHE7gZGiKQCysn4AsdgIIOKPA9GiRYC4pQwBLGTAIsbBHPVuYFA9IgHQ5AYQAnIEEVAmCDIHRBA6+AABgQoObarF0JlNaSZiiQBx16DAMOyIMOSNCNP1DgAwvIwQVOkAkQWIAAhhCBGhRQD00QIbCr8MIWFHACLnzhBBCwQjEUQIIQTAECL8hB/xEasImqN0AJIxiBByBgBxAAoAEooMQJLIAOHGwAAomgBkrDIIS0c2DtJEAEPPBcwYAHSJUFGUABZRAAPCAMCpAGGkAEEKALWTAOE6AKEaAEWbADEUAIHBAIDIAGe8CBKLAAiGABIFA1MXABC+AAEXAM3wADjEABOiAF10AI7VABlTcJAhALFFAASMANJ8UCObAAzuImEDICVfADsfdDkkcz8REyPAAGH2ACCqAEWJABI5AOFNAAEXALETALDzAJndQAT8AOyMAqImAO68UAFKBxAdAJMTA7JaAFXgACCgADHtZiYVICJLACIEAA7mABbogI/6IBrPBPH9ABD6ABG/9wAlTwAAZAAsCwADjABBCwPEwwBtjQBudgBHTQCG3QBAEQAnNoAWnkADNQCQPiAUXgbr6QiRBQBimAAR0AAWmTAlcgAwuQAijAAAywAZBQAz/QAA3wAyywAC9AAl8EBXAgCEcABDPAABEgCLb3Jw8gCRDQhF3DAB2wNEkCMK2xABmwAiOAAEZAZkOQAWHkAHTQGt6gApbQiEtgIQMwPA6wAogTABoAAirwQkSUAjWyPQjCA6pUBBDQCOuYA0yyACuQAULQPuvCS6uEACGDAA+pAjdVBRPAGpHDS0ZgQgtAB6cxCSrQCw7gLQGQABOgAhwQDqkxZgiyAB2ZADwwAhP/kAEOgCAJkAFAAEqPRDlUQGYKcgQckAE+Viah0hpHAGE4MXIpsxYUIASowUszmTH30RrMQh8D0AgtMAp2oxvKgj2ulx1jOTXagTMIsiMG8AQNUBVI4V9IwQAhEDRsEjRoGSQ2kgAh0AaegC96GZjyYSkfgjNmcHw94R9ymRQeMAQhk5JQoiR4CSuTKToDgySwsQAssALxgZV5yR2nIpiXOSoWc3QJUAIMQBXJIZdSwQBuMAIBgAFOE5r8ojeUOSdP4yelMgCqNCHgQ5v7EiIeV5vqMpy3KZy1eSRIwAnF4RksA5UAMnJPGQMgkHIjYDWyQZvHOZqKAyGSgx1WYy0W/5M3eWkwRZOb22mco5mb5vknwTkiQHAFK3MZcsklAPACNFAdA/BC6Yk0BYOEtwOc1fIsTMKdR4Oev3M04eM7tjkqgUIn/HIadcIDeeABbcGaCNEDBOAB74EBvTkwH1OZDpo0pAKFVOMkC6KUb/IpDKMrDmMqLHow27IvKwo1tvEsLUoh3UIhIuCWPZA5GCoQVxACoAQ4kgKgvpM4kmkrpBM1yVmWpnIpY6OelGktCsqed4KECoowQeMASHAJStAAUQCki3keVnICYRBB/nmek8krLSpgeGmeeKJDH2MtOuSduxGj5Nk3DaMw65lfeuqiEdIEN2CmmyMsZBovXVJXzv+ACe8jMhwjnpE5NnwCJZQaqZMqnBIzqZQqnhLzqZcKqqBqqZW6JFZqqqS6JggwAUPgBGZQAs0ZpA6RmC3zAijgB07QkRSEoNpxpA1aNbcilp95o0Hiq9kJMEYJCjdgAcYoqxKRFMY4IDFwAwUwA9ZaANiardq6rdzard76reAaruI6ruRarua6rT6gBh6AfS5lVonqrM55AFeBFO4KrynDBkWRKPbaEPoKnfuqKCqBHO8apPo6EC4gCqIQLP8KIAVbEFNxoQs7sAsblVghLBObEGtxFkpxsRwLr2nRsSD7r5rRsCFbsiZ7siibsiq7sizbsi77sjAbszI7szRbszane7M4m7M6u7M827M++7NAG7RCO7REW7RGe7RIm7RKu7RM27RO+7RQG7VSO7VUW7VWe7VYm7Vau7Vc27Ve+7VgG7ZiO7ZkW7Zme7Zom7Zqu7Zs27Zu+7ZwG7dyO7d0W7d2e7d4m7d6u7d827d++7eAG7iCO7iEW7iGe7iIm7iKu7iM27iO+7iQG7mSO7mUW7mWe7mYm7mau7mc27me+7mgG7qiO7pOGxAAIfkEAVAAAAAsUAAxAGYAOACnAP8A+fn5MTlB8vj5OTpBMTVAMzg9OT1KOUFKMTU68PP4QUhRQENIq66z6/Hx8vLysrS7w8jLqbCyLjhB2d3h6OvwNj1JOkFGU1ligYKJ3eHl6ertKTI7OTk9QEVRgomRZWpy5erstbzBKTZArbG5vMPKwcXIkpSaaW10+Pf7REhONkBKUFNZQkFF1dncmp2jpaux0tXYub3Bk5eg2dveYGVqXGNs0dPUPkVQlZuinaOrRkxZ4ubpSEpW7vT4TVJbfYSKnKGlg4eShoiMvcHFycvOo6WrZGltLjg+bXR6dHl9Vl1o4ePlaGpven6DKS46iYyT7e7x5+vwfoWQy8vRzdXbb3J0wMfR8vn+N0BHtLm+qayuoKGjdXqBcnV9xcvTUlheICkwUVZd1NrgUVZXoae1f4iJzNHWfYCGSEhKqae1PTtGTVFViYyO7e/1NDdFWl1kpamskZCTi4uY3eLoLTA2T1hgsbK2jJGTxcXJWF5evr+/ODc8SEdMjpOaqLC1lZedmp2ejJShrbW9MjM2wcfM393orK65y8/XOTw+w8bHe32IKy01XWBlPUVNJy82AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACP8AAQgcSLAgwQAIEyo0KFChwwAMGz6ciFBiwogYM2o8SBEiw44eP4Ic+XCjyY0gMVLMSLLlxZMwRa6UOVGly5Yxc+rkOBNmz4Eldwq1eLNjwaI1Fw4VirRpRaIKHShwCEDpUp1G0vSIojAGg60BbixAwMADAgIJfiBUQqDJRDIMAF1UOABKGAEWevBAmKLqy6smFcrp0CKFwjyEHwSIIUDAgQIFnlhYgLBJCzETWxAYMlHGggmgJxRYk8Gw36eANTp8QYCB4oQRCBBQHMPCiDkkcpOAgBBFAjgT+yTI8JDCAgOOcoiAYaMAAShBU7NUeELAjgEKIzieSkEAghIDsCv/PCIAw0QGAjg7tGLggoiEIVgUoExV+vSEMwpcz+5YMY0VHESAkHjYoVDeRB6k59ADCGSBQgAO+IWIBQUEUZ99ETl0wmMgNIHCEUdgsF0ALggwAQheKJGEF0QgBMKBDyGgoEIhIICEDuIl5EEBR1yIoUEO+fGYAM4V0NgbB0xVYmNItGcAFy4KYEeOOgowhUMhGCCABHQNIEYBaln141EKzeCYBGWo0YARQlhwgH8jCNCFGXgM0YaAASQxgg0IFmCGQzxcMIEOWDi0A48+jgmUQjkU4IEPCpVQQJIkIhBgjuKBgMMSVCJ0wAEfOFTBCiNcid1UVYxwwAuJKnoaQmYu/0ClCSPSYOIXVIYHwhtLTHSABVc6ZIN3VSSkAAafTiWmq68GkIMAjypUSH+LmTiDCCKQQMQeDgQAggU7kKCFFhBAQEMAHhwAggTklqvBGDiMgIMOeUBgBZFCRMdssyckIKtCioxIwQQCIFHwBQaEEUIANqzQmAEGdNCBEQFYgIMAEKNFAAkBNLDAAU/w0YGWSdS0L09c8NHCBgrdIDHLVAhwwcEGPIKACwO8yAHGEBuQQwAL7NyzAAlAMBUdQCSAlh57tHoyTxVRFF4AU1M9QKFUT9QpQspyzQNXUT+tmlMDkk2S2PeZrbZChv2FdoZrx23R20PFjRPdqdk9Et6A6f+9N99L+Z0S4IHbDZXbhCeu+OKMN+7445BHLvnklFf+9t1ELdpQs2rD3epcnz+kAAQNNHCHBFs0IMEDPJReQUIpPABDA3ulUDrLCT0gQQMURAXBCR/MUIQCA7ReegMwkIB8A0UEAIEaNyj0QAkzfOCHDG4oZMgdEFAZQvKvgf7QAg8T0LMGRECmgUIUQGZCAFGY7wRdBHTQwIA3sIDWAQkkgIIDEDhAYwTgMA4wwADEqR90EEKDGhBggAlgARUSAgHZTBA2AiBAtxZCERVMAAEsgAMYyKAHGsggAWFYX0I0gJf3VeCAW0rIABiQAC4tRjYEEIMTZJOARYigBz1gAQL/LDCBHyyABW0IAAFaQBwFpKAPrSFAF3qwAAKs4YJGIICjVBiAIhBsg+JzCPl04JABiIB/vUtIdyzgQgQYiQGvC8ADaHg/BdRAAAy4AkIesENWJeQD5cGOeBhAAOIEoAaP4Q12IkDDJkwFAglgQAGs8BrtICCOYVTIGLOWkBMKII0I0UABRuBC9HxqB68bAAEuEIcBhCABApCDQ3rXtgAA0g4OcWOoKuCBBHjBIRnQ4usOUYAE7OwECLEkGKM2kTFWIARSkEK3RPBALgaAAhxgYwAqICNBPGYOAVDAzGAQgCA0BncdyQCMEiLAfLVPAPdTyAaM9LMKMgCQCOiddgiA/0lmjo9oCJiZCoJgRseA8pothJCMZFCGHUHAByrgAJec4B3UkCkDBzCPQg5QyACUIIPFymUBQgUBA+DABy9CgAOuIIAFLBMiFCGf0iCWCDwEQAatOagLHvM+B8joCgNYwgEWMAYETOAPAwBCFhBgUY4EU6PsFECovmCkLzykMVeSAAF9UNQCoKAEFhDASzmHEPLNQAMaYAITukUEIsVAIWcogAUE5ICZlSCcPygABhwmgQEMojFvBYk6oYoQGYWKDo3xY0LO0Jj3SMAAKjXjA5PwQXQ+pZkCsJBDXPDAnyXECDtzQQA2YNdkPjBOfyisAB6UkA00QDHiGaxDEiSEAf+4gXy9UogNCMDUADxWAFjADhq09EEp+JOs8XrBafzCBi3ddQAlGIGMsLMBAjBCBgl5AWQOwLGkTuoDU9HAAcGgkAxwIEwJISQQEHIC52DgVErgXxcQ8lgVbHAAbODAChAgBews9yEDIF8cJnKDOjxwAWDgAG+LNQAHHBBPEKqBAQhAzm2i4Al1UIEKENaBQCgECALgk0Jaky8FKEAJSmPADmj4hBqkUgIj65oGjJqFDf63jOSDElUecAMJI0wAjYiAeEhLgBaJJwSy2UJrT5AGpRGCDEoOHxoCqckELDCcL2CB0lpzAnTCuAXhG4A5VbAwmIbtbDKkWgQiUGayKYBUAkVgQkeqVraJMKEI5wKw1pRyZpORSXCANttRDmeTlIDOc4s6m3RCAiRCe84oxw0M5q4iprBxrtCQNjOjMQ3oR4fE0vr6s1GqslyUBLqpiUYNQgICADs=");

},
935284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439487-b8638aa1af335ea19552e73a73be5af3.gif");

},
13464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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