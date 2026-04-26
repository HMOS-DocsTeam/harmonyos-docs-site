"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["480310"], {
246856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_faq_iap_faq_5_iap_faq_5_md_6f1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-faq-iap-faq-5-iap-faq-5-md-6f1.json
var site_docs_iap_kit_guide_iap_faq_iap_faq_5_iap_faq_5_md_6f1_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-faq/iap-faq-5/iap-faq-5","title":"在AppGallery Connect中单独修改商品在某个地区的价格，以后汇率变动，是否会影响应用内的商品价格？","description":"不会，除非开发者自己修改。","source":"@site/docs/iap-kit-guide/iap-faq/iap-faq-5/iap-faq-5.md","sourceDirName":"iap-kit-guide/iap-faq/iap-faq-5","slug":"/iap-kit-guide/iap-faq/iap-faq-5/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"在AppGallery Connect中单独修改商品在某个地区的价格，以后汇率变动，是否会影响应用内的商品价格？","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-5","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AppGallery Connect商品管理页面，商品价格编辑界面的默认价格表示什么意思？","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-4/"},"next":{"title":"AppGallery Connect商品管理页面中，价格展示是否做了数字调整？比如小数点第二位6/9等调整？","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-6/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-faq/iap-faq-5/iap-faq-5.md


const frontMatter = {
	title: '在AppGallery Connect中单独修改商品在某个地区的价格，以后汇率变动，是否会影响应用内的商品价格？',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-5',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '在AppGallery Connect中单独修改商品在某个地区的价格，以后汇率变动，是否会影响应用内的商品价格？';

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
        id: "在appgallery-connect中单独修改商品在某个地区的价格以后汇率变动是否会影响应用内的商品价格",
        children: "在AppGallery Connect中单独修改商品在某个地区的价格，以后汇率变动，是否会影响应用内的商品价格？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不会，除非开发者自己修改。"
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