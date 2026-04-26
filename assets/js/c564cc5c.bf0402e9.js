"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["933056"], {
898469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_preview_kit_guide_preview_faq_preview_faq_1_preview_faq_1_md_c56_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-preview-kit-guide-preview-faq-preview-faq-1-preview-faq-1-md-c56.json
var site_docs_preview_kit_guide_preview_faq_preview_faq_1_preview_faq_1_md_c56_namespaceObject = JSON.parse('{"id":"preview-kit-guide/preview-faq/preview-faq-1/preview-faq-1","title":"openPreview打开显示预览失败","description":"Preview Kit的openPreview接口在传入文件预览信息时，当前仅支持传入文件的uri，不支持传入文件的沙箱路径。","source":"@site/docs/preview-kit-guide/preview-faq/preview-faq-1/preview-faq-1.md","sourceDirName":"preview-kit-guide/preview-faq/preview-faq-1","slug":"/preview-kit-guide/preview-faq/preview-faq-1/","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-faq/preview-faq-1/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"openPreview打开显示预览失败","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-faq-1","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文件打开加速状态感知","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-openfileboost-stateawareness/"},"next":{"title":"使用DocumentViewPicker拿到的uri通过openPreview打开显示预览失败","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-faq/preview-faq-2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/preview-kit-guide/preview-faq/preview-faq-1/preview-faq-1.md


const frontMatter = {
	title: 'openPreview打开显示预览失败',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-faq-1',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'openPreview打开显示预览失败';

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
        id: "openpreview打开显示预览失败",
        children: "openPreview打开显示预览失败"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Preview Kit的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/preview-api/preview-api-reference/preview-arkts/preview-arkts#openpreview",
        children: "openPreview"
      }), "接口在传入文件预览信息时，当前仅支持传入文件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/user-files/user-file-uri-intro",
        children: "uri"
      }), "，不支持传入文件的沙箱路径。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果调用openPreview接口后，显示预览失败，请检查传入的是否为uri并且检查传入的uri是否存在。"
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