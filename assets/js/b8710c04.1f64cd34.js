"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["477539"], {
845346(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_assetdownload_faq_graphics_accelerate_assetdownload_faq_6_graphics_accelerate_assetdownload_faq_6_md_b87_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-faq-graphics-accelerate-assetdownload-faq-graphics-accelerate-assetdownload-faq-6-graphics-accelerate-assetdownload-faq-6-md-b87.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_assetdownload_faq_graphics_accelerate_assetdownload_faq_6_graphics_accelerate_assetdownload_faq_6_md_b87_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-6/graphics-accelerate-assetdownload-faq-6","title":"是否可以仅接入下载ExtensionAbility，而不改写原先在游戏引擎内部的下载逻辑或下载中间件？","description":"可以，支持仅接入下载ExtensionAbility。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-6/graphics-accelerate-assetdownload-faq-6.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-6","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-6/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-6/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"是否可以仅接入下载ExtensionAbility，而不改写原先在游戏引擎内部的下载逻辑或下载中间件？","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-faq-6","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何解析华为CDN场景下manifestUrl对应的xml文件？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-5/"},"next":{"title":"接入资源包后台下载功能后如何使用指定测试设备进行自测？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-7/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-6/graphics-accelerate-assetdownload-faq-6.md


const frontMatter = {
	title: '是否可以仅接入下载ExtensionAbility，而不改写原先在游戏引擎内部的下载逻辑或下载中间件？',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-faq-6',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '是否可以仅接入下载ExtensionAbility，而不改写原先在游戏引擎内部的下载逻辑或下载中间件？';

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
        id: "是否可以仅接入下载extensionability而不改写原先在游戏引擎内部的下载逻辑或下载中间件",
        children: "是否可以仅接入下载ExtensionAbility，而不改写原先在游戏引擎内部的下载逻辑或下载中间件？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以，支持仅接入下载ExtensionAbility。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["但建议在应用进入前台时，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerremoveallassetdownloadtasks",
        children: "removeAllAssetDownloadTasks"
      }), "移除系统中的所有下载任务，对于已完成下载的任务可以复用，避免重复下载。对于未完成下载的任务建议使用应用自身下载器进行重新下载。"]
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