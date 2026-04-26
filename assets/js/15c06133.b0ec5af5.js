"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["137070"], {
158049(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_preparations_payment_digital_cny_pay_preparations_payment_digital_cny_pay_preparations_md_15c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-preparations-payment-digital-cny-pay-preparations-payment-digital-cny-pay-preparations-md-15c.json
var site_docs_payment_kit_guide_payment_preparations_payment_digital_cny_pay_preparations_payment_digital_cny_pay_preparations_md_15c_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations/payment-digital-cny-pay-preparations","title":"（可选）数字人民币接入准备","description":"如不接入数字人民币支付能力或已完成运营机构或受理服务机构商户入网并获取了商户号和APPID，可跳过该步骤。","source":"@site/docs/payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations/payment-digital-cny-pay-preparations.md","sourceDirName":"payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations","slug":"/payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"（可选）数字人民币接入准备","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-digital-cny-pay-preparations","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"云侧服务准备","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-server-connect/"},"next":{"title":"（可选）用户身份验证服务接入准备","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-real-name-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations/payment-digital-cny-pay-preparations.md


const frontMatter = {
	title: '（可选）数字人民币接入准备',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-digital-cny-pay-preparations',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '（可选）数字人民币接入准备';

const assets = {

};



const toc = [{
  "value": "应用配置",
  "id": "应用配置",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "可选数字人民币接入准备",
        children: "（可选）数字人民币接入准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如不接入数字人民币支付能力或已完成运营机构或受理服务机构商户入网并获取了商户号和APPID，可跳过该步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字人民币支付仅支持通过运营机构或受理服务机构申请的商户接入，在开发前需要先完成商户入网（可拨打数字人民币客服热线956196根据指引完成商户入网）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户入网后，数字人民币的运营机构会分配对应的商户号和APPID，商户号和APPID是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-digitalcnyservice/payment-digitalcnyservice",
        children: "开放API接口"
      }), "请求的必要入参。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用配置",
      children: "应用配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在构建的开发者应用/元服务“entry/src/main/module.json5”文件中添加钱包schemes配置信息，配置内容示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"querySchemes\": [\n      \"wallet\"\n    ]\n  }\n}\n"
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