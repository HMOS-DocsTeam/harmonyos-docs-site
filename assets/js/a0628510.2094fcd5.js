"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["876771"], {
724322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_appfreeze_guidelines_appfreeze_guidelines_md_a06_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-fault-analysis-appfreeze-guidelines-appfreeze-guidelines-md-a06.json
var site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_appfreeze_guidelines_appfreeze_guidelines_md_a06_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines/appfreeze-guidelines","title":"AppFreeze（应用冻屏）检测","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines/appfreeze-guidelines.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines","slug":"/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"AppFreeze（应用冻屏）检测","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appfreeze-guidelines","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AddrSanitizer（地址越界）检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/address-sanitizer-guidelines/"},"next":{"title":"Resource Leak（资源泄漏）检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines/appfreeze-guidelines.md


const frontMatter = {
	title: 'AppFreeze（应用冻屏）检测',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appfreeze-guidelines',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'AppFreeze（应用冻屏）检测';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "检测原理",
  "id": "检测原理",
  "level": 2
}, {
  "value": "THREAD_BLOCK_6S 应用主线程卡死超时",
  "id": "thread_block_6s-应用主线程卡死超时",
  "level": 3
}, {
  "value": "APP_INPUT_BLOCK 用户输入响应超时",
  "id": "app_input_block-用户输入响应超时",
  "level": 3
}, {
  "value": "日志获取",
  "id": "日志获取",
  "level": 2
}, {
  "value": "日志规格",
  "id": "日志规格",
  "level": 2
}, {
  "value": "日志头部信息",
  "id": "日志头部信息",
  "level": 3
}, {
  "value": "日志主干通用信息",
  "id": "日志主干通用信息",
  "level": 3
}, {
  "value": "堆栈信息",
  "id": "堆栈信息",
  "level": 3
}, {
  "value": "对端信息（与当前故障进程通信的进程信息）",
  "id": "对端信息与当前故障进程通信的进程信息",
  "level": 3
}, {
  "value": "CPU信息",
  "id": "cpu信息",
  "level": 3
}, {
  "value": "内存信息",
  "id": "内存信息",
  "level": 3
}, {
  "value": "日志差异性信息",
  "id": "日志差异性信息",
  "level": 2
}, {
  "value": "AppFreeze（应用冻屏）增强日志信息",
  "id": "appfreeze应用冻屏增强日志信息",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 3
}, {
  "value": "日志获取",
  "id": "日志获取-1",
  "level": 3
}, {
  "value": "日志规格",
  "id": "日志规格-1",
  "level": 3
}, {
  "value": "增强日志规格",
  "id": "增强日志规格",
  "level": 3
}, {
  "value": "AppFreeze聚类",
  "id": "appfreeze聚类",
  "level": 2
}, {
  "value": "聚类简介",
  "id": "聚类简介",
  "level": 3
}, {
  "value": "聚类信息范围",
  "id": "聚类信息范围",
  "level": 3
}, {
  "value": "AppFreeze故障信息聚类",
  "id": "appfreeze故障信息聚类",
  "level": 3
}, {
  "value": "增强日志信息聚类",
  "id": "增强日志信息聚类",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "appfreeze应用冻屏检测",
        children: "AppFreeze（应用冻屏）检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在使用应用时，如果出现点击无反应或应用无响应等情况，并且持续时间超过一定限制，就会被定义为应用冻屏（AppFreeze），即应用无响应。系统会检测应用无响应，并生成AppFreeze日志，供应用开发者分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470799)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文仅适用于Stage模型下的应用。在根据本文分析日志前，开发者需要具备JS在系统中运行情况、C++程序堆栈信息的相关基础知识，并对应用相关的子系统有一定了解。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检测原理",
      children: "检测原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前应用冻屏检测从以下维度检测，了解其原理有助于应用开发者定位和分析AppFreeze故障。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(372380)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppFreeze检测仅对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology#release%E7%89%88%E6%9C%AC%E5%BA%94%E7%94%A8",
        children: "release版本应用"
      }), "生效，对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology#debug%E7%89%88%E6%9C%AC%E5%BA%94%E7%94%A8",
        children: "debug版本应用"
      }), "不生效。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "故障类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "THREAD_BLOCK_6S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用主线程卡死超时"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APP_INPUT_BLOCK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户输入响应超时"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用发生上述故障时，为了保证可恢复，会杀死应用。并上报应用冻屏事件，可通过HiAppEvent订阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events",
        children: "应用冻屏事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thread_block_6s-应用主线程卡死超时",
      children: "THREAD_BLOCK_6S 应用主线程卡死超时"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "概述"
        })
      }), "：发生该故障，表示当前应用主线程有卡死或者执行任务过多的情况，影响应用的流畅度和体验。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "检测原理"
        })
      }), "：应用的watchdog线程定期向主线程插入判活检测任务。如果判活检测超过3s未被执行，将上报THREAD_BLOCK_3S告警事件；如果超过6s仍未被执行，将上报THREAD_BLOCK_6S主线程卡死事件。两个事件匹配生成THREAD_BLOCK的应用无响应日志。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检测原理如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388277)/* ["default"] */.A) + "",
        width: "829",
        height: "625"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "app_input_block-用户输入响应超时",
      children: "APP_INPUT_BLOCK 用户输入响应超时"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "概述"
        })
      }), "：该故障是指点击事件超过5s未得到响应。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "检测原理"
        })
      }), "：用户点击应用时，输入系统会向应用侧发送点击事件；应用侧的响应反馈回执超时，则上报该故障。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检测原理如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(770397)/* ["default"] */.A) + "",
        width: "1250",
        height: "675"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志获取",
      children: "日志获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用冻屏日志和进程崩溃日志一致，都是由Faultlogger模块进行管理，可通过以下方式获取："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式一：通过DevEco Studio获取日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio会收集设备/data/log/faultlog/faultlogger/路径下的进程崩溃故障日志到FaultLog下，根据进程名和故障时间分类显示。获取日志的方法参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log",
        children: "DevEco Studio使用指南-FaultLog"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式二：通过HiAppEvent接口订阅"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiAppEvent给开发者提供了故障订阅接口，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
        children: "HiAppEvent介绍"
      }), "。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-arkts",
        children: "订阅应用冻屏事件（ArkTS）"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-ndk",
        children: "订阅应用冻屏事件（C/C++）"
      }), "完成应用冻屏事件订阅，并通过事件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events#%E4%BA%8B%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "external_log"
      }), "字段读取故障日志文件内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式三：通过hdc获取日志，需打开开发者选项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发者选项打开的情况下，开发者可以通过hdc file recv /data/log/faultlog/faultlogger D:\\命令导出故障日志到本地，故障日志文件名格式为appfreeze-进程名-进程UID-毫秒级时间.log。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志规格",
      children: "日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用冻屏（AppFreeze）问题需要结合应用冻屏日志和hilog流水日志进行分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前提供一个故障分析示例，请开发者根据日志中的模块信息进行具体分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用冻屏日志主要分以下几个模块信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志头部信息",
      children: "日志头部信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX@HarmonyOS\n================================================================\nDevice info:HUAWEI Mate 60 Pro\nBuild info:ALN-AL00 6.0.0.328(C00E1R4P3DEVDUlog)\nDeviceDebuggable:No\nFingerprint:e18a33c12e1361173ec9ac1c93f2bd0c2daa88f03c7f76b228cca14bdc6a21b1\nModule name:com.samples.freezedebug\nReleaseType:release\nCpuAbi:arm64-v8a\nVersion:1.0.0\nVersionCode:1000000\nIsSystemApp:No\nPreInstalled:No\nForeground:Yes\nPid:13680\nUid:20020177\nProcess life time:18s\nProcess Memory(kB):163819(Rss)\nDevice Memory(kB):Total 11679272, Free 3697424, Available 5814272\nReason:THREAD_BLOCK_6S\nappfreeze: com.samples.freezedebug THREAD_BLOCK_6S at 20250628140837\nDisplayPowerInfo:powerState:UNKNOWN\nHitraceIdInfo: hitrace_id: a92ab27238f409a, span_id: 1cd61c9, parent_span_id: 3072e, trace_flag: 0\nPage switch history:\n  14:08:30:327 /ets/pages/Index:Appfreeze\n  14:08:28:986 /ets/pages/Index\n  14:08:26:502 :enters foreground\n  14:08:07:606 :leaves foreground\n  14:08:06:246 /ets/pages/Index:Appfreeze\n  14:08:01:955 :enters foreground\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\nDOMAIN:AAFWK\nSTRINGID:THREAD_BLOCK_6S\nTIMESTAMP:2025/06/28-14:08:37:360\nPID:13680\nUID:20020177\nPACKAGE_NAME:com.samples.freezedebug\nPROCESS_NAME:com.samples.freezedebug\nNOTE: Current fault may be caused by the system's low memory or thermal throttling, you may ignore it and analysis other faults.\n***\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，当整机资源告警（如整机低内存或热限频）时，系统会输出NOTE行。此时开发者可忽略应用冻屏故障。在之前的API版本中，无论整机资源状态如何，系统都不会输出此NOTE行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，发生THREAD_BLOCK_6S故障时，日志中新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain/js-apis-hitracechain#hitraceid",
        children: "HiTraceId"
      }), "信息打印。HitraceId是HiTraceChain提供的唯一跟踪标识，用于跟踪业务流程调用链。可以协助开发者查看故障时间段内，故障流程的hilog日志，分析日志查看应用的执行状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppFreeze事件（THREAD_BLOCK_6S、 APP_INPUT_BLOCK）都包含以下几部分信息："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeviceDebuggable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备的系统版本是否可调试，和开发者选项无关。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 23开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReleaseType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用的版本类型。release表示应用为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
              children: "release版本应用"
            }), "，debug表示应用为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
              children: "debug版本应用"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 23开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CpuAbi"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二进制接口类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 23开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IsSystemApp"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用是否为系统应用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 23开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用无响应原因，与应用无响应检测能力点对应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障时的pid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PACKAGE_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用进程包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E6%9C%89%E9%A1%B5%E9%9D%A2%E5%88%87%E6%8D%A2%E8%BD%A8%E8%BF%B9%E7%9A%84%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "Page switch history"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 20开始，维测进程会记录应用切换历史。应用发生故障后，生成的故障文件将包含页面切换历史轨迹。如果维测服务进程崩溃或被终止运行，或者未能成功缓存页面切换轨迹，则不包含此字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process life time"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["故障进程存活时间。单位：s。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 22开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process Memory(kB)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["故障进程内存占用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 22开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device Memory(kB)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["整机内存状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 22开始支持。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志主干通用信息",
      children: "日志主干通用信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "start time: 2025/06/28-14:08:34:318\nDOMAIN = AAFWK\nEVENTNAME = THREAD_BLOCK_3S\nTIMESTAMP = 2025/06/28-14:08:34:310\nPID = 13680\nUID = 20020177\nTID = 13680\nPACKAGE_NAME = com.samples.freezedebug\nPROCESS_NAME = com.samples.freezedebug\neventLog_action = ffrt,t,GpuStack,cmd:m,hot\neventLog_interval = 10\nMSG =\nFault time:2025/06/28-14:08:34\nApp main thread is not response!\nMain handler dump start time: 2025-06-28 14:08:34.067\nmainHandler dump is:\n EventHandler dump begin curTime: 2025-06-28 14:08:34.067\n Event runner (Thread name = , Thread ID = 13680) is running\n Current Running: start at 2025-06-28 14:08:27.354, Event { send thread = 13680, send time = 2025-06-28 14:08:22.353, handle time = 2025-06-28 14:08:27.353, trigger time = 2025-06-28 14:08:27.354, task name = uv_timer_task, caller = [ohos_loop_handler.cpp(OnTriggered:72)] }\n History event queue information:\n No. 0 : Event { send thread = 13856, send time = 2025-06-28 14:08:22.336, handle time = 2025-06-28 14:08:22.336, trigger time = 2025-06-28 14:08:22.336, completeTime time = 2025-06-28 14:08:22.337, priority = VIP, task name = MMITask, caller = [deamon_io_waiter.cpp(HandleFileDescriptorEvent:225)] }\n...\n No. 31 : Event { send thread = 13856, send time = 2025-06-28 14:08:22.330, handle time = 2025-06-28 14:08:22.380, trigger time = 2025-06-28 14:08:22.330, completeTime time = 2025-06-28 14:08:22.331, priority = VIP, task name = vSyncTask, caller = [deamon_io_waiter.cpp(PostTaskForVsync:159)] }\n VIP priority event queue information:\n No.1 : Event { send thread = 13843, send time = 2025-06-28 14:08:31.066, handle time = 2025-06-28 14:08:31.066, id = 1, caller = [watchdog.cpp(Timer:233)] }\n No.2 : Event { send thread = 13843, send time = 2025-06-28 14:08:34.067, handle time = 2025-06-28 14:08:34.067, id = 1, caller = [watchdog.cpp(Timer:233)] }\n Total size of VIP events : 2\n Immediate priority event queue information:\n Total size of Immediate events : 0\n High priority event queue information:\n Total size of High events : 0\n Low priority event queue information:\n Total size of Low events : 0\n Idle priority event queue information:\n Total size of Idle events : 0\n Total event size : 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppFreeze事件（THREAD_BLOCK_6S、 APP_INPUT_BLOCK）都包含以下几部分信息："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENTNAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组成卡死检测事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障时上报事件的时刻，可以根据应用无响应检测能力点中说明的超时时间，在相应hilog流水日志中缩小查看日志的时间范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障时的pid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障时的uid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障时的tid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PACKAGE_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用进程包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROCESS_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用进程名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障时间及EventHandler信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EventHandler信息，具体解释如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dump信息包含以下字段："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EventHandler dump begin curTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取dump信息时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event runner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EventHandler对应的线程名和线程号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Current Running"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前正在执行的完整任务信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "History event queue information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "历史执行任务信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIP priority event queue information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VIP级任务队列信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate priority event queue information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "立即执行任务队列信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High priority event queue information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高优先级任务队列信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low priority event queue information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低优先级任务队列信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idle priority event queue information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "挂起任务队列信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务信息包含以下字段："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "send thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务线程号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "send time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "task name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务队列中的任务名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "caller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务提交方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "handle time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务预期执行时间，该时间与实际的任务执行时间（trigger time）可能存在偏差。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trigger time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务执行时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "completeTime time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务执行完成时间（如果没有打印则表示该任务未执行完成）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(616502)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EventHandler信息中，开发者只需重点关注EventHandler dump begin curTime，trigger time和completeTime time时间即可。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["EventHandler信息详细指导可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-app-freeze-way#section190014865618",
        children: "查看eventHandler信息"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "堆栈信息",
      children: "堆栈信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "故障进程堆栈信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tid:13680, Name:les.freezedebug\nstate=S, utime=0, stime=0, priority=0, nice=-20, clk=100\n#00 pc 000000000000186c [shmm](__kernel_gettimeofday+72)\n#01 pc 00000000001d887c /system/lib/ld-musl-aarch64.so.1(gettimeofday+40)(f1a940981720250b920ee26d2d76af5b)\n#02 pc 000000000058fb5c /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::builtins::BuiltinsDate::Now(panda::ecmascript::EcmaRuntimeCallInfo*)+48)(0f1928b77d36d27edb5512bd89806a6f)\n#03 pc 0000000000cff5dc /system/lib64/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+40)\n#04 pc 000000000036aaf4 /system/lib64/module/arkcompiler/stub.an(BCStub_HandleCallthis0Imm8V8StwCopy+380)\n#05 at wait15s (entry/src/main/ets/pages/Index.ets:16:10)\n#06 pc 000000000026b1dc /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::InterpreterAssembly::Execute(panda::ecmascript::EcmaRuntimeCallInfo*)+536)(0f1928b77d36d27edb5512bd89806a6f)\n#07 pc 000000000096b188 /system/lib64/platformsdk/libark_jsruntime.so(panda::FunctionRef::CallForNapi(panda::ecmascript::EcmaVM const*, panda::JSValueRef*, panda::JSValueRef* const*, int)+1432)(0f1928b77d36d27edb5512bd89806a6f)\n#08 pc 000000000006b7a4 /system/lib64/platformsdk/libace_napi.z.so(napi_call_function+212)(eaa639519e67e8495ca596293a0d33cd)\n#09 pc 000000000000b17c /system/lib64/platformsdk/libtimer.z.so(OHOS::JsSysModule::Timer::TimerCallback(uv_timer_s*) (.cfi)+528)(764291289e89523cdbe9c3c78c1cca35)\n#10 pc 0000000000013ea8 /system/lib64/platformsdk/libuv.so(uv__run_timers+68)(9e7eb59ca1a45f4230b641a7c940a20b)\n#11 pc 000000000001a344 /system/lib64/platformsdk/libuv.so(uv_run+376)(9e7eb59ca1a45f4230b641a7c940a20b)\n#12 pc 00000000000895a8 /system/lib64/platformsdk/libruntime.z.so(OHOS::AbilityRuntime::OHOSLoopHandler::OnTriggered()+140)(daf29e377c47e3e26282e745dd1b3488)\n#13 pc 0000000000089b4c /system/lib64/platformsdk/libruntime.z.so(std::__h::__function::__func<OHOS::AbilityRuntime::OHOSLoopHandler::OnTriggered()::$_0, std::__h::allocator<OHOS::AbilityRuntime::OHOSLoopHandler::OnTriggered()::$_0>, void ()>::operator()() (.9efded9864dc55830f61b3b92d59beab)+52)(daf29e377c47e3e26282e745dd1b3488)\n#14 pc 000000000001ff6c /system/lib64/chipset-sdk-sp/libeventhandler.z.so(OHOS::AppExecFwk::(anonymous namespace)::EventRunnerImpl::ExecuteEventHandler(std::__h::unique_ptr<OHOS::AppExecFwk::InnerEvent, void (*)(OHOS::AppExecFwk::InnerEvent*)>&)+2228)(475713336c2720d372d5aeb99dda5f9f)\n#15 pc 000000000001a7d8 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(OHOS::AppExecFwk::(anonymous namespace)::EventRunnerImpl::Run()+648)(475713336c2720d372d5aeb99dda5f9f)\n#16 pc 000000000003f5f4 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(OHOS::AppExecFwk::EventRunner::Run()+404)(475713336c2720d372d5aeb99dda5f9f)\n#17 pc 00000000000a50f0 /system/lib64/platformsdk/libappkit_native.z.so(OHOS::AppExecFwk::MainThread::Start()+504)(e794b687fdf46631ae5144eba250f8c0)\n#18 pc 0000000000005278 /system/lib64/appspawn/appspawn/libappspawn_ace.z.so(RunChildProcessor(AppSpawnContent*, AppSpawnClient*)+568)(143c05087e9460f0fd794b9dce5dec29)\n#19 pc 000000000000baa8 /system/bin/appspawn(AppSpawnChild+648)(25ab88f6e04b1d2c8feb5d3eebfb4664)\n#20 pc 0000000000016478 /system/bin/appspawn(ProcessSpawnReqMsg+3260)(25ab88f6e04b1d2c8feb5d3eebfb4664)\n#21 pc 0000000000013aac /system/bin/appspawn(OnReceiveRequest+724)(25ab88f6e04b1d2c8feb5d3eebfb4664)\n#22 pc 0000000000017844 /system/lib64/chipset-sdk-sp/libbegetutil.z.so(HandleRecvMsg_+384)(a9ddb8b84cc09183cc6bd2e5bb875f30)\n#23 pc 000000000001715c /system/lib64/chipset-sdk-sp/libbegetutil.z.so(HandleStreamEvent_+152)(a9ddb8b84cc09183cc6bd2e5bb875f30)\n#24 pc 000000000001444c /system/lib64/chipset-sdk-sp/libbegetutil.z.so(ProcessEvent+380)(a9ddb8b84cc09183cc6bd2e5bb875f30)\n#25 pc 0000000000013edc /system/lib64/chipset-sdk-sp/libbegetutil.z.so(RunLoop_.llvm.16927440879641410339+656)(a9ddb8b84cc09183cc6bd2e5bb875f30)\n#26 pc 0000000000010dcc /system/bin/appspawn(AppSpawnRun+212)(25ab88f6e04b1d2c8feb5d3eebfb4664)\n#27 pc 000000000000eb90 /system/bin/appspawn(main+728)(25ab88f6e04b1d2c8feb5d3eebfb4664)\n#28 pc 00000000000a9804 /system/lib/ld-musl-aarch64.so.1(libc_start_main_stage2+84)(f1a940981720250b920ee26d2d76af5b)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大部分情况下，THREAD_BLOCK_6S、APP_INPUT_BLOCK故障的堆栈信息，可以协助开发者定位到异常代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其他情况下（比如瞬时栈场景），由于主线程繁忙等问题，导致获取堆栈信息延迟，无法及时捕获到异常代码段，堆栈的栈顶信息并非开发者期望获取的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为解决上述问题，从API version 21开始，支持获取AppFreeze的增强日志。协助开发者定位问题，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86",
        children: "AppFreeze（应用冻屏）增强日志实现原理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(529959)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在整机高负载情况（如CPU高负载）下，采用低开销方式获取调用栈时，可能损失函数名信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，出现'Failed to dump normal stacktrace'字样时，系统采取轻量化的frame pointer回溯模式。栈回溯可能中断在非使能frame pointer的库（在GCC编译使用 -fomit-frame-pointer 选项时，编译产物不使能frame pointer），以及受轻量化的限制，单个线程的回栈层数不会超过50层。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，在线程号下新增线程状态等信息用于判断系统卡顿问题。其中，state表示线程运行状态，priority和nice表示调度优先级，stime和utime表示运行时间。对比THREAD_BLOCK_3S和THREAD_BLOCK_6S的堆栈运行时间无变化，说明进程未被调度。分析业务代码无阻塞调用后可判断为系统调度问题。线程状态信息失败时，以下字段均不显示，线程状态信息在故障日志中格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "state=S, utime=0, priority=0, nice=-20, clk=100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字段信息解释如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程运行状态。读取自/proc/pid/stat的state的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "utime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程在用户态下消耗的CPU的嘀嗒数。读取自/proc/pid/stat的utime的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程在内核态下消耗的CPU的嘀嗒数。读取自/proc/pid/stat的stime的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时优先级。读取自/proc/pid/stat的priority的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "静态优先级。读取自/proc/pid/stat的nice的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每秒的时钟嘀嗒次数。使用sysconf(_SC_CLK_TCK)获取，获取失败时使用默认值100。通过嘀嗒数除以该值可以计算得到运行时间（单位：秒）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对端信息与当前故障进程通信的进程信息",
      children: "对端信息（与当前故障进程通信的进程信息）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）BinderCatcher：显示进程间通信的调用信息及等待时间过长的情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PeerBinderCatcher -- pid==13680\nBinderCatcher --\n    13840:14102 to 901:4079 code 16 wait:0.25653125 s frz_state:3,  ns:-1:-1 to -1:-1, debug:13840:14102 to 901:4079, active_code:0, active_thread=0, pending_async_proc=0\n    3712:3712 to 13967:14076 code d2 wait:0.703385417 s frz_state:3,  ns:-1:-1 to -1:-1, debug:3712:3712 to 13967:14076, active_code:0, active_thread=0, pending_async_proc=0\n    1733:2285 to 3712:3712 code b wait:1.365925521 s frz_state:3,  ns:-1:-1 to -1:-1, debug:1733:2285 to 3712:3712, active_code:0, active_thread=0, pending_async_proc=0\n...\npid context     request started max ready   free_async_space\n14072   binder  0   2   16  3   520192\n14103   binder  0   4   16  6   520192\n13967   binder  0   3   16  3   520192\n13878   binder  0   2   16  3   520192\n13840   binder  0   2   16  3   520192\n13863   binder  0   1   16  3   520192\n13680   binder  0   2   16  3   520192\n13770   binder  0   3   16  5   520192\n13749   binder  0   3   16  5   520192\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程间通信调用信息解释如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "主要信息字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xxx:xxx to xxx:xxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端进程号、线程号 to 服务端进程号、线程号。其中async表示异步，无async表示同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端和服务端达成一致约束的业务码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通信等待时长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "frz_state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程冻结状态。  -1 未知；  1 默认；  2 正在向用户态发送binder状态信息；  3 走到了binder接收线程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端进程号、线程号 to 服务端进程号、线程号（非卓易通内进程显示-1）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC通信双方的信息补充。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "active_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正在处理的异步消息code。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "active_thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理这个异步消息的线程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pending_async_proc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被这个异步消息阻塞的进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程PID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通信方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求申请的IPC线程数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "started"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已经申请启动的IPC线程数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以申请的最大IPC线程数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空闲IPC线程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "free_async_space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空闲异步空间，用于观测异步信息阻塞。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）PeerBinder Stacktrace：故障进程相关的对端进程有卡死，会抓取对端的进程堆栈，即与当前进程通信的进程堆栈"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tid:48841, Name:xxx\n#00 pc 000000000016adf4 /system/lib/ld-musl-aarch64.so.1\n#01 pc 000000000001c0d4 /system/lib64/chipset-sdk-sp/libeventhandler.z.so\n#02 pc 000000000001a7f4 /system/lib64/chipset-sdk-sp/libeventhandler.z.so\n#03 pc 000000000003f5f4 /system/lib64/chipset-sdk-sp/libeventhandler.z.so\n#04 pc 00000000000a50f0 /system/lib64/platformsdk/libappkit_native.z.so\n#05 pc 0000000000005278 /system/lib64/appspawn/appspawn/libappspawn_ace.z.so\n#06 pc 000000000000baa8 /system/bin/appspawn\n#07 pc 0000000000016478 /system/bin/appspawn\n#08 pc 0000000000013aac /system/bin/appspawn\n#09 pc 0000000000017844 /system/lib64/chipset-sdk-sp/libbegetutil.z.so\n#10 pc 000000000001715c /system/lib64/chipset-sdk-sp/libbegetutil.z.so\n#11 pc 000000000001444c /system/lib64/chipset-sdk-sp/libbegetutil.z.so\n#12 pc 0000000000013edc /system/lib64/chipset-sdk-sp/libbegetutil.z.so\n#13 pc 0000000000010dcc /system/bin/appspawn\n#14 pc 000000000000eb90 /system/bin/appspawn\n#15 pc 00000000000a9804 /system/lib/ld-musl-aarch64.so.1\n#16 pc 000000000000b754 /system/bin/appspawn\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cpu信息",
      children: "CPU信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整机CPU信息及解释如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Load average: 14.3 / 12.9 / 11.4; the cpu load average in 1 min, 5 min and 15 min\nCPU usage from 2025-06-28 14:08:36 to 2025-06-28 14:08:37\nTotal: 22.45%; User Space: 13.64%; Kernel Space: 8.81%; iowait: 0.33%; irq: 0.07%; idle: 77.15%\nDetails of Processes:\n    PID   Total Usage      User Space    Kernel Space    Page Fault Minor    Page Fault Major    Name\n    13680      8.86%           8.31%          0.55%            4711                6637            com.samples.freezedebug\n    644        2.55%           1.40%          1.15%          210104                7391            hiview\n    600        0.89%           0.78%          0.10%           60192                 514            hilogd\n    1685       0.53%           0.31%          0.22%          879838               59636            foundation\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "主要信息字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程PID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU使用率，Total Usage = User Space+Kernel Space。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态使用率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态使用率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page Fault Minor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "次要缺页错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page Fault Major"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主要缺页错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程名。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存信息",
      children: "内存信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Get freeze memory start time: 2025-06-28 14:08:37.112\nsome avg10=56.81 avg60=56.81 avg300=56.81 total=56\nfull avg10=56.81 avg60=56.81 avg300=56.81 total=56\n...\nReclaimAvailBuffer:                    4676608 kB\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整机内存信息如上所示，其中ReclaimAvailBuffer为整机剩余可用内存，主要用于确认是否是低内存问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志差异性信息",
      children: "日志差异性信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "APP_INPUT_BLOCK 用户输入响应超时"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX@HarmonyOS\n================================================================\n...\nReason:APP_INPUT_BLOCK\nappfreeze: com.samples.freezedebug APP_INPUT_BLOCK at 20251129123745\nWait Event(430) to be marked exceed 8000ms, lastDispatchEvent(430), lastProcessEvent(429), lastMarkedEvent(428)\nDisplayPowerInfo:powerState:AWAKE\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，发生APP_INPUT_BLOCK故障时，日志中会同步输出多模点击输入（包含鼠标、键盘、触控板及触屏等输入方式）超时事件（Wait Event）。该事件信息中包含事件id，事件检测超时阈值，及前置事件id。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件检测超时阈值：log版本为8000毫秒，nolog版本为5000毫秒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前置事件中包含：lastDispatchEvent为上次分发的事件；lastProcessEvent为上次处理的事件；lastMarkedEvent为上次标记的事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述示例中，上次分发的事件是430，上次处理的事件是429，上次标记的事件是428，表明430事件已分发完毕，在处理环节，已超时8000毫秒。此日志可以用于APP_INPUT_BLOCK事件的简单定界，帮助问题分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appfreeze应用冻屏增强日志信息",
      children: "AppFreeze（应用冻屏）增强日志信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，支持获取AppFreeze的增强日志。该日志通过采集整机及主线程的运行负载，并抓取多份主线程调用栈，帮助开发者分析问题根源。相比原有日志，AppFreeze的增强日志主要解决了以下两个不足："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "难以定位故障期间的主线程热点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缺乏对主线程繁忙或阻塞的资源层面分析。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成AppFreeze增强日志的流程分为以下两个阶段，具体如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用进程在运行时发生THREAD_BLOCK_3S时，会开启采集主线程调用栈流程，记录当前时刻的一些CPU信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用进程在运行时发生THREAD_BLOCK_6S或APP_INPUT_BLOCK时，会停止上述流程的采集主线程调用栈流程，并计算周期内的CPU信息。一般情况下，会抓取1~10次堆栈日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(675522)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于应用冻屏事件的采样栈会与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events",
            children: "MAIN_THREAD_JANK"
          }), "冲突，如果应用接入MAIN_THREAD_JANK的setEventConfig接口自定义配置采集堆栈的个数，应用冻屏事件的采集堆栈的会与应用当前配置的采集堆栈的个数一致。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "APP_INPUT_BLOCK故障有增强日志的前提是：先发生THREAD_BLOCK_3S。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志获取-1",
      children: "日志获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可通过以下方式获取Appfreeze增强日志路径："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式一：通过HiAppEvent接口订阅"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要在AppScope/app.json5文件中配置如下环境变量："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"appEnvironments\": [\n  {\n    \"name\": \"DFX_APPFREEZE_LOG_OPTIONS\",\n    \"value\": \"mainthread_sampling:enable\"\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiAppEvent给开发者提供了故障订阅接口，开发者可以使用HiAppEvent监听应用冻屏事件，获取文件内容，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events",
        children: "应用冻屏事件介绍"
      }), "。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-arkts",
        children: "订阅应用冻屏事件（ArkTS）"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events-ndk",
        children: "订阅应用冻屏事件（C/C++）"
      }), "完成应用冻屏事件订阅。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过事件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events#%E4%BA%8B%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "external_log"
      }), "字段读取应用冻屏事件生成的故障文件和应用冻屏事件的增强日志文件。增强日志文件的命名与应用冻屏事件生成的故障文件名称格式相同。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "external_log是字符串数组，第一个元素为应用冻屏事件生成的故障文件路径；第二个元素为应用冻屏事件生成的增强日志文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式二：通过hdc获取日志，需打开开发者选项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发者选项打开的情况下，开发者可以通过“hdc file recv /data/log/faultlog/freeze_ext D:\\”命令导出故障日志到本地，故障日志文件名格式为：freeze-cpuinfo-ext-进程名-进程UID-毫秒级时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志规格-1",
      children: "日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增强日志的字段头部信息如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "起始API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TimeStamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志生成时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障模块名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增强日志的CPU总体耗时信息字段如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "起始API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProcessCpuTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计周期内，进程运行时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeviceRuntime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计周期内，设备所有CPU的运行时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StartTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计开始时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EndTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计结束时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StaticsDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计持续时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CpuTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计周期内，主线程运行时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SyncWaitTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程等待时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OptimalCpuTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计周期内，主线程最优负载运行时间（使用最大核的最高算力运行）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SupplyAvailableTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调度可优化时间。如果值较小，说明主线程繁忙，需要开发者考虑优化主线程的任务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增强日志的主线程堆栈信息字段如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "起始API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SnapshotTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本次抓取主线程堆栈的时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ThreadInfos Tid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SubmitterStacktrace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务提交者调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "增强日志规格",
      children: "增强日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节主要介绍增强日志的一般日志规格，以下是一份AppFreeze增强日志的核心内容。可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A2%9E%E5%BC%BA%E6%97%A5%E5%BF%97%E4%BF%A1%E6%81%AF%E8%81%9A%E7%B1%BB",
        children: "聚类规则"
      }), "提取主线程堆栈关键信息，提高问题定位效率及准确性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX @HarmonyOS\n===============================================================\nTimeStamp: 2021-01-01 20:06:01.175  <- 日志生成时间\nModule name: com.example.freeze   <- 模块名\n\n#Basic Concepts   <- CPU时间注释\nT1:  StaticsDuration, EndTime - StartTime.\nT2:  CpuTime              --Time that spend on CPU.\nT3:  SyncWaitTime         --SleepingTime + Runnable Time, etc.\nT4:  OptimalCpuTime       --run the thread at the max Core's max cpu capacity.\nT5:  SupplyAvailableTime  --T2 - T4. Time can be optimized by scheduling.\nEquation:  T1 = T2 + T3. T2 = T4 + T5.\n|-----------------------------------StaticsDuration-----------------------------------|.\n|-------------------------CpuTime----------------------|--------SyncWaitTime----------|.\n|----OptimalCpuTime----|------SupplyAvailableTime------|--------SyncWaitTime----------|.\n\n#Basic Statistical Infomation  <- CPU基本统计信息\nProcessCpuTime: 0 ms  <- 统计周期内，进程运行时间\nDeviceRuntime: 0 ms  <- 统计周期内，设备所有CPU的运行时间\nTid: 2320  <- 故障主线程号\nStartTime: 2021-01-01 20:05:58:177  <- 统计开始时间\nEndTime: 2021-01-01 20:06:01:172  <- 统计结束时间\nStaticsDuration: 2995 ms  <- 统计持续时间\nCpuTime: 0 ms  <- 统计周期内，主线程运行时间\nSyncWaitTime: 2995 ms  <- 主线程等待时间\nOptimalCpuTime: 0 ms  <- 统计周期内，主线程最优负载运行时间（使用最大核的最高算力运行）\nSupplyAvailableTime: 0 ms  <- 调度可优化时间\n\n#CpuFreq Usage (usage >=1%)  <- 当CPU单个频点使用率>=1%时，这些频点及频点的使用率就会被列出来。\nstart time: 2021-01-01 20:06:00:888  <- 计算CPU使用率开始时间\ncpu0 Usage 23.5%, 1430MHZ 21.04%  <- cpu0的总使用率，cpu0单个频点的使用率（在1430MHZ频点下的使用率）\ncpu1 Usage 23.5%, 1430MHZ 21.04%\ncpu2 Usage 23.5%, 1430MHZ 21.04%\ncpu3 Usage 23.5%, 1430MHZ 21.04%\n.......\nend time: 2021-01-01 20:06:00:888  <- 计算CPU使用率结束时间\n#ThreadInfos Tid: 2204, Name: com.example.freeze  <- 故障线程号，线程名\nSnapshotTime:2021-01-01-20-05-58.292875  <- 获取主线程的时间\n#00 pc 00000000000015b8 [shmm](__kernel_gettimeofday+72) <- 主线程调用栈\n#01 pc 00000000001d7e44 /system/lib64/ld-musl-aarck64.so.1(clock_gettime+48)(f8a0616c89b184992d0e8883cc78f638)\n#02 pc 00000000001d9f20 /system/lib64/ld-musl-aarck64.so.1(time+32)(f8a0616c89b184992d0e8883cc78f638)\n#03 pc 0000000000007e2c /data/storage/el1/bundle/libs/arm64/libsample.so(WaitSomeTime()+76)(8b74cdc906ea6b2eba95d891bc91c72a)\n#04 pc 0000000000009b2c /data/storage/el1/bundle/libs/arm64/libsample.so(8b74cdc906ea6b2eba95d891bc91c72a)\n#05 pc 00000000000a0500 /system/lib64/platformsdk/libruntime.z.so(c2f75213ee12fdf08da323fe546923ff)\n#06 pc 0000000000017b04 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(366b4d7f2eba693ad06f14469b08943b)\n#07 pc 0000000000016f38 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(366b4d7f2eba693ad06f14469b08943b)\n#08 pc 000000000003e160 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(OHOS::AppExecFwk::EventRunner::Run()+396)(366b4d7f2eba693ad06f14469b08943b)\n.......\n========SubmitterStacktrace======== <- 任务提交者调用栈(最多抓取16层调用栈)\n#00 pc 0000000000013108 /system/lib64/platformsdk/libuv.so(uv_queue_work+292)(366b4d7f2eba693ad06f14469b08943b)\n#01 pc 0000000000008cdc /data/storage/el1bundle/libs/arm64/libsample.so(8b74cdc906ea6b2eba95d891bc91c72a)\n#02 pc 000000000005ae00 /system/lib64/platformsdk/libace_napi.z.so(panda::JSValueRef ArkNativeFunctionCallBack<true>(panda::JsiRuntimeCallInfo*)+272)(bc1c64aabbe5c7d4db2282a6137443e1)\n#03 pc 0000000000de3efc /system/lib64/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+44)\n#04 pc 0000000000448dd4 /system/lib64/module/arkcompiler/stub.an(BCStub_HandleCallthis0Imm8V8StwCopy+372)\n#05 at anonymous (sample|sample|1.0.0|src/main/ets/pages/Index.ts:381:36)\n#06 pc 00000000001e5c8c /system/lib64/platformsdk/libark_jsruntime.so(ce0b05d90b9fae02e7abf8e9f1e5a0f3)\n.......\n\nSnapshotTime: 2021-01-01-20-05-58.549685\n#00 pc 00000000000015b8 [shmm](__kernel_gettimeofday+72)\n#01 pc 00000000001d7e44 /system/lib64/ld-musl-aarck64.so.1(clock_gettime+48)(f8a0616c89b184992d0e8883cc78f638)\n#02 pc 00000000001d9f20 /system/lib64/ld-musl-aarck64.so.1(time+32)(f8a0616c89b184992d0e8883cc78f638)\n#03 pc 0000000000007e2c /data/storage/el1/bundle/libs/arm64/libsample.so(WaitSomeTime()+76)(8b74cdc906ea6b2eba95d891bc91c72a)\n#04 pc 0000000000009b2c /data/storage/el1/bundle/libs/arm64/libsample.so(8b74cdc906ea6b2eba95d891bc91c72a)\n#05 pc 00000000000a0500 /system/lib64/platformsdk/libruntime.z.so(c2f75213ee12fdf08da323fe546923ff)\n.......\n========SubmitterStacktrace========\n#00 pc 0000000000013108 /system/lib64/platformsdk/libuv.so(uv_queue_work+292)(366b4d7f2eba693ad06f14469b08943b)\n#01 pc 0000000000008cdc /data/storage/el1bundle/libs/arm64/libsample.so(8b74cdc906ea6b2eba95d891bc91c72a)\n#02 pc 000000000005ae00 /system/lib64/platformsdk/libace_napi.z.so(panda::JSValueRef ArkNativeFunctionCallBack<true>(panda::JsiRuntimeCallInfo*)+272)(bc1c64aabbe5c7d4db2282a6137443e1)\n#03 pc 0000000000de3efc /system/lib64/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+44)\n#04 pc 0000000000448dd4 /system/lib64/module/arkcompiler/stub.an(BCStub_HandleCallthis0Imm8V8StwCopy+372)\n#05 at anonymous (sample|sample|1.0.0|src/main/ets/pages/Index.ts:381:36)\n.......\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appfreeze聚类",
      children: "AppFreeze聚类"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "聚类简介",
      children: "聚类简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序在不同版本或同一版本的不同时间产生的AppFreeze可能为同一原因，但在AppFreeze故障日志中生成的大部分信息会随版本、时间等因素变化，无法快速确定是否为重复问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppFreeze故障信息包含系统侧和应用侧的调用栈，不利于应用开发者快速排查应用侧的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，为避免重复分析多份故障信息，提高应用故障问题的分析效率，需要对AppFreeze故障信息进行聚类；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，聚类也能帮助开发者对不同原因问题进行分类统计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "聚类信息范围",
      children: "聚类信息范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppFreeze故障日志信息中的故障线程信息表示业务线程发生故障时代码调用信息，相同的故障线程调用栈信息必然表示相同的故障原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，将故障线程信息作为聚类范围是最为准确的，开发者可根据业务聚类的需求调整增加其他故障日志的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["故障线程信息可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A0%86%E6%A0%88%E4%BF%A1%E6%81%AF",
        children: "堆栈信息介绍"
      }), "获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "appfreeze故障信息聚类",
      children: "AppFreeze故障信息聚类"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppFreeze故障信息聚类方法同Cpp Crash一致，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#cppcrash%E8%81%9A%E7%B1%BB",
        children: "CppCrash聚类"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(528686)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果故障线程堆栈中有IPC栈帧，可获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AF%B9%E7%AB%AF%E4%BF%A1%E6%81%AF%E4%B8%8E%E5%BD%93%E5%89%8D%E6%95%85%E9%9A%9C%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1%E7%9A%84%E8%BF%9B%E7%A8%8B%E4%BF%A1%E6%81%AF",
        children: "binder堆栈"
      }), "信息用于聚类。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "增强日志信息聚类",
      children: "增强日志信息聚类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增强日志信息聚类规格与AppFreeze故障信息提取堆栈聚类规格一致，该部分参与聚类主要是为了解决AppFreeze故障堆栈信息不足导致的无法聚类问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#appfreeze%E6%95%85%E9%9A%9C%E4%BF%A1%E6%81%AF%E8%81%9A%E7%B1%BB",
        children: "AppFreeze故障信息聚类"
      }), "方法获取聚类特征，对增强日志信息进行聚类。"]
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
770397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958490-fa64ea657c6bf3f0af59f6cddeb65516.png");

},
372380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
529959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
470799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
616502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
388277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438535-24eca84da6c8bd04756db9bb28b79b02.png");

},
675522(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
528686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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