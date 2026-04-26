"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["909837"], {
623850(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_faq_gameservice_faq_unlogin_gameservice_faq_4_gameservice_faq_4_md_a31_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-faq-gameservice-faq-unlogin-gameservice-faq-4-gameservice-faq-4-md-a31.json
var site_docs_game_service_kit_guide_gameservice_faq_gameservice_faq_unlogin_gameservice_faq_4_gameservice_faq_4_md_a31_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-4/gameservice-faq-4","title":"玩家选错登录账号后如何处理？","description":"玩家点击游戏内的“切换账号”按钮拉起联合登录面板，支持玩家重新选择华为账号登录或游戏官方账号登录。开发者在游戏内提供切换账号功能的开发步骤请参见游戏内切换账号。","source":"@site/docs/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-4/gameservice-faq-4.md","sourceDirName":"game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-4","slug":"/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-4/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"玩家选错登录账号后如何处理？","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-faq-4","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"游戏如何实现不展示官方账号登录？","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-3/"},"next":{"title":"使用C#语言开发的游戏是否可以接入游戏场景感知功能？","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-faq/gameservice-faq-performance/gameservice-faq-6/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-4/gameservice-faq-4.md


const frontMatter = {
	title: '玩家选错登录账号后如何处理？',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-faq-4',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '玩家选错登录账号后如何处理？';

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
        id: "玩家选错登录账号后如何处理",
        children: "玩家选错登录账号后如何处理？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["玩家点击游戏内的“切换账号”按钮拉起联合登录面板，支持玩家重新选择华为账号登录或游戏官方账号登录。开发者在游戏内提供切换账号功能的开发步骤请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-official#%E6%B8%B8%E6%88%8F%E5%86%85%E5%88%87%E6%8D%A2%E8%B4%A6%E5%8F%B7",
        children: "游戏内切换账号"
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