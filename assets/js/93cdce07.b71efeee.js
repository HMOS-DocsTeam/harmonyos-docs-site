"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["323234"], {
582420(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_app_killed_events_hiappevent_watcher_app_killed_events_ndk_hiappevent_watcher_app_killed_events_ndk_md_93c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-app-killed-events-hiappevent-watcher-app-killed-events-ndk-hiappevent-watcher-app-killed-events-ndk-md-93c.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_app_killed_events_hiappevent_watcher_app_killed_events_ndk_hiappevent_watcher_app_killed_events_ndk_md_93c_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events-ndk/hiappevent-watcher-app-killed-events-ndk","title":"订阅应用终止事件（C/C++）","description":"应用终止事件规格说明","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events-ndk/hiappevent-watcher-app-killed-events-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"订阅应用终止事件（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-killed-events-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅应用终止事件（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events-arkts/"},"next":{"title":"启动耗时事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-event/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events-ndk/hiappevent-watcher-app-killed-events-ndk.md


const frontMatter = {
	title: '订阅应用终止事件（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-killed-events-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅应用终止事件（C/C++）';

const assets = {

};



const toc = [{
  "value": "应用终止事件规格说明",
  "id": "应用终止事件规格说明",
  "level": 2
}, {
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
        id: "订阅应用终止事件cc",
        children: "订阅应用终止事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用终止事件规格说明",
      children: "应用终止事件规格说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events",
        children: "应用终止事件介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API接口的具体使用说明（参数使用限制、具体取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h",
        children: "HiAppEvent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "订阅接口功能介绍："
        })
      })
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
          children: "新建Native C++工程，并将jsoncpp导入到新建工程内，目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  src:\n    main:\n      cpp:\n        - json:\n            - json.h\n            - json-forwards.h\n        - types:\n            libentry:\n              - index.d.ts\n        - CMakeLists.txt\n        - napi_init.cpp\n        - jsoncpp.cpp\n      ets:\n        - entryability:\n            - EntryAbility.ets\n        - pages:\n            - Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑\"CMakeLists.txt\"文件，添加源文件及动态库："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 新增jsoncpp.cpp(解析订阅事件中的json字符串)源文件\nadd_library(entry SHARED napi_init.cpp jsoncpp.cpp)\n# 新增动态库依赖libhiappevent_ndk.z.so和libhilog_ndk.z.so(日志输出)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libhiappevent_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑\"napi_init.cpp\"文件，导入依赖的文件，并定义LOG_TAG："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"json/json.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n#include \"hiappevent/hiappevent_event.h\"\n#include <thread>\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅系统事件："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "onReceive类型观察者："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑\"napi_init.cpp\"文件，定义onReceive类型观察者相关方法，并且新增Native内存泄漏方法："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 定义一个变量，用来缓存创建的观察者的指针。\nstatic HiAppEvent_Watcher *systemEventWatcher;\n\nstatic void OnReceive(const char *domain, const struct HiAppEvent_AppEventGroup *appEventGroups, uint32_t groupLen) {\n    for (int i = 0; i < groupLen; ++i) {\n        for (int j = 0; j < appEventGroups[i].infoLen; ++j) {\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.domain=%{public}s\",\n                        appEventGroups[i].appEventInfos[j].domain);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.name=%{public}s\",\n                        appEventGroups[i].appEventInfos[j].name);\n            OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.eventType=%{public}d\",\n                        appEventGroups[i].appEventInfos[j].type);\n            if (strcmp(appEventGroups[i].appEventInfos[j].domain, DOMAIN_OS) == 0 &&\n                strcmp(appEventGroups[i].appEventInfos[j].name, EVENT_APP_KILLED) == 0) {\n                Json::Value params;\n                Json::Reader reader(Json::Features::strictMode());\n                Json::FastWriter writer;\n                if (reader.parse(appEventGroups[i].appEventInfos[j].params, params)) {\n                    auto time = params[\"time\"].asInt64();\n                    auto reason = params[\"reason\"].asString();\n                    auto foreground = params[\"foreground\"].asString();\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.time=%{public}lld\", time);\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.reason=%{public}s\",\n                                reason.c_str());\n                    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.params.foreground=%{public}s\",\n                                foreground.c_str());\n                }\n            }\n        }\n    }\n}\n\nstatic napi_value RegisterWatcher(napi_env env, napi_callback_info info) {\n    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent RegisterWatcher\");\n    // 开发者自定义观察者名称，系统根据不同的名称来识别不同的观察者。\n    systemEventWatcher = OH_HiAppEvent_CreateWatcher(\"onReceiverWatcher\");\n    // 设置订阅的事件为EVENT_APP_KILLED。\n    const char *names[] = {EVENT_APP_KILLED};\n    // 开发者订阅感兴趣的事件，此处订阅了系统事件。\n    OH_HiAppEvent_SetAppEventFilter(systemEventWatcher, DOMAIN_OS, 0, names, 1);\n    // 开发者设置已实现的回调函数，观察者接收到事件后会立即触发OnReceive回调。\n    OH_HiAppEvent_SetWatcherOnReceive(systemEventWatcher, OnReceive);\n    // 使观察者开始监听订阅的事件。\n    OH_HiAppEvent_AddWatcher(systemEventWatcher);\n    return {};\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现Leak接口（仅用于故障注入及自验证，无需集成到业务逻辑中）："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void NativeLeak()\n{\n    constexpr int leak_size_per_time = 500000;\n    while (true) {\n        char *p = (char *)malloc(leak_size_per_time + 1);\n        if (!p) {\n            break;\n        }\n        memset(p, 'a', leak_size_per_time);\n        std::this_thread::sleep_for(std::chrono::milliseconds(10));\n    }\n}\n\nstatic napi_value Leak(napi_env env, napi_callback_info info) {\n std::thread t1(NativeLeak);\n t1.detach();\n    return {};\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑\"napi_init.cpp\"文件，将RegisterWatcher和Leak注册为ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"registerWatcher\", nullptr, RegisterWatcher, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"leak\", nullptr, Leak, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑\"index.d.ts\"文件，定义ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const registerWatcher: () => void;\nexport const leak: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability> EntryAbility.ets”文件，在onCreate()函数中新增接口调用："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入依赖模块\nimport testNapi from 'libentry.so';\n\n// 在onCreate()函数中新增接口调用\n// 启动时，注册系统事件观察者\ntestNapi.registerWatcher();\n\n// 在按钮操作或者启动时，触发泄漏\ntestNapi.leak();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程，触发泄漏后，等待2-3分钟，应用会退出。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用被终止后，重新打开应用，会触发终止事件上报，系统会回调应用的onReceive函数，可以在Log窗口看到对系统事件数据的处理日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  HiAppEvent eventInfo.domain=OS\n  HiAppEvent eventInfo.name=APP_KILLED\n  HiAppEvent eventInfo.eventType=2\n  HiAppEvent eventInfo.params.time=1717597063727\n  HiAppEvent eventInfo.params.reason=\"RssThresholdKiller\"\n  HiAppEvent eventInfo.params.foreground=true\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(268874)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据日志报错内容，可查看具体", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events#%E4%BA%8B%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
            children: "应用终止事件介绍"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
268874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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