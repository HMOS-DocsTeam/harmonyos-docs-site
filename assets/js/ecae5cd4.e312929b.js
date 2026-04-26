"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["934846"], {
867538(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hitracechain_hitracechain_guidelines_ndk_hitracechain_guidelines_ndk_md_eca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hitracechain-hitracechain-guidelines-ndk-hitracechain-guidelines-ndk-md-eca.json
var site_docs_system_debug_optimize_performance_analysis_kit_hitracechain_hitracechain_guidelines_ndk_hitracechain_guidelines_ndk_md_eca_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-ndk/hitracechain-guidelines-ndk","title":"使用HiTraceChain打点（C/C++）","description":"接口说明","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-ndk/hitracechain-guidelines-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用HiTraceChain打点（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracechain-guidelines-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HiTraceChain打点（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-arkts/"},"next":{"title":"使用HiChecker检测问题（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hichecker/hichecker-guidelines-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-ndk/hitracechain-guidelines-ndk.md


const frontMatter = {
	title: '使用HiTraceChain打点（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracechain-guidelines-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '使用HiTraceChain打点（C/C++）';

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
        id: "使用hitracechain打点cc",
        children: "使用HiTraceChain打点（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分布式跟踪接口由HiTraceChain模块提供，详细API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-trace-h/capi-trace-h",
        children: "trace.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表所示的接口提供基本的分布式跟踪功能，ArkTS中也有相应的接口。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceId OH_HiTrace_BeginChain(const char *name, int flags)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始跟踪，并返回创建的HiTraceId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_EndChain()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止跟踪。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceId OH_HiTrace_GetId()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从当前线程TLS中获取跟踪标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_SetId(const HiTraceId *id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将当前线程TLS中的跟踪标识设置为id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_ClearId(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除当前线程的跟踪标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceId OH_HiTrace_CreateSpan(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建跟踪分支。创建一个HiTraceId，使用当前线程TLS中的chainId、spanId初始化HiTraceId的chainId、parentSpanId，并为HiTraceId生成一个新的spanId，返回该HiTraceId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_HiTrace_IsIdValid(const HiTraceId *id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断HiTraceId是否有效。  true：HiTraceId有效；false：HiTraceId无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_HiTrace_IsFlagEnabled(const HiTraceId *id, HiTrace_Flag flag)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断HiTraceId中指定的跟踪标志是否已启用。  true：指定的跟踪标志已启用；false：指定的跟踪标志未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_EnableFlag(const HiTraceId *id, HiTrace_Flag flag)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用HiTraceId中指定的跟踪标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_Tracepoint(HiTrace_Communication_Mode mode, HiTrace_Tracepoint_Type type, const HiTraceId *id, const char *fmt, ...)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceMeter跟踪信息埋点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表所示的接口提供对HiTraceId的一些拓展操作，这些接口仅在C/C++中提供。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_InitId(HiTraceId *id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化HiTraceId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_HiTrace_GetFlags(const HiTraceId *id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取HiTraceId中设置的跟踪标志位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_SetFlags(HiTraceId *id, int flags)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置跟踪标志位到HiTraceId中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t OH_HiTrace_GetChainId(const HiTraceId *id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取HiTraceId中的跟踪链ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_SetChainId(HiTraceId *id, uint64_t chainId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置跟踪链ID到HiTraceId中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t OH_HiTrace_GetSpanId(const HiTraceId *id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取HiTraceId中的分支ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_SetSpanId(HiTraceId *id, uint64_t spanId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置分支ID到HiTraceId中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t OH_HiTrace_GetParentSpanId(const HiTraceId *id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取HiTraceId中的父分支ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_SetParentSpanId(HiTraceId *id, uint64_t parentSpanId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置父分支ID到HiTraceId中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_HiTrace_IdToBytes(const HiTraceId* id, uint8_t* pIdArray, int len)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将HiTraceId转换为字节数组，用于缓存或通信传递。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_IdFromBytes(HiTraceId *id, const uint8_t *pIdArray, int len)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据字节数组创建HiTraceId。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["std::thread不支持自动传递HiTraceId，开发示例展示了该场景下分布式跟踪的使用方法。开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "约束与限制"
      }), "，了解常见的支持与不支持HiTraceChain自动传递的机制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中新建工程，选择“Native C++”，工程的目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "├── entry\n│   ├── src\n│       ├── main\n│       │   ├── cpp\n│       │   │   ├── CMakeLists.txt\n│       │   │   ├── napi_init.cpp\n│       │   │   └── types\n│       │   │       └── libentry\n│       │   │           ├── Index.d.ts\n│       │   │           └── oh-package.json5\n│       │   ├── ets\n│       │   │   ├── entryability\n│       │   │   │   └── EntryAbility.ets\n│       │   │   ├── entrybackupability\n│       │   │   │   └── EntryBackupAbility.ets\n│       │   │   └── pages\n│       │   │       └── Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“entry > src > main > cpp > CMakeLists.txt”文件中新增libhitrace_ndk.z.so和libhilog_ndk.z.so动态链接库，完整的文件内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(HiTraceChainTest03)\n\nset(NATIVERENDER_ROOT_PATH &#36;{CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(&#36;{PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(&#36;{NATIVERENDER_ROOT_PATH}\n                    &#36;{NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhitrace_ndk.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“entry > src > main > cpp > napi_init.cpp”文件，使用HiTraceChain跟踪多线程任务，完整的示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <thread>\n\n#include \"hilog/log.h\"\n#include \"hitrace/trace.h\"\n#include \"napi/native_api.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n\nvoid Print2(HiTraceId id)\n{\n    // 为当前线程设置HiTraceId\n    OH_HiTrace_SetId(&id);\n    // 生成分支标识spanId\n    id = OH_HiTrace_CreateSpan();\n    // 为当前线程设置带spanId的HiTraceId\n    OH_HiTrace_SetId(&id);\n    OH_LOG_INFO(LogType::LOG_APP, \"Print2\");\n    // 结束当前线程的分布式跟踪，功能同OH_HiTrace_EndChain()\n    OH_HiTrace_ClearId();\n    OH_LOG_INFO(LogType::LOG_APP, \"Print2, HiTraceChain end\");\n}\n\nvoid Print1(HiTraceId id)\n{\n    // 为当前线程设置HiTraceId\n    OH_HiTrace_SetId(&id);\n    // 生成分支标识spanId\n    id = OH_HiTrace_CreateSpan();\n    // 为当前线程设置带spanId的HiTraceId\n    OH_HiTrace_SetId(&id);\n    OH_LOG_INFO(LogType::LOG_APP, \"Print1\");\n    std::thread(Print2, OH_HiTrace_GetId()).detach();\n    // 结束当前线程的分布式跟踪\n    OH_HiTrace_EndChain();\n    OH_LOG_INFO(LogType::LOG_APP, \"Print1, HiTraceChain end\");\n}\n\nstatic napi_value Add(napi_env env, napi_callback_info info)\n{\n    // 任务开始，开启分布式跟踪\n    HiTraceId hiTraceId = OH_HiTrace_BeginChain(\"testTag: hiTraceChain begin\", HiTrace_Flag::HITRACE_FLAG_DEFAULT);\n    // 判断生成的hiTraceId是否有效，有效则输出一行hilog日志\n    if (OH_HiTrace_IsIdValid(&hiTraceId)) {\n        OH_LOG_INFO(LogType::LOG_APP, \"HiTraceId is valid\");\n    }\n    // 使能HITRACE_FLAG_INCLUDE_ASYNC标志位，表示会在系统支持的异步机制里自动传递HiTraceId\n    OH_HiTrace_EnableFlag(&hiTraceId, HiTrace_Flag::HITRACE_FLAG_INCLUDE_ASYNC);\n    // 判断hitraceId的HITRACE_FLAG_INCLUDE_ASYNC标志位是否已经使能，使能则把hiTraceId设置到当前线程TLS中\n    if (OH_HiTrace_IsFlagEnabled(&hiTraceId, HiTrace_Flag::HITRACE_FLAG_INCLUDE_ASYNC)) {\n        OH_HiTrace_SetId(&hiTraceId);\n        OH_LOG_INFO(LogType::LOG_APP, \"HITRACE_FLAG_INCLUDE_ASYNC is enabled\");\n    }\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    napi_valuetype valuetype0;\n    napi_typeof(env, args[0], &valuetype0);\n\n    napi_valuetype valuetype1;\n    napi_typeof(env, args[1], &valuetype1);\n\n    double value0;\n    napi_get_value_double(env, args[0], &value0);\n\n    double value1;\n    napi_get_value_double(env, args[1], &value1);\n\n    napi_value sum;\n    napi_create_double(env, value0 + value1, &sum);\n\n    // 创建线程执行打印任务，传递当前线程的HiTraceId\n    std::thread(Print1, OH_HiTrace_GetId()).detach();\n    // 任务结束，结束分布式跟踪\n    OH_HiTrace_EndChain();\n    OH_LOG_INFO(LogType::LOG_APP, \"Add, HiTraceChain end\");\n\n    return sum;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"add\", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“entry > src > main > ets > pages > Index.ets”文件，在按钮点击事件里调用Add方法，完整的示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'clickTime=0';\n  @State clickTime: number = 0;\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(20)\n          .margin(5)\n          .width(350)\n          .height(60)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.clickTime++;\n            this.message = 'clickTime=' + this.clickTime;\n            hilog.info(DOMAIN, 'testTag', 'Test NAPI 2 + 3 = %{public}d', testNapi.add(2, 3));\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程。然后点击设备上“clickTime=0”按钮，触发业务逻辑。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio Log窗口查看分布式跟踪的相关信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设备屏幕上按钮显示“clickTime=1”，表示已点击了按钮一次并触发业务逻辑。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "示例所有hilog打印均使用了“testTag”，因此可以使用“testTag”关键字过滤日志，查看该业务代码打印的hilog信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "06-05 21:26:01.006   9944-9944     C02D33/com.exa...tion/HiTraceC  com.examp...lication  I     [a92ab19ae90197d 0 0]HiTraceBegin name:testTag: hiTraceChain begin flags:0x00.\n06-05 21:26:01.006   9944-9944     A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab19ae90197d 0 0]HiTraceId is valid\n06-05 21:26:01.006   9944-9944     A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab19ae90197d 0 0]HITRACE_FLAG_INCLUDE_ASYNC is enabled\n06-05 21:26:01.007   9944-9944     A00000/com.exa...ation/testTag  com.examp...lication  I     Add, HiTraceChain end\n06-05 21:26:01.007   9944-9944     A00000/com.exa...ation/testTag  com.examp...lication  I     Test NAPI 2 + 3 = 5\n06-05 21:26:01.007   9944-13961    A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab19ae90197d 2544fdb 0]Print1\n06-05 21:26:01.007   9944-13961    A00000/com.exa...ation/testTag  com.examp...lication  I     Print1, HiTraceChain end\n06-05 21:26:01.008   9944-13962    A00000/com.exa...ation/testTag  com.examp...lication  I     [a92ab19ae90197d 236699a 2544fdb]Print2\n06-05 21:26:01.008   9944-13962    A00000/com.exa...ation/testTag  com.examp...lication  I     Print2, HiTraceChain end\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "hilog日志前附加的[chainId spanId parentSpanId]格式的信息即为HiTraceId信息，例如[a92ab19ae90197d 236699a 2544fdb]表示跟踪链标识chainId值为a92ab19ae90197d，分支标识spanId值为236699a，父分支标识parentSpanId值为2544fdb。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过手动传递HiTraceId，创建spanId，并将其设置到std::thread创建的子线程中，子线程中运行的Print1和Print2业务的hilog日志也携带上同主线程一致的跟踪标识“a92ab19ae90197d”。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用OH_HiTrace_EndChain()或OH_HiTrace_ClearId()结束分布式跟踪后，hilog打印信息不再携带HiTraceId信息。"
            }), "\n"]
          }), "\n"]
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