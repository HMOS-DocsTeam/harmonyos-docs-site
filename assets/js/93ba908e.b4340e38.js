"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["678423"], {
579007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_worker_and_taskpool_worker_and_taskpool_md_93b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-worker-and-taskpool-worker-and-taskpool-md-93b.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_worker_and_taskpool_worker_and_taskpool_md_93b_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/worker-and-taskpool/worker-and-taskpool","title":"Worker常驻线程通过TaskPool进行多任务并发处理","description":"ArkTS应用开发过程中，可以选择TaskPool或Worker线程进行多任务并发处理，也可以两种并发能力都选择。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/worker-and-taskpool/worker-and-taskpool.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/worker-and-taskpool","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/worker-and-taskpool/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/worker-and-taskpool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Worker常驻线程通过TaskPool进行多任务并发处理","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-and-taskpool","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义Native Sendable对象的多线程操作场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object/"},"next":{"title":"并发常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/concurrency-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/worker-and-taskpool/worker-and-taskpool.md


const frontMatter = {
	title: 'Worker常驻线程通过TaskPool进行多任务并发处理',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-and-taskpool',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Worker常驻线程通过TaskPool进行多任务并发处理';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
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
        id: "worker常驻线程通过taskpool进行多任务并发处理",
        children: "Worker常驻线程通过TaskPool进行多任务并发处理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS应用开发过程中，可以选择TaskPool或Worker线程进行多任务并发处理，也可以两种并发能力都选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例将说明在Worker线程中通过TaskPool执行并发任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在主线程中创建Worker线程并发送消息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// workerAndTaskpool.ets\nimport { MessageEvents, worker } from '@kit.ArkTS';\nimport { PromptAction } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '在主线程中创建Worker线程并发送消息';\n  @State returnMessage: string = 'return...';\n  @State promptAction: PromptAction = this.getUIContext().getPromptAction();\n\n  build() {\n    RelativeContainer() {\n      Button(this.message)\n        .fontSize(25)\n        .id('HelloWorld')\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          // 1. 创建Worker实例\n          const myWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n\n          // 2. 注册onmessage回调函数，以处理Worker发送到主线程的消息\n          myWorker.onmessage = (e: MessageEvents) => {\n            console.info('主线程收到最终结果:', e.data.result);\n            this.returnMessage = '主线程收到最终结果:' + e.data.result;\n            this.promptAction.showToast({ message: this.returnMessage });\n            myWorker.terminate(); // 选择合适的时机销毁Worker\n          };\n\n          // 3. 向Worker发送启动指令\n          myWorker.postMessage({ type: 'start', data: 10 });\n        })\n      // ...\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Worker线程中调用TaskPool执行并发任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Worker.ets\nimport { MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { taskpool } from '@kit.ArkTS';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\nworkerPort.onmessage = async (e: MessageEvents) => {\n  if (e.data.type === 'start') {\n    // 模拟Worker数据处理\n    const processedData = heavyComputation(e.data.data);\n\n    // 调用TaskPool执行并发任务\n    const task = new taskpool.Task(parallelTask, processedData);\n    const result = await taskpool.execute(task);\n    console.info('Worker线程返回结果: ', result);\n\n    // 将最终结果返回主线程\n    workerPort.postMessage({\n      status: 'success',\n      result: result\n    });\n  }\n}\n\nfunction heavyComputation(base: number): number {\n  let sum = 0;\n  for (let i = 0; i < base * 10; i++) {\n    sum += Math.sqrt(i);\n  }\n  return sum;\n}\n\n@Concurrent\nfunction parallelTask(base: number): number {\n  let total = 0;\n  for (let i = 0; i < base; i++) {\n    total += i % 2 === 0 ? i : -i;\n  }\n  console.info('TaskPool线程计算结果: ', total);\n  return total;\n}\n"
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