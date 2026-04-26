"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["268057"], {
8138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_5_payment_faq_5_md_166_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-5-payment-faq-5-md-166.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_5_payment_faq_5_md_166_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-5/payment-faq-5","title":"拉起收银台无反应或报错？","description":"该情况一般属于入参格式存在问题，还请根据支付的回调信息进行定位，请检查以下注意事项：","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-5/payment-faq-5.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-5","slug":"/payment-kit-guide/payment-faq/payment-faq-5/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"拉起收银台无反应或报错？","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-5","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"GET请求的bodySign是对谁签名得到的？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-3/"},"next":{"title":"支付成功后没有收到回调？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-6/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-5/payment-faq-5.md


const frontMatter = {
	title: '拉起收银台无反应或报错？',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-5',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起收银台无反应或报错？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "拉起收银台无反应或报错",
        children: "拉起收银台无反应或报错？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该情况一般属于入参格式存在问题，还请根据支付的回调信息进行定位，请检查以下注意事项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#orderstr",
          children: "orderStr"
        }), "入参格式，要求为JsonStr的格式（参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-payment-process#%E6%8B%89%E8%B5%B7%E5%8D%8E%E4%B8%BA%E6%94%AF%E4%BB%98%E6%94%B6%E9%93%B6%E5%8F%B0%E7%AB%AF%E4%BE%A7%E5%BC%80%E5%8F%91",
          children: "示例代码"
        }), "），不可为json对象或重复序列化。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保每次的支付请求noncestr参数唯一。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请检查timestamp时间戳格式是否错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请检查签名前是否已排序拼接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "签名后的入参字段重新赋值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对应prepay_id的订单是否已过期或已支付。"
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