"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["376557"], {
332194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_resource_leak_events_hiappevent_watcher_resourceleak_events_arkts_hiappevent_watcher_resourceleak_events_arkts_md_9f6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-resource-leak-events-hiappevent-watcher-resourceleak-events-arkts-hiappevent-watcher-resourceleak-events-arkts-md-9f6.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_resource_leak_events_hiappevent_watcher_resourceleak_events_arkts_hiappevent_watcher_resourceleak_events_arkts_md_9f6_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-arkts/hiappevent-watcher-resourceleak-events-arkts","title":"订阅资源泄漏事件（ArkTS）","description":"接口说明","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-arkts/hiappevent-watcher-resourceleak-events-arkts.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-arkts","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-arkts/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"订阅资源泄漏事件（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-resourceleak-events-arkts","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"资源泄漏事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events/"},"next":{"title":"订阅资源泄漏事件（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-arkts/hiappevent-watcher-resourceleak-events-arkts.md


const frontMatter = {
	title: '订阅资源泄漏事件（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-resourceleak-events-arkts',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅资源泄漏事件（ArkTS）';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "自定义参数设置接口描述",
  "id": "自定义参数设置接口描述",
  "level": 3
}, {
  "value": "自定义配置设置接口描述",
  "id": "自定义配置设置接口描述",
  "level": 3
}, {
  "value": "接口描述",
  "id": "接口描述",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "步骤一：新建工程",
  "id": "步骤一新建工程",
  "level": 3
}, {
  "value": "步骤二：订阅资源泄漏事件",
  "id": "步骤二订阅资源泄漏事件",
  "level": 3
}, {
  "value": "nolog版本订阅js_heap快照",
  "id": "nolog版本订阅js_heap快照",
  "level": 2
}, {
  "value": "在AppScope/app.json5文件中配置如下环境变量",
  "id": "在appscopeappjson5文件中配置如下环境变量",
  "level": 3
}, {
  "value": "调用setEventConfig并传入以下参数",
  "id": "调用seteventconfig并传入以下参数",
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
        id: "订阅资源泄漏事件arkts",
        children: "订阅资源泄漏事件（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何使用HiAppEvent提供的ArkTS接口订阅资源泄漏事件。接口的具体使用说明（参数使用限制、具体取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent",
        children: "@ohos.hiviewdfx.hiAppEvent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义参数设置接口描述",
      children: "自定义参数设置接口描述"
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
            children: "setEventParam(params: Record<string, ParamType>, domain: string, name?: string): Promise<void>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此方法用于设置事件的自定义参数，在资源泄漏检测事件中，仅支持设置JS内存泄漏事件的参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义配置设置接口描述",
      children: "自定义配置设置接口描述"
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
            children: "setEventConfig(name: string, config: Record<string, ParamType>): Promise<void>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此方法用于设置事件的自定义配置。在资源泄漏检测事件中，仅支持设置js内存泄漏事件的配置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述",
      children: "接口描述"
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
            children: "addWatcher(watcher: Watcher): AppEventPackageHolder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用事件观察者以订阅应用事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeWatcher(watcher: Watcher): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除应用事件观察者，取消对应用事件的订阅。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以订阅发生内存泄漏场景生成的资源泄漏事件为例，说明开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤一新建工程",
      children: "步骤一：新建工程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中新建工程，选择“Empty Ability”，编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，导入依赖模块："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hiAppEvent, hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，在onCreate函数中添加系统事件的订阅，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 完成参数键值对赋值\nlet params: Record<string, hiAppEvent.ParamType> = {\n  \"test_data\": 100,\n};\n// 设置资源泄漏事件的自定义参数\nhiAppEvent.setEventParam(params, hiAppEvent.domain.OS, hiAppEvent.event.RESOURCE_OVERLIMIT).then(() => {\n  hilog.info(0x0000, 'testTag', `HiAppEvent success to set event param`);\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'testTag', `HiAppEvent code: ${err.code}, message: ${err.message}`);\n});\n// 完成自定义配置键值对赋值\nlet configParams: Record<string, hiAppEvent.ParamType> = {\n  \"js_heap_logtype\": \"event\", // 仅获取事件\n}\n// 设置资源泄漏事件的自定义配置\nhiAppEvent.setEventConfig(hiAppEvent.event.RESOURCE_OVERLIMIT, configParams);\nhiAppEvent.addWatcher({\n  // 自定义观察者名称，系统会使用名称来标识不同的观察者\n  name: \"watcher\",\n  // 订阅感兴趣的系统事件，此处是订阅了资源泄漏事件\n  appEventFilters: [\n    {\n      domain: hiAppEvent.domain.OS,\n      names: [hiAppEvent.event.RESOURCE_OVERLIMIT]\n    }\n  ],\n  // 自行实现订阅实时回调函数，以便对订阅获取到的事件数据进行自定义处理\n  onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {\n    hilog.info(0x0000, 'testTag', `HiAppEvent onReceive: domain=${domain}`);\n    for (const eventGroup of appEventGroups) {\n      // 根据事件集合中的事件名称区分不同的系统事件\n      hilog.info(0x0000, 'testTag', `HiAppEvent eventName=${eventGroup.name}`);\n      for (const eventInfo of eventGroup.appEventInfos) {\n        // 获取到资源泄漏事件发生时内存信息\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo=${JSON.stringify(eventInfo)}`);\n      }\n    }\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤二订阅资源泄漏事件",
      children: "步骤二：订阅资源泄漏事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，添加按钮并在其onClick函数构造资源泄漏场景，以触发资源泄漏事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此处需要使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug#hidebugsetappresourcelimit12",
            children: "hidebug.setAppResourceLimit"
          }), "设置内存限制，造成内存泄漏，同步在“开发者选项”中打开“系统资源泄漏日志”（开关状态变更后需重启设备）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["资源泄漏问题定位可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines",
            children: "Resource Leak（资源泄漏）检测"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('pss leak')\n    .type(ButtonType.Capsule)\n    .margin({\n      top: 20\n    })\n    .backgroundColor('#0D9FFB')\n    .width('80%')\n    .height('5%')\n    .onClick(() => {\n      // 设置一个简单的资源泄漏场景\n      hilog.info(0x0000, 'testTag', 'click pss leak button');\n      testNapi.leakMB(3072);\n    })\nButton('js leak')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    for (let i = 0; i < 10000; i++) {\n      this.leakedArray.push(new Array(500000).fill(1));\n    }\n  })\n"
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
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程，点击“pss leak”按钮，等待15~30分钟，系统会上报pss内存泄漏事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一个应用，24小时内至多上报一次资源泄漏事件，如果短时间内要二次上报，需要重启设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "pss内存泄漏事件上报后，系统会回调应用的onReceive函数，可以在Log窗口看到对系统事件数据的处理日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HiAppEvent onReceive: domain=OS\nHiAppEvent eventName=RESOURCE_OVERLIMIT\nHiAppEvent eventInfo={\"domain\":\"OS\",\"name\":\"RESOURCE_OVERLIMIT\",\"eventType\":1,\"params\":{\"bundle_name\":\"com.example.myapplication\",\"bundle_version\":\"1.0.0\",\"memory\":{\"pss\":2100257,\"rss\":1352644,\"sys_avail_mem\":250272,\"sys_free_mem\":60004,\"sys_total_mem\":1992340,\"vss\":2462936},\"pid\":20731,\"resource_type\":\"pss_memory\",\"time\":1502348798106,\"uid\":20010044,\"external_log\": [\"/data/storage/el2/log/resourcelimit/RESOURCE_OVERLIMIT_1725614572401_6808.log\", \"/data/storage/el2/log/resourcelimit/RESOURCE_OVERLIMIT_1725614572412_6808.log\"], \"log_over_limit\": false}}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如上，eventInfo中包含资源泄漏事件的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events#params%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
            children: "params字段"
          }), "，可以根据eventInfo中的resource_type字段来判断当前的泄漏类型。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提前在“开发者选项”中开启“系统资源泄漏日志”开关（开启或关闭开关均需重启设备）。点击 DevEco Studio 窗口中的运行按钮，运行应用工程。点击“js leak”按钮，等待 3 到 5 秒，应用会闪退。重新打开应用后，系统将上报js内存泄漏事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一个应用，24小时内至多上报一次js内存泄漏，如果短时间内要二次上报，需要重启设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "js内存泄漏事件上报后，系统会回调应用的onReceive函数，在该函数中可在Log窗口查看系统事件数据的处理日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HiAppEvent onReceive: domain=OS\nHiAppEvent eventName=RESOURCE_OVERLIMIT\nHiAppEvent eventInfo={\"domain\":\"OS\",\"name\":\"RESOURCE_OVERLIMIT\",\"eventType\":1,\"params\":{\"bundle_name\":\"com.example.myapplication\",\"bundle_version\":\"1.0.0\",\"external_log\":[],\"log_over_limit\":true,\"memory\":{\"limit_size\":0,\"live_object_size\":0},\"pid\":14941,\"resource_type\":\"js_heap\",\"test_data\":100,\"time\":1752564700511,\"uid\":20020181}}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如上，eventInfo中的“test_data”字段即步骤一中设置的键值对的内容。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nolog版本订阅js_heap快照",
      children: "nolog版本订阅js_heap快照"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请应用在收到该订阅事件后，首先从事件的external_log字段中获取堆快照文件存储路径，并将其尽快搬移或上传云，然后再删除原堆快照文件，以避免因应用沙箱路径目录剩余存储空间不足（最大2GB）导致下次堆快照文件无法生成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["订阅后生成的.log日志文件需要将后缀名修改为.rawheap文件，再通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator",
        children: "translator工具"
      }), "转换为.heapsnapshot文件，通过DevEco Studio或浏览器打开展示，详情见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-snapshot/ide-snapshot-basic-operations#section6760173514388",
        children: "离线导入内存快照"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 14后，开发者可以将日志文件后缀名修改为.rawheap后，将其导入DevEco Studio并展示，详情见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-snapshot/ide-snapshot-basic-operations#section6760173514388",
        children: "离线导入内存快照"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供两种方法，任选其一即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在appscopeappjson5文件中配置如下环境变量",
      children: "在AppScope/app.json5文件中配置如下环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"appEnvironments\": [\n  {\n    \"name\": \"DFX_RESOURCE_OVERLIMIT_OPTIONS\",\n    \"value\": \"oomdump:enable\"\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "nolog版本虚拟机堆快照生成规格限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "堆快照文件大小约为0.4至1.2GB（zip压缩后约为50至100MB）。由于体积较大，系统会对堆快照的生成次数进行管控，具体规格如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "整机：每周生成js堆快照的次数为5次，若整机配额用完，则所有应用都无法继续生成堆快照；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用：每周仅有1次生成js堆快照的机会，自应用触发oomdump功能后的7天内，无法再次触发；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果整机剩余存储空间不足30GB，则不会触发oomdump功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者在调试期间，可通过将系统时间调整至7天后并重启设备的方式重置应用触发oomdump的次数，以便快速完成功能适配与验证。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(318967)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "json5配置文件中的value字段内容格式支持键值对集合“key1:value1;key2:value2;...”。目前系统仅支持配置如上键值对的应用，在nolog版本使能oomdump功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用seteventconfig并传入以下参数",
      children: "调用setEventConfig并传入以下参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let configParams: Record<string, hiAppEvent.ParamType> = {\n  \"js_heap_logtype\": \"event_rawheap\",\n};\n\nhiAppEvent.setEventConfig(hiAppEvent.event.RESOURCE_OVERLIMIT, configParams);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["setEventConfig方法生成堆快照的数量", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不"
        })
      }), "受到", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "nolog版本虚拟机堆快照生成规格限制"
        })
      }), "的约束。"]
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
318967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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