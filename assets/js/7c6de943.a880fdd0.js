"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["17179"], {
490855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_6_payment_faq_6_md_7c6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-6-payment-faq-6-md-7c6.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_6_payment_faq_6_md_7c6_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-6/payment-faq-6","title":"支付成功后没有收到回调？","description":"- 检查预下单传入的callbackUrl接口地址是否有效。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-6/payment-faq-6.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-6","slug":"/payment-kit-guide/payment-faq/payment-faq-6/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-6/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"支付成功后没有收到回调？","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-6","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起收银台无反应或报错？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-5/"},"next":{"title":"同一用户重复签约，会生成多笔签约吗？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-7/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-6/payment-faq-6.md


const frontMatter = {
	title: '支付成功后没有收到回调？',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-6',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '支付成功后没有收到回调？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "支付成功后没有收到回调",
        children: "支付成功后没有收到回调？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查预下单传入的callbackUrl接口地址是否有效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查服务器是否有允许清单等网络限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "加密套件不一致，目前华为支付支持的加密套件如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256\nTLS_DHE_RSA_WITH_AES_256_GCM_SHA384\nTLS_DHE_DSS_WITH_AES_128_GCM_SHA256\nTLS_DHE_DSS_WITH_AES_256_GCM_SHA384\nTLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\nTLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\nTLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256\nTLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\nTLS_AES_128_GCM_SHA256\n"
      })
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