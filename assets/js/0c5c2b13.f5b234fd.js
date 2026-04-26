"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["221685"], {
889118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_15_payment_faq_15_md_0c5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-15-payment-faq-15-md-0c5.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_15_payment_faq_15_md_0c5_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-15/payment-faq-15","title":"同一次支付请求接收到多次回调通知，怎么解决？","description":"1. 同一次支付请求接收到多次回调是开发者返回的响应报错，导致重试。请检查返回的响应格式是不是application/json以及响应的报文是不是 \\\\{\\"resultCode\\"\\"Success.\\"\\\\} ，具体可参考通知回调接口说明。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-15/payment-faq-15.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-15","slug":"/payment-kit-guide/payment-faq/payment-faq-15/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-15/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"同一次支付请求接收到多次回调通知，怎么解决？","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-15","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"部分提供通知回调的API接口中的callbackUrl参数是否可以自定义？回调通知的报文是否支持商户自定义？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-14/"},"next":{"title":"商户提供的回调通知接口在Payment Kit生产环境需要加网络允许清单吗？如何验证提供的回调地址Payment Kit服务器访问是否正常？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-16/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-15/payment-faq-15.md


const frontMatter = {
	title: '同一次支付请求接收到多次回调通知，怎么解决？',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-15',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '同一次支付请求接收到多次回调通知，怎么解决？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "同一次支付请求接收到多次回调通知怎么解决",
        children: "同一次支付请求接收到多次回调通知，怎么解决？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["同一次支付请求接收到多次回调是开发者返回的响应报错，导致重试。请检查返回的响应格式是不是application/json以及响应的报文是不是 {\"resultCode\":\"000000\",\"resultDesc\":\"Success.\"} ，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%80%9A%E7%9F%A5%E5%9B%9E%E8%B0%83%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
          children: "通知回调接口说明"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自验证回调接口是否可正常接收响应，如Payment Kit服务器请求响应连接超时也会触发重试回调。"
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