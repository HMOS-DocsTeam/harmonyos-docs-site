"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["292855"], {
997562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_24_payment_faq_24_md_d3b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-24-payment-faq-24-md-d3b.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_24_payment_faq_24_md_d3b_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-24/payment-faq-24","title":"下载账单文件后，应该使用哪种格式来解析日期？","description":"1. 不建议用Excel文件格式去解析，Excel打开后可能会被默认格式化处理，导致通过Excel打开文件后，单元格日期格式显示为 “yyyy/MM/dd HHmmmmmm”格式可以解析。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-24/payment-faq-24.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-24","slug":"/payment-kit-guide/payment-faq/payment-faq-24/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-24/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"title":"下载账单文件后，应该使用哪种格式来解析日期？","sidebar_position":23,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-24","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Payment Kit的退款操作，除了通过接入指导中的退款接口退款，还有财务功能相关平台吗？能从这个平台进行退款？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-23/"},"next":{"title":"收银台支付报错“应用信息校验不通过，请联系商家处理”？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-25/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-24/payment-faq-24.md


const frontMatter = {
	title: '下载账单文件后，应该使用哪种格式来解析日期？',
	sidebar_position: 23,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-24',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '下载账单文件后，应该使用哪种格式来解析日期？';

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
        id: "下载账单文件后应该使用哪种格式来解析日期",
        children: "下载账单文件后，应该使用哪种格式来解析日期？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议用Excel文件格式去解析，Excel打开后可能会被默认格式化处理，导致通过Excel打开文件后，单元格日期格式显示为 “yyyy/MM/dd HH:mm”，双击后显示 “yyyy/MM/dd HH:mm:ss”，以“yyyy/MM/dd HH:mm:ss”格式解析不出来，以“yyyy/MM/dd HH:mm”格式可以解析。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议使用csv文件格式，yyyy/MM/dd HH:mm:ss时间格式做解析。"
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