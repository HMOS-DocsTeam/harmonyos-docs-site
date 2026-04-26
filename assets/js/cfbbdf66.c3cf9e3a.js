"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["853867"], {
356980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_overview_multithread_develop_overview_md_cfb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-overview-multithread-develop-overview-md-cfb.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_overview_multithread_develop_overview_md_cfb_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-overview/multithread-develop-overview","title":"应用多线程开发概述","description":"在ArkTS应用开发中，不同业务场景需要不同的并发能力和任务类型。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-overview/multithread-develop-overview.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-overview","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用多线程开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multithread-develop-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多级Worker间高性能消息通信","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-postmessage-sendable/"},"next":{"title":"耗时任务并发场景简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-overview/multithread-develop-overview.md


const frontMatter = {
	title: '应用多线程开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multithread-develop-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用多线程开发概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用多线程开发概述",
        children: "应用多线程开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS应用开发中，不同业务场景需要不同的并发能力和任务类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的业务场景分为三种并发任务："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview",
        children: "耗时任务"
      }), "：业务逻辑包含较大计算量或多次I/O读写等需要长时间执行的任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-overview",
        children: "长时任务"
      }), "：业务逻辑包含监听或定期采集数据等需要长时间保持运行的任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview",
        children: "常驻任务"
      }), "：业务逻辑跟随主线程生命周期或与主线程绑定的任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不同任务类型可以进一步细分，例如，典型的耗时任务包括CPU密集型任务、I/O密集型任务和同步任务，每种任务类型对应不同的业务场景。TaskPool和Worker均支持多线程并发，请开发者根据业务场景选择合适的并发能力，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker#%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF%E5%AF%B9%E6%AF%94",
        children: "TaskPool和Worker适用场景对比"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来的章节将列举多线程开发中常见的场景及其实践案例。"
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