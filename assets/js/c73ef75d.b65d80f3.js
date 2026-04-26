"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["238360"], {
367992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_hiappevent_watcher_app_events_ndk_hiappevent_watcher_app_events_ndk_md_c73_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-hiappevent-watcher-app-events-ndk-hiappevent-watcher-app-events-ndk-md-c73.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_hiappevent_watcher_app_events_ndk_hiappevent_watcher_app_events_ndk_md_c73_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-ndk/hiappevent-watcher-app-events-ndk","title":"事件订阅（C/C++）","description":"HiAppEvent提供了事件订阅接口，用于订阅并接收应用产生的事件。","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-ndk/hiappevent-watcher-app-events-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"事件订阅（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-events-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"事件订阅（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-arkts/"},"next":{"title":"崩溃事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-ndk/hiappevent-watcher-app-events-ndk.md


const frontMatter = {
	title: '事件订阅（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-events-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '事件订阅（C/C++）';

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
  "value": "步骤一：新建工程及编译配置",
  "id": "步骤一新建工程及编译配置",
  "level": 3
}, {
  "value": "步骤二：订阅事件",
  "id": "步骤二订阅事件",
  "level": 3
}, {
  "value": "步骤三：触发事件",
  "id": "步骤三触发事件",
  "level": 3
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
        id: "事件订阅cc",
        children: "事件订阅（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiAppEvent提供了事件订阅接口，用于订阅并接收应用产生的事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API接口的使用说明，包括参数使用限制和取值范围，请参考", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "int OH_HiAppEvent_AddWatcher(HiAppEvent_Watcher* watcher)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用的事件观察者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_HiAppEvent_RemoveWatcher(HiAppEvent_Watcher* watcher)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除应用的事件观察者。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "打点接口功能介绍"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_HiAppEvent_Write(const char* domain, const char* name, enum EventType type, const ParamList list)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实现对参数为列表类型的应用事件打点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件订阅开发指导",
      children: "事件订阅开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以订阅崩溃事件（系统事件）和按钮点击事件（应用事件）为例，说明开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤一新建工程及编译配置",
      children: "步骤一：新建工程及编译配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将示例工程依赖的jsoncpp库文件复制到新建工程中。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开链接", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/PerformanceAnalysisKit/HiAppEvent/EventSub",
            children: "HiAppEvent示例工程EventSub"
          }), "，并点击“下载当前目录”，下载EventSub工程文件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个Native C++工程。从解压后的EventSub文件夹中拷贝jsoncpp库文件（entry/libs和entry/src/main/cpp/thirdparty整个目录）到新建的工程中，得到的目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry\n├── libs        // 自行创建文件夹,放入相关的三方库\n└── src\n    ├── main\n    │   ├── cpp\n    │   │   ├── CMakeLists.txt       // 导入so链接\n    │   │   ├── napi_init.cpp        // 功能函数，观察者定义\n    │   │   ├── thirdparty    // 自行创建文件夹,放入相关的三方库\n    │   │   │   └── jsoncpp\n    │   │   └── types\n    │   │       └── libentry\n    │   │           ├── Index.d.ts        // 定义ArkTS接口\n    │   │           └── oh-package.json5\n    │   ├── ets\n    │   │   ├── entryability\n    │   │   │   └── EntryAbility.ets    // 新增接口调用\n    │   │   ├── entrybackupability\n    │   │   │   └── EntryBackupAbility.ets\n    │   │   └── pages\n    │   │       └── Index.ets        // 主页\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该示例工程中jsoncpp库文件对应的源码来自", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/open-source-parsers/jsoncpp/archive/refs/tags/1.9.6.tar.gz",
            children: "三方开源库jsoncpp"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“CMakeLists.txt”文件，添加所需的源文件和动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "set(GZ_FILE \"${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/jsoncpp/src/jsoncpp-1.9.6.tar.gz\")\nset(DEST_DIR \"${CMAKE_CURRENT_SOURCE_DIR}/../../../build\")\n# 检查是否存在entry/build目录\nexecute_process(COMMAND ${CMAKE_COMMAND} -E make_directory ${DEST_DIR})\n# 解压jsoncpp-1.9.6.tar.gz到entry/build，得到jsoncpp头文件的目录\nexecute_process(COMMAND tar -xzf ${GZ_FILE} -C ${DEST_DIR}\n    WORKING_DIRECTORY ${DEST_DIR})\n\nadd_library(entry SHARED napi_init.cpp)\n# 新增动态库依赖libhiappevent_ndk.z.so和libhilog_ndk.z.so(日志输出)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libhiappevent_ndk.z.so)\n# 新增三方库依赖libjsoncpp.so(解析订阅事件中的json字符串)\ntarget_link_libraries(entry PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/jsoncpp/${OHOS_ARCH}/lib/libjsoncpp.so)\ntarget_include_directories(entry PRIVATE ${DEST_DIR}/jsoncpp-1.9.6/include/json)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，导入依赖的文件并定义LOG_TAG："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n// 根据工程中三方库jsoncpp的位置适配引用json.h的路径\n#include \"../../../build/jsoncpp-1.9.6/include/json/json.h\"\n#include \"hiappevent/hiappevent.h\"\n#include \"hilog/log.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤二订阅事件",
      children: "步骤二：订阅事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅事件。分别使用OnReceive类型观察者、OnTrigger类型观察者的订阅方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "订阅崩溃事件（系统事件），采用OnReceive类型观察者的订阅方式，观察者接收到事件后会立即触发OnReceive()回调。编辑“napi_init.cpp”文件，定义OnReceive类型观察者相关方法："
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *eventWatcherR1;\n\nstatic void OnReceive1(const char *domain, const struct HiAppEvent_AppEventGroup *appEventGroups, uint32_t groupLen)\n{\n    OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent success to read events with onReceive callback from C API \\n\");\n    for (int i = 0; i < groupLen; ++i) {\n        for (int j = 0; j < appEventGroups[i].infoLen; ++j) {\n            OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.domain=%{public}s\",\n                appEventGroups[i].appEventInfos[j].domain);\n            OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.name=%{public}s\",\n                appEventGroups[i].appEventInfos[j].name);\n            OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.eventType=%{public}d\",\n                appEventGroups[i].appEventInfos[j].type);\n            if (strcmp(appEventGroups[i].appEventInfos[j].domain, DOMAIN_OS) != 0 ||\n                strcmp(appEventGroups[i].appEventInfos[j].name, EVENT_APP_CRASH) != 0) {\n                continue;\n            }\n            Json::Value params;\n            Json::Reader reader(Json::Features::strictMode());\n            Json::FastWriter writer;\n            if (reader.parse(appEventGroups[i].appEventInfos[j].params, params)) {\n                // 开发者可以获取到崩溃事件发生的时间戳\n                OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.params.time=%{public}lld\",\n                    params[\"time\"].asInt64());\n                // 开发者可以获取到崩溃应用的包名\n                OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.params.bundle_name=%{public}s\",\n                    params[\"bundle_name\"].asString().c_str());\n                auto external_log = writer.write(params[\"external_log\"]);\n                // 开发者可以获取到崩溃事件发生时的故障日志文件\n                OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.params.external_log=%{public}s\",\n                    external_log.c_str());\n            }\n        }\n    }\n}\nstatic napi_value RegisterWatcherCrash(napi_env env, napi_callback_info info)\n{\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    eventWatcherR1 = OH_HiAppEvent_CreateWatcher(\"AppCrashWatcher1\");\n    // 设置订阅的事件名称为EVENT_APP_CRASH，即崩溃事件。\n    const char *names[] = {EVENT_APP_CRASH};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(eventWatcherR1, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，观察者接收到事件后会立即触发OnReceive1回调。\n    OH_HiAppEvent_SetWatcherOnReceive(eventWatcherR1, OnReceive1);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(eventWatcherR1);\n    return {};\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "订阅按钮点击事件（应用事件），采用OnTrigger类型观察者的订阅方式。需满足OH_HiAppEvent_SetTriggerCondition()设置的条件，才能触发OnTrigger()回调。编辑 “napi_init.cpp”文件，定义OnTrigger类型观察者相关方法："
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *eventWatcherT1;\n// 开发者可以自行实现获取已监听到事件的回调函数，其中events指针指向内容仅在该函数内有效。\nstatic void OnTake1(const char *const *events, uint32_t eventLen)\n{\n    Json::Reader reader(Json::Features::strictMode());\n    OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent success to read events with onTrigger callback from C API \\n\");\n    for (int i = 0; i < eventLen; ++i) {\n        OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo=%{public}s\", events[i]);\n        Json::Value eventInfo;\n        if (reader.parse(events[i], eventInfo)) {\n            auto domain = eventInfo[\"domain_\"].asString();\n            auto name = eventInfo[\"name_\"].asString();\n            auto type = eventInfo[\"type_\"].asInt();\n            OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.domain=%{public}s\", domain.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.name=%{public}s\", name.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.eventType=%{public}d\", type);\n            if (domain == \"button\" && name == \"click\") {\n                auto clickTime = eventInfo[\"clickTime\"].asInt64();\n                OH_LOG_INFO(LogType::LOG_APP, \"AppEvents HiAppEvent eventInfo.params.clickTime=%{public}lld\",\n                    clickTime);\n            }\n        }\n    }\n}\n\n// 开发者可以自行实现订阅回调函数，以便对获取到的事件打点数据进行自定义处理。\nstatic void OnTrigger1(int row, int size)\n{\n    // 接收回调后，获取指定数量的已接收事件。\n    OH_HiAppEvent_TakeWatcherData(eventWatcherT1, row, OnTake1);\n}\n\nstatic napi_value RegisterWatcherClick(napi_env env, napi_callback_info info)\n{\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    eventWatcherT1 = OH_HiAppEvent_CreateWatcher(\"ButtonClickWatcher1\");\n    // 设置订阅的事件名称为click。\n    const char *names[] = {\"click\"};\n    // 开发者订阅感兴趣的应用事件，此处订阅了button相关事件。\n    OH_HiAppEvent_SetAppEventFilter(eventWatcherT1, \"button\", 0, names, 1);\n    // 开发者设置已实现的回调函数，需OH_HiAppEvent_SetTriggerCondition设置的条件满足方可触发。\n    OH_HiAppEvent_SetWatcherOnTrigger(eventWatcherT1, OnTrigger1);\n    // 开发者可以设置订阅触发回调的条件，此处是设置新增事件打点数量为1个时，触发onTrigger回调。\n    OH_HiAppEvent_SetTriggerCondition(eventWatcherT1, 1, 0, 0);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(eventWatcherT1);\n    return {};\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，添加按钮点击事件的打点接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value WriteAppEvent(napi_env env, napi_callback_info info)\n{\n    auto params = OH_HiAppEvent_CreateParamList();\n    OH_HiAppEvent_AddInt64Param(params, \"clickTime\", time(nullptr));\n    OH_HiAppEvent_Write(\"button\", \"click\", EventType::BEHAVIOR, params);\n    OH_HiAppEvent_DestroyParamList(params);\n    OH_LOG_INFO(LogType::LOG_APP, \"writeEvent C++ success\");\n    return {};\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，注册RegisterWatcherCrash()(订阅崩溃事件)、RegisterWatcherClick()（订阅按钮点击事件）、WriteAppEvent()(按钮点击事件打点接口)为ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ...\n\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        // ...\n        { \"registerWatcherCrash\", nullptr, RegisterWatcherCrash, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"registerWatcherClick\", nullptr, RegisterWatcherClick, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"writeAppEvent\", nullptr, WriteAppEvent, nullptr, nullptr, nullptr, napi_default, nullptr },\n        // ...\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“index.d.ts”文件，定义ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const registerWatcherCrash: () => void;\nexport const registerWatcherClick: () => void;\nexport const writeAppEvent: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“EntryAbility.ets”文件，在onCreate()函数中添加接口调用："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在onCreate()函数中添加C API接口调用\n// 启动时，注册崩溃事件观察者\ntestNapi.registerWatcherCrash();\n// 启动时，注册按钮点击事件观察者\ntestNapi.registerWatcherClick();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤三触发事件",
      children: "步骤三：触发事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑“Index.ets”文件，新增“WatchAppCrash ArkTS&C++”按钮以触发崩溃事件；新增“writeEvent C++”按钮，在按钮点击函数中进行事件打点。示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import testNapi from 'libentry.so';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('WatchAppCrash ArkTS&C++')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    // 在按钮点击函数中构造一个crash场景，触发崩溃事件\n    let result: object = JSON.parse('');\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('writeEvent C++')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    testNapi.writeAppEvent();\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程。在应用界面中点击“WatchAppCrash ArkTS&C++”按钮，触发崩溃事件。应用退出后重新打开应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "搜索关键字“AppEvents”，在HiLog窗口查看应用处理崩溃事件数据的日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AppEvents HiAppEvent success to read events with onReceive callback from C API\nAppEvents HiAppEvent eventInfo.domain=OS\nAppEvents HiAppEvent eventInfo.name=APP_CRASH\nAppEvents HiAppEvent eventInfo.eventType=1\nAppEvents HiAppEvent eventInfo.params.time=1750946685473\nAppEvents HiAppEvent eventInfo.params.bundle_name=com.example.cxxxx\nAppEvents HiAppEvent eventInfo.params.external_log=[\"/data/storage/el2/log/hiappevent/APP_CRASH_1750946685805_64003.log\"]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“writeEvent C++”按钮，触发按钮点击事件。搜索关键字“AppEvents”，在HiLog窗口查看应用处理按钮点击事件数据的日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AppEvents HiAppEvent success to read events with onTrigger callback from C API\nAppEvents HiAppEvent eventInfo={\"domain_\":\"button\",\"name_\":\"click\",\"type_\":4,\"time_\":1750947007108,\"tz_\":\"\",\"pid_\":64750,\"tid_\":64750,\"clickTime\":1750947007}\nAppEvents HiAppEvent eventInfo.domain=button\nAppEvents HiAppEvent eventInfo.name=click\nAppEvents HiAppEvent eventInfo.eventType=4\nAppEvents HiAppEvent eventInfo.params.clickTime=1750947007\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移除应用的事件观察者："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value RemoveWatcher(napi_env env, napi_callback_info info)\n{\n    // 使观察者停止监听事件\n    // ...\n    OH_HiAppEvent_RemoveWatcher(eventWatcherT1);\n    OH_HiAppEvent_RemoveWatcher(eventWatcherR1);\n    // ...\n    return {};\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁应用的事件观察者："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value DestroyWatcher(napi_env env, napi_callback_info info)\n{\n    // 销毁创建的观察者，并置eventWatcher为nullptr。\n    // ...\n    OH_HiAppEvent_DestroyWatcher(eventWatcherT1);\n    OH_HiAppEvent_DestroyWatcher(eventWatcherR1);\n    eventWatcherT1 = nullptr;\n    eventWatcherR1 = nullptr;\n    // ...\n    return {};\n}\n"
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