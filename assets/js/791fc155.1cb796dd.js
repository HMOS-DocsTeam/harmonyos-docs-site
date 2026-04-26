"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["324113"], {
749294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_time_consuming_task_cpu_intensive_task_development_cpu_intensive_task_development_md_791_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-time-consuming-task-cpu-intensive-task-development-cpu-intensive-task-development-md-791.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_time_consuming_task_cpu_intensive_task_development_cpu_intensive_task_development_md_791_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development/cpu-intensive-task-development","title":"CPU密集型任务开发指导 (TaskPool和Worker)","description":"CPU密集型任务是指需要占用系统资源进行大量计算的任务，这类任务需要长时间运行，会阻塞线程中其他事件的处理，因此不适合在UI主线程中执行。例如图像处理、视频编码、数据分析等。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development/cpu-intensive-task-development.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development","slug":"/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CPU密集型任务开发指导 (TaskPool和Worker)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cpu-intensive-task-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"耗时任务并发场景简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview/"},"next":{"title":"I/O密集型任务开发指导 (TaskPool)","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development/cpu-intensive-task-development.md


const frontMatter = {
	title: 'CPU密集型任务开发指导 (TaskPool和Worker)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cpu-intensive-task-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'CPU密集型任务开发指导 (TaskPool和Worker)';

const assets = {

};



const toc = [{
  "value": "使用TaskPool进行图像直方图处理",
  "id": "使用taskpool进行图像直方图处理",
  "level": 2
}, {
  "value": "使用Worker进行长时间数据分析",
  "id": "使用worker进行长时间数据分析",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cpu密集型任务开发指导-taskpool和worker",
        children: "CPU密集型任务开发指导 (TaskPool和Worker)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU密集型任务是指需要占用系统资源进行大量计算的任务，这类任务需要长时间运行，会阻塞线程中其他事件的处理，因此不适合在UI主线程中执行。例如图像处理、视频编码、数据分析等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于多线程并发机制处理CPU密集型任务可以提高CPU利用率，提升应用程序响应速度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当任务不需要长时间（3分钟）占用后台线程，而是一个个独立的任务时，推荐使用TaskPool，反之推荐使用Worker。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来将分别以图像直方图处理和后台长时间模型预测任务为例进行说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用taskpool进行图像直方图处理",
      children: "使用TaskPool进行图像直方图处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现图像处理的业务逻辑。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对数据进行分段，并通过任务组发起关联任务调度。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#taskgroup10",
            children: "TaskGroup"
          }), "，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#addtask10",
            children: "addTask()"
          }), "添加对应的任务，然后通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#taskpoolexecute10",
            children: "execute()"
          }), "执行任务组，并指定为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#priority",
            children: "高优先级"
          }), "。在当前任务组所有任务结束后，会将直方图处理结果同时返回。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "汇总处理结果数组。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\n// ...\n\n@Concurrent\nfunction imageProcessing(dataSlice: ArrayBuffer): ArrayBuffer {\n  // 步骤1: 具体的图像处理操作及其他耗时操作\n  return dataSlice;\n}\n\nfunction histogramStatistic(pixelBuffer: ArrayBuffer): void {\n  // 步骤2: 分成三段并发调度\n  let number: number = pixelBuffer.byteLength / 3;\n  let buffer1: ArrayBuffer = pixelBuffer.slice(0, number);\n  let buffer2: ArrayBuffer = pixelBuffer.slice(number, number * 2);\n  let buffer3: ArrayBuffer = pixelBuffer.slice(number * 2);\n\n  let group: taskpool.TaskGroup = new taskpool.TaskGroup();\n  group.addTask(imageProcessing, buffer1);\n  group.addTask(imageProcessing, buffer2);\n  group.addTask(imageProcessing, buffer3);\n\n  taskpool.execute(group, taskpool.Priority.HIGH).then((ret: Object) => {\n    // 步骤3: 结果数组汇总处理\n  })\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World'\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            let buffer: ArrayBuffer = new ArrayBuffer(24);\n            histogramStatistic(buffer);\n            this.message = 'success';\n            // 销毁Worker线程\n            workerInstance.terminate();\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用worker进行长时间数据分析",
      children: "使用Worker进行长时间数据分析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文通过某地区提供的房价数据训练一个简易的房价预测模型，该模型支持通过输入房屋面积和房间数量去预测该区域的房价，模型需要长时间运行，房价预测需要使用前面的模型运行结果，因此需要使用Worker。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio提供了Worker创建的模板，创建一个Worker线程，例如命名为“MyWorker”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(791137)/* ["default"] */.A) + "",
            width: "460",
            height: "471"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在宿主线程中首先调用ThreadWorker的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#constructor9",
            children: "constructor()"
          }), "方法创建Worker对象；然后通过注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#%E5%B1%9E%E6%80%A7-1",
            children: "onmessage()"
          }), "回调接收Worker线程发送过来的消息；最后通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#postmessage9",
            children: "postMessage()"
          }), "方法向Worker线程发送消息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，向Worker线程发送训练和预测的消息，并接收Worker线程发送回来的消息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { worker } from '@kit.ArkTS';\n\nconst workerInstance: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/MyWorker1.ts');\n\nlet done = false;\n\n// 接收Worker子线程的结果\nworkerInstance.onmessage = (() => {\n  console.info('MyWorker.ts onmessage');\n  if (!done) {\n    workerInstance.postMessage({ 'type': 1, 'value': 0 });\n    done = true;\n  }\n})\n\nworkerInstance.onerror = (() => {\n  // 接收Worker子线程的错误信息\n})\n\n// 向Worker子线程发送训练消息\nworkerInstance.postMessage({ 'type': 0 });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在MyWorker.ets文件中绑定Worker对象，当前线程即为Worker线程。在Worker线程中通过注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#%E5%B1%9E%E6%80%A7-2",
            children: "onmessage()"
          }), "回调接收宿主线程发送的消息，并通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#postmessage9-2",
            children: "postMessage()"
          }), "方法向宿主线程发送消息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，在Worker线程中定义预测模型及其训练过程，并与宿主线程进行信息交互。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { worker, ThreadWorkerGlobalScope, MessageEvents, ErrorEvent } from '@kit.ArkTS';\n\nlet workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// 定义训练模型及结果\nlet result: Array<number>;\n\n// 定义预测函数\nfunction predict(x: number): number {\n  return result[x];\n}\n\n// 定义优化器训练过程\nfunction optimize(): void {\n  result = [0];\n}\n\n// Worker线程的onmessage逻辑\nworkerPort.onmessage = (e: MessageEvents): void => {\n  // 根据传输的数据的type选择进行操作\n  switch (e.data.type as number) {\n    case 0:\n      // 进行训练\n      optimize();\n      // 训练之后发送宿主线程训练成功的消息\n      workerPort.postMessage({ type: 'message', value: 'train success.' });\n      break;\n    case 1:\n      // 执行预测\n      const output: number = predict(e.data.value as number);\n      // 发送宿主线程预测的结果\n      workerPort.postMessage({ type: 'predict', value: output });\n      break;\n    default:\n      workerPort.postMessage({ type: 'message', value: 'send message is invalid' });\n      break;\n  }\n  // 销毁线程\n  // workerPort.close();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Worker线程中完成任务后，可以执行销毁操作。销毁方式有两种：一是在宿主线程中销毁Worker线程；二是在Worker线程中主动销毁。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在宿主线程中通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#%E5%B1%9E%E6%80%A7-1",
            children: "onexit()"
          }), "回调定义Worker线程销毁后的处理逻辑。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Worker线程销毁后，执行onexit回调方法\nworkerInstance.onexit = (): void => {\n  console.info('main thread terminate');\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Worker线程销毁后，执行onexit回调方法\nworkerInstance.onexit = (): void => {\n  console.info('main thread terminate');\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方式一：在宿主线程中通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#terminate9",
            children: "terminate()"
          }), "方法销毁Worker线程，并终止Worker接收消息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\n// 销毁Worker线程\nworkerInstance.terminate();\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方式二：在Worker线程中通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#close9",
            children: "close()"
          }), "方法主动销毁Worker线程，并终止Worker接收消息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// MyWorker.ets\n// 销毁线程\nworkerPort.close();\n"
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
791137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797886-2a03838036c67d91ffb97d4e14f3f59c.png");

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