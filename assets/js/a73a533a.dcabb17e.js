"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["270908"], {
731575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_14_payment_faq_14_md_a73_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-14-payment-faq-14-md-a73.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_14_payment_faq_14_md_a73_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-14/payment-faq-14","title":"部分提供通知回调的API接口中的callbackUrl参数是否可以自定义？回调通知的报文是否支持商户自定义？","description":"1. API接口callbackUrl参数是可以由商户自行定义的HTTPS协议的有效接口。如：https://www.xxxxxx.com/hw/pay/callback。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-14/payment-faq-14.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-14","slug":"/payment-kit-guide/payment-faq/payment-faq-14/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-14/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"部分提供通知回调的API接口中的callbackUrl参数是否可以自定义？回调通知的报文是否支持商户自定义？","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-14","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"预下单一段时间后再支付，能否有接口查到prepayId？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-13/"},"next":{"title":"同一次支付请求接收到多次回调通知，怎么解决？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-15/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-14/payment-faq-14.md


const frontMatter = {
	title: '部分提供通知回调的API接口中的callbackUrl参数是否可以自定义？回调通知的报文是否支持商户自定义？',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-14',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '部分提供通知回调的API接口中的callbackUrl参数是否可以自定义？回调通知的报文是否支持商户自定义？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
        id: "部分提供通知回调的api接口中的callbackurl参数是否可以自定义回调通知的报文是否支持商户自定义",
        children: "部分提供通知回调的API接口中的callbackUrl参数是否可以自定义？回调通知的报文是否支持商户自定义？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API接口callbackUrl参数是可以由商户自行定义的HTTPS协议的有效接口。如：", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://www.xxxxxx.com/hw/pay/callback"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "回调通知报文暂时无法由商户自定义。"
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