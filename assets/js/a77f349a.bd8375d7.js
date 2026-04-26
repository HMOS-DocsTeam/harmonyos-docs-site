"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["2692"], {
593060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_11_payment_faq_11_md_a77_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-11-payment-faq-11-md-a77.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_11_payment_faq_11_md_a77_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-11/payment-faq-11","title":"收银台报错“服务暂不可用，请稍后重试”？","description":"1. 检查网络是否正常。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-11/payment-faq-11.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-11","slug":"/payment-kit-guide/payment-faq/payment-faq-11/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-11/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"收银台报错“服务暂不可用，请稍后重试”？","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-11","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接口请求响应“无效的签名”应该如何排查？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-10/"},"next":{"title":"预下单请求报错“交易订单状态异常”？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-12/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-11/payment-faq-11.md


const frontMatter = {
	title: '收银台报错“服务暂不可用，请稍后重试”？',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-11',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '收银台报错“服务暂不可用，请稍后重试”？';

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
        id: "收银台报错服务暂不可用请稍后重试",
        children: "收银台报错“服务暂不可用，请稍后重试”？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查网络是否正常。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#orderstr",
          children: "orderStr"
        }), "入参格式、字段值（如merc_no、app_id、auth_id等）是否正确，auth_id是否归属于merc_no(即公私钥对以及商户是否匹配）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用是否在", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "上面注册了，本地使用的调试签名证书是否是从", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "上面下载的。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["订单信息", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#orderstr",
          children: "orderStr"
        }), "传入的app_id 是否与", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694",
          children: "AppGallery Connect上面创建应用的APPID"
        }), "一致（如orderStr不传app_id字段时可正常拉起收银台，则需仔细检查传递时的app_id是否正确）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用“hdc hilog > 日志路径”抓取运行日志，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-error-code/payment-error-code",
          children: "错误码"
        }), "及日志来分析具体的报错异常。"]
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