"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["101474"], {
677655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hidebug_hidebug_guidelines_hidebug_guidelines_md_34a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hidebug-hidebug-guidelines-hidebug-guidelines-md-34a.json
var site_docs_system_debug_optimize_performance_analysis_kit_hidebug_hidebug_guidelines_hidebug_guidelines_md_34a_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines/hidebug-guidelines","title":"HiDebug能力概述","description":"HiDebug可用于获取系统或应用进程的内存、CPU和GPU等数据，以及开启进程Trace采集。","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines/hidebug-guidelines.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines","slug":"/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HiDebug能力概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidebug-guidelines","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HiChecker检测问题（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hichecker/hichecker-guidelines-arkts/"},"next":{"title":"HiDebug接口使用示例(ArkTS)","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines/hidebug-guidelines.md


const frontMatter = {
	title: 'HiDebug能力概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidebug-guidelines',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'HiDebug能力概述';

const assets = {

};



const toc = [{
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "获取内存信息",
  "id": "获取内存信息",
  "level": 2
}, {
  "value": "接口说明（ArkTS）",
  "id": "接口说明arkts",
  "level": 3
}, {
  "value": "接口说明（C/C++）",
  "id": "接口说明cc",
  "level": 3
}, {
  "value": "获取显存信息",
  "id": "获取显存信息",
  "level": 2
}, {
  "value": "接口说明（ArkTS）",
  "id": "接口说明arkts-1",
  "level": 3
}, {
  "value": "接口说明（C/C++）",
  "id": "接口说明cc-1",
  "level": 3
}, {
  "value": "获取CPU使用率",
  "id": "获取cpu使用率",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 3
}, {
  "value": "接口说明（ArkTS）",
  "id": "接口说明arkts-2",
  "level": 3
}, {
  "value": "接口说明（C/C++）",
  "id": "接口说明cc-2",
  "level": 3
}, {
  "value": "获取VM信息",
  "id": "获取vm信息",
  "level": 2
}, {
  "value": "接口说明（ArkTS）",
  "id": "接口说明arkts-3",
  "level": 3
}, {
  "value": "获取应用Trace记录信息",
  "id": "获取应用trace记录信息",
  "level": 2
}, {
  "value": "接口说明（ArkTS）",
  "id": "接口说明arkts-4",
  "level": 3
}, {
  "value": "接口说明（C/C++）",
  "id": "接口说明cc-3",
  "level": 3
}, {
  "value": "启动虚拟机CpuProfiler采集",
  "id": "启动虚拟机cpuprofiler采集",
  "level": 2
}, {
  "value": "接口说明（ArkTS）",
  "id": "接口说明arkts-5",
  "level": 3
}, {
  "value": "获取调用栈",
  "id": "获取调用栈",
  "level": 2
}, {
  "value": "栈回溯原理",
  "id": "栈回溯原理",
  "level": 3
}, {
  "value": "接口说明（C/C++）",
  "id": "接口说明cc-4",
  "level": 3
}, {
  "value": "线程栈Perf采集",
  "id": "线程栈perf采集",
  "level": 2
}, {
  "value": "采样栈规格",
  "id": "采样栈规格",
  "level": 3
}, {
  "value": "接口说明（C/C++）",
  "id": "接口说明cc-5",
  "level": 3
}, {
  "value": "设置资源泄漏检测阈值",
  "id": "设置资源泄漏检测阈值",
  "level": 2
}, {
  "value": "接口说明（ArkTS）",
  "id": "接口说明arkts-6",
  "level": 3
}, {
  "value": "管理GWP-ASan",
  "id": "管理gwp-asan",
  "level": 2
}, {
  "value": "接口说明（ArkTS）",
  "id": "接口说明arkts-7",
  "level": 3
}, {
  "value": "添加维测信息到崩溃日志中",
  "id": "添加维测信息到崩溃日志中",
  "level": 2
}, {
  "value": "接口说明（C/C++）",
  "id": "接口说明cc-6",
  "level": 3
}, {
  "value": "其他",
  "id": "其他",
  "level": 2
}, {
  "value": "接口说明（ArkTS）",
  "id": "接口说明arkts-8",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
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
        id: "hidebug能力概述",
        children: "HiDebug能力概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug可用于获取系统或应用进程的内存、CPU和GPU等数据，以及开启进程Trace采集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文介绍HiDebug模块中的ArkTS和C/C++接口，并按接口能力分类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口详情可查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug",
        children: "@ohos.hidebug"
      }), "及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-h/capi-hidebug-h",
        children: "hidebug.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该模块的接口调用较为耗时，部分接口调用时长可达秒级，导致调用线程卡顿。且基于HiDebug模块定义，该模块内的接口建议仅在应用调试、调优阶段使用。若需在其他场景使用，请评估接口调用对应用性能的影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取内存信息",
      children: "获取内存信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug可用于获取整机内存、应用进程内存占用、应用线程内存占用及内存分配器统计的native内存分配数据。在程序开发过程中，查看设备和应用进程的内存数据是发现和解决各种问题、优化程序性能及确保程序稳定性的关键手段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明arkts",
      children: "接口说明（ArkTS）"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "hidebug.getNativeHeapSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取内存分配器统计的进程持有的普通块所占用的总字节数。mallinfo接口中获取到的uordblks与fordblks之和。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getNativeHeapAllocatedSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取内存分配器统计的进程持有的已使用的普通块所占用的总字节数。mallinfo接口中获取到的uordblks。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getNativeHeapFreeSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取内存分配器统计的进程持有的空闲的普通块所占用的总字节数。mallinfo接口中获取到的fordblks。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getPss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用进程实际使用的物理内存大小。读取/proc/{pid}/smaps_rollup节点中的Pss与SwapPss值并求和。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getVss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用进程占用的虚拟内存大小。读取/proc/{pid}/statm节点中的size值（内存页数），vss = size * 页大小（4KB/页）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getSharedDirty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程的共享脏内存大小。读取/proc/{pid}/smaps_rollup节点中的Shared_Dirty值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getPrivateDirty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程的私有脏内存大小。读取/proc/{pid}/smaps_rollup中的Private_Dirty值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getAppNativeMemInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用进程内存信息。读取/proc/{pid}/smaps_rollup和/proc/{pid}/statm节点的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getAppNativeMemInfoAsync"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["异步方式获取应用进程内存信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getAppNativeMemInfoWithCache"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取应用进程内存信息（该接口存在缓存机制以提高接口性能）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getSystemMemInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统内存信息。读取/proc/meminfo节点的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getAppMemoryLimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用程序进程内存限制，其中rsslimit由getrlimit 接口获取到的RLIMIT_RSS资源值，vsslimit由getrlimit接口获取到的RLIMIT_AS资源值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明cc",
      children: "接口说明（C/C++）"
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
            children: "OH_HiDebug_GetSystemMemInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统内存信息。读取/proc/meminfo节点的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_GetAppNativeMemInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用进程内存信息。读取/proc/{pid}/smaps_rollup和/proc/{pid}/statm节点的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_GetAppNativeMemInfoWithCache"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取应用程序进程的内存信息，该接口存在缓存机制以提高性能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_GetAppMemoryLimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用程序进程内存限制，其中rsslimit由getrlimit 接口获取到的RLIMIT_RSS资源值，vsslimit由getrlimit接口获取到的RLIMIT_AS资源值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取显存信息",
      children: "获取显存信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug可获取应用占用的显存资源数据。在图形密集型应用中，显存管理至关重要，滥用显存资源将导致应用严重卡顿，影响用户体验。显存资源包括两部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "graph：进程统计的DMA内存占用，包括直接通过接口申请的DMA buffer和通过allocator_host申请的DMA buffer。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gl：RenderService渲染进程加载所需资源占用的内存，例如图片、纹理等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明arkts-1",
      children: "接口说明（ArkTS）"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "hidebug.getGraphicsMemory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用异步方式获取应用的显存总大小（graph + gl）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getGraphicsMemorySync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用同步方式获取应用的显存总大小（graph + gl）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getGraphicsMemorySummary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用异步方式获取应用程序的显存数据。  说明：从API version 21开始，支持该接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明cc-1",
      children: "接口说明（C/C++）"
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
            children: "OH_HiDebug_GetGraphicsMemory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取应用程序的显存总大小（graph + gl）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_GetGraphicsMemorySummary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取应用程序的显存数据。  说明：从API version 21开始，支持该接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取cpu使用率",
      children: "获取CPU使用率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发中，监控CPU使用率是性能分析的关键。为便于开发者优化应用性能，确保应用流畅运行，HiDebug模块提供了多个接口以获取CPU使用率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hiview进程每10秒获取一次当前CPU的运行数据并缓存，作为CPU使用率计算的基准，主要包括以下数据："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.系统CPU使用数据："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "/proc/stat节点包含了自系统启动以来CPU 运行数据的统计信息，可在终端中使用以下命令查看该节点信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cat  /proc/stat\ncpu  648079 547 703220 16994706 23006 101071 0 0 0 0\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU 指标字段含义："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU的统计信息从左到右分别代表以下含义（其中cpu为所有cpu运行数据的总和，单位：jiffies）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "user: 非低优先级进程（nice <= 0）所占用的用户态时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nice: 低优先级进程（nice > 0）所占用的用户态时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "system: 内核态时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "idle: 空闲时间（不包含 IO 等待时间）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "iowait: IO 等待时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "irq: 硬中断时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "softirq: 软中断时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "steal: 虚拟化环境中，运行在非该虚拟机内进程上的时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "guest: 操作系统运行虚拟机中非低优先进程（nice <= 0）的时间（已包含在user字段中）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "guest_nice: 操作系统运行虚拟机中低优先级进程（nice > 0）的时间（已包含在nice字段中）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.进程CPU使用数据/线程CPU使用数据："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 内核统计的进程cpu运行数据\nstruct ucollection_process_cpu_item {\n    int pid;\n    unsigned int thread_total;\n    unsigned long long min_flt;\n    unsigned long long maj_flt;\n    unsigned long long cpu_usage_utime; // 用户态CPU运行时长\n    unsigned long long cpu_usage_stime;// 内核态CPU运行时长\n    unsigned long long cpu_load_time;\n};\n// 内核统计的线程cpu运行数据\nstruct ucollection_thread_cpu_item {\n    int tid;\n    char name[16]; // 16 ：max length of thread name\n    unsigned long long cpu_usage_utime;// 用户态CPU运行时长\n    unsigned long long cpu_usage_stime;// 内核态CPU运行时长\n    unsigned long long cpu_load_time;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用接口，获取当前数据，计算与基准数据的增量，使用以下公式获取CPU使用率："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统CPU使用率："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(systemUsage增量 + niceUsage增量 + userUsage增量) /(userTime增量 + niceTime增量 + systemTime增量 + idleTime增量 + ioWaitTime增量 + irqTime增量 + softIrqTime增量)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程CPU使用率/线程CPU使用率 ："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(cpu_usage_utime增量 + cpu_usage_stime增量) /(ms级时间戳增量)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明arkts-2",
      children: "接口说明（ArkTS）"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "hidebug.getAppThreadCpuUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用线程的CPU使用率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getCpuUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用进程CPU使用率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getSystemCpuUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统CPU使用率。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明cc-2",
      children: "接口说明（C/C++）"
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
            children: "OH_HiDebug_GetSystemCpuUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统的CPU使用率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_GetAppCpuUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程的CPU使用率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_GetAppThreadCpuUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用所有线程CPU使用率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_FreeThreadCpuUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放通过OH_HiDebug_GetAppThreadCpuUsage接口获取到的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取vm信息",
      children: "获取VM信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug可用于获取VM内存数据、GC统计数据及VM堆转储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明arkts-3",
      children: "接口说明（ArkTS）"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "hidebug.getAppVMMemoryInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取VM内存相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getVMRuntimeStats"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取系统", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/gc-introduction",
              children: "GC"
            }), "统计信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getVMRuntimeStat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据参数获取指定的系统", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/gc-introduction",
              children: "GC"
            }), "统计信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.dumpJsRawHeapData"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用异步方式为当前线程转储虚拟机的原始堆快照，辅助", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-js-memleak-detection",
              children: "JS内存泄漏分析"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 18开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.setJsRawHeapTrimLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前进程转储虚拟机原始堆快照的裁剪级别。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.dumpJsHeapData"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用同步方式导出虚拟机堆，辅助", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-js-memleak-detection",
              children: "JS内存泄漏分析"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getAppMemoryLimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用程序进程内存限制，其中vmHeapLimit为当前线程对应的虚拟机堆大小限制，vmTotalHeapSize为当前进程所有虚拟机堆总和大小的限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getAppVMObjectUsedSize"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取当前虚拟机中ArkTS对象所占用的内存大小。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 21开始，支持该接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取应用trace记录信息",
      children: "获取应用Trace记录信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiTrace提供业务流程调用链跟踪的维测接口，帮助开发者获取指定业务流程调用链的运行日志，定位跨设备、跨进程、跨线程的故障问题。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro",
        children: "Trace性能跟踪"
      }), "。为了便于实现HiTrace的自动化采集，HiDebug模块提供了启动和停止HiTrace采集的接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明arkts-4",
      children: "接口说明（ArkTS）"
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
            children: "hidebug.startAppTraceCapture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动应用Trace采集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.stopAppTraceCapture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止应用Trace采集。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明cc-3",
      children: "接口说明（C/C++）"
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
            children: "OH_HiDebug_StartAppTraceCapture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动应用Trace采集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_StopAppTraceCapture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止应用Trace采集。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动虚拟机cpuprofiler采集",
      children: "启动虚拟机CpuProfiler采集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug提供了开启和停止VM虚拟机CpuProfiler采集的接口，帮助开发者实现CpuProfiler的自动采集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明arkts-5",
      children: "接口说明（ArkTS）"
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
            children: "hidebug.startJsCpuProfiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动虚拟机Profiling方法跟踪。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.stopJsCpuProfiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止虚拟机Profiling方法跟踪。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取调用栈",
      children: "获取调用栈"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取方法的调用栈信息对于调试和错误处理非常有用。调用栈信息帮助开发者了解方法的调用顺序和调用者的信息。HiDebug开放了获取调用栈信息的接口，便于开发者获取调用栈信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "栈回溯原理",
      children: "栈回溯原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ARM64架构函数栈帧的结构如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(117687)/* ["default"] */.A) + "",
        width: "4531",
        height: "4350"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FP：栈顶指针，指向一个栈帧的顶部，当函数发生跳转时，会记录当时的栈的起始位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SP：栈指针（也称为栈底指针），指向栈当前的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LR：保存函数返回的地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图，与FP相邻的地址分别保存了上一帧的FP地址和当前帧的函数返回地址。进行栈回溯时，通过函数返回地址解析上一帧的栈信息，并根据上一帧的FP地址，依次找出每个函数栈帧中存储的LR和FP地址。基于FP回栈的特性，在当前调用函数中只能获取当前函数的返回地址进行栈解析，因此无法获取当前函数的调用栈信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明cc-4",
      children: "接口说明（C/C++）"
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
            children: "OH_HiDebug_CreateBacktraceObject"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个用于栈回溯及栈解析的对象。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_DestroyBacktraceObject"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁OH_HiDebug_CreateBacktraceObject接口创建的用于栈回溯及栈解析对象。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_BacktraceFromFp"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取从给定的栈帧指针开始的回溯帧。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_SymbolicAddress"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过给定的程序计数器（PC）获取详细的符号信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "线程栈perf采集",
      children: "线程栈Perf采集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug提供了线程栈Perf采样功能。该接口通过周期性地采集线程的运行状态，以较低的性能开销，精准捕捉性能热点，与热点函数，并分析热点函数的调用链关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "采样栈规格",
      children: "采样栈规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perf采样结果部分示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tid: 52129, ThreadName: xample.perftest, Cputime: 3160ms, Count: 42\n42 #00 pc 00000000001e01e4 /system/lib/ld-musl-aarch64.so.1(start+244)(de6b25d6d992bac030d72713568dfb59)\n  42 #01 pc 000000000003682c /system/lib64/module/libtaskpool.z.so(Commonlibrary::Concurrent::TaskPoolModule::TaskRunner::TaskInnerRunner::Run()+76)(40aaf52f6b737f011eed52936860111f)\n    42 #02 pc 000000000003b428 /system/lib64/module/libtaskpool.z.so(Commonlibrary::Concurrent::TaskPoolModule::Worker::ExecuteInThread(void const*)+460)(40aaf52f6b737f011eed52936860111f)\n      42 #03 pc 0000000000018794 /system/lib64/platformsdk/libuv.so(uv_run+420)(eed416babeadbcffb483fd111b5effe6)\n        42 #04 pc 0000000000029bec /system/lib64/platformsdk/libuv.so(uv__io_poll+1060)(eed416babeadbcffb483fd111b5effe6)\n          42 #05 pc 0000000000018180 /system/lib64/platformsdk/libuv.so(uv__async_io+364)(eed416babeadbcffb483fd111b5effe6)\n            42 #06 pc 000000000003c724 /system/lib64/module/libtaskpool.z.so(Commonlibrary::Concurrent::TaskPoolModule::Worker::PerformTask(uv_async_s const*)+1408)(40aaf52f6b737f011eed52936860111f)\n              42 #07 pc 00000000000540e0 /system/lib64/platformsdk/libace_napi.z.so(napi_call_function+184)(61530eabcb1b8bae5c105ebcb2151bc1)\n                42 #08 pc 000000000078fab8 /system/lib64/platformsdk/libark_jsruntime.so(panda::FunctionRef::CallForNapi(panda::ecmascript::EcmaVM const*, panda::JSValueRef*, panda::JSValueRef* const*, int)+940)(bc704f4139f03a59a1d34448f7b59fd0)\n                  42 #09 pc 00000000001e5170 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::InterpreterAssembly::Execute(panda::ecmascript::EcmaRuntimeCallInfo*)+268)(bc704f4139f03a59a1d34448f7b59fd0)\n                    42 #10 at AddThread (entry|entry|1.0.0|src/main/ets/pages/Index.ts:13:21)\n                      42 #11 pc 00000000004494b0 /system/lib64/module/arkcompiler/stub.an(BCStub_HandleCallthis2Imm8V8V8V8StwCopy+396)\n                        42 #12 pc 0000000000de3efc /system/lib64/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+44)\n                          42 #13 pc 000000000005ad2c /system/lib64/platformsdk/libace_napi.z.so(panda::JSValueRef ArkNativeFunctionCallBack<true>(panda::JsiRuntimeCallInfo*)+224)(61530eabcb1b8bae5c105ebcb2151bc1)\n                            42 #14 pc 000000000000a498 /data/storage/el1/bundle/libs/arm64/libentry.so(94ed3a52d7ef751a94358709d11c99545960cdd4)\n                              41 #15 pc 000000000000a228 /data/storage/el1/bundle/libs/arm64/libentry.so(TestMyFunc()+120)(94ed3a52d7ef751a94358709d11c99545960cdd4)\n                              1 #15 pc 000000000000a21c /data/storage/el1/bundle/libs/arm64/libentry.so(TestMyFunc()+108)(94ed3a52d7ef751a94358709d11c99545960cdd4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中首行内容为线程号、线程名称、接口调用过程中目标线程占用的CPU时间（由于接口本身存在性能消耗，该值会略大于实际采样期间的CPU占用时间），以及该线程采样次数。由于硬件缺乏对应的能力，以及任务调度的不确定性影响，实际采样时无法保证单位时间的采样次数都是一致的。所以只能通过前一次触发的采样时间和采样次数，来动态调整下一周期的采样参数，使总时间内的实际采样次数尽可能地接近于理论采样次数（采样频率HZ * 采样时间ms * 单位转换1s/1000ms）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除首行内容外每一行表示一个栈信息，每一行栈帧信息所表示的意义可以按如下方式解读："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "native帧格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "41 #15 pc 000000000000a228 /data/storage/el1/bundle/libs/arm64/libentry.so(TestMyFunc()+120)(94ed3a52d7ef751a94358709d11c99545960cdd4)\n^   ^       ^                                                      ^              ^                   ^\n1   2       3                                                      4              5                   6\n\n1 表示采样到此帧的次数，该值小于或等于线程采样次数。\n2 表示帧的调用层级，行缩进大小与该层级对应，当前层级的采样次数为下一层级的采样次数之和。\n3 为native帧PC值。\n4 表示调用的文件路径。\n5 调用的函数名及代码行偏移。\n6 so文件md5值。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS帧格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "42 #10 at AddThread (entry|entry|1.0.0|src/main/ets/pages/Index.ts:13:21)\n^   ^         ^                                             ^\n1   2         3                                             4\n\n1 表示采样到此帧的次数，与native帧意义相同。\n2 表示帧的调用层级，与native帧意义相同。\n3 表示调用函数名。\n4 表示调用函数所在的路径，文件及行列号。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(46062)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用Perf进行内核栈回溯采样时，采样栈深度小于50，且需借助帧指针（frame-pointer）。若采集的调用栈在三方库中中断，请检查对应的三方库是否开启栈指针功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明cc-5",
      children: "接口说明（C/C++）"
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
            children: "OH_HiDebug_RequestThreadLiteSampling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["申请线程栈采样。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 22开始，支持该接口。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置资源泄漏检测阈值",
      children: "设置资源泄漏检测阈值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiDebug提供设置系统资源泄漏检测阈值的接口，开发者可根据业务需求自定义资源泄漏事件触发的阈值。此接口主要用于辅助内存泄漏检测和功能开发，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines",
        children: "资源泄漏检测"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明arkts-6",
      children: "接口说明（ArkTS）"
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
            children: "hidebug.setAppResourceLimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置应用的fd数量、线程数量、js内存或者native内存等资源触发资源泄漏检测事件的阈值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "管理gwp-asan",
      children: "管理GWP-ASan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiDebug提供了启停", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-gwpasan-detection",
        children: "GWP-ASan"
      }), "使能和查询使能天数的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明arkts-7",
      children: "接口说明（ArkTS）"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "hidebug.enableGwpAsanGrayscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使能GWP-ASan，用于检测堆内存使用中的非法行为。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.disableGwpAsanGrayscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["停止使能GWP-ASan。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getGwpAsanGrayscaleState"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取当前GWP-ASan剩余使能天数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加维测信息到崩溃日志中",
      children: "添加维测信息到崩溃日志中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug提供添加维测信息的接口，开发者可根据业务需要将维测信息添加到崩溃日志中，若程序发生崩溃，可在崩溃日志中找到该维测信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明cc-6",
      children: "接口说明（C/C++）"
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
            children: "OH_HiDebug_SetCrashObj"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将维测信息添加到崩溃日志中，与OH_HiDebug_ResetCrashObj配对使用。若程序在OH_HiDebug_SetCrashObj与OH_HiDebug_ResetCrashObj之间发生崩溃，会将OH_HiDebug_SetCrashObj设置的维测信息添加到记录本次崩溃的日志中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 23开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiDebug_ResetCrashObj"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将维测信息对象还原到OH_HiDebug_SetCrashObj之前的状态，与OH_HiDebug_SetCrashObj配对使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 23开始，支持该接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "其他",
      children: "其他"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug提供了获取应用调试状态和启动系统进程DUMP信息采集等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明arkts-8",
      children: "接口说明（ArkTS）"
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
            children: "hidebug.isDebugState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用进程被调试状态。如果应用进程的Ark层或Native层处于调试状态，返回true；否则返回false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hidebug.getServiceDump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统服务的DUMP信息，仅系统应用可调用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在使用OH_HiDebug_StartAppTraceCapture和startAppTraceCapture接口抓取HiTrace日志时，接口返回路径为设备内物理路径"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口返回的路径为设备内的真实物理路径，如需要在应用内访问，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-sandbox-directory#%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1%E8%B7%AF%E5%BE%84%E5%92%8C%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E8%B7%AF%E5%BE%84%E7%9A%84%E5%AF%B9%E5%BA%94%E5%85%B3%E7%B3%BB",
        children: "应用沙箱路径和真实物理路径的对应关系"
      }), "，需将真实物理路径转化为沙箱路径。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：/data/app/el2/100/log/com.example.myapplication/trace/com.example.myapplication_20250604_173158.trace -> /data/storage/el2/log/trace/com.example.myapplication_20250604_173158.trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在使用OH_HiDebug_GetAppThreadCpuUsage与getAppThreadCpuUsage接口获取线程CPU使用率时，新创建线程的使用率为0"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于CPU使用率的计算方式，需要同时获取当前CPU运行统计数据和hiview每10秒周期性刷新的计算基准值。由于新创建的线程没有计算基准值，导致CPU使用率无法计算，默认返回0。"
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
117687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798850-1e415e11f2e112990175bbdc3c05cbfd.png");

},
46062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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