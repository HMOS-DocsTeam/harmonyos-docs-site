"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["432203"], {
275074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_node_arkts_user_defined_node_md_628_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-nodes-arkts-user-defined-node-arkts-user-defined-node-md-628.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_node_arkts_user_defined_node_md_628_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node/arkts-user-defined-node","title":"自定义节点概述","description":"自定义节点是ArkUI通过接口提供的底层实体节点，具备部分基础能力，能够与系统组件混合显示。自定义节点的挂载与显示依赖于自定义占位节点。当前，自定义节点涵盖三类对象：FrameNode、RenderNode和BuilderNode。FrameNode表示单个自定义组件节点，RenderNode表示为更轻量级的渲染节点，而BuilderNode对象赋予了创建、更新系统组件及其组件树的能力。","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node/arkts-user-defined-node.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义节点概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-node","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义组合","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition/"},"next":{"title":"自定义占位节点","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node/arkts-user-defined-node.md


const frontMatter = {
	title: '自定义节点概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-node',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义节点概述';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "自定义占位节点",
  "id": "自定义占位节点",
  "level": 2
}, {
  "value": "自定义组件节点 (FrameNode)",
  "id": "自定义组件节点-framenode",
  "level": 2
}, {
  "value": "自定义渲染节点 (RenderNode)",
  "id": "自定义渲染节点-rendernode",
  "level": 2
}, {
  "value": "自定义声明式节点 (BuilderNode)",
  "id": "自定义声明式节点-buildernode",
  "level": 2
}, {
  "value": "设置自定义节点跨语言属性",
  "id": "设置自定义节点跨语言属性",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义节点概述",
        children: "自定义节点概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义节点是ArkUI通过接口提供的底层实体节点，具备部分基础能力，能够与系统组件混合显示。自定义节点的挂载与显示依赖于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder",
        children: "自定义占位节点"
      }), "。当前，自定义节点涵盖三类对象：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "。FrameNode表示单个自定义组件节点，RenderNode表示为更轻量级的渲染节点，而BuilderNode对象赋予了创建、更新系统组件及其组件树的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(210203)/* ["default"] */.A) + "",
        width: "1235",
        height: "867"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统组件：组件是UI的必要元素，形成了在界面中的样式，由ArkUI直接提供的称为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-development-overview",
          children: "系统组件"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实体节点：系统内部维护了一棵组件树，用于处理组件的属性设置、生命周期等逻辑。该组件树上的节点即为实体节点。开发者通过TS获取或创建的自定义节点，其本质是一个前端对象，持有对应实体节点的引用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义节点：使用ArkUI提供的接口，以命令式创建的节点。包括自定义组件节点（FrameNode）、自定义渲染节点（RenderNode）、自定义声明式节点（BuilderNode）、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
          children: "ComponentContent"
        }), "等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "节点唯一父节点"
          })
        }), "：使用自定义节点相关能力时，需要保证同一时刻同一个节点有且仅有一个父节点。同一个节点作为不同节点的子节点存在时，可能出现事件响应异常、内容显示异常、位置显示异常、稳定性问题等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "避免网状或环形结构"
          })
        }), "：使用自定义节点相关能力时，请避免将节点树挂载成网状或者环形。例如，父子节点相互引用会导致节点树成环形，一个子节点有多个父节点会导致节点树成网状。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义占位节点",
      children: "自定义占位节点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义占位节点作为系统组件可以在组件树上为自定义节点提供挂载的点。通过自定义占位节点，可以将自定义节点挂载在占位节点上，实现自定义节点与系统组件的混合显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义组件节点-framenode",
      children: "自定义组件节点 (FrameNode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FrameNode表示组件的实体节点，具体可以分为两大类能力：完全自定义节点的能力以及系统组件节点代理的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["完全自定义节点：提供完整的自定义能力，包括自定义测量、布局以及绘制，支持节点的动态增、删，设置通用属性，设置事件回调。适用于不自带渲染引擎，需要依赖系统的布局、事件、动画、渲染等能力的场景。通过FrameNode的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#constructor",
          children: "构造函数"
        }), "创建的节点或者通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#typenode12",
          children: "typeNode"
        }), "的节点创建方法（例如：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#createnodetext12",
          children: "createNode('Text')"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#createnodecolumn12",
          children: "createNode('Column')"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#createnoderow12",
          children: "createNode('Row')"
        }), "等）创建出来的节点属于完全自定义节点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统组件代理节点：提供系统组件的代理能力，提供遍历节点树的能力，通过组件树上的FrameNode可以遍历整个组件树，并通过节点访问组件的信息或者注册额外的事件监听回调。适用于结合无感监听的接口实现打点、广告SDK、中台DFX等业务。通过FrameNode相关的查询接口（例如：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getchild12",
          children: "getChild"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getparent12",
          children: "getParent"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getnextsibling12",
          children: "getNextSibling"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getattachedframenodebyid12",
          children: "getAttachedFrameNodeById"
        }), "等）返回的FrameNode对象，若不属于完全自定义节点则为系统组件代理节点。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义渲染节点-rendernode",
      children: "自定义渲染节点 (RenderNode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RenderNode作为轻量级的渲染节点，仅提供了设置渲染相关属性、自定义绘制内容以及节点操作的能力。适用于仅依赖系统渲染与动画能力的自定义场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义声明式节点-buildernode",
      children: "自定义声明式节点 (BuilderNode)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BuilderNode通过无状态的UI方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E5%85%A8%E5%B1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
        children: "全局自定义构建函数"
      }), "@Builder生成组件树，组件树内的节点为系统组件。适用于需要基于系统能力创建特定组件树与其他自定义节点进行混合显示的场景。相比较系统组件，BuilderNode具备预创建的优势，可以控制开始创建的时间。由于持有实体节点对象，因此可以同步实现节点的复用，通过占位节点结合FrameNode、RenderNode的节点操作能力控制显示位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置自定义节点跨语言属性",
      children: "设置自定义节点跨语言属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI支持在前端使用ArkTS语言创建命令式节点，即FrameNode节点，也可以在Native侧使用C语言创建命令式节点，并且可以混合使用两类节点构建页面。针对上述场景，ArkUI提供命令式节点跨语言属性设置功能，即使用ArkTS语言创建的命令式节点，可以在Native侧进行属性设置。使用C语言创建的节点，可以在ArkTS侧进行属性设置。"
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
210203(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478005-3891fb106be050940e4d18dda8b9b87b.png");

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