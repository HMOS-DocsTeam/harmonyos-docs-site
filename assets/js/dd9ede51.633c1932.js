"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["241859"], {
551047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_worker_postmessage_sendable_worker_postmessage_sendable_md_dd9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-guide-worker-postmessage-sendable-worker-postmessage-sendable-md-dd9.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_worker_postmessage_sendable_worker_postmessage_sendable_md_dd9_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-postmessage-sendable/worker-postmessage-sendable","title":"多级Worker间高性能消息通信","description":"多级Worker（即通过父Worker创建子Worker的机制形成层级线程关系）间通信是一种常见的需求，由于Worker线程生命周期由用户自行管理，因此需要注意多级Worker生命周期的正确管理，建议开发者确保销毁父Worker前先销毁所有子Worker。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-postmessage-sendable/worker-postmessage-sendable.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-postmessage-sendable","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-postmessage-sendable/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-postmessage-sendable/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"多级Worker间高性能消息通信","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-postmessage-sendable","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Worker同步调用宿主线程的接口","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface/"},"next":{"title":"应用多线程开发概述","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-postmessage-sendable/worker-postmessage-sendable.md


const frontMatter = {
	title: '多级Worker间高性能消息通信',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-postmessage-sendable',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '多级Worker间高性能消息通信';

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
        id: "多级worker间高性能消息通信",
        children: "多级Worker间高性能消息通信"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多级", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker"
      }), "（即通过父Worker创建子Worker的机制形成层级线程关系）间通信是一种常见的需求，由于Worker线程生命周期由用户自行管理，因此需要注意多级Worker生命周期的正确管理，建议开发者确保销毁父Worker前先销毁所有子Worker。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何在多级Worker间实现高性能消息通信。高性能消息通信的关键在于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "Sendable对象"
      }), "，结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#postmessagewithsharedsendable12",
        children: "postMessageWithSharedSendable接口"
      }), "，可以实现线程间高性能的对象传递。例如，在数据克隆场景中，假设有一个父Worker和两个子Worker。父Worker负责创建子Worker，并向子Worker发送数据克隆任务。子Worker接收任务并执行数据克隆操作，完成后将克隆结果返回给父Worker。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ets文件夹下新建文件夹Sendable，并准备一个Sendable类CopyEntry，封装克隆任务数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// CopyEntry.ets\n@Sendable\nexport class CopyEntry {\n  // 克隆类型\n  type: string;\n  // 文件路径\n  filePath: string;\n  constructor(type: string, filePath: string) {\n    this.type = type;\n    this.filePath = filePath;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建两个Worker文件，DevEco Studio支持一键生成Worker，在对应的{moduleName}目录下任意位置，单击鼠标右键 > New > Worker，即可自动生成Worker的模板文件及配置信息。本文以创建“ParentWorker”（父Worker）和“ChildWorker”（子Worker）为例。父Worker负责分发克隆任务，并在所有子Worker任务完成后，依次关闭子Worker，最后关闭自身。子Worker负责接收任务，执行数据克隆操作，并在任务完成后通知父Worker。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ParentWorker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker, collections, ArkTSUtils } from '@kit.ArkTS'\nimport { CopyEntry } from '../Sendable/CopyEntry'\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// 计算worker1的任务数量\nlet count1 = 0;\n// 计算worker2的任务数量\nlet count2 = 0;\n// 计算总任务数量\nlet sum = 0;\n// 异步锁\nconst asyncLock = new ArkTSUtils.locks.AsyncLock();\n// 创建子Worker\nconst copyWorker1 = new worker.ThreadWorker('entry/ets/workers/ChildWorker.ets');\nconst copyWorker2 = new worker.ThreadWorker('entry/ets/workers/ChildWorker.ets');\n\nworkerPort.onmessage = (e : MessageEvents) => {\n  let array = e.data as collections.Array<CopyEntry>;\n  sum = array.length;\n  for (let i = 0; i < array.length; i++) {\n    let entry = array[i];\n    if (entry.type === 'copy1') {\n      count1++;\n      // 如果是copy1类型，则将数据传递给 copyWorker1\n      copyWorker1.postMessageWithSharedSendable(entry);\n    } else if (entry.type === 'copy2') {\n      count2++;\n      // 如果是copy2类型，则将数据传递给 copyWorker2\n      copyWorker2.postMessageWithSharedSendable(entry);\n    }\n  }\n}\n\ncopyWorker1.onmessage = async (e : MessageEvents) => {\n  console.info('copyWorker1 onmessage:' + e.data);\n  await asyncLock.lockAsync(() => {\n    count1--;\n    if (count1 == 0) {\n      // 如果copyWorker1的任务全部完成，则关闭copyWorker1\n      console.info('copyWorker1 close');\n      copyWorker1.terminate();\n    }\n    sum--;\n    if (sum == 0) {\n      // 如果所有任务全部完成，则关闭父Worker\n      workerPort.close();\n    }\n  })\n}\n\ncopyWorker2.onmessage = async (e : MessageEvents) => {\n  console.info('copyWorker2 onmessage:' + e.data);\n  await asyncLock.lockAsync(() => {\n    count2--;\n    sum--;\n    if (count2 == 0) {\n      // 如果copyWorker2的任务全部完成，则关闭copyWorker2\n      console.info('copyWorker2 close')\n      copyWorker2.terminate();\n    }\n    if (sum == 0) {\n      // 如果所有任务全部完成，则关闭父Worker\n      workerPort.close();\n    }\n  })\n}\n\nworkerPort.onmessageerror = (e : MessageEvents) => {\n  console.error('onmessageerror:' + e.data);\n}\n\nworkerPort.onerror = (e : ErrorEvent) => {\n  console.error('onerror:' + e.message);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ChildWorker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker} from '@kit.ArkTS'\nimport { CopyEntry } from '../Sendable/CopyEntry'\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e : MessageEvents) => {\n  let data = e.data as CopyEntry;\n  // 中间copy操作省略\n  console.info(data.filePath);\n  workerPort.postMessageWithSharedSendable('done');\n}\n\nworkerPort.onmessageerror = (e : MessageEvents) => {\n  console.error('onmessageerror:' + e.data);\n}\n\nworkerPort.onerror = (e : ErrorEvent) => {\n  console.error('onerror:' + e.message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UI主线程页面，创建父Worker并准备克隆任务所需的数据，准备完成后将数据发送给父Worker。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { worker, collections } from '@kit.ArkTS';\nimport { CopyEntry } from '../Sendable/CopyEntry'\n\nfunction promiseCase() {\n  let p: Promise<void> = new Promise<void>((resolve: Function, reject: Function) => {\n    setTimeout(() => {\n      resolve();\n    }, 100);\n  });\n  return p;\n}\n\nasync function postMessageTest() {\n  let ss = new worker.ThreadWorker('entry/ets/workers/ParentWorker.ets');\n  let isTerminate = false;\n  ss.onexit = () => {\n    isTerminate = true;\n  }\n  let array = new collections.Array<CopyEntry>();\n  // 准备数据\n  for (let i = 0; i < 4; i++) {\n    if (i % 2 == 0) {\n      array.push(new CopyEntry('copy1', 'file://copy1.txt'));\n    } else {\n      array.push(new CopyEntry('copy2', 'file://copy2.txt'));\n    }\n  }\n  // 给Worker线程发送消息\n  ss.postMessageWithSharedSendable(array);\n  while (!isTerminate) {\n    await promiseCase();\n  }\n  console.info('Worker线程已退出');\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            postMessageTest();\n            // ...\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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