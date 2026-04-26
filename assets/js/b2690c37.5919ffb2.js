"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["940170"], {
877763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_faq_payment_faq_25_payment_faq_25_md_b26_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-faq-payment-faq-25-payment-faq-25-md-b26.json
var site_docs_payment_kit_guide_payment_faq_payment_faq_25_payment_faq_25_md_b26_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-faq/payment-faq-25/payment-faq-25","title":"收银台支付报错“应用信息校验不通过，请联系商家处理”？","description":"1. 检查网络是否正常。","source":"@site/docs/payment-kit-guide/payment-faq/payment-faq-25/payment-faq-25.md","sourceDirName":"payment-kit-guide/payment-faq/payment-faq-25","slug":"/payment-kit-guide/payment-faq/payment-faq-25/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-25/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"title":"收银台支付报错“应用信息校验不通过，请联系商家处理”？","sidebar_position":24,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-25","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"下载账单文件后，应该使用哪种格式来解析日期？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-24/"},"next":{"title":"商户号绑定AppID提示“主体不一致”？","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-faq/payment-faq-26/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-faq/payment-faq-25/payment-faq-25.md


const frontMatter = {
	title: '收银台支付报错“应用信息校验不通过，请联系商家处理”？',
	sidebar_position: 24,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-25',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '收银台支付报错“应用信息校验不通过，请联系商家处理”？';

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
        id: "收银台支付报错应用信息校验不通过请联系商家处理",
        children: "收银台支付报错“应用信息校验不通过，请联系商家处理”？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查网络是否正常。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查是否", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-config-app-identity-info#%E9%85%8D%E7%BD%AE%E5%BA%94%E7%94%A8%E5%B1%9E%E6%80%A7",
          children: "配置应用属性"
        }), "，确认appId配置是否有调整。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本地调试的签名证书配置是否为手动签名并且是从", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "下载的，参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section297715173233",
          children: "应用/服务手动签名"
        }), "。证书下载后，可打开调试Profile（.p7b）文件，搜索“app-identifier”字段，如果对应的值和预下单请求或orderStr中传递的appId不一致，则证书生成错误，需重新生成证书及配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查是否配置添加了公钥指纹，参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/application-dev-overview#section1726913517284",
          children: "添加公钥指纹"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查一下orderStr中merc_no、app_id、auth_id等参数是否正确，merc_no和auth_id是否匹配。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["服务商模式接入，切换到商户应用/元服务拉起收银台时，需要把app_id改成商户相应的appId，并在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-prepay/payment-agent-prepay",
          children: "平台类商户/服务商预下单"
        }), "接口通过subAppId字段同步传递。"]
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