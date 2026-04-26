"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["836739"], {
320402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_resident_task_resident_task_overview_resident_task_overview_md_3e4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-resident-task-resident-task-overview-resident-task-overview-md-3e4.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_resident_task_resident_task_overview_resident_task_overview_md_3e4_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview/resident-task-overview","title":"常驻任务并发场景简介","description":"在应用业务实现中，对于耗时较长（超过3分钟）且并发量较小的常驻任务，建议使用Worker在后台线程中执行这些操作，以避免阻塞UI主线程，防止出现丢帧、卡顿等影响用户体验的问题。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview/resident-task-overview.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview","slug":"/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"常驻任务并发场景简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/resident-task-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"长时任务开发指导（TaskPool）","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide/"},"next":{"title":"常驻任务开发指导（Worker）","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview/resident-task-overview.md


const frontMatter = {
	title: '常驻任务并发场景简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/resident-task-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '常驻任务并发场景简介';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "常驻任务并发场景简介",
        children: "常驻任务并发场景简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用业务实现中，对于耗时较长（超过3分钟）且并发量较小的常驻任务，建议使用Worker在后台线程中执行这些操作，以避免阻塞UI主线程，防止出现丢帧、卡顿等影响用户体验的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常驻任务是指相比于短时任务，时间更长的任务，可能跟UI主线程生命周期一致。相比于长时任务，常驻任务更倾向于跟线程绑定的任务，单次运行时间更长（比如超过3分钟）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于常驻任务，较为常见的业务场景如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "常见业务场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "具体业务描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "游戏中台场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动子线程作为游戏业务的主逻辑线程，UI线程只负责渲染。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "长耗时任务场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台长时间的模型预测任务以及硬件测试等。"
          })]
        })]
      })]
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