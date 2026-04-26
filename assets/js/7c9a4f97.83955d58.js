"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["418410"], {
131891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_faq_scan_faq_18_scan_faq_18_md_7c9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-faq-scan-faq-18-scan-faq-18-md-7c9.json
var site_docs_scan_kit_guide_scan_faq_scan_faq_18_scan_faq_18_md_7c9_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-faq/scan-faq-18/scan-faq-18","title":"自定义界面扫码同时调用本地图片识码时，应用概率性自动退出","description":"*问题现象*","source":"@site/docs/scan-kit-guide/scan-faq/scan-faq-18/scan-faq-18.md","sourceDirName":"scan-kit-guide/scan-faq/scan-faq-18","slug":"/scan-kit-guide/scan-faq/scan-faq-18/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-18/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"自定义界面扫码同时调用本地图片识码时，应用概率性自动退出","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-18","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义界面扫码如何增加重试机制","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-17/"},"next":{"title":"如何将码图背景颜色设置成透明色","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-19/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-faq/scan-faq-18/scan-faq-18.md


const frontMatter = {
	title: '自定义界面扫码同时调用本地图片识码时，应用概率性自动退出',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-18',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义界面扫码同时调用本地图片识码时，应用概率性自动退出';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "自定义界面扫码同时调用本地图片识码时应用概率性自动退出",
        children: "自定义界面扫码同时调用本地图片识码时，应用概率性自动退出"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义界面扫码，点击图库，选中图片进行本地图片识码时，应用概率性的自动退出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义界面扫码接口和识别本地图片接口不支持并发执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击图库按钮的时候，需要先暂停并释放相机流（customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstop",
        children: "stop"
      }), "、customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrelease",
        children: "release"
      }), "），再进行本地图片识码。"]
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