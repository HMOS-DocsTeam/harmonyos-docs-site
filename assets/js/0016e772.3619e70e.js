"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["533950"], {
812029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_asynchronous_task_use_napi_asynchronous_task_md_001_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-asynchronous-task-use-napi-asynchronous-task-md-001.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_asynchronous_task_use_napi_asynchronous_task_md_001_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task/use-napi-asynchronous-task","title":"使用Node-API接口进行异步任务开发","description":"场景介绍","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task/use-napi-asynchronous-task.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用Node-API接口进行异步任务开发","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-asynchronous-task","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API进行自定义异步操作相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-custom-asynchronous-operations/"},"next":{"title":"使用Node-API接口进行线程安全开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task/use-napi-asynchronous-task.md


const frontMatter = {
	title: '使用Node-API接口进行异步任务开发',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-asynchronous-task',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行异步任务开发';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "使用Promise方式示例",
  "id": "使用promise方式示例",
  "level": 2
}, {
  "value": "使用callback方式示例",
  "id": "使用callback方式示例",
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
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "使用node-api接口进行异步任务开发",
        children: "使用Node-API接口进行异步任务开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi#napi_create_async_work",
        children: "napi_create_async_work"
      }), "是Node-API接口之一，用于创建一个异步工作对象。在需要执行耗时操作的场景中使用，避免阻塞env所在的ArkTS线程，确保应用程序的性能和响应速度。例如以下场景："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件操作：读取大型文件或执行复杂的文件操作时，可以使用异步工作对象来避免阻塞env所在的ArkTS线程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络请求：当需要进行网络请求并等待响应时，使用异步工作对象确保主线程不被阻塞，提高应用程序的响应性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据库操作：当需要执行复杂的数据库查询或写入操作时，使用异步工作对象确保主线程不被阻塞，提高应用程序的并发性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图像处理：当需要对大型图像进行处理或执行复杂的图像算法时，使用异步工作对象确保主线程不被阻塞，提高应用程序的实时性能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_queue_async_work接口使用uv_queue_work能力，并管理回调中napi_value的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步调用支持callback和Promise两种方式，选择哪种方式由开发者决定。以下是两种方式的示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(187251)/* ["default"] */.A) + "",
        width: "1070",
        height: "1082"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用promise方式示例",
      children: "使用Promise方式示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(873534)/* ["default"] */.A) + "",
        width: "1220",
        height: "806"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(NodeAPIAsynchronousTask)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so)\n\nadd_library(entry1 SHARED callback.cpp)\ntarget_link_libraries(entry1 PUBLIC libace_napi.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用napi_create_async_work创建异步任务，使用napi_queue_async_work将任务加入队列，等待执行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n// 调用方提供的data context，该数据会传递给execute和complete函数\nstruct CallbackData {\n    napi_async_work asyncWork = nullptr;\n    napi_deferred deferred = nullptr;\n    napi_ref callback = nullptr;\n    double args = 0;\n    double result = 0;\n};\n\n// ...\n\nstatic napi_value AsyncWork(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1];\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    napi_value promise = nullptr;\n    napi_deferred deferred = nullptr;\n    napi_create_promise(env, &deferred, &promise);\n\n    auto callbackData = new CallbackData();\n    callbackData->deferred = deferred;\n    napi_get_value_double(env, args[0], &callbackData->args);\n\n    napi_value resourceName = nullptr;\n    napi_create_string_utf8(env, \"AsyncCallback\", NAPI_AUTO_LENGTH, &resourceName);\n    // 创建异步任务\n    napi_create_async_work(env, nullptr, resourceName, ExecuteCB, CompleteCB, callbackData, &callbackData->asyncWork);\n    // 将异步任务加入队列\n    napi_queue_async_work(env, callbackData->asyncWork);\n\n    return promise;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义异步任务的第一个回调函数，该函数在工作线程中执行，处理具体的业务逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void ExecuteCB(napi_env env, void *data)\n{\n    CallbackData *callbackData = reinterpret_cast<CallbackData *>(data);\n    callbackData->result = callbackData->args;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义异步任务的第二个回调函数，该函数在主线程执行，将结果传递给ArkTS侧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void CompleteCB(napi_env env, napi_status status, void *data)\n{\n    CallbackData *callbackData = reinterpret_cast<CallbackData *>(data);\n    napi_value result = nullptr;\n    napi_create_double(env, callbackData->result, &result);\n    if (callbackData->result > 0) {\n        napi_resolve_deferred(env, callbackData->deferred, result);\n    } else {\n        napi_reject_deferred(env, callbackData->deferred, result);\n    }\n\n    napi_delete_async_work(env, callbackData->asyncWork);\n    delete callbackData;\n    callbackData = nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册及ArkTS侧调用接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 模块初始化\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"asyncWork\", nullptr, AsyncWork, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口对应的.d.ts描述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.d.ts\nexport const asyncWork: (data: number) => Promise<number>;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧调用接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "testNapi.asyncWork(1024).then((result: number) => {\n  hilog.info(0x0000, 'XXX', 'result is %{public}d', result);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "运行结果：result is 1024\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用callback方式示例",
      children: "使用callback方式示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(328739)/* ["default"] */.A) + "",
        width: "1220",
        height: "806"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用napi_create_async_work创建异步任务，并使用napi_queue_async_work将异步任务加入队列，等待执行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n\nstatic constexpr int INT_ARGS_2 = 2; // 入参索引\n\n// 调用方提供的data context，该数据会传递给execute和complete函数\nstruct CallbackData {\n    napi_async_work asyncWork = nullptr;\n    napi_ref callbackRef = nullptr;\n    double args[2] = {0};\n    double result = 0;\n};\n\n// ...\nnapi_value AsyncWork(napi_env env, napi_callback_info info)\n{\n    size_t argc = 3;\n    napi_value args[3];\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    auto asyncContext = new CallbackData();\n    // 将接收到的参数保存到callbackData\n    napi_get_value_double(env, args[0], &asyncContext->args[0]);\n    napi_get_value_double(env, args[1], &asyncContext->args[1]);\n    // 将传入的callback转换为napi_ref延长其生命周期，防止被GC掉\n    napi_create_reference(env, args[INT_ARGS_2], 1, &asyncContext->callbackRef);\n    napi_value resourceName = nullptr;\n    napi_create_string_utf8(env, \"asyncWorkCallback\", NAPI_AUTO_LENGTH, &resourceName);\n    // 创建异步任务\n    napi_create_async_work(env, nullptr, resourceName, ExecuteCB, CompleteCB,\n                           asyncContext, &asyncContext->asyncWork);\n    // 将异步任务加入队列\n    napi_queue_async_work(env, asyncContext->asyncWork);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义异步任务的第一个回调函数，该函数在工作线程中执行，处理具体的业务逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void ExecuteCB(napi_env env, void *data)\n{\n    CallbackData *callbackData = reinterpret_cast<CallbackData *>(data);\n    callbackData->result = callbackData->args[0] + callbackData->args[1];\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义异步任务的第二个回调函数，该函数在主线程执行，将结果传递给ArkTS侧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void CompleteCB(napi_env env, napi_status status, void *data)\n{\n    CallbackData *callbackData = reinterpret_cast<CallbackData *>(data);\n    napi_value callbackArg[1] = {nullptr};\n    napi_create_double(env, callbackData->result, &callbackArg[0]);\n    napi_value callback = nullptr;\n    napi_get_reference_value(env, callbackData->callbackRef, &callback);\n    // 执行回调函数\n    napi_value result;\n    napi_value undefined;\n    napi_get_undefined(env, &undefined);\n    napi_call_function(env, undefined, callback, 1, callbackArg, &result);\n    // 删除napi_ref对象以及异步任务\n    napi_delete_reference(env, callbackData->callbackRef);\n    napi_delete_async_work(env, callbackData->asyncWork);\n    delete callbackData;\n    callbackData = nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册以及ArkTS侧调用接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导出方法名与上面一致，可直接复用模块注册的代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 模块初始化\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"asyncWork\", nullptr, AsyncWork, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口对应的.d.ts描述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const asyncWork: (arg1: number, arg2: number, callback: (result: number) => void) => void;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧调用接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport nativeModule from 'libentry1.so';\n\nlet num1: number = 123;\nlet num2: number = 456;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nativeModule.asyncWork(num1, num2, (result: number) => {\n  hilog.info(0x0000, 'XXX', 'result is %{public}d', result);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "运行结果：result is 579\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子线程交互场景介绍",
      children: "子线程交互场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于napi_queue_async_work接口本身会创建一个C++子线程，因此native侧代码可以直接复用上面使用callback方式的代码，以下展示ArkTS侧使用上的差异。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "基于worker实现的c子线程与arkts子线程交互场景",
      children: ["基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker"
      }), "实现的C++子线程与ArkTS子线程交互场景"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevEco Studio支持一键生成Worker，在对应的{moduleName}目录下任意位置，点击鼠标右键 > New > Worker，即可自动生成Worker的模板文件及配置信息。本文以创建 \"Worker\" 为例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Worker配置。"
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
            children: "// entry/src/main/ets/workers/Worker.ets\n\nimport nativeModule from 'libentry1.so';\nimport { worker, MessageEvents } from '@kit.ArkTS';\n\nconst port = worker.workerPort;\n\nport.onmessage = (e : MessageEvents) => {\n    console.info('Worker thread received data:', e.data.num1 + '、' + e.data.num2);\n    nativeModule.asyncWork(e.data.num1, e.data.num2, (result: number) => {\n        port.postMessage(result);\n    });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS线程代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { worker } from '@kit.ArkTS';\nlet num1: number = 123;\nlet num2: number = 456;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const wk = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\nwk.postMessage({num1, num2});\nwk.onmessage = (msg) => {\n  console.info('result is:', msg.data);\n  wk.terminate();\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "运行结果：\nWorker thread received data: 123、456\nresult is 579\n"
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
          children: "ArkTS线程代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { taskpool } from '@kit.ArkTS';\nimport nativeModule from 'libentry1.so';\nlet num1: number = 123;\nlet num2: number = 456;\n\n@Concurrent\nfunction nativeCall(num1 : number, num2 : number): void {\n  console.info('Taskpool thread received data:', + num1 + '、' + num2);\n  nativeModule.asyncWork(num1, num2, (result: number) => {\n    hilog.info(0x0000, 'XXX', 'result is: %{public}d', result);\n  });\n}\n\nasync function testTaskpool() : Promise<void> {\n  try {\n    const task = new taskpool.Task(nativeCall, num1, num2);\n    await taskpool.execute(task);\n  } catch (e) {\n    console.error(`Taskpool execute error: ${e}`);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "testTaskpool();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "运行结果：\nTaskpool thread received data: 123、456\nresult is 579\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用napi_cancel_async_work接口，无论底层uv是否失败都会返回napi_ok。若因为底层uv导致取消任务失败，complete callback中的status会传入对应错误值，请在complete callback中对status进行处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NAPI的异步工作项（napi_async_work）建议单次使用。napi_queue_async_work后，该napi_async_work需在complete回调执行时或执行后，通过napi_delete_async_work完成释放。同一个napi_async_work只允许释放一次，重复释放会导致未定义行为。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_async_work的execute_cb运行在一个独立的工作线程中，该线程从uv线程池中取出。不同工作线程之间互不影响。execute_cb函数中的业务逻辑是在工作线程中执行的，而非原始的ArkTS线程，因此不能使用入参env构造napi_value(入参env是原始ArkTS线程的env)。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在任务的执行时序上，napi_async_work仅保证complete_cb在execute_cb之后执行。不同napi_async_work的execute_cb在各自的工作线程上运行，因此无法保证不同execute_cb的执行顺序。如果任务执行需要顺序，建议使用napi_threadsafe_function系列接口，这些接口是保序的。具体使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety",
          children: "链接"
        }), "。"]
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
328739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959372-d7a3fef524b6073cd8aac3f1e9cb20f3.png");

},
873534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439417-57c5cc8aa032e4aab638096d1a2dd35e.png");

},
187251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799722-18ef8f64c0f78701317f0941b02bc191.png");

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