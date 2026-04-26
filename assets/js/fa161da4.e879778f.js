"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["149126"], {
220200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_faq_arkts_state_management_faq_application_and_others_arkts_state_management_faq_application_and_others_md_fa1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-faq-arkts-state-management-faq-application-and-others-arkts-state-management-faq-application-and-others-md-fa1.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_faq_arkts_state_management_faq_application_and_others_arkts_state_management_faq_application_and_others_md_fa1_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-application-and-others/arkts-state-management-faq-application-and-others","title":"应用内状态管理和其他常见问题","description":"本文将介绍应用内状态管理的常见问题以及其他常见问题。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-application-and-others/arkts-state-management-faq-application-and-others.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-application-and-others","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-application-and-others/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-application-and-others/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"应用内状态管理和其他常见问题","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq-application-and-others","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据对象状态管理常见问题","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-class/"},"next":{"title":"状态变量改变不触发组件刷新问题常用定位方法","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/troubleshooting-state-manage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-application-and-others/arkts-state-management-faq-application-and-others.md


const frontMatter = {
	title: '应用内状态管理和其他常见问题',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq-application-and-others',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用内状态管理和其他常见问题';

const assets = {

};



const toc = [{
  "value": "在并发线程中使用ArkUI装饰器导致报错",
  "id": "在并发线程中使用arkui装饰器导致报错",
  "level": 2
}, {
  "value": "懒加载包含装饰器的文件",
  "id": "懒加载包含装饰器的文件",
  "level": 3
}, {
  "value": "装饰器使用隔离",
  "id": "装饰器使用隔离",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用内状态管理和其他常见问题",
        children: "应用内状态管理和其他常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将介绍应用内状态管理的常见问题以及其他常见问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在并发线程中使用arkui装饰器导致报错",
      children: "在并发线程中使用ArkUI装饰器导致报错"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "懒加载包含装饰器的文件",
      children: "懒加载包含装饰器的文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理装饰器仅限于在UI线程使用，不允许在未加载ArkUI框架的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
        children: "并发线程"
      }), "中使用。由于并发线程未加载完整的ArkUI框架逻辑，因此框架中定义的状态管理装饰器也不会被加载到并发线程中。若在并发线程中使用状态管理装饰器，将出现ReferenceError: xxx is not defined。在如下示例中，尽管并发线程并未实际使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed"
      }), "装饰的类，但仍会打印ReferenceError: Observed is not defined的报错信息。这是因为并发线程在逐层解析文件依赖时，最终会加载到定义@Observed装饰器的Observed.ets文件，从而触发该错误。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/LazyImportNeg.ets\nimport { ErrorEvent, worker, MessageEvents } from '@kit.ArkTS';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('New Worker')\n      .onClick(() => {\n        // 创建Worker对象。\n        const newWorker = new worker.ThreadWorker('../workers/LazyImportWorkerNeg.ets');\n\n        // 注册onmessage回调，捕获宿主线程接收到来自其创建的Worker通过workerPort.postMessage接口发送的消息。该回调在宿主线程执行。\n        newWorker.onmessage = (e: MessageEvents) => {\n          let data: string = e.data;\n          console.info('newWorker onmessage is: ', data);\n        };\n\n        // 注册onAllErrors回调，捕获Worker线程的onmessage回调、timer回调以及文件执行等流程产生的全局异常。该回调在宿主线程执行。\n        newWorker.onAllErrors = (err: ErrorEvent) => {\n          console.error('workerInstance onAllErrors message is: ' + err.message);\n        };\n\n        // 注册onmessageerror回调，当Worker对象接收到无法序列化的消息时被调用，在宿主线程执行。\n        newWorker.onmessageerror = () => {\n          console.error('workerInstance onmessageerror');\n        };\n\n        // 注册onexit回调，当Worker销毁时被调用，在宿主线程执行。\n        newWorker.onexit = (e: number) => {\n          // Worker正常退出时，code为0；异常退出时，code为1。\n          console.info('workerInstance onexit code is: ', e);\n        };\n\n        // 发送消息给Worker线程。\n        newWorker.postMessage('[Main] message from the main thread');\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/workers/LazyImportWorkerNeg.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { testWithoutObserved } from '../pages/LazyImportFuncNeg';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// 注册onmessage回调，当Worker线程收到来自其宿主线程通过postMessage接口发送的消息时被调用，在Worker线程执行。\nworkerPort.onmessage = (e: MessageEvents) => {\n  // 调用testWithoutObserved函数。\n  testWithoutObserved();\n  let data: string = e.data;\n  console.info('workerPort onmessage is: ', data);\n\n  // 向宿主线程发送消息。\n  workerPort.postMessage('[Worker] message from the workerPort');\n};\n\n// 注册onmessageerror回调，当Worker对象接收到一条无法被序列化的消息时被调用，在Worker线程执行。\nworkerPort.onmessageerror = () => {\n  console.error('workerPort onmessageerror');\n};\n\n// 注册onerror回调，捕获Worker在执行过程中发生的异常，在Worker线程执行。\nworkerPort.onerror = (err: ErrorEvent) => {\n  console.error('workerPort onerror err is: ', err.message);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/LazyImportFuncNeg.ets\nimport { innerTest } from './LazyImportObservedNeg';\n\nexport function testWithObserved(): void {\n  innerTest();\n  console.info('ImportObserved::testWithObserved call');\n}\n\nexport function testWithoutObserved(): void {\n  console.info('ImportObserved::testWithoutObserved call');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/LazyImportObservedNeg.ets\nexport function innerTest(): void {\n  console.info('Observed::innerTest call');\n}\n\n@Observed\nexport class Person {\n  public name: string;\n  public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import",
        children: "lazy import"
      }), "懒加载包含装饰器的文件，子线程则不会加载到对应文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/LazyImportPos.ets\nimport { ErrorEvent, worker, MessageEvents } from '@kit.ArkTS';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('New Worker')\n      .onClick(() => {\n        // 创建Worker对象。\n        const newWorker = new worker.ThreadWorker('../workers/LazyImportWorkerPos.ets');\n\n        // 注册onmessage回调，捕获宿主线程接收到来自其创建的Worker通过workerPort.postMessage接口发送的消息。该回调在宿主线程执行。\n        newWorker.onmessage = (e: MessageEvents) => {\n          let data: string = e.data;\n          console.info('newWorker onmessage is: ', data);\n        };\n\n        // 注册onAllErrors回调，捕获Worker线程的onmessage回调、timer回调以及文件执行等流程产生的全局异常。该回调在宿主线程执行。\n        newWorker.onAllErrors = (err: ErrorEvent) => {\n          console.error('workerInstance onAllErrors message is: ' + err.message);\n        };\n\n        // 注册onmessageerror回调，当Worker对象接收到无法序列化的消息时被调用，在宿主线程执行。\n        newWorker.onmessageerror = () => {\n          console.error('workerInstance onmessageerror');\n        };\n\n        // 注册onexit回调，当Worker销毁时被调用，在宿主线程执行。\n        newWorker.onexit = (e: number) => {\n          // Worker正常退出时，code为0；异常退出时，code为1。\n          console.info('workerInstance onexit code is: ', e);\n        };\n\n        // 发送消息给Worker线程。\n        newWorker.postMessage('[Main] message from the main thread');\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/workers/LazyImportWorkerPos.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { testWithoutObserved } from '../pages/LazyImportFuncPos';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// 注册onmessage回调，当Worker线程收到来自其宿主线程通过postMessage接口发送的消息时被调用，在Worker线程执行。\nworkerPort.onmessage = (e: MessageEvents) => {\n  // 调用testWithoutObserved函数。\n  testWithoutObserved();\n  let data: string = e.data;\n  console.info('workerPort onmessage is: ', data);\n\n  // 向宿主线程发送消息。\n  workerPort.postMessage('[Worker] message from the workerPort');\n};\n\n// 注册onmessageerror回调，当Worker对象接收到一条无法被序列化的消息时被调用，在Worker线程执行。\nworkerPort.onmessageerror = () => {\n  console.error('workerPort onmessageerror');\n};\n\n// 注册onerror回调，捕获Worker在执行过程中发生的异常，在Worker线程执行。\nworkerPort.onerror = (err: ErrorEvent) => {\n  console.error('workerPort onerror err is: ', err.message);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/LazyImportFuncPos.ets\n// 使用lazy import懒加载包含装饰器的文件。\nimport lazy { innerTest } from './LazyImportObservedPos';\n\nexport function testWithObserved(): void {\n  innerTest();\n  console.info('ImportObserved::testWithObserved call');\n}\n\nexport function testWithoutObserved(): void {\n  console.info('ImportObserved::testWithoutObserved call');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/LazyImportObservedPos.ets\nexport function innerTest(): void {\n  console.info('Observed::innerTest call');\n}\n\n@Observed\nexport class Person {\n  public name: string;\n  public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰器使用隔离",
      children: "装饰器使用隔离"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子线程中调用的函数所在的文件中定义了状态管理装饰器，在加载时同样会加载到对应文件，打印ReferenceError报错。由于调用的函数与状态管理装饰器的定义存在于同一文件，使用懒加载的方式无法解决该问题，此时可以将调用函数移出该文件单独定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/DecUseIsolationNeg.ets\nimport { ErrorEvent, worker, MessageEvents } from '@kit.ArkTS';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('New Worker')\n      .onClick(() => {\n        // 创建Worker对象。\n        const newWorker = new worker.ThreadWorker('../workers/UseIsolationWorkerNeg.ets');\n\n        // 注册onmessage回调，捕获宿主线程接收到来自其创建的Worker通过workerPort.postMessage接口发送的消息。该回调在宿主线程执行。\n        newWorker.onmessage = (e: MessageEvents) => {\n          let data: string = e.data;\n          console.info('newWorker onmessage is: ', data);\n        };\n\n        // 注册onAllErrors回调，捕获Worker线程的onmessage回调、timer回调以及文件执行等流程产生的全局异常。该回调在宿主线程执行。\n        newWorker.onAllErrors = (err: ErrorEvent) => {\n          console.error('workerInstance onAllErrors message is: ' + err.message);\n        };\n\n        // 注册onmessageerror回调，当Worker对象接收到无法序列化的消息时被调用，在宿主线程执行。\n        newWorker.onmessageerror = () => {\n          console.error('workerInstance onmessageerror');\n        };\n\n        // 注册onexit回调，当Worker销毁时被调用，在宿主线程执行。\n        newWorker.onexit = (e: number) => {\n          // Worker正常退出时，code为0；异常退出时，code为1。\n          console.info('workerInstance onexit code is: ', e);\n        };\n\n        // 发送消息给Worker线程。\n        newWorker.postMessage('[Main] message from the main thread');\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/workers/UseIsolationWorkerNeg.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { testWithObserved } from '../pages/UseIsolationFuncNeg';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// 注册onmessage回调，当Worker线程收到来自其宿主线程通过postMessage接口发送的消息时被调用，在Worker线程执行。\nworkerPort.onmessage = (e: MessageEvents) => {\n  // 调用testWithObserved函数。\n  testWithObserved();\n  let data: string = e.data;\n  console.info('workerPort onmessage is: ', data);\n\n  // 向宿主线程发送消息。\n  workerPort.postMessage('[Worker] message from the workerPort');\n};\n\n// 注册onmessageerror回调，当Worker对象接收到一条无法被序列化的消息时被调用，在Worker线程执行。\nworkerPort.onmessageerror = () => {\n  console.error('workerPort onmessageerror');\n};\n\n// 注册onerror回调，捕获Worker在执行过程中发生的异常，在Worker线程执行。\nworkerPort.onerror = (err: ErrorEvent) => {\n  console.error('workerPort onerror err is: ', err.message);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/UseIsolationFuncNeg.ets\nimport { innerTest } from './UseIsolationObservedNeg';\n\nexport function testWithObserved(): void {\n  innerTest();\n  console.info('ImportObserved::testWithObserved call');\n}\n\nexport function testWithoutObserved(): void {\n  console.info('ImportObserved::testWithoutObserved call');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/UseIsolationObservedNeg.ets\nexport function innerTest(): void {\n  console.info('Observed::innerTest call');\n}\n\n@Observed\nexport class Person {\n  public name: string;\n  public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/DecUseIsolationPos.ets\nimport { ErrorEvent, worker, MessageEvents } from '@kit.ArkTS';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('New Worker')\n      .onClick(() => {\n        // 创建Worker对象。\n        const newWorker = new worker.ThreadWorker('../workers/UseIsolationWorkerPos.ets');\n\n        // 注册onmessage回调，捕获宿主线程接收到来自其创建的Worker通过workerPort.postMessage接口发送的消息。该回调在宿主线程执行。\n        newWorker.onmessage = (e: MessageEvents) => {\n          let data: string = e.data;\n          console.info('newWorker onmessage is: ', data);\n        };\n\n        // 注册onAllErrors回调，捕获Worker线程的onmessage回调、timer回调以及文件执行等流程产生的全局异常。该回调在宿主线程执行。\n        newWorker.onAllErrors = (err: ErrorEvent) => {\n          console.error('workerInstance onAllErrors message is: ' + err.message);\n        };\n\n        // 注册onmessageerror回调，当Worker对象接收到无法序列化的消息时被调用，在宿主线程执行。\n        newWorker.onmessageerror = () => {\n          console.error('workerInstance onmessageerror');\n        };\n\n        // 注册onexit回调，当Worker销毁时被调用，在宿主线程执行。\n        newWorker.onexit = (e: number) => {\n          // Worker正常退出时，code为0；异常退出时，code为1。\n          console.info('workerInstance onexit code is: ', e);\n        };\n\n        // 发送消息给Worker线程。\n        newWorker.postMessage('[Main] message from the main thread');\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/workers/UseIsolationWorkerPos.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { testWithObserved } from '../pages/UseIsolationFuncPos';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// 注册onmessage回调，当Worker线程收到来自其宿主线程通过postMessage接口发送的消息时被调用，在Worker线程执行。\nworkerPort.onmessage = (e: MessageEvents) => {\n  // 调用testWithObserved函数。\n  testWithObserved();\n  let data: string = e.data;\n  console.info('workerPort onmessage is: ', data);\n\n  // 向宿主线程发送消息。\n  workerPort.postMessage('[Worker] message from the workerPort');\n};\n\n// 注册onmessageerror回调，当Worker对象接收到一条无法被序列化的消息时被调用，在Worker线程执行。\nworkerPort.onmessageerror = () => {\n  console.error('workerPort onmessageerror');\n};\n\n// 注册onerror回调，捕获Worker在执行过程中发生的异常，在Worker线程执行。\nworkerPort.onerror = (err: ErrorEvent) => {\n  console.error('workerPort onerror err is: ', err.message);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/UseIsolationFuncPos.ets\nimport { innerTest } from './UseIsolationAdditionPos';\n\nexport function testWithObserved(): void {\n  innerTest();\n  console.info('ImportObserved::testWithObserved call');\n}\n\nexport function testWithoutObserved(): void {\n  console.info('ImportObserved::testWithoutObserved call');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/UseIsolationAdditionPos.ets\n// 函数拆分，装饰器使用隔离。\nexport function innerTest(): void {\n  console.info('Addition::innerTest call');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/UseIsolationObservedPos.ets\n@Observed\nexport class Person {\n  public name: string;\n  public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n"
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