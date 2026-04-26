"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["349472"], {
998186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_resource_leak_guidelines_resource_leak_guidelines_md_6d5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-fault-analysis-resource-leak-guidelines-resource-leak-guidelines-md-6d5.json
var site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_resource_leak_guidelines_resource_leak_guidelines_md_6d5_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines/resource-leak-guidelines","title":"Resource Leak（资源泄漏）检测","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines/resource-leak-guidelines.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines","slug":"/system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Resource Leak（资源泄漏）检测","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/resource-leak-guidelines","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AppFreeze（应用冻屏）检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines/"},"next":{"title":"任务超时检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines/resource-leak-guidelines.md


const frontMatter = {
	title: 'Resource Leak（资源泄漏）检测',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/resource-leak-guidelines',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'Resource Leak（资源泄漏）检测';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "日志获取",
  "id": "日志获取",
  "level": 2
}, {
  "value": "句柄泄漏日志规格",
  "id": "句柄泄漏日志规格",
  "level": 2
}, {
  "value": "日志头部信息",
  "id": "日志头部信息",
  "level": 3
}, {
  "value": "句柄类型详细信息",
  "id": "句柄类型详细信息",
  "level": 3
}, {
  "value": "特殊类型句柄维测信息",
  "id": "特殊类型句柄维测信息",
  "level": 3
}, {
  "value": "句柄栈信息",
  "id": "句柄栈信息",
  "level": 3
}, {
  "value": "句柄泄漏聚类规则",
  "id": "句柄泄漏聚类规则",
  "level": 3
}, {
  "value": "线程泄漏日志规格",
  "id": "线程泄漏日志规格",
  "level": 2
}, {
  "value": "日志头部信息",
  "id": "日志头部信息-1",
  "level": 3
}, {
  "value": "线程类泄漏详细信息",
  "id": "线程类泄漏详细信息",
  "level": 3
}, {
  "value": "线程泄漏聚类规则",
  "id": "线程泄漏聚类规则",
  "level": 3
}, {
  "value": "JS内存泄漏日志规格",
  "id": "js内存泄漏日志规格",
  "level": 2
}, {
  "value": "JS泄漏聚类规则",
  "id": "js泄漏聚类规则",
  "level": 3
}, {
  "value": "native内存泄漏日志规格",
  "id": "native内存泄漏日志规格",
  "level": 2
}, {
  "value": "内存采样",
  "id": "内存采样",
  "level": 3
}, {
  "value": "内存维测",
  "id": "内存维测",
  "level": 3
}, {
  "value": "内存栈",
  "id": "内存栈",
  "level": 3
}, {
  "value": "native泄漏聚类规则",
  "id": "native泄漏聚类规则",
  "level": 3
}, {
  "value": "ashmem/ion/gpu/gpu_rs内存泄漏日志规格",
  "id": "ashmemiongpugpu_rs内存泄漏日志规格",
  "level": 2
}, {
  "value": "内存采样",
  "id": "内存采样-1",
  "level": 3
}, {
  "value": "内存维测",
  "id": "内存维测-1",
  "level": 3
}, {
  "value": "内存栈",
  "id": "内存栈-1",
  "level": 3
}, {
  "value": "ashmem/ion/gpu/gpu_rs聚类规则",
  "id": "ashmemiongpugpu_rs聚类规则",
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
        id: "resource-leak资源泄漏检测",
        children: "Resource Leak（资源泄漏）检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["资源泄漏是指句柄、线程或内存等资源，在应用运行过程中没有被正确释放，导致资源被长期占用且无法被其他应用使用，如果某一类资源耗尽，系统可能出现卡死或重启等异常情况。为了应对资源泄漏问题，系统会提供资源泄漏检测、判决、维测日志抓取、日志上报的能力，为开发者提供详细的维测日志以辅助故障定位。本文将主要介绍", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86",
        children: "资源泄漏检测能力"
      }), "以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%97%A5%E5%BF%97%E8%8E%B7%E5%8F%96",
        children: "资源泄漏日志的规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["资源泄漏主要分为三类：内存泄漏、句柄泄漏和线程泄漏。对于每种泄漏，系统会通过周期采样的方式对进程的资源使用情况进行检测，如果资源使用超过阈值，会抓取对应维测并上报泄漏事件。通过Hiappevent资源泄漏事件进行订阅，订阅方法详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events",
        children: "资源泄漏事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源泄漏具体检测方式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "泄漏类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "检测机制"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "句柄泄漏（FD_LEAK）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每隔60s遍历一次进程，获取进程fd句柄总数，超过", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "阈值（5000个）"
              })
            }), " 时抓取详细句柄信息，同步上报泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "线程泄漏（THREAD_LEAK）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每隔60s遍历一次进程，获取进程的总线程数，超过", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "阈值（700个）"
              })
            }), " 时抓取详细线程名信息，同步上报泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "内存泄漏（MEMORY_LEAK） - JS泄漏（JS_LEAK）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["虚拟机内部进行插桩，当", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["堆内存的使用率超过85%", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "或者"
                  })
                }), "触发OOM时"]
              })
            }), "会抓取heapdump，同步上报该故障。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "内存泄漏（MEMORY_LEAK） - native内存泄漏（PSS_MEMORY）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以应用进程平均动态峰值内存作为基线，以200s作为基准，当", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "动态内存峰值超过基线值2倍时，判定泄漏，同时触发管控。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "内存泄漏（MEMORY_LEAK） - ashmem/ion/gpu等内存泄漏（KERNEL_MEMORY）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于ashmem/ion/gpu的基线值，超过基线值时会判定泄漏，同步抓取维测信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(638348)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["表格中所述阈值/基线均为系统默认，如果生态在开发过程中需要自行设定基线，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug#hidebugsetappresourcelimit12",
            children: "hidebug.setAppResourceLimit接口"
          }), "进行设置，该接口建议在开发阶段调用，不要在正式发布阶段使用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "虚拟机内存使用率计算公式 = heapUsed / totalHeap。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["heapUsed：当前虚拟机使用的堆大小，单位：KB。可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug#hidebuggetappvmmemoryinfo12",
            children: "hidebug.getAppVMMemoryInfo()"
          }), "接口获取。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["totalHeap：当前虚拟机的堆总大小，单位：KB。可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug#hidebuggetappvmmemoryinfo12",
            children: "hidebug.getAppVMMemoryInfo()"
          }), "接口获取。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当应用上报JS_ERROR/CPP_CRASH故障，Error message包含“OutOfMemory”时，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-leak-way#section728319329442",
            children: "内存泄漏分析方法"
          }), "辅助定位。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "管控是指当系统判定应用发生泄漏后，主动终止泄漏应用的行为。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["句柄泄漏调用栈、native内存泄漏调用栈、js泄漏内存快照等维测因为开销较大，所以在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology#nolog%E7%89%88%E6%9C%AC",
          children: "nolog版本"
        }), "默认不开启。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果开发者希望获取到nolog版本的js泄漏内存快照，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-arkts",
          children: "资源泄漏事件订阅（ArkTS）"
        }), "增加对nolog版本js内存快照的订阅。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志获取",
      children: "日志获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源泄漏日志由LeakDetector模块进行管理，可通过以下方式获取："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方式一：通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/test-service/deveco-testing/exploratory-testing",
            children: "DevEco Testing进行探索测试"
          }), "并获取日志。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Testing工具会收集设备/data/log/reliability/resource_leak/路径下的资源泄漏故障日志，根据进程名、故障和时间分类显示。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "泄漏类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "日志文件名称"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "句柄泄漏（FD_LEAK）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[pid]_fd_leak.txt"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "线程泄漏（THREAD_LEAK）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[pid]_thread_leak.txt"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "内存泄漏（MEMORY_LEAK） - js泄漏（JS_LEAK）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "memleak-js-[process_name]-[pid]-[tid]-[timestamp].rawheap"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "内存泄漏（MEMORY_LEAK） - native内存泄漏（PSS_MEMORY）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "memleak-native-[process_name]-[pid]-sample.txt  memleak-native-[process_name]-[pid]-smaps.txt  memleak-native-[process_name]-[pid]-[timestamp].txt"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "内存泄漏（MEMORY_LEAK） - ashmem/ion/gpu等内存泄漏（KERNEL_MEMORY）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "memleak-kernel-[module]-0-sample.txt  memleak-kernel-[module]-0-[timestamp].txt"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(361450)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["native内存泄漏的调用栈（memleak-native-[process_name]-[pid]-[timestamp].txt）无法直接在DevEco Studio打开，需要修改后缀名为.nas，然后使用DevEco Studio-Profiler-打开并分析，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-insight-session-allocations/ide-insight-session-allocations-memory",
              children: "内存分析及优化"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["js泄漏的维测日志 memleak-js-[process_name]-[pid]-[tid]-[timestamp].rawheap 为二进制内存快照文件，需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator",
              children: "translator工具"
            }), "转换为.heapsnapshot文件，通过DevEco Studio或浏览器打开展示，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-insight-session-snapshot/ide-snapshot-basic-operations#section6760173514388",
              children: "Snapshot离线导入"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二：通过DevEco Studio主动采集日志。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DevEco Studio的profiler模块提供", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-insight-session-allocations/ide-insight-session-allocations-memory",
            children: "Allocation"
          }), "（获取native调用栈profiler）和 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-insight-session-snapshot/ide-arkts-memory-leak-analysis",
                children: "Snapshot"
              })
            })
          }), " （获取JS层heapdump）两种采集方式："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(355246)/* ["default"] */.A) + "",
            width: "1210",
            height: "297"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式三：通过HiAppEvent接口订阅。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HiAppEvent对外提供故障订阅接口，可以订阅各类故障打点，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
            children: "HiAppEvent介绍"
          }), "，其中资源泄漏的订阅方式详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events",
            children: "资源泄漏事件介绍"
          }), "。资源泄漏故障日志存于/data/storage/el2/log/resourcelimit/路径，日志名统一为RESOURCE_OVERLIMIT_[TIMESTAMP]_[PID].log，可根据日志内容区分文件类型。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "句柄泄漏日志规格",
      children: "句柄泄漏日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["故障日志文件名：[pid]_fd_leak.txt（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式一"
        })
      }), "）或RESOURCE_OVERLIMIT_[TIMESTAMP]_[PID].log（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式三"
        })
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志头部信息",
      children: "日志头部信息"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "故障发生时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障进程的pid，可以用于在流水日志中搜索相关进程信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用进程包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "leaked fd nums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判定泄漏时获取的句柄数量（快照）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "time: 2024/06/27 11:55:28\npid: 1380\nprocess: process1\nleaked fd nums: 5111\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "句柄类型详细信息",
      children: "句柄类型详细信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leaked fd Top 10："
            })
          }), " 按照句柄名聚类，获取泄漏句柄中最多的类型。第一列为泄漏数量，第二列为泄漏类型，如下即ashmem类型的句柄存在4796个。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "FdCount FileDescriptor\n*****************************\nLeaked fd Top 10:\n4796    ashmem\n259 socket\n119 dmabuf\n48 eventfd\n42 sync_file\n17 eventpoll\n3 /sys/kernel/debug/tracing/trace_marker\n3 /dev/null\n2 /dev/hvgr0\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dir Type Top 10："
            })
          }), " 针对文件句柄类型，会单独根据文件路径聚类。如下，根据“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leaked fd Top 10"
            })
          }), "”无法看出具体泄漏的类型，但是通过“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dir Type Top 10"
            })
          }), "”能确定是“/data/storage/el2/database/rdb”路径下的文件句柄泄漏，且能大概感知是db泄漏。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Dir Type Top 10:\n6175 /data/storage/el2/database/rdb\n5 /dev/urandom\n3 /sys/kernel/debug/tracing/trace_marker\n3 /dev/null\n1 anon_inode:[signalfd]\n1 /dev/binder\n1 /proc/\n1 /system/app/PhoneClone/PhoneClone.hap\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(638074)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若top句柄为unknown，说明维测没有权限获取泄漏进程的句柄。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "特殊类型句柄维测信息",
      children: "特殊类型句柄维测信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Leaked fd Top 10"
        })
      }), "的TOP句柄信息属于ashmem/socket/pipe/sync_file/dmabuf这五类特殊类型，且该类型的句柄个数超过1000个，日志中会增加整机详细的维测信息，具体如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ashmem类型句柄"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ashmem（共享内存），当TOP 1的句柄类型为ashmem时，抓取整机ashmem内存的详细信息如下。"
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
                children: "Process_name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "持有该ashmem内存块的应用进程包名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Process_ID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "发生故障进程的pid，可以用于在流水日志中搜索相关进程信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Fd"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该进程持有的句柄。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Applicant_Pid"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "申请该ashmem内存块的进程pid，可根据此字段识别该内存块的申请来源。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Ashmem_name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "共享内存的名字，开发者可通过提供的API进行设置，用来判断存储的资源类型，指向不同的领域。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Size"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单个ashmem块的大小，单位：B。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(830562)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可通过提供的API接口设置ashmem内存："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["JS层API：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap#setmemorynamesync13",
            children: "setMemoryNameSync"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["NATIVE层API：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_setmemoryname",
            children: "OH_PixelmapNative_SetMemoryName"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "*****************************\nLOGGER_MEMCHECK_ASHMEM_INFO\nProcess ashmem detail info:\n---------------------------------------------------------------------------------\nProcess_name Process_ID Fd Cnode_idx Applicant_Pid Ashmem_name Size\nprocess1 781 18 328233 781 dev/ashmem/PolicyVolumeMap 384\n...........\n...........\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "socket类型句柄"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "socket（网络通信），当TOP 1的句柄类型为socket时，抓取整机socket内存的详细信息如下。"
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
                children: "ProcessName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "持有该socket内存块的应用进程包名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ProcessID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "发生故障进程的pid，可以用于在流水日志中搜索相关进程信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Fd"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该进程持有的句柄。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "inode"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "文件系统对象信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PeerTid"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "对端tid（对于有连接的socket为对应值，无连接为0）。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Process socket info:\n----------------------------------------------------\nProcessName ProcessID Fd inode PeerTid\nprocess1   6874   3   0    0\n........\n.........\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pipe类型句柄"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "pipe（进程间通信），当TOP 1的句柄类型为pipe时，以fd维度抓取整机pipe内存的详细信息如下。"
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
                children: "ProcessName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "持有该pipe内存块的应用进程包名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ProcessID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "发生故障进程的pid，可以用于在流水日志中搜索相关进程信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Fd"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该进程持有的句柄。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PipeName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "管道名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "inode"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "文件系统对象信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MaxUsage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最大使用量。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "NumAccounted"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "累计大小量。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RingSize"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RingBuf大小，单位：KB。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Process pipe info:\n------------------------------------\nProcessName ProcessID Fd PipeName inode MaxUsage NumAccounted RingSize\nprocess1 629 7 / 11 16 16 16\nprocess1 629 8 / 11 16 16 16\n........\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "sync_file类型句柄"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "sync_file（显存），当TOP 1的句柄类型为sync_file时，以fd维度抓取整机sync_file的详细信息如下。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "ProcessName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "持有该sync_file内存块的应用进程包名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ProcessID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "发生故障进程的pid，可以用于在流水日志中搜索相关进程信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Fd"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该进程持有的句柄。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FenceName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "sync_file名字。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "inode"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "文件系统对象信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FenceNum"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "fence个数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TimelineName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "fence的Timeline名字。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DriverName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "驱动名字。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Status"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "fence的状态。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Timestamp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "fence的时间戳。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Process fence info:\n----------------------------------------------------\nProcessName ProcessID Fd FenceName inode FenceNum TimelineName DriverName Status Timestamp\nprocess1 1309 25 NULL 4186 1 0:online_composer_gfx_primary ukmd_release_fence_2941430 1 91607485502500\nprocess1 1309 26 NULL 4186 1 0:online_composer_gfx_primary ukmd_release_fence_2941430 1 91607485502500\n........\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "dmabuf类型句柄"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["dmabuf（也称ion内存），当TOP 1的句柄类型为dmabuf时，以fd维度抓取了整机dmabuf的详细信息如下 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "。"
            })
          })]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "Process name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "持有该ion内存块的应用进程包名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Process ID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "发生故障进程的pid，可以用于在流水日志中搜索相关进程信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Fd"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该进程持有的句柄。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "size"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "buffer内存大小，单位：B。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "magic"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["buffer唯一标识（", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "magic相同表示指向同一块buffer）"
                  })
                }), " 。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "buf->pid"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "申请者的pid。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "buf->task_comm"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "申请buffer的进程名。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Process dma_heap info:\n----------------------------------------------------\n    Process name       Process ID               fd             size            magic         buf->pid   buf->task_comm\n    process1              971               23          3145728               36              971       process2\n    process1              971               24          1048576               38              971       process2\n   ........\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "句柄栈信息",
      children: "句柄栈信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当判定句柄泄漏后，会hook该进程的pipe/open等系统调用10分钟，抓取调用栈，并基于相同调用栈聚类。如下每一行都是一个调用栈，调用顺序为从右到左，其中num后面的数字表示调用栈总个数，bt后面为具体调用栈。具体栈信息可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://llvm.org/docs/CommandGuide/llvm-symbolizer.html",
        children: "addr2line"
      }), "解析到对应的函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "*****************************\nLOGGER_MEMCHECK_FD_STACK_INFO\npid: 12326\nget stack time: 2024/06/17 19:16:48\n==============================FdTrack Stack==============================\nGenerated by HiviewDFX @HarmonyOS\n==============================Sorted by num==============================\nnum 8272 bt [/system/lib64/libfdleak_tracker.so+0x1fb58] [/system/lib/ld-musl-aarch64.so.1+0x1d3154] [/system/lib/ld-musl-aarch64.so.1+0x148940] [/system/lib64/platformsdk/libuv.so+0x1ab30] [/system/lib64/platformsdk/libuv.so+0x1cbd0] [/system/lib64/module/file/libfs.z.so+0x17109c] [/system/lib64/module/file/libfs.z.so+0x170af4] [/system/lib64/module/file/libfs.z.so+0x1701c8] [/system/lib64/platformsdk/libace_napi.z.so+0x34828]\nnum 3968 bt [/system/lib64/libfdleak_tracker.so+0x1fb58] [/system/lib/ld-musl-aarch64.so.1+0x1d3154] [/system/lib64/platformsdk/libipc_core.z.so+0x4ac64] [/system/lib64/platformsdk/libbackup_kit_inner.z.so+0x532d4] [/system/lib64/platformsdk/libbackup_kit_inner.z.so+0x4f8fc] [/system/lib64/platformsdk/libipc_core.z.so+0x38420] [/system/lib64/platformsdk/libipc_core.z.so+0x4e99c] [/system/lib64/platformsdk/libipc_core.z.so+0x4eb34] [/system/lib64/platformsdk/libipc_core.z.so+0x4edc8]\nnum 3968 bt [/system/lib64/libfdleak_tracker.so+0x1fb58] [/system/lib/ld-musl-aarch64.so.1+0x1d3154] [/system/lib64/platformsdk/libipc_core.z.so+0x4ac64] [/system/lib64/platformsdk/libbackup_kit_inner.z.so+0x532b0] [/system/lib64/platformsdk/libbackup_kit_inner.z.so+0x4f8fc] [/system/lib64/platformsdk/libipc_core.z.so+0x38420] [/system/lib64/platformsdk/libipc_core.z.so+0x4e99c] [/system/lib64/platformsdk/libipc_core.z.so+0x4eb34] [/system/lib64/platformsdk/libipc_core.z.so+0x4edc8]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251757)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "这里统计的是10分钟内全量申请句柄的调用栈，并没有将已经close的去掉。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "栈信息只有在log版本直接存在；nolog版本若未开“开发者模式”，则不抓取栈信息，如果发现不存在栈信息，需要在“开发者选项”中打开“系统资源泄漏日志”，并重启设备，来使能资源泄漏的抓栈功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "句柄泄漏聚类规则",
      children: "句柄泄漏聚类规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序在同一或不同版本上、不同时间产生的泄漏问题可能为同一原因，开发者可以从故障日志中提取故障特征，根据故障特征将多份故障日志进行聚类，以提高泄漏问题的分析效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%8F%A5%E6%9F%84%E6%B3%84%E6%BC%8F%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "句柄泄漏日志"
        }), "中的top10的文件句柄数以及top10的文件路径句柄数判定是哪种类型的句柄泄漏，将占比最多的句柄类型作为本次故障的故障特征。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ashmem、ion等特殊类型句柄，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#ashmemiongpugpu_rs%E8%81%9A%E7%B1%BB%E8%A7%84%E5%88%99",
          children: "ASHMEM_LEAK"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#ashmemiongpugpu_rs%E8%81%9A%E7%B1%BB%E8%A7%84%E5%88%99",
          children: "ION_LEAK"
        }), "规则进行聚类。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "线程泄漏日志规格",
      children: "线程泄漏日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["故障日志文件名：[pid]_thread_leak.txt（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式一"
        })
      }), "）或RESOURCE_OVERLIMIT_[TIMESTAMP]_[PID].log（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式三"
        })
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志头部信息-1",
      children: "日志头部信息"
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
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测到线程泄漏的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障进程的pid，用于在流水日志中查询相关进程信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个进程全部可访问的地址空间，其大小可能包括还尚未在内存中驻留的部分，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个进程实际占用的内存大小，包括该进程所使用共享库全部内存大小，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生故障的应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "summary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判定泄漏时进程线程总数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "time: 2024/06/27 03:45:19\npid: 41897\nvss: 12783644\nrss: 2229352\nprocess: process1\nsummary: 879\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线程类泄漏详细信息",
      children: "线程类泄漏详细信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Top 10 Thread Name："
            })
          }), " 按照线程名聚类，获取泄漏最多的线程，第一列为泄漏数量，第二列为线程名称（若创建线程时未指定线程名，则表现为线程名和进程名相同）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Top 10 Thread Name:\n913 process1\n3 gpu-work-client\n2 OS_Actor_402\n1 IPC_11_13795\n1 IPC_12_13796\n1 IPC_13_13797\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "线程启动信息"
            })
          }), "：可根据线程启动时间推测。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "tid"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "检测到泄漏时未释放线程的线程号"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "thread_name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "未释放的线程名"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "start_time(jiffies)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "线程创建时间"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "======================================================\ntid thread_name start_time(jiffies)\n221 process1 4688297\n240 IPC_3_4318 3081382\n...\n...\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "线程快照"
            })
          }), "：抓取判定泄漏时线程的调用栈，可由此看下线程做的任务，推测线程未退出的原因（如：__pthread_cond_timedwait表示线程正在等待唤醒）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "======================================================\nResult: 0 ( no error )\nTimestamp:2024-06-27 03:45:20.000\nPid:41897\nUid:1013\nProcess name:process1\nTid:1527, Name:xxx\n#00 pc 00000000001b6464 /system/lib/ld-musl-aarch64.so.1(__timedwait_cp+192)(98dc7600a0fc62125e291b93ca336154)\n#01 pc 00000000001b8468 /system/lib/ld-musl-aarch64.so.1(__pthread_cond_timedwait+188)(98dc7600a0fc62125e291b93ca336154)\n#02 pc 00000000000c108c /system/lib64/libc++.so(std::__h::condition_variable::wait(std::__h::unique_lock<std::__h::mutex>&)+20)(9cbc937082b3d7412696099dd58f4f78242f9512)\n#03 pc 000000000024654c /system/lib64/platformsdk/xxx.so(mindspore::Worker::WaitUntilActive()+204)(534ce78b66262dc14658c35fa018662f)\n#04 pc 000000000023da14 /system/lib64/platformsdk/xxx.so(mindspore::ActorWorker::RunWithSpin()+256)(534ce78b66262dc14658c35fa018662f)\n#05 pc 000000000023edb0 /system/lib64/platformsdk/xxx.so(void* std::__h::__thread_proxy[abi:v15004]<std::__h::tuple<std::__h::unique_ptr<std::__h::__thread_struct, std::__h::default_delete<std::__h::__thread_struct>>, void (mindspore::ActorWorker::*)(), mindspore::ActorWorker*>>(void*)+60)(534ce78b66262dc14658c35fa018662f)\n#06 pc 00000000001baac0 /system/lib/ld-musl-aarch64.so.1(start+236)(98dc7600a0fc62125e291b93ca336154)\n........\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线程泄漏聚类规则",
      children: "线程泄漏聚类规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序在同一或不同版本上、不同时间产生的泄漏问题可能为同一原因，开发者可以从故障日志中提取故障特征，根据故障特征将多份故障日志进行聚类，以提高泄漏问题的分析效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分析", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%BA%BF%E7%A8%8B%E6%B3%84%E6%BC%8F%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
            children: "线程泄漏日志"
          }), "中展示的top10线程，将占比最多的线程名作为本次故障的故障特征。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(999231)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统已对同名线程进行了聚类，但是部分特殊场景下，线程名间可能会存在差异，如“IPC_11_13795”、“IPC_12_13796”，如果开发者希望进一步增强聚类效果，可以将全量线程中的相似进程名作为同一个故障特征，如“IPC_xx_xxx”，以提高聚类准确性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从线程泄漏日志中提取出线程对应的线程快照，并根据调用栈进行聚类。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "js内存泄漏日志规格",
      children: "JS内存泄漏日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "故障日志文件名："
        })
      }), " memleak-js-[process_name]-[pid]-[tid]-[timestamp].rawheap（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式一"
        })
      }), "）或RESOURCE_OVERLIMIT_[TIMESTAMP]_[PID].log（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式三"
        })
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该文件记录了对象堆内存的详细信息。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["日志文件需要将后缀名修改为.rawheap文件，再通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator",
          children: "translator工具"
        }), "转换为.heapsnapshot文件，通过DevEco Studio或浏览器打开展示，详情见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-insight-session-snapshot/ide-snapshot-basic-operations#section6760173514388",
          children: "Snapshot离线导入"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API14后，需要将日志文件后缀名修改为.rawheap后，将其导入DevEco Studio并展示，详情见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-insight-session-snapshot/ide-snapshot-basic-operations#section6760173514388",
          children: "Raw Heap离线导入"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "js泄漏聚类规则",
      children: "JS泄漏聚类规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序在同一或不同版本上、不同时间产生的泄漏问题可能为同一原因，开发者可以从故障日志中提取故障特征，根据故障特征将多份故障日志进行聚类，以提高泄漏问题的分析效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "聚类步骤描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认聚类范围，只聚类top20目录和retained size占5%以上的目录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过聚类规则上报的故障进行聚类。为了保证聚类结果的有效性，不同目录下存放的对象不同，聚类规则也不同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "统计各类对象的数量及内存大小，按照对象的数量或内存大小进行排序，找到内存占比最高的对象，作为本次上报故障的故障特征。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "聚类规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "聚类规则主要分为三种：名称聚类，引用链聚类和属性聚类。不同类型的对象需要使用不同的聚类方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "名称聚类（通过对象名称进行聚类）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Function(closure)目录下的对象，按照对象名称聚类，当名称相同时，视为一类。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用链聚类（通过对象的最短引用链聚类）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Method，js_set，Map，string和JSNativePointer等目录下的对象，优先通过引用链聚类。该类对象目录下名称一致，通过引用链可以区分对象创建场景。对比目录下各对象到GC ROOT的最短引用链（如果有多条最短引用链则选择retained size最大的那条引用链），最短引用链相同，则视为一类。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对象名称+引用链聚类"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各类业务对象（业务侧创建的类对象和函数对象）带有路径对象名称和行号信息。相同的类或函数对象调用点不同，则引用链不同，需要根据不同的调用点进行区分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此外，framework，jsarray(array)也通过对象名称+引用链聚类。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "属性+引用链聚类"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "jsobject（js_shared_object）目录下对象名称相同，但代表的对象并不一致，需要通过引用链对jsobject对象进行分类，即对不同调用点的jsobject进行区分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "jsobject对象中存在大量distance为1的对象，这些对象无法通过引用链区分，但可以通过属性进行区分，即直接持有的对象是否一致，如果jsobject对象直接持有的对象名称都相同，且持有关系也相同，则归为一类。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特殊聚类"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "5.1 SourceTextModule"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SourceTextModule对象是系统侧创建的，用于持有export对象。每个ts文件会对应生成一个SourceTextModule对象，持有该ts文件中export的对象，因此天然就已经是聚类后的结果，不需要再次聚类。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "5.2 Promise/PromiseRecord/PromiseCapability/PromiseReaction"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异步相关的对象，请根据PromiseReaction下的handle信息+引用链进行聚类。PromiseReaction下的handle信息代表了该异步任务的上一个任务，可以通过上一个任务进行区分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "5.3 proxy"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "proxy往往与框架对象强相关，可以通过proxy下的target信息（handle）+引用链进行聚类。proxy下的target信息代表了proxy持有的被代理对象，proxy本身无意义，需要根据被proxy代理的对象进行区分。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "除上述类型外的其他基本类型："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他基本类型对象默认按照最短引用链聚类。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "native内存泄漏日志规格",
      children: "native内存泄漏日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "故障日志文件名："
        })
      }), " 泄漏日志获取中方式一和方式三文件名不同，方式三为RESOURCE_OVERLIMIT_[TIMESTAMP]_[PID].log，根据内容区分，方式一如下所示："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存采样",
      children: "内存采样"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志文件：memleak-native-[process_name]-[pid]-sample.txt，里面展示了进程号，进程名，基线值，内存采样的情况，可以直观的观察到内存的变化情况。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SoftThreshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统设定的该进程基线（也可由应用自身通过setAppResourceLimit接口设置），应用内存连续五次超过进程基线即上报内存泄漏事件，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HardThreshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统设定的进程硬门限，应用内存连续两次超过硬门限即上报内存泄漏事件，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PSS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按比例计算的驻留内存大小，共享库的内存按进程数均摊（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "带*的时间精准计算一次进程的PSS使用量"
              })
            }), "），单位：KB。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Offset"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将共享库内存均摊后的偏差：RSS + Offset = PSS ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "（用于矫正后续不带*号的PSS估算值）"
              })
            }), " ，单位：KB。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程实际驻留在物理内存中的内存总量（包含共享库占用的全部内存），单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SwapPSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程实际交换出去（即写入swap空间）的内存总量，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TotalPSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程PSS使用量的总和，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AvcMem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程通过Avcodec_service创建编解码实例创建的内存，由Avcodec_service上报给hiview进行统计，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MediaMem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程通过Media_service接口创建的内存，由Media_service上报给hiview进行统计，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程使用GPU内存，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程使用ION内存，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TotalMem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程使用的TotalPSS+ION+GPU+AvcMem+MediaMem内存的总和，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前进程的泄漏等级简写。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RunningTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程当前生命周期，单位：s。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Realtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前采样的真实时间。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*************************************************************\n/*                  ***** READ ME *****                      *\n/*************************************************************\n/*                 RSS: Resident Set Size                    *\n/*                 PSS: Proportional Set Size                *\n/*                 RSS + Offset = PSS                        *\n/*                 TotalPSS = PSS + SwapPSS                  *\n/*   TotalMem = TotalPSS + Av_Mem + Media_Mem + ION + GPU    *\n/*                 ***** Two Modes *****                     *\n/*      Estimate Mode: RSS & SwapPSS is real                 *\n/*      Real Mode(Realtime with *): everything is real       *\n/*      Media_rss:apply mem through media_service            *\n/*      Avc_rss:apply mem through avcodec_service            *\n/*    ~ means negligible memory(safe to ignore in analysis)  *\n/*************************************************************\n/*                   ***** Attention *****                   *\n/*    Formulas about TotalMem and sub-items may change,      *\n/*    please reference current annotation formula            *\n/*************************************************************\n\npid: XXXX\nprocessName: XXXXXX\nSoftThreshold: 3500(KB)\nHardThreshold: 1024000(KB)\n\nIndex   RSS(KB)     Offset(KB)  PSS(KB)     SwapPSS(KB)     TotalPSS(KB)     MediaMem(KB)   AvcMem(KB)    GPU(KB)       ION(KB)       TotalMem(KB)     Level   RunningTime(s)     Realtime\n1       14668       0           14668       5500            20168            ~              ~             ~             ~             20168            W       112             2025/04/23 12:28:02\n2       12732       0           12732       5476            18208            ~              ~             ~             ~             18208            W       352             2025/04/23 12:32:01\n3       13560       0           13560       5456            19016            ~              ~             ~             ~             19016            W       592             2025/04/23 12:36:02\n4       13576       0           13576       5440            19016            ~              ~             ~             ~             19016            W       832             2025/04/23 12:40:02\n5       13576       0           13576       5440            19016            ~              ~             ~             ~             19016            W       1072            2025/04/23 12:44:02\n6       13584       -8320       5264        5440            10704            ~              ~             ~             ~             10704            W       1072            *2025/04/23 12:44:02\n7       12984       -8320       4664        5084            9748             ~              ~             ~             ~             9748             W       1312            2025/04/23 12:48:02\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存维测",
      children: "内存维测"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志文件：memleak-native-[process_name]-[pid]-smaps.txt"
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
            children: "RealPssMemory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "记录了realtime时刻采集的PSS值，单位：KB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOGGER_MEMCHECK_MEMINFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下方记录了整机meminfo内存信息，如MemTotal、MemFree等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOGGER_MEMCHECK_SMAPS_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下方记录了该进程的smaps汇总信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOGGER_MEMCHECK_SAMPLE_NMD_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下方记录了该进程的两次jemalloc的申请情况（两次记录间隔5min），系统会根据两次NMD信息抓取内存栈。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOGGER_MEMCHECK_DETIAL_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下方记录了该进程的jemalloc快照详细信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX @HarmonyOS\nLOGGER_MEMCHECK_GERNAL_INFO\n pidNumber: 2017\n processName: process1\n PidStartTime: 1602\n RealPssMemory: 83505\n\n*****************************\nLOGGER_MEMCHECK_MEMINFO\nMemTotal:                             11332540 kB\nMemFree:                               1686056 kB\n......\n\nLOGGER_MEMCHECK_SMAPS_INFO\n-------------------------------[memory]-------------------------------\n                                    Shared      Shared      Private     Private\nSize        Rss         Pss         Clean       Dirty       Clean       Dirty       Swap        SwapPss     Counts                        Name\n2048        0           0           0           0           0           0           0           0           1                             /dev/__parameters__/param_sec_dac\n...\n45778196    744068      827123      213560      55288       403304      71916       308888      308888      6500                          Summary\n......\n\nLOGGER_MEMCHECK_SAMPLE_NMD_INFO\n\n            size       allocated         nmalloc         ndalloc\n\n               8           17384          511848          509675\n              16          129376          338438          330352\n              32         1138816         1026155          990567\n              48         3161808         1322095         1256224\n              64         1869376          908151          878942\n......\n\n************ endl ************\n\nLOGGER_MEMCHECK_SAMPLE_NMD_INFO\n\n            size       allocated         nmalloc         ndalloc\n\n               8           17384          511848          509675\n              16          129376          338438          330352\n              32         1138816         1026155          990567\n              48         3161808         1322095         1256224\n              64         1869376          908151          878942\n......\n\n************ endl ************\n\n*****************************\nLOGGER_MEMCHECK_PROC_INFO\nASHMEM_PROCESS_INFO\n---------------------------------------------------------------------------------\n---------------------------------------------------------------------------------\nProcess_name Process_ID Fd Cnode_idx Applicant_Pid Ashmem_name Virtual_size Physical_size magic\nXXXXX           816             22      328234  816     dev/ashmem/PolicyVolumeMap      541             4096            7\n************ endl ************\n\n******************************\nLOGGER_MEMCHECK_DETIAL_INFO\nallocated         nmalloc   (#/sec)         ndalloc   (#/sec)       nrequests   (#/sec)           nfill   (#/sec)          nflush   (#/sec)\nsmall:                      183785560        12591759       619        10371251       510         1289491        63         1313204        64          956094        47\nlarge:                       31059968            3359         0            2946         0            3359         0            3359         0               0         0\ntotal:                      214845528        12595118       619        10374197       510         1292850        63         1316563        64          956094        47\n\n......\n\nbins:           size ind    allocated      nmalloc (#/sec)      ndalloc (#/sec)    nrequests   (#/sec)  nshards      curregs     curslabs  nonfull_slabs regs pgs   util       nfills (#/sec)     nflushes (#/sec)       nslabs     nreslabs (#/sec)      n_lock_ops (#/sec)       n_waiting (#/sec)      n_spin_acq (#/sec)  n_owner_switch (#/sec)   total_wait_ns   (#/sec)     max_wait_ns  max_n_thds\n8   0       198920       163820       8       138955       6       119703         5        1        24865           56             19  512   1  0.867         6526       0         4008       0           96        26995       1           10990       0               0       0               0       0            1226       0               0         0               0           0\n16   1      1802688      1143707      56      1031039      50       221165        10        1       112668          563            309  256   1  0.781       105471       5        82548       4         1942        80503       3          191126       9               0       0              14       0            4316       0               0         0               0           0\n32   2      9954560      1867465      91      1556385      76       267993        13        1       311080         2614            503  128   1  0.929       177825       8       136745       6         7713       176923       8          325128      15               2       0              52       0            8139       0               0         0               0           1\n48   3     35382816      3763756     185      3026614     148       300952        14        1       737142         2953            220  256   3  0.975       371881      18       283650      13        12022        60637       2          667997      32               2       0              17       0            2725       0               0         0               0           1\n......\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(153756)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“LOGGER_MEMCHECK_SAMPLE_NMD_INFO”与“LOGGER_MEMCHECK_DETIAL_INFO”均为进程jemalloc快照，区别在于："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LOGGER_MEMCHECK_SAMPLE_NMD_INFO：单次维测连续采样2次，间隔为5分钟，内容包含size、allocated、nmalloc、ndalloc等四列内存申请相关信息；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LOGGER_MEMCHECK_DETIAL_INFO：单次维测仅采样1次，内容包含进程jemalloc的完整信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存栈",
      children: "内存栈"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "栈信息日志文件："
        })
      }), " memleak-native-[process_name]-[pid]-[timestamp].txt"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["检测到泄漏后抓取", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "15min内的进程内存trace"
            })
          }), "，可将日志如下图通过Open File加载到DevEco Studio进行解析。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(793101)/* ["default"] */.A) + "",
            width: "321",
            height: "214"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(922404)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["系统自动抓的调用栈（memleak-native-[process_name]-[pid]-[timestamp].txt）", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "无法直接在DevEco Studio打开，需要修改后缀名为.nas"
            })
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All Heap："
            })
          }), " 选择后展示抓取15分钟内的内存情况，记录了hook malloc等系统调用的堆栈。Native日志是以so+偏移的形式展示调用栈（每一行表示一次内存分配行为调用栈），需要结合符号表进一步分析。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击Call Trees可以查看抓取进程的调用栈，筛选“Created & Existing”，根据没有释放的内存占比排序，展开可查看详细进程调用信息，优先排查内存占用较高的堆栈。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(660983)/* ["default"] */.A) + "",
            width: "1403",
            height: "675"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(343993)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "部分栈单看Existing可能感觉泄漏不大或者和检测到的内存峰值相差很多，但是栈里只是抓取的是15分钟内的堆栈信息和内存申请，很多进程泄漏是以几十甚至几百小时为单位的，长时间的泄漏达到上报时的泄漏大小。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All Anonymous VM："
            })
          }), " 选择后记录了当前hook mmap系统调用的堆栈信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同样选择“Created & Existing”，表示在hook抓取内存申请未释放的。长度越长代表在剩余内存中占用越多，优先排查。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(794586)/* ["default"] */.A) + "",
            width: "993",
            height: "695"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native泄漏聚类规则",
      children: "native泄漏聚类规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序在同一或不同版本上、不同时间产生的泄漏问题可能为同一原因，开发者可以从故障日志中提取故障特征，根据故障特征将多份故障日志进行聚类，以提高泄漏问题的分析效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于PSS_MEMORY故障，系统会发送两份故障日志给开发者进行分析，故障日志一（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%86%85%E5%AD%98%E7%BB%B4%E6%B5%8B",
        children: "内存维测"
      }), "）用于存储进程的部分轻量化信息，如：smaps、ashmem、NMD等；故障日志二（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%86%85%E5%AD%98%E6%A0%88",
        children: "内存栈"
      }), "）中用于存储系统检测到进程pss泄漏后抓取的栈信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对故障日志一中的进程“LOGGER_MEMCHECK_SMAPS_INFO”信息进行分析，根据以下表格所列方法计算各类型内存占比，筛选占比最高的内存泄漏类型。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "内存泄漏类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "计算方法"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "虚拟机对象泄漏"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "搜索关键字“ArkTS”，计算“Pss”列和“SwapPss”列之和占总内存比例。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "堆内存泄漏"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "搜索关键字“jemalloc”，计算“Pss”列和“SwapPss”列之和占总内存比例。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ashmem内存泄漏"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "搜索关键字“/dev/ashmem”，计算“Pss”列和“SwapPss”列之和占总内存比例。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "anon类型内存较大"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "搜索关键字“[anon]”，计算“Pss”列和“SwapPss”列之和占总内存比例。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(62806)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "每一行“Pss”列以及“SwapPss”列之和为对应内存块的申请大小。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“Name”列为内存块的内存标签。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "筛选出占比最高的内存泄漏类型后，可以根据以下规则进一步提取故障特征："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "虚拟机对象：筛选内存申请最大的内存标签作为故障特征，如：从以下日志中提取的故障标签为“[anon:ArkTS Heapsemi space]”。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "LOGGER_MEMCHECK_SMAPS_INFO\n-------------------------------[memory]-------------------------------\n                                    Shared      Shared      Private     Private\nSize        Rss         Pss        Clean       Dirty         Clean       Dirty       Swap        SwapPss     Counts                 Name\n1662976     68744       68744       0           0           68744       0           0           0           525                     [anon:ArkTS Heap]\n\n5632        5600        2261        3452        0           2148        0           0           0           22                      [anon:ArkTS Heapappspawn space]\n\n98304       74012       74012       0           0           74012       0           0           0           307                     [anon:ArkTS Heapsemi space]\n\n...\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "堆内存：筛选内存申请最大的内存标签作为故障特征，如：从以下日志中提取的故障标签为“[anon:native_heap:jemalloc]”。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "LOGGER_MEMCHECK_SMAPS_INFO\n-------------------------------[memory]-------------------------------\n                                    Shared      Shared      Private     Private\nSize        Rss         Pss        Clean       Dirty         Clean       Dirty       Swap        SwapPss     Counts                 Name\n327168      171464      146921      25416       0           146048      0           0           0           17                      [anon:native_heap:jemalloc]\n24600       3924        3586        348         0           3576        0           0           0           18                      [anon:native_heap:jemalloc meta]\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果存在内存调用栈，可以根据NMD维测找到占用最高的内存区间，并结合抓取的调用栈维测聚类到具体代码段或者so作为怀疑点，具体分析方法可参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-leak-way#section1658571616574",
                children: "Native泄漏分析方法"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ashmem内存：参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "#ashmemiongpugpu_rs%E8%81%9A%E7%B1%BB%E8%A7%84%E5%88%99",
                children: "ashmem聚类规则"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "anon内存：筛选内存申请最大的内存标签作为故障特征，如：从以下日志中提取的故障标签为“[anon]”。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "LOGGER_MEMCHECK_SMAPS_INFO\n-------------------------------[memory]-------------------------------\n                                    Shared      Shared      Private     Private\nSize        Rss         Pss        Clean       Dirty         Clean       Dirty       Swap        SwapPss     Counts                 Name\n38760       528         524         4           0           524         0           0           0           56                      [anon]\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果存在内存调用栈，可通过分析调用栈中占比较高的聚类到具体代码段或者so作为怀疑点，具体分析方法可参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-leak-way#section1658571616574",
                children: "Native泄漏分析方法"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(657790)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于nolog版本，默认不开启抓栈，因此推荐开发者根据smaps信息对PSS内存占用的类型进行初步聚类。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ashmemiongpugpu_rs内存泄漏日志规格",
      children: "ashmem/ion/gpu/gpu_rs内存泄漏日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存采样-1",
      children: "内存采样"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["日志文件：memleak-kernel-[module]-0-sample.txt（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式一"
            })
          }), "）或 RESOURCE_OVERLIMIT_[TIMESTAMP]_[PID].log（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式三"
            })
          }), "）。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "memoryName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "内核内存类型，如果发现进程存在泄漏（超过系统设定基线），会显示为该泄漏进程的进程名；如果memoryName打印类型为：ashmem/gpu/ion，则说明无进程泄漏。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "softThreshold"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "系统设定的软门限（超过8个采样周期，即30+分钟超过软门限后判定泄漏），单位：KB。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "hardThreshold"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "系统设定的硬门限（单次超过硬门限后判定泄漏），单位：KB。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "topMemory"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "检测到的内核内存峰值，单位：KB。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "memoryName:gpu\nsoftThreshold:2300(MB)\nhardThreshold:3450(MB)\ntopMemory:4876824(KB)\ntime(s) kernelMemory(KB)realtime\n247681  4876824         2024/06/24 08:27:52\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存维测-1",
      children: "内存维测"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["日志文件：memleak-kernel-[module]-0-[timestamp].txt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "（方式一）"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "LOGGER_MEMCHECK_MEMINFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整机内存信息概览。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOGGER_MEMCHECK_PROC_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ashmem/ion/gpu对应泄漏内存节点信息打印（泄漏类型不同，落盘内容不同）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOGGER_PROCESS_DMABUF_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ion内存泄漏时获取的特殊节点内容，包含更多的内存块使用信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOGGER_MEMCHECK_RENDER_SERVICE_MEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Render_service进程的内存使用情况。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检测到ashmem/gpu/ion内存泄漏时，会抓取整机ashmem/gpu/ion内存信息，ashmem/ion与句柄泄漏ashmem/dmabuf日志规格相同，参考ashmem/dmabuf类型句柄。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志抬头："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX @HarmonyOS\nLOGGER_MEMCHECK_GERNAL_INFO\nmemoryName:ion\nsoftThreshold:2800(MB)\nhardThreshold:4200(MB)\nappHardThreshold:4096(MB)\ntopMemory:0(KB)\n\n*****************************\nLOGGER_MEMCHECK_MEMINFO\nMemTotal:       11738500 kB\nMemFree:          116204 kB\nMemAvailable:      95232 kB\nBuffers:               0 kB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志文件内“LOGGER_MEMCHECK_PROC_INFO”会根据内存泄漏类型不同，落盘对应的内存信息，具体如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ashmem内存泄漏："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "LOGGER_MEMCHECK_PROC_INFO\nrealtime:       2025/05/30 19:52:42\nProcess ashmem overview info:\n---------------------------------------------------------------------------------\nProcess_name Virtual_size Physical_size\nTotal ashmem  of [XXXXXX] virtual size is  541, physical size is 4096\nTotal ashmem  of [XXXXXX] virtual size is  299008, physical size is 299008\nTotal ashmem  of [XXXXXX] virtual size is  37574896, physical size is 37470208\n......\nProcess ashmem detail info:\n---------------------------------------------------------------------------------\nProcess_name    Process_ID      Fd      Cnode_idx       Applicant_Pid   Ashmem_name     Virtual_size    Physical_size   magic\nXXXXX    816     22      328234  816     dev/ashmem/PolicyVolumeMap      541     4096    7\n......\n---------------------------------------------------------------------------------\n*****************************\nLOGGER_MEMCHECK_RENDER_SERVICE_MEM\nget info realtime:      2025/05/30 19:52:42\n\n-------------------------------[ability]-------------------------------\n\n----------------------------------RenderService----------------------------------\n......\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ion内存泄漏："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "*****************************\nLOGGER_MEMCHECK_PROC_INFO\nMM_DMABUF_INFO\nrealtime: 2025/07/26 14:19:58\nProcess pid fd size_bytes ino exp_pid exp_task_comm buf_name exp_name buf_type\nprocess1        1563 71 13926400 25690 11187 allocator_host 11563 mm_heap_helpers xcomponent\nprocess1        1563 75 1024000000 21095 11187 allocator_host 11563 mm_heap_helpers NULL\nprocess1        1563 77 1024000000 11557 11187 allocator_host 11563 mm_heap_helpers NULL\nprocess1        1563 79 1024000000 26747 11187 allocator_host 11563 mm_heap_helpers NULL\n************ endl ************\n\n*****************************\nLOGGER_MEMCHECK_RENDER_SERVICE_MEM\nget info realtime:      2025/05/30 21:17:39\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------RenderService----------------------------------\n......\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从HarmonyOS6.0.0开始，ion内存维测信息增加buf_name、leak_type等列，变更为以下形式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "*****************************\nLOGGER_MEMCHECK_PROC_INFO\nMM_DMABUF_INFO\nProcess       pid     fd  size_bytes  ino          exp_pid    exp_task_comm   buf_name    exp_name          buf_type    leak_type\nprocess1      65141   268 274432      430936       42829      allocator_host  65141       mm_heap_helpers   NULL        NULL\n......\n************ endl ************\n"
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
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "gpu/gpu_rs内存泄漏："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "LOGGER_MEMCHECK_PROC_INFO\nGPU_PROCESS_INFO\nrender_service\nctx_1       1689       1455 used summary:3362426880 grow:0 driver:10432512 kmd:3260416 jit:131072\nprocess1\nChannel: xx default device (Total memory: 730594)\n  1:                    2 / 2\n  6:                    4 / 160\n  7:                    6 / 384\n  8:                  163 / 20928\n  9:                 1573 / 604160\n 10:                   48 / 24576\n 11:                    2 / 2048\n 13:                    2 / 12800\n 15:                    4 / 65536\n......\n\n*****************************\nLOGGER_MEMCHECK_RENDER_SERVICE_MEM\nget info realtime:      2025/05/30 21:16:01\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------RenderService----------------------------------\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "字段说明："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "“ctx_1 1689 1455 used summary:3362426880 grow:0 driver:10432512 kmd:3260416 jit:131072"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "process1”表示上下文ctx_1是由进程“process1”创建的，这个进程的进程号为“1455”，线程号为“1689”，总使用量为：“3362426880”字节。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "“Channel: xx default device (Total memory: 730594)”表示进程申请的“xx default device”类型的gpu内存大小为730594字节。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "“15: 4 / 65536” 表示 2^14~2^15大小的内存块申请了4次，总共申请了65536字节的内存。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(856188)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gpu_rs内存泄漏与gpu泄漏的区别在于：gpu是应用自渲染发生的泄漏，gpu_rs是通过进程render_service进行统一渲染发生的泄漏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在资源泄漏资料中，ion、dmaheap、dmabuf 可理解为同一种内存类型，不作强区分。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前日志规格不代表维测的最终形态，后续会根据版本问题以及用户原声增加维测信息，变更形式包括但不限于行、列、段落等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存栈-1",
      children: "内存栈"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从HarmonyOS 6.0.0开始，支持抓取gpu内存申请的调用栈以分析进程gpu泄漏问题。检测到泄漏后会收集15分钟内的gpu内存申请trace，开发者可本地搭建", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-sig/smartperf",
        children: "Smartper"
      }), "f环境并导入Profiler日志进行解析。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志文件名称：memleak-kernel-[module]-[pid]-[timestamp].txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ashmemiongpugpu_rs聚类规则",
      children: "ashmem/ion/gpu/gpu_rs聚类规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序在同一或不同版本上、不同时间产生的泄漏问题可能为同一原因，开发者可以从故障日志中提取故障特征，根据故障特征将多份故障日志进行聚类，以提高泄漏问题的分析效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ashmem聚类规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提取故障日志中的ashmem维测信息进行聚类，如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Process_name    Process_ID      Fd      Cnode_idx       Applicant_Pid   Ashmem_name                     Virtual_size    Physical_size  magic\nXXXXX           816             22      328234          816             dev/ashmem/PolicyVolumeMap      541             4096            7\nXXXXX           816             22      328234          816             dev/ashmem/PolicyVolumeMap      541             4096            7\nXXXXX           816             22      328234          816             dev/ashmem/inputBuffer          541             1024            7\nXXXXX           816             22      328234          816             dev/ashmem/outputBuffer         541             512             7\n......\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分析ashmem维测中的“Ashmem_name”字段，来确认是否为同一类型的buffer泄漏，并将“Physical_size”列之和占比最高的buffer作为本次故障的故障特征。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ion聚类规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提取故障日志中的ion维测信息来进行聚类，如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "*****************************\nLOGGER_MEMCHECK_PROC_INFO\nMM_DMABUF_INFO\nProcess     pid      fd         size_bytes    ino        exp_pid      exp_task_comm    buf_name                                                                         exp_name           buf_type    leak_type\nprocess1    65141    246        278528        432510     42829        allocator_host    65141                                                                           mm_heap_helpers    NULL        NULL\nprocess1    65141    247        266240        434225     42829        allocator_host    65141                                                                           mm_heap_helpers    NULL        NULL\nprocess1    65141    248        274432        430933     42829        allocator_host    65141                                                                           mm_heap_helpers    NULL        NULL\nprocess1    65141    264        14036992      432500     42829        allocator_host    https://xxxx/xxxxx.png                                                          mm_heap_helpers    pixelmap    pixelmap\nprocess1    65141    266        14036992      426988     42829        allocator_host    https://xxxx/xxxxx.png                                                          mm_heap_helpers    pixelmap    pixelmap\nprocess1    65141    268        14036992      430936     42829        allocator_host    https://xxxx/xxxxx.png                                                          mm_heap_helpers    pixelmap    pixelmap\nprocess1    65141    258        4493312       432499     42829        allocator_host    srcImageSize-2160x2880-pixelMapSize-2160x2880-streamsize-761322-mimetype-webp   mm_heap_helpers    NULL        NULL\nprocess1    65141    260        4493312       426987     42829        allocator_host    srcImageSize-2160x2880-pixelMapSize-2160x2880-streamsize-761322-mimetype-webp   mm_heap_helpers    NULL        NULL\nprocess1    65141    262        4493312       431689     42829        allocator_host    srcImageSize-2160x2880-pixelMapSize-2160x2880-streamsize-761322-mimetype-webp   mm_heap_helpers    NULL        NULL\nprocess1    65141    254        4493312       430935     42829        allocator_host    srcImageSize-2160x2880-pixelMapSize-2160x2880-streamsize-761322-mimetype-webp   mm_heap_helpers    NULL        NULL\nprocess1    65141    256        4493312       431688     42829        allocator_host    srcImageSize-2160x2880-pixelMapSize-2160x2880-streamsize-761322-mimetype-webp   mm_heap_helpers    NULL        NULL\nprocess1    65141    250        4493312       432498     42829        allocator_host    srcImageSize-2160x2880-pixelMapSize-2160x2880-streamsize-761322-mimetype-webp   mm_heap_helpers    NULL        NULL\nprocess1    65141    252        4493312       430934     42829        allocator_host    srcImageSize-2160x2880-pixelMapSize-2160x2880-streamsize-761322-mimetype-webp   mm_heap_helpers    NULL        NULL\n************ endl ************\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据“leak_type”和“buf_name”对buffer进行分类，提取出“size_bytes”之和占比最高buffer的“buf_name”作为本次故障的故障特征。分析细节可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-leak-way#section5493141412410",
            children: "ION泄漏分析方法"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(226379)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果“leak_type”为NULL，可能存在多种类型的buffer，可以直接通过“buf_name”进行区分。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "gpu/gpu_rs聚类规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解析故障日志中提供的gpu维测信息，统计包含“Total memory:”字段的行并解析出对应类型gpu内存的占用，筛选占用最高的gpu内存类型作为故障特征。如以下维测中，“host default memory”类型的gpu内存占用为“1789351”字节，可以作为故障特征进行聚类："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C: cq memory(not in total memory) (Total memory: 4096)\n13:                    1 / 4096\n\nC: vulkan external memory(not in total memory) (Total memory: 0)\n(empty)\n\nC: host default memory (Total memory: 1789351)\n  5:                  269 / 4304\n  6:                  370 / 15792\n  7:                  401 / 33088\n  8:                   96 / 14240\n  9:                  449 / 141696\n  10:                  265 / 173143\n  11:                  172 / 236391\n  12:                   68 / 187012\n  13:                   35 / 197576\n  14:                   17 / 251573\n  15:                    6 / 108304\n  16:                    1 / 51736\n  17:                    1 / 84184\n  19:                    1 / 290312\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "聚类到gpu内存类型后，筛选出其中占用最大的内存段并进行聚类。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(458388)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同的芯片平台中，gpu表现形式会存在差异："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C: host default memory (Total memory: 1789351)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Channel: Texture (Total memory: 1789351)。"
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
922404(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
251757(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
999231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
638348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
856188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
660983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438537-ff4c4e796c85cc0ab9b94ca8966a54a2.png");

},
830562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
638074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
657790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
355246(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478491-92ee79ca4fbcabbbc8e8412eceed8aa6.png");

},
153756(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
62806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
793101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
361450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
343993(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
226379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
794586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958492-2c1ec42aa7f3599949a53f2161d594d9.png");

},
458388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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