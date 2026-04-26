"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["262476"], {
114941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_method_promise_use_napi_method_promise_md_8c1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-method-promise-use-napi-method-promise-md-8c1.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_method_promise_use_napi_method_promise_md_8c1_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-method-promise/use-napi-method-promise","title":"使用Node-API调用返回值为promise的ArkTS方法","description":"场景介绍","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-method-promise/use-napi-method-promise.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-method-promise","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-method-promise/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-method-promise/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"使用Node-API调用返回值为promise的ArkTS方法","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-method-promise","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口产生的异常日志/崩溃分析","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-crash/"},"next":{"title":"使用扩展的Node-API接口创建对ArkTS对象的Sendable强引用","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-sendable-reference/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-method-promise/use-napi-method-promise.md


const frontMatter = {
	title: '使用Node-API调用返回值为promise的ArkTS方法',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-method-promise',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API调用返回值为promise的ArkTS方法';

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
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用node-api调用返回值为promise的arkts方法",
        children: "使用Node-API调用返回值为promise的ArkTS方法"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当ArkTS的返回值为Promise时，可以按以下方式在创建的ArkTS运行环境中调用异步接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用异步的arkts接口示例",
      children: "调用异步的ArkTS接口示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用C++通过NAPI调用返回Promise的ArkTS方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-promise",
        children: "Promise"
      }), "对象：将Promise与C++回调绑定，处理异步结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换数据类型：在回调中将JavaScript结果转换为c++可用的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"napi/native_api.h\"\n\n// 解析Promise结果的回调\nstatic napi_value ResolvedCallback(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = { nullptr };\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    int result = 0;\n    napi_get_value_int32(env, args[0], &result);\n    OH_LOG_INFO(LOG_APP, \"Promise resolved with result:%{public}d\", result);\n    return nullptr;\n}\n\n// 拒绝Promise的回调\nstatic napi_value RejectedCallback(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = { nullptr };\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    napi_value error = nullptr;\n    napi_coerce_to_string(env, args[0], &error);\n    char errorMsg[1024] = {0};\n    size_t len = 0;\n    napi_get_value_string_utf8(env, error, errorMsg, sizeof(errorMsg) - 1, &len);\n    errorMsg[len] = '\\0';\n    OH_LOG_ERROR(LOG_APP, \"Promise rejected with error:%{public}s\", errorMsg);\n    return nullptr;\n}\n\nstatic napi_value CallArkTSAsync(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = { nullptr };\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 初始化Promise对象\n    napi_value promise = nullptr;\n    napi_call_function(env, nullptr, argv[0], 0, nullptr, &promise);\n\n    // 初始化thenFunc对象\n    napi_value thenFunc = nullptr;\n    if (napi_get_named_property(env, promise, \"then\", &thenFunc) != napi_ok) {\n        return nullptr;\n    }\n    // 初始化onResolve对象\n    napi_value onResolve = nullptr;\n    // 初始化onReject对象\n    napi_value onReject = nullptr;\n    napi_create_function(env, \"onResolve\", NAPI_AUTO_LENGTH, ResolvedCallback, nullptr, &onResolve);\n    napi_create_function(env, \"onReject\", NAPI_AUTO_LENGTH, RejectedCallback, nullptr, &onReject);\n    // 创建参数数组\n    napi_value thenArgv[2] = {onResolve, onReject};\n    napi_call_function(env, promise, thenFunc, 2, thenArgv, nullptr);\n\n    return nullptr;\n}\n\n// 注册模块接口\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    // 初始化属性描述数组\n    napi_property_descriptor desc[] = {\n        {\"callArkTSAsync\", nullptr, CallArkTSAsync, nullptr, nullptr, nullptr, napi_default, nullptr}\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\n// 初始化模块\nstatic napi_module nativeModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = nullptr,\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule()\n{\n    napi_module_register(&nativeModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口声明"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.d.ts\nexport const callArkTSAsync: (func: Function) => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt文件需要按照以下配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// CMakeLists.txt\n# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(myapplication)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS代码示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.ets\nimport testNapi from 'libentry.so';\n\nexport function SetTimeout() : Promise<number> {\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            resolve(42);\n        }, 1000);\n    })\n}\ntestNapi.callArkTSAsync(SetTimeout);\n"
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