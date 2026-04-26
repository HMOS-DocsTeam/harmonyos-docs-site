"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["223386"], {
930245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_data_augmentation_kit_guide_dataaugmentation_rag_data_augmentation_rag_overview_data_augmentation_rag_overview_md_184_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-data-augmentation-kit-guide-dataaugmentation-rag-data-augmentation-rag-overview-data-augmentation-rag-overview-md-184.json
var site_docs_data_augmentation_kit_guide_dataaugmentation_rag_data_augmentation_rag_overview_data_augmentation_rag_overview_md_184_namespaceObject = JSON.parse('{"id":"data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview/data-augmentation-rag-overview","title":"RAG概述","description":"RAG（Retrieval-Augmented Generation，检索增强生成）融合了智能检索与知识库技术，通过知识库驱动内容生成，具备强大的可解释性和深度定制能力。应用可通过接入Data Augmentation Kit提供的RAG能力，快速实现知识问答、智慧助手等业务场景。本模块还支持通过模板灵活配置RAG运行的核心参数，实现全流程的深度定制。","source":"@site/docs/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview/data-augmentation-rag-overview.md","sourceDirName":"data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview","slug":"/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview/","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"RAG概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-rag-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Data Augmentation Kit简介","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-introduction/"},"next":{"title":"知识问答","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview/data-augmentation-rag-overview.md


const frontMatter = {
	title: 'RAG概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-rag-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'RAG概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "rag概述",
        children: "RAG概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RAG（Retrieval-Augmented Generation，检索增强生成）融合了智能检索与知识库技术，通过知识库驱动内容生成，具备强大的可解释性和深度定制能力。应用可通过接入Data Augmentation Kit提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api",
        children: "RAG"
      }), "能力，快速实现知识问答、智慧助手等业务场景。本模块还支持通过模板灵活配置RAG运行的核心参数，实现全流程的深度定制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其工作原理为：请求大语言模型解析用户问题，智能检索知识库内容，最终由大模型融合检索结果并生成自然流畅的回复。下文将以流式的知识问答场景为例，详细说明RAG的使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(967192)/* ["default"] */.A) + "",
        width: "885",
        height: "443"
      })
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
967192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798632-2c61b5da8d4f9f0c44dff8adb44dbd33.png");

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