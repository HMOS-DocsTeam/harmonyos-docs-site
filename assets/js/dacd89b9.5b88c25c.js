"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["679726"], {
210337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_faq_store_faq_23_store_faq_23_md_dac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-faq-store-faq-23-store-faq-23-md-dac.json
var site_docs_store_kit_guide_store_faq_store_faq_23_store_faq_23_md_dac_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-faq/store-faq-23/store-faq-23","title":"订阅商品的续费周期规则是什么？","description":"当前支持的续费周期为1周、1个月、2个月、3个月、6个月、1年、30天（上次订阅日期+30天）、31天（上次订阅日期+31天），具体配置方法请参考配置自动续期订阅商品。","source":"@site/docs/store-kit-guide/store-faq/store-faq-23/store-faq-23.md","sourceDirName":"store-kit-guide/store-faq/store-faq-23","slug":"/store-kit-guide/store-faq/store-faq-23/","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-23/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"订阅商品的续费周期规则是什么？","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-faq-23","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数字商品服务中订单订购状态有哪些？","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-22/"},"next":{"title":"订阅型商品中的续费周期1个月是指30天、31天还是自然月？同理，2个月、3个月具体包含多少天数？","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-24/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-faq/store-faq-23/store-faq-23.md


const frontMatter = {
	title: '订阅商品的续费周期规则是什么？',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-faq-23',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅商品的续费周期规则是什么？';

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
        id: "订阅商品的续费周期规则是什么",
        children: "订阅商品的续费周期规则是什么？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的续费周期为1周、1个月、2个月、3个月、6个月、1年、30天（上次订阅日期+30天）、31天（上次订阅日期+31天），具体配置方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-iap/store-iap-config-product/store-iap-product#%E9%85%8D%E7%BD%AE%E8%87%AA%E5%8A%A8%E7%BB%AD%E6%9C%9F%E8%AE%A2%E9%98%85%E5%95%86%E5%93%81",
        children: "配置自动续期订阅商品"
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