"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["625197"], {
114234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_17_payment_faq_17_md_591_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-17-payment-faq-17-md-591.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_17_payment_faq_17_md_591_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-17/payment-faq-17","title":"商户侧没有传营销信息，支付回调里面为什么会有营销信息？","description":"营销活动不需要商户侧传递，拉起收银台前华为支付会根据用户和商户去获取华为支付侧配置的营销活动信息展示在收银台，若用户使用了营销活动，支付结果就会返回营销信息。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-17/payment-faq-17.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-17","slug":"/payment-kit-guide/payment-faq/payment-faq-17/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-17/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"商户侧没有传营销信息，支付回调里面为什么会有营销信息？","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-17","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"商户提供的回调通知接口在Payment Kit生产环境需要加网络允许清单吗？如何验证提供的回调地址Payment Kit服务器访问是否正常？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-16/"},"next":{"title":"App和元服务接口入参除了appId不同，其他如商户号、证书、密钥这些可以使用相同的吗？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-18/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-17/payment-faq-17.md


const frontMatter = {
	title: '商户侧没有传营销信息，支付回调里面为什么会有营销信息？',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-17',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '商户侧没有传营销信息，支付回调里面为什么会有营销信息？';

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
        id: "商户侧没有传营销信息支付回调里面为什么会有营销信息",
        children: "商户侧没有传营销信息，支付回调里面为什么会有营销信息？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "营销活动不需要商户侧传递，拉起收银台前华为支付会根据用户和商户去获取华为支付侧配置的营销活动信息展示在收银台，若用户使用了营销活动，支付结果就会返回营销信息。"
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