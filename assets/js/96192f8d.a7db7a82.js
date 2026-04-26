"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["105457"], {
272947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_spatial_recon_kit_guide_spatial_recon_glossary_spatial_recon_glossary_md_961_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-spatial-recon-kit-guide-spatial-recon-glossary-spatial-recon-glossary-md-961.json
var site_docs_spatial_recon_kit_guide_spatial_recon_glossary_spatial_recon_glossary_md_961_namespaceObject = JSON.parse('{"id":"spatial-recon-kit-guide/spatial-recon-glossary/spatial-recon-glossary","title":"Spatial Recon Kit术语","description":"颜色抖动","source":"@site/docs/spatial-recon-kit-guide/spatial-recon-glossary/spatial-recon-glossary.md","sourceDirName":"spatial-recon-kit-guide/spatial-recon-glossary","slug":"/spatial-recon-kit-guide/spatial-recon-glossary/","permalink":"/harmonyos-docs-site/spatial-recon-kit-guide/spatial-recon-glossary/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Spatial Recon Kit术语","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/spatial-recon-glossary","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Spatial Recon Kit简介","permalink":"/harmonyos-docs-site/spatial-recon-kit-guide/spatial-recon-introduction/"},"next":{"title":"加载3DGS模型","permalink":"/harmonyos-docs-site/spatial-recon-kit-guide/spatial-recon-load/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/spatial-recon-kit-guide/spatial-recon-glossary/spatial-recon-glossary.md


const frontMatter = {
	title: 'Spatial Recon Kit术语',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/spatial-recon-glossary',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'Spatial Recon Kit术语';

const assets = {

};



const toc = [{
  "value": "颜色抖动",
  "id": "颜色抖动",
  "level": 2
}, {
  "value": "3DGS",
  "id": "3dgs",
  "level": 2
}, {
  "value": "Kuwahara filter",
  "id": "kuwahara-filter",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "spatial-recon-kit术语",
        children: "Spatial Recon Kit术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "颜色抖动",
      children: "颜色抖动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "颜色抖动通过有规律地混合相邻像素的颜色来模拟更多色彩。它在一定区域内混合排列不同颜色的像素点、使人眼产生一种视觉上的混合效果，从而用有限的颜色深度模拟出更多种颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3dgs",
      children: "3DGS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3D Gaussian Splatting（3D高斯泼溅）。用一定数量的3D高斯球来表示一个3D场景。每个高斯球都有自己的位置、大小、颜色、透明度等属性。渲染时，将这些3D高斯球投影到2D屏幕上，融合成一幅完整的图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kuwahara-filter",
      children: "Kuwahara filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一种滤波器，可以在平滑图像的同时保留图像的边缘信息。"
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