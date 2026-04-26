"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["682891"], {
512808(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_kirin_map_cannkit_ascend_kirin_map_md_7fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascend-kirin-compatibility-cannkit-ascend-kirin-map-cannkit-ascend-kirin-map-md-7fb.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_kirin_map_cannkit_ascend_kirin_map_md_7fb_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend-kirin-map/cannkit-ascend-kirin-map","title":"昇腾和麒麟同代AI处理器的映射关系","description":"本指南描述昇腾到“同代”麒麟AI处理器的兼容性迁移指导。“同代”映射关系参见表1 昇腾与“同代”麒麟AI处理器的映射关系。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend-kirin-map/cannkit-ascend-kirin-map.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend-kirin-map","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend-kirin-map/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend-kirin-map/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"昇腾和麒麟同代AI处理器的映射关系","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ascend-kirin-map","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"兼容性说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-compatibility-rule/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-migration-guidance-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend-kirin-map/cannkit-ascend-kirin-map.md


const frontMatter = {
	title: '昇腾和麒麟同代AI处理器的映射关系',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ascend-kirin-map',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '昇腾和麒麟同代AI处理器的映射关系';

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
        id: "昇腾和麒麟同代ai处理器的映射关系",
        children: "昇腾和麒麟同代AI处理器的映射关系"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南描述昇腾到“同代”麒麟AI处理器的兼容性迁移指导。“同代”映射关系参见表1 昇腾与“同代”麒麟AI处理器的映射关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 昇腾与“同代”麒麟AI处理器的映射关系"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "昇腾"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "麒麟"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ascend910B、Ascend910C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KirinX90、Kirin9030"
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