"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["694287"], {
700550(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_8_payment_faq_8_md_ee9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-8-payment-faq-8-md-ee9.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_8_payment_faq_8_md_ee9_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-8/payment-faq-8","title":"华为支付签约的免密代扣在哪里可以解约？","description":"- 方式1：用户可选择“华为钱包 > 我的 > 华为支付”，点击右上角菜单栏“免密代扣 > 华为支付免密代扣”，完成免密代扣解约。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-8/payment-faq-8.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-8","slug":"/payment-kit-guide/payment-faq/payment-faq-8/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-8/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"华为支付签约的免密代扣在哪里可以解约？","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-8","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"同一用户重复签约，会生成多笔签约吗？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-7/"},"next":{"title":"关于支付回调的验签，为什么预下单请求验签的时候使用SHA256，回调验签却使用SM2？只能使用SM2进行验签吗？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-9/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-8/payment-faq-8.md


const frontMatter = {
	title: '华为支付签约的免密代扣在哪里可以解约？',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-8',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '华为支付签约的免密代扣在哪里可以解约？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "华为支付签约的免密代扣在哪里可以解约",
        children: "华为支付签约的免密代扣在哪里可以解约？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式1：用户可选择“华为钱包 > 我的 > 华为支付”，点击右上角菜单栏“免密代扣 > 华为支付免密代扣”，完成免密代扣解约。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["方式2：商户（开发者）通过对外开放的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-unsign/payment-withhold-unsign",
          children: "API接口"
        }), "进行解约。"]
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