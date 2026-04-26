"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["218616"], {
409267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_time_consuming_task_sync_task_development_sync_task_development_md_280_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-time-consuming-task-sync-task-development-sync-task-development-md-280.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_time_consuming_task_sync_task_development_sync_task_development_md_280_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development/sync-task-development","title":"同步任务开发指导 (TaskPool和Worker)","description":"同步任务用于在多个线程间协调执行，确保任务按特定顺序和规则进行（如使用锁防止数据竞争）。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development/sync-task-development.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development","slug":"/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"同步任务开发指导 (TaskPool和Worker)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sync-task-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"I/O密集型任务开发指导 (TaskPool)","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development/"},"next":{"title":"长时任务并发场景简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development/sync-task-development.md


const frontMatter = {
	title: '同步任务开发指导 (TaskPool和Worker)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sync-task-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '同步任务开发指导 (TaskPool和Worker)';

const assets = {

};



const toc = [{
  "value": "使用TaskPool处理同步任务",
  "id": "使用taskpool处理同步任务",
  "level": 2
}, {
  "value": "使用Worker处理关联的同步任务",
  "id": "使用worker处理关联的同步任务",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "同步任务开发指导-taskpool和worker",
        children: "同步任务开发指导 (TaskPool和Worker)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步任务用于在多个线程间协调执行，确保任务按特定顺序和规则进行（如使用锁防止数据竞争）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步任务的实现需要考虑多个线程之间的协作和同步，以确保数据的正确性和程序的正确执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当同步任务之间相对独立时，推荐使用TaskPool，例如一系列导入的静态方法或单例实现的方法。如果同步任务之间有关联性，则需要使用Worker。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用taskpool处理同步任务",
      children: "使用TaskPool处理同步任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下场景推荐使用TaskPool。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调度相互独立的任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "静态方法实现的任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单例构造的句柄或者类对象跨线程使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(800082)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview#actor%E6%A8%A1%E5%9E%8B",
        children: "Actor模型"
      }), "不同线程间内存隔离的特性，非线程安全的单例无法在不同线程间使用。可通过共享模块导出单例解决此问题。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定义并发函数，实现业务逻辑。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建任务", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#task",
          children: "Task"
        }), "，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#taskpoolexecute-1",
          children: "execute()"
        }), "接口执行该任务。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对任务返回的结果进行操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如下示例中业务使用TaskPool调用相关同步方法的代码，首先定义并发函数taskpoolFunc，需要注意必须使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#concurrent%E8%A3%85%E9%A5%B0%E5%99%A8",
        children: "@Concurrent装饰器"
      }), "装饰该函数；其次定义函数mainFunc，该函数功能为创建任务，执行任务并处理任务返回的结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker } from '@kit.ArkTS';\nimport { taskpool } from '@kit.ArkTS';\n\n// 步骤1: 定义并发函数，实现业务逻辑\n@Concurrent\nasync function taskpoolFunc(num: number): Promise<number> {\n  // 根据业务逻辑实现相应的功能\n  let tmpNum: number = num + 100;\n  return tmpNum;\n}\n\nasync function mainFunc(): Promise<void> {\n  // 步骤2: 创建任务并执行\n  let task1: taskpool.Task = new taskpool.Task(taskpoolFunc, 1);\n  let res1: number = await taskpool.execute(task1) as number;\n  let task2: taskpool.Task = new taskpool.Task(taskpoolFunc, res1);\n  let res2: number = await taskpool.execute(task2) as number;\n  // 步骤3: 对任务返回的结果进行操作\n  console.info('taskpool: task res1 is: ' + res1);\n  console.info('taskpool: task res2 is: ' + res2);\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(async () => {\n            mainFunc();\n            let w: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/MyWorker2.ts');\n            w.onmessage = (): void => {\n              // 接收Worker子线程的结果\n            }\n            w.onerror = (): void => {\n              // 接收Worker子线程的错误信息\n            }\n            // 向Worker子线程发送Set消息\n            w.postMessage({ 'type': 0, 'data': 'data' });\n            // 向Worker子线程发送Get消息\n            w.postMessage({ 'type': 1 });\n            // ...\n            // 根据实际业务，选择时机以销毁线程\n            w.terminate();\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用worker处理关联的同步任务",
      children: "使用Worker处理关联的同步任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当一系列同步任务需要使用同一个句柄调度，或者需要依赖某个类对象调度，且无法在不同任务池之间共享时，需要使用Worker。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UI主线程中创建Worker对象并接收Worker线程发送的消息。DevEco Studio支持一键生成Worker。在{moduleName}目录下任意位置，点击鼠标右键 > New > Worker，即可生成Worker的模板文件及配置信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(async () => {\n            mainFunc();\n            let w: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/MyWorker2.ts');\n            w.onmessage = (): void => {\n              // 接收Worker子线程的结果\n            }\n            w.onerror = (): void => {\n              // 接收Worker子线程的错误信息\n            }\n            // 向Worker子线程发送Set消息\n            w.postMessage({ 'type': 0, 'data': 'data' });\n            // 向Worker子线程发送Get消息\n            w.postMessage({ 'type': 1 });\n            // ...\n            // 根据实际业务，选择时机以销毁线程\n            w.terminate();\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Worker线程中绑定Worker对象，同时处理同步任务逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class Handle {\n  syncGet() {\n    return;\n  }\n\n  syncSet(num: number) {\n    return;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { worker, ThreadWorkerGlobalScope, MessageEvents } from '@kit.ArkTS';\nimport Handle from './handle'; // 返回句柄\n\nlet workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// 无法传输的句柄，所有操作依赖此句柄\nlet handler: Handle = new Handle()\n\n// Worker线程的onmessage逻辑\nworkerPort.onmessage = (e: MessageEvents): void => {\n  switch (e.data.type as number) {\n    case 0:\n      handler.syncSet(e.data.data);\n      workerPort.postMessage('success set');\n      break;\n    case 1:\n      handler.syncGet();\n      workerPort.postMessage('success get');\n      break;\n    default:\n      break;\n  }\n}\n"
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
800082(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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