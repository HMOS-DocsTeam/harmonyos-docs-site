"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["550028"], {
806101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_call_threadsafe_function_with_priority_use_call_threadsafe_function_with_priority_md_a0a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-call-threadsafe-function-with-priority-use-call-threadsafe-function-with-priority-md-a0a.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_call_threadsafe_function_with_priority_use_call_threadsafe_function_with_priority_md_a0a_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-call-threadsafe-function-with-priority/use-call-threadsafe-function-with-priority","title":"使用Node-API接口从异步线程向ArkTS线程投递指定优先级和入队方式的任务","description":"Node-API中的napi\\\\call\\\\threadsafe\\\\function\\\\with\\\\_priority接口的功能是从异步线程向ArkTS线程投递指定优先级和入队方式的任务，底层队列会根据任务的优先级和入队方式来处理任务。","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-call-threadsafe-function-with-priority/use-call-threadsafe-function-with-priority.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-call-threadsafe-function-with-priority","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-call-threadsafe-function-with-priority/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-call-threadsafe-function-with-priority/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"使用Node-API接口从异步线程向ArkTS线程投递指定优先级和入队方式的任务","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-call-threadsafe-function-with-priority","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行模块加载","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module-with-info/"},"next":{"title":"使用扩展的Node-API接口在当前线程中创建、切换和销毁上下文环境","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-context/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-call-threadsafe-function-with-priority/use-call-threadsafe-function-with-priority.md


const frontMatter = {
	title: '使用Node-API接口从异步线程向ArkTS线程投递指定优先级和入队方式的任务',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-call-threadsafe-function-with-priority',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口从异步线程向ArkTS线程投递指定优先级和入队方式的任务';

const assets = {

};



const toc = [{
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "调用异步的ArkTS接口示例",
  "id": "调用异步的arkts接口示例",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "使用node-api接口从异步线程向arkts线程投递指定优先级和入队方式的任务",
        children: "使用Node-API接口从异步线程向ArkTS线程投递指定优先级和入队方式的任务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API中的napi_call_threadsafe_function_with_priority接口的功能是从异步线程向ArkTS线程投递指定优先级和入队方式的任务，底层队列会根据任务的优先级和入队方式来处理任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_call_threadsafe_function_with_priority(napi_threadsafe_function func, void *data,\n                                                        napi_task_priority priority, bool isTail);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "func"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程安全方法"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步线程期望传递给主线程的数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "priority"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定任务的优先级", (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces#%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E4%BB%BB%E5%8A%A1%E4%BC%98%E5%85%88%E7%BA%A7",
              children: "napi_task_priority"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isTail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定任务的入队方式，true代表任务从队列的尾部入队，false代表任务从队列的头部入队"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步线程向ArkTS主线程中投递的任务需要根据任务指定的优先级和入队方式进行处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用异步的arkts接口示例",
      children: "调用异步的ArkTS接口示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "功能实现"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n// ...\n#include <hilog/log.h>\n// ...\nstatic constexpr int INT_ARG_2 = 2; // 入参索引\nstatic constexpr int INT_ARG_12 = 12; // 入参索引\nstatic constexpr int INT_ARG_15 = 15; // 入参索引\n// ...\nstruct CallbackData {\n    napi_threadsafe_function tsfn;\n    napi_async_work work;\n};\nstatic void CallJs(napi_env env, napi_value jsCb, void *context, void *data)\n{\n    if (env == nullptr) {\n        return;\n    }\n\n    napi_handle_scope scope = nullptr;\n    napi_status status = napi_open_handle_scope(env, &scope);\n    if (status != napi_ok) {\n        return;\n    }\n\n    napi_value resultNumber = nullptr;\n    napi_value undefined = nullptr;\n    napi_get_undefined(env, &undefined);\n    napi_value number1 = nullptr;\n    napi_create_int32(env, INT_ARG_12, &number1);\n    napi_value number2 = nullptr;\n    napi_create_int32(env, INT_ARG_15, &number2);\n    napi_value argv[2] = {number1, number2};\n    napi_call_function(env, undefined, jsCb, INT_ARG_2, argv, &resultNumber);\n    int32_t res = 0;\n    // 获取resultNumber对应的int32值\n    napi_get_value_int32(env, resultNumber, &res);\n\n    napi_close_handle_scope(env, scope);\n}\n\n// 异步线程中调用该接口向ArkTS线程投递指定优先级和入队方式的任务\nstatic void ExecuteWork(napi_env env, void *data)\n{\n    CallbackData *callbackData = reinterpret_cast<CallbackData *>(data);\n    // 投递指定优先级为napi_priority_idle，入队方式为队列尾部入队的任务\n    napi_call_threadsafe_function_with_priority(callbackData->tsfn, nullptr, napi_priority_idle, true);\n    // 投递指定优先级为napi_priority_low，入队方式为队列尾部入队的任务\n    napi_call_threadsafe_function_with_priority(callbackData->tsfn, nullptr, napi_priority_low, true);\n    // 投递指定优先级为napi_priority_high，入队方式为队列尾部入队的任务\n    napi_call_threadsafe_function_with_priority(callbackData->tsfn, nullptr, napi_priority_high, true);\n    // 投递指定优先级为napi_priority_immediate，入队方式为队列尾部入队的任务\n    napi_call_threadsafe_function_with_priority(callbackData->tsfn, nullptr, napi_priority_immediate, true);\n    // 投递指定优先级为napi_priority_high，入队方式为队列头部入队的任务\n    napi_call_threadsafe_function_with_priority(callbackData->tsfn, nullptr, napi_priority_high, false);\n}\n\nstatic void WorkComplete(napi_env env, napi_status status, void *data)\n{\n    CallbackData *callbackData = reinterpret_cast<CallbackData *>(data);\n    if (callbackData->tsfn != nullptr) {\n        napi_release_threadsafe_function(callbackData->tsfn, napi_tsfn_release);\n        callbackData->tsfn = nullptr;\n    }\n    if (callbackData->work != nullptr) {\n        napi_delete_async_work(env, callbackData->work);\n        callbackData->work = nullptr;\n    }\n    delete callbackData;\n}\n\nstatic napi_value CallThreadSafeWithPriority(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value jsCb = nullptr;\n    CallbackData *callbackData = new CallbackData();\n    napi_get_cb_info(env, info, &argc, &jsCb, nullptr, nullptr);\n    napi_value resourceName = nullptr;\n    napi_create_string_utf8(env, \"Thread-safe Function Demo\", NAPI_AUTO_LENGTH, &resourceName);\n    if (napi_create_threadsafe_function(env, jsCb, nullptr, resourceName, 0, 1, nullptr, nullptr, nullptr, CallJs,\n                                        &callbackData->tsfn) != napi_ok) {\n        delete callbackData;\n        return nullptr;\n    }\n    // 创建一个异步任务对象\n    if (napi_create_async_work(env, nullptr, resourceName,\n                               ExecuteWork, WorkComplete, callbackData, &callbackData->work) != napi_ok) {\n        if (callbackData->tsfn != nullptr) {\n            napi_release_threadsafe_function(callbackData->tsfn, napi_tsfn_release);\n        }\n        delete callbackData;\n        return nullptr;\n    }\n    if (napi_queue_async_work(env, callbackData->work) != napi_ok) {\n        if (callbackData->tsfn != nullptr) {\n            napi_release_threadsafe_function(callbackData->tsfn, napi_tsfn_release);\n        }\n        napi_delete_async_work(env, callbackData->work);\n        delete callbackData;\n        return nullptr;\n    }\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注册模块接口\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"callThreadSafeWithPriority\", nullptr, CallThreadSafeWithPriority, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module nativeModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = nullptr,\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule()\n{\n    napi_module_register(&nativeModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口声明"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.d.ts\nexport const callThreadSafeWithPriority: (cb: (a: number, b: number) => number) => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt文件需要按照如下配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(MyApplication3)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\nadd_definitions( \"-DLOG_TAG=\\\"LOG_TAG\\\"\" )\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS导入头文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS代码示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.ets\nlet callback = (a: number, b: number): number => {\n  console.info('result is ' + (a + b))\n  return a + b;\n}\ntestNapi.callThreadSafeWithPriority(callback);\n"
          })
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