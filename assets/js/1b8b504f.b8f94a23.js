"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["285642"], {
197315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_pen_kit_guide_pen_faq_pen_faq_2_pen_faq_2_md_1b8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-pen-kit-guide-pen-faq-pen-faq-2-pen-faq-2-md-1b8.json
var site_docs_system_hardware_pen_kit_guide_pen_faq_pen_faq_2_pen_faq_2_md_1b8_namespaceObject = JSON.parse('{"id":"system-hardware/pen-kit-guide/pen-faq/pen-faq-2/pen-faq-2","title":"Pen Kit手写套件是否支持自定义笔宽？","description":"Pen Kit当前支持设置5档笔宽范围，取值由华为笔宽算法决定，暂不支持自定义其他笔宽值。","source":"@site/docs/system-hardware/pen-kit-guide/pen-faq/pen-faq-2/pen-faq-2.md","sourceDirName":"system-hardware/pen-kit-guide/pen-faq/pen-faq-2","slug":"/system-hardware/pen-kit-guide/pen-faq/pen-faq-2/","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-faq/pen-faq-2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Pen Kit手写套件是否支持自定义笔宽？","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-faq-2","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Pen Kit手写套件是否支持自定义笔刷？","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-faq/pen-faq-1/"},"next":{"title":"Pen Kit手写套件是否支持自定义颜色？","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-faq/pen-faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/pen-kit-guide/pen-faq/pen-faq-2/pen-faq-2.md


const frontMatter = {
	title: 'Pen Kit手写套件是否支持自定义笔宽？',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-faq-2',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = 'Pen Kit手写套件是否支持自定义笔宽？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "pen-kit手写套件是否支持自定义笔宽",
        children: "Pen Kit手写套件是否支持自定义笔宽？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pen Kit当前支持设置5档笔宽范围，取值由华为笔宽算法决定，暂不支持自定义其他笔宽值。"
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