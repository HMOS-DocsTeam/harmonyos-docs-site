"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["687359"], {
176874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_cross_language_interaction_arkts_cross_language_interaction_md_ad3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-cross-language-interaction-arkts-cross-language-interaction-md-ad3.json
var site_docs_arkts_arkts_cross_language_interaction_arkts_cross_language_interaction_md_ad3_namespaceObject = JSON.parse('{"id":"arkts/arkts-cross-language-interaction/arkts-cross-language-interaction","title":"ArkTS跨语言交互","description":"除了支持使用ArkTS开发外，开发者还可以通过Node-API实现ArkTS与C/C++(Native)的跨语言交互能力。","source":"@site/docs/arkts/arkts-cross-language-interaction/arkts-cross-language-interaction.md","sourceDirName":"arkts/arkts-cross-language-interaction","slug":"/arkts/arkts-cross-language-interaction/","permalink":"/harmonyos-docs-site/arkts/arkts-cross-language-interaction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"ArkTS跨语言交互","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-cross-language-interaction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"并发常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/concurrency-faq/"},"next":{"title":"ArkTS运行时概述","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-cross-language-interaction/arkts-cross-language-interaction.md


const frontMatter = {
	title: 'ArkTS跨语言交互',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-cross-language-interaction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS跨语言交互';

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
        id: "arkts跨语言交互",
        children: "ArkTS跨语言交互"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了支持使用ArkTS开发外，开发者还可以通过Node-API实现ArkTS与C/C++(Native)的跨语言交互能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS的Node-API是基于Node.js社区版本的扩展实现，但与原生Node-API并不完全兼容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API进行跨语言开发流程"
      }), "，基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces#node-api%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
        children: "Node-API支持的数据类型"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi",
        children: "Node-API接口"
      }), "进行Native能力的开发和封装，并通过在ArkTS侧导入Native模块的方式实现跨语言调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension",
        children: "Node-API扩展能力接口"
      }), "提供了增强功能，支持更灵活的ArkTS交互和自定义对象创建。开发者可结合Node-API的扩展能力进行功能扩展，并参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-guidelines",
        children: "Node-API开发规范"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-questions/use-napi-faqs",
        children: "Node-API常见问题"
      }), "进行跨语言功能开发。"]
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