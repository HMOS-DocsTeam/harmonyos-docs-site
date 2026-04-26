"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["513769"], {
466155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_faq_xengine_kit_faq_4_xengine_kit_faq_4_md_aa2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-faq-xengine-kit-faq-4-xengine-kit-faq-4-md-aa2.json
var site_docs_xengine_kit_guide_xengine_kit_faq_xengine_kit_faq_4_xengine_kit_faq_4_md_aa2_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-faq/xengine-kit-faq-4/xengine-kit-faq-4","title":"空域AI超分的输出颜色附件是否需要通过OH_NativeBuffer创建","description":"输出不需要，仅输入需要通过OH\\\\_NativeBuffer创建。","source":"@site/docs/xengine-kit-guide/xengine-kit-faq/xengine-kit-faq-4/xengine-kit-faq-4.md","sourceDirName":"xengine-kit-guide/xengine-kit-faq/xengine-kit-faq-4","slug":"/xengine-kit-guide/xengine-kit-faq/xengine-kit-faq-4/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-faq/xengine-kit-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"空域AI超分的输出颜色附件是否需要通过OH_NativeBuffer创建","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-faq-4","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自适应VRS深度附件使用说明","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-faq/xengine-kit-faq-3/"},"next":{"title":"Account Kit简介","permalink":"/harmonyos-docs-site/account-kit-guide/account-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-faq/xengine-kit-faq-4/xengine-kit-faq-4.md


const frontMatter = {
	title: '空域AI超分的输出颜色附件是否需要通过OH_NativeBuffer创建',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-faq-4',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '空域AI超分的输出颜色附件是否需要通过OH_NativeBuffer创建';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "空域ai超分的输出颜色附件是否需要通过oh_nativebuffer创建",
        children: "空域AI超分的输出颜色附件是否需要通过OH_NativeBuffer创建"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出不需要，仅输入需要通过OH_NativeBuffer创建。"
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