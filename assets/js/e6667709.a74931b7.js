"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["654622"], {
381741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_freeze_events_hiappevent_watcher_freeze_events_arkts_hiappevent_watcher_freeze_events_arkts_md_e66_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-freeze-events-hiappevent-watcher-freeze-events-arkts-hiappevent-watcher-freeze-events-arkts-md-e66.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_freeze_events_hiappevent_watcher_freeze_events_arkts_hiappevent_watcher_freeze_events_arkts_md_e66_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-arkts/hiappevent-watcher-freeze-events-arkts","title":"订阅应用冻屏事件（ArkTS）","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-arkts/hiappevent-watcher-freeze-events-arkts.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-arkts","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-arkts/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"订阅应用冻屏事件（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-freeze-events-arkts","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用冻屏事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events/"},"next":{"title":"订阅应用冻屏事件（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-arkts/hiappevent-watcher-freeze-events-arkts.md


const frontMatter = {
	title: '订阅应用冻屏事件（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-freeze-events-arkts',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅应用冻屏事件（ArkTS）';

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
  "value": "验证观察者是否订阅到应用冻屏事件",
  "id": "验证观察者是否订阅到应用冻屏事件",
  "level": 3
}, {
  "value": "从Faultlogger接口迁移应用冻屏事件",
  "id": "从faultlogger接口迁移应用冻屏事件",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "订阅应用冻屏事件arkts",
        children: "订阅应用冻屏事件（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何使用HiAppEvent提供的ArkTS接口订阅应用冻屏事件。接口的详细使用说明（参数限制、取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent",
        children: "@ohos.hiviewdfx.hiAppEvent"
      }), "。"]
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
      children: "以订阅应用冻屏事件为例，说明开发步骤。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个ArkTS应用工程，编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，导入依赖模块，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hiAppEvent, hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，在onCreate函数中设置事件的自定义参数，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " // 开发者完成参数键值对赋值\n let params: Record<string, hiAppEvent.ParamType> = {\n   \"test_data\": 100,\n };\n // 开发者可以设置应用冻屏事件的自定义参数\n hiAppEvent.setEventParam(params, hiAppEvent.domain.OS, hiAppEvent.event.APP_FREEZE).then(() => {\n   hilog.info(0x0000, 'testTag', `HiAppEvent success to set event param`);\n }).catch((err: BusinessError) => {\n   hilog.error(0x0000, 'testTag', `HiAppEvent code: ${err.code}, message: ${err.message}`);\n });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，在onCreate函数中添加系统事件的订阅，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  hiAppEvent.addWatcher({\n   // 开发者可以自定义观察者名称，系统会使用名称来标识不同的观察者\n   name: \"watcher\",\n   // 开发者可以订阅感兴趣的系统事件，此处是订阅了应用冻屏事件\n   appEventFilters: [\n     {\n       domain: hiAppEvent.domain.OS,\n       names: [hiAppEvent.event.APP_FREEZE]\n     }\n   ],\n   // 开发者可以自行实现订阅实时回调函数，以便对订阅获取到的事件数据进行自定义处理\n   onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {\n     hilog.info(0x0000, 'testTag', `HiAppEvent onReceive: domain=${domain}`);\n     for (const eventGroup of appEventGroups) {\n       // 开发者可以根据事件集合中的事件名称区分不同的系统事件\n       hilog.info(0x0000, 'testTag', `HiAppEvent eventName=${eventGroup.name}`);\n       for (const eventInfo of eventGroup.appEventInfos) {\n         // 开发者可以对事件集合中的事件数据进行自定义处理，此处是将事件数据打印在日志中\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.domain=${eventInfo.domain}`);\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.name=${eventInfo.name}`);\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.eventType=${eventInfo.eventType}`);\n         // 开发者可以获取到应用冻屏事件发生的时间戳\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.time=${eventInfo.params['time']}`);\n         // 开发者可以获取到应用冻屏事件发生时应用的前后台状态\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.foreground=${eventInfo.params['foreground']}`);\n         // 开发者可以获取到应用冻屏事件发生时应用的版本信息\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.bundle_version=${eventInfo.params['bundle_version']}`);\n         // 开发者可以获取到应用冻屏事件发生时应用的包名\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.bundle_name=${eventInfo.params['bundle_name']}`);\n         // 开发者可以获取到应用冻屏事件发生时应用的进程名称\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.process_name=${eventInfo.params['process_name']}`);\n         // 开发者可以获取到应用冻屏事件发生时应用的进程id\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.pid=${eventInfo.params['pid']}`);\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.uid=${eventInfo.params['uid']}`);\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.uuid=${eventInfo.params['uuid']}`);\n         // 开发者可以获取到应用冻屏事件发生的异常类型、异常原因\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.exception=${JSON.stringify(eventInfo.params['exception'])}`);\n         // 开发者可以获取到应用冻屏事件发生时日志信息\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.hilog.size=${eventInfo.params['hilog'].length}`);\n         // 开发者可以获取到应用冻屏事件发生时主线程未处理消息\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.event_handler.size=${eventInfo.params['event_handler'].length}`);\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.event_handler_size_3s=${eventInfo.params['event_handler_size_3s']}`);\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.event_handler_size_6s=${eventInfo.params['event_handler_size_6s']}`);\n         // 开发者可以获取到应用冻屏事件发生时同步binder调用信息\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.peer_binder.size=${eventInfo.params['peer_binder'].length}`);\n         // 开发者可以获取到应用冻屏事件发生时全量线程调用栈\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.threads.size=${eventInfo.params['threads'].length}`);\n         // 开发者可以获取到应用冻屏事件发生时内存信息\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.memory=${JSON.stringify(eventInfo.params['memory'])}`);\n         // 开发者可以获取到应用冻屏事件发生时的故障日志文件\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.external_log=${JSON.stringify(eventInfo.params['external_log'])}`);\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.log_over_limit=${eventInfo.params['log_over_limit']}`);\n         // 开发者可以获取到应用冻屏事件的自定义数据test_data\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.test_data=${eventInfo.params['test_data']}`);\n         // 开发者可以获取到应用冻屏事件的故障进程存活时间\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.process_life_time=${eventInfo.params['process_life_time']}`);\n       }\n     }\n   }\n });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，添加按钮并在其onClick函数构造应用无响应场景，以触发应用冻屏事件，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " Button(\"appFreeze\").onClick(()=>{\n   // 在按钮点击函数中构造一个freeze场景，触发应用冻屏事件\n   setTimeout(() => {\n     let t = Date.now();\n     while (Date.now() - t <= 15000) {}\n   }, 5000);\n })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程，然后在应用界面中点击按钮“appFreeze”，触发一次应用冻屏事件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "验证观察者是否订阅到应用冻屏事件",
      children: "验证观察者是否订阅到应用冻屏事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用无响应退出后，重新进入应用可以在Log窗口看到对系统事件数据的处理日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HiAppEvent onReceive: domain=OS\nHiAppEvent eventName=APP_FREEZE\nHiAppEvent eventInfo.domain=OS\nHiAppEvent eventInfo.name=APP_FREEZE\nHiAppEvent eventInfo.eventType=1\nHiAppEvent eventInfo.params.time=1711440881768\nHiAppEvent eventInfo.params.foreground=true\nHiAppEvent eventInfo.params.bundle_version=1.0.0\nHiAppEvent eventInfo.params.bundle_name=com.example.myapplication\nHiAppEvent eventInfo.params.process_name=com.example.myapplication\nHiAppEvent eventInfo.params.pid=3197\nHiAppEvent eventInfo.params.uid=20010043\nHiAppEvent eventInfo.params.uuid=27fac7098da46efe1cae9904946ec06c5acc91689c365efeefb7a23a0c37df77\nHiAppEvent eventInfo.params.exception={\"message\":\"App main thread is not response!\",\"name\":\"THREAD_BLOCK_6S\"}\nHiAppEvent eventInfo.params.hilog.size=77\nHiAppEvent eventInfo.params.event_handler.size=6\nHiAppEvent eventInfo.params.event_handler_size_3s=5\nHiAppEvent eventInfo.params.event_handler_size_6s=6\nHiAppEvent eventInfo.params.peer_binder.size=0\nHiAppEvent eventInfo.params.threads.size=28\nHiAppEvent eventInfo.params.memory={\"pss\":0,\"rss\":0,\"sys_avail_mem\":1361464,\"sys_free_mem\":796232,\"sys_total_mem\":1992340,\"vm_heap_total_size\":\"9961472\",\"vm_heap_used_size\":\"7596424\",\"vss\":0}\nHiAppEvent eventInfo.params.external_log=[\"/data/storage/el2/log/hiappevent/APP_FREEZE_1711440899240_3197.log\"]\nHiAppEvent eventInfo.params.log_over_limit=false\nHiAppEvent eventInfo.params.test_data=100\nHiAppEvent eventInfo.params.process_life_time=18\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若应用无法启动或长时间未启动，开发者可以参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts",
            children: "使用FaultLogExtensionAbility订阅事件"
          }), "回调重写的函数，进行延迟上报。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "从faultlogger接口迁移应用冻屏事件",
      children: "从Faultlogger接口迁移应用冻屏事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger",
        children: "@ohos.faultLogger (故障日志获取)"
      }), "接口从API version 18开始废弃使用, 不再维护。后续版本推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent",
        children: "@ohos.hiviewdfx.hiAppEvent"
      }), "订阅应用冻屏事件。该章节指导开发者从Faultlogger接口迁移至hiAppEvent接口，来订阅应用冻屏事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Faultlogger的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger#faulttype",
        children: "FaultType"
      }), "里定义的APP_FREEZE即为应用冻屏故障类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hiAppEvent的hiAppEvent.addWatcher接口中设置事件名称为hiAppEvent.event.APP_FREEZE、事件领域为hiAppEvent.domain.OS，可以订阅应用冻屏事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events#params%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "hiAppEvent.AppEventInfo.params"
      }), "中exception字段的name子字段可以区分具体是哪种应用冻屏事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger#faultloginfo",
        children: "FaultLogInfo"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events#params%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "hiAppEvent.AppEventInfo.params"
      }), "的字段对应关系如下："]
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
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exception字段中的name子字段"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型不同，Faultlogger中是故障类型枚举，hiAppEvent中是字符串类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bundle_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fullLog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "external_log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fullLog为故障日志全文。external_log为故障日志文件在应用沙箱中的具体路径(/data/storage/el2/log/)，访问该路径的文件，可以得到故障日志全文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "external_log文件内容中的Reason字段"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "summary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "external_log文件内容中特定段落"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APP_FREEZE的summary对应external_log文件中从appfreeze:进程名所在行到DisplayPowerInfo:所在行的这一段内容。"
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
        href: "#%E9%AA%8C%E8%AF%81%E8%A7%82%E5%AF%9F%E8%80%85%E6%98%AF%E5%90%A6%E8%AE%A2%E9%98%85%E5%88%B0%E5%BA%94%E7%94%A8%E5%86%BB%E5%B1%8F%E4%BA%8B%E4%BB%B6",
        children: "验证观察者是否订阅到应用冻屏事件"
      }), "，了解使用hiAppEvent订阅应用冻屏事件（ArkTS）的具体步骤。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/exception-handling",
          children: "应用异常处理"
        })
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