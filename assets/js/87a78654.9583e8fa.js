"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["245854"], {
768418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_faqs_cannkit_faqs_5_cannkit_faqs_5_md_87a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-faqs-cannkit-faqs-5-cannkit-faqs-5-md-87a.json
var site_docs_cann_kit_guide_cannkit_faqs_cannkit_faqs_5_cannkit_faqs_5_md_87a_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-faqs/cannkit-faqs-5/cannkit-faqs-5","title":"算法在设计模型时，如何确认哪些算子在CANN上性能较优？","description":"开发者可参考Model Zoo中的CANN算子性能指导，根据需要选择性能较优的算子。","source":"@site/docs/cann-kit-guide/cannkit-faqs/cannkit-faqs-5/cannkit-faqs-5.md","sourceDirName":"cann-kit-guide/cannkit-faqs/cannkit-faqs-5","slug":"/cann-kit-guide/cannkit-faqs/cannkit-faqs-5/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-faqs/cannkit-faqs-5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"算法在设计模型时，如何确认哪些算子在CANN上性能较优？","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-faqs-5","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何处理OMG离线模型输出算子类型错误？","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-faqs/cannkit-faqs-4/"},"next":{"title":"版本获取方法","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-appendixes/cannkit-obtaining-the-version/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-faqs/cannkit-faqs-5/cannkit-faqs-5.md


const frontMatter = {
	title: '算法在设计模型时，如何确认哪些算子在CANN上性能较优？',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-faqs-5',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '算法在设计模型时，如何确认哪些算子在CANN上性能较优？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "算法在设计模型时如何确认哪些算子在cann上性能较优",
        children: "算法在设计模型时，如何确认哪些算子在CANN上性能较优？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考Model Zoo中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo",
        children: "CANN算子性能指导"
      }), "，根据需要选择性能较优的算子。"]
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