"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["972328"], {
895552(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_crash_events_hiappevent_watcher_crash_events_ndk_hiappevent_watcher_crash_events_ndk_md_47b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-crash-events-hiappevent-watcher-crash-events-ndk-hiappevent-watcher-crash-events-ndk-md-47b.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_crash_events_hiappevent_watcher_crash_events_ndk_hiappevent_watcher_crash_events_ndk_md_47b_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-ndk/hiappevent-watcher-crash-events-ndk","title":"订阅崩溃事件（C/C++）","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-ndk/hiappevent-watcher-crash-events-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"订阅崩溃事件（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-crash-events-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅崩溃事件（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-arkts/"},"next":{"title":"应用冻屏事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-ndk/hiappevent-watcher-crash-events-ndk.md


const frontMatter = {
	title: '订阅崩溃事件（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-crash-events-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅崩溃事件（C/C++）';

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
        id: "订阅崩溃事件cc",
        children: "订阅崩溃事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何使用HiAppEvent提供的C/C++接口订阅应用崩溃事件。详细使用说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h",
        children: "hiappevent.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(128144)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用C/C++接口订阅JsError和NativeCrash崩溃事件。"
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
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在应用启动后，在执行业务逻辑前添加事件观察者，以确保订阅到崩溃事件。否则，应用可能因崩溃而退出，无法订阅崩溃事件。"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以用户点击按钮触发崩溃事件为例，开发步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取该示例工程依赖的jsoncpp文件，打开链接", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/PerformanceAnalysisKit/HiAppEvent/EventSub",
            children: "HiAppEvent示例工程EventSub"
          }), "，点击“下载当前目录”，下载EventSub工程文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建Native C++工程，并将上述文件导入到新建工程，目录结构如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  libs:    //  放置jsoncpp关联三方库的文件夹\n  src:\n    main:\n      cpp:\n        - thirdparty:\n            jsoncpp:    //  放置jsoncpp关联三方库的文件夹\n        - types:\n            libentry:\n              - index.d.ts\n        - CMakeLists.txt\n        - napi_init.cpp\n      ets:\n        - entryability:\n            - EntryAbility.ets\n        - pages:\n            - Index.ets\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该示例工程中jsoncpp库文件对应的源码来自", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/open-source-parsers/jsoncpp/archive/refs/tags/1.9.6.tar.gz",
            children: "三方开源库jsoncpp"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在\"CMakeLists.txt\"文件中，添加源文件和动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "add_library(entry SHARED napi_init.cpp)\n# 新增动态库依赖libhiappevent_ndk.z.so和libhilog_ndk.z.so(日志输出)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libhiappevent_ndk.z.so)\nset(GZ_FILE \"${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/jsoncpp/src/jsoncpp-1.9.6.tar.gz\")\nset(DEST_DIR \"${CMAKE_CURRENT_SOURCE_DIR}/../../../build\")\n# 检查是否存在entry/build目录\nexecute_process(COMMAND ${CMAKE_COMMAND} -E make_directory ${DEST_DIR})\n# 解压jsoncpp-1.9.6.tar.gz到entry/build，得到jsoncpp头文件的目录\nexecute_process(COMMAND tar -xzf ${GZ_FILE} -C ${DEST_DIR}\n    WORKING_DIRECTORY ${DEST_DIR})\n\n# 新增三方库依赖libjsoncpp.so(解析订阅事件中的json字符串)\ntarget_link_libraries(entry PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/jsoncpp/${OHOS_ARCH}/lib/libjsoncpp.so)\ntarget_include_directories(entry PRIVATE ${DEST_DIR}/jsoncpp-1.9.6/include/json)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在\"napi_init.cpp\"文件中，导入依赖文件，并定义LOG_TAG。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n// 根据工程中三方库jsoncpp的位置适配引用json.h的路径\n#include \"../../../build/jsoncpp-1.9.6/include/json/json.h\"\n#include \"hiappevent/hiappevent.h\"\n#include \"hilog/log.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n"
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
              children: "在\"napi_init.cpp\"文件中，定义onReceive类型观察者的方法："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static void OnReceiveCrashEvent(const char *domain, const struct HiAppEvent_AppEventGroup *appEventGroups,\n    uint32_t groupLen)\n{\n    for (int i = 0; i < groupLen; ++i) {\n        for (int j = 0; j < appEventGroups[i].infoLen; ++j) {\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\",\n                appEventGroups[i].appEventInfos[j].domain);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\",\n                appEventGroups[i].appEventInfos[j].name);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\",\n                appEventGroups[i].appEventInfos[j].type);\n            if (strcmp(appEventGroups[i].appEventInfos[j].domain, DOMAIN_OS) != 0 ||\n                strcmp(appEventGroups[i].appEventInfos[j].name, EVENT_APP_CRASH) != 0) {\n                continue;\n            }\n            Json::Value params;\n            Json::Reader reader(Json::Features::strictMode());\n            Json::FastWriter writer;\n            if (reader.parse(appEventGroups[i].appEventInfos[j].params, params)) {\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\",\n                    params[\"time\"].asInt64());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.crash_type=%{public}s\",\n                    params[\"crash_type\"].asString().c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.foreground=%{public}d\",\n                    params[\"foreground\"].asBool());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\",\n                    params[\"bundle_version\"].asString().c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_name=%{public}s\",\n                    params[\"bundle_name\"].asString().c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.pid=%{public}d\", params[\"pid\"].asInt());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uid=%{public}d\", params[\"uid\"].asInt());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uuid=%{public}s\",\n                    params[\"uuid\"].asString().c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.exception=%{public}s\",\n                    writer.write(params[\"exception\"]).c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.hilog.size=%{public}d\",\n                    params[\"hilog\"].size());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.process_life_time=%{public}d\",\n                    params[\"process_life_time\"].asInt());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.memory=%{public}s\",\n                    writer.write(params[\"memory\"]).c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.external_log=%{public}s\",\n                    writer.write(params[\"external_log\"]).c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.log_over_limit=%{public}d\",\n                    params[\"log_over_limit\"].asBool());\n            }\n        }\n    }\n}\n\n// 定义变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *systemEventWatcherR;\n\nstatic napi_value RegisterWatcherCrashEvent(napi_env env, napi_callback_info info)\n{\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    systemEventWatcherR = OH_HiAppEvent_CreateWatcher(\"AppCrashWatcherR\");\n    // 设置订阅的事件名称为EVENT_APP_CRASH，即崩溃事件。\n    const char *names[] = {EVENT_APP_CRASH};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcherR, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，观察者接收到事件后回立即触发OnReceiveCrashEvent回调。\n    OH_HiAppEvent_SetWatcherOnReceive(systemEventWatcherR, OnReceiveCrashEvent);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcherR);\n    return {};\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "onTrigger类型观察者"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在\"napi_init.cpp\"文件中，定义OnTrigger类型观察者："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 开发者可以自行实现获取已监听到事件的回调函数，其中events指针指向内容仅在该函数内有效。\nstatic void OnTakeCrash(const char *const *events, uint32_t eventLen)\n{\n    Json::Reader reader(Json::Features::strictMode());\n    Json::FastWriter writer;\n    for (int i = 0; i < eventLen; ++i) {\n        Json::Value eventInfo;\n        if (reader.parse(events[i], eventInfo)) {\n            auto domain =  eventInfo[\"domain_\"].asString();\n            auto name = eventInfo[\"name_\"].asString();\n            auto type = eventInfo[\"type_\"].asInt();\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.WatcherType=OnTrigger\");\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\", domain.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\", name.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\", type);\n            if (domain ==  DOMAIN_OS && name == EVENT_APP_CRASH) {\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\",\n                    eventInfo[\"time\"].asInt64());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.crash_type=%{public}s\",\n                    eventInfo[\"crash_type\"].asString().c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.foreground=%{public}d\",\n                    eventInfo[\"foreground\"].asBool());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\",\n                    eventInfo[\"bundle_version\"].asString().c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_name=%{public}s\",\n                    eventInfo[\"bundle_name\"].asString().c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.pid=%{public}d\", eventInfo[\"pid\"].asInt());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uid=%{public}d\", eventInfo[\"uid\"].asInt());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uuid=%{public}s\",\n                    eventInfo[\"uuid\"].asString().c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.exception=%{public}s\",\n                    writer.write(eventInfo[\"exception\"]).c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.hilog.size=%{public}d\",\n                    eventInfo[\"hilog\"].size());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.process_life_time=%{public}d\",\n                    eventInfo[\"process_life_time\"].asInt());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.memory=%{public}s\",\n                    writer.write(eventInfo[\"memory\"]).c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.external_log=%{public}s\",\n                    writer.write(eventInfo[\"external_log\"]).c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.log_over_limit=%{public}d\",\n                    eventInfo[\"log_over_limit\"].asBool());\n            }\n        }\n    }\n}\n\n// 定义变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *systemEventWatcherT;\n\n// 开发者可以自行实现订阅回调函数，以便对获取到的事件打点数据进行自定义处理。\nstatic void OnTriggerCrash(int row, int size)\n{\n    // 接收回调后，获取指定数量的已接收事件。\n    OH_HiAppEvent_TakeWatcherData(systemEventWatcherT, row, OnTakeCrash);\n}\n\nstatic napi_value RegisterWatcherClickCrash(napi_env env, napi_callback_info info)\n{\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    systemEventWatcherT = OH_HiAppEvent_CreateWatcher(\"AppCrashWatcherT\");\n    // 设置订阅的事件为EVENT_APP_CRASH。\n    const char *names[] = {EVENT_APP_CRASH};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcherT, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，需OH_HiAppEvent_SetTriggerCondition设置的条件满足方可触发。\n    OH_HiAppEvent_SetWatcherOnTrigger(systemEventWatcherT, OnTriggerCrash);\n    // 开发者可以设置订阅触发回调的条件，此处是设置新增事件打点数量为1个时，触发OnTriggerCrash回调。\n    OH_HiAppEvent_SetTriggerCondition(systemEventWatcherT, 1, 0, 0);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcherT);\n    return {};\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将RegisterWatcher注册为ArkTS接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在\"napi_init.cpp\"文件中，将RegisterWatcher注册为ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        // ···\n        { \"registerWatcherCrashEvent\", nullptr, RegisterWatcherCrashEvent, nullptr, nullptr, nullptr, napi_default,\n            nullptr },\n        { \"registerWatcherClickCrash\", nullptr, RegisterWatcherClickCrash, nullptr, nullptr, nullptr, napi_default,\n            nullptr },\n        // ···\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在\"index.d.ts\"文件中，定义ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const registerWatcherClickCrash: () => void;\nexport const registerWatcherCrashEvent: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在\"EntryAbility.ets\"文件的onCreate()函数中添加接口调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在onCreate()函数中添加C API接口调用\n// 启动时，注册崩溃事件观察者\ntestNapi.registerWatcherClickCrash();\n// 启动时，注册按钮点击事件观察者\ntestNapi.registerWatcherCrashEvent();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在\"Index.ets\"文件中，新增按钮触发崩溃事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('JsError')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    // 在按钮点击函数中构造一个crash场景，触发应用崩溃事件\n    JSON.parse('');\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击运行按钮，启动应用工程。在应用界面中点击“JsError”按钮，触发崩溃事件。系统生成相应的崩溃日志并进行回调。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(498826)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JsError通过进程内采集故障信息触发回调，速度快。NativeCrash采取进程外采集故障信息，平均耗时约2秒，具体受业务线程数量和进程间通信影响。订阅崩溃事件后，故障信息采集完成会异步上报，不阻塞当前业务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "验证观察者是否订阅到崩溃事件",
      children: "验证观察者是否订阅到崩溃事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用未主动捕获崩溃异常和主动捕获崩溃异常的两种场景中，崩溃事件的回调时机不同。开发者需要在每种情况下验证是否订阅到崩溃事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用未主动捕获崩溃异常场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若应用未主动捕获崩溃异常，则系统处理崩溃后应用将退出。", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用下次启动时"
        })
      }), "，HiAppEvent将崩溃事件上报给已注册的监听，完成回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，若应用无法启动或长时间未启动，开发者可以参考", (0,jsx_runtime.jsx)(_components.a, {
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
      children: ["若应用主动捕获崩溃异常，HiAppEvent事件将在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用退出前"
        })
      }), "触发回调，例如："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异常处理中未主动退出的应用崩溃后不会退出。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["采用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager#errormanageronerror",
            children: "errorManager.on"
          }), "方法捕获异常会导致JsError类型的崩溃事件在应用退出前触发回调。若应用注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E7%B3%BB%E7%BB%9F%E5%A4%84%E7%90%86%E7%9A%84%E5%B4%A9%E6%BA%83%E4%BF%A1%E5%8F%B7",
            children: "崩溃信号"
          }), "处理函数但未主动退出，会导致NativeCrash类型的崩溃事件在应用退出前触发回调。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异常处理耗时过长，会导致应用退出延迟。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发调试阶段，HiAppEvent上报事件完成回调后，可在DevEco Studio的HiLog窗口查看订阅的崩溃事件内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAppEvent eventInfo.domain=OS\nHiAppEvent eventInfo.name=APP_CRASH\nHiAppEvent eventInfo.eventType=1\nHiAppEvent eventInfo.params.time=1503045716054\nHiAppEvent eventInfo.params.crash_type=JsError\nHiAppEvent eventInfo.params.foreground=1\nHiAppEvent eventInfo.params.bundle_version=1.0.0\nHiAppEvent eventInfo.params.bundle_name=com.samples.eventsub\nHiAppEvent eventInfo.params.pid=2610\nHiAppEvent eventInfo.params.uid=20010044\nHiAppEvent eventInfo.params.uuid=7c3b1579c8ca8629af3858f8145254c2867ee402dc16ee18034337aae258620b\nHiAppEvent eventInfo.params.exception={\"message\":\"Unexpected Text in JSON: Empty Text\",\"name\":\"SyntaxError\",\"stack\":\"    at anonymous (entry|entry|1.0.0|src/main/ets/pages/Index.ts:163:22)\\n\",\"thread_name\":\"amples.eventsub\"}\nHiAppEvent eventInfo.params.hilog.size=100\nHiAppEvent eventInfo.params.process_life_time=25\nHiAppEvent eventInfo.params.memory={\"rss\":181964,\"sys_avail_mem\":1230456,\"sys_free_mem\":676940,\"sys_total_mem\":2001932}\nHiAppEvent eventInfo.params.external_log=[\"/data/storage/el2/log/hiappevent/APP_CRASH_1503045716408_2610.log\"]\nHiAppEvent eventInfo.params.log_over_limit=0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "移除并销毁事件观察者",
      children: "移除并销毁事件观察者"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移除事件观察者。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value RemoveWatcherCrash(napi_env env, napi_callback_info info)\n{\n    // 使观察者停止监听crash事件\n    OH_HiAppEvent_RemoveWatcher(systemEventWatcherR);\n    OH_HiAppEvent_RemoveWatcher(systemEventWatcherT);\n    return {};\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁事件观察者。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value DestroyWatcherCrash(napi_env env, napi_callback_info info)\n{\n    // 销毁创建的观察者，并置eventWatcher为nullptr。\n    OH_HiAppEvent_DestroyWatcher(systemEventWatcherR);\n    OH_HiAppEvent_DestroyWatcher(systemEventWatcherT);\n    systemEventWatcherR = nullptr;\n    systemEventWatcherT = nullptr;\n    return {};\n}\n"
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
498826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
128144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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