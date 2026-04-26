"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["283728"], {
470125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_faq_pdf_faq_4_online_preview_pdf_faq_4_online_preview_md_ea7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-faq-pdf-faq-4-online-preview-pdf-faq-4-online-preview-md-ea7.json
var site_docs_pdf_kit_guide_pdf_faq_pdf_faq_4_online_preview_pdf_faq_4_online_preview_md_ea7_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-faq/pdf-faq-4-online-preview/pdf-faq-4-online-preview","title":"PDF文档支持在线预览吗？","description":"PDF Kit不支持在线预览，需要把文档下载到本地，才能预览，具体可参见预览PDF文档。","source":"@site/docs/pdf-kit-guide/pdf-faq/pdf-faq-4-online-preview/pdf-faq-4-online-preview.md","sourceDirName":"pdf-kit-guide/pdf-faq/pdf-faq-4-online-preview","slug":"/pdf-kit-guide/pdf-faq/pdf-faq-4-online-preview/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-faq/pdf-faq-4-online-preview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"PDF文档支持在线预览吗？","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-faq-4-online-preview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PDF Kit可以移除具体页面的页眉页脚、水印、背景吗？","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-faq/pdf-faq-4/"},"next":{"title":"Preview Kit简介","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-faq/pdf-faq-4-online-preview/pdf-faq-4-online-preview.md


const frontMatter = {
	title: 'PDF文档支持在线预览吗？',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-faq-4-online-preview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'PDF文档支持在线预览吗？';

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
        id: "pdf文档支持在线预览吗",
        children: "PDF文档支持在线预览吗？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PDF Kit不支持在线预览，需要把文档下载到本地，才能预览，具体可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-component",
        children: "预览PDF文档"
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