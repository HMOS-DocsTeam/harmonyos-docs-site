"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["230622"], {
784501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_function_call_use_jsvm_function_call_md_8fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-function-call-use-jsvm-function-call-md-8fb.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_function_call_use_jsvm_function_call_md_8fb_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-function-call/use-jsvm-function-call","title":"使用JSVM-API接口进行函数创建和调用","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-function-call/use-jsvm-function-call.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-function-call","slug":"/coding/jsvm/jsvm-use/use-jsvm-function-call/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-function-call/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用JSVM-API接口进行函数创建和调用","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-function-call","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行WebAssembly模块相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-wasm/"},"next":{"title":"使用JSVM-API接口进行JSON操作","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-json/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-function-call/use-jsvm-function-call.md


const frontMatter = {
	title: '使用JSVM-API接口进行函数创建和调用',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-function-call',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行函数创建和调用';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "OH_JSVM function整合测试",
  "id": "oh_jsvm-function整合测试",
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
        id: "使用jsvm-api接口进行函数创建和调用",
        children: "使用JSVM-API接口进行函数创建和调用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数调用允许开发者从JSVM模块中调用JavaScript函数，并传参，或者直接在JSVM模块中创建一个JavaScript函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数是一种重要的编程概念，用于执行特定任务，提升代码可读性与复用性，简化复杂操作，并实现代码的模块化和结构化，便于理解、维护和扩展。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetCbInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定的callback info中获取有关调用的详细信息，如参数和this指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CallFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在C/C++侧调用JavaScript方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断对象是否为函数对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建JavaScript函数,用于从JavaScript环境中调用C/C++代码中的函数, 需要设置到一个JavaScript对象中才可以进行调用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅对接口对应C++相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm-function整合测试",
      children: "OH_JSVM function整合测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp测试全量代码，入口为TEST_FUNC"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"hilog/log.h\"\n#include \"ark_runtime/jsvm.h\"\n\n#define LOG_DOMAIN 0x3200\n#define LOG_TAG \"APP\"\n\n#define CHECK_RET(cond) \\\n  if ((cond)) { \\\n    const JSVM_ExtendedErrorInfo* info; \\\n    OH_JSVM_GetLastErrorInfo(env, &info); \\\n    OH_LOG_ERROR(LOG_APP, \"jsvm fail file: %{public}s line: %{public}d ret = %{public}d message = %{public}s\", __FILE__, __LINE__, cond, info != nullptr ? info->errorMessage : \"\"); \\\n    return -1;   \\\n  }\n\n#define CHECK(cond) \\\n  if (!(cond)) { \\\n     OH_LOG_ERROR(LOG_APP, \"jsvm fail file: %{public}s line: %{public}d ret = %{public}d\", __FILE__, __LINE__, cond); \\\n     return -1;   \\\n  }\n\nJSVM_Value NativeCreateFunctionTest(JSVM_Env env, JSVM_CallbackInfo info) {\n    void *data = nullptr;\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    JSVM_Value thisArg;\n    // 获取callback 参数信息\n    JSVM_Status ret = OH_JSVM_GetCbInfo(env, info, &argc, &argv[0], &thisArg, &data);\n    if (ret != JSVM_OK) {\n      const JSVM_ExtendedErrorInfo* info;\n      OH_JSVM_GetLastErrorInfo(env, &info);\n      OH_LOG_ERROR(LOG_APP, \"jsvm fail file: %{public}s line: %{public}d ret = %{public}d message = %{public}s\", __FILE__, __LINE__, ret, info != nullptr ? info->errorMessage : \"\");\n      return nullptr;\n    }\n    char message[256];\n    OH_JSVM_GetValueStringLatin1(env, argv[0], message, 256, nullptr);\n    if (data == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"jsvm: %{public}s; callback data null\", message);\n    } else {\n        OH_LOG_INFO(LOG_APP, \"jsvm: %{public}s; %{public}s\", message, (char*)data);\n    }\n    return nullptr;\n}\n\nstatic int32_t TEST_FUNC() {\n    JSVM_InitOptions initOptions{};\n    JSVM_VM vm;\n    JSVM_Env env = nullptr;\n    JSVM_VMScope vmScope;\n    JSVM_EnvScope envScope;\n    JSVM_HandleScope handleScope;\n    JSVM_Value result;\n    static bool isVMInit = false;\n    if (!isVMInit) {\n        isVMInit = true;\n        // 单个进程只需初始化一次\n        OH_JSVM_Init(&initOptions);\n    }\n    CHECK_RET(OH_JSVM_CreateVM(nullptr, &vm));\n    CHECK_RET(OH_JSVM_CreateEnv(vm, 0, nullptr, &env));\n    CHECK_RET(OH_JSVM_OpenVMScope(vm, &vmScope));\n    CHECK_RET(OH_JSVM_OpenEnvScope(env, &envScope));\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handleScope));\n\n    // 创建并检查函数\n    char hello[] = \"Hello World!\";\n    JSVM_CallbackStruct cb = {NativeCreateFunctionTest, (void*)hello};\n    JSVM_Value func;\n    CHECK_RET(OH_JSVM_CreateFunction(env, \"\", JSVM_AUTO_LENGTH, &cb, &func));\n    bool isFunction = false;\n    CHECK_RET(OH_JSVM_IsFunction(env, func, &isFunction));\n    CHECK(isFunction);\n\n    // 将函数设置到全局对象中\n    JSVM_Value global;\n    CHECK_RET(OH_JSVM_GetGlobal(env, &global));\n    JSVM_Value key;\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, \"NativeFunc\", JSVM_AUTO_LENGTH, &key));\n    CHECK_RET(OH_JSVM_SetProperty(env, global, key, func));\n\n    // 通过call 接口调用函数\n    JSVM_Value argv[1] = {nullptr};\n    OH_JSVM_CreateStringUtf8(env, \"jsvm api call function\", JSVM_AUTO_LENGTH, &argv[0]);\n    CHECK_RET(OH_JSVM_CallFunction(env, global, func, 1, argv, &result));\n\n    // 通过script调用函数\n    JSVM_Script script;\n    JSVM_Value jsSrc;\n    const char* srcCallNative = R\"JS(NativeFunc('js source call function');)JS\";\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, srcCallNative, JSVM_AUTO_LENGTH, &jsSrc));\n    CHECK_RET(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handleScope));\n    CHECK_RET(OH_JSVM_CloseEnvScope(env, envScope));\n    CHECK_RET(OH_JSVM_CloseVMScope(vm, vmScope));\n    CHECK_RET(OH_JSVM_DestroyEnv(env));\n    CHECK_RET(OH_JSVM_DestroyVM(vm));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "jsvm: jsvm api call function; Hello World!\njsvm: js source call function; Hello World!\n"
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