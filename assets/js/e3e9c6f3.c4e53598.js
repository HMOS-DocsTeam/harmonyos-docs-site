"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["202736"], {
600459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_thread_safety_use_napi_thread_safety_md_e3e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-thread-safety-use-napi-thread-safety-md-e3e.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_thread_safety_use_napi_thread_safety_md_e3e_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety/use-napi-thread-safety","title":"使用Node-API接口进行线程安全开发","description":"场景介绍","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety/use-napi-thread-safety.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用Node-API接口进行线程安全开发","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-thread-safety","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行异步任务开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task/"},"next":{"title":"Native与ArkTS对象绑定","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-object-wrap/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety/use-napi-thread-safety.md


const frontMatter = {
	title: '使用Node-API接口进行线程安全开发',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-thread-safety',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行线程安全开发';

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
}, {
  "value": "子线程交互场景介绍",
  "id": "子线程交互场景介绍",
  "level": 2
}, {
  "value": "基于Worker实现的C++子线程与ArkTS子线程交互场景",
  "id": "基于worker实现的c子线程与arkts子线程交互场景",
  "level": 3
}, {
  "value": "基于Taskpool实现的C++子线程与ArkTS子线程交互场景",
  "id": "基于taskpool实现的c子线程与arkts子线程交互场景",
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
        id: "使用node-api接口进行线程安全开发",
        children: "使用Node-API接口进行线程安全开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi#napi_create_threadsafe_function",
        children: "napi_create_threadsafe_function"
      }), "是Node-API接口之一，用于创建一个线程安全的JavaScript函数。该函数主要用于在多个线程之间共享和调用，避免竞争条件和死锁。包含以下场景："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "异步计算：若需执行耗时的计算或IO操作，可创建线程安全的函数，在另一线程中完成计算或IO操作，避免阻塞主线程，提升程序响应速度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据共享：若多个线程需访问同一份数据，可以创建一个线程安全的函数，避免数据进行读写操作时发生竞争条件或死锁等问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多线程编程：若需要进行多线程编程，可以创建一个线程安全的函数，确保多个线程之间的通信和同步操作正确。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(MyApplication3)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n\nadd_library(entry1 SHARED thread_safety.cpp)\ntarget_link_libraries(entry1 PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义线程安全函数在Native入口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include <future>\n\nstatic constexpr int INT_ARG_2 = 2; // 入参索引\nstatic constexpr int INT_BUF_32 = 32; // 入参索引\n\nstruct CallbackData {\n    napi_threadsafe_function tsfn;\n    napi_async_work work;\n};\n\n// 在工作线程中调用ExecuteWork并执行线程安全函数\nstatic void ExecuteWork(napi_env env, void *data)\n{\n    CallbackData *callbackData = reinterpret_cast<CallbackData *>(data);\n    std::promise<std::string> promise;\n    auto future = promise.get_future();\n    napi_acquire_threadsafe_function(callbackData->tsfn);\n    napi_call_threadsafe_function(callbackData->tsfn, &promise, napi_tsfn_nonblocking);\n    napi_release_threadsafe_function(callbackData->tsfn, napi_tsfn_release);\n    try {\n        auto result = future.get();\n        OH_LOG_INFO(LOG_APP, \"XXX, Result from JS %{public}s\", result.c_str());\n    } catch (const std::exception &e) {\n        OH_LOG_INFO(LOG_APP, \"XXX, Result from JS %{public}s\", e.what());\n    }\n}\n\nstatic napi_value ResolvedCallback(napi_env env, napi_callback_info info)\n{\n    void *data = nullptr;\n    size_t argc = 1;\n    napi_value argv[1];\n    if (napi_get_cb_info(env, info, &argc, argv, nullptr, &data) != napi_ok) {\n        return nullptr;\n    }\n    size_t result = 0;\n    char buf[32] = {0};\n    napi_get_value_string_utf8(env, argv[0], buf, INT_BUF_32, &result);\n    reinterpret_cast<std::promise<std::string> *>(data)->set_value(std::string(buf));\n    return nullptr;\n}\n\nstatic napi_value RejectedCallback(napi_env env, napi_callback_info info)\n{\n    void *data = nullptr;\n    if (napi_get_cb_info(env, info, nullptr, nullptr, nullptr, &data) != napi_ok) {\n        return nullptr;\n    }\n    reinterpret_cast<std::promise<std::string> *>(data)->set_exception(\n        std::make_exception_ptr(std::runtime_error(\"Error in jsCallback\")));\n    return nullptr;\n}\n\nstatic void CallJs(napi_env env, napi_value jsCb, void *context, void *data)\n{\n    if (env == nullptr) {\n        return;\n    }\n    napi_value undefined = nullptr;\n    napi_value promise = nullptr;\n    napi_get_undefined(env, &undefined);\n    napi_call_function(env, undefined, jsCb, 0, nullptr, &promise);\n    napi_value thenFunc = nullptr;\n    if (napi_get_named_property(env, promise, \"then\", &thenFunc) != napi_ok) {\n        return;\n    }\n    napi_value resolvedCallback;\n    napi_value rejectedCallback;\n    napi_create_function(env, \"resolvedCallback\", NAPI_AUTO_LENGTH, ResolvedCallback, data, &resolvedCallback);\n    napi_create_function(env, \"rejectedCallback\", NAPI_AUTO_LENGTH, RejectedCallback, data, &rejectedCallback);\n    napi_value argv[2] = {resolvedCallback, rejectedCallback};\n    napi_call_function(env, promise, thenFunc, INT_ARG_2, argv, nullptr);\n}\n\n// 任务执行完成后，进行资源清理回收\nstatic void WorkComplete(napi_env env, napi_status status, void *data)\n{\n    CallbackData *callbackData = reinterpret_cast<CallbackData *>(data);\n    napi_release_threadsafe_function(callbackData->tsfn, napi_tsfn_release);\n    napi_delete_async_work(env, callbackData->work);\n    callbackData->tsfn = nullptr;\n    callbackData->work = nullptr;\n    delete callbackData;\n}\n\nstatic napi_value StartThread(napi_env env, napi_callback_info info)\n{\n    CallbackData *callbackData = new CallbackData();\n    size_t argc = 1;\n    napi_value jsCb = nullptr;\n    napi_get_cb_info(env, info, &argc, &jsCb, nullptr, nullptr);\n\n    // 创建一个线程安全函数\n    napi_value resourceName = nullptr;\n    napi_create_string_utf8(env, \"Thread-safe Function Demo\", NAPI_AUTO_LENGTH, &resourceName);\n    napi_create_threadsafe_function(env, jsCb, nullptr, resourceName, 0, 1, callbackData, nullptr, callbackData, CallJs,\n                                    &callbackData->tsfn);\n\n    // 创建一个异步任务\n    // ExecuteWork会执行在一个由libuv创建的非JS线程上\n    // 此处使用napi_create_async_work是为了模拟在非JS线程场景使用napi_call_threadsafe_function接口向JS线程提交任务\n    napi_create_async_work(env, nullptr, resourceName, ExecuteWork, WorkComplete, callbackData, &callbackData->work);\n\n    // 将异步任务加入到异步队列中\n    napi_queue_async_work(env, callbackData->work);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"startThread\", nullptr, StartThread, nullptr, nullptr, nullptr, napi_default, nullptr}\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry1\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧示例代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const startThread: (a: () => Promise<string>) => void;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入头文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import nativeModule from 'libentry1.so';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.ets\nlet callback = (): Promise<string> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve('string from promise');\n    }, 5000);\n  });\n}\nnativeModule.startThread(callback);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子线程交互场景介绍",
      children: "子线程交互场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_threadsafe_function在主线程和子线程使用并无差异，下面是子线程的使用示例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "基于worker实现的c子线程与arkts子线程交互场景",
      children: ["基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker"
      }), "实现的C++子线程与ArkTS子线程交互场景"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(MyApplication3)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n\nadd_library(entry1 SHARED thread_safety.cpp)\ntarget_link_libraries(entry1 PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Native入口定义线程安全函数并创建子线程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include <future>\n// ...\n\nstruct TsfnContext {\n    napi_ref callbackRef;\n};\n\nstruct ThreadData {\n    std::string inputStr;\n    napi_threadsafe_function tsfn;\n};\n\n// C++子线程\nvoid NativeThread(void* arg)\n{\n    auto* data = static_cast<ThreadData*>(arg);\n    OH_LOG_INFO(LOG_APP, \"[C++ SubThread] Received from Worker: %{public}s\\n\", data->inputStr.c_str());\n    std::string str = \"Hello from C++!\";\n    std::string msg = \"Echo of \" + str;\n    char* cstr = strdup(msg.c_str());\n    napi_call_threadsafe_function(data->tsfn, cstr, napi_tsfn_nonblocking);\n    napi_release_threadsafe_function(data->tsfn, napi_tsfn_release);\n    delete data;\n}\n\n// 在 JS 线程中实际执行的回调\nvoid CallJsCallback(napi_env env, napi_value jsCallback, void* context, void* data)\n{\n    if (data == nullptr) {\n        return;\n    }\n    char* message = static_cast<char*>(data);\n    napi_value jsStr;\n    napi_create_string_utf8(env, message, NAPI_AUTO_LENGTH, &jsStr);\n    napi_value global;\n    napi_get_global(env, &global);\n    napi_value result;\n    napi_call_function(env, global, jsCallback, 1, &jsStr, &result);\n    free(message);\n}\n\n// tsfn销毁时的清理回调\nvoid TsfnFinalizeCallback(napi_env env, void* finalizeData, void* finalizeHint)\n{\n    TsfnContext* ctx = static_cast<TsfnContext*>(finalizeData);\n    if (ctx && ctx->callbackRef) {\n        napi_delete_reference(env, ctx->callbackRef);\n        delete ctx;\n    }\n}\n\n// ArkTS 调用的入口函数\nnapi_value StartWithCallback(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2];\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    size_t length = 0;\n    napi_status status = napi_get_value_string_utf8(env, args[0], nullptr, 0, &length);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_get_value_string_utf8 failed\");\n        return nullptr;\n    }\n    char* inputStr = new char[length + 1];\n    std::fill(inputStr, inputStr + (length + 1), 0);\n    status = napi_get_value_string_utf8(env, args[0], inputStr, length + 1, &length);\n    if (status != napi_ok) {\n        if (inputStr) {\n            delete[] inputStr;\n        }\n        OH_LOG_ERROR(LOG_APP, \"napi_get_value_string_utf8 failed\");\n        return nullptr;\n    }\n    std::string inputString(inputStr, length);\n    delete[] inputStr;\n    TsfnContext* ctx = new TsfnContext();\n    napi_create_reference(env, args[1], 1, &ctx->callbackRef);\n    napi_value resourceName;\n    napi_create_string_utf8(env, \"TSFN_WorkerToCpp\", NAPI_AUTO_LENGTH, &resourceName);\n    napi_threadsafe_function tsfn;\n    napi_create_threadsafe_function(env, args[1], nullptr, resourceName,\n                                    0, 1, ctx, TsfnFinalizeCallback, nullptr, CallJsCallback, &tsfn);\n    auto* threadData = new ThreadData{std::move(inputString), tsfn};\n    std::thread nativethread(NativeThread, threadData);\n    nativethread.detach();\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"startWithCallback\", nullptr, StartWithCallback, nullptr, nullptr, nullptr, napi_default, nullptr}\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry1\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio支持一键生成Worker，在对应的{moduleName}目录下任意位置，点击鼠标右键 > New > Worker，即可自动生成Worker的模板文件及配置信息。本文以创建 \"Worker\" 为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"sourceOption\": {\n    \"workers\": [\n      \"./src/main/ets/workers/Worker.ets\"\n     ]\n  },\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Worker线程示例代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/workers/Worker.ets\n\nimport nativeModule from 'libentry1.so';\nimport { worker, MessageEvents } from '@kit.ArkTS';\n\nconst port = worker.workerPort;\n\nport.onmessage = (e: MessageEvents) => {\n  console.info('Worker thread received:' + e.data);\n  nativeModule.startWithCallback('Hello', (result: string) => {\n    console.info('[Worker] Got from native:', result);\n    port.postMessage(result);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口对应的.d.ts描述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const startWithCallback: (input: string, callback: (msg: string) => void) => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧调用接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import nativeModule from 'libentry1.so';\nimport { worker } from '@kit.ArkTS';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.ets\nconst wk = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\nwk.postMessage('Start');\nwk.onmessage = (msg) => {\n  console.info('[Main] Received:', msg.data);\n  wk.terminate();\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "运行结果：\nWorker thread received:Start\n[C++ SubThread] Received from Worker: Hello\n[Worker] Got from native: Echo of Hello from C++!\n[Main] Received: Echo of Hello from C++\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "基于taskpool实现的c子线程与arkts子线程交互场景",
      children: ["基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction",
        children: "Taskpool"
      }), "实现的C++子线程与ArkTS子线程交互场景"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "native侧实现代码以及模块注册与“基于Worker实现的C++子线程与ArkTS子线程交互场景”一致，可直接复用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧示例代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import nativeModule from 'libentry1.so';\nimport { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction nativeCall(input : string): void {\n  console.info('Taskpool thread received:%s', input);\n  nativeModule.startWithCallback('Hello', (result: string) => {\n    console.info('[Taskpool] Got from native:', result);\n  });\n}\n\nasync function testTaskpool() : Promise<void> {\n  try {\n    const task = new taskpool.Task(nativeCall, 'Start');\n    await taskpool.execute(task);\n  } catch (e) {\n    console.error(`Taskpool execute error: ${e}`);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.ets\ntestTaskpool();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "运行结果：\nTaskpool thread received:Start\n[C++ SubThread] Received from Worker: Hello\n[Taskpool] Got from native: Echo of Hello from C++!\n"
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