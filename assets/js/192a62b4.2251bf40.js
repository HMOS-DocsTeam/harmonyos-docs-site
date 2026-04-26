"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["216237"], {
631052(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_22_payment_faq_22_md_192_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-22-payment-faq-22-md-192.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_22_payment_faq_22_md_192_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-22/payment-faq-22","title":"不更换商户订单号重复发起退款，返回000000，不返回退款金额的原因是什么？","description":"请检查首次发起退款是否已正常完成退款。订单已经全额退款后，使用相同的商户订单号重复发起退款不会再返回退款金额。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-22/payment-faq-22.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-22","slug":"/payment-kit-guide/payment-faq/payment-faq-22/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-22/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"title":"不更换商户订单号重复发起退款，返回000000，不返回退款金额的原因是什么？","sidebar_position":21,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-22","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"请求接口加签验证中，如果请求头“PayMercAuth”中bodySign字段为空值，会做验签吗？还是会先校验字段？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-21/"},"next":{"title":"Payment Kit的退款操作，除了通过接入指导中的退款接口退款，还有财务功能相关平台吗？能从这个平台进行退款？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-23/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-22/payment-faq-22.md


const frontMatter = {
	title: '不更换商户订单号重复发起退款，返回000000，不返回退款金额的原因是什么？',
	sidebar_position: 21,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-22',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '不更换商户订单号重复发起退款，返回000000，不返回退款金额的原因是什么？';

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
        id: "不更换商户订单号重复发起退款返回000000不返回退款金额的原因是什么",
        children: "不更换商户订单号重复发起退款，返回000000，不返回退款金额的原因是什么？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请检查首次发起退款是否已正常完成退款。订单已经全额退款后，使用相同的商户订单号重复发起退款不会再返回退款金额。"
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