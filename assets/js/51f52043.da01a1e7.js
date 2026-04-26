"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["681056"], {
661528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_faq_iap_faq_20_iap_faq_20_md_51f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-faq-iap-faq-20-iap-faq-20-md-51f.json
var site_docs_iap_kit_guide_iap_faq_iap_faq_20_iap_faq_20_md_51f_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-faq/iap-faq-20/iap-faq-20","title":"subGroupId（订阅组ID）、subGroupGenerationId（订阅组的代ID）和subscriptionId（订阅ID）说明","description":"- subGroupId(订阅组ID)标识一个订阅组，一个订阅组下存在多个自动续期订阅商品。","source":"@site/docs/iap-kit-guide/iap-faq/iap-faq-20/iap-faq-20.md","sourceDirName":"iap-kit-guide/iap-faq/iap-faq-20","slug":"/iap-kit-guide/iap-faq/iap-faq-20/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-20/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"subGroupId（订阅组ID）、subGroupGenerationId（订阅组的代ID）和subscriptionId（订阅ID）说明","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-20","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"purchaseToken和purchaseOrderId这两个参数的最大长度是多少？","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-19/"},"next":{"title":"developerPayload处理机制及使用建议","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-21/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-faq/iap-faq-20/iap-faq-20.md


const frontMatter = {
	title: 'subGroupId（订阅组ID）、subGroupGenerationId（订阅组的代ID）和subscriptionId（订阅ID）说明',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-20',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'subGroupId（订阅组ID）、subGroupGenerationId（订阅组的代ID）和subscriptionId（订阅ID）说明';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "subgroupid订阅组idsubgroupgenerationid订阅组的代id和subscriptionid订阅id说明",
        children: "subGroupId（订阅组ID）、subGroupGenerationId（订阅组的代ID）和subscriptionId（订阅ID）说明"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "subGroupId(订阅组ID)标识一个订阅组，一个订阅组下存在多个自动续期订阅商品。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["subGroupGenerationId(订阅组的代ID)是标识用户在同一订阅组下连续订阅的唯一ID。用户首次订阅时生成，在同一订阅组内切换其它订阅商品该ID不会改变，在订阅失效且超出", (0,jsx_runtime.jsx)(_components.a, {
          href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions#section1656191811315",
          children: "保留期"
        }), "后，用户重新购买商品时改变。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "subscriptionId(订阅ID)标识用户对订阅组中的一个商品存在订阅关系。"
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