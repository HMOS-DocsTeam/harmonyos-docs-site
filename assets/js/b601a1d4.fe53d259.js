"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["684341"], {
652982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_hidumper_tool_hidumper_hidumper_md_b60_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-hidumper-tool-hidumper-hidumper-md-b60.json
var site_docs_system_debug_optimize_debugging_commands_hidumper_tool_hidumper_hidumper_md_b60_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/hidumper-tool/hidumper/hidumper","title":"hidumper","description":"HiDumper是用于统一系统信息导出的命令行工具，支持分析CPU、内存、存储等系统资源使用情况，查询系统服务运行情况，定位资源使用异常、通信等相关问题。","source":"@site/docs/system-debug-optimize/debugging-commands/hidumper-tool/hidumper/hidumper.md","sourceDirName":"system-debug-optimize/debugging-commands/hidumper-tool/hidumper","slug":"/system-debug-optimize/debugging-commands/hidumper-tool/hidumper/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hidumper-tool/hidumper/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"hidumper","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidumper","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"hilogtool","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hilog-tool/"},"next":{"title":"PrivacyManagerService","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hidumper-tool/hidumper-privacymanagerservice/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/hidumper-tool/hidumper/hidumper.md


const frontMatter = {
	title: 'hidumper',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidumper',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'hidumper';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "命令行说明",
  "id": "命令行说明",
  "level": 2
}, {
  "value": "查询内存信息",
  "id": "查询内存信息",
  "level": 2
}, {
  "value": "查询整机内存",
  "id": "查询整机内存",
  "level": 3
}, {
  "value": "查询进程内存",
  "id": "查询进程内存",
  "level": 3
}, {
  "value": "查询虚拟机堆内存",
  "id": "查询虚拟机堆内存",
  "level": 3
}, {
  "value": "查询CPU使用情况",
  "id": "查询cpu使用情况",
  "level": 2
}, {
  "value": "查询整机CPU使用率",
  "id": "查询整机cpu使用率",
  "level": 3
}, {
  "value": "查询进程CPU使用率",
  "id": "查询进程cpu使用率",
  "level": 3
}, {
  "value": "查询CPU频率",
  "id": "查询cpu频率",
  "level": 3
}, {
  "value": "查询系统服务",
  "id": "查询系统服务",
  "level": 2
}, {
  "value": "查询系统服务列表",
  "id": "查询系统服务列表",
  "level": 3
}, {
  "value": "获取系统服务详细信息",
  "id": "获取系统服务详细信息",
  "level": 3
}, {
  "value": "获取指定系统服务提供的能力",
  "id": "获取指定系统服务提供的能力",
  "level": 3
}, {
  "value": "查询进程信息",
  "id": "查询进程信息",
  "level": 2
}, {
  "value": "查询网络信息",
  "id": "查询网络信息",
  "level": 2
}, {
  "value": "查询存储信息",
  "id": "查询存储信息",
  "level": 2
}, {
  "value": "查询系统信息",
  "id": "查询系统信息",
  "level": 2
}, {
  "value": "获取系统故障日志",
  "id": "获取系统故障日志",
  "level": 2
}, {
  "value": "获取异常退出记录列表",
  "id": "获取异常退出记录列表",
  "level": 2
}, {
  "value": "reason字段说明",
  "id": "reason字段说明",
  "level": 3
}, {
  "value": "获取异常退出故障日志",
  "id": "获取异常退出故障日志",
  "level": 2
}, {
  "value": "获取进程间通信信息",
  "id": "获取进程间通信信息",
  "level": 2
}, {
  "value": "导出信息压缩存储",
  "id": "导出信息压缩存储",
  "level": 2
}, {
  "value": "常用ArkUI基础信息显示能力",
  "id": "常用arkui基础信息显示能力",
  "level": 2
}, {
  "value": "获取应用窗口信息",
  "id": "获取应用窗口信息",
  "level": 3
}, {
  "value": "获取期望应用组件树",
  "id": "获取期望应用组件树",
  "level": 3
}, {
  "value": "获取应用中指定Node的组件信息",
  "id": "获取应用中指定node的组件信息",
  "level": 3
}, {
  "value": "获取期望应用的Inspector树",
  "id": "获取期望应用的inspector树",
  "level": 3
}, {
  "value": "获取期望应用路由栈信息",
  "id": "获取期望应用路由栈信息",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "hidumper 查询到的内存使用情况与Hidebug接口获取到的内存使用情况之间的关系",
  "id": "hidumper-查询到的内存使用情况与hidebug接口获取到的内存使用情况之间的关系",
  "level": 3
}, {
  "value": "hidumper获取进程虚拟机内存和泄露对象信息为空",
  "id": "hidumper获取进程虚拟机内存和泄露对象信息为空",
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
        id: "hidumper",
        children: "hidumper"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDumper是用于统一系统信息导出的命令行工具，支持分析CPU、内存、存储等系统资源使用情况，查询系统服务运行情况，定位资源使用异常、通信等相关问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对HiDumper所支撑的使用场景，本章节将介绍其查询内存信息、查询CPU使用情况、查询系统能力、查询进程信息、查询存储信息、查询系统信息等基础功能，以及系统故障日志获取，进程间通信记录导出，导出信息支持压缩转储等能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiDumper命令行工具使用常见问题汇总在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98",
        children: "常见问题"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据hdc命令行工具指导，完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
          children: "环境准备"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保设备已正常连接，并执行hdc shell。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行说明",
      children: "命令行说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF",
              children: "-lc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出系统信息簇。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1%E5%88%97%E8%A1%A8",
              children: "-ls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出正在运行的系统能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF",
              children: "-c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统全量信息簇详细信息，包含设备信息、内核信息和环境变量等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF",
              children: "-c [base system]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定信息簇详细信息，可选\"base\"或者\"system\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF",
              children: "-s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有系统能力详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF",
              children: "-s [SA0 SA1]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个或多个系统能力的详细信息。多个系统能力名称之间使用空格分隔。可通过 -ls 查询系统能力名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9A%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E7%9A%84%E8%83%BD%E5%8A%9B",
              children: "-s [SA] -a [\"option\"]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行单个系统能力的特定选项。  SA：系统能力名称。  option：该系统能力支持的选项。可通过 -s [SA] -a [\"-h\"] 获取单个系统能力支持的所有选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E6%95%85%E9%9A%9C%E6%97%A5%E5%BF%97",
              children: "-e"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取记录的故障日志。输出日志的规格可参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "CppCrash"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "JSCrash"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "AppFreeze"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E5%BC%82%E5%B8%B8%E9%80%80%E5%87%BA%E8%AE%B0%E5%BD%95%E5%88%97%E8%A1%A8",
              children: "-e --list [process_name] [-n num] [--since timestamp] [--until timestamp]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取异常退出记录列表。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 22开始，支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E5%BC%82%E5%B8%B8%E9%80%80%E5%87%BA%E6%95%85%E9%9A%9C%E6%97%A5%E5%BF%97",
              children: "-e --print [process_name] [-n num] [--since timestamp] [--until timestamp]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取异常退出故障日志。输出日志的规格可参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "CppCrash"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "JSCrash"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "AppFreeze"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 22开始，支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E5%BC%82%E5%B8%B8%E9%80%80%E5%87%BA%E6%95%85%E9%9A%9C%E6%97%A5%E5%BF%97",
              children: "-e --print record_id"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取指定异常退出记录id的故障日志。输出日志的规格可参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "CppCrash"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "JSCrash"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "AppFreeze"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 22开始，支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E7%BD%91%E7%BB%9C%E4%BF%A1%E6%81%AF",
              children: "--net [pid]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取网络信息，包含网络流量、网络接口统计、IP信息等。如果指定了进程的pid，则只输出该进程的网络流量使用信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E5%AD%98%E5%82%A8%E4%BF%A1%E6%81%AF",
              children: "--storage [pid]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取存储信息，包含磁盘统计、磁盘使用量、文件句柄等信息。如果指定了进程的pid，则只显示该进程的io信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E8%BF%9B%E7%A8%8B%E4%BF%A1%E6%81%AF",
              children: "-p [pid]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程信息，包括进程和线程的列表和信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E8%BF%9B%E7%A8%8Bcpu%E4%BD%BF%E7%94%A8%E7%8E%87",
              children: "--cpuusage [pid]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取CPU使用率，取值范围(0, CPU核数]，按进程和类别分类；如果指定pid，则获取指定pid的CPU使用率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2cpu%E9%A2%91%E7%8E%87",
              children: "--cpufreq"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取CPU每个核的真实频率，单位：kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E6%95%B4%E6%9C%BA%E5%86%85%E5%AD%98",
              children: "--mem [--prune]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取总内存使用情况。如果指定--prune，只导出精简的内存使用情况。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持--prune参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E8%BF%9B%E7%A8%8B%E5%86%85%E5%AD%98",
              children: "--mem pid [--show-ashmem] [--show-dmabuf]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取指定pid的进程内存使用情况。  指定--show-ashmem，则补充打印该进程的ashmem使用详细信息。  指定--show-dmabuf，则补充打印DMA内存使用详情信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  从API version 20开始，支持--show-ashmem、应用进程的--show-dmabuf参数。  从API version 23开始，支持系统服务进程的--show-dmabuf参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AF%BC%E5%87%BA%E4%BF%A1%E6%81%AF%E5%8E%8B%E7%BC%A9%E5%AD%98%E5%82%A8",
              children: "--zip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存命令输出到 /data/log/hidumper 下的压缩文件，压缩格式为 ZIP。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1%E4%BF%A1%E6%81%AF",
              children: "--ipc [pid]/-a --start-stat/stat/--stop-stat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计一段时间进程IPC信息。如果使用-a，则统计所有进程IPC数据。使用--start-stat开始统计，使用--stat获取统计数据，使用--stop-stat结束统计。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E8%BF%9B%E7%A8%8B%E5%86%85%E5%AD%98",
              children: "--mem-smaps pid [-v]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取pid内存统计信息，数据来源于/proc/pid/smaps，使用-v指定更多详细信息。（仅支持导出", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology#debug%E7%89%88%E6%9C%AC%E5%BA%94%E7%94%A8",
              children: "debug版本应用"
            }), "）  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%A0%86%E5%86%85%E5%AD%98",
              children: "--mem-jsheap pid [-T tid] [--gc] [--leakobj] [--raw]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["必选参数pid。触发ArkTS应用JS线程的gc和堆内存快照导出。指定线程tid时，仅触发该线程的gc和堆内存快照导出；指定--gc时，仅触发gc，不导出快照；指定--leakobj时，应用开启泄露检测可获取泄露对象列表。  文件命名格式为：hidumper-jsheap-进程号-JS线程号-时间戳，文件内容为JSON结构的JS堆快照。  指定--raw时，堆快照以rawheap格式导出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 19开始，支持--raw参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询内存信息",
      children: "查询内存信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiDumper内存信息查询模块主要用于查看系统整机内存使用情况和单个进程内存使用情况。开发者需要了解相关的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-memory-basic-knowledge",
        children: "内存基础知识"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询整机内存",
      children: "查询整机内存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --mem命令获取整机内存使用情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --mem\n-------------------------------[memory]-------------------------------\nTotal Memory Usage by PID:\nPID       Total Pss(xxx in SwapPss)   Total Vss   Total Rss   Total Uss          GL       Graph         Dma     PurgSum     PurgPin    Name\n1          4309(2216 in SwapPss) kB  2158196 kB     4180 kB     1760 kB        0 kB        0 kB        0 kB        0 kB        0 kB    init\n2            45613(0 in SwapPss) kB 17452952 kB    48352 kB    44088 kB        0 kB        0 kB        0 kB        0 kB        0 kB    sysmgr-main\n...\nTotal Memory Usage by Size:\nPID        Total Pss(xxx in SwapPss)    Total Vss    Total Rss    Total Uss           GL        Graph          Dma      PurgSum      PurgPin     Name\n3031         421826(0 in SwapPss) kB   5199308 kB    610812 kB    395712 kB         0 kB     17000 kB     17000 kB         0 kB         0 kB     xxx\n1473         409349(0 in SwapPss) kB   7014040 kB    449460 kB    389528 kB    160336 kB     57092 kB     57092 kB         0 kB         0 kB     xxx\n...\nTotal Pss by OOM adjustment:\nSystem: 1426777 kB\n   xxx(pid=1473):  409349 kB\n   xxx(pid=992):     80734 kB (23720 kB in SwapPss)\n...\nTotal Pss by Category:\nFile-backed Page(1414160 kB):\n      1053457 kB : .so\n       322813 kB : other\n        25616 kB : .hap\n         8064 kB : .ttf\n         3696 kB : .db\n          514 kB : dev\nAnonymous Page(2280332 kB):\n      1348463 kB : native heap\n       518107 kB : ark ts heap\n       361195 kB : other\n        49287 kB : stack\n         3280 kB : dev\n            0 kB : guard\nGPU(160340 kB):\n       160340 kB : GL\nGraph(350708 kB):\n       350708 kB : Graph\nDMA(350708 kB):\n       350708 kB : Dma\n\n      Total RAM:15803612 kB\n       Free RAM:10287099 kB (3999535 cached + 6287564 free)\n       Used RAM:3961668 kB (3163324 total pss + 798344 kernel)\n       Lost RAM:2086013 kB\n\nTotal RAM by Category:\nhidumper - Hardware Usage:1860480 kB\n      CMA Usage:0 kB\n-   Kernel Usage:656937 kB\nProcesses Usage:3694492 kB\n\nTotal Purgeable:\n  Total PurgSum:0 kB\n  Total PurgPin:0 kB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VSS (Virtual Set Size)表示当前进程虚拟内存的大小，包括所有映射到该进程地址空间的内存区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RSS (Resident Set Size)表示当前进程实际驻留在物理内存中的内存大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PSS (Proportional Set Size)是一种更精确的内存使用度量方法，它将共享库所占的内存按比例分配给每个使用该库的进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PurgSum（Purgeable Summary）表示当前进程可回收内存的总量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PurgPin（Purgeable Pinned）表示可回收但暂时无法立即回收的内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GL代表GPU内存，包含应用使用的GPU内存和统一渲染在服务进程内产生的GPU内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph代表图形内存，即DMA内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --mem --prune命令获取整机内存精简的使用情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --mem --prune\n-------------------------------[memory]-------------------------------\nTotal Memory Usage by PID:\nPID        Total Pss(xxx in SwapPss)           GL     AdjLabel     Name\n1           4061(1668 in SwapPss) kB         0 kB        -1000     xxx\n2            101723(0 in SwapPss) kB         0 kB        -1000     xxx\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AdjLabel代表该进程内存的回收优先级，取值范围为[-1000, 1000]，该值越大则表示该进程越不重要，内存会被优先回收。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询进程内存",
      children: "查询进程内存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --mem pid命令获取指定进程的内存使用情况，pid为指定的进程号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --mem 27336\n\n-------------------------------[memory]-------------------------------\n\n                          Pss         Shared         Shared        Private        Private           Swap        SwapPss           Heap           Heap           Heap\n                        Total          Clean          Dirty          Clean          Dirty          Total          Total           Size          Alloc           Free\n                       ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )\n              ------------------------------------------------------------------------------------------------------------------------------------------------------\n            GL              0              0              0              0              0              0              0              0              0              0\n         Graph              0              0              0              0              0              0              0              0              0              0\n   ark ts heap          12676           5516              0          12468              0           3068           3068              0              0              0\n         guard              0              0              0              0              0              0              0              0              0              0\n   native heap          15427          27132              0          14424              0          18776          18776          55796          53564           2809\n          .hap              4              0              0              4              0              0              0              0              0              0\nAnonPage other           1109           4932              0            968              0           4280           4280              0              0              0\n         stack           1404              0              0           1404              0             28             28              0              0              0\n           .db             32              0              0             32              0              0              0              0              0              0\n           .so          12877          58928          18868           5628           2028           1036           1036              0              0              0\n           dev             52              0            284             52              0              0              0              0              0              0\n          .ttf            296           1264              0              0              0              0              0              0              0              0\nFilePage other          21933           1432           4300          21524            148              0              0              0              0              0\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------\n         Total          92998          99204          23452          56504           2176          27188          27188          55796          53564           2809\n\nnative heap:\n  jemalloc meta:          1010            276              0           1000              0            156            156              0              0              0\n  jemalloc heap:         13126          22412              0          12260              0          17876          17876              0              0              0\n       brk heap:          1259           4444              0           1132              0            744            744              0              0              0\n      musl heap:            32              0              0             32              0              0              0              0              0              0\n\nPurgeable:\n        PurgSum:0 kB\n        PurgPin:0 kB\n\nDMA:\n            Dma:0 kB\n\nAshmem:\nTotal Ashmem:144 kB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --mem pid --show-ashmem获取指定pid的内存使用情况，同时打印ashmem使用详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --mem 27336 --show-ashmem\n-------------------------------[memory]-------------------------------\n\n                          Pss         Shared         Shared        Private        Private           Swap        SwapPss           Heap           Heap           Heap\n                        Total          Clean          Dirty          Clean          Dirty          Total          Total           Size          Alloc           Free\n                       ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )\n              ------------------------------------------------------------------------------------------------------------------------------------------------------\n            GL              0              0              0              0              0              0              0              0              0              0\n         Graph              0              0              0              0              0              0              0              0              0              0\n   ark ts heap          12657           5516              0          12468              0           3068           3068              0              0              0\n         guard              0              0              0              0              0              0              0              0              0              0\n   native heap          15191          27132              0          14252              0          18780          18780          55792          53527           2629\n          .hap              4              0              0              4              0              0              0              0              0              0\nAnonPage other           1094           4932              0            964              0           4280           4280              0              0              0\n         stack           1388              0              0           1388              0             28             28              0              0              0\n           .db             32              0              0             32              0              0              0              0              0              0\n           .so          12557          59184          18868           5372           2028           1036           1036              0              0              0\n           dev             52              0            284             52              0              0              0              0              0              0\n          .ttf            296           1264              0              0              0              0              0              0              0              0\nFilePage other          21916           1432           4300          21524            148              0              0              0              0              0\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------\n         Total          92379          99460          23452          56056           2176          27192          27192          55792          53527           2629\n\nnative heap:\n  jemalloc meta:          1008            276              0           1000              0            156            156              0              0              0\n  jemalloc heap:         12892          22412              0          12088              0          17880          17880              0              0              0\n       brk heap:          1259           4444              0           1132              0            744            744              0              0              0\n      musl heap:            32              0              0             32              0              0              0              0              0              0\n\nPurgeable:\n        PurgSum:0 kB\n        PurgPin:0 kB\n\nDMA:\n            Dma:0 kB\n\nAshmem:\nTotal Ashmem:144 kB\nProcess_name    Process_ID      Fd      Cnode_idx       Applicant_Pid   Ashmem_name     Virtual_size    Physical_size   magic    -> 详细ashmem信息\nwei.xxx.xxx  27336   72      328415  27336   dev/ashmem/Paf.Permission.appImg        147456  147456  14105\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hidumper --mem pid --show-dmabuf命令可获取指定PID的内存使用情况，并打印DMA内存详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --mem 27336 --show-dmabuf\n-------------------------------[memory]-------------------------------\n\n                          Pss         Shared         Shared        Private        Private           Swap        SwapPss           Heap           Heap           Heap\n                        Total          Clean          Dirty          Clean          Dirty          Total          Total           Size          Alloc           Free\n                       ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )         ( kB )\n              ------------------------------------------------------------------------------------------------------------------------------------------------------\n            GL              0              0              0              0              0              0              0              0              0              0\n         Graph              0              0              0              0              0              0              0              0              0              0\n   ark ts heap          12657           5516              0          12468              0           3068           3068              0              0              0\n         guard              0              0              0              0              0              0              0              0              0              0\n   native heap          15191          27132              0          14252              0          18780          18780          55792          53527           2629\n          .hap              4              0              0              4              0              0              0              0              0              0\nAnonPage other           1094           4932              0            964              0           4280           4280              0              0              0\n         stack           1388              0              0           1388              0             28             28              0              0              0\n           .db             32              0              0             32              0              0              0              0              0              0\n           .so          12557          59184          18868           5372           2028           1036           1036              0              0              0\n           dev             52              0            284             52              0              0              0              0              0              0\n          .ttf            296           1264              0              0              0              0              0              0              0              0\nFilePage other          21916           1432           4300          21524            148              0              0              0              0              0\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------\n         Total          92379          99460          23452          56056           2176          27192          27192          55792          53527           2629\n\nnative heap:\n  jemalloc meta:          1008            276              0           1000              0            156            156              0              0              0\n  jemalloc heap:         12892          22412              0          12088              0          17880          17880              0              0              0\n       brk heap:          1259           4444              0           1132              0            744            744              0              0              0\n      musl heap:            32              0              0             32              0              0              0              0              0              0\n\nPurgeable:\n        PurgSum:0 kB\n        PurgPin:0 kB\n\nDMA:\n            Dma:0 kB\nProcess               pid         fd        size_bytes        ino       exp_pid       exp_task_comm     buf_name      exp_name      buf_type      leak_type\nm.xxx.xxx             7612        87        40960             2750      1424          allocatxxxx       RSxxxxxx      xxxxx          xx            xxxx\n\nAshmem:\nTotal Ashmem:144 kB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字段说明："
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
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "持有ION内存块的应用进程包名（16个字符截断）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障进程pid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程持有的句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程持有的ION内存buffer大小，单位：B。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ino"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件inode号（索引节点号）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exp_pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从内核申请ION内存的进程pid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exp_task_comm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从内核申请ION内存的进程名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buf_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ION内存的buffer名字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exp_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ION内存的buffer扩展名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buf_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ION内存的buffer类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "leak_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ION内存泄漏维测的buffer类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --mem-smaps pid命令获取指定进程的详细内存使用情况，该命令会累加相同内存段的内存值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --mem-smaps 3456  # 3456 为目标可调试应用进程号\n\n-------------------------------[memory]-------------------------------\n\n                                    Shared      Shared      Private     Private\nSize        Rss         Pss         Clean       Dirty       Clean       Dirty       Swap        SwapPss     Counts      Category                         Name\n16          0           0           0           0           0           0           4           4           3           FilePage other                   [anon]\n8           8           8           0           0           8           0           0           0           1           FilePage other                   /bin/init\n2048        52          0           0           52          0           0           0           0           1           dev                              /dev/__parameters__/param_sec_dac\n80          28          1           0           28          0           0           0           0           1           dev                              /dev/__parameters__/param_selinux\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统计信息说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Counts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相同内存段出现的次数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存所属类别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --mem-smaps pid -v命令获取指定进程的详细内存使用情况，该命令会直接打印进程的所有内存信息，不会对相同内存信息做二次处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --mem-smaps 3456 -v   # 3456 为目标可调试应用进程号\n\n-------------------------------[memory]-------------------------------\n                                    Shared      Shared      Private     Private\nSize        Rss         Pss         Clean       Dirty       Clean       Dirty       Swap        SwapPss     Category                   Name\n4           4           2           0           4           0           0           0           0           FilePage other             [anon]\n4           4           2           0           4           0           0           0           0           FilePage other             /bin/init\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["hidumper --mem-smaps [pid] [-v]命令调试的进程应为“使用调试证书签名的应用”，同", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology#debug%E7%89%88%E6%9C%AC%E5%BA%94%E7%94%A8",
        children: "debug版本应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要确认命令指定的应用是否为可调试应用，可以执行以下命令进行查询：hdc shell \"bm dump -n [应用包名] | grep appProvisionType\"，预期返回信息为\"appProvisionType\": \"debug\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以包名com.example.myapplication为例，可执行如下命令查询："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell \"bm dump -n com.example.myapplication | grep appProvisionType\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如包名对应的应用是可调试应用，预期返回信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"appProvisionType\": \"debug\",\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["构建可调试应用需要使用调试证书进行签名，申请调试证书及签名可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178",
        children: "申请调试证书"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询虚拟机堆内存",
      children: "查询虚拟机堆内存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hidumper --mem-jsheap pid [-T tid] [--gc] [--leakobj] [--raw]命令可以查看ArkTS应用虚拟机堆内存。生成的堆内存文件存放于/data/log/reliability/resource_leak/memory_leak目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(690802)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["hidumper --mem-jsheap pid [-T tid] [--gc] [--leakobj] [--raw]命令调试的进程应为“使用调试证书签名的应用”，同", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology#debug%E7%89%88%E6%9C%AC%E5%BA%94%E7%94%A8",
        children: "debug版本应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认命令指定的应用是否为可调试应用：参考上述hidumper --mem-smaps [pid] [-v]命令中的注意事项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可使用hidumper --mem-jsheap pid命令获取指定进程所有JS线程的虚拟机堆内存，文件命名为：hidumper-jsheap-进程号-JS线程号-时间戳，如果有多个JS线程会生成多个文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用样例："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  $ hidumper --mem-jsheap 64949  -> 64949 为目标应用进程号\n  $ ls | grep jsheap   -> 进入堆内存文件存放目录后执行\n  hidumper-jsheap-64949-64949-1751075546050\n  hidumper-jsheap-64949-64989-1751075546050\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可使用hidumper --mem-jsheap pid -T tid命令获取指定进程指定JS线程的虚拟机堆内存，文件命名为：hidumper-jsheap-进程号-JS线程号-时间戳。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用样例："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  $ hidumper --mem-jsheap 64949 -T 64949  -> 64949 为目标应用进程号\n  $ ls | grep jsheap  -> 进入堆内存文件存放目录后执行\n  hidumper-jsheap-64949-64949-1751075567710\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可使用hidumper --mem-jsheap pid [-T tid] --raw获取指定进程或指定JS线程的虚拟机堆内存，生成的堆内存文件为rawheap格式，文件命名为hidumper-jsheap-进程号-JS线程号-时间戳.rawheap。rawheap的解析转换可参考使用：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator",
            children: "rawheap-translator工具"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用样例："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  $ hidumper --mem-jsheap 64949 --raw  -> 64949 为目标应用进程号\n  $ ls | grep jsheap  -> 进入堆内存文件存放目录后执行\n  hidumper-jsheap-64949-64949-1751075546050.rawheap\n  hidumper-jsheap-64949-64989-1751075546050.rawheap\n  $ hidumper --mem-jsheap 64949 -T 64949 --raw  -> 64949 为目标应用进程号\n  $ ls | grep jsheap\n  hidumper-jsheap-64949-64949-1751075546055.rawheap\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可使用hidumper --mem-jsheap pid --gc命令触发指定应用进程GC。该命令不会生成任何文件，执行成功不会有命令回显。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用样例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hidumper --mem-jsheap 64949 --gc  -> 64949 为目标应用进程号\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可使用hidumper --mem-jsheap pid --leakobj获取指定进程的虚拟机堆内存和泄漏对象信息，文件命名为：hidumper-leaklist-进程号-时间戳。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取指定进程的虚拟机堆内存和泄露对象信息的前提是应用已通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-jsleakwatcher/js-apis-jsleakwatcher",
            children: "@ohos.hiviewdfx.jsLeakWatcher"
          }), "接口开启了泄漏检测功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "具体使用步骤为："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-jsleakwatcher/js-apis-jsleakwatcher#jsleakwatcherenable",
              children: "jsLeakWatcher.enable"
            }), "接口。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-jsleakwatcher/js-apis-jsleakwatcher#jsleakwatcherwatch",
              children: "jsLeakWatcher.watch"
            }), "接口。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "执行hidumper --mem-jsheap [pid] --leakobj命令，导出虚拟机堆内存和泄漏对象信息。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用样例："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  $ hidumper --mem-jsheap 64949 --leakobj\n  $ ls | grep leaklist\n  hidumper-leaklist-64949-1730873210483\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述生成的文件，可以通过hdc", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc#%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93",
        children: "文件传输"
      }), "命令从设备中获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询cpu使用情况",
      children: "查询CPU使用情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hidumper工具查看CPU相关信息，可以了解到当前系统的CPU负载情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询整机cpu使用率",
      children: "查询整机CPU使用率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --cpuusage获取整机CPU使用率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --cpuusage\n\n-------------------------------[cpuusage]-------------------------------\n\nLoad average: 12.1 / 12.2 / 12.1; the cpu load average in 1 min, 5 min and 15 min\nCPU usage from 2024-11-06 11:59:33 to 2024-11-06 11:59:38\nTotal: 6.38%; User Space: 2.57%; Kernel Space: 3.81%; iowait: 0.02%; irq: 0.14%; idle: 93.46%\nDetails of Processes:\n    PID   Total Usage      User Space    Kernel Space    Page Fault Minor    Page Fault Major    Name\n    105      109.01%           0.00%        109.01%             164                   0            tppmgr.elf\n    2          0.89%           0.00%          0.89%               0                   0            sysmgr-main\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询进程cpu使用率",
      children: "查询进程CPU使用率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --cpuusage pid获取指定进程的CPU使用率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --cpuusage 1\n\n-------------------------------[cpuusage]-------------------------------\n\nLoad average: 12.1 / 12.2 / 12.1; the cpu load average in 1 min, 5 min and 15 min\nCPU usage from 2024-11-06 11:59:33 to 2024-11-06 11:59:35\nTotal: 3.80%; User Space: 1.45%; Kernel Space: 2.35%; iowait: 0.00%; irq: 0.14%; idle: 96.06%\nDetails of Processes:\n    PID   Total Usage      User Space    Kernel Space    Page Fault Minor    Page Fault Major    Name\n    1          0.00%           0.00%          0.00%           38368                1394            init\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询cpu频率",
      children: "查询CPU频率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --cpufreq获取CPU频率信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --cpufreq\n\n-------------------------------[cpufreq]-------------------------------\n\n\ncmd is: cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq\n\n1018000\n\ncmd is: cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_max_freq\n\n1530000\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询系统服务",
      children: "查询系统服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询系统服务列表",
      children: "查询系统服务列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可使用hidumper -ls命令获取正在运行的系统服务列表。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -ls\nSystem ability list:\nSystemAbilityManager             RenderService                    AbilityManagerService\nDataObserverMgr                  AccountMgr                       AIEngine\nBundleMgr                        FormMgr                          ApplicationManagerService\nAccessibilityManagerService      UserIdmService                   UserAuthService\nAuthExecutorMgrService           PinAuthService                   FaceAuthService\nFingerprintAuthService           WifiDevice                       WifiHotspot\nWifiP2p                          WifiScan                         1125\n1126                             BluetoothHost                    NetConnManager\nNetPolicyManager                 NetStatsManager                  NetTetheringManager\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取系统服务详细信息",
      children: "获取系统服务详细信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可使用hidumper -s获取所有系统服务的详细信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -s\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------SystemAbilityManager----------------------------------\nThe arguments are illegal and you can enter '-h' for help.\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------RenderService----------------------------------\n------Graphic2D--RenderService ------\nUsage:\nh                             |help text for the tool\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可使用hidumper -s [SA0] [SA1]获取指定的一个或多个系统服务的详细信息。其中系统能力名[SA0] [SA1]可通过上述hidumper -ls命令查询得到。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -s WindowManagerService\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------WindowManagerService----------------------------------\nUsage:\n-h                             |help text for the tool\n-a                             |dump all window information in the system\n-w {window id} [ArkUI Option]  |dump specified window information\n------------------------------------[ArkUI Option]------------------------------------\n...\n$ hidumper -s WindowManagerService RenderService\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------WindowManagerService----------------------------------\nUsage:\n-h                             |help text for the tool\n-a                             |dump all window information in the system\n-w {window id} [ArkUI Option]  |dump specified window information\n------------------------------------[ArkUI Option]------------------------------------\n\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------RenderService----------------------------------\n------Graphic2D--RenderService ------\nUsage:\nh                             |help text for the tool\nscreen                         |dump all screen information in the system\nsurface                        |dump all surface information\ncomposer fps                   |dump the fps info of composer\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取指定系统服务提供的能力",
      children: "获取指定系统服务提供的能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -s [SA] -a [\"option\"]可以获取指定系统服务提供的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以RenderService系统渲染服务为例，获取其使用帮助，打印效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -s RenderService -a \"h\"\n\n-------------------------------[ability]-------------------------------\n\n----------------------------------RenderService----------------------------------\n------ Graphic2D--RenderService ------\nUsage:\ngles                          |inquire gpu info\nh                             |help text for the tool\nallInfo                       |dump all info\nfpsCount                      |dump the refresh rate counts info\nsurfacenode                   |surfacenode [id]\ntrimMem                       |dump trim Mem info\nsurface                       |dump all surface information\nMultiRSTrees                  |dump multi RS Trees info\nfpsClear                      |[surface name]/composer fpsClear, clear the fps info\ndumpMem                       |dump Cache\nallSurfacesMem                |dump surface mem info\nRSTree                        |dump RS Tree info\nrsLogFlag                     |set rs log flag\nnodeNotOnTree                 |dump nodeNotOnTree info\nclient                        |dump client ui node trees\nclearFpsCount                 |clear the refresh rate counts info\nhitchs                        |[windowname] hitchs, dump the hitchs info of window\nvktextureLimit                |dump vk texture limit info\nEventParamList                |dump EventParamList info\ndumpNode                      |dump render node info\ndumpExistPidMem               |dumpExistPidMem [pid], dump exist pid mem info\nfps                           |[windowname] fps, dump the fps info of window\nflushJankStatsRs              |flush rs jank stats hisysevent\nscreen                        |dump all screen information in the system\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统服务提供的具体功能，如获取GPU相关信息，可以使用以下命令，打印结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -s RenderService -a \"gles\"\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------RenderService----------------------------------\n\n-- DumpGpuInfo:\nGL_VENDOR: HUAWEI\nGL_RENDERER: Maleoon 910\nGL_VERSION: OpenGL ES 3.2 B283\nGL_SHADING_LANGUAGE_VERSION: OpenGL ES GLSL ES 3.20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询进程信息",
      children: "查询进程信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -p [pid]命令获取指定进程的相关信息，包括进程的挂载信息，进程的线程信息，线程的运行时间，进程等待通道信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(640484)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hidumper -p [pid]命令调试的进程应为“使用调试证书签名的应用”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认命令指定的应用是否为可调试应用：参考hidumper --mem-smaps [pid] [-v]命令中的介绍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -p 64949\n\n-------------------------------[processes]-------------------------------\n\n\ncmd is: ps -efT -p 64949\n\nUID            PID   TID  PPID TCNT STIME TTY          TIME CMD\n20020169     64949 64949   629   17 11:40:14 ?     00:00:00 com.example.jsleakwatcher\n20020169     64949   733   629   17 11:40:28 ?     00:00:00 com.example.jsleakwatcher\n...\n$ hidumper -p\n\n-------------------------------[processes]-------------------------------\n\n\ncmd is: ps -efT\n\nUID            PID   TID  PPID TCNT STIME TTY          TIME CMD\nroot             1     1     0    1 10:46:59 ?     00:00:08 init --second-stage 2389791\nroot             2     2     0  127 10:46:59 ?     00:00:24 [sysmgr-main]\nroot             2     4     0  127 10:46:59 ?     00:00:00 [call_ebr]\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询网络信息",
      children: "查询网络信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --net命令获取网络流量信息，网络接口统计信息、网口统计信息、IP信息、iptable信息和binder信息。该功能是通过netstat、ifconfig、iptables等系统命令获取网络信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --net\n\n-------------------------------[net traffic]-------------------------------\n\nReceived Bytes:0\nSent Bytes:51885\n\n-------------------------------[net]-------------------------------\n\ncmd is: netstat -nW  -> 通过netstat -nW命令查询网络连接、路由表、接口统计等网络相关信息。\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --net [pid]命令获取指定进程的网络流量信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --net 1\n\n-------------------------------[net traffic]-------------------------------\n\nReceived Bytes:0\nSent Bytes:51885\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询存储信息",
      children: "查询存储信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可使用hidumper --storage命令获取磁盘统计信息、磁盘使用量信息、文件句柄信息、IO流量统计信息和挂载信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --storage\n\n-------------------------------[storage]-------------------------------\n\n\ncmd is: storaged -u -p\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可使用hidumper --storage [pid]命令获取指定进程的IO信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --storage 1\n\n-------------------------------[storage io]-------------------------------\n\n\n/proc/1/io\n\nrchar: 28848175\nwchar: 4364169\nsyscr: 16886\nsyscw: 15866\nread_bytes: 30617600\nwrite_bytes: 10907648\ncancelled_write_bytes: 734003\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IO信息的相关字段解释如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rchar：代表自进程启动以来所读取的总字符数，包括通过缓存或直接读取的字符。单位为Byte。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wchar：代表自进程启动以来所写入的总字符数，包括通过缓存或直接写入的字符。单位为Byte。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "syscr：代表自进程启动以来所执行的 read 系统调用的次数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "syscw：代表自进程启动以来所执行的 write 系统调用的次数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "read_bytes：代表自进程启动以来所读取的字节数，包括从文件系统、网络等设备读取的字节数。单位为Byte。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "write_bytes：代表自进程启动以来所写入的字节数，包括写入到文件系统、网络等设备的字节数。单位为Byte。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cancelled_write_bytes：代表自进程启动以来，因写入操作被取消而未写入的字节数。通常情况下，只有在向磁盘写入数据时发生错误或写入操作被中断时，该字段的值才会非零。单位为Byte。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询系统信息",
      children: "查询系统信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可使用hidumper -lc命令获取系统信息簇列表。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -lc\nSystem cluster list:\nbase                             system\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可使用hidumper -c [系统信息簇名称]命令获取指定信息簇信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如可使用hidumper -c base命令获取设备信息、内核版本、启动参数和启动时间。打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-------------------------------[base]-------------------------------\n\nBuildId: ALN-AL00 5.0.1.XXX(XXX)   -> 设备信息\nReleaseType: Beta1\nOsVersion: phone/HUAWEI/HUAWEI/ALN/HarmonyOS-5.0.1.XXX(Beta1)/ALN-AL10/ALN-AL10/XX/5.0.1.XXX/default\nDeviceType: phone\n...\n\n/proc/version\n\nHongmeng version: HongMeng Kernel X.XX.XX  -> 内核版本\n\n/proc/cmdline   -> 启动参数\n\nohos.boot.post_data_blks=0x0 ohos.boot.ptn_last_blk=0x772AFFF ...\n\ncmd is: uptime -p\n\nup 0 weeks, 0 days, 5 hours, 27 minutes   -> 启动时间\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如可使用hidumper -c system命令获取环境变量、内核模块信息、当前已加载的内核模块、slab信息、zone信息、vmstat、vmalloc信息、cpu频率信息和内存信息。打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -c system\n\n-------------------------------[system]-------------------------------\n\n\ncmd is: printenv   -> 环境变量\n\n_=/system/bin/printenv\nLANG=en_US.UTF-8\nHOME=/root\nPULSE_STATE_PATH=/data/data/.pulse_dir/state\nOLDPWD=/\nPWD=/\nTMP=/data/local/mtp_tmp/\nPULSE_RUNTIME_PATH=/data/data/.pulse_dir/runtime\n...\n\n/proc/modules   -> 内核模块信息\n\nmodem_driver 1490944 24 - Live 0x0000000000000000\nhmtpp_freq_dal_kirin 20480 0 [permanent], Live 0x0000000000000000 (O)\nkconsole 20480 0 [permanent], Live 0x0000000000000000 (O)\nhmtpp_dal 40960 2 hmtpp_freq_dal_kirin, Live 0x0000000000000000 (O)\n...\n\ncmd is: lsmod  -> 当前已加载的内核模块\n\nModule                  Size  Used by\nmodem_driver         1490944  24\nhmtpp_freq_dal_kirin    20480  0 [permanent]\nkconsole               20480  0 [permanent]\nhmtpp_dal              40960  2 hmtpp_freq_dal_kirin\n...\n\n/proc/slabinfo   -> slab 信息\n\nslabinfo - version: 2.0\n#name       <active_objs> <num_objs> <objsize> <objperslab> <pagesperslab> : tunables <limit> <batchcount> <sharedfactor> : slabdata <active_slabs> <num_slabs> <num_pool> <sharedavail> <reclaimable>\nslab-[16]                  48459  54432     16    252      1 : tunables 0 0 0 : slabdata    215    216      4 0 0\nslab-[24]                  78315  83328     24    168      1 : tunables 0 0 0 : slabdata    496    496      4 0 0\nslab-[32]                   5834   9954     32    126      1 : tunables 0 0 0 : slabdata     79     79      4 0 0\n...\n\n/proc/zoneinfo   -> zone 信息\n\nNode 0, zone      DMA\n  per-node stats\n      nr_inactive_anon 419922\n      nr_active_anon 11737\n      nr_inactive_file 381289\n      nr_active_file 456643\n...\n\n/proc/vmstat   -> vmstat 信息\n\nworkingset_refault_anon    63071\nworkingset_refault_file        0\nworkingset_activate_anon     1742\nworkingset_activate_file        0\n...\n\n/proc/vmallocinfo   -> vmalloc 信息\n\n0x0000000000000000-0x0000000000000000    4096 of_iomap+0xe4/0xec pages=1 phys=0xfb21b000 ioremap\n0x0000000000000000-0x0000000000000000    4096 of_iomap+0xe4/0xec pages=1 phys=0xffb85000 ioremap\n0x0000000000000000-0x0000000000000000    4152 gen_pool_add_owner+0x48/0xc0 pages=2 vmalloc\n0x0000000000000000-0x0000000000000000    4096 of_iomap+0xe4/0xec pages=1 phys=0xee262000 ioremap\n...\n\ncmd is: cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq   -> CPU 频率信息\n\n1430000\n\ncmd is: cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_max_freq\n\n1530000\n\ncmd is: cat /sys/devices/system/cpu/cpu1/cpufreq/cpuinfo_cur_freq\n\n1430000\n...\n\n-------------------------------[memory]-------------------------------     -> 内存信息\nTotal Memory Usage by PID:\nPID        Total Pss(xxx in SwapPss)    Total Vss    Total Rss    Total Uss           GL        Graph          Dma      PurgSum      PurgPin     Name\n1           4001(1672 in SwapPss) kB     59028 kB      5744 kB      1972 kB         0 kB         0 kB         0 kB         0 kB         0 kB     init\n2             50451(0 in SwapPss) kB 18014398163279052 kB     52088 kB     49448 kB         0 kB         0 kB         0 kB         0 kB         0 kB     sysmgr-main\n79             2741(0 in SwapPss) kB   2145468 kB      6052 kB      1292 kB         0 kB         0 kB         0 kB         0 kB         0 kB     crypto.elf\n80             8796(0 in SwapPss) kB   2156116 kB     12584 kB      6940 kB         0 kB         0 kB         0 kB         0 kB         0 kB     devmgr.elf\n85            96861(0 in SwapPss) kB  37180468 kB    100932 kB     94808 kB         0 kB         0 kB         0 kB         0 kB         0 kB     devhost.elf\n501            2256(0 in SwapPss) kB   2142484 kB      3892 kB      1620 kB         0 kB         0 kB         0 kB         0 kB         0 kB     hguard.elf\n586         1656(1412 in SwapPss) kB     32852 kB       744 kB       236 kB         0 kB         0 kB         0 kB         0 kB         0 kB     ueventd\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可使用hidumper -c命令获取全量信息簇信息。这包含上述base和system信息簇合集。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取系统故障日志",
      children: "获取系统故障日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -e命令获取系统故障日志，打印对应故障日志的文件名及详细内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e\n\n-------------------------------[faultlog]-------------------------------\n\n\n/data/log/faultlog/faultlogger/syswarning-com.ohos.sceneboard-20020022-20241106104006  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取异常退出记录列表",
      children: "获取异常退出记录列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -e --list命令获取异常退出记录列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e --list\ntime                  foreground               reason              record_id              process_name\n2025-09-26 15:45:06   False                    ThreadBlock6S       05233453489239878113   xxx.xxx.sceneboard\n2025-09-26 15:45:03   False                    LowMemoryKill       23123453489239875544   xxx.xxx.sceneboard\n2025-09-26 14:43:06   False                    LowMemoryKill       45453453489233242345   xxx.xxx.sceneboard\n2025-09-26 12:42:05   True                     LowMemoryKill       45455345348923987811   xxx.xxx.sceneboard\n2025-09-26 10:45:45   False                    LowMemoryKill       78767783489239873255   xxx.xxx.sceneboard\n2025-09-26 10:40:06   False                    LowMemoryKill       78767783489239454666   xxx.xxx.systemui\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -e --list process_name命令可获取指定进程的异常退出记录列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e --list sceneboard\ntime                  foreground               reason              record_id              process_name\n2025-09-26 15:45:06   False                    ThreadBlock6S       05233453489239878113   xxx.xxx.sceneboard\n2025-09-26 15:45:03   False                    LowMemoryKill       23123453489239875544   xxx.xxx.sceneboard\n2025-09-26 14:43:06   False                    LowMemoryKill       45453453489233242345   xxx.xxx.sceneboard\n2025-09-26 12:42:05   True                     LowMemoryKill       45455345348923987811   xxx.xxx.sceneboard\n2025-09-26 10:45:45   False                    LowMemoryKill       78767783489239873255   xxx.xxx.sceneboard\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -e --list -n num命令获取异常退出记录列表，其中num参数用于指定要展示的记录条数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e --list -n 2\ntime                  foreground               reason              record_id              process_name\n2025-09-26 15:45:06   False                    ThreadBlock6S       05233453489239878113   xxx.xxx.sceneboard\n2025-09-26 15:45:03   False                    LowMemoryKill       23123453489239875544   xxx.xxx.sceneboard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -e --list process_name -n num --since timestamp --until timestamp命令获取指定进程指定时间内最新num条异常退出记录列表，其中num参数控制展示条数，timestamp参数控制时间范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(892105)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时间区间控制为前闭后开，且当起始时间和结束时间完全一致时，无法查到数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e --list sceneboard -n 4 --since '2025-09-26 12:42:05' --until '2025-09-26 15:45:07'\ntime                  foreground               reason              record_id              process_name\n2025-09-26 15:45:06   False                    ThreadBlock6S       05233453489239878113   xxx.xxx.sceneboard\n2025-09-26 15:45:03   False                    LowMemoryKill       23123453489239875544   xxx.xxx.sceneboard\n2025-09-26 14:43:06   False                    LowMemoryKill       45453453489233242345   xxx.xxx.sceneboard\n2025-09-26 12:42:05   True                     LowMemoryKill       45455345348923987811   xxx.xxx.sceneboard\n$ hidumper -e --list --since '2025-09-26 12:42:05' --until '2025-09-26 12:42:05'\nno records found.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字段说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常退出发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "foreground"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常退出发生时，进程是否在前台。True表示处于前台；False表示处于后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reason"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["异常退出原因，原因范围详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#reason%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
              children: "reason字段说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "record_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常退出记录ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生异常退出的进程名。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reason字段说明",
      children: "reason字段说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下异常退出原因，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines#%E5%88%86%E6%9E%90%E6%80%9D%E8%B7%AF%E5%92%8C%E5%88%86%E6%9E%90%E6%AD%A5%E9%AA%A4",
        children: "应用终止分析思路和分析步骤"
      }), "进行问题排查处理。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IllegalAudioRendererBySuspend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用未申请合理的后台任务，但是后台有大量音频播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LowMemoryKill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整机低内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OomKiller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整机内存耗尽，无法继续分配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PowerSaveClean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整机切换到省电模式或应急模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResourceLeak(AshmemLeak)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用Ashmem内存占用超标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResourceLeak(GpuLeak)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用GPU内存占用超标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResourceLeak(GpuRsLeak)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用在Render Service进程内的GPU内存占用超标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResourceLeak(IonLeak)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的Ion内存占用超标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RssThresholdKiller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的RSS（Resident Size Set）占用超标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SwapFull"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整机Swap空间耗尽。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ThreadBlock6S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用主进程阻塞，该类型支持根据record_id查看故障日志详情。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AppInputBlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入事件无响应，该类型支持根据record_id查看故障日志详情。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LifecycleTimeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生命周期超时，该类型支持根据record_id查看故障日志详情。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JsError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS崩溃，该类型支持根据record_id查看故障日志详情。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CppCrash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native崩溃，该类型支持根据record_id查看故障日志详情。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取异常退出故障日志",
      children: "获取异常退出故障日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用 hidumper -e --print 命令获取系统故障日志，打印文件名和详细内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(489912)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异常退出记录最长保持30天，同一进程同类型的故障日志最多保留10条。查询的日志已被删除时，会给予提示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e --print\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.sceneboard-20020022-20250926154006  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...   -> 故障日志详细内容，大量的文本内容，此处省略\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.sceneboard-20020022-20250926124106  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...   -> 故障日志详细内容，大量的文本内容，此处省略\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.sceneboard-20020022-20250926114206  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...   -> 故障日志详细内容，大量的文本内容，此处省略\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.systemui-20020022-20250926104506  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...   -> 故障日志详细内容，大量的文本内容，此处省略\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.hidumper-20020022-20250926104206  -> 故障日志文件名\n\nThe faultlog has been deleted by the system due to expiration.  -> 日志过期被删除提示\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -e --print process_name命令打印指定进程的系统故障日志文件名及详细内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e --print systemui\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.systemui-20020022-20250926104506  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -e --print -n num命令打印系统故障日志的文件名及详细内容，并限制打印文件数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e --print -n 2\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.sceneboard-20020022-20250926154006  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...   -> 故障日志详细内容，大量的文本内容，此处省略\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.sceneboard-20020022-20250926124106  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...   -> 故障日志详细内容，大量的文本内容，此处省略\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -e --print process_name -n num --since timestamp --until timestamp命令获取系统故障日志，打印文件名和详细内容，同时限制指定进程的文件数量和时间范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e --print sceneboard -n 2 --since '2025-09-26 12:40:05' --until '2025-09-26 15:45:07'\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.sceneboard-20020022-20250926154006  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...   -> 故障日志详细内容，大量的文本内容，此处省略\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.sceneboard-20020022-20250926124106  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...   -> 故障日志详细内容，大量的文本内容，此处省略\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper -e --print record_id命令获取指定异常退出记录id的系统故障日志，包括文件名及详细内容。若无匹配记录，则提示查询失败原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e --print 05233453489239878113\n\n-------------------------------[faultlog]-------------------------------\n\n/data/log/faultlog/faultlogger/xxxx-com.xxx.sceneboard-20020022-20250926104006  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS  -> 故障日志详细内容\n...   -> 故障日志详细内容，大量的文本内容，此处省略\n\n$ hidumper -e --print 23123453489239875544\nthis type of record does not have faultlog.  -> 查询失败原因\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取进程间通信信息",
      children: "获取进程间通信信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --ipc -a --start-stat/stop-stat/stat命令获取整机采集时间区间内IPC信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --ipc -a --start-stat\nStartIpcStatistics pid:1473 success\nStartIpcStatistics pid:775 success\nStartIpcStatistics pid:1472 success\n...\n$ hidumper --ipc -a --stat\nGlobalStatisticsInfo\nCurrentPid:1473\nTotalCount:3\nTotalTimeCost:3783\n--------------------------------ProcessStatisticsInfo-------------------------------\nCallingPid:625\nCallingPidTotalCount:3\n...\n$ hidumper --ipc -a --stop-stat\nStopIpcStatistics pid:1473 success\nStopIpcStatistics pid:775 success\nStopIpcStatistics pid:1472 success\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用hidumper --ipc [pid] --start-stat/stop-stat/stat命令获取指定进程采集时间区间内的IPC信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印效果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --ipc 1473 --start-stat\nStartIpcStatistics pid:1473 success\n$ hidumper --ipc 1473 --stat\nGlobalStatisticsInfo\nCurrentPid:1473\nTotalCount:2\nTotalTimeCost:2214\n--------------------------------ProcessStatisticsInfo-------------------------------\nCallingPid:625\nCallingPidTotalCount:2\nCallingPidTotalTimeCost:2214\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~InterfaceStatisticsInfo~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nDescriptorCode:OHOS.ILocalAbilityManager_6\nDescriptorCodeCount:2\nDescriptorCodeTimeCost:\nTotal:2214 | Max:1444 | Min:770 | Avg:1107\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n------------------------------------------------------------------------------------\n\n$ hidumper --ipc 1473 --stop-stat\nStopIpcStatistics pid:1473 success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导出信息压缩存储",
      children: "导出信息压缩存储"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hidumper提供有--zip命令支持将任意类型导出信息输出到 /data/log/hidumper 下的压缩文件，可以与其他命令组合使用，压缩格式为ZIP，文件命名为当前时间戳，如下打印效果所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper --zip\n100%,[-],The result is:/data/log/hidumper/20250622-120444-166.zip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，对于 hidumper -e 命令获取系统故障日志，其输出的文本内容较多，可以考虑使用压缩存储，打印效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -e\n\n-------------------------------[faultlog]-------------------------------\n\n\n/data/log/faultlog/faultlogger/syswarning-com.ohos.sceneboard-20020022-20241106104006  -> 故障日志文件名\n\nGenerated by HiviewDFX@HarmonyOS\n...  -> 故障日志详细内容，大量的文本内容，此处省略\n$ hidumper -e --zip\n100%,[-],The result is:/data/log/hidumper/20250623-092235-087.zip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常用arkui基础信息显示能力",
      children: "常用ArkUI基础信息显示能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI基于hidumper增强开发了获取组件树等信息的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取应用窗口信息",
      children: "获取应用窗口信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印全量窗口信息，可以在全量信息中找出对应窗口的WinId，将该WinId作为参数传递给其他命令以获取相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell hidumper -s WindowManagerService -a '-a'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-------------------------------[ability]-------------------------------\n\n\n----------------------------------WindowManagerService---------------------------------\n-------------------------------------ScreenGroup 1-------------------------------------\nWindowName             DisplayId Pid     WinId Type Mode Flag ZOrd Orientation [ x    y    w    h    ]\nScreenLockWindow       0         1274    2     2110 1    0    4    0           [ 0    0    720  1280 ]\nSystemUi_NavigationBar 0         1274    5     2112 102  1    3    0           [ 0    1208 720  72   ]\nSystemUi_StatusBar     0         1274    4     2108 102  1    2    0           [ 0    0    720  72   ]\nsettings0              0         10733   11    1    1    1    1    0           [ 0    72   720  1136 ]\nEntryView              0         1546    8     2001 1    0    0    8           [ 0    0    720  1280 ]\n---------------------------------------------------------------------------------------\nSystemUi_VolumePanel   0         1274    3     2111 1    1    -1   0           [ 0    0    0    0    ]\nSystemUi_DropdownPan   0         1274    6     2109 1    1    -1   0           [ 0    0    0    0    ]\nSystemUi_BannerNotic   0         1274    7     2111 1    1    -1   0           [ 0    0    0    0    ]\nRecentView             0         1546    9     2115 1    1    -1   0           [ 0    0    0    0    ]\nimeWindow              0         1530    10    2105 1    1    -1   0           [ 0    0    0    0    ]\nFocus window: 2\ntotal window num: 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见windowName与内置应用窗口的对应关系："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "windowName"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "内置应用窗口"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EntryView"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "桌面"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RecentView"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最近任务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SystemUi_NavigationBar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三键导航"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SystemUi_StatusBar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态栏"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ScreenLockWindow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "锁屏"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取期望应用组件树",
      children: "获取期望应用组件树"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要查看应用中所有组件的信息，可以通过下列命令实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell \"hidumper -s WindowManagerService -a '-w %windowId% -element'\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "windowId是期望应用的窗口ID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell \"hidumper -s WindowManagerService -a '-w 5 -element'\"\n\n-------------------------------[ability]-------------------------------\n----------------------------------WindowManagerService---------------------------------\nWindowName: SystemUi_NavigationBar\nDisplayId: 0\nWinId: 5\nPid: 1274\nType: 2112\nMode: 102\nFlag: 1\nOrientation: 0\nIsStartingWindow: false\nFirstFrameCallbackCalled: 0\nIsVisible: false\nWindowRect: [ 0, 1208, 720, 72 ]\nTouchHotAreas: [ 0, 1208, 720, 72 ]\n  |-> RootElement childSize:1\n    | ID: 0\n    | elmtId: -1\n    | retakeID: 16\n    | Active: Y\n    |-> StackElement childSize:2\n      | ID: 1\n      | elmtId: -1\n      | retakeID: 14\n      | Active: Y\n      |-> StageElement childSize:1\n        | ID: 2\n        | elmtId: -1\n        | retakeID: 13\n        | Active: Y\n        |-> PageElement childSize:1\n          | ID: 3\n          | elmtId: -1\n          | retakeID: 569\n          | Active: Y\n......\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取应用中指定node的组件信息",
      children: "获取应用中指定Node的组件信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果只需要查看组件中某一节点的组件信息，可以通过下列命令实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell \"hidumper -s WindowManagerService -a '-w %windowId% -element -lastpage %nodeID%'\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "windowId是应用的窗口ID，nodeID是指定Node的ID。可以通过获取期望应用组件树的操作获取nodeID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell \"hidumper -s WindowManagerService -a '-w 5 -element -lastpage 3'\"\n\n-------------------------------[ability]-------------------------------\n----------------------------------WindowManagerService---------------------------------\nWindowName: SystemUi_NavigationBar\nDisplayId: 0\nWinId: 5\nPid: 1274\nType: 2112\nMode: 102\nFlag: 1\nOrientation: 0\nIsStartingWindow: false\nFirstFrameCallbackCalled: 0\nIsVisible: false\nWindowRect: [ 0, 1208, 720, 72 ]\nTouchHotAreas: [ 0, 1208, 720, 72 ]\n    |-> PageElement childSize:1\n        | ID: 3\n        | elmtId: -1\n        | retakeID: 569\n        | Active: Y\n......\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取期望应用的inspector树",
      children: "获取期望应用的Inspector树"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例中的element/render树主要包含多项内部实现，与应用代码中的组件无法一一对应。可以通过打印Inspector树来获取与应用中组件对应的树结构及组件基本信息。Inspector树与DevEco Testing及DevEco中的ArkUI Inspector完全匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用此功能需要先打开ArkUI debug调试开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell param set persist.ace.testmode.enabled 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set: 设置命令；persist.ace.testmode.enabled：ArkUI debug调试开关名称；1：开关设置为true，打开调试功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell \"hidumper -s WindowManagerService -a '-w %windowId% -inspector'\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell \"hidumper -s WindowManagerService -a '-w 5 -inspector'\"\n\n|-> rootstacktag childSize:1\n| ID: 2100001\n| compid:\n| text:\n| top: 72.000000\n| left: 0.000000\n| width: 0.000000\n| height: 0.000000\n| visible: 1\n| clickable: 0\n| checkable: 0\n|-> Column childSize:1\n| ID: 128\n| compid:\n| text:\n| top: 72.000000\n| left: 0.000000\n| width: 720.000000\n| height: 1136.000000\n| visible: 1\n| clickable: 0\n| checkable: 0\n|-> GridContainer childSize:1\n| ID: 129\n| compid:\n| text:\n| top: 72.000000\n| left: 0.000000\n| width: 720.000000\n| height: 1136.000000\n| visible: 1\n| clickable: 0\n| checkable: 0\n|-> Column childSize:2\n| ID: 130\n| compid:\n| text:\n| top: 72.000000\n| left: 0.000000\n| width: 720.000000\n| height: 180.000000\n| visible: 1\n| clickable: 0\n| checkable: 0\n\n......\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取期望应用路由栈信息",
      children: "获取期望应用路由栈信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该命令将输出应用页面路由栈的信息，依据栈的创建顺序及其父子关系排列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(870326)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-architecture",
        children: "Navigation"
      }), "组件实现页面路由的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hidumper -s WindowManagerService -a '-w %windowId% -navigation -c'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hidumper -s WindowManagerService -a '-w 15 -navigation -c'\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------WindowManagerService--------------------------------\nWindowName: myapplication0\nDisplayId: 0\nWinId: 12\nPid: 5908\nType: 1\nMode: 1\nFlag: 0\nOrientation: 0\nIsStartingWindow: false\nFirstFrameCallbackCalled: 1\nVisibilityState: 0\nFocusable: true\nDecoStatus: true\nIsPrivacyMode: false\nisSnapshotSkip: 0\nWindowRect: [ 0, 0, 720, 1280 ]\nTouchHotAreas: [ 0, 0, 720, 1280 ]\nbundleName:com.example.myapplication\nmoduleName:entry\n LastRequestVsyncTime: 2351504075334\n transactionFlags: [ 5908, 0 ]\n last vsyncId: 527\nNavigation number: 4\n|-> Navigation ID: 7, Depth: 7, Mode: \"SPLIT\", NavDestinations:\n  | [0]{ ID: 0, Name: \"pageOne\", Mode: \"STANDARD\", IsOnShow: \"FALSE\" }\n  | [1]{ ID: 1, Name: \"pageTwo\", Mode: \"STANDARD\", IsOnShow: \"TRUE\" }\n|-> Navigation ID: 19, Depth: 7, Mode: \"AUTO (STACK)\", NavDestinations:\n  |-> Navigation ID: 28, Depth: 11, Mode: \"STACK\", NavDestinations:\n  | [0]{ ID: 2, Name: \"pageOne\", Mode: \"STANDARD\", IsOnShow: \"FALSE\" }\n  | [1]{ ID: 3, Name: \"pageTwo\", Mode: \"DIALOG\", IsOnShow: \"FALSE\" }\n    |-> Navigation ID: 123, Depth: 11, Mode: \"AUTO (SPLIT)\", NavDestinations:\n      | [0]{ ID: 4, Name: \"pageFive\", Mode: \"STANDARD\", IsOnShow: \"FALSE\" }\n      | [1]{ ID: 5, Name: \"pageSix\", Mode: \"STANDARD\", IsOnShow: \"FALSE\" }\n  | [2]{ ID: 6, Name: \"pageThree\", Mode: \"STANDARD\", IsOnShow: \"TRUE\" }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(53138)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同一级别的节点，显示在最下方的节点为栈顶节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidumper-查询到的内存使用情况与hidebug接口获取到的内存使用情况之间的关系",
      children: "hidumper 查询到的内存使用情况与Hidebug接口获取到的内存使用情况之间的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["hidumper --mem 系列命令与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug",
        children: "HiDebug"
      }), "接口获取到的内存信息存在差异。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hidumper --mem命令与HiDebug接口内存获取功能详细对比参考下表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令或接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据来源"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否导出图形内存"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidumper --mem"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["命令行获取", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "所有进程"
              })
            }), "的内存使用情况"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统节点：/proc/pid/smaps_rollup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidumper --mem [pid]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["命令行获取", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "单个进程"
              })
            }), "的内存使用情况"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统节点：/proc/pid/smaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidumper --mem-smaps [pid]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["命令行获取", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "单个进程"
              })
            }), "的详细内存使用情况"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统节点：/proc/pid/smaps_rollup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug#hidebuggetappnativememinfo12",
              children: "hidebug.getAppNativeMemInfo"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "应用自身"
              })
            }), "的内存使用情况"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统节点：/proc/pid/smaps_rollup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若想通过Hidebug获取图形内存，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines",
        children: "HiDebug能力概述"
      }), "中的相关说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidumper获取进程虚拟机内存和泄露对象信息为空",
      children: "hidumper获取进程虚拟机内存和泄露对象信息为空"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过hidumper --mem-jsheap [pid] --leakobj命令获取指定进程的虚拟机堆内存和泄露对象信息，该命令没有正常生成文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["hidumper --mem-jsheap [pid] --leakobj 命令依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-jsleakwatcher/js-apis-jsleakwatcher",
        children: "JsLeakWatcher"
      }), "。应用需通过JsLeakWatcher接口开启泄漏检测功能。具体步骤参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%9F%A5%E8%AF%A2%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%A0%86%E5%86%85%E5%AD%98",
        children: "查询虚拟机堆内存"
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
640484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
870326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
690802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
489912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
53138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
892105(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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