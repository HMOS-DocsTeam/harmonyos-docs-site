"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["698616"], {
45182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_iap_store_iap_introduction_store_iap_introduction_md_6cf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-iap-store-iap-introduction-store-iap-introduction-md-6cf.json
var site_docs_store_kit_guide_store_iap_store_iap_introduction_store_iap_introduction_md_6cf_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-iap/store-iap-introduction/store-iap-introduction","title":"概述","description":"数字商品服务为开发者提供便捷高效的数字商品服务接入流程和交互体验，让开发者聚焦应用本身的业务能力，助力开发者商业变现。数字商品服务提供基础的数字商品交易能力，保障用户交易的完成，并对应用内的数字商品交易能力可用性、商品价值和商品质量进行审核。本服务能帮助开发者实现统一的数字商品分发体验和营销宣传（包括在应用内的商品展示和销售，以及在应用市场内的商品分发等）、统一管理数字商品的定价和优惠、查询用户的商品权益、完成数字商品的售后服务等一系列服务。","source":"@site/docs/store-kit-guide/store-iap/store-iap-introduction/store-iap-introduction.md","sourceDirName":"store-kit-guide/store-iap/store-iap-introduction","slug":"/store-kit-guide/store-iap/store-iap-introduction/","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AppGallery Kit简介","permalink":"/harmonyos-docs-site/store-kit-guide/store-introduction/"},"next":{"title":"接入流程","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-iap/store-iap-introduction/store-iap-introduction.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字商品服务为开发者提供便捷高效的数字商品服务接入流程和交互体验，让开发者聚焦应用本身的业务能力，助力开发者商业变现。数字商品服务提供基础的数字商品交易能力，保障用户交易的完成，并对应用内的数字商品交易能力可用性、商品价值和商品质量进行审核。本服务能帮助开发者实现统一的数字商品分发体验和营销宣传（包括在应用内的商品展示和销售，以及在应用市场内的商品分发等）、统一管理数字商品的定价和优惠、查询用户的商品权益、完成数字商品的售后服务等一系列服务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可通过接入和使用IAP系统级API以及应用市场Server能力，快速启动数字商品交易流程，实现在应用内销售数字商品的功能和场景。通过应用内的数字商品交易，用户可以在开发者的应用内购买各种类型的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数字商品"
        })
      }), "，包括消耗型商品、非消耗型商品和自动续期订阅商品、非续期订阅商品等。"]
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