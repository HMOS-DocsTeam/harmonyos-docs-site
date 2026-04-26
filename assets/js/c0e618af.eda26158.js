"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["359290"], {
439962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_concurrency_taskpool_introduction_taskpool_introduction_md_c0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-concurrency-taskpool-introduction-taskpool-introduction-md-c0e.json
var site_docs_arkts_arkts_concurrency_multithread_concurrency_taskpool_introduction_taskpool_introduction_md_c0e_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction/taskpool-introduction","title":"TaskPool简介","description":"TaskPool为应用程序提供多线程环境，降低资源消耗并提高系统性能。无需管理线程生命周期。具体接口信息及使用方法，请参见TaskPool。","source":"@site/docs/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction/taskpool-introduction.md","sourceDirName":"arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction","slug":"/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"TaskPool简介","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-introduction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多线程并发概述","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview/"},"next":{"title":"Worker简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/worker-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction/taskpool-introduction.md


const frontMatter = {
	title: 'TaskPool简介',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-introduction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'TaskPool简介';

const assets = {

};



const toc = [{
  "value": "TaskPool运作机制",
  "id": "taskpool运作机制",
  "level": 2
}, {
  "value": "TaskPool注意事项",
  "id": "taskpool注意事项",
  "level": 2
}, {
  "value": "@Concurrent装饰器",
  "id": "concurrent装饰器",
  "level": 2
}, {
  "value": "装饰器使用示例",
  "id": "装饰器使用示例",
  "level": 2
}, {
  "value": "并发函数一般使用",
  "id": "并发函数一般使用",
  "level": 3
}, {
  "value": "并发函数返回Promise",
  "id": "并发函数返回promise",
  "level": 3
}, {
  "value": "并发函数中使用自定义类或函数",
  "id": "并发函数中使用自定义类或函数",
  "level": 3
}, {
  "value": "并发异步函数中使用Promise",
  "id": "并发异步函数中使用promise",
  "level": 3
}, {
  "value": "TaskPool扩缩容机制",
  "id": "taskpool扩缩容机制",
  "level": 2
}, {
  "value": "扩容机制",
  "id": "扩容机制",
  "level": 3
}, {
  "value": "缩容机制",
  "id": "缩容机制",
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
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "taskpool简介",
        children: "TaskPool简介"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TaskPool为应用程序提供多线程环境，降低资源消耗并提高系统性能。无需管理线程生命周期。具体接口信息及使用方法，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
        children: "TaskPool"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpool运作机制",
      children: "TaskPool运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TaskPool运作机制示意图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(521495)/* ["default"] */.A) + "",
        width: "800",
        height: "535"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TaskPool支持在宿主线程提交任务到任务队列，系统选择合适的工作线程执行任务，并将结果返回给宿主线程。接口易用，支持任务执行、取消和指定优先级。通过系统统一线程管理，结合动态调度和负载均衡算法，可以节约系统资源。系统默认启动一个任务工作线程，任务多时会自动扩容。工作线程数量上限由设备的物理核数决定，内部管理具体数量，确保调度和执行效率最优。长时间无任务分发时会缩容，减少工作线程数量。具体扩缩容机制请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#taskpool%E6%89%A9%E7%BC%A9%E5%AE%B9%E6%9C%BA%E5%88%B6",
        children: "TaskPool扩缩容机制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpool注意事项",
      children: "TaskPool注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["实现任务的函数需要使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#concurrent%E8%A3%85%E9%A5%B0%E5%99%A8",
          children: "@Concurrent装饰器"
        }), "标注，且仅支持在.ets文件中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 11开始，跨并发实例传递带方法的实例对象时，该类必须使用装饰器", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E8%A3%85%E9%A5%B0%E5%99%A8",
          children: "@Sendable装饰器"
        }), "标注，且仅支持在.ets文件中使用。如果不考虑使用@Sendable装饰器标注，可以考虑worker方法，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface",
          children: "Worker同步调用宿主线程的接口"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["任务函数（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#longtask12",
          children: "LongTask"
        }), "除外）在TaskPool工作线程中的执行时长不能超过3分钟。否则，若因任务逻辑导致阻塞，使任务无法完成，将导致该线程后续无法调度其他任务。当所有线程均被超时占用时，后续提交的任务将无法正常调度执行。需要注意的是，这里的3分钟限制仅统计TaskPool线程的​​同步执行时长​​，不包含异步操作（如Promise或async/await）的等待时长。例如，数据库的插入、删除、更新等操作，如果是异步操作，仅计入CPU实际处理时长（如SQL解析），网络传输或磁盘I/O等待时长不计入；如果是同步操作，整个操作时长（含I/O阻塞时间）均计入限制。开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#task",
          children: "Task"
        }), "的属性ioDuration、cpuDuration获取执行当前任务的异步IO耗时和CPU耗时。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["实现任务的函数入参需满足序列化支持的类型。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/serializable-overview",
          children: "线程间通信对象概述"
        }), "。目前不支持使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "@State装饰器"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
          children: "@Prop装饰器"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link装饰器"
        }), "等装饰器修饰的复杂类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArrayBuffer参数在TaskPool中默认转移，需要设置转移列表的话可通过接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#settransferlist10",
          children: "setTransferList()"
        }), "设置。如果需要多次调用使用ArrayBuffer作为参数的task，则需要通过接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#setclonelist11",
          children: "setCloneList()"
        }), "把ArrayBuffer在线程中的传输行为改成拷贝传递，避免对原有对象产生影响。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除上述注意事项外，使用TaskPool时还需注意", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview#%E5%B9%B6%E5%8F%91%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
        children: "并发注意事项"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Concurrent\nfunction printArrayBuffer(buffer: ArrayBuffer) {\n  return buffer;\n}\n\nfunction testArrayBuffer() {\n  const buffer = new ArrayBuffer(1);\n  const group = new taskpool.TaskGroup();\n  const task = new taskpool.Task(printArrayBuffer, buffer);\n  group.addTask(task);\n  task.setCloneList([buffer]);\n  for (let i = 0; i < 5; i++) {\n    taskpool.execute(group).then(() => {\n      console.info('execute group success');\n    }).catch((e: BusinessError) => {\n      console.error(`execute group error: ${e.message}`);\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["由于不同线程中上下文对象不同，TaskPool工作线程只能使用线程安全的模块。例如，不能使用UI相关的非线程安全模块。TaskPool/Worker等工作线程不支持使用操作UI的模块、线程不安全的模块以及其他只支持在主线程中使用的模块。不支持UI模块是因为目前工作线程不支持操作UI，不支持线程不安全的模块是因为多线程使用该模块可能会导致多线程问题，只支持在主线程中使用的模块明确在文档中说明的有", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
          children: "ApplicationContext"
        }), "等。线程安全的模块是指多线程同时使用该模块也不会引入多线程问题，如TaskPool/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
          children: "Worker"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hilog",
          children: "hilog"
        }), "等。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "序列化传输的数据量限制为16MB。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#priority",
          children: "Priority"
        }), "的IDLE优先级是用来标记需要在后台运行的耗时任务（例如数据同步、备份），它的优先级别是最低的。这种优先级的任务只在所有线程都空闲时触发执行，并且同一时间只会有一个IDLE优先级的任务执行。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promise不支持跨线程传递。TaskPool返回pending或rejected状态的Promise时会失败，返回fulfilled状态的Promise时TaskPool会解析返回的结果，如果结果可以跨线程传递，则返回成功。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持在TaskPool工作线程中使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
          children: "AppStorage"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TaskPool支持在宿主线程封装任务并提交给任务队列，理论上支持的任务数量没有上限。然而，任务的执行效率受限于任务的优先级和系统资源。当工作线程达到最大数量时，任务的执行效率可能会下降。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TaskPool不支持指定任务所运行的线程，任务会被分配到空闲的线程中执行。如果需要指定任务所运行的线程，建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
          children: "Worker"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concurrent装饰器",
      children: "@Concurrent装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
        children: "TaskPool"
      }), "时，执行的并发函数必须用该装饰器修饰，否则无法通过校验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(549968)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始，支持使用@Concurrent装饰器声明并校验并发函数。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Concurrent并发装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅支持在Stage模型的工程中使用。仅支持在.ets文件中使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰的函数类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许标注为async函数或普通函数。禁止标注为generator、箭头函数、类方法。不支持类成员函数或者匿名函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰的函数内的变量类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许使用局部变量、入参和通过import引入的变量，禁止使用闭包变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰的函数内的返回值类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持的类型请查", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/serializable-overview",
              children: "线程间通信对象概述"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于@Concurrent标记的函数不能访问闭包，因此函数内部不能调用当前文件的其他函数，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function bar() {\n}\n\n@Concurrent\nfunction foo() {\n  bar(); // 违反闭包原则，报错\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器使用示例",
      children: "装饰器使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "并发函数一般使用",
      children: "并发函数一般使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并发函数为一个计算两数之和的普通函数，taskpool执行该函数并返回结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction add(num1: number, num2: number): number {\n  return num1 + num2;\n}\n\nasync function concurrentFunc(): Promise<void> {\n  try {\n    const task: taskpool.Task = new taskpool.Task(add, 1, 2);\n    console.info(`taskpool res is: ${await taskpool.execute(task)}`); // 输出结果：taskpool res is: 3\n  } catch (e) {\n    console.error(`taskpool execute error is: ${e}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            concurrentFunc();\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "并发函数返回promise",
      children: "并发函数返回Promise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在并发函数中返回Promise时需特别注意。如示例所示，testPromise和testPromise1等函数需处理Promise并返回结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction testPromise(args1: number, args2: number): Promise<number> {\n  return new Promise<number>((resolve, reject) => {\n    resolve(args1 + args2);\n  });\n}\n\n@Concurrent\nasync function testPromise1(args1: number, args2: number): Promise<number> {\n  return new Promise<number>((resolve, reject) => {\n    resolve(args1 + args2);\n  });\n}\n\n@Concurrent\nasync function testPromise2(args1: number, args2: number): Promise<number> {\n  return await new Promise<number>((resolve, reject) => {\n    resolve(args1 + args2);\n  });\n}\n\n@Concurrent\nfunction testPromise3() {\n  return Promise.resolve(1);\n}\n\n@Concurrent\nasync function testPromise4(): Promise<number> {\n  return 1;\n}\n\n@Concurrent\nasync function testPromise5(): Promise<string> {\n  return await new Promise((resolve) => {\n    setTimeout(() => {\n      resolve('Promise setTimeout after resolve');\n    }, 1000)\n  });\n}\n\nasync function testConcurrentFunc() {\n  const task1: taskpool.Task = new taskpool.Task(testPromise, 1, 2);\n  const task2: taskpool.Task = new taskpool.Task(testPromise1, 1, 2);\n  const task3: taskpool.Task = new taskpool.Task(testPromise2, 1, 2);\n  const task4: taskpool.Task = new taskpool.Task(testPromise3);\n  const task5: taskpool.Task = new taskpool.Task(testPromise4);\n  const task6: taskpool.Task = new taskpool.Task(testPromise5);\n\n  taskpool.execute(task1).then((d: object) => {\n    console.info(`task1 res is: ${d}`); // 输出结果：task1 res is: 3\n  }).catch((e: object) => {\n    console.error(`task1 catch e: ${e}`);\n  })\n  taskpool.execute(task2).then((d: object) => {\n    console.info(`task2 res is: ${d}`);\n  }).catch((e: object) => {\n    console.error(`task2 catch e: ${e}`); // 输出结果：task2 catch e: Error: Can't return Promise in pending state\n  })\n  taskpool.execute(task3).then((d: object) => {\n    console.info(`task3 res is: ${d}`); // 输出结果：task3 res is: 3\n  }).catch((e: object) => {\n    console.error(`task3 catch e: ${e}`);\n  })\n  taskpool.execute(task4).then((d: object) => {\n    console.info(`task4 res is: ${d}`); // 输出结果：task4 res is: 1\n  }).catch((e: object) => {\n    console.error(`task4 catch e: ${e}`);\n  })\n  taskpool.execute(task5).then((d: object) => {\n    console.info(`task5 res is: ${d}`); // 输出结果：task5 res is: 1\n  }).catch((e: object) => {\n    console.error(`task5 catch e: ${e}`);\n  })\n  taskpool.execute(task6).then((d: object) => {\n    console.info(`task6 res is: ${d}`); // 输出结果：task6 res is: Promise setTimeout after resolve\n  }).catch((e: object) => {\n    console.error(`task6 catch e: ${e}`);\n  })\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            testConcurrentFunc();\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "并发函数中使用自定义类或函数",
      children: "并发函数中使用自定义类或函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在并发函数中使用自定义类或函数时，需将其定义在单独的文件中，否则可能被视为闭包。如下示例所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { testAdd, MyTestA, MyTestB } from './Test';\n\nfunction add(arg: number) {\n  return ++arg;\n}\n\nclass TestA {\n  constructor(name: string) {\n    this.name = name;\n  }\n  name: string = 'ClassA';\n}\n\nclass TestB {\n  static nameStr: string = 'ClassB';\n}\n\n@Concurrent\nfunction testFunc() {\n  // case1：在并发函数中直接调用同文件内定义的类或函数\n\n  // 直接调用同文件定义的函数add()，add飘红报错：\n  // Only imported variables and local variables can be used in @Concurrent decorated functions. <ArkTSCheck>\n  // add(1);\n  // 直接使用同文件定义的TestA构造，TestA飘红报错：\n  // Only imported variables and local variables can be used in @Concurrent decorated functions. <ArkTSCheck>\n  // let a = new TestA('aaa');\n  // 直接访问同文件定义的TestB的成员nameStr，TestB飘红报错：\n  // Only imported variables and local variables can be used in @Concurrent decorated functions. <ArkTSCheck>\n  // console.info(`TestB name is: ${TestB.nameStr}`);\n\n  // case2：在并发函数中调用定义在Test.ets文件并导入当前文件的类或函数\n\n  // 输出结果：res1 is: 2\n  console.info(`res1 is: ${testAdd(1)}`);\n  const tmpStr = new MyTestA('TEST A');\n  // 输出结果：res2 is: TEST A\n  console.info(`res2 is: ${tmpStr.name}`);\n  // 输出结果：res3 is: MyTestB\n  console.info(`res3 is: ${MyTestB.nameStr}`);\n}\n\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          const task = new taskpool.Task(testFunc);\n          taskpool.execute(task).then(() => {\n            console.info('taskpool: execute task success!');\n          }).catch((e:BusinessError) => {\n            console.error(`taskpool: execute: Code: ${e.code}, message: ${e.message}`);\n          })\n          this.message = 'success';\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export function testAdd(arg: number) {\n  return ++arg;\n}\n\n@Sendable\nexport class MyTestA {\n  constructor(name: string) {\n    this.name = name;\n  }\n  name: string = 'MyTestA';\n}\n\nexport class MyTestB {\n  static nameStr:string = 'MyTestB';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "并发异步函数中使用promise",
      children: "并发异步函数中使用Promise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在并发异步函数中使用Promise时，建议搭配await使用，这样TaskPool可以捕获Promise中的异常。推荐使用示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nasync function testPromiseError() {\n  await new Promise<number>((resolve, reject) => {\n    resolve(1);\n  }).then(()=>{\n    throw new Error('testPromise Error');\n  })\n}\n\n@Concurrent\nasync function testPromiseError1() {\n  await new Promise<string>((resolve, reject) => {\n    reject('testPromiseError1 Error msg');\n  })\n}\n\n@Concurrent\nfunction testPromiseError2() {\n  return new Promise<string>((resolve, reject) => {\n    reject('testPromiseError2 Error msg');\n  })\n}\n\nasync function testConcurrentFunc() {\n  const task1: taskpool.Task = new taskpool.Task(testPromiseError);\n  const task2: taskpool.Task = new taskpool.Task(testPromiseError1);\n  const task3: taskpool.Task = new taskpool.Task(testPromiseError2);\n\n  taskpool.execute(task1).then((d: object) => {\n    console.info(`task1 res is: ${d}`);\n  }).catch((e: object) => {\n    console.error(`task1 catch e: ${e}`); // task1 catch e: Error: testPromise Error\n  })\n  taskpool.execute(task2).then((d: object) => {\n    console.info(`task2 res is: ${d}`);\n  }).catch((e: object) => {\n    console.error(`task2 catch e: ${e}`); // task2 catch e: testPromiseError1 Error msg\n  })\n  taskpool.execute(task3).then((d: object) => {\n    console.info(`task3 res is: ${d}`);\n  }).catch((e: object) => {\n    console.error(`task3 catch e: ${e}`); // task3 catch e: testPromiseError2 Error msg\n  })\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            testConcurrentFunc();\n            // ...\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpool扩缩容机制",
      children: "TaskPool扩缩容机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扩容机制",
      children: "扩容机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般情况下，向任务队列提交任务时会触发扩容检测。扩容检测首先判断当前空闲工作线程数是否大于任务数。如果大于，说明线程池中有空闲工作线程，无需扩容。否则，通过负载计算确定所需工作线程数并创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "缩容机制",
      children: "缩容机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩容后，TaskPool创建多个工作线程，但当任务数减少后，这些线程就会处于空闲状态，造成资源浪费，因此，TaskPool提供了缩容机制。TaskPool使用定时器，每30秒检测一次当前负载，并尝试释放空闲的工作线程。释放的线程需满足以下条件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该线程空闲时长达到30s。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该线程上未执行长时任务（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#longtask12",
          children: "LongTask"
        }), "）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该线程上没有业务申请且未释放的句柄，例如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/common-basic-arkts/js-apis-timer/js-apis-timer",
          children: "Timer(定时器)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该线程处于非调试调优阶段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该线程中不存在已创建未销毁的子Worker。"
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
521495(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437575-8ab6fe6a0054d3fa8651fc52b25cb641.png");

},
549968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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