"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["141868"], {
935940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_function_flow_runtime_api_function_flow_runtime_c_function_flow_runtime_headerfile_capi_type_def_h_capi_type_def_h_md_974_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-function-flow-runtime-api-function-flow-runtime-c-function-flow-runtime-headerfile-capi-type-def-h-capi-type-def-h-md-974.json
var site_docs_ref_system_basicfun_api_function_flow_runtime_api_function_flow_runtime_c_function_flow_runtime_headerfile_capi_type_def_h_capi_type_def_h_md_974_namespaceObject = JSON.parse('{"id":"system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h","title":"type_def.h","description":"概述","source":"@site/docs-ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h.md","sourceDirName":"system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h","slug":"/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"type_def.h","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-type-def-h"},"sidebar":"ref","previous":{"title":"fiber.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-fiber-h/capi-fiber-h"},"next":{"title":"ffrt_function_header_t","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-function-header-t/capi-ffrt-ffrt-function-header-t"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h.md


const frontMatter = {
	title: 'type_def.h',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-type-def-h'
};
const contentTitle = 'type_def.h';

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
  "value": "变量",
  "id": "变量",
  "level": 3
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
  "value": "ffrt_queue_priority_t",
  "id": "ffrt_queue_priority_t",
  "level": 3
}, {
  "value": "ffrt_qos_default_t",
  "id": "ffrt_qos_default_t",
  "level": 3
}, {
  "value": "ffrt_storage_size_t",
  "id": "ffrt_storage_size_t",
  "level": 3
}, {
  "value": "ffrt_function_kind_t",
  "id": "ffrt_function_kind_t",
  "level": 3
}, {
  "value": "ffrt_dependence_type_t",
  "id": "ffrt_dependence_type_t",
  "level": 3
}, {
  "value": "ffrt_error_t",
  "id": "ffrt_error_t",
  "level": 3
}, {
  "value": "ffrt_mutex_type",
  "id": "ffrt_mutex_type",
  "level": 3
}, {
  "value": "qos_default",
  "id": "qos_default",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "ffrt_function_t()",
  "id": "ffrt_function_t",
  "level": 3
}, {
  "value": "ffrt_poller_cb()",
  "id": "ffrt_poller_cb",
  "level": 3
}, {
  "value": "ffrt_timer_cb()",
  "id": "ffrt_timer_cb",
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
        id: "type_defh",
        children: "type_def.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义通用类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ffrt/type_def.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libffrt.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Resourceschedule.Ffrt.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt",
        children: "FFRT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_timer_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定时器句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_qos_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QoS类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "using qos = int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["QoS类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-function-header-t/capi-ffrt-ffrt-function-header-t",
              children: "ffrt_function_header_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_function_header_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务执行体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-dependence-t/capi-ffrt-ffrt-dependence-t",
              children: "ffrt_dependence_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_dependence_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖数据结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "ffrt_deps_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_deps_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖结构定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "ffrt_task_attr_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_task_attr_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "并行任务属性结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-queue-attr-t/capi-ffrt-ffrt-queue-attr-t",
              children: "ffrt_queue_attr_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_queue_attr_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "串行队列属性结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-condattr-t/capi-ffrt-ffrt-condattr-t",
              children: "ffrt_condattr_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_condattr_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT条件变量属性结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutexattr-t/capi-ffrt-ffrt-mutexattr-t",
              children: "ffrt_mutexattr_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_mutexattr_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT锁属性结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-rwlockattr-t/capi-ffrt-ffrt-rwlockattr-t",
              children: "ffrt_rwlockattr_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_rwlockattr_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT读写锁属性结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutex-t/capi-ffrt-ffrt-mutex-t",
              children: "ffrt_mutex_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_mutex_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT互斥锁结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-rwlock-t/capi-ffrt-ffrt-rwlock-t",
              children: "ffrt_rwlock_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_rwlock_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT读写锁结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-cond-t/capi-ffrt-ffrt-cond-t",
              children: "ffrt_cond_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_cond_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT条件变量结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-handle-t/capi-ffrt-ffrt-task-handle-t",
              children: "ffrt_task_handle_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "并行任务句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-fiber-t/capi-ffrt-ffrt-fiber-t",
              children: "ffrt_fiber_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_fiber_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纤程结构。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#ffrt_queue_priority_t",
              children: "ffrt_queue_priority_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_queue_priority_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务的优先级类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_qos_default_t",
              children: "ffrt_qos_default_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_qos_default_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务的QoS类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_storage_size_t",
              children: "ffrt_storage_size_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_storage_size_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多种类型数据结构分配大小定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_function_kind_t",
              children: "ffrt_function_kind_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_function_kind_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_dependence_type_t",
              children: "ffrt_dependence_type_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_dependence_type_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_error_t",
              children: "ffrt_error_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_error_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_mutex_type",
              children: "ffrt_mutex_type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_mutex_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "互斥锁类型枚举。描述互斥类型，ffrt_mutex_normal是普通互斥锁；ffrt_mutex_recursive是递归互斥锁，ffrt_mutex_default是普通互斥锁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#qos_default",
              children: "qos_default"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务QoS类型枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#ffrt_function_t",
              children: "typedef void(*ffrt_function_t)(void*)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_function_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务执行函数指针类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_poller_cb",
              children: "typedef void (*ffrt_poller_cb)(void* data, uint32_t event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_poller_cb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "poller回调函数定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_timer_cb",
              children: "typedef void (*ffrt_timer_cb)(void* data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_timer_cb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "timer回调函数定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_queue_priority_t",
      children: "ffrt_queue_priority_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ffrt_queue_priority_t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务的优先级类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "ffrt_queue_priority_immediate = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "immediate 优先级"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_queue_priority_high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high 优先级"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_queue_priority_low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low 优先级"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_queue_priority_idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lowest 优先级"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_qos_default_t",
      children: "ffrt_qos_default_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ffrt_qos_default_t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务的QoS类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "ffrt_qos_inherit = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "继承当前任务QoS属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_qos_background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台任务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_qos_utility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_qos_default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_qos_user_initiated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户期望"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_qos_deadline_request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["时限请求  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_qos_user_interactive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户交互  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_qos_max = ffrt_qos_user_interactive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最高QoS等级  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_storage_size_t",
      children: "ffrt_storage_size_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ffrt_storage_size_t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多种类型数据结构分配大小定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ffrt_task_attr_storage_size = 128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_auto_managed_function_storage_size = 64 + sizeof(ffrt_function_header_t)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务执行体"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_mutex_storage_size = 64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "互斥锁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_cond_storage_size = 64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "条件变量"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_queue_attr_storage_size = 128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "队列属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_rwlock_storage_size = 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["读写锁  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_fiber_storage_size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["纤程在不同平台所占大小，单位：Byte。（平台相关）aarch64架构：22字节；arm架构：64字节；x86_64架构：8字节；其他平台：不支持。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_function_kind_t",
      children: "ffrt_function_kind_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ffrt_function_kind_t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "ffrt_function_kind_general"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用任务类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_function_kind_queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "队列任务类型"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_dependence_type_t",
      children: "ffrt_dependence_type_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ffrt_dependence_type_t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "ffrt_dependence_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据依赖类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_dependence_task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务依赖类型"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_error_t",
      children: "ffrt_error_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ffrt_error_t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "ffrt_error = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_success = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_error_nomem = ENOMEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_error_timedout = ETIMEDOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超时"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_error_busy = EBUSY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重新尝试"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_error_inval = EINVAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值无效"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_mutex_type",
      children: "ffrt_mutex_type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ffrt_mutex_type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "互斥锁类型枚举。描述互斥类型，ffrt_mutex_normal是普通互斥锁；ffrt_mutex_recursive是递归互斥锁，ffrt_mutex_default是普通互斥锁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ffrt_mutex_normal = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通互斥锁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_mutex_recursive = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "递归互斥锁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt_mutex_default = ffrt_mutex_normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认互斥锁"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qos_default",
      children: "qos_default"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum qos_default\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务QoS类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "qos_inherit = ffrt_qos_inherit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "继承当前任务的QoS类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qos_background = ffrt_qos_background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台任务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qos_utility = ffrt_qos_utility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qos_default = ffrt_qos_default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qos_user_initiated = ffrt_qos_user_initiated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户期望"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qos_deadline_request = ffrt_qos_deadline_request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["时限请求  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qos_user_interactive = ffrt_qos_user_interactive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户交互  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qos_max = ffrt_qos_user_interactive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最高QoS等级  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_function_t",
      children: "ffrt_function_t()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(*ffrt_function_t)(void*)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务执行函数指针类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_poller_cb",
      children: "ffrt_poller_cb()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*ffrt_poller_cb)(void* data, uint32_t event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "poller回调函数定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_timer_cb",
      children: "ffrt_timer_cb()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*ffrt_timer_cb)(void* data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "timer回调函数定义。"
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