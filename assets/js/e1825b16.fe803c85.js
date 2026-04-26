"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["643052"], {
529846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_function_flow_runtime_api_function_flow_runtime_c_function_flow_runtime_headerfile_capi_task_h_capi_task_h_md_e18_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-function-flow-runtime-api-function-flow-runtime-c-function-flow-runtime-headerfile-capi-task-h-capi-task-h-md-e18.json
var site_docs_ref_system_basicfun_api_function_flow_runtime_api_function_flow_runtime_c_function_flow_runtime_headerfile_capi_task_h_capi_task_h_md_e18_namespaceObject = JSON.parse('{"id":"system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-task-h/capi-task-h","title":"task.h","description":"概述","source":"@site/docs-ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-task-h/capi-task-h.md","sourceDirName":"system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-task-h","slug":"/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-task-h/capi-task-h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-task-h/capi-task-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"task.h","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-task-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-task-h"},"sidebar":"ref","previous":{"title":"sleep.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-sleep-h/capi-sleep-h"},"next":{"title":"timer.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-timer-h/capi-timer-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-task-h/capi-task-h.md


const frontMatter = {
	title: 'task.h',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-task-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-task-h'
};
const contentTitle = 'task.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "ffrt_task_attr_init()",
  "id": "ffrt_task_attr_init",
  "level": 3
}, {
  "value": "ffrt_task_attr_set_name()",
  "id": "ffrt_task_attr_set_name",
  "level": 3
}, {
  "value": "ffrt_task_attr_get_name()",
  "id": "ffrt_task_attr_get_name",
  "level": 3
}, {
  "value": "ffrt_task_attr_destroy()",
  "id": "ffrt_task_attr_destroy",
  "level": 3
}, {
  "value": "ffrt_task_attr_set_qos()",
  "id": "ffrt_task_attr_set_qos",
  "level": 3
}, {
  "value": "ffrt_task_attr_get_qos()",
  "id": "ffrt_task_attr_get_qos",
  "level": 3
}, {
  "value": "ffrt_task_attr_set_delay()",
  "id": "ffrt_task_attr_set_delay",
  "level": 3
}, {
  "value": "ffrt_task_attr_get_delay()",
  "id": "ffrt_task_attr_get_delay",
  "level": 3
}, {
  "value": "ffrt_task_attr_set_queue_priority()",
  "id": "ffrt_task_attr_set_queue_priority",
  "level": 3
}, {
  "value": "ffrt_task_attr_get_queue_priority()",
  "id": "ffrt_task_attr_get_queue_priority",
  "level": 3
}, {
  "value": "ffrt_task_attr_set_stack_size()",
  "id": "ffrt_task_attr_set_stack_size",
  "level": 3
}, {
  "value": "ffrt_task_attr_get_stack_size()",
  "id": "ffrt_task_attr_get_stack_size",
  "level": 3
}, {
  "value": "ffrt_this_task_update_qos()",
  "id": "ffrt_this_task_update_qos",
  "level": 3
}, {
  "value": "ffrt_this_task_get_qos()",
  "id": "ffrt_this_task_get_qos",
  "level": 3
}, {
  "value": "ffrt_this_task_get_id()",
  "id": "ffrt_this_task_get_id",
  "level": 3
}, {
  "value": "ffrt_alloc_auto_managed_function_storage_base()",
  "id": "ffrt_alloc_auto_managed_function_storage_base",
  "level": 3
}, {
  "value": "ffrt_submit_base()",
  "id": "ffrt_submit_base",
  "level": 3
}, {
  "value": "ffrt_submit_h_base()",
  "id": "ffrt_submit_h_base",
  "level": 3
}, {
  "value": "ffrt_submit_f()",
  "id": "ffrt_submit_f",
  "level": 3
}, {
  "value": "ffrt_submit_h_f()",
  "id": "ffrt_submit_h_f",
  "level": 3
}, {
  "value": "ffrt_task_handle_inc_ref()",
  "id": "ffrt_task_handle_inc_ref",
  "level": 3
}, {
  "value": "ffrt_task_handle_dec_ref()",
  "id": "ffrt_task_handle_dec_ref",
  "level": 3
}, {
  "value": "ffrt_task_handle_destroy()",
  "id": "ffrt_task_handle_destroy",
  "level": 3
}, {
  "value": "ffrt_wait_deps()",
  "id": "ffrt_wait_deps",
  "level": 3
}, {
  "value": "ffrt_wait()",
  "id": "ffrt_wait",
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
        id: "taskh",
        children: "task.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明任务的C接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ffrt/task.h>"]
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
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_init",
              children: "FFRT_C_API int ffrt_task_attr_init(ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化任务属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_set_name",
              children: "FFRT_C_API void ffrt_task_attr_set_name(ffrt_task_attr_t* attr, const char* name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置任务名字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_get_name",
              children: "FFRT_C_API const char* ffrt_task_attr_get_name(const ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务名字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_destroy",
              children: "FFRT_C_API void ffrt_task_attr_destroy(ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁任务属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_set_qos",
              children: "FFRT_C_API void ffrt_task_attr_set_qos(ffrt_task_attr_t* attr, ffrt_qos_t qos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置任务QoS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_get_qos",
              children: "FFRT_C_API ffrt_qos_t ffrt_task_attr_get_qos(const ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务QoS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_set_delay",
              children: "FFRT_C_API void ffrt_task_attr_set_delay(ffrt_task_attr_t* attr, uint64_t delay_us)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置任务延迟时间。  设置任务的调度延迟后，任务的输入输出依赖关系不再生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_get_delay",
              children: "FFRT_C_API uint64_t ffrt_task_attr_get_delay(const ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务延迟时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_set_queue_priority",
              children: "FFRT_C_API void ffrt_task_attr_set_queue_priority(ffrt_task_attr_t* attr, ffrt_queue_priority_t priority)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置并行队列任务优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_get_queue_priority",
              children: "FFRT_C_API ffrt_queue_priority_t ffrt_task_attr_get_queue_priority(const ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取并行队列任务优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_set_stack_size",
              children: "FFRT_C_API void ffrt_task_attr_set_stack_size(ffrt_task_attr_t* attr, uint64_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置任务栈大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_attr_get_stack_size",
              children: "FFRT_C_API uint64_t ffrt_task_attr_get_stack_size(const ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务栈大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_this_task_update_qos",
              children: "FFRT_C_API int ffrt_this_task_update_qos(ffrt_qos_t qos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新任务QoS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_this_task_get_qos",
              children: "FFRT_C_API ffrt_qos_t ffrt_this_task_get_qos(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务QoS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_this_task_get_id",
              children: "FFRT_C_API uint64_t ffrt_this_task_get_id(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_alloc_auto_managed_function_storage_base",
              children: "FFRT_C_API void *ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_t kind)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请函数执行结构的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_submit_base",
              children: "FFRT_C_API void ffrt_submit_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务调度执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_submit_h_base",
              children: "FFRT_C_API ffrt_task_handle_t ffrt_submit_h_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务调度执行并返回任务句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_submit_f",
              children: "FFRT_C_API void ffrt_submit_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务调度执行，是ffrt_submit_base接口的简化包装形式。该接口假定任务不需要销毁回调函数，给定的任务函数和参数被包装为通用任务结构，并将封装后的任务结构和其他参数传递给ffrt_submit_base接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_submit_h_f",
              children: "FFRT_C_API ffrt_task_handle_t ffrt_submit_h_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务调度执行并返回任务句柄，是ffrt_submit_h_base接口的简化包装形式。该接口假定任务不需要销毁回调函数，给定的任务函数和参数被包装为通用任务结构，并将封装后的任务结构和其他参数传递给ffrt_submit_h_base接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_handle_inc_ref",
              children: "FFRT_C_API uint32_t ffrt_task_handle_inc_ref(ffrt_task_handle_t handle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加任务句柄的引用数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_handle_dec_ref",
              children: "FFRT_C_API uint32_t ffrt_task_handle_dec_ref(ffrt_task_handle_t handle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少任务句柄的引用计数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_task_handle_destroy",
              children: "FFRT_C_API void ffrt_task_handle_destroy(ffrt_task_handle_t handle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁任务句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_wait_deps",
              children: "FFRT_C_API void ffrt_wait_deps(const ffrt_deps_t* deps)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待依赖的任务完成，当前任务开始执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ffrt_wait",
              children: "FFRT_C_API void ffrt_wait(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待之前所有提交任务完成，当前任务开始执行。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_init",
      children: "ffrt_task_attr_init()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_task_attr_init(ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化任务属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
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
            children: "FFRT_C_API int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化任务属性成功返回0，  初始化任务属性失败返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_set_name",
      children: "ffrt_task_attr_set_name()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_name(ffrt_task_attr_t* attr, const char* name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置任务名字。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务名字。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_get_name",
      children: "ffrt_task_attr_get_name()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API const char* ffrt_task_attr_get_name(const ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取任务名字。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "const ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
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
            children: "FFRT_C_API const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务名字成功返回非空指针，  获取任务名字失败返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_destroy",
      children: "ffrt_task_attr_destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_destroy(ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁任务属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_set_qos",
      children: "ffrt_task_attr_set_qos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_qos(ffrt_task_attr_t* attr, ffrt_qos_t qos)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置任务QoS。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#%E5%8F%98%E9%87%8F",
              children: "ffrt_qos_t"
            }), " qos"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务QoS。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_get_qos",
      children: "ffrt_task_attr_get_qos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_qos_t ffrt_task_attr_get_qos(const ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取任务QoS。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "const ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
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
            children: ["FFRT_C_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#%E5%8F%98%E9%87%8F",
              children: "ffrt_qos_t"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回任务的QoS，默认返回ffrt_qos_default。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_set_delay",
      children: "ffrt_task_attr_set_delay()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_delay(ffrt_task_attr_t* attr, uint64_t delay_us)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置任务延迟时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置任务的调度延迟后，任务的输入输出依赖关系不再生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t delay_us"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务延迟时间，单位微秒。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_get_delay",
      children: "ffrt_task_attr_get_delay()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint64_t ffrt_task_attr_get_delay(const ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取任务延迟时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "const ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
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
            children: "FFRT_C_API uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回任务的延迟时间。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_set_queue_priority",
      children: "ffrt_task_attr_set_queue_priority()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_queue_priority(ffrt_task_attr_t* attr, ffrt_queue_priority_t priority)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置并行队列任务优先级。"
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#ffrt_queue_priority_t",
              children: "ffrt_queue_priority_t"
            }), " priority"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务优先级。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_get_queue_priority",
      children: "ffrt_task_attr_get_queue_priority()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_queue_priority_t ffrt_task_attr_get_queue_priority(const ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取并行队列任务优先级。"
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "const ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
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
            children: ["FFRT_C_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#ffrt_queue_priority_t",
              children: "ffrt_queue_priority_t"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回任务优先级。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_set_stack_size",
      children: "ffrt_task_attr_set_stack_size()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_stack_size(ffrt_task_attr_t* attr, uint64_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置任务栈大小。"
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务栈大小，单位是字节。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_get_stack_size",
      children: "ffrt_task_attr_get_stack_size()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint64_t ffrt_task_attr_get_stack_size(const ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取任务栈大小。"
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "const ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性指针。"
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
            children: "FFRT_C_API uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回任务栈大小，单位是字节。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_this_task_update_qos",
      children: "ffrt_this_task_update_qos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_this_task_update_qos(ffrt_qos_t qos)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新任务QoS。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#%E5%8F%98%E9%87%8F",
              children: "ffrt_qos_t"
            }), " qos"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前任务待更新的QoS。"
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
            children: "FFRT_C_API int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新任务QoS成功返回0，  更新任务QoS失败返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_this_task_get_qos",
      children: "ffrt_this_task_get_qos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_qos_t ffrt_this_task_get_qos(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取任务QoS。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: ["FFRT_C_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#%E5%8F%98%E9%87%8F",
              children: "ffrt_qos_t"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回任务QoS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_this_task_get_id",
      children: "ffrt_this_task_get_id()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint64_t ffrt_this_task_get_id(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取任务id。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "FFRT_C_API uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前任务的id。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_alloc_auto_managed_function_storage_base",
      children: "ffrt_alloc_auto_managed_function_storage_base()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void *ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_t kind)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "申请函数执行结构的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#ffrt_function_kind_t",
              children: "ffrt_function_kind_t"
            }), " kind"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数执行结构类型，支持通用和队列函数执行结构类型。"
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
            children: "FFRT_C_API void *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请函数执行结构成功返回非空指针，  申请函数执行结构失败返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_submit_base",
      children: "ffrt_submit_base()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_submit_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提交任务调度执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-function-header-t/capi-ffrt-ffrt-function-header-t",
              children: "ffrt_function_header_t"
            }), "* f"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务执行体封装的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "const ffrt_deps_t"
            }), "* in_deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入依赖指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "const ffrt_deps_t"
            }), "* out_deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出依赖指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "const ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_submit_h_base",
      children: "ffrt_submit_h_base()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_task_handle_t ffrt_submit_h_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提交任务调度执行并返回任务句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-function-header-t/capi-ffrt-ffrt-function-header-t",
              children: "ffrt_function_header_t"
            }), "* f"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务执行体封装的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "const ffrt_deps_t"
            }), "* in_deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入依赖指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "const ffrt_deps_t"
            }), "* out_deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出依赖指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "const ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FFRT_C_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-handle-t/capi-ffrt-ffrt-task-handle-t",
              children: "ffrt_task_handle_t"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务成功返回非空任务句柄，  提交任务失败返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_submit_f",
      children: "ffrt_submit_f()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_submit_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提交任务调度执行，是ffrt_submit_base接口的简化包装形式。该接口假定任务不需要销毁回调函数，给定的任务函数和参数被包装为通用任务结构，并将封装后的任务结构和其他参数传递给ffrt_submit_base接口。"
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#ffrt_function_t",
              children: "ffrt_function_t"
            }), " func"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的任务函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递给任务函数的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "const ffrt_deps_t"
            }), "* in_deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入依赖指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "const ffrt_deps_t"
            }), "* out_deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出依赖指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "const ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-task-h/capi-task-h#ffrt_submit_base",
        children: "ffrt_submit_base"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_submit_h_f",
      children: "ffrt_submit_h_f()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_task_handle_t ffrt_submit_h_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提交任务调度执行并返回任务句柄，是ffrt_submit_h_base接口的简化包装形式。该接口假定任务不需要销毁回调函数，给定的任务函数和参数被包装为通用任务结构，并将封装后的任务结构和其他参数传递给ffrt_submit_h_base接口。"
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#ffrt_function_t",
              children: "ffrt_function_t"
            }), " func"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的任务函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递给任务函数的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "const ffrt_deps_t"
            }), "* in_deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入依赖指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "const ffrt_deps_t"
            }), "* out_deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出依赖指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-attr-t/capi-ffrt-ffrt-task-attr-t",
              children: "const ffrt_task_attr_t"
            }), "* attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务属性。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FFRT_C_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-handle-t/capi-ffrt-ffrt-task-handle-t",
              children: "ffrt_task_handle_t"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务成功返回非空任务句柄，  提交任务失败返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-task-h/capi-task-h#ffrt_submit_h_base",
        children: "ffrt_submit_h_base"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_handle_inc_ref",
      children: "ffrt_task_handle_inc_ref()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint32_t ffrt_task_handle_inc_ref(ffrt_task_handle_t handle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加任务句柄的引用数。"
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-handle-t/capi-ffrt-ffrt-task-handle-t",
              children: "ffrt_task_handle_t"
            }), " handle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务句柄。"
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
            children: "FFRT_C_API uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回任务句柄原始引用计数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_handle_dec_ref",
      children: "ffrt_task_handle_dec_ref()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint32_t ffrt_task_handle_dec_ref(ffrt_task_handle_t handle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "减少任务句柄的引用计数。"
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-handle-t/capi-ffrt-ffrt-task-handle-t",
              children: "ffrt_task_handle_t"
            }), " handle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务句柄。"
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
            children: "FFRT_C_API uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回任务句柄原始引用计数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_handle_destroy",
      children: "ffrt_task_handle_destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_handle_destroy(ffrt_task_handle_t handle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁任务句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-task-handle-t/capi-ffrt-ffrt-task-handle-t",
              children: "ffrt_task_handle_t"
            }), " handle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务句柄。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_wait_deps",
      children: "ffrt_wait_deps()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_wait_deps(const ffrt_deps_t* deps)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "等待依赖的任务完成，当前任务开始执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-deps-t/capi-ffrt-ffrt-deps-t",
              children: "const ffrt_deps_t"
            }), "* deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_wait",
      children: "ffrt_wait()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_wait(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "等待之前所有提交任务完成，当前任务开始执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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