"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["753482"], {
812199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_utils_containers_container_overview_container_overview_md_573_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-utils-containers-container-overview-container-overview-md-573.json
var site_docs_arkts_arkts_utils_containers_container_overview_container_overview_md_573_namespaceObject = JSON.parse('{"id":"arkts/arkts-utils/containers/container-overview/container-overview","title":"容器类库概述","description":"容器类库用于存储各种数据类型的元素，提供一系列处理数据的方法，作为纯数据结构容器具备高效处理特性。","source":"@site/docs/arkts/arkts-utils/containers/container-overview/container-overview.md","sourceDirName":"arkts/arkts-utils/containers/container-overview","slug":"/arkts/arkts-utils/containers/container-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-utils/containers/container-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"容器类库概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/container-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JSON扩展库","permalink":"/harmonyos-docs-site/arkts/arkts-utils/arkts-json/"},"next":{"title":"线性容器","permalink":"/harmonyos-docs-site/arkts/arkts-utils/containers/linear-container/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-utils/containers/container-overview/container-overview.md


const frontMatter = {
	title: '容器类库概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/container-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '容器类库概述';

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
        id: "容器类库概述",
        children: "容器类库概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "容器类库用于存储各种数据类型的元素，提供一系列处理数据的方法，作为纯数据结构容器具备高效处理特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "容器类使用静态语言实现，限制了存储位置和属性，不支持自定义属性和方法，确保每种类型的数据在实现其功能的过程中避免冗余逻辑，从而实现高效的数据访问，提升应用性能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前提供了线性和非线性两类容器。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-utils/containers/linear-container",
        children: "线性容器"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-utils/containers/nonlinear-container",
        children: "非线性容器"
      }), "均非多线程安全的。"]
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