"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["275603"], {
569174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_concurrency_faq_concurrency_faq_md_b8c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-concurrency-faq-concurrency-faq-md-b8c.json
var site_docs_arkts_arkts_concurrency_concurrency_faq_concurrency_faq_md_b8c_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/concurrency-faq/concurrency-faq","title":"并发常见问题","description":"TaskPool任务不执行快速定位指导","source":"@site/docs/arkts/arkts-concurrency/concurrency-faq/concurrency-faq.md","sourceDirName":"arkts/arkts-concurrency/concurrency-faq","slug":"/arkts/arkts-concurrency/concurrency-faq/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/concurrency-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"并发常见问题","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/concurrency-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Worker常驻线程通过TaskPool进行多任务并发处理","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/worker-and-taskpool/"},"next":{"title":"ArkTS跨语言交互","permalink":"/harmonyos-docs-site/arkts/arkts-cross-language-interaction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/concurrency-faq/concurrency-faq.md


const frontMatter = {
	title: '并发常见问题',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/concurrency-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '并发常见问题';

const assets = {

};



const toc = [{
  "value": "TaskPool任务不执行快速定位指导",
  "id": "taskpool任务不执行快速定位指导",
  "level": 2
}, {
  "value": "TaskPool任务执行慢排查思路",
  "id": "taskpool任务执行慢排查思路",
  "level": 2
}, {
  "value": "排查方向：出问题的TaskPool任务优先级较低，应用后续新增较多优先级更高的TaskPool任务，导致原有低优先级的TaskPool任务执行延后",
  "id": "排查方向出问题的taskpool任务优先级较低应用后续新增较多优先级更高的taskpool任务导致原有低优先级的taskpool任务执行延后",
  "level": 3
}, {
  "value": "排查方向：晚执行的TaskPool任务是串行任务或者依赖其他任务",
  "id": "排查方向晚执行的taskpool任务是串行任务或者依赖其他任务",
  "level": 3
}, {
  "value": "排查方向：@Concurrent标记的方法所在的ets文件里import过多模块",
  "id": "排查方向concurrent标记的方法所在的ets文件里import过多模块",
  "level": 3
}, {
  "value": "TaskPool序列化失败问题定位指导",
  "id": "taskpool序列化失败问题定位指导",
  "level": 2
}, {
  "value": "Sendable类A的实例对象a传递到子线程后，使用a instanceof A判断返回false",
  "id": "sendable类a的实例对象a传递到子线程后使用a-instanceof-a判断返回false",
  "level": 2
}, {
  "value": "使用Sendable特性抛JS异常排查指导",
  "id": "使用sendable特性抛js异常排查指导",
  "level": 2
}, {
  "value": "属性类型不一致异常",
  "id": "属性类型不一致异常",
  "level": 3
}, {
  "value": "新增属性异常",
  "id": "新增属性异常",
  "level": 3
}, {
  "value": "ArkTS提供的Promise能力的原理是什么",
  "id": "arkts提供的promise能力的原理是什么",
  "level": 2
}, {
  "value": "TaskPool线程是否可以执行不需要@Concurrent和@Sendable修饰的JS闭包函数",
  "id": "taskpool线程是否可以执行不需要concurrent和sendable修饰的js闭包函数",
  "level": 2
}, {
  "value": "TaskPool任务执行后的结果如何保存到自定义的数据结构",
  "id": "taskpool任务执行后的结果如何保存到自定义的数据结构",
  "level": 2
}, {
  "value": "Sendable类在子线程无法加载",
  "id": "sendable类在子线程无法加载",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "并发常见问题",
        children: "并发常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpool任务不执行快速定位指导",
      children: "TaskPool任务不执行快速定位指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者发现TaskPool任务不执行时，可按照以下步骤快速定位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "taskpool.execute接口是否调用"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "taskpool.execute被调用时，Hilog会打印TaskPool调用态日志（Task Allocation: taskId:）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果发现没有该维测日志表明taskpool.execute实际未调用，应用需排查taskpool.execute之前的其他业务逻辑是否执行完成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction createTask(a: number, b: number): number {\n  let sum = a + b;\n  return sum;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            console.info('test start');\n            // 其他业务逻辑\n            // ...\n            let task: taskpool.Task = new taskpool.Task(createTask, 1, 2);\n            taskpool.execute(task);\n            // ...\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n// 如果test start在控制台打印，但是并未出现Task Allocation: taskId:的日志，则taskpool.execute没有执行，应用需要排查其他业务逻辑\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TaskPool任务是否被执行"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用taskpool.execute接口会打印TaskPool", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "调用态日志"
            })
          }), "（Task Allocation: taskId:）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "日志输出格式可能与示例有差异, 重点关注日志信息中taskId参数。"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定位到目标任务对应的Task Allocation: taskId日志后，在日志中搜索Task Allocation:后跟随的Id号，正常情况会打印", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "执行态日志"
            })
          }), "（Task Perform: name）和", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "结束态日志"
            })
          }), "（Task PerformTask End: taskId）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果只有调用态日志，没有执行态日志。可能是由于先执行的TaskPool任务阻塞了TaskPool工作线程，导致TaskPool工作线程不可用，后执行的TaskPool任务无法执行。应用可以排查自身业务逻辑，或者通过trace进一步定位。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果只有调用态日志和执行态日志，没有结束态日志。应用优先分析自定义的TaskPool任务内的业务逻辑是否存在阻塞操作。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果调用态日志和执行态日志时间间隔较久，且应用关注任务的执行时机，可以按照以下步骤继续分析。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "查看是否发生大量TaskPool任务堆积未执行的情况。如果在较短时间内执行大量任务（出现大量调用态日志），后执行的任务需要等待前置任务执行完。此时可以检查TaskPool的扩容情况，如果在调用态日志打印之前，TaskPool工作线程数量已扩容到接近上限（上限数量为日志片段log2中的maxNum值），则可能是短时间内任务数量太多导致，应用可以通过合理设置优先级将重要任务和有时效要求的任务优先执行。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "查看前置执行的TaskPool任务是否本身耗时较长或者发生阻塞。如果前置任务本身耗时较长，应用可以通过合理设置优先级解决。如果前置任务发生了意料之外的阻塞（一段时间后阻塞解除），应用需要排查自身业务逻辑。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// hilog 日志片段（模拟），格式如下，具体数值由应用运行时决定\n// log1： 大量任务提交\n// 其中taskId为可变值表示任务id，priority为可变值表示优先级，以实际程序打印为准。\ntaskpool:: Task Allocation: taskId, priority\ntaskpool:: Task Allocation: taskId, priority\ntaskpool:: Task Allocation: taskId, priority\ntaskpool:: Task Allocation: taskId, priority\ntaskpool:: Task Allocation: taskId, priority\n...\n// log2: 扩容日志\n// 其中 maxNum为可变值表示最大支持的taskpool线程数，createNum为可变值表示当前创建的taskpool线程数，totalNum为可变值表示当前创建出来的taskpool线程总数，以实际程序打印为准。不同版本因为日志限流优化等原因，日志会进行细微调整，可能呈现的日志如下：\n版本1: taskpool:: maxThreads: maxNum, created num: createNum, total num: totalNum\n版本2: taskpool:: max: maxNum, create: createNum, total: totalNum\n// log3: 执行态日志\n// 其中name为可变值表示执行的函数名，taskId为可变值表示任务id，runningLoopId为可变值表示线程创建出来的loop的id，以实际程序打印为准。\ntaskpool:: Task Perform: name, taskId, runningLoop: runningLoopId\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TaskPool任务执行时是否发生异常"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果在执行TaskPool任务过程中发生JS异常，TaskPool会捕获该JS异常并通过taskpool.execute().catch((e:Error)=>{})将异常信息返回，应用需要查看异常信息并修复。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction createTask(a: number, b: number): number {\n  let sum = a + b;\n  return sum;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string | ResourceStr = $r('app.string.Button_label'); // 加载资源，可根据项目实际资源自定义\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            console.info('test start');\n            // 其他业务逻辑\n            // ...\n            let task: taskpool.Task = new taskpool.Task(createTask, 1, 2);\n            taskpool.execute(task).then((res: object) => {\n              // 任务执行完处理结果\n              this.message = '任务执行结果:'+ res;\n              // ...\n            }).catch((e: Error) => {\n              // 任务发生异常后处理异常\n              // ...\n            })\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n// 如果test start在控制台打印，但是并未出现Task Allocation: taskId:的日志，则taskpool.execute没有执行，应用需要排查其他业务逻辑\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果.catch分支无异常信息返回，但是应用通过TaskPool任务实现的功能发生问题，应用需要查看TaskPool任务逻辑是否发生阻塞，导致功能异常。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpool任务执行慢排查思路",
      children: "TaskPool任务执行慢排查思路"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者发现TaskPool任务的调用态日志（如taskpool::add taskId:或者taskpool::Task Allocation: taskId:）与执行态日志（taskpool::Task Perform: name:）间隔时间较长时，可参考该排查指导进行问题定位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "排查方向出问题的taskpool任务优先级较低应用后续新增较多优先级更高的taskpool任务导致原有低优先级的taskpool任务执行延后",
      children: "排查方向：出问题的TaskPool任务优先级较低，应用后续新增较多优先级更高的TaskPool任务，导致原有低优先级的TaskPool任务执行延后"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景示例一"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某应用创建了低优先级的TaskPool任务，且其他业务场景依赖这个任务执行。后续，应用又创建了很多中优先级任务，导致原有的低优先级任务执行时机延后，其他业务场景未按计划时间点完成任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对完成执行时间点有要求的任务以低优先级执行不是好的选择，应用需要根据业务场景设置合理的任务优先级，且合理搭配任务优先级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景示例二"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用对某个TaskPool任务（简称taskA）执行时间有要求，执行超过5s时有检测机制。应用将taskA设置为MEDIUM优先级，在taskA前以MEDIUM优先级执行了较多其他任务，且这些任务耗时3s/5s不等，将已有线程和新扩容的线程均占满，导致taskA从taskpool.execute到执行结束超过5s。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.分析其他任务执行耗时3s/5s是否合理；2.调整taskA优先级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "排查方向晚执行的taskpool任务是串行任务或者依赖其他任务",
      children: "排查方向：晚执行的TaskPool任务是串行任务或者依赖其他任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果问题场景对应的TaskPool任务是串行队列任务，查看该串行队列内前面任务的执行情况。如日志片段1所示该串行队列有四个任务，问题场景对应的是第四个任务，查看日志片段2发现第二个任务执行了2s，对于应用业务逻辑是不正常的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hilog 日志片段1（模拟）\n// seqRunner共有四个任务\n// 其中389508780288为可变值表示任务id，393913878464为可变值表示seqRunner的id，以实际程序打印为准。\ntaskpool:: taskId 389508780288 in seqRunner 393913878464 immediately.\n// 其中394062838784为可变值表示任务id，393913878464为可变值表示seqRunner的id，以实际程序打印为准。\ntaskpool:: add taskId: 394062838784 to seqRunner 393913878464\n// 其中393918679936为可变值表示任务id，393913878464为可变值表示seqRunner的id，以实际程序打印为准。\ntaskpool:: add taskId: 393918679936 to seqRunner 393913878464\n// 其中393918673408为可变值表示任务id，393913878464为可变值表示seqRunner的id，以实际程序打印为准。\ntaskpool:: add taskId: 393918673408 to seqRunner 393913878464\n\n// hilog 日志片段2（模拟）\n// 查看第二个任务, 发现任务执行到执行结束间隔2s\n// 其中394062838784为可变值表示任务id，393913878464为可变值表示seqRunner的id，以实际程序打印为准。\n18:28:28.223 taskpool:: taskId 394062838784 in seqRunner 393913878464 immediately.\n// 其中name为可变值表示执行的函数名, 394062838784为可变值表示任务id，3959344048为可变值表示线程创建出来的loop的id，以实际程序打印为准。\n18:28:28.224 taskpool:: Task Perform: name, 394062838784, runningLoop: 3959344048\n// 其中394062838784为可变值表示任务id，12为可变值表示日期 18:28:28.240为可变值表示时间，以实际程序打印为准。不同版本因为日志限流优化等原因，日志会进行细微调整，可能呈现的日志如下：\n版本1: 18:28:30.243 taskpool:: Task Perform End: 394062838784\n版本2: 18:28:30.243 taskpool:: Task Perform End: 394062838784, 12 18:28:28.240\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用继续分析第二个任务中的业务逻辑是否存在耗时操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "排查方向concurrent标记的方法所在的ets文件里import过多模块",
      children: "排查方向：@Concurrent标记的方法所在的ets文件里import过多模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TaskPool第一次执行任务慢，间隔几百毫秒，原因是子线程反序列化之前，会将@Concurrent标记的方法所在的ets文件import的所有模块都初始化，导致出现任务调度慢的情况。应用可通过trace进一步定位，如果反序列化成功前有许多init module的trace，应用自行排查ets文件是否import过多模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.可拆分@Concurrent方法到单独的ets文件，减少模块初始化时间；2.使用延迟加载（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import",
        children: "lazy import"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpool序列化失败问题定位指导",
      children: "TaskPool序列化失败问题定位指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JS异常"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "入参序列化失败"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// API version 20之前版本\nError message:An exception occurred during serialization, taskpool: failed to serialize arguments.\n\n// API version 20及之后版本\nError message:An exception occurred during serialization, taskpool: failed to serialize arguments.\nSerialize error: Serialize don't support object type:\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回结果序列化失败"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// API version 20之前版本\nError message:An exception occurred during serialization, taskpool: failed to serialize result.\n\n// API version 20及之后版本\nError message:An exception occurred during serialization, taskpool: failed to serialize result.\nSerialize error: Serialize don't support object type:\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hilog错误日志"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// API version 20之前版本\n[ecmascript] Unsupported serialize object type:\n[ecmascript] ValueSerialize: serialize data is incomplete\n\n// API version 20及之后版本\n[ecmascript] Serialize don't support object type:\n[ecmascript] ValueSerialize: serialize data is incomplete\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TaskPool实现任务的函数（Concurrent函数）入参和返回结果需满足线程间通信支持的对象类型，详情请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
        children: "线程间通信对象"
      }), "。当Concurrent函数的入参或返回结果是线程间通信不支持的对象类型时，会出现上述现象。应用可以结合Hilog日志中打印的对象类型进一步排查通信对象是否符合要求。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在启动TaskPool任务时，在Concurrent函数中传入线程间通信不支持的对象类型，导致抛出入参序列化失败异常。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方案"
            })
          }), "：应用需要查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
            children: "线程间通信对象"
          }), "排查Concurrent函数入参。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在启动TaskPool任务时，抛出入参序列化失败异常，同时Hilog打印错误日志Unsupported serialize object type: Proxy（API version 20及之后版本打印错误日志：Serialize error: Serialize don't support object type: Proxy）。基于错误日志可知应用在Concurrent函数中传入代理对象，排查代码发现入参使用了@State装饰器，导致原对象实际上变为Proxy代理对象，代理对象不属于线程间通信支持的对象类型。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方案"
            })
          }), "：TaskPool不支持@State、@Prop等装饰器修饰的复杂类型，具体内容可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#taskpool%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
            children: "TaskPool注意事项"
          }), "。应用需要去掉@State装饰器。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用执行TaskPool任务时，抛出返回结果序列化失败异常，排查代码发现Concurrent函数返回结果是不支持的序列化类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// utils.ets\n@Concurrent\nexport function printArgs(args: number) {\n  return args;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ExecuteFailedTask.ets\nimport { taskpool } from '@kit.ArkTS'\nimport { BusinessError } from '@kit.BasicServicesKit'\nimport { printArgs} from './utils'\n\n@Concurrent\nfunction createTask(a: number, b: number) {\n  let sum = a + b;\n  // task1: 不支持的序列化类型\n  let task1: taskpool.Task = new taskpool.Task(printArgs, sum);\n  return task1;\n}\n\nfunction executeTask() {\n  // task\n  let task: taskpool.Task = new taskpool.Task(createTask, 1, 2);\n  taskpool.execute(task).then((res) => {\n  }).catch((e: BusinessError) => {\n    // 打印“返回结果序列化失败”异常信息\n    console.error('execute task failed ' + e.message);\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方案"
            })
          }), "：task1在.then中创建执行，Concurrent函数的返回结果设置为可序列化的类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// utils.ets\n@Concurrent\nexport function printArgs(args: number) {\n  return args;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ExecuteSupportTask.ets\nimport { taskpool } from '@kit.ArkTS'\nimport { BusinessError } from '@kit.BasicServicesKit'\nimport { printArgs} from './utils'\n\n@Concurrent\nfunction createTask(a: number, b: number) {\n  // 支持的序列化类型\n  let sum = a + b;\n  return sum;\n}\n\nfunction executeTask() {\n  // task\n  let task: taskpool.Task = new taskpool.Task(createTask, 1, 2);\n  taskpool.execute(task).then((res) => {\n    // task1\n    let task1: taskpool.Task = new taskpool.Task(printArgs, res);\n  }).catch((e: BusinessError) => {\n    console.error('execute task failed ' + e.message);\n  })\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendable类a的实例对象a传递到子线程后使用a-instanceof-a判断返回false",
      children: "Sendable类A的实例对象a传递到子线程后，使用a instanceof A判断返回false"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在子线程使用instanceof接口时，需要在导出Sendable类A的ets文件使用\"use shared\"指令标记该模块为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module",
        children: "共享模块"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/TestInstancof.ets\nimport { worker, ErrorEvent } from '@kit.ArkTS'\nimport { A } from './Sendable'\n\nconst workerInstance = new worker.ThreadWorker('../workers/Worker.ets');\n\nfunction testInstanceof() {\n  let a = new A();\n  if (a instanceof A) {\n    // 打印test instanceof in main thread success\n    console.info('test instanceof in main thread success');\n  } else {\n    console.info('test instanceof in main thread failed');\n  }\n  workerInstance.postMessageWithSharedSendable(a);\n  workerInstance.onerror = (err: ErrorEvent) => {\n    console.error('worker err :' + err.message);\n  }\n}\n\ntestInstanceof();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/Sendable.ets\n'use shared'\n\n@Sendable\nexport class A {\n  public name: string = 'name';\n\n  printName(): string {\n    return this.name;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// workers/Worker.ets\nimport { A } from '../pages/Sendable'\nimport { worker, ThreadWorkerGlobalScope, MessageEvents } from '@kit.ArkTS'\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\nworkerPort.onmessage = (e: MessageEvents) => {\n  let a: A = e.data as A;\n  if (a instanceof A) {\n    // 打印test instanceof in worker thread success\n    console.info('test instanceof in worker thread success');\n  } else {\n    console.info('test instanceof in worker thread failed');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用sendable特性抛js异常排查指导",
      children: "使用Sendable特性抛JS异常排查指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于Sendable特性存在固定布局、Sendable无法持有非Sendable等规格限制，开发者在进行Sendable改造时可能触发相关约束，导致抛出相应的JS异常。应用可参考以下内容进行代码排查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性类型不一致异常",
      children: "属性类型不一致异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JS异常：TypeError: Cannot set sendable property with mismatched type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因与解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ArkTS运行时在属性赋值时会严格进行类型一致性校验，如果定义的属性类型与传入的对象类型不一致，会抛出上述JS异常。应用需要基于JS异常栈信息，定位排查相应的业务逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在向子线程传递Sendable类A的实例对象时，抛出类型不一致异常。基于JS栈定位到问题发生在创建类A的实例对象时，排查后发现应用当前模块与其他模块联调时，其他模块未使用Sendable类B封装数据集。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方案"
            })
          }), " ： 应用当前模块将其他模块传递的数据使用Sendable类重新封装。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Sendable\nexport class B {\n  constructor() {}\n}\n\n@Sendable\nexport class A {\n  constructor(b: B) {\n    this.b = b;\n  }\n\n  public b: B | undefined = undefined;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用查看JS异常栈发现运行this.g = g赋值语句时，抛出类型不一致异常。排查代码后发现属性g使用了@State装饰器，导致原对象变为Proxy代理对象，造成定义类型与传入类型不一致。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方案"
            })
          }), "：去掉@State装饰器"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义Sendable类继承collections.Array，并重写构造函数。在实例化该类后调用slice函数时，抛出类型不一致异常。原因是调用slice函数时，collections.Array内部会创建新的SendableArray。构造函数的入参是新数组长度，类型为number。由于ans是string类型，而在构造函数中使用number类型的入参对ans赋值，在Sendable类中不允许使用number类型对string类型赋值，因此抛出异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// SoluteMismatchTypeTwo.ets\nimport { collections } from '@kit.ArkTS'\n\n@Sendable\nexport class CollectionsArray extends collections.Array<string> {\n  public ans: string = 'test';\n  constructor(heldValue: string) {\n    super();\n    this.ans = heldValue;\n  }\n}\nlet arr = new CollectionsArray('test');\narr.slice(1);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方案"
            })
          }), "： 对属性的赋值使用独立接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// SoluteMismatchTypeThree.ets\nimport { collections } from '@kit.ArkTS'\n\n@Sendable\nexport class CollectionsArray extends collections.Array<string> {\n  public ans: string = 'test';\n\n  constructor() {\n    super();\n  }\n\n  set(str: string) {\n    this.ans = str;\n  }\n}\n\nlet arr = new CollectionsArray();\narr.slice(1);\narr.set('success');\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "新增属性异常",
      children: "新增属性异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JS异常：TypeError: Cannot add property in prevent extensions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因与解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于Sendable类的布局固定，不允许增删属性，对Sendable对象新增属性时会抛出上述JS异常。应用需要基于JS异常栈定位到对应的ts文件代码行，排查相应的业务逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "异常场景示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用基于业务需要在同一个ets文件定义了同名的Sendable类和namespace，抛出新增属性异常。由于ts会合并同名的class和namespace，将namespace中的导出的内容附加到同名类上，实际上是对Sendable类新增属性，导致抛出上述异常。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方案"
            })
          }), "：规格限制，暂不支持合并同名Sendable class和namespace。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在HAR中使用Sendable特性时，抛出新增属性异常。查看JS异常栈，发现异常代码行定位在js文件，而Sendable特性不支持在js文件中使用，导致抛出非预期的异常。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方案"
            })
          }), "：在HAR中使用Sendable特性时，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints#%E5%9C%A8har%E5%8C%85%E4%B8%AD%E7%9A%84%E4%BD%BF%E7%94%A8%E8%A7%84%E5%88%99",
            children: "配置UseTsHar"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在Local Test单元测试或预览器中使用Sendable特性时，抛出新增属性异常。由于Sendable特性暂不支持在Local Test和预览器中使用，导致抛出非预期的异常。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方案"
            })
          }), "：规格限制，暂不支持。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts提供的promise能力的原理是什么",
      children: "ArkTS提供的Promise能力的原理是什么"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Promise是ArkTS提供的异步并发能力，是标准的JS语法。详情请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/async-concurrency-overview#promise",
        children: "Promise"
      }), "概述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpool线程是否可以执行不需要concurrent和sendable修饰的js闭包函数",
      children: "TaskPool线程是否可以执行不需要@Concurrent和@Sendable修饰的JS闭包函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TaskPool执行的任务函数必须使用@Concurrent装饰器修饰，由于Concurrent函数不能访问闭包，因此函数内不可调用当前文件的其他普通函数，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction#taskpool%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
        children: "TaskPool注意事项"
      }), "。但是，开发者可以通过给Concurrent函数传参的方式，传入@Sendable装饰器修饰的普通function和Async function，在Concurrent函数内调用Sendable function。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["因此，TaskPool线程目前不支持执行普通的JS闭包函数。如果有相关诉求，开发者可以根据业务需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker"
      }), "并发能力进行业务改造。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskpool任务执行后的结果如何保存到自定义的数据结构",
      children: "TaskPool任务执行后的结果如何保存到自定义的数据结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TaskPool的任务执行函数Concurrent函数只能使用局部变量和函数入参，TaskPool任务执行后的结果应该如何保存到自定义的数据结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["自定义Sendable类。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
            children: "Sendable对象"
          }), "可以在不同的子线程中共享，开发者可以将任务执行后的结果保存到Sendable对象上。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TaskPool任务执行后的结果可以在.then中返回，需要保存的数据如果仅在当前线程使用，可以在.then中将执行结果保存到自定义的数据结构中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Sendable.ets，与Index.ets在同级目录下\n@Sendable\nexport class TestClass {\n  public name: string = 'test';\n\n  setName(name: string) {\n    this.name = name;\n  }\n\n  getName(): string {\n    return this.name;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// SaveResult.ets\nimport { taskpool } from '@kit.ArkTS'\nimport { BusinessError } from '@kit.BasicServicesKit'\nimport { TestClass } from './Sendable'\n\n@Concurrent\nfunction createTask(a: number): string {\n  return `test${a}`;\n}\n\nfunction executeTask() {\n  let testObject: TestClass = new TestClass();\n  let task: taskpool.Task = new taskpool.Task(createTask, 1)\n  taskpool.execute(task).then((res) => {\n    testObject.setName(res as string);\n    console.info('execute task success, name is ' + testObject.getName());\n  }).catch((e: BusinessError) => {\n    console.error('execute task error: ' + e.message);\n  })\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendable类在子线程无法加载",
      children: "Sendable类在子线程无法加载"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable装饰器修饰的类与Observed装饰器修饰的类定义在同一个ets文件中，在TaskPool子线程加载Sendable类时捕获到错误信息：SendableItem is not initialized。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SoluteItemInitialized.ets\nimport { taskpool } from '@kit.ArkTS'\nimport { BusinessError } from '@kit.BasicServicesKit'\nimport { SendableItem } from './Sendable'\n\n@Concurrent\nfunction createTask() {\n  let data = new SendableItem();\n}\n\nfunction executeTask() {\n  let task = new taskpool.Task(createTask);\n  taskpool.execute(task).then((res) => {\n    console.info('execute task success');\n  }).catch((e: BusinessError) => {\n    console.error('execute task error: ' + e.message);\n  })\n}\n\nexecuteTask();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// sendable.ets\n@Observed\nexport class NormalItem {\n  age: number = 0;\n}\n\n@Sendable\nexport class SendableItem {\n  name: string = '';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "根因分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Observed装饰器仅支持在UI线程使用，不能在子线程、Worker、TaskPool中直接或者间接使用，否则会导致应用功能失效甚至crash。由于sendable.ets文件中定义了Observed装饰器修饰的类，即使该类没有被显式调用也可能被解析执行，当解析到Observed这类UI装饰器时则抛出异常：Observed is not defined，导致当前文件中的其他模块的解析被中断。在TaskPool子线程加载Sendable类时抛出异常：SendableItem is not initialized。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Observed装饰器修饰的类NormalItem剥离到单独的ets文件后，TaskPool子线程再去加载Sendable类SendableItem，应用运行符合预期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SoluteItemInitialized.ets\nimport { taskpool } from '@kit.ArkTS'\nimport { BusinessError } from '@kit.BasicServicesKit'\nimport { SendableItem } from './Sendable'\n\n@Concurrent\nfunction createTask() {\n  let data = new SendableItem();\n}\n\nfunction executeTask() {\n  let task = new taskpool.Task(createTask);\n  taskpool.execute(task).then((res) => {\n    console.info('execute task success');\n  }).catch((e: BusinessError) => {\n    console.error('execute task error: ' + e.message);\n  })\n}\n\nexecuteTask();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sendable.ets\n@Sendable\nexport class SendableItem {\n  public name: string = '';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ui.ets\n@Observed\nexport class NormalItem {\n  public age: number = 0;\n}\n"
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