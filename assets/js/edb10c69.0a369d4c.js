"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["109184"], {
970124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_insight_session_allocations_ide_insight_session_boot_memory_ide_insight_session_boot_memory_md_edb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-insight-session-allocations-ide-insight-session-boot-memory-ide-insight-session-boot-memory-md-edb.json
var site_docs_ide_insight_session_allocations_ide_insight_session_boot_memory_ide_insight_session_boot_memory_md_edb_namespaceObject = JSON.parse('{"id":"ide-insight-session-allocations/ide-insight-session-boot-memory/ide-insight-session-boot-memory","title":"启动时内存分析","description":"应用/元服务在启动过程中对内存资源的占用情况，是开发者较为关心的问题。DevEco Profiler的Allocation分析任务，提供了启动内存分析能力，协助开发者优化启动过程的内存占用。","source":"@site/docs/ide-insight-session-allocations/ide-insight-session-boot-memory/ide-insight-session-boot-memory.md","sourceDirName":"ide-insight-session-allocations/ide-insight-session-boot-memory","slug":"/ide-insight-session-allocations/ide-insight-session-boot-memory/","permalink":"/harmonyos-docs-site/ide-insight-session-allocations/ide-insight-session-boot-memory/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"启动时内存分析","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-boot-memory","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"内存分析数据筛选","permalink":"/harmonyos-docs-site/ide-insight-session-allocations/ide-insight-session-allocations-data-filtering/"},"next":{"title":"案例：Native内存泄漏分析","permalink":"/harmonyos-docs-site/ide-insight-session-allocations/ide-native-allocation-case/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-insight-session-allocations/ide-insight-session-boot-memory/ide-insight-session-boot-memory.md


const frontMatter = {
	title: '启动时内存分析',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-boot-memory',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '启动时内存分析';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "启动时内存分析",
        children: "启动时内存分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用/元服务在启动过程中对内存资源的占用情况，是开发者较为关心的问题。DevEco Profiler的Allocation分析任务，提供了启动内存分析能力，协助开发者优化启动过程的内存占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对调测应用的当前运行情况，DevEco Profiler对其做如下处理："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如选择的是已安装但未启动的应用，在启动该分析任务时，会自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如选择的是正在运行的应用，在启动该分析任务时，会先将应用停止，再自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体操作方法为：在任务列表中单击Allocation任务后的", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(987979)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "15",
        height: "17"
      }), "按钮。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在分析结束后，呈现出的数据类型以及相应的处理方法，与非启动过程的分析相同，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-allocations/ide-insight-session-allocations-memory",
        children: "内存分析介绍"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-allocations/ide-insight-session-allocations-data-filtering",
        children: "内存分析数据筛选"
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
987979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAYAAAACCvahAAABHUlEQVQ4EaWSza1GUBCGlaADOqADOmBrRQc6oAQLBSjBxp4dOyWICpQwN88kc/LlJN+9NzHJyfmZed75IZAXFrxg5d/wdV2ybZscx+Hy/QlP0yRpmkqSJFIUhWRZJsMwqMBX+HkeyfNcg8lqtq6rvnF38HmeGhxFkbDCMBSytm0rZVkKfszeHEyWOI7VoREiQjayUG7f91LXtboofZ5nPWtm1MxpGfAiShUIAyDI3UxhlJum0cEEQaCQBZgIO8OyrNwVRpFyrB+EfKN3q858bmA84BzHUXdfAB/in+ZgnCy+6bIs7mwArbE+zcFd1ylYVZXu+77rpA32+0XEwdbTfd86FP4i5sA8aAHYNwf7DiAAll+uxX6FLeC3/RX8A1gpYbfFqdsPAAAAAElFTkSuQmCC");

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