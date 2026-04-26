"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["350943"], {
455511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_16_payment_faq_16_md_9d6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-16-payment-faq-16-md-9d6.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_16_payment_faq_16_md_9d6_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-16/payment-faq-16","title":"商户提供的回调通知接口在Payment Kit生产环境需要加网络允许清单吗？如何验证提供的回调地址Payment Kit服务器访问是否正常？","description":"1. 回调通知当前未做网络允许清单限制，不需要在华为支付添加网络允许清单。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-16/payment-faq-16.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-16","slug":"/payment-kit-guide/payment-faq/payment-faq-16/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-16/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"商户提供的回调通知接口在Payment Kit生产环境需要加网络允许清单吗？如何验证提供的回调地址Payment Kit服务器访问是否正常？","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-16","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"同一次支付请求接收到多次回调通知，怎么解决？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-15/"},"next":{"title":"商户侧没有传营销信息，支付回调里面为什么会有营销信息？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-17/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-16/payment-faq-16.md


const frontMatter = {
	title: '商户提供的回调通知接口在Payment Kit生产环境需要加网络允许清单吗？如何验证提供的回调地址Payment Kit服务器访问是否正常？',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-16',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '商户提供的回调通知接口在Payment Kit生产环境需要加网络允许清单吗？如何验证提供的回调地址Payment Kit服务器访问是否正常？';

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
        id: "商户提供的回调通知接口在payment-kit生产环境需要加网络允许清单吗如何验证提供的回调地址payment-kit服务器访问是否正常",
        children: "商户提供的回调通知接口在Payment Kit生产环境需要加网络允许清单吗？如何验证提供的回调地址Payment Kit服务器访问是否正常？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "回调通知当前未做网络允许清单限制，不需要在华为支付添加网络允许清单。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户提供的回调地址，保证在公网环境下可正常访问即可。"
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