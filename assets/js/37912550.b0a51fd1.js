"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["721792"], {
7624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_c_performance_analysis_headerfile_capi_hiappevent_h_capi_hiappevent_h_md_379_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-debug-optimize-api-performance-analysis-api-performance-analysis-c-performance-analysis-headerfile-capi-hiappevent-h-capi-hiappevent-h-md-379.json
var site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_c_performance_analysis_headerfile_capi_hiappevent_h_capi_hiappevent_h_md_379_namespaceObject = JSON.parse('{"id":"system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h","title":"hiappevent.h","description":"概述","source":"@site/docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h.md","sourceDirName":"system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h","slug":"/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"hiappevent.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-hiappevent-h"},"sidebar":"ref","previous":{"title":"HiTrace","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hitrace/capi-hitrace"},"next":{"title":"hiappevent_cfg.h","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-cfg-h/capi-hiappevent-cfg-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h.md


const frontMatter = {
	title: 'hiappevent.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-hiappevent-h'
};
const contentTitle = 'hiappevent.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "HiAppEvent_ErrorCode",
  "id": "hiappevent_errorcode",
  "level": 3
}, {
  "value": "EventType",
  "id": "eventtype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_HiAppEvent_OnReceive()",
  "id": "oh_hiappevent_onreceive",
  "level": 3
}, {
  "value": "OH_HiAppEvent_OnTrigger()",
  "id": "oh_hiappevent_ontrigger",
  "level": 3
}, {
  "value": "OH_HiAppEvent_OnTake()",
  "id": "oh_hiappevent_ontake",
  "level": 3
}, {
  "value": "OH_HiAppEvent_CreateParamList()",
  "id": "oh_hiappevent_createparamlist",
  "level": 3
}, {
  "value": "OH_HiAppEvent_DestroyParamList()",
  "id": "oh_hiappevent_destroyparamlist",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddBoolParam()",
  "id": "oh_hiappevent_addboolparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddBoolArrayParam()",
  "id": "oh_hiappevent_addboolarrayparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddInt8Param()",
  "id": "oh_hiappevent_addint8param",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddInt8ArrayParam()",
  "id": "oh_hiappevent_addint8arrayparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddInt16Param()",
  "id": "oh_hiappevent_addint16param",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddInt16ArrayParam()",
  "id": "oh_hiappevent_addint16arrayparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddInt32Param()",
  "id": "oh_hiappevent_addint32param",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddInt32ArrayParam()",
  "id": "oh_hiappevent_addint32arrayparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddInt64Param()",
  "id": "oh_hiappevent_addint64param",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddInt64ArrayParam()",
  "id": "oh_hiappevent_addint64arrayparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddFloatParam()",
  "id": "oh_hiappevent_addfloatparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddFloatArrayParam()",
  "id": "oh_hiappevent_addfloatarrayparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddDoubleParam()",
  "id": "oh_hiappevent_adddoubleparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddDoubleArrayParam()",
  "id": "oh_hiappevent_adddoublearrayparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddStringParam()",
  "id": "oh_hiappevent_addstringparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddStringArrayParam()",
  "id": "oh_hiappevent_addstringarrayparam",
  "level": 3
}, {
  "value": "OH_HiAppEvent_Write()",
  "id": "oh_hiappevent_write",
  "level": 3
}, {
  "value": "OH_HiAppEvent_Configure()",
  "id": "oh_hiappevent_configure",
  "level": 3
}, {
  "value": "OH_HiAppEvent_CreateWatcher()",
  "id": "oh_hiappevent_createwatcher",
  "level": 3
}, {
  "value": "OH_HiAppEvent_DestroyWatcher()",
  "id": "oh_hiappevent_destroywatcher",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetTriggerCondition()",
  "id": "oh_hiappevent_settriggercondition",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetAppEventFilter()",
  "id": "oh_hiappevent_setappeventfilter",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetWatcherOnTrigger()",
  "id": "oh_hiappevent_setwatcherontrigger",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetWatcherOnReceive()",
  "id": "oh_hiappevent_setwatcheronreceive",
  "level": 3
}, {
  "value": "OH_HiAppEvent_TakeWatcherData()",
  "id": "oh_hiappevent_takewatcherdata",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddWatcher()",
  "id": "oh_hiappevent_addwatcher",
  "level": 3
}, {
  "value": "OH_HiAppEvent_RemoveWatcher()",
  "id": "oh_hiappevent_removewatcher",
  "level": 3
}, {
  "value": "OH_HiAppEvent_ClearData()",
  "id": "oh_hiappevent_cleardata",
  "level": 3
}, {
  "value": "OH_HiAppEvent_CreateProcessor()",
  "id": "oh_hiappevent_createprocessor",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetReportRoute()",
  "id": "oh_hiappevent_setreportroute",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetReportPolicy()",
  "id": "oh_hiappevent_setreportpolicy",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetReportEvent()",
  "id": "oh_hiappevent_setreportevent",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetCustomConfig()",
  "id": "oh_hiappevent_setcustomconfig",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetConfigId()",
  "id": "oh_hiappevent_setconfigid",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetConfigName()",
  "id": "oh_hiappevent_setconfigname",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetReportUserId()",
  "id": "oh_hiappevent_setreportuserid",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetReportUserProperty()",
  "id": "oh_hiappevent_setreportuserproperty",
  "level": 3
}, {
  "value": "OH_HiAppEvent_AddProcessor()",
  "id": "oh_hiappevent_addprocessor",
  "level": 3
}, {
  "value": "OH_HiAppEvent_DestroyProcessor()",
  "id": "oh_hiappevent_destroyprocessor",
  "level": 3
}, {
  "value": "OH_HiAppEvent_RemoveProcessor()",
  "id": "oh_hiappevent_removeprocessor",
  "level": 3
}, {
  "value": "OH_HiAppEvent_CreateConfig()",
  "id": "oh_hiappevent_createconfig",
  "level": 3
}, {
  "value": "OH_HiAppEvent_DestroyConfig()",
  "id": "oh_hiappevent_destroyconfig",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetConfigItem()",
  "id": "oh_hiappevent_setconfigitem",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetEventConfig()",
  "id": "oh_hiappevent_seteventconfig",
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
        id: "hiappeventh",
        children: "hiappevent.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiAppEvent模块为应用开发者提供的事件订阅和事件打点函数定义。在执行应用事件打点之前，开发者必须先构造一个参数列表对象来存储输入的事件参数，并指定事件领域、事件名称和事件类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件领域：用于标识事件打点的领域的字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件名称：用于标识事件打点的名称的字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件类型：故障、统计、安全、行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数列表：用于存储事件参数的链表，每个参数由参数名和参数值组成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <hiappevent/hiappevent.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libhiappevent_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.HiviewDFX.HiAppEvent"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hiappevent/capi-hiappevent",
        children: "HiAppEvent"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventinfo/capi-hiappevent-hiappevent-appeventinfo",
              children: "HiAppEvent_AppEventInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiAppEvent_AppEventInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个事件信息，包含事件领域、事件名称、事件类型和事件携带的用json格式字符串表示的自定义参数列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventgroup/capi-hiappevent-hiappevent-appeventgroup",
              children: "HiAppEvent_AppEventGroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiAppEvent_AppEventGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一组事件信息，包含事件组的名称，按名称分组的单个事件信息数组，事件数组的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamListNode*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ParamList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件参数列表节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiAppEvent_Watcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收app事件的监听器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiAppEvent_Processor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用事件上报的处理者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-config/capi-hiappevent-hiappevent-config",
              children: "HiAppEvent_Config"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiAppEvent_Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置系统事件触发条件的配置对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiAppEvent_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#eventtype",
              children: "EventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件类型。建议开发者根据不同的使用场景选择不同的事件类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_hiappevent_onreceive",
              children: "typedef void (*OH_HiAppEvent_OnReceive)(const char* domain, const struct HiAppEvent_AppEventGroup* appEventGroups, uint32_t groupLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiAppEvent_OnReceive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听器接收到事件后，将触发该回调，将事件内容传递给调用方。注意：回调中的指针所指对象的生命周期仅限于该回调函数内，请勿在该回调函数外直接使用该指针，若需缓存该信息，请对指针指向的内容进行深拷贝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_ontrigger",
              children: "typedef void (*OH_HiAppEvent_OnTrigger)(int row, int size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiAppEvent_OnTrigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听器收到事件后，若监听器中未设置OH_HiAppEvent_OnReceive回调，将保存该事件。  当保存的事件满足通过OH_HiAppEvent_SetTriggerCondition设定的条件后，将触发该回调。回调结束后，当新保存的事件消息再次满足设定的条件后，将再次进行回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_ontake",
              children: "typedef void (*OH_HiAppEvent_OnTake)(const char* const *events, uint32_t eventLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiAppEvent_OnTake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用OH_HiAppEvent_TakeWatcherData获取监听器接收到的事件时，监听器接收到的事件将通过该回调函数传递给调用者。注意：回调中的指针所指对象的生命周期仅限于该回调函数内，请勿在该回调函数外直接使用该指针。若需缓存该信息，请对指针指向的内容进行深拷贝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_createparamlist",
              children: "ParamList OH_HiAppEvent_CreateParamList(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个指向参数列表对象的指针。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意"
              })
            }), "：创建的指向参数列表对象的指针不再使用后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_destroyparamlist",
              children: "OH_HiAppEvent_DestroyParamList"
            }), "接口进行销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_destroyparamlist",
              children: "void OH_HiAppEvent_DestroyParamList(ParamList list)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个指向参数列表对象的指针，释放其分配内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addboolparam",
              children: "ParamList OH_HiAppEvent_AddBoolParam(ParamList list, const char* name, bool boolean)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个布尔参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addboolarrayparam",
              children: "ParamList OH_HiAppEvent_AddBoolArrayParam(ParamList list, const char* name, const bool* booleans, int arrSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个布尔数组参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addint8param",
              children: "ParamList OH_HiAppEvent_AddInt8Param(ParamList list, const char* name, int8_t num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个int8_t参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addint8arrayparam",
              children: "ParamList OH_HiAppEvent_AddInt8ArrayParam(ParamList list, const char* name, const int8_t* nums, int arrSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个int8_t数组参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addint16param",
              children: "ParamList OH_HiAppEvent_AddInt16Param(ParamList list, const char* name, int16_t num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个int16_t参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addint16arrayparam",
              children: "ParamList OH_HiAppEvent_AddInt16ArrayParam(ParamList list, const char* name, const int16_t* nums, int arrSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个int16_t数组参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addint32param",
              children: "ParamList OH_HiAppEvent_AddInt32Param(ParamList list, const char* name, int32_t num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个int32_t参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addint32arrayparam",
              children: "ParamList OH_HiAppEvent_AddInt32ArrayParam(ParamList list, const char* name, const int32_t* nums, int arrSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个int32_t数组参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addint64param",
              children: "ParamList OH_HiAppEvent_AddInt64Param(ParamList list, const char* name, int64_t num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个int64_t参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addint64arrayparam",
              children: "ParamList OH_HiAppEvent_AddInt64ArrayParam(ParamList list, const char* name, const int64_t* nums, int arrSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个int64_t数组参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addfloatparam",
              children: "ParamList OH_HiAppEvent_AddFloatParam(ParamList list, const char* name, float num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个float参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addfloatarrayparam",
              children: "ParamList OH_HiAppEvent_AddFloatArrayParam(ParamList list, const char* name, const float* nums, int arrSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个float数组参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_adddoubleparam",
              children: "ParamList OH_HiAppEvent_AddDoubleParam(ParamList list, const char* name, double num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个double参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_adddoublearrayparam",
              children: "ParamList OH_HiAppEvent_AddDoubleArrayParam(ParamList list, const char* name, const double* nums, int arrSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个double数组参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addstringparam",
              children: "ParamList OH_HiAppEvent_AddStringParam(ParamList list, const char* name, const char* str)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个字符串参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addstringarrayparam",
              children: "ParamList OH_HiAppEvent_AddStringArrayParam(ParamList list, const char* name, const char * const *strs, int arrSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个字符串数组参数到参数列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_write",
              children: "int OH_HiAppEvent_Write(const char* domain, const char* name, enum EventType type, const ParamList list)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实现对参数为列表类型的应用事件打点。在应用事件打点前，该接口会先对该事件的参数进行校验。如果校验成功，则接口会将事件写入事件文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_configure",
              children: "bool OH_HiAppEvent_Configure(const char* name, const char* value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实现应用事件打点的配置功能。应用事件打点配置接口，用于配置事件打点开关、事件文件目录存储配额大小等功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_createwatcher",
              children: "HiAppEvent_Watcher* OH_HiAppEvent_CreateWatcher(const char* name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个用于监听app事件的监听器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意"
              })
            }), "：创建的监听器不再使用后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_destroywatcher",
              children: "OH_HiAppEvent_DestroyWatcher"
            }), "接口进行销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_destroywatcher",
              children: "void OH_HiAppEvent_DestroyWatcher(HiAppEvent_Watcher* watcher)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁已创建的监听器。注意：已创建的监听器不再使用后，需要将其销毁，释放内存，防止内存泄漏，销毁后需将对应指针置空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_settriggercondition",
              children: "int OH_HiAppEvent_SetTriggerCondition(HiAppEvent_Watcher* watcher, int row, int size, int timeOut)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置监听器OH_HiAppEvent_OnTrigger回调的触发条件。  分别可以从监视器新接收事件数量、新接收事件大小、onTrigger触发超时时间，设置触发条件。调用方应至少保证从一个方面设置触发条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setappeventfilter",
              children: "int OH_HiAppEvent_SetAppEventFilter(HiAppEvent_Watcher* watcher, const char* domain, uint8_t eventTypes, const char* const *names, int namesLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置监听器需要监听的事件的类型。该函数可以重复调用，可添加多个过滤规则，而非替换，监听器将收到满足任一过滤规则的事件的通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setwatcherontrigger",
              children: "int OH_HiAppEvent_SetWatcherOnTrigger(HiAppEvent_Watcher* watcher, OH_HiAppEvent_OnTrigger onTrigger)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置监听器onTrigger回调的接口。  如果未设置OnReceive回调或已将其设置为nullptr，则将保存观察者接收到的应用事件。当保存的应用事件满足onTrigger回调的触发条件时，将调用onTrigger回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setwatcheronreceive",
              children: "int OH_HiAppEvent_SetWatcherOnReceive(HiAppEvent_Watcher* watcher, OH_HiAppEvent_OnReceive onReceive)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置监听器onReceive回调函数的接口。当监听器监听到相应事件后，onReceive回调函数将被调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_takewatcherdata",
              children: "int OH_HiAppEvent_TakeWatcherData(HiAppEvent_Watcher* watcher, uint32_t eventNum, OH_HiAppEvent_OnTake onTake)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取监听器收到后保存的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addwatcher",
              children: "int OH_HiAppEvent_AddWatcher(HiAppEvent_Watcher* watcher)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加监听器的接口，监听器开始监听系统消息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意"
              })
            }), "：OH_HiAppEvent_AddWatcher接口涉及I/O操作。在对性能敏感的业务场景中，开发者应根据实际需要确定该接口是在主线程还是在子线程中调用。  订阅接口OH_HiAppEvent_AddWatcher传入的名称name是唯一的，相同的name，后一次调用会覆盖前一次的订阅。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_removewatcher",
              children: "int OH_HiAppEvent_RemoveWatcher(HiAppEvent_Watcher* watcher)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除监听器的接口，监听器停止监听系统消息。注意：该接口仅仅使监听器停止监听系统消息，并未销毁该监听器，该监听器依然常驻内存，直至调用OH_HiAppEvent_DestroyWatcher接口，内存才会释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_cleardata",
              children: "void OH_HiAppEvent_ClearData()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除所有监视器保存的所有事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_createprocessor",
              children: "HiAppEvent_Processor* OH_HiAppEvent_CreateProcessor(const char* name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个用于处理app事件上报的处理者。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意"
              })
            }), "：创建的处理者不再使用后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_destroyprocessor",
              children: "OH_HiAppEvent_DestroyProcessor"
            }), "接口进行销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setreportroute",
              children: "int OH_HiAppEvent_SetReportRoute(HiAppEvent_Processor* processor, const char* appId, const char* routeInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置处理者事件上报路由的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setreportpolicy",
              children: "int OH_HiAppEvent_SetReportPolicy(HiAppEvent_Processor* processor, int periodReport, int batchReport, bool onStartReport, bool onBackgroundReport)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置处理者事件上报策略的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setreportevent",
              children: "int OH_HiAppEvent_SetReportEvent(HiAppEvent_Processor* processor, const char* domain, const char* name, bool isRealTime)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置处理者上报事件的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setcustomconfig",
              children: "int OH_HiAppEvent_SetCustomConfig(HiAppEvent_Processor* processor, const char* key, const char* value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置处理者自定义扩展参数的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setconfigid",
              children: "int OH_HiAppEvent_SetConfigId(HiAppEvent_Processor* processor, int configId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置处理者配置id的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setconfigname",
              children: "int OH_HiAppEvent_SetConfigName(HiAppEvent_Processor* processor, const char* configName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置处理者的配置名称的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setreportuserid",
              children: "int OH_HiAppEvent_SetReportUserId(HiAppEvent_Processor* processor, const char* const * userIdNames, int size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置处理者用户ID的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setreportuserproperty",
              children: "int OH_HiAppEvent_SetReportUserProperty(HiAppEvent_Processor* processor, const char* const * userPropertyNames, int size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置处理者用户属性的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_addprocessor",
              children: "int64_t OH_HiAppEvent_AddProcessor(HiAppEvent_Processor* processor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加数据处理者的接口。开发者可添加数据处理者，用于提供事件上云功能。数据处理者的实现可预置在设备中，开发者可根据数据处理者的约束设置属性。注意：Processor的配置信息需要由数据处理者提供，目前设备内暂未预置可供交互的数据处理者，因此当前事件上云功能不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_destroyprocessor",
              children: "void OH_HiAppEvent_DestroyProcessor(HiAppEvent_Processor* processor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁已创建的数据处理者。注意：已创建的处理者不再使用后，需要将其销毁，释放内存，防止内存泄漏，销毁后需将对应指针置空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_removeprocessor",
              children: "int OH_HiAppEvent_RemoveProcessor(int64_t processorId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除数据处理者的接口，处理者停止上报事件。注意：该接口仅仅使处理者停止上报事件，并未销毁该处理者，该处理者依然常驻内存，直至调用OH_HiAppEvent_DestroyProcessor接口，内存才会释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_createconfig",
              children: "HiAppEvent_Config* OH_HiAppEvent_CreateConfig(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个指向设置系统事件触发条件的配置对象的指针。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意"
              })
            }), "：创建的指向设置系统事件触发条件的配置对象的指针不再使用后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_destroyconfig",
              children: "OH_HiAppEvent_DestroyConfig"
            }), "接口进行销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_destroyconfig",
              children: "void OH_HiAppEvent_DestroyConfig(HiAppEvent_Config* config)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁已创建的配置对象。注意：已创建的配置对象不再使用后，需要将其销毁，释放内存，防止内存泄漏，销毁后需要将对应指针置空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_setconfigitem",
              children: "int OH_HiAppEvent_SetConfigItem(HiAppEvent_Config* config, const char* itemName, const char* itemValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置配置对象中的配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hiappevent_seteventconfig",
              children: "int OH_HiAppEvent_SetEventConfig(const char* name, HiAppEvent_Config* config)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件相关的配置参数设置方法。  不同的事件有不同的配置项，目前仅支持以下事件：  MAIN_THREAD_JANK（参数配置详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events#oh_hiappevent_seteventconfig%E6%8E%A5%E5%8F%A3%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE%E8%AF%B4%E6%98%8E",
              children: "主线程超时事件检测"
            }), "）  MAIN_THREAD_JANK_V2（参数配置详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events#oh_hiappevent_seteventconfig%E6%8E%A5%E5%8F%A3%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE%E8%AF%B4%E6%98%8E",
              children: "主线程超时事件检测"
            }), "）"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiappevent_errorcode",
      children: "HiAppEvent_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAppEvent_ErrorCode\n"
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
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HIAPPEVENT_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参数值长度无效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAPPEVENT_PROCESSOR_IS_NULL = -7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件处理者为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAPPEVENT_PROCESSOR_NOT_FOUND = -8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件处理者不存在。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAPPEVENT_INVALID_PARAM_VALUE = -9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数值无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAPPEVENT_EVENT_CONFIG_IS_NULL = -10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件配置为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAPPEVENT_OPERATE_FAILED = -100"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["操作失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAPPEVENT_INVALID_UID = -200"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无效的用户标识。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eventtype",
      children: "EventType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum EventType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件类型。建议开发者根据不同的使用场景选择不同的事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "FAULT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STATISTIC = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BEHAVIOR = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行为事件类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_onreceive",
      children: "OH_HiAppEvent_OnReceive()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_HiAppEvent_OnReceive)(const char* domain, const struct HiAppEvent_AppEventGroup* appEventGroups, uint32_t groupLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听器接收到事件后，将触发该回调，将事件内容传递给调用方。注意：回调中的指针所指对象的生命周期仅限于该回调函数内，请勿在该回调函数外直接使用该指针，若需缓存该信息，请对指针指向的内容进行深拷贝。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到的app事件的领域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventgroup/capi-hiappevent-hiappevent-appeventgroup",
              children: "const struct HiAppEvent_AppEventGroup"
            }), "* appEventGroups"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照不同事件名称分组的事件组数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t groupLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件组数组的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_ontrigger",
      children: "OH_HiAppEvent_OnTrigger()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_HiAppEvent_OnTrigger)(int row, int size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听器收到事件后，若监听器中未设置OH_HiAppEvent_OnReceive回调，将保存该事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当保存的事件满足通过OH_HiAppEvent_SetTriggerCondition设定的条件后，将触发该回调。回调结束后，当新保存的事件消息再次满足设定的条件后，将再次进行回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听器新接收到的事件消息的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听器新接收的事件消息的大小总和（单个事件大小计算方式为：将消息转换为json字符串后，字符串的长度）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_ontake",
      children: "OH_HiAppEvent_OnTake()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_HiAppEvent_OnTake)(const char* const *events, uint32_t eventLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OH_HiAppEvent_TakeWatcherData获取监听器接收到的事件时，监听器接收到的事件将通过该回调函数传递给调用者。注意：回调中的指针所指对象的生命周期仅限于该回调函数内，请勿在该回调函数外直接使用该指针。若需缓存该信息，请对指针指向的内容进行深拷贝。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* const *events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "json字符串格式的事件数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t eventLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_createparamlist",
      children: "OH_HiAppEvent_CreateParamList()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_CreateParamList(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个指向参数列表对象的指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(286373)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建的指向参数列表对象的指针不再使用后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_hiappevent_destroyparamlist",
        children: "OH_HiAppEvent_DestroyParamList"
      }), "接口进行销毁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向参数列表对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_destroyparamlist",
      children: "OH_HiAppEvent_DestroyParamList()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_HiAppEvent_DestroyParamList(ParamList list)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁一个指向参数列表对象的指针，释放其分配内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数列表对象指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addboolparam",
      children: "OH_HiAppEvent_AddBoolParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddBoolParam(ParamList list, const char* name, bool boolean)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个布尔参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的布尔参数值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addboolarrayparam",
      children: "OH_HiAppEvent_AddBoolArrayParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddBoolArrayParam(ParamList list, const char* name, const bool* booleans, int arrSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个布尔数组参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const bool* booleans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的布尔数组参数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int arrSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addint8param",
      children: "OH_HiAppEvent_AddInt8Param()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddInt8Param(ParamList list, const char* name, int8_t num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个int8_t参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int8_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的int8_t参数值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addint8arrayparam",
      children: "OH_HiAppEvent_AddInt8ArrayParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddInt8ArrayParam(ParamList list, const char* name, const int8_t* nums, int arrSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个int8_t数组参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int8_t* nums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的int8_t数组参数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int arrSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addint16param",
      children: "OH_HiAppEvent_AddInt16Param()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddInt16Param(ParamList list, const char* name, int16_t num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个int16_t参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的int16_t参数值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addint16arrayparam",
      children: "OH_HiAppEvent_AddInt16ArrayParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddInt16ArrayParam(ParamList list, const char* name, const int16_t* nums, int arrSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个int16_t数组参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int16_t* nums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的int16_t数组参数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int arrSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addint32param",
      children: "OH_HiAppEvent_AddInt32Param()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddInt32Param(ParamList list, const char* name, int32_t num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个int32_t参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的int32_t参数值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addint32arrayparam",
      children: "OH_HiAppEvent_AddInt32ArrayParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddInt32ArrayParam(ParamList list, const char* name, const int32_t* nums, int arrSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个int32_t数组参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t* nums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的int32_t数组参数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int arrSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addint64param",
      children: "OH_HiAppEvent_AddInt64Param()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddInt64Param(ParamList list, const char* name, int64_t num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个int64_t参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的int64_t参数值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addint64arrayparam",
      children: "OH_HiAppEvent_AddInt64ArrayParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddInt64ArrayParam(ParamList list, const char* name, const int64_t* nums, int arrSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个int64_t数组参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int64_t* nums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的int64_t数组参数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int arrSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addfloatparam",
      children: "OH_HiAppEvent_AddFloatParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddFloatParam(ParamList list, const char* name, float num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个float参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的float参数值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addfloatarrayparam",
      children: "OH_HiAppEvent_AddFloatArrayParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddFloatArrayParam(ParamList list, const char* name, const float* nums, int arrSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个float数组参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float* nums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的float数组参数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int arrSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_adddoubleparam",
      children: "OH_HiAppEvent_AddDoubleParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddDoubleParam(ParamList list, const char* name, double num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个double参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的double参数值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_adddoublearrayparam",
      children: "OH_HiAppEvent_AddDoubleArrayParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddDoubleArrayParam(ParamList list, const char* name, const double* nums, int arrSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个double数组参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const double* nums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的double数组参数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int arrSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addstringparam",
      children: "OH_HiAppEvent_AddStringParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddStringParam(ParamList list, const char* name, const char* str)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个字符串参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* str"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的字符串参数值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addstringarrayparam",
      children: "OH_HiAppEvent_AddStringArrayParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParamList OH_HiAppEvent_AddStringArrayParam(ParamList list, const char* name, const char * const *strs, int arrSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个字符串数组参数到参数列表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加参数的参数列表指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * const *strs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的字符串数组参数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int arrSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的参数数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "ParamList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加参数后的参数列表指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_write",
      children: "OH_HiAppEvent_Write()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_Write(const char* domain, const char* name, enum EventType type, const ParamList list)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现对参数为列表类型的应用事件打点。在应用事件打点前，该接口会先对该事件的参数进行校验。如果校验成功，则接口会将事件写入事件文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件领域。开发者可以根据需要自定义事件领域。  事件领域名称支持数字、字母、下划线字符，需要以字母开头且不能以下划线结尾，长度非空且不超过32个字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件名称。开发者可以根据需要自定义事件名称。  首字符必须为字母字符或$字符，中间字符必须为数字字符、字母字符或下划线字符，结尾字符必须为数字字符或字母字符，长度非空且不超过48个字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enum EventType type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件类型，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#eventtype",
              children: "EventType"
            }), "中定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-paramlistnode8h/capi-hiappevent-paramlistnode8h",
              children: "const ParamList"
            }), " list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件参数列表，每个参数由参数名和参数值组成，其规格定义如下：  1、参数名为字符串类型。  首字符必须为字母字符或$字符，中间字符必须为数字字符、字母字符或下划线字符，结尾字符必须为数字字符或字母字符，长度非空且不超过32个字符。  2、参数值支持字符串、数值、布尔、数组类型。字符串类型参数长度需在8*1024个字符以内，超出会做丢弃处理；  数组类型参数中的元素类型只能为字符串、数值、布尔中的一种，且元素个数需在100以内，超出会做丢弃处理。  3、参数个数需在32个以内，超出的参数会做丢弃处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果事件参数校验成功，则返回0，将事件写入事件文件；  如果事件中存在无效参数，则返回正值，丢弃无效参数后将事件写入事件文件；  如果事件参数校验失败，则返回负值，并且事件将不会写入事件文件。  0 事件参数校验成功。  -1 非法的事件名称。  -4 非法的事件领域名称。  -99 打点功能被关闭。  1 非法的事件参数名称。  4 非法的事件参数字符串长度。  5 非法的事件参数数量。  6 非法的事件参数数组长度。  8 重复的事件参数名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_configure",
      children: "OH_HiAppEvent_Configure()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_HiAppEvent_Configure(const char* name, const char* value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现应用事件打点的配置功能。应用事件打点配置接口，用于配置事件打点开关、事件文件目录存储配额大小等功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置项名称。名称可填", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-cfg-h/capi-hiappevent-cfg-h#disable",
              children: "DISABLE"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-cfg-h/capi-hiappevent-cfg-h#max_storage",
              children: "MAX_STORAGE"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置项值。如果配置项名称是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-cfg-h/capi-hiappevent-cfg-h#disable",
              children: "DISABLE"
            }), "，值可以填“true”或者“false”；  如果配置项名称是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-cfg-h/capi-hiappevent-cfg-h#max_storage",
              children: "MAX_STORAGE"
            }), "，配额值字符串只由数字字符和大小单位字符（单位字符支持[b"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置结果。如果配置成功，则返回true；如果配置失败则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_createwatcher",
      children: "OH_HiAppEvent_CreateWatcher()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAppEvent_Watcher* OH_HiAppEvent_CreateWatcher(const char* name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个用于监听app事件的监听器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(888314)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建的监听器不再使用后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_hiappevent_destroywatcher",
        children: "OH_HiAppEvent_DestroyWatcher"
      }), "接口进行销毁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听器名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用成功时返回指向的新建监听器的指针，name参数异常时返回nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_destroywatcher",
      children: "OH_HiAppEvent_DestroyWatcher()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_HiAppEvent_DestroyWatcher(HiAppEvent_Watcher* watcher)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁已创建的监听器。注意：已创建的监听器不再使用后，需要将其销毁，释放内存，防止内存泄漏，销毁后需将对应指针置空。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            }), "* watcher"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向监听器的指针（即OH_HiAppEvent_CreateWatcher接口返回的指针）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_settriggercondition",
      children: "OH_HiAppEvent_SetTriggerCondition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetTriggerCondition(HiAppEvent_Watcher* watcher, int row, int size, int timeOut)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置监听器OH_HiAppEvent_OnTrigger回调的触发条件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分别可以从监视器新接收事件数量、新接收事件大小、onTrigger触发超时时间，设置触发条件。调用方应至少保证从一个方面设置触发条件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            }), "* watcher"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向监听器的指针（即OH_HiAppEvent_CreateWatcher接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当输入值大于0，且新接收事件的数量大于等于该值时，将调用设置的onTrigger回调函数；  当输入值小于等于0时，不再以接收数量多少为维度来触发onTrigger回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当输入值大于0，且新接收事件的大小(单个事件大小计算方式为，将事件转换为json字符串后，字符串的长度)大于等于该值时，将调用设置的onTrigger回调函数；  当输入值小于等于0时，不再以新接收事件大小为维度触发onTrigger回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int timeOut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位秒，当输入值大于0，每经过timeout秒，将检查监视器是否存在新接收到的事件，如果存在将触发onTrigger回调。  触发onTrigger后，经过timeOut秒后将再次检查是否存在新接收到的事件。  当输入值小于等于0，不以超时时间为维度触发onTrigger回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：接口调用成功；-5：watcher入参空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setappeventfilter",
      children: "OH_HiAppEvent_SetAppEventFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetAppEventFilter(HiAppEvent_Watcher* watcher, const char* domain, uint8_t eventTypes, const char* const *names, int namesLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置监听器需要监听的事件的类型。该函数可以重复调用，可添加多个过滤规则，而非替换，监听器将收到满足任一过滤规则的事件的通知。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            }), "* watcher"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向监听器的指针（即OH_HiAppEvent_CreateWatcher接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要监听事件的领域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t eventTypes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要监听事件的事件类型。使用按位与方式进行匹配，可支持监听多种类型的事件。第一位为1（数值为1）表示支持监听故障类型的事件；  第二位为1（数值为2）表示支持监听统计类型的事件；  第三位为1（数值为4）表示支持监听安全类型的事件；  第四位为1（数值为8）表示支持监听行为类型的事件。  都为1（数值为15）或者都为0（数值为0）表示支持所有类型事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* const *names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要监听的事件名称数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int namesLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听的事件名称的数组长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：接口调用成功；-1：names参数异常；-4：domain参数异常；-5：watcher入参空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setwatcherontrigger",
      children: "OH_HiAppEvent_SetWatcherOnTrigger()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetWatcherOnTrigger(HiAppEvent_Watcher* watcher, OH_HiAppEvent_OnTrigger onTrigger)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置监听器onTrigger回调的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果未设置OnReceive回调或已将其设置为nullptr，则将保存观察者接收到的应用事件。当保存的应用事件满足onTrigger回调的触发条件时，将调用onTrigger回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            }), "* watcher"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向监听器的指针（即OH_HiAppEvent_CreateWatcher接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#oh_hiappevent_ontrigger",
              children: "OH_HiAppEvent_OnTrigger"
            }), " onTrigger"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：接口调用成功；-5：watcher入参空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setwatcheronreceive",
      children: "OH_HiAppEvent_SetWatcherOnReceive()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetWatcherOnReceive(HiAppEvent_Watcher* watcher, OH_HiAppEvent_OnReceive onReceive)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置监听器onReceive回调函数的接口。当监听器监听到相应事件后，onReceive回调函数将被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            }), "* watcher"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向监听器的指针（即OH_HiAppEvent_CreateWatcher接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#oh_hiappevent_onreceive",
              children: "OH_HiAppEvent_OnReceive"
            }), " onReceive"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数的函数指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：接口调用成功；-5：watcher入参空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_takewatcherdata",
      children: "OH_HiAppEvent_TakeWatcherData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_TakeWatcherData(HiAppEvent_Watcher* watcher, uint32_t eventNum, OH_HiAppEvent_OnTake onTake)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取监听器收到后保存的事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            }), "* watcher"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向监听器的指针（即OH_HiAppEvent_CreateWatcher接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t eventNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当输入值小于等于0时，取全部已保存事件；当输入值大于0时，按照事件发生时间倒序排列，取指定数量的已保存事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#oh_hiappevent_ontake",
              children: "OH_HiAppEvent_OnTake"
            }), " onTake"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数指针，事件通过调用该函数返回事件信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：接口调用成功；-5：watcher入参空指针；-6：还未调用OH_HiAppEvent_AddWatcher，操作顺序有误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addwatcher",
      children: "OH_HiAppEvent_AddWatcher()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_AddWatcher(HiAppEvent_Watcher* watcher)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加监听器的接口，监听器开始监听系统消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(735774)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_HiAppEvent_AddWatcher接口涉及I/O操作。在对性能敏感的业务场景中，开发者应根据实际需要确定该接口是在主线程还是在子线程中调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅接口OH_HiAppEvent_AddWatcher传入的名称name是唯一的，相同的name，后一次调用会覆盖前一次的订阅。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            }), "* watcher"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向监听器的指针（即OH_HiAppEvent_CreateWatcher接口返回的指针）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：接口调用成功；-5：watcher入参空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_removewatcher",
      children: "OH_HiAppEvent_RemoveWatcher()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_RemoveWatcher(HiAppEvent_Watcher* watcher)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除监听器的接口，监听器停止监听系统消息。注意：该接口仅仅使监听器停止监听系统消息，并未销毁该监听器，该监听器依然常驻内存，直至调用OH_HiAppEvent_DestroyWatcher接口，内存才会释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-watcher/capi-hiappevent-hiappevent-watcher",
              children: "HiAppEvent_Watcher"
            }), "* watcher"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向监听器的指针（即OH_HiAppEvent_CreateWatcher接口返回的指针）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：接口调用成功；-5：watcher入参空指针；-6：还未调用OH_HiAppEvent_AddWatcher，操作顺序有误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_cleardata",
      children: "OH_HiAppEvent_ClearData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_HiAppEvent_ClearData()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除所有监视器保存的所有事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_createprocessor",
      children: "OH_HiAppEvent_CreateProcessor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAppEvent_Processor* OH_HiAppEvent_CreateProcessor(const char* name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个用于处理app事件上报的处理者。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223725)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建的处理者不再使用后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_hiappevent_destroyprocessor",
        children: "OH_HiAppEvent_DestroyProcessor"
      }), "接口进行销毁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理者名称。只能包含大小写字母、数字、下划线和$，不能以数字开头，长度非空且不超过256个字符。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用成功时返回指向的新建处理者的指针，name参数异常时返回nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setreportroute",
      children: "OH_HiAppEvent_SetReportRoute()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetReportRoute(HiAppEvent_Processor* processor, const char* appId, const char* routeInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置处理者事件上报路由的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* appId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理者的应用ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* routeInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器位置信息，默认为空字符串。传入字符串长度不能超8KB，超过时会被置为默认值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_IS_NULL"
            }), "：processor入参为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：参数值无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH"
            }), "：参数值长度无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setreportpolicy",
      children: "OH_HiAppEvent_SetReportPolicy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetReportPolicy(HiAppEvent_Processor* processor, int periodReport, int batchReport, bool onStartReport, bool onBackgroundReport)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置处理者事件上报策略的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int periodReport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件定时上报周期，单位为秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int batchReport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件上报阈值，当事件条数达到阈值时上报事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool onStartReport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据处理者在启动时是否上报事件。配置值为true表示上报事件，false表示不上报事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool onBackgroundReport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序进入后台时是否上报事件。配置值为true表示上报事件，false表示不上报事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_IS_NULL"
            }), "：processor入参为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：参数值无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setreportevent",
      children: "OH_HiAppEvent_SetReportEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetReportEvent(HiAppEvent_Processor* processor, const char* domain, const char* name, bool isRealTime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置处理者上报事件的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报事件的领域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报事件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isRealTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否实时上报。配置为true表示实时上报，false表示不实时上报"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_IS_NULL"
            }), "：processor入参为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：参数值无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setcustomconfig",
      children: "OH_HiAppEvent_SetCustomConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetCustomConfig(HiAppEvent_Processor* processor, const char* key, const char* value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置处理者自定义扩展参数的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数名，长度不超过32个字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数值，长度不超过1024个字符。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_IS_NULL"
            }), "：processor入参为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：参数值无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH"
            }), "：参数值长度无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setconfigid",
      children: "OH_HiAppEvent_SetConfigId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetConfigId(HiAppEvent_Processor* processor, int configId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置处理者配置id的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int configId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据处理者配置id，自然数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_IS_NULL"
            }), "：processor入参为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：参数值无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setconfigname",
      children: "OH_HiAppEvent_SetConfigName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetConfigName(HiAppEvent_Processor* processor, const char* configName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置处理者的配置名称的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* configName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据处理者的配置名称，系统会根据配置名称从系统预置的processor.json配置文件中自动加载对应的配置项。只能包含大小写字母、数字、下划线和$，不能以数字开头，长度非空且不超过256个字符。  当前取值仅支持“SDK_OCG”，用于配置“接口故障处理者”可处理的事件名称等信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_IS_NULL"
            }), "：processor入参为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：参数值无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH"
            }), "：参数值长度无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setreportuserid",
      children: "OH_HiAppEvent_SetReportUserId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetReportUserId(HiAppEvent_Processor* processor, const char* const * userIdNames, int size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置处理者用户ID的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* const * userIdNames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理者可以上报的用户ID的name数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户ID的name数组长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_IS_NULL"
            }), "：processor入参为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：参数值无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH"
            }), "：参数值长度无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setreportuserproperty",
      children: "OH_HiAppEvent_SetReportUserProperty()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetReportUserProperty(HiAppEvent_Processor* processor, const char* const * userPropertyNames, int size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置处理者用户属性的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* const * userPropertyNames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理者可以上报的用户属性数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户属性数组的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_IS_NULL"
            }), "：processor入参为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：参数值无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH"
            }), "：参数值长度无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_addprocessor",
      children: "OH_HiAppEvent_AddProcessor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_HiAppEvent_AddProcessor(HiAppEvent_Processor* processor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加数据处理者的接口。开发者可添加数据处理者，用于提供事件上云功能。数据处理者的实现可预置在设备中，开发者可根据数据处理者的约束设置属性。注意：Processor的配置信息需要由数据处理者提供，目前设备内暂未预置可供交互的数据处理者，因此当前事件上云功能不可用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int64_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用成功时返回处理者唯一ID，大于0；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_IS_NULL"
            }), "：processor入参为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：参数值无效；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_OPERATE_FAILED"
            }), "：数据处理者名称未找到或注册失败；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_destroyprocessor",
      children: "OH_HiAppEvent_DestroyProcessor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_HiAppEvent_DestroyProcessor(HiAppEvent_Processor* processor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁已创建的数据处理者。注意：已创建的处理者不再使用后，需要将其销毁，释放内存，防止内存泄漏，销毁后需将对应指针置空。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-processor/capi-hiappevent-hiappevent-processor",
              children: "HiAppEvent_Processor"
            }), "* processor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向处理者的指针（即OH_HiAppEvent_CreateProcessor接口返回的指针）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_removeprocessor",
      children: "OH_HiAppEvent_RemoveProcessor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_RemoveProcessor(int64_t processorId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除数据处理者的接口，处理者停止上报事件。注意：该接口仅仅使处理者停止上报事件，并未销毁该处理者，该处理者依然常驻内存，直至调用OH_HiAppEvent_DestroyProcessor接口，内存才会释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t processorId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理者唯一ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_PROCESSOR_NOT_FOUND"
            }), "：事件处理者不存在；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_OPERATE_FAILED"
            }), "：操作失败；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_UID"
            }), "：用户标识无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_createconfig",
      children: "OH_HiAppEvent_CreateConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAppEvent_Config* OH_HiAppEvent_CreateConfig(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个指向设置系统事件触发条件的配置对象的指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(963296)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建的指向设置系统事件触发条件的配置对象的指针不再使用后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_hiappevent_destroyconfig",
        children: "OH_HiAppEvent_DestroyConfig"
      }), "接口进行销毁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-config/capi-hiappevent-hiappevent-config",
              children: "HiAppEvent_Config"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向设置系统事件触发条件的配置对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_destroyconfig",
      children: "OH_HiAppEvent_DestroyConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_HiAppEvent_DestroyConfig(HiAppEvent_Config* config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁已创建的配置对象。注意：已创建的配置对象不再使用后，需要将其销毁，释放内存，防止内存泄漏，销毁后需要将对应指针置空。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-config/capi-hiappevent-hiappevent-config",
              children: "HiAppEvent_Config"
            }), "* config"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向配置对象的指针（即OH_HiAppEvent_CreateConfig接口返回的指针）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_setconfigitem",
      children: "OH_HiAppEvent_SetConfigItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetConfigItem(HiAppEvent_Config* config, const char* itemName, const char* itemValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置配置对象中的配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-config/capi-hiappevent-hiappevent-config",
              children: "HiAppEvent_Config"
            }), "* config"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向配置对象的指针（即OH_HiAppEvent_CreateConfig接口返回的指针）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* itemName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待设定配置项的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* itemValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待设定配置项的值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_EVENT_CONFIG_IS_NULL"
            }), "：传入的指向配置对象的指针为空；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：设定的配置项无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_seteventconfig",
      children: "OH_HiAppEvent_SetEventConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_HiAppEvent_SetEventConfig(const char* name, HiAppEvent_Config* config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件相关的配置参数设置方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同的事件有不同的配置项，目前仅支持以下事件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MAIN_THREAD_JANK（参数配置详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events#oh_hiappevent_seteventconfig%E6%8E%A5%E5%8F%A3%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE%E8%AF%B4%E6%98%8E",
        children: "主线程超时事件检测"
      }), "）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MAIN_THREAD_JANK_V2（参数配置详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events#oh_hiappevent_seteventconfig%E6%8E%A5%E5%8F%A3%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE%E8%AF%B4%E6%98%8E",
        children: "主线程超时事件检测"
      }), "）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统事件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-config/capi-hiappevent-hiappevent-config",
              children: "HiAppEvent_Config"
            }), "* config"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向配置对象的指针（即OH_HiAppEvent_CreateConfig接口返回的指针）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_SUCCESS"
            }), "：接口调用成功；  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HIAPPEVENT_INVALID_PARAM_VALUE"
            }), "：设置的参数无效。  具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#hiappevent_errorcode",
              children: "HiAppEvent_ErrorCode"
            }), "。"]
          })]
        })
      })]
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
888314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
223725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
286373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
963296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
735774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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