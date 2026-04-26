"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["54772"], {
566568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_faq_iap_faq_6_iap_faq_6_md_5ba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-faq-iap-faq-6-iap-faq-6-md-5ba.json
var site_docs_iap_kit_guide_iap_faq_iap_faq_6_iap_faq_6_md_5ba_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-faq/iap-faq-6/iap-faq-6","title":"AppGallery Connect商品管理页面中，价格展示是否做了数字调整？比如小数点第二位6/9等调整？","description":"做了调整，具体调整规则请参见换算规则。","source":"@site/docs/iap-kit-guide/iap-faq/iap-faq-6/iap-faq-6.md","sourceDirName":"iap-kit-guide/iap-faq/iap-faq-6","slug":"/iap-kit-guide/iap-faq/iap-faq-6/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-6/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"AppGallery Connect商品管理页面中，价格展示是否做了数字调整？比如小数点第二位6/9等调整？","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-6","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"在AppGallery Connect中单独修改商品在某个地区的价格，以后汇率变动，是否会影响应用内的商品价格？","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-5/"},"next":{"title":"是否必须使用SHA256的证书才能通过验签？","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-7/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-faq/iap-faq-6/iap-faq-6.md


const frontMatter = {
	title: 'AppGallery Connect商品管理页面中，价格展示是否做了数字调整？比如小数点第二位6/9等调整？',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-6',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'AppGallery Connect商品管理页面中，价格展示是否做了数字调整？比如小数点第二位6/9等调整？';

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
        id: "appgallery-connect商品管理页面中价格展示是否做了数字调整比如小数点第二位69等调整",
        children: "AppGallery Connect商品管理页面中，价格展示是否做了数字调整？比如小数点第二位6/9等调整？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["做了调整，具体调整规则请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-conversion-rule-description-0000001146614687",
        children: "换算规则"
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