"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["675987"], {
274190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hitracechain_hitracechain_guidelines_arkts_hitracechain_guidelines_arkts_md_c18_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hitracechain-hitracechain-guidelines-arkts-hitracechain-guidelines-arkts-md-c18.json
var site_docs_system_debug_optimize_performance_analysis_kit_hitracechain_hitracechain_guidelines_arkts_hitracechain_guidelines_arkts_md_c18_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-arkts/hitracechain-guidelines-arkts","title":"使用HiTraceChain打点（ArkTS）","description":"接口说明","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-arkts/hitracechain-guidelines-arkts.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-arkts","slug":"/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-arkts/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用HiTraceChain打点（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracechain-guidelines-arkts","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HiTraceChain介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro/"},"next":{"title":"使用HiTraceChain打点（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-arkts/hitracechain-guidelines-arkts.md


const frontMatter = {
	title: '使用HiTraceChain打点（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracechain-guidelines-arkts',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '使用HiTraceChain打点（ArkTS）';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "async/await和promise/then异步任务中使用HiTraceChain",
  "id": "asyncawait和promisethen异步任务中使用hitracechain",
  "level": 3
}, {
  "value": "异步宏任务setInterval和setTimeout中使用HiTraceChain",
  "id": "异步宏任务setinterval和settimeout中使用hitracechain",
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
    li: "li",
    ol: "ol",
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
        id: "使用hitracechain打点arkts",
        children: "使用HiTraceChain打点（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分布式跟踪接口由HiTraceChain模块提供，详细API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain/js-apis-hitracechain",
        children: "@ohos.hiTraceChain (分布式跟踪)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.begin(name: string, flags?: number = HiTraceFlag.DEFAULT): HiTraceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始跟踪，并返回创建的HiTraceId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.end(id: HiTraceId): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束跟踪。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.getId(): HiTraceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取跟踪标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.setId(id: HiTraceId): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置跟踪标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.clearId(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除跟踪标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.createSpan(): HiTraceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建跟踪分支。创建一个HiTraceId，使用当前线程TLS中的chainId、spanId初始化HiTraceId的chainId、parentSpanId，并为HiTraceId生成一个新的spanId，返回该HiTraceId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.isValid(id: HiTraceId): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断HiTraceId是否有效。  true：HiTraceId有效；false：HiTraceId无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.isFlagEnabled(id: HiTraceId, flag: HiTraceFlag): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断HiTraceId中指定的跟踪标志是否已启用。  true：指定的跟踪标志已启用；false：指定的跟踪标志未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.enableFlag(id: HiTraceId, flag: HiTraceFlag): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用HiTraceId中指定的跟踪标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hiTraceChain.tracepoint(mode: HiTraceCommunicationMode, type: HiTraceTracepointType, id: HiTraceId, msg?: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceMeter跟踪信息埋点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiTraceChain在ArkTS中的使用方法参考以下示例，开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "约束与限制"
      }), "，了解常见的支持与不支持HiTraceChain自动传递的机制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asyncawait和promisethen异步任务中使用hitracechain",
      children: "async/await和promise/then异步任务中使用HiTraceChain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["async/await和promise/then异步任务支持HiTraceChain自动传递，示例结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-arkts",
        children: "事件订阅（ArkTS）"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-arkts",
        children: "使用HiTraceMeter跟踪性能（ArkTS）"
      }), "，说明分布式跟踪在ArkTS中的使用方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中新建工程，选择“Empty Ability”，SDK版本选择19及以上（示例工程使用的HiTraceMeter接口从API version 19开始支持），工程的目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "├── entry\n│   ├── src\n│       ├── main\n│       │   ├── ets\n│       │   │   ├── entryability\n│       │   │   │   └── EntryAbility.ets\n│       │   │   ├── entrybackupability\n│       │   │   │   └── EntryBackupAbility.ets\n│       │   │   └── pages\n│       │   │       └── Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“entry > src > main > ets > pages > Index.ets”文件，使用HiTraceChain跟踪异步任务，完整的示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hiAppEvent, hilog, hiTraceChain, hiTraceMeter } from '@kit.PerformanceAnalysisKit';\n\nasync function test3() {\n  hilog.info(0x0000, 'testTag', 'test3');\n}\n\nasync function test2() {\n  hilog.info(0x0000, 'testTag', 'test2');\n}\n\nasync function test1() {\n  hilog.info(0x0000, 'testTag', 'test1_1');\n  await test2();\n  hilog.info(0x0000, 'testTag', 'test1_2');\n  await test3();\n  hilog.info(0x0000, 'testTag', 'test1_3');\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'clickTime=0';\n  @State clickTime: number = 0;\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(20)\n          .margin(5)\n          .width(350)\n          .height(60)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.clickTime++;\n            this.message = 'clickTime=' + this.clickTime;\n            // 业务开始前，开启分布式跟踪\n            // INCLUDE_ASYNC表示会在系统支持的异步机制里自动传递HiTraceId\n            let traceId = hiTraceChain.begin('testTag: hiTraceChain begin', hiTraceChain.HiTraceFlag.INCLUDE_ASYNC);\n            // 开始HiTraceMeter同步打点，该接口API version 19开始支持\n            hiTraceMeter.startSyncTrace(hiTraceMeter.HiTraceOutputLevel.COMMERCIAL, 'onClick', this.message);\n\n            // 在按钮点击函数中进行事件打点，以记录按钮点击事件\n            let eventParams: Record<string, number> = { 'click_time': 100 };\n            let eventInfo: hiAppEvent.AppEventInfo = {\n              // 事件领域定义\n              domain: 'button',\n              // 事件名称定义\n              name: 'click',\n              // 事件类型定义\n              eventType: hiAppEvent.EventType.BEHAVIOR,\n              // 事件参数定义\n              params: eventParams\n            };\n            hiAppEvent.write(eventInfo).then(() => {\n              hilog.info(0x0000, 'testTag', 'Succeeded in writing an app event');\n              // 按钮点击事件处理结束，关闭异步处理分支的分布式跟踪\n              hiTraceChain.end(traceId);\n              hilog.info(0x0000, 'testTag', 'hiTraceChain end in hiAppEvent');\n            }).catch((err: BusinessError) => {\n              hilog.error(0x0000, 'testTag', `HiAppEvent err.code: ${err.code}, err.message: ${err.message}`);\n              // 异常处理结束，关闭异步处理分支的分布式跟踪\n              hiTraceChain.end(traceId);\n              hilog.info(0x0000, 'testTag', 'hiTraceChain end in hiAppEvent');\n            });\n\n            // 创建Promise对象执行随机数生成任务，若随机数大于0.5，则正常返回结果，反之则返回异常信息\n            const promise: Promise<number> = new Promise((resolve: Function, reject: Function) => {\n              hilog.info(0x0000, 'testTag', 'promise task');\n              const randomNumber: number = Math.random();\n              if (randomNumber > 0.5) {\n                resolve(randomNumber);\n              } else {\n                reject(new Error('Random number is too small'));\n              }\n            });\n\n            // then方法的回调函数处理Promise对象的执行结果\n            promise.then((result: number) => {\n              // 成功时执行\n              hilog.info(0x0000, 'testTag', 'Random number is %{public}d', result);\n              // 回调函数处理结束，关闭异步处理分支的分布式跟踪\n              hiTraceChain.end(traceId);\n              hilog.info(0x0000, 'testTag', 'hiTraceChain end in promise/then');\n            }).catch((error: BusinessError) => {\n              // 失败时执行\n              hilog.error(0x0000, 'testTag', error.message);\n              // 异常处理结束，关闭异步处理分支的分布式跟踪\n              hiTraceChain.end(traceId);\n              hilog.info(0x0000, 'testTag', 'hiTraceChain end in promise/then');\n            });\n\n            // 执行async/await异步任务\n            let res = test1();\n            // then方法的回调函数处理异步任务的执行结果\n            res.then(() => {\n              hilog.info(0x0000, 'testTag', 'then task');\n              // 功能同hiTraceChain.end，关闭异步处理分支的分布式跟踪\n              hiTraceChain.clearId();\n              hilog.info(0x0000, 'testTag', 'hiTraceChain end in async/await');\n            });\n\n            // 结束HiTraceMeter同步打点，该接口API version 19开始支持\n            hiTraceMeter.finishSyncTrace(hiTraceMeter.HiTraceOutputLevel.COMMERCIAL);\n            // 业务结束后，关闭分布式跟踪\n            hiTraceChain.end(traceId);\n            hilog.info(0x0000, 'testTag', 'hiTraceChain end in main thread');\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程。在DevEco Studio Terminal窗口中执行以下命令，捕获10秒内的应用trace，并使用关键字“onClick”过滤示例代码中hiTraceMeter.startSyncTrace和hiTraceMeter.finishSyncTrace生成的trace日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PS D:\\xxx\\xxx> hdc shell\n$ hitrace -t 10 app | grep onClick\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击设备上的“clickTime=0”按钮（需在10秒内完成，否则步骤3捕获不到trace数据），触发业务逻辑。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看运行结果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设备屏幕上按钮显示“clickTime=1”，表示点击了按钮一次，已触发业务逻辑。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在DevEco Studio Log窗口查看分布式跟踪的相关信息。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "示例所有hilog打印均使用了“testTag”，因此可以使用关键字“testTag”过滤日志，查看该业务代码打印的hilog日志。"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "06-04 17:46:45.156   55451-55451   C02D33/com.exa...tion/HiTraceC  com.examp...lication  I     [a92ab116052648e 0 0]HiTraceBegin name:testTag: hiTraceChain begin flags:0x01.\n06-04 17:46:45.157   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab116052648e 0 0]promise task\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab116052648e 0 0]test1_1\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab116052648e 0 0]test2\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     hiTraceChain end in main thread\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab116052648e 3457eff 0]test1_2\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab116052648e 3457eff 0]test3\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  E     [a92ab116052648e 1bb5a1b 35d9c46]Random number is too small\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     hiTraceChain end in promise/then\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab116052648e 2ddfb70 3457eff]test1_3\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab116052648e 225a1d9 2ddfb70]then task\n06-04 17:46:45.158   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     hiTraceChain end in async/await\n06-04 17:46:45.163   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab116052648e 3a75cb2 520a92]Succeeded in writing an app event\n06-04 17:46:45.163   55451-55451   A00000/com.exa...ation/testTag  com.examp...lication  I     hiTraceChain end in hiAppEvent\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "hilog日志前附加的[chainId spanId parentSpanId]格式的信息即为HiTraceId信息，例如[a92ab116052648e 2ddfb70 3457eff]表示跟踪链标识chainId值为a92ab116052648e，分支标识spanId值为2ddfb70，父分支标识parentSpanId值为3457eff。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "示例得到的跟踪链标识chainId值为a92ab116052648e，可使用chainId值过滤日志，查看业务完整的调用链hilog日志。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "promise/then和async/await异步机制都会自动传递HiTraceId，并生成分支标识，例如示例hilog日志中的3457eff、2ddfb70、225a1d9等，均为异步任务自动生成的分支标识。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "hiTraceChain.end()和hiTraceChain.clear()都可以结束跟踪，跟踪结束后，hilog日志不再携带HiTraceId信息。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在DevEco Studio Terminal窗口查看trace数据，HiTraceChain跟踪开启期间，HiTraceMeter打点得到的trace日志会自动携带HiTraceId信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: " e.myapplication-55451   (  55451) [010] .... 27164.174417: tracing_mark_write: B|55451|H:[a92ab116052648e,0,0]#onClick|M62|clickTime=1\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异步宏任务setinterval和settimeout中使用hitracechain",
      children: "异步宏任务setInterval和setTimeout中使用HiTraceChain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步宏任务setInterval和setTimeout不支持HiTraceChain自动传递，以下示例说明如何使用hiTraceChain.getId()、hiTraceChain.setId()接口传递HiTraceId，如何使用hiTraceChain.createSpan()接口创建分支标识，进行分布式跟踪。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中新建工程，选择“Empty Ability”，工程的目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "├── entry\n│   ├── src\n│       ├── main\n│       │   ├── ets\n│       │   │   ├── entryability\n│       │   │   │   └── EntryAbility.ets\n│       │   │   ├── entrybackupability\n│       │   │   │   └── EntryBackupAbility.ets\n│       │   │   └── pages\n│       │   │       └── Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，使用HiTraceChain跟踪异步任务，完整的示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog, hiTraceChain } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'clickTime=0';\n  @State clickTime: number = 0;\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(20)\n          .margin(5)\n          .width(350)\n          .height(60)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.clickTime++;\n            this.message = 'clickTime=' + this.clickTime;\n            // 获取当前线程的HiTraceId\n            let traceId = hiTraceChain.getId();\n            // 如果traceId无效，为当前线程开启分布式跟踪\n            if (!hiTraceChain.isValid(traceId)) {\n              hilog.info(0x0000, 'testTag', 'HiTraceId is invalid, begin hiTraceChain');\n              traceId = hiTraceChain.begin('testTag: hiTraceChain begin');\n              // 使能traceId的INCLUDE_ASYNC，INCLUDE_ASYNC表示会在系统支持的异步机制里自动传递HiTraceId\n              hiTraceChain.enableFlag(traceId, hiTraceChain.HiTraceFlag.INCLUDE_ASYNC);\n              // 将使能INCLUDE_ASYNC的HiTraceId设置到当前线程\n              hiTraceChain.setId(traceId);\n              // 查询INCLUDE_ASYNC是否设置成功\n              if (hiTraceChain.isFlagEnabled(hiTraceChain.getId(), hiTraceChain.HiTraceFlag.INCLUDE_ASYNC)) {\n                hilog.info(0x0000, 'testTag', 'HiTraceFlag INCLUDE_ASYNC is enabled');\n              }\n            }\n\n            const promise: Promise<number> = new Promise((resolve: Function, reject: Function) => {\n              // 创建异步重复定时任务，每1s执行一次\n              let intervalID = setInterval(() => {\n                // 为当前异步重复定时任务设置HiTraceId\n                hiTraceChain.setId(traceId);\n                const randomNumber: number = Math.random();\n                hilog.info(0x0000, 'testTag', 'Interval 1s: randomNumber is %{public}d', randomNumber);\n                // 关闭当前异步重复定时任务的分布式跟踪\n                hiTraceChain.end(traceId);\n              }, 1000)\n\n              // 创建异步定时任务，2.5s后执行，结束异步重复定时任务\n              setTimeout(() => {\n                // 为异步定时任务设置HiTraceId\n                hiTraceChain.setId(traceId);\n                // 为异步定时任务生成分支标识spanId\n                let traceIdTimeout = hiTraceChain.createSpan();\n                // 为异步定时任务设置带spanId的HiTraceId\n                hiTraceChain.setId(traceIdTimeout);\n                hilog.info(0x0000, 'testTag', 'setTimeout 2.5s');\n                // 结束异步重复定时任务\n                clearInterval(intervalID);\n                const randomNumber: number = Math.random();\n                if (randomNumber > 0.5) {\n                  resolve(randomNumber);\n                } else {\n                  reject(new Error('Random number is too small'));\n                }\n                // 关闭异步定时任务的分布式跟踪\n                hiTraceChain.end(traceId);\n              }, 2500)\n            })\n\n            promise.then((result: number) => {\n              // 成功时执行\n              hilog.info(0x0000, 'testTag', 'Random number is %{public}d', result);\n              // 回调函数处理结束，关闭异步处理分支的分布式跟踪\n              hiTraceChain.end(traceId);\n            }).catch((error: BusinessError) => {\n              // 失败时执行\n              hilog.error(0x0000, 'testTag', error.message);\n              // 异常处理结束，关闭异步处理分支的分布式跟踪\n              hiTraceChain.end(traceId);\n            });\n\n            // 业务结束后，关闭分布式跟踪\n            hiTraceChain.end(traceId);\n            hilog.info(0x0000, 'testTag', 'hiTraceChain end in main thread');\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程，点击设备上“clickTime=0”按钮，触发业务逻辑。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看运行结果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设备屏幕上按钮显示“clickTime=1”，表示点击了按钮一次，已触发业务逻辑。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在DevEco Studio Log窗口查看分布式跟踪的相关信息。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "示例所有hilog打印均使用了“testTag”，因此可以使用关键字“testTag”过滤日志，查看该业务代码打印的hilog日志。"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "06-05 15:46:04.544   49568-49568   A00000/com.exa...ation/testTag  com.examp...lication  I     HiTraceId is invalid, begin hiTraceChain\n06-05 15:46:04.544   49568-49568   C02D33/com.exa...tion/HiTraceC  com.examp...lication  I     [a92ab34b3c84ea7 0 0]HiTraceBegin name:testTag: hiTraceChain begin flags:0x00.\n06-05 15:46:04.544   49568-49568   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab34b3c84ea7 0 0]HiTraceFlag INCLUDE_ASYNC is enabled\n06-05 15:46:04.544   49568-49568   A00000/com.exa...ation/testTag  com.examp...lication  I     hiTraceChain end in main thread\n06-05 15:46:05.547   49568-49568   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab34b3c84ea7 0 0]Interval 1s: randomNumber is 0.863610\n06-05 15:46:06.548   49568-49568   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab34b3c84ea7 0 0]Interval 1s: randomNumber is 0.365460\n06-05 15:46:07.047   49568-49568   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab34b3c84ea7 3cafdfd 0]setTimeout 2.5s\n06-05 15:46:07.048   49568-49568   A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab34b3c84ea7 dc842f 3cafdfd]Random number is 0.524236\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "hilog日志前附加的[chainId spanId parentSpanId]格式的信息即为HiTraceId信息，例如[a92ab34b3c84ea7 dc842f 3cafdfd]表示跟踪链标识chainId值为a92ab34b3c84ea7，分支标识spanId值为dc842f，父分支标识parentSpanId值为3cafdfd。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "示例得到的chainId值为a92ab34b3c84ea7，可使用chainId值过滤日志，查看业务完整的调用链hilog日志。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
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