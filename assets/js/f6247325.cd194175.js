"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["216585"], {
53949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_appkilled_guidelines_appkilled_guidelines_md_f62_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-fault-analysis-appkilled-guidelines-appkilled-guidelines-md-f62.json
var site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_appkilled_guidelines_appkilled_guidelines_md_f62_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines/appkilled-guidelines","title":"App Killed（应用终止）检测","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines/appkilled-guidelines.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines","slug":"/system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"App Killed（应用终止）检测","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appkilled-guidelines","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"任务超时检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines/"},"next":{"title":"功耗检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/power-detection/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines/appkilled-guidelines.md


const frontMatter = {
	title: 'App Killed（应用终止）检测',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appkilled-guidelines',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'App Killed（应用终止）检测';

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
  "value": "触发场景",
  "id": "触发场景",
  "level": 2
}, {
  "value": "感知方式",
  "id": "感知方式",
  "level": 2
}, {
  "value": "分析思路和分析步骤",
  "id": "分析思路和分析步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "app-killed应用终止检测",
        children: "App Killed（应用终止）检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用闪退指应用在使用过程中突然异常终止。当应用行为异常，比如消耗过多CPU、内存等系统资源时，系统为了保持整机健康状态，会按照规则挑选应用进行管控，通常通过服务进程向应用发送SIGKILL信号（信号值是9）来实施终止的。操作系统对SIGKILL的默认行为是不生成栈日志等维测信息的，导致应用闪退时faultlogger中无日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用退出通常包含以下几种情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用自身发生异常或主动抛出异常，例如因SIGSEGV、SIGABRT触发的CPP_CRASH异常，系统可监控并记录维测日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户主动终止应用，例如在任务列表中点击清理按钮以清除所有应用，或上划清除单个应用，不会生成栈等维测日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用开发者主动调用exit系统调用时，不会生成栈等维测日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用发生主线程堵塞，导致界面冻结，通常会生成APP_FREEZE日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "资源使用过度将导致系统对应用进行管控，并提供详细的维测信息。例如，应用发生内存泄漏时，通常会生成资源泄漏类的维测日志。开发者可以通过HiAppEvent订阅RESOURCE_OVERLIMIT获取对应的事件和日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统对应用进行管控时，部分场景无法提供详细的维测信息，比如LowMemoryKiller、应用的RSS内存超过4G、快速泄漏等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节主要覆盖在场景5和6中因SIGKILL信号导致的应用终止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内核和服务进程都会监控系统资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "发现异常后，选择应用进行管控。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统触发管控，终止应用时会添加系统事件打点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打点事件中包含uid、包名、前后台信息、终止原因和维测信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需先通过HiAppEvent订阅，才能接收终止事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终止事件以异步的方式传递给应用，应用需在下次启动时才能接收到。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统的管控行为会随着版本演进而不断新增，不保证当前的管控机制是系统的全部。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "触发场景",
      children: "触发场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统终止应用，有以下的场景:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用的内存、CPU和IO类负载超过一定限额，文件句柄和线程数量超标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "整机低内存时，会根据内存使用情况和优先级终止应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "功耗类检查，包括应用Binder调用导致频繁唤醒、音频播放或录音导致系统无法冻结、GPS或蓝牙等外设使用异常问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "感知方式",
      children: "感知方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以通过两种方式感知到被异常终止。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从元能力的Ability的onCreate回调参数中获取终止原因。具体为LaunchParam启动参数中的LastExitReason字段，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#lastexitreason",
          children: "元能力LastExitReason章节"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过HiAppEvent订阅APP_KILLED事件。订阅方式请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events",
          children: "应用终止事件"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分析思路和分析步骤",
      children: "分析思路和分析步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从Ability的onCreate回调参数中获取终止原因。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以参考下表进行处理。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "lastExitReason(enum)"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "lastExitMessage(string)"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "产生原因"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "处理策略"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "APP_FREEZE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "APP_FREEZE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "由于watchdog检测出应用Freeze故障，导致应用程序退出。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "通过HiAppEvent订阅APP_FREEZE事件，到APP_FREEZE事件中去匹配。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RESOURCE_CONTROL"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU Highload"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU高负载。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的CPU负载。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RESOURCE_CONTROL"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CPU_EXT Highload"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "快速CPU负载检测。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的CPU负载。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RESOURCE_CONTROL"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "IO Manager Control"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O管控。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的I/O。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RESOURCE_CONTROL"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "App Memory Deterioration"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用内存超限劣化。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试通过HiAppEvent订阅RESOURCE_OVERLIMIT获取更多日志。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RESOURCE_CONTROL"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Temperature Control"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "温度管控。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的CPU负载。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RESOURCE_CONTROL"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Memory Pressure"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整机低内存触发，按优先级由低到高终止应用。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的内存占用，以减少被整机管控策略选中的概率。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过HiAppEvent订阅APP_KILLED事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过APP_KILLED事件，可以获取终止原因、应用前后台等关键信息，对照下表进行处理："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "reason(string)"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "产生原因"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "处理策略"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否应用自身异常触发管控"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否有关联事件"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "LowMemoryKill"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "同前面的lastExitMessage值为Memory Pressure场景，即整机低内存触发，优先级由低到高终止应用。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的内存占用，以减少被整机终止策略选中的概率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SwapFull"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Swap交换空间接近占满，可能存在个别进程内存泄漏，或者是后台进程个数太多。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的内存占用，以减少被整机管控策略选中的概率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ResourceLeak(IonLeak)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用占用的ION内存超标。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试通过HiAppEvent订阅RESOURCE_OVERLIMIT获取更多的ION内存日志，找到泄漏点后，降低应用自身的ION内存占用，一般来说是Image组件或者Pixmap泄漏导致。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ResourceLeak(GpuRsLeak)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用的ArkUI组件在render_service服务进程占用的GPU内存超标。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用ArkUI组件的GPU内存占用。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ResourceLeak(GpuLeak)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用在本进程内占用的GPU内存（即自渲染产生的GPU内存）超标。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试通过HiAppEvent订阅RESOURCE_OVERLIMIT获取更多的GPU内存日志，找到泄漏点后，降低应用自渲染（使用XComponent组件）的GPU内存占用。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ResourceLeak(AshmemLeak)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用占用的ashmem内存超标。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试通过HiAppEvent订阅RESOURCE_OVERLIMIT获取更多的ashmem内存日志，找到泄漏点后，降低应用自身的ashmem内存占用，一般来说是Image组件或者Pixmap泄漏导致。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "IllegalAudioRendererBySuspend"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "未申请合理的后台任务，但是后台有大量音频播放。"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["应用退至后台时，应避免不必要的后台音频播放，或者合理使用后台任务，具体参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/background-task-kit/background-task-overview",
                  children: "后台任务开发服务"
                }), "。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PowerSaveClean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整机切换到省电模式或应急模式。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "无需处理。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RssThresholdKiller"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用的RSS内存超一定阈值。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的内存占用，避免出现RSS内存超过阈值的情况。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OomKiller"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整机低内存，触发了内核管控，按照一定策略终止应用。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的内存占用，以减少被整机管控策略选中的概率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CpaKiller"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DRM(Digital Right Management)业务申请内存但是内存不足时，会按照一定策略终止进程以回收内存。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "尝试降低应用自身的内存占用，以减少被整机管控策略选中的概率。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            })]
          })]
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