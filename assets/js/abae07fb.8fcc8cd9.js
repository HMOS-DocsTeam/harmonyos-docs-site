"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["478572"], {
29140(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_3_payment_faq_3_md_aba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-3-payment-faq-3-md-aba.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_3_payment_faq_3_md_aba_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-3/payment-faq-3","title":"GET请求的bodySign是对谁签名得到的？","description":"GET请求需要对path url进行签名，例如查询支付订单的待签名内容是：“/api/v2/aggr/transactions/orders/\\\\{sysTransOrderNo\\\\}”。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-3/payment-faq-3.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-3","slug":"/payment-kit-guide/payment-faq/payment-faq-3/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-3/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"GET请求的bodySign是对谁签名得到的？","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-3","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Payment Kit的签名公私钥怎么获取？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-2/"},"next":{"title":"拉起收银台无反应或报错？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-5/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-3/payment-faq-3.md


const frontMatter = {
	title: 'GET请求的bodySign是对谁签名得到的？',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-3',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'GET请求的bodySign是对谁签名得到的？';

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
        id: "get请求的bodysign是对谁签名得到的",
        children: "GET请求的bodySign是对谁签名得到的？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GET请求需要对path url进行签名，例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-query-order/payment-sys-query-order/payment-sys-query-order",
        children: "查询支付订单"
      }), "的待签名内容是：“/api/v2/aggr/transactions/orders/{sysTransOrderNo}”。"]
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