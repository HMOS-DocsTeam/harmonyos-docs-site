"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["517486"], {
583600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_preparations_iap_basic_preparation_iap_enable_merchant_service_iap_enable_merchant_service_md_ce8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-preparations-iap-basic-preparation-iap-enable-merchant-service-iap-enable-merchant-service-md-ce8.json
var site_docs_iap_kit_guide_iap_preparations_iap_basic_preparation_iap_enable_merchant_service_iap_enable_merchant_service_md_ce8_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-merchant-service/iap-enable-merchant-service","title":"开通商户服务","description":"开通商户服务是开发者分发付费内容（付费应用/主题、应用内付费、广告变现等）的前提。商户服务里需要配置银行卡账户、币种等信息，用于开发者接收华为分成收益。详细信息和操作请参见商户服务。","source":"@site/docs/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-merchant-service/iap-enable-merchant-service.md","sourceDirName":"iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-merchant-service","slug":"/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-merchant-service/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-merchant-service/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开通商户服务","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-enable-merchant-service","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用入门","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-dev-guide/"},"next":{"title":"创建项目和应用","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-create-project-and-application/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-merchant-service/iap-enable-merchant-service.md


const frontMatter = {
	title: '开通商户服务',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-enable-merchant-service',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '开通商户服务';

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
        id: "开通商户服务",
        children: "开通商户服务"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开通商户服务是开发者分发付费内容（付费应用/主题、应用内付费、广告变现等）的前提。商户服务里需要配置银行卡账户、币种等信息，用于开发者接收华为分成收益。详细信息和操作请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/start/merchant-service-0000001053025967",
        children: "商户服务"
      }), "。"]
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