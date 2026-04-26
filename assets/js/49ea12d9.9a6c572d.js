"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["278861"], {
223820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_hiappevent_watcher_app_events_arkts_hiappevent_watcher_app_events_arkts_md_49e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-hiappevent-watcher-app-events-arkts-hiappevent-watcher-app-events-arkts-md-49e.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_hiappevent_watcher_app_events_arkts_hiappevent_watcher_app_events_arkts_md_49e_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-arkts/hiappevent-watcher-app-events-arkts","title":"事件订阅（ArkTS）","description":"HiAppEvent提供了事件订阅接口，用于获取应用的事件。","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-arkts/hiappevent-watcher-app-events-arkts.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-arkts","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-arkts/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"事件订阅（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-events-arkts","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"事件订阅简介","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/event-subscription-overview/"},"next":{"title":"事件订阅（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-arkts/hiappevent-watcher-app-events-arkts.md


const frontMatter = {
	title: '事件订阅（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-events-arkts',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '事件订阅（ArkTS）';

const assets = {

};



const toc = [{
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "事件订阅arkts",
        children: "事件订阅（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiAppEvent提供了事件订阅接口，用于获取应用的事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API接口使用说明，包括参数使用限制和具体取值范围。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent",
        children: "@ohos.hiviewdfx.hiAppEvent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "订阅接口功能介绍"
        })
      }), "："]
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
            children: "添加应用的事件观察者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeWatcher(watcher: Watcher): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除应用的事件观察者。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758934)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addWatcher接口涉及I/O操作。在对性能敏感的业务场景中，开发者应根据实际需要确定该接口是在主线程还是在子线程中调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果选择在子线程中调用addWatcher，需要确保该子线程在整个接口使用周期内不会被销毁，以免影响接口的正常工作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
        children: "多线程并发概述"
      }), "，以实现在子线程中调用接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "打点接口功能介绍"
        })
      }), "："]
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
            children: "write(info: AppEventInfo, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用事件异步打点方法，使用callback方式作为异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "write(info: AppEventInfo): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用事件异步打点方法，使用Promise方式作为异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(592259)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "write接口涉及I/O操作，执行时间通常在毫秒级别。因此，开发者应根据实际业务需求，确定该接口是在主线程还是在子线程中调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
        children: "多线程并发概述"
      }), "，以实现在子线程中调用接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件订阅开发指导",
      children: "事件订阅开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以订阅崩溃事件（系统事件）和按钮点击事件（应用事件）为例，说明开发步骤。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个ArkTS应用工程，编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，导入所需的依赖模块："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hiAppEvent, hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets” 文件，在onCreate函数中添加对崩溃事件、按钮点击事件的订阅。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅崩溃事件，采用OnReceive类型观察者的订阅方式，观察者接收到事件后会立即触发OnReceive()回调。编辑“EntryAbility.ets”文件，定义OnReceive类型观察者相关方法："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hiAppEvent.addWatcher({\n  // 开发者可以自定义观察者名称，系统会使用名称来标识不同的观察者\n  name: 'AppCrashWatcher',\n  // 订阅过滤条件，这里是订阅了系统事件中的崩溃事件\n  appEventFilters: [\n    {\n      domain: hiAppEvent.domain.OS,\n      names: [hiAppEvent.event.APP_CRASH]\n    }\n  ],\n  // 实现onReceive回调，监听到事件后实时回调\n  onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {\n    hilog.info(0x0000, 'testTag', 'AppEvents HiAppEvent success to read event with onReceive callback from ArkTS');\n    hilog.info(0x0000, 'testTag', `domain=${domain}`);\n    for (const eventGroup of appEventGroups) {\n      hilog.info(0x0000, 'testTag', `AppEvents HiAppEvent eventName=${eventGroup.name}`);\n      for (const eventInfo of eventGroup.appEventInfos) {\n        // 开发者可以获取到崩溃事件发生的时间戳\n        hilog.info(0x0000, 'testTag', `AppEvents HiAppEvent eventInfo.params.time=${JSON.stringify(eventInfo.params['time'])}`);\n        // 开发者可以获取到崩溃应用的包名\n        hilog.info(0x0000, 'testTag', `AppEvents HiAppEvent eventInfo.params.bundle_name=${JSON.stringify(eventInfo.params['bundle_name'])}`);\n        // 开发者可以获取到崩溃事件发生时的故障日志文件\n        hilog.info(0x0000, 'testTag', `AppEvents HiAppEvent eventInfo.params.external_log=${JSON.stringify(eventInfo.params['external_log'])}`);\n      }\n    }\n  }\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅按钮点击事件，采用OnTrigger类型观察者的订阅方式。需满足triggerCondition设置的条件，才能触发OnTrigger()回调。编辑“EntryAbility.ets”文件，定义OnTrigger类型观察者相关方法："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hiAppEvent.addWatcher({\n  // 开发者可以自定义观察者名称，系统会使用名称来标识不同的观察者\n  name: 'ButtonClickWatcher',\n  // 开发者可以订阅感兴趣的应用事件，此处是订阅了按钮事件\n  appEventFilters: [{ domain: 'button' }],\n  // 开发者可以设置订阅回调触发的条件，此处是设置为事件打点数量满足1个\n  triggerCondition: { row: 1 },\n  // 开发者可以自行实现订阅回调函数，以便对订阅获取到的事件打点数据进行自定义处理\n  onTrigger: (curRow: number, curSize: number, holder: hiAppEvent.AppEventPackageHolder) => {\n    // 如果返回的holder对象为null，表示订阅过程发生异常。因此，在记录错误日志后直接返回\n    if (holder == null) {\n      hilog.error(0x0000, 'testTag', 'AppEvents HiAppEvent holder is null');\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'AppEvents HiAppEvent success to read event with onTrigger callback from ArkTS');\n    hilog.info(0x0000, 'testTag', `AppEvents HiAppEvent onTrigger: curRow=%{public}d, curSize=%{public}d`, curRow, curSize);\n    let eventPkg: hiAppEvent.AppEventPackage | null = null;\n    // 根据设置阈值大小（默认为1条事件）去获取订阅事件包，直到将订阅数据全部取出\n    // 返回的事件包对象为null，表示当前订阅数据已被全部取出，此次订阅回调触发结束\n    while ((eventPkg = holder.takeNext()) != null) {\n      // 开发者可以对事件包中的事件打点数据进行自定义处理，此处是将事件打点数据打印在日志中\n      hilog.info(0x0000, 'testTag', `AppEvents HiAppEvent eventPkg.packageId=%{public}d`, eventPkg.packageId);\n      hilog.info(0x0000, 'testTag', `AppEvents HiAppEvent eventPkg.row=%{public}d`, eventPkg.row);\n      hilog.info(0x0000, 'testTag', `AppEvents HiAppEvent eventPkg.size=%{public}d`, eventPkg.size);\n      for (const eventInfo of eventPkg.data) {\n        hilog.info(0x0000, 'testTag', `AppEvents HiAppEvent eventPkg.info=%{public}s`, eventInfo);\n      }\n    }\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets” 文件，导入依赖模块："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hiAppEvent, hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets” 文件，新增“WatchAppCrash ArkTS&C++”按钮触发崩溃事件；新增“writeEvent ArkTS”按钮，在按钮点击的函数中进行事件打点。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发崩溃事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('WatchAppCrash ArkTS&C++')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    // 在按钮点击函数中构造一个crash场景，触发崩溃事件\n    let result: object = JSON.parse('');\n  })\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在按钮点击的函数中进行事件打点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('writeEvent ArkTS')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    // 在按钮点击函数中进行事件打点，以记录按钮点击事件\n    let eventParams: Record<string, number> = {'clickTime': 100};\n    let eventInfo: hiAppEvent.AppEventInfo = {\n      // 事件领域定义\n      domain: 'button',\n      // 事件名称定义\n      name: 'click',\n      // 事件类型定义\n      eventType: hiAppEvent.EventType.BEHAVIOR,\n      // 事件参数定义\n      params: eventParams,\n    };\n    hiAppEvent.write(eventInfo).then(() => {\n      hilog.info(0x0000, 'testTag', `AppEvents writeEvent ArkTS success`);\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', `AppEvents HiAppEvent err.code: ${err.code}, err.message: ${err.message}`);\n    });\n  })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程。在应用界面中点击“WatchAppCrash ArkTS&C++”按钮，触发崩溃事件。应用退出后，重新打开应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在HiLog窗口搜索“AppEvents”关键字，查看应用处理崩溃事件数据的日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AppEvents HiAppEvent success to read event with onReceive callback from ArkTS\nAppEvents HiAppEvent eventName=APP_CRASH\nAppEvents HiAppEvent eventInfo.params.time=1750747995874\nAppEvents HiAppEvent eventInfo.params.bundle_name=\"com.example.txxxxx\"\nAppEvents HiAppEvent eventInfo.params.external_log=\n[\"/data/storage/el2/log/hiappevent/APP_CRASH_1750747996042_28962.log\"]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程。在应用界面中点击“writeEvent ArkTS”按钮，触发按钮点击事件并打点。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在HiLog窗口搜索“AppEvents”关键字，查看应用处理按钮点击事件数据的日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AppEvents HiAppEvent success to read event with onTrigger callback from ArkTS\nAppEvents HiAppEvent onTrigger: curRow=1, curSize=121\nAppEvents HiAppEvent eventPkg.packageId=0\nAppEvents HiAppEvent eventPkg.row=1\nAppEvents HiAppEvent eventPkg.size=121\nAppEvents HiAppEvent eventPkg.info={\"domain_\":\"button\",\"name_\":\"click\",\"type_\":4,\"time_\":1750754529033,\"tz_\":\"\",\"pid_\":40664,\"tid_\":40664,\"clickTime\":100}\nAppEvents writeEvent ArkTS success\n"
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
758934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
592259(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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