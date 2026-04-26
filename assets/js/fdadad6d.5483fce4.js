"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["989124"], {
959683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_primitive_drawing_overview_primitive_drawing_overview_md_fda_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-primitive-drawing-primitive-drawing-overview-primitive-drawing-overview-md-fda.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_primitive_drawing_overview_primitive_drawing_overview_md_fda_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview/primitive-drawing-overview","title":"图元绘制概述","description":"无论多复杂的图形，都是由基础的图元组合而来。Canvas画布提供了丰富的图元绘制功能，可以满足各种基础图元的绘制需求。本节介绍了几何形状绘制（点、圆、矩形等），图片绘制和字块绘制，并提供了示例代码，开发者可以在此基础上实现需要的UI效果。","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview/primitive-drawing-overview.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview","slug":"/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"图元绘制概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/primitive-drawing-overview","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"复杂绘制效果（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c/"},"next":{"title":"几何形状绘制（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview/primitive-drawing-overview.md


const frontMatter = {
	title: '图元绘制概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/primitive-drawing-overview',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '图元绘制概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "图元绘制概述",
        children: "图元绘制概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无论多复杂的图形，都是由基础的图元组合而来。Canvas画布提供了丰富的图元绘制功能，可以满足各种基础图元的绘制需求。本节介绍了几何形状绘制（点、圆、矩形等），图片绘制和字块绘制，并提供了示例代码，开发者可以在此基础上实现需要的UI效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图元绘制是图形绘制的最后一步，图元绘制之前需要先创建Canvas并按需设置必要的绘制效果。"
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