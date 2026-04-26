"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["103251"], {
314666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_faq_iap_faq_15_iap_faq_15_md_733_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-faq-iap-faq-15-iap-faq-15-md-733.json
var site_docs_iap_kit_guide_iap_faq_iap_faq_15_iap_faq_15_md_733_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-faq/iap-faq-15/iap-faq-15","title":"应用在子窗口中调用createPurchase拉起IAP Kit收银台时，子窗口会被隐藏，此现象正常吗？","description":"是正常的。出于安全考虑，系统控件在拉起IAP Kit收银台时，会将子窗口等悬浮形态的组件隐藏。","source":"@site/docs/iap-kit-guide/iap-faq/iap-faq-15/iap-faq-15.md","sourceDirName":"iap-kit-guide/iap-faq/iap-faq-15","slug":"/iap-kit-guide/iap-faq/iap-faq-15/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-15/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"应用在子窗口中调用createPurchase拉起IAP Kit收银台时，子窗口会被隐藏，此现象正常吗？","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-15","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何解决证书链不完整？","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-14/"},"next":{"title":"在沙盒环境进行测试，但是实际需要真实支付是为什么？","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-16/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-faq/iap-faq-15/iap-faq-15.md


const frontMatter = {
	title: '应用在子窗口中调用createPurchase拉起IAP Kit收银台时，子窗口会被隐藏，此现象正常吗？',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-15',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '应用在子窗口中调用createPurchase拉起IAP Kit收银台时，子窗口会被隐藏，此现象正常吗？';

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
        id: "应用在子窗口中调用createpurchase拉起iap-kit收银台时子窗口会被隐藏此现象正常吗",
        children: "应用在子窗口中调用createPurchase拉起IAP Kit收银台时，子窗口会被隐藏，此现象正常吗？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "是正常的。出于安全考虑，系统控件在拉起IAP Kit收银台时，会将子窗口等悬浮形态的组件隐藏。"
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