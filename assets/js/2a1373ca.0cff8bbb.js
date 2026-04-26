"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["306339"], {
126195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkts_api_arkts_arkts_js_apis_taskpool_js_apis_taskpool_md_2a1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkts-api-arkts-arkts-js-apis-taskpool-js-apis-taskpool-md-2a1.json
var site_docs_ref_arkts_api_arkts_arkts_js_apis_taskpool_js_apis_taskpool_md_2a1_namespaceObject = JSON.parse('{"id":"arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool","title":"@ohos.taskpool (启动任务池)","description":"任务池（taskpool）的作用是为应用程序提供多线程运行环境，降低资源消耗并提升系统性能，且您无需关心线程的生命周期。您可以使用任务池API创建后台任务（Task），并进行如执行任务或取消任务等操作。理论上，任务池API允许创建的任务数量不受限制，但由于内存限制，不建议这样做。此外，不建议在任务中执行阻塞操作，尤其是无限期阻塞操作，因为长时间的阻塞操作会占用工作线程，可能阻塞其他任务的调度，影响应用性能。","source":"@site/docs-ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool.md","sourceDirName":"arkts-api/arkts-arkts/js-apis-taskpool","slug":"/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"@ohos.taskpool (启动任务池)","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-taskpool"},"sidebar":"ref","previous":{"title":"@ohos.process (获取进程相关的信息)","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts/js-apis-process/js-apis-process"},"next":{"title":"@ohos.uri (URI字符串解析)","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts/js-apis-uri/js-apis-uri"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool.md


const frontMatter = {
	title: '@ohos.taskpool (启动任务池)',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-taskpool'
};
const contentTitle = '@ohos.taskpool (启动任务池)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "taskpool.execute",
  "id": "taskpoolexecute",
  "level": 2
}, {
  "value": "taskpool.execute13+",
  "id": "taskpoolexecute13",
  "level": 2
}, {
  "value": "taskpool.execute",
  "id": "taskpoolexecute-1",
  "level": 2
}, {
  "value": "taskpool.execute13+",
  "id": "taskpoolexecute13-1",
  "level": 2
}, {
  "value": "taskpool.execute10+",
  "id": "taskpoolexecute10",
  "level": 2
}, {
  "value": "taskpool.executeDelayed11+",
  "id": "taskpoolexecutedelayed11",
  "level": 2
}, {
  "value": "taskpool.executeDelayed13+",
  "id": "taskpoolexecutedelayed13",
  "level": 2
}, {
  "value": "taskpool.executePeriodically12+",
  "id": "taskpoolexecuteperiodically12",
  "level": 2
}, {
  "value": "taskpool.executePeriodically13+",
  "id": "taskpoolexecuteperiodically13",
  "level": 2
}, {
  "value": "taskpool.cancel",
  "id": "taskpoolcancel",
  "level": 2
}, {
  "value": "taskpool.cancel10+",
  "id": "taskpoolcancel10",
  "level": 2
}, {
  "value": "taskpool.cancel18+",
  "id": "taskpoolcancel18",
  "level": 2
}, {
  "value": "taskpool.terminateTask12+",
  "id": "taskpoolterminatetask12",
  "level": 2
}, {
  "value": "taskpool.isConcurrent12+",
  "id": "taskpoolisconcurrent12",
  "level": 2
}, {
  "value": "taskpool.getTaskPoolInfo10+",
  "id": "taskpoolgettaskpoolinfo10",
  "level": 2
}, {
  "value": "taskpool.getTask22+",
  "id": "taskpoolgettask22",
  "level": 2
}, {
  "value": "Priority",
  "id": "priority",
  "level": 2
}, {
  "value": "Task",
  "id": "task",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "constructor11+",
  "id": "constructor11",
  "level": 3
}, {
  "value": "isCanceled10+",
  "id": "iscanceled10",
  "level": 3
}, {
  "value": "setTransferList10+",
  "id": "settransferlist10",
  "level": 3
}, {
  "value": "setCloneList11+",
  "id": "setclonelist11",
  "level": 3
}, {
  "value": "sendData11+",
  "id": "senddata11",
  "level": 3
}, {
  "value": "onReceiveData11+",
  "id": "onreceivedata11",
  "level": 3
}, {
  "value": "addDependency11+",
  "id": "adddependency11",
  "level": 3
}, {
  "value": "removeDependency11+",
  "id": "removedependency11",
  "level": 3
}, {
  "value": "onEnqueued12+",
  "id": "onenqueued12",
  "level": 3
}, {
  "value": "onStartExecution12+",
  "id": "onstartexecution12",
  "level": 3
}, {
  "value": "onExecutionFailed12+",
  "id": "onexecutionfailed12",
  "level": 3
}, {
  "value": "onExecutionSucceeded12+",
  "id": "onexecutionsucceeded12",
  "level": 3
}, {
  "value": "isDone12+",
  "id": "isdone12",
  "level": 3
}, {
  "value": "CallbackFunction12+",
  "id": "callbackfunction12",
  "level": 2
}, {
  "value": "CallbackFunctionWithError12+",
  "id": "callbackfunctionwitherror12",
  "level": 2
}, {
  "value": "LongTask12+",
  "id": "longtask12",
  "level": 2
}, {
  "value": "GenericsTask13+",
  "id": "genericstask13",
  "level": 2
}, {
  "value": "constructor13+",
  "id": "constructor13",
  "level": 3
}, {
  "value": "constructor13+",
  "id": "constructor13-1",
  "level": 3
}, {
  "value": "TaskGroup10+",
  "id": "taskgroup10",
  "level": 2
}, {
  "value": "constructor10+",
  "id": "constructor10",
  "level": 3
}, {
  "value": "constructor11+",
  "id": "constructor11-1",
  "level": 3
}, {
  "value": "addTask10+",
  "id": "addtask10",
  "level": 3
}, {
  "value": "addTask10+",
  "id": "addtask10-1",
  "level": 3
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "SequenceRunner 11+",
  "id": "sequencerunner-11",
  "level": 2
}, {
  "value": "constructor11+",
  "id": "constructor11-2",
  "level": 3
}, {
  "value": "constructor12+",
  "id": "constructor12",
  "level": 3
}, {
  "value": "execute11+",
  "id": "execute11",
  "level": 3
}, {
  "value": "AsyncRunner18+",
  "id": "asyncrunner18",
  "level": 2
}, {
  "value": "constructor18+",
  "id": "constructor18",
  "level": 3
}, {
  "value": "constructor18+",
  "id": "constructor18-1",
  "level": 3
}, {
  "value": "execute18+",
  "id": "execute18",
  "level": 3
}, {
  "value": "State10+",
  "id": "state10",
  "level": 2
}, {
  "value": "TaskInfo10+",
  "id": "taskinfo10",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-2",
  "level": 3
}, {
  "value": "ThreadInfo10+",
  "id": "threadinfo10",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-3",
  "level": 3
}, {
  "value": "TaskPoolInfo10+",
  "id": "taskpoolinfo10",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-4",
  "level": 3
}, {
  "value": "TaskResult20+",
  "id": "taskresult20",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-5",
  "level": 3
}, {
  "value": "其他说明",
  "id": "其他说明",
  "level": 2
}, {
  "value": "序列化支持类型",
  "id": "序列化支持类型",
  "level": 3
}, {
  "value": "简单使用",
  "id": "简单使用",
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
    object: "object",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "ohostaskpool-启动任务池",
        children: "@ohos.taskpool (启动任务池)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务池（taskpool）的作用是为应用程序提供多线程运行环境，降低资源消耗并提升系统性能，且您无需关心线程的生命周期。您可以使用任务池API创建后台任务（Task），并进行如执行任务或取消任务等操作。理论上，任务池API允许创建的任务数量不受限制，但由于内存限制，不建议这样做。此外，不建议在任务中执行阻塞操作，尤其是无限期阻塞操作，因为长时间的阻塞操作会占用工作线程，可能阻塞其他任务的调度，影响应用性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建同一优先级的任务时，可以自行决定其执行顺序。任务的实际执行顺序与调用任务池API提供的任务执行接口的顺序一致。任务的默认优先级为MEDIUM。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当同一时间待执行的任务数量大于任务池工作线程数量，任务池会根据负载均衡机制进行扩容，增加工作线程数量，减少整体等待时长。同样，当执行的任务数量减少，工作线程数量大于执行任务数量，部分工作线程处于空闲状态，任务池会根据负载均衡机制进行缩容，减少工作线程数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["任务池API返回错误码。如需了解各错误码的详细信息，请参阅文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
        children: "语言基础类库错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#taskpool%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
        children: "TaskPool注意事项"
      }), "，了解使用TaskPool时的相关注意点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文档中涉及以下任务概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["任务组任务：对应为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#taskgroup10",
          children: "TaskGroup"
        }), "任务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["串行队列任务：对应为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sequencerunner-11",
          children: "SequenceRunner"
        }), "任务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["异步队列任务：对应为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#asyncrunner18",
          children: "AsyncRunner"
        }), "任务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["周期任务：由", (0,jsx_runtime.jsx)(_components.a, {
          href: "#taskpoolexecuteperiodically12",
          children: "executePeriodically"
        }), "执行的任务。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(270741)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpoolexecute",
      children: "taskpool.execute"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["execute(func: Function, ...args: Object[]): Promise", (0,jsx_runtime.jsxs)(_components.object, {
        children: [(0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将待执行的函数放入taskpool的内部任务队列，函数不会立即执行，而是等待分发到工作线程执行。在当前执行模式下，不支持取消任务。使用Promise异步回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "func"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Function"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["执行的逻辑需要传入一个函数，该函数必须使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#concurrent%E8%A3%85%E9%A5%B0%E5%99%A8",
                  children: "@Concurrent装饰器"
                }), "装饰。支持的函数返回值类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                  children: "序列化支持类型"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "args"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object[]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["执行逻辑的函数所需要的入参，支持的参数类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                  children: "序列化支持类型"
                }), "。默认值为undefined。"]
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Promise<Object>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Promise对象，返回任务函数的执行结果。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200006"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "An exception occurred during serialization."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200014"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The function is not marked as concurrent."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Concurrent\nfunction printArgs(args: number): number {\n    console.info(\"printArgs: \" + args);\n    return args;\n}\n\ntaskpool.execute(printArgs, 100).then((value: Object) => { // 100: test number\n  console.info(\"taskpool result: \" + value);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "taskpoolexecute13",
          children: "taskpool.execute13+"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["execute<A extends Array", (0,jsx_runtime.jsxs)(_components.object, {
            children: [", R>(func: (...args: A) => R | Promise<R>, ...args: A): Promise<R>", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "校验并发函数的参数类型和返回类型后，将函数添加到taskpool的任务队列。使用Promise异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力："
                })
              }), " SystemCapability.Utils.Lang"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 13开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "参数："
                })
              })
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "参数名"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "必填"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "func"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "(...args: A) => R"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Promise<R>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "args"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["执行逻辑的函数所需要的入参，支持的参数类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                      children: "序列化支持类型"
                    }), "。默认值为undefined。"]
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "返回值："
                })
              })
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.tbody, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "Promise<R>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Promise对象，返回任务函数的执行结果。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "错误码："
                })
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/errorcode-universal/errorcode-universal",
                children: "通用错误码"
              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                children: "语言基础类库错误码"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "错误码ID"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "错误信息"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "401"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Parameter error. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "10200006"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "An exception occurred during serialization."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "10200014"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "The function is not marked as concurrent."
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "示例："
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Concurrent\nfunction printArgs(args: number): number {\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\n@Concurrent\nfunction testWithThreeParams(a: number, b: string, c: number): string {\n  return b;\n}\n\n@Concurrent\nfunction testWithArray(args: [number, string]): string {\n  return \"success\";\n}\n\ntaskpool.execute<[number], number>(printArgs, 100).then((value: number) => { // 100: test number\n  console.info(\"taskpool result: \" + value); // \"taskpool result: 100\"\n});\n\ntaskpool.execute<[number, string, number], string>(testWithThreeParams, 100, \"test\", 100).then((value: string) => {\n  console.info(\"taskpool result: \" + value); // \"taskpool result: test\"\n});\n\ntaskpool.execute<[[number, string]], string>(testWithArray, [100, \"test\"]).then((value: string) => {\n  console.info(\"taskpool result: \" + value); // \"taskpool result: success\"\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "taskpoolexecute-1",
              children: "taskpool.execute"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["execute(task: Task, priority?: Priority): Promise", (0,jsx_runtime.jsxs)(_components.object, {
                children: [(0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "将创建好的任务添加到taskpool的内部任务队列中，任务不会立即执行，而是等待分发到工作线程执行。当前模式支持设置任务优先级和通过cancel取消任务。任务不能是任务组任务、串行队列任务或异步队列任务。长时任务只能调用一次，非长时任务可以多次调用执行。使用Promise异步回调。"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "系统能力："
                    })
                  }), " SystemCapability.Utils.Lang"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "参数："
                    })
                  })
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "参数名"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "类型"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "必填"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "说明"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "task"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.a, {
                          href: "#task",
                          children: "Task"
                        })
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "需要在任务池中执行的任务。"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "priority"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.a, {
                          href: "#priority",
                          children: "Priority"
                        })
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "否"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "该参数表示等待执行的任务的优先级，默认值为taskpool.Priority.MEDIUM。"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "返回值："
                    })
                  })
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "类型"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "说明"
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Promise<Object>"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Promise对象，返回任务函数的执行结果。"
                      })]
                    })
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "错误码："
                    })
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/errorcode-universal/errorcode-universal",
                    children: "通用错误码"
                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                    children: "语言基础类库错误码"
                  }), "。"]
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "错误码ID"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "错误信息"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "401"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "10200006"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "An exception occurred during serialization."
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "10200014"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "The function is not marked as concurrent."
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "10200051"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "The periodic task cannot be executed again."
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "10200057"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "The task cannot be executed by two APIs."
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "示例："
                    })
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "@Concurrent\nfunction printArgs(args: number): number {\n    console.info(\"printArgs: \" + args);\n    return args;\n}\n\nlet task1: taskpool.Task = new taskpool.Task(printArgs, 100); // 100: test number\nlet task2: taskpool.Task = new taskpool.Task(printArgs, 200); // 200: test number\nlet task3: taskpool.Task = new taskpool.Task(printArgs, 300); // 300: test number\ntaskpool.execute(task1, taskpool.Priority.LOW).then((value: Object) => {\n  console.info(\"taskpool result1: \" + value);\n});\ntaskpool.execute(task2, taskpool.Priority.MEDIUM).then((value: Object) => {\n  console.info(\"taskpool result2: \" + value);\n});\ntaskpool.execute(task3, taskpool.Priority.HIGH).then((value: Object) => {\n  console.info(\"taskpool result3: \" + value);\n});\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "taskpoolexecute13-1",
                  children: "taskpool.execute13+"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["execute<A extends Array", (0,jsx_runtime.jsxs)(_components.object, {
                    children: [", R>(task: GenericsTask<A, R>, priority?: Priority): Promise<R>", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "将创建好的泛型任务放入taskpool的内部任务队列，校验任务的参数类型和返回值类型。使用Promise异步回调。"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "execute任务的校验是结合new GenericsTask一起用的，参数、返回值类型需与new GenericsTask中的类型保持一致。"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "系统能力："
                        })
                      }), " SystemCapability.Utils.Lang"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 13开始，该接口支持在元服务中使用。"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "参数："
                        })
                      })
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "参数名"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "必填"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "task"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "#genericstask13",
                              children: "GenericsTask<A, R>"
                            })
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "需要在任务池中执行的泛型任务。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "priority"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "#priority",
                              children: "Priority"
                            })
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "否"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "等待执行的任务的优先级，默认值为taskpool.Priority.MEDIUM。"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "返回值："
                        })
                      })
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Promise<R>"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Promise对象，返回任务函数的执行结果。"
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "错误码："
                        })
                      })
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/errorcode-universal/errorcode-universal",
                        children: "通用错误码"
                      }), "和", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                        children: "语言基础类库错误码"
                      }), "。"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "错误码ID"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "错误信息"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "401"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Parameter error. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "10200006"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "An exception occurred during serialization."
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "10200014"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "The function is not marked as concurrent."
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "10200051"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "The periodic task cannot be executed again."
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "10200057"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "The task cannot be executed by two APIs."
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "示例："
                        })
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "@Concurrent\nfunction printArgs(args: number): number {\n    console.info(\"printArgs: \" + args);\n    return args;\n}\n\nlet task1: taskpool.Task = new taskpool.GenericsTask<[number], number>(printArgs, 100); // 100: test number\nlet task2: taskpool.Task = new taskpool.GenericsTask<[number], number>(printArgs, 200); // 200: test number\nlet task3: taskpool.Task = new taskpool.GenericsTask<[number], number>(printArgs, 300); // 300: test number\ntaskpool.execute<[number], number>(task1, taskpool.Priority.LOW).then((value: number) => {\n  console.info(\"taskpool result1: \" + value);\n});\ntaskpool.execute<[number], number>(task2, taskpool.Priority.MEDIUM).then((value: number) => {\n  console.info(\"taskpool result2: \" + value);\n});\ntaskpool.execute<[number], number>(task3, taskpool.Priority.HIGH).then((value: number) => {\n  console.info(\"taskpool result3: \" + value);\n});\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "taskpoolexecute10",
                      children: "taskpool.execute10+"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "execute(group: TaskGroup, priority?: Priority): Promise<Object[]>"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "将创建好的任务组放入taskpool内部任务队列，任务组中的任务不会立即执行，而是等待分发到工作线程执行。任务组中任务全部执行完成后，结果数组统一返回。此模式适用于执行关联任务。使用Promise异步回调。"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "系统能力："
                        })
                      }), " SystemCapability.Utils.Lang"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 11开始，该接口支持在元服务中使用。"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "参数："
                        })
                      })
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "参数名"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "必填"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "group"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "#taskgroup10",
                              children: "TaskGroup"
                            })
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "需要在任务池中执行的任务组。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "priority"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "#priority",
                              children: "Priority"
                            })
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "否"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "等待执行的任务组的优先级，该参数默认值为taskpool.Priority.MEDIUM。"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "返回值："
                        })
                      })
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Promise<Object[]>"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Promise对象数组，返回任务函数的执行结果。"
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "错误码："
                        })
                      })
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/errorcode-universal/errorcode-universal",
                        children: "通用错误码"
                      }), "和", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                        children: "语言基础类库错误码"
                      }), "。"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "错误码ID"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "错误信息"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "401"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "10200006"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "An exception occurred during serialization."
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "示例："
                        })
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "@Concurrent\nfunction printArgs(args: number): number {\n    console.info(\"printArgs: \" + args);\n    return args;\n}\n\nlet taskGroup1: taskpool.TaskGroup = new taskpool.TaskGroup();\ntaskGroup1.addTask(printArgs, 10); // 10: test number\ntaskGroup1.addTask(printArgs, 20); // 20: test number\ntaskGroup1.addTask(printArgs, 30); // 30: test number\n\nlet taskGroup2: taskpool.TaskGroup = new taskpool.TaskGroup();\nlet task1: taskpool.Task = new taskpool.Task(printArgs, 100); // 100: test number\nlet task2: taskpool.Task = new taskpool.Task(printArgs, 200); // 200: test number\nlet task3: taskpool.Task = new taskpool.Task(printArgs, 300); // 300: test number\ntaskGroup2.addTask(task1);\ntaskGroup2.addTask(task2);\ntaskGroup2.addTask(task3);\ntaskpool.execute(taskGroup1).then((res: Array<Object>) => {\n  console.info(\"Succeeded in excuting task, res is:\" + res);\n});\ntaskpool.execute(taskGroup2).then((res: Array<Object>) => {\n  console.info(\"Succeeded in excuting task, res is:\" + res);\n});\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "taskpoolexecutedelayed11",
                      children: "taskpool.executeDelayed11+"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["executeDelayed(delayTime: number, task: Task, priority?: Priority): Promise", (0,jsx_runtime.jsxs)(_components.object, {
                        children: [(0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "延时执行任务。当前执行模式可以设置任务优先级，并且可以尝试调用cancel取消任务。该任务不能是任务组任务、串行队列任务、异步队列任务或周期任务。如果任务不是长时任务，可以多次调用executeDelayed执行；如果是长时任务，则仅支持执行一次。使用Promise异步回调。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.Utils.Lang"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "delayTime"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "延时时间。单位为ms。delayTime值必须要大于等于0。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "task"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#task",
                                  children: "Task"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "需要延时执行的任务。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "priority"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#priority",
                                  children: "Priority"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "延时执行的任务的优先级，该参数默认值为taskpool.Priority.MEDIUM。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "Promise<Object>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Promise对象，返回任务函数的执行结果。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "错误码："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/errorcode-universal/errorcode-universal",
                            children: "通用错误码"
                          }), "和", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                            children: "语言基础类库错误码"
                          }), "。"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "错误码ID"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "错误信息"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "401"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "10200006"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "An exception occurred during serialization."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "10200014"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The function is not marked as concurrent."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "10200028"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The delayTime is less than zero."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "10200051"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The periodic task cannot be executed again."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "10200057"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The task cannot be executed by two APIs."
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "// import BusinessError\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Concurrent\nfunction printArgs(args: number): void {\n    console.info(\"printArgs: \" + args);\n}\n\nlet t: number = Date.now();\nconsole.info(\"taskpool start time is: \" + t);\nlet task: taskpool.Task = new taskpool.Task(printArgs, 100); // 100: test number\ntaskpool.executeDelayed(1000, task).then(() => { // 1000: delayTime is 1000ms\n  console.info('Succeeded in executing task');\n}).catch((e: BusinessError) => {\n  console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n})\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "taskpoolexecutedelayed13",
                          children: "taskpool.executeDelayed13+"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["executeDelayed<A extends Array", (0,jsx_runtime.jsxs)(_components.object, {
                            children: [", R>(delayTime: number, task: GenericsTask<A, R>, priority?: Priority): Promise<R>", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "延时执行泛型任务，不校验任务的参数类型和返回值类型。使用Promise异步回调。"
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "executeDelayed任务的校验是结合new GenericsTask一起用的，参数、返回值类型需与new GenericsTask中的类型保持一致。"
                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "系统能力："
                                })
                              }), " SystemCapability.Utils.Lang"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "元服务API："
                                })
                              }), " 从API version 13开始，该接口支持在元服务中使用。"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "参数："
                                })
                              })
                            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                              children: [(0,jsx_runtime.jsx)(_components.thead, {
                                children: (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.th, {
                                    children: "参数名"
                                  }), (0,jsx_runtime.jsx)(_components.th, {
                                    children: "类型"
                                  }), (0,jsx_runtime.jsx)(_components.th, {
                                    children: "必填"
                                  }), (0,jsx_runtime.jsx)(_components.th, {
                                    children: "说明"
                                  })]
                                })
                              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "delayTime"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "number"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "是"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "延时时间。单位为ms。delayTime值必须要大于等于0。"
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "task"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: (0,jsx_runtime.jsx)(_components.a, {
                                      href: "#genericstask13",
                                      children: "GenericsTask<A, R>"
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "是"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "需要延时执行的泛型任务。"
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "priority"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: (0,jsx_runtime.jsx)(_components.a, {
                                      href: "#priority",
                                      children: "Priority"
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "否"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "延时执行的任务的优先级，默认值为taskpool.Priority.MEDIUM。"
                                  })]
                                })]
                              })]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "返回值："
                                })
                              })
                            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                              children: [(0,jsx_runtime.jsx)(_components.thead, {
                                children: (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.th, {
                                    children: "类型"
                                  }), (0,jsx_runtime.jsx)(_components.th, {
                                    children: "说明"
                                  })]
                                })
                              }), (0,jsx_runtime.jsx)(_components.tbody, {
                                children: (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "Promise<R>"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "Promise对象，返回任务函数的执行结果。"
                                  })]
                                })
                              })]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "错误码："
                                })
                              })
                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                href: "/ref/errorcode-universal/errorcode-universal",
                                children: "通用错误码"
                              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                children: "语言基础类库错误码"
                              }), "。"]
                            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                              children: [(0,jsx_runtime.jsx)(_components.thead, {
                                children: (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.th, {
                                    children: "错误码ID"
                                  }), (0,jsx_runtime.jsx)(_components.th, {
                                    children: "错误信息"
                                  })]
                                })
                              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "401"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "Parameter error. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "10200028"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "The delayTime is less than zero."
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "10200051"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "The periodic task cannot be executed again."
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "10200057"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "The task cannot be executed by two APIs."
                                  })]
                                })]
                              })]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "示例："
                                })
                              })
                            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                              children: (0,jsx_runtime.jsx)(_components.code, {
                                children: "// import BusinessError\nimport { BusinessError } from '@kit.BasicServicesKit'\n\n@Concurrent\nfunction printArgs(args: number): string {\n    console.info(\"printArgs: \" + args);\n    return \"success\";\n}\n\nlet task: taskpool.Task = new taskpool.GenericsTask<[number], string>(printArgs, 100); // 100: test number\ntaskpool.executeDelayed<[number], string>(1000, task).then((res: string) => { // 1000: delayTime is 1000ms\n  console.info('Succeeded in executing task');\n}).catch((e: BusinessError) => {\n  console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n})\n"
                              })
                            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                              id: "taskpoolexecuteperiodically12",
                              children: "taskpool.executePeriodically12+"
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "executePeriodically(period: number, task: Task, priority?: Priority): void"
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "周期任务每隔period时长执行一次。当前执行模式支持设置任务优先级，并可以通过调用cancel取消周期任务的执行。周期任务不能是任务组任务、串行队列任务或异步队列任务，不能再次调用执行接口，且执行的任务不能拥有依赖关系。"
                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "系统能力："
                                })
                              }), " SystemCapability.Utils.Lang"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "元服务API："
                                })
                              }), " 从API version 12开始，该接口支持在元服务中使用。"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "参数："
                                })
                              })
                            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                              children: [(0,jsx_runtime.jsx)(_components.thead, {
                                children: (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.th, {
                                    children: "参数名"
                                  }), (0,jsx_runtime.jsx)(_components.th, {
                                    children: "类型"
                                  }), (0,jsx_runtime.jsx)(_components.th, {
                                    children: "必填"
                                  }), (0,jsx_runtime.jsx)(_components.th, {
                                    children: "说明"
                                  })]
                                })
                              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "period"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "number"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "是"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "周期时长。单位为ms。period值必须要大于等于0。"
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "task"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: (0,jsx_runtime.jsx)(_components.a, {
                                      href: "#task",
                                      children: "Task"
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "是"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "需要周期执行的任务。"
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "priority"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: (0,jsx_runtime.jsx)(_components.a, {
                                      href: "#priority",
                                      children: "Priority"
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "否"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "周期执行的任务的优先级，该参数默认值为taskpool.Priority.MEDIUM。"
                                  })]
                                })]
                              })]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "错误码："
                                })
                              })
                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: ["以下错误码的详细介绍，请参见", (0,jsx_runtime.jsx)(_components.a, {
                                href: "/ref/errorcode-universal/errorcode-universal",
                                children: "通用错误码"
                              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                children: "语言基础类库错误码"
                              }), "。"]
                            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                              children: [(0,jsx_runtime.jsx)(_components.thead, {
                                children: (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.th, {
                                    children: "错误码ID"
                                  }), (0,jsx_runtime.jsx)(_components.th, {
                                    children: "错误信息"
                                  })]
                                })
                              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "401"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "10200006"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "An exception occurred during serialization."
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "10200014"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "The function is not marked as concurrent."
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "10200028"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "The period is less than zero."
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "10200050"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "The concurrent task has been executed and cannot be executed periodically."
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.tr, {
                                  children: [(0,jsx_runtime.jsx)(_components.td, {
                                    children: "10200057"
                                  }), (0,jsx_runtime.jsx)(_components.td, {
                                    children: "The task cannot be executed by two APIs."
                                  })]
                                })]
                              })]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "示例："
                                })
                              })
                            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                              children: (0,jsx_runtime.jsx)(_components.code, {
                                children: "@Concurrent\nfunction printArgs(args: number): void {\n  console.info(\"printArgs: \" + args);\n}\n\n@Concurrent\nfunction testExecutePeriodically(args: number): void {\n  let t = Date.now();\n  while ((Date.now() - t) < args) {\n    continue;\n  }\n  taskpool.Task.sendData(args); // 向宿主线程发送消息\n}\n\nfunction printResult(data: number): void {\n  console.info(\"taskpool: data is: \" + data);\n}\n\nfunction taskpoolTest() {\n  try {\n    let task: taskpool.Task = new taskpool.Task(printArgs, 100); // 100: test number\n    taskpool.executePeriodically(1000, task); // 1000: period is 1000ms\n  } catch (e) {\n    console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n  }\n\n  try {\n    let periodicTask: taskpool.Task = new taskpool.Task(testExecutePeriodically, 200); // 200: test number\n    periodicTask.onReceiveData(printResult);\n    taskpool.executePeriodically(1000, periodicTask); // 1000: period is 1000ms\n  } catch (e) {\n    console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n  }\n}\n\ntaskpoolTest();\n"
                              })
                            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                              id: "taskpoolexecuteperiodically13",
                              children: "taskpool.executePeriodically13+"
                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: ["executePeriodically<A extends Array", (0,jsx_runtime.jsxs)(_components.object, {
                                children: [", R>(period: number, task: GenericsTask<A, R>, priority?: Priority): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "周期执行泛型任务，每隔period时长执行一次。不校验任务的参数类型和返回值类型。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "executePeriodically任务的校验是结合new GenericsTask一起用的，参数、返回值类型需与new GenericsTask中的类型保持一致。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 13开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "period"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "number"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "周期时长。单位为ms。period值必须要大于等于0。"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "task"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#genericstask13",
                                          children: "GenericsTask<A, R>"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需要周期执行的泛型任务。"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "priority"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#priority",
                                          children: "Priority"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "周期执行的任务的优先级，该参数默认值为taskpool.Priority.MEDIUM。"
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200006"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "An exception occurred during serialization."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200014"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The function is not marked as concurrent."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200028"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The period is less than zero."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200050"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The concurrent task has been executed and cannot be executed periodically."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200057"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The task cannot be executed by two APIs."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction printArgs(args: number): void {\n  console.info(\"printArgs: \" + args);\n}\n\n@Concurrent\nfunction testExecutePeriodically(args: number): void {\n  let t = Date.now();\n  while ((Date.now() - t) < args) {\n    continue;\n  }\n  taskpool.Task.sendData(args); // 向宿主线程发送消息\n}\n\nfunction printResult(data: number): void {\n  console.info(\"taskpool: data is: \" + data);\n}\n\nfunction taskpoolTest() {\n  try {\n    let task: taskpool.Task = new taskpool.GenericsTask<[number], void>(printArgs, 100); // 100: test number\n    taskpool.executePeriodically<[number], void>(1000, task); // 1000: period is 1000ms\n  } catch (e) {\n    console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n  }\n\n  try {\n    let periodicTask: taskpool.Task = new taskpool.GenericsTask<[number], void>(testExecutePeriodically, 200); // 200: test number\n    periodicTask.onReceiveData(printResult);\n    taskpool.executePeriodically<[number], void>(1000, periodicTask); // 1000: period is 1000ms\n  } catch (e) {\n    console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n  }\n}\n\ntaskpoolTest();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "taskpoolcancel",
                                  children: "taskpool.cancel"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "cancel(task: Task): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "取消任务池中的任务。当任务在taskpool等待队列中，取消该任务后该任务将不再执行，并返回任务被取消的异常；当任务已经在taskpool工作线程执行，取消该任务并不影响任务继续执行，执行结果在catch分支返回，搭配isCanceled使用可以对任务取消行为作出响应。taskpool.cancel对其之前的taskpool.execute、taskpool.executeDelayed或taskpool.executePeriodically生效。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["从API version 20开始，支持在执行cancel操作后，在catch分支里使用BusinessError<", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "#taskresult20",
                                    children: "taskpool.TaskResult"
                                  }), ">的泛型标记，来获取任务中抛出的异常信息或最终的执行结果。"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "task"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#task",
                                          children: "Task"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需要取消执行的任务。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200015"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The task to cancel does not exist."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200055"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The asyncRunner task has been canceled."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "从API version 10开始，此接口调用时不再涉及上报错误码10200016。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "正在执行的任务取消示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n@Concurrent\nfunction inspectStatus(arg: number): number {\n  // 第一次检查任务是否已经取消并作出响应\n  if (taskpool.Task.isCanceled()) {\n    console.info(\"task has been canceled before 2s sleep.\");\n    return arg + 2;\n  }\n  // 2s sleep\n  let t: number = Date.now();\n  while (Date.now() - t < 2000) {\n    continue;\n  }\n  // 第二次检查任务是否已经取消并作出响应\n  if (taskpool.Task.isCanceled()) {\n    console.info(\"task has been canceled after 2s sleep.\");\n    return arg + 3;\n  }\n  return arg + 1;\n}\n\nfunction concurrentFunc() {\n  let task1: taskpool.Task = new taskpool.Task(inspectStatus, 100); // 100: test number\n  let task2: taskpool.Task = new taskpool.Task(inspectStatus, 200); // 200: test number\n  let task3: taskpool.Task = new taskpool.Task(inspectStatus, 300); // 300: test number\n  let task4: taskpool.Task = new taskpool.Task(inspectStatus, 400); // 400: test number\n  let task5: taskpool.Task = new taskpool.Task(inspectStatus, 500); // 500: test number\n  let task6: taskpool.Task = new taskpool.Task(inspectStatus, 600); // 600: test number\n  taskpool.execute(task1).then((res: Object) => {\n    console.info(`Succeeded in excuting task. result: ` + res);\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to execute task. Code: ${err.code}, message: ${err.message}`);\n  });\n  taskpool.execute(task2);\n  taskpool.execute(task3);\n  taskpool.execute(task4);\n  taskpool.execute(task5);\n  taskpool.execute(task6);\n  // 1s后取消task\n  setTimeout(() => {\n    try {\n      taskpool.cancel(task1);\n    } catch (e) {\n      console.error(`Failed to cancel task. Code: ${e.code}, message: ${e.message}`);\n    }\n  }, 1000);\n}\n\nconcurrentFunc();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "taskpoolcancel10",
                                  children: "taskpool.cancel10+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "cancel(group: TaskGroup): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "取消任务池中的任务组。如果任务组中的任务未全部执行结束，返回undefined作为任务组结果。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["从API version 20开始，支持在执行cancel操作后，在catch分支里使用BusinessError<", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "#taskresult20",
                                    children: "taskpool.TaskResult"
                                  }), ">的泛型标记，来获取任务中抛出的异常信息或最终的执行结果。"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "group"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#taskgroup10",
                                          children: "TaskGroup"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需要取消执行的任务组。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200018"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The task group to cancel does not exist."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n@Concurrent\nfunction printArgs(args: number): number {\n  let t: number = Date.now();\n  while (Date.now() - t < 2000) {\n    continue;\n  }\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\nfunction concurrentFunc() {\n  let taskGroup1: taskpool.TaskGroup = new taskpool.TaskGroup();\n  taskGroup1.addTask(printArgs, 10); // 10: test number\n  let taskGroup2: taskpool.TaskGroup = new taskpool.TaskGroup();\n  taskGroup2.addTask(printArgs, 100); // 100: test number\n  taskpool.execute(taskGroup1).then((res: Array<Object>) => {\n    console.info(`Succeeded in excuting task. res is: ` + res);\n  });\n  taskpool.execute(taskGroup2).then((res: Array<Object>) => {\n    console.info(`Succeeded in excuting task. res is: ` + res);\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to excute task. Code: ${err.code}, message: ${err.message}`);\n  });\n  setTimeout(() => {\n    try {\n      taskpool.cancel(taskGroup2);\n    } catch (e) {\n      console.error(`Failed to cancel task. Code: ${e.code}, message: ${e.message}`);\n    }\n  }, 1000);\n}\n\nconcurrentFunc();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "taskpoolcancel18",
                                  children: "taskpool.cancel18+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "cancel(taskId: number): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "通过任务ID取消任务池中的任务。如果任务在taskpool等待队列中，取消后任务将不再执行，并返回任务取消的异常。如果任务已在taskpool工作线程中执行，取消不影响任务继续执行，执行结果在catch分支返回。使用isCanceled可以对任务取消行为作出响应。taskpool.cancel对其之前的taskpool.execute或taskpool.executeDelayed生效。在其他线程调用taskpool.cancel时，需注意其行为是异步的，可能影响之后的taskpool.execute或taskpool.executeDelayed。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["从API version 20开始，支持在执行cancel操作后，在catch分支里使用BusinessError<", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "#taskresult20",
                                    children: "taskpool.TaskResult"
                                  }), ">的泛型标记。这可以用来获取任务中抛出的异常信息或最终的执行结果。"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 18开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "taskId"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "number"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需要取消执行的任务的ID。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200015"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The task to cancel does not exist."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200055"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The asyncRunner task has been canceled."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n@Concurrent\nfunction printArgs(args: number): number {\n  let t: number = Date.now();\n  while (Date.now() - t < 2000) {\n    continue;\n  }\n  if (taskpool.Task.isCanceled()) {\n    console.info(\"task has been canceled after 2s sleep.\");\n    return args + 1;\n  }\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\n@Concurrent\nfunction cancelFunction(taskId: number) {\n  try {\n    taskpool.cancel(taskId);\n  } catch (e) {\n    console.error(`Failed to cancel task. Code: ${e.code}, message: ${e.message}`);\n  }\n}\n\nfunction concurrentFunc() {\n  let task = new taskpool.Task(printArgs, 100); // 100: test number\n  taskpool.execute(task).catch((err: BusinessError) => {\n    console.error(`Failed to excute task. Code: ${err.code}, message: ${err.message}`);\n  });\n  setTimeout(() => {\n    let cancelTask = new taskpool.Task(cancelFunction, task.taskId);\n    taskpool.execute(cancelTask);\n  }, 1000);\n}\n\nconcurrentFunc();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "taskpoolterminatetask12",
                                  children: "taskpool.terminateTask12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "terminateTask(longTask: LongTask): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "中止任务池中的长时任务，在长时任务执行完成后调用。中止后，执行长时任务的线程可能会被回收。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API"
                                    })
                                  }), "： 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "longTask"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#longtask12",
                                          children: "LongTask"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需要中止的长时任务。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction longTask(arg: number): number {\n  let t: number = Date.now();\n  while (Date.now() - t < arg) {\n    continue;\n  }\n  console.info(\"longTask has been executed.\");\n  return arg;\n}\n\nfunction concurrentFunc() {\n  let task1: taskpool.LongTask = new taskpool.LongTask(longTask, 1000); // 1000: sleep time\n  taskpool.execute(task1).then((res: Object) => {\n    taskpool.terminateTask(task1);\n    console.info(\"taskpool longTask result: \" + res);\n  });\n}\n\nconcurrentFunc();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "taskpoolisconcurrent12",
                                  children: "taskpool.isConcurrent12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "isConcurrent(func: Function): boolean"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "检查函数是否为并发函数。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API"
                                    })
                                  }), "： 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "func"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Function"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需要检查的函数。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "返回值："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "boolean"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["如果被检查函数标注了", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#concurrent%E8%A3%85%E9%A5%B0%E5%99%A8",
                                          children: "@Concurrent装饰器"
                                        }), "，则返回true，否则返回false。"]
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction test() {}\n\nlet result: Boolean = taskpool.isConcurrent(test);\nconsole.info(\"result is: \" + result);\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "taskpoolgettaskpoolinfo10",
                                  children: "taskpool.getTaskPoolInfo10+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "getTaskPoolInfo(): TaskPoolInfo"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "获取任务池的线程信息和任务信息。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "返回值："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#taskpoolinfo10",
                                          children: "TaskPoolInfo"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "任务池的内部信息。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "let taskpoolInfo: taskpool.TaskPoolInfo = taskpool.getTaskPoolInfo();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "taskpoolgettask22",
                                  children: "taskpool.getTask22+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "getTask(taskId: number, taskName?: string): Task | undefined"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "通过taskId或taskId与taskName获取对应的Task实例。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                    src: (__webpack_require__(105639)/* ["default"] */.A) + "",
                                    width: "102",
                                    height: "38"
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "如果传入的taskId查询不到对应的Task实例，则会返回undefined；"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "如果传入的taskId能够查询到对应的Task实例，但是调用getTask方法的线程和创建Task实例的线程不一致，则会返回undefined；"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "如果传入了taskId和taskName，通过taskId查询到的Task实例的name和传入的taskName不一致，则会返回undefined。"
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 22开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "taskId"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "number"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "任务ID。"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "taskName"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "string"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "任务名称。默认值为undefined。"
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "返回值："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#task",
                                          children: "Task"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "undefined"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction addNum(num1: number, num2: number) {\n  return num1 + num2;\n}\n\nfunction checkTask() {\n  try {\n    taskpool.getTask(null);\n  } catch (e) {\n    console.error(\"error:\" + e);\n    // error:BusinessError: Parameter error. The input parameters are invalid, the type of the first param must be number.\n  }\n\n  let task1:taskpool.Task = new taskpool.Task(\"addNum\", addNum, 1, 2);\n  let task2:taskpool.Task | undefined = taskpool.getTask(task1.taskId, \"addNum\"); // task2 is not undefined\n  let task3:taskpool.Task | undefined = taskpool.getTask(task1.taskId, \"add\"); // task3 is undefined\n  let task4:taskpool.Task | undefined = taskpool.getTask(0); // task4 is undefined\n}\n\nfunction dealTask() {\n  let task1:taskpool.Task = new taskpool.Task(addNum, 1, 2);\n  let task2:taskpool.Task | undefined = taskpool.getTask(task1.taskId);\n  if (task2 === undefined) {\n    return;\n  }\n\n  taskpool.execute(task2).then((result) => {\n    console.info(\"task2 result: \" + result); // task2 result: 3\n  })\n}\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "priority",
                                  children: "Priority"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["表示所创建任务（Task）执行时的优先级。工作线程优先级跟随任务优先级更新，对应关系参考", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/coding/thread-scheduling/qos-guidelines#qos%E7%AD%89%E7%BA%A7%E5%AE%9A%E4%B9%89",
                                    children: "QoS等级定义"
                                  }), "。"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "名称"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "值"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "HIGH"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "0"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务为高优先级。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "MEDIUM"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "1"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务为中优先级。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "LOW"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "2"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务为低优先级。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "IDLE12+"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "3"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务为后台任务。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction printArgs(args: number): number {\n  let t: number = Date.now();\n  while (Date.now() - t < 1000) { // 1000: delay 1s\n    continue;\n  }\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\nlet allCount = 100; // 100: test number\nlet taskArray: Array<taskpool.Task> = [];\n// 创建400个任务并添加至taskArray\nfor (let i: number = 0; i < allCount; i++) {\n  let task1: taskpool.Task = new taskpool.Task(printArgs, i);\n  taskArray.push(task1);\n  let task2: taskpool.Task = new taskpool.Task(printArgs, i * 10); // 10: test number\n  taskArray.push(task2);\n  let task3: taskpool.Task = new taskpool.Task(printArgs, i * 100); // 100: test number\n  taskArray.push(task3);\n  let task4: taskpool.Task = new taskpool.Task(printArgs, i * 1000); // 1000: test number\n  taskArray.push(task4);\n}\n\n// 从taskArray中获取不同的任务并给定不同优先级执行\nfor (let i: number = 0; i < taskArray.length; i+=4) { // 4: 每次执行4个任务，循环取任务时需后移4项，确保执行的是不同的任务\n  taskpool.execute(taskArray[i], taskpool.Priority.HIGH);\n  taskpool.execute(taskArray[i + 1], taskpool.Priority.LOW);\n  taskpool.execute(taskArray[i + 2], taskpool.Priority.MEDIUM);\n  taskpool.execute(taskArray[i + 3], taskpool.Priority.IDLE);\n}\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "task",
                                  children: "Task"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "调用Task中的任何接口前必须先使用构造函数创建Task对象。任务可以多次执行，也可以放入任务组、串行队列或异步队列执行，还支持添加依赖关系。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "属性",
                                  children: "属性"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "名称"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "只读"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "可选"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "function"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Function"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["创建任务时需要传入的函数，支持的函数返回值类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "arguments"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Object[]"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["创建任务传入函数所需的参数，支持的参数类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "name11+"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "string"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["创建任务时指定的任务名称。不建议修改此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "taskId18+"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "number"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务的ID。任务的标识符，系统默认提供全局唯一值，不建议修改此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 18开始，该接口支持在元服务中使用。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "totalDuration11+"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "number"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["执行任务总耗时。单位为ms。不建议修改此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "ioDuration11+"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "number"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["执行任务异步IO耗时。单位为ms。不建议修改此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "cpuDuration11+"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "number"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["执行任务CPU耗时。单位为ms。不建议修改此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: "元服务API："
                                          })
                                        }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "constructor",
                                  children: "constructor"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "constructor(func: Function, ...args: Object[])"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "Task的构造函数。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "func"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Function"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["执行的逻辑需要传入函数，必须使用", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#concurrent%E8%A3%85%E9%A5%B0%E5%99%A8",
                                          children: "@Concurrent装饰器"
                                        }), "装饰，支持的函数返回值类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "args"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Object[]"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务执行传入函数的入参，支持的参数类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "。默认值为undefined。"]
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The input parameters are invalid."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200014"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The function is not marked as concurrent."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction printArgs(args: string): string {\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\nlet task: taskpool.Task = new taskpool.Task(printArgs, \"this is my first Task\");\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "constructor11",
                                  children: "constructor11+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "constructor(name: string, func: Function, ...args: Object[])"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "Task的构造函数用于创建任务，并可指定任务名称。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "name"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "string"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "任务名称。"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "func"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Function"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["执行的逻辑需要传入函数，必须使用", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#concurrent%E8%A3%85%E9%A5%B0%E5%99%A8",
                                          children: "@Concurrent装饰器"
                                        }), "装饰，支持的函数返回值类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "args"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Object[]"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务执行时传入函数的参数。支持的类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "。默认值为undefined。"]
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The input parameters are invalid."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200014"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The function is not marked as concurrent."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction printArgs(args: string): string {\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\nlet taskName: string = \"taskName\";\nlet task: taskpool.Task = new taskpool.Task(taskName, printArgs, \"this is my first Task\");\nlet name: string = task.name;\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "iscanceled10",
                                  children: "isCanceled10+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "static isCanceled(): boolean"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "检查当前正在运行的任务是否已取消。使用此方法前，需要先创建一个Task对象。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "返回值："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "boolean"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "如果当前正在运行的任务被取消返回true，否则返回false。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction inspectStatus(arg: number): number {\n    // do something\n    if (taskpool.Task.isCanceled()) {\n      console.info(\"task has been canceled.\");\n      // do something\n      return arg + 1;\n    }\n    // do something\n    return arg;\n}\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                    src: (__webpack_require__(5299)/* ["default"] */.A) + "",
                                    width: "102",
                                    height: "38"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "isCanceled方法需要和taskpool.cancel方法搭配使用，如果不调用cancel方法，isCanceled方法默认返回false。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n@Concurrent\nfunction inspectStatus(arg: number): number {\n  // 第一次检查任务是否已经取消并作出响应\n  if (taskpool.Task.isCanceled()) {\n    console.info(\"task has been canceled before 2s sleep.\");\n    return arg + 2;\n  }\n  // 延时2s\n  let t: number = Date.now();\n  while (Date.now() - t < 2000) {\n    continue;\n  }\n  // 第二次检查任务是否已经取消并作出响应\n  if (taskpool.Task.isCanceled()) {\n    console.info(\"task has been canceled after 2s sleep.\");\n    return arg + 3;\n  }\n  return arg + 1;\n}\n\nlet task: taskpool.Task = new taskpool.Task(inspectStatus, 100); // 100: test number\ntaskpool.execute(task).then((res: Object) => {\n  console.info(\"Succeeded in executing task, result: \" + res);\n}).catch((e: BusinessError) => {\n  console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n});\n// 不调用cancel，isCanceled()默认返回false，task执行的结果为101\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "settransferlist10",
                                  children: "setTransferList10+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "setTransferList(transfer?: ArrayBuffer[]): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "设置任务的传输列表。使用该方法前需要先构造Task。不调用该接口，则传给任务的数据中的ArrayBuffer默认transfer转移。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                    src: (__webpack_require__(222429)/* ["default"] */.A) + "",
                                    width: "102",
                                    height: "38"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "此接口可以设置任务池中ArrayBuffer的transfer列表，transfer列表中的ArrayBuffer对象在传输时不会复制buffer内容到工作线程而是转移buffer控制权至工作线程，传输后当前的ArrayBuffer失效。若ArrayBuffer为空，则不会transfer转移。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "transfer"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "ArrayBuffer[]"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "可传输对象是ArrayBuffer的实例对象，默认为空数组。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200029"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "An ArrayBuffer cannot be set as both a transfer list and a clone list."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction testTransfer(arg1: ArrayBuffer, arg2: ArrayBuffer): number {\n  console.info(\"testTransfer arg1 byteLength: \" + arg1.byteLength);\n  console.info(\"testTransfer arg2 byteLength: \" + arg2.byteLength);\n  return 100;\n}\n\nlet buffer: ArrayBuffer = new ArrayBuffer(8);\nlet view: Uint8Array = new Uint8Array(buffer);\nlet buffer1: ArrayBuffer = new ArrayBuffer(16);\nlet view1: Uint8Array = new Uint8Array(buffer1);\n\nconsole.info(\"testTransfer view byteLength: \" + view.byteLength);\nconsole.info(\"testTransfer view1 byteLength: \" + view1.byteLength);\n// 执行结果为：\n// testTransfer view byteLength: 8\n// testTransfer view1 byteLength: 16\n\nlet task: taskpool.Task = new taskpool.Task(testTransfer, view, view1);\ntask.setTransferList([view.buffer, view1.buffer]);\ntaskpool.execute(task).then((res: Object) => {\n  console.info(\"test result: \" + res);\n}).catch((e: string) => {\n  console.error(\"test catch: \" + e);\n})\nconsole.info(\"testTransfer view2 byteLength: \" + view.byteLength);\nconsole.info(\"testTransfer view3 byteLength: \" + view1.byteLength);\n// 经过transfer转移之后值为0，执行结果为：\n// testTransfer view2 byteLength: 0\n// testTransfer view3 byteLength: 0\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "setclonelist11",
                                  children: "setCloneList11+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "setCloneList(cloneList: Object[] | ArrayBuffer[]): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "设置任务的拷贝列表。在使用该方法前，需先构造Task对象。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                    src: (__webpack_require__(401461)/* ["default"] */.A) + "",
                                    width: "102",
                                    height: "38"
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["需搭配", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E8%A3%85%E9%A5%B0%E5%99%A8",
                                    children: "@Sendable装饰器"
                                  }), "使用，否则会抛异常。建议开发者使用该装饰器以避免异常。"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "cloneList"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Object[]"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "ArrayBuffer[]"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200029"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "An ArrayBuffer cannot be set as both a transfer list and a clone list."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "// sendable.ets\n// 定义两个Sendable class：BaseClass及其子类DeriveClass\n@Sendable\nexport class BaseClass {\n  private str: string = \"sendable: BaseClass\";\n  static num :number = 10;\n  str1: string = \"sendable: this is BaseClass's string\";\n  num1: number = 5;\n  isDone1: boolean = false;\n\n  private fibonacciRecursive(n: number): number {\n    if (n <= 1) {\n      return n;\n    } else {\n      return this.fibonacciRecursive(n - 1) + this.fibonacciRecursive(n - 2);\n    }\n  }\n\n  private privateFunc(num: number): number{\n    let res: number = this.fibonacciRecursive(num);\n    console.info(\"sendable: BaseClass privateFunc res is: \" + res);\n    return res;\n  }\n\n  publicFunc(num: number): number {\n    return this.privateFunc(num);\n  }\n\n  get GetNum(): number {\n    return this.num1;\n  }\n  set SetNum(num: number) {\n    this.num1 = num;\n  }\n\n  constructor() {\n    console.info(this.str);\n    this.isDone1 = true;\n  }\n}\n\n@Sendable\nexport class DeriveClass extends BaseClass {\n  name: string = \"sendable: this is DeriveClass\";\n  printName() {\n    console.info(this.name);\n  }\n  constructor() {\n    super();\n  }\n}\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "// index.ets\n// 宿主线程（这里的宿主线程为UI主线程）调用taskpool，在taskpool线程中调用BaseClass和DeriveClass的方法、访问对应属性\nimport { taskpool } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { BaseClass, DeriveClass } from './sendable';\n\n@Concurrent\nfunction testFunc(arr: Array<BaseClass>, num: number): number {\n  let baseInstance1 = arr[0];\n  console.info(\"sendable: str1 is: \" + baseInstance1.str1);\n  baseInstance1.SetNum = 100;\n  console.info(\"sendable: num1 is: \" + baseInstance1.GetNum);\n  console.info(\"sendable: isDone1 is: \" + baseInstance1.isDone1);\n  // 获取斐波那契数列第num项的结果\n  let res: number = baseInstance1.publicFunc(num);\n  return res;\n}\n\n@Concurrent\nfunction printLog(arr: Array<DeriveClass>): void {\n  let deriveInstance = arr[0];\n  deriveInstance.printName();\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button() {\n          Text(\"TaskPool Test\");\n        }.onClick(() => {\n          // task1访问调用BaseClass.str1/BaseClass.SetNum/BaseClass.GetNum/BaseClass.isDone1/BaseClass.publicFunc\n          let baseInstance1: BaseClass = new BaseClass();\n          let array1 = new Array<BaseClass>();\n          array1.push(baseInstance1);\n          let task1 = new taskpool.Task(testFunc, array1, 10);\n          task1.setCloneList(array1);\n          taskpool.execute(task1).then((res: Object) => {\n            console.info(\"sendable: task1 res is: \" + res);\n          }).catch((e:BusinessError) => {\n            console.error(`sendable: task1 execute Code is ${e.code}, message is ${e.message}`);\n          })\n\n          // task2调用DeriveClass.printName\n          let deriveInstance: DeriveClass = new DeriveClass();\n          let array2 = new Array<DeriveClass>();\n          array2.push(deriveInstance);\n          let task2 = new taskpool.Task(printLog, array2);\n          task2.setCloneList(array2);\n          taskpool.execute(task2).then(() => {\n            console.info(\"sendable: task2 execute success\");\n          }).catch((e:BusinessError) => {\n            console.error(`sendable: task2 execute Code is ${e.code}, message is ${e.message}`);\n          })\n        })\n        .height('15%')\n        .width('30%')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "senddata11",
                                  children: "sendData11+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "static sendData(...args: Object[]): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "任务执行过程中向宿主线程发送消息并触发回调。使用此方法前需构造Task。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                    src: (__webpack_require__(856513)/* ["default"] */.A) + "",
                                    width: "102",
                                    height: "38"
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "该接口应在taskpool的线程中调用。"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "避免在回调函数中调用该方法，否则可能导致消息无法传递到宿主线程。"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "避免在异步函数中调用该方法，否则可能导致消息无法传递到宿主线程。如果在异步函数中使用，则需要使用await来确保该异步函数在任务中同步执行完成。"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "调用该接口时，请确保处理数据的回调函数已在宿主线程注册。"
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "args"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Object[]"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["可传输对象默认转移，作为回调函数的参数。支持的参数类型请参见", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "，默认值为undefined。"]
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The input parameters are invalid."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200006"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "An exception occurred during serialization."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200022"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The function is not called in the TaskPool thread."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200023"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The function is not called in the concurrent function."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200024"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The callback is not registered on the host side."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction sendDataTest(num: number): number {\n  let res: number = num * 10;\n  taskpool.Task.sendData(res);\n  return num;\n}\n\nfunction printLog(data: number): void {\n  console.info(\"taskpool: data is: \" + data);\n}\n\nasync function taskpoolTest(): Promise<void> {\n  try {\n    let task: taskpool.Task = new taskpool.Task(sendDataTest, 1);\n    task.onReceiveData(printLog);\n    await taskpool.execute(task);\n  } catch (e) {\n    console.error(`taskpool: error code: ${e.code}, info: ${e.message}`);\n  }\n}\n\ntaskpoolTest();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "// 异步函数中调用该方法\n@Concurrent\nasync function sendDataTest(num: number) {\n  let func = async () => {\n    let asyncSleep = async (time: number): Promise<Object> => {\n      return new Promise(resolve => setTimeout(resolve, time));\n    }\n    await asyncSleep(10000);\n    let res: number = num * 10;\n    taskpool.Task.sendData(res);\n  }\n  await func(); // 需要使用await来确保该异步函数在任务中同步执行完成。\n}\n\nfunction taskpoolTest() {\n  try {\n    let task: taskpool.Task = new taskpool.Task(sendDataTest, 10);\n    task.onReceiveData((data: number) => {\n      console.info(\"taskpool: data is: \" + data);\n    });\n    taskpool.execute(task);\n  } catch (e) {\n    console.error(`taskpool: error code: ${e.code}, info: ${e.message}`);\n  }\n}\n\ntaskpoolTest();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "onreceivedata11",
                                  children: "onReceiveData11+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "onReceiveData(callback?: Function): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "为任务注册回调函数，接收并处理任务池工作线程的数据。使用此方法前，需构造Task。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                    src: (__webpack_require__(470535)/* ["default"] */.A) + "",
                                    width: "102",
                                    height: "38"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "不支持为同一任务定义多种回调函数。如果多次赋值，只有最后一次赋值的回调函数会生效。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "callback"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Function"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "处理数据的回调函数，发送到宿主线程的数据将会作为入参传入该回调函数。不传参可以取消注册的回调函数。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed."
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction ConcurrentFunc(num: number): number {\n  let res: number = num * 10;\n  taskpool.Task.sendData(res);\n  return num;\n}\n\nfunction printLog(data: number): void {\n  console.info(\"taskpool: data is: \" + data);\n}\n\nasync function testFunc(): Promise<void> {\n  try {\n    let task: taskpool.Task = new taskpool.Task(ConcurrentFunc, 1);\n    task.onReceiveData(printLog);\n    await taskpool.execute(task);\n  } catch (e) {\n    console.error(`taskpool: error code: ${e.code}, info: ${e.message}`);\n  }\n}\n\ntestFunc();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "adddependency11",
                                  children: "addDependency11+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "addDependency(...tasks: Task[]): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "为当前任务添加对其他任务的依赖。使用该方法前需先构造Task。该任务和被依赖的任务不能是任务组任务、串行队列任务、异步队列任务、已执行任务或周期任务。存在依赖关系的任务（依赖其他任务的任务或被依赖的任务）执行后不可再次执行。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "tasks"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: [(0,jsx_runtime.jsx)(_components.a, {
                                          href: "#task",
                                          children: "Task"
                                        }), "[]"]
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "被依赖的任务数组。默认值为undefined。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200026"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "There is a circular dependency."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200052"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The periodic task cannot have a dependency."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200056"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The task has been executed by the AsyncRunner."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction delay(args: number): number {\n  let t: number = Date.now();\n  while ((Date.now() - t) < 1000) {\n    continue;\n  }\n  return args;\n}\n\nlet task1:taskpool.Task = new taskpool.Task(delay, 100);\nlet task2:taskpool.Task = new taskpool.Task(delay, 200);\nlet task3:taskpool.Task = new taskpool.Task(delay, 200);\n\nconsole.info(\"dependency: add dependency start\");\ntask1.addDependency(task2);\ntask2.addDependency(task3);\nconsole.info(\"dependency: add dependency end\");\n\nconsole.info(\"dependency: start execute second\");\ntaskpool.execute(task1).then(() => {\n  console.info(\"dependency: second task1 success\");\n})\ntaskpool.execute(task2).then(() => {\n  console.info(\"dependency: second task2 success\");\n})\ntaskpool.execute(task3).then(() => {\n  console.info(\"dependency: second task3 success\");\n})\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "removedependency11",
                                  children: "removeDependency11+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "removeDependency(...tasks: Task[]): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "删除当前任务对其他任务的依赖。在使用该方法之前，需要先构造Task对象。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "tasks"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: [(0,jsx_runtime.jsx)(_components.a, {
                                          href: "#task",
                                          children: "Task"
                                        }), "[]"]
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "被依赖的任务数组。默认值为undefined。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200027"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The dependency does not exist."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200052"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The periodic task cannot have a dependency."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200056"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The task has been executed by the AsyncRunner."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction delay(args: number): number {\n  let t: number = Date.now();\n  while ((Date.now() - t) < 1000) {\n    continue;\n  }\n  return args;\n}\n\nlet task1:taskpool.Task = new taskpool.Task(delay, 100);\nlet task2:taskpool.Task = new taskpool.Task(delay, 200);\nlet task3:taskpool.Task = new taskpool.Task(delay, 200);\n\nconsole.info(\"dependency: add dependency start\");\ntask1.addDependency(task2);\ntask2.addDependency(task3);\nconsole.info(\"dependency: add dependency end\");\nconsole.info(\"dependency: remove dependency start\");\ntask1.removeDependency(task2);\ntask2.removeDependency(task3);\nconsole.info(\"dependency: remove dependency end\");\n\nconsole.info(\"dependency: start execute\");\ntaskpool.execute(task1).then(() => {\n  console.info(\"dependency: task1 success\");\n})\ntaskpool.execute(task2).then(() => {\n  console.info(\"dependency: task2 success\");\n})\ntaskpool.execute(task3).then(() => {\n  console.info(\"dependency: task3 success\");\n})\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "onenqueued12",
                                  children: "onEnqueued12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "onEnqueued(callback: CallbackFunction): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "注册回调函数，任务入队时将调用该函数。若任务执行前未注册回调函数，将抛出异常。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "callback"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#callbackfunction12",
                                          children: "CallbackFunction"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需注册的回调函数。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The input parameters are invalid."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200034"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The executed task does not support the registration of listeners."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction delay(args: number): number {\n  let t: number = Date.now();\n  while ((Date.now() - t) < 1000) {\n    continue;\n  }\n  return args;\n}\n\nlet task: taskpool.Task = new taskpool.Task(delay, 1);\ntask.onEnqueued(() => {\n  console.info(\"taskpool: onEnqueued\");\n});\ntaskpool.execute(task).then(() => {\n  console.info(\"taskpool: execute task success\");\n});\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "onstartexecution12",
                                  children: "onStartExecution12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "onStartExecution(callback: CallbackFunction): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "注册回调函数，任务执行前将调用该函数。若任务执行前未注册回调函数，将抛出异常。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "callback"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#callbackfunction12",
                                          children: "CallbackFunction"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需注册的回调函数。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The input parameters are invalid."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200034"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The executed task does not support the registration of listeners."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction delay(args: number): number {\n  let t: number = Date.now();\n  while ((Date.now() - t) < 1000) {\n    continue;\n  }\n  return args;\n}\n\nlet task: taskpool.Task = new taskpool.Task(delay, 1);\ntask.onStartExecution(() => {\n  console.info(\"taskpool: onStartExecution\");\n});\ntaskpool.execute(task).then(() => {\n  console.info(\"taskpool: execute task success\");\n});\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "onexecutionfailed12",
                                  children: "onExecutionFailed12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "onExecutionFailed(callback: CallbackFunctionWithError): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "注册一个回调函数，并在任务执行失败时调用它（周期任务不支持）。需在任务执行前注册，否则会抛异常。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "callback"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#callbackfunctionwitherror12",
                                          children: "CallbackFunctionWithError"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需注册的回调函数。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The input parameters are invalid."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200034"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The executed task does not support the registration of listeners."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { taskpool } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { HashMap } from '@kit.ArkTS';\n\n@Concurrent\nfunction test(args: number) {\n  let t = Date.now();\n  while ((Date.now() - t) < 100) {\n    continue;\n  }\n  let hashMap1: HashMap<string, number> = new HashMap();\n  hashMap1.set('a', args);\n  return hashMap1;\n}\n\nlet task2 = new taskpool.Task(test, 1);\ntask2.onExecutionFailed((e: Error) => {\n  console.info(\"taskpool: onExecutionFailed error is \" + e);\n})\ntaskpool.execute(task2).then(() => {\n  console.info(\"taskpool: execute task success\");\n}).catch((e:BusinessError) => {\n  console.error(`taskpool: error code: ${e.code}, error info: ${e.message}`);\n})\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "onexecutionsucceeded12",
                                  children: "onExecutionSucceeded12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "onExecutionSucceeded(callback: CallbackFunction): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "注册一个回调函数，并在任务执行成功时调用它（周期任务不支持）。需在任务执行前注册，否则会抛异常。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "callback"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#callbackfunction12",
                                          children: "CallbackFunction"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需注册的回调函数。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The input parameters are invalid."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200034"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The executed task does not support the registration of listeners."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction delay(args: number): number {\n  let t: number = Date.now();\n  while ((Date.now() - t) < 1000) {\n    continue;\n  }\n  return args;\n}\n\nlet task: taskpool.Task = new taskpool.Task(delay, 1);\ntask.onExecutionSucceeded(() => {\n  console.info(\"taskpool: onExecutionSucceeded\");\n});\ntaskpool.execute(task).then(() => {\n  console.info(\"taskpool: execute task success\");\n});\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "isdone12",
                                  children: "isDone12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "isDone(): boolean"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "检查任务是否已完成。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "返回值："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "boolean"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "任务执行完成时返回true，任务未执行完成时返回false。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n@Concurrent\nfunction inspectStatus(arg: number): number {\n  // 1s sleep\n  let t: number = Date.now();\n  while (Date.now() - t < 1000) {\n    continue;\n  }\n  return arg + 1;\n}\n\nasync function taskpoolCancel(): Promise<void> {\n  let task: taskpool.Task = new taskpool.Task(inspectStatus, 100); // 100: test number\n  taskpool.execute(task).then((res: Object) => {\n    console.info(\"Succeeded in executing task, result: \" + res);\n  }).catch((e: BusinessError) => {\n    console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n  });\n\n  setTimeout(() => {\n    if (!task.isDone()) {\n      taskpool.cancel(task);\n    }\n  }, 3000); // 延时3s，确保任务已执行\n}\n\ntaskpoolCancel();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "callbackfunction12",
                                  children: "CallbackFunction12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "type CallbackFunction = () => void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "注册的回调函数类型。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "callbackfunctionwitherror12",
                                  children: "CallbackFunctionWithError12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "type CallbackFunctionWithError = (e: Error) => void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "注册带有错误码的回调函数类型。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "e"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Error"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "错误信息。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "longtask12",
                                  children: "LongTask12+"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["表示长时任务。LongTask继承自", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "#task",
                                    children: "Task"
                                  }), "。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "长时任务不设置执行时间上限，长时间运行不会触发超时异常，但不支持将同一任务多次执行或者将该任务加入任务组（TaskGroup）。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["执行长时任务的线程会持续存在，直到任务完成并调用", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "#taskpoolterminatetask12",
                                    children: "terminateTask"
                                  }), "后，该线程在空闲时被回收。"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction printArgs(args: string): string {\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\nlet task: taskpool.LongTask = new taskpool.LongTask(printArgs, \"this is my first LongTask\");\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "genericstask13",
                                  children: "GenericsTask13+"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["表示泛型任务。GenericsTask继承自", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "#task",
                                    children: "Task"
                                  }), "。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "相比创建Task，创建GenericsTask可以在编译阶段校验并发函数的传参和返回值类型。其余行为与Task相同。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "constructor13",
                                  children: "constructor13+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "constructor(func: (...args: A) => R | Promise<R>, ...args: A)"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "GenericsTask的构造函数。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 13开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "func"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "(...args: A) => R"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Promise<R>"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "args"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "A"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务执行传入函数的入参，支持的参数类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "。默认值为undefined。"]
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200014"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The function is not marked as concurrent."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction printArgs(args: string): string {\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\n@Concurrent\nfunction testWithThreeParams(a: number, b: string, c: number): string {\n  return b;\n}\n\n@Concurrent\nfunction testWithArray(args: [number, string]): string {\n  return \"success\";\n}\n\nlet task1: taskpool.Task = new taskpool.GenericsTask<[string], string>(printArgs, \"this is my first LongTask\");\n\nlet task2: taskpool.Task = new taskpool.GenericsTask<[number, string, number], string>(testWithThreeParams, 100, \"test\", 100);\n\nlet task3: taskpool.Task = new taskpool.GenericsTask<[[number, string]], string>(testWithArray, [100, \"test\"]);\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "constructor13-1",
                                  children: "constructor13+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "constructor(name: string, func: (...args: A) => R | Promise<R>, ...args: A)"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "GenericsTask的构造函数，可以指定任务名称。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 13开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "name"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "string"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "泛型任务名称。"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "func"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "(...args: A) => R"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Promise<R>"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "args"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "A"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务执行传入函数的入参，支持的参数类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "。默认值为undefined。"]
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200014"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The function is not marked as concurrent."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction printArgs(args: string): string {\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\nlet taskName: string = \"taskName\";\nlet task: taskpool.Task = new taskpool.GenericsTask<[string], string>(taskName, printArgs, \"this is my first Task\");\nlet name: string = task.name;\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "taskgroup10",
                                  children: "TaskGroup10+"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["表示任务组，一次执行一组任务，适用于执行一组有关联的任务。如果所有任务正常执行，异步执行完毕后返回所有任务结果的数组，数组中元素的顺序与", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "#addtask10-1",
                                    children: "addTask"
                                  }), "的顺序相同；如果任意任务失败，则会抛出对应异常。如果任务组中存在多个任务失败的情况，则会抛出第一个失败任务的异常。任务组可以多次执行，但执行后不能新增任务。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "constructor10",
                                  children: "constructor10+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "constructor()"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "TaskGroup的构造函数。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "let taskGroup = new taskpool.TaskGroup();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "constructor11-1",
                                  children: "constructor11+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "constructor(name: string)"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "TaskGroup的构造函数，支持指定任务组名称。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "name"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "string"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "任务组名称。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "let taskGroupName: string = \"groupName\";\nlet taskGroup: taskpool.TaskGroup = new taskpool.TaskGroup(taskGroupName);\nlet name: string = taskGroup.name;\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "addtask10",
                                  children: "addTask10+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "addTask(func: Function, ...args: Object[]): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "将待执行的函数添加到任务组中。使用该方法前需要先构造TaskGroup。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "func"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Function"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["需要传入使用", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#concurrent%E8%A3%85%E9%A5%B0%E5%99%A8",
                                          children: "@Concurrent装饰器"
                                        }), "装饰的函数。支持的返回值类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "。"]
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "args"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Object[]"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsxs)(_components.td, {
                                        children: ["任务执行函数的入参，支持的类型请参考", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
                                          children: "序列化支持类型"
                                        }), "，默认值为undefined。"]
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200014"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The function is not marked as concurrent."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction printArgs(args: number): number {\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\nlet taskGroup: taskpool.TaskGroup = new taskpool.TaskGroup();\ntaskGroup.addTask(printArgs, 100); // 100: test number\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "addtask10-1",
                                  children: "addTask10+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "addTask(task: Task): void"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "将创建好的任务添加到任务组中。使用此方法前需要先构造TaskGroup。任务组不能添加其他任务组中的任务、串行队列任务、异步队列任务、有依赖关系的任务、长时任务、周期任务和已执行的任务。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "task"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#task",
                                          children: "Task"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "需要添加到任务组中的任务。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                    children: "语言基础类库错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200014"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The function is not marked as concurrent."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200051"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The periodic task cannot be executed again."
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "10200057"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "The task cannot be executed by two APIs."
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "@Concurrent\nfunction printArgs(args: number): number {\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\nlet taskGroup: taskpool.TaskGroup = new taskpool.TaskGroup();\nlet task: taskpool.Task = new taskpool.Task(printArgs, 200); // 200: test number\ntaskGroup.addTask(task);\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "属性-1",
                                  children: "属性"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "名称"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "只读"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "可选"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "name11+"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "string"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "创建任务组时指定的任务组名称。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                  id: "sequencerunner-11",
                                  children: "SequenceRunner 11+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "表示串行队列的任务，用于执行一组需要串行执行的任务。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "constructor11-2",
                                  children: "constructor11+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "constructor(priority?: Priority)"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "SequenceRunner的构造函数。"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "priority"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#priority",
                                          children: "Priority"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "指定任务的优先级，该参数默认值为taskpool.Priority.MEDIUM。"
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed."
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "let runner: taskpool.SequenceRunner = new taskpool.SequenceRunner();\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "constructor12",
                                  children: "constructor12+"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "constructor(name: string, priority?: Priority)"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: "SequenceRunner的构造函数。构造一个全局串行队列，如果名字相同，将返回同一个串行队列。"
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                    src: (__webpack_require__(730396)/* ["default"] */.A) + "",
                                    width: "102",
                                    height: "38"
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "底层通过单例模式保证了：创建同名串行队列时，获取到同一个实例。"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "无法修改串行队列的优先级。"
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "系统能力："
                                    })
                                  }), " SystemCapability.Utils.Lang"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "元服务API："
                                    })
                                  }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "参数："
                                    })
                                  })
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "参数名"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "类型"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "必填"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "说明"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "name"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "string"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "是"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "串行队列的名字。"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "priority"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: (0,jsx_runtime.jsx)(_components.a, {
                                          href: "#priority",
                                          children: "Priority"
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "否"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "指定任务的优先级，该参数默认值为taskpool.Priority.MEDIUM。"
                                      })]
                                    })]
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "错误码："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                    href: "/ref/errorcode-universal/errorcode-universal",
                                    children: "通用错误码"
                                  }), "。"]
                                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误码ID"
                                      }), (0,jsx_runtime.jsx)(_components.th, {
                                        children: "错误信息"
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.tbody, {
                                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                                      children: [(0,jsx_runtime.jsx)(_components.td, {
                                        children: "401"
                                      }), (0,jsx_runtime.jsx)(_components.td, {
                                        children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
                                      })]
                                    })
                                  })]
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                      children: "示例："
                                    })
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "let runner:taskpool.SequenceRunner = new taskpool.SequenceRunner(\"runner1\", taskpool.Priority.LOW);\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                  id: "execute11",
                                  children: "execute11+"
                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: ["execute(task: Task): Promise", (0,jsx_runtime.jsxs)(_components.object, {
                                    children: [(0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: "执行串行任务。使用该方法前需先构造SequenceRunner。串行队列不能执行任务组任务、其他串行队列任务、异步队列任务、有依赖关系的任务和已执行的任务。使用Promise异步回调。"
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.img, {
                                        src: (__webpack_require__(883535)/* ["default"] */.A) + "",
                                        width: "102",
                                        height: "38"
                                      })
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "不支持加入存在依赖的任务。"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "前面的任务执行失败或取消不会影响后续任务的执行。"
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "系统能力："
                                        })
                                      }), " SystemCapability.Utils.Lang"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "元服务API："
                                        })
                                      }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "参数："
                                        })
                                      })
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "参数名"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "类型"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "必填"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "说明"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "task"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: (0,jsx_runtime.jsx)(_components.a, {
                                              href: "#task",
                                              children: "Task"
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "是"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "需要添加到串行任务队列中的任务。"
                                          })]
                                        })
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "返回值："
                                        })
                                      })
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "类型"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "说明"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Promise<Object>"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Promise对象，返回任务执行的结果。"
                                          })]
                                        })
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "错误码："
                                        })
                                      })
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                        href: "/ref/errorcode-universal/errorcode-universal",
                                        children: "通用错误码"
                                      }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                        children: "语言基础类库错误码"
                                      }), "。"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "错误码ID"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "错误信息"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "401"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "10200006"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "An exception occurred during serialization."
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "10200025"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "dependent task not allowed."
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "10200051"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "The periodic task cannot be executed again."
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "10200057"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "The task cannot be executed by two APIs."
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "示例："
                                        })
                                      })
                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                        children: "@Concurrent\nfunction additionDelay(delay: number): void {\n  let start: number = new Date().getTime();\n  while (new Date().getTime() - start < delay) {\n    continue;\n  }\n}\n@Concurrent\nfunction waitForRunner(finalString: string): string {\n  return finalString;\n}\nasync function seqRunner() {\n  let finalString:string = \"\";\n  let task1:taskpool.Task = new taskpool.Task(additionDelay, 3000);\n  let task2:taskpool.Task = new taskpool.Task(additionDelay, 2000);\n  let task3:taskpool.Task = new taskpool.Task(additionDelay, 1000);\n  let task4:taskpool.Task = new taskpool.Task(waitForRunner, finalString);\n\n  let runner:taskpool.SequenceRunner = new taskpool.SequenceRunner();\n  runner.execute(task1).then(() => {\n    finalString += 'a';\n    console.info(\"seqrunner: task1 done.\");\n  });\n  runner.execute(task2).then(() => {\n    finalString += 'b';\n    console.info(\"seqrunner: task2 done\");\n  });\n  runner.execute(task3).then(() => {\n    finalString += 'c';\n    console.info(\"seqrunner: task3 done\");\n  });\n  await runner.execute(task4);\n  console.info(\"seqrunner: task4 done, finalString is \" + finalString);\n}\n"
                                      })
                                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "asyncrunner18",
                                      children: "AsyncRunner18+"
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: "表示异步队列。可以指定任务执行的并发度和排队策略。"
                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                      id: "constructor18",
                                      children: "constructor18+"
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: "constructor(runningCapacity: number, waitingCapacity?: number)"
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: "AsyncRunner的构造函数。构造一个非全局的异步队列，如果参数相同，返回的是不同的异步队列。"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "系统能力："
                                        })
                                      }), " SystemCapability.Utils.Lang"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "元服务API："
                                        })
                                      }), " 从API version 18开始，该接口支持在元服务中使用。"]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "参数："
                                        })
                                      })
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "参数名"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "类型"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "必填"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "说明"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "runningCapacity"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "number"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "是"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "指定任务执行的最大并发度，该参数应为正整数，负数时报错，非整数时会向下取整。"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "waitingCapacity"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "number"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "否"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "指定等待任务的列表容量，取值需大于等于0，负数时报错，输入非整数时会向下取整。默认值为0，表示等待任务列表的容量没有限制。如果设置大于0的值，则表示排队策略为丢弃策略，当加入的任务数量超过该值时，等待列表中处于队头的任务会被丢弃。"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "错误码："
                                        })
                                      })
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                        href: "/ref/errorcode-universal/errorcode-universal",
                                        children: "通用错误码"
                                      }), "。"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "错误码ID"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "错误信息"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "401"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
                                          })]
                                        })
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "示例："
                                        })
                                      })
                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                        children: "let runner: taskpool.AsyncRunner = new taskpool.AsyncRunner(5);\n"
                                      })
                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                      id: "constructor18-1",
                                      children: "constructor18+"
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: "constructor(name: string, runningCapacity: number, waitingCapacity?: number)"
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: "AsyncRunner的构造函数用于构造一个全局异步队列。如果队列名称相同，将返回同一个异步队列实例。"
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.img, {
                                        src: (__webpack_require__(759262)/* ["default"] */.A) + "",
                                        width: "102",
                                        height: "38"
                                      })
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "底层通过单例模式确保创建同名的异步队列时，获取同一个实例。"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "无法修改并发度和等待任务列表容量。"
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "系统能力："
                                        })
                                      }), " SystemCapability.Utils.Lang"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "元服务API："
                                        })
                                      }), " 从API version 18开始，该接口支持在元服务中使用。"]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "参数："
                                        })
                                      })
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "参数名"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "类型"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "必填"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "说明"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "name"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "string"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "是"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "异步队列的名字。"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "runningCapacity"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "number"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "是"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "指定任务执行的最大并发度，该参数应为正整数。负数时报错，非整数会向下取整。"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "waitingCapacity"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "number"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "否"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "指定等待任务的列表容量，取值需大于等于0，负数时报错，非整数时会向下取整。默认值为0，表示等待任务列表的容量没有限制。如果设置大于0的值，则表示排队策略为丢弃策略，当加入的任务数量超过该值时，等待列表中处于队头的任务会被丢弃。"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "错误码："
                                        })
                                      })
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                        href: "/ref/errorcode-universal/errorcode-universal",
                                        children: "通用错误码"
                                      }), "。"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "错误码ID"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "错误信息"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "401"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
                                          })]
                                        })
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                          children: "示例："
                                        })
                                      })
                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                        children: "let runner:taskpool.AsyncRunner = new taskpool.AsyncRunner(\"runner1\", 5, 5);\n"
                                      })
                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                      id: "execute18",
                                      children: "execute18+"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: ["execute(task: Task, priority?: Priority): Promise", (0,jsx_runtime.jsxs)(_components.object, {
                                        children: [(0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: "执行异步任务。使用该方法前需要先构造AsyncRunner。使用Promise异步回调。"
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.img, {
                                            src: (__webpack_require__(418906)/* ["default"] */.A) + "",
                                            width: "102",
                                            height: "38"
                                          })
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "不支持执行任务组中的任务。"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "不支持执行串行队列中的任务。"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "不支持执行其他异步队列任务。"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "不支持执行周期性任务。"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "不支持执行延迟任务。"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "不支持执行存在依赖的任务。"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "不支持执行已执行过的任务。"
                                          }), "\n"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "元服务API："
                                            })
                                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "参数："
                                            })
                                          })
                                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                                children: "参数名"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "类型"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "必填"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "说明"
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "task"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: (0,jsx_runtime.jsx)(_components.a, {
                                                  href: "#task",
                                                  children: "Task"
                                                })
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "是"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "需要添加到异步队列中的任务。"
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "priority"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: (0,jsx_runtime.jsx)(_components.a, {
                                                  href: "#priority",
                                                  children: "Priority"
                                                })
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "指定任务的优先级，该参数默认值为taskpool.Priority.MEDIUM。"
                                              })]
                                            })]
                                          })]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "返回值："
                                            })
                                          })
                                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                                children: "类型"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "说明"
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "Promise<Object>"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "Promise对象，返回任务执行的结果。"
                                              })]
                                            })
                                          })]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "错误码："
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                                            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                                            children: "语言基础类库错误码"
                                          }), "。"]
                                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                                children: "错误码ID"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "错误信息"
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "10200006"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "An exception occurred during serialization."
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "10200025"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "dependent task not allowed."
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "10200051"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "The periodic task cannot be executed again."
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "10200054"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "The asyncRunner task is discarded."
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "10200057"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "The task cannot be executed by two APIs."
                                              })]
                                            })]
                                          })]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例："
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "import { taskpool } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Concurrent\nfunction additionDelay(delay: number): void {\n  let start: number = new Date().getTime();\n  while (new Date().getTime() - start < delay) {\n    continue;\n  }\n}\nasync function asyRunner() {\n  let runner:taskpool.AsyncRunner = new taskpool.AsyncRunner(\"runner1\", 5, 5);\n  for (let i = 0; i < 30; i++) {\n    let task:taskpool.Task = new taskpool.Task(additionDelay, 1000);\n    runner.execute(task).then(() => {\n      console.info(\"asyncRunner: task\" + i + \" done.\");\n    }).catch((e: BusinessError) => {\n      console.error(\"asyncRunner: task\" + i + \" error.\" + e.code + \"-\" + e.message);\n    });\n  }\n}\n\nasync function asyRunner2() {\n  let runner:taskpool.AsyncRunner = new taskpool.AsyncRunner(5);\n  for (let i = 0; i < 20; i++) {\n    let task:taskpool.Task = new taskpool.Task(additionDelay, 1000);\n    runner.execute(task).then(() => {\n      console.info(\"asyncRunner: task\" + i + \" done.\");\n    });\n  }\n}\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                          id: "state10",
                                          children: "State10+"
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: "表示任务（Task）状态的枚举。当任务创建成功后，调用execute，任务进入taskpool等待队列，状态设置为WAITING；任务从等待队列出来进入taskpool工作线程中，任务状态更新为RUNNING；当任务执行完成，返回结果后任务状态重置为WAITING；当主动cancel任务时，将任务状态更新为CANCELED。"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "元服务API："
                                            })
                                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                                children: "名称"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "值"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "说明"
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "WAITING"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "1"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "任务正在等待。"
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "RUNNING"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "2"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "任务正在执行。"
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "CANCELED"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "3"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "任务已被取消。"
                                              })]
                                            })]
                                          })]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                          id: "taskinfo10",
                                          children: "TaskInfo10+"
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: "任务的内部信息。"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                          id: "属性-2",
                                          children: "属性"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                                children: "名称"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "类型"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "只读"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "可选"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "说明"
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "name12+"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "string"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                                children: ["任务的名字，不建议修改此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                                    children: "元服务API："
                                                  })
                                                }), " 从API version 12开始，该接口支持在元服务中使用。"]
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "taskId"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "number"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                                children: ["任务的ID。任务的标识符，系统默认提供全局唯一值，不建议修改此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                                    children: "元服务API："
                                                  })
                                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "state"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: (0,jsx_runtime.jsx)(_components.a, {
                                                  href: "#state10",
                                                  children: "State"
                                                })
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                                children: ["任务的状态。state标识任务的当前状态，不建议修改此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                                    children: "元服务API："
                                                  })
                                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "duration"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "number"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "是"
                                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                                children: ["任务执行至当前所用的时间，默认为0，单位为ms。当返回为0时，表示任务未执行；返回为空时，表示没有任务执行。不建议修改此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                                    children: "元服务API："
                                                  })
                                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                              })]
                                            })]
                                          })]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                          id: "threadinfo10",
                                          children: "ThreadInfo10+"
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: "工作线程的内部信息。"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                          id: "属性-3",
                                          children: "属性"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "元服务API："
                                            })
                                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                                children: "名称"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "类型"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "只读"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "可选"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "说明"
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "tid"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "number"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "工作线程的标识符。如果返回为空，表示当前没有任务执行。不建议修改此值。"
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "taskIds"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "number[]"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "是"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "在当前线程上运行的任务ID列表。返回为空时，代表没有任务执行。不建议修改此值。"
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "priority"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: (0,jsx_runtime.jsx)(_components.a, {
                                                  href: "#priority",
                                                  children: "Priority"
                                                })
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "是"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "当前线程的优先级。返回为空时，代表没有任务执行。 不建议修改此值。"
                                              })]
                                            })]
                                          })]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                          id: "taskpoolinfo10",
                                          children: "TaskPoolInfo10+"
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: "任务池的内部信息。"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                          id: "属性-4",
                                          children: "属性"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "元服务API："
                                            })
                                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                                children: "名称"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "类型"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "只读"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "可选"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "说明"
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "threadInfos"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: (0,jsx_runtime.jsx)(_components.a, {
                                                  href: "#threadinfo10",
                                                  children: "ThreadInfo[]"
                                                })
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "工作线程的内部信息。不建议修改此值。"
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "taskInfos"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: (0,jsx_runtime.jsx)(_components.a, {
                                                  href: "#taskinfo10",
                                                  children: "TaskInfo[]"
                                                })
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "任务的内部信息。不建议修改此值。"
                                              })]
                                            })]
                                          })]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                          id: "taskresult20",
                                          children: "TaskResult20+"
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: "处于等待或执行过程中的任务进行取消操作后，在catch分支里捕获到BusinessError里的补充信息。其他场景下该信息为undefined。"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                          id: "属性-5",
                                          children: "属性"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "系统能力："
                                            })
                                          }), " SystemCapability.Utils.Lang"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "元服务API："
                                            })
                                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                                children: "名称"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "类型"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "只读"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "可选"
                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                children: "说明"
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "result"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "Object"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "是"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "任务执行结果。默认为undefined。 不建议修改此值。"
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                children: "error"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "Error"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "Object"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "否"
                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                children: "是"
                                              })]
                                            })]
                                          })]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.img, {
                                            src: (__webpack_require__(309843)/* ["default"] */.A) + "",
                                            width: "102",
                                            height: "38"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: "任务被取消后，有如下两种情况："
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "如果当前任务是处于等待阶段，则result的值为undefined，error的值和BusinessError的message字段一致；"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "如果当前任务正在运行，有异常抛出的情况下result的值为undefined，error的值为抛出的异常信息；没有异常的情况下，result为任务执行完成后的结果，error的值和BusinessError的message字段一致。"
                                          }), "\n"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例"
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "import { taskpool } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit'\n\n@Concurrent\nfunction loop(): Error | number {\n  let start: number = Date.now();\n  while (Date.now() - start < 1500) {\n  }\n  if (taskpool.Task.isCanceled()) {\n    return 0;\n  }\n  while (Date.now() - start < 3000) {\n  }\n  if (taskpool.Task.isCanceled()) {\n    throw new Error(\"this is loop error\");\n  }\n  return 1;\n}\n\n// 执行前取消\nfunction waitingCancel() {\n  let task = new taskpool.Task(loop);\n  taskpool.executeDelayed(2000, task).catch((e:BusinessError<taskpool.TaskResult>) => {\n    console.error(`waitingCancel task catch code: ${e.code}, message: ${e.message}`);\n    // waitingCancel task catch code: 0, message: taskpool:: task has been canceled\n    if (e.data !== undefined) {\n      console.error(`waitingCancel task catch data: result: ${e.data.result}, error: ${e.data.error}`);\n      // waitingCancel task catch data: result: undefined, error: taskpool:: task has been canceled\n    }\n  })\n  setTimeout(() => {\n    taskpool.cancel(task);\n  }, 1000);\n}\n\n// 执行过程中取消\nfunction runningCancel() {\n  let task = new taskpool.Task(loop);\n  taskpool.execute(task).catch((e:BusinessError<taskpool.TaskResult>) => {\n    console.error(`runningCancel task catch code: ${e.code}, message: ${e.message}`);\n    // runningCancel task catch code: 0, message: taskpool:: task has been canceled\n    if (e.data !== undefined) {\n      console.error(`runningCancel task catch data: result: ${e.data.result}, error: ${e.data.error}`);\n      // runningCancel task catch data: result: 0, error: taskpool:: task has been canceled\n    }\n  })\n  setTimeout(() => {\n    taskpool.cancel(task);\n  }, 1000);\n}\n\n// 执行过程中抛异常\nfunction runningCancelError() {\n  let task = new taskpool.Task(loop);\n  taskpool.execute(task).catch((e:BusinessError<taskpool.TaskResult>) => {\n    console.error(`runningCancelError task catch code: ${e.code}, message: ${e.message}`);\n    // runningCancelError task catch code: 0, message: taskpool:: task has been canceled\n    if (e.data !== undefined) {\n      console.error(`runningCancelError task catch data: result: ${e.data.result}, error: ${e.data.error}`);\n      // runningCancelError task catch data: result: undefined, error: Error: this is loop error\n    }\n  })\n  setTimeout(() => {\n    taskpool.cancel(task);\n  }, 2000);\n}\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                          id: "其他说明",
                                          children: "其他说明"
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                          id: "序列化支持类型",
                                          children: "序列化支持类型"
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: ["序列化支持类型参考", (0,jsx_runtime.jsx)(_components.a, {
                                            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/serializable-overview",
                                            children: "线程间通信对象概述"
                                          }), "里的介绍。"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                          id: "简单使用",
                                          children: "简单使用"
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例一"
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "// 支持普通函数、引用入参传递\n@Concurrent\nfunction printArgs(args: string): string {\n  console.info(\"func: \" + args);\n  return args;\n}\n\nasync function taskpoolExecute(): Promise<void> {\n  // taskpool.execute(task)\n  let task: taskpool.Task = new taskpool.Task(printArgs, \"create task, then execute\");\n  console.info(\"taskpool.execute(task) result: \" + await taskpool.execute(task));\n  // taskpool.execute(function)\n  console.info(\"taskpool.execute(function) result: \" + await taskpool.execute(printArgs, \"execute task by func\"));\n}\n\ntaskpoolExecute();\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例二"
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "// b.ets\nexport let c: string = \"hello\";\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "// 引用import变量\n// a.ets(与b.ets位于同一目录中)\nimport { c } from \"./b\";\n\n@Concurrent\nfunction printArgs(a: string): string {\n  console.info(a);\n  console.info(c);\n  return a;\n}\n\nasync function taskpoolExecute(): Promise<void> {\n  // taskpool.execute(task)\n  let task: taskpool.Task = new taskpool.Task(printArgs, \"create task, then execute\");\n  console.info(\"taskpool.execute(task) result: \" + await taskpool.execute(task));\n\n  // taskpool.execute(function)\n  console.info(\"taskpool.execute(function) result: \" + await taskpool.execute(printArgs, \"execute task by func\"));\n}\n\ntaskpoolExecute();\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例三"
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 支持async函数\n@Concurrent\nasync function delayExecute(): Promise<Array<Object>> {\n  let ret = await Promise.all<Object>([\n    new Promise<Object>(resolve => setTimeout(resolve, 1000, \"resolved\"))\n  ]);\n  return ret;\n}\n\nasync function taskpoolExecute(): Promise<void> {\n  taskpool.execute(delayExecute).then((result: Object) => {\n    console.info(\"Succeeded in excuting task, result: \" + result);\n  }).catch((e: BusinessError) => {\n    console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n  });\n}\n\ntaskpoolExecute();\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例四"
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "// c.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Concurrent\nfunction strSort(inPutArr: Array<string>): Array<string> {\n  let newArr = inPutArr.sort();\n  return newArr;\n}\n\nexport async function func1(): Promise<void> {\n  console.info(\"taskpoolTest start\");\n  let strArray: Array<string> = ['c test string', 'b test string', 'a test string'];\n  let task: taskpool.Task = new taskpool.Task(strSort, strArray);\n  console.info(\"func1 result:\" + await taskpool.execute(task));\n}\n\nexport async function func2(): Promise<void> {\n  console.info(\"taskpoolTest2 start\");\n  let strArray: Array<string> = ['c test string', 'b test string', 'a test string'];\n  taskpool.execute(strSort, strArray).then((result: Object) => {\n    console.info(\"Succeeded in excuting task, result: \" + result);\n  }).catch((e: BusinessError) => {\n    console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n  });\n}\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "// index.ets\nimport { func1, func2 } from \"./c\";\n\nfunc1();\nfunc2();\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例五"
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 任务取消成功\n@Concurrent\nfunction inspectStatus(arg: number): number {\n  // 第一次检查任务是否已经取消并作出响应\n  if (taskpool.Task.isCanceled()) {\n    console.info(\"task has been canceled before 2s sleep.\");\n    return arg + 2;\n  }\n  // 2s sleep\n  let t: number = Date.now();\n  while (Date.now() - t < 2000) {\n    continue;\n  }\n  // 第二次检查任务是否已经取消并作出响应\n  if (taskpool.Task.isCanceled()) {\n    console.info(\"task has been canceled after 2s sleep.\");\n    return arg + 3;\n  }\n  return arg + 1;\n}\n\nasync function taskpoolCancel(): Promise<void> {\n  let task: taskpool.Task = new taskpool.Task(inspectStatus, 100); // 100: test number\n  taskpool.execute(task).then((res: Object) => {\n    console.info(\"Succeeded in excuting task, result: \" + res);\n  }).catch((e: BusinessError) => {\n    console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n  });\n  // 1s后取消task\n  setTimeout(() => {\n    try {\n      taskpool.cancel(task);\n    } catch (e) {\n      console.error(`taskpool: cancel error code: ${e.code}, info: ${e.message}`);\n    }\n  }, 1000);\n}\n\ntaskpoolCancel();\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例六"
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 已执行的任务取消失败\n@Concurrent\nfunction inspectStatus(arg: number): number {\n  // 第一次检查任务是否已经取消并作出响应\n  if (taskpool.Task.isCanceled()) {\n    return arg + 2;\n  }\n  // 延时0.5s\n  let t: number = Date.now();\n  while (Date.now() - t < 500) {\n    continue;\n  }\n  // 第二次检查任务是否已经取消并作出响应\n  if (taskpool.Task.isCanceled()) {\n    return arg + 3;\n  }\n  return arg + 1;\n}\n\nasync function taskpoolCancel(): Promise<void> {\n  let task: taskpool.Task = new taskpool.Task(inspectStatus, 100); // 100: test number\n  taskpool.execute(task).then((res: Object) => {\n    console.info(\"Succeeded in excuting task, result: \" + res);\n  }).catch((e: BusinessError) => {\n    console.error(`Failed to execute task. Code: ${e.code}, message: ${e.message}`);\n  });\n\n  setTimeout(() => {\n    try {\n      taskpool.cancel(task); // 任务已执行,取消失败\n    } catch (e) {\n      console.error(`taskpool: cancel error code: ${e.code}, info: ${e.message}`);\n    }\n  }, 3000); // 延时3s，确保任务已执行\n}\n\ntaskpoolCancel();\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例七"
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "// 待执行的任务组取消成功\n@Concurrent\nfunction printArgs(args: number): number {\n  let t: number = Date.now();\n  while (Date.now() - t < 1000) {\n    continue;\n  }\n  console.info(\"printArgs: \" + args);\n  return args;\n}\n\nasync function taskpoolGroupCancelTest(): Promise<void> {\n  let taskGroup1: taskpool.TaskGroup = new taskpool.TaskGroup();\n  taskGroup1.addTask(printArgs, 10); // 10: test number\n  taskGroup1.addTask(printArgs, 20); // 20: test number\n  taskGroup1.addTask(printArgs, 30); // 30: test number\n  let taskGroup2: taskpool.TaskGroup = new taskpool.TaskGroup();\n  let task1: taskpool.Task = new taskpool.Task(printArgs, 100); // 100: test number\n  let task2: taskpool.Task = new taskpool.Task(printArgs, 200); // 200: test number\n  let task3: taskpool.Task = new taskpool.Task(printArgs, 300); // 300: test number\n  taskGroup2.addTask(task1);\n  taskGroup2.addTask(task2);\n  taskGroup2.addTask(task3);\n  taskpool.execute(taskGroup1).then((res: Array<Object>) => {\n    console.info(\"taskpool execute res is:\" + res);\n  }).catch((e: string) => {\n    console.error(\"taskpool execute error is:\" + e);\n  });\n  taskpool.execute(taskGroup2).then((res: Array<Object>) => {\n    console.info(\"taskpool execute res is:\" + res);\n  }).catch((e: string) => {\n    console.error(\"taskpool execute error is:\" + e);\n  });\n\n  try {\n    taskpool.cancel(taskGroup2);\n  } catch (e) {\n    console.error(`Failed to cancel task. Code: ${e.code}, message: ${e.message}`);\n  }\n}\n\ntaskpoolGroupCancelTest()\n"
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "示例八"
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                            children: "// 分别创建执行100个高、中、低优先级的任务，查看其各项信息\n@Concurrent\nfunction delay(): void {\n  let start: number = new Date().getTime();\n  while (new Date().getTime() - start < 500) {\n    continue;\n  }\n}\n\nlet highCount: number = 0;\nlet mediumCount: number = 0;\nlet lowCount: number = 0;\nlet allCount: number = 100;\nfor (let i = 0; i < allCount; i++) {\n  let task1: taskpool.Task = new taskpool.Task(delay);\n  let task2: taskpool.Task = new taskpool.Task(delay);\n  let task3: taskpool.Task = new taskpool.Task(delay);\n  taskpool.execute(task1, taskpool.Priority.LOW).then(() => {\n    lowCount++;\n  }).catch((e: string) => {\n    console.error(\"low task error: \" + e);\n  })\n  taskpool.execute(task2, taskpool.Priority.MEDIUM).then(() => {\n    mediumCount++;\n  }).catch((e: string) => {\n    console.error(\"medium task error: \" + e);\n  })\n  taskpool.execute(task3, taskpool.Priority.HIGH).then(() => {\n    highCount++;\n  }).catch((e: string) => {\n    console.error(\"high task error: \" + e);\n  })\n}\nlet start: number = new Date().getTime();\nwhile (new Date().getTime() - start < 1000) {\n  continue;\n}\nlet taskpoolInfo: taskpool.TaskPoolInfo = taskpool.getTaskPoolInfo();\nlet tid: number = 0;\nlet taskIds: Array<number> = [];\nlet priority: number = 0;\nlet taskId: number = 0;\nlet state: number = 0;\nlet duration: number = 0;\nlet name: string = \"\";\nlet threadIS = Array.from(taskpoolInfo.threadInfos);\nfor (let threadInfo of threadIS) {\n  tid = threadInfo.tid;\n  if (threadInfo.taskIds != undefined && threadInfo.priority != undefined) {\n    taskIds.length = threadInfo.taskIds.length;\n    priority = threadInfo.priority;\n  }\n  console.info(\"taskpool---tid is:\" + tid + \", taskIds is:\" + taskIds + \", priority is:\" + priority);\n}\nlet taskIS = Array.from(taskpoolInfo.taskInfos);\nfor (let taskInfo of taskIS) {\n  taskId = taskInfo.taskId;\n  state = taskInfo.state;\n  if (taskInfo.duration != undefined) {\n    duration = taskInfo.duration;\n    name = taskInfo.name;\n  }\n  console.info(\"taskpool---taskId is:\" + taskId + \", state is:\" + state + \", duration is:\" + duration + \", name is:\" + name);\n}\n"
                                          })
                                        }), "\n"]
                                      })]
                                    })]
                                  })]
                                })]
                              })]
                            })]
                          })]
                        })]
                      })]
                    })]
                  })]
                })]
              })]
            })]
          })]
        })]
      })]
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
730396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
759262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
418906(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
222429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
309843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
856513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
470535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
270741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
401461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
105639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
883535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
5299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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