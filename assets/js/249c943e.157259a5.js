"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["721971"], {
732530(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_pen_kit_guide_pen_faq_pen_faq_6_pen_faq_6_md_249_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-pen-kit-guide-pen-faq-pen-faq-6-pen-faq-6-md-249.json
var site_docs_system_hardware_pen_kit_guide_pen_faq_pen_faq_6_pen_faq_6_md_249_namespaceObject = JSON.parse('{"id":"system-hardware/pen-kit-guide/pen-faq/pen-faq-6/pen-faq-6","title":"集成了Pen Kit手写套件，还需要集成一笔成形吗？","description":"不需要，手写套件已经自带一笔成形功能。","source":"@site/docs/system-hardware/pen-kit-guide/pen-faq/pen-faq-6/pen-faq-6.md","sourceDirName":"system-hardware/pen-kit-guide/pen-faq/pen-faq-6","slug":"/system-hardware/pen-kit-guide/pen-faq/pen-faq-6/","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-faq/pen-faq-6/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"集成了Pen Kit手写套件，还需要集成一笔成形吗？","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-faq-6","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"集成了Pen Kit手写套件，还需要集成报点预测吗？","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-faq/pen-faq-5/"},"next":{"title":"Pen Kit报点预测功能能够调整预测的程度吗？","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-faq/pen-faq-7/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/pen-kit-guide/pen-faq/pen-faq-6/pen-faq-6.md


const frontMatter = {
	title: '集成了Pen Kit手写套件，还需要集成一笔成形吗？',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-faq-6',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '集成了Pen Kit手写套件，还需要集成一笔成形吗？';

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
        id: "集成了pen-kit手写套件还需要集成一笔成形吗",
        children: "集成了Pen Kit手写套件，还需要集成一笔成形吗？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不需要，手写套件已经自带一笔成形功能。"
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