"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["398958"], {
902399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_faqs_cannkit_faqs_1_cannkit_faqs_1_md_a5d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-faqs-cannkit-faqs-1-cannkit-faqs-1-md-a5d.json
var site_docs_cann_kit_guide_cannkit_faqs_cannkit_faqs_1_cannkit_faqs_1_md_a5d_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-faqs/cannkit-faqs-1/cannkit-faqs-1","title":"判断模型能否在手机上运行？","description":"通过调用接口HMS\\\\HiAICompatibility\\\\CheckFromFile或者HMS\\\\HiAICompatibility\\\\CheckFromBuffer，传入编译后的模型文件或者模型buffer，如果返回“HIAI\\\\COMPATIBILITY\\\\COMPATIBLE”表示兼容性检查通过，模型可以在手机上运行。","source":"@site/docs/cann-kit-guide/cannkit-faqs/cannkit-faqs-1/cannkit-faqs-1.md","sourceDirName":"cann-kit-guide/cannkit-faqs/cannkit-faqs-1","slug":"/cann-kit-guide/cannkit-faqs/cannkit-faqs-1/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-faqs/cannkit-faqs-1/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"判断模型能否在手机上运行？","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-faqs-1","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"算子编译迁移指导","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-operator-compilation-migration-guide/"},"next":{"title":"推理函数支持的数据格式有哪些？","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-faqs/cannkit-faqs-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-faqs/cannkit-faqs-1/cannkit-faqs-1.md


const frontMatter = {
	title: '判断模型能否在手机上运行？',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-faqs-1',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '判断模型能否在手机上运行？';

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
        id: "判断模型能否在手机上运行",
        children: "判断模型能否在手机上运行？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaicompatibility_checkfromfile",
        children: "HMS_HiAICompatibility_CheckFromFile"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaicompatibility_checkfrombuffer",
        children: "HMS_HiAICompatibility_CheckFromBuffer"
      }), "，传入编译后的模型文件或者模型buffer，如果返回“HIAI_COMPATIBILITY_COMPATIBLE”表示兼容性检查通过，模型可以在手机上运行。"]
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