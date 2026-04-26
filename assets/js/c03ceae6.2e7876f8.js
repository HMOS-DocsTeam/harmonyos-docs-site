"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["517964"], {
670993(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_faq_pdf_faq_4_pdf_faq_4_md_c03_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-faq-pdf-faq-4-pdf-faq-4-md-c03.json
var site_docs_pdf_kit_guide_pdf_faq_pdf_faq_4_pdf_faq_4_md_c03_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-faq/pdf-faq-4/pdf-faq-4","title":"PDF Kit可以移除具体页面的页眉页脚、水印、背景吗？","description":"不可以，PDF Kit移除页眉页脚、水印或背景不会针对具体页面，请参考页眉页脚，水印或背景图片。","source":"@site/docs/pdf-kit-guide/pdf-faq/pdf-faq-4/pdf-faq-4.md","sourceDirName":"pdf-kit-guide/pdf-faq/pdf-faq-4","slug":"/pdf-kit-guide/pdf-faq/pdf-faq-4/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-faq/pdf-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"PDF Kit可以移除具体页面的页眉页脚、水印、背景吗？","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-faq-4","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"优化PDF文档切换体验","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-switch-optimize/"},"next":{"title":"PDF文档支持在线预览吗？","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-faq/pdf-faq-4-online-preview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-faq/pdf-faq-4/pdf-faq-4.md


const frontMatter = {
	title: 'PDF Kit可以移除具体页面的页眉页脚、水印、背景吗？',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-faq-4',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'PDF Kit可以移除具体页面的页眉页脚、水印、背景吗？';

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
        id: "pdf-kit可以移除具体页面的页眉页脚水印背景吗",
        children: "PDF Kit可以移除具体页面的页眉页脚、水印、背景吗？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不可以，PDF Kit移除页眉页脚、水印或背景不会针对具体页面，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-headerfooter",
        children: "页眉页脚"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-watermark",
        children: "水印"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-background",
        children: "背景图片"
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