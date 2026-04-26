"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["154333"], {
877164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_profiler_ide_profiler_layout_ide_profiler_layout_md_6e0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-profiler-ide-profiler-layout-ide-profiler-layout-md-6e0.json
var site_docs_ide_profiler_ide_profiler_layout_ide_profiler_layout_md_6e0_namespaceObject = JSON.parse('{"id":"ide-profiler/ide-profiler-layout/ide-profiler-layout","title":"界面布局","description":"DevEco Profiler工具的界面分为两大区域：","source":"@site/docs/ide-profiler/ide-profiler-layout/ide-profiler-layout.md","sourceDirName":"ide-profiler/ide-profiler-layout","slug":"/ide-profiler/ide-profiler-layout/","permalink":"/harmonyos-docs-site/ide-profiler/ide-profiler-layout/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"界面布局","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-layout","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"性能调优工具简介","permalink":"/harmonyos-docs-site/ide-insight-description/"},"next":{"title":"会话区","permalink":"/harmonyos-docs-site/ide-profiler/ide-profiler-session/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-profiler/ide-profiler-layout/ide-profiler-layout.md


const frontMatter = {
	title: '界面布局',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-layout',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '界面布局';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "界面布局",
        children: "界面布局"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(661996)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1446",
        height: "489"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Profiler工具的界面分为两大区域："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["①", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-profiler/ide-profiler-session",
        children: "会话区"
      }), "：负责调优会话的管理。会话区提供了性能实时监控工具Realtime Monitor来帮助开发者先明确问题场景，完成问题的发现和初步定界。开发者可以在会话区选择待调优的设备、应用及当前应用进程，当前已创建的调优分析任务将在下方以列表的形式展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个会话是一份独立完整的性能数据单位，是由开发者通过一次录制得到的，同一个会话中的各种数据经过工具的处理可以互相关联，而不同会话间的数据，由于来自不同时间段的录制，不会具备关联关系。实时监控本质上也是一种会话，是由实时监控这个场景模板创建的。录制会话时需要注意，确保场景复现完整后再结束该次会话的录制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时会话区提供Frame、Launch等一系列场景化分析任务类型，帮助开发者有针对性的采集并展示更多更详细的数据，这些数据将会还原对应场景下的应用运行状况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["②", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-profiler/ide-profiler-data",
        children: "数据区"
      }), "：负责性能数据的可视化呈现。包含工具控制栏、时间轴、泳道区域、详情区域，通过不同泳道展示，直观展示调优详情。"]
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
661996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833119-661e339f0390786547fb4af4e6d984f3.png");

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