"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["669945"], {
680621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_concurrency_overview_concurrency_overview_md_a38_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-concurrency-overview-concurrency-overview-md-a38.json
var site_docs_arkts_arkts_concurrency_concurrency_overview_concurrency_overview_md_a38_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/concurrency-overview/concurrency-overview","title":"并发概述","description":"并发指在同一时间内，多个任务同时执行。在多核设备上，任务可以在不同CPU上并行执行。对于单核设备，尽管多个任务不会同时执行，但CPU会在某个任务休眠或进行I/O操作时切换任务，调度其他任务，提高CPU的资源利用率。","source":"@site/docs/arkts/arkts-concurrency/concurrency-overview/concurrency-overview.md","sourceDirName":"arkts/arkts-concurrency/concurrency-overview","slug":"/arkts/arkts-concurrency/concurrency-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/concurrency-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"并发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/concurrency-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基础库常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-utils/commonlibrary-faq/"},"next":{"title":"异步并发 (Promise和async/await)","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/async-concurrency-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/concurrency-overview/concurrency-overview.md


const frontMatter = {
	title: '并发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/concurrency-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '并发概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "并发概述",
        children: "并发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并发指在同一时间内，多个任务同时执行。在多核设备上，任务可以在不同CPU上并行执行。对于单核设备，尽管多个任务不会同时执行，但CPU会在某个任务休眠或进行I/O操作时切换任务，调度其他任务，提高CPU的资源利用率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了提升应用的响应速度和帧率，避免耗时任务影响UI主线程，ArkTS提供了异步并发和多线程并发两种处理策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["异步并发是指异步代码在执行到一定程度后暂停，并在未来某个时间点继续执行，同一时间只有一段代码执行。ArkTS通过Promise和async/await提供异步并发能力，适用于单次I/O任务。详细请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/async-concurrency-overview",
          children: "使用异步并发能力"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多线程并发允许同时执行多段代码。UI主线程继续响应用户操作和更新UI，后台线程执行耗时操作，避免应用卡顿。ArkTS通过TaskPool和Worker提供多线程并发能力，适用于", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview",
          children: "耗时任务"
        }), "等并发场景。详细请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
          children: "多线程并发概述"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在并发多线程场景下，不同线程间需要进行数据通信。不同类别的对象采用不同的传输方式，如拷贝或内存共享。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["并发能力广泛应用于多种场景，包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/async-concurrency-overview",
        children: "异步并发任务"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview",
        children: "耗时任务"
      }), "（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development",
        children: "CPU密集型任务"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development",
        children: "I/O密集型任务"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development",
        children: "同步任务"
      }), "等）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-overview",
        children: "长时任务"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview",
        children: "常驻任务"
      }), "等。开发者可以根据不同的任务诉求和场景，选择相应的并发策略进行优化和开发，具体案例可以参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide",
        children: "应用多线程开发实践案例"
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