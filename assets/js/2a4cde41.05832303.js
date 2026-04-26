"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["265676"], {
245865(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_wallet_kit_guide_wallet_kit_faq_wallet_faq_7_wallet_faq_7_md_2a4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-wallet-kit-guide-wallet-kit-faq-wallet-faq-7-wallet-faq-7-md-2a4.json
var site_docs_wallet_kit_guide_wallet_kit_faq_wallet_faq_7_wallet_faq_7_md_2a4_namespaceObject = JSON.parse('{"id":"wallet-kit-guide/wallet-kit-faq/wallet-faq-7/wallet-faq-7","title":"用户领取了同一商户的多张卡券，但是打开华为钱包后只显示一张卡券","description":"请检查申请钥匙卡片的请求参数的serialNumber和organizationPassId字段是否都是唯一的。","source":"@site/docs/wallet-kit-guide/wallet-kit-faq/wallet-faq-7/wallet-faq-7.md","sourceDirName":"wallet-kit-guide/wallet-kit-faq/wallet-faq-7","slug":"/wallet-kit-guide/wallet-kit-faq/wallet-faq-7/","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-kit-faq/wallet-faq-7/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"用户领取了同一商户的多张卡券，但是打开华为钱包后只显示一张卡券","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-faq-7","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何查看已添加卡券？","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-kit-faq/wallet-faq-6/"},"next":{"title":"用户删卡时会删除哪些信息？","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-kit-faq/wallet-faq-8/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/wallet-kit-guide/wallet-kit-faq/wallet-faq-7/wallet-faq-7.md


const frontMatter = {
	title: '用户领取了同一商户的多张卡券，但是打开华为钱包后只显示一张卡券',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-faq-7',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '用户领取了同一商户的多张卡券，但是打开华为钱包后只显示一张卡券';

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
        id: "用户领取了同一商户的多张卡券但是打开华为钱包后只显示一张卡券",
        children: "用户领取了同一商户的多张卡券，但是打开华为钱包后只显示一张卡券"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请检查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey#%E7%94%B3%E8%AF%B7%E9%92%A5%E5%8C%99%E5%8D%A1%E7%89%87",
        children: "申请钥匙卡片"
      }), "的请求参数的serialNumber和organizationPassId字段是否都是唯一的。"]
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