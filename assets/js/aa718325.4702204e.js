"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["168586"], {
713599(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_term_graphic_term_md_aa7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-term-graphic-term-md-aa7.json
var site_docs_arkgraphics_2_d_graphic_term_graphic_term_md_aa7_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-term/graphic-term","title":"图形开发术语","description":"BlendMode","source":"@site/docs/arkgraphics-2d/graphic-term/graphic-term.md","sourceDirName":"arkgraphics-2d/graphic-term","slug":"/arkgraphics-2d/graphic-term/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-term/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"图形开发术语","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphic-term","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图形缓冲区常见稳定性问题 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-common-mistakes/"},"next":{"title":"ArkGraphics 3D简介","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-term/graphic-term.md


const frontMatter = {
	title: '图形开发术语',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphic-term',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '图形开发术语';

const assets = {

};



const toc = [{
  "value": "BlendMode",
  "id": "blendmode",
  "level": 2
}, {
  "value": "字块",
  "id": "字块",
  "level": 2
}, {
  "value": "字型",
  "id": "字型",
  "level": 2
}, {
  "value": "字体",
  "id": "字体",
  "level": 2
}, {
  "value": "字形",
  "id": "字形",
  "level": 2
}, {
  "value": "着色器",
  "id": "着色器",
  "level": 2
}, {
  "value": "图像滤波",
  "id": "图像滤波",
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
        id: "图形开发术语",
        children: "图形开发术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "blendmode",
      children: "BlendMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BlendMode，混合模式，定义当前内容和已有内容如何相互作用产生新的效果，不同的混合模式相互作用叠加的计算方式和效果也会对应有所不同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字块",
      children: "字块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字块，TextBlob，是指使用相同字体的字形元素及其位置的集合。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字型",
      children: "字型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字型，Font，用于管理字体绘制相关属性，包括字体、大小、缩放比例等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字体",
      children: "字体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字体，Typeface，是用于将字符以特定视觉图形样式呈现出来的设计集合，它包括字体名称、粗体、斜体等属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字形",
      children: "字形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字形，Glyph，是字符在特定字体中的具体图形表示，同一字符在不同的字体中通常会对应不同的字形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "着色器",
      children: "着色器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "着色器，Shader，是一种运行程序，主要用于显示图像渲染和处理。其能够控制顶点或像素的处理方式，包括颜色计算、阴影效果等一系列视觉效果。可以针对绘制内容添加不同的着色器效果，从而实现丰富不同的视觉效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图像滤波",
      children: "图像滤波"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像滤波，一种非常重要的图像处理技术，通过滤波操作，可以突出或去除图像中的一些元素成分。可以针对绘制效果添加不同的滤波器，从而实现不同的滤波效果。"
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