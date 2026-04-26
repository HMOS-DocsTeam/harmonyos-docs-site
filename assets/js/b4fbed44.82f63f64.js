"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["28095"], {
248121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_worker_communicates_with_mainthread_worker_communicates_with_mainthread_md_b4f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-guide-worker-communicates-with-mainthread-worker-communicates-with-mainthread-md-b4f.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_worker_communicates_with_mainthread_worker_communicates_with_mainthread_md_b4f_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread/worker-communicates-with-mainthread","title":"Worker和宿主线程的即时消息通信","description":"在ArkTS中，Worker相对于Taskpool存在一定的差异性，有数量限制但是可以长时间存在。一个Worker中可能会执行多个不同的任务，每个任务的执行时长或返回结果可能都不同，宿主线程需要根据情况调用Worker中的不同方法，Worker则需要及时地将结果返回给宿主线程。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread/worker-communicates-with-mainthread.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Worker和宿主线程的即时消息通信","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-communicates-with-mainthread","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"TaskPool任务与宿主线程通信","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread/"},"next":{"title":"Worker同步调用宿主线程的接口","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread/worker-communicates-with-mainthread.md


const frontMatter = {
	title: 'Worker和宿主线程的即时消息通信',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-communicates-with-mainthread',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Worker和宿主线程的即时消息通信';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "worker和宿主线程的即时消息通信",
        children: "Worker和宿主线程的即时消息通信"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在ArkTS中，Worker相对于Taskpool存在一定的差异性，有数量限制但是可以长时间存在。一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker"
      }), "中可能会执行多个不同的任务，每个任务的执行时长或返回结果可能都不同，宿主线程需要根据情况调用Worker中的不同方法，Worker则需要及时地将结果返回给宿主线程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以Worker响应\"hello world\"请求为例说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["首先，创建一个执行任务的Worker。创建方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction#%E5%88%9B%E5%BB%BAworker%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
            children: "创建worker的注意事项"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { CopyEntry } from '../Sendable/CopyEntry';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// ...\n\n// Worker接收宿主线程的消息，做相应的处理\nworkerPort.onmessage = (e: MessageEvents) => {\n  let obj: CopyEntry[] = e.data;\n  console.info(`The type of the first set of data is ${obj[0].type}.`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { CopyEntry } from '../Sendable/CopyEntry';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// ...\n\n// Worker接收宿主线程的消息，做相应的处理\nworkerPort.onmessage = (e: MessageEvents) => {\n  let obj: CopyEntry[] = e.data;\n  console.info(`The type of the first set of data is ${obj[0].type}.`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这里的宿主线程是UI主线程，在宿主线程中创建Worker对象，当点击Button时调用postMessage方法向Worker线程发送消息，Worker线程将通过注册的onmessage回调处理宿主线程发送的消息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { worker } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction promiseCase() {\n  let p: Promise<void> = new Promise<void>((resolve: Function, reject: Function) => {\n    setTimeout(() => {\n      resolve(1);\n    }, 100)\n  }).then(undefined, (error: BusinessError) => {\n  })\n  return p;\n}\n\nasync function postMessageTest() {\n  let ss = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n  let res = undefined;\n  let flag = false;\n  let isTerminate = false;\n  ss.onexit = () => {\n    isTerminate = true;\n  }\n  // 接收Worker线程发送的消息\n  ss.onmessage = (e) => {\n    res = e.data;\n    flag = true;\n    console.info('worker:: res is  ' + res);\n  }\n  // 给Worker线程发送消息\n  ss.postMessage('hello world');\n  while (!flag) {\n    await promiseCase();\n  }\n\n  ss.terminate();\n  while (!isTerminate) {\n    await promiseCase();\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            postMessageTest();\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { worker } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction promiseCase() {\n  let p: Promise<void> = new Promise<void>((resolve: Function, reject: Function) => {\n    setTimeout(() => {\n      resolve(1);\n    }, 100)\n  }).then(undefined, (error: BusinessError) => {\n  })\n  return p;\n}\n\nasync function postMessageTest() {\n  let ss = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n  let res = undefined;\n  let flag = false;\n  let isTerminate = false;\n  ss.onexit = () => {\n    isTerminate = true;\n  }\n  // 接收Worker线程发送的消息\n  ss.onmessage = (e) => {\n    res = e.data;\n    flag = true;\n    console.info('worker:: res is  ' + res);\n  }\n  // 给Worker线程发送消息\n  ss.postMessage('hello world');\n  while (!flag) {\n    await promiseCase();\n  }\n\n  ss.terminate();\n  while (!isTerminate) {\n    await promiseCase();\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            postMessageTest();\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例代码中，Worker接收宿主线程的消息，并处理后将结果返回给宿主线程。实现了宿主线程与Worker之间的即时通信，使宿主线程能够方便地使用Worker的运行结果。"
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