"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["117537"], {
370776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_faq_arengine_faq_1_arengine_faq_1_md_296_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-faq-arengine-faq-1-arengine-faq-1-md-296.json
var site_docs_ar_engine_kit_guide_arengine_faq_arengine_faq_1_arengine_faq_1_md_296_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-faq/arengine-faq-1/arengine-faq-1","title":"获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401","description":"现象描述","source":"@site/docs/ar-engine-kit-guide/arengine-faq/arengine-faq-1/arengine-faq-1.md","sourceDirName":"ar-engine-kit-guide/arengine-faq/arengine-faq-1","slug":"/ar-engine-kit-guide/arengine-faq/arengine-faq-1/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-faq/arengine-faq-1/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-faq-1","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"高精几何重建（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-volume-measurement/"},"next":{"title":"摄像头被遮挡一段时间后再放开，输出的位姿有跳变","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-faq/arengine-faq-2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-faq/arengine-faq-1/arengine-faq-1.md


const frontMatter = {
	title: '获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-faq-1',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401';

const assets = {

};



const toc = [{
  "value": "现象描述",
  "id": "现象描述",
  "level": 2
}, {
  "value": "可能原因",
  "id": "可能原因",
  "level": 2
}, {
  "value": "处理步骤",
  "id": "处理步骤",
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
        id: "获取检测平面的二维顶点数组时报错plane-is-nullptr返回错误码401",
        children: "获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "现象描述",
      children: "现象描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getpolygonsize",
        children: "HMS_AREngine_ARPlane_GetPolygonSize"
      }), "获取检测到平面的二维顶点数组大小时报错：“plane is nullptr!”，返回错误码：401。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可能原因",
      children: "可能原因"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初次打开应用还未识别到平面，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getalltrackables",
        children: "HMS_AREngine_ARSession_GetAllTrackables"
      }), "获取的可跟踪对象列表为空，导致后续", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_acquireitem",
        children: "HMS_AREngine_ARTrackableList_AcquireItem"
      }), "获取对应索引的对象也为空，使用前未做有效性判断，使用时出现无效参数错误。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理步骤",
      children: "处理步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者从AR Engine获取平面之后需判断其有效性后使用，例如，进行非空判断。"
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