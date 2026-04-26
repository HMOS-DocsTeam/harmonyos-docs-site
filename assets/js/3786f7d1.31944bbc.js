"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["254460"], {
855772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_curve_arkts_curve_overview_arkts_curve_overview_md_378_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-curve-arkts-curve-overview-arkts-curve-overview-md-378.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_curve_arkts_curve_overview_arkts_curve_overview_md_378_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-curve-overview/arkts-curve-overview","title":"动画曲线概述","description":"动画曲线是属性关于时间的变化函数，决定属性变化时产生动画的运动轨迹。某一时刻下动画曲线的斜率代表动画的速度，对应属性变化的快慢。一条优秀的动画曲线具备连续光滑、符合用户意图、符合物理世界客观规律的特点。开发者可结合用户的使用场景和意图，为动效选取合适的动画曲线。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-curve-overview/arkts-curve-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-curve-overview","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-curve-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-curve-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"动画曲线概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-curve-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation/"},"next":{"title":"传统曲线","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-curve-overview/arkts-curve-overview.md


const frontMatter = {
	title: '动画曲线概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-curve-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '动画曲线概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "动画曲线概述",
        children: "动画曲线概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动画曲线是属性关于时间的变化函数，决定属性变化时产生动画的运动轨迹。某一时刻下动画曲线的斜率代表动画的速度，对应属性变化的快慢。一条优秀的动画曲线具备连续光滑、符合用户意图、符合物理世界客观规律的特点。开发者可结合用户的使用场景和意图，为动效选取合适的动画曲线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据动画曲线是否符合物理世界客观规律，可将其分为物理曲线（ArkUI当前提供了多种物理弹簧曲线）和传统曲线两种类型，具体如下。相比于传统曲线，物理曲线产生的运动轨迹更加符合用户认知，有助于创造自然生动的动画效果，建议开发者优先使用物理曲线。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve",
          children: "传统曲线"
        }), "：基于数学公式，创造形状符合开发者预期的动画曲线，以三阶贝塞尔曲线为代表。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve",
          children: "弹簧曲线"
        }), "：阻尼弹簧曲线，简称弹簧曲线。"]
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