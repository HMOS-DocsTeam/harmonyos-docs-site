"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["922722"], {
454727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_faq_store_faq_30_store_faq_30_md_211_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-faq-store-faq-30-store-faq-30-md-211.json
var site_docs_store_kit_guide_store_faq_store_faq_30_store_faq_30_md_211_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-faq/store-faq-30/store-faq-30","title":"按需加载场景中，用户在加载指定模块后是否可以卸载，然后重新发起请求？","description":"可以卸载指定模块后重新调用fetchModules接口发起按需加载请求。","source":"@site/docs/store-kit-guide/store-faq/store-faq-30/store-faq-30.md","sourceDirName":"store-kit-guide/store-faq/store-faq-30","slug":"/store-kit-guide/store-faq/store-faq-30/","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-30/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"按需加载场景中，用户在加载指定模块后是否可以卸载，然后重新发起请求？","sidebar_position":20,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-faq-30","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"按需加载场景中，应用在加载指定模块后重启，还是已加载状态吗？是否需要重新发起按需加载请求？","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-29/"},"next":{"title":"按需加载场景中，是否支持依赖模块同步加载?","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/appgallery-faq-33/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-faq/store-faq-30/store-faq-30.md


const frontMatter = {
	title: '按需加载场景中，用户在加载指定模块后是否可以卸载，然后重新发起请求？',
	sidebar_position: 20,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-faq-30',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '按需加载场景中，用户在加载指定模块后是否可以卸载，然后重新发起请求？';

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
        id: "按需加载场景中用户在加载指定模块后是否可以卸载然后重新发起请求",
        children: "按需加载场景中，用户在加载指定模块后是否可以卸载，然后重新发起请求？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以卸载指定模块后重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanagerfetchmodules",
        children: "fetchModules"
      }), "接口发起按需加载请求。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hdc指令卸载指定应用的指定模块后重新发起请求，卸载命令请参考：hdc shell bm uninstall -n com.xxxx.instantdownloaddemo -m modulelibName。"
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