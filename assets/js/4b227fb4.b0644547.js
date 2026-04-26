"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["116105"], {
242351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_10_payment_faq_10_md_4b2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-10-payment-faq-10-md-4b2.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_10_payment_faq_10_md_4b2_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-10/payment-faq-10","title":"接口请求响应“无效的签名”应该如何排查？","description":"1. 加签私钥和上传到商户平台的公钥是否配对。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-10/payment-faq-10.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-10","slug":"/payment-kit-guide/payment-faq/payment-faq-10/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-10/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"接口请求响应“无效的签名”应该如何排查？","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-10","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"关于支付回调的验签，为什么预下单请求验签的时候使用SHA256，回调验签却使用SM2？只能使用SM2进行验签吗？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-9/"},"next":{"title":"收银台报错“服务暂不可用，请稍后重试”？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-11/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-10/payment-faq-10.md


const frontMatter = {
	title: '接口请求响应“无效的签名”应该如何排查？',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-10',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '接口请求响应“无效的签名”应该如何排查？';

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
        id: "接口请求响应无效的签名应该如何排查",
        children: "接口请求响应“无效的签名”应该如何排查？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "加签私钥和上传到商户平台的公钥是否配对。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["排查待加签字符串是否正确拼接。 对象内的待加签字段需要排序后再拼接。对象内的嵌套的下一级对象也需要排序后再拼接。具体示例参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E7%AD%BE%E5%90%8D%E8%A7%84%E5%88%99",
          children: "签名规则"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排序拼接的字段命名和请求参数命名方式是否一致（如加签字段使用了匈牙利命名方式，请求参数则用小驼峰命名方式，导致加签验证内容不一致）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相关加签内容字段（如sign）内容是否正确设置（如加签后内容未及时设置到sign字段，一直使用固定的sign内容去发起请求）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查加签算法是否和要求的加签算法一致。"
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