"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["533208"], {
806217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_910_b_kirinx_90_cannkit_basic_api_cannkit_basic_superkernel_cannkit_basic_superkernel_md_da5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascend-kirin-compatibility-cannkit-ascend-910-b-kirinx-90-cannkit-basic-api-cannkit-basic-superkernel-cannkit-basic-superkernel-md-da5.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_910_b_kirinx_90_cannkit_basic_api_cannkit_basic_superkernel_cannkit_basic_superkernel_md_da5_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-superkernel/cannkit-basic-superkernel","title":"SuperKernel","description":"KirinX90/Kirin9030处理器不支持SuperKernel，所以如下接口在Kirin平台不生效。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-superkernel/cannkit-basic-superkernel.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-superkernel","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-superkernel/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-superkernel/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"SuperKernel","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-superkernel","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Kernel Tiling","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-kernel-tiling/"},"next":{"title":"高阶API迁移指导","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-adv-api/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-superkernel/cannkit-basic-superkernel.md


const frontMatter = {
	title: 'SuperKernel',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-superkernel',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'SuperKernel';

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
        id: "superkernel",
        children: "SuperKernel"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90/Kirin9030处理器不支持SuperKernel，所以如下接口在Kirin平台不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " KirinX90/Kirin9030任务间同步API"]
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
            children: "SetNextTaskStart、WaitPreTaskEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不生效。  KirinX90/Kirin9030不支持SuperKernel特性，所以任务间同步API不生效。算子代码无需进行修改。"
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