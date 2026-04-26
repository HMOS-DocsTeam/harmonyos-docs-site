"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["430126"], {
465257(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_crash_events_hiappevent_watcher_crash_events_arkts_hiappevent_watcher_crash_events_arkts_md_440_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-crash-events-hiappevent-watcher-crash-events-arkts-hiappevent-watcher-crash-events-arkts-md-440.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_crash_events_hiappevent_watcher_crash_events_arkts_hiappevent_watcher_crash_events_arkts_md_440_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-arkts/hiappevent-watcher-crash-events-arkts","title":"订阅崩溃事件（ArkTS）","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-arkts/hiappevent-watcher-crash-events-arkts.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-arkts","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-arkts/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"订阅崩溃事件（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-crash-events-arkts","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"崩溃事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events/"},"next":{"title":"订阅崩溃事件（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-arkts/hiappevent-watcher-crash-events-arkts.md


const frontMatter = {
	title: '订阅崩溃事件（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-crash-events-arkts',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅崩溃事件（ArkTS）';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "添加事件观察者",
  "id": "添加事件观察者",
  "level": 3
}, {
  "value": "验证观察者是否订阅到崩溃事件",
  "id": "验证观察者是否订阅到崩溃事件",
  "level": 3
}, {
  "value": "从Faultlogger接口迁移崩溃事件",
  "id": "从faultlogger接口迁移崩溃事件",
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
    ol: "ol",
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
        id: "订阅崩溃事件arkts",
        children: "订阅崩溃事件（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何使用HiAppEvent提供的ArkTS接口订阅应用崩溃事件。接口的详细使用说明（参数限制、取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent",
        children: "@ohos.hiviewdfx.hiAppEvent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(74582)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用ArkTS接口可以订阅JsError和NativeCrash两种崩溃事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "addWatcher(watcher: Watcher): AppEventPackageHolder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用事件观察者，以添加对应用事件的订阅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeWatcher(watcher: Watcher): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除应用事件观察者，以移除对应用事件的订阅。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加事件观察者",
      children: "添加事件观察者"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议在应用启动后、执行业务逻辑前添加事件观察者，以确保能够订阅到崩溃事件。"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以订阅用户点击按钮触发崩溃生成的崩溃事件为例，说明开发步骤。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio新建Native C++模板工程，编辑“entry > src > main > ets > entryability > EntryAbility.ets”文件，导入依赖模块。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hiAppEvent, hilog } from '@kit.PerformanceAnalysisKit';\nimport { deviceInfo } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，在onCreate函数中设置事件的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events#%E5%B4%A9%E6%BA%83%E4%BA%8B%E4%BB%B6%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE",
            children: "崩溃事件自定义参数"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events#%E5%B4%A9%E6%BA%83%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE",
            children: "崩溃日志规格自定义参数"
          }), "，示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构建崩溃事件的自定义参数\nlet crashParams: Record<string, hiAppEvent.ParamType> = {\n  \"test_data\": 100, // test_data为自定义数据，开发者可根据实际需求自定义params参数。\n};\n// 开发者可以设置崩溃事件的自定义参数\nhiAppEvent.setEventParam(crashParams, hiAppEvent.domain.OS, hiAppEvent.event.APP_CRASH).then(() => {\n  hilog.info(0x0000, 'testTag', `HiAppEvent success to set event param`);\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'testTag', `HiAppEvent code: ${err.code}, message: ${err.message}`);\n});\n\nif (deviceInfo.sdkApiVersion >= 20) {  // API Version 20及以后版本，支持设置崩溃日志配置参数\n  // 构建崩溃日志规格自定义参数\n  let crashConfigParams: Record<string, hiAppEvent.ParamType> = {\n    \"extend_pc_lr_printing\": true, // 使能扩展打印pc和lr寄存器附近的内存值\n    \"log_file_cutoff_sz_bytes\": 1024000, // 截断崩溃日志到1000KB\n    \"simplify_vma_printing\": true // 使能精简打印maps\n  };\n  // 开发者可以设置崩溃日志配置参数\n  hiAppEvent.setEventConfig(hiAppEvent.event.APP_CRASH, crashConfigParams).then(() => {\n    hilog.info(0x0000, 'testTag', `HiAppEvent success to set event config.`);\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `HiAppEvent code: ${err.code}, message: ${err.message}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，在 onCreate 函数中订阅系统事件。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 添加崩溃事件观察者\nlet watcher: hiAppEvent.Watcher = {\n  // 开发者可以自定义观察者名称，系统会使用名称来标识不同的观察者\n  name: 'crashEventWatcher',\n  // 开发者可以订阅感兴趣的系统事件，此处是订阅了崩溃事件\n  appEventFilters: [\n    {\n      domain: hiAppEvent.domain.OS,\n      names: [hiAppEvent.event.APP_CRASH]\n    }\n  ],\n  // 开发者可以自行实现订阅实时回调函数，以便对订阅获取到的事件数据进行自定义处理\n  onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {\n    hilog.info(0x0000, 'testTag', `HiAppEvent onReceive: domain=${domain}`);\n    for (const eventGroup of appEventGroups) {\n      // 开发者可以根据事件集合中的事件名称区分不同的系统事件\n      hilog.info(0x0000, 'testTag', `HiAppEvent eventName=${eventGroup.name}`);\n      for (const eventInfo of eventGroup.appEventInfos) {\n        // 开发者可以对事件集合中的事件数据进行自定义处理，此处是将事件数据打印在日志中\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.domain=${eventInfo.domain}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.name=${eventInfo.name}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.eventType=${eventInfo.eventType}`);\n        // 开发者可以获取到崩溃事件发生的时间戳\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.time=${eventInfo.params['time']}`);\n        // 开发者可以获取到崩溃事件发生的崩溃类型\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.crash_type=${eventInfo.params['crash_type']}`);\n        // 开发者可以获取到崩溃应用的前后台状态\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.foreground=${eventInfo.params['foreground']}`);\n        // 开发者可以获取到崩溃应用的版本信息\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.bundle_version=${eventInfo.params['bundle_version']}`);\n        // 开发者可以获取到崩溃应用的包名\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.bundle_name=${eventInfo.params['bundle_name']}`);\n        // 开发者可以获取到崩溃应用的进程id\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.pid=${eventInfo.params['pid']}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.uid=${eventInfo.params['uid']}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.uuid=${eventInfo.params['uuid']}`);\n        // 开发者可以获取到崩溃事件发生的异常类型、异常原因和异常调用栈\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.exception=${JSON.stringify(eventInfo.params['exception'])}`);\n        // 开发者可以获取到崩溃事件发生时日志信息\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.hilog.size=${eventInfo.params['hilog'].length}`);\n        // 开发者可以获取到崩溃事件的故障进程存活时间\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.process_life_time=${eventInfo.params['process_life_time']}`);\n        // 开发者可以获取到崩溃事件发生时内存信息\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.memory=${JSON.stringify(eventInfo.params['memory'])}`);\n        // 开发者可以获取到崩溃事件发生时的崩溃日志文件\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.external_log=${JSON.stringify(eventInfo.params['external_log'])}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.log_over_limit=${eventInfo.params['log_over_limit']}`);\n        // 开发者可以获取到崩溃事件的自定义数据test_data\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.test_data=${eventInfo.params['test_data']}`);\n      }\n    }\n  }\n};\nhiAppEvent.addWatcher(watcher);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造崩溃场景"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "构造NativeCrash类型崩溃"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑工程中的“entry > src > main > cpp > napi_init.cpp”文件，添加TestNullptr方法，并将TestNullptr注册为ArkTS接口，增加如下代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static napi_value TestNullptr(napi_env env, napi_callback_info info)\n{\n    int *p = nullptr;\n    int a = *p; // 空指针解引用，程序会在此处崩溃\n    return {};\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        // ···\n        { \"testNullptr\", nullptr, TestNullptr, nullptr, nullptr, nullptr, napi_default, nullptr },\n        // ···\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在\"index.d.ts\"文件中，定义ArkTS接口："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "export const testNullptr: () => void;\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，添加按钮并在其onClick函数中构造崩溃场景，以触发崩溃事件。示例代码如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Button('NativeCrash')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    // 在按钮点击函数中构造一个crash场景，触发应用崩溃事件\n    testNapi.testNullptr();\n  })\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "构造JsError类型崩溃"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，添加按钮并在其onClick函数中构造崩溃场景，以触发崩溃事件。示例代码如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Button('JsError')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    // 在按钮点击函数中构造一个crash场景，触发应用崩溃事件\n    JSON.parse('');\n  })\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面的运行按钮，启动应用工程。在应用界面中点击“NativeCrash”或“JsError”按钮，触发崩溃事件。系统根据崩溃类型生成相应的日志并进行回调。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667236)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JsError通过进程内采集故障信息触发回调，速度快，而NativeCrash采取进程外采集故障信息，平均耗时约2秒，具体受业务线程数量和进程间通信影响。开发者可订阅崩溃事件，故障信息采集完成后异步上报，不阻塞当前业务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "验证观察者是否订阅到崩溃事件",
      children: "验证观察者是否订阅到崩溃事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用主动捕获崩溃异常和未主动捕获崩溃异常的场景下，崩溃事件的回调时机不同，需在不同时间验证是否订阅到崩溃事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用未主动捕获崩溃异常场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若应用未主动捕获崩溃异常，系统处理崩溃后应用将退出。", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用下次启动时"
        })
      }), "，HiAppEvent将崩溃事件上报给已注册的监听，完成回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若应用无法启动或长时间未启动，开发者可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts",
        children: "使用FaultLogExtensionAbility订阅事件"
      }), "回调重写的函数，进行延迟上报。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用主动捕获崩溃异常场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若应用主动捕获崩溃异常，崩溃事件将在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用退出前"
        })
      }), "回调，例如以下两种情况："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异常处理中未主动退出，应用崩溃后将不会退出。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["采用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager#errormanageronerror",
            children: "errorManager.on"
          }), "方法捕获异常会导致JsError类型的崩溃事件在应用退出前回调。若应用主动注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E7%B3%BB%E7%BB%9F%E5%A4%84%E7%90%86%E7%9A%84%E5%B4%A9%E6%BA%83%E4%BF%A1%E5%8F%B7",
            children: "崩溃信号"
          }), "处理函数但未主动退出，会导致NativeCrash类型的崩溃事件在应用退出前回调。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异常处理耗时过长，导致应用退出延迟。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发调试阶段，HiAppEvent上报事件完成回调后，可以在DevEco Studio的HiLog窗口查看JsError类型崩溃事件内容。NativeCrash类型崩溃事件内容略有不同，具体参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events#%E4%BA%8B%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "崩溃事件字段说明"
      }), "。JsError类型崩溃事件内容样例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAppEvent onReceive: domain=OS\nHiAppEvent eventName=APP_CRASH\nHiAppEvent eventInfo.domain=OS\nHiAppEvent eventInfo.name=APP_CRASH\nHiAppEvent eventInfo.eventType=1\nHiAppEvent eventInfo.params.time=1503045716054\nHiAppEvent eventInfo.params.crash_type=JsError\nHiAppEvent eventInfo.params.foreground=true\nHiAppEvent eventInfo.params.bundle_version=1.0.0\nHiAppEvent eventInfo.params.bundle_name=com.samples.eventsub\nHiAppEvent eventInfo.params.pid=2610\nHiAppEvent eventInfo.params.uid=20010044\nHiAppEvent eventInfo.params.uuid=7c3b1579c8ca8629af3858f8145254c2867ee402dc16ee18034337aae258620b\nHiAppEvent eventInfo.params.exception={\"message\":\"Unexpected Text in JSON: Empty Text\",\"name\":\"SyntaxError\",\"stack\":\"    at anonymous (entry|entry|1.0.0|src/main/ets/pages/Index.ts:163:22)\\n\",\"thread_name\":\"amples.eventsub\"}\nHiAppEvent eventInfo.params.hilog.size=100\nHiAppEvent eventInfo.params.process_life_time=25\nHiAppEvent eventInfo.params.memory={\"rss\":181964,\"sys_avail_mem\":1230456,\"sys_free_mem\":676940,\"sys_total_mem\":2001932}\nHiAppEvent eventInfo.params.external_log=[\"/data/storage/el2/log/hiappevent/APP_CRASH_1503045716408_2610.log\"]\nHiAppEvent eventInfo.params.log_over_limit=false\nHiAppEvent eventInfo.params.test_data=100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "从faultlogger接口迁移崩溃事件",
      children: "从Faultlogger接口迁移崩溃事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger",
        children: "@ohos.faultLogger (故障日志获取)"
      }), "接口从API version 18开始废弃使用, 不再维护。后续版本推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent",
        children: "@ohos.hiviewdfx.hiAppEvent"
      }), "订阅崩溃事件。该章节指导开发者从Faultlogger接口迁移至hiAppEvent接口，来订阅崩溃事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Faultlogger的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger#faulttype",
        children: "FaultType"
      }), "里定义的CPP_CRASH和JS_CRASH都属于崩溃故障类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hiAppEvent的hiAppEvent.addWatcher接口中设置事件名称为hiAppEvent.event.APP_CRASH、事件领域为hiAppEvent.domain.OS，可以订阅崩溃事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events#params%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "hiAppEvent.AppEventInfo.params"
      }), "中的crash_type字段可以区分具体是哪种崩溃事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "两者对应关系如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Faultlogger.FaultType"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "hiAppEvent.AppEventInfo.params.crash_type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPP_CRASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeCrash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JS_CRASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JsError"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger#faultloginfo",
        children: "FaultLogInfo"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events#params%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "hiAppEvent.AppEventInfo.params"
      }), "的对应关系如下："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Faultlogger.FaultLogInfo"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "hiAppEvent.AppEventInfo.params"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "crash_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型不同，Faultlogger中是故障类型枚举，hiAppEvent中是字符串类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bundle_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fullLog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "external_log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fullLog为故障日志全文。external_log为故障日志文件应用沙箱路径，访问该路径的文件，可以得到故障日志全文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "external_log文件内容中的Reason字段"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "summary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "external_log文件内容中的一部分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPP_CRASH的summary对应external_log文件内容中的Fault thread info字段；JS_CRASH的summary对应external_log文件内容中的Error name、Error message、 Stacktrace、HybridStack字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger#faultloggerquery9",
        children: "FaultLogger.query(使用callback回调)"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger#faultloggerquery9-1",
        children: "FaultLogger.query(使用Promise回调)"
      }), "都可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent#hiappeventaddwatcher",
        children: "hiAppEvent.addWatcher"
      }), "实现相同功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
        children: "开发步骤"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%AA%8C%E8%AF%81%E8%A7%82%E5%AF%9F%E8%80%85%E6%98%AF%E5%90%A6%E8%AE%A2%E9%98%85%E5%88%B0%E5%B4%A9%E6%BA%83%E4%BA%8B%E4%BB%B6",
        children: "验证观察者是否订阅到崩溃事件"
      }), "，了解使用hiAppEvent订阅崩溃事件（ArkTS）的具体步骤。"]
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
667236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
74582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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