"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["16999"], {
706470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_event_loop_use_napi_event_loop_md_bc5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-event-loop-use-napi-event-loop-md-bc5.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_event_loop_use_napi_event_loop_md_bc5_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-event-loop/use-napi-event-loop","title":"使用扩展的Node-API接口在异步线程中运行和停止事件循环","description":"场景介绍","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-event-loop/use-napi-event-loop.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-event-loop","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-event-loop/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-event-loop/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用扩展的Node-API接口在异步线程中运行和停止事件循环","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-event-loop","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口在主线程中进行模块加载","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module/"},"next":{"title":"使用Node-API接口进行模块加载","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module-with-info/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-event-loop/use-napi-event-loop.md


const frontMatter = {
	title: '使用扩展的Node-API接口在异步线程中运行和停止事件循环',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-event-loop',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用扩展的Node-API接口在异步线程中运行和停止事件循环';

const assets = {

};



const toc = [{
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
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用扩展的node-api接口在异步线程中运行和停止事件循环",
        children: "使用扩展的Node-API接口在异步线程中运行和停止事件循环"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在自己创建的ArkTS运行环境中调用异步的ArkTS接口时，可以通过使用Node-API中的扩展接口napi_run_event_loop和napi_stop_event_loop来运行和停止ArkTS实例中的事件循环。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用异步的arkts接口示例",
      children: "调用异步的ArkTS接口示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用的ArkTS接口为异步接口时，需要通过扩展接口napi_run_event_loop将异步线程中的事件循环运行起来，底层事件队列中的异步任务将被处理执行。当前Node-API扩展了两种事件循环模式来运行异步线程的事件循环，分别为napi_event_mode_nowait模式和napi_event_mode_default模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果使用napi_event_mode_nowait模式运行底层事件循环，系统会尝试从底层的事件队列中取出一个任务并处理，完成之后事件循环停止，如果底层的事件队列中没有任务，事件循环会立刻停止，当前的异步线程不会被阻塞；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果使用napi_event_mode_default模式来运行底层事件循环，系统会阻塞当前的线程，同时会一直尝试从事件队列中获取任务并执行处理这些任务。如果不想当前线程继续被阻塞，可以使用扩展接口napi_stop_event_loop将正在运行的事件循环停止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "功能实现"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include <pthread.h>\n#include <hilog/log.h>\n#include <napi/common.h>\nstatic constexpr int INT_ARG_2 = 2; // 入参索引\n// ...\nstatic napi_value ResolvedCallback(napi_env env, napi_callback_info info)\n{\n    napi_stop_event_loop(env);\n    return nullptr;\n}\n\nstatic napi_value RejectedCallback(napi_env env, napi_callback_info info)\n{\n    napi_stop_event_loop(env);\n    return nullptr;\n}\n\nstatic bool CallSetTimeoutWithCallbacks(napi_env env, napi_value objectUtils)\n{\n    napi_value setTimeout = nullptr;\n    napi_value promise = nullptr;\n\n    if (napi_get_named_property(env, objectUtils, \"SetTimeout\", &setTimeout) != napi_ok) {\n        return false;\n    }\n    if (napi_call_function(env, objectUtils, setTimeout, 0, nullptr, &promise) != napi_ok) {\n        return false;\n    }\n\n    napi_value theFunc = nullptr;\n    if (napi_get_named_property(env, promise, \"then\", &theFunc) != napi_ok) {\n        return false;\n    }\n\n    napi_value resolvedCallback = nullptr;\n    napi_value rejectedCallback = nullptr;\n    if (napi_create_function(env, \"resolvedCallback\", NAPI_AUTO_LENGTH,\n                             ResolvedCallback, nullptr, &resolvedCallback) != napi_ok) {\n        return false;\n    }\n    if (napi_create_function(env, \"rejectedCallback\", NAPI_AUTO_LENGTH,\n                             RejectedCallback, nullptr, &rejectedCallback) != napi_ok) {\n        return false;\n    }\n    napi_value argv[2] = {resolvedCallback, rejectedCallback};\n    if (napi_call_function(env, promise, theFunc, INT_ARG_2, argv, nullptr) != napi_ok) {\n        return false;\n    }\n    return true;\n}\n\nstatic void *RunEventLoopFunc(void *arg)\n{\n    // 1. 创建ArkTS实例\n    napi_env env = nullptr;\n    napi_status ret = napi_create_ark_runtime(&env);\n    if (ret != napi_ok) {\n        return nullptr;\n    }\n\n    napi_handle_scope scope = nullptr;\n    napi_open_handle_scope(env, &scope);\n\n    // 2. 加载自定义的模块\n    napi_value objectUtils = nullptr;\n    // 'com.example.myapplication' 为当前应用的bundleName\n    ret = napi_load_module_with_info(env, \"entry/src/main/ets/pages/ObjectUtils\", \"com.example.myapplication/entry\",\n                                     &objectUtils);\n    if (ret != napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"Failed to load module\");\n        napi_close_handle_scope(env, scope);\n        napi_destroy_ark_runtime(&env);\n        return nullptr;\n    }\n\n    // 3. 调用异步SetTimeout接口\n    if (!CallSetTimeoutWithCallbacks(env, objectUtils)) {\n        napi_close_handle_scope(env, scope);\n        napi_destroy_ark_runtime(&env);\n        return nullptr;\n    }\n\n    auto flag = reinterpret_cast<bool *>(arg);\n    if (*flag == true) {\n        if (napi_run_event_loop(env, napi_event_mode_default) != napi_ok) {\n            napi_close_handle_scope(env, scope);\n            napi_destroy_ark_runtime(&env);\n            return nullptr;\n        }\n    } else {\n        if (napi_run_event_loop(env, napi_event_mode_nowait) != napi_ok) {\n            napi_close_handle_scope(env, scope);\n            napi_destroy_ark_runtime(&env);\n            return nullptr;\n        }\n    }\n\n    if (scope != nullptr) {\n        napi_close_handle_scope(env, scope);\n        scope = nullptr;\n    }\n    if (env != nullptr) {\n        napi_status destroy_ret = napi_destroy_ark_runtime(&env);\n        if (destroy_ret != napi_ok) {\n            OH_LOG_INFO(LOG_APP, \"Failed to destroy ark runtime\");\n        }\n        env = nullptr;\n    }\n    return nullptr;\n}\n\nstatic napi_value RunEventLoop(napi_env env, napi_callback_info info)\n{\n    pthread_t tid;\n    size_t argc = 1;\n    napi_value argv[1] = { nullptr };\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n\n    bool flag = false;\n    napi_get_value_bool(env, argv[0], &flag);\n    // 创建异步线程\n    pthread_create(&tid, nullptr, RunEventLoopFunc, &flag);\n    pthread_join(tid, nullptr);\n\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"runEventLoop\", nullptr, RunEventLoop, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module nativeModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = nullptr,\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule()\n{\n    napi_module_register(&nativeModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口声明"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.d.ts\nexport const runEventLoop: (isDefault: boolean) => object;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译配置"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt文件需要按照如下配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// CMakeLists.txt\n# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(MyApplication3)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\nadd_definitions( \"-DLOG_TAG=\\\"LOG_TAG\\\"\" )\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要在模块的build-profile.json5文件中进行以下配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"arkOptions\" : {\n    \"runtimeOnly\" : {\n      \"sources\": [\n        \"./src/main/ets/pages/ObjectUtils.ets\"\n      ]\n    }\n  },\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS代码示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入头文件\nimport testNapi from 'libentry.so'\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.ets\ntestNapi.runEventLoop(true);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export function SetTimeout(): Promise<void> {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.info('set timer delay 1s');\n      // attempt to stop the event loop at napi terminal\n      resolve();\n    }, 1000)\n  })\n}\n"
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