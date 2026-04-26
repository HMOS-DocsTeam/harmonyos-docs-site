"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["687098"], {
145034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_custom_placeholder_comp_ts_basic_components_nodecontainer_ts_basic_components_nodecontainer_md_f0f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-custom-placeholder-comp-ts-basic-components-nodecontainer-ts-basic-components-nodecontainer-md-f0f.json
var site_docs_ref_arkui_api_arkui_declarative_comp_custom_placeholder_comp_ts_basic_components_nodecontainer_ts_basic_components_nodecontainer_md_f0f_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer","title":"NodeContainer","description":"基础组件，用于挂载自定义节点（如FrameNode或BuilderNode），并通过NodeController动态控制节点的上树和下树。组件不支持尾随添加子节点，接受一个NodeController实例接口，需与NodeController组合使用。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer.md","sourceDirName":"arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer","slug":"/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NodeContainer","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-nodecontainer","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-nodecontainer"},"sidebar":"ref","previous":{"title":"NavPushPathHelper","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-navpushpathhelper/ohos-atomicservice-navpushpathhelper"},"next":{"title":"ContentSlot","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer.md


const frontMatter = {
	title: 'NodeContainer',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-nodecontainer',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-nodecontainer'
};
const contentTitle = 'NodeContainer';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "NodeContainer",
  "id": "nodecontainer-1",
  "level": 3
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "nodecontainer",
        children: "NodeContainer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基础组件，用于挂载自定义节点（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "），并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "动态控制节点的上树和下树。组件不支持尾随添加子节点，接受一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "实例接口，需与NodeController组合使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(972574)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件下仅支持挂载自定义节点", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "或者是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "中获取的根节点FrameNode。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持挂载查询获得的系统组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#ismodifiable12",
        children: "代理节点"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前不支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier",
        children: "动态属性设置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件下的节点树构建时会使用UI实例", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "，实例切换时可能会因实例不匹配，导致所绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller#makenode",
        children: "makeNode"
      }), "回调方法的入参为undefined，因此该组件当前不支持跨实例的节点复用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件未销毁时，不会主动触发挂载节点的下树。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodecontainer-1",
      children: "NodeContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NodeContainer(controller: NodeController)"
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
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
              children: "NodeController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NodeController用于控制NodeContainer中的节点的上树和下树，反映NodeContainer容器的生命周期。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过NodeController挂载BuilderNode节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\ndeclare class Params {\n  text: string\n}\n\n@Builder\nfunction buttonBuilder(params: Params) {\n  Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceEvenly }) {\n    Text(params.text)\n      .fontSize(12)\n    Button(`This is a Button`, { type: ButtonType.Normal, stateEffect: true })\n      .fontSize(12)\n      .borderRadius(8)\n      .backgroundColor(0x317aff)\n  }\n  .height(100)\n  .width(200)\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(buttonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.rootNode === null) {\n      this.rootNode = new BuilderNode(uiContext);\n      this.rootNode.build(this.wrapBuilder, { text: \"This is a Text\" })\n    }\n    return this.rootNode.getFrameNode();\n  }\n}\n\n\n@Entry\n@Component\nstruct Index {\n  private baseNode: MyNodeController = new MyNodeController()\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start, justifyContent: FlexAlign.SpaceEvenly }) {\n      Text(\"This is a NodeContainer contains a text and a button \")\n        .fontSize(9)\n        .fontColor(0xCCCCCC)\n      NodeContainer(this.baseNode)\n        .borderWidth(1)\n        .onClick(() => {\n          console.info(\"click event\");\n        })\n    }\n    .padding({ left: 35, right: 35, top: 35 })\n    .height(200)\n    .width(300)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(131429)/* ["default"] */.A) + "",
        width: "393",
        height: "282"
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
131429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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5Kj4Q/69NR/lBXYUAFFFFABRRRQAUUUUAFFFFABRRRQBzfj/AEu91vwHrOm6dD515cW5SKPcF3HI4yxAH4mqf/CT+LP+ifX3/gytP/i67CigDj/+En8Wf9E+vv8AwZWn/wAXR/wk/iz/AKJ9ff8AgytP/i67CigDj/8AhJ/Fn/RPr7/wZWn/AMXR/wAJP4s/6J9ff+DK0/8Ai67CigDj/wDhJ/Fn/RPr7/wZWn/xdH/CT+LP+ifX3/gytP8A4uuwooA4/wD4SfxZ/wBE+vv/AAZWn/xdH/CT+LP+ifX3/gytP/i67CigDj/+En8Wf9E+vv8AwZWn/wAXR/wk/iz/AKJ9ff8AgytP/i67CigDj/8AhJ/Fn/RPr7/wZWn/AMXR/wAJP4s/6J9ff+DK0/8Ai67CigDj/wDhJ/Fn/RPr7/wZWn/xdH/CT+LP+ifX3/gytP8A4uuwooA4/wD4SfxZ/wBE+vv/AAZWn/xdH/CT+LP+ifX3/gytP/i67CigDj/+En8Wf9E+vv8AwZWn/wAXR/wk/iz/AKJ9ff8AgytP/i67CigDj/8AhJ/Fn/RPr7/wZWn/AMXR/wAJP4s/6J9ff+DK0/8Ai67CigDj/wDhJ/Fn/RPr7/wZWn/xdH/CT+LP+ifX3/gytP8A4uuwooA4/wD4SfxZ/wBE+vv/AAZWn/xdH/CT+LP+ifX3/gytP/i67CigDj/+En8Wf9E+vv8AwZWn/wAXR/wk/iz/AKJ9ff8AgytP/i67CigDj/8AhJ/Fn/RPr7/wZWn/AMXR/wAJP4s/6J9ff+DK0/8Ai67CigDj/wDhJ/Fn/RPr7/wZWn/xdH/CT+LP+ifX3/gytP8A4uuwooA4/wD4SfxZ/wBE+vv/AAZWn/xdH/CT+LP+ifX3/gytP/i67CigDj/+En8Wf9E+vv8AwZWn/wAXR/wk/iz/AKJ9ff8AgytP/i67CigDj/8AhJ/Fn/RPr7/wZWn/AMXR/wAJP4s/6J9ff+DK0/8Ai67CigDg7ceItb8eaHqV94Yn0qz0+3u0eSW8gl3GUR7QAjE/wHt3rvKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==");

},
972574(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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