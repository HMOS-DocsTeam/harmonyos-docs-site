"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["792867"], {
645268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_3_graphics_accelerate_launch_faq_3_md_cac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-faq-graphics-accelerate-launch-faq-graphics-accelerate-launch-faq-3-graphics-accelerate-launch-faq-3-md-cac.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_3_graphics_accelerate_launch_faq_3_md_cac_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-3/graphics-accelerate-launch-faq-3","title":"快速启动的游戏存在三方SDK功能异常，应该如何排查？","description":"在秒级启动使能后，如果用户对游戏进行上滑移除操作，系统会对游戏进程进行深度冻结和内存换出。此时游戏进程、ArkTS Runtime、AbilityStage均不会被销毁，只有UIAbility会经历完整的创建到销毁生命周期。因此，由ArkTS定义的全局变量、静态变量、AppStorage变量、globalThis变量以及单例对象等都不会被销毁或重置。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-3/graphics-accelerate-launch-faq-3.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-3","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-3/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-3/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"快速启动的游戏存在三方SDK功能异常，应该如何排查？","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-3","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"游戏上划退出后，场景切换阶段存在振动，应该如何避免？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-2/"},"next":{"title":"游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-4/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-3/graphics-accelerate-launch-faq-3.md


const frontMatter = {
	title: '快速启动的游戏存在三方SDK功能异常，应该如何排查？',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-3',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '快速启动的游戏存在三方SDK功能异常，应该如何排查？';

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
        id: "快速启动的游戏存在三方sdk功能异常应该如何排查",
        children: "快速启动的游戏存在三方SDK功能异常，应该如何排查？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在秒级启动使能后，如果用户对游戏进行上滑移除操作，系统会对游戏进程进行深度冻结和内存换出。此时游戏进程、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-overview",
        children: "ArkTS Runtime"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage",
        children: "AbilityStage"
      }), "均不会被销毁，只有", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability",
        children: "UIAbility"
      }), "会经历完整的创建到销毁生命周期。因此，由ArkTS定义的全局变量、静态变量、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "变量、globalThis变量以及单例对象等都不会被销毁或重置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "三方SDK的生命周期通常与进程生命周期保持一致。当进程未被销毁时，已创建的SDK实例会一直保留在内存中。如果在下一次秒级启动时再次执行SDK初始化逻辑，可能会因重复创建SDK实例而导致功能异常。因此，建议开发者在应用侧维护SDK初始化状态标识（例如全局状态变量或单例状态），用于记录SDK是否已经完成初始化。在应用启动或Ability创建时，先判断SDK是否已初始化，若未初始化则执行初始化；若已初始化则复用已有实例，避免重复创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过这种方式，可以确保在秒级启动场景下SDK初始化逻辑只执行一次，从而避免因重复初始化导致的异常问题。"
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