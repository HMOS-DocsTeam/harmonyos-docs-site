"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["975339"], {
197748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hitracemeter_hitracemeter_view_hitracemeter_view_md_13e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hitracemeter-hitracemeter-view-hitracemeter-view-md-13e.json
var site_docs_system_debug_optimize_performance_analysis_kit_hitracemeter_hitracemeter_view_hitracemeter_view_md_13e_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view/hitracemeter-view","title":"查看HiTraceMeter日志","description":"通过DevEco Studio可视化界面查看","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view/hitracemeter-view.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view","slug":"/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"查看HiTraceMeter日志","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter-view","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HiTraceMeter跟踪性能（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-ndk/"},"next":{"title":"HiTraceChain介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view/hitracemeter-view.md


const frontMatter = {
	title: '查看HiTraceMeter日志',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter-view',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '查看HiTraceMeter日志';

const assets = {

};



const toc = [{
  "value": "通过DevEco Studio可视化界面查看",
  "id": "通过deveco-studio可视化界面查看",
  "level": 2
}, {
  "value": "通过命令行工具查看",
  "id": "通过命令行工具查看",
  "level": 2
}, {
  "value": "用户态trace格式说明",
  "id": "用户态trace格式说明",
  "level": 2
}, {
  "value": "当前版本用户态trace格式",
  "id": "当前版本用户态trace格式",
  "level": 3
}, {
  "value": "字段说明",
  "id": "字段说明",
  "level": 3
}, {
  "value": "字段扩展规则",
  "id": "字段扩展规则",
  "level": 3
}, {
  "value": "各场景trace日志样例",
  "id": "各场景trace日志样例",
  "level": 3
}, {
  "value": "字段为空情况说明",
  "id": "字段为空情况说明",
  "level": 3
}, {
  "value": "HiTraceMeter Tag",
  "id": "hitracemeter-tag",
  "level": 3
}, {
  "value": "HiTraceOutputLevel",
  "id": "hitraceoutputlevel",
  "level": 3
}, {
  "value": "API version 19前用户态trace格式",
  "id": "api-version-19前用户态trace格式",
  "level": 3
}, {
  "value": "API version 19前各场景trace日志样例",
  "id": "api-version-19前各场景trace日志样例",
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
        id: "查看hitracemeter日志",
        children: "查看HiTraceMeter日志"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过deveco-studio可视化界面查看",
      children: "通过DevEco Studio可视化界面查看"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用DevEco Studio Profiler工具可以可视化展示HiTraceMeter日志内容，分析应用或服务的CPU使用率和线程运行状态，查看指定时间段内程序在CPU上的执行耗时。具体使用指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-cpu",
        children: "CPU活动分析"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过命令行工具查看",
      children: "通过命令行工具查看"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据hdc命令行工具指导，完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
            children: "hdc环境准备"
          }), "，确保可以使用“hdc shell”命令正常连接设备。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在DevEco Studio Terminal窗口或主机命令行窗口执行“hdc shell”命令连接设备，然后在设备上执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hitrace",
            children: "hitrace"
          }), "命令，开启HiTraceMeter日志抓取服务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PS D:\\xxx\\xxx> hdc shell\n$ hitrace --trace_begin app\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备上运行包含HiTraceMeter打点的相关程序。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用hitrace命令行工具采集文本格式trace信息，将trace文件保存到设备/data/local/tmp/路径下，具体流程可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hitrace#%E5%BF%AB%E7%85%A7%E6%A8%A1%E5%BC%8F%E6%8D%95%E8%8E%B7%E6%96%87%E6%9C%AC%E6%A0%BC%E5%BC%8Ftrace",
            children: "快照模式捕获文本格式trace"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出设备，进入主机，导出设备中的HiTraceMeter文本日志到当前目录（下面命令中的trace.ftrace根据采集时设置的文件名修改）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ exit\nPS D:\\xxx\\xxx> hdc file recv /data/local/tmp/trace.ftrace ./\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在HiTraceMeter文本日志中搜索打点名称等关键字，查看打点是否成功。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HiTraceMeter支持文本日志的可视化分析。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在DevEco Studio中导入日志进行分析。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在DevEco Studio Profiler的会话区选择“Open File”，将HiTraceMeter文本日志导入DevEco Studio。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["具体分析可参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-insight-session-cpu",
                children: "CPU活动分析"
              }), "文档。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://gitcode.com/openharmony/developtools_smartperf_host/blob/master/smartperf_host/README_zh.md",
                children: "Smartperf_Host"
              }), "工具进行分析。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户态trace格式说明",
      children: "用户态trace格式说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hitrace",
        children: "hitrace"
      }), "命令采集用户通过HiTraceMeter接口生成的用户态trace日志，从而对应用进行性能分析。本章节将详细介绍用户态trace的格式和扩展规则，包括同步、异步和整数值跟踪等类型。每种trace的字段组成、含义及与打点入参的关系都会逐一说明，并提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%90%84%E5%9C%BA%E6%99%AFtrace%E6%97%A5%E5%BF%97%E6%A0%B7%E4%BE%8B",
        children: "具体样例"
      }), "供参考。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 19及以上版本的用户态trace格式参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BD%93%E5%89%8D%E7%89%88%E6%9C%AC%E7%94%A8%E6%88%B7%E6%80%81trace%E6%A0%BC%E5%BC%8F",
        children: "当前版本用户态trace格式"
      }), "，API version 19以下版本的用户态trace格式参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#api-version-19%E5%89%8D%E7%94%A8%E6%88%B7%E6%80%81trace%E6%A0%BC%E5%BC%8F",
        children: "API version 19前用户态trace格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "当前版本用户态trace格式",
      children: "当前版本用户态trace格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "同步跟踪"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开始trace格式：[类型标识符]|[进程号]|H:[分布式跟踪链路ID]#[内容]|[级别与所属Tag集合]|[自定义键值对]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结束trace格式：[类型标识符]|[进程号]|[级别与所属Tag集合]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一条完整的同步跟踪包括一个开始trace和一个结束trace，开始trace的类型标识符固定为B，结束trace的类型标识符固定为E。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "异步跟踪"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "起始trace格式：[类型标识符]|[进程号]|H:[分布式跟踪链路ID]#[内容]|[异步任务ID]|[级别与所属Tag集合]|[自定义聚类名称]|[自定义键值对]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结束trace格式：[类型标识符]|[进程号]|H:[分布式跟踪链路ID]#[内容]|[异步任务ID]|[级别与所属Tag集合]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一条完整的异步跟踪也同样包含一个开始trace和一个结束trace，开始trace的类型标识符固定为S，结束trace的类型标识符固定为F。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "整数值跟踪"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "trace格式：[类型标识符]|[进程号]|H:[分布式跟踪链路ID]#[内容]|[整数值]|[级别与所属Tag集合]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一条整数值跟踪trace仅包含一条独立trace，其中trace的类型标识符固定为C。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211713)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["一条有效且完整的同步跟踪trace与异步跟踪trace，均包含一条起始trace和一条结束trace，开发者需要保证接口调用的匹配性，否则会导致性能跟踪异常问题。具体可参考ArkTS接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
          children: "@ohos.hiTraceMeter (性能打点)"
        }), "或C++接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-trace-h/capi-trace-h",
          children: "trace.h"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户态trace总长度限制512字符，超过部分将被截断。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字段说明",
      children: "字段说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本小节将详细介绍用户态trace的各个字段，包括字段组成、含义，字段与打点入参之间的关系，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
        children: "@ohos.hiTraceMeter (性能打点)"
      }), "作为参考。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "类型标识符"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["类型标识符与调用的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
            children: "@ohos.hiTraceMeter (性能打点)"
          }), "具体接口相关，其映射关系如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B：开启一个同步时间片跟踪事件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "E：结束一个同步时间片跟踪事件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "S：开启一个异步时间片跟踪事件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "F：结束一个异步时间片跟踪事件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C：整数跟踪事件。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "分布式跟踪链路ID"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开启HiTraceChain（分布式跟踪）时，会将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hitrace-hitraceid/capi-hitrace-hitraceid",
            children: "HiTraceId"
          }), "核心信息记录在trace打点中，格式为[ChainId,SpanId,ParentSpanId]，结尾使用#分隔符与内容字段区分。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "未开启HiTraceChain（分布式跟踪）时，打点不包含该字段。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ChainId：HiTraceId的跟踪链标识。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SpanId：HiTraceId的分支标识。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ParentSpanId：HiTraceId的父分支标识。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HiTraceChain具体使用指导请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-arkts",
            children: "使用HiTraceChain打点（ArkTS）"
          }), "与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-ndk",
            children: "使用HiTraceChain打点（C/C++）"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "内容"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["表示打点名称或整数变量名。对应", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
            children: "@ohos.hiTraceMeter (性能打点)"
          }), "接口的name入参。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "异步任务ID"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["和内容字段合并用于匹配相同的异步跟踪trace的开始与结束打点。对应", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
            children: "@ohos.hiTraceMeter (性能打点)"
          }), "接口的taskId入参。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "整数值"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["仅在整数值跟踪trace中包含，为跟踪的整数值。对应", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
            children: "@ohos.hiTraceMeter (性能打点)"
          }), "接口的count入参。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "级别与所属Tag集合"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本字段由级别和所属Tag集合两部分信息组成。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过打点接口传入的级别信息，该部分为以下字符之一：D、I、C、M。对应", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
            children: "@ohos.hiTraceMeter (性能打点)"
          }), "接口的level入参，详细介绍及映射关系参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#hitraceoutputlevel",
            children: "HiTraceOutputLevel"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "所属Tag集合表示trace打点所属Tag类别，每类用两位数字表示，可包含多个从小到大排列的两位数字。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["例如B|1314|H:TestFunction|I3062，其中I表示该条打点级别为Info，3062表示该条打点所属Tag集合，根据Tag名称与值的映射关系，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#hitracemeter-tag",
            children: "HiTraceMeter Tag"
          }), "可知30对应ohosTag，62对应appTag。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(26777)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于API version 19及之后接口，支持自定义输出级别；对于API version 18及之前接口，trace打点默认为COMMERCIAL级别打点。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["系统侧存在一条用户态trace隶属于多个Tag的情况，ArkTS接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
              children: "@ohos.hiTraceMeter (性能打点)"
            }), "和C++接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-trace-h/capi-trace-h",
              children: "trace.h"
            }), "提供的应用侧用户态trace打点功能无法指定所属Tag集合，对应Tag分类固定为app，字段值为62。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自定义聚类名称"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可用于开发者自定义的聚类操作。对应", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
            children: "@ohos.hiTraceMeter (性能打点)"
          }), "接口的customCategory入参。该字段值可能为空，从而使得日志格式发生变化，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%AD%97%E6%AE%B5%E4%B8%BA%E7%A9%BA%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E",
            children: "字段为空情况说明"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在trace可视化工具中，同一进程中相同聚类名称的异步打点放在同一泳道上进行展示。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自定义键值对"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["格式为key=value，多个键值对使用逗号分隔，例如key1=value1,key2=value2。对应", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
            children: "@ohos.hiTraceMeter (性能打点)"
          }), "接口的customArgs入参。该字段值可能为空，从而使得日志格式发生变化，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%AD%97%E6%AE%B5%E4%B8%BA%E7%A9%BA%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E",
            children: "字段为空情况说明"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在trace可视化工具中，对满足格式要求的自定义键值对，以键值对形式展示解析结果。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字段扩展规则",
      children: "字段扩展规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 19及后续版本的新增字段，均以", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "竖线+字段"
        })
      }), "的方式，追加在当前用户态trace格式的末尾。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "各场景trace日志样例",
      children: "各场景trace日志样例"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "打点类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开启HiTraceChain时格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "未开启HiTraceChain时格式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始同步trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束同步trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始异步trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束异步trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "整数trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述trace日志样例中，进程号均为1234，打点内容均为tracename，级别均为M，代表COMMERCIAL级别，所属Tag集合均为62，仅包含一个Tag，对应的Tag名称为app。在开启HiTraceChain情况下，分布式跟踪链路ID为[a92ab94c18e1341,0,0]。同步trace与异步trace跟踪的自定义键值对均为user=root,type=2，其中异步trace打点的异步任务ID为428，自定义聚类名称为appcategory01。整数值跟踪的跟踪值为5678。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(105052)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户态trace总长度限制为512字符，建议内容、自定义聚类名称和自定义键值对参数总长度不超过420字符，避免被截断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字段为空情况说明",
      children: "字段为空情况说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果用户态trace格式中间字段对应接口参数传入内容为空，用户态trace格式将保留|分隔符，如果尾部字段为空，用户态trace格式将不保留|分隔符。以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter#hitracemeterstartasynctrace19",
        children: "hiTraceMeter.startAsyncTrace()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter#hitracemeterstartsynctrace19",
        children: "hiTraceMeter.startSyncTrace()"
      }), "接口的自定义聚类名称和自定义键值对参数为例，对应的格式参考如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始同步trace打点。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "自定义键值对字段不为空字符串。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "B|[进程号]|H:[分布式跟踪链路ID]#[内容]|[级别与所属Tag集合]|[自定义键值对]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "自定义键值对字段为空字符串。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "B|[进程号]|H:[分布式跟踪链路ID]#[内容]|[级别与所属Tag集合]\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始异步trace打点。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "自定义聚类名称和自定义键值对字段均不为空字符串。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "S|[进程号]|H:[分布式跟踪链路ID]#[内容]|[异步任务ID]|[级别与所属Tag集合]|[自定义聚类名称]|[自定义键值对]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "自定义聚类名称字段为空字符串，自定义键值对字段不为空字符串。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "S|[进程号]|H:[分布式跟踪链路ID]#[内容]|[异步任务ID]|[级别与所属Tag集合]||[自定义键值对]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "自定义聚类名称字段不为空字符串，自定义键值对字段为空字符串。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "S|[进程号]|H:[分布式跟踪链路ID]#[内容]|[异步任务ID]|[级别与所属Tag集合]|[自定义聚类名称]\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "自定义聚类名称和自定义键值对字段均为空字符串。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "S|[进程号]|H:[分布式跟踪链路ID]#[内容]|[异步任务ID]|[级别与所属Tag集合]\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hitracemeter-tag",
      children: "HiTraceMeter Tag"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下为HitraceMeter用户态Tag集合，其中Tag值为实际代码层面基于数字1的左移值。用户态Tag释义可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hitrace#%E6%9F%A5%E7%9C%8Bhitrace%E5%8C%85%E5%90%AB%E7%9A%84tag",
        children: "hitrace"
      }), "命令行工具查看，其中always和commercial分别为系统侧默认常开Tag和商用版本场景定制Tag。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tag名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "代码层常量值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tag值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commercial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "07"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "09"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "virse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "musl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceauth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commonlibrary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hdcd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "interconn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dlpcre"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accesscontrol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nweb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "huks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useriam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "daudio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dlsm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filemanagement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zcamera"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zmedia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zimage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zaudio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributeddatamgr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mdfs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "graphic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "misc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "41"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multimodalinput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "msdp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dsoftbus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rpc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "46"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "47"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dscreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dcamera"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dhfwk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gresource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "devicemanager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "54"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "samgr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 56"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dsched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "57"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceprofile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 58"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "58"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dinput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bluetooth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 61"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "61"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1ULL << 62"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "62"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hitraceoutputlevel",
      children: "HiTraceOutputLevel"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "trace输出级别枚举名称（C/C++）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "trace输出级别枚举名称（ArkTS）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "trace级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HITRACE_LEVEL_DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HITRACE_LEVEL_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HITRACE_LEVEL_CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HITRACE_LEVEL_COMMERCIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMERCIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-version-19前用户态trace格式",
      children: "API version 19前用户态trace格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "同步跟踪"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开始trace格式：[类型标识符]|[进程号]|H:[分布式跟踪链路ID]#[内容]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结束trace格式：[类型标识符]|[进程号]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "异步跟踪"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开始trace格式：[类型标识符]|[进程号]|H:[分布式跟踪链路ID]#[内容] [异步任务ID]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结束trace格式：[类型标识符]|[进程号]|H:[分布式跟踪链路ID]#[内容] [异步任务ID]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "整数值跟踪"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "trace格式：[类型标识符]|[进程号]|H:[分布式跟踪链路ID]#[内容] [整数值]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(353144)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步跟踪trace的开始trace格式与结束trace格式一样。需要注意的是 API version 19以前的版本，异步跟踪trace的异步任务ID字段、整数值跟踪的整数值字段与内容字段使用空格进行分隔。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-version-19前各场景trace日志样例",
      children: "API version 19前各场景trace日志样例"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "打点类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开启HiTraceChain时格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "未开启HiTraceChain时格式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始同步trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束同步trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始异步trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束异步trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "整数值跟踪trace打点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1234"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述trace日志样例中，进程号为1234，打点内容均为tracename。开启HiTraceChain情况下，分布式跟踪链路ID为[a92ab94c18e1341,0,0]。其中异步trace打点的异步任务ID为428，整数值跟踪的跟踪值为5678。"
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
353144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
105052(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
26777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
211713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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