"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["106415"], {
56182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_struct_capi_arkui_nativemodule_arkui_touchtestinfo_capi_arkui_nativemodule_arkui_touchtestinfo_md_05c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-struct-capi-arkui-nativemodule-arkui-touchtestinfo-capi-arkui-nativemodule-arkui-touchtestinfo-md-05c.json
var site_docs_ref_arkui_api_arkui_c_arkui_struct_capi_arkui_nativemodule_arkui_touchtestinfo_capi_arkui_nativemodule_arkui_touchtestinfo_md_05c_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo/capi-arkui-nativemodule-arkui-touchtestinfo","title":"ArkUI_TouchTestInfo","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo/capi-arkui-nativemodule-arkui-touchtestinfo.md","sourceDirName":"arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo","slug":"/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo/capi-arkui-nativemodule-arkui-touchtestinfo","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo/capi-arkui-nativemodule-arkui-touchtestinfo","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":170,"frontMatter":{"title":"ArkUI_TouchTestInfo","sidebar_position":170,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-touchtestinfo","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-arkui-nativemodule-arkui-touchtestinfo"},"sidebar":"ref","previous":{"title":"ArkUI_GridLayoutOptions","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-gridlayoutoptions/capi-arkui-nativemodule-arkui-gridlayoutoptions"},"next":{"title":"ArkUI_TouchTestInfoItem","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo/capi-arkui-nativemodule-arkui-touchtestinfo.md


const frontMatter = {
	title: 'ArkUI_TouchTestInfo',
	sidebar_position: 170,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-touchtestinfo',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-arkui-nativemodule-arkui-touchtestinfo'
};
const contentTitle = 'ArkUI_TouchTestInfo';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkui_touchtestinfo",
        children: "ArkUI_TouchTestInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct ArkUI_TouchTestInfo ArkUI_TouchTestInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义触摸测试信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当用户通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent",
        children: "registerNodeEvent"
      }), "注册了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_CHILD_TOUCH_TEST"
      }), "事件时，才能接收到此事件。触摸测试信息包含触摸测试策略、命中测试过程中需要作用的子组件ID和触摸测试信息项的列表。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-arkui-eventmodule/capi-arkui-eventmodule",
        children: "ArkUI_EventModule"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h",
        children: "ui_input_event.h"
      })]
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