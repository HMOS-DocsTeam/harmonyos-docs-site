"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["785249"], {
427747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_c_performance_analysis_headerfile_capi_hidebug_type_h_capi_hidebug_type_h_md_a99_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-debug-optimize-api-performance-analysis-api-performance-analysis-c-performance-analysis-headerfile-capi-hidebug-type-h-capi-hidebug-type-h-md-a99.json
var site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_c_performance_analysis_headerfile_capi_hidebug_type_h_capi_hidebug_type_h_md_a99_namespaceObject = JSON.parse('{"id":"system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h","title":"hidebug_type.h","description":"概述","source":"@site/docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h.md","sourceDirName":"system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h","slug":"/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"hidebug_type.h","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-hidebug-type-h"},"sidebar":"ref","previous":{"title":"hidebug.h","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-h/capi-hidebug-h"},"next":{"title":"log.h","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-log-h/capi-log-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h.md


const frontMatter = {
	title: 'hidebug_type.h',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-hidebug-type-h'
};
const contentTitle = 'hidebug_type.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "HiDebug_ErrorCode",
  "id": "hidebug_errorcode",
  "level": 3
}, {
  "value": "HiDebug_TraceFlag",
  "id": "hidebug_traceflag",
  "level": 3
}, {
  "value": "HiDebug_StackFrameType",
  "id": "hidebug_stackframetype",
  "level": 3
}, {
  "value": "HiDebug_CrashObjType",
  "id": "hidebug_crashobjtype",
  "level": 3
}, {
  "value": "宏定义说明",
  "id": "宏定义说明",
  "level": 2
}, {
  "value": "HIDEBUG_TRACE_TAG_FFRT",
  "id": "hidebug_trace_tag_ffrt",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_COMMON_LIBRARY",
  "id": "hidebug_trace_tag_common_library",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_HDF",
  "id": "hidebug_trace_tag_hdf",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_NET",
  "id": "hidebug_trace_tag_net",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_NWEB",
  "id": "hidebug_trace_tag_nweb",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_DISTRIBUTED_AUDIO",
  "id": "hidebug_trace_tag_distributed_audio",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_FILE_MANAGEMENT",
  "id": "hidebug_trace_tag_file_management",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_OHOS",
  "id": "hidebug_trace_tag_ohos",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_ABILITY_MANAGER",
  "id": "hidebug_trace_tag_ability_manager",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_CAMERA",
  "id": "hidebug_trace_tag_camera",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_MEDIA",
  "id": "hidebug_trace_tag_media",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_IMAGE",
  "id": "hidebug_trace_tag_image",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_AUDIO",
  "id": "hidebug_trace_tag_audio",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_DISTRIBUTED_DATA",
  "id": "hidebug_trace_tag_distributed_data",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_GRAPHICS",
  "id": "hidebug_trace_tag_graphics",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_ARKUI",
  "id": "hidebug_trace_tag_arkui",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_NOTIFICATION",
  "id": "hidebug_trace_tag_notification",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_MISC",
  "id": "hidebug_trace_tag_misc",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_MULTIMODAL_INPUT",
  "id": "hidebug_trace_tag_multimodal_input",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_RPC",
  "id": "hidebug_trace_tag_rpc",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_ARK",
  "id": "hidebug_trace_tag_ark",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_WINDOW_MANAGER",
  "id": "hidebug_trace_tag_window_manager",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_DISTRIBUTED_SCREEN",
  "id": "hidebug_trace_tag_distributed_screen",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_DISTRIBUTED_CAMERA",
  "id": "hidebug_trace_tag_distributed_camera",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_FRAMEWORK",
  "id": "hidebug_trace_tag_distributed_hardware_framework",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_GLOBAL_RESOURCE_MANAGER",
  "id": "hidebug_trace_tag_global_resource_manager",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_DEVICE_MANAGER",
  "id": "hidebug_trace_tag_distributed_hardware_device_manager",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_SAMGR",
  "id": "hidebug_trace_tag_samgr",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_POWER_MANAGER",
  "id": "hidebug_trace_tag_power_manager",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_DISTRIBUTED_SCHEDULER",
  "id": "hidebug_trace_tag_distributed_scheduler",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_DISTRIBUTED_INPUT",
  "id": "hidebug_trace_tag_distributed_input",
  "level": 3
}, {
  "value": "HIDEBUG_TRACE_TAG_BLUETOOTH",
  "id": "hidebug_trace_tag_bluetooth",
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
        id: "hidebug_typeh",
        children: "hidebug_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug模块代码结构体定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <hidebug/hidebug_type.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohhidebug.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.HiviewDFX.HiProfiler.HiDebug"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug",
        children: "HiDebug"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-threadcpuusage/capi-hidebug-hidebug-threadcpuusage",
              children: "HiDebug_ThreadCpuUsage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_ThreadCpuUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序所有线程的CPU使用率结构体定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-systemmeminfo/capi-hidebug-hidebug-systemmeminfo",
              children: "HiDebug_SystemMemInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_SystemMemInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内存信息结构类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-nativememinfo/capi-hidebug-hidebug-nativememinfo",
              children: "HiDebug_NativeMemInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_NativeMemInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序进程本机内存信息结构类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-memorylimit/capi-hidebug-hidebug-memorylimit",
              children: "HiDebug_MemoryLimit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_MemoryLimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序进程内存限制结构类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-jsstackframe/capi-hidebug-hidebug-jsstackframe",
              children: "HiDebug_JsStackFrame"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_JsStackFrame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "js栈帧内容的定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-nativestackframe/capi-hidebug-hidebug-nativestackframe",
              children: "HiDebug_NativeStackFrame"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_NativeStackFrame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native栈帧内容的定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-stackframe/capi-hidebug-hidebug-stackframe",
              children: "HiDebug_StackFrame"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_StackFrame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栈帧内容的定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-mallocdispatch/capi-hidebug-hidebug-mallocdispatch",
              children: "HiDebug_MallocDispatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_MallocDispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序进程可替换/恢复的HiDebug_MallocDispatch表结构类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-graphicsmemorysummary/capi-hidebug-hidebug-graphicsmemorysummary",
              children: "HiDebug_GraphicsMemorySummary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_GraphicsMemorySummary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用图形显存占用详情的结构定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-processsamplerconfig/capi-hidebug-hidebug-processsamplerconfig",
              children: "HiDebug_ProcessSamplerConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_ProcessSamplerConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样配置的结构定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-backtrace-object--8h/capi-hidebug-hidebug-backtrace-object--8h",
              children: "HiDebug_Backtrace_Object__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_Backtrace_Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于栈回溯及栈解析的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-threadcpuusage/capi-hidebug-hidebug-threadcpuusage",
              children: "HiDebug_ThreadCpuUsage*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_ThreadCpuUsagePtr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_ThreadCpuUsage指针定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_errorcode",
              children: "HiDebug_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_traceflag",
              children: "HiDebug_TraceFlag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_TraceFlag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集trace线程的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_stackframetype",
              children: "HiDebug_StackFrameType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_StackFrameType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栈帧类型的枚举值定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_crashobjtype",
              children: "HiDebug_CrashObjType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiDebug_CrashObjType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "维测信息数据类型的枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_ffrt",
              children: "HIDEBUG_TRACE_TAG_FFRT"
            }), " (1ULL << 13)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FFRT任务标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_common_library",
              children: "HIDEBUG_TRACE_TAG_COMMON_LIBRARY"
            }), " (1ULL << 16)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["公共库子系统标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_hdf",
              children: "HIDEBUG_TRACE_TAG_HDF"
            }), " (1ULL << 18)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HDF子系统标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_net",
              children: "HIDEBUG_TRACE_TAG_NET"
            }), " (1ULL << 23)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["网络标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_nweb",
              children: "HIDEBUG_TRACE_TAG_NWEB"
            }), " (1ULL << 24)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["NWeb标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_distributed_audio",
              children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_AUDIO"
            }), " (1ULL << 27)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分布式音频标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_file_management",
              children: "HIDEBUG_TRACE_TAG_FILE_MANAGEMENT"
            }), " (1ULL << 29)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文件管理标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_ohos",
              children: "HIDEBUG_TRACE_TAG_OHOS"
            }), " (1ULL << 30)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OHOS通用标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_ability_manager",
              children: "HIDEBUG_TRACE_TAG_ABILITY_MANAGER"
            }), " (1ULL << 31)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ability Manager标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_camera",
              children: "HIDEBUG_TRACE_TAG_CAMERA"
            }), " (1ULL << 32)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相机模块标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_media",
              children: "HIDEBUG_TRACE_TAG_MEDIA"
            }), " (1ULL << 33)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体模块标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_image",
              children: "HIDEBUG_TRACE_TAG_IMAGE"
            }), " (1ULL << 34)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像模块标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_audio",
              children: "HIDEBUG_TRACE_TAG_AUDIO"
            }), " (1ULL << 35)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频模块标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_distributed_data",
              children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_DATA"
            }), " (1ULL << 36)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分布式数据管理器模块标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_graphics",
              children: "HIDEBUG_TRACE_TAG_GRAPHICS"
            }), " (1ULL << 38)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图形模块标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_arkui",
              children: "HIDEBUG_TRACE_TAG_ARKUI"
            }), " (1ULL << 39)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ArkUI开发框架标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_notification",
              children: "HIDEBUG_TRACE_TAG_NOTIFICATION"
            }), " (1ULL << 40)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知模块标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_misc",
              children: "HIDEBUG_TRACE_TAG_MISC"
            }), " (1ULL << 41)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MISC模块标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_multimodal_input",
              children: "HIDEBUG_TRACE_TAG_MULTIMODAL_INPUT"
            }), " (1ULL << 42)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多模态输入模块标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_rpc",
              children: "HIDEBUG_TRACE_TAG_RPC"
            }), " (1ULL << 46)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RPC标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_ark",
              children: "HIDEBUG_TRACE_TAG_ARK"
            }), " (1ULL << 47)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JSVM虚拟机标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_window_manager",
              children: "HIDEBUG_TRACE_TAG_WINDOW_MANAGER"
            }), " (1ULL << 48)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["窗口管理器标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_distributed_screen",
              children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_SCREEN"
            }), " (1ULL << 50)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分布式屏幕标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_distributed_camera",
              children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_CAMERA"
            }), " (1ULL << 51)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分布式相机标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_distributed_hardware_framework",
              children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_FRAMEWORK"
            }), " (1ULL << 52)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分布式硬件框架标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_global_resource_manager",
              children: "HIDEBUG_TRACE_TAG_GLOBAL_RESOURCE_MANAGER"
            }), " (1ULL << 53)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全局资源管理器标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_distributed_hardware_device_manager",
              children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_DEVICE_MANAGER"
            }), " (1ULL << 54)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分布式硬件设备管理器标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_samgr",
              children: "HIDEBUG_TRACE_TAG_SAMGR"
            }), " (1ULL << 55)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SA标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_power_manager",
              children: "HIDEBUG_TRACE_TAG_POWER_MANAGER"
            }), " (1ULL << 56)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["电源管理器标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_distributed_scheduler",
              children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_SCHEDULER"
            }), " (1ULL << 57)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分布式调度程序标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_distributed_input",
              children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_INPUT"
            }), " (1ULL << 59)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分布式输入标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hidebug_trace_tag_bluetooth",
              children: "HIDEBUG_TRACE_TAG_BLUETOOTH"
            }), " (1ULL << 60)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["蓝牙标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_errorcode",
      children: "HiDebug_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiDebug_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误码定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_INVALID_ARGUMENT = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数，可能的原因： 1.参数传值问题；2.参数类型问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_TRACE_CAPTURED_ALREADY = 11400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重复采集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_NO_PERMISSION = 11400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有写文件的权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_TRACE_ABNORMAL = 11400104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内部错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_NO_TRACE_RUNNING = 11400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前没有trace正在运行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_INVALID_SYMBOLIC_PC_ADDRESS = 11400200"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传入符号解析函数的pc地址是无效的。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_NOT_SUPPORTED = 11400300"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前设备不支持。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_UNDER_SAMPLING = 11400301"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前进程正在采样。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_RESOURCE_UNAVAILABLE = 11400302"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采样资源不可用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_traceflag",
      children: "HiDebug_TraceFlag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiDebug_TraceFlag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采集trace线程的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_TRACE_FLAG_MAIN_THREAD = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只采集当前应用主线程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_TRACE_FLAG_ALL_THREADS = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集当前应用下所有线程。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_stackframetype",
      children: "HiDebug_StackFrameType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiDebug_StackFrameType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栈帧类型的枚举值定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_STACK_FRAME_TYPE_JS = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "js类型栈帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_STACK_FRAME_TYPE_NATIVE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native类型栈帧。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_crashobjtype",
      children: "HiDebug_CrashObjType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiDebug_CrashObjType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "维测信息数据类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_CRASHOBJ_STRING = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_CRASHOBJ_MEMORY_64B = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64字节内存块"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_CRASHOBJ_MEMORY_256B = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256字节内存块"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_CRASHOBJ_MEMORY_1024B = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024字节内存块"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_CRASHOBJ_MEMORY_2048B = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048字节内存块"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDEBUG_CRASHOBJ_MEMORY_4096B = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096字节内存块"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "宏定义说明",
      children: "宏定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_ffrt",
      children: "HIDEBUG_TRACE_TAG_FFRT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_FFRT (1ULL << 13)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT任务标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_common_library",
      children: "HIDEBUG_TRACE_TAG_COMMON_LIBRARY"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_COMMON_LIBRARY (1ULL << 16)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "公共库子系统标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_hdf",
      children: "HIDEBUG_TRACE_TAG_HDF"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_HDF (1ULL << 18)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HDF子系统标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_net",
      children: "HIDEBUG_TRACE_TAG_NET"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_NET (1ULL << 23)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_nweb",
      children: "HIDEBUG_TRACE_TAG_NWEB"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_NWEB (1ULL << 24)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NWeb标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_distributed_audio",
      children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_AUDIO"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_DISTRIBUTED_AUDIO (1ULL << 27)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式音频标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_file_management",
      children: "HIDEBUG_TRACE_TAG_FILE_MANAGEMENT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_FILE_MANAGEMENT (1ULL << 29)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件管理标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_ohos",
      children: "HIDEBUG_TRACE_TAG_OHOS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_OHOS (1ULL << 30)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHOS通用标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_ability_manager",
      children: "HIDEBUG_TRACE_TAG_ABILITY_MANAGER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_ABILITY_MANAGER (1ULL << 31)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ability Manager标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_camera",
      children: "HIDEBUG_TRACE_TAG_CAMERA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_CAMERA (1ULL << 32)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机模块标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_media",
      children: "HIDEBUG_TRACE_TAG_MEDIA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_MEDIA (1ULL << 33)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体模块标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_image",
      children: "HIDEBUG_TRACE_TAG_IMAGE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_IMAGE (1ULL << 34)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像模块标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_audio",
      children: "HIDEBUG_TRACE_TAG_AUDIO"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_AUDIO (1ULL << 35)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频模块标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_distributed_data",
      children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_DATA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_DISTRIBUTED_DATA (1ULL << 36)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据管理器模块标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_graphics",
      children: "HIDEBUG_TRACE_TAG_GRAPHICS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_GRAPHICS (1ULL << 38)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图形模块标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_arkui",
      children: "HIDEBUG_TRACE_TAG_ARKUI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_ARKUI (1ULL << 39)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI开发框架标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_notification",
      children: "HIDEBUG_TRACE_TAG_NOTIFICATION"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_NOTIFICATION (1ULL << 40)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知模块标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_misc",
      children: "HIDEBUG_TRACE_TAG_MISC"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_MISC (1ULL << 41)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MISC模块标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_multimodal_input",
      children: "HIDEBUG_TRACE_TAG_MULTIMODAL_INPUT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_MULTIMODAL_INPUT (1ULL << 42)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多模态输入模块标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_rpc",
      children: "HIDEBUG_TRACE_TAG_RPC"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_RPC (1ULL << 46)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RPC标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_ark",
      children: "HIDEBUG_TRACE_TAG_ARK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_ARK (1ULL << 47)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM虚拟机标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_window_manager",
      children: "HIDEBUG_TRACE_TAG_WINDOW_MANAGER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_WINDOW_MANAGER (1ULL << 48)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "窗口管理器标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_distributed_screen",
      children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_SCREEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_DISTRIBUTED_SCREEN (1ULL << 50)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式屏幕标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_distributed_camera",
      children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_CAMERA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_DISTRIBUTED_CAMERA (1ULL << 51)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式相机标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_distributed_hardware_framework",
      children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_FRAMEWORK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_FRAMEWORK (1ULL << 52)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式硬件框架标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_global_resource_manager",
      children: "HIDEBUG_TRACE_TAG_GLOBAL_RESOURCE_MANAGER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_GLOBAL_RESOURCE_MANAGER (1ULL << 53)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局资源管理器标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_distributed_hardware_device_manager",
      children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_DEVICE_MANAGER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_DEVICE_MANAGER (1ULL << 54)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式硬件设备管理器标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_samgr",
      children: "HIDEBUG_TRACE_TAG_SAMGR"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_SAMGR (1ULL << 55)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SA标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_power_manager",
      children: "HIDEBUG_TRACE_TAG_POWER_MANAGER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_POWER_MANAGER (1ULL << 56)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "电源管理器标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_distributed_scheduler",
      children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_SCHEDULER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_DISTRIBUTED_SCHEDULER (1ULL << 57)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式调度程序标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_distributed_input",
      children: "HIDEBUG_TRACE_TAG_DISTRIBUTED_INPUT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_DISTRIBUTED_INPUT (1ULL << 59)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式输入标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebug_trace_tag_bluetooth",
      children: "HIDEBUG_TRACE_TAG_BLUETOOTH"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define HIDEBUG_TRACE_TAG_BLUETOOTH (1ULL << 60)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蓝牙标签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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