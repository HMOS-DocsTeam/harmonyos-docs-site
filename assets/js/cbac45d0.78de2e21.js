"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["775846"], {
517921(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_struct_capi_arkui_nativemodule_arkui_draganddropinfo_capi_arkui_nativemodule_arkui_draganddropinfo_md_cba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-struct-capi-arkui-nativemodule-arkui-draganddropinfo-capi-arkui-nativemodule-arkui-draganddropinfo-md-cba.json
var site_docs_ref_arkui_api_arkui_c_arkui_struct_capi_arkui_nativemodule_arkui_draganddropinfo_capi_arkui_nativemodule_arkui_draganddropinfo_md_cba_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-draganddropinfo/capi-arkui-nativemodule-arkui-draganddropinfo","title":"ArkUI_DragAndDropInfo","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-draganddropinfo/capi-arkui-nativemodule-arkui-draganddropinfo.md","sourceDirName":"arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-draganddropinfo","slug":"/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-draganddropinfo/capi-arkui-nativemodule-arkui-draganddropinfo","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-draganddropinfo/capi-arkui-nativemodule-arkui-draganddropinfo","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"ArkUI_DragAndDropInfo","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-draganddropinfo","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-arkui-nativemodule-arkui-draganddropinfo"},"sidebar":"ref","previous":{"title":"ArkUI_DragAction","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-dragaction/capi-arkui-nativemodule-arkui-dragaction"},"next":{"title":"ArkUI_DrawableDescriptor","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-drawabledescriptor/capi-arkui-nativemodule-arkui-drawabledescriptor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-draganddropinfo/capi-arkui-nativemodule-arkui-draganddropinfo.md


const frontMatter = {
	title: 'ArkUI_DragAndDropInfo',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-draganddropinfo',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-arkui-nativemodule-arkui-draganddropinfo'
};
const contentTitle = 'ArkUI_DragAndDropInfo';

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
        id: "arkui_draganddropinfo",
        children: "ArkUI_DragAndDropInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct ArkUI_DragAndDropInfo ArkUI_DragAndDropInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动发起拖拽后，通过拖拽状态监听返回的系统拖拽相关数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule",
        children: "ArkUI_NativeModule"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-drag-and-drop-h/capi-drag-and-drop-h",
        children: "drag_and_drop.h"
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