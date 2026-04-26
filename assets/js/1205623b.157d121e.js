"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["790633"], {
93214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_live_view_kit_guide_liveview_faq_liveview_faq_4_liveview_faq_4_md_120_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-live-view-kit-guide-liveview-faq-liveview-faq-4-liveview-faq-4-md-120.json
var site_docs_live_view_kit_guide_liveview_faq_liveview_faq_4_liveview_faq_4_md_120_namespaceObject = JSON.parse('{"id":"live-view-kit-guide/liveview-faq/liveview-faq-4/liveview-faq-4","title":"关于实况窗模板使用的问题","description":"采用进度可视化模板并且indicatorType为INDICATOR\\\\TYPE\\\\OVERLAY时，图片较宽，无法完全覆盖进度条","source":"@site/docs/live-view-kit-guide/liveview-faq/liveview-faq-4/liveview-faq-4.md","sourceDirName":"live-view-kit-guide/liveview-faq/liveview-faq-4","slug":"/live-view-kit-guide/liveview-faq/liveview-faq-4/","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-faq/liveview-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"关于实况窗模板使用的问题","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-faq-4","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"关于实况窗生命周期的问题","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-faq/liveview-faq-3/"},"next":{"title":"关于实况窗数量约束的问题","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-faq/liveview-faq-5/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/live-view-kit-guide/liveview-faq/liveview-faq-4/liveview-faq-4.md


const frontMatter = {
	title: '关于实况窗模板使用的问题',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-faq-4',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '关于实况窗模板使用的问题';

const assets = {

};



const toc = [{
  "value": "采用进度可视化模板并且indicatorType为INDICATOR_TYPE_OVERLAY时，图片较宽，无法完全覆盖进度条",
  "id": "采用进度可视化模板并且indicatortype为indicator_type_overlay时图片较宽无法完全覆盖进度条",
  "level": 2
}, {
  "value": "如何修改 &quot;实况窗左上角图标&quot;",
  "id": "如何修改-实况窗左上角图标",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "关于实况窗模板使用的问题",
        children: "关于实况窗模板使用的问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "采用进度可视化模板并且indicatortype为indicator_type_overlay时图片较宽无法完全覆盖进度条",
      children: "采用进度可视化模板并且indicatorType为INDICATOR_TYPE_OVERLAY时，图片较宽，无法完全覆盖进度条"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当indicatorType=INDICATOR_TYPE_OVERLAY时，图标区域为64*56vp，图片较宽时会按比例进行缩放。应用需要自己修改图片大小和样式来达到想要的效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["理想效果图 ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(915668)/* ["default"] */.A) + "",
        width: "225",
        height: "191"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何修改-实况窗左上角图标",
      children: "如何修改 \"实况窗左上角图标\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除导航模板通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#navigationlayout",
        children: "currentNavigationIcon"
      }), "设置左上角图标外，其他模板不支持修改实况窗左上角图标，默认展示为应用Logo图标。"]
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
915668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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