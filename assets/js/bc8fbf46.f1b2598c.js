"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["416511"], {
954803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_crash_detection_jscrash_guidelines_jscrash_guidelines_md_bc8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-fault-analysis-crash-detection-jscrash-guidelines-jscrash-guidelines-md-bc8.json
var site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_crash_detection_jscrash_guidelines_jscrash_guidelines_md_bc8_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines/jscrash-guidelines","title":"JS Crash（进程崩溃）检测","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines/jscrash-guidelines.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines","slug":"/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"JS Crash（进程崩溃）检测","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jscrash-guidelines","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"简介","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/fault-detection-overview/"},"next":{"title":"Cpp Crash（进程崩溃）检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines/jscrash-guidelines.md


const frontMatter = {
	title: 'JS Crash（进程崩溃）检测',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jscrash-guidelines',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'JS Crash（进程崩溃）检测';

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
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "日志获取",
  "id": "日志获取",
  "level": 2
}, {
  "value": "日志规格",
  "id": "日志规格",
  "level": 2
}, {
  "value": "异步线程栈跟踪故障场景日志规格",
  "id": "异步线程栈跟踪故障场景日志规格",
  "level": 3
}, {
  "value": "Page switch history",
  "id": "page-switch-history",
  "level": 3
}, {
  "value": "Reason",
  "id": "reason",
  "level": 3
}, {
  "value": "异常代码调用栈格式",
  "id": "异常代码调用栈格式",
  "level": 3
}, {
  "value": "HybridStack格式",
  "id": "hybridstack格式",
  "level": 3
}, {
  "value": "Promise异步栈",
  "id": "promise异步栈",
  "level": 3
}, {
  "value": "JsCrash聚类",
  "id": "jscrash聚类",
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
        id: "js-crash进程崩溃检测",
        children: "JS Crash（进程崩溃）检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS应用中，Crash（崩溃）检测是一项重要的监控能力，它可以帮助开发者及时发现和修复应用中的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检测原理",
      children: "检测原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟运行时捕获进程异常。生成故障日志的流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当代码执行时，未捕获的异常或错误导致应用崩溃，方舟运行时将捕获这些异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方舟运行时收集故障信息，并将其上报给维测进程Hiview。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "维测进程Hiview补充仅其有权限获取的信息(如整机内存状态、应用页面切换轨迹)，生成对应的崩溃日志文件, 存储在“/data/log/faultlog/faultlogger”目录下。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["上报崩溃事件，开发者可通过HiAppEvent订阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events",
          children: "崩溃事件"
        }), "。如需了解JS Crash问题分析方法，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-app-crash-js-way",
          children: "JS Crash类问题分析方法"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在async修饰的异步函数中主动抛出异常，不会产生JS Crash导致应用崩溃，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager#errormanageronerror",
        children: "ErrorManager"
      }), "观测该异常，样例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-faq#async%E5%87%BD%E6%95%B0%E5%86%85%E9%83%A8%E5%BC%82%E5%B8%B8%E7%9A%84%E5%A4%84%E7%90%86%E6%9C%BA%E5%88%B6",
        children: "Async函数内部异常的处理机制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志获取",
      children: "日志获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程崩溃日志是一种故障日志，由FaultLogger模块进行管理，可通过以下方式获取："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式一：通过DevEco Studio获取日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio会收集设备/data/log/faultlog/faultlogger/路径下的进程崩溃故障日志到FaultLog中，根据进程名、故障和时间分类显示。获取日志的方法参见：", (0,jsx_runtime.jsx)(_components.a, {
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
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-arkts",
        children: "订阅崩溃事件（ArkTS）"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-ndk",
        children: "订阅崩溃事件（C/C++）"
      }), "完成崩溃事件订阅，再通过事件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events#%E4%BA%8B%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "external_log"
      }), "字段读取故障日志文件内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式三：通过hdc获取日志，需打开开发者选项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发者选项打开的情况下，开发者可以通过如下命令获取日志至本地。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc file recv /data/log/faultlog/faultlogger 本地路径\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "故障日志文件名格式为：jscrash-进程名-进程UID-毫秒级时间.log。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志规格",
      children: "日志规格"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "起始API版本"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非必选说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeviceDebuggable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的系统版本是否可调试，和开发者选项无关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fingerprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障特征，聚类同类问题的哈希值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间戳"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名/进程名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
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
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CpuAbi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二进制接口类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hap版本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VersionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本编码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IsSystemApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用是否为系统应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障进程号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process life time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障进程存活时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process Memory(kB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程占用内存"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device Memory(kB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整机内存信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["依赖维测服务进程，若发生故障时维测服务进程停止或设备重启则无此字段，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%A3%80%E6%B5%8B%E5%8E%9F%E7%90%86",
              children: "检测原理"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page switch history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面切换轨迹"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果维测服务进程出现故障或未缓存切换轨迹，则不包含此字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障原因"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stacktrace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障堆栈"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HybridStack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPP和JS之间跨语言的故障堆栈"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARM 64位系统下，若Stacktrace为JS栈时，则包含此字段，至多显示256层。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SubmitterStacktrace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交者线程栈"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["异步线程栈跟踪维测功能默认仅在ARM 64位系统中开启。  对于", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "API version 22"
              })
            }), "之前版本，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "三方和系统应用"
              })
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/libuv/libuv",
              children: "libuv"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt",
              children: "ffrt"
            }), "提交异步任务仅debug版本默认开启。  对于", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "API version 22"
              })
            }), "及之后版本，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "三方应用"
              })
            }), "通过libuv提交异步任务debug和release版本均默认开启；", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "三方和系统应用"
              })
            }), "通过ffrt提交异步任务仅debug版本默认开启。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiLog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障之前打印的流水日志，最多1000行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncStack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise异步栈"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARM 64位系统下，若开启Promise异步栈开关，则包含此字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是JS Crash崩溃日志规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Device info:XXX <- 设备信息\nBuild info:XXX-XXXX X.X.X.XX(XXXXXXXX) <- 版本信息\nDeviceDebuggable:No <- 设备的系统版本是否可调试\nFingerprint:ed1811f3f5ae13c7262b51aab73ddd01df95b2c64466a204e0d70e6461cf1697 <- 故障特征\nTimestamp:XXXX-XX-XX XX:XX:XX.XXX <- 时间戳\nModule name:com.example.myapplication <- 包名/进程名\nReleaseType:release <- 应用的版本类型\nCpuAbi:arm64-v8a <- 二进制接口类型\nVersion:1.0.0 <- hap版本\nVersionCode:1000000 <- 版本编码\nIsSystemApp:No <- 应用是否为系统应用\nPid:579 <- 故障进程号\nUid:0 <- 用户ID\nProcess life time:1s  <- 进程存活时间\nProcess Memory(kB): 1897(Rss) <- 进程占用内存\nDevice Memory(kB): Total 1935820, Free 482136, Available 1204216  <- 整机内存信息\nPage switch history: <- 页面切换轨迹\n  14:08:30:327 /ets/pages/Index:JsError\n  14:08:28:986 /ets/pages/Index\n  14:08:07:606 :leaves foreground\n  14:08:06:246 /ets/pages/Index:AppFreeze\n  14:08:01:955 :enters foreground\nReason:TypeError <- 故障原因\nError name:TypeError <- 故障类型\nError message:Cannot read property c of undefined <- 异常信息\nCannot get SourceMap info, dump raw stack: <- 应用安装包为release包安装时不包含sourcemap文件，JS栈通过sourcemap行列号解析会失败\nStacktrace:\n    at onPageShow entry (entry/src/main/ets/pages/Index.ets:7:13)  <-异常代码调用堆栈\n           ^        ^                              ^\n         函数名   模块的包名                   文件行列号位置\nHybridStack: <- CPP和JS之间跨语言的代码调用栈\n#00 pc 00000000004a814c /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#01 pc 00000000004a6460 /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#02 pc 00000000006a94e0 /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#03 pc 0000000000334d38 /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#04 pc 0000000000253da8 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::ObjectFactory::GetJSError(panda::ecmascript::base::ErrorType const&, char const*, panda::ecmascript::StackCheck)+292)(173710293c3751dc676d24264bfac393)\n#05 pc 00000000005c25d4 /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#06 pc 0000000000de3efc /system/lib64/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+44)\n#07 pc 000000000044843c /system/lib64/module/arkcompiler/stub.an(BCStub_HandleCallarg1Imm8V8StwCopy+340)\n#08 at onPageShow entry (entry/src/main/ets/pages/Index.ets:7:13) <- 异常发生时执行的JS代码\n#09 pc 00000000001e620c /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#10 pc 00000000009ad560 /system/lib64/platformsdk/libark_jsruntime.so(panda::FunctionRef::Call(panda::ecmascript::EcmaVM const*, panda::Local<panda::JSValueRef>, panda::Local<panda::JSValueRef> const*, int)+456)(173710293c3751dc676d24264bfac393)\n#11 pc 0000000000a63f14 /system/lib64/platformsdk/libace_compatible.z.so(e236e26a38ac303814f43a3c8fc9b0a6)\n#12 pc 0000000000d836bc /system/lib64/platformsdk/libace_compatible.z.so(e236e26a38ac303814f43a3c8fc9b0a6)\n#13 pc 000000000111f338 /system/lib64/platformsdk/libace_compatible.z.so(e236e26a38ac303814f43a3c8fc9b0a6)\n...\n\nHiLog:\n ^\n 在生成的崩溃日志文件中追加产生故障之前的流水日志，最多1000行\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异步线程栈跟踪故障场景日志规格",
      children: "异步线程栈跟踪故障场景日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当异步线程发生崩溃后，把提交该异步任务的线程栈也打印出来，帮助定位由于异步任务提交者造成的崩溃问题。崩溃线程的调用栈和其提交线程的调用栈通过SubmitterStacktrace字符串分隔。以下是一份DevEco Studio归档在FaultLog的进程崩溃日志的核心内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(512573)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步线程栈跟踪维测功能默认仅在ARM 64位系统中开启，在JSCrash崩溃打印Native堆栈时适用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API version 22"
        })
      }), "之前版本，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "三方和系统应用"
        })
      }), "通过libuv和ffrt提交异步任务仅debug版本默认开启。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API version 22"
        })
      }), "及之后版本，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "三方应用"
        })
      }), "通过libuv提交异步任务debug和release版本均默认开启，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "三方和系统应用"
        })
      }), "通过ffrt提交异步任务仅debug版本默认开启。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志中Stacktrace字段规格如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stacktrace:\n#00 pc 00000000004d9d4c /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::Backtrace(std::__h::basic_ostringstream<char, std::__h::char_traits<char>, std::__h::allocator<char>>&, bool)+92)(723d1618fe2567539bed3038ccfe92d8)\n#01 pc 000000000038ddcc /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::JsStackInfo::BuildJsStackTrace(panda::ecmascript::JSThread*, bool, panda::ecmascript::JSHandle<panda::ecmascript::JSObject> const&, bool, unsigned int)+2952)(723d1618fe2567539bed3038ccfe92d8)\n#02 pc 000000000038c70c /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::base::ErrorHelper::ErrorCommonConstructor(panda::ecmascript::EcmaRuntimeCallInfo*, panda::ecmascript::base::ErrorType const&)+1704)(723d1618fe2567539bed3038ccfe92d8)\n#03 pc 000000000038c03c /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::builtins::BuiltinsError::ErrorConstructor(panda::ecmascript::EcmaRuntimeCallInfo*)+40)(723d1618fe2567539bed3038ccfe92d8)\n#04 pc 00000000001b5d90 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::ObjectFactory::NewJSError(panda::ecmascript::JSHandle<panda::ecmascript::GlobalEnv> const&, panda::ecmascript::base::ErrorType const&, panda::ecmascript::JSHandle<panda::ecmascript::EcmaString> const&, panda::ecmascript::StackCheck)+984)(723d1618fe2567539bed3038ccfe92d8)\n#05 pc 000000000093274c /system/lib64/platformsdk/libark_jsruntime.so(panda::Exception::Error(panda::ecmascript::EcmaVM const*, panda::Local<panda::StringRef>)+244)(723d1618fe2567539bed3038ccfe92d8)\n#06 pc 0000000000066398 /system/lib64/platformsdk/libace_napi.z.so(napi_throw_error+152)(c91850afe3629242ed12712b76be08f1)\n#07 pc 00000000000020fc /data/storage/el1/bundle/libs/arm64/libentry.so(02cecfd8fd280aeaa1af7b9d1227afeac0ec4356)   <- 异常抛出位置\n#08 pc 00000000000890c0 /system/lib64/platformsdk/libruntime.z.so(std::__h::__function::__func<OHOS::AbilityRuntime::OHOSJsEnvironmentImpl::PostTaskToHandler(char const*, void (*)(void*, int), void*, int, int)::$_0, std::__h::allocator<OHOS::AbilityRuntime::OHOSJsEnvironmentImpl::PostTaskToHandler(char const*, void (*)(void*, int), void*, int, int)::$_0>, void ()>::operator()() (.3ec3b6b3a88f13b2aa6c613a7afa022b)+128)(50df26f49d9c067da9cf79b804f136ec)\n========SubmitterStacktrace========    <- 当异步线程发生崩溃后，把提交该异步任务的线程的栈也打印出来\n#00 pc 0000000000012cd0 /system/lib64/platformsdk/libuv.so(uv_queue_work+456)(e077582fac1bf7463ca5539c0a2b678a)\n#01 pc 0000000000001fd0 /data/storage/el1/bundle/libs/arm64/libentry.so(02cecfd8fd280aeaa1af7b9d1227afeac0ec4356)\n#02 pc 000000000004d69c /system/lib64/platformsdk/libace_napi.z.so(panda::JSValueRef ArkNativeFunctionCallBack<true>(panda::JsiRuntimeCallInfo*)+220)(c91850afe3629242ed12712b76be08f1)\n#03 pc 0000000000d08e90 /system/lib64/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+44)\n#04 pc 000000000036ae70 /system/lib64/module/arkcompiler/stub.an(BCStub_HandleCallthis2Imm8V8V8V8StwCopy+436)\n#05 at anonymous (entry|entry|1.0.0|src/main/ets/pages/Index.ts:57:79)\n#06 pc 000000000029e144 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::InterpreterAssembly::Execute(panda::ecmascript::EcmaRuntimeCallInfo*)+540)(723d1618fe2567539bed3038ccfe92d8)\n#07 pc 0000000000327eac /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::JSFunction::Call(panda::ecmascript::EcmaRuntimeCallInfo*) (.419.extracted)+452)(723d1618fe2567539bed3038ccfe92d8)\n#08 pc 0000000000940c18 /system/lib64/platformsdk/libark_jsruntime.so(panda::FunctionRef::Call(panda::ecmascript::EcmaVM const*, panda::Local<panda::JSValueRef>, panda::Local<panda::JSValueRef> const*, int)+1988)(723d1618fe2567539bed3038ccfe92d8)\n#09 pc 00000000009ce8d8 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::Framework::JsiFunction::Call(OHOS::Ace::Framework::JsiRef<OHOS::Ace::Framework::JsiValue>, int, OHOS::Ace::Framework::JsiRef<OHOS::Ace::Framework::JsiValue>*, bool) const+700)(cdb4712f9d1d7fda83faae9d393a244e)\n#10 pc 0000000000972a38 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::Framework::JsFunction::ExecuteJS(int, OHOS::Ace::Framework::JsiRef<OHOS::Ace::Framework::JsiValue>*, bool)+384)(cdb4712f9d1d7fda83faae9d393a244e)\n#11 pc 0000000000e1f590 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::Framework::JsClickFunction::Execute(OHOS::Ace::GestureEvent&)+3396)(cdb4712f9d1d7fda83faae9d393a244e)\n#12 pc 0000000001079384 /system/lib64/platformsdk/libace_compatible.z.so(cdb4712f9d1d7fda83faae9d393a244e)\n#13 pc 00000000026e1b28 /system/lib64/platformsdk/libace_compatible.z.so(cdb4712f9d1d7fda83faae9d393a244e)\n#14 pc 0000000000f435a8 /system/lib64/platformsdk/libace_compatible.z.so(OHOS::Ace::NG::TextPattern::ActTextOnClick(OHOS::Ace::GestureEvent&)+164)(cdb4712f9d1d7fda83faae9d393a244e)\n#15 pc 0000000002751134 /system/lib64/platformsdk/libace_compatible.z.so(cdb4712f9d1d7fda83faae9d393a244e)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "page-switch-history",
      children: "Page switch history"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 20起，使用Page switch history段记录页面切换的历史，故障日志最多记录最新的10条历史轨迹。单条记录的格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  14:08:30:327 /ets/pages/Index:JsError\n       ^             ^            ^\n    切换时间      页面URL       页面名\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(977159)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅在通过Navigation跳转到子页面时才会有页面名，页面名在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-cross-package#%E7%B3%BB%E7%BB%9F%E8%B7%AF%E7%94%B1%E8%A1%A8",
        children: "系统路由表"
      }), "中定义。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用发生前后台切换时，对应的页面URL为空，但是会将enters foreground、leaves foreground作为特殊的页面名进行填充。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enters foreground：应用进入前台运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "leaves foreground：应用在后台运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reason",
      children: "Reason"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS Crash异常根据不同的异常场景，在Reason字段进行了分类，分为Error、TypeError、SyntaxError、RangeError等错误类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Error（自定义）类：Error是最基本的错误类型，其他的错误类型都继承自该类型。Error对象有两个重要属性：Error message（异常信息）和Error name（错误类型）。程序运行过程中抛出的异常一般都有具体的类型，Error类型一般都是开发人员自己抛出的异常。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TypeError（类型错误）类：这是运行时最常见的异常，表示变量或参数不是预期类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SyntaxError（语法错误）类：语法错误也称为解析错误，表示不符合编程语言的语法规范。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RangeError（边界错误）类：表示超出有效范围时发生的异常，具体包括以下几种情况："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "数组长度为负数或超过最大允许长度。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "数字类型的方法参数超出预定义的有效范围。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "函数堆栈调用深度超过最大限制。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ReferenceError （引用错误）类：引用一个不存在的变量时发生的错误。创建变量时，变量名称都会被写入变量存储中心。变量存储中心类似于键值存储，引用变量时，会先在存储中心查找对应的键并返回值。如果未找到对应变量，就会抛出ReferenceError。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "URI Error（ URI错误）类：通常发生在处理 URL、URN 或其他资源标识符时，格式不正确或操作非法。主要包括encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这几个函数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OOMError（堆内存不够）类：表示应用程序已经耗尽了可用的堆内存，当无法为新对象分配更多堆内存时，就会抛出此错误。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TerminationError（终止错误）类：通常是因为进程被强制终止了。例如，如果Taskpool线程中存在长时间执行或者死循环的任务，将会导致进程被强制终止并抛出此错误。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AggregateError（多个错误）类：用于表示多个错误的集合。它通常在需要处理或报告多个错误（而不是单个错误）的场景中使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EvalError（eval函数错误）类：用于表示与 eval() 函数执行相关的异常。然而，在实际开发中，这个错误类型已经很少被使用，更多情况下引擎会直接抛出 SyntaxError 或 TypeError。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS Crash通常是应用问题，开发者可通过崩溃文件中的Error message和StackTrace来定位问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异常代码调用栈格式",
      children: "异常代码调用栈格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异常代码调用栈内容在Release和Debug两种应用构建模式下存在差异：Debug构建模式会保留完整调试信息，Release构建模式会通过代码优化和混淆技术剥离调试信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Release模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Release模式构建的应用中，异常堆栈信息遵循以下标准化格式："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "at <执行方法名> (<本模块名|依赖的模块名|版本号|编译产物路径>:<行号>:<列号>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "at onPageShow (entry|har1|1.0.0|src/main/ets/pages/Index.ts:7:13)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式解析："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "at：堆栈调用链的固定起始标识符。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行方法名：onPageShow表示触发该异常的调用方法名称。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译产物结构如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["编译产物路径：详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle#section1145914292713",
              children: "异常堆栈解析原理 sourcemap结构：key字段介绍"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "文件类型：文件扩展名为.ts文件后缀（.js文件无需 SourceMap 映射可直接定位异常）。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "行列号：发生异常的具体行数和这一行的列数，以“:”为分隔符分隔。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Debug模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 Source Map 转译 Release 模式构建应用的异常堆栈或使用Debug模式构建的应用中，异常堆栈信息遵循以下标准化格式："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "at <执行方法名> <源码依赖的模块名> (<源码路径>:<行号>:<列号>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "at onPageShow har1 (har1/src/main/ets/pages/Index.ets:7:13)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式解析："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "at：堆栈调用链的固定起始标识符。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行方法名：onPageShow表示触发该异常的调用方法名称。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "源码依赖的模块名：har1表示源码路径所属模块名。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "源码路径结构如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "源码路径：基于工程目录的源码文件路径。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "文件类型：文件扩展名为.ets。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "行列号：发生异常的具体行数和这一行的列数，以“:”为分隔符分隔。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hybridstack格式",
      children: "HybridStack格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 22起，在ARM 64位系统下，HybridStack中支持打印CPP和JS之间跨语言的代码调用栈。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CPP代码调用栈详细说明", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E4%B8%80%E8%88%AC%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
        children: "CPP异常代码调用栈格式规范"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JS代码调用栈详细说明", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%82%E5%B8%B8%E4%BB%A3%E7%A0%81%E8%B0%83%E7%94%A8%E6%A0%88%E6%A0%BC%E5%BC%8F",
        children: "JS异常代码调用栈格式规范"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "promise异步栈",
      children: "Promise异步栈"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise异步栈功能默认关闭。从API version 23起，在ARM 64位系统下，可通过如下方式开启该功能，开启后整机生效："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell param set persist.ark.properties 0x80105c\nhdc shell reboot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭Promise异步栈功能："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell param set persist.ark.properties 0x105c\nhdc shell reboot\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Promise异步任务中抛出的异常默认不会导致JS Crash，但可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager#errormanageronunhandledrejection12",
        children: "on('unhandledRejection')"
      }), "捕获Rejected Promise后，主动将异常抛出，从而触发JS Crash。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启用Promise异步栈功能的情况下，当Promise任务中抛出异常并导致JS Crash时，JS Crash日志中会展示Promise异步任务创建时的栈信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS Crash日志中的Promise异步栈格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "...\nStacktrace:\n    at onPageShow entry (entry/src/main/ets/pages/Index.ets:7:13)\nHybridStack:\n...\nAsyncStack: <- 功能开启后，展示Promise异步任务创建时的栈信息\n    submitter#00: <- 每次异步任务创建都对应一个submitter，每个submitter中栈的最大回溯层数为48\n    #00 pc 0000000000266a0c /system/lib64/platformsdk/libark_jsruntime.so(e0c4624849e028140f5bff13122863b7)\n    #01 pc 000000000020ba3c /system/lib64/platformsdk/libark_jsruntime.so(e0c4624849e028140f5bff13122863b7)\n    #02 pc 0000000000dfd330 /system/lib64/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+44)\n    #03 pc 00000000004533d8 /system/lib64/module/arkcompiler/stub.an(BCStub_HandleCallthis1Imm8V8V8StwCopy+388)\n    #04 at bar entry (entry/src/main/ets/pages/Index.ets:36:29)\n    #05 at foo entry (entry/src/main/ets/pages/Index.ets:33:3)\n    #06 pc 000000000083bf64 /system/lib64/platformsdk/libark_jsruntime.so(e0c4624849e028140f5bff13122863b7)\n    #07 pc 00000000007f42f8 /system/lib64/platformsdk/libark_jsruntime.so(e0c4624849e028140f5bff13122863b7)\n    #08 pc 00000000007e8e88 /system/lib64/platformsdk/libark_jsruntime.so(e0c4624849e028140f5bff13122863b7)\n    #09 pc 0000000000dfcebc /system/lib64/module/arkcompiler/stub.an(RTStub_AsmInterpreterEntry+484)\n    #10 pc 0000000000dfcd18 /system/lib64/module/arkcompiler/stub.an(RTStub_AsmInterpreterEntry+64)\n    ...\n    submitter#01: <- 多个submitter表示存在异步嵌套的场景，submitter的最大支持数量为8\n    #00 pc 0000000000266a0c /system/lib64/platformsdk/libark_jsruntime.so(e0c4624849e028140f5bff13122863b7)\n    #01 pc 0000000000ad9e4c /system/lib64/platformsdk/libark_jsruntime.so(e0c4624849e028140f5bff13122863b7)\n    #02 pc 0000000000dfaa8c /system/lib64/module/arkcompiler/stub.an(RTStub_CallRuntime+44)\n    #03 pc 0000000000518bcc /system/lib64/module/arkcompiler/stub.an(BCStub_HandleAsyncfunctionawaituncaughtV8StwCopy+68)\n    #04 at foo entry (entry/src/main/ets/pages/Index.ets:32:3)\n    #05 at anonymous entry (entry/src/main/ets/pages/Index.ets:23:11)\n    #06 pc 0000000000801f5c /system/lib64/platformsdk/libark_jsruntime.so(e0c4624849e028140f5bff13122863b7)\n    #07 pc 0000000000803470 /system/lib64/platformsdk/libark_jsruntime.so(panda::FunctionRef::Call(panda::ecmascript::EcmaVM const*, panda::Local<panda::JSValueRef>, panda::Local<panda::JSValueRef> const*, int)+548)(e0c4624849e028140f5bff13122863b7)\n    #08 pc 0000000000ad79e8 /system/lib64/platformsdk/libace_compatible.z.so(aab90c413ff8b440b9a25a47964950ee)\n    #09 pc 0000000000e98440 /system/lib64/platformsdk/libace_compatible.z.so(aab90c413ff8b440b9a25a47964950ee)\n    #10 pc 00000000013208a0 /system/lib64/platformsdk/libace_compatible.z.so(aab90c413ff8b440b9a25a47964950ee)\n    ...\n\nHiLog:\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "jscrash聚类",
      children: "JsCrash聚类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Js Crash聚类信息以“Stacktrace:”字段开始，包含ARM 64系统的“HybridStack:”的调用栈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "...\nStacktrace:\n    at onPageShow entry (entry/src/main/ets/pages/Index.ets:7:13)\nHybridStack:\n#00 pc 00000000004a814c /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#01 pc 00000000004a6460 /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#02 pc 00000000006a94e0 /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#03 pc 0000000000334d38 /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#04 pc 0000000000253da8 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::ObjectFactory::GetJSError(panda::ecmascript::base::ErrorType const&, char const*, panda::ecmascript::StackCheck)+292)(173710293c3751dc676d24264bfac393)\n#05 pc 00000000005c25d4 /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#06 pc 0000000000de3efc /system/lib64/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+44)\n#07 pc 000000000044843c /system/lib64/module/arkcompiler/stub.an(BCStub_HandleCallarg1Imm8V8StwCopy+340)\n#08 at onPageShow entry (entry/src/main/ets/pages/Index.ets:7:13)\n#09 pc 00000000001e620c /system/lib64/platformsdk/libark_jsruntime.so(173710293c3751dc676d24264bfac393)\n#10 pc 00000000009ad560 /system/lib64/platformsdk/libark_jsruntime.so(panda::FunctionRef::Call(panda::ecmascript::EcmaVM const*, panda::Local<panda::JSValueRef>, panda::Local<panda::JSValueRef> const*, int)+456)(173710293c3751dc676d24264bfac393)\n#11 pc 0000000000a63f14 /system/lib64/platformsdk/libace_compatible.z.so(e236e26a38ac303814f43a3c8fc9b0a6)\n#12 pc 0000000000d836bc /system/lib64/platformsdk/libace_compatible.z.so(e236e26a38ac303814f43a3c8fc9b0a6)\n#13 pc 000000000111f338 /system/lib64/platformsdk/libace_compatible.z.so(e236e26a38ac303814f43a3c8fc9b0a6)\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["聚类方法同Cpp Crash一致，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#cppcrash%E8%81%9A%E7%B1%BB",
        children: "CppCrash聚类"
      }), "。"]
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
512573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
977159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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