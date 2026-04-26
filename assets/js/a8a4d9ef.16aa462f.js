"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["726176"], {
298350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_common_pay_connect_payment_launch_third_party_payment_payment_third_party_faq_payment_third_party_faq_md_a8a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-common-pay-connect-payment-launch-third-party-payment-payment-third-party-faq-payment-third-party-faq-md-a8a.json
var site_docs_payment_kit_guide_payment_common_pay_connect_payment_launch_third_party_payment_payment_third_party_faq_payment_third_party_faq_md_a8a_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-third-party-faq/payment-third-party-faq","title":"三方支付问题处理","description":"接入微信H5 支付，支付完成后会停留在微信里面，没有自动返回应用，需要用户手动返回？","source":"@site/docs/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-third-party-faq/payment-third-party-faq.md","sourceDirName":"payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-third-party-faq","slug":"/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-third-party-faq/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-third-party-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"三方支付问题处理","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-third-party-faq","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于接口拉起方式","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk/"},"next":{"title":"引导用户绑卡场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-partner-bindcard/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-third-party-faq/payment-third-party-faq.md


const frontMatter = {
	title: '三方支付问题处理',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-third-party-faq',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '三方支付问题处理';

const assets = {

};



const toc = [{
  "value": "接入微信H5 支付，支付完成后会停留在微信里面，没有自动返回应用，需要用户手动返回？",
  "id": "接入微信h5-支付支付完成后会停留在微信里面没有自动返回应用需要用户手动返回",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "三方支付问题处理",
        children: "三方支付问题处理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入微信h5-支付支付完成后会停留在微信里面没有自动返回应用需要用户手动返回",
      children: "接入微信H5 支付，支付完成后会停留在微信里面，没有自动返回应用，需要用户手动返回？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支付完成需回调页面可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://pay.weixin.qq.com/doc/v2/merchant/4011936869",
        children: "这里"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前deeplink拉起微信支付，微信支付现状支付成功后停留在微信支付界面，无法返回应用，当前无解决方案。可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk",
        children: "基于接口拉起方式"
      }), "拉起三方支付收银台，可以支持微信支付支付成功后自动关闭。"]
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