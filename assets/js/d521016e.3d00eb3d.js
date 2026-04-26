"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["681900"], {
822969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_2_payment_faq_2_md_d52_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-2-payment-faq-2-md-d52.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_2_payment_faq_2_md_d52_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-2/payment-faq-2","title":"Payment Kit的签名公私钥怎么获取？","description":"签名的公私钥对是由开发者自行生成，生成后将公钥上传到华为支付商户平台后可获取相应的请求参数authId，具体流程查看准备证书章节。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-2/payment-faq-2.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-2","slug":"/payment-kit-guide/payment-faq/payment-faq-2/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Payment Kit的签名公私钥怎么获取？","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-2","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入开发时，请求参数的签名、结果验签在什么场景使用？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-1/"},"next":{"title":"GET请求的bodySign是对谁签名得到的？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-2/payment-faq-2.md


const frontMatter = {
	title: 'Payment Kit的签名公私钥怎么获取？',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-2',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Payment Kit的签名公私钥怎么获取？';

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
        id: "payment-kit的签名公私钥怎么获取",
        children: "Payment Kit的签名公私钥怎么获取？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["签名的公私钥对是由开发者自行生成，生成后将公钥上传到", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "后可获取相应的请求参数authId，具体流程查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-preparations/payment-certificates-config#%E7%94%9F%E6%88%90%E5%95%86%E6%88%B7%E8%AF%81%E4%B9%A6",
        children: "准备证书"
      }), "章节。"]
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