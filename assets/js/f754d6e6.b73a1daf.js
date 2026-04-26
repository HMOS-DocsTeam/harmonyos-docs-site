"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["559527"], {
824542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_faq_map_faq_2_map_faq_2_md_f75_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-faq-map-faq-2-map-faq-2-md-f75.json
var site_docs_map_kit_guide_map_faq_map_faq_2_map_faq_2_md_f75_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-faq/map-faq-2/map-faq-2","title":"siteId参数如何获取","description":"siteId有多种获取方式，这里提供其中的3种作为参考：","source":"@site/docs/map-kit-guide/map-faq/map-faq-2/map-faq-2.md","sourceDirName":"map-kit-guide/map-faq/map-faq-2","slug":"/map-kit-guide/map-faq/map-faq-2/","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"siteId参数如何获取","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-faq-2","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"地图不显示","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-1/"},"next":{"title":"手势卡顿或者不生效","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-faq/map-faq-2/map-faq-2.md


const frontMatter = {
	title: 'siteId参数如何获取',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-faq-2',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'siteId参数如何获取';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "siteid参数如何获取",
        children: "siteId参数如何获取"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "siteId有多种获取方式，这里提供其中的3种作为参考："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onpoiclick",
          children: "on('poiClick')"
        }), "方法获取。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-location-services/map-site-search",
          children: "位置搜索"
        }), "相关接口（关键字搜索、周边搜索、地点详情、自动补全、正地理编码）的返回结果中获取。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap#chooselocation",
          children: "chooseLocation"
        }), "接口的返回结果中获取。"]
      }), "\n"]
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