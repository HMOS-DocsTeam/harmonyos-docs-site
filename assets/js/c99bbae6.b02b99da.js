"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["141329"], {
166293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_910_b_kirinx_90_cannkit_basic_api_cannkit_basic_atomic_cannkit_basic_atomic_md_c99_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascend-kirin-compatibility-cannkit-ascend-910-b-kirinx-90-cannkit-basic-api-cannkit-basic-atomic-cannkit-basic-atomic-md-c99.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_910_b_kirinx_90_cannkit_basic_api_cannkit_basic_atomic_cannkit_basic_atomic_md_c99_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-atomic/cannkit-basic-atomic","title":"原子操作","description":"KirinX90/Kirin9030处理器不支持Atomic特性，具体包含如下接口。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-atomic/cannkit-basic-atomic.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-atomic","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-atomic/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-atomic/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"原子操作","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-atomic","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据类型","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-datatype/"},"next":{"title":"同步控制","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-sync/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-atomic/cannkit-basic-atomic.md


const frontMatter = {
	title: '原子操作',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-atomic',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '原子操作';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
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
        id: "原子操作",
        children: "原子操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90/Kirin9030处理器不支持Atomic特性，具体包含如下接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 原子操作兼容说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "基础API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "兼容说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetAtomicAdd、SetAtomicType、SetAtomicNone、SetAtomicMax、SetAtomicMin、SetStoreAtomicConfig、GetStoreAtomicConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。  KirinX90/Kirin9030处理器不支持开发者在GM完成Atomic操作。开发者需要在NPU片上的Buffer完成计算后，再使用基础API DataCopy将计算结果从NPU片上的Buffer搬到GM。"
          })]
        })
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