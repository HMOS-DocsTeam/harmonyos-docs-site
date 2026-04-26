"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["927253"], {
193894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_ark_runtime_use_napi_ark_runtime_md_c69_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-ark-runtime-use-napi-ark-runtime-md-c69.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_ark_runtime_use_napi_ark_runtime_md_c69_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime/use-napi-ark-runtime","title":"使用Node-API接口创建ArkTS运行时环境","description":"场景介绍","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime/use-napi-ark-runtime.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用Node-API接口创建ArkTS运行时环境","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-ark-runtime","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Native与Sendable ArkTS对象绑定","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-sendable-napi/"},"next":{"title":"使用Node-API接口在主线程中进行模块加载","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime/use-napi-ark-runtime.md


const frontMatter = {
	title: '使用Node-API接口创建ArkTS运行时环境',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-ark-runtime',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口创建ArkTS运行时环境';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
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
        id: "使用node-api接口创建arkts运行时环境",
        children: "使用Node-API接口创建ArkTS运行时环境"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过pthread_create创建新线程后，可以通过napi_create_ark_runtime来创建一个新的ArkTS基础运行时环境，并通过该运行时环境加载ArkTS模块。当使用结束后，开发者需要通过napi_destroy_ark_runtime来销毁所创建的ArkTS基础运行时环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个进程最多只能创建64个运行时环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口声明"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.d.ts\nexport const createArkRuntime: () => object;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(MyApplication3)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\nadd_definitions( \"-DLOG_TAG=\\\"LOG_TAG\\\"\" )\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前模块的build-profile.json5文件中进行以下配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"arkOptions\" : {\n    \"runtimeOnly\" : {\n      \"sources\": [\n        \"./src/main/ets/pages/ObjectUtils.ets\"\n      ]\n    }\n  },\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// create_ark_runtime.cpp\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"createArkRuntime\", nullptr, CreateArkRuntime, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module nativeModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = nullptr,\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterQueueWorkModule()\n{\n    napi_module_register(&nativeModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "功能实现"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建线程并创建ArkTS基础运行时环境，加载自定义模块请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module-with-info",
            children: "napi_load_module_with_info"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include <pthread.h>\n// ...\nstatic void *CreateArkRuntimeFunc(void *arg)\n{\n    // 1. 创建基础运行环境\n    napi_env env = nullptr;\n    napi_status ret = napi_create_ark_runtime(&env);\n    if (ret != napi_ok) {\n        return nullptr;\n    }\n\n    napi_handle_scope scope = nullptr;\n    if (napi_open_handle_scope(env, &scope) != napi_ok) {\n        napi_destroy_ark_runtime(&env);\n        return nullptr;\n    }\n\n    // 2. 加载自定义模块\n    napi_value objUtils = nullptr;\n    ret = napi_load_module_with_info(env, \"entry/src/main/ets/pages/ObjectUtils\", \"com.example.myapplication/entry\",\n                                     &objUtils);\n    if (ret != napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"Failed to load module\");\n        napi_close_handle_scope(env, scope);\n        napi_destroy_ark_runtime(&env);\n        return nullptr;\n    }\n\n    // 3. 使用ArkTS中的logger\n    napi_value logger = nullptr;\n    ret = napi_get_named_property(env, objUtils, \"Logger\", &logger);\n    if (ret != napi_ok) {\n        napi_close_handle_scope(env, scope);\n        napi_destroy_ark_runtime(&env);\n        return nullptr;\n    }\n    ret = napi_call_function(env, objUtils, logger, 0, nullptr, nullptr);\n    if (ret != napi_ok) {\n        napi_close_handle_scope(env, scope);\n        napi_destroy_ark_runtime(&env);\n        return nullptr;\n    }\n\n    napi_close_handle_scope(env, scope);\n\n    // 4. 销毁ArkTS环境\n    ret = napi_destroy_ark_runtime(&env);\n    if (ret != napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"Failed to destroy ark runtime\");\n    }\n\n    return nullptr;\n}\n\nstatic napi_value CreateArkRuntime(napi_env env, napi_callback_info info)\n{\n    pthread_t tid;\n    pthread_create(&tid, nullptr, CreateArkRuntimeFunc, nullptr);\n    pthread_join(tid, nullptr);\n    return nullptr;\n}\n"
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
            children: "export function Logger() {\n  console.info('print log');\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.ets\ntestNapi.createArkRuntime();\n"
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