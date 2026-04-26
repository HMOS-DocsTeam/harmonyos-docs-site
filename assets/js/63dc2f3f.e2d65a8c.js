"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["655715"], {
942316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_ffrt_kit_ffrt_api_guideline_c_ffrt_api_guideline_c_md_63d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-ffrt-kit-ffrt-api-guideline-c-ffrt-api-guideline-c-md-63d.json
var site_docs_system_basicfun_ffrt_kit_ffrt_api_guideline_c_ffrt_api_guideline_c_md_63d_namespaceObject = JSON.parse('{"id":"system-basicfun/ffrt-kit/ffrt-api-guideline-c/ffrt-api-guideline-c","title":"Function Flow Runtime C API","description":"任务管理","source":"@site/docs/system-basicfun/ffrt-kit/ffrt-api-guideline-c/ffrt-api-guideline-c.md","sourceDirName":"system-basicfun/ffrt-kit/ffrt-api-guideline-c","slug":"/system-basicfun/ffrt-kit/ffrt-api-guideline-c/","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-api-guideline-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Function Flow Runtime C API","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Function Flow Runtime开发指导","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-development-guideline/"},"next":{"title":"Input Kit简介","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/input-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/ffrt-kit/ffrt-api-guideline-c/ffrt-api-guideline-c.md


const frontMatter = {
	title: 'Function Flow Runtime C API',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Function Flow Runtime C API';

const assets = {

};



const toc = [{
  "value": "任务管理",
  "id": "任务管理",
  "level": 2
}, {
  "value": "ffrt_deps_t",
  "id": "ffrt_deps_t",
  "level": 3
}, {
  "value": "ffrt_task_attr_t",
  "id": "ffrt_task_attr_t",
  "level": 3
}, {
  "value": "ffrt_alloc_auto_managed_function_storage_base",
  "id": "ffrt_alloc_auto_managed_function_storage_base",
  "level": 3
}, {
  "value": "ffrt_submit_base",
  "id": "ffrt_submit_base",
  "level": 3
}, {
  "value": "ffrt_submit_f",
  "id": "ffrt_submit_f",
  "level": 3
}, {
  "value": "ffrt_submit_h_base",
  "id": "ffrt_submit_h_base",
  "level": 3
}, {
  "value": "ffrt_submit_h_f",
  "id": "ffrt_submit_h_f",
  "level": 3
}, {
  "value": "ffrt_task_handle_inc_ref",
  "id": "ffrt_task_handle_inc_ref",
  "level": 3
}, {
  "value": "ffrt_task_handle_dec_ref",
  "id": "ffrt_task_handle_dec_ref",
  "level": 3
}, {
  "value": "ffrt_task_handle_destroy",
  "id": "ffrt_task_handle_destroy",
  "level": 3
}, {
  "value": "ffrt_wait",
  "id": "ffrt_wait",
  "level": 3
}, {
  "value": "ffrt_wait_deps",
  "id": "ffrt_wait_deps",
  "level": 3
}, {
  "value": "ffrt_this_task_update_qos",
  "id": "ffrt_this_task_update_qos",
  "level": 3
}, {
  "value": "ffrt_this_task_get_qos",
  "id": "ffrt_this_task_get_qos",
  "level": 3
}, {
  "value": "ffrt_this_task_get_id",
  "id": "ffrt_this_task_get_id",
  "level": 3
}, {
  "value": "任务队列",
  "id": "任务队列",
  "level": 2
}, {
  "value": "ffrt_queue_attr_t",
  "id": "ffrt_queue_attr_t",
  "level": 3
}, {
  "value": "ffrt_queue_t",
  "id": "ffrt_queue_t",
  "level": 3
}, {
  "value": "同步原语",
  "id": "同步原语",
  "level": 2
}, {
  "value": "ffrt_mutexattr_t",
  "id": "ffrt_mutexattr_t",
  "level": 3
}, {
  "value": "ffrt_mutex_t",
  "id": "ffrt_mutex_t",
  "level": 3
}, {
  "value": "ffrt_rwlock_t",
  "id": "ffrt_rwlock_t",
  "level": 3
}, {
  "value": "ffrt_cond_t",
  "id": "ffrt_cond_t",
  "level": 3
}, {
  "value": "阻塞原语",
  "id": "阻塞原语",
  "level": 2
}, {
  "value": "ffrt_usleep",
  "id": "ffrt_usleep",
  "level": 3
}, {
  "value": "协同原语",
  "id": "协同原语",
  "level": 2
}, {
  "value": "ffrt_yield",
  "id": "ffrt_yield",
  "level": 3
}, {
  "value": "定时器",
  "id": "定时器",
  "level": 2
}, {
  "value": "ffrt_timer_t",
  "id": "ffrt_timer_t",
  "level": 3
}, {
  "value": "循环",
  "id": "循环",
  "level": 2
}, {
  "value": "ffrt_loop_t",
  "id": "ffrt_loop_t",
  "level": 3
}, {
  "value": "纤程",
  "id": "纤程",
  "level": 2
}, {
  "value": "ffrt_fiber_t",
  "id": "ffrt_fiber_t",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "function-flow-runtime-c-api",
        children: "Function Flow Runtime C API"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "任务管理",
      children: "任务管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_deps_t",
      children: "ffrt_deps_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    ffrt_dependence_data,\n    ffrt_dependence_task,\n} ffrt_dependence_type_t;\n\ntypedef struct {\n    ffrt_dependence_type_t type;\n    const void* ptr;\n} ffrt_dependence_t;\n\ntypedef struct {\n    uint32_t len;\n    const ffrt_dependence_t* items;\n} ffrt_deps_t;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "len：数据依赖个数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "items：数据依赖数组，数据长度等于len。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ptr：数据地址。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type：区分数据和task_handle。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ffrt_dependence_t作用等同C++的dependence，ffrt_deps_t作用等同C++的std::vector<dependence>。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建数据依赖\nint x = 0;\nffrt_dependence_t data_dependence[1];\ndata_dependence[0].type = ffrt_dependence_data;\ndata_dependence[0].ptr = &x;\nffrt_deps_t data_deps;\ndata_deps.len = 1;\ndata_deps.items = data_dependence;\n\n// 创建任务依赖\nffrt_task_handle_t task = ffrt_submit_h_base(user_function_header, NULL, NULL, &attr);\nffrt_dependence_t task_dependence[1];\ntask_dependence[0].type = ffrt_dependence_task;\ntask_dependence[0].ptr = task;\nffrt_deps_t task_deps;\ntask_deps.len = 1;\ntask_deps.items = task_dependence;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_attr_t",
      children: "ffrt_task_attr_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    uint32_t storage[(ffrt_task_attr_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)];\n} ffrt_task_attr_t;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务的属性描述，在提交普通任务或者队列任务时，可以通过ffrt_task_attr_t来配置其属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_init"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_task_attr_init(ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0表示成功，-1表示失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化一个ffrt_task_attr_t对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_destroy"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_destroy(ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "销毁一个ffrt_task_attr_t对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_set_name"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_name(ffrt_task_attr_t* attr, const char* name);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "name：任务的名称。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置任务的名称，名称是用于维测信息打印的一种有效信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_get_name"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API const char* ffrt_task_attr_get_name(const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务的名称。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取设置的任务名称。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_set_qos"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_qos(ffrt_task_attr_t* attr, ffrt_qos_t qos);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "qos：QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置任务的QoS等级，QoS等级影响任务执行时的系统资源供给。不设置QoS的情况下，队列任务默认继承队列的QoS等级，普通任务默认设置为ffrt_qos_default。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_get_qos"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_qos_t ffrt_task_attr_get_qos(const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取设置的QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_set_delay"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_delay(ffrt_task_attr_t* attr, uint64_t delay_us);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "delay_us：调度延迟，单位为微秒。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置任务的调度延迟，任务会在延迟间隔之后才调度执行。不设置的情况下，默认延迟为零。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置任务的调度延迟后，任务的输入输出依赖关系不再生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_get_delay"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint64_t ffrt_task_attr_get_delay(const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调度延迟。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取设置的调度延迟。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_set_queue_priority"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_queue_priority(ffrt_task_attr_t* attr, ffrt_queue_priority_t priority);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "priority：任务优先级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置任务的优先级，目前仅并发队列任务支持优先级功能，同一个并发队列中按照优先级顺序来调度任务。不设置的情况下，任务默认优先级ffrt_queue_priority_low。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_get_queue_priority"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_queue_priority_t ffrt_task_attr_get_queue_priority(const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务优先级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取设置的优先级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_set_stack_size"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_attr_set_stack_size(ffrt_task_attr_t* attr, uint64_t size);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "size：协程栈大小，单位为字节。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置任务的协程栈大小，影响任务执行过程中最大的调用栈使用空间上限。在不设置的情况下，默认的协程栈大小为1MB。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_task_attr_get_stack_size"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint64_t ffrt_task_attr_get_stack_size(const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：ffrt_task_attr_t对象指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "协程栈大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取设置的协程栈大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 提交一个普通任务，其名称为\"sample_task\"，QoS等级为background，调度时延为1ms，协程栈大小为2MB\nffrt_task_attr_t attr;\nffrt_task_attr_init(&attr);\nffrt_task_attr_set_name(&attr, \"sample_task\");\nffrt_task_attr_set_qos(&attr, ffrt_qos_background);\nffrt_task_attr_set_delay(&attr, 1000);\nffrt_task_attr_set_stack_size(&attr, 2 * 1024 * 1024);\nffrt_submit_base(user_function_header, NULL, NULL, &attr);\nffrt_task_attr_destroy(&attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_alloc_auto_managed_function_storage_base",
      children: "ffrt_alloc_auto_managed_function_storage_base"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    ffrt_function_kind_general,\n    ffrt_function_kind_queue,\n} ffrt_function_kind_t;\n\ntypedef void(*ffrt_function_t)(void*);\ntypedef struct {\n    ffrt_function_t exec;\n    ffrt_function_t destroy;\n    uint64_t reserve[2];\n} ffrt_function_header_t;\n\nFFRT_C_API void *ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_t kind);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kind：提交普通任务选择ffrt_function_kind_general，提交队列任务选择ffrt_function_kind_queue。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "exec：任务实际执行调用的函数指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "destroy：任务完成后调用的函数指针，可用于资源清理等用途。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reserve：内部预留空间，用户请勿使用该成员。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回存储用户任务执行体的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分配了一块内存空间，内存空间头部为ffrt_function_header_t结构体（返回指针可转换为ffrt_function_header_t*指针使用）。头部后留有64字节的可用空间，用户可自定义使用该空间，通常用于入参或返回值的存储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例1：生成一个不带参数和返回值的任务执行体："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <stdio.h>\n#include \"ffrt/task.h\"\n\nvoid foo(void* data)\n{\n    printf(\"foo\\n\");\n}\n\nvoid after_foo(void* data)\n{\n    printf(\"after_foo\\n\");\n}\n\nint main()\n{\n    ffrt_function_header_t* func = (ffrt_function_header_t*)ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_general);\n\n    func->exec = foo;\n    func->destroy = after_foo;\n\n    ffrt_submit_base(func, NULL, NULL, NULL);\n    ffrt_wait();\n\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例2：生成一个带参数和返回值的任务执行体："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <stdio.h>\n#include \"ffrt/task.h\"\n\nint foo(int x, int y)\n{\n    printf(\"foo: x = %d, y = %d\\n\", x, y);\n    return x + y;\n}\n\nvoid after_foo(void* data)\n{\n    printf(\"after_foo\\n\");\n}\n\n// 用户自定义任务执行体，可携带参数和返回值\ntypedef struct {\n    ffrt_function_header_t header; // 头部内存为ffrt_function_header_t\n    int arg1; // 参数1\n    int arg2; // 参数2\n    int ret; // 返回值\n} user_defined_function;\n\n// 将foo包装成void(*)(void*)的exec函数类型\nvoid exec_func_wrapper(void* header)\n{\n    user_defined_function* func = (user_defined_function*)header;\n    func->ret = foo(func->arg1, func->arg2); // 内部展开真正的foo函数，传递参数，获取返回值\n}\n\nint main()\n{\n    user_defined_function* func = (user_defined_function*)ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_general);\n\n    func->header.exec = exec_func_wrapper;\n    func->header.destroy = after_foo;\n    func->arg1 = 1;\n    func->arg2 = 2;\n\n    ffrt_submit_base((ffrt_function_header_t*)func, NULL, NULL, NULL);\n    ffrt_wait();\n\n    printf(\"ret = %d\\n\", func->ret);\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_submit_base",
      children: "ffrt_submit_base"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_submit_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f：用户的任务执行体，可以是原生的ffrt_function_header_t类型，也可以基于ffrt_function_header_t自定义拓展类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "in_deps：任务的输入数据依赖。输入数据依赖通常以实际数据的地址表达，也支持ffrt_task_handle_t作为一种特殊输入依赖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "out_deps：任务的输出数据依赖。输出数据依赖通常以实际数据的地址表达，不支持ffrt_task_handle_t。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：任务的属性设置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提交一个普通任务，任务支持相关属性设置，在输入依赖解除后任务可调度执行，任务执行完成后解除输出依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例1：提交带属性的任务："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <stdio.h>\n#include \"ffrt/task.h\"\n\nvoid foo(void* data)\n{\n    printf(\"foo\\n\");\n}\n\nvoid after_foo(void* data)\n{\n    printf(\"after_foo\\n\");\n}\n\nint main()\n{\n    // 提交一个任务\n    ffrt_function_header_t* func = (ffrt_function_header_t*)ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_general);\n    func->exec = foo;\n    func->destroy = after_foo;\n    ffrt_submit_base(func, NULL, NULL, NULL);\n\n    // 提交一个带属性的任务\n    ffrt_task_attr_t attr;\n    ffrt_task_attr_init(&attr);\n    ffrt_task_attr_set_name(&attr, \"sample_task\");\n    ffrt_task_attr_set_qos(&attr, ffrt_qos_background);\n    ffrt_submit_base(func, NULL, NULL, &attr);\n\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例2：提交带数据依赖的任务："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 提交两个带数据依赖的任务，任务间存在Read-After-Write依赖关系\n#include <math.h>\n#include <stdio.h>\n#include \"ffrt/task.h\"\n\nvoid cos_func(float* x, float* y)\n{\n    *y = cos(*x);\n}\n\nvoid tan_func(float* y, float* z)\n{\n    *z = tan(*y);\n}\n\ntypedef struct {\n    ffrt_function_header_t header;\n    float* arg1; // 参数1\n    float* arg2; // 参数2\n} user_defined_function;\n\nvoid cos_func_wrapper(void* header)\n{\n    user_defined_function* func = (user_defined_function*)header;\n    cos_func(func->arg1, func->arg2);\n}\n\nvoid tan_func_wrapper(void* header)\n{\n    user_defined_function* func = (user_defined_function*)header;\n    tan_func(func->arg1, func->arg2);\n}\n\nvoid destroy(void* header) {}\n\nint main()\n{\n    float x = 0.5f, y, z;\n\n    user_defined_function* func1 = (user_defined_function*)ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_general);\n    func1->header.exec = cos_func_wrapper;\n    func1->header.destroy = destroy;\n    func1->arg1 = &x;\n    func1->arg2 = &y;\n\n    user_defined_function* func2 = (user_defined_function*)ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_general);\n    func2->header.exec = tan_func_wrapper;\n    func2->header.destroy = destroy;\n    func2->arg1 = &y;\n    func2->arg2 = &z;\n\n    ffrt_dependence_t dependence_x[1];\n    dependence_x[0].type = ffrt_dependence_data;\n    dependence_x[0].ptr = &x;\n    ffrt_deps_t deps_x;\n    deps_x.len = 1;\n    deps_x.items = dependence_x;\n    ffrt_dependence_t dependence_y[1];\n    dependence_y[0].type = ffrt_dependence_data;\n    dependence_y[0].ptr = &y;\n    ffrt_deps_t deps_y;\n    deps_y.len = 1;\n    deps_y.items = dependence_y;\n    ffrt_dependence_t dependence_z[1];\n    dependence_z[0].type = ffrt_dependence_data;\n    dependence_z[0].ptr = &z;\n    ffrt_deps_t deps_z;\n    deps_z.len = 1;\n    deps_z.items = dependence_z;\n\n    ffrt_submit_base((ffrt_function_header_t*)func1, &deps_x, &deps_y, NULL);\n    ffrt_submit_base((ffrt_function_header_t*)func2, &deps_y, &deps_z, NULL);\n\n    ffrt_wait();\n    printf(\"x = %f, y = %f, z = %f\\n\", x, y, z);\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_submit_f",
      children: "ffrt_submit_f"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_submit_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "func：指定的任务函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arg：传递给任务函数的参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "in_deps：任务的输入数据依赖。输入数据依赖通常以实际数据的地址表达，也支持ffrt_task_handle_t作为一种特殊输入依赖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "out_deps：任务的输出数据依赖。输出数据依赖通常以实际数据的地址表达，不支持ffrt_task_handle_t。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：任务的属性设置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ffrt_submit_f接口是ffrt_submit_base接口的简化包装形式。当任务不需要销毁回调函数时，接口内部将任务函数及其参数包装成通用任务结构，再调用ffrt_submit_base接口提交任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258465)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdio.h>\n#include \"ffrt/task.h\"\n\n// 待提交执行的函数\nvoid OnePlusForTest(void* arg)\n{\n    (*static_cast<int*>(arg)) += 1;\n}\n\nint main()\n{\n    int a = 0;\n    ffrt_submit_f(OnePlusForTest, &a, NULL, NULL, NULL);\n\n    ffrt_wait();\n\n    printf(\"a = %d\\n\", a);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_submit_h_base",
      children: "ffrt_submit_h_base"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void* ffrt_task_handle_t;\n\nFFRT_C_API ffrt_task_handle_t ffrt_submit_h_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f：用户的任务执行体，可以是原生的ffrt_function_header_t类型，也可以基于ffrt_function_header_t自定义拓展类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "in_deps：任务的输入数据依赖。输入数据依赖通常以实际数据的地址表达，也支持ffrt_task_handle_t作为一种特殊输入依赖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "out_deps：任务的输出数据依赖。输出数据依赖通常以实际数据的地址表达，不支持ffrt_task_handle_t。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：任务的属性设置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_task_handle_t任务的句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比于ffrt_submit_base接口，增加了任务句柄的返回值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 提交一个任务，获取任务句柄\nffrt_function_header_t* func = (ffrt_function_header_t*)ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_general);\nfunc->exec = foo;\nfunc->destroy = after_foo;\nffrt_task_handle_t t = ffrt_submit_h_base(func, NULL, NULL, NULL);\n// 注意C API的ffrt_task_handle_t需要用户调用ffrt_task_handle_destroy显式销毁\nffrt_task_handle_destroy(t);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_submit_h_f",
      children: "ffrt_submit_h_f"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void* ffrt_task_handle_t;\n\nFFRT_C_API ffrt_task_handle_t ffrt_submit_h_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "func：指定的任务函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arg：传递给任务函数的参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "in_deps：任务的输入数据依赖。输入数据依赖通常以实际数据的地址表达，也支持ffrt_task_handle_t作为一种特殊输入依赖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "out_deps：任务的输出数据依赖。输出数据依赖通常以实际数据的地址表达，不支持ffrt_task_handle_t。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：任务的属性设置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_task_handle_t任务的句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比于ffrt_submit_f接口，增加了任务句柄的返回值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(358612)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdio.h>\n#include <vector>\n#include \"ffrt/task.h\"\n\n// 待提交执行的函数\nvoid OnePlusForTest(void* arg)\n{\n    (*static_cast<int*>(arg)) += 1;\n}\n\nint main()\n{\n    int a = 0;\n    ffrt_task_handle_t task = ffrt_submit_h_f(OnePlusForTest, &a, NULL, NULL, NULL);\n\n    const std::vector<ffrt_dependence_t> wait_deps = {{ffrt_dependence_task, task}};\n    ffrt_deps_t wait{static_cast<uint32_t>(wait_deps.size()), wait_deps.data()};\n    ffrt_wait_deps(&wait);\n\n    printf(\"a = %d\\n\", a);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_handle_inc_ref",
      children: "ffrt_task_handle_inc_ref"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint32_t ffrt_task_handle_inc_ref(ffrt_task_handle_t handle);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handle：任务句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务的引用计数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过任务句柄增加对应任务的引用计数，每次调用引用计数加一。用于控制任务的生命周期使用，当引用计数不为零时，对应的任务资源不会被释放。注意ffrt_submit_h_base返回的ffrt_task_handle_t默认已有一个引用计数。通过ffrt_task_handle_destroy销毁ffrt_task_handle_t时默认减去一个引用计数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_handle_dec_ref",
      children: "ffrt_task_handle_dec_ref"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint32_t ffrt_task_handle_dec_ref(ffrt_task_handle_t handle);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handle：任务句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务的引用计数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过任务句柄减去对应任务的引用计数，每次调用引用计数减一。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_task_handle_destroy",
      children: "ffrt_task_handle_destroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_task_handle_destroy(ffrt_task_handle_t handle);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handle：任务句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁任务句柄，同时默认减去一个任务引用计数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_wait",
      children: "ffrt_wait"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_wait(void);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步等待所有前序提交的同级任务完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 同步三个任务完成\nffrt_submit_base(func1, NULL, NULL, NULL);\nffrt_submit_base(func2, NULL, NULL, NULL);\nffrt_submit_base(func3, NULL, NULL, NULL);\nffrt_wait();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_wait_deps",
      children: "ffrt_wait_deps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_wait_deps(const ffrt_deps_t* deps);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deps：需要同步的数据依赖。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步对应的数据依赖解除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 构建x的数据依赖\nint x = 0;\nffrt_dependence_t dependence[1];\ndependence[0].type = ffrt_dependence_data;\ndependence[0].ptr = &x;\nffrt_deps_t deps;\ndeps.len = 1;\ndeps.items = dependence;\n\n// 提交一个写任务\nffrt_submit_base(func, NULL, &deps, NULL);\n\n// 同步写任务解除数据依赖\nffrt_wait_deps(&deps);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_this_task_update_qos",
      children: "ffrt_this_task_update_qos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_this_task_update_qos(ffrt_qos_t qos);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "qos：QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0表示成功，1表示失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在任务执行过程中，动态修改任务的QoS等级。注意该接口在任务的函数闭包内使用，修改的是当前正在执行的任务的QoS等级，接口调用会使任务先挂起一次再恢复执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 一个qos_background的任务执行过程中动态修改QoS等级\nffrt::submit([]() {\n    // ...\n    int ret = ffrt_this_task_update_qos(ffrt_qos_user_initiated);\n    // ...\n}, ffrt::task_attr().qos(ffrt::qos_background));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_this_task_get_qos",
      children: "ffrt_this_task_get_qos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_qos_t ffrt_this_task_get_qos(void);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前正在执行任务的QoS等级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 一个任务执行过程中动态获取其QoS等级\nffrt::submit([]() {\n    // ...\n    // 获取的qos等于ffrt_qos_background\n    ffrt_qos_t qos = ffrt_this_task_get_qos();\n    // ...\n}, ffrt::task_attr().qos(ffrt::qos_background));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_this_task_get_id",
      children: "ffrt_this_task_get_id"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API uint64_t ffrt_this_task_get_id(void);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务的id。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前正在执行任务的id。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 一个任务执行过程中动态获取其任务id\nffrt::submit([]() {\n    // ...\n    // 获取的唯一任务id\n    uint64_t task_id = ffrt_this_task_get_id();\n    // ...\n}, ffrt::task_attr().qos(ffrt::qos_background));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "任务队列",
      children: "任务队列"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_queue_attr_t",
      children: "ffrt_queue_attr_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    uint32_t storage[(ffrt_queue_attr_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)];\n} ffrt_queue_attr_t;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于配置队列的属性，如 QoS、超时时间、回调函数和最大并发数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_init"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int ffrt_queue_attr_init(ffrt_queue_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回0表示成功，其他值表示失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化队列属性对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_destroy"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_attr_destroy(ffrt_queue_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "销毁队列属性对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_set_qos"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_attr_set_qos(ffrt_queue_attr_t* attr, ffrt_qos_t qos);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "qos：QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置队列的QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_get_qos"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ffrt_qos_t ffrt_queue_attr_get_qos(const ffrt_queue_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回当前QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取当前属性中设置的QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_set_timeout"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_attr_set_timeout(ffrt_queue_attr_t* attr, uint64_t timeout_us);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "timeout_us：超时时间（微秒）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置队列的超时时间（以微秒为单位）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_get_timeout"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint64_t ffrt_queue_attr_get_timeout(const ffrt_queue_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回当前超时阈值（微秒）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取当前属性中设置的超时时间。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_set_callback"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_attr_set_callback(ffrt_queue_attr_t* attr, ffrt_function_header_t* f);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f：是任务执行器的指针，描述了该CPU任务如何执行和销毁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置检测到队列任务超时后执行的回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议在f中调用exit函数，可能导致未定义行为。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_get_callback"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ffrt_function_header_t* ffrt_queue_attr_get_callback(const ffrt_queue_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回任务执行器的指针，描述了该CPU任务如何执行和销毁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取当前属性中设置的超时回调函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_set_max_concurrency"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_attr_set_max_concurrency(ffrt_queue_attr_t* attr, const int max_concurrency);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "max_concurrency：最大并发数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置队列的最大并发数（仅支持并发队列）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_get_max_concurrency"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int ffrt_queue_attr_get_max_concurrency(const ffrt_queue_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回当前最大并发数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取当前属性中设置的最大并发数（仅支持并发队列）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_set_thread_mode"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_attr_set_thread_mode(ffrt_queue_attr_t* attr, bool mode);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mode：设置队列任务运行方式。true表示以线程模式运行，false表示以协程模式运行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置队列中的任务是以协程模式还是以线程模式运行。默认以协程模式运行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(45844)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_attr_get_thread_mode"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool ffrt_queue_attr_get_thread_mode(const ffrt_queue_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "true表示以线程模式运行，false表示以协程模式运行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取队列中的任务是以协程模式还是以线程模式运行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(505200)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <functional>\n#include \"ffrt/queue.h\"\n#include \"ffrt/cpp/task.h\"\n\nint main()\n{\n    ffrt_queue_attr_t queue_attr;\n    // 初始化队列属性，必需\n    ffrt_queue_attr_init(&queue_attr);\n\n    ffrt_queue_attr_set_qos(&queue_attr, static_cast<int>(ffrt_qos_utility));\n\n    ffrt_queue_attr_set_timeout(&queue_attr, 10000);\n\n    int x = 0;\n    std::function<void()>&& basicFunc = [&x]() { x += 1; };\n    ffrt_function_header_t* func = ffrt_queue_attr_get_callback(&queue_attr);\n\n    ffrt_queue_attr_set_callback(&queue_attr, ffrt::create_function_wrapper(basicFunc, ffrt_function_kind_queue));\n    // 销毁队列属性，必需\n    ffrt_queue_attr_destroy(&queue_attr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_queue_t",
      children: "ffrt_queue_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void* ffrt_queue_t;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "队列指针，提供一系列C接口支持队列任务的提交、取消、等待和排队任务数量查询。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_create"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ffrt_queue_t ffrt_queue_create(ffrt_queue_type_t type, const char* name, const ffrt_queue_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type：队列类型（如ffrt_queue_serial或ffrt_queue_concurrent）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "name：队列名称。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：队列属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_queue_t：成功则返回一个非空的队列句柄；否则返回空指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建指定类型和名称的队列。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_destroy"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_destroy(ffrt_queue_t queue);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "queue：队列的句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "销毁一个队列。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_submit"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_submit(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "queue：队列的句柄。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f：任务执行器的指针，描述了该CPU任务如何执行和销毁。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：任务属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提交任务到队列中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_submit_f"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_submit_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "queue：队列的句柄。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "func：指定的任务函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arg：传递给任务函数的参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：任务属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当任务不需要销毁回调函数时，提交任务到队列中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(68633)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_submit_h"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ffrt_task_handle_t ffrt_queue_submit_h(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "queue：队列的句柄。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f：任务执行器的指针，描述了该CPU任务如何执行和销毁。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：任务属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_task_handle_t：成功则返回一个非空的任务句柄；否则返回空指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提交任务到队列中，并返回任务句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_submit_h_f"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ffrt_task_handle_t ffrt_queue_submit_h_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "queue：队列的句柄。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "func：指定的任务函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arg：传递给任务函数的参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：任务属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_task_handle_t：成功则返回一个非空的任务句柄；否则返回空指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当任务不需要销毁回调函数时，提交任务到队列中，并返回任务句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(860621)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_wait"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void ffrt_queue_wait(ffrt_task_handle_t handle);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_task_handle_t：任务句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "等待一个队列任务完成。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_queue_cancel"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int ffrt_queue_cancel(ffrt_task_handle_t handle);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_task_handle_t：任务句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回0表示成功，其他值表示失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取消一个队列任务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_get_main_queue"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ffrt_queue_t ffrt_get_main_queue();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主线程队列。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取主线程队列，用于FFRT线程与主线程通信。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_get_current_queue"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ffrt_queue_t ffrt_get_current_queue();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkTS Worker线程任务队列。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此接口已于API 18版本后废弃，不建议继续使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取ArkTS Worker线程队列，用于FFRT线程与ArkTS Worker线程通信。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ffrt/queue.h\"\n#include \"ffrt/cpp/task.h\"\n\nint main()\n{\n    ffrt_queue_attr_t queue_attr;\n    // 1、初始化队列属性，必需\n    (void)ffrt_queue_attr_init(&queue_attr);\n\n    // 2、创建串行队列，并返回队列句柄queue_handle\n    ffrt_queue_t queue_handle = ffrt_queue_create(ffrt_queue_serial, \"test_queue\", &queue_attr);\n\n    int result = 0;\n    std::function<void()>&& basicFunc = [&result]() { result += 1; };\n\n    // 3、提交串行任务\n    ffrt_queue_submit(queue_handle, ffrt::create_function_wrapper(basicFunc, ffrt_function_kind_queue), nullptr);\n\n    // 4、提交串行任务，并返回任务句柄\n    ffrt_task_handle_t t1 = ffrt_queue_submit_h(queue_handle, ffrt::create_function_wrapper(basicFunc, ffrt_function_kind_queue), nullptr);\n    // 5、等待指定任务执行完成\n    ffrt_queue_wait(t1);\n\n    ffrt_task_handle_t t2 = ffrt_queue_submit_h(queue_handle, ffrt::create_function_wrapper(basicFunc, ffrt_function_kind_queue), nullptr);\n    // 6、取消句柄为 t2 的任务\n    ffrt_queue_cancel(t2);\n\n    // 7、销毁提交给串行队列任务的句柄 t1 和 t2，必需\n    ffrt_task_handle_destroy(t1);\n    ffrt_task_handle_destroy(t2);\n    // 8、销毁队列属性，必需\n    ffrt_queue_attr_destroy(&queue_attr);\n    // 9、销毁队列句柄，必需\n    ffrt_queue_destroy(queue_handle);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "同步原语",
      children: "同步原语"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_mutexattr_t",
      children: "ffrt_mutexattr_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    ffrt_error = -1,\n    ffrt_success = 0,\n    ffrt_error_nomem = ENOMEM,\n    ffrt_error_timedout = ETIMEDOUT,\n    ffrt_error_busy = EBUSY,\n    ffrt_error_inval = EINVAL\n} ffrt_error_t;\n\ntypedef enum {\n    ffrt_mutex_normal = 0,\n    ffrt_mutex_recursive = 2,\n    ffrt_mutex_default = ffrt_mutex_normal\n} ffrt_mutex_type;\n\nstruct ffrt_mutexattr_t;\n\nint ffrt_mutexattr_init(ffrt_mutexattr_t* attr);\nint ffrt_mutexattr_settype(ffrt_mutexattr_t* attr, int type);\nint ffrt_mutexattr_gettype(ffrt_mutexattr_t* attr, int* type);\nint ffrt_mutexattr_destroy(ffrt_mutexattr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT提供的类似pthread mutexattr的性能实现。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_mutexattr_init"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_mutexattr_init(ffrt_mutexattr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：FFRT锁属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化mutexattr。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_mutexattr_destroy"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_mutexattr_destroy(ffrt_mutexattr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：FFRT锁属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "销毁mutexattr。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_mutexattr_settype"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_mutexattr_settype(ffrt_mutexattr_t* attr, int type);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：FFRT锁属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type：FFRT锁类型，当前仅支持互斥锁ffrt_mutex_normal和递归锁ffrt_mutex_recursive。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr不为空且type有效返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置FFRT锁属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_mutexattr_gettype"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_mutexattr_gettype(ffrt_mutexattr_t* attr, int* type);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：FFRT锁属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type：FFRT锁类型指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr和type均不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取FFRT锁属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ffrt_mutexattr_t attr;\n// 初始化锁属性\nffrt_mutexattr_init(&attr);\n// 设置为互斥锁\nffrt_mutexattr_settype(&attr, ffrt_mutex_normal);\n// 设置为递归锁\nffrt_mutexattr_settype(&attr, ffrt_mutex_recursive);\n// 获取锁类型\nint type = ffrt_mutex_default;\nffrt_mutexattr_gettype(&attr, &type);\n// 销毁锁属性\nffrt_mutexattr_destroy(&attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_mutex_t",
      children: "ffrt_mutex_t"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT提供的类似pthread_mutex_t的性能实现，但不支持类似PTHREAD_MUTEX_INITIALIZER的初始化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct ffrt_mutex_t;\nstruct ffrt_mutexattr_t;\n\nint ffrt_mutex_init(ffrt_mutex_t* mutex, const ffrt_mutexattr_t* attr);\nint ffrt_mutex_lock(ffrt_mutex_t* mutex);\nint ffrt_mutex_unlock(ffrt_mutex_t* mutex);\nint ffrt_mutex_trylock(ffrt_mutex_t* mutex);\nint ffrt_mutex_destroy(ffrt_mutex_t* mutex);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口支持在FFRT任务内部调用，也支持在FFRT任务外部调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口能够避免pthread传统的pthread_mutex_t在抢不到锁时陷入内核态的问题，在使用得当的条件下将会有更好的性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C API中的ffrt_mutexattr_t需要用户调用ffrt_mutexattr_init和ffrt_mutexattr_destroy显式创建和销毁，否则其行为是未定义的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C API中的ffrt_mutex_t需要用户调用ffrt_mutex_init和ffrt_mutex_destroy显式创建和销毁，否则其行为是未定义的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C API中的ffrt_mutex_t对象的置空和销毁由用户完成，对同一个ffrt_mutex_t仅能调用一次ffrt_mutex_destroy，重复对同一个ffrt_mutex_t调用ffrt_mutex_destroy，其行为是未定义的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C API中的同一个ffrt_mutexattr_t只能调用一次ffrt_mutexattr_init和ffrt_mutexattr_destroy，重复调用其行为是未定义的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户需要在调用ffrt_mutex_init之后和调用ffrt_mutex_destroy之前显式调用ffrt_mutexattr_destroy。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在ffrt_mutex_destroy之后再对ffrt_mutex_t进行访问，其行为是未定义的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_mutex_init"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_mutex_init(ffrt_mutex_t* mutex, const ffrt_mutexattr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex：指向所操作的锁指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：FFRT锁属性，attr的有效值范围是：空指针或等于ffrt_mutex_normal代表互斥锁，ffrt_mutex_recursive代表递归锁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果mutex不为空且attr在有效值范围内返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化FFRT锁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_mutex_destroy"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_mutex_destroy(ffrt_mutex_t* mutex);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex：指向所操作的锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定的互斥锁/递归锁进行销毁操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_mutex_lock"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_mutex_lock(ffrt_mutex_t* mutex);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex：指向所操作的锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定的互斥锁/递归锁进行加锁操作，该方法会阻塞当前任务直到能成功获得锁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_mutex_unlock"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_mutex_unlock(ffrt_mutex_t* mutex);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex：指向所操作的锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定的互斥锁/递归锁进行解锁操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_mutex_trylock"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_mutex_trylock(ffrt_mutex_t* mutex);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex：指向所操作的锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex为空返回ffrt_error_inval，mutex不为空且持锁成功返回ffrt_success，mutex不为空且持锁失败返回ffrt_error_busy。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定的互斥锁/递归锁进行尝试加锁操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ffrt/mutex.h\"\n#include \"ffrt/cpp/task.h\"\n\nint main()\n{\n    ffrt_mutexattr_t attr;\n    ffrt_mutex_t lock;\n    int sum = 0;\n    int type = ffrt_mutex_default;\n    ffrt_mutexattr_init(&attr);\n    ffrt_mutexattr_settype(&attr, ffrt_mutex_recursive);\n    ffrt_mutexattr_gettype(&attr, &type);\n    ffrt_mutex_init(&lock, &attr);\n    ffrt::submit([&]() {\n        ffrt_mutex_lock(&lock);\n        ffrt_mutex_trylock(&lock);\n        sum++;\n        ffrt_mutex_lock(&lock);\n        ffrt_mutex_trylock(&lock);\n        sum++;\n        ffrt_mutex_unlock(&lock);\n        ffrt_mutex_unlock(&lock);\n        ffrt_mutex_unlock(&lock);\n        ffrt_mutex_unlock(&lock);\n        }, {}, {});\n\n    ffrt::wait();\n\n    ffrt_mutexattr_destroy(&attr);\n    ffrt_mutex_destroy(&lock);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_rwlock_t",
      children: "ffrt_rwlock_t"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT提供的类似pthread_rwlock_t的性能实现。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct ffrt_rwlock_t;\nstruct ffrt_rwlockattr_t;\n\nint ffrt_rwlock_init(ffrt_rwlock_t* rwlock, const ffrt_rwlockattr_t* attr);\nint ffrt_rwlock_wrlock(ffrt_rwlock_t* rwlock);\nint ffrt_rwlock_rdlock(ffrt_rwlock_t* rwlock);\nint ffrt_rwlock_trywrlock(ffrt_rwlock_t* rwlock);\nint ffrt_rwlock_tryrdlock(ffrt_rwlock_t* rwlock);\nint ffrt_rwlock_unlock(ffrt_rwlock_t* rwlock);\nint ffrt_rwlock_destroy(ffrt_rwlock_t* rwlock);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口支持在FFRT任务内部调用，也支持在FFRT任务外部调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口能够避免pthread传统的pthread_rwlock_t在ffrt使用场景下睡眠不释放线程的问题，在使用得当的条件下将会有更好的性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C API中的ffrt_rwlock_t需要用户调用ffrt_rwlock_init和ffrt_rwlock_destroy显式创建和销毁，否则其行为是未定义的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C API中的ffrt_rwlockattr_t需要用户调用ffrt_rwlock_init时此参数传参必须为空指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C API中的ffrt_rwlock_t对象的置空和销毁由用户完成，对同一个ffrt_rwlock_t仅能调用一次ffrt_rwlock_destroy，重复对同一个ffrt_rwlock_t调用ffrt_rwlock_destroy，其行为是未定义的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在ffrt_rwlock_destroy之后再对ffrt_rwlock_t进行访问，其行为是未定义的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_rwlock_init"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_rwlock_init(ffrt_rwlock_t* rwlock, const ffrt_rwlockattr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock：指向所操作的读写锁指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：指向所操作的读写锁属性指针，仅支持默认模式，即attr设定为空指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock不为空，且attr为空则返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化读写锁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(684013)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_rwlock_wrlock"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_rwlock_wrlock(ffrt_rwlock_t* rwlock);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock：指向所操作的读写锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定读写锁加写锁操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(966696)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_rwlock_rdlock"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_rwlock_rdlock(ffrt_rwlock_t* rwlock);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock：指向所操作的读写锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定读写锁加读锁操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(506330)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_rwlock_trywrlock"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_rwlock_trywrlock(ffrt_rwlock_t* rwlock);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock：指向所操作的读写锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock不为空且没有其他线程持有读写锁返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定的读写锁进行尝试加写锁操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(697249)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_rwlock_tryrdlock"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_rwlock_tryrdlock(ffrt_rwlock_t* rwlock);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock：指向所操作的读写锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock不为空且没有其他线程持有写锁则返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定的读写锁进行尝试加读锁操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(931336)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_rwlock_unlock"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_rwlock_unlock(ffrt_rwlock_t* rwlock);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock：指向所操作的读写锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定的读写锁进行解锁操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(124547)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_rwlock_destroy"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_rwlock_destroy(ffrt_rwlock_t* rwlock);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock：指向所操作的读写锁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rwlock不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定的读写锁进行销毁操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(516861)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ffrt/shared_mutex.h\"\n#include \"ffrt/sleep.h\"\n#include \"ffrt/cpp/task.h\"\n\nint main()\n{\n    ffrt_rwlock_t rwlock;\n    int x = 0;\n    ffrt_rwlock_init(&rwlock, nullptr);\n    ffrt::submit([&]() {\n        ffrt_rwlock_wrlock(&rwlock);\n        ffrt_usleep(10);\n        x++;\n        ffrt_rwlock_unlock(&rwlock);\n    },{},{});\n\n    ffrt::submit([&]() {\n        ffrt_usleep(2);\n        ffrt_rwlock_rdlock(&rwlock);\n        ffrt_rwlock_unlock(&rwlock);\n    },{},{});\n\n    ffrt::submit([&]() {\n        ffrt_usleep(2);\n        if(ffrt_rwlock_trywrlock(&rwlock)){\n            x++;\n            ffrt_rwlock_unlock(&rwlock);\n        }\n    },{},{});\n\n    ffrt::submit([&]() {\n        ffrt_usleep(2);\n        if(ffrt_rwlock_tryrdlock(&rwlock)){\n            ffrt_rwlock_unlock(&rwlock);\n        }\n    },{},{});\n\n    ffrt::wait();\n\n    ffrt_rwlock_destroy(&rwlock);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_cond_t",
      children: "ffrt_cond_t"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT提供的类似pthread信号量的性能实现，但不支持类似PTHREAD_COND_INITIALIZER的初始化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    ffrt_error = -1,\n    ffrt_success = 0,\n    ffrt_error_nomem = ENOMEM,\n    ffrt_error_timedout = ETIMEDOUT,\n    ffrt_error_busy = EBUSY,\n    ffrt_error_inval = EINVAL\n} ffrt_error_t;\n\ntypedef struct {\n    uint32_t storage[(ffrt_cond_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)];\n} ffrt_cond_t;\n\nint ffrt_cond_init(ffrt_cond_t* cond, const ffrt_condattr_t* attr);\nint ffrt_cond_signal(ffrt_cond_t* cond);\nint ffrt_cond_broadcast(ffrt_cond_t* cond);\nint ffrt_cond_wait(ffrt_cond_t*cond, ffrt_mutex_t* mutex);\nint ffrt_cond_timedwait(ffrt_cond_t* cond, ffrt_mutex_t* mutex, const struct timespec* time_point);\nint ffrt_cond_destroy(ffrt_cond_t* cond);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口支持在FFRT任务内部调用，也支持在FFRT任务外部调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该功能能够避免传统的pthread_cond_t在条件不满足时陷入内核的问题，在使用得当的条件下将会有更好的性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注意：C API 中的ffrt_cond_t需要用户调用ffrt_cond_init和ffrt_cond_destroy显式创建和销毁，而C++ API 中依赖构造和析构自动完成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注意：C API 中的ffrt_cond_t对象的置空和销毁由用户完成，对同一个ffrt_cond_t仅能调用一次ffrt_cond_destroy，重复对同一个ffrt_cond_t调用ffrt_cond_destroy，其行为是未定义的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注意：在ffrt_cond_destroy之后再对ffrt_cond_t进行访问，其行为是未定义的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_cond_init"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_cond_init(ffrt_cond_t* cond, const ffrt_condattr_t* attr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond：指向所操作的信号量的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "attr：属性设定，空指针表示使用默认属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化FFRT条件变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_cond_destroy"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_cond_destroy(ffrt_cond_t* cond);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond：指向所操作的信号量的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "销毁FFRT条件变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_cond_signal"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_cond_signal(ffrt_cond_t* cond);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond：指向所操作的信号量的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该方法用于唤醒一个等待条件变量的任务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_cond_broadcast"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_cond_broadcast(ffrt_cond_t* cond);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond：指向所操作的信号量的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该方法用于唤醒所有等待条件变量的任务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_cond_wait"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_cond_wait(ffrt_cond_t* cond, ffrt_mutex_t* mutex);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond：指向所操作的信号量的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex：指向要在阻塞期间解锁的互斥锁的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond和mutex均不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方法用于在条件变量上等待。任务在调用该方法时会释放传入的互斥量，并进入等待状态，直到另一个任务通知条件变量，才会重新获取互斥量并继续执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此方法通常与ffrt_mutex_lock或ffrt_mutex_trylock一起使用，确保在进入等待状态之前已经持有互斥量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_cond_timedwait"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_cond_timedwait(ffrt_cond_t* cond, ffrt_mutex_t* mutex, const struct timespec* time_point);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond：指向所操作的信号量的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mutex：指向要在阻塞期间解锁的互斥锁的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "time_point：指向指定等待时限时间的对象的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cond和mutex和time_point均不为空返回ffrt_success，否则返回ffrt_error_inval。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该方法用于在条件变量上等待，直到指定的超时时间到达。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "与ffrt_cond_wait不同，ffrt_cond_timedwait方法允许任务在条件变量上等待一段时间，如果在指定时间内没有收到通知，任务将被唤醒该函数返回。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\n#include \"ffrt/condition_variable.h\"\n#include \"ffrt/mutex.h\"\n#include \"ffrt/sleep.h\"\n#include \"ffrt/cpp/task.h\"\n\nstruct timespec timeoutms_to_tm(int timeout_ms) {\n    struct timespec ts;\n    clock_gettime(CLOCK_REALTIME, &ts);\n    ts.tv_sec += timeout_ms / 1000;\n    ts.tv_nsec += (timeout_ms % 1000) * 1000000;\n    if (ts.tv_nsec >= 1000000000) {\n        ts.tv_sec += 1;\n        ts.tv_nsec -= 1000000000;\n    }\n    return ts;\n}\n\nint main()\n{\n    int a = 0;\n    ffrt_cond_t cond;\n    ffrt_mutex_t lock_;\n    ffrt_cond_init(&cond, nullptr);\n    ffrt_mutex_init(&lock_, nullptr);\n\n    for (int i = 0; i < 3; i++) {\n        ffrt::submit([&]() {\n            int timeout = 2000;\n            struct timespec tm = timeoutms_to_tm(timeout);\n            ffrt_mutex_lock(&lock_);\n            auto start = std::chrono::high_resolution_clock::now();\n            ffrt_cond_timedwait(&cond, &lock_, &tm);\n            auto end = std::chrono::high_resolution_clock::now();\n            a = 123;\n            ffrt_mutex_unlock(&lock_);\n            std::chrono::duration<double, std::milli> elapsed = end - start;\n            double t = elapsed.count();\n            std::cout << \"ffrt_cond_timedwait \" << t << \" ms\" << std::endl;\n            }, {}, {});\n    }\n\n    ffrt::submit([&]() {\n        ffrt_usleep(1000 * 1000);\n        ffrt_mutex_lock(&lock_);\n        a = 5;\n        ffrt_cond_broadcast(&cond);\n        ffrt_mutex_unlock(&lock_);\n        }, {}, {});\n    ffrt::wait();\n    ffrt_cond_destroy(&cond);\n    ffrt_mutex_destroy(&lock_);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "阻塞原语",
      children: "阻塞原语"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_usleep",
      children: "ffrt_usleep"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_usleep(uint64_t usec);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "usec：睡眠的微秒数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口支持在FFRT任务内部调用，也支持在FFRT任务外部调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT提供的类似C11 sleep和Linux usleep的性能实现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口睡眠精度为微秒。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该功能能够避免传统的sleep睡眠时陷入内核的问题，在使用得当的条件下将会有更好的性能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ffrt/sleep.h\"\n#include \"ffrt/cpp/task.h\"\n\nint main()\n{\n    ffrt::submit([=]() { ffrt_usleep(10); }, {}, {});\n    ffrt::wait();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "协同原语",
      children: "协同原语"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_yield",
      children: "ffrt_yield"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_yield();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口支持在FFRT任务内部调用，也支持在FFRT任务外部调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前任务主动让出CPU执行资源，允许其他可执行的任务运行，如果没有其他可执行的任务，yield无效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此函数的确切行为取决于实现，特别是使用中的FFRT调度程序的机制和系统状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\n#include \"ffrt/sleep.h\"\n#include \"ffrt/cpp/task.h\"\n\nint main()\n{\n    int count = 12;\n    for (int i = 0; i < count; i++) {\n        ffrt::submit([&]() {\n            ffrt_usleep(100);\n            std::cout << \"test\" << std::endl;\n            ffrt_yield();\n        }, {}, {});\n    }\n    ffrt::wait();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定时器",
      children: "定时器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_timer_t",
      children: "ffrt_timer_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int ffrt_timer_t;\ntypedef void (*ffrt_timer_cb)(void* data);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供定时器相关的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_timer_start"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_timer_t ffrt_timer_start(ffrt_qos_t qos, uint64_t timeout, void* data, ffrt_timer_cb cb, bool repeat);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "qos：QoS等级。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "timeout：定时器时间，单位是毫秒。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cb：到期后的回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "data：回调函数的输入参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "repeat：是否循环定时器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_timer_t定时器句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动一个定时器，定时器到期且未被取消的话，执行回调函数。如果设置repeat为true，定时器到期后会重复设置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议在cb中调用exit函数，可能导致未定义行为。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_timer_stop"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_timer_stop(ffrt_qos_t qos, ffrt_timer_t handle);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "qos：QoS等级。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handle：定时器句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0表示成功，-1表示失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取消一个定时器，和ffrt_timer_start配对使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为阻塞接口，请避免在回调函数callback内使用，防止死锁或同步问题，当传入的handle对应的callback正在执行时，该函数会等待callback完成后再继续执行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例1：使用单次定时器："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <stdio.h>\n#include <unistd.h>\n#include \"ffrt/timer.h\"\n\nstatic void test_fun(void *data)\n{\n    *(int *)data += 1;\n}\n\nvoid (*cb)(void *) = test_fun;\n\nint main()\n{\n    static int x = 0;\n    void *data = &x;\n    uint64_t timeout = 200;\n    // 启动定时器，在200ms后执行回调函数\n    int handle = ffrt_timer_start(ffrt_qos_default, timeout, data, cb, false);\n    usleep(300000);\n    // 定时器已经执行，取消无效\n    ffrt_timer_stop(ffrt_qos_default, handle);\n    printf(\"data: %d\\n\", x); // x值变成1\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例2：使用循环定时器："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <stdio.h>\n#include <unistd.h>\n#include \"ffrt/timer.h\"\n\nstatic void test_fun(void *data)\n{\n    *(int *)data += 1;\n}\n\nvoid (*cb)(void *) = test_fun;\n\nint main()\n{\n    static int x = 0;\n    void *data = &x;\n    uint64_t timeout = 200;\n    // 启动循环定时器，每间隔200ms执行回调函数\n    int handle = ffrt_timer_start(ffrt_qos_default, timeout, data, cb, true);\n    usleep(500000);\n    // 取消循环定时器\n    ffrt_timer_stop(ffrt_qos_default, handle);\n    printf(\"data: %d\\n\", x); // x的值变成2\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "循环",
      children: "循环"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_loop_t",
      children: "ffrt_loop_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void* ffrt_loop_t;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供循环相关的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_loop_create"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_loop_t ffrt_loop_create(ffrt_queue_t queue);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "queue：loop需要绑定一个FFRT并发队列使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_loop_t对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建一个loop，需要绑定一个并发队列存储任务，用户可以向队列中提交任务使其在loop中执行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_loop_destroy"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_loop_destroy(ffrt_loop_t loop);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loop：loop对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0表示成功，-1表示失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "销毁一个loop，同时和队列解除绑定。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_loop_run"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_loop_run(ffrt_loop_t loop);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loop：loop对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0表示成功，-1表示失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动一个loop，调用此方法的线程会同步执行loop，在loop中会执行队列的任务、监听poller事件触发、监听timer定时器触发。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_loop_stop"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_loop_stop(ffrt_loop_t loop);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loop：loop对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "停止一个loop，调用此方法使执行loop的线程退出循环。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_loop_epoll_ctl"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int ffrt_loop_epoll_ctl(ffrt_loop_t loop, int op, int fd, uint32_t events, void *data, ffrt_poller_cb cb)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loop：loop对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "op：fd操作符，参考epoll_ctl的操作类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fd：事件描述符。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "events：事件，参考epoll_ctl的事件类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "data：回调函数的入参。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cb：回调函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0表示成功，-1表示失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "管理loop上的监听fd事件，事件的监听和回调执行在loop线程上处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议在cb中调用exit函数，可能导致未定义行为。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_loop_timer_start"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API ffrt_timer_t ffrt_loop_timer_start(ffrt_loop_t loop, uint64_t timeout, void* data, ffrt_timer_cb cb, bool repeat);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loop：loop对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "timeout：定时器时间，单位是毫秒。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cb：到期后的回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "data：回调函数的输入参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "repeat：是否循环定时器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_timer_t定时器句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在loop上启动一个定时器，用法和ffrt_timer_start一致，只是定时器的监听和回调执行在loop线程上处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议在cb中调用exit函数，可能导致未定义行为。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_loop_timer_stop"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_loop_timer_stop(ffrt_loop_t loop, ffrt_timer_t handle);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loop：loop对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handle：定时器句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0表示成功，-1表示失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取消一个定时器，用法和ffrt_timer_stop一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例1：循环与并发队列："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <pthread.h>\n#include <stdio.h>\n#include \"ffrt/loop.h\"\n\nvoid* ThreadFunc(void* p)\n{\n    int ret = ffrt_loop_run(p);\n    if (ret == 0) {\n        printf(\"loop normal operation.\");\n    }\n    return NULL;\n}\n\nint main()\n{\n    // 创建并发队列\n    ffrt_queue_attr_t queue_attr;\n    (void)ffrt_queue_attr_init(&queue_attr);\n    ffrt_queue_t queue_handle = ffrt_queue_create(ffrt_queue_concurrent, \"test_queue\", &queue_attr);\n\n    // 创建loop\n    ffrt_loop_t loop = ffrt_loop_create(queue_handle);\n\n    // 启动独立线程来执行loop\n    pthread_t thread;\n    int ret = pthread_create(&thread, 0, ThreadFunc, loop);\n    if (ret != 0) {\n        printf(\"pthread_create failed!\");\n        ffrt_loop_destroy(loop);\n        ffrt_queue_attr_destroy(&queue_attr);\n        ffrt_queue_destroy(queue_handle);\n        return 0;\n    }\n\n    // 终止并销毁loop\n    ffrt_loop_stop(loop);\n    ffrt_loop_destroy(loop);\n\n    // 销毁并发队列\n    ffrt_queue_attr_destroy(&queue_attr);\n    ffrt_queue_destroy(queue_handle);\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例2：循环、并发队列和定时器："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <pthread.h>\n#include <unistd.h>\n#include <stdio.h>\n#include <functional>\n#include <sys/epoll.h>\n#include <sys/eventfd.h>\n#include \"ffrt/loop.h\"\n#include \"ffrt/cpp/task.h\"\n\nvoid* ThreadFunc(void* p)\n{\n    ffrt_loop_run(p);\n    return nullptr;\n}\n\nstatic void test_fun(void* data)\n{\n    *(int*)data += 1;\n}\n\nstatic void (*cb)(void*) = test_fun;\n\nvoid testCallBack(void *data, unsigned int events) {}\n\nstruct TestData {\n    int fd;\n    uint64_t expected;\n};\n\nint main()\n{\n    // 创建并发队列\n    ffrt_queue_attr_t queue_attr;\n    (void)ffrt_queue_attr_init(&queue_attr);\n    ffrt_queue_t queue_handle = ffrt_queue_create(ffrt_queue_concurrent, \"test_queue\", &queue_attr);\n\n    // 创建loop\n    auto loop = ffrt_loop_create(queue_handle);\n    int result1 = 0;\n\n    // 向loop队列提交一个任务\n    std::function<void()> &&basicFunc1 = [&result1]() { result1 += 10; };\n    ffrt_task_handle_t task = ffrt_queue_submit_h(queue_handle, ffrt::create_function_wrapper(basicFunc1, ffrt_function_kind_queue), nullptr);\n\n    // 启动独立线程来执行loop\n    pthread_t thread;\n    int ret = pthread_create(&thread, 0, ThreadFunc, loop);\n    if (ret != 0) {\n        printf(\"pthread_create failed!\");\n        ffrt_loop_destroy(loop);\n        ffrt_queue_attr_destroy(&queue_attr);\n        ffrt_queue_destroy(queue_handle);\n        return 0;\n    }\n\n    static int x = 0;\n    int* xf = &x;\n    void* data = xf;\n    uint64_t timeout1 = 20;\n    uint64_t timeout2 = 10;\n    uint64_t expected = 0xabacadae;\n\n    int testFd = eventfd(0, EFD_NONBLOCK | EFD_CLOEXEC);\n    struct TestData testData {.fd = testFd, .expected = expected};\n\n    // 向loop注册一个定时器\n    ffrt_timer_t timeHandle = ffrt_loop_timer_start(loop, timeout1, data, cb, false);\n\n    // 向loop注册一个fd监听\n    int ret = ffrt_loop_epoll_ctl(loop, EPOLL_CTL_ADD, testFd, EPOLLIN, (void*)(&testData), testCallBack);\n    if (ret == 0) {\n        printf(\"ffrt_loop_epoll_ctl执行成功。\\n\");\n    }\n    ssize_t n = write(testFd, &expected, sizeof(uint64_t));\n    usleep(25000);\n    // 删除fd监听\n    ffrt_loop_epoll_ctl(loop, EPOLL_CTL_DEL, testFd, 0, nullptr, nullptr);\n\n    // 终止loop\n    ffrt_loop_stop(loop);\n    pthread_join(thread, nullptr);\n\n    // 删除定时器\n    ffrt_loop_timer_stop(loop, timeHandle);\n\n    // 销毁loop\n    ret = ffrt_loop_destroy(loop);\n\n    // 销毁并发队列\n    ffrt_queue_attr_destroy(&queue_attr);\n    ffrt_queue_destroy(queue_handle);\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "纤程",
      children: "纤程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt_fiber_t",
      children: "ffrt_fiber_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct ffrt_fiber_t;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "纤程是一种轻量级的用户态线程，用于在用户空间内实现高效的任务调度和上下文切换。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_fiber_t为纤程存储实体类型，用于保存和恢复执行上下文。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_fiber_init"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API int ffrt_fiber_init(ffrt_fiber_t* fiber, void(*func)(void*), void* arg, void* stack, size_t stack_size);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fiber：纤程指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "func：纤程启动时的函数指针入口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arg：纤程启动时的函数入参。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stack：纤程运行时使用的栈空间起始地址。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stack_size：纤程栈大小，单位为字节。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化成功返回ffrt_success，否则返回ffrt_error。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回错误的常见原因是stack_size不满足最小栈空间限制（不同平台存在差异），建议设置栈空间大小为4KB或以上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该函数用于初始化纤程，需要传入启动纤程的函数指针和入参，以及运行时使用的栈空间，纤程不管理任何的内存，栈的生命周期由调用方管理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(183113)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ffrt_fiber_switch"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FFRT_C_API void ffrt_fiber_switch(ffrt_fiber_t* from, ffrt_fiber_t* to);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "from：调用该函数的线程会暂停当前任务的执行，并保存当前上下文到from指向的纤程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "to：将to指向的纤程恢复到当前上下文，调用该函数的线程将执行to对应的任务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "切换纤程上下文时，调用该函数的线程会暂停当前任务，保存上下文到from纤程，并恢复to纤程上下文，执行to对应的任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注意：本接口不校验from、to的有效性，调用方需自行校验地址有效性，否则会导致该进程崩溃。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(192597)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该接口。"
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
124547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
258465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
684013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
516861(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
966696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
860621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
192597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
68633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
931336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
358612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
505200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
506330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
697249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
183113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
45844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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