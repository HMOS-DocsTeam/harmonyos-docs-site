"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["265042"], {
607326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_overview_interthread_communication_overview_md_111_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-overview-interthread-communication-overview-md-111.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_overview_interthread_communication_overview_md_111_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-overview/interthread-communication-overview","title":"ArkTS线程间通信概述","description":"线程间通信指并发多线程间的数据交换行为。由于ArkTS语言兼容TS/JS，其运行时实现与其它JS引擎一样，采用基于Actor内存隔离的并发模型。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-overview/interthread-communication-overview.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-overview","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkTS线程间通信概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/interthread-communication-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"TaskPool和Worker的对比 (TaskPool和Worker)","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker/"},"next":{"title":"线程间通信对象概述","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/serializable-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-overview/interthread-communication-overview.md


const frontMatter = {
	title: 'ArkTS线程间通信概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/interthread-communication-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS线程间通信概述';

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
        id: "arkts线程间通信概述",
        children: "ArkTS线程间通信概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线程间通信指并发多线程间的数据交换行为。由于ArkTS语言兼容TS/JS，其运行时实现与其它JS引擎一样，采用基于Actor内存隔离的并发模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS线程间通信中，不同数据对象的行为存在差异。例如，普通JS对象、ArrayBuffer对象和SharedArrayBuffer对象在跨线程时的处理方式不同，涉及序列化、反序列化、数据转移和数据共享等操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以JS对象为例，其在并发任务间的通信采用了标准的Structured Clone算法（序列化和反序列化）。该算法通过序列化将JS对象转换为与引擎无关的数据（如字符串或内存块），在另一个并发任务中通过反序列化还原成与原JS对象内容一致的新对象。因此，需要进行深拷贝，效率较低。除了支持JS标准的序列化和反序列化能力，还支持绑定Native的JS对象的传输，以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "Sendable对象"
      }), "的共享能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS目前主要提供两种并发能力支持线程间通信：TaskPool和Worker。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worker是Actor并发模型标准的跨线程通信API，与Web Worker或者Node.js Worker的使用方式基本一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TaskPool提供了功能更强、并发编程更简易的任务池API。其中TaskPool涉及跨并发任务的对象传递行为与Worker一致，同样采用了标准的Structured Clone算法，并发通信的对象越大，耗时就越长。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于ArkTS提供的TaskPool和Worker并发接口，支持多种线程间通信能力，可以满足不同线程间通信场景。如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/independent-time-consuming-task",
        children: "独立的耗时任务"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/multi-time-consuming-tasks",
        children: "多个耗时任务"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread",
        children: "TaskPool线程与宿主线程通信"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread",
        children: "Worker与宿主线程的即时消息通信"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface",
        children: "Worker同步调用宿主线程的接口"
      }), "等。此外，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-introduction",
        children: "Node-API"
      }), "机制，C++线程可以跨线程调用ArkTS接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图1 序列化反序列化原理图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(669245)/* ["default"] */.A) + "",
        width: "706",
        height: "258"
      })
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
669245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477531-2b4cfaafabcb04d52b8dfe27f4f3f55d.png");

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