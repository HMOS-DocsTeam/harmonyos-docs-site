"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["401396"], {
193668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_arkts_js_apis_hitracechain_js_apis_hitracechain_md_2ed_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-debug-optimize-api-performance-analysis-api-performance-analysis-arkts-js-apis-hitracechain-js-apis-hitracechain-md-2ed.json
var site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_arkts_js_apis_hitracechain_js_apis_hitracechain_md_2ed_namespaceObject = JSON.parse('{"id":"system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain/js-apis-hitracechain","title":"@ohos.hiTraceChain (分布式跟踪)","description":"本模块提供了端侧业务流程调用链跟踪的打点能力，包括业务流程跟踪的启动、结束、信息埋点等能力。","source":"@site/docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain/js-apis-hitracechain.md","sourceDirName":"system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain","slug":"/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain/js-apis-hitracechain","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain/js-apis-hitracechain","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"@ohos.hiTraceChain (分布式跟踪)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hitracechain","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-hitracechain"},"sidebar":"ref","previous":{"title":"@ohos.hilog (HiLog日志打印)","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hilog/js-apis-hilog"},"next":{"title":"@ohos.hiTraceMeter (性能打点)","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain/js-apis-hitracechain.md


const frontMatter = {
	title: '@ohos.hiTraceChain (分布式跟踪)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hitracechain',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-hitracechain'
};
const contentTitle = '@ohos.hiTraceChain (分布式跟踪)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "HiTraceFlag",
  "id": "hitraceflag",
  "level": 2
}, {
  "value": "HiTraceTracepointType",
  "id": "hitracetracepointtype",
  "level": 2
}, {
  "value": "HiTraceCommunicationMode",
  "id": "hitracecommunicationmode",
  "level": 2
}, {
  "value": "HiTraceId",
  "id": "hitraceid",
  "level": 2
}, {
  "value": "hiTraceChain.begin",
  "id": "hitracechainbegin",
  "level": 2
}, {
  "value": "hiTraceChain.end",
  "id": "hitracechainend",
  "level": 2
}, {
  "value": "hiTraceChain.getId",
  "id": "hitracechaingetid",
  "level": 2
}, {
  "value": "hiTraceChain.setId",
  "id": "hitracechainsetid",
  "level": 2
}, {
  "value": "hiTraceChain.clearId",
  "id": "hitracechainclearid",
  "level": 2
}, {
  "value": "hiTraceChain.createSpan",
  "id": "hitracechaincreatespan",
  "level": 2
}, {
  "value": "hiTraceChain.tracepoint",
  "id": "hitracechaintracepoint",
  "level": 2
}, {
  "value": "hiTraceChain.isValid",
  "id": "hitracechainisvalid",
  "level": 2
}, {
  "value": "hiTraceChain.isFlagEnabled",
  "id": "hitracechainisflagenabled",
  "level": 2
}, {
  "value": "hiTraceChain.enableFlag",
  "id": "hitracechainenableflag",
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
        id: "ohoshitracechain-分布式跟踪",
        children: "@ohos.hiTraceChain (分布式跟踪)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供了端侧业务流程调用链跟踪的打点能力，包括业务流程跟踪的启动、结束、信息埋点等能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(479299)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hiTraceChain } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitraceflag",
      children: "HiTraceFlag"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跟踪标志组合类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缺省标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INCLUDE_ASYNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步调用标志。  设置该标志，同时跟踪同步和异步调用；缺省只跟踪同步调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DONOT_CREATE_SPAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无分支标志。  设置该标志，不创建分支信息；缺省创建分支信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TP_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["埋点标志。  调试场景下设置该标志，调用信息埋点接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitracechaintracepoint",
              children: "tracepoint()"
            }), "时，会打印埋点信息hilog日志；缺省不打印埋点信息hilog日志。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_BE_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无开始结束信息标志。  调试场景下设置该标志，调用开始跟踪接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitracechainbegin",
              children: "begin()"
            }), "和结束跟踪接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitracechainend",
              children: "end()"
            }), "时，分别会打印开始、结束跟踪信息hilog日志；缺省不打印开始、结束跟踪信息hilog日志。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISABLE_LOG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志关联标志。  设置该标志，不会在hilog日志中附加HiTraceId信息；缺省会在hilog日志中附加HiTraceId信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAILURE_TRIGGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障触发标志。预置标志，暂未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D2D_TP_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备间埋点标志。TP_INFO的一个子集，调试场景下使用。  当已设置TP_INFO标志时，D2D_TP_INFO标志不生效；  当未设置TP_INFO标志时，设置D2D_TP_INFO标志，此时调用信息埋点接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitracechaintracepoint",
              children: "tracepoint()"
            }), "，仅当mode参数为设备间通信DEVICE的情况下，会打印埋点信息hilog日志。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracetracepointtype",
      children: "HiTraceTracepointType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跟踪埋点类型枚举。"
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
            children: "CS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端接收。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务端发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务端接收。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用类型，标识CS、CR、SS、SR四种场景之外的埋点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracecommunicationmode",
      children: "HiTraceCommunicationMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跟踪通信类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缺省通信类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "THREAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程间通信。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程间通信。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备间通信。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitraceid",
      children: "HiTraceId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口为HiTraceId对象接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chainId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bigint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪链标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spanId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分支标识，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parentSpanId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "父分支标识，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪标志位，默认值为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechainbegin",
      children: "hiTraceChain.begin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "begin(name: string, flags?: number): HiTraceId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始跟踪，同步接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前线程TLS（Thread Local Storage，线程本地存储）中不存在有效的HiTraceId时，生成有效的HiTraceId并设置到当前线程TLS中，返回该HiTraceId。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前线程TLS中已存在有效的HiTraceId时，不会开始新的跟踪，返回各属性值均为0的无效HiTraceId。"
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
            children: "跟踪业务名。  建议该参数的长度不要超过63Byte，超出部分将被截断。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["跟踪标志组合，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceflag",
              children: "HiTraceFlag"
            }), "，默认值为0。"]
          })]
        })]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceid",
              children: "HiTraceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceId实例。"
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
        children: "// 开始跟踪，跟踪标志是INCLUDE_ASYNC与DONOT_CREATE_SPAN的并集。\nlet traceId = hiTraceChain.begin(\"business\", hiTraceChain.HiTraceFlag.INCLUDE_ASYNC | hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);\n// 若干业务逻辑完成后，结束跟踪。\nhiTraceChain.end(traceId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechainend",
      children: "hiTraceChain.end"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "end(id: HiTraceId): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结束跟踪，同步接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若给定的HiTraceId有效，且等于当前线程TLS中的HiTraceId，结束跟踪并将当前线程TLS中的HiTraceId设置为无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若给定的HiTraceId无效，或不等于当前线程TLS中的HiTraceId，结束跟踪失败，打印结束跟踪失败hilog日志。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceid",
              children: "HiTraceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceId实例。"
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
        children: "// 开始跟踪，跟踪标志是DEFAULT。\nlet traceId = hiTraceChain.begin(\"business\", hiTraceChain.HiTraceFlag.DEFAULT);\n// 若干业务逻辑完成后，结束跟踪。\nhiTraceChain.end(traceId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechaingetid",
      children: "hiTraceChain.getId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getId(): HiTraceId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取跟踪标识，同步接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前线程TLS中的HiTraceId。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceid",
              children: "HiTraceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceId实例。"
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
        children: "// 开始跟踪，跟踪标志是DEFAULT。\nlet traceId = hiTraceChain.begin(\"business\", hiTraceChain.HiTraceFlag.DEFAULT);\n// 若干业务逻辑完成后，获取当前跟踪标识。\nlet curTraceId = hiTraceChain.getId();\n// 同一跟踪链获取的跟踪标识的chainId一定相同。\nif (curTraceId.chainId != traceId.chainId) {\n// 基于异常场景的处理逻辑。\n}\n// 若干业务逻辑完成后，结束跟踪。\nhiTraceChain.end(traceId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechainsetid",
      children: "hiTraceChain.setId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setId(id: HiTraceId): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置跟踪标识，同步接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将给定的HiTraceId设置到当前线程TLS中。若给定的HiTraceId无效，则不执行任何操作。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceid",
              children: "HiTraceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceId实例。"
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
        children: "// 获取当前跟踪链中的跟踪标识。\nlet traceId = hiTraceChain.getId();\n// 将获取的跟踪标识设置为当前traceId。\nhiTraceChain.setId(traceId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechainclearid",
      children: "hiTraceChain.clearId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clearId(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除跟踪标识，同步接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前线程TLS中的HiTraceId设置为无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.HiviewDFX.HiTrace"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 业务开始前，尝试清除跟踪标识。\nhiTraceChain.clearId();\n// 开始跟踪，跟踪标志是DEFAULT。\nlet traceId = hiTraceChain.begin(\"business\", hiTraceChain.HiTraceFlag.DEFAULT);\n// 若干业务逻辑完成后，结束跟踪。\nhiTraceChain.end(traceId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechaincreatespan",
      children: "hiTraceChain.createSpan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createSpan(): HiTraceId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建跟踪分支，同步接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个HiTraceId，使用当前线程TLS中的chainId、spanId初始化HiTraceId的chainId、parentSpanId，并为HiTraceId生成一个新的spanId，返回该HiTraceId。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceid",
              children: "HiTraceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceId实例。"
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
        children: "// 开始跟踪，跟踪标志是DEFAULT。\nlet traceId = hiTraceChain.begin(\"business\", hiTraceChain.HiTraceFlag.DEFAULT);\n// 若干业务逻辑完成后，创建跟踪分支。\nlet spanTraceId = hiTraceChain.createSpan();\n// 同一跟踪链的跟踪标识的chainId一定相同。\nif (spanTraceId.chainId != traceId.chainId) {\n// 基于异常场景的处理逻辑。\n}\n// 业务结束，结束跟踪。\nhiTraceChain.end(traceId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechaintracepoint",
      children: "hiTraceChain.tracepoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tracepoint(mode: HiTraceCommunicationMode, type: HiTraceTracepointType, id: HiTraceId, msg?: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
        children: "@ohos.hiTraceMeter (性能打点)"
      }), "跟踪信息埋点，同步接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当type为客户端发送CS和服务端接收SR时，进行同步HiTraceMeter开始打点；当type为客户端接收CR和服务端发送SS时，进行同步HiTraceMeter结束打点；当type为通用类型GENERAL时，不会进行HiTraceMeter打点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type为客户端发送CS和客户端接收CR的信息埋点需配套使用；type为服务端接收SR和服务端发送SS的信息埋点需配套使用。否则，HiTraceMeter开始与结束打点无法正常匹配。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitracecommunicationmode",
              children: "HiTraceCommunicationMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "信息埋点需要指定的跟踪通信模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitracetracepointtype",
              children: "HiTraceTracepointType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "信息埋点需要指定的跟踪埋点类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceid",
              children: "HiTraceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实施信息埋点操作的HiTraceId实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "msg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceMeter打点操作传入的trace说明信息，默认值为\"\"。"
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
        children: "// 开始跟踪，跟踪标志是INCLUDE_ASYNC与DONOT_CREATE_SPAN的并集。\nlet traceId = hiTraceChain.begin(\"business\", hiTraceChain.HiTraceFlag.INCLUDE_ASYNC | hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);\n// 若干业务逻辑完成后，触发信息埋点操作。\nhiTraceChain.tracepoint(hiTraceChain.HiTraceCommunicationMode.THREAD, hiTraceChain.HiTraceTracepointType.SS, traceId, \"Just an example\");\n// 业务结束，结束跟踪。\nhiTraceChain.end(traceId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechainisvalid",
      children: "hiTraceChain.isValid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isValid(id: HiTraceId): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断HiTraceId是否有效，同步接口。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceid",
              children: "HiTraceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要判断是否有效的HiTraceId实例。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：HiTraceId有效；false：HiTraceId无效。"
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
        children: "// 开始跟踪，跟踪标志是DEFAULT。\nlet traceId = hiTraceChain.begin(\"business\", hiTraceChain.HiTraceFlag.DEFAULT);\n// traceIdIsvalid为true\nlet traceIdIsvalid = hiTraceChain.isValid(traceId);\nif (traceIdIsvalid) {\n// 基于跟踪标识合法性校验成功的场景的处理逻辑。\n}\n// 业务结束，结束跟踪。\nhiTraceChain.end(traceId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechainisflagenabled",
      children: "hiTraceChain.isFlagEnabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isFlagEnabled(id: HiTraceId, flag: HiTraceFlag): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断HiTraceId是否启用了跟踪标志flag，同步接口。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceid",
              children: "HiTraceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要判断指定跟踪标志是否启用的HiTraceId实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceflag",
              children: "HiTraceFlag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的跟踪标志。"
          })]
        })]
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：HiTraceId已启用flag；false：HiTraceId未启用flag。"
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
        children: "// 开始跟踪，跟踪标志是INCLUDE_ASYNC。\nlet traceId = hiTraceChain.begin(\"business\", hiTraceChain.HiTraceFlag.INCLUDE_ASYNC);\n// enabledIncludeAsyncFlag为true。\nlet enabledIncludeAsyncFlag = hiTraceChain.isFlagEnabled(traceId, hiTraceChain.HiTraceFlag.INCLUDE_ASYNC);\nif (enabledIncludeAsyncFlag) {\n// 基于INCLUDE_ASYNC跟踪标志已设置场景的处理逻辑。\n}\n// 业务结束，结束跟踪。\nhiTraceChain.end(traceId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitracechainenableflag",
      children: "hiTraceChain.enableFlag"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableFlag(id: HiTraceId, flag: HiTraceFlag): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用HiTraceId中指定的跟踪标志，同步接口。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceid",
              children: "HiTraceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要启用指定跟踪标志的HiTraceId实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hitraceflag",
              children: "HiTraceFlag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的跟踪标志。"
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
        children: "// 开始跟踪，跟踪标志是INCLUDE_ASYNC。\nlet traceId = hiTraceChain.begin(\"business\", hiTraceChain.HiTraceFlag.INCLUDE_ASYNC);\n// enabledDoNotCreateSpanFlag为false。\nlet enabledDoNotCreateSpanFlag = hiTraceChain.isFlagEnabled(traceId, hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);\n// 设置DONOT_CREATE_SPAN跟踪标志。\nhiTraceChain.enableFlag(traceId, hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);\n// enabledDoNotCreateSpanFlag为true。\nenabledDoNotCreateSpanFlag = hiTraceChain.isFlagEnabled(traceId, hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);\nif (enabledDoNotCreateSpanFlag) {\n// 基于DONOT_CREATE_SPAN跟踪标志已设置场景的处理逻辑。\n}\n// 业务结束，结束跟踪。\nhiTraceChain.end(traceId);\n"
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
479299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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