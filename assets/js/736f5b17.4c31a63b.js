"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["696729"], {
823594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_fault_log_extension_app_events_arkts_fault_log_extension_app_events_arkts_md_736_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-fault-log-extension-app-events-arkts-fault-log-extension-app-events-arkts-md-736.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_fault_log_extension_app_events_arkts_fault_log_extension_app_events_arkts_md_736_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts/fault-log-extension-app-events-arkts","title":"使用FaultLogExtensionAbility订阅事件","description":"从API version 21开始，可以在FaultLogExtensionAbility中使用HiAppEvent事件订阅接口，实现应用故障事件（仅包括崩溃事件和应用冻屏事件）的延迟通知。应用因崩溃或冻屏退出后，无法启动或长时间未启动的场景下，可以不依赖应用启动实现故障事件信息的订阅回调。FaultLogExtensionAbility仅用于补充处理故障事件，不能替代主进程正常启动时进行故障事件处理。","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts/fault-log-extension-app-events-arkts.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用FaultLogExtensionAbility订阅事件","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fault-log-extension-app-events-arkts","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HiAppEvent常见问题","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-faq/"},"next":{"title":"HiTraceMeter介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts/fault-log-extension-app-events-arkts.md


const frontMatter = {
	title: '使用FaultLogExtensionAbility订阅事件',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fault-log-extension-app-events-arkts',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '使用FaultLogExtensionAbility订阅事件';

const assets = {

};



const toc = [{
  "value": "原理机制说明",
  "id": "原理机制说明",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "事件订阅开发指导",
  "id": "事件订阅开发指导",
  "level": 2
}, {
  "value": "调测验证",
  "id": "调测验证",
  "level": 2
}, {
  "value": "FaultLogExtensionAbility常见问题",
  "id": "faultlogextensionability常见问题",
  "level": 2
}, {
  "value": "FaultLogExtensionAbility进程没有接收到回调事件",
  "id": "faultlogextensionability进程没有接收到回调事件",
  "level": 3
}, {
  "value": "系统事件重复上报",
  "id": "系统事件重复上报",
  "level": 3
}, {
  "value": "部分事件丢失",
  "id": "部分事件丢失",
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
        id: "使用faultlogextensionability订阅事件",
        children: "使用FaultLogExtensionAbility订阅事件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，可以在FaultLogExtensionAbility中使用HiAppEvent事件订阅接口，实现应用故障事件（仅包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events",
        children: "崩溃事件"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events",
        children: "应用冻屏事件"
      }), "）的延迟通知。应用因崩溃或冻屏退出后，无法启动或长时间未启动的场景下，可以不依赖应用启动实现故障事件信息的订阅回调。FaultLogExtensionAbility仅用于补充处理故障事件，不能替代", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/process-model-stage#%E5%9F%BA%E6%9C%AC%E8%BF%9B%E7%A8%8B%E7%B1%BB%E5%9E%8B",
        children: "主进程"
      }), "正常启动时进行故障事件处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用发生崩溃或者冻屏事件30分钟后，系统拉起FaultLogExtensionAbility进程，实际拉起时间可能会因为系统调度有所延迟。该30分钟是设备在非休眠状态下累积的时间。测试时需要保持测试设备屏幕常亮，防止设备休眠。灭屏状态下设备可能会休眠，导致实际接收到回调的时间延长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "原理机制说明",
      children: "原理机制说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FaultLogExtensionAbility的原理机制如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(673342)/* ["default"] */.A) + "",
        width: "1453",
        height: "1025"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["主进程启动后，在主进程中添加事件观察者A和事件观察者B，其中A包含正常实现的回调处理函数以及事件订阅过滤条件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent#appeventfilter",
          children: "appEventFilter"
        }), "，应用发生故障后正常重启会由A的回调处理HiAppEvent事件；B的回调处理函数为空实现，仅用于生成需要保存的事件订阅过滤条件。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "事件观察者A和B的事件订阅过滤条件会被保存到应用沙箱中。当应用移除事件观察者时，应用沙箱中保存的相应观察者的事件订阅过滤条件也会被删除。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用业务运行过程中发生崩溃事件或应用冻屏事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统服务感知到应用故障后，采集应用故障信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统服务采集完应用故障现场信息后，应用退出。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统侧根据应用订阅的HiAppEvent订阅事件类型，将采集到的应用故障信息保存进应用的沙箱中。若应用及时重启，HiAppEvent检测到应用沙箱中的未回调处理的故障事件，并且这些事件满足事件观察者A的过滤条件，会触发事件观察者A的回调函数处理事件，由于事件观察者B的回调为空实现不会对相同事件重复处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若应用未及时重启处理故障事件，故障发生后系统服务会创建一个延时30分钟后执行的任务，用于拉起应用的FaultLogExtensionAbility进程。如果任务队列中已存在当前进程的延时拉起任务，则不再创建新的延时任务，无论事件是否已被处理，FaultLogExtensionAbility进程都会在10秒后退出。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在FaultLogExtensionAbility进程中添加事件观察者B，该事件观察者B需要开发者自行实现正常的回调处理函数，且与之前主进程添加的事件观察者B同名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于FaultLogExtensionAbility进程添加事件观察者B和主进程添加的事件观察者B同名，应用沙箱会覆盖之前保存的B的事件订阅过滤条件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HiAppEvent检测到应用沙箱中存在未回调处理的故障事件，当这些故障事件满足FaultLogExtensionAbility进程中事件观察者B的过滤条件时，会触发事件观察者B的回调处理逻辑。沙箱中存储的未回调的事件信息，会在故障事件被回调处理后删除。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FaultLogExtensionAbility被拉起后只有10s的时间用以完成故障处理。超时没有处理完成可以在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability#ondisconnect",
          children: "onDisconnect"
        }), "中保存状态。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从开机或上次拉起FaultLogExtensionAbility后，应用首次触发崩溃或冻屏开始计时。在拉起FaultLogExtensionAbility前反复触发崩溃或冻屏事件均不会重新计时。计时30分钟后拉起FaultLogExtensionAbility进程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FaultLogExtensionAbility自身崩溃时，不会再次被系统服务拉起。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FaultLogExtensionAbility调用限制的API名单见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability#%E9%99%84%E5%BD%95",
          children: "附录"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FaultLogExtensionAbility进程中订阅的事件需要在主进程中使用HiAppEvent进行订阅。否则，可能会发生", (0,jsx_runtime.jsx)(_components.a, {
          href: "#faultlogextensionability%E8%BF%9B%E7%A8%8B%E6%B2%A1%E6%9C%89%E6%8E%A5%E6%94%B6%E5%88%B0%E5%9B%9E%E8%B0%83%E4%BA%8B%E4%BB%B6",
          children: "FaultLogExtensionAbility进程没有接收到回调事件"
        }), "的问题。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FaultLogExtensionAbility进程中仅订阅崩溃、应用冻屏事件，不订阅除这两类外的系统事件。否则，可能会发生", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%B3%BB%E7%BB%9F%E4%BA%8B%E4%BB%B6%E9%87%8D%E5%A4%8D%E4%B8%8A%E6%8A%A5",
          children: "系统事件重复上报"
        }), "的问题。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["主进程用于延迟回调处理事件观察者B和非延迟处理的事件观察者A定义名字不能重复。否则，可能会发生", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%83%A8%E5%88%86%E4%BA%8B%E4%BB%B6%E4%B8%A2%E5%A4%B1",
          children: "部分事件丢失"
        }), "的问题。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接入FaultLogExtensionAbility能力后，若应用故障发生后设备重启，重启后不会拉起FaultLogExtensionAbility进程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API接口使用说明，包括参数使用限制和具体取值范围。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability",
        children: "@ohos.hiviewdfx.FaultLogExtensionAbility (故障延迟通知)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅适用于Stage模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "订阅接口功能介绍"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability#onconnect",
              children: "onConnect(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生命周期回调函数，系统连接FaultLogExtensionAbility时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability#ondisconnect",
              children: "onDisconnect(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生命周期回调函数，系统断开FaultLogExtensionAbility时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability#onfaultreportready",
              children: "onFaultReportReady(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生命周期回调函数，系统准备好故障信息后，回调该函数通知ability进行处理。回调函数中的业务逻辑建议不超过10s。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件订阅开发指导",
      children: "事件订阅开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以订阅appfreeze事件为例，说明开发步骤。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个ArkTS应用工程。编辑工程中的“entry > src > main > ets > pages > Index.ets”文件。构造appfreeze故障的代码示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Button(\"AppInput\")\n    .onClick(() => {\n      let t = Date.now();\n      while (Date.now() - t <= 15000) {}\n    })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入hiAppEvent依赖模块\nimport { hiAppEvent } from '@kit.PerformanceAnalysisKit';\n    // 略去的代码...\n    // 在onCreate函数中添加系统事件的订阅,观察者A\n    hiAppEvent.addWatcher ({\n       // 开发者可以自定义观察者名称，系统会使用名称来标识不同的观察者\n       name: \"EntryAbilityWatcherNormal\",\n       // 开发者可以订阅感兴趣的系统事件，此处是订阅了应用冻屏事件\n       appEventFilters: [\n           {\n               domain: hiAppEvent.domain.OS,\n               names: [hiAppEvent.event.APP_FREEZE]\n           }\n       ],\n       // 故障发生后，正常重启执行观察者A处理事件回调\n       onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {\n           // 略去的代码...\n       }\n    });\n    // 在onCreate函数中添加系统事件的订阅，观察者B\n    hiAppEvent.addWatcher ({\n       // 开发者可以自定义观察者名称，系统会使用名称来标识不同的观察者\n       name: \"EntryAbilityWatcherExtension\",\n       // 开发者可以订阅感兴趣的系统事件，此处是订阅了应用冻屏事件\n       appEventFilters: [\n           {\n               domain: hiAppEvent.domain.OS,\n               names: [hiAppEvent.event.APP_FREEZE]\n           }\n       ],\n       // 空实现，仅用于生成过滤规则，使故障事件在被处理前保留在应用沙箱内；\n       // 若应用正常重启，观察者A已处理相同事件，观察者B通过空处理消耗从沙箱获取的事件，不对事件重复处理。\n       onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {\n\n       }\n    });\n    // 略去的代码...\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“entry > src > main > ets” 路径下，新建faultlogextension/MyFaultLogExtensionAbility.ets文件。新建类MyFaultLogExtensionAbility继承FaultLogExtensionAbility，重写订阅功能相关的三个接口函数，代码示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入需要继承的类FaultLogExtensionAbility\nimport { FaultLogExtensionAbility, hilog, hiAppEvent } from '@kit.PerformanceAnalysisKit';\n\nexport default class MyFaultLogExtensionAbility extends FaultLogExtensionAbility {\n // 重写onConnect函数\n onConnect() {\n   hilog.info(0x0000, 'testTag', `FaultLogExtensionAbility onConnect`);\n }\n\n // 重写onDisconnect函数\n onDisconnect() {\n   hilog.info(0x0000, 'testTag', `FaultLogExtensionAbility onDisconnect`);\n }\n\n // 重写onFaultReportReady函数\n onFaultReportReady() {\n   hilog.info(0x0000, 'testTag', `FaultLogExtensionAbility onFaultReportReady`);\n   hiAppEvent.addWatcher({\n     // 观察者名称，保持与主进程事件观察者B一致\n     name: \"EntryAbilityWatcherExtension\",\n     // 开发者可以订阅感兴趣的系统事件，此处是订阅了应用冻屏事件\n     appEventFilters: [\n       {\n         domain: hiAppEvent.domain.OS,\n         names: [hiAppEvent.event.APP_FREEZE]\n       }\n     ],\n     // 开发者可以自行实现订阅回调函数，以便对订阅获取到的事件数据进行自定义处理\n     onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {\n       hilog.info(0x0000, 'testTag', `HiAppEvent onReceive: domain=${domain}`);\n       for (const eventGroup of appEventGroups) {\n         // 开发者可以根据事件集合中的事件名称区分不同的系统事件\n         hilog.info(0x0000, 'testTag', `HiAppEvent eventName=${eventGroup.name}`);\n         for (const eventInfo of eventGroup.appEventInfos) {\n           // 开发者可以对事件集合中的事件数据进行自定义处理，此处是将事件数据打印在日志中\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.domain=${eventInfo.domain}`);\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.name=${eventInfo.name}`);\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.eventType=${eventInfo.eventType}`);\n           // 开发者可以获取到应用冻屏事件发生的时间戳\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.time=${eventInfo.params['time']}`);\n           // 开发者可以获取到应用冻屏事件发生时应用的前后台状态\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.foreground=${eventInfo.params['foreground']}`);\n           // 开发者可以获取到应用冻屏事件发生时应用的版本信息\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.bundle_version=${eventInfo.params['bundle_version']}`);\n           // 开发者可以获取到应用冻屏事件发生时应用的包名\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.bundle_name=${eventInfo.params['bundle_name']}`);\n           // 开发者可以获取到应用冻屏事件发生时应用的进程名称\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.process_name=${eventInfo.params['process_name']}`);\n           // 开发者可以获取到应用冻屏事件发生时应用的进程id\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.pid=${eventInfo.params['pid']}`);\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.uid=${eventInfo.params['uid']}`);\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.uuid=${eventInfo.params['uuid']}`);\n           // 开发者可以获取到应用冻屏事件发生的异常类型、异常原因\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.exception=${JSON.stringify(eventInfo.params['exception'])}`);\n           // 开发者可以获取到应用冻屏事件发生时日志信息\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.hilog.size=${eventInfo.params['hilog'].length}`);\n           // 开发者可以获取到应用冻屏事件发生时主线程未处理消息\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.event_handler=${eventInfo.params['event_handler']}`);\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.event_handler_size_3s=${eventInfo.params['event_handler_size_3s']}`);\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.event_handler_size_6s=${eventInfo.params['event_handler_size_6s']}`);\n           // 开发者可以获取到应用冻屏事件发生时同步binder调用信息\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.peer_binder=${eventInfo.params['peer_binder']}`);\n           // 开发者可以获取到应用冻屏事件发生时全量线程调用栈\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.threads.size=${eventInfo.params['threads'].length}`);\n           // 开发者可以获取到应用冻屏事件发生时内存信息\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.memory=${JSON.stringify(eventInfo.params['memory'])}`);\n           // 开发者可以获取到应用冻屏事件发生时的故障日志文件\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.external_log=${JSON.stringify(eventInfo.params['external_log'])}`);\n           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.log_over_limit=${eventInfo.params['log_over_limit']}`);\n         }\n       }\n     }\n   });\n }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > module.json5” 文件，新增相关的extensionAbility信息，文件新增修改的部分示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"extensionAbilities\": [\n  {\n    \"name\" : \"MyFaultLogExtensionAbility\",\n    \"srcEntry\": \"./ets/faultlogextension/MyFaultLogExtensionAbility.ets\",\n    \"type\": \"faultLog\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击DevEco Studio界面的运行按钮，启动应用工程。在应用界面点击“AppInput”按钮，触发冻屏事件。应用退出后，应用和设备不得重启，等待30分钟左右。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HiLog窗口搜索“testTag”关键字，查看FaultLogExtensionAbility执行回调函数的结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FaultLogExtensionAbility onConnect\nFaultLogExtensionAbility onFaultReportReady\nHiAppEvent onReceive: domain=OS\nHiAppEvent eventName=APP_FREEZE\nHiAppEvent eventInfo.domain=OS\nHiAppEvent eventInfo.name=APP_FREEZE\nHiAppEvent eventInfo.eventType=1\n......\nFaultLogExtensionAbility onDisconnect\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示FaultLogExtensionAbility依次执行连接、处理和断开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faultlogextensionability常见问题",
      children: "FaultLogExtensionAbility常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "faultlogextensionability进程没有接收到回调事件",
      children: "FaultLogExtensionAbility进程没有接收到回调事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FaultLogExtensionAbility进程启动后，没有收到HiAppEvent订阅的回调。可能是以下原因导致："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在FaultLogExtensionAbility进程启动前，主进程已经订阅并处理了事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在FaultLogExtensionAbility进程中的订阅是应用安装后的首次订阅。HiAppEvent不感知在订阅操作前发生的事件，需要主进程中正常订阅相关事件，发生故障后HiAppEvent才会记录相关事件，在拉起FaultLogExtensionAbility后进行回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统事件重复上报",
      children: "系统事件重复上报"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统事件将通过HiAppEvent回调通知所有订阅了该事件的事件观察者。当FaultLogExtensionAbility进程与主进程同时存在，并且均订阅了同一个系统事件时，触发该系统事件后，两个进程皆将接收到相应的事件回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "部分事件丢失",
      children: "部分事件丢失"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用启动之后，事件观察者注册之前发生的事件丢失。检查是否注册了多个同名的事件观察者。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了保障事件不丢失，HiAppEvent在应用启动后，事件观察者注册前会先扫描应用上次退出前未移除的事件观察者的订阅过滤条件，并据此对事件进行订阅保存。重复注册相同名称的事件观察者，后一次注册的事件观察者信息会覆盖前一次的事件观察者信息，导致订阅过滤条件被覆盖，事件丢失。"
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
673342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958498-85635274071121ec96f8fb25c6075d8f.png");

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