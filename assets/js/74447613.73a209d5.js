"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["562010"], {
398577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_main_thread_jank_events_hiappevent_watcher_mainthreadjank_events_ndk_hiappevent_watcher_mainthreadjank_events_ndk_md_744_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-main-thread-jank-events-hiappevent-watcher-mainthreadjank-events-ndk-hiappevent-watcher-mainthreadjank-events-ndk-md-744.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_main_thread_jank_events_hiappevent_watcher_mainthreadjank_events_ndk_hiappevent_watcher_mainthreadjank_events_ndk_md_744_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-ndk/hiappevent-watcher-mainthreadjank-events-ndk","title":"订阅主线程超时事件（C/C++）","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-ndk/hiappevent-watcher-mainthreadjank-events-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"订阅主线程超时事件（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-mainthreadjank-events-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅主线程超时事件（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-arkts/"},"next":{"title":"任务执行超时事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-ndk/hiappevent-watcher-mainthreadjank-events-ndk.md


const frontMatter = {
	title: '订阅主线程超时事件（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-mainthreadjank-events-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅主线程超时事件（C/C++）';

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
  "value": "验证观察者是否订阅到主线程超时事件",
  "id": "验证观察者是否订阅到主线程超时事件",
  "level": 3
}, {
  "value": "移除并销毁事件观察者",
  "id": "移除并销毁事件观察者",
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
        id: "订阅主线程超时事件cc",
        children: "订阅主线程超时事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何使用HiAppEvent提供的C/C++接口订阅主线程超时事件。接口的详细使用说明（参数限制、取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h",
        children: "hiappevent.h"
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
            children: "int OH_HiAppEvent_AddWatcher(HiAppEvent_Watcher *watcher)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用事件观察者，以添加对应用事件的订阅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_HiAppEvent_RemoveWatcher(HiAppEvent_Watcher *watcher)"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取该示例工程依赖的jsoncpp文件，从", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/open-source-parsers/jsoncpp",
            children: "三方开源库jsoncpp代码仓"
          }), "下载源码的压缩包，并按照README的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amalgamated source"
            })
          }), "中介绍的操作步骤得到jsoncpp.cpp、json.h和json-forwards.h三个文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建Native C++工程，并将上述文件导入到新建工程内，目录结构如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  src:\n    main:\n      cpp:\n        json:\n          - json.h\n          - json-forwards.h\n        types:\n          libentry:\n            - index.d.ts\n        - CMakeLists.txt\n        - jsoncpp.cpp\n        - napi_init.cpp\n      ets:\n        entryability:\n          - EntryAbility.ets\n        pages:\n          - Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“CMakeLists.txt”文件，添加源文件及动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 新增jsoncpp.cpp(解析订阅事件中的json字符串)源文件\nadd_library(entry SHARED napi_init.cpp jsoncpp.cpp)\n# 新增动态库依赖libhiappevent_ndk.z.so和libhilog_ndk.z.so(日志输出)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libhiappevent_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，导入依赖的文件，并定义LOG_TAG。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"json/json.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n#include \"hiappevent/hiappevent_event.h\"\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅系统事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "onReceive类型观察者"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑“napi_init.cpp”文件，定义onReceive类型观察者相关方法："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 定义一个变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *systemEventWatcher;\n\nstatic void OnReceive(const char *domain, const struct HiAppEvent_AppEventGroup *appEventGroups, uint32_t groupLen) {\n    for (int i = 0; i < groupLen; ++i) {\n        for (int j = 0; j < appEventGroups[i].infoLen; ++j) {\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\",\n                        appEventGroups[i].appEventInfos[j].domain);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\",\n                        appEventGroups[i].appEventInfos[j].name);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\",\n                        appEventGroups[i].appEventInfos[j].type);\n            if (strcmp(appEventGroups[i].appEventInfos[j].domain, DOMAIN_OS) == 0 &&\n                strcmp(appEventGroups[i].appEventInfos[j].name, EVENT_MAIN_THREAD_JANK) == 0) {\n                Json::Value params;\n                Json::Reader reader(Json::Features::strictMode());\n                Json::FastWriter writer;\n                if (reader.parse(appEventGroups[i].appEventInfos[j].params, params)) {\n                    auto time = params[\"time\"].asInt64();\n                    auto pid = params[\"pid\"].asInt();\n                    auto uid = params[\"uid\"].asInt();\n                    auto bundleName = params[\"bundle_name\"].asString();\n                    auto bundleVersion = params[\"bundle_version\"].asString();\n                    auto beginTime = params[\"begin_time\"].asInt64();\n                    auto endTime = params[\"end_time\"].asInt64();\n                    auto externalLog = writer.write(params[\"external_log\"]);\n                    auto logOverLimit = params[\"logOverLimit\"].asBool();\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\", time);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.pid=%{public}d\", pid);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uid=%{public}d\", uid);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_name=%{public}s\",\n                                bundleName.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\",\n                                bundleVersion.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.begin_time=%{public}lld\", beginTime);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.end_time=%{public}lld\", endTime);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.external_log=%{public}s\", externalLog.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.log_over_limit=%{public}d\",\n                                logOverLimit);\n                }\n            }\n        }\n    }\n}\n\nstatic napi_value RegisterWatcher(napi_env env, napi_callback_info info) {\n    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent RegisterWatcher\");\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    systemEventWatcher = OH_HiAppEvent_CreateWatcher(\"onReceiverWatcher\");\n    // 设置订阅的事件为EVENT_MAIN_THREAD_JANK。\n    const char *names[] = {EVENT_MAIN_THREAD_JANK};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcher, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，观察者接收到事件后会立即触发OnReceive回调。\n    OH_HiAppEvent_SetWatcherOnReceive(systemEventWatcher, OnReceive);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcher);\n    return {};\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将RegisterWatcher注册为ArkTS接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，将RegisterWatcher注册为ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"registerWatcher\", nullptr, RegisterWatcher, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“index.d.ts”文件，定义ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const registerWatcher: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability> EntryAbility.ets”文件，在onCreate()函数中新增接口调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入依赖模块\nimport testNapi from 'libentry.so';\n\n// 在onCreate()函数中新增接口调用\n// 启动时，注册系统事件观察者\ntestNapi.registerWatcher();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages> Index.ets”文件，添加一个Button按钮，并在其onClick函数中模拟触发主线程超时场景，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "   Button(\"timeOut350\")\n   .fontSize(50)\n   .fontWeight(FontWeight.Bold)\n   .onClick(() => {\n       let t = Date.now();\n       while (Date.now() - t <= 350) {}\n   })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程，可以快速点击2~3次timeOut350按钮，以触发主线程超时事件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "验证观察者是否订阅到主线程超时事件",
      children: "验证观察者是否订阅到主线程超时事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主线程超时事件上报后，可以在Log窗口看到对系统事件数据的处理日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  HiAppEvent eventInfo.domain=OS\n  HiAppEvent eventInfo.name=MAIN_THREAD_JANK\n  HiAppEvent eventInfo.eventType=1\n  HiAppEvent eventInfo.params.time=1717597063727\n  HiAppEvent eventInfo.params.pid=45572\n  HiAppEvent eventInfo.params.uid=20020151\n  HiAppEvent eventInfo.params.bundle_name=com.example.nativemainthread\n  HiAppEvent eventInfo.params.bundle_version=1.0.0\n  HiAppEvent eventInfo.params.begin_time=1717597063225\n  HiAppEvent eventInfo.params.end_time=1717597063727\n  HiAppEvent eventInfo.params.external_log=[\"/data/storage/el2/log/watchdog/MAIN_THREAD_JANK_20240613221239_45572.txt\"]\n  HiAppEvent eventInfo.params.log_over_limit=0\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(214457)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["主线程超时事件具体规格可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines#%E6%A3%80%E6%B5%8B%E5%8E%9F%E7%90%86",
            children: "主线程超时事件默认时间规格"
          }), " 和 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
            children: "主线程超时事件日志规格"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "移除并销毁事件观察者",
      children: "移除并销毁事件观察者"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移除事件观察者："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value RemoveWatcher(napi_env env, napi_callback_info info) {\n    // 使观察者停止监听事件\n    OH_HiAppEvent_RemoveWatcher(systemEventWatcher);\n    return {};\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁事件观察者："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value DestroyWatcher(napi_env env, napi_callback_info info) {\n    // 销毁创建的观察者，并置systemEventWatcher为nullptr。\n    OH_HiAppEvent_DestroyWatcher(systemEventWatcher);\n    systemEventWatcher = nullptr;\n    return {};\n}\n"
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
214457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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