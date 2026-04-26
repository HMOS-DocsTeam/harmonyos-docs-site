"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["48762"], {
526320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_concurrency_multi_thread_concurrency_overview_multi_thread_concurrency_overview_md_341_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-concurrency-multi-thread-concurrency-overview-multi-thread-concurrency-overview-md-341.json
var site_docs_arkts_arkts_concurrency_multithread_concurrency_multi_thread_concurrency_overview_multi_thread_concurrency_overview_md_341_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview/multi-thread-concurrency-overview","title":"多线程并发概述","description":"多线程并发是指在单个程序中同时运行多个线程，通过并行或交替执行任务来提升性能和资源利用率的编程模型。在ArkTS应用开发中，多线程并发适用于多种业务场景，常见的业务场景主要分为以下三类，更详细的使用请参考*应用多线程开发实践案例*。","source":"@site/docs/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview/multi-thread-concurrency-overview.md","sourceDirName":"arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview","slug":"/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"多线程并发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-thread-concurrency-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"异步并发 (Promise和async/await)","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/async-concurrency-overview/"},"next":{"title":"TaskPool简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview/multi-thread-concurrency-overview.md


const frontMatter = {
	title: '多线程并发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-thread-concurrency-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '多线程并发概述';

const assets = {

};



const toc = [{
  "value": "多线程并发模型",
  "id": "多线程并发模型",
  "level": 2
}, {
  "value": "内存共享模型",
  "id": "内存共享模型",
  "level": 3
}, {
  "value": "Actor模型",
  "id": "actor模型",
  "level": 3
}, {
  "value": "TaskPool和Worker",
  "id": "taskpool和worker",
  "level": 2
}, {
  "value": "并发注意事项",
  "id": "并发注意事项",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "多线程并发概述",
        children: "多线程并发概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多线程并发是指在单个程序中同时运行多个线程，通过并行或交替执行任务来提升性能和资源利用率的编程模型。在ArkTS应用开发中，多线程并发适用于多种业务场景，常见的业务场景主要分为以下三类，更详细的使用请参考", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用多线程开发实践案例"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务逻辑包含大量计算或频繁的I/O读写等需要长时间执行的任务，例如图片和视频的编解码、文件的压缩与解压缩、数据库操作等场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务逻辑包括监听和定期采集数据等需要长时间保持运行的任务，例如定期采集传感器数据的场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务逻辑跟随主线程的生命周期，或与主线程绑定的任务，例如在游戏中的业务场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并发模型用于实现不同应用场景中的并发任务。常见的并发模型有基于内存共享的模型和基于消息通信的模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actor并发模型是基于消息通信的典型并发模型。开发者无需处理锁带来的复杂问题，且具备高并发度，因此应用广泛。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前ArkTS提供了TaskPool和Worker两种并发能力，两者均基于Actor并发模型实现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Actor并发模型和内存共享并发模型的具体对比请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A4%9A%E7%BA%BF%E7%A8%8B%E5%B9%B6%E5%8F%91%E6%A8%A1%E5%9E%8B",
        children: "多线程并发模型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程并发模型",
      children: "多线程并发模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存共享并发模型指多线程同时执行任务，这些线程依赖同一内存资源并且都有权限访问，线程访问内存前需要抢占并锁定内存的使用权，没有抢占到内存的线程需要等待其他线程释放使用权再执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actor并发模型每一个线程都是一个独立Actor，每个Actor有自己独立的内存，Actor之间通过消息传递机制触发对方Actor的行为，不同Actor之间不能直接访问对方的内存空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actor并发模型与内存共享并发模型相比，不同线程间的内存是隔离的，因此不会发生线程竞争同一内存资源的情况。无需处理内存上锁问题，从而提高开发效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actor并发模型中，不同Actor之间不共享内存，需通过消息传递机制传递任务和结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以经典的生产者消费者问题为例，分析这两种模型在解决问题时的差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存共享模型",
      children: "内存共享模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例伪代码和示意图展示了如何使用内存共享模型解决生产者消费者问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(445161)/* ["default"] */.A) + "",
        width: "640",
        height: "317"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了避免不同生产者或消费者同时访问同一块共享内存容器时产生脏读、脏写现象，同一时间只能有一个生产者或消费者访问该容器。即不同生产者和消费者需争夺使用容器的锁。当一个角色获取锁后，其他角色需等待该角色释放锁，才能重新尝试获取锁以访问该容器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此段示例为伪代码仅作为逻辑示意，便于开发者理解使用内存共享模型和Actor模型的区别\nclass Queue {\n  // ...\n  push(value: number) {\n    // ...\n  }\n\n  empty(): boolean {\n    // ...\n    return true;\n  }\n\n  pop(value: number): number {\n    // ...\n    return value;\n  }\n  // ...\n}\n\nclass Mutex {\n  // ...\n  lock(): boolean {\n    // ...\n    return true;\n  }\n\n  unlock() {\n    // ...\n  }\n  // ...\n}\n\nclass BufferQueue {\n  queue: Queue = new Queue();\n  mutex: Mutex = new Mutex();\n\n  add(value: number) {\n    // 尝试获取锁\n    if (this.mutex.lock()) {\n      this.queue.push(value);\n      this.mutex.unlock();\n    }\n  }\n\n  take(value: number): number {\n    let res: number = 0;\n    // 尝试获取锁\n    if (this.mutex.lock()) {\n      if (this.queue.empty()) {\n        this.mutex.unlock();\n        res = 1;\n        return res;\n      }\n      let num: number = this.queue.pop(value);\n      this.mutex.unlock();\n      res = num;\n    }\n    return res;\n  }\n}\n\n// 构造一段全局共享的内存\nlet g_bufferQueue = new BufferQueue();\n\nclass Producer {\n  constructor() {\n  }\n\n  run() {\n    let value = Math.random();\n    // 跨线程访问bufferQueue对象\n    g_bufferQueue.add(value);\n  }\n}\n\nclass ConsumerTest {\n  constructor() {\n  }\n\n  run() {\n    // 跨线程访问bufferQueue对象\n    let num = 123;\n    let res = g_bufferQueue.take(num);\n    if (res != null) {\n      // 添加消费逻辑\n    }\n  }\n}\n\nfunction Main(): void {\n  let consumer: ConsumerTest = new ConsumerTest();\n  let producer: Producer = new Producer();\n  let threadNum: number = 10;\n  for (let i = 0; i < threadNum; i++) {\n    // 如下伪代码模拟启动多线程执行生产任务\n    // let thread = new Thread();\n    // thread.run(producer.run());\n    // consumer.run();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "actor模型",
      children: "Actor模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例简单展示了如何使用基于Actor模型的TaskPool并发能力来解决生产者消费者问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(621447)/* ["default"] */.A) + "",
        width: "713",
        height: "262"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actor模型中，不同角色之间并不共享内存，生产者线程和UI线程都有自己的虚拟机实例，两个虚拟机实例之间拥有独占的内存，相互隔离。生产者生产出结果后，通过序列化通信将结果发送给UI线程。UI线程消费结果后，再发送新的生产任务给生产者线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\nimport { Main } from './Cale'\n\n// 跨线程并发任务\n@Concurrent\nasync function produce(): Promise<number> {\n  // 添加生产相关逻辑\n  console.info('producing...');\n  return Math.random();\n}\n\nclass Consumer {\n  public consume(value: Object) {\n    // 添加消费相关逻辑\n    console.info('consuming value: ' + value);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button() {\n          Text('Actor start')\n        }.onClick(() => {\n          let produceTask: taskpool.Task = new taskpool.Task(produce);\n          let consumer: Consumer = new Consumer();\n          for (let index: number = 0; index < 10; index++) {\n            // 执行生产异步并发任务\n            taskpool.execute(produceTask).then((res: Object) => {\n              consumer.consume(res);\n            }).catch((e: Error) => {\n              console.error(e.message);\n            })\n          }\n          this.message = 'success';\n        })\n        .id('button')\n        .width('20%')\n        .height('20%')\n\n        Button() {\n          Text('Actor start2')\n        }.onClick(async () => {\n          let dataArray: number[] = [];\n          let produceTask: taskpool.Task = new taskpool.Task(produce);\n          let consumer: Consumer = new Consumer();\n          for (let index: number = 0; index < 10; index++) {\n            // 执行生产异步并发任务\n            let result = await taskpool.execute(produceTask) as number;\n            dataArray.push(result);\n          }\n          for (let index: number = 0; index < dataArray.length; index++) {\n            consumer.consume(dataArray[index]);\n          }\n          this.message = 'success2';\n        })\n        .id('button2')\n        .width('20%')\n        .height('20%')\n\n        Button() {\n          Text('cale start')\n        }.onClick(async () => {\n          Main();\n          this.message = 'cale success';\n        })\n        .id('button3')\n        .width('20%')\n        .height('20%')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "也可以等待生产者完成所有任务，通过序列化通信将结果发送给UI线程。UI线程接收后，由消费者统一消费结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\n\n// 跨线程并发任务\n@Concurrent\nasync function produce(): Promise<number> {\n  // 添加生产相关逻辑\n  console.info('producing...');\n  return Math.random();\n}\n\nclass Consumer {\n  public consume(value: number) {\n    // 添加消费相关逻辑\n    console.info('consuming value: ' + value);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World'\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button() {\n          Text('start')\n        }.onClick(async () => {\n          let dataArray = new Array<number>();\n          let produceTask: taskpool.Task = new taskpool.Task(produce);\n          let consumer: Consumer = new Consumer();\n          for (let index: number = 0; index < 10; index++) {\n            // 执行生产异步并发任务\n            let result = await taskpool.execute(produceTask) as number;\n            dataArray.push(result);\n          }\n          for (let index: number = 0; index < dataArray.length; index++) {\n            consumer.consume(dataArray[index]);\n          }\n        })\n        .width('20%')\n        .height('20%')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpool和worker",
      children: "TaskPool和Worker"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS提供了TaskPool和Worker两种并发能力供开发者选择，各自的运作机制和注意事项请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction",
        children: "TaskPool简介"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker简介"
      }), "，两者之间实现的特点和适用场景也存在差异，请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker",
        children: "TaskPool和Worker的对比"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "并发注意事项",
      children: "并发注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "避免在并发线程中操作UI"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UI操作必须在主线程中执行。并发线程中操作UI可能导致界面异常或崩溃。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据传递需支持序列化/反序列化"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "并发任务间传递数据时，对象必须是可序列化的（如基本类型、普通对象等），不可传递函数、循环引用、特殊对象（如Promise、Error）等。已完成（fulfilled或rejected）状态的 Promise可以被传递，因为其结果是可序列化的。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "合理控制并发粒度"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "频繁创建和销毁并发任务（如Worker、Task）会带来额外性能开销，建议复用或使用任务池机制。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注意内存泄漏风险"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "避免在并发任务中持有外部对象的强引用，防止内存泄漏。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "并发任务应具备独立性"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "并发任务应尽量不依赖外部状态，减少竞态条件（Race Condition）和同步开销。竞态条件是指多个线程或任务同时访问并修改共享数据，执行结果依赖于任务调度的顺序，可能导致数据不一致或不可预期的行为。"
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
621447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797880-35a30510a31c15e12337984ac75e3f75.png");

},
445161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477529-4dffcf2fbcb99cb38f3db825ae7765d7.png");

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