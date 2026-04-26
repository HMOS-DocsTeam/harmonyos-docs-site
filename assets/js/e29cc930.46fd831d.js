"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["540300"], {
263768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_faq_ads_publisher_service_faq_4_ads_publisher_service_faq_4_md_e29_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ads-kit-guide-ads-publisher-service-dev-ads-publisher-service-faq-ads-publisher-service-faq-4-ads-publisher-service-faq-4-md-e29.json
var site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_faq_ads_publisher_service_faq_4_ads_publisher_service_faq_4_md_e29_namespaceObject = JSON.parse('{"id":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-4/ads-publisher-service-faq-4","title":"展示广告时显示白屏","description":"展示广告时出现白屏可能原因为展示的广告样式与UI展示页面不匹配，横幅广告使用AutoAdComponent组件展示；原生广告、开屏广告、贴片广告使用AdComponent组件展示；激励广告、插屏广告调用showAd方法展示。","source":"@site/docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-4/ads-publisher-service-faq-4.md","sourceDirName":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-4","slug":"/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-4/","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"展示广告时显示白屏","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-faq-4","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"实时竞价","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-real-time-bidding/"},"next":{"title":"鲸鸿动能媒体服务平台打开受限","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-6/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-4/ads-publisher-service-faq-4.md


const frontMatter = {
	title: '展示广告时显示白屏',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-faq-4',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '展示广告时显示白屏';

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
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "展示广告时显示白屏",
        children: "展示广告时显示白屏"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["展示广告时出现白屏可能原因为展示的广告样式与UI展示页面不匹配，横幅广告使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ads-api/ads-comp/js-apis-autoadcomponent/js-apis-autoadcomponent",
        children: "AutoAdComponent"
      }), "组件展示；原生广告、开屏广告、贴片广告使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ads-api/ads-comp/js-apis-adcomponent/js-apis-adcomponent",
        children: "AdComponent"
      }), "组件展示；激励广告、插屏广告调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#advertisingshowad",
        children: "showAd"
      }), "方法展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议排查步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取请求广告时返回的广告数据并记录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打印展示广告时入参的广告数据，对比两者是否一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查请求的广告类型与使用的展示组件是否匹配。"
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