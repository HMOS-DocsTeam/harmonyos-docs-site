"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["572116"], {
67000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hicollie_hicollie_guidelines_ndk_hicollie_guidelines_ndk_md_12e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hicollie-hicollie-guidelines-ndk-hicollie-guidelines-ndk-md-12e.json
var site_docs_system_debug_optimize_performance_analysis_kit_hicollie_hicollie_guidelines_ndk_hicollie_guidelines_ndk_md_12e_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk/hicollie-guidelines-ndk","title":"使用HiCollie检测业务线程卡死卡顿问题（C/C++）","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk/hicollie-guidelines-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用HiCollie检测业务线程卡死卡顿问题（C/C++）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hicollie-guidelines-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HiDebug接口使用示例(C/C++)","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-ndk/"},"next":{"title":"使用HiCollie监控函数执行时间超长问题（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk/hicollie-guidelines-ndk.md


const frontMatter = {
	title: '使用HiCollie检测业务线程卡死卡顿问题（C/C++）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hicollie-guidelines-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '使用HiCollie检测业务线程卡死卡顿问题（C/C++）';

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
  "value": "检测原理",
  "id": "检测原理",
  "level": 2
}, {
  "value": "日志规格",
  "id": "日志规格",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用hicollie检测业务线程卡死卡顿问题cc",
        children: "使用HiCollie检测业务线程卡死卡顿问题（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户在使用应用时，如果出现点击无反应或应用无响应等情况，并且持续时间超过一定限制，就会被定义为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines",
        children: "应用冻屏"
      }), "。本文面向开发者介绍HiCollie模块对外提供检测业务线程卡死、卡顿，以及上报卡死事件的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(235293)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在非主线程使用相关接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HiCollie_Init_StuckDetection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册应用业务线程卡死的周期性检测任务。用户实现回调函数, 用于定时检测业务线程卡死情况。  默认检测时间：3s上报BUSSINESS_THREAD_BLOCK_3S告警事件，6s上报BUSSINESS_THREAD_BLOCK_6S卡死事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiCollie_Init_StuckDetectionWithTimeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册应用业务线程卡死的周期性检测任务。用户实现回调函数, 用于定时检测业务线程卡死情况。  开发者可以设置卡死检测时间，可设置的时间范围：[3, 15]，单位：s。  说明：从API version 18开始，支持该接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiCollie_Init_JankDetection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册应用业务线程卡顿检测的回调函数。  线程卡顿监控功能需要开发者实现两个卡顿检测回调函数，分别放在业务线程处理事件的前后。作为插桩函数，监控业务线程处理事件执行情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiCollie_Report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报应用业务线程卡死事件，生成卡死故障日志，辅助定位应用卡死问题。  先调用OH_HiCollie_Init_StuckDetection或OH_HiCollie_Init_StuckDetectionWithTimeout接口，初始化检测的task。  如果task任务超时，结合业务逻辑，调用OH_HiCollie_Report接口上报卡死事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API接口的具体使用说明（参数使用限制、具体取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hicollie-h/capi-hicollie-h",
        children: "HiCollie"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检测原理",
      children: "检测原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["业务线程卡顿OH_HiCollie_Init_JankDetection故障规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events#%E6%A3%80%E6%B5%8B%E5%8E%9F%E7%90%86",
            children: "主线程超时事件检测原理"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "业务线程卡死故障："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）OH_HiCollie_Init_StuckDetection检测原理：应用的watchdog线程会周期性进行业务线程判活检测。当判活检测超过3s没有被执行，上报BUSSINESS_THREAD_BLOCK_3S线程告警事件；超过6s依然没有被执行，会上报BUSSINESS_THREAD_BLOCK_6S线程卡死事件。两个事件根据系统匹配规则生成appfreeze故障日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）OH_HiCollie_Init_StuckDetectionWithTimeout检测原理：应用的watchdog线程会周期性进行业务线程判活检测。当判活检测超过stuckTimeout时间没有被执行，上报BUSSINESS_THREAD_BLOCK_3S告警事件；超过stuckTimeout * 2时间，依然没有被执行，会上报BUSSINESS_THREAD_BLOCK_6S线程卡死事件。两个事件匹配生成appfreeze故障日志。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志规格",
      children: "日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["业务线程卡死故障日志以appfreeze-开头，生成在“设备/data/log/faultlog/faultlogger/”路径下。该日志文件名格式为“appfreeze-应用包名-应用UID-毫秒级时间”。具体规格可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "应用冻屏（AppFreeze）日志规格"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OH_HiCollie_Init_StuckDetection日志规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "主线程超时事件日志规格"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文将展示如何在应用内增加一个按钮，并单击该按钮以调用HiCollie Ndk接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建Native C++工程，目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  src:\n    main:\n      cpp:\n        types:\n          libentry:\n            - index.d.ts\n        - CMakeLists.txt\n        - napi_init.cpp\n      ets:\n        entryability:\n          - EntryAbility.ts\n        pages:\n          - Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“CMakeLists.txt”文件，添加源文件及动态库："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 新增动态库依赖libhilog_ndk.z.so(日志输出)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libohhicollie.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，导入依赖的文件，定义LOG_TAG，下述代码步骤用于模拟卡死卡顿场景，具体使用请结合业务需要。示例代码如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（1）", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用线程卡顿检测"
            })
          }), "： OH_HiCollie_Init_JankDetection，示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <thread>\n#include <string>\n#include <unistd.h>\n#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"hicollie/hicollie.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"JankTest\"\n\n// 定义两个回调函数对象\nstatic OH_HiCollie_BeginFunc beginFunc_;\nstatic OH_HiCollie_EndFunc endFunc_;\n\n// 定义监控应用显示开始、结束的回调函数\nvoid InitBeginFunc(const char* eventName)\n{\n    std::string str(eventName);\n    OH_LOG_INFO(LogType::LOG_APP, \"InitBeginFunc eventName: %{public}s\", str.c_str());\n}\nvoid InitEndFunc(const char* eventName)\n{\n    std::string str(eventName);\n    OH_LOG_INFO(LogType::LOG_APP, \"OH_HiCollie_EndFunc eventName: %{public}s\", str.c_str());\n}\n\nvoid StartDelayTimer()\n{\n  //等待1s\n  std::chrono::seconds delay(1);\n  OH_LOG_INFO(LogType::LOG_APP, \"OH_HiCollie_Init_JankDetection delay before\");\n  std::this_thread::sleep_for(delay);\n  OH_LOG_INFO(LogType::LOG_APP, \"OH_HiCollie_Init_JankDetection delay after\");\n}\n\n// 定义子线程回调函数\nvoid TestJankDetection()\n{\n    // 初始化回调函数参数\n    beginFunc_ = InitBeginFunc;\n    endFunc_ = InitEndFunc;\n    HiCollie_DetectionParam param {0};\n    // 初始化线程卡顿监控函数\n    int initResult = OH_HiCollie_Init_JankDetection(&beginFunc_, &endFunc_, param);\n    // 线程启动1s内，不进行检测\n    StartDelayTimer();\n    // 成功结果：0\n    OH_LOG_INFO(LogType::LOG_APP, \"OH_HiCollie_Init_JankDetection: %{public}d\", initResult);\n    int count = 0;\n    while (count < 3) {\n        // 设置处理开始回调函数，监控线程任务执行开始时长\n        beginFunc_(\"TestBegin\");\n        // 休眠350ms，模拟任务线程处理事件卡顿场景\n        usleep(350 * 1000);\n        // 设置处理结束回调函数，监控线程任务执行结束时长\n        endFunc_(\"TestEnd\");\n        count++;\n    }\n}\n\nstatic napi_value TestHiCollieJankNdk(napi_env env, napi_callback_info info)\n{\n    // 创建子线程\n    std::thread threadObj(TestJankDetection);\n    // 执行TestJankDetection任务\n    threadObj.join();\n    return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"testHiCollieJankNdk\", nullptr, TestHiCollieJankNdk, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（2）", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用线程卡死检测"
            })
          }), "： OH_HiCollie_Init_StuckDetection, 示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"hicollie/hicollie.h\"\n#include <atomic>\n#include <thread>\n#include <string>\n#include <unistd.h>\n\n#undef LOG_TAG\n#define LOG_TAG \"StuckTest\"\n\n// 自定义阻塞时间，模拟卡死场景，单位：s\nconst int64_t BLOCK_TIME = 3;\n// 设置应用线程执行任务情况标志位, true-正常，false-卡死\nstd::shared_ptr<std::atomic<bool>> appThreadIsAlive_ = std::make_shared<std::atomic<bool>>(true);\n// 设置上报应用线程卡死事件标志位\nstd::shared_ptr<std::atomic<bool>> isSixSecondEvent_ = std::make_shared<std::atomic<bool>>(false);\n\nvoid ReportEvent() {\n    bool temp = isSixSecondEvent_->load();\n    int reportResult = OH_HiCollie_Report(&temp);\n    // 成功：0\n    OH_LOG_INFO(LogType::LOG_APP, \"OH_HiCollie_Report: %{public}d, isSixSecondEvent: %{public}d\", reportResult, isSixSecondEvent_->load());\n    isSixSecondEvent_->store(temp);\n}\n\nvoid SetTimeout()\n{\n  int64_t now = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::\n    system_clock::now().time_since_epoch()).count();\n  sleep(BLOCK_TIME);\n  int64_t currentTime = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::\n    system_clock::now().time_since_epoch()).count();\n  if (currentTime - now < BLOCK_TIME) {\n    appThreadIsAlive_->store(true);\n    return;\n  }\n  appThreadIsAlive_->store(false);\n}\n\n// 开发者可自定义周期性检测任务\nvoid Timer()\n{\n  // 每隔3s检查应用是否正常执行任务\n  if (appThreadIsAlive_->load()) {\n    OH_LOG_INFO(LogType::LOG_APP, \"Check appThread isAlive.\");\n    // 更新appThreadIsAlive_，正常执行下次检测时为true\n    appThreadIsAlive_->store(false);\n    // 模拟超时场景\n    SetTimeout();\n    return;\n  }\n  ReportEvent();\n}\n\n// 定义子线程回调函数\nvoid InitStuckDetection()\n{\n  // 初始化线程卡死监控函数\n  int initResult = OH_HiCollie_Init_StuckDetection(Timer);\n  // 成功结果：0\n  OH_LOG_INFO(LogType::LOG_APP, \"OH_HiCollie_Init_StuckDetection: %{public}d\", initResult);\n}\n\nstatic napi_value TestHiCollieStuckNdk(napi_env env, napi_callback_info info)\n{\n  // 创建子线程\n  std::thread threadObj(InitStuckDetection);\n  // 执行任务\n  threadObj.join();\n  return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"testHiCollieStuckNdk\", nullptr, TestHiCollieStuckNdk, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（3）", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用线程卡死检测，自定义检测时间"
            })
          }), "： OH_HiCollie_Init_StuckDetectionWithTimeout，示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"hicollie/hicollie.h\"\n#include <thread>\n#include <string>\n#include <unistd.h>\n\n#undef LOG_TAG\n#define LOG_TAG \"StuckTest\"\n\n// 自定义休眠时间，模拟卡死场景\nconst int64_t BLOCK_TIME = 5;\n// 设置应用线程执行任务情况标志位, true-正常， false-卡死\nstd::shared_ptr<std::atomic<bool>> appThreadIsAlive_ = std::make_shared<std::atomic<bool>>(true);\n// 设置上报应用线程卡死事件标志位\nstd::shared_ptr<std::atomic<bool>> isSixSecondEvent_ = std::make_shared<std::atomic<bool>>(false);\n\nvoid ReportEvent() {\n    bool temp = isSixSecondEvent_->load();\n    int reportResult = OH_HiCollie_Report(&temp);\n    // 成功：0\n    OH_LOG_INFO(LogType::LOG_APP, \"OH_HiCollie_Report: %{public}d, isSixSecondEvent: %{public}d\", reportResult, isSixSecondEvent_->load());\n    isSixSecondEvent_->store(temp);\n}\n\nvoid SetTimeout()\n{\n  int64_t now = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::\n    system_clock::now().time_since_epoch()).count();\n  sleep(BLOCK_TIME);\n  int64_t currentTime = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::\n    system_clock::now().time_since_epoch()).count();\n  if (currentTime - now < BLOCK_TIME) {\n    appThreadIsAlive_->store(true);\n    return;\n  }\n  appThreadIsAlive_->store(false);\n}\n\n// 开发者可自定义周期性检测任务\nvoid Timer()\n{\n  // 每隔5s检查应用是否正常执行任务\n  if (appThreadIsAlive_->load()) {\n    OH_LOG_INFO(LogType::LOG_APP, \"Check appThread isAlive.\");\n    // 更新appThreadIsAlive_，正常执行下次检测时为true\n    appThreadIsAlive_->store(false);\n    // 模拟超时场景\n    SetTimeout();\n    return;\n  }\n  ReportEvent();\n}\n\n// 定义子线程回调函数\nvoid InitStuckDetectionWithTimeout()\n{\n  // 初始化线程卡死监控函数\n  int initResult = OH_HiCollie_Init_StuckDetectionWithTimeout(Timer, BLOCK_TIME);\n  // 成功结果：0\n  OH_LOG_INFO(LogType::LOG_APP, \"OH_HiCollie_Init_StuckDetection: %{public}d\", initResult);\n}\n\nstatic napi_value TestHiCollieStuckWithTimeoutNdk(napi_env env, napi_callback_info info)\n{\n  // 创建子线程\n  std::thread threadObj(InitStuckDetectionWithTimeout);\n  // 执行任务\n  threadObj.join();\n  return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"testHiCollieStuckWithTimeoutNdk\", nullptr, TestHiCollieStuckWithTimeoutNdk, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将TestHiCollieNdk注册为ArkTS接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）OH_HiCollie_Init_JankDetection示例，编辑“index.d.ts”文件，定义ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const testHiCollieJankNdk: () => void;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）OH_HiCollie_Init_StuckDetection示例，编辑“index.d.ts”文件，定义ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const testHiCollieStuckNdk: () => void;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）OH_HiCollie_Init_StuckDetectionWithTimeout示例，编辑“index.d.ts”文件，定义ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const testHiCollieStuckWithTimeoutNdk: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“Index.ets”文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Column() {\n        // 选择下方对应的功能，可在此处添加不同的点击事件\n        \n      }\n      .width('100%')\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）添加点击事件，触发OH_HiCollie_Init_JankDetection方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  Button(\"testHiCollieJankNdk\", { stateEffect:true, type: ButtonType.Capsule})\n    .width('75%')\n    .height(50)\n    .margin(15)\n    .fontSize(20)\n    .fontWeight(FontWeight.Bold)\n    .onClick(testNapi.testHiCollieJankNdk);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）添加点击事件，触发OH_HiCollie_Init_StuckDetection方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  Button(\"testHiCollieStuckNdk\", { stateEffect:true, type: ButtonType.Capsule})\n    .width('75%')\n    .height(50)\n    .margin(15)\n    .fontSize(20)\n    .fontWeight(FontWeight.Bold)\n    .onClick(testNapi.testHiCollieStuckNdk);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）添加点击事件，触发OH_HiCollie_Init_StuckDetectionWithTimeout方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  Button(\"testHiCollieStuckWithTimeoutNdk\", { stateEffect:true, type: ButtonType.Capsule})\n    .width('75%')\n    .height(50)\n    .margin(15)\n    .fontSize(20)\n    .fontWeight(FontWeight.Bold)\n    .onClick(testNapi.testHiCollieStuckWithTimeoutNdk);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio的底部，切换到“Log”窗口，过滤自定义的LOG_TAG。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）点击“testHiCollieJankNdk”按钮。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此时窗口将显示通过OH_HiCollie_Init_JankDetection接口获取的应用业务线程采样栈的超时信息。可以通过订阅hiappevent获取对应的事件，参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-arkts",
            children: "订阅主线程超时事件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）点击“testHiCollieStuckNdk”按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时窗口将显示通过OH_HiCollie_Init_StuckDetection接口，初始化卡死检测回调函数。可以根据实际业务场景，自行定义卡死检测函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）点击“testHiCollieStuckWithTimeoutNdk”按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时窗口将显示通过OH_HiCollie_Init_StuckDetectionWithTimeout接口，初始化卡死检测回调函数。可以根据实际业务场景，自行定义卡死检测函数，及卡死检测时间。"
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
235293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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