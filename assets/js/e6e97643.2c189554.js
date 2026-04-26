"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["906289"], {
420770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_9_payment_faq_9_md_e6e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-9-payment-faq-9-md-e6e.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_9_payment_faq_9_md_e6e_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-9/payment-faq-9","title":"关于支付回调的验签，为什么预下单请求验签的时候使用SHA256，回调验签却使用SM2？只能使用SM2进行验签吗？","description":"1. 商户预下单请求加签，华为支付提供了SHA256WithRSA/PSS和SM2两种签名方式，由商户自行选择使用哪一种签名方式进行签名。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-9/payment-faq-9.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-9","slug":"/payment-kit-guide/payment-faq/payment-faq-9/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-9/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"关于支付回调的验签，为什么预下单请求验签的时候使用SHA256，回调验签却使用SM2？只能使用SM2进行验签吗？","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-9","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"华为支付签约的免密代扣在哪里可以解约？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-8/"},"next":{"title":"接口请求响应“无效的签名”应该如何排查？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-10/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-9/payment-faq-9.md


const frontMatter = {
	title: '关于支付回调的验签，为什么预下单请求验签的时候使用SHA256，回调验签却使用SM2？只能使用SM2进行验签吗？',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-9',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '关于支付回调的验签，为什么预下单请求验签的时候使用SHA256，回调验签却使用SM2？只能使用SM2进行验签吗？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "关于支付回调的验签为什么预下单请求验签的时候使用sha256回调验签却使用sm2只能使用sm2进行验签吗",
        children: "关于支付回调的验签，为什么预下单请求验签的时候使用SHA256，回调验签却使用SM2？只能使用SM2进行验签吗？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户预下单请求加签，华为支付提供了SHA256WithRSA/PSS和SM2两种签名方式，由商户自行选择使用哪一种签名方式进行签名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于支付业务，应监管要求，需要支持国密算法。回调通知华为支付统一使用SM2进行加签，所以目前只能使用SM2进行回调验签，无法由商户选择。"
      }), "\n"]
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