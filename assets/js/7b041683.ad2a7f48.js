"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["783099"], {
736184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_nodecontroller_js_apis_arkui_nodecontroller_md_7b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-ui-interface-arkui-js-apis-arkui-nodecontroller-js-apis-arkui-nodecontroller-md-7b0.json
var site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_nodecontroller_js_apis_arkui_nodecontroller_md_7b0_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller","title":"NodeController","description":"NodeController用于实现自定义节点的创建、显示、更新等操作的管理，并负责将自定义节点挂载到NodeContainer上。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller.md","sourceDirName":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller","slug":"/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"NodeController","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-nodecontroller","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-arkui-nodecontroller"},"sidebar":"ref","previous":{"title":"Graphics","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics"},"next":{"title":"RenderNode","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller.md


const frontMatter = {
	title: 'NodeController',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-nodecontroller',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-arkui-nodecontroller'
};
const contentTitle = 'NodeController';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "NodeController",
  "id": "nodecontroller-1",
  "level": 2
}, {
  "value": "makeNode",
  "id": "makenode",
  "level": 3
}, {
  "value": "aboutToAppear",
  "id": "abouttoappear",
  "level": 3
}, {
  "value": "aboutToDisappear",
  "id": "abouttodisappear",
  "level": 3
}, {
  "value": "onAttach18+",
  "id": "onattach18",
  "level": 3
}, {
  "value": "onDetach18+",
  "id": "ondetach18",
  "level": 3
}, {
  "value": "onWillBind18+",
  "id": "onwillbind18",
  "level": 3
}, {
  "value": "onWillUnbind18+",
  "id": "onwillunbind18",
  "level": 3
}, {
  "value": "onBind18+",
  "id": "onbind18",
  "level": 3
}, {
  "value": "onUnbind18+",
  "id": "onunbind18",
  "level": 3
}, {
  "value": "aboutToResize",
  "id": "abouttoresize",
  "level": 3
}, {
  "value": "onTouchEvent",
  "id": "ontouchevent",
  "level": 3
}, {
  "value": "rebuild",
  "id": "rebuild",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（添加节点布局、Touch、挂载和卸载时的生命周期回调）",
  "id": "示例1添加节点布局touch挂载和卸载时的生命周期回调",
  "level": 3
}, {
  "value": "示例2（添加节点上下树和绑定解绑前后的生命周期回调）",
  "id": "示例2添加节点上下树和绑定解绑前后的生命周期回调",
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
        id: "nodecontroller",
        children: "NodeController"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NodeController用于实现自定义节点的创建、显示、更新等操作的管理，并负责将自定义节点挂载到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "上。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(215778)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NodeController对象不支持使用JSON序列化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {  NodeController  } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nodecontroller-1",
      children: "NodeController"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常搭配", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "进行使用。用于创建控制器管理绑定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "组件。一个NodeController只允许与一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "进行绑定。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-ui-dynamic-operations#section153921947151012",
        children: "组件动态创建-组件动态添加、更新和删除"
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
      id: "makenode",
      children: "makeNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "abstract makeNode(uiContext : UIContext): FrameNode | null"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当实例绑定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "创建的时候进行回调。回调方法将返回一个节点，将该节点挂载至", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "或者可以通过NodeController的rebuild()方法进行回调的触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(26234)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "不支持跨实例复用。如果出现跨实例复用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "，传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#nodecontroller-1",
        children: "NodeController"
      }), "触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "#makenode",
        children: "makeNode"
      }), "回调方法时，入参中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "对象可能为undefined，此时需要开发者判断入参中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "对象是否为undefined，防止后续使用此入参时出现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/arkts-wrong-uicontext-debug#%E5%AE%9A%E4%BD%8Duicontext%E9%94%99%E8%AF%AF%E9%97%AE%E9%A2%98",
        children: "UIContext无效的JS异常"
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
            children: "uiContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调该方法的时候，绑定", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
              children: "NodeContainer"
            }), "的UI上下文。"]
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abouttoappear",
      children: "aboutToAppear"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aboutToAppear?(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController绑定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "挂载显示后触发此回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(601658)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调时机参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#onappear",
        children: "onAppear"
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
      id: "abouttodisappear",
      children: "aboutToDisappear"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aboutToDisappear?(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController绑定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "销毁时触发此回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(595348)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调时机参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#ondisappear",
        children: "onDisAppear"
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
      id: "onattach18",
      children: "onAttach18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAttach?(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController绑定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "挂载至主节点树时触发此回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(486439)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调时机参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#onattach12",
        children: "onAttach"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondetach18",
      children: "onDetach18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDetach?(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController绑定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "从主节点树卸载时触发此回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(692494)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调时机参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#ondetach12",
        children: "onDetach"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwillbind18",
      children: "onWillBind18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillBind?(containerId: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "即将绑定前触发此回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "containerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调该方法时，NodeController与NodeContainerId对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
              children: "NodeContainer"
            }), "即将绑定。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwillunbind18",
      children: "onWillUnbind18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillUnbind?(containerId: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "即将解绑前触发此回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "containerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调该方法时，NodeController与NodeContainerId对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
              children: "NodeContainer"
            }), "即将解绑。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onbind18",
      children: "onBind18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onBind?(containerId: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "绑定后触发此回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "containerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调该方法时，NodeController与NodeContainerId对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
              children: "NodeContainer"
            }), "绑定完成。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onunbind18",
      children: "onUnbind18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onUnbind?(containerId: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "解绑后触发此回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "containerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调该方法时，NodeController与NodeContainerId对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
              children: "NodeContainer"
            }), "解绑完成。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abouttoresize",
      children: "aboutToResize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aboutToResize?(size: Size): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController绑定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "布局的时候触发此回调。"]
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
            children: "用于返回组件布局大小的宽和高，单位为vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontouchevent",
      children: "onTouchEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onTouchEvent?(event: TouchEvent): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当NodeController绑定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "收到Touch事件时触发此回调。"]
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TouchEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rebuild",
      children: "rebuild"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rebuild(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用此接口通知", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "组件重新回调", (0,jsx_runtime.jsx)(_components.a, {
        href: "#makenode",
        children: "makeNode"
      }), "方法，更改子节点。"]
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
        src: (__webpack_require__(561710)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于rebuild方法为应用主动调用的方法，且该操作与UI相关。需要开发者自行保证调用该接口时UI上下文有效，即与绑定的NodeContainer保持UI上下文一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听回调等", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
        children: "UI上下文不明确"
      }), "时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#runscopedtask",
        children: "runScopedTask"
      }), "方法明确调用时的UI上下文。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1添加节点布局touch挂载和卸载时的生命周期回调",
      children: "示例1（添加节点布局、Touch、挂载和卸载时的生命周期回调）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过aboutToResize、onTouchEvent，实现了NodeContainer节点布局、收到Touch事件时的生命周期回调功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并通过aboutToAppear、aboutToDisappear接口，实现了NodeContainer节点挂载、卸载时的生命周期回调功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过NodeController挂载BuilderNode节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, Size, FrameNode, UIContext } from '@kit.ArkUI';\n\nclass Params {\n  text: string = \"this is a text\"\n}\n\n@Builder\nfunction buttonBuilder(params: Params) {\n  Column() {\n    Button(params.text)\n      .fontSize(12)\n      .borderRadius(8)\n      .borderWidth(2)\n      .backgroundColor(Color.Orange)\n  }\n}\n\nclass MyNodeController extends NodeController {\n  private buttonNode: BuilderNode<[Params]> | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(buttonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode {\n    if (this.buttonNode == null) {\n      this.buttonNode = new BuilderNode(uiContext);\n      this.buttonNode.build(this.wrapBuilder, { text: \"This is a Button\" })\n    }\n    return this.buttonNode!.getFrameNode()!;\n  }\n\n  aboutToResize(size: Size) {\n    console.info(`aboutToResize width : ${size.width} height : ${size.height}`)\n  }\n\n  aboutToAppear() {\n    console.info(\"aboutToAppear\")\n  }\n\n  aboutToDisappear() {\n    console.info(\"aboutToDisappear\");\n  }\n\n  onTouchEvent(event: TouchEvent) {\n    console.info(\"onTouchEvent\");\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n    }\n    .padding({ left: 35, right: 35, top: 35 })\n    .width(\"100%\")\n    .height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(846376)/* ["default"] */.A) + "",
        width: "324",
        height: "172"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2添加节点上下树和绑定解绑前后的生命周期回调",
      children: "示例2（添加节点上下树和绑定解绑前后的生命周期回调）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过onAttach、onDetach接口，实现了NodeContainer节点上下主节点树的生命周期回调功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并通过onWillBind、onWillUnbind、onBind、onUnbind接口，实现了NodeContainer节点绑定和解绑前后的生命周期回调功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\nclass Params {\n  text: string = \"this is a text\"\n}\n\n@Builder\nfunction buttonBuilder(params: Params) {\n  Column() {\n    Button(params.text)\n      .fontSize(20)\n      .borderRadius(8)\n      .borderWidth(2)\n      .backgroundColor(Color.Grey)\n  }\n}\n\nclass MyNodeController extends NodeController {\n  private buttonNode: BuilderNode<[Params]> | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(buttonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode {\n    if (this.buttonNode == null) {\n      this.buttonNode = new BuilderNode(uiContext);\n      this.buttonNode.build(this.wrapBuilder, { text: \"This is a Button\" })\n    }\n    return this.buttonNode!.getFrameNode()!;\n  }\n\n  onAttach(): void {\n    console.info(\"myButton on attach\");\n  }\n\n  onDetach(): void {\n    console.info(\"myButton on detach\");\n  }\n\n  onWillBind(containerId: number): void {\n    console.info(`myButton on WillBind${containerId}`);\n  }\n\n  onWillUnbind(containerId: number): void {\n    console.info(`myButton on WillUnbind${containerId}`);\n  }\n\n  onBind(containerId: number): void {\n    console.info(`myButton on bind: ${containerId}`);\n  }\n\n  onUnbind(containerId: number): void {\n    console.info(`myButton on unbind: ${containerId}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State buttonShow: boolean = true\n  @State buttonIndex: number = 0\n  private buttonController: MyNodeController = new MyNodeController();\n  private buttonNull: null = null;\n  private buttonControllerArray: Array<MyNodeController | null> = [this.buttonController, this.buttonNull]\n\n  build() {\n    Column() {\n      Row() {\n        Button(\"Bind/Unbind\")\n          .onClick(() => {\n            this.buttonIndex++;\n          }).margin(5)\n        Button(\"onAttach/onDetach\")\n          .onClick(() => {\n            this.buttonShow = !this.buttonShow\n          }).margin(5)\n      }\n\n      if (this.buttonShow) {\n        NodeContainer(this.buttonControllerArray[this.buttonIndex % this.buttonControllerArray.length])\n      }\n    }\n    .padding({ left: 35, right: 35 })\n    .width(\"100%\")\n    .height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(765163)/* ["default"] */.A) + "",
        width: "657",
        height: "222"
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
486439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
26234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
215778(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
601658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
692494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
846376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACsAUQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKbuXOM80u4etAC0Um4etG4etAC0Um4etG4etAC0Um4etG4etAC0Um4etG4etAC0Um4etG4etAC0Um4etG4etAC0Um4etG4etAC0Um4etG4etAC0Um4etG4etAC0Um4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");

},
561710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
595348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
765163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439501-6ed60caf338e47fc4933fe2ce5203d14.jpg");

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