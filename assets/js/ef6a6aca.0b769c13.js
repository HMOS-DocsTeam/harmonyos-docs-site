"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["935171"], {
399692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_app_hicollie_events_hiappevent_watcher_apphicollie_events_ndk_hiappevent_watcher_apphicollie_events_ndk_md_ef6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-app-hicollie-events-hiappevent-watcher-apphicollie-events-ndk-hiappevent-watcher-apphicollie-events-ndk-md-ef6.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_app_hicollie_events_hiappevent_watcher_apphicollie_events_ndk_hiappevent_watcher_apphicollie_events_ndk_md_ef6_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-ndk/hiappevent-watcher-apphicollie-events-ndk","title":"订阅任务执行超时事件（C/C++）","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-ndk/hiappevent-watcher-apphicollie-events-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"订阅任务执行超时事件（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-apphicollie-events-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅任务执行超时事件（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-arkts/"},"next":{"title":"应用终止事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-ndk/hiappevent-watcher-apphicollie-events-ndk.md


const frontMatter = {
	title: '订阅任务执行超时事件（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-apphicollie-events-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅任务执行超时事件（C/C++）';

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
  "value": "验证观察者是否订阅到任务执行超时事件",
  "id": "验证观察者是否订阅到任务执行超时事件",
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
        id: "订阅任务执行超时事件cc",
        children: "订阅任务执行超时事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何使用HiAppEvent提供的C/C++接口订阅任务执行超时事件。接口的详细使用说明（参数限制、取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "以实现对用户点击按钮触发卡顿场景生成的卡顿事件订阅为例，说明开发步骤。"
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
          children: "新建Native C++工程，从解压后的EventSub工程中拷贝jsoncpp库文件（entry/libs和entry/src/main/cpp/thirdparty文件夹）到新建的工程之中，新工程目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  libs:    //  放置jsoncpp关联三方库的文件夹\n  src:\n    main:\n      cpp:\n        thirdparty:\n          jsoncpp:    //  放置jsoncpp关联三方库的文件夹\n        types:\n          libentry:\n            - index.d.ts\n        - CMakeLists.txt\n        - napi_init.cpp\n      ets:\n        entryability:\n          - EntryAbility.ets\n        pages:\n          - Index.ets\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该示例工程中jsoncpp库文件对应的源码来自", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/open-source-parsers/jsoncpp/archive/refs/tags/1.9.6.tar.gz",
            children: "三方开源库jsoncpp"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“CMakeLists.txt”文件，添加所需源文件及动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "add_library(entry SHARED napi_init.cpp)\n# 新增动态库依赖libhiappevent_ndk.z.so、libhilog_ndk.z.so（日志输出）及libohhicollie.so（hicollie检测）\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libohhicollie.so libhiappevent_ndk.z.so)\n\nset(GZ_FILE \"${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/jsoncpp/src/jsoncpp-1.9.6.tar.gz\")\nset(DEST_DIR \"${CMAKE_CURRENT_SOURCE_DIR}/../../../build\")\n# 检查是否存在entry/build目录\nexecute_process(COMMAND ${CMAKE_COMMAND} -E make_directory ${DEST_DIR})\n# 解压jsoncpp-1.9.6.tar.gz到entry/build，得到jsoncpp头文件的目录\nexecute_process(COMMAND tar -xzf ${GZ_FILE} -C ${DEST_DIR}\n    WORKING_DIRECTORY ${DEST_DIR})\n\n# 新增三方库依赖libjsoncpp.so(解析订阅事件中的json字符串)\ntarget_link_libraries(entry PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/jsoncpp/${OHOS_ARCH}/lib/libjsoncpp.so)\ntarget_include_directories(entry PRIVATE ${DEST_DIR}/jsoncpp-1.9.6/include/json)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，导入依赖的头文件，并定义LOG_TAG。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n// 根据工程中三方库jsoncpp的位置适配引用json.h的路径\n#include \"../../../build/jsoncpp-1.9.6/include/json/json.h\"\n#include \"hiappevent/hiappevent.h\"\n#include \"hilog/log.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅系统事件："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "onReceive类型观察者"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，定义onReceive类型观察者相关函数："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义一变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *appHicollieWatcherR;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void OnReceiveAppHicollie(const struct HiAppEvent_AppEventGroup *appEventGroups, int i, int j)\n{\n    if (strcmp(appEventGroups[i].appEventInfos[j].domain, DOMAIN_OS) == 0 &&\n        strcmp(appEventGroups[i].appEventInfos[j].name, EVENT_APP_HICOLLIE) == 0) {\n        Json::Value params;\n        Json::Reader reader(Json::Features::strictMode());\n        Json::FastWriter writer;\n        if (reader.parse(appEventGroups[i].appEventInfos[j].params, params)) {\n            auto time = params[\"time\"].asInt64();\n            auto foreground = params[\"foreground\"].asBool();\n            auto bundleVersion = params[\"bundle_version\"].asString();\n            auto processName = params[\"process_name\"].asString();\n            auto pid = params[\"pid\"].asInt();\n            auto uid = params[\"uid\"].asInt();\n            auto uuid = params[\"uuid\"].asString();\n            auto exception = writer.write(params[\"exception\"]);\n            auto hilogSize = params[\"hilog\"].size();\n            auto peerBindSize =  params[\"peer_binder\"].size();\n            auto memory =  writer.write(params[\"memory\"]);\n            auto externalLog = writer.write(params[\"external_log\"]);\n            auto logOverLimit = params[\"log_over_limit\"].asBool();\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\", time);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.foreground=%{public}d\", foreground);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\",\n                bundleVersion.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.process_name=%{public}s\", processName.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.pid=%{public}d\", pid);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uid=%{public}d\", uid);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uuid=%{public}s\", uuid.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.exception=%{public}s\", exception.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.hilog.size=%{public}d\", hilogSize);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.peer_binder.size=%{public}d\", peerBindSize);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.memory=%{public}s\", memory.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.external_log=%{public}s\", externalLog.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.log_over_limit=%{public}d\", logOverLimit);\n        }\n    }\n}\n\nstatic void AppHicollieOnReceive(const char *domain, const struct HiAppEvent_AppEventGroup *appEventGroups,\n    uint32_t groupLen)\n{\n    for (int i = 0; i < groupLen; ++i) {\n        for (int j = 0; j < appEventGroups[i].infoLen; ++j) {\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\",\n                appEventGroups[i].appEventInfos[j].domain);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\",\n                appEventGroups[i].appEventInfos[j].name);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\",\n                appEventGroups[i].appEventInfos[j].type);\n            OnReceiveAppHicollie(appEventGroups, i, j);\n        }\n    }\n}\n\nstatic napi_value RegisterAppHicollieWatcherR(napi_env env, napi_callback_info info)\n{\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    appHicollieWatcherR = OH_HiAppEvent_CreateWatcher(\"appHicollieWatcherR\");\n    // 设置订阅的事件为EVENT_APP_HICOLLIE。\n    const char *names[] = {EVENT_APP_HICOLLIE};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(appHicollieWatcherR, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，观察者接收到事件后回立即触发OnReceive回调。\n    OH_HiAppEvent_SetWatcherOnReceive(appHicollieWatcherR, AppHicollieOnReceive);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(appHicollieWatcherR);\n    return {};\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "onTrigger类型观察者"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，定义OnTrigger类型观察者相关函数："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义一变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *appHicollieWatcherT;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 开发者可以自行实现获取已监听到事件的回调函数，其中events指针指向内容仅在该函数内有效。\nstatic void AppHicollieOnTake(const char *const *events, uint32_t eventLen)\n{\n    Json::Reader reader(Json::Features::strictMode());\n    Json::FastWriter writer;\n    for (int i = 0; i < eventLen; ++i) {\n        Json::Value eventInfo;\n        if (reader.parse(events[i], eventInfo)) {\n            auto domain =  eventInfo[\"domain_\"].asString();\n            auto name = eventInfo[\"name_\"].asString();\n            auto type = eventInfo[\"type_\"].asInt();\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\", domain.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\", name.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\", type);\n            if (domain ==  DOMAIN_OS && name == EVENT_APP_HICOLLIE) {\n                auto time = eventInfo[\"time\"].asInt64();\n                auto foreground = eventInfo[\"foreground\"].asBool();\n                auto bundleVersion = eventInfo[\"bundle_version\"].asString();\n                auto processName = eventInfo[\"process_name\"].asString();\n                auto pid = eventInfo[\"pid\"].asInt();\n                auto uid = eventInfo[\"uid\"].asInt();\n                auto uuid = eventInfo[\"uuid\"].asString();\n                auto exception = writer.write(eventInfo[\"exception\"]);\n                auto hilogSize = eventInfo[\"hilog\"].size();\n                auto peerBindSize =  eventInfo[\"peer_binder\"].size();\n                auto memory =  writer.write(eventInfo[\"memory\"]);\n                auto externalLog = writer.write(eventInfo[\"external_log\"]);\n                auto logOverLimit = eventInfo[\"log_over_limit\"].asBool();\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\", time);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.foreground=%{public}d\", foreground);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\",\n                    bundleVersion.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.process_name=%{public}s\",\n                    processName.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.pid=%{public}d\", pid);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uid=%{public}d\", uid);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.uuid=%{public}s\", uuid.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.exception=%{public}s\", exception.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.hilog.size=%{public}d\", hilogSize);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.peer_binder.size=%{public}d\", peerBindSize);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.memory=%{public}s\", memory.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.external_log=%{public}s\",\n                    externalLog.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.log_over_limit=%{public}d\", logOverLimit);\n            }\n        }\n    }\n}\n\n// 开发者可以自行实现订阅回调函数，以便对获取到的事件打点数据进行自定义处理。\nstatic void AppHicollieOnTrigger(int row, int size)\n{\n    // 接收回调后，获取指定数量的已接收事件。\n    OH_HiAppEvent_TakeWatcherData(appHicollieWatcherT, row, AppHicollieOnTake);\n}\n\nstatic napi_value RegisterAppHicollieWatcherT(napi_env env, napi_callback_info info)\n{\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    appHicollieWatcherT = OH_HiAppEvent_CreateWatcher(\"appHicollieWatcherT\");\n    // 设置订阅的事件为EVENT_APP_HICOLLIE。\n    const char *names[] = {EVENT_APP_HICOLLIE};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(appHicollieWatcherT, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，需OH_HiAppEvent_SetTriggerCondition设置的条件满足方可触发。\n    OH_HiAppEvent_SetWatcherOnTrigger(appHicollieWatcherT, AppHicollieOnTrigger);\n    // 开发者可以设置订阅触发回调的条件，此处是设置新增事件打点数量为1个时，触发onTrigger回调。\n    OH_HiAppEvent_SetTriggerCondition(appHicollieWatcherT, 1, 0, 0);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(appHicollieWatcherT);\n    return {};\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新增TestHiCollieTimerNdk函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，新增TestHiCollieTimerNdk函数，构造任务执行超时事件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <unistd.h>\n#include \"hicollie/hicollie.h\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义回调函数\nvoid CallBack(void*)\n{\n    OH_LOG_INFO(LogType::LOG_APP, \"HiCollieTimerNdk CallBack\");  // 回调函数中打印日志\n}\n\nstatic napi_value TestHiCollieTimerNdk(napi_env env, napi_callback_info info)\n{\n    int id;\n    // 设置HiCollieTimer 参数（Timer任务名，超时时间，回调函数，回调函数参数，超时发生后行为）\n    HiCollie_SetTimerParam param = {\"testTimer\", 1, CallBack, nullptr, HiCollie_Flag::HICOLLIE_FLAG_LOG};\n    HiCollie_ErrorCode errorCode = OH_HiCollie_SetTimer(param, &id);  // 注册HiCollieTimer函数执行时长超时检测一次性任务\n    if (errorCode == HICOLLIE_SUCCESS) {  // HiCollieTimer任务注册成功\n        OH_LOG_INFO(LogType::LOG_APP, \"HiCollieTimer taskId: %{public}d\", id); // 打印任务id\n        sleep(2);  // 模拟执行耗时函数，在这里简单的将线程阻塞2s\n        OH_HiCollie_CancelTimer(id);  // 根据id取消已注册任务\n    }\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将RegisterWatcher及TestHiCollieTimerNdk注册为ArkTS接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，在Init函数中的desc[]数组中将TestHiCollieTimerNdk、RegisterAppHicollieWatcherR及RegisterAppHicollieWatcherR方法注册为ArkTS接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将TestHiCollieTimerNdk注册为ArkTS接口\n{ \"TestHiCollieTimerNdk\", nullptr, TestHiCollieTimerNdk, nullptr, nullptr, nullptr, napi_default, nullptr },\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{ \"RegisterAppHicollieWatcherR\", nullptr, RegisterAppHicollieWatcherR, nullptr, nullptr, nullptr,\n    napi_default, nullptr },\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{ \"RegisterAppHicollieWatcherT\", nullptr, RegisterAppHicollieWatcherT, nullptr, nullptr, nullptr,\n    napi_default, nullptr },\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“index.d.ts”文件，定义ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const TestHiCollieTimerNdk: () => void;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const RegisterAppHicollieWatcherR: () => void;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const RegisterAppHicollieWatcherT: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“EntryAbility.ets”文件，在onCreate()函数中新增接口调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在onCreate()函数中新增接口调用，启动时注册系统事件观察者R\ntestNapi.RegisterAppHicollieWatcherR();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在onCreate()函数中新增接口调用，启动时注册系统事件观察者T\ntestNapi.RegisterAppHicollieWatcherT();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“Index.ets”文件，新增按钮触发任务执行超时事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Index页面新增触发TestHiCollieTimerNdk方法的按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 添加点击事件，触发TestHiCollieTimerNdk方法。\nButton('TestHiCollieTimerNdk')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    testNapi.TestHiCollieTimerNdk();\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程，然后在应用界面中点击按钮“TestHiCollieTimerNdk”，触发任务执行超时事件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "验证观察者是否订阅到任务执行超时事件",
      children: "验证观察者是否订阅到任务执行超时事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用工程崩溃退出后再次运行可以在Log窗口看到对系统事件数据的处理日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAppEvent eventInfo.domain=OS\nHiAppEvent eventInfo.name=APP_HICOLLIE\nHiAppEvent eventInfo.eventType=1\nHiAppEvent eventInfo.params.time=1740993639620\nHiAppEvent eventInfo.params.foreground=1\nHiAppEvent eventInfo.params.bundle_version=1.0.0\nHiAppEvent eventInfo.params.process_name=com.example.myapplication\nHiAppEvent eventInfo.params.pid=26251\nHiAppEvent eventInfo.params.uid=20020172\nHiAppEvent eventInfo.params.uuid=4e5d7d0e18f5d6d84cf4f0c9e80d66d0b646c1cc2343d3595f07abb0d3547feb\nHiAppEvent eventInfo.params.exception={\"message\":\"\",\"name\":\"APP_HICOLLIE\"}\nHiAppEvent eventInfo.params.hilog.size=77\nHiAppEvent eventInfo.params.peer_binder.size=18\nHiAppEvent eventInfo.params.memory={\"pss\":0,\"rss\":124668,\"sys_avail_mem\":2220032,\"sys_free_mem\":526680,\"sys_total_mem\":11692576,\"vss\":4238700}\nHiAppEvent eventInfo.params.external_log=[\"/data/storage/el2/log/hiappevent/APP_HICOLLIE_1740993644458_26215.log\"]\nHiAppEvent eventInfo.params.log_over_limit=0\n"
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
            children: "static napi_value RemoveWatcher(napi_env env, napi_callback_info info)\n{\n    // 使观察者停止监听事件\n    // ···\n    OH_HiAppEvent_RemoveWatcher(appHicollieWatcherR);\n    OH_HiAppEvent_RemoveWatcher(appHicollieWatcherT);\n    // ···\n    return {};\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁事件观察者。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value DestroyWatcher(napi_env env, napi_callback_info info)\n{\n    // 销毁创建的观察者，并置eventWatcher为nullptr。\n    // ···\n    OH_HiAppEvent_DestroyWatcher(appHicollieWatcherR);\n    OH_HiAppEvent_DestroyWatcher(appHicollieWatcherT);\n    appHicollieWatcherR = nullptr;\n    appHicollieWatcherT = nullptr;\n    // ···\n    return {};\n}\n"
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