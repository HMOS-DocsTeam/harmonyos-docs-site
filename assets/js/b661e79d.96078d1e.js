"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["4512"], {
146013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_cleanuphook_use_napi_about_cleanuphook_md_b66_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-cleanuphook-use-napi-about-cleanuphook-md-b66.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_cleanuphook_use_napi_about_cleanuphook_md_b66_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-cleanuphook/use-napi-about-cleanuphook","title":"使用Node-API接口注册和使用环境清理钩子","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-cleanuphook/use-napi-about-cleanuphook.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-cleanuphook","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-cleanuphook/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-cleanuphook/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"使用Node-API接口注册和使用环境清理钩子","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-cleanuphook","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API进行class相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-class/"},"next":{"title":"使用Node-API接口进行Date相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-date/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-cleanuphook/use-napi-about-cleanuphook.md


const frontMatter = {
	title: '使用Node-API接口注册和使用环境清理钩子',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-cleanuphook',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口注册和使用环境清理钩子';

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
  "value": "场景和功能介绍",
  "id": "场景和功能介绍",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "napi_add_env_cleanup_hook",
  "id": "napi_add_env_cleanup_hook",
  "level": 3
}, {
  "value": "napi_remove_env_cleanup_hook",
  "id": "napi_remove_env_cleanup_hook",
  "level": 3
}, {
  "value": "napi_add_async_cleanup_hook",
  "id": "napi_add_async_cleanup_hook",
  "level": 3
}, {
  "value": "napi_remove_async_cleanup_hook",
  "id": "napi_remove_async_cleanup_hook",
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
        id: "使用node-api接口注册和使用环境清理钩子",
        children: "使用Node-API接口注册和使用环境清理钩子"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口在进程退出时处理未释放资源，在Node-API模块注册清理钩子，一旦当前环境退出，这些钩子就会运行，使所有资源都被正确释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API提供了注册和取消注册清理钩子函数的功能，以下是相关概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "资源管理"
          })
        }), "：在ArkTS中，通常需要管理一些系统资源，比如内存、文件句柄、网络连接等。这些资源必须在Node-API模块的生命周期中正确地创建、使用和释放，以避免资源泄漏和程序崩溃。资源管理通常包括初始化资源、在合适的时候清理资源，以及在清理资源时执行必要的操作，比如关闭文件或断开网络连接。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "钩子函数（Hook）"
          })
        }), "：钩子函数是一种在特定事件或时间点自动执行的回调函数。在Node-API模块的上下文中，清理钩子函数通常用于在环境或进程退出时执行资源清理任务。这是因为环境或进程退出时，操作系统可能不会立即回收所有资源，因此需要通过清理钩子函数来确保所有资源都被正确释放。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上这些基本概念是理解和使用Node-API接口注册环境清理钩子的基础，下面将介绍具体的接口和使用示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API接口用于注册和取消不同类型的清理钩子。他们的使用场景如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册一个环境清理钩子函数，该函数将在Node-API环境退出时被调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消之前注册的环境清理钩子函数，避免其在环境清理时执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_async_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册一个异步清理钩子函数，该函数将在Node-API进程退出时异步执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_async_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消之前注册的异步清理钩子函数，确保在不需要时不会执行相关的清理工作。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，本文仅对接口对应C++及ArkTS相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_add_env_cleanup_hook",
      children: "napi_add_env_cleanup_hook"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于注册一个环境清理钩子函数，该函数将在环境退出时执行。这是确保资源在环境销毁前得到清理的重要机制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意的是，napi_add_env_cleanup_hook接口并不支持对同一arg绑定多个回调。若出现env已销毁，但cleanup回调未被执行的情况，可以在启用ArkTS运行时", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check",
        children: "多线程检测"
      }), "功能的前提下，查看hilog流水日志AddCleanupHook Failed, data cannot register multiple times.来查找发生注册失败的调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_remove_env_cleanup_hook",
      children: "napi_remove_env_cleanup_hook"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于取消之前注册的环境清理钩子函数。在某些情况下，需要在插件卸载或资源被重新分配时取消钩子函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n#include <string>\n#include \"napi/native_api.h\"\n#include \"uv.h\"\n\n// 定义内存结构，包含指向数据的指针和数据的大小\ntypedef struct {\n    char *data;\n    size_t size;\n} Memory;\n\n// 外部缓冲区清理回调函数，用于释放分配的内存\nvoid ExternalFinalize(napi_env env, void *finalizeData, void *finalizeHint)\n{\n    Memory *wrapper = (Memory *)finalizeHint;\n    // ...\n    free(wrapper->data);\n    free(wrapper);\n    OH_LOG_INFO(LOG_APP, \"Node-API napi_add_env_cleanup_hook ExternalFinalize\");\n}\n\n// 在环境关闭时执行一些清理操作，如清理全局变量或其他需要在环境关闭时处理的资源\nstatic void Cleanup(void *arg)\n{\n    // 执行清理操作\n    OH_LOG_INFO(LOG_APP, \"Node-API napi_add_env_cleanup_hook cleanuped: %{public}d\", *(int *)(arg));\n}\n\n// 创建外部缓冲区并注册环境清理钩子函数\nstatic napi_value NapiEnvCleanUpHook(napi_env env, napi_callback_info info)\n{\n    // 分配内存并复制字符串数据到内存中\n    std::string str(\"Hello from Node-API!\");\n    Memory *wrapper = (Memory *)malloc(sizeof(Memory));\n    if (wrapper == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"malloc for wrapper failed\");\n        return nullptr;\n    }\n    wrapper->data = static_cast<char *>(malloc(str.size() + 1));\n    if (wrapper->data == nullptr) {\n        free(wrapper);\n        OH_LOG_ERROR(LOG_APP, \"malloc for wrapper->data failed\");\n        return nullptr;\n    }\n    std::copy_n(str.c_str(), str.size() + 1, wrapper->data);\n    wrapper->size = str.size();\n    // 创建外部缓冲区对象，并指定清理回调函数\n    // 注意：wrapper->data 的内存释放依赖于 ExternalFinalize 回调，只有 buffer 被正确持有并最终被 GC 回收时，ExternalFinalize 才会被调用，否则会导致内存泄漏。\n    napi_value buffer = nullptr;\n    napi_status status = napi_create_external_buffer(env, wrapper->size, (void *)wrapper->data,\n                                                     ExternalFinalize, wrapper, &buffer);\n    if (status != napi_ok) {\n        // 创建失败时需主动释放内存，避免泄漏\n        free(wrapper->data);\n        free(wrapper);\n        OH_LOG_ERROR(LOG_APP, \"napi_create_external_buffer failed.\");\n        return nullptr;\n    }\n    // 静态变量作为钩子函数参数\n    static int hookArg = 42;\n    static int hookParameter = 1;\n    // 注册环境清理钩子函数\n    status = napi_add_env_cleanup_hook(env, Cleanup, &hookArg);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"Test Node-API napi_add_env_cleanup_hook failed.\");\n        return nullptr;\n    }\n    // 注册环境清理钩子函数，此处不移除环境清理钩子，为了在ArkTS环境被销毁时，这个钩子函数被调用，用来模拟执行一些清理操作，例如释放资源、关闭文件等。\n    status = napi_add_env_cleanup_hook(env, Cleanup, &hookParameter);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"Test Node-API napi_add_env_cleanup_hook failed.\");\n        return nullptr;\n    }\n    // 立即移除环境清理钩子函数，确保不会在后续环境清理时被调用\n    // 不需要此钩子函数时可以将其移除。如果希望钩子在环境退出时执行，不需要移除。\n    napi_remove_env_cleanup_hook(env, Cleanup, &hookArg);\n    napi_remove_env_cleanup_hook(env, Cleanup, &hookParameter);\n    // 返回创建的外部缓冲区对象\n    return buffer;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiEnvCleanUpHook: () => Object | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let wk = new worker.ThreadWorker('entry/ets/workers/worker.ts');\n// 发送消息到worker线程\nwk.postMessage('test NapiEnvCleanUpHook');\n// 处理来自worker线程的消息\nwk.onmessage = (message) => {\n  hilog.info(0x0000, 'testTag', 'Test Node-API message from worker: %{public}s',\n    JSON.stringify(message));\n  wk.terminate();\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { worker } from '@kit.ArkTS';\nimport testNapi from 'libentry.so';\n\nlet parent = worker.workerPort;\n// 处理来自主线程的消息\nparent.onmessage = (message) => {\n  hilog.info(0x0000, 'testTag', 'Test Node-API message from main thread: %{public}s', JSON.stringify(message));\n  // 发送消息到主线程\n  parent.postMessage('Test Node-API worker:' + testNapi.napiEnvCleanUpHook());\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "worker相关开发配置和流程参考以下链接："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "使用Worker进行线程间通信"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_add_async_cleanup_hook",
      children: "napi_add_async_cleanup_hook"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个接口用于注册一个异步清理钩子函数，该函数将在环境退出时异步执行。与同步钩子不同，异步钩子允许在进程退出时进行更长时间的操作，而不会阻塞进程退出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_remove_async_cleanup_hook",
      children: "napi_remove_async_cleanup_hook"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个接口用于取消之前注册的异步清理钩子函数。与取消同步钩子类似，这通常是在不再需要钩子函数时进行的操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    napi_env env;\n    void *testData;\n    uv_async_s asyncUv;\n    napi_async_cleanup_hook_handle cleanupHandle;\n} AsyncContent;\n\n// 删除异步工作对象并注销钩子函数\nstatic void FinalizeWork(uv_handle_s *handle)\n{\n    AsyncContent *asyncData = reinterpret_cast<AsyncContent *>(handle->data);\n    // 不再需要异步清理钩子函数的情况下，尝试将其从环境中移除\n    napi_status result = napi_remove_async_cleanup_hook(asyncData->cleanupHandle);\n    if (result != napi_ok) {\n        napi_throw_error(asyncData->env, nullptr, \"Test Node-API napi_remove_async_cleanup_hook failed\");\n    }\n    // 释放AsyncContent\n    free(asyncData);\n}\n\n// 异步执行环境清理工作\nstatic void AsyncWork(uv_async_s *async)\n{\n    // 执行一些清理工作,比如释放动态分配的内存\n    AsyncContent *asyncData = reinterpret_cast<AsyncContent *>(async->data);\n    if (asyncData != nullptr && asyncData->testData != nullptr) {\n        free(asyncData->testData);\n        asyncData->testData = nullptr;\n    }\n    // 关闭libuv句柄，并触发FinalizeWork回调清理\n    uv_close((uv_handle_s *)async, FinalizeWork);\n}\n\n// 异步清理钩子函数，创建异步工作对象并执行\nstatic void AsyncCleanup(napi_async_cleanup_hook_handle handle, void *info)\n{\n    AsyncContent *data = reinterpret_cast<AsyncContent *>(info);\n    // 获取libUv循环实例并初始化一个异步句柄，以便后续执行异步工作\n    uv_loop_s *uvLoop;\n    napi_get_uv_event_loop(data->env, &uvLoop);\n    uv_async_init(uvLoop, &data->asyncUv, AsyncWork);\n\n    data->asyncUv.data = data;\n    data->cleanupHandle = handle;\n    // 发送异步信号触发AsyncWork函数执行清理工作\n    uv_async_send(&data->asyncUv);\n}\n\nstatic napi_value NapiAsyncCleanUpHook(napi_env env, napi_callback_info info)\n{\n    // 分配AsyncContent内存\n    AsyncContent *data = reinterpret_cast<AsyncContent *>(malloc(sizeof(AsyncContent)));\n    // ...\n    data->env = env;\n    data->cleanupHandle = nullptr;\n    // 分配内存并复制字符串数据\n    const char *testDataStr = \"TestNapiAsyncCleanUpHook\";\n    data->testData = strdup(testDataStr);\n    if (data->testData == nullptr) {\n        free(data);\n        napi_throw_error(env, nullptr, \"Test Node-API data->testData is nullptr\");\n        return nullptr;\n    }\n    // 添加异步清理钩子函数\n    napi_status status = napi_add_async_cleanup_hook(env, AsyncCleanup, data, &data->cleanupHandle);\n    if (status != napi_ok) {\n        free(data->testData);\n        free(data);\n        napi_throw_error(env, nullptr, \"Test Node-API napi_add_async_cleanup_hook failed\");\n        return nullptr;\n    }\n    napi_value result = nullptr;\n    napi_get_boolean(env, true, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于需要包含“uv.h”库，所以需要在CMakeLists文件中添加配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CMakeLists.txt\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libuv.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiAsyncCleanUpHook: () => boolean | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_add_async_cleanup_hook: %{public}s',\n    testNapi.napiAsyncCleanUpHook());\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_add_async_cleanup_hook error.message: %{public}s',\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上代码如果要在native cpp中打印日志，需在CMakeLists.txt文件中添加以下配置信息（并添加头文件：#include \"hilog/log.h\"）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CMakeLists.txt\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
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