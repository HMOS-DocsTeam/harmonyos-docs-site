"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["267847"], {
732911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_time_consuming_task_time_consuming_task_overview_time_consuming_task_overview_md_63f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-time-consuming-task-time-consuming-task-overview-time-consuming-task-overview-md-63f.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_time_consuming_task_time_consuming_task_overview_time_consuming_task_overview_md_63f_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview/time-consuming-task-overview","title":"耗时任务并发场景简介","description":"耗时任务是指需要较长时间执行的任务，如果在UI主线程执行，可能导致应用卡顿、掉帧或响应延迟。典型的耗时任务包括CPU密集型任务、I/O密集型任务和同步任务。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview/time-consuming-task-overview.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview","slug":"/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"耗时任务并发场景简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/time-consuming-task-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用多线程开发概述","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-overview/"},"next":{"title":"CPU密集型任务开发指导 (TaskPool和Worker)","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview/time-consuming-task-overview.md


const frontMatter = {
	title: '耗时任务并发场景简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/time-consuming-task-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '耗时任务并发场景简介';

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
        id: "耗时任务并发场景简介",
        children: "耗时任务并发场景简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "耗时任务是指需要较长时间执行的任务，如果在UI主线程执行，可能导致应用卡顿、掉帧或响应延迟。典型的耗时任务包括CPU密集型任务、I/O密集型任务和同步任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的业务场景分类如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "常见业务场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "具体业务描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否为CPU密集型任务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否为I/O密集型任务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否为同步任务"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片/视频编解码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将图片或视频进行编解码再展示。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "压缩/解压缩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解压本地压缩包或压缩本地文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSON解析"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "序列化和反序列化JSON字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "模型运算"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对数据进行模型运算分析等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "网络下载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密集网络请求下载资源、图片、文件等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "数据库操作"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将聊天记录、页面布局信息、音乐列表信息等保存到数据库，或者应用二次启动时，读取数据库展示相关信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
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