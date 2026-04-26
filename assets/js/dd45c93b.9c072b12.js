"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["942254"], {
912068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_runtime_arkts_runtime_module_load_module_base_nodeapi_load_module_base_nodeapi_md_dd4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-runtime-arkts-runtime-module-load-module-base-nodeapi-load-module-base-nodeapi-md-dd4.json
var site_docs_arkts_arkts_runtime_arkts_runtime_module_load_module_base_nodeapi_load_module_base_nodeapi_md_dd4_namespaceObject = JSON.parse('{"id":"arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi/load-module-base-nodeapi","title":"基于Node-API加载模块","description":"Node-API中有多种方式支持开发者在C++侧加载工程内模块及文件。推荐使用napi\\\\load\\\\module\\\\with\\\\info接口。","source":"@site/docs/arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi/load-module-base-nodeapi.md","sourceDirName":"arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi","slug":"/arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi/","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"基于Node-API加载模块","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/load-module-base-nodeapi","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"静态方式加载Native模块","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/arkts-import-native-module/"},"next":{"title":"模块加载副作用及优化","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi/load-module-base-nodeapi.md


const frontMatter = {
	title: '基于Node-API加载模块',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/load-module-base-nodeapi',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '基于Node-API加载模块';

const assets = {

};



const toc = [{
  "value": "napi_load_module_with_info",
  "id": "napi_load_module_with_info",
  "level": 2
}, {
  "value": "napi_load_module",
  "id": "napi_load_module",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "基于node-api加载模块",
        children: "基于Node-API加载模块"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API中有多种方式支持开发者在C++侧加载工程内模块及文件。推荐使用napi_load_module_with_info接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_load_module_with_info",
      children: "napi_load_module_with_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在主线程或子线程内加载hap/hsp/har/native模块，使用时必须标记所加载的包的信息，支持多种场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module-with-info",
        children: "napi_load_module_with_info"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_load_module",
      children: "napi_load_module"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在主线程内加载hap/hsp/har/native模块，参数传递简便。加载场景有限制，例如无法在子线程中使用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module",
        children: "napi_load_module"
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