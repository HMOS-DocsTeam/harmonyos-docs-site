"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["41255"], {
853057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_scenarios_jsvm_usage_examples_use_jsvm_runtime_task_use_jsvm_runtime_task_md_195_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-scenarios-jsvm-usage-examples-use-jsvm-runtime-task-use-jsvm-runtime-task-md-195.json
var site_docs_coding_jsvm_jsvm_scenarios_jsvm_usage_examples_use_jsvm_runtime_task_use_jsvm_runtime_task_md_195_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-runtime-task/use-jsvm-runtime-task","title":"使用JSVM-API接口创建多个引擎执行JS代码并销毁","description":"场景介绍","source":"@site/docs/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-runtime-task/use-jsvm-runtime-task.md","sourceDirName":"coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-runtime-task","slug":"/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-runtime-task/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-runtime-task/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用JSVM-API接口创建多个引擎执行JS代码并销毁","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-runtime-task","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JSVM-API 内存泄漏问题定位指导","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-locate-memory-leak/"},"next":{"title":"使用code cache加速编译","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-runtime-task/use-jsvm-runtime-task.md


const frontMatter = {
	title: '使用JSVM-API接口创建多个引擎执行JS代码并销毁',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-runtime-task',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口创建多个引擎执行JS代码并销毁';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用jsvm-api接口创建多个引擎执行js代码并销毁",
        children: "使用JSVM-API接口创建多个引擎执行JS代码并销毁"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过createJsCore方法来创建一个新的JS运行时环境，并通过该方法获得一个CoreID。然后，通过evaluateJS方法使用CoreID对应的运行环境来运行JS代码，在JS代码中创建promise并异步执行函数。最后，使用releaseJsCore方法来销毁CoreID对应的运行环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅对接口对应C++相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建多个JS运行时环境并运行JS代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <map>\n#include <mutex>\n#include <deque>\nusing namespace std;\n// 定义map管理每个独立vm环境\nstatic map<int, JSVM_VM *> g_vmMap;\nstatic map<int, JSVM_Env *> g_envMap;\nstatic map<int, JSVM_CallbackStruct *> g_callBackStructMap;\nstatic uint32_t ENVTAG_NUMBER = 0;\nstatic std::mutex envMapLock;\nstatic int g_aa = 0;\n\n#define CHECK_COND(cond)                                                                                               \\\n    do {                                                                                                               \\\n        if (!(cond)) {                                                                                                 \\\n            OH_LOG_ERROR(LOG_APP, \"jsvm fail file: %{public}s line: %{public}d ret = false\", __FILE__, __LINE__);      \\\n            return -1;                                                                                                 \\\n        }                                                                                                              \\\n    } while (0)\n\nclass Task {\npublic:\n    virtual ~Task() = default;\n    virtual void Run() = 0;\n};\nstatic map<int, deque<Task *>> g_taskQueueMap;\n\n// 自定义ConsoleInfo方法\nstatic JSVM_Value ConsoleInfo(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1];\n    char log[256] = \"\";\n    size_t log_length = 0;\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL));\n\n    JSVM_CALL(OH_JSVM_GetValueStringUtf8(env, args[0], log, 255, &log_length));\n    log[255] = 0;\n    OH_LOG_INFO(LOG_APP, \"JSVM API TEST: %{public}s\", log);\n    return nullptr;\n}\n\n// 自定义创建Promise方法用以在JS代码中创建Promise\nstatic JSVM_Value CreatePromise(JSVM_Env env, JSVM_CallbackInfo info) {\n    OH_LOG_INFO(LOG_APP, \"JSVM API TEST: CreatePromise start\");\n    int envID = -1;\n    // 通过当前env获取envID\n    for (auto it = g_envMap.begin(); it != g_envMap.end(); ++it) {\n        if (*it->second == env) {\n            envID = it->first;\n            break;\n        }\n    }\n    if (envID == -1) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM API TEST: CreatePromise envID failed\");\n        return nullptr;\n    }\n    JSVM_Value promise;\n    JSVM_Deferred deferred;\n    JSVM_CALL(OH_JSVM_CreatePromise(env, &deferred, &promise));\n    // 设计ReadTask类用以将promise对象的deferred加入执行队列\n    class ReadTask : public Task {\n    public:\n        ReadTask(JSVM_Env env, JSVM_Deferred deferred, int envNum) : env_(env), envID_(envNum), deferred_(deferred) {}\n        void Run() override {\n            // string str = \"TEST RUN OH_JSVM_ResolveDeferred\";\n            int envID = 0;\n            for (auto it = g_envMap.begin(); it != g_envMap.end(); ++it) {\n                if (*it->second == env_) {\n                    envID = it->first;\n                    break;\n                }\n            }\n            OH_LOG_INFO(LOG_APP, \"JSVM API TEST: CreatePromise %{public}d\", envID);\n            JSVM_Value result;\n            if (OH_JSVM_CreateInt32(env_, envID, &result) != JSVM_OK) {\n                return;\n            }\n            if (OH_JSVM_ResolveDeferred(env_, deferred_, result) != JSVM_OK) {\n                return;\n            }\n        }\n\n    private:\n        JSVM_Env env_;\n        int envID_;\n        JSVM_Deferred deferred_;\n    };\n    g_taskQueueMap[envID].push_back(new ReadTask(env, deferred, envID));\n    OH_LOG_INFO(LOG_APP, \"JSVM API TEST: CreatePromise end\");\n    return promise;\n}\n\n// 自定义Add方法\nstatic JSVM_Value Add(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 2;\n    JSVM_Value args[2];\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL));\n    double num1 = 0, num2 = 0;\n    JSVM_CALL(OH_JSVM_GetValueDouble(env, args[0], &num1));\n    JSVM_CALL(OH_JSVM_GetValueDouble(env, args[1], &num2));\n    JSVM_Value sum = nullptr;\n    JSVM_CALL(OH_JSVM_CreateDouble(env, num1 + num2, &sum));\n    return sum;\n}\n\n// 自定义AssertEqual方法\nstatic JSVM_Value AssertEqual(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 2;\n    JSVM_Value args[2];\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL));\n\n    bool isStrictEquals = false;\n    JSVM_CALL(OH_JSVM_StrictEquals(env, args[0], args[1], &isStrictEquals));\n\n    if (isStrictEquals) {\n        OH_LOG_INFO(LOG_APP, \"JSVM API TEST RESULT: PASS\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM API TEST RESULT: FAILED\");\n    }\n    return nullptr;\n}\n\nstatic int fromOHStringValue(JSVM_Env &env, JSVM_Value &value, std::string &result) {\n    size_t size = 0;\n    CHECK_RET(OH_JSVM_GetValueStringUtf8(env, value, nullptr, 0, &size));\n    char *resultStr = new char[size + 1];\n    CHECK_RET(OH_JSVM_GetValueStringUtf8(env, value, resultStr, size + 1, &size));\n    result = resultStr;\n    delete[] resultStr;\n    return 0;\n}\n\n// 提供创建JSVM运行环境的对外接口并返回对应唯一ID\nstatic int CreateJsCore(uint32_t *result) {\n    OH_LOG_INFO(LOG_APP, \"JSVM CreateJsCore START\");\n    g_taskQueueMap[ENVTAG_NUMBER] = deque<Task *>{};\n\n    if (g_aa == 0) {\n        JSVM_InitOptions init_options;\n        memset(&init_options, 0, sizeof(init_options));\n        CHECK(OH_JSVM_Init(&init_options));\n        g_aa++;\n    }\n    std::lock_guard<std::mutex> lock_guard(envMapLock);\n\n    // 虚拟机实例\n    g_vmMap[ENVTAG_NUMBER] = new JSVM_VM;\n    JSVM_CreateVMOptions options;\n    JSVM_VMScope vmScope;\n    memset(&options, 0, sizeof(options));\n    CHECK(OH_JSVM_CreateVM(&options, g_vmMap[ENVTAG_NUMBER]));\n    CHECK(OH_JSVM_OpenVMScope(*g_vmMap[ENVTAG_NUMBER], &vmScope));\n\n    // 新环境\n    g_envMap[ENVTAG_NUMBER] = new JSVM_Env;\n    g_callBackStructMap[ENVTAG_NUMBER] = new JSVM_CallbackStruct[4];\n\n    // 注册用户提供的本地函数的回调函数指针和数据，通过JSVM-API暴露给js\n    for (int i = 0; i < 4; i++) {\n        g_callBackStructMap[ENVTAG_NUMBER][i].data = nullptr;\n    }\n    g_callBackStructMap[ENVTAG_NUMBER][0].callback = ConsoleInfo;\n    g_callBackStructMap[ENVTAG_NUMBER][1].callback = Add;\n    g_callBackStructMap[ENVTAG_NUMBER][2].callback = AssertEqual;\n    g_callBackStructMap[ENVTAG_NUMBER][3].callback = CreatePromise;\n    JSVM_PropertyDescriptor descriptors[] = {\n        {\"consoleinfo\", NULL, &g_callBackStructMap[ENVTAG_NUMBER][0], NULL, NULL, NULL, JSVM_DEFAULT},\n        {\"add\", NULL, &g_callBackStructMap[ENVTAG_NUMBER][1], NULL, NULL, NULL, JSVM_DEFAULT},\n        {\"assertEqual\", NULL, &g_callBackStructMap[ENVTAG_NUMBER][2], NULL, NULL, NULL, JSVM_DEFAULT},\n        {\"createPromise\", NULL, &g_callBackStructMap[ENVTAG_NUMBER][3], NULL, NULL, NULL, JSVM_DEFAULT},\n    };\n    CHECK(OH_JSVM_CreateEnv(*g_vmMap[ENVTAG_NUMBER], sizeof(descriptors) / sizeof(descriptors[0]), descriptors,\n                            g_envMap[ENVTAG_NUMBER]));\n    CHECK(OH_JSVM_CloseVMScope(*g_vmMap[ENVTAG_NUMBER], vmScope));\n\n    OH_LOG_INFO(LOG_APP, \"JSVM CreateJsCore END\");\n    *result = ENVTAG_NUMBER;\n    ENVTAG_NUMBER++;\n    return 0;\n}\n\n// 对外提供释放JSVM环境接口，通过envId释放对应环境\nstatic int ReleaseJsCore(uint32_t coreEnvId) {\n    std::lock_guard<std::mutex> lock_guard(envMapLock);\n    \n    OH_LOG_INFO(LOG_APP, \"JSVM ReleaseJsCore START\");\n    CHECK_COND(g_envMap.count(coreEnvId) != 0 && g_envMap[coreEnvId] != nullptr);\n\n    CHECK(OH_JSVM_DestroyEnv(*g_envMap[coreEnvId]));\n    g_envMap[coreEnvId] = nullptr;\n    g_envMap.erase(coreEnvId);\n    CHECK(OH_JSVM_DestroyVM(*g_vmMap[coreEnvId]));\n    g_vmMap[coreEnvId] = nullptr;\n    g_vmMap.erase(coreEnvId);\n    delete[] g_callBackStructMap[coreEnvId];\n    g_callBackStructMap[coreEnvId] = nullptr;\n    g_callBackStructMap.erase(coreEnvId);\n    g_taskQueueMap.erase(coreEnvId);\n\n    OH_LOG_INFO(LOG_APP, \"JSVM ReleaseJsCore END\");\n    return 0;\n}\n\nstatic std::mutex mutexLock;\n// 对外提供执行JS代码接口，通过coreID在对应的JSVM环境中执行JS代码\nstatic int EvaluateJS(uint32_t envId, const char *source, std::string &res) {\n    OH_LOG_INFO(LOG_APP, \"JSVM EvaluateJS START\");\n\n    CHECK_COND(g_envMap.count(envId) != 0 && g_envMap[envId] != nullptr);\n\n    JSVM_Env env = *g_envMap[envId];\n    JSVM_VM vm = *g_vmMap[envId];\n    JSVM_VMScope vmScope;\n    JSVM_EnvScope envScope;\n    JSVM_HandleScope handleScope;\n    JSVM_Value result;\n\n    std::lock_guard<std::mutex> lock_guard(mutexLock);\n    {\n        // 创建JSVM环境\n        CHECK_RET(OH_JSVM_OpenVMScope(vm, &vmScope));\n        CHECK_RET(OH_JSVM_OpenEnvScope(*g_envMap[envId], &envScope));\n        CHECK_RET(OH_JSVM_OpenHandleScope(*g_envMap[envId], &handleScope));\n\n        // 通过script调用测试函数\n        JSVM_Script script;\n        JSVM_Value jsSrc;\n        CHECK_RET(OH_JSVM_CreateStringUtf8(env, source, JSVM_AUTO_LENGTH, &jsSrc));\n        CHECK_RET(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n        CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n\n        JSVM_ValueType type;\n        CHECK_RET(OH_JSVM_Typeof(env, result, &type));\n        OH_LOG_INFO(LOG_APP, \"JSVM API TEST type: %{public}d\", type);\n        // Execute tasks in the current env event queue\n        while (!g_taskQueueMap[envId].empty()) {\n            auto task = g_taskQueueMap[envId].front();\n            g_taskQueueMap[envId].pop_front();\n            task->Run();\n            delete task;\n        }\n\n        if (type == JSVM_STRING) {\n            CHECK_COND(fromOHStringValue(env, result, res) != -1);\n        } else if (type == JSVM_BOOLEAN) {\n            bool ret = false;\n            CHECK_RET(OH_JSVM_GetValueBool(env, result, &ret));\n            ret ? res = \"true\" : res = \"false\";\n        } else if (type == JSVM_NUMBER) {\n            int32_t num = 0;\n            CHECK_RET(OH_JSVM_GetValueInt32(env, result, &num));\n            res = std::to_string(num);\n        } else if (type == JSVM_OBJECT) {\n            JSVM_Value objResult;\n            CHECK_RET(OH_JSVM_JsonStringify(env, result, &objResult));\n            CHECK_COND(fromOHStringValue(env, objResult, res) != -1);\n        }\n    }\n    {\n        bool aal = false;\n        CHECK_RET(OH_JSVM_PumpMessageLoop(*g_vmMap[envId], &aal));\n        CHECK_RET(OH_JSVM_PerformMicrotaskCheckpoint(*g_vmMap[envId]));\n        CHECK_RET(OH_JSVM_CloseHandleScope(*g_envMap[envId], handleScope));\n        CHECK_RET(OH_JSVM_CloseEnvScope(*g_envMap[envId], envScope));\n        CHECK_RET(OH_JSVM_CloseVMScope(*g_vmMap[envId], vmScope));\n    }\n    OH_LOG_INFO(LOG_APP, \"JSVM EvaluateJS END\");\n    return 0;\n}\n\nstatic int32_t TestJSVM() {\n    const char source1[] = \"{\\\n        let a = \\\"hello World\\\";\\\n        consoleinfo(a);\\\n        const mPromise = createPromise();\\\n        mPromise.then((result) => {\\\n          assertEqual(result, 0);\\\n        });\\\n        a;\\\n    };\";\n\n    const char source2[] = \"{\\\n        let a = \\\"second hello\\\";\\\n        consoleinfo(a);\\\n        let b = add(99, 1);\\\n        assertEqual(100, b);\\\n        assertEqual(add(99, 1), 100);\\\n        createPromise().then((result) => {\\\n            assertEqual(result, 1);\\\n        });\\\n        a;\\\n    };\";\n\n    // 创建首个运行环境，并绑定TS回调\n    uint32_t coreId1 = 0;\n    CHECK_COND(CreateJsCore(&coreId1) == 0);\n    OH_LOG_INFO(LOG_APP, \"TEST coreId: %{public}d\", coreId1);\n    // 在首个运行环境中执行JS代码\n    std::string result1;\n    CHECK_COND(EvaluateJS(coreId1, source1, result1) == 0);\n    OH_LOG_INFO(LOG_APP, \"TEST evaluateJS: %{public}s\", result1.c_str());\n\n    // 创建第二个运行环境，并绑定TS回调\n    uint32_t coreId2 = 0;\n    CHECK_COND(CreateJsCore(&coreId2) == 0);\n    OH_LOG_INFO(LOG_APP, \"TEST coreId: %{public}d\", coreId2);\n    // 在第二个运行环境中执行JS代码\n    std::string result2;\n    CHECK_COND(EvaluateJS(coreId2, source2, result2) == 0);\n    OH_LOG_INFO(LOG_APP, \"TEST evaluateJS: %{public}s\", result2.c_str());\n\n    // 释放首个运行环境\n    CHECK_COND(ReleaseJsCore(coreId1) == 0);\n    // 释放第二个运行环境\n    CHECK_COND(ReleaseJsCore(coreId2) == 0);\n    OH_LOG_INFO(LOG_APP, \"Test NAPI end\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateJsCore START\nJSVM CreateJsCore END\nTEST coreId: 0\nJSVM EvaluateJS START\nJSVM API TEST: hello World\nJSVM API TEST: CreatePromise start\nJSVM API TEST: CreatePromise end\nJSVM API TEST type: 4\nJSVM API TEST: CreatePromise 0\nJSVM API TEST RESULT: PASS\nJSVM EvaluateJS END\nTEST evaluateJS: hello World\nJSVM CreateJsCore START\nJSVM CreateJsCore END\nTEST coreId: 1\nJSVM EvaluateJS START\nJSVM API TEST: second hello\nJSVM API TEST RESULT: PASS\nJSVM API TEST RESULT: PASS\nJSVM API TEST: CreatePromise start\nJSVM API TEST: CreatePromise end\nJSVM API TEST type: 4\nJSVM API TEST: CreatePromise 1\nJSVM API TEST RESULT: PASS\nJSVM EvaluateJS END\nTEST evaluateJS: second hello\nJSVM ReleaseJsCore START\nJSVM ReleaseJsCore END\nJSVM ReleaseJsCore START\nJSVM ReleaseJsCore END\nTest NAPI end\n"
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