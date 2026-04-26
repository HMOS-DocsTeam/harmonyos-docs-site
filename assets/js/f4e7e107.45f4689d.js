"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["638573"], {
195124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_buildernode_js_apis_arkui_buildernode_md_f4e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-ui-interface-arkui-js-apis-arkui-buildernode-js-apis-arkui-buildernode-md-f4e.json
var site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_buildernode_js_apis_arkui_buildernode_md_f4e_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode","title":"BuilderNode","description":"提供能够挂载系统组件的自定义节点BuilderNode。BuilderNode仅可作为叶子节点使用。使用方式参考BuilderNode开发指南。最佳实践请参考组件动态创建-组件动态添加、更新和删除。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode.md","sourceDirName":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode","slug":"/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"BuilderNode","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-buildernode","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-arkui-buildernode"},"sidebar":"ref","previous":{"title":"postCardAction","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-postcardaction/js-apis-postcardaction"},"next":{"title":"ComponentContent","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode.md


const frontMatter = {
	title: 'BuilderNode',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-buildernode',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-arkui-buildernode'
};
const contentTitle = 'BuilderNode';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "NodeRenderType",
  "id": "noderendertype",
  "level": 2
}, {
  "value": "RenderOptions",
  "id": "renderoptions",
  "level": 2
}, {
  "value": "BuildOptions12+",
  "id": "buildoptions12",
  "level": 2
}, {
  "value": "InputEventType20+",
  "id": "inputeventtype20",
  "level": 2
}, {
  "value": "BuilderNode",
  "id": "buildernode-1",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "build",
  "id": "build",
  "level": 3
}, {
  "value": "build12+",
  "id": "build12",
  "level": 3
}, {
  "value": "getFrameNode",
  "id": "getframenode",
  "level": 3
}, {
  "value": "update",
  "id": "update",
  "level": 3
}, {
  "value": "postTouchEvent",
  "id": "posttouchevent",
  "level": 3
}, {
  "value": "dispose12+",
  "id": "dispose12",
  "level": 3
}, {
  "value": "reuse12+",
  "id": "reuse12",
  "level": 3
}, {
  "value": "recycle12+",
  "id": "recycle12",
  "level": 3
}, {
  "value": "updateConfiguration12+",
  "id": "updateconfiguration12",
  "level": 3
}, {
  "value": "isDisposed20+",
  "id": "isdisposed20",
  "level": 3
}, {
  "value": "postInputEvent20+",
  "id": "postinputevent20",
  "level": 3
}, {
  "value": "inheritFreezeOptions20+",
  "id": "inheritfreezeoptions20",
  "level": 3
}, {
  "value": "ReactiveBuilderNode22+",
  "id": "reactivebuildernode22",
  "level": 2
}, {
  "value": "constructor22+",
  "id": "constructor22",
  "level": 3
}, {
  "value": "build22+",
  "id": "build22",
  "level": 3
}, {
  "value": "getFrameNode22+",
  "id": "getframenode22",
  "level": 3
}, {
  "value": "postTouchEvent22+",
  "id": "posttouchevent22",
  "level": 3
}, {
  "value": "dispose22+",
  "id": "dispose22",
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
  "value": "updateConfiguration22+",
  "id": "updateconfiguration22",
  "level": 3
}, {
  "value": "flushState22+",
  "id": "flushstate22",
  "level": 3
}, {
  "value": "postInputEvent22+",
  "id": "postinputevent22",
  "level": 3
}, {
  "value": "inheritFreezeOptions22+",
  "id": "inheritfreezeoptions22",
  "level": 3
}, {
  "value": "isDisposed22+",
  "id": "isdisposed22",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（BuilderNode中鼠标事件）",
  "id": "示例1buildernode中鼠标事件",
  "level": 3
}, {
  "value": "示例2（BuilderNode中触摸事件）",
  "id": "示例2buildernode中触摸事件",
  "level": 3
}, {
  "value": "示例3（BuilderNode中轴事件）",
  "id": "示例3buildernode中轴事件",
  "level": 3
}, {
  "value": "示例4（BuilderNode共享localStorage）",
  "id": "示例4buildernode共享localstorage",
  "level": 3
}, {
  "value": "示例5（BuilderNode支持内部@Consume接收外部的@Provide数据）",
  "id": "示例5buildernode支持内部consume接收外部的provide数据",
  "level": 3
}, {
  "value": "示例6（BuilderNode支持内部@Consumer接收外部的@Provider数据）",
  "id": "示例6buildernode支持内部consumer接收外部的provider数据",
  "level": 3
}, {
  "value": "示例7（BuilderNode上下树时的同步关系变化）",
  "id": "示例7buildernode上下树时的同步关系变化",
  "level": 3
}, {
  "value": "示例8（BuilderNode上树后再上另一棵树时的同步关系变化）",
  "id": "示例8buildernode上树后再上另一棵树时的同步关系变化",
  "level": 3
}, {
  "value": "示例9（BuilderNode互相嵌套的场景下的同步关系变化）",
  "id": "示例9buildernode互相嵌套的场景下的同步关系变化",
  "level": 3
}, {
  "value": "示例10（BuilderNode下的@Consumer所在组件还有其他子组件时的同步关系）",
  "id": "示例10buildernode下的consumer所在组件还有其他子组件时的同步关系",
  "level": 3
}, {
  "value": "示例11（组件树为@Provider-@Consumer-BuilderNode-@Consumer时的同步关系）",
  "id": "示例11组件树为provider-consumer-buildernode-consumer时的同步关系",
  "level": 3
}, {
  "value": "示例12（组件树为@Provider-BuilderNode-@Provider-@Consumer时的同步关系）",
  "id": "示例12组件树为provider-buildernode-provider-consumer时的同步关系",
  "level": 3
}, {
  "value": "示例13（ReactiveBuilderNode中鼠标事件）",
  "id": "示例13reactivebuildernode中鼠标事件",
  "level": 3
}, {
  "value": "示例14（ReactiveBuilderNode中触摸事件）",
  "id": "示例14reactivebuildernode中触摸事件",
  "level": 3
}, {
  "value": "示例15（ReactiveBuilderNode中轴事件）",
  "id": "示例15reactivebuildernode中轴事件",
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
        id: "buildernode",
        children: "BuilderNode"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供能够挂载系统组件的自定义节点BuilderNode。BuilderNode仅可作为叶子节点使用。使用方式参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode",
        children: "BuilderNode开发指南"
      }), "。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-ui-dynamic-operations#section153921947151012",
        children: "组件动态创建-组件动态添加、更新和删除"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与BuilderNode相比，ReactiveBuilderNode能通过多参数的无状态UI方法@Builder生成组件树。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(426243)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若传入的Builder的根节点为语法节点（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
          children: "if/else"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
          children: "ForEach"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
          children: "LazyForEach"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot",
          children: "ContentSlot"
        }), "…）、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
          children: "Span"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan",
          children: "ContainerSpan"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan",
          children: "SymbolSpan"
        }), "或自定义组件，将额外生成一个", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
          children: "FrameNode"
        }), "，在节点树中显示为“BuilderProxyNode”，这会导致树结构变化，影响某些测试的传递过程。详情参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#buildernode%E5%86%85%E7%9A%84builderproxynode%E5%AF%BC%E8%87%B4%E6%A0%91%E7%BB%93%E6%9E%84%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96",
          children: "BuilderNode内的BuilderProxyNode导致树结构发生变化"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果在跨页面复用BuilderNode时显示异常，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%B7%A8%E9%A1%B5%E9%9D%A2%E5%A4%8D%E7%94%A8%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
          children: "跨页面复用注意事项"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前不支持在预览器中使用BuilderNode。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BuilderNode下的自定义组件支持使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
          children: "@Prop装饰器"
        }), "。不支持使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link装饰器"
        }), "来跨越BuilderNode同步外界的数据和状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果BuilderNode的子节点是自定义组件，不支持该自定义组件使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
          children: "@Reusable装饰器"
        }), "，详细内容参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#buildernode%E5%9C%A8%E5%AD%90%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8reusable%E8%A3%85%E9%A5%B0%E5%99%A8",
          children: "BuilderNode在子自定义组件中使用@Reusable装饰器"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 20开始，通过配置", (0,jsx_runtime.jsx)(_components.a, {
          href: "#buildoptions12",
          children: "BuildOptions"
        }), "，内部自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
          children: "@Consume"
        }), "支持接收所在页面的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
          children: "@Provide"
        }), "数据。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "其余装饰器行为未定义，不建议使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["仅支持在自定义组件中使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
          children: "Repeat"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BuilderNode对象不支持使用JSON序列化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, ReactiveBuilderNode, RenderOptions, NodeRenderType } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "noderendertype",
      children: "NodeRenderType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "节点渲染类型枚举。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RENDER_TYPE_DISPLAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示该节点将被显示到屏幕上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RENDER_TYPE_TEXTURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示该节点将被导出为纹理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(969698)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RENDER_TYPE_TEXTURE类型目前仅在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#buildernode-1",
          children: "BuilderNode"
        }), "持有组件树的根节点为自定义组件时以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-arkui-xcomponentnode/js-apis-arkui-xcomponentnode",
          children: "XComponentNode"
        }), "中设置生效。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#buildernode-1",
          children: "BuilderNode"
        }), "的情况下，目前在作为根节点的自定义组件中支持纹理导出的有以下组件：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge",
          children: "Badge"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank",
          children: "Blank"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
          children: "Button"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvasgradient/ts-components-canvas-canvasgradient",
          children: "CanvasGradient"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvaspattern/ts-components-canvas-canvaspattern",
          children: "CanvasPattern"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
          children: "CanvasRenderingContext2D"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
          children: "Canvas"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup",
          children: "CheckboxGroup"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
          children: "Checkbox"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle",
          children: "Circle"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit",
          children: "ColumnSplit"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
          children: "Column"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan",
          children: "ContainerSpan"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-counter/ts-container-counter",
          children: "Counter"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel",
          children: "DataPanel"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-divider/ts-basic-components-divider",
          children: "Divider"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-ellipse/ts-drawing-components-ellipse",
          children: "Ellipse"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
          children: "Flex"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-gauge/ts-basic-components-gauge",
          children: "Gauge"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink",
          children: "Hyperlink"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap",
          children: "ImageBitmap"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
          children: "ImageData"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
          children: "Image"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line",
          children: "Line"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress",
          children: "LoadingProgress"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-marquee/ts-basic-components-marquee",
          children: "Marquee"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-matrix2d/ts-components-canvas-matrix2d",
          children: "Matrix2D"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d",
          children: "OffscreenCanvasRenderingContext2D"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-offscreencanvas/ts-components-offscreencanvas",
          children: "OffscreenCanvas"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d",
          children: "Path2D"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path",
          children: "Path"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-patternlock/ts-basic-components-patternlock",
          children: "PatternLock"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polygon/ts-drawing-components-polygon",
          children: "Polygon"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polyline/ts-drawing-components-polyline",
          children: "Polyline"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress",
          children: "Progress"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode",
          children: "QRCode"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio",
          children: "Radio"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating",
          children: "Rating"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect",
          children: "Rect"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
          children: "RelativeContainer"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-rowsplit/ts-container-rowsplit",
          children: "RowSplit"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
          children: "Row"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-shape/ts-drawing-components-shape",
          children: "Shape"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
          children: "Slider"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
          children: "Span"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
          children: "Stack"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
          children: "TextArea"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-textclock/ts-basic-components-textclock",
          children: "TextClock"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
          children: "TextInput"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-texttimer/ts-basic-components-texttimer",
          children: "TextTimer"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
          children: "Text"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
          children: "Toggle"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video",
          children: "Video"
        }), "（不含全屏播放能力）、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
          children: "Web"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
          children: "XComponent"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 12开始，新增以下组件支持纹理导出：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker",
          children: "DatePicker"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-foreach/ts-rendering-control-foreach",
          children: "ForEach"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
          children: "Grid"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
          children: "if/else"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
          children: "LazyForEach"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
          children: "List"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
          children: "Scroll"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
          children: "Swiper"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker",
          children: "TimePicker"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
          children: "@Component"
        }), "修饰的自定义组件、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
          children: "NodeContainer"
        }), "以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
          children: "NodeContainer"
        }), "下挂载的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
          children: "FrameNode"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
          children: "RenderNode"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用方式可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-same-layer",
          children: "同层渲染绘制"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "renderoptions",
      children: "RenderOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建BuilderNode时的可选参数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selfIdealSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点的理想大小。  默认值：{ width: 0, height: 0 }"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#noderendertype",
              children: "NodeRenderType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点的渲染类型。  默认值：NodeRenderType.RENDER_TYPE_DISPLAY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "surfaceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["纹理接收方的surfaceId。纹理接收方一般为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "。  surfaceId仅当type为NodeRenderType.RENDER_TYPE_TEXTURE时生效。  默认值：\"\""]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildoptions12",
      children: "BuildOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build的可选参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nestingBuilderSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否支持Builder嵌套Builder进行使用。其中，true表示支持，false表示不支持。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "localStorage20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
              children: "LocalStorage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["给当前BuilderNode设置LocalStorage，挂载在此BuilderNode下的自定义组件共享该LocalStorage。如果自定义组件构造函数同时也传入LocalStorage，优先使用构造函数中传入的LocalStorage。  默认值：null  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableProvideConsumeCrossing20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义BuilderNode内", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v1",
              children: "状态管理V1"
            }), "自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Consume"
            }), "变量是否与BuilderNode外部的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Provide"
            }), "变量双向同步，BuilderNode内", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v2",
              children: "状态管理V2"
            }), "自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
              children: "@Consumer"
            }), "变量是否与BuilderNode外部的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
              children: "@Provider"
            }), "变量双向同步。  从API version 20开始支持状态管理V1自定义组件的双向同步，从API version 22开始支持状态管理V2自定义组件的双向同步。  true表示支持，false表示不支持。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inputeventtype20",
      children: "InputEventType20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type InputEventType = TouchEvent | MouseEvent | AxisEvent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#postinputevent20",
        children: "postInputEvent"
      }), "的参数，定义要发送的输入事件类型。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TouchEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#mouseevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "MouseEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis#axisevent",
              children: "AxisEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildernode-1",
      children: "BuilderNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class BuilderNode<Args extends Object[]>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode支持通过无状态的UI方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "生成组件树，并持有组件树的根节点。不支持定义为状态变量。BuilderNode中持有的FrameNode仅用于将该BuilderNode作为子节点挂载到其他FrameNode上。对BuilderNode持有的FrameNode进行属性设置与子节点操作可能会产生未定义行为，因此不建议通过BuilderNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getframenode",
        children: "getFrameNode"
      }), "方法和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getrendernode",
        children: "getRenderNode"
      }), "方法获取RenderNode，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "的接口对其进行属性设置与子节点操作。"]
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
      children: "constructor(uiContext: UIContext, options?: RenderOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当将BuilderNode生成的内容嵌入到其它RenderNode中显示时，需要显式指定RenderOptions中的selfIdealSize，否则Builder内的节点默认父组件布局约束为[0, 0]。该场景下，若不设置selfIdealSize则认为BuilderNode中子树的根节点大小为[0, 0]。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UI上下文，获取方式可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-node/js-apis-arkui-node#uicontext%E8%8E%B7%E5%8F%96%E6%96%B9%E6%B3%95",
              children: "UIContext获取方法"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#renderoptions",
              children: "RenderOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BuilderNode的构造可选参数。  默认值：undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(578627)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "uiContext的入参需要为一个有效的值，即UI上下文正确，如果传入非法值或者未设置，会导致创建失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(builder: WrappedBuilder<Args>, arg?: Object): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["依照传入的对象创建组件树，并持有组件树的根节点。无状态的UI方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "最多拥有一个根节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(341498)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Builder嵌套使用的时候需要保证内外的@Builder方法的入参对象一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最外层的@Builder只支持一个入参。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["build的参数是值传递，需要使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#update",
          children: "update"
        }), "接口进行更新。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要操作BuilderNode中的对象时，需要保证其引用不被回收。当BuilderNode对象被虚拟机回收之后，它的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
          children: "FrameNode"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
          children: "RenderNode"
        }), "对象也会与后端节点解引用。即从BuilderNode中获取的FrameNode对象不对应任何一个节点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BuilderNode对象会持有实体节点的引用。如果不需要使用BuilderNode前端对象管理后端节点，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#dispose12",
          children: "dispose"
        }), "接口，实现前后端对象的解绑。"]
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
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
              children: "WrappedBuilder<Args>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建对应节点树的时候所需的无状态UI方法", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
              children: "@Builder"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "builder的入参。当前仅支持一个入参，且入参对象类型与@Builder定义的入参类型保持一致。  默认值：undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build12",
      children: "build12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(builder: WrappedBuilder<Args>, arg: Object, options: BuildOptions): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["依照传入的对象创建组件树，并持有组件树的根节点。无状态的UI方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "最多拥有一个根节点。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持自定义组件。相比", (0,jsx_runtime.jsx)(_components.a, {
        href: "#build",
        children: "build(builder: WrappedBuilder<Args>, arg?: Object)"
      }), "接口，本接口支持builder的配置参数，用于判断是否支持@Builder中嵌套@Builder。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(855130)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Builder进行创建和更新的规格参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
          children: "@Builder"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最外层的@Builder只支持一个入参。"
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
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
              children: "WrappedBuilder<Args>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建对应节点树的时候所需的无状态UI方法", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
              children: "@Builder"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "builder的入参。当前仅支持一个入参，且入参对象类型与@Builder定义的入参类型保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buildoptions12",
              children: "BuildOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "builder的配置参数，判断是否支持@Builder中嵌套@Builder的行为。"
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
        children: "import { BuilderNode, NodeContent } from \"@kit.ArkUI\";\n\n// 定义传递参数的接口\ninterface ParamsInterface {\n  text: string;\n  func: Function;\n}\n\n@Builder\nfunction buildTextWithFunc(fun: Function) {\n  Text(fun())\n    .fontSize(50)\n    .fontWeight(FontWeight.Bold)\n    .margin({ bottom: 36 })\n}\n\n@Builder\nfunction buildText(params: ParamsInterface) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n    buildTextWithFunc(params.func)\n  }\n}\n\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"HELLO\";\n  private content: NodeContent = new NodeContent();\n\n  build() {\n    Row() {\n      Column() {\n        Button('addBuilderNode')\n          .onClick(() => {\n            let buildNode = new BuilderNode<[ParamsInterface]>(this.getUIContext());\n            // 创建节点树\n            buildNode.build(wrapBuilder<[ParamsInterface]>(buildText), {\n              text: this.message, func: () => {\n                return \"FUNCTION\";\n              }\n            }, { nestingBuilderSupported: true });\n            this.content.addFrameNode(buildNode.getFrameNode());\n            buildNode.dispose();\n          })\n        ContentSlot(this.content)\n      }\n      .id(\"column\")\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getframenode",
      children: "getFrameNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFrameNode(): FrameNode | null"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取BuilderNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "。在BuilderNode执行build操作之后，才会生成FrameNode。"]
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "的根节点返回。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from \"@kit.ArkUI\";\n\n// 定义传递参数的类\nclass Params {\n  text: string = \"\";\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({bottom: 36})\n  }\n}\n\n// 继承NodeController实现自定义textNode控制器\nclass TextNodeController extends NodeController {\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = \"DEFAULT\";\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    // 返回当前BuilderNode包含的FrameNode\n    return this.textNode.getFrameNode();\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"hello\";\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(new TextNodeController(this.message))\n          .width('100%')\n          .height(100)\n          .backgroundColor('#FFF0F0F0')\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "挂到其它FrameNode下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from \"@kit.ArkUI\";\n\n// 定义传递参数的类\nclass Params {\n  text: string = \"\";\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n  }\n}\n\n// 继承NodeController实现自定义textNode控制器\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = \"DEFAULT\";\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.textNode = new BuilderNode(context, { selfIdealSize: { width: 150, height: 150 } });\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    if (this.rootNode !== null) {\n      // 将BuilderNode的FrameNode挂至其他FrameNode\n      this.rootNode.appendChild(this.textNode?.getFrameNode());\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"hello\";\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(new TextNodeController(this.message))\n          .width('100%')\n          .height(100)\n          .backgroundColor('#FFF0F0F0')\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例3："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "挂到其它RenderNode下。由于RenderNode不传递布局约束，不推荐通过该方式挂载节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext, RenderNode } from \"@kit.ArkUI\";\n// 自定义传递参数的类\nclass Params {\n  text: string = \"\";\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n  }\n}\n\n// 继承NodeController实现自定义textNode控制器\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = \"DEFAULT\";\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    let renderNode = new RenderNode();\n    renderNode.clipToFrame = false;\n    this.textNode = new BuilderNode(context, { selfIdealSize: { width: 150, height: 150 } });\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    const textRenderNode = this.textNode?.getFrameNode()?.getRenderNode();\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    // 将BuilderNode的RenderNode挂至其他RenderNode\n      renderNode.appendChild(textRenderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"hello\";\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(new TextNodeController(this.message))\n          .width('100%')\n          .height(100)\n          .backgroundColor('#FFF0F0F0')\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update",
      children: "update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "update(arg: Object): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据提供的参数更新BuilderNode，该参数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#build",
        children: "build"
      }), "方法调用时传入的参数类型相同。对自定义组件进行update的时候需要在自定义组件中将使用的变量定义为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "类型。"]
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
            children: "arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于更新BuilderNode的参数，和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#build",
              children: "build"
            }), "调用时传入的参数类型一致。"]
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
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from \"@kit.ArkUI\";\n\n// 自定义传递参数的类\nclass Params {\n  text: string = \"\";\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n// 自定义组件\n@Component\nstruct TextBuilder {\n  @Prop message: string = \"TextBuilder\";\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .margin({bottom: 36})\n          .backgroundColor(Color.Gray)\n      }\n    }\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n    TextBuilder({message: params.text}) // 自定义组件\n  }\n}\n\n// 继承NodeController实现自定义textNode控制器\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = \"\";\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    return this.textNode.getFrameNode();\n  }\n\n  // 根据传入参数更新BuilderNode\n  update(message: string) {\n    if (this.textNode !== null) {\n      this.textNode.update(new Params(message));\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"hello\";\n  private textNodeController: TextNodeController = new TextNodeController(this.message);\n  private count = 0;\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(this.textNodeController)\n          .width('100%')\n          .height(200)\n          .backgroundColor('#FFF0F0F0')\n        Button('Update')\n          .onClick(() => {\n            this.count += 1;\n            const message = \"Update \" + this.count.toString();\n            this.textNodeController.update(message);\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "posttouchevent",
      children: "postTouchEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postTouchEvent(event: TouchEvent): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将原始事件派发到某个BuilderNode创建出的FrameNode上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postTouchEvent是从组件树的中间节点往下分发，需要变换到父组件坐标系才能分发成功，参考下图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OffsetA为buildNode相对于父组件的偏移量，可以通过FrameNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoparent12",
        children: "getPositionToParent"
      }), "获取。OffsetB为point点相对于buildNode的偏移量，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TouchEvent"
      }), " 获取。OffsetC为OffsetA与OffsetB的和，是传给postTouchEvent的最终结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(295312)/* ["default"] */.A) + "",
        width: "599",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(131640)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入的坐标值需要转换为px，如果builderNode有仿射变换，则需要再叠加仿射变换。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview/arkts-apis-webview",
          children: "webview"
        }), "中，内部已经处理过坐标系变换，可以将TouchEvent事件直接下发。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一时间戳，postTouchEvent只能调用一次。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["派发事件是否成功。true为已命中响应事件的组件，false为未命中任何可响应事件的组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果未按照预期命中组件，需要确认以下几点：  1.坐标系是否转换正确。  2.组件是否可交互状态。  3.是否绑定事件。"]
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
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\n// 自定义传递参数的类\nclass Params {\n  text: string = \"this is a text\";\n}\n\n@Builder\nfunction ButtonBuilder(params: Params) {\n  Column() {\n    Button(`button ` + params.text)\n      .borderWidth(2)\n      .backgroundColor(Color.Orange)\n      .width(\"100%\")\n      .height(\"100%\")\n      .gesture(\n        TapGesture()\n          .onAction((event: GestureEvent) => {\n            console.info(\"TapGesture\");\n          })\n      )\n  }\n  .width(500)\n  .height(300)\n  .backgroundColor(Color.Gray)\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(ButtonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new BuilderNode(uiContext);\n    this.rootNode.build(this.wrapBuilder, { text: \"this is a string\" });\n    return this.rootNode.getFrameNode();\n  }\n\n  // 坐标转换示例\n  postTouchEvent(event: TouchEvent, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n    \n    let changedTouchLen = event.changedTouches.length;\n    for (let i = 0; i < changedTouchLen; i++) {\n      if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n        event.changedTouches[i].x = uiContext.vp2px(offsetX + event.changedTouches[i].x);\n        event.changedTouches[i].y = uiContext.vp2px(offsetY + event.changedTouches[i].y);\n      }\n    }\n    // 将事件派发至BuilderNode创建的FrameNode上，result记录派发是否成功\n    let result = this.rootNode.postTouchEvent(event);\n    console.info(`result ${result}`);\n    return result;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.nodeController)\n        .height(300)\n        .width(500)\n\n      Column()\n        .width(500)\n        .height(300)\n        .backgroundColor(Color.Pink)\n        .onTouch((event) => {\n          if (event != undefined) {\n            this.nodeController.postTouchEvent(event, this.getUIContext());\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispose12",
      children: "dispose12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dispose(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["立即释放当前BuilderNode对象对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
        children: "实体节点"
      }), "的引用关系。关于BuilderNode的解绑场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%A7%A3%E9%99%A4%E5%AE%9E%E4%BD%93%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%E5%85%B3%E7%B3%BB",
        children: "节点解绑"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(867679)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当BuilderNode对象调用dispose之后，会与后端实体节点解除引用关系。若前端对象BuilderNode无法释放，容易导致内存泄漏。建议在不再需要对该BuilderNode对象进行操作时，开发者主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏的风险。具体场景可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq#buildernode%E5%89%8D%E5%90%8E%E7%AB%AF%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8%E5%AF%BC%E8%87%B4%E7%9A%84%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E9%97%AE%E9%A2%98",
        children: "BuilderNode前后端循环引用导致的内存泄漏问题"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, BuilderNode } from '@kit.ArkUI';\n\n// 自定义组件\n@Component\nstruct TestComponent {\n  build() {\n    Column() {\n      Text('This is a BuilderNode.')\n        .fontSize(16)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('aboutToDisappear');\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  TestComponent()\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private builderNode: BuilderNode<[]> | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.builderNode = new BuilderNode(uiContext, { selfIdealSize: { width: 200, height: 100 } });\n    this.builderNode.build(new WrappedBuilder(buildComponent));\n\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.size = { width: 200, height: 200 };\n      rootRenderNode.backgroundColor = 0xff00ff00;\n      rootRenderNode.appendChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n\n    return this.rootNode;\n  }\n\n  // 解除当前builderNode与后端实体的引用关系\n  dispose() {\n    if (this.builderNode !== null) {\n      this.builderNode.dispose();\n    }\n  }\n\n  removeBuilderNode() {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null && this.builderNode !== null && this.builderNode.getFrameNode() !== null) {\n      rootRenderNode.removeChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('BuilderNode dispose')\n        .onClick(() => {\n          this.myNodeController.removeBuilderNode();\n          this.myNodeController.dispose();\n        })\n        .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reuse12",
      children: "reuse12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reuse(param?: Object): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触发BuilderNode中的自定义组件的复用。组件复用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable装饰器：V1组件复用"
      }), "。关于BuilderNode的解绑场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%A7%A3%E9%99%A4%E5%AE%9E%E4%BD%93%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%E5%85%B3%E7%B3%BB",
        children: "节点解绑"
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
            children: ["用于复用BuilderNode的参数。该参数将直接用于BuilderNode中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定义行为。调用此方法将同步触发内部自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse10",
              children: "aboutToReuse"
            }), "生命周期回调，并将该参数作为回调的入参。默认值为undefined，此时BuilderNode中的自定义组件将直接使用构造时的数据源。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recycle12",
      children: "recycle12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "recycle(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触发BuilderNode中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable装饰器：V1组件复用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(643713)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode通过reuse和recycle完成其内外自定义组件之间的复用事件传递，具体使用场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#buildernode%E8%B0%83%E7%94%A8reuse%E5%92%8Crecycle%E6%8E%A5%E5%8F%A3%E5%AE%9E%E7%8E%B0%E8%8A%82%E7%82%B9%E5%A4%8D%E7%94%A8%E8%83%BD%E5%8A%9B",
        children: "BuilderNode调用reuse和recycle接口实现节点复用能力"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, BuilderNode, UIContext } from \"@kit.ArkUI\";\n\nconst TEST_TAG: string = \"Reuse+Recycle\";\n\n// 自定义管理数据的类\nclass MyDataSource {\n  private dataArray: string[] = [];\n  private listener: DataChangeListener | null = null;\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number) {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string) {\n    this.dataArray.push(data);\n  }\n\n  public reloadListener(): void {\n    this.listener?.onDataReloaded();\n  }\n\n  public registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  public unregisterDataChangeListener(): void {\n    this.listener = null;\n  }\n}\n\n// 自定义传递参数的类\nclass Params {\n  item: string = '';\n\n  constructor(item: string) {\n    this.item = item;\n  }\n}\n\n@Builder\nfunction buildNode(param: Params = new Params(\"hello\")) {\n  Row() {\n    Text(`C${param.item} -- `)\n    ReusableChildComponent2({ item: param.item }) // 该自定义组件在BuilderNode中无法被正确复用\n  }\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public builderNode: BuilderNode<[Params]> | null = null;\n  public item: string = \"\";\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.builderNode == null) {\n      this.builderNode = new BuilderNode(uiContext, { selfIdealSize: { width: 300, height: 200 } });\n      this.builderNode.build(wrapBuilder<[Params]>(buildNode), new Params(this.item));\n    }\n    return this.builderNode.getFrameNode();\n  }\n}\n\n// 被回收复用的自定义组件，其状态变量会更新，而子自定义组件ReusableChildComponent3中的状态变量也会更新，但BuilderNode会阻断这一传递过程\n@Reusable\n@Component\nstruct ReusableChildComponent {\n  @Prop item: string = '';\n  @Prop switch: string = '';\n  private controller: MyNodeController = new MyNodeController();\n\n  aboutToAppear() {\n    this.controller.item = this.item;\n  }\n\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent aboutToRecycle ${this.item}`);\n\n    // 当开关为open，通过BuilderNode的reuse接口和recycle接口传递给其下的自定义组件，例如ReusableChildComponent2，完成复用\n    if (this.switch === 'open') {\n      this.controller?.builderNode?.recycle();\n    }\n  }\n\n  aboutToReuse(params: object): void {\n    console.info(`${TEST_TAG} ReusableChildComponent aboutToReuse ${JSON.stringify(params)}`);\n\n    // 当开关为open，通过BuilderNode的reuse接口和recycle接口传递给其下的自定义组件，例如ReusableChildComponent2，完成复用\n    if (this.switch === 'open') {\n      this.controller?.builderNode?.reuse(params);\n    }\n  }\n\n  build() {\n    Row() {\n      Text(`A${this.item}--`)\n      ReusableChildComponent3({ item: this.item })\n      NodeContainer(this.controller);\n    }\n  }\n}\n\n// 自定义组件\n@Component\nstruct ReusableChildComponent2 {\n  @Prop item: string = \"false\";\n\n  aboutToReuse(params: Record<string, object>) {\n    console.info(`${TEST_TAG} ReusableChildComponent2 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent2 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`D${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@Component\nstruct ReusableChildComponent3 {\n  @Prop item: string = \"false\";\n\n  aboutToReuse(params: Record<string, object>) {\n    console.info(`${TEST_TAG} ReusableChildComponent3 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent3 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`B${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n\n@Entry\n@Component\nstruct Index {\n  @State data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i < 100; i++) {\n      this.data.pushData(i.toString());\n    }\n  }\n\n  build() {\n    Column() {\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            ReusableChildComponent({\n              item: item,\n              switch: 'open' // 将open改为close可观察到，BuilderNode不通过reuse和recycle接口传递复用时，BuilderNode内部的自定义组件的行为表现\n            })\n          }\n        }, (item: string) => item)\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updateconfiguration12",
      children: "updateConfiguration12+"
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
        src: (__webpack_require__(443819)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateConfiguration接口用于通知对象更新，更新所使用的系统环境由应用当前的系统环境变化决定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext, FrameCallback } from \"@kit.ArkUI\";\nimport { AbilityConstant, Configuration, ConfigurationConstant, EnvironmentCallback } from '@kit.AbilityKit';\n\nclass Params {\n  text: string = \"\";\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n// 自定义组件\n@Component\nstruct TextBuilder {\n  // 作为自定义组件中需要更新的属性，数据类型为基础属性，定义为@Prop\n  @Prop message: string = \"TextBuilder\";\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .margin({ bottom: 36 })\n      }\n    }\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n    TextBuilder({ message: params.text }) // 自定义组件\n  }.backgroundColor($r('sys.color.ohos_id_color_background'))\n}\n\n// 继承NodeController实现自定义textNode控制器\nclass TextNodeController extends NodeController {\n  private textNode: BuilderNode<[Params]> | null = null;\n  private message: string = \"\";\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    return this.textNode?.getFrameNode() ? this.textNode?.getFrameNode() : null;\n  }\n\n  createNode(context: UIContext) {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    builderNodeMap.push(this.textNode);\n  }\n\n  deleteNode() {\n    let node = builderNodeMap.pop();\n    node?.dispose();\n  }\n\n  update(message: string) {\n    if (this.textNode !== null) {\n      // 调用update进行更新\n      this.textNode.update(new Params(message));\n    }\n  }\n}\n\n// 记录创建的自定义节点对象\nconst builderNodeMap: Array<BuilderNode<[Params]>> = new Array();\n\nclass MyFrameCallback extends FrameCallback {\n  onFrame() {\n    updateColorMode();\n  }\n}\n\nfunction updateColorMode() {\n  builderNodeMap.forEach((value, index) => {\n    // 通知BuilderNode环境变量改变，触发深浅色切换\n    value.updateConfiguration();\n  })\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = \"hello\";\n  private textNodeController: TextNodeController = new TextNodeController(this.message);\n  private count = 0;\n\n  aboutToAppear(): void {\n    let environmentCallback: EnvironmentCallback = {\n      onMemoryLevel: (level: AbilityConstant.MemoryLevel): void => {\n        console.info('onMemoryLevel');\n      },\n      onConfigurationUpdated: (config: Configuration): void => {\n        console.info(`onConfigurationUpdated ${JSON.stringify(config)}`);\n        this.getUIContext()?.postFrameCallback(new MyFrameCallback());\n      }\n    };\n    // 注册监听回调\n    this.getUIContext().getHostContext()?.getApplicationContext().on('environment', environmentCallback);\n    // 设置应用深浅色跟随系统\n    this.getUIContext()\n      .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n    // 创建自定义节点并添加至builderNodeMap\n    this.textNodeController.createNode(this.getUIContext());\n  }\n\n  aboutToDisappear(): void {\n    // 移除map中的引用，并将自定义节点释放\n    this.textNodeController.deleteNode();\n  }\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(this.textNodeController)\n          .width('100%')\n          .height(200)\n          .backgroundColor('#FFF0F0F0')\n        Button('Update')\n          .onClick(() => {\n            this.count += 1;\n            const message = \"Update \" + this.count.toString();\n            this.textNodeController.update(message);\n          })\n        Button('切换深色')\n          .onClick(() => {\n            this.getUIContext()\n              .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);\n          })\n        Button('设置浅色')\n          .onClick(() => {\n            this.getUIContext()\n              .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT);\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdisposed20",
      children: "isDisposed20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDisposed(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前BuilderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了BuilderNode释放节点前后分别使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#isdisposed20",
        children: "isDisposed"
      }), "接口验证节点的状态，释放节点前节点调用isDisposed接口返回true，释放节点后节点调用isDisposed接口返回false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, BuilderNode } from '@kit.ArkUI';\n\n// 自定义组件\n@Component\nstruct TestComponent {\n  build() {\n    Column() {\n      Text('This is a BuilderNode.')\n        .fontSize(25)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .height(30)\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('aboutToDisappear');\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  TestComponent()\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private builderNode: BuilderNode<[]> | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.builderNode = new BuilderNode(uiContext, { selfIdealSize: { width: 200, height: 100 } });\n    this.builderNode.build(new WrappedBuilder(buildComponent));\n\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.size = { width: 300, height: 300 };\n      rootRenderNode.backgroundColor = 0xffd5d5d5;\n      rootRenderNode.appendChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n\n    return this.rootNode;\n  }\n\n  // 释放当前builderNode\n  dispose() {\n    if (this.builderNode !== null) {\n      this.builderNode.dispose();\n    }\n  }\n\n  // 检验当前builderNode是否已被释放\n  isDisposed(): string {\n    if (this.builderNode !== null) {\n      if (this.builderNode.isDisposed()) {\n        return 'builderNode isDisposed is true';\n      } else {\n        return 'builderNode isDisposed is false';\n      }\n    }\n    return 'builderNode is null';\n  }\n\n  removeBuilderNode() {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null && this.builderNode !== null && this.builderNode.getFrameNode() !== null) {\n      rootRenderNode.removeChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State text: string = ''\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('BuilderNode dispose')\n        .onClick(() => {\n          this.myNodeController.removeBuilderNode();\n          this.myNodeController.dispose();\n          this.text = '';\n        })\n        .width(200)\n        .height(50)\n      Button('BuilderNode isDisposed')\n        .onClick(() => {\n          this.text = this.myNodeController.isDisposed();\n        })\n        .width(200)\n        .height(50)\n      Text(this.text)\n        .fontSize(25)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(748247)/* ["default"] */.A) + "",
        width: "436",
        height: "550"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postinputevent20",
      children: "postInputEvent20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postInputEvent(event: InputEventType): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将事件分发到目标节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "offsetA为builderNode相对于父组件的偏移，offsetB为命中位置相对于builderNode的偏移，offsetC为offsetA+offsetB，最终输入给postInputEvent中的window信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(54820)/* ["default"] */.A) + "",
        width: "868",
        height: "545"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(714081)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入的坐标值需要转换为px，坐标转换示例可以参考下面示例代码。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["鼠标左键点击事件将转换为触摸事件，转发时应注意不在外层同时绑定触摸事件与鼠标事件，否则可能导致坐标偏移。这是由于在事件转换过程中，SourceType不会发生变化，规格可查看", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
          children: "onTouch"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["注入事件为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis#axisevent",
          children: "轴事件"
        }), "时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-rotationgesture/ts-basic-gestures-rotationgesture",
          children: "rotate旋转手势"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "转发的事件会在被分发到的目标组件所在的子树里做touchtest，并触发对应手势，原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果是开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段，轴事件的scrollStep字段。要保证事件的完整，比如触摸事件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#touchtype",
          children: "TouchType"
        }), "中DOWN和UP字段都要有，防止出现未定义行为。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview/arkts-apis-webview",
          children: "webview"
        }), "已经处理过坐标系变换，可以将事件直接下发。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "postTouchEvent接口需要提供手势坐标相对于post事件对端内的局部坐标，postInputEvent接口需要提供手势坐标相对于post事件对端内的窗口坐标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议同一个事件转发多次。"
      }), "\n"]
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputeventtype20",
              children: "InputEventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于透传的输入事件。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件是否被成功派发。如果事件派发成功，则返回true；否则，返回false。"
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
        href: "#%E7%A4%BA%E4%BE%8B1buildernode%E4%B8%AD%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6",
        children: "示例1（BuilderNode中鼠标事件）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2buildernode%E4%B8%AD%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6",
        children: "示例2（BuilderNode中触摸事件）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B3buildernode%E4%B8%AD%E8%BD%B4%E4%BA%8B%E4%BB%B6",
        children: "示例3（BuilderNode中轴事件）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inheritfreezeoptions20",
      children: "inheritFreezeOptions20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "inheritFreezeOptions(enabled: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前BuilderNode对象是否设置为继承父组件中自定义组件的冻结策略。如果设置继承状态为false，则BuilderNode对象的冻结策略为false。在这种情况下，节点在不活跃状态下不会被冻结。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(887364)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BuilderNode设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，其冻结策略不会传递给子组件。"
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
            children: "BuilderNode对象是否设置为继承父组件中自定义组件的冻结策略。true为继承父组件中自定义组件的冻结策略，false为不继承父组件中自定义组件的冻结策略。"
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
      children: "该示例演示了BuilderNode设置继承状态为True，继承父自定义组件的冻结策略，在不活跃的时候进行冻结，切换为活跃状态解冻，更新缓存的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n// 自定义传递参数的类\nclass Params {\n  count: number = 0;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n\n@Builder\n// builder组件\nfunction buildText(params: Params) {\n\n  Column() {\n    TextBuilder({ message: params.count })\n  }\n}\n\n// 继承NodeController实现自定义textNode控制器\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: BuilderNode<[Params]> | null = null;\n  private count: number = 0;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.textNode = new BuilderNode(context, { selfIdealSize: { width: 150, height: 150 } });\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.count)); // 创建BuilderNode节点\n    this.textNode.inheritFreezeOptions(true); // 设置BuilderNode的冻结继承状态为true\n    if (this.rootNode !== null) {\n      this.rootNode.appendChild(this.textNode.getFrameNode()); // 将BuilderNode上树\n    }\n    return this.rootNode;\n  }\n\n  update(): void {\n    if (this.textNode !== null) {\n      this.count += 1;\n      this.textNode.update(new Params(this.count)); // 更新BuilderNode中的数据，可以触发Log\n    }\n\n  }\n}\n\nconst textNodeController: TextNodeController = new TextNodeController();\n\n@Entry\n@Component\nstruct MyNavigationTestStack {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @State message: number = 0;\n  @State logNumber: number = 0;\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      pageOneStack({ message: this.message, logNumber: this.logNumber })\n    } else if (name === 'pageTwo') {\n      pageTwoStack({ message: this.message, logNumber: this.logNumber })\n    }\n  }\n\n  build() {\n    Column() {\n      Button('update builderNode') // 点击更新BuildrNode\n        .onClick(() => {\n          textNodeController.update();\n        })\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n  }\n}\n\n@Component\nstruct pageOneStack { // 页面一\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = 1;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule }) // 切换至页面二\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule }) // 返回主页面\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct pageTwoStack { // 页面二\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = 2;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Text('BuilderNode处于冻结')\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule }) // 返回至页面一\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component({ freezeWhenInactive: true })\n  // 设置冻结策略为不活跃冻结\nstruct NavigationContentMsgStack {\n  @Link message: number;\n  @Link index: number;\n  @Link logNumber: number;\n\n  build() {\n    Column() {\n      if (this.index === 1) {\n        NodeContainer(textNodeController)\n      }\n    }\n  }\n}\n\n@Component({ freezeWhenInactive: true })\n  // 设置冻结策略为不活跃冻结\nstruct TextBuilder {\n  @Prop @Watch(\"info\") message: number = 0;\n  @State count: number = 0;\n\n  info() {\n    this.count++;\n    console.info(`freeze-test TextBuilder message callback change time ${this.count}`); // 根据message内容变化来打印日志来判断是否冻结\n    console.info(`freeze-test TextBuilder message callback change massage ${this.message}`); // 根据message内容变化来打印日志来判断是否冻结\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(`文本更新内容： ${this.message}`)\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n        Text(`文本更新次数： ${this.count}`)\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 48, bottom: 48 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(522514)/* ["default"] */.A) + "",
        width: "258",
        height: "544"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reactivebuildernode22",
      children: "ReactiveBuilderNode22+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ReactiveBuilderNode支持通过无状态的UI方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "生成组件树，并持有该组件树的根节点，不支持定义为状态变量。ReactiveBuilderNode中持有的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "仅用于将此ReactiveBuilderNode作为子节点挂载到其他FrameNode上。对ReactiveBuilderNode持有的FrameNode进行属性设置与子节点操作可能会导致未定义行为，因此不建议通过ReactiveBuilderNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getframenode",
        children: "getFrameNode"
      }), "方法和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "节点的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getrendernode",
        children: "getRenderNode"
      }), "方法获取RenderNode，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "的接口对其进行属性设置与子节点操作。"]
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
      children: "constructor(uiContext: UIContext, options?: RenderOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于构造ReactiveBuilderNode类。当将ReactiveBuilderNode生成的内容嵌入到其它", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "中显示时，需要显式指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#renderoptions",
        children: "RenderOptions"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#renderoptions",
        children: "selfIdealSize"
      }), "，否则ReactiveBuilderNode内的节点默认父组件布局约束为[0, 0]。调用此接口，若不设置selfIdealSize则认为ReactiveBuilderNode中子树的根节点大小为[0, 0]。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UI上下文，获取方式可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-node/js-apis-arkui-node#uicontext%E8%8E%B7%E5%8F%96%E6%96%B9%E6%B3%95",
              children: "UIContext获取方法"
            }), "。uiContext需要为一个有效的值，即UI上下文正确，如果传入非法值或者未设置，会导致创建失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#renderoptions",
              children: "RenderOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReactiveBuilderNode的构造可选参数，参数用于构造节点的理想大小和节点的渲染类型。  默认值：undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build22",
      children: "build22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(builder: WrappedBuilder<Args>, config: BuildOptions, ...args: Args): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["依照传入的对象创建组件树，并持有组件树的根节点。无状态的UI方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "最多拥有一个根节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(647406)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Builder进行创建和更新的规格参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
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
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
              children: "WrappedBuilder<Args>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建对应节点树时所需的无状态UI方法", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
              children: "@Builder"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buildoptions12",
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
            children: "Args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "builder的入参，用于构造WrappedBuilder对象封装的builder函数。支持多个入参。默认值为undefined。"
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
      children: "该示例演示了如何使用ReactiveBuilderNode的build接口动态创建响应式UI组件树，通过数据绑定实现UI内容的动态更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ReactiveBuilderNode, NodeContent, Binding, MutableBinding, UIUtils} from '@kit.ArkUI';\n\n// Builder函数，用于构建显示多个数据的UI组件\n@Builder\nfunction buildText(age: Binding<number>, name: MutableBinding<string>, count: number) {\n  Column() {\n    Text(age.value.toString());\n    Text(name.value);\n    Text(count.toString());\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private content: NodeContent = new NodeContent();\n  private age: number = 10;\n  private grades: number = 100;\n\n  build() {\n    Row() {\n      Column() {\n        Text()\n        // 点击时动态创建并添加ReactiveBuilderNode\n        Button('add ReactiveBuilderNode').onClick(\n          () => {\n            // 创建ReactiveBuilderNode实例，泛型参数指定三个参数的类型\n            let node = new ReactiveBuilderNode<[Binding<number>, MutableBinding<string>, number]>(this.getUIContext());\n            \n            // 构建节点内容，传入builder函数和参数\n            node.build(\n              wrapBuilder<[Binding<number>, Binding<string>, number]>(buildText),  // 包装builder函数\n              {},\n              UIUtils.makeBinding<number>(() => {\n                return this.age\n              }),\n              UIUtils.makeBinding<string>(() => 'Hello World'),\n              this.grades\n            );\n            // 将构建好的FrameNode添加到内容容器中显示\n            this.content.addFrameNode(node.getFrameNode());\n          })\n        ContentSlot(this.content)\n      }\n      .id('column')\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(235224)/* ["default"] */.A) + "",
        width: "245",
        height: "106"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getframenode22",
      children: "getFrameNode22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFrameNode(): FrameNode | null"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取ReactiveBuilderNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "。在ReactiveBuilderNode执行build操作之后，才会生成FrameNode。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例演示了如何使用getFrameNode接口获取ReactiveBuilderNode构建的FrameNode节点，并通过NodeContent动态管理UI节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ReactiveBuilderNode, NodeContent, Binding, MutableBinding, UIUtils } from '@kit.ArkUI';\n\n// Builder函数，构建包含文本和按钮的UI组件\n@Builder\nfunction buildText(age: Binding<number>, name: MutableBinding<string>, count: number) {\n  Column() {\n    Text(age.value.toString());\n    Text(name.value);\n    Text(count.toString());\n    Button('click').onClick(() => {\n      name.value = 'new name';\n    });\n  }\n}\n\ninterface GeneratedObjectLiteralInterface_1 {\n  age: number;\n  name: string;\n  count: number;\n}\n\n@Entry\n@Component\nstruct Index {\n  private content: NodeContent = new NodeContent();  // 动态节点内容容器\n  @State params: GeneratedObjectLiteralInterface_1 = {  // 状态数据对象\n    age: 10,\n    name: 'Hello World',\n    count: 100\n  };\n\n  // 扩展Builder\n  @Builder\n  extendBlank(age: Binding<number>) {\n    Row() {\n      Blank();\n      Text(`age: ${age.value}, blank`);\n    }\n    .height(20)\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text()\n        // 直接使用buildText Builder构建静态内容\n        buildText(UIUtils.makeBinding<number>(() => {\n          return this.params.age\n        }),\n          UIUtils.makeBinding<string>(() => this.params.name, val => {\n            this.params.name = this.params.name + '+1';\n          }),\n          this.params.count)\n        // 使用extendBlank Builder构建扩展内容\n        this.extendBlank(UIUtils.makeBinding<number>(() => {\n          return this.params.age\n        }))\n        \n        // 动态添加ReactiveBuilderNode\n        Button('add ReactiveBuilderNode').onClick(\n          () => {\n            // 创建ReactiveBuilderNode实例\n            let node = new ReactiveBuilderNode<[Binding<number>, MutableBinding<string>, number]>(this.getUIContext());\n            \n            // 构建节点内容\n            node.build(\n              wrapBuilder<[Binding<number>, Binding<string>, number]>(buildText),\n              {},\n              UIUtils.makeBinding<number>(() => {\n                return this.params.age\n              }),\n              UIUtils.makeBinding<string>(() => this.params.name, val => {\n                this.params.name = val;\n              }),\n              this.params.count\n            );\n            this.content.addFrameNode(node.getFrameNode());\n          })\n        ContentSlot(this.content)\n      }\n      .id('column')\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(289917)/* ["default"] */.A) + "",
        width: "292",
        height: "396"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "posttouchevent22",
      children: "postTouchEvent22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postTouchEvent(event: TouchEvent): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将原始事件派发到某个ReactiveBuilderNode创建的FrameNode上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postTouchEvent是从组件树的中间节点往下分发，需要变换到父组件坐标系才能分发成功，参考下图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OffsetA为buildNode相对于父组件的偏移量，可以通过FrameNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoparent12",
        children: "getPositionToParent"
      }), "获取。OffsetB为point点相对于buildNode的偏移量，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TouchEvent"
      }), "获取。OffsetC为OffsetA与OffsetB的和，是传给postTouchEvent的最终结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(683846)/* ["default"] */.A) + "",
        width: "599",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(474956)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的坐标值需要转换为px，如果builderNode有仿射变换，则需要再叠加仿射变换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview/arkts-apis-webview",
        children: "webview"
      }), "中，内部已经处理过坐标系变换，可以将TouchEvent事件直接下发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同一时间戳，postTouchEvent只能调用一次。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["派发事件是否成功。true：已命中响应事件的组件；false：未命中任何可响应事件的组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果未按照预期命中组件，需要确认：  1.坐标系是否转换正确。  2.组件是否可交互状态。  3.是否绑定事件。"]
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
      children: "该示例实现了通过ReactiveBuilderNode构建的按钮组件与外部容器的触摸事件联动，演示了自定义节点中触摸事件的坐标转换与跨节点传递机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当触摸下方蓝色区域时，触摸事件会经过坐标转换后传递给上方的ReactiveBuilderNode按钮，触发按钮的触摸反馈和日志输出，实现了触摸事件的跨节点精准传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, ReactiveBuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\n@Builder\nfunction ButtonBuilder() {\n  Column() {\n    Button(`Button`)\n      .borderWidth(2)\n      .backgroundColor(Color.Gray)\n      .width('100%')\n      .height('100%')\n      .gesture(\n        TapGesture()\n          .onAction((event: GestureEvent) => {\n            console.info('TapGesture');\n          })\n      )\n      .onTouch(() => {\n        console.info(`postTouchEvent Success`);\n      })\n  }\n  .width(500)\n  .height(300)\n  .backgroundColor(Color.Gray)\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: ReactiveBuilderNode<[]> | null = null;\n  private wrapBuilder: WrappedBuilder<[]> = wrapBuilder(ButtonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new ReactiveBuilderNode(uiContext);\n    this.rootNode.build(this.wrapBuilder, {});\n    return this.rootNode.getFrameNode();\n  }\n\n  // 坐标转换示例\n  postTouchEvent(event: TouchEvent, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n\n    let changedTouchLen = event.changedTouches.length;\n    for (let i = 0; i < changedTouchLen; i++) {\n      if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n        event.changedTouches[i].x = uiContext.vp2px(offsetX + event.changedTouches[i].x);\n        event.changedTouches[i].y = uiContext.vp2px(offsetY + event.changedTouches[i].y);\n      }\n    }\n    let result = this.rootNode.postTouchEvent(event);\n    console.info(`result ${result}`);\n    return result;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.nodeController)\n        .height(300)\n        .width(500)\n\n      Column()\n        .width(500)\n        .height(300)\n        .backgroundColor('#ADD8E6')\n        .onTouch((event) => {\n          if (event != undefined) {\n            this.nodeController.postTouchEvent(event, this.getUIContext());\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(133249)/* ["default"] */.A) + "",
        width: "266",
        height: "365"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispose22",
      children: "dispose22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dispose(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["立即释放当前ReactiveBuilderNode对象对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
        children: "实体节点"
      }), "的引用关系。关于ReactiveBuilderNode的解绑场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%A7%A3%E9%99%A4%E5%AE%9E%E4%BD%93%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%E5%85%B3%E7%B3%BB",
        children: "节点解绑"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(761130)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当ReactiveBuilderNode对象调用dispose之后，会与后端实体节点解除引用关系。若前端对象ReactiveBuilderNode无法释放，容易导致内存泄漏。建议在不再需要对该ReactiveBuilderNode对象进行操作时，开发者主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏的风险。"
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
      children: "该示例演示了如何通过dispose接口实现ReactiveBuilderNode组件的动态移除与资源释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, ReactiveBuilderNode } from '@kit.ArkUI';\n\n@Component\nstruct TestComponent {\n  build() {\n    Column() {\n      Text('This is a ReactiveBuilderNode.')\n        .fontSize(16)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('aboutToDisappear');\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  TestComponent()\n}\n\n// 自定义节点控制器，管理ReactiveBuilderNode和FrameNode\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private builderNode: ReactiveBuilderNode<[]> | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    // 创建根FrameNode\n    this.rootNode = new FrameNode(uiContext);\n    this.builderNode = new ReactiveBuilderNode(uiContext, { selfIdealSize: { width: 200, height: 100 } });\n    // 构建ReactiveBuilderNode内容\n    this.builderNode.build(new WrappedBuilder(buildComponent), {});\n\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.size = { width: 200, height: 200 };\n      rootRenderNode.backgroundColor = 0xff666666;\n      // 将ReactiveBuilderNode的RenderNode添加到根节点\n      rootRenderNode.appendChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n\n    return this.rootNode;\n  }\n\n  // 释放资源的方法\n  dispose() {\n    if (this.builderNode !== null) {\n      this.builderNode.dispose(); // 释放ReactiveBuilderNode资源\n    }\n  }\n\n  // 移除BuilderNode的方法\n  removeBuilderNode() {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null && this.builderNode !== null && this.builderNode.getFrameNode() !== null) {\n      // 从根节点移除BuilderNode的RenderNode\n      rootRenderNode.removeChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      // 移除并释放ReactiveBuilderNode\n      Button('ReactiveBuilderNode dispose')\n        .onClick(() => {\n          this.myNodeController.removeBuilderNode();\n          this.myNodeController.dispose();\n        })\n        .width('70%')\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(671376)/* ["default"] */.A) + "",
        width: "336",
        height: "242"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reuse22",
      children: "reuse22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reuse(param?: Object): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触发ReactiveBuilderNode中的自定义组件的复用。组件复用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable装饰器：V1组件复用"
      }), "。关于ReactiveBuilderNode的解绑场景请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%A7%A3%E9%99%A4%E5%AE%9E%E4%BD%93%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%E5%85%B3%E7%B3%BB",
        children: "节点解绑"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ReactiveBuilderNode通过reuse和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#recycle22",
        children: "recycle"
      }), "完成其内外自定义组件之间的复用事件传递，具体使用场景请参见", (0,jsx_runtime.jsx)(_components.a, {
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
              href: "#reactivebuildernode22",
              children: "ReactiveBuilderNode"
            }), "的参数。该参数将直接用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#reactivebuildernode22",
              children: "ReactiveBuilderNode"
            }), "中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定义行为。调用此方法将同步触发内部自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse10",
              children: "aboutToReuse"
            }), "生命周期回调，并将该参数作为回调的入参。默认值为undefined，此时ReactiveBuilderNode中的自定义组件将直接使用构造时的数据源。"]
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
      children: ["触发ReactiveBuilderNode中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable装饰器：V1组件复用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ReactiveBuilderNode通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#reuse22",
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
      children: "该示例展示了在长列表场景下，如何使用ReactiveBuilderNode的reuse和recycle接口实现组件复用机制，优化列表滚动的性能表现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, ReactiveBuilderNode, UIContext } from '@kit.ArkUI';\n\nconst TEST_TAG: string = 'Reuse+Recycle';\n\n// 自定义数据源类，用于管理列表数据\nclass MyDataSource {\n  private dataArray: string[] = [];\n  private listener: DataChangeListener | null = null;\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number) {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string) {\n    this.dataArray.push(data);\n  }\n\n  public reloadListener(): void {\n    this.listener?.onDataReloaded();\n  }\n\n  // 注册数据变化监听器\n  public registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  public unregisterDataChangeListener(): void {\n    this.listener = null;\n  }\n}\n\n// 构建器函数，用于创建列表项UI\n@Builder\nfunction buildNode(text: string) {\n  Row() {\n    Text(`C${text} -- `)\n    ReusableChildComponent2({ item: text }) // 嵌套可复用组件\n  }\n}\n\n// 自定义节点控制器，管理ReactiveBuilderNode\nclass MyNodeController extends NodeController {\n  public builderNode: ReactiveBuilderNode<[string]> | null = null;\n  public item: string = '';\n\n  // 创建节点方法\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.builderNode == null) {\n      // 创建ReactiveBuilderNode并设置理想尺寸\n      this.builderNode = new ReactiveBuilderNode(uiContext, { selfIdealSize: { width: 300, height: 200 } });\n      // 使用构建器函数构建节点内容\n      this.builderNode.build(wrapBuilder<[string]>(buildNode), {}, this.item);\n    }\n    return this.builderNode.getFrameNode();\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableChildComponent {\n  @Prop item: string = '';\n  @Prop switch: string = '';\n  private controller: MyNodeController = new MyNodeController();\n\n  aboutToAppear() {\n    this.controller.item = this.item; // 初始化控制器数据\n  }\n\n  // 组件回收时的生命周期回调\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent aboutToRecycle ${this.item}`);\n\n    // 当开关打开时，触发builderNode的回收\n    if (this.switch === 'open') {\n      this.controller?.builderNode?.recycle();\n    }\n  }\n\n  // 组件复用时的生命周期回调\n  aboutToReuse(params: object): void {\n    console.info(`${TEST_TAG} ReusableChildComponent aboutToReuse ${JSON.stringify(params)}`);\n\n    // 当开关打开时，触发builderNode的复用\n    if (this.switch === 'open') {\n      this.controller?.builderNode?.reuse(params);\n    }\n  }\n\n  build() {\n    Row() {\n      Text(`A${this.item}--`)\n      ReusableChildComponent3({ item: this.item })\n      NodeContainer(this.controller); // 包含NodeContainer用于显示自定义节点\n    }\n  }\n}\n\n@Component\nstruct ReusableChildComponent2 {\n  @Prop item: string = 'false';\n\n  // 复用时的回调\n  aboutToReuse(params: Record<string, object>) {\n    console.info(`${TEST_TAG} ReusableChildComponent2 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  // 回收时的回调\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent2 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`D${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@Component\nstruct ReusableChildComponent3 {\n  @Prop item: string = 'false';\n\n  // 复用时的回调\n  aboutToReuse(params: Record<string, object>) {\n    console.info(`${TEST_TAG} ReusableChildComponent3 aboutToReuse ${JSON.stringify(params)}`);\n  }\n\n  // 回收时的回调\n  aboutToRecycle(): void {\n    console.info(`${TEST_TAG} ReusableChildComponent3 aboutToRecycle ${this.item}`);\n  }\n\n  build() {\n    Row() {\n      Text(`B${this.item}`)\n        .fontSize(20)\n        .backgroundColor(Color.Yellow)\n        .margin({ left: 10 })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n\n@Entry\n@Component\nstruct Index {\n  @State data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    // 初始化列表数据\n    for (let i = 0; i < 100; i++) {\n      this.data.pushData(i.toString());\n    }\n  }\n\n  build() {\n    Column() {\n      // 使用LazyForEach渲染长列表，支持组件复用\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            ReusableChildComponent({\n              item: item,\n              switch: 'open' // 开启复用回收功能\n            })\n          }\n        }, (item: string) => item)\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(386329)/* ["default"] */.A) + "",
        width: "306",
        height: "246"
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
      children: "该示例展示了如何使用updateConfiguration接口响应系统环境变化，实现ReactiveBuilderNode构建的UI节点的动态更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, ReactiveBuilderNode, FrameNode, UIContext, FrameCallback, Binding, UIUtils } from '@kit.ArkUI';\nimport { AbilityConstant, Configuration, ConfigurationConstant, EnvironmentCallback } from '@kit.AbilityKit';\n\n// 自定义组件\n@Component\nstruct TextBuilder {\n  // 作为自定义组件中需要更新的属性，数据类型为基础属性，定义为@Prop\n  @Prop message: string = 'TextBuilder';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(20)\n          .fontWeight(FontWeight.Bold)\n          .margin({ bottom: 30 })\n      }\n      .justifyContent(FlexAlign.Center)\n      .alignItems(HorizontalAlign.Center)\n      .width('100%')\n    }\n    .width('100%')\n  }\n}\n\n@Builder\nfunction buildText(text: Binding<string>) {\n  Column() {\n    Text(text.value)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 15 })\n    TextBuilder({ message: text.value }) // 自定义组件\n  }\n  .backgroundColor($r('sys.color.ohos_id_color_background'))\n  .justifyContent(FlexAlign.Center)\n  .alignItems(HorizontalAlign.Center)\n  .width('100%')\n  .height('100%')\n}\n\n// 继承NodeController实现自定义textNode控制器\nclass TextNodeController extends NodeController {\n  private textNode: ReactiveBuilderNode<[Binding<string>]> | null = null;\n  private message: string = '';\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    return this.textNode?.getFrameNode() ? this.textNode?.getFrameNode() : null;\n  }\n\n  createNode(context: UIContext) {\n    this.textNode = new ReactiveBuilderNode(context);\n    this.textNode.build(wrapBuilder<[Binding<string>]>(buildText), {},\n      UIUtils.makeBinding<string>(() => this.message, val => {\n        this.message = val;\n      }));\n    builderNodeMap.push(this.textNode);\n  }\n\n  deleteNode() {\n    let node = builderNodeMap.pop();\n    node?.dispose();\n  }\n\n  update(message: string) {\n    this.message = message\n    this.textNode?.flushState();\n  }\n}\n\n// 记录创建的自定义节点对象\nconst builderNodeMap: Array<ReactiveBuilderNode<[text: Binding<string>]>> = new Array();\n\nclass MyFrameCallback extends FrameCallback {\n  onFrame() {\n    updateColorMode();\n  }\n}\n\nfunction updateColorMode() {\n  builderNodeMap.forEach((value, index) => {\n    // 通知BuilderNode环境变量改变，触发深浅色切换\n    value.updateConfiguration();\n  })\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello';\n  private textNodeController: TextNodeController = new TextNodeController(this.message);\n  private count = 0;\n\n  aboutToAppear(): void {\n    let environmentCallback: EnvironmentCallback = {\n      onMemoryLevel: (level: AbilityConstant.MemoryLevel): void => {\n        console.info('onMemoryLevel');\n      },\n      onConfigurationUpdated: (config: Configuration): void => {\n        console.info(`onConfigurationUpdated ${JSON.stringify(config)}`);\n        this.getUIContext()?.postFrameCallback(new MyFrameCallback());\n      }\n    };\n    // 注册监听回调\n    this.getUIContext().getHostContext()?.getApplicationContext().on('environment', environmentCallback);\n    // 设置应用深浅色跟随系统\n    this.getUIContext()\n      .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n    // 创建自定义节点并添加至builderNodeMap\n    this.textNodeController.createNode(this.getUIContext());\n  }\n\n  aboutToDisappear(): void {\n    // 移除builderNodeMap中的引用，并将自定义节点释放\n    this.textNodeController.deleteNode();\n  }\n\n  build() {\n    Row() {\n      Column({ space: 12 }) {\n        NodeContainer(this.textNodeController)\n          .width('100%')\n          .height(70)\n          .backgroundColor('#FFF0F0F0')\n        Button('Update')\n          .onClick(() => {\n            this.count += 1;\n            const message = 'Update ' + this.count.toString();\n            this.textNodeController.update(message);\n          })\n        Button('设置深色')\n          .onClick(() => {\n            this.getUIContext()\n              .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);\n          })\n        Button('设置浅色')\n          .onClick(() => {\n            this.getUIContext()\n              .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT);\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(316099)/* ["default"] */.A) + "",
        width: "282",
        height: "264"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flushstate22",
      children: "flushState22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "flushState(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据提供的参数更新ReactiveBuilderNode。当ReactiveBuilderNode中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
        children: "WrappedBuilder"
      }), "对象封装的builder函数中使用的绑定参数是由V1装饰器（如@Observed）装饰的类实例时，需要在此类数据变更后手动调用此方法以更新数据，当使用V2装饰器（如@ObservedV2）装饰的类实例时，支持自动更新，无需手动调用。"]
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
      children: "该示例展示了flushState接口在V1和V2装饰器下的不同使用方式，演示了ReactiveBuilderNode在不同数据响应机制下的更新策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ReactiveBuilderNode, NodeContent, Binding, UIUtils } from '@kit.ArkUI';\n\n@Builder\nfunction buildText(age: Binding<number>) {\n  Column() {\n    Text(`age: ${age.value}`);\n  }\n}\n\n// 使用V2装饰器的类，支持自动状态更新\n@ObservedV2\nclass GeneratedObjectLiteralInterface_1 {\n  constructor(age: number) {\n    this.age = age;\n  }\n\n  @Trace age: number = 0;\n}\n\n// 使用普通类（V1装饰器风格），需要手动触发更新\nclass GeneratedObjectLiteralInterface_2 {\n  constructor(age: number) {\n    this.age = age;\n  }\n\n  age: number = 0;\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  private content: NodeContent = new NodeContent();\n  params: GeneratedObjectLiteralInterface_1 = new GeneratedObjectLiteralInterface_1(25);\n  params2: GeneratedObjectLiteralInterface_2 = new GeneratedObjectLiteralInterface_2(25);\n  private node1: ReactiveBuilderNode<[Binding<number>]> | null = null\n\n  build() {\n    Row() {\n      Scroll() {\n        Column({ space: 12 }) {\n          // 创建使用V2装饰器的ReactiveBuilderNode\n          Button('绑定参数由V2装饰器装饰').onClick(\n            () => {\n              let node =\n                new ReactiveBuilderNode<[Binding<number>]>(this.getUIContext());\n              node.build(\n                wrapBuilder<[Binding<number>]>(buildText),\n                {},\n                UIUtils.makeBinding<number>(() => {\n                  return this.params.age;\n                })\n              );\n              this.content.addFrameNode(node.getFrameNode());\n            })\n          // 创建使用V1装饰器的ReactiveBuilderNode\n          Button('绑定参数由V1装饰器装饰').onClick(\n            () => {\n              this.node1 =\n                new ReactiveBuilderNode<[Binding<number>]>(this.getUIContext());\n              this.node1.build(\n                wrapBuilder<[Binding<number>]>(buildText),\n                {},\n                UIUtils.makeBinding<number>(() => {\n                  return this.params2.age;\n                })\n              );\n              this.content.addFrameNode(this.node1.getFrameNode());\n            })\n          Button('change age - V2可自动更新').onClick(() => {\n            this.params.age += 1; // V2装饰器会自动检测变化并更新UI\n          })\n          Button('change age - V1需手动更新').onClick(() => {\n            this.params2.age += 1;\n            // 对于V1装饰器的数据，需要手动调用flushState来触发UI更新\n            this.node1?.flushState();\n          })\n          // 显示动态创建的内容\n          ContentSlot(this.content)\n        }\n        .id(\"column\")\n        .width('100%')\n      }\n      .scrollable(ScrollDirection.Vertical)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Gray)\n      .scrollBarWidth(10)\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(568558)/* ["default"] */.A) + "",
        width: "328",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postinputevent22",
      children: "postInputEvent22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postInputEvent(event: InputEventType): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将输入事件分发到ReactiveBuilderNode管理的目标节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "offsetA为builderNode相对于父组件的偏移，offsetB为命中位置相对于builderNode的偏移，offsetC为offsetA+offsetB，最终输入给postInputEvent当中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435831)/* ["default"] */.A) + "",
        width: "599",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147086)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的坐标值需要转换为px，坐标转换示例可以参考下面示例代码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鼠标左键点击事件将转换为触摸事件，转发时应注意不在外层且绑定触摸事件与鼠标事件，否则可能导致坐标偏移。这是由于在事件转换过程中，SourceType不会发生变化，规格可查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注入事件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis#axisevent",
        children: "轴事件"
      }), "时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-rotationgesture/ts-basic-gestures-rotationgesture",
        children: "rotate旋转手势"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转发的事件会在被分发到的目标组件所在的子树里做触摸测试（TouchTest），并触发对应手势，原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果是开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段、轴事件的scrollStep字段，同时要保证事件的完整，比如触摸事件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#touchtype",
        children: "TouchType"
      }), "中DOWN和UP字段都要有，防止出现未定义行为。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview/arkts-apis-webview",
        children: "webview"
      }), "已经处理过坐标系变换，可以将事件直接下发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postTouchEvent接口需要提供手势坐标相对于输入事件对端内的局部坐标，postInputEvent接口需要提供手势坐标相对于输入事件对端内的窗口坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不建议同一个事件转发多次。"
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inputeventtype20",
              children: "InputEventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待分发的输入事件。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件是否被成功分发。如果事件分发成功，则返回true；否则，返回false。"
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
        href: "#%E7%A4%BA%E4%BE%8B13reactivebuildernode%E4%B8%AD%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6",
        children: "示例13（ReactiveBuilderNode中鼠标事件）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B14reactivebuildernode%E4%B8%AD%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6",
        children: "示例14（ReactiveBuilderNode中触摸事件）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B15reactivebuildernode%E4%B8%AD%E8%BD%B4%E4%BA%8B%E4%BB%B6",
        children: "示例15（ReactiveBuilderNode中轴事件）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inheritfreezeoptions22",
      children: "inheritFreezeOptions22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "inheritFreezeOptions(enabled: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前ReactiveBuilderNode对象是否设置为继承父组件中自定义组件的冻结策略。如果设置继承状态为false，则ReactiveBuilderNode对象的冻结策略为false。在这种情况下，节点在不活跃状态下不会被冻结。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499255)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ReactiveBuilderNode设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，其冻结策略不会传递给子组件。"
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
            children: "ReactiveBuilderNode对象是否设置为继承父组件中自定义组件的冻结策略。true为继承父组件中自定义组件的冻结策略，false为不继承父组件中自定义组件的冻结策略。"
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
      children: "该示例演示了ReactiveBuilderNode设置继承状态为true时，继承父自定义组件的冻结策略。在页面跳转走不活跃时进行冻结，页面切换回来为活跃状态解冻，更新缓存的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ReactiveBuilderNode, FrameNode, NodeController, Binding, UIUtils } from '@kit.ArkUI';\n\n@Builder\nfunction buildText(count: Binding<number>) {\n  Column() {\n    TextBuilder({ message: count.value })\n  }\n}\n\n// 自定义节点控制器（逻辑不变）\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private textNode: ReactiveBuilderNode<[Binding<number>]> | null = null;\n  private count: number = 0; // 内部计数状态\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.textNode = new ReactiveBuilderNode(context, { selfIdealSize: { width: 150, height: 150 } });\n    // 构建节点内容\n    this.textNode.build(wrapBuilder<[Binding<number>]>(buildText), {}, UIUtils.makeBinding<number>(() => {\n      return this.count\n    }));\n    // 启用冻结继承选项，当父组件冻结时自动冻结\n    this.textNode.inheritFreezeOptions(true);\n    // 将ReactiveBuilderNode添加到根节点\n    if (this.rootNode !== null) {\n      this.rootNode.appendChild(this.textNode.getFrameNode());\n    }\n    return this.rootNode;\n  }\n\n  update(): void {\n    if (this.textNode !== null) {\n      this.count += 1; // 增加计数\n      this.textNode.flushState();\n    }\n  }\n}\n\nconst textNodeController: TextNodeController = new TextNodeController();\n\n@Entry\n@Component\nstruct MyNavigationTestStack {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @State message: number = 0;\n  @State logNumber: number = 0;\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      pageOneStack({ message: $message, logNumber: $logNumber })\n    } else if (name === 'pageTwo') {\n      pageTwoStack({ message: $message, logNumber: $logNumber })\n    }\n  }\n\n  @Builder\n  CustomTitle() {\n    Text('NavIndex')\n      .fontSize(20)\n      .fontColor(Color.Black)\n      .fontWeight(FontWeight.Normal)\n  }\n\n  build() {\n    Column() {\n      Button('update builderNode')\n        .fontSize(18)\n        .onClick(() => {\n          textNodeController.update();\n        })\n\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .fontSize(18)\n            .width('80%')\n            .height(40)\n            .margin(10)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' });\n            })\n        }\n      }\n      .title(this.CustomTitle)\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n    .width('100%')\n    .height('100%')\n    .padding(10)\n  }\n}\n\n@Component\nstruct pageOneStack { // 页面一\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = 1;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .fontSize(18)\n          .width('80%')\n          .height(40)\n          .margin(8)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .fontSize(18)\n          .width('80%')\n          .height(40)\n          .margin(8)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct pageTwoStack { // 页面二\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = 2;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column({ space: 8 }) {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n\n        Text('BuilderNode处于冻结状态')\n          .fontSize(18)\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 16, bottom: 16 })\n\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .fontSize(18)\n          .width('80%')\n          .height(40)\n          .margin(8)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component({ freezeWhenInactive: true })\n  // 启用非活动时冻结\nstruct NavigationContentMsgStack {\n  @Link message: number;\n  @Link index: number;\n  @Link logNumber: number;\n\n  build() {\n    Column() {\n      if (this.index === 1) {\n        NodeContainer(textNodeController)\n          .margin({ bottom: 5 })\n      }\n    }\n  }\n}\n\n// 文本构建器组件，支持冻结\n@Component({ freezeWhenInactive: true })\nstruct TextBuilder {\n  @Prop @Watch('info') message: number = 0;\n  @State count: number = 0;\n\n  info() {\n    this.count++;\n    console.info(`freeze-test TextBuilder message callback change time ${this.count}`);\n    console.info(`freeze-test TextBuilder message callback change massage ${this.message}`);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(`文本更新内容： ${this.message}`)\n          .fontSize(18)\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 16, bottom: 16 })\n\n        Text(`文本更新次数： ${this.count}`)\n          .fontSize(18)\n          .fontWeight(FontWeight.Bold)\n          .margin({ top: 16, bottom: 16 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844413)/* ["default"] */.A) + "",
        width: "403",
        height: "296"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdisposed22",
      children: "isDisposed22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDisposed(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前ReactiveBuilderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。因为在节点dispose后可能仍存在被调用dispose接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#isdisposed20",
        children: "isDisposed"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了ReactiveBuilderNode释放节点前后分别使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#isdisposed22",
        children: "isDisposed"
      }), "接口验证节点的状态，释放节点前节点调用isDisposed接口返回true，释放节点后节点调用isDisposed接口返回false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, ReactiveBuilderNode } from '@kit.ArkUI';\n\n@Component\nstruct TestComponent {\n  build() {\n    Column() {\n      Text('This is a BuilderNode.')\n        .fontSize(25)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .height(30)\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('aboutToDisappear');\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  TestComponent()\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null; // 根FrameNode容器\n  private builderNode: ReactiveBuilderNode<[]> | null = null; // ReactiveBuilderNode实例\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.builderNode = new ReactiveBuilderNode(uiContext, { selfIdealSize: { width: 200, height: 100 } });\n    // 构建ReactiveBuilderNode内容，使用WrappedBuilder包装Builder函数\n    this.builderNode.build(new WrappedBuilder(buildComponent), {});\n\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.size = { width: 300, height: 50 };\n      rootRenderNode.backgroundColor = 0xffd5d5d5;\n      // 将ReactiveBuilderNode的RenderNode添加到根节点\n      rootRenderNode.appendChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n\n    return this.rootNode;\n  }\n\n  // 释放资源的方法\n  dispose() {\n    if (this.builderNode !== null) {\n      this.builderNode.dispose(); // 释放ReactiveBuilderNode资源\n    }\n  }\n\n  // 检查节点是否已释放的方法\n  isDisposed(): string {\n    if (this.builderNode !== null) {\n      if (this.builderNode.isDisposed()) {\n        return 'builderNode isDisposed is true';\n      } else {\n        return 'builderNode isDisposed is false';\n      }\n    }\n    return 'builderNode is null';\n  }\n\n  removeBuilderNode() {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null && this.builderNode !== null && this.builderNode.getFrameNode() !== null) {\n      // 从根节点移除BuilderNode的RenderNode\n      rootRenderNode.removeChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State text: string = '' // 状态变量，用于显示节点状态信息\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('BuilderNode dispose')\n        .onClick(() => {\n          this.myNodeController.removeBuilderNode();\n          this.myNodeController.dispose(); // 释放资源\n          this.text = '';\n        })\n        .width(200)\n        .height(50)\n      Button('BuilderNode isDisposed')\n        .onClick(() => {\n          this.text = this.myNodeController.isDisposed();\n        })\n        .width(200)\n        .height(50)\n      // 显示节点状态信息\n      Text(this.text)\n        .fontSize(20)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(455315)/* ["default"] */.A) + "",
        width: "405",
        height: "248"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1buildernode中鼠标事件",
      children: "示例1（BuilderNode中鼠标事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了在自定义组件中截获鼠标事件并进行坐标转换的完整流程。组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#onmouse",
        children: "onMouse"
      }), "回调读取本地x/y，再结合FrameNode.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoparent12",
        children: "getPositionToParent"
      }), "()得到的偏移量，调用vp2px将相对坐标转换为像素坐标，更新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#mouseevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "MouseEvent"
      }), "的windowX/windowY、displayX/displayY。最后通过rootNode.", (0,jsx_runtime.jsx)(_components.a, {
        href: "#postinputevent20",
        children: "postInputEvent"
      }), "(event)将转换后的鼠标事件分发给子节点进行处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, PromptAction, UIContext, InputEventType } from '@kit.ArkUI';\n\n// 自定义参数传递的类\nclass Params {\n  text: string = \"this is a text\"\n  uiContext: UIContext | null = null\n}\n\n@Builder\nfunction ButtonBuilder(params: Params) {\n  Column() {\n    Button(params.text)\n      .borderWidth(2)\n      .align(Alignment.Center)\n      .backgroundColor(Color.Orange)\n      .fontSize(20)\n      .width(\"45%\")\n      .height(\"30%\")\n      .offset({ x: 60, y: 100 })\n      .borderRadius('50%')\n      .onMouse((event) => {\n        let promptAction: PromptAction = params.uiContext!.getPromptAction();\n        promptAction.showToast({\n          message: 'onMouse',\n          duration: 3000\n        });\n        console.info('onMouse')\n      })\n      .onTouch((event) => {\n        let promptAction: PromptAction = params.uiContext!.getPromptAction();\n        promptAction.showToast({\n          message: 'onTouch',\n          duration: 3000\n        });\n        console.info('onTouch')\n      })\n  }\n  .width(500)\n  .height(300)\n  .backgroundColor(Color.Gray)\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(ButtonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new BuilderNode(uiContext);\n    this.rootNode.build(this.wrapBuilder, { text: \"This is a string\", uiContext })\n    return this.rootNode.getFrameNode();\n  }\n\n  postMouseEvent(event: InputEventType, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    // 读取本地x、y与buildNode相对于父组件的偏移量，转换为像素坐标\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n\n    let mouseEvent = event as MouseEvent;\n    if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n      mouseEvent.windowX = uiContext.vp2px(offsetX + mouseEvent.x);\n      mouseEvent.windowY = uiContext.vp2px(offsetY + mouseEvent.y);\n    }\n    // 将鼠标事件派发至BuilderNode创建的FrameNode上，result记录派发是否成功\n    let result = this.rootNode.postInputEvent(event);\n    return result;\n  }\n\n  postTouchEvent(event: InputEventType, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    // 读取本地x、y与buildNode相对于父组件的偏移量，转换为像素坐标\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n\n    let touchEvent = event as TouchEvent;\n    let changedTouchLen = touchEvent.changedTouches.length;\n    for (let i = 0; i < changedTouchLen; i++) {\n      if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n        touchEvent.changedTouches[i].windowX = uiContext.vp2px(offsetX + touchEvent.changedTouches[i].x);\n        touchEvent.changedTouches[i].windowY = uiContext.vp2px(offsetY + touchEvent.changedTouches[i].y);\n      }\n    }\n    let touchesLen = touchEvent.touches.length;\n    for (let i = 0; i < touchesLen; i++) {\n      if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n        touchEvent.touches[i].windowX = uiContext.vp2px(offsetX + touchEvent.touches[i].x);\n        touchEvent.touches[i].windowY = uiContext.vp2px(offsetY + touchEvent.touches[i].y);\n      }\n    }\n    // 将触摸事件派发至BuilderNode创建的FrameNode上，result记录派发是否成功\n    let result = this.rootNode.postInputEvent(event);\n    return result;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Stack() {\n      NodeContainer(this.nodeController)\n        .height(300)\n        .width(500)\n      Column()\n        .width(500)\n        .height(300)\n        .backgroundColor(Color.Transparent)\n        .onMouse((event) => {\n          if (event != undefined) {\n            this.nodeController.postMouseEvent(event, this.getUIContext());\n          }\n        })\n        .onTouch((event) => {\n          if (event != undefined) {\n            this.nodeController.postTouchEvent(event, this.getUIContext());\n          }\n        })\n    }.offset({ top: 100 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(313322)/* ["default"] */.A) + "",
        width: "702",
        height: "1138"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2buildernode中触摸事件",
      children: "示例2（BuilderNode中触摸事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了在自定义组件中截获触摸事件并对触点坐标进行转换的完整流程。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "回调中，遍历", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TouchEvent"
      }), "的changedTouches和touches数组，对每个触点的x/y加上组件偏移量并调用vp2px转换为像素，更新各自的windowX/windowY、displayX/displayY。最后同样通过rootNode.postInputEvent(event)将转换后的触摸事件分发给子节点处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext, PromptAction, InputEventType } from '@kit.ArkUI';\n\n// 自定义传递参数的类\nclass Params {\n  text: string = \"this is a text\"\n  uiContext: UIContext | null = null\n}\n\n@Builder\nfunction ButtonBuilder(params: Params) {\n  Column() {\n    Button(params.text)\n      .borderWidth(2)\n      .align(Alignment.Center)\n      .backgroundColor(Color.Orange)\n      .fontSize(20)\n      .width(\"45%\")\n      .height(\"30%\")\n      .offset({ x: 60, y: 100 })\n      .borderRadius('50%')\n      .onTouch((event) => {\n        let promptAction: PromptAction = params.uiContext!.getPromptAction();\n        promptAction.showToast({\n          message: 'onTouch',\n          duration: 3000\n        });\n        console.info('onTouch')\n      })\n  }\n  .width(500)\n  .height(300)\n  .backgroundColor(Color.Gray)\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(ButtonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new BuilderNode(uiContext);\n    this.rootNode.build(this.wrapBuilder, { text: \"This is a string\", uiContext })\n    return this.rootNode.getFrameNode();\n  }\n\n  postInputEvent(event: InputEventType, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    // 读取本地x、y与buildNode相对于父组件的偏移量，转换为像素坐标\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n\n    // 只转发原始事件，不转发鼠标模拟的触摸事件\n    if (event.source == SourceType.TouchScreen) {\n      let touchEvent = event as TouchEvent;\n      let changedTouchLen = touchEvent.changedTouches.length;\n      for (let i = 0; i < changedTouchLen; i++) {\n        if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n          touchEvent.changedTouches[i].windowX = uiContext.vp2px(offsetX + touchEvent.changedTouches[i].x);\n          touchEvent.changedTouches[i].windowY = uiContext.vp2px(offsetY + touchEvent.changedTouches[i].y);\n        }\n      }\n      let touchesLen = touchEvent.touches.length;\n      for (let i = 0; i < touchesLen; i++) {\n        if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n          touchEvent.touches[i].windowX = uiContext.vp2px(offsetX + touchEvent.touches[i].x);\n          touchEvent.touches[i].windowY = uiContext.vp2px(offsetY + touchEvent.touches[i].y);\n        }\n      }\n    }\n\n    // 将触摸事件派发至BuilderNode创建的FrameNode上，result记录派发是否成功\n    let result = this.rootNode.postInputEvent(event);\n    return result;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Stack() {\n      NodeContainer(this.nodeController)\n        .height(300)\n        .width(500)\n      Column()\n        .width(500)\n        .height(300)\n        .backgroundColor(Color.Transparent)\n        .onTouch((event) => {\n          if (event != undefined) {\n            this.nodeController.postInputEvent(event, this.getUIContext());\n          }\n        })\n    }.offset({ top: 100 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(423146)/* ["default"] */.A) + "",
        width: "696",
        height: "1148"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3buildernode中轴事件",
      children: "示例3（BuilderNode中轴事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了在自定义组件中截获滚轮或触控板轴事件并进行坐标转换的完整流程。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis#onaxisevent",
        children: "onAxisEvent"
      }), "回调中，先获取事件的相对x/y，再加上组件偏移量后调用vp2px转换为像素，更新AxisEvent的windowX/windowY、displayX/displayY，最后通过rootNode.postInputEvent(event)将转换后的轴事件分发给子节点进行处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext, PromptAction, InputEventType } from '@kit.ArkUI';\n\n// 自定义传递参数的类\nclass Params {\n  text: string = \"this is a text\"\n  uiContext: UIContext | null = null\n}\n\n@Builder\nfunction ButtonBuilder(params: Params) {\n  Column() {\n    Button(params.text)\n      .borderWidth(2)\n      .align(Alignment.Center)\n      .backgroundColor(Color.Orange)\n      .fontSize(20)\n      .width(\"45%\")\n      .height(\"30%\")\n      .offset({ x: 60, y: 100 })\n      .borderRadius('50%')\n      .onAxisEvent((event) => {\n        let promptAction: PromptAction = params.uiContext!.getPromptAction();\n        promptAction.showToast({\n          message: 'onAxisEvent',\n          duration: 3000\n        });\n        console.info('onAxisEvent')\n      })\n  }\n  .width(500)\n  .height(300)\n  .backgroundColor(Color.Gray)\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(ButtonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new BuilderNode(uiContext);\n    this.rootNode.build(this.wrapBuilder, { text: \"This is a string\", uiContext })\n    return this.rootNode.getFrameNode();\n  }\n\n  postInputEvent(event: InputEventType, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    // 读取本地x、y与buildNode相对于父组件的偏移量，转换为像素坐标\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n\n    let axisEvent = event as AxisEvent;\n    if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n      axisEvent.windowX = uiContext.vp2px(offsetX + axisEvent.x);\n      axisEvent.windowY = uiContext.vp2px(offsetY + axisEvent.y);\n    }\n    // 将轴事件派发至BuilderNode创建的FrameNode上，result记录派发是否成功\n    let result = this.rootNode.postInputEvent(event);\n    return result;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Stack() {\n      NodeContainer(this.nodeController)\n        .height(300)\n        .width(500)\n      Column()\n        .width(500)\n        .height(300)\n        .backgroundColor(Color.Transparent)\n        .onAxisEvent((event) => {\n          if (event != undefined) {\n            this.nodeController.postInputEvent(event, this.getUIContext());\n          }\n        })\n    }.offset({ top: 100 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251326)/* ["default"] */.A) + "",
        width: "694",
        height: "1152"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4buildernode共享localstorage",
      children: "示例4（BuilderNode共享localStorage）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了如何在BuilderNode通过build方法传入外部", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management#localstorage9",
        children: "localStorage"
      }), "，此时挂载在BuilderNode的所有自定义组件共享该localStorage。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\n// 自定义传递参数的类\nclass Params {\n  text: string = \"\"\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\nlet globalBuilderNode: BuilderNode<[Params]> | null = null;\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text('BuildNodeContentArea')\n      .fontSize(25)\n    CustomComp()\n  }\n}\n\n// 继承NodeController实现自定义textNode控制器\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    if (globalBuilderNode === null) {\n      globalBuilderNode = new BuilderNode(context);\n      // 传入外部localStorage，共享给挂载在当前BuilderNode的所有自定义组件\n      globalBuilderNode.build(wrapBuilder<[Params]>(buildText), new Params('builder node text'),\n        { localStorage: localStorage1 })\n    }\n    this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    return this.rootNode;\n  }\n}\n\n// 创建LocalStorage并设置初始值\nlet localStorage1: LocalStorage = new LocalStorage();\nlocalStorage1.setOrCreate('PropA', 'PropA');\n\n@Entry(localStorage1)\n@Component\nstruct Index {\n  private controller: TextNodeController = new TextNodeController();\n  @LocalStorageLink('PropA') PropA: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.PropA)\n        NodeContainer(this.controller)\n        Button('changeLocalstorage').onClick(() => {\n          localStorage1.set('PropA', 'AfterChange')\n        })\n      }\n    }\n  }\n}\n\n@Component\nstruct CustomComp {\n  @LocalStorageLink('PropA') PropA: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.PropA)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5buildernode支持内部consume接收外部的provide数据",
      children: "示例5（BuilderNode支持内部@Consume接收外部的@Provide数据）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置BuilderNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#buildoptions12",
        children: "BuildOptions"
      }), "中enableProvideConsumeCrossing为true，以实现BuilderNode内部自定义组件的@Consume与所在自定义组件的@Provide双向同步。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, NodeContent } from '@kit.ArkUI';\n\n// 自定义组件\n@Component\nstruct ConsumeChild {\n  // 与外部的@Provider装饰的状态变量双向同步\n  @Consume @Watch(\"ChangeData\") message: string = \"\"\n\n  ChangeData() {\n    console.info(`ChangeData ${this.message}`);\n  }\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontWeight(FontWeight.Bold)\n        .fontSize(20)\n      Button(\"Click to change message to append C\")\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          // 修改Consume的变量\n          this.message = this.message + \"C\"\n        })\n    }\n  }\n}\n\n@Builder\nfunction CreateText(textMessage: string) {\n  Column() {\n    Text(textMessage)\n      .fontWeight(FontWeight.Bold)\n      .fontSize(20)\n    ConsumeChild()\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  // 与内部的@Consumer装饰的状态变量双向同步\n  @Provide message: string = 'Hello World';\n  private content: NodeContent = new NodeContent();\n  private builderNode: BuilderNode<[string]> = new BuilderNode<[string]>(this.getUIContext());\n\n  aboutToAppear(): void {\n    // 设置enableProvideConsumeCrossing为true，支持BuilderNode内部自定义组件ConsumeChild的@Consume变量与其所在页面中的@Provide变量双向同步\n    this.builderNode.build(wrapBuilder(CreateText), \"Test Consume\", { enableProvideConsumeCrossing: true })\n    this.content.addFrameNode(this.builderNode.getFrameNode())\n  }\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontWeight(FontWeight.Bold)\n        .fontSize(20)\n      Button(\"Click to change message to append I\")\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.message = this.message + \"I\";\n        })\n      Column() {\n        ContentSlot(this.content)\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(869900)/* ["default"] */.A) + "",
        width: "452",
        height: "252"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6buildernode支持内部consumer接收外部的provider数据",
      children: "示例6（BuilderNode支持内部@Consumer接收外部的@Provider数据）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(226072)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持跨BuilderNode配对@Provider和@Consumer。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置BuilderNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#buildoptions12",
        children: "BuildOptions"
      }), "中enableProvideConsumeCrossing为true，以实现BuilderNode内部自定义组件的@Consumer变量与所在自定义组件的@Provider装饰的状态变量双向同步。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@Builder\nfunction buildText() {\n  // @Consumer挂载在BuilderNode下\n  addChildChild();\n}\n\nclass TextNodeControllerAdd extends NodeController {\n  builderNode: BuilderNode<[]> | null = null;\n  private uiContext: UIContext | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    console.info('TextNodeControllerAdd makeNode');\n    this.builderNode = new BuilderNode(context);\n    // 构建builderNode，enableProvideConsumeCrossing设置为true\n    this.builderNode.build(wrapBuilder<[]>(buildText), undefined, { enableProvideConsumeCrossing: true });\n    return this.builderNode.getFrameNode();\n  }\n}\n\n@ComponentV2\nstruct addChildChild {\n  @Consumer() content: string = 'default value';\n\n  @Monitor('content')\n  consumeWatch() {\n    console.info(`Consumer change ${this.content}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Test: ${this.content}`);\n      Button('change consumer')\n        .onClick(() => {\n          // 修改@Consumer的变量\n          this.content += ' Consumer';\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct AddChild {\n  // 与@Consumer装饰的状态变量双向同步\n  @Provider() content: string = 'Index: hello world';\n\n  @Monitor('content')\n  providerWatch() {\n    console.info(`Provider change ${this.content}`);\n  }\n\n  controllerIndex: TextNodeControllerAdd = new TextNodeControllerAdd();\n\n  build() {\n    Column() {\n      Text(`Provider: ${this.content}`)\n      Button('change Provider')\n        .onClick(() => {\n          // 修改@Provider的变量\n          this.content += ' Provider';\n        })\n      // 通过NodeContainer连接BuilderNode节点\n      NodeContainer(this.controllerIndex);\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(285879)/* ["default"] */.A) + "",
        width: "358",
        height: "140"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7buildernode上下树时的同步关系变化",
      children: "示例7（BuilderNode上下树时的同步关系变化）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(746465)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持跨BuilderNode配对@Provider和@Consumer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例演示了BuilderNode挂载到组件树和从组件树卸载时，@Consumer与@Provider的同步关系变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@Builder\nfunction buildText() {\n  TestRemove();\n}\n\nlet globalBuilderNode: BuilderNode<[]> | null = null;\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.uiContext = context;\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (globalBuilderNode === null && this.uiContext) {\n      globalBuilderNode = new BuilderNode(this.uiContext);\n      globalBuilderNode.build(wrapBuilder<[]>(buildText), undefined, { enableProvideConsumeCrossing: true });\n    }\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.removeChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  disposeNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      globalBuilderNode.dispose();\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct RemoChildDisconnectProvider {\n  @Provider() content: string = 'Index: hello world';\n\n  @Monitor('content')\n  providerWatch() {\n    console.info(`Provider change ${this.content}`);\n  }\n\n  controllerIndex: TextNodeController = new TextNodeController();\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Provider: ${this.content}`)\n      Button('add child')\n        .onClick(() => {\n          this.controllerIndex.addBuilderNode();\n        })\n\n      Button('remove child')\n        .onClick(() => {\n          this.controllerIndex.removeBuilderNode();\n        })\n\n      Button('dispose child')\n        .onClick(() => {\n          this.controllerIndex.disposeNode();\n        })\n\n      Button('change Provider')\n        .onClick(() => {\n          // 修改@Provider的变量\n          this.content += 'Pro';\n        })\n      NodeContainer(this.controllerIndex);\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct TestRemove {\n  @Consumer() content: string = 'default value';\n\n  @Monitor('content')\n  consumerWatch() {\n    console.info(`Consumer change ${this.content}`);\n  }\n\n  aboutToDisappear() {\n    console.info(`TestRemove aboutToDisappear`);\n  }\n\n  build() {\n    Column() {\n      Text(`Consumer ${this.content}`)\n\n      Button('change content')\n        .onClick(() => {\n          // 修改@Consumer的变量\n          this.content += 'content';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8buildernode上树后再上另一棵树时的同步关系变化",
      children: "示例8（BuilderNode上树后再上另一棵树时的同步关系变化）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(146943)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持跨BuilderNode配对@Provider和@Consumer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例演示了BuilderNode挂载到组件树后，再挂载到另一个组件树时，@Consumer与@Provider的同步关系变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@Builder\nfunction buildText() {\n  ConsumerChild();\n}\n\nlet globalBuilderNode: BuilderNode<[]> | null = null;\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.uiContext = context;\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (globalBuilderNode === null && this.uiContext) {\n      globalBuilderNode = new BuilderNode(this.uiContext);\n      globalBuilderNode.build(wrapBuilder<[]>(buildText), undefined, { enableProvideConsumeCrossing: true });\n    }\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.removeChild(globalBuilderNode.getFrameNode());\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct AddRemoveAddToAnother {\n  @Provider() content: string = 'Index: hello world';\n\n  @Monitor('content')\n  providerWatch() {\n    console.info(`Provider change ${this.content}`);\n  }\n\n  controllerIndex: TextNodeController = new TextNodeController();\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Index Provider: ${this.content}`)\n\n      Button('add child')\n        .onClick(() => {\n          this.controllerIndex.addBuilderNode();\n        })\n\n      Button('change Index Provide')\n        .onClick(() => {\n          // 修改@Provider的变量\n          this.content += 'Pro';\n        })\n\n      NodeContainer(this.controllerIndex);\n      ChildHasProvide({ controllerIndex: this.controllerIndex });\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct ChildHasProvide {\n  @Provider('content') content: string = 'Child: hello world';\n\n  @Monitor('content')\n  providerWatch() {\n    console.info(`Provider change ${this.content}`);\n  }\n\n  @Param private controllerIndex: TextNodeController | undefined = undefined;\n  controllerIndexChild: TextNodeController = new TextNodeController();\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Child Provider: ${this.content}`)\n\n      Button('change Child Provide')\n        .onClick(() => {\n          // 修改@Provider的变量\n          this.content += 'Pro';\n        })\n\n      Button('change View')\n        .onClick(() => {\n          this.controllerIndex?.removeBuilderNode();\n          this.controllerIndexChild.addBuilderNode();\n        })\n      NodeContainer(this.controllerIndexChild);\n    }\n  }\n}\n\n@ComponentV2\nstruct ConsumerChild {\n  @Consumer() content: string = 'default value';\n\n  @Monitor('content')\n  consumerWatch() {\n    console.info(`Consumer change ${this.content}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Consumer: ${this.content}`)\n\n      Button('change content')\n        .onClick(() => {\n          // 修改@Consumer的变量\n          this.content += 'content';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9buildernode互相嵌套的场景下的同步关系变化",
      children: "示例9（BuilderNode互相嵌套的场景下的同步关系变化）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(329413)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持跨BuilderNode配对@Provider和@Consumer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例演示了BuilderNode互相嵌套场景下@Consumer和@Provider的同步关系变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeContent, NodeController } from '@kit.ArkUI';\n\nlet content: NodeContent = new NodeContent();\n\n@Builder\nfunction buildText() {\n  Column() {\n    BuildNodeToBuildNodeChild().border({ width: 2, color: Color.Pink, radius: 5 });\n    ContentSlot(content);\n  }\n}\n\n@Builder\nfunction buildText2() {\n  Column() {\n    BuildNodeToBuildNodeChild().border({ width: 2, color: Color.Pink, radius: 5 });\n  }\n}\n\nlet globalBuilderNode: BuilderNode<[]> | null = null;\nlet globalBuilderNode2: BuilderNode<[]> | null = null;\n\nclass TextNodeControllerAdd extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.uiContext = context;\n    // 仅返回FrameNode，未执行build\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (globalBuilderNode === null && this.uiContext) {\n      globalBuilderNode = new BuilderNode(this.uiContext);\n      globalBuilderNode.build(wrapBuilder<[]>(buildText), undefined, { enableProvideConsumeCrossing: true });\n    }\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.removeChild(globalBuilderNode.getFrameNode());\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct BuildNodeToBuildNode {\n  @Provider() content: string = 'Index: hello world';\n\n  @Monitor('content')\n  providerWatch() {\n    console.info(`Provider change ${this.content}`);\n  }\n\n  controllerIndex: TextNodeControllerAdd = new TextNodeControllerAdd();\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Provider: ${this.content}`)\n      Button('add child')\n        .onClick(() => {\n          this.controllerIndex.addBuilderNode();\n        })\n      // builderNode嵌套builderNode\n      Button('add to NodeContent')\n        .onClick(() => {\n          globalBuilderNode2 = new BuilderNode(this.getUIContext());\n          globalBuilderNode2.build(wrapBuilder<[]>(buildText2), undefined, { enableProvideConsumeCrossing: true });\n          content.addFrameNode(globalBuilderNode2.getFrameNode());\n        })\n      Button('change Provider')\n        .onClick(() => {\n          // 修改@Provider的变量\n          this.content += 'Pro';\n        })\n      NodeContainer(this.controllerIndex);\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct BuildNodeToBuildNodeChild {\n  // 在未上树的时候，Test组件无View的父亲，该节点为离屏节点。@Consumer找不到对应@Provider，使用默认值\n  @Consumer() content: string = 'default value';\n\n  @Monitor('content')\n  consumerWatch() {\n    console.info(`Consumer change ${this.content}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Test: ${this.content}`)\n\n      Button('change content')\n        .onClick(() => {\n          // 修改@Consumer的变量\n          this.content += 'content';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10buildernode下的consumer所在组件还有其他子组件时的同步关系",
      children: "示例10（BuilderNode下的@Consumer所在组件还有其他子组件时的同步关系）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(241736)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持跨BuilderNode配对@Provider和@Consumer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例演示了当@Consumer所在的自定义组件在BuilderNode下且该自定义组件存在子组件时，@Consumer和@Provider之间的同步关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@Builder\nfunction buildText() {\n  NestedComponentChild();\n}\n\nlet globalBuilderNode: BuilderNode<[]> | null = null;\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.uiContext = context;\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (globalBuilderNode === null && this.uiContext) {\n      globalBuilderNode = new BuilderNode(this.uiContext);\n      globalBuilderNode.build(wrapBuilder<[]>(buildText), undefined, { enableProvideConsumeCrossing: true });\n    }\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.removeChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  disposeNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      globalBuilderNode.dispose();\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct NestedComponent {\n  @Provider() content: string = 'Index: hello world';\n\n  @Monitor('content')\n  providerWatch() {\n    console.info(`Provider change ${this.content}`);\n  }\n\n  controllerIndex: TextNodeController = new TextNodeController();\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Provider: ${this.content}`)\n\n      Button('add child')\n        .onClick(() => {\n          this.controllerIndex.addBuilderNode();\n        })\n\n      Button('remove child')\n        .onClick(() => {\n          this.controllerIndex.removeBuilderNode();\n        })\n\n      Button('dispose child')\n        .onClick(() => {\n          this.controllerIndex.disposeNode();\n        })\n\n      Button('change Provider')\n        .onClick(() => {\n          // 修改@Provider的变量\n          this.content += 'Pro';\n        })\n      NodeContainer(this.controllerIndex);\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct NestedComponentChild {\n  @Consumer() content: string = 'default value';\n\n  @Monitor('content')\n  consumerWatch() {\n    console.info(`Consumer change ${this.content}`);\n  }\n\n  aboutToDisappear() {\n    console.info(`TestRemove aboutToDisappear`);\n  }\n\n  build() {\n    Column() {\n      Text(`Consumer: ${this.content}`)\n\n      Button('change content')\n        .onClick(() => {\n          // 修改@Consumer的变量\n          this.content += 'content';\n        })\n      NestedComponentChildChld({ content: this.content, addContent: () => this.content += 'content' });\n    }\n  }\n}\n\n@ComponentV2\nstruct NestedComponentChildChld {\n  // 在未上树的时候，Test组件无View的父亲，该节点为离屏节点。@Consumer找不到对应@Provider，使用默认值\n  @Param @Require content: string;\n  @Event addContent: () => void;\n\n  @Monitor('content')\n  paramEventWatch() {\n    console.info(`ParamEvent change ${this.content}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Param: ${this.content}`)\n\n      Button('change content')\n        .onClick(() => {\n          this.addContent();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11组件树为provider-consumer-buildernode-consumer时的同步关系",
      children: "示例11（组件树为@Provider-@Consumer-BuilderNode-@Consumer时的同步关系）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957192)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持跨BuilderNode配对@Provider和@Consumer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例演示了组件树为@Provider-@Consumer-BuilderNode-@Consumer的情况时，@Consumer和@Provider之间的同步关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@ObservedV2\nclass Ob {\n  @Trace a: number = 0;\n}\n\n@Builder\nfunction buildText() {\n  NestedComponentChild();\n}\n\nlet globalBuilderNode: BuilderNode<[]> | null = null;\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.uiContext = context;\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (globalBuilderNode === null && this.uiContext) {\n      globalBuilderNode = new BuilderNode(this.uiContext);\n      globalBuilderNode.build(wrapBuilder<[]>(buildText), undefined, { enableProvideConsumeCrossing: true });\n    }\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.removeChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  disposeNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      globalBuilderNode.dispose();\n    }\n  }\n}\n\n@Entry\n@ComponentV2\n  // 与@Consumer装饰的状态变量双向同步\nstruct ProvideConsumeBuilderNodeConsume {\n  @Provider() content: Ob = new Ob();\n\n  @Monitor('content')\n  providerWatch() {\n    console.info(`Provider change ${this.content.a}`);\n  }\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Provide: ${this.content.a}`)\n\n      Button('Change Provider a')\n        .onClick(() => {\n          this.content.a++;\n        })\n      Button('Change Provider Whole')\n        .onClick(() => {\n          this.content.a = 0;\n        })\n      ProvideConsumeBuilderNodeConsumeChild();\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n// 组件树为@Provider-@Consumer-BuilderNode-@Consumer结构\n@ComponentV2\nstruct ProvideConsumeBuilderNodeConsumeChild {\n  @Consumer() content: Ob = new Ob();\n\n  @Monitor('content')\n  consumerWatch() {\n    console.info(`ProvideConsumeBuilderNodeConsumeChild change ${this.content.a}`);\n  }\n\n  controllerIndex: TextNodeController = new TextNodeController();\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Consumer: ${this.content.a}`)\n      Button('add child')\n        .onClick(() => {\n          this.controllerIndex.addBuilderNode();\n        })\n\n      Button('remove child')\n        .onClick(() => {\n          this.controllerIndex.removeBuilderNode();\n        })\n\n      Button('dispose child')\n        .onClick(() => {\n          this.controllerIndex.disposeNode();\n        })\n\n      Button('change consumer a')\n        .onClick(() => {\n          this.content.a++;\n        })\n      Button('change consumer whole')\n        .onClick(() => {\n          this.content.a = 0;\n        })\n      NodeContainer(this.controllerIndex);\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct NestedComponentChild {\n  @Consumer() content: Ob = new Ob();\n\n  @Monitor('content')\n  consumer1Watch() {\n    console.info(`Consumer change ${this.content.a}`);\n  }\n\n  aboutToDisappear() {\n    console.info(`TestRemove aboutToDisappear`);\n  }\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Consumer under builder node: ${this.content.a}`)\n\n      Button('Consumer change content')\n        .onClick(() => {\n          this.content.a++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12组件树为provider-buildernode-provider-consumer时的同步关系",
      children: "示例12（组件树为@Provider-BuilderNode-@Provider-@Consumer时的同步关系）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(57562)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持跨BuilderNode配对@Provider和@Consumer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例演示了组件树为@Provider-BuilderNode-@Provider-@Consumer的情况时，@Consumer和@Provider之间的同步关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@ObservedV2\nclass Ob {\n  @Trace a: number = 0;\n}\n\n@Builder\nfunction buildText() {\n  Provider2();\n}\n\nlet globalBuilderNode: BuilderNode<[]> | null = null;\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.uiContext = context;\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (globalBuilderNode === null && this.uiContext) {\n      globalBuilderNode = new BuilderNode(this.uiContext);\n      globalBuilderNode.build(wrapBuilder<[]>(buildText), undefined, { enableProvideConsumeCrossing: true });\n    }\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.removeChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  disposeNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      globalBuilderNode.dispose();\n    }\n  }\n}\n\n// 组件树为@Provider-BuilderNode-@Provider-@Consumer结构\n@Entry\n@ComponentV2\nstruct Provider1 {\n  // 与@Consumer装饰的状态变量双向同步\n  @Provider() content: Ob = new Ob();\n\n  @Monitor('content')\n  providerWatch() {\n    console.info(`Provider change ${this.content.a}`);\n  }\n\n  controllerIndex: TextNodeController = new TextNodeController();\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Provider1: ${this.content.a}`)\n\n      Button('Change Provider1 a')\n        .onClick(() => {\n          this.content.a++;\n        })\n      Button('Change Provider1 Whole')\n        .onClick(() => {\n          this.content.a = 0;\n        })\n      Button('add child')\n        .onClick(() => {\n          this.controllerIndex.addBuilderNode();\n        })\n\n      Button('remove child')\n        .onClick(() => {\n          this.controllerIndex.removeBuilderNode();\n        })\n\n      Button('dispose child')\n        .onClick(() => {\n          this.controllerIndex.disposeNode();\n        })\n      NodeContainer(this.controllerIndex);\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct Provider2 {\n  @Provider() content: Ob = new Ob();\n\n  @Monitor('content')\n  consumerWatch() {\n    console.info(`Provider2 change ${this.content.a}`);\n  }\n\n  controllerIndex: TextNodeController = new TextNodeController();\n\n  build() {\n    Column() {\n      Text(`Provider2: ${this.content.a}`)\n\n      Button('change Provider2 a')\n        .onClick(() => {\n          this.content.a++;\n        })\n      Button('change Provider2 whole')\n        .onClick(() => {\n          this.content.a = 0;\n        })\n      defaultConsumer();\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct defaultConsumer {\n  @Consumer() content: Ob = new Ob();\n\n  @Monitor('content')\n  consumer1Watch() {\n    console.info(`Consumer change ${this.content.a}`);\n  }\n\n  aboutToDisappear() {\n    console.info(`TestRemove aboutToDisappear`);\n  }\n\n  build() {\n    Column() {\n      Text(`Consumer under builder node:: ${this.content.a}`)\n\n      Button('Consumer change ++')\n        .onClick(() => {\n          this.content.a++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13reactivebuildernode中鼠标事件",
      children: "示例13（ReactiveBuilderNode中鼠标事件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22版本开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了在自定义组件中截获鼠标事件并进行坐标转换的完整流程。组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#onmouse",
        children: "onMouse"
      }), "回调读取本地x/y坐标，再结合FrameNode.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getpositiontoparent12",
        children: "getPositionToParent"
      }), "()得到的偏移量，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#vp2px12",
        children: "vp2px"
      }), "将相对坐标转换为像素坐标，更新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#mouseevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "MouseEvent"
      }), "的windowX/windowY、displayX/displayY。最后通过rootNode.", (0,jsx_runtime.jsx)(_components.a, {
        href: "#postinputevent20",
        children: "postInputEvent"
      }), "将转换后的鼠标事件分发给子节点进行处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, ReactiveBuilderNode, FrameNode, PromptAction, UIContext, InputEventType } from '@kit.ArkUI';\n\n@Builder\nfunction ButtonBuilder(text: string, uiContext: UIContext) {\n  Column() {\n    Button(text)\n      .borderWidth(2)\n      .align(Alignment.Center)\n      .backgroundColor(Color.Orange)\n      .fontSize(15)\n      .width('45%')\n      .height('30%')\n      .offset({ y: 70 })\n      // 鼠标事件处理\n      .onMouse((event) => {\n        let promptAction: PromptAction = uiContext!.getPromptAction();\n        promptAction.showToast({\n          message: 'onMouse',\n          duration: 3000\n        });\n        console.info('onMouse')\n      })\n      // 触摸事件处理\n      .onTouch((event) => {\n        let promptAction: PromptAction = uiContext!.getPromptAction();\n        promptAction.showToast({\n          message: 'onTouch',\n          duration: 3000\n        });\n        console.info('onTouch')\n      })\n  }\n  .width(500)\n  .height(200)\n  .backgroundColor(Color.Gray)\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: ReactiveBuilderNode<[text: string, uiContext: UIContext]> | null = null;\n  private wrapBuilder: WrappedBuilder<[text: string, uiContext: UIContext]> = wrapBuilder(ButtonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new ReactiveBuilderNode(uiContext);\n    this.rootNode.build(this.wrapBuilder, {}, 'onMouse', uiContext)\n    return this.rootNode.getFrameNode();\n  }\n\n  postMouseEvent(event: InputEventType, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    // 获取节点相对于父组件的偏移量\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n\n    let mouseEvent = event as MouseEvent;\n    // 坐标转换：将事件坐标转换为节点坐标系\n    if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n      mouseEvent.windowX = uiContext.vp2px(offsetX + mouseEvent.x);\n      mouseEvent.windowY = uiContext.vp2px(offsetY + mouseEvent.y);\n    }\n    // 调用postInputEvent将转换后的事件传递给ReactiveBuilderNode\n    let result = this.rootNode.postInputEvent(event);\n    return result;\n  }\n\n  // 处理触摸事件的方法\n  postTouchEvent(event: InputEventType, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    // 获取节点相对于父组件的偏移量\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n\n    let touchEvent = event as TouchEvent;\n    // 转换changedTouches数组中的所有触摸点坐标\n    let changedTouchLen = touchEvent.changedTouches.length;\n    for (let i = 0; i < changedTouchLen; i++) {\n      if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n        touchEvent.changedTouches[i].windowX = uiContext.vp2px(offsetX + touchEvent.changedTouches[i].x);\n        touchEvent.changedTouches[i].windowY = uiContext.vp2px(offsetY + touchEvent.changedTouches[i].y);\n      }\n    }\n    // 转换touches数组中的所有触摸点坐标\n    let touchesLen = touchEvent.touches.length;\n    for (let i = 0; i < touchesLen; i++) {\n      if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n        touchEvent.touches[i].windowX = uiContext.vp2px(offsetX + touchEvent.touches[i].x);\n        touchEvent.touches[i].windowY = uiContext.vp2px(offsetY + touchEvent.touches[i].y);\n      }\n    }\n    // 调用postInputEvent将转换后的事件传递给ReactiveBuilderNode\n    let result = this.rootNode.postInputEvent(event);\n    return result;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Stack() {\n      NodeContainer(this.nodeController)\n        .height(300)\n        .width(500)\n      Column()\n        .width(500)\n        .height(300)\n        .margin({ top: 500 })\n        .backgroundColor(Color.Transparent)\n        // 捕获鼠标事件并传递给自定义节点\n        .onMouse((event) => {\n          if (event != undefined) {\n            this.nodeController.postMouseEvent(event, this.getUIContext());\n          }\n        })\n        // 捕获触摸事件并传递给自定义节点\n        .onTouch((event) => {\n          if (event != undefined) {\n            this.nodeController.postTouchEvent(event, this.getUIContext());\n          }\n        })\n    }.offset({ top: 180 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(472691)/* ["default"] */.A) + "",
        width: "315",
        height: "277"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例14reactivebuildernode中触摸事件",
      children: "示例14（ReactiveBuilderNode中触摸事件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22版本开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了在自定义组件中截获触摸事件并对触点坐标进行转换的完整流程。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "回调中，遍历", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TouchEvent"
      }), "的changedTouches和touches数组，对每个触点的x/y坐标加上组件偏移量并调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#vp2px12",
        children: "vp2px"
      }), "转换为像素，更新各自的windowX/windowY、displayX/displayY。最后同样通过rootNode.", (0,jsx_runtime.jsx)(_components.a, {
        href: "#postinputevent20",
        children: "postInputEvent"
      }), "将转换后的触摸事件分发给子节点处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, ReactiveBuilderNode, FrameNode, UIContext, PromptAction, InputEventType } from '@kit.ArkUI';\n\n@Builder\nfunction ButtonBuilder(text: string, uiContext: UIContext) {\n  Column() {\n    Button(text)\n      .borderWidth(2)\n      .align(Alignment.Center)\n      .backgroundColor(Color.Orange)\n      .fontSize(15)\n      .width('45%')\n      .height('30%')\n      .offset({ y: 70 })\n      // 触摸事件处理\n      .onTouch((event) => {\n        let promptAction: PromptAction = uiContext!.getPromptAction();\n        promptAction.showToast({\n          message: 'onTouch',\n          duration: 3000\n        });\n        console.info('onTouch')\n      })\n  }\n  .width(500)\n  .height(200)\n  .backgroundColor(Color.Gray)\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: ReactiveBuilderNode<[text: string, uiContext: UIContext]> | null = null;\n  private wrapBuilder: WrappedBuilder<[text: string, uiContext: UIContext]> =\n    wrapBuilder<[text: string, uiContext: UIContext]>(ButtonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new ReactiveBuilderNode(uiContext);\n    // 构建ReactiveBuilderNode，传递按钮文本和UI上下文\n    this.rootNode.build(this.wrapBuilder, {}, 'onTouch', uiContext)\n    return this.rootNode.getFrameNode();\n  }\n\n  postInputEvent(event: InputEventType, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    // 获取节点相对于父组件的偏移量\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n\n    if (event.source == SourceType.TouchScreen) {\n      let touchEvent = event as TouchEvent;\n      // 转换changedTouches数组中的所有触摸点坐标\n      let changedTouchLen = touchEvent.changedTouches.length;\n      for (let i = 0; i < changedTouchLen; i++) {\n        if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n          touchEvent.changedTouches[i].windowX = uiContext.vp2px(offsetX + touchEvent.changedTouches[i].x);\n          touchEvent.changedTouches[i].windowY = uiContext.vp2px(offsetY + touchEvent.changedTouches[i].y);\n        }\n      }\n      // 转换touches数组中的所有触摸点坐标\n      let touchesLen = touchEvent.touches.length;\n      for (let i = 0; i < touchesLen; i++) {\n        if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n          touchEvent.touches[i].windowX = uiContext.vp2px(offsetX + touchEvent.touches[i].x);\n          touchEvent.touches[i].windowY = uiContext.vp2px(offsetY + touchEvent.touches[i].y);\n        }\n      }\n    }\n\n    // 调用postInputEvent将转换后的事件传递给ReactiveBuilderNode\n    let result = this.rootNode.postInputEvent(event);\n    return result;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Stack() {\n      NodeContainer(this.nodeController)\n        .height(300)\n        .width(500)\n      Column()\n        .width(500)\n        .height(300)\n        .margin({ top: 600 })\n        .backgroundColor(Color.Transparent)\n        // 捕获触摸事件并传递给自定义节点\n        .onTouch((event) => {\n          if (event != undefined) {\n            this.nodeController.postInputEvent(event, this.getUIContext());\n          }\n        })\n    }.offset({ top: 180 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(913870)/* ["default"] */.A) + "",
        width: "322",
        height: "277"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例15reactivebuildernode中轴事件",
      children: "示例15（ReactiveBuilderNode中轴事件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22版本开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了在自定义组件中截获滚轮或触控板轴事件并进行坐标转换的完整流程。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis#onaxisevent",
        children: "onAxisEvent"
      }), "回调中，先获取事件的相对x/y坐标，再加上组件偏移量后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#vp2px12",
        children: "vp2px"
      }), "转换为像素，更新AxisEvent的windowX/windowY、displayX/displayY，最后通过rootNode.", (0,jsx_runtime.jsx)(_components.a, {
        href: "#postinputevent20",
        children: "postInputEvent"
      }), "将转换后的轴事件分发给子节点进行处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, ReactiveBuilderNode, FrameNode, UIContext, PromptAction, InputEventType } from '@kit.ArkUI';\n\n@Builder\nfunction ButtonBuilder(text: string, uiContext: UIContext) {\n  Column() {\n    Button(text)\n      .borderWidth(2)\n      .align(Alignment.Center)\n      .backgroundColor(Color.Orange)\n      .fontSize(15)\n      .width(\"45%\")\n      .height(\"30%\")\n      .offset({ y: 80 })\n      .onAxisEvent((event) => {\n        let promptAction: PromptAction = uiContext!.getPromptAction();\n        promptAction.showToast({\n          message: 'onAxisEvent', // 显示轴事件触发提示\n          duration: 3000\n        });\n        console.info('onAxisEvent')\n      })\n  }\n  .width(500)\n  .height(200)\n  .backgroundColor(Color.Gray)\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: ReactiveBuilderNode<[text: string, uiContext: UIContext]> | null = null;\n  private wrapBuilder: WrappedBuilder<[text: string, uiContext: UIContext]> =\n    wrapBuilder<[text: string, uiContext: UIContext]>(ButtonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new ReactiveBuilderNode(uiContext);\n    // 构建ReactiveBuilderNode，传递按钮文本和UI上下文\n    this.rootNode.build(this.wrapBuilder, {}, 'onAxisEvent', uiContext)\n    return this.rootNode.getFrameNode();\n  }\n\n  // 轴事件处理方法\n  postInputEvent(event: InputEventType, uiContext: UIContext): boolean {\n    if (this.rootNode == null) {\n      return false;\n    }\n    // 读取本地x、y与buildNode相对于父组件的偏移量，转换为像素坐标\n    let node: FrameNode | null = this.rootNode.getFrameNode();\n    let offsetX: number | null | undefined = node?.getPositionToParent().x;\n    let offsetY: number | null | undefined = node?.getPositionToParent().y;\n\n    let axisEvent = event as AxisEvent;\n    if (offsetX != null && offsetY != null && offsetX != undefined && offsetY != undefined) {\n      axisEvent.windowX = uiContext.vp2px(offsetX + axisEvent.x);\n      axisEvent.windowY = uiContext.vp2px(offsetY + axisEvent.y);\n    }\n    // 调用postInputEvent将转换后的事件传递给ReactiveBuilderNode\n    let result = this.rootNode.postInputEvent(event);\n    return result;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Stack() {\n      NodeContainer(this.nodeController)\n        .height(300)\n        .width(500)\n      Column()\n        .width(500)\n        .height(300)\n        .margin({ top: 600 })\n        .backgroundColor(Color.Transparent)\n        // 捕获轴事件并传递给自定义节点\n        .onAxisEvent((event) => {\n          if (event != undefined) {\n            // 调用轴事件处理方法\n            this.nodeController.postInputEvent(event, this.getUIContext());\n          }\n        })\n    }.offset({ top: 180 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(467755)/* ["default"] */.A) + "",
        width: "322",
        height: "264"
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
467755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439485-4c5a25838282ba8aa40e5d8ffce23435.gif");

},
643713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
54820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479431-71875e9a2f5cca2cdac588aec791ea09.png");

},
472691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479439-94e0fdc1772e7b6dcf4fdcabb6c38c52.gif");

},
499255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
295312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439475-e4ab8396bce9a3abf0f8d310e50437fb.png");

},
235224(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,R0lGODlh9QBqAHcAACH5BAC0AAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAA9QBqAKf+/v4BfP4Bgf0Jevv0/v6Au+obeNYKevMDfPTj/P4Kgvv9/PTb/P4UefQBgPQLeuzT/f7r/f4TeuzL8v0YhvY0iuYTeuPT8/zE/P7L/f4Cdfun2PoleNeIx/wcguq69/6o5f41ivPb9P0KdPQcfO0Kdv0niPZVp/UDe+snhNj++uwLgfMLdeskeecrkO5nsue86v0LeuPH6/tIpfW65v0bfONot/gFg+obi+1Hl+Ybe9tlp+bE8/4TdewUe9ocdNq12fozgdqoyfc3mPU6o/ZSnOVWpuYZdu2Sy/x6xv3j9f4zlO2a5/51vPXz+/UKd9kslPVIpOtoq/YcdNMTgeN0qemEufmE0v8Ug+u06/4EdPSz4/1Zt/hGm/JWmdgekPUFgd4oh+cbgeVEiuUTdeMSetQMi//G2/qSxP6ay/M0gdRTne43f+aa1PyLxusadctRk+N1q9w6kuQ7m+wVdd2K0v+bzf0+idskefQuf8t0s/MkbNogc8Y6g9UYgtub3P0VctXi7fwMduJ4tOjX7P11sdwyid5WlMZ6tfpwqfNlm+abxfOixuqb1PSW0fJgqN1/vvJoodRCgtH/9uwDdutLjNIEfOU0luX79v40mu00ec3w9P9MjtsrkN5amu8hfs2v8vw3d8s9hMxJltobdeOM2P+VxuuSwvUUbPUnbMy96/bt9fv99fXz9vb2++00dMGN4v+S0fuZ+v+84u22zO44bcxsqNpzoMVBg9tgot8HiP50vfxBhM1EistwtfkrgcxVgtoyhM5UnPNWjsZkmdd2nMZlm8hEitI8iNSbveKFruiMtduFqtZ9uvptwv16wep6tvEWbekVb9k5kdsmd79PoNYMa9U0j9RbnORNi80EbfUFbuxag7lZh61Kls3W8Pc+lulOgK8+muVu2v962P6bvdlvsNpFe8aW2P+xvuKlvN6ur9ogbOM3e9Y9ecWnwdJCtv9apNlmj86+4PYidcuz4fK62Oam2+q+xd8sdssrfsMAAAAAAAAAAAAAAAAAAAAI/wABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjdlywQKbNmx5pAiCAEyIBnj2DuvwJdGBNoQaPCvyZUCnSpzGZGsXptCHRq1izat3KtavXr2DDih1LlqvDqlRV1NQZgcEWPZw00TNAt67du3jz6t3Lt6/fv4ADCx5Ml08fbEh4JOBJc4FaqARVqCWQgEGjXobIIAjAubPnz6BDix5NurTp06hTq14t+oGOYLYmLAbguGbRnkAnM6iTKcaDzZwFsB5OvLjx48hHC++M4AEVLh8SAHh8GyfQBQQmvJAQPICA78CTi/8fT7788M3fvS9P8Uc6WqEEeOR4wmJACQXeAyDYL3oA5wEHLKffaP6RJyBqB/4HWnqihZeggp6FR1qBqCEwwIWcHXAAegpcOAIFb3QgHVSSOcHDEAFsuJqGAjQQIIYOdMbghQUe+CCCAjhAY37KfScghp45wOABA/iYYozBLSekcEDmiMCSSXbmAJEXIklgjAc8cKGEoKGQYhIJuKKCKz1hIpATDBTBAnFECgCgcCUEYCVoK6CnIIXdLdhgAHiuhmefgN7Io4yEiuaAlUJOiKSFAxLI2Q+NROCEUGYmoEc0DXCpZwD4Dbock40CSORoGh6QX5F8MqlqqnziKeGq/mH/OMB+BR7KI419hkbkZkCq99lyuNaKpJMyooqqZ4J+pgGfDewBQwRB2QaCNQ1okOunpWHLZ6IANtkfjwJqiyyjnCWKbJ4Zjqoeg515+5l/Alg4K58ystvujvX6aC+6VhpJobgDjFBCAzmMSNUCEeRQYK6eGbuqd5p2F+ug6kL4H7ACdpqnBvouLGiMnSbb5wEK4Bfnd/AKUMLJ+WnapAAcD9rugw4osKx3MTIsMWcNpEGAClQRsEELp/KIn5vCaQvsAz5wmaWpAmYJYA8NFGlvuKIlzZm1AugiwKg/fmoknyWYekADDXhman4HSCCBf0dAbbUAI/QAtXBQhwYsnwd4/8mZxsuFPADacvYL77HhagBHBO+9FEEuaybbsMx8utAEBSkC14ANmdgpQQVyQLFEEBwIoq3Gx4bMKp8faiHcAy6smafYwJJQQQUhhMDBFA+w3d0BNSyRqS9dMPhdBTZ4cOzdnx0ARQ0PuDmABUPU9+6BCDRwwgkSIJCgoN8p8AMN1cXEQAVacIxyod7BWyxnI5yQAQ4DSJAoCTy8EAPEOjABwQcYgMAfKhAgev0KNMcKgLUsUAEJaIkcH3CBm9o3uc40YA0ZgAAGMpABG+igaOmRwAw+MAcJMOAK/kmbfoyQAQK2b0PpCZwHQLEBPripB1H4QAjixD7PNIAJoNhDAf/nlKeUcaoHVSjfS5wAgyPQC2XHMlaw/pNCOMxvAHbjTAsuUAgPcAwBBsjCBCqRjUjwAAQWMIMWXLQ2Y43qQkmjEQls8AEdPGAEl4AEBxo2gE41oAQFsoAXGHCLQxwiDRkoQht9xcAkiMGEHehB/TZzAGO0kGQBQJv3kuYmEvBBNoPokAS8gYEK+MdCU7qVm47AhCxwQIXc+tETOWOhIEALJ814wNFmJhzvDWAKITjBDCiQNgTUYAgnWIIXSomCGASzC6HQTvS+YwExSoAFHoAGA4LAmRDM4BH0mxUFhPGIJZxNAjfwABFO4IIfhKANCSjCEJ5giDlQbwj4GYAHMmH/sxbswBP5VEQCJPEDB6RgAoPQwReI4B8FQAEKJLAAEVZwAAg0wwIPkOgMlJmBEByAEiaYwQm+YIkB4GAGHphBDvIwARGIYAzeOQQEcBAvHHQhCpegKGdIINIggAAGUxjAA4JJBBN4T04ZmuVmXGAwm+ygd0VbmHcO0AQeTCADMOAmBZDAgJamQwkhQMAMWnqBMwSiEDFIjw5oQAgyBIAFTWghAnYwgbpOYAwDIAMNeCADBjTBAhoIwQUY8I0E7KAODMgOCCiACAzUIAkYCMPgOsAEDuwAAjKYwAem4YNqQOAXB8BCHAwbA2dgAG2okEEHCAaBCvghAWgggQRKAYFA/yjhHRBIAQqiUFcZXGANDfAFA2TwATe44wLLAIEM8GCBYSSgAhpwAQhcCgFn6KABFJjuBWQggi1YQAE2wKwIshCCIt2gSrPUogiscwzgMMk+yFLAOOABCEkwoAAKMAIEjBEKYGyCABQIAwOQ8IkUdIAAhRCEGfQzhS0ooRLIGEQCNvAEP1wgGQb4wRlAEAMilEIMPkBDAtjwBQxkQR+pQMIMDMCITVDBZgXIACDuEAFiDKAFDHiBKBiAjgN8gruaMEICIsAUfEzBAU0gANEOcIErBEANEXABBQiAhh5IIQFG4AAuKhOEEGBACG/QgRA+sIcCLAARdFgBCbRTAQakgf8akWCAIUgBggQEAQ96SIAnGnBgYJDAFgD4ABg6QUgOvAIDz3jlJkElIB9cwDqicC+9FhYgH49BCokYbg/GXIYRHEFEISjCc3OUAghspzM1AAEDIDDkZKTAAV2IQDmqgIgzMIAPgvjFCQpQDAZ0oQJYfsJ+mlMAAqzAO1aAgA88IAMgIMALrd1BAtwghTjY47lRYAAzdvACESUhBkmIgP1iMIEOjEANCfBoAjpggTZc4DcekDAbchCBdejBHLSAwCgKoAQP9HICVbDAIxgQiUNggA1jYEAVHtAAEojADhzIwCIaIIAHMAAGBmhCBJRhA2XAAANTGMGT0lMjztTg0Tf/IQAnCgihQ2UpACTYgAiEsAEGzKIFZwDFsbVwggSEQchs0KJ2DnAzC4AAAwboBQOAwIEVcGHCG6hDG67whhN84A92mAcDhkDvOzjAS9/pgBKO0AMBJLsMAjhBBOSwgT8I4gUMcMQGhBCLK1BgDQzgRfRQwAgGcCAJDMAC8CaABFLwggFLsAADOqADEFxAPzFQBARCmgBatMERdohFBXYBAQpYCAsXiAMlsNAIHhQDAy7gBAMqcYM/JgAEasDAC/5GAxpw4MAbcATNrzCCC1VtYlo7eU+MsDYIoewBD5gDBLhRi1rQAAhHEAIGfKAACcDTBKOIABwQsII+JKAQUA1A/w22cAELCADYBWjADCDghR9Yggoe8EEGgNCCJ4QjATmg9w6ewHAFoEBEbqMAyWYAAiABhMAICSAKFBAFEDAMe8ABPkACDSBqmoACAhAD6pAAwWADF5ACEvADF4AGDYAMEXAJPpAAVkAHdqAEWIBNbgABYQAFECAPdEAFLdA9NpABgtdw2qEA2+ABWUAZKZACGdAEYDACJhABp8ABH7ABJDAA0hABQEAKV3YOHIAHPtA71jI4cdInHsAAPdEB3BEcfYJ8OYABucABJwABG3ADRXBffVAFlWEChiACMFAE1/ABBBAHX5Ae4xMIHCAAZrAICSAMHjABNBAEBgACV+ABGf8QCJLAUhHgCRbwARngBe0AAzYQA1zAAETgAg2QbByAAgNgCqugCvnAAjXAAwwwBmrABLAwANmmCHKwBiIGBG/QBQlQAHlwBQTQAWaQB0owBCQQAR1AAXBAAEiQCleWAKGQAlkgAkQQAxsACxKgTRRQMiYwAVKgACMgAHOACQSwBH7wDBAQBSFQc8cgAUmWCK+wCJsAAivQCRNmAmIgC1zQO/piQAo0AGHQVDLBA29zM3/iPRJQACJwAcXFBM1RBRNwccQweee3BZXBDKrwAt6DANXHBB/QGRxAA0B1B0BQGUBQAQEABdyVAMuAAUOgASYgBAmQABOACyyAA3V2ASb/sAsfIAYrMAAuMAFc8DYsoAaqFgFbAA4osAaVQWSE0AFigAA9gAQa1AGzUAclsAQddQQQkAT18wIQQABn0A0YYAIBkAJCsGowIA6AAAkZ0AN80gI8YAPa4B8xYAUMYAIooANWcAFKAAM5YAFasFUMkAD3UACyAAaWEA/1wGoboFs3AAZRcioHIAdK5BILwAAuADb/cVTpYQEUYAJkwHCmggqf+QBgQAUZSQLE1AAsgCUr4ADeoyE4AwY3EC8BgAOqSSRogwNm8BsfggIHQAEhIAFQUwYVEAbAqQDhQQU38DfZgwPEZCoN8AM3cAMPcAC6ECNa8ACdQAFkUAa9owC1/xkAGMUpD+ABX/AAT2ABGdkAKeACdaKcx8YnzuE6nHEDJXAE3lMCeOACOFAGMSIcI4CeJDMCnCEB7GACxOQfNwNInzECB5AEldkSkxABT7VL5vEtpqEzoRExqdEnB8KhesMu5NJD5/IuH0ogJUcJYoABrNA4LKECBAADP1BByCE5WZOhOmogOyoaLCBkOmETNZEAUmCgQnVUlKMc4HKiSpMfyXIjOOqkhfI9wxGlSSoz4GMeDnCdF9ICQEAAMMoSYAoANMAGVXMAQoInD4KjVnpAUtoZqrOkckoaTSqnCXI4fzM73cGmU3qldrqneoMsVNIAicATkxIUBHAKRIM1F//DKg6jp4ijp3/aMG3qpnW6GlojLqahNXOKoqvzMNmCLudScX1ACLQxoS+BMDtwbBojqd+jpu8zQbKKp7MKLrQaqZ0aqBRUq0hDhgrCaHnKKZL6q3iaKr3KqbIKp8H6Kbc6Gn4AAZBBEwyQjw56PY2KNRPUqK66rZ4iqo4KK+BqqcM6pxgTGo/6p/syHLhqoh0yACbABBHwGFBBABAACW9gKvgRpzZyLbbaLu9jMbWKLO4jOUpTrL5qfMWarTayrQmUrfworBDbKUeDq4IiON1RA3ewBZICGQLRCjuxAVDgplHErEXDpKeCLXEkp60KKsu6Ogmkp4DzppeaOo36sjP/o6cC0Kob+jAS6ygKMAqPxgocWxD0agOAgAX6EkP7mLRJ6ytKy0lOaiRKuy7rArVM67RWG7VYq7VPO7Vey7Rfu6dg27Veq7Ud4iMKQAc+BZBDOxBO0AoikAZFoAMWoCEeehyViiAmurCborfeehpRyqe/kyU1kAJVQAOrEKYcOwmTIBARcAFAkAZuUACUW7mWe7mYm7mau7mc27me+7mgG7qiO7qWawobQAMMAC2O0bas27op57oGgaqwO7sTUR1SQbsHQQBEhru86xC327sDQRQC0RiKC7y9S7zGixDIm7zMaxRBmrzPK7vNC7xXQRvFO73Ym73au73c273e+73gkhu+4ju+5Fu+5nu+6Ju+6ru+7Nu+7vu+8Bu/8ju/9Fu/9nu/+Ju/+ru//Nu//vu/ABzAAjzABFzABnzACJzACrzADNzADvzAEBzBEjzBFFzBFnzBGJzBGrzBHNzBHvzBIBzCIjzCJFzCJnzCKJzCKrzCLNzCLvzCMBzDMjzDNFzDNnzDOJzDOrzDPNzDPvzD5xsQACH5BAFQAAAALFAAKQBUADMApgD/APn5+gB8+vP4+vHy8unw8fDz+IK77Ojp6Tg7QFNZXz1BRWtwdENIS0hRU3FxcYOIi1tgY8PIzFJTWJOYnOTo6uHh4oG764yQk93g4khISWRoa+jr8ENDS1tbYkBAQ0lNUK2xtDk6O+Pi6KSqq15jaGFlaFlaXWhrccnJy5iZm87R1crO0JGRlXd4em92fIiJi32BhYmNkZugojc8Qtnd4Nna3ZCVmTI5PcHExr7CxrGyuFFRU3p5eoKGinR7gaGipMLGybe8v9HV2ZWZnJ6kqPb49vj3+V5iZVZbYaiqrauvsbCytXl8gczO0NPY3H+EiIWJkO/09ri6uLG2uUJJTaKhqYCDhk5TWNPS0Nba3Lq+wT5CSHBzepmdoSwwM2Ribmprb5GPnCQpLYmKjG94ejU1NTk4Pt7i5VBPVjU2OqensZWYmufr8Oru70A+SwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/gACCg4SFhocCiYqLjI2OAoeRkpOUk4+XmImVm5ydABegoRcHpKWmp6WhnqushQGvsLGys7QBrbeeta+Suri+nLUEPTwIsCwnGiBKtL/Nk7QkDS40Uq8GDjIFWw01ss7fh7RkWUZmbq9TGgEEAQ893uDxALoBFTjFAS0osFZpBvDyvtGjUeBVDAawdoD4FyugQ0IBBiQoGAACwldMGsB6yHFQRBEULcIisXBXR44RE7ALwMRBxABNNmw8+fCViJUBNAAJsGKBjZk0A667CSuHBgcNKDQMKrRWBYpAmYILcESQravMpMajN6smV5PhakH8uhGsoaVWu3okaytSr7Vs/6O6Qps17ddJCH4ayIJ2XtxXVd2+soAAboEUZv3GigA1gJIHkm48COCER99YFZCsMIYk1pQrbcMGgNEDroQEiWcl4BBLhQddKianOEEWyQ1YLUTkgOVh91cYMGat+DAg9NwACyq0pg0LAb4AsQPMjuWcYSwmll+ZmGDiFYIO+KrDYsehGHBYNSoQkOCAneAAOFjDoiAzQAYHCRK8DkAEoQQF3kWwAA4eWDDLB90E0EEQHfyjwwkGFPBAAh1osFk7LSwAQg0wyPAKCRN8AMINCyRmF3IoMNCECw8o0BkBCgDBQQU/dMHfCwH8V5wJPowwAgQRzPKACgHs8AMBOAwRAP8GGAzgAwoZFACEBgYMYIICFhQkA2gSgJBCASzg595ZsCxwQxEzzKACA0EG0QALQwyxBA0c9BdAEAoMMMICBQ1gRAM/xQJEGAGgsANMUQQwAWtcXBiACSQEsAEGsEBAKQRdDFBcCB+YaJcaFBVH3wBCjKGAAlgk4UEbdkowQY5YFPdKCSHIgsBqHWQwABoJaJHEAFLQUFxxUMQwQARCwCIDBAMw0OQ/EnTq6TwAiGDgSxSUEEAOfFZZzQAz7MNCBAZksICmrzQgwS7WgCHGqwMU0MELzAbAhRaybkDBALRWCkEAUPyQUIPT2nTtK9kGUEBSr+hARQBebDBAEEEGoAD/pUsCyO4ra7yxxCsDbJCADq+4cBEVDSi3AQmyRkGpDg08EcAIEyRwRMEBfPBcADNonMEJDkQwwWYU+AfgAE9E4MCpgWIVgA1njABLCOe+UsELDSi9rqS1viJDDBFRsIAHE7TQwZiicYWABbLKOosFGQRgBFi6uF1cBhVYV0txBCQ4rUeK/XXXiYL/Zdczhb91XOJcnagVXMY1Q7dcQQEkj+UOCT5VX5LHQoAPE+CUggdL11ocFQ5oEIETlLfy9y2xKDRh2xPcUIEQH8TNQhVb/Lhf5I8j/ooPrH/BGgFLuMQOA8ZG8YKmBixwbfDAjDfzRAYxwJAVGpVQBCwmtPA6oPVrBU5QAAY84MLUDhSQxPevPPAv8OQLjwNFL0DxkhANDPA+LC54B/3q9x7sBSAGOPoQCPi1r4igAGMErF4AsDcAEmgsACYLQBkE9ooFIGaAETyOARe2jCEsQGY6qIKuZsCDlYRwE0PBSTp48AE2vIIAGVKABnwDwhdCznMWmBt1LIATH1biZje0nlg4Z8TFbaxx4/MhuxRDrY1ZBXDgCAQAOw==");

},
522514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799782-46835e27effdd15bcd61622a96a7dcc0.gif");

},
746465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
289917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959432-485736b65d2aeb2bcddf308dc27bc8a5.gif");

},
146943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
578627(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
226072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
426243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
474956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
423146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479437-c5c249388baef78fecda8251330ef097.gif");

},
435831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439475-e4ab8396bce9a3abf0f8d310e50437fb.png");

},
869900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439483-be7c7012eb6c60abbbf46c2806b9d56a.gif");

},
568558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479435-845c4f722eb9119e07c12aea3bd3e5ce.gif");

},
313322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959436-d23077b7bff7761fcd1034ed3baf3a73.gif");

},
133249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479433-667ec5e2c0cc94462026417a44683978.gif");

},
867679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
386329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439479-191bb79e182dd840c3b6ceb41417d96d.gif");

},
147086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
341498(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
251326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799788-a605bb144421269eb4f4a36833749388.gif");

},
647406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
241736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
443819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
969698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
285879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959438-9d9ce606802c7cec2cad4cad164856d0.gif");

},
957192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
316099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959434-815bdb1dec4b9955b0fb2527113dbd6b.gif");

},
671376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799784-cf820d41e21e8a7e068592b436149bca.gif");

},
913870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799790-120d29aee94eaf989eb4de4aec8a6997.gif");

},
131640(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
855130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
57562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
714081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
844413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799786-d46017e54cfed93a904c3973081aa74c.gif");

},
887364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
748247(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959430-222eeedfee35f4ce8dca3989abacfc46.gif");

},
683846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439475-e4ab8396bce9a3abf0f8d310e50437fb.png");

},
329413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
455315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439481-d2a8bc3f5234f8b65abcab609de545bf.gif");

},
761130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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