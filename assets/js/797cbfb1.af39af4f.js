"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["606551"], {
32587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_arkts_js_apis_hitracemeter_js_apis_hitracemeter_md_797_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-debug-optimize-api-performance-analysis-api-performance-analysis-arkts-js-apis-hitracemeter-js-apis-hitracemeter-md-797.json
var site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_arkts_js_apis_hitracemeter_js_apis_hitracemeter_md_797_namespaceObject = JSON.parse('{"id":"system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter","title":"@ohos.hiTraceMeter (性能打点)","description":"本模块提供了跟踪进程轨迹，度量程序执行性能的打点能力。本模块打点的数据供hiTraceMeter工具分析使用。","source":"@site/docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter.md","sourceDirName":"system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter","slug":"/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"@ohos.hiTraceMeter (性能打点)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hitracemeter","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-hitracemeter"},"sidebar":"ref","previous":{"title":"@ohos.hiTraceChain (分布式跟踪)","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain/js-apis-hitracechain"},"next":{"title":"@ohos.hiviewdfx.FaultLogExtensionAbility (故障延迟通知)","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensionability/js-apis-hiviewdfx-faultlogextensionability"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter.md


const frontMatter = {
	title: '@ohos.hiTraceMeter (性能打点)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hitracemeter',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-hitracemeter'
};
const contentTitle = '@ohos.hiTraceMeter (性能打点)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "hiTraceMeter.startTrace",
  "id": "hitracemeterstarttrace",
  "level": 2
}, {
  "value": "hiTraceMeter.finishTrace",
  "id": "hitracemeterfinishtrace",
  "level": 2
}, {
  "value": "hiTraceMeter.traceByValue",
  "id": "hitracemetertracebyvalue",
  "level": 2
}, {
  "value": "HiTraceOutputLevel19+",
  "id": "hitraceoutputlevel19",
  "level": 2
}, {
  "value": "hiTraceMeter.startAsyncTrace19+",
  "id": "hitracemeterstartasynctrace19",
  "level": 2
}, {
  "value": "hiTraceMeter.finishAsyncTrace19+",
  "id": "hitracemeterfinishasynctrace19",
  "level": 2
}, {
  "value": "hiTraceMeter.startSyncTrace19+",
  "id": "hitracemeterstartsynctrace19",
  "level": 2
}, {
  "value": "hiTraceMeter.finishSyncTrace19+",
  "id": "hitracemeterfinishsynctrace19",
  "level": 2
}, {
  "value": "hiTraceMeter.traceByValue19+",
  "id": "hitracemetertracebyvalue19",
  "level": 2
}, {
  "value": "hiTraceMeter.isTraceEnabled19+",
  "id": "hitracemeteristraceenabled19",
  "level": 2
}, {
  "value": "TraceEventListener22+",
  "id": "traceeventlistener22",
  "level": 2
}, {
  "value": "hiTraceMeter.registerTraceListener22+",
  "id": "hitracemeterregistertracelistener22",
  "level": 2
}, {
  "value": "hiTraceMeter.unregisterTraceListener22+",
  "id": "hitracemeterunregistertracelistener22",
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
        id: "ohoshitracemeter-性能打点",
        children: "@ohos.hiTraceMeter (性能打点)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供了跟踪进程轨迹，度量程序执行性能的打点能力。本模块打点的数据供hiTraceMeter工具分析使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细开发流程请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-arkts",
        children: "使用HiTraceMeter跟踪性能（ArkTS）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667115)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议使用API version 19的性能打点接口，后续性能打点接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterstarttrace",
        children: "startTrace()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterfinishtrace",
        children: "finishTrace()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemetertracebyvalue",
        children: "traceByValue()"
      }), "将逐步废弃。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["性能打点接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterstarttrace",
        children: "startTrace()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterfinishtrace",
        children: "finishTrace()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemetertracebyvalue",
        children: "traceByValue()"
      }), "无法指定跟踪输出级别，默认均为COMMERCIAL级别性能打点。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view#%E7%94%A8%E6%88%B7%E6%80%81trace%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E",
        children: "用户态trace格式"
      }), "使用竖线 | 作为分隔符，所以通过性能打点接口传递的字符串类型参数应避免包含该字符，防止trace解析异常。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view#%E7%94%A8%E6%88%B7%E6%80%81trace%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E",
        children: "用户态trace"
      }), "总长度限制512字符，超过的部分将会被截断。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hiTraceMeter } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemeterstarttrace",
      children: "hiTraceMeter.startTrace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startTrace(name: string, taskId: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记一个异步跟踪耗时任务的开始。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果有多个相同name的任务需要跟踪或者对同一个任务要跟踪多次，并且任务同时被执行，则开发者每次调用startTrace传入的taskId需不同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果具有相同name的任务是串行执行的，则taskId可以相同。具体示例可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterfinishtrace",
        children: "finishTrace()"
      }), "中的示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterstartasynctrace19",
        children: "startAsyncTrace()"
      }), "接口（需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterfinishasynctrace19",
        children: "finishAsyncTrace()"
      }), "接口配套使用），以便分级控制跟踪输出与跟踪聚类。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要跟踪的任务名称。  由于单条trace记录的总长度限制为512Byte，超出部分将被截断，建议该参数的长度不要超过420Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "taskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务id。  用来区分具有相同名称的多个不同的任务，需确保并发执行的同名任务之间的任务id具有唯一性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hiTraceMeter.startTrace(\"myTestFunc\", 1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemeterfinishtrace",
      children: "hiTraceMeter.finishTrace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "finishTrace(name: string, taskId: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记一个异步跟踪耗时任务的结束。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["finishTrace的name和taskId必须与流程开始的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterstarttrace",
        children: "startTrace()"
      }), "对应参数值一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterfinishasynctrace19",
        children: "finishAsyncTrace()"
      }), "接口（需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterstartasynctrace19",
        children: "startAsyncTrace()"
      }), "接口配套使用）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要跟踪的任务名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "taskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务id。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 跟踪并行执行的同名任务\nhiTraceMeter.startTrace(\"myTestFunc\", 1);\n// 业务流程......\nhiTraceMeter.startTrace(\"myTestFunc\", 2);  // 第二个跟踪的任务开始，同时第一个跟踪的同名任务还没结束，出现了并行执行，对应接口的taskId需要不同\n// 业务流程......\nhiTraceMeter.finishTrace(\"myTestFunc\", 1);\n// 业务流程......\nhiTraceMeter.finishTrace(\"myTestFunc\", 2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 跟踪串行执行的同名任务\nhiTraceMeter.startTrace(\"myTestFunc\", 1);\n// 业务流程......\nhiTraceMeter.finishTrace(\"myTestFunc\", 1);  // 第一个跟踪的任务结束\n// 业务流程......\nhiTraceMeter.startTrace(\"myTestFunc\", 1);   // 第二个跟踪的同名任务开始，同名的待跟踪任务串行执行。\n// 业务流程......\nhiTraceMeter.finishTrace(\"myTestFunc\", 1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemetertracebyvalue",
      children: "hiTraceMeter.traceByValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "traceByValue(name: string, count: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用来标记一个跟踪的整数变量，该变量的数值会不断变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemetertracebyvalue19",
        children: "traceByValue19+()"
      }), "接口，以便分级控制跟踪输出。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要跟踪的整数变量名称。  由于单条trace记录的总长度限制为512Byte，超出部分将被截断，建议该参数的长度不要超过420Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整数变量的值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let traceCount = 3;\nhiTraceMeter.traceByValue(\"myTestCount\", traceCount);  // 使用trace打点记录myTestCount的值。\ntraceCount = 4;\nhiTraceMeter.traceByValue(\"myTestCount\", traceCount);  // 当myTestCount发生变化时，记录新值。\n// 业务流程......\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitraceoutputlevel19",
      children: "HiTraceOutputLevel19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，跟踪输出级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "低于系统跟踪输出级别阈值的打点将不会生效。log版本阈值为INFO；nolog版本阈值为COMMERCIAL。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅用于调试的输出级别，优先级最低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于log版本的输出级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于log版本的输出级别，优先级高于INFO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMMERCIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于nolog版本的输出级别，优先级最高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMERCIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出级别范围限制，MAX = COMMERCIAL。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemeterstartasynctrace19",
      children: "hiTraceMeter.startAsyncTrace19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: number, customCategory: string, customArgs?: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记一个异步跟踪耗时任务的开始，分级控制跟踪输出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果有多个相同name的任务需要跟踪或者对同一个任务要跟踪多次，并且任务同时被执行，则开发者每次调用startAsyncTrace传入的taskId需不同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果具有相同name的任务是串行执行的，则taskId可以相同。具体示例可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterfinishasynctrace19",
        children: "finishAsyncTrace()"
      }), "中的示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceoutputlevel19",
              children: "HiTraceOutputLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪输出级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要跟踪的任务名称。  由于单条trace记录的总长度限制为512Byte，超出部分将被截断，建议name、customCategory、customArgs的长度之和不要超过420Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "taskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务id。  用来区分具有相同名称的多个不同的任务，需确保并发执行的同名任务之间的任务id具有唯一性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "customCategory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义聚类名称，用于聚合同一类异步跟踪打点。  由于单条trace记录的总长度限制为512Byte，超出部分将被截断，建议name、customCategory、customArgs的长度之和不要超过420Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "customArgs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义键值对，格式key=value，多个键值对用逗号分隔，默认为空字符串。  由于单条trace记录的总长度限制为512Byte，超出部分将被截断，建议name、customCategory、customArgs的长度之和不要超过420Byte。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 不需要customCategory参数时，可传入空字符串\n// 不需要customArgs参数时，可不传入该参数或传入空字符串\nconst COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;\nhiTraceMeter.startAsyncTrace(COMMERCIAL, \"myTestFunc\", 1, \"\", \"\");\nhiTraceMeter.startAsyncTrace(COMMERCIAL, \"myTestFunc\", 2, \"\");\n// 多个键值对用逗号分隔\nhiTraceMeter.startAsyncTrace(COMMERCIAL, \"myTestFunc\", 3, \"categoryTest\", \"key1=value\");\nhiTraceMeter.startAsyncTrace(COMMERCIAL, \"myTestFunc\", 4, \"categoryTest\", \"key1=value1,key2=value2\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemeterfinishasynctrace19",
      children: "hiTraceMeter.finishAsyncTrace19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "finishAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记一个异步跟踪耗时任务的结束，分级控制跟踪输出。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["finishAsyncTrace的level、name和taskId必须与流程开始的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterstartasynctrace19",
        children: "startAsyncTrace()"
      }), "对应参数值一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceoutputlevel19",
              children: "HiTraceOutputLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪输出级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要跟踪的任务名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "taskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务id。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;\nhiTraceMeter.finishAsyncTrace(COMMERCIAL, \"myTestFunc\", 1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;\n// 跟踪并行执行的同名任务\n// 第一个跟踪的任务开始\nhiTraceMeter.startAsyncTrace(COMMERCIAL, \"myTestFunc\", 1, \"categoryTest\", \"key=value\");\n// 业务流程......\n// 第二个跟踪的任务开始，同时第一个跟踪的同名任务还没结束，出现了并行执行，对应接口的taskId需要不同\nhiTraceMeter.startAsyncTrace(COMMERCIAL, \"myTestFunc\", 2, \"categoryTest\", \"key=value\");\n// 业务流程......\n// 第一个跟踪的任务结束\nhiTraceMeter.finishAsyncTrace(COMMERCIAL, \"myTestFunc\", 1);\n// 业务流程......\n// 第二个跟踪的任务结束\nhiTraceMeter.finishAsyncTrace(COMMERCIAL, \"myTestFunc\", 2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;\n// 跟踪串行执行的同名任务\n// 第一个跟踪的任务开始\nhiTraceMeter.startAsyncTrace(COMMERCIAL, \"myTestFunc\", 1, \"categoryTest\", \"key=value\");\n// 业务流程......\n// 第一个跟踪的任务结束\nhiTraceMeter.finishAsyncTrace(COMMERCIAL, \"myTestFunc\", 1);\n// 业务流程......\n// 第二个跟踪的同名任务开始，同名的待跟踪任务串行执行\nhiTraceMeter.startAsyncTrace(COMMERCIAL, \"myTestFunc\", 1, \"categoryTest\", \"key=value\");\n// 业务流程......\n// 第二个跟踪的同名任务结束\nhiTraceMeter.finishAsyncTrace(COMMERCIAL, \"myTestFunc\", 1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemeterstartsynctrace19",
      children: "hiTraceMeter.startSyncTrace19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startSyncTrace(level: HiTraceOutputLevel, name: string, customArgs?: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["标记一个同步跟踪耗时任务的开始，分级控制跟踪输出。具体示例可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterfinishsynctrace19",
        children: "finishSyncTrace()"
      }), "中的示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceoutputlevel19",
              children: "HiTraceOutputLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪输出级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要跟踪的任务名称。  由于单条trace记录的总长度限制为512Byte，超出部分将被截断，建议name和customArgs的总长度不要超过420Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "customArgs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键值对，格式key=value，多个键值对用逗号分隔，默认值为空字符串。  由于单条trace记录的总长度限制为512Byte，超出部分将被截断，建议name和customArgs的总长度不要超过420Byte。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;\n// 不需要customArgs参数时，可不传入该参数或传入空字符串\nhiTraceMeter.startSyncTrace(COMMERCIAL, \"myTestFunc\");\nhiTraceMeter.startSyncTrace(COMMERCIAL, \"myTestFunc\", \"\");\n// 多个键值对用逗号分隔\nhiTraceMeter.startSyncTrace(COMMERCIAL, \"myTestFunc\", \"key=value\");\nhiTraceMeter.startSyncTrace(COMMERCIAL, \"myTestFunc\", \"key1=value1,key2=value2\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemeterfinishsynctrace19",
      children: "hiTraceMeter.finishSyncTrace19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "finishSyncTrace(level: HiTraceOutputLevel): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记一个同步跟踪耗时任务的结束，分级控制跟踪输出。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["finishSyncTrace的level必须与流程开始的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hitracemeterstartsynctrace19",
        children: "startSyncTrace()"
      }), "对应参数值一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceoutputlevel19",
              children: "HiTraceOutputLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪输出级别。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;\nhiTraceMeter.finishSyncTrace(COMMERCIAL);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;\n// 可嵌套使用，相邻的startSyncTrace与finishSyncTrace匹配\n// 第一个跟踪的任务开始\nhiTraceMeter.startSyncTrace(COMMERCIAL, \"myTestFunc1\", \"key=value\");\n// 业务流程......\n// 第二个跟踪的任务开始\nhiTraceMeter.startSyncTrace(COMMERCIAL, \"myTestFunc2\", \"key=value\");\n// 业务流程......\n// 第二个跟踪的任务结束\nhiTraceMeter.finishSyncTrace(COMMERCIAL);\n// 业务流程......\n// 第一个跟踪的任务结束\nhiTraceMeter.finishSyncTrace(COMMERCIAL);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemetertracebyvalue19",
      children: "hiTraceMeter.traceByValue19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "traceByValue(level: HiTraceOutputLevel, name: string, count: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整数跟踪事件，分级控制跟踪输出。用来标记一个预先定义需要跟踪的整数变量名及整数值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceoutputlevel19",
              children: "HiTraceOutputLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪输出级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要跟踪的整数变量名称。  由于单条trace记录的总长度限制为512Byte，超出部分将被截断，建议该参数的长度不要超过420Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整数变量的值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;\nlet traceCount = 3;\nhiTraceMeter.traceByValue(COMMERCIAL, \"myTestCount\", traceCount);\ntraceCount = 4;\nhiTraceMeter.traceByValue(COMMERCIAL, \"myTestCount\", traceCount);\n// 业务流程......\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemeteristraceenabled19",
      children: "hiTraceMeter.isTraceEnabled19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isTraceEnabled(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断当前是否开启应用trace捕获。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/hitrace",
              children: "hitrace"
            }), "命令行工具等方式开启采集时返回true。未开启采集或停止采集后返回false，此时调用HiTraceMeter性能跟踪打点接口无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (hiTraceMeter.isTraceEnabled()) {\n  // 业务流程......\n} else {\n  // 业务流程......\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "traceeventlistener22",
      children: "TraceEventListener22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TraceEventListener = (traceStatus: boolean) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义应用trace捕获开关状态切换时的回调函数类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "traceStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前应用trace捕获开关状态。  true：开启；false：关闭。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemeterregistertracelistener22",
      children: "hiTraceMeter.registerTraceListener22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "registerTraceListener(callback: TraceEventListener): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册应用trace捕获开关通知回调，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册成功后，立即执行一次回调函数，后续回调函数由应用trace捕获开关状态变化触发执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数保存在应用进程内，一个进程最多可以注册10个回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(998184)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若注册的回调包含耗时操作，当回调被执行时，注册或注销行为会被阻塞（等待回调执行完成）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，建议不要在应用主线程中注册或注销包含耗时操作的回调，避免发生应用冻屏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#traceeventlistener22",
              children: "TraceEventListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调注册状态。  >= 0：注册成功，返回用于注销的回调索引，索引范围0到9；  -1：已达到最大回调函数注册数量；  -2：无效参数，参数非TraceEventListener类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 注册的回调函数定义\nlet callback: hiTraceMeter.TraceEventListener = (traceStatus: boolean) => {\n  if (traceStatus) {\n    // 当前应用trace捕获开启，业务流程......\n  } else {\n    // 当前应用trace捕获关闭，业务流程......\n  }\n};\n\n// 注册应用trace捕获开关通知回调\nlet index = hiTraceMeter.registerTraceListener(callback);\nif (index < 0) {\n  // 异常处理......\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracemeterunregistertracelistener22",
      children: "hiTraceMeter.unregisterTraceListener22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unregisterTraceListener(index: number): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注销通过registerTraceListener()注册的trace捕获开关通知回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已注册回调函数索引，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitracemeterregistertracelistener22",
              children: "registerTraceListener()"
            }), "调用成功时的返回值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调注销状态。  0：注销成功；  -1：目标索引的回调函数未注册；  -2：无效索引，参数index值不在0到9的范围内。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 注销应用trace捕获开关通知回调，index为hiTraceMeter.registerTraceListener返回的回调索引\nlet ret = hiTraceMeter.unregisterTraceListener(index);\nif (ret < 0) {\n  // 异常处理......\n}\n"
      })
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
998184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
667115(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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