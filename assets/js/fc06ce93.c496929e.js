"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["238753"], {
183458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_hiappevent_audio_jank_event_hiappevent_watcher_audio_jank_event_c_hiappevent_watcher_audio_jank_event_c_md_fc0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-hiappevent-audio-jank-event-hiappevent-watcher-audio-jank-event-c-hiappevent-watcher-audio-jank-event-c-md-fc0.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_hiappevent_audio_jank_event_hiappevent_watcher_audio_jank_event_c_hiappevent_watcher_audio_jank_event_c_md_fc0_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/hiappevent-audio-jank-event/hiappevent-watcher-audio-jank-event-c/hiappevent-watcher-audio-jank-event-c","title":"订阅音频卡顿事件（C/C++）","description":"接口说明","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/hiappevent-audio-jank-event/hiappevent-watcher-audio-jank-event-c/hiappevent-watcher-audio-jank-event-c.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/hiappevent-audio-jank-event/hiappevent-watcher-audio-jank-event-c","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/hiappevent-audio-jank-event/hiappevent-watcher-audio-jank-event-c/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/hiappevent-audio-jank-event/hiappevent-watcher-audio-jank-event-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"订阅音频卡顿事件（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-audio-jank-event-c","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅音频卡顿事件（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/hiappevent-audio-jank-event/hiappevent-watcher-audio-jank-event-arkts/"},"next":{"title":"HiAppEvent常见问题","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/hiappevent-audio-jank-event/hiappevent-watcher-audio-jank-event-c/hiappevent-watcher-audio-jank-event-c.md


const frontMatter = {
	title: '订阅音频卡顿事件（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-audio-jank-event-c',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅音频卡顿事件（C/C++）';

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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "订阅音频卡顿事件cc",
        children: "订阅音频卡顿事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何使用HiAppEvent提供的C/C++接口订阅音频卡顿事件。详细使用说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h",
        children: "HiAppEvent C API文档"
      }), "。"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取示例工程的依赖项jsoncpp。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/open-source-parsers/jsoncpp",
            children: "三方开源库jsoncpp代码仓"
          }), "README中", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amalgamated source"
            })
          }), "部分，获取jsoncpp.cpp、json.h和json-forwards.h三个文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建Native C++工程，并将上述文件导入到新建工程，目录结构如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  src:\n    main:\n      cpp:\n        - json:\n            - json.h\n            - json-forwards.h\n        - types:\n            libentry:\n              - index.d.ts\n        - CMakeLists.txt\n        - napi_init.cpp\n        - jsoncpp.cpp\n      ets:\n        - entryability:\n            - EntryAbility.ets\n        - pages:\n            - Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“CMakeLists.txt”文件中，添加源文件和动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 新增jsoncpp.cpp(解析订阅事件中的json字符串)源文件\nadd_library(entry SHARED napi_init.cpp jsoncpp.cpp)\n# 新增动态库依赖libhiappevent_ndk.z.so和libhilog_ndk.z.so(日志输出)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libhiappevent_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“napi_init.cpp”文件中，导入依赖文件，并定义LOG_TAG。"
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
              children: "在“napi_init.cpp”文件中，定义onReceive类型观察者的方法："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "//定义变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *systemEventWatcher;\n\nstatic void OnReceive(const char *domain, const struct HiAppEvent_AppEventGroup *appEventGroups, uint32_t groupLen) {\n    for (int i = 0; i < groupLen; ++i) {\n        for (int j = 0; j < appEventGroups[i].infoLen; ++j) {\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\", appEventGroups[i].appEventInfos[j].domain);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\", appEventGroups[i].appEventInfos[j].name);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\", appEventGroups[i].appEventInfos[j].type);\n            if (strcmp(appEventGroups[i].appEventInfos[j].domain, DOMAIN_OS) == 0 &&\n                strcmp(appEventGroups[i].appEventInfos[j].name, EVENT_AUDIO_JANK_FRAME) == 0) {\n                Json::Value params;\n                Json::Reader reader(Json::Features::strictMode());\n                Json::FastWriter writer;\n                if (reader.parse(appEventGroups[i].appEventInfos[j].params, params)) {\n                    auto time = params[\"time\"].asInt64();\n                    auto bundleVersion = params[\"bundle_version\"].asString();\n                    auto bundleName = params[\"bundle_name\"].asString();\n                    auto faultType = params[\"fault_type\"].asString();\n                    auto happenTime = params[\"happen_time\"].asInt64();\n                    auto maxFrameTime = params[\"max_frame_time\"].asInt64();\n                    \n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}ld\", time);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\", bundleVersion.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_name=%{public}s\", bundleName.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.fault_type=%{public}s\", faultType.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.happen_time=%{public}ld\", happenTime);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.max_frame_time=%{public}ld\", maxFrameTime);\n                }\n            }\n        }\n    }\n}\n\nstatic napi_value RegisterWatcher(napi_env env, napi_callback_info info) {\n    // 开发者自定义观察者名称，系统根据观察者名称识别不同的观察者。\n    systemEventWatcher = OH_HiAppEvent_CreateWatcher(\"onReceiverWatcher\");\n    // 订阅的事件为AUDIO_JANK_FRAME。\n    const char *names[] = {EVENT_AUDIO_JANK_FRAME};\n    // 此处开发者订阅了系统事件AUDIO_JANK_FRAME。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcher, DOMAIN_OS, 0, names, 1);\n    // 开发者通过调用OH_HiAppEvent_SetWatcherOnReceive函数设置已实现的回调函数，观察者接收到事件后会触发OnReceive回调。\n    OH_HiAppEvent_SetWatcherOnReceive(systemEventWatcher, OnReceive);\n    // 启动观察者以监听事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcher);\n    return {};\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "onTrigger类型观察者"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在“napi_init.cpp”文件中，定义OnTrigger类型观察者："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 开发者可以自行实现获取已监听到事件的回调函数，其中events指针指向内容仅在该函数内有效。\nstatic void OnTake(const char *const *events, uint32_t eventLen) {\n    Json::Reader reader(Json::Features::strictMode());\n    Json::FastWriter writer;\n    for (int i = 0; i < eventLen; ++i) {\n        Json::Value eventInfo;\n        if (reader.parse(events[i], eventInfo)) {\n            auto domain =  eventInfo[\"domain_\"].asString();\n            auto name = eventInfo[\"name_\"].asString();\n            auto type = eventInfo[\"type_\"].asInt();\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\", domain.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\", name.c_str());\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\", type);\n            if (domain ==  DOMAIN_OS && name == EVENT_AUDIO_JANK_FRAME) {\n                auto time = eventInfo[\"time\"].asInt64();\n                auto bundleVersion = eventInfo[\"bundle_version\"].asString();\n                auto bundleName = eventInfo[\"bundle_name\"].asString();\n                auto faultType = eventInfo[\"fault_type\"].asString();\n                auto happenTime = eventInfo[\"happen_time\"].asInt64();\n                auto maxFrameTime = eventInfo[\"max_frame_time\"].asInt64();\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}ld\", time);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_version=%{public}s\", bundleVersion.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.bundle_name=%{public}s\", bundleName.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.fault_type=%{public}s\", faultType.c_str());\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.happen_time=%{public}ld\", happenTime);\n                OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.max_frame_time=%{public}ld\", maxFrameTime);\n            }\n        }\n    }\n}\n\n// 开发者可以自行实现订阅回调函数，以便对获取到的事件打点数据进行自定义处理。\nstatic void OnTrigger(int row, int size) {\n    // 接收回调后，获取指定数量的已接收事件。\n    OH_HiAppEvent_TakeWatcherData(systemEventWatcher, row, OnTake);\n}\n\nstatic napi_value RegisterWatcher(napi_env env, napi_callback_info info) {\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    systemEventWatcher = OH_HiAppEvent_CreateWatcher(\"onTriggerWatcher\");\n    // 设置订阅的事件为EVENT_AUDIO_JANK_FRAME。\n    const char *names[] = {EVENT_AUDIO_JANK_FRAME};\n    \n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcher, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，需OH_HiAppEvent_SetTriggerCondition设置的条件满足方可触发。\n    OH_HiAppEvent_SetWatcherOnTrigger(systemEventWatcher, OnTrigger);\n    // 开发者可以设置订阅触发回调的条件，此处是设置新增事件打点数量为1个时，触发onTrigger回调。\n    OH_HiAppEvent_SetTriggerCondition(systemEventWatcher, 1, 0, 0);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcher);\n    return {};\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将RegisterWatcher注册为ArkTS接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“napi_init.cpp”文件中，将RegisterWatcher注册为ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"registerWatcher\", nullptr, RegisterWatcher, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\nnapi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\nreturn exports;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“index.d.ts”文件中，定义ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const registerWatcher: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“EntryAbility.ets”文件的onCreate()函数中添加接口调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入依赖模块\nimport testNapi from 'libentry.so';\n// 在onCreate()函数中新增接口调用\n// 启动时，注册系统事件观察者\ntestNapi.registerWatcher();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，添加一个模拟写入音频数据回调函数normalCallback，在该回调中模拟卡顿主动返回INVALID（不送数据）来触发卡顿故障事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let g_invalidCount = 0;\nfunction normalCallback(buffer: ArrayBuffer) {\n  if (g_invalidCount > 0) {\n    g_invalidCount--;\n    return audio.AudioDataCallbackResult.INVALID;\n  }\n  //在此添加写数据逻辑\n  return audio.AudioDataCallbackResult.VALID;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，添加一个卡顿触发按钮，改变INVALID返回次数，模拟相应音频卡顿。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Row() {\n  Button(\"卡顿\").onClick(async () => {\n    g_invalidCount = 30;\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，在创建AudioRender实例时，进行耗时操作回调"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "audio.createAudioRenderer(audioRendererOptions, (err, renderer) => { // 创建    AudioRenderer实例\n  if (!err) {\n    console.info(`${TAG}: creating AudioRenderer success`);\n    this.renderModel = renderer;\n    if (this.renderModel !== undefined) {\n      this.renderModel.on('writeData', normalCallback);\n    }\n  } else {\n    console.info(`${TAG}: creating AudioRenderer failed, error: ${err.message}`);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AudioRender正常播放时，点击卡顿按钮，即可触发耗时回调，触发音频卡顿事件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每次音频卡顿触发后，可以在Log窗口看到对系统事件数据的处理日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HiAppEvent eventInfo.domain=OS\nHiAppEvent eventInfo.name=AUDIO_JANK_FRAME\nHiAppEvent eventInfo.eventType=1\nHiAppEvent eventInfo.params.time=1762739184665\nHiAppEvent eventInfo.params.bundle_version=1.0.0\nHiAppEvent eventInfo.params.bundle_name=com.samples.audio\nHiAppEvent eventInfo.params.fault_type=application\nHiAppEvent eventInfo.params.happen_time=176273918\nHiAppEvent eventInfo.params.max_frame_time=220\n"
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