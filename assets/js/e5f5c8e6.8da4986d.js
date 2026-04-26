"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["923007"], {
610353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_freeze_events_hiappevent_watcher_freeze_events_ndk_hiappevent_watcher_freeze_events_ndk_md_e5f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-freeze-events-hiappevent-watcher-freeze-events-ndk-hiappevent-watcher-freeze-events-ndk-md-e5f.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_freeze_events_hiappevent_watcher_freeze_events_ndk_hiappevent_watcher_freeze_events_ndk_md_e5f_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-ndk/hiappevent-watcher-freeze-events-ndk","title":"订阅应用冻屏事件（C/C++）","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-ndk/hiappevent-watcher-freeze-events-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"订阅应用冻屏事件（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-freeze-events-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅应用冻屏事件（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-arkts/"},"next":{"title":"资源泄漏事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-ndk/hiappevent-watcher-freeze-events-ndk.md


const frontMatter = {
	title: '订阅应用冻屏事件（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-freeze-events-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅应用冻屏事件（C/C++）';

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
  "value": "验证观察者是否订阅到应用无响应事件",
  "id": "验证观察者是否订阅到应用无响应事件",
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
        id: "订阅应用冻屏事件cc",
        children: "订阅应用冻屏事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何使用HiAppEvent提供的C/C++接口订阅应用冻屏事件。接口的详细使用说明（参数限制、取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以订阅应用冻屏事件为例，说明开发步骤。"
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
          children: "新建Native C++工程，并将jsoncpp导入到新建工程内，目录结构如下。"
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
            children: "#include \"napi/native_api.h\"\n#include \"json/json.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n"
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
                children: "// 定义一个变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *systemEventWatcher;\n\nstatic void OnReceive(const char *domain, const struct HiAppEvent_AppEventGroup *appEventGroups, uint32_t groupLen) {\n    for (int i = 0; i < groupLen; ++i) {\n        for (int j = 0; j < appEventGroups[i].infoLen; ++j) {\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\", appEventGroups[i].appEventInfos[j].domain);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\", appEventGroups[i].appEventInfos[j].name);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\", appEventGroups[i].appEventInfos[j].type);\n            if (strcmp(appEventGroups[i].appEventInfos[j].domain, DOMAIN_OS) == 0 &&\n                strcmp(appEventGroups[i].appEventInfos[j].name, EVENT_APP_FREEZE) == 0) {\n                Json::Value params;\n                Json::Reader reader(Json::Features::strictMode());\n                Json::FastWriter writer;\n                if (reader.parse(appEventGroups[i].appEventInfos[j].params, params)) {\n                    auto time = params[\"time\"].asInt64();\n                    auto foreground = params[\"foreground\"].asBool();\n                    auto bundleVersion = params[\"bundle_version\"].asString();\n                    auto bundleName = params[\"bundle_name\"].asString();\n                    auto processName = params[\"process_name\"].asString();\n                    auto pid = params[\"pid\"].asInt();\n                    auto uid = params[\"uid\"].asInt();\n                    auto uuid = params[\"uuid\"].asString();\n                    auto exception = writer.write(params[\"exception\"]);\n                    auto hilogSize = params[\"hilog\"].size();\n                    auto handleSize = params[\"event_handler\"].size();\n                    auto handleSize3s = params[\"event_handler_size_3s\"].asString();\n                    auto handleSize6s = params[\"event_handler_size_6s\"].asString();\n                    auto peerBindSize = params[\"peer_binder\"].size();\n                    auto threadSize = params[\"threads\"].size();\n                    auto memory = writer.write(params[\"memory\"]);\n                    auto externalLog = writer.write(params[\"external_log\"]);\n                    auto logOverLimit = params[\"log_over_limit\"].asBool();\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\", time);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.foreground=%{public}d\", foreground);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\", bundleVersion.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_name=%{public}s\", bundleName.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.process_name=%{public}s\", processName.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.pid=%{public}d\", pid);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uid=%{public}d\", uid);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uuid=%{public}s\", uuid.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.exception=%{public}s\", exception.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.hilog.size=%{public}d\", hilogSize);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.event_handler.size=%{public}d\", handleSize);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.event_handler_3s.size=%{public}s\", handleSize3s.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.event_handler_6s.size=%{public}s\", handleSize6s.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.peer_binder.size=%{public}d\", peerBindSize);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.threads.size=%{public}d\", threadSize);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.memory=%{public}s\", memory.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.external_log=%{public}s\", externalLog.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.log_over_limit=%{public}d\", logOverLimit);\n                }\n            }\n        }\n    }\n}\n\nstatic napi_value RegisterWatcher(napi_env env, napi_callback_info info) {\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    systemEventWatcher = OH_HiAppEvent_CreateWatcher(\"onReceiverWatcher\");\n    // 设置订阅的事件为EVENT_APP_FREEZE。\n    const char *names[] = {EVENT_APP_FREEZE};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcher, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，观察者接收到事件后会立即触发OnReceive回调。\n    OH_HiAppEvent_SetWatcherOnReceive(systemEventWatcher, OnReceive);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcher);\n    return {};\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "onTrigger类型观察者"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑“napi_init.cpp”文件，定义OnTrigger类型观察者相关方法："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 定义一个变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *systemEventWatcher;\n\n// 开发者可以自行实现获取已监听到事件的回调函数，其中events指针指向内容仅在该函数内有效。\nstatic void OnTake(const char *const *events, uint32_t eventLen) {\n    Json::Reader reader(Json::Features::strictMode());\n    Json::FastWriter writer;\n    for (int i = 0; i < eventLen; ++i) {\n        Json::Value eventInfo;\n        if (reader.parse(events[i], eventInfo)) {\n            auto domain =  eventInfo[\"domain_\"].asString();\n            auto name = eventInfo[\"name_\"].asString();\n            auto type = eventInfo[\"type_\"].asInt();\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\", domain.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\", name.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\", type);\n            if (domain ==  DOMAIN_OS && name == EVENT_APP_FREEZE) {\n                auto time = eventInfo[\"time\"].asInt64();\n                auto foreground = eventInfo[\"foreground\"].asBool();\n                auto bundleVersion = eventInfo[\"bundle_version\"].asString();\n                auto bundleName = eventInfo[\"bundle_name\"].asString();\n                auto processName = eventInfo[\"process_name\"].asString();\n                auto pid = eventInfo[\"pid\"].asInt();\n                auto uid = eventInfo[\"uid\"].asInt();\n                auto uuid = eventInfo[\"uuid\"].asString();\n                auto exception = writer.write(eventInfo[\"exception\"]);\n                auto hilogSize = eventInfo[\"hilog\"].size();\n                auto handleSize =  eventInfo[\"event_handler\"].size();\n                auto handleSize3s =  eventInfo[\"event_handler_size_3s\"].asString();\n                auto handleSize6s =  eventInfo[\"event_handler_size_6s\"].asString();\n                auto peerBindSize =  eventInfo[\"peer_binder\"].size();\n                auto threadSize =  eventInfo[\"threads\"].size();\n                 auto memory =  writer.write(eventInfo[\"memory\"]);\n                auto externalLog = writer.write(eventInfo[\"external_log\"]);\n                auto logOverLimit = eventInfo[\"log_over_limit\"].asBool();\n                auto process_life_time = eventInfo[\"process_life_time\"].asString();\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\", time);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.foreground=%{public}d\", foreground);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\", bundleVersion.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_name=%{public}s\", bundleName.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.process_name=%{public}s\", processName.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.pid=%{public}d\", pid);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uid=%{public}d\", uid);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uuid=%{public}s\", uuid.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.exception=%{public}s\", exception.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.hilog.size=%{public}d\", hilogSize);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.event_handler.size=%{public}d\", handleSize);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.event_handler_3s.size=%{public}s\", handleSize3s.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.event_handler_6s.size=%{public}s\", handleSize6s.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.peer_binder.size=%{public}d\", peerBindSize);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.threads.size=%{public}d\", threadSize);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.memory=%{public}s\", memory.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.external_log=%{public}s\", externalLog.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.log_over_limit=%{public}d\", logOverLimit);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.process_life_time=%{public}s\", process_life_time.c_str());\n            }\n        }\n    }\n}\n\n// 开发者可以自行实现订阅回调函数，以便对获取到的事件打点数据进行自定义处理。\nstatic void OnTrigger(int row, int size) {\n    // 接收回调后，获取指定数量的已接收事件。\n    OH_HiAppEvent_TakeWatcherData(systemEventWatcher, row, OnTake);\n}\n\nstatic napi_value RegisterWatcher(napi_env env, napi_callback_info info) {\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    systemEventWatcher = OH_HiAppEvent_CreateWatcher(\"onTriggerWatcher\");\n    // 设置订阅的事件为EVENT_APP_FREEZE。\n    const char *names[] = {EVENT_APP_FREEZE};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcher, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，需OH_HiAppEvent_SetTriggerCondition设置的条件满足方可触发。\n    OH_HiAppEvent_SetWatcherOnTrigger(systemEventWatcher, OnTrigger);\n    // 开发者可以设置订阅触发回调的条件，此处是设置新增事件打点数量为1个时，触发onTrigger回调。\n    OH_HiAppEvent_SetTriggerCondition(systemEventWatcher, 1, 0, 0);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcher);\n    return {};\n}\n"
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
          children: "编辑“EntryAbility.ets”文件，在onCreate()函数中新增接口调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入依赖模块\nimport testNapi from 'libentry.so'\n\n// 在onCreate()函数中新增接口调用\n// 启动时，注册系统事件观察者\ntestNapi.registerWatcher();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“Index.ets”文件，新增按钮触发卡顿事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button(\"appFreeze\").onClick(() => {\n  setTimeout(()=>{\n    while(true) {}\n  }, 1000)\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程，然后在应用界面中点击按钮“appFreeze”，触发一次应用无响应事件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "验证观察者是否订阅到应用无响应事件",
      children: "验证观察者是否订阅到应用无响应事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用工程崩溃退出后再次运行可以在Log窗口看到对系统事件数据的处理日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HiAppEvent eventInfo.domain=OS\nHiAppEvent eventInfo.name=APP_FREEZE\nHiAppEvent eventInfo.eventType=1\nHiAppEvent eventInfo.params.time=1502049167732\nHiAppEvent eventInfo.params.foreground=1\nHiAppEvent eventInfo.params.bundle_version=1.0.0\nHiAppEvent eventInfo.params.bundle_name=com.example.myapplication\nHiAppEvent eventInfo.params.process_name=com.example.myapplication\nHiAppEvent eventInfo.params.pid=1587\nHiAppEvent eventInfo.params.uid=20010043\nHiAppEvent eventInfo.params.uuid=a78a23b20f3dd9730f18a5cfa2304deac1104ac4086755c4a59cf7c72d414e2e\nHiAppEvent eventInfo.params.exception={\"message\":\"App main thread is not response!\",\"name\":\"THREAD_BLOCK_6S\"}\nHiAppEvent eventInfo.params.hilog.size=6\nHiAppEvent eventInfo.params.event_handler.size=16\nHiAppEvent eventInfo.params.event_handler_3s.size=15\nHiAppEvent eventInfo.params.event_handler_6s.size=16\nHiAppEvent eventInfo.params.peer_binder.size=0\nHiAppEvent eventInfo.params.threads.size=28\nHiAppEvent eventInfo.params.memory={\"pss\":0,\"rss\":0,\"sys_avail_mem\":1326520,\"sys_free_mem\":940588,\"sys_total_mem\":1992340,\"vm_heap_total_size\":\"9961472\",\"vm_heap_used_size\":\"7596424\",\"vss\":0}\nHiAppEvent eventInfo.params.external_log=[\"/data/storage/el2/log/hiappevent/APP_FREEZE_1502049185239_1587.log\"]\nHiAppEvent eventInfo.params.log_over_limit=0\nHiAppEvent eventInfo.params.process_life_time=18\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "移除并销毁事件观察者",
      children: "移除并销毁事件观察者"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移除事件观察者。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value RemoveWatcher(napi_env env, napi_callback_info info) {\n    // 使观察者停止监听事件\n    OH_HiAppEvent_RemoveWatcher(systemEventWatcher);\n    return {};\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁事件观察者。"
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