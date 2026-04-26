"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["62776"], {
592298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_execute_tasks_use_jsvm_execute_tasks_md_ea5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-execute-tasks-use-jsvm-execute-tasks-md-ea5.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_execute_tasks_use_jsvm_execute_tasks_md_ea5_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-execute_tasks/use-jsvm-execute_tasks","title":"使用JSVM-API接口进行任务队列相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-execute_tasks/use-jsvm-execute_tasks.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-execute_tasks","slug":"/coding/jsvm/jsvm-use/use-jsvm-execute_tasks/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-execute_tasks/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用JSVM-API接口进行任务队列相关开发","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-execute_tasks","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JSVM-API常见问题","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-development-standards/jsvm-frequently-questions/"},"next":{"title":"使用JSVM-API接口进行虚拟机快照相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-create-snapshot/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-execute_tasks/use-jsvm-execute_tasks.md


const frontMatter = {
	title: '使用JSVM-API接口进行任务队列相关开发',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-execute_tasks',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行任务队列相关开发';

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
  "value": "OH_JSVM_PumpMessageLoop &amp; OH_JSVM_PerformMicrotaskCheckpoint",
  "id": "oh_jsvm_pumpmessageloop--oh_jsvm_performmicrotaskcheckpoint",
  "level": 3
}, {
  "value": "OH_JSVM_SetMicrotaskPolicy",
  "id": "oh_jsvm_setmicrotaskpolicy",
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
    strong: "strong",
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
        id: "使用jsvm-api接口进行任务队列相关开发",
        children: "使用JSVM-API接口进行任务队列相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在虚拟机内启动任务队列，检查队列中是否有待处理的微任务。任务队列可由外部事件循环执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "任务队列"
          })
        }), "：用于管理异步任务的调度和执行，确保任务按顺序处理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "微任务"
          })
        }), "：微任务是一种任务调度机制，主要用于处理那些需要尽快执行的较小任务，它们通常具有较高的优先级。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_PumpMessageLoop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动任务队列的运行"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_PerformMicrotaskCheckpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行任务队列里的微任务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetMicrotaskPolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置微任务执行策略"
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
      }), "，本文仅展示接口对应的C++相关代码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["权限要求：Wasm字节码需要应用拥有JIT权限才能执行，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile",
        children: "JSVM 申请JIT权限指导"
      }), "申请对应权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["运行限制：当前 JSVM 版本在坚盾守护模式下将禁用 WebAssembly 全部功能模块。开发者需针对此限制进行应用兼容性评估，具体技术规范详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode",
        children: "JSVM 坚盾守护模式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_pumpmessageloop--oh_jsvm_performmicrotaskcheckpoint",
      children: "OH_JSVM_PumpMessageLoop & OH_JSVM_PerformMicrotaskCheckpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动任务队列，执行任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <chrono>\n#include <string.h>\n\nstatic int g_aa = 0;\n\n// 待执行的js代码\nstatic const char *STR_TASK = R\"JS(\n    // wasm 字节码 (以add 模块为例)\n    // 以下 wasmBuffer 对应的 wasm 字节码文本格式如下所示，只包含了一个函数 add\n    // (module\n    //   (func $add (param $lhs i32) (param $rhs i32) (result i32)\n    //     local.get $lhs\n    //     local.get $rhs\n    //     i32.add\n    //   )\n    //   (export \"add\" (func $add))\n    // )\n    var wasmBytes = new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x07, 0x01,\n                                       0x60, 0x02, 0x7f, 0x7f, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x07,\n                                       0x07, 0x01, 0x03, 0x61, 0x64, 0x64, 0x00, 0x00, 0x0a, 0x09, 0x01,\n                                       0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6a, 0x0b]);\n\n    var p = WebAssembly.instantiate(wasmBytes, {});\n    p.then((result) => {\n        consoleinfo(\"Called with instance \" + result);\n    });\n    p.finally(() => {\n       consoleinfo(\"Called Finally\");\n    });\n)JS\";\n\n// 保证js代码中的打印信息可以正常输出\nstatic JSVM_Value ConsoleInfo(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1];\n    char log[256] = \"\";\n    size_t logLength = 0;\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL));\n\n    OH_JSVM_GetValueStringUtf8(env, args[0], log, 255, &logLength);\n    log[255] = 0;\n    OH_LOG_INFO(LOG_APP, \"JSVM API TEST: %{public}s\", log);\n    return nullptr;\n}\n\n// 注册consoleinfo的方法\nJSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = ConsoleInfo},\n};\nJSVM_PropertyDescriptor descriptor[] = {\n    {\"consoleinfo\", NULL, &param[0], NULL, NULL, NULL, JSVM_DEFAULT},\n};\n\nstatic int32_t TestJSVM() {\n    JSVM_InitOptions init_options;\n    memset(&init_options, 0, sizeof(init_options));\n    if (g_aa == 0) {\n        OH_JSVM_Init(&init_options);\n        g_aa++;\n    }\n    // 创建JavaScript虚拟机实例,打开虚拟机作用域\n    JSVM_VM vm;\n    JSVM_CreateVMOptions options;\n    memset(&options, 0, sizeof(options));\n    CHECK(OH_JSVM_CreateVM(&options, &vm));\n    JSVM_VMScope vm_scope;\n    CHECK(OH_JSVM_OpenVMScope(vm, &vm_scope));\n    \n    JSVM_Env env;\n    CHECK(OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env));\n    JSVM_EnvScope envScope;\n    CHECK_RET(OH_JSVM_OpenEnvScope(env, &envScope));\n    JSVM_HandleScope handlescope;\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handlescope));\n    JSVM_Value sourcecodevalue;\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, STR_TASK, strlen(STR_TASK), &sourcecodevalue));\n    JSVM_Script script;\n    CHECK_RET(OH_JSVM_CompileScript(env, sourcecodevalue, nullptr, 0, true, nullptr, &script));\n    JSVM_Value result;\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n    bool rst = false;\n    auto start = std::chrono::system_clock::now();\n    while (true) {\n        // 如果任务队列中没有任务启动，则rst设置为false\n        CHECK_RET(OH_JSVM_PumpMessageLoop(vm, &rst));\n        CHECK_RET(OH_JSVM_PerformMicrotaskCheckpoint(vm));\n        // 定时退出\n        auto now = std::chrono::system_clock::now();\n        auto cost = std::chrono::duration_cast<std::chrono::milliseconds>(now - start).count();\n        if (cost > 100) {\n            break;\n        }\n    }\n\n    // 关闭并销毁环境和虚拟机\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handlescope));\n    CHECK_RET(OH_JSVM_CloseEnvScope(env, envScope));\n    CHECK(OH_JSVM_DestroyEnv(env));\n    CHECK(OH_JSVM_CloseVMScope(vm, vm_scope));\n    CHECK(OH_JSVM_DestroyVM(vm));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API TEST: Called with instance [object Object]\nJSVM API TEST: Called Finally\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_setmicrotaskpolicy",
      children: "OH_JSVM_SetMicrotaskPolicy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改微任务执行策略，通过该接口，用户可以将策略设置为 JSVM_MicrotaskPolicy::JSVM_MICROTASK_EXPLICIT 或 JSVM_MicrotaskPolicy::JSVM_MICROTASK_AUTO。默认模式下，微任务的执行策略为 JSVM_MicrotaskPolicy::JSVM_MICROTASK_AUTO。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "微任务策略："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_MicrotaskPolicy::JSVM_MICROTASK_EXPLICIT ： 微任务在用户调用 OH_JSVM_PerformMicrotaskCheckpoint 后执行"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_MicrotaskPolicy::JSVM_MICROTASK_AUTO： 微任务在 JS 调用栈为空时自动执行"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_SetMicrotaskPolicy的样例方法\nstatic int SetMicrotaskPolicy(JSVM_VM vm, JSVM_Env env) {\n    // 默认或将策略设置为 JSVM_MICROTASK_AUTO 的行为\n    const char *scriptEvalMicrotask = R\"JS(\n        evaluateMicrotask = false;\n        Promise.resolve().then(()=>{\n            evaluateMicrotask = true;\n        });\n    )JS\";\n    JSVM_Script script;\n    JSVM_Value jsSrc;\n    JSVM_Value result;\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, scriptEvalMicrotask, JSVM_AUTO_LENGTH, &jsSrc));\n    CHECK_RET(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n    JSVM_Value global;\n    CHECK_RET(OH_JSVM_GetGlobal(env, &global));\n    JSVM_Value hasEvaluateMicrotask;\n    CHECK_RET(OH_JSVM_GetNamedProperty(env, global, \"evaluateMicrotask\", &hasEvaluateMicrotask));\n    bool val = false;\n    CHECK_RET(OH_JSVM_GetValueBool(env, hasEvaluateMicrotask, &val));\n\n    OH_LOG_INFO(LOG_APP, \"Policy :JSVM_MICROTASK_AUTO, evaluateMicrotask : %{public}d\", val);\n\n    // 策略设置为 JSVM_MICROTASK_EXPLICIT 的行为\n    CHECK_RET(OH_JSVM_SetMicrotaskPolicy(vm, JSVM_MicrotaskPolicy::JSVM_MICROTASK_EXPLICIT));\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n    CHECK_RET(OH_JSVM_GetNamedProperty(env, global, \"evaluateMicrotask\", &hasEvaluateMicrotask));\n    CHECK_RET(OH_JSVM_GetValueBool(env, hasEvaluateMicrotask, &val));\n    OH_LOG_INFO(\n        LOG_APP,\n        \"Policy: JSVM_MICROTASK_AUTO, evaluateMicrotask before calling OH_JSVM_PerformMicrotaskCheckpoint: %{public}d\",\n        val);\n\n    CHECK_RET(OH_JSVM_PerformMicrotaskCheckpoint(vm));\n    CHECK_RET(OH_JSVM_GetNamedProperty(env, global, \"evaluateMicrotask\", &hasEvaluateMicrotask));\n    CHECK_RET(OH_JSVM_GetValueBool(env, hasEvaluateMicrotask, &val));\n    OH_LOG_INFO(\n        LOG_APP,\n        \"Policy: JSVM_MICROTASK_AUTO, evaluateMicrotask after calling OH_JSVM_PerformMicrotaskCheckpoint: %{public}d\",\n        val);\n\n    return 0;\n}\n\nstatic void RunDemo(JSVM_VM vm, JSVM_Env env) {\n    if (SetMicrotaskPolicy(vm, env) != 0) {\n        OH_LOG_INFO(LOG_APP, \"Run Microtask Policy failed\");\n    }\n}\n\nstatic int32_t TestJSVM() {\n    JSVM_InitOptions initOptions = {0};\n    JSVM_VM vm;\n    JSVM_Env env = nullptr;\n    JSVM_VMScope vmScope;\n    JSVM_EnvScope envScope;\n    JSVM_HandleScope handleScope;\n    JSVM_Value result;\n    // 初始化JavaScript引擎实例\n    if (g_aa == 0) {\n        g_aa++;\n        CHECK(OH_JSVM_Init(&initOptions));\n    }\n    // 创建JSVM环境\n    CHECK(OH_JSVM_CreateVM(nullptr, &vm));\n    CHECK(OH_JSVM_CreateEnv(vm, 0, nullptr, &env));\n    CHECK(OH_JSVM_OpenVMScope(vm, &vmScope));\n    CHECK_RET(OH_JSVM_OpenEnvScope(env, &envScope));\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handleScope));\n\n    // 通过script调用测试函数\n    RunDemo(vm, env);\n\n    // 销毁JSVM环境\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handleScope));\n    CHECK_RET(OH_JSVM_CloseEnvScope(env, envScope));\n    CHECK(OH_JSVM_CloseVMScope(vm, vmScope));\n    CHECK(OH_JSVM_DestroyEnv(env));\n    CHECK(OH_JSVM_DestroyVM(vm));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Policy :JSVM_MICROTASK_AUTO, evaluateMicrotask : 1\nPolicy :JSVM_MICROTASK_AUTO, evaluateMicrotask before calling OH_JSVM_PerformMicrotaskCheckpoint: 0\nPolicy :JSVM_MICROTASK_AUTO, evaluateMicrotask after calling OH_JSVM_PerformMicrotaskCheckpoint: 1\n"
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