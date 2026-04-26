"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["819851"], {
289709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_resource_leak_events_hiappevent_watcher_resourceleak_events_ndk_hiappevent_watcher_resourceleak_events_ndk_md_404_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-resource-leak-events-hiappevent-watcher-resourceleak-events-ndk-hiappevent-watcher-resourceleak-events-ndk-md-404.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_resource_leak_events_hiappevent_watcher_resourceleak_events_ndk_hiappevent_watcher_resourceleak_events_ndk_md_404_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-ndk/hiappevent-watcher-resourceleak-events-ndk","title":"订阅资源泄漏事件（C/C++）","description":"接口说明","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-ndk/hiappevent-watcher-resourceleak-events-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"订阅资源泄漏事件（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-resourceleak-events-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅资源泄漏事件（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-arkts/"},"next":{"title":"地址越界事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-ndk/hiappevent-watcher-resourceleak-events-ndk.md


const frontMatter = {
	title: '订阅资源泄漏事件（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-resourceleak-events-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅资源泄漏事件（C/C++）';

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
  "value": "步骤一：新建工程",
  "id": "步骤一新建工程",
  "level": 3
}, {
  "value": "步骤二：订阅系统事件",
  "id": "步骤二订阅系统事件",
  "level": 3
}, {
  "value": "步骤三：测试资源泄漏事件",
  "id": "步骤三测试资源泄漏事件",
  "level": 3
}, {
  "value": "步骤四：移除观察者",
  "id": "步骤四移除观察者",
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
        id: "订阅资源泄漏事件cc",
        children: "订阅资源泄漏事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何使用HiAppEvent提供的C/C++接口订阅资源泄漏事件。API接口的具体使用说明（参数使用限制、具体取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h",
        children: "hiappevent.h"
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
      id: "步骤一新建工程",
      children: "步骤一：新建工程"
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
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中新建工程，选择“Native C++”工程。目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  src:\n    main:\n      cpp:\n        - json:\n            - json.h\n            - json-forwards.h\n        - types:\n            libentry:\n              - index.d.ts\n        - CMakeLists.txt\n        - napi_init.cpp\n        - jsoncpp.cpp\n      ets:\n        - entryability:\n            - EntryAbility.ets\n        - pages:\n            - Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“CMakeLists.txt”文件，添加源文件及动态库："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 新增jsoncpp.cpp(解析订阅事件中的json字符串)源文件\nadd_library(entry SHARED napi_init.cpp jsoncpp.cpp)\n# 新增动态库依赖libhiappevent_ndk.z.so和libhilog_ndk.z.so(日志输出)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libhiappevent_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，导入依赖文件，并定义LOG_TAG："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"json/json.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤二订阅系统事件",
      children: "步骤二：订阅系统事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅系统事件："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "onReceive类型观察者："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑“napi_init.cpp”文件，定义onReceive类型观察者相关方法："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 定义一个变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *systemEventWatcher;\n\nstatic void OnReceive(const char *domain, const struct HiAppEvent_AppEventGroup *appEventGroups, uint32_t groupLen) {\n    for (int i = 0; i < groupLen; ++i) {\n        for (int j = 0; j < appEventGroups[i].infoLen; ++j) {\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\", appEventGroups[i].appEventInfos[j].domain);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\", appEventGroups[i].appEventInfos[j].name);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\", appEventGroups[i].appEventInfos[j].type);\n            if (strcmp(appEventGroups[i].appEventInfos[j].domain, DOMAIN_OS) == 0 &&\n                strcmp(appEventGroups[i].appEventInfos[j].name, EVENT_RESOURCE_OVERLIMIT) == 0) {\n                Json::Value params;\n                Json::Reader reader(Json::Features::strictMode());\n                Json::FastWriter writer;\n                if (reader.parse(appEventGroups[i].appEventInfos[j].params, params)) {\n                    auto time = params[\"time\"].asInt64();\n                    auto pid = params[\"pid\"].asInt();\n                    auto uid = params[\"uid\"].asInt();\n                    auto resourceType = params[\"resourceType\"].asString();\n                    auto bundleName = params[\"bundle_name\"].asString();\n                    auto bundleVersion = params[\"bundle_version\"].asString();\n                    auto memory = writer.write(params[\"memory\"]);\n                    auto externalLog = writer.write(params[\"external_log\"]);\n                    std::string logOverLimit = params[\"log_over_limit\"].asBool() ? \"true\":\"false\";\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\", time);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.pid=%{public}d\", pid);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uid=%{public}d\", uid);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.resource_type=%{public}s\", resourceType.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_name=%{public}s\", bundleName.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\", bundleVersion.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.memory=%{public}s\", memory.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.external_log=%{public}s\", externalLog.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.log_over_limit=%{public}s\", logOverLimit.c_str());\n                }\n            }\n        }\n    }\n}\n\nstatic napi_value RegisterWatcher(napi_env env, napi_callback_info info) {\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    systemEventWatcher = OH_HiAppEvent_CreateWatcher(\"onReceiverWatcher\");\n    // 设置订阅的事件为EVENT_RESOURCE_OVERLIMIT。\n    const char *names[] = {EVENT_RESOURCE_OVERLIMIT};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcher, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，观察者接收到事件后回立即触发OnReceive回调。\n    OH_HiAppEvent_SetWatcherOnReceive(systemEventWatcher, OnReceive);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcher);\n    return {};\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "onTrigger类型观察者："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑“napi_init.cpp”文件，定义OnTrigger类型观察者相关方法："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 定义一个变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *systemEventWatcher;\n\n// 开发者可以自行实现获取已监听到事件的回调函数，其中events指针指向内容仅在该函数内有效。\nstatic void OnTake(const char *const *events, uint32_t eventLen) {\n    Json::Reader reader(Json::Features::strictMode());\n    Json::FastWriter writer;\n    for (int i = 0; i < eventLen; ++i) {\n        Json::Value eventInfo;\n        if (reader.parse(events[i], eventInfo)) {\n            auto domain =  eventInfo[\"domain_\"].asString();\n            auto name = eventInfo[\"name_\"].asString();\n            auto type = eventInfo[\"type_\"].asInt();\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\", domain.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\", name.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\", type);\n            if (domain ==  DOMAIN_OS && name == EVENT_RESOURCE_OVERLIMIT) {\n                auto time = eventInfo[\"time\"].asInt64();\n                auto pid = eventInfo[\"pid\"].asInt();\n                auto uid = eventInfo[\"uid\"].asInt();\n                auto resourceType = eventInfo[\"resourceType\"].asString();\n                auto bundleName = eventInfo[\"bundle_name\"].asString();\n                auto bundleVersion = eventInfo[\"bundle_version\"].asString();\n                auto memory = writer.write(eventInfo[\"memory\"]);\n                auto externalLog = writer.write(eventInfo[\"external_log\"]);\n                std::string logOverLimit = eventInfo[\"log_over_limit\"].asBool() ? \"true\":\"false\";\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\", time);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.pid=%{public}d\", pid);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uid=%{public}d\", uid);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.resource_type=%{public}s\", resourceType.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_name=%{public}s\", bundleName.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\", bundleVersion.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.memory=%{public}s\", memory.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.external_log=%{public}s\", externalLog.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.log_over_limit=%{public}s\", logOverLimit.c_str());\n            }\n        }\n    }\n}\n\n// 开发者可以自行实现订阅回调函数，以便对获取到的事件打点数据进行自定义处理。\nstatic void OnTrigger(int row, int size) {\n    // 接收回调后，获取指定数量的已接收事件。\n    OH_HiAppEvent_TakeWatcherData(systemEventWatcher, row, OnTake);\n}\n\nstatic napi_value RegisterWatcher(napi_env env, napi_callback_info info) {\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    systemEventWatcher = OH_HiAppEvent_CreateWatcher(\"onTriggerWatcher\");\n    // 设置订阅的事件为EVENT_RESOURCE_OVERLIMIT。\n    const char *names[] = {EVENT_RESOURCE_OVERLIMIT};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcher, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，需OH_HiAppEvent_SetTriggerCondition设置的条件满足方可触发。\n    OH_HiAppEvent_SetWatcherOnTrigger(systemEventWatcher, OnTrigger);\n    // 开发者可以设置订阅触发回调的条件，此处是设置新增事件打点数量为2个时，触发onTrigger回调。\n    OH_HiAppEvent_SetTriggerCondition(systemEventWatcher, 1, 0, 0);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcher);\n    return {};\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将RegisterWatcher注册为ArkTS接口："
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
          children: "编辑“EntryAbility.ets”文件，在onCreate()函数中添加接口调用："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so'\nimport hidebug from '@kit.PerformanceAnalysisKit'\nexport default class EntryAbility extends UIAbility {\n  onCreate(want, launchParam) {\n    // 启动时，注册系统事件观察者\n    testNapi.registerWatcher();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤三测试资源泄漏事件",
      children: "步骤三：测试资源泄漏事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，添加按钮并在其 onClick 函数中构造资源泄漏场景，以触发资源泄漏事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此处需要使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug#hidebugsetappresourcelimit12",
            children: "hidebug.setAppResourceLimit"
          }), "设置内存限制，造成内存泄漏，同步在“开发者选项”中打开“系统资源泄漏日志”(开关状态变更后需重启设备)。接口示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('pss leak')\n    .type(ButtonType.Capsule)\n    .margin({\n      top: 20\n    })\n    .backgroundColor('#0D9FFB')\n    .width('80%')\n    .height('5%')\n    .onClick(() => {\n      // 设置一个简单的资源泄漏场景\n      hilog.info(0x0000, 'testTag', 'click pss leak button');\n      testNapi.leakMB(3072);\n    })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加 pss leak 相关内容："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "头文件加入："
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <thread>\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "定义 pss leak 相关方法："
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 读 /proc/self/smaps_rollup 中的 PSS 字段，统计当前进程的 PSS (单位 KB)\nstatic int GetCurrentProcessPss()\n{\n    std::ifstream smapsFile(\"/proc/self/smaps_rollup\");\n    if (!smapsFile.is_open()) {\n        std::cerr << \"Failed to open /proc/self/smaps_rollup\" << std::endl;\n        return 0;\n    }\n    std::string line;\n    int totalPss = 0;\n    while (std::getline(smapsFile, line)) {\n        if (line.find(\"Pss:\") == 0) {\n            std::istringstream iss(line);\n            std::string label;\n            int pss;\n            iss >> label >>pss;\n            totalPss += pss;\n        }\n    }\n    smapsFile.close();\n    std::cout << \"Current pss: \" << totalPss << \" KB\\r\";\n    std::cout.flush();\n    return totalPss;\n}\n\n// 读取当前进程的 FD 数量\nstatic int GetCurrentFd()\n{\n    std::ifstream fdFile(\"/proc/self/fd_num\");\n    if (!fdFile.is_open()) {\n        std::cerr << \"Failed to open /proc/self/fd_num\" << std::endl;\n        return 0;\n    }\n    std::string line;\n    int totalPss = 0;\n    std::getline(fdFile, line);\n    fdFile.close();\n    std::cout << \"Current fd: \" << line << std::endl;\n    std::cout.flush();\n    return std::stoi(line);\n}\n\n// 申请 size 字节内存并写入数据（用 'a' 填充），制造 native 内存增长\nstatic bool InjectNativeLeakMallocWithSize(int size, char *p)\n{\n    const size_t maxSafe = 1073741824;\n    if (size < 0 || size > maxSafe) {\n        printf(\"InjectNativeLeakMallocWithSize invalid size\\n\");\n        return false;\n    }\n    p = (char *) malloc(size + 1);\n    if (!p) {\n        printf(\"InjectNativeLeakMallocWithSize malloc failed\\n\");\n        return false;\n    }\n    void* err = memset(p, 'a', size);\n    if (err == nullptr) {\n        printf(\"InjectNativeLeakMallocWithSize memset failed\\n\");\n        return false;\n    }\n    return true;\n}\n\n// 循环申请/释放内存，使进程 PSS 持续接近 target\nstatic void InjectNativeLeakMallocUntil(int target)\n{\n    constexpr int leakSizePerTime = 5000000;\n    std::vector<char *> mems;\n    int curPss = GetCurrentProcessPss();\n    while (curPss != 0) {\n        char *p = nullptr;\n        if (curPss < target) {\n            if (!InjectNativeLeakMallocWithSize(leakSizePerTime, p)) {\n                printf(\"InjectNativeLeakMallocUntil target = %d failed\\n\", target);\n            }\n            mems.push_back(p);\n            std::cout << \"Inject size: \" << leakSizePerTime << \", currentSize: \" << mems.size() << std::endl;\n        } else {\n            if (mems.size() > 0) {\n                char *dst = mems[0];\n                mems.erase(mems.begin());\n                free(dst);\n            }\n            std::cout << \"Free size: \" << leakSizePerTime << \", currentSize: \" << mems.size() << std::endl;\n        }\n        curPss = GetCurrentProcessPss();\n    }\n    std::cout << std::endl;\n    printf(\"InjectNativeLeakMallocUntil target = %d success\\n\", target);\n}\n\n// 启动后台执行的 InjectNativeLeakMallocUntil 线程，使 native 内存占用接近 leakSize\nstatic void StartNativeLeak(int leakSize)\n{\n    std::cout << \"Start inject malloc until\" << leakSize << \"KB\" << std::endl;\n    std::thread t1(InjectNativeLeakMallocUntil, leakSize);\n    t1.detach();\n    std::cout << \"Inject finished.\" << std::endl;\n}\n\n// N-API 导出方法\nstatic napi_value LeakMB(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1];\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    if (argc < 1) {\n        napi_throw_type_error(env, nullptr, \"Expected 1 argument\");\n        return nullptr;\n    }\n    double x = 0;\n    if (napi_get_value_double(env, args[0], &x) != napi_ok) {\n        napi_throw_type_error(env, nullptr, \"Argument must be a number\");\n        return nullptr;\n    }\n    const size_t kilobyte = 1024;\n    StartNativeLeak(static_cast<size_t>(x * kilobyte));\n    napi_value rtn;\n    napi_get_undefined(env, &rtn);\n    return rtn;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "初始化："
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        // ...\n        { \"leakMB\", nullptr, LeakMB, nullptr, nullptr, nullptr, napi_default, nullptr}\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“Index.d.ts”文件："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "添加类型声明："
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const leakMB: (size: number) => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击DevEco Studio界面中的运行按钮，运行应用工程，单击 pss leak 按钮后，等待15到30分钟，系统将上报应用内存泄漏事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一个应用，24小时内至多上报一次资源泄漏事件，如果短时间内要二次上报，需要重启设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内存泄漏事件上报后，可以在Log窗口看到对系统事件数据的处理日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "08-07 03:53:35.314 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.domain=OS\n08-07 03:53:35.314 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.name=RESOURCE_OVERLIMIT\n08-07 03:53:35.314 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.eventType=1\n08-07 03:53:35.349 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.params.time=1502049167732\n08-07 03:53:35.349 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.params.pid=1587\n08-07 03:53:35.349 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.params.uid=20010043\n08-07 03:53:35.349 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.params.resource_type=pss_memory\n08-07 03:53:35.349 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.params.bundle_name=com.example.myapplication\n08-07 03:53:35.349 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.params.bundle_version=1.0.0\n08-07 03:53:35.350 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.params.memory={\"pss\":2100257,\"rss\":1352644,\"sys_avail_mem\":250272,\"sys_free_mem\":60004,\"sys_total_mem\":1992340,\"vss\":2462936}\n08-07 03:53:35.350 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.params.external_log=[\"/data/storage/el2/log/resourcelimit/RESOURCE_OVERLIMIT_1725614572401_6808.log\",\"/data/storage/el2/log/resourcelimit/RESOURCE_OVERLIMIT_1725614572412_6808.log\"]\n08-07 03:53:35.350 1719-1738/? I A00000/testTag: HiAppEvent eventInfo.params.log_over_limit=false\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤四移除观察者",
      children: "步骤四：移除观察者"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移除事件观察者："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value RemoveWatcher(napi_env env, napi_callback_info info) {\n    // 移除观察者以停止监听事件\n    OH_HiAppEvent_RemoveWatcher(systemEventWatcher);\n    return {};\n}\n"
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