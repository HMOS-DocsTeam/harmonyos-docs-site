"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["835891"], {
290736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_resident_task_resident_task_guide_resident_task_guide_md_ea7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-resident-task-resident-task-guide-resident-task-guide-md-ea7.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_resident_task_resident_task_guide_resident_task_guide_md_ea7_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide/resident-task-guide","title":"常驻任务开发指导（Worker）","description":"提供使用Worker进行常驻任务的开发指导。Worker将持续执行任务，直到宿主线程发送终止指令。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide/resident-task-guide.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide","slug":"/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"常驻任务开发指导（Worker）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/resident-task-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"常驻任务并发场景简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview/"},"next":{"title":"批量数据写数据库场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide/resident-task-guide.md


const frontMatter = {
	title: '常驻任务开发指导（Worker）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/resident-task-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '常驻任务开发指导（Worker）';

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
        id: "常驻任务开发指导worker",
        children: "常驻任务开发指导（Worker）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供使用Worker进行常驻任务的开发指导。Worker将持续执行任务，直到宿主线程发送终止指令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发过程和示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio支持一键生成Worker，在对应的{moduleName}目录下任意位置，单击鼠标右键 > New > Worker，即可自动生成Worker的模板文件及配置信息。本文以创建“Worker”为例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此外，还支持手动创建Worker文件。具体方式和注意事项请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction#%E5%88%9B%E5%BB%BAworker%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
            children: "创建Worker的注意事项"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["首先导入Worker模块，然后在宿主线程中通过调用ThreadWorker的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#constructor9",
            children: "constructor()"
          }), "方法创建Worker对象，创建Worker对象的线程为宿主线程。 此处的宿主线程为UI主线程，宿主线程发送'start'以开始执行某个长期运行的任务，并接收子线程返回的相关消息。当不需要执行该任务时，发送'stop'以停止该任务的执行。在此示例中，任务将在10秒后结束。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { worker } from '@kit.ArkTS';\nimport resource from '../util/resource';\n\nconst workerInstance: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Listener task';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          workerInstance.postMessage({ type: 'End' });\n          workerInstance.onmessage = (event) => {\n            console.info(resource.resourceToString($r('app.string.Information')), event.data);\n          }\n          // 10秒后停止worker\n          setTimeout(() => {\n            workerInstance.postMessage({ type: 'stop' });\n          }, 10000);\n          this.message = 'success';\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Worker线程中，当接收到宿主线程发送的消息为'start'时，开始执行某个长时间不定期运行的任务，并实时向宿主线程返回消息。当接收到的消息为'stop'时，结束该任务的执行并返回相应的消息给宿主线程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\nlet isRunning = false;\nworkerPort.onmessage = (e: MessageEvents) => {\n  const type = e.data.type as string;\n  if (type === 'End') {\n    if (!isRunning) {\n      isRunning = true;\n      // 开始常驻任务\n      performTask();\n    }\n  } else if (type === 'stop') {\n    isRunning = false;\n    workerPort.close();  // 关闭Worker\n  }\n}\n// 模拟常驻任务\nfunction performTask() {\n  if (isRunning) {\n    // 模拟某个长期运行的任务\n    workerPort.postMessage('Worker is performing a task');\n    // 1秒后再次执行任务\n    setTimeout(performTask, 1000);\n  }\n  workerPort.postMessage('Worker is stop performing a task');\n}\n"
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