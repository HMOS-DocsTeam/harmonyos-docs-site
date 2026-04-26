"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["693254"], {
685002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_faq_gameservice_faq_unlogin_gameservice_faq_2_gameservice_faq_2_md_2ef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-faq-gameservice-faq-unlogin-gameservice-faq-2-gameservice-faq-2-md-2ef.json
var site_docs_game_service_kit_guide_gameservice_faq_gameservice_faq_unlogin_gameservice_faq_2_gameservice_faq_2_md_2ef_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-2/gameservice-faq-2","title":"游戏官方账号图标大小是多少？","description":"游戏官方账号ICON大小总和不超过35KB。若超过35KB，调用unionLogin接口时，会出现1002000001错误码。","source":"@site/docs/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-2/gameservice-faq-2.md","sourceDirName":"game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-2","slug":"/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-2/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"游戏官方账号图标大小是多少？","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-faq-2","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"若游戏无HarmonyOS 4及以下系统包时，是否可以不配置APP ID映射关系？","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-1/"},"next":{"title":"游戏如何实现不展示官方账号登录？","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-2/gameservice-faq-2.md


const frontMatter = {
	title: '游戏官方账号图标大小是多少？',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-faq-2',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '游戏官方账号图标大小是多少？';

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
        id: "游戏官方账号图标大小是多少",
        children: "游戏官方账号图标大小是多少？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["游戏官方账号ICON大小总和不超过35KB。若超过35KB，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
        children: "unionLogin"
      }), "接口时，会出现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-error-code/gameservice-error-code#section1002000001-%E6%B8%B8%E6%88%8F%E5%86%85%E9%83%A8%E9%80%9A%E7%94%A8%E9%94%99%E8%AF%AF",
        children: "1002000001"
      }), "错误码。"]
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