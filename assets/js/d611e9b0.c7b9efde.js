"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["928740"], {
542946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_spatial_recon_kit_guide_spatial_recon_introduction_spatial_recon_introduction_md_d61_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-spatial-recon-kit-guide-spatial-recon-introduction-spatial-recon-introduction-md-d61.json
var site_docs_spatial_recon_kit_guide_spatial_recon_introduction_spatial_recon_introduction_md_d61_namespaceObject = JSON.parse('{"id":"spatial-recon-kit-guide/spatial-recon-introduction/spatial-recon-introduction","title":"Spatial Recon Kit简介","description":"Spatial Recon Kit（空间建模套件）集成了3DGS（3D Gaussian Splatting）模型的渲染、运算等能力。便于用户对三维模型实现自定义操作。","source":"@site/docs/spatial-recon-kit-guide/spatial-recon-introduction/spatial-recon-introduction.md","sourceDirName":"spatial-recon-kit-guide/spatial-recon-introduction","slug":"/spatial-recon-kit-guide/spatial-recon-introduction/","permalink":"/harmonyos-docs-site/spatial-recon-kit-guide/spatial-recon-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Spatial Recon Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/spatial-recon-introduction","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"游戏接入秒级启动后无法热更应该如何处理？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-10/"},"next":{"title":"Spatial Recon Kit术语","permalink":"/harmonyos-docs-site/spatial-recon-kit-guide/spatial-recon-glossary/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/spatial-recon-kit-guide/spatial-recon-introduction/spatial-recon-introduction.md


const frontMatter = {
	title: 'Spatial Recon Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/spatial-recon-introduction',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'Spatial Recon Kit简介';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家和地区",
  "id": "支持的国家和地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "与ArkGraphics 3D 模块的关系",
  "id": "与arkgraphics-3d-模块的关系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "spatial-recon-kit简介",
        children: "Spatial Recon Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spatial Recon Kit（空间建模套件）集成了3DGS（3D Gaussian Splatting）模型的渲染、运算等能力。便于用户对三维模型实现自定义操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spatial Recon Kit提供了和空间重建有关的能力，帮助开发者实现三维重建（如3DGS）相关的功能。具体如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3DGS模型加载：加载不同格式的三维模型（MP4、PLY、GLB）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滤镜：对渲染图像进行风格化处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家和地区",
      children: "支持的国家和地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit适用于Phone、Tablet、PC/2in1和TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与arkgraphics-3d-模块的关系",
      children: "与ArkGraphics 3D 模块的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spatial Recon Kit是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-api",
        children: "ArkGraphics 3D 模块"
      }), "的扩展，需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-api",
        children: "ArkGraphics 3D 模块"
      }), "联合使用。"]
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