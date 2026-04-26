"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["481217"], {
536291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_faq_store_faq_11_store_faq_11_md_c0c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-faq-store-faq-11-store-faq-11-md-c0c.json
var site_docs_store_kit_guide_store_faq_store_faq_11_store_faq_11_md_c0c_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-faq/store-faq-11/store-faq-11","title":"AppGallery Connect商品管理页面，商品价格编辑界面的默认价格表示什么意思？","description":"该默认价格在AppGallery Connect页面其他地方涉及商品价格展示时使用。","source":"@site/docs/store-kit-guide/store-faq/store-faq-11/store-faq-11.md","sourceDirName":"store-kit-guide/store-faq/store-faq-11","slug":"/store-kit-guide/store-faq/store-faq-11/","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-11/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"AppGallery Connect商品管理页面，商品价格编辑界面的默认价格表示什么意思？","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-faq-11","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AppGallery Connect获取的IAP公钥最大长度是多少？便于用户存储设置的最大长度是多少？","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-10/"},"next":{"title":"在AppGallery Connect中单独修改商品在某个地区的价格，以后汇率变动，是否会影响应用内的商品价格？","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-12/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-faq/store-faq-11/store-faq-11.md


const frontMatter = {
	title: 'AppGallery Connect商品管理页面，商品价格编辑界面的默认价格表示什么意思？',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-faq-11',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'AppGallery Connect商品管理页面，商品价格编辑界面的默认价格表示什么意思？';

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
        id: "appgallery-connect商品管理页面商品价格编辑界面的默认价格表示什么意思",
        children: "AppGallery Connect商品管理页面，商品价格编辑界面的默认价格表示什么意思？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该默认价格在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "页面其他地方涉及商品价格展示时使用。"]
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