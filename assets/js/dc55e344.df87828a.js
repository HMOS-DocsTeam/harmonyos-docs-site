"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["111855"], {
745429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_libuv_libuv_md_dc5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-libuv-libuv-md-dc5.json
var site_docs_ref_libuv_libuv_md_dc5_namespaceObject = JSON.parse('{"id":"libuv/libuv","title":"libuv","description":"简介","source":"@site/docs-ref/libuv/libuv.md","sourceDirName":"libuv","slug":"/libuv/libuv","permalink":"/harmonyos-docs-site/ref/libuv/libuv","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"libuv","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/libuv","kit":"标准库","last_updated":"2026-04-22","slug":"libuv"},"sidebar":"ref","previous":{"title":"Node-API","permalink":"/harmonyos-docs-site/ref/napi/napi"},"next":{"title":"OpenSL ES","permalink":"/harmonyos-docs-site/ref/opensles/opensles"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/libuv/libuv.md


const frontMatter = {
	title: 'libuv',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/libuv',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'libuv'
};
const contentTitle = 'libuv';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "支持的能力",
  "id": "支持的能力",
  "level": 2
}, {
  "value": "引入libuv能力",
  "id": "引入libuv能力",
  "level": 2
}, {
  "value": "接口列表",
  "id": "接口列表",
  "level": 2
}, {
  "value": "HarmonyOS引入libuv的背景",
  "id": "harmonyos引入libuv的背景",
  "level": 2
}, {
  "value": "演进方向",
  "id": "演进方向",
  "level": 3
}, {
  "value": "当前问题和解决方案",
  "id": "当前问题和解决方案",
  "level": 2
}, {
  "value": "场景一、在JS主线程抛异步任务到工作线程执行，在主线程中执行JS代码处理返回结果",
  "id": "场景一在js主线程抛异步任务到工作线程执行在主线程中执行js代码处理返回结果",
  "level": 3
}, {
  "value": "场景二、在Native侧向应用主循环抛fd事件，接口无法生效",
  "id": "场景二在native侧向应用主循环抛fd事件接口无法生效",
  "level": 3
}, {
  "value": "libuv使用指导",
  "id": "libuv使用指导",
  "level": 2
}, {
  "value": "libuv接口与Node-API接口对应关系",
  "id": "libuv接口与node-api接口对应关系",
  "level": 3
}, {
  "value": "接口汇总说明",
  "id": "接口汇总说明",
  "level": 3
}, {
  "value": "libuv单线程约束",
  "id": "libuv单线程约束",
  "level": 3
}, {
  "value": "线程安全函数",
  "id": "线程安全函数",
  "level": 3
}, {
  "value": "libuv中的事件循环",
  "id": "libuv中的事件循环",
  "level": 3
}, {
  "value": "libuv中的handles和requests",
  "id": "libuv中的handles和requests",
  "level": 3
}, {
  "value": "libuv timer使用规范",
  "id": "libuv-timer使用规范",
  "level": 3
}, {
  "value": "线程间通信",
  "id": "线程间通信",
  "level": 3
}, {
  "value": "线程池",
  "id": "线程池",
  "level": 3
}, {
  "value": "OpenHarmony中libuv的使用现状",
  "id": "openharmony中libuv的使用现状",
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
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "libuv",
        children: "libuv"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://libuv.org/",
        children: "libuv"
      }), "是一个跨平台库，基于事件驱动来实现异步I/O，适用于网络编程和文件系统操作。它是Node.js的核心库之一，也被其他语言的开发者广泛使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的能力",
      children: "支持的能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://libuv.org/",
        children: "libuv"
      }), "实现了跨平台的基于事件驱动的异步I/O。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持标准库接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入libuv能力",
      children: "引入libuv能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要使用libuv相关功能，首先请添加头文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <uv.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其次在CMakeLists.txt中添加以下动态链接库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libuv.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口列表",
      children: "接口列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://docs.libuv.org/en/v1.x/api.html",
        children: "libuv支持的API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "harmonyos引入libuv的背景",
      children: "HarmonyOS引入libuv的背景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS的早期版本中，为了兼容Node.js的生态，将Node.js的Node-API引入到系统中，方便Node.js开发者快速接入HarmonyOS，扩展自己的JS接口。同时引入了Node.js的事件循环实现库——libuv。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "演进方向",
      children: "演进方向"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着HarmonyOS的逐步完善，我们计划在未来的版本中，逐步将应用模型中的事件循环归一，并增强HarmonyOS自身的事件循环，以解决许多双loop机制下的调度问题，并为开发者提供更加完善的任务优先级、插队等与任务主循环交互的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者应尽可能避免在napi_get_uv_event_loop接口获取的应用主loop上使用libuv的ndk进行操作，因为这可能会带来各种问题，并给未来的兼容性变更带来大量的工作量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者希望跟主线程事件循环交互，比如插入任务等，应当使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces",
        children: "Node-API提供的接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS还将长期通过Node-API来为开发者提供和主线程交互及扩展JS接口的能力，但会屏蔽实现层使用的事件循环。Node-API的主要功能接口将会长期维护，并保证与Node.js的原生行为一致，来保证熟悉Node.js的扩展机制的开发者方便地将自己的已有代码接入到HarmonyOS中来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者对libuv非常熟悉，并自信能够处理好所有的内存管理和多线程问题，那么仍可以像使用原生libuv一样，自己启动线程，并在上面使用libuv完成自己的业务。在没有特殊版本要求的情况下，开发者不需要额外引入libuv库到自己的应用工程中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "当前问题和解决方案",
      children: "当前问题和解决方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据现有机制，一个线程上只能存在一个事件循环，为了适配系统应用的主事件循环，在主线程上的JS环境中，uvloop中的事件处理是由主事件循环监听其fd，触发一次uv_run来驱动的。因此部分依赖uvloop事件循环的功能无法生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上述，比较常用的场景和解决方案有："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景一在js主线程抛异步任务到工作线程执行在主线程中执行js代码处理返回结果",
      children: "场景一、在JS主线程抛异步任务到工作线程执行，在主线程中执行JS代码处理返回结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Native侧直接通过调用napi_get_uv_event_loop接口获取系统loop，调用libuv NDK接口实现相关功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button(\"test\")\n          .width('40%')\n          .fontSize('14fp')\n          .onClick(() => {\n              testNapi.test();\n        }).margin(20)\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native侧:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"uv.h\"\n#define LOG_DOMAIN 0X0202\n#define LOG_TAG \"MyTag\"\n#include <hilog/log.h>\n\nstatic void execute(uv_work_t* work)\n{\n    OH_LOG_INFO(LOG_APP, \"ohos in execute\");\n}\n\nstatic void complete(uv_work_t* work, int status)\n{\n    OH_LOG_INFO(LOG_APP, \"ohos in complete\");\n    delete work;\n}\nstatic napi_value Test(napi_env env, napi_callback_info info)\n{\n    uv_loop_s* loop = nullptr;\n    /* 获取应用JS主线程的uv_loop */\n    napi_get_uv_event_loop(env, &loop);\n    uv_work_t* work = new uv_work_t;\n    int ret = uv_queue_work(loop, work, execute, complete);\n    if (ret != 0) {\n        OH_LOG_INFO(LOG_APP, \"delete work\");\n        delete work;\n    }\n    return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {{\"test\", nullptr, Test, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n    \nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在index.d.ts文件中添加如下代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const test:() => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMakeLists.txt中添加以下动态链接库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libhilog_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过napi_create_async_work、napi_queue_async_work搭配使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button(\"test\")\n          .width('40%')\n          .fontSize('14fp')\n          .onClick(() => {\n              testNapi.test();\n        }).margin(20)\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native侧:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"uv.h\"\n#define LOG_DOMAIN 0X0202\n#define LOG_TAG \"MyTag\"\n#include <hilog/log.h>\nuv_loop_t* loop = nullptr;\nnapi_value jsCb;\nint fd = -1;\n\nstatic napi_value Test(napi_env env, napi_callback_info info)\n{\n    napi_value work_name;\n    napi_async_work work;\n    napi_create_string_utf8(env, \"ohos\", NAPI_AUTO_LENGTH, &work_name);\n    /* 第四个参数是异步线程的work任务，第五个参数为主线程的回调 */\n    napi_create_async_work(\n        env, nullptr, work_name, [](napi_env env, void* data){OH_LOG_INFO(LOG_APP, \"ohos in execute\"); },\n        [](napi_env env, napi_status status, void* data){\n            /* 不关心具体实现 */\n            OH_LOG_INFO(LOG_APP, \"ohos in complete\");\n            napi_delete_async_work(env, (napi_async_work)data);\n        },\n        nullptr, &work);\n    /* 通过napi_queue_async_work触发异步任务执行 */\n    napi_queue_async_work(env, work);\n    return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {{\"test\", nullptr, Test, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n    \nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在index.d.ts文件中添加如下代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const test:() => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMakeLists.txt中添加以下动态链接库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libhilog_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景二在native侧向应用主循环抛fd事件接口无法生效",
      children: "场景二、在Native侧向应用主循环抛fd事件，接口无法生效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于应用主循环仅仅接收fd事件，在监听了uvloop中的backend_fd后，只有该fd事件被触发才会执行一次uv_run。这就意味着，在应用主循环中调用uv接口，如果不触发一次fd事件，uv_run将永远不会被执行，最后导致libuv的接口正常调用时不生效（仅当应用中没有触发uvloop中的fd事件时）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们以uv_poll_start接口举例，来说明在HarmonyOS中，我们像使用原生libuv一样调用uv_poll_start接口时无法生效的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button(\"testClose\")\n          .width('40%')\n          .fontSize('14fp')\n          .onClick(() => {\n              testNapi.testClose();\n        }).margin(20)\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native侧:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"uv.h\"\n#define LOG_DOMAIN 0X0202\n#define LOG_TAG \"MyTag\"\n#include <hilog/log.h>\n#include <thread>\n#include <sys/eventfd.h>\n\nuv_loop_t* loop = nullptr;\nnapi_value jsCb;\nint fd = -1;\n\nvoid poll_handler(uv_poll_t* handle,int status, int events)\n{\n    OH_LOG_INFO(LOG_APP, \"ohos poll print\");\n}\n\nstatic napi_value TestClose(napi_env env, napi_callback_info info)\n{\n    std::thread::id this_id = std::this_thread::get_id();\n    OH_LOG_INFO(LOG_APP, \"ohos thread id : %{public}ld\", this_id);\n    size_t argc = 1;\n    napi_value workBname;\n    \n    napi_create_string_utf8(env, \"test\", NAPI_AUTO_LENGTH, &workBname);\n    \n    napi_get_cb_info(env, info, &argc, &jsCb, nullptr, nullptr);\n    // 获取事件循环\n    napi_get_uv_event_loop(env, &loop);\n    // 创建一个eventfd\n    fd = eventfd(0, 0);\n    OH_LOG_INFO(LOG_APP, \"fd is %{public}d\",fd);\n    uv_poll_t* poll_handle = new uv_poll_t;\n    // 初始化一个poll句柄，并将其与eventfd关联\n    uv_poll_init(loop, poll_handle, fd);\n    // 开始监听poll事件\n    uv_poll_start(poll_handle, UV_READABLE, poll_handler);\n    // 创建一个新线程，向eventfd写入数据\n    std::thread mythread([](){\n        for (int i = 0; i < 8; i++){\n            int value = 10;\n            int ret = eventfd_write(fd, value);\n            if (ret == -1){\n                OH_LOG_INFO(LOG_APP, \"write failed!\");\n                continue;\n            }\n        }\n    });\n    mythread.detach();\n    return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {{\"testClose\", nullptr, TestClose, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n    \nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在index.d.ts添加如下代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const testClose:() => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMakeLists.txt中添加以下动态链接库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libhilog_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述代码中，流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首先通过napi_get_uv_event_loop接口获取到应用主线程的uvloop。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "然后创建一个eventfd。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化uv_poll_t，并启动该句柄使其生效，在eventfd可读时触发回调函数poll_handler。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "新开一个线程，向eventfd里写入字符。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["执行上述代码，poll_handler并不能正常打印。这是由于应用主线程是靠fd驱动来执行uv_run的，而非以UV_RUN_DEFAULT模式来进行循环。尽管uvloop中的backend_fd已经被event_handler监听，但是当执行uv_poll_start的时候，fd并未通过epoll_ctl加入到backend_fd中被其监听，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "而是在下一次uv_run中的uv__io_poll这个函数才会执行epoll_ctl函数。因此，如果应用进程中没有其他触发backend_fd事件的时候，libuv接口的正常使用可能不会达到开发者的预期。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "临时方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当下的系统版本中，我们并不推荐开发者直接通过napi_get_uv_event_loop获取应用主线程的uvloop进行业务逻辑的开发。如果当前Node-API的接口无法满足开发者的开发需求，确有必要使用libuv来实现业务功能，为了使libuv接口在主线程上生效，开发者可以在调用类似uv_xxx_start后，执行一次uv_async_send的方式来主动触发应用主线程执行一次uv_run。这样可以保证该接口生效并正常执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对上述无法生效的代码示例，可以修改如下使其生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button(\"testClose\")\n          .width('40%')\n          .fontSize('14fp')\n          .onClick(() => {\n              testNapi.testClose();\n        }).margin(20)\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native侧:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"uv.h\"\n#define LOG_DOMAIN 0x0202\n#define LOG_TAG \"MyTag\"\n#include <hilog/log.h>\n#include <thread>\n#include <sys/eventfd.h>\n\nuv_loop_t* loop = nullptr;\nnapi_value jsCb;\nint fd = -1;\n\nvoid poll_handler(uv_poll_t* handle,int status, int events)\n{\n    OH_LOG_INFO(LOG_APP, \"ohos poll print\");\n}\n\nstatic napi_value TestClose(napi_env env, napi_callback_info info)\n{\n    std::thread::id this_id = std::this_thread::get_id();\n    OH_LOG_INFO(LOG_APP, \"ohos thread id : %{public}ld\", this_id);\n    size_t argc = 1;\n    napi_value workBName;\n    \n    napi_create_string_utf8(env, \"test\", NAPI_AUTO_LENGTH, &workBName);\n    \n    napi_get_cb_info(env, info, &argc, &jsCb, nullptr, nullptr);\n\n    napi_get_uv_event_loop(env, &loop);\n\n    fd = eventfd(0, 0);\n    OH_LOG_INFO(LOG_APP, \"fd is %{public}d\",fd);\n    uv_poll_t* poll_handle = new uv_poll_t;\n    uv_poll_init(loop, poll_handle, fd);\n    uv_poll_start(poll_handle, UV_READABLE, poll_handler);\n\n    // 主动触发一次fd事件，让主线程执行一次uv_run\n    uv_async_send(&loop->wq_async);\n    \n    std::thread mythread([](){\n        for (int i = 0; i < 8; i++){\n            int value = 10;\n            int ret = eventfd_write(fd, value);\n            if (ret == -1){\n                OH_LOG_INFO(LOG_APP, \"write failed!\");\n                continue;\n            }\n        }\n    });\n    mythread.detach();\n    return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {{\"testClose\", nullptr, TestClose, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n    \nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在index.d.ts添加如下代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const testClose:() => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMakeLists.txt中添加以下动态链接库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libhilog_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "libuv使用指导",
      children: "libuv使用指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "重要：libuv NDK中所有依赖uv_run的接口在当前系统的应用主循环中无法及时生效，并且可能会导致卡顿掉帧的现象。因此不建议直接在JS主线程上使用libuv NDK接口，对于异步任务执行及与使用线程安全函数与主线程通信，开发者可以直接调用Node-API接口来实现相关功能。"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "libuv接口与node-api接口对应关系",
      children: "libuv接口与Node-API接口对应关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前HarmonyOS提供了一些Node-API接口，可以替换libuv接口的使用。主要包括异步任务相关接口，线程安全的函数调用接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 异步任务接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者需要执行一个比较耗时的操作但又不希望阻塞主线程执行时，libuv提供了底层接口uv_queue_work帮助开发者在异步线程中执行耗时操作，然后将结果回调到主线程上进行处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Node-API中，通常可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task",
        children: "napi_async_work"
      }), "相关函数来实现异步开发的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相关函数为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @brief 创建一个新的异步工作\n *\n * @param env 指向当前环境的指针\n * @param async_resource 可选的资源对象，用于跟踪异步操作\n * @param async_resource_name 可选的字符串，用于描述异步资源\n * @param execute 一个回调函数，它将在一个新的线程中执行异步操作\n * @param complete 一个回调函数，它将在异步操作完成后被调用\n * @param data 用户定义的数据，它将被传递给execute和complete回调函数\n * @param result 指向新创建的异步工作的指针\n */\nnapi_status napi_create_async_work(napi_env env,\n                                  napi_value async_resource,\n                                  napi_value async_resource_name,\n                                  napi_async_execute_callback execute,\n                                  napi_async_complete_callback complete,\n                                  void* data,\n                                  napi_async_work* result);\n\n/**\n * @brief 将异步工作添加到队列中\n *\n * @param env 指向当前环境的指针\n * @param work 指向异步工作的指针\n */\nnapi_status napi_queue_async_work(napi_env env, napi_async_work work);\n\n/**\n * @brief 删除异步工作\n *\n * @param env 指向当前环境的指针\n * @param work 指向异步工作的指针\n */\nnapi_status napi_delete_async_work(napi_env env, napi_async_work work);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 跨线程共享和调用的线程安全函数"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者想在任意子线程传递某个回调函数到应用主线程上执行时，libuv的实现方式一般使用uv_async_t句柄用于线程间通信。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相关函数包含："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_async_init()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_async_send()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API与之对应的接口为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety",
        children: "napi_threadsafe_function"
      }), "相关函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相关函数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @brief 用于创建一个线程安全的函数，该函数可以在多个线程中调用，而不需要担心数据竞争或其他线程安全问题\n *\n * @param env 指向NAPI环境的指针，用于创建和操作Javascript值\n * @param func 指向JavaScript函数的指针\n * @param async_resource 异步资源，通常是一个表示异步操作的对象\n * @param async_resource_name 指向资源名称的指针，这个名称将用于日志和调试\n * @param max_queue_size 一个整数，表示队列的最大大小，当队列满时，新的调用将被丢弃\n * @param initial_thread_count 无符号整数，表示在创建线程安全函数时，初始的线程数量\n * @param thread_finalize_data 一个指向在所有线程之前需要清理的数据\n * @param napi_finalize thread_finalize_cb 回调函数，当所有线程完成时被调用，用于清理资源\n * @param context 指向上下文的指针，这个上下文将被传递给call_js_func函数\n * @param call_js_cb 指向回调函数的指针，这个函数将在Javascript函数被调用时被调用\n * @param result 指向napi_threadsafe_function结构的指针，这个结构将被填充为新创建的线程安全函数\n */\nnapi_status napi_create_threadsafe_function(napi_env env,\n                                            napi_value func,\n                                            napi_value async_resource,\n                                            napi_value async_resource_name,\n                                            size_t max_queue_size,\n                                            size_t initial_thread_count,\n                                            void* thread_finalize_data,\n                                            napi_finalize thread_finalize_cb,\n                                            void* context,\n                                            napi_threadsafe_function_call_js call_js_cb,\n                                            napi_threadsafe_function* result);\n\n/**\n * @brief 获取一个线程安全的函数\n *\n * @param function 指向线程安全函数的指针\n */\nnapi_status napi_acquire_threadsafe_function(napi_threadsafe_function function);\n\n/**\n * @brief 调用一个线程安全的函数\n * @param function 指向线程安全函数的指针\n * @param data 用户数据\n * @param is_blocking 枚举值，它决定调用JavaScript函数是阻塞的还是非阻塞的\n */\nnapi_status napi_call_threadsafe_function(napi_threadsafe_function function,\n                                          void* data,\n                                          napi_threadsafe_function_call_mode is_blocking);\n/**\n * @brief 释放一个线程安全的函数\n *\n * @param function 指向线程安全函数的指针\n * @param is_blocking 枚举值，它决定调用JavaScript函数是阻塞的还是非阻塞的\n */\nnapi_status napi_release_threadsafe_function(napi_threadsafe_function function,\n                                             napi_threadsafe_function_call_mode is_blocking);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除此之外，如果开发者需要libuv其他原生接口来实现业务功能，为了让开发者正确使用libuv提供的接口能力，避免因为错误使用而陷入到问题当中。在后续章节，我们将逐步介绍libuv的一些基本概念和HarmonyOS系统中常用函数的正确使用方法，它仅仅可以保证开发者使用libuv接口的时候不会出现应用进程崩溃等现象。另外，我们还统计了在当前应用主线程上可以正常使用的接口，以及无法在应用主线程上使用的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口汇总说明",
      children: "接口汇总说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口汇总"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF",
              children: "loop概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_loop_init"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF",
              children: "loop概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_loop_close"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF",
              children: "loop概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_default_loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF",
              children: "loop概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_run"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF",
              children: "loop概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_loop_alive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF",
              children: "loop概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_stop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
              children: "Handle概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_poll_*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
              children: "Handle概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_timer_*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
              children: "Handle概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_async_*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
              children: "Handle概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_signal_*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
              children: "Handle概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_fs_*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
              children: "Request概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
              children: "Request概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_getaddrinfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
              children: "Request概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_getnameinfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
              children: "Request概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_queue_work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BA%BF%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1",
              children: "线程间通信原理及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_async_init"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BA%BF%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1",
              children: "线程间通信原理及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_async_send"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BA%BF%E7%A8%8B%E6%B1%A0",
              children: "线程池概念及相关接口"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_queue_work"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "libuv单线程约束",
      children: "libuv单线程约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在HarmonyOS中使用libuv时，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "务必注意：使用uv_loop_init接口初始化loop的线程和调用uv_run的线程应保持一致，称为loop线程，并且对uvloop的所有非线程安全操作，均需保证与loop同线程，否则将会有发生crash的风险"
        })
      }), "。HarmonyOS对libuv的使用有更严格的约束，对于非线程安全的函数，libuv将实现多线程检测机制，检测到多线程问题后输出警告日志。为了确保检测机制的准确性，协助开发者规避uv接口的不规范使用，我们建议在创建事件循环与执行uv_run始终保持在同一线程。根据loop来源的不同，可分为两种情况，即开发者创建loop和从env获取loop。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 开发者创建loop"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过调用uv_loop_new创建loop或者uv_loop_init接口初始化loop，loop的生命周期由开发者自行维护。在这种情况下，如前文所述，需要保证uv_run执行在与创建/初始化loop操作相同的线程上，即loop线程上。此外，其余非线程安全操作，如timer相关操作等，均需要在loop线程上进行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果因为业务需要，必须在其他线程往loop线程抛任务，请使用uv_async_send函数：即在async句柄初始化时，注册一个回调函数，并在该回调中实现相应的操作，当调用uv_async_send时，在主线程上执行该回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button(\"TestTimerAsync\")\n          .width('40%')\n          .fontSize('14fp')\n          .onClick(() => {\n              testNapi.testTimerAsync();  // 初始化async句柄\n        }).margin(20)\n          \n          Button(\"TestTimerAsyncSend\")\n          .width('40%')\n          .fontSize('14fp')\n          .onClick(() => {\n              testNapi.testTimerAsyncSend();  // 子线程调用uv_async_send提交定时器任务\n        }).margin(20)\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native侧："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <napi/native_api.h>\n#include <uv.h>\n#define LOG_DOMAIN 0x0202\n#define LOG_TAG \"MyTag\"\n#include \"hilog/log.h\"\n#include <thread>\n\nuv_async_t* async = new uv_async_t;\nbool cond1 = false;\nbool cond2 = false;\n\n// 使用技巧：在使用loop时, 需要特别注意uv_stop函数的使用, 开发者需要确保uv_stop前\n// 通知与loop相关的所有线程的handle都关闭, 参考stop_loop函数的实现\nint stop_loop(uv_loop_t* loop)\n{\n    uv_stop(loop);\n    auto const ensure_close = [](uv_handle_t* handle, void*) {\n        if (uv_is_closing(handle)) {\n            return;\n        } else {\n            uv_close(handle, nullptr);\n        }\n    };\n    // 遍历所有句柄, 如果handle处于活跃状态, 调用ensure_close\n    uv_walk(loop, ensure_close, nullptr);\n    // 继续运行uv_run, 直到loop中不存在活跃的句柄和请求为止\n    while(true) {\n        if (uv_run(loop, UV_RUN_DEFAULT) == 0) {\n            break;\n        }\n    }\n\n    // 最后检查loop状态\n    if (uv_loop_alive(loop) != 0) {\n        return -1;\n    }\n    return 0;\n}\n\n// 执行创建定时器操作\nvoid async_cb(uv_async_t* handle) {\n    auto loop = handle->loop;\n    uv_timer_t* timer = new uv_timer_t;\n    uv_timer_init(loop, timer);\n\n    // 在适当的时机关闭async句柄\n    if (cond2) {\n        uv_close((uv_handle_t*)handle, [](uv_handle_t* handle){\n            delete (uv_async_t*)handle;\n        });\n        return;\n    }\n\n    uv_timer_start(timer,\n        [](uv_timer_t* timer){\n            // do something\n            // 在适当的时机停掉timer\n            if (cond1) {\n                uv_timer_stop(timer);\n                uv_close((uv_handle_t*)timer, [](uv_handle_t* handle){\n                    delete(uv_timer_t*)handle;\n                });\n            }\n        },\n        100, 100);\n}\n\n// 初始化async句柄, 绑定对应的回调函数\nstatic napi_value TestTimerAsync(napi_env env, napi_callback_info info) {\n    std::thread t([](){  // A线程，loop线程\n        uv_loop_t* loop = new uv_loop_t;\n        // 开发者自己创建loop, 请注意维护loop的生命周期\n        uv_loop_init(loop);\n        // 初始化一个async句柄, 注册回调函数\n        uv_async_init(loop, async, async_cb);\n        // 让loop开始运行\n        uv_run(loop, UV_RUN_DEFAULT);\n        // 清理所有的handle\n        stop_loop(loop);\n        // 释放loop\n        uv_loop_close(loop);\n        delete loop;\n    });\n    t.detach();\n    return 0;\n}\n\n// 在另一个线程上调用uv_async_send函数\nstatic napi_value TestTimerAsyncSend(napi_env env, napi_callback_info info)\n{\n    std::thread t1([](){ // B线程\n        uv_async_send(async);  // 调用uv_async_send, 通知loop线程调用与async句柄绑定的timer_cb\n        uv_sleep(500);\n        // 修改cond1, 关闭timer handle\n        cond1 = true;\n    });\n\n    std::thread t2([](){ // B线程\n        uv_sleep(1000);\n        // 修改cond2, 关闭async handle\n        cond2 = true;\n        uv_async_send(async);\n    });\n\n    t1.detach();\n    t2.detach();\n    return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"testTimerAsync\", nullptr, TestTimerAsync, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"testTimerAsyncSend\", nullptr, TestTimerAsyncSend, nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n    \nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在index.d.ts添加如下代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const testTimerAsync:() => number;\nexport const testTimerAsyncSend:() => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 从env获取loop"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用napi_get_uv_event_loop接口从env获取到的loop一般是系统创建的JS主线程的事件循环，因此应当避免在子线程中调用非线程安全函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如因业务需要，必须在非loop线程上调用非线程安全函数，请使用线程安全函数uv_async_send将任务提交到loop线程。即定义一个uv_async_t*类型的句柄，初始化该句柄的时候，将需要在子线程调用的非线程安全函数在对应的async_cb中调用，然后在非loop线程上调用uv_async_send函数，并回到loop线程上执行async_cb。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#libuv%E4%B8%AD%E7%9A%84handles%E5%92%8Crequests",
        children: "libuv中的handles和requests"
      }), "章节关于", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确使用timer示例"
        })
      }), "的场景二内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线程安全函数",
      children: "线程安全函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在libuv中，由于涉及到大量的异步任务，稍有不慎就会陷入到多线程问题中。在这里，我们对libuv中常用的线程安全函数和非线程安全函数做了汇总。若开发者在多线程编程中调用了非线程安全的函数，势必要对其进行加锁保护或者保证代码的正确运行时序，否则将陷入到crash问题中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线程安全函数："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_async_send()：向异步句柄发送信号，可以在任何线程中调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_thread_create()：创建一个新线程并执行指定的函数，可以在任何线程中调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "锁相关的操作，如uv_mutex_lock()、uv_mutex_unlock()等等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "提示：所有形如uv_xxx_init的函数，即使它是以线程安全的方式实现的，但使用时要注意，避免多个线程同时调用uv_xxx_init，否则它依旧会引起多线程资源竞争的问题。最好的方式是在事件循环线程中调用该函数。"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注：uv_async_send函数被调用后，回调函数是被异步触发的。如果调用了多次uv_async_send，libuv只保证至少有一次回调会被执行。这就可能导致一旦对同一句柄触发了多次uv_async_send，libuv对回调的处理可能会违背开发者的预期。多次对同一个async句柄进行send操作，还会导致任意两次相同句柄send操作之间提交的的其他async_cb任务丢失。"
        })
      }), " 而在Native侧，可以保证回调的执行次数和开发者调用napi_call_threadsafe_function的次数保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非线程安全函数："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_os_unsetenv()：删除环境变量"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_os_setenv()：设置环境变量"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_os_getenv()：获取环境变量"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_os_environ()：检索所有的环境变量"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_os_tmpdir()：获取临时目录"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_os_homedir()：获取家目录"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "libuv中的事件循环",
      children: "libuv中的事件循环"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件循环是libuv中最核心的一个概念，loop负责管理整个事件循环的所有资源，它贯穿于整个事件循环的生命周期。通常将uv_run所在的线程称为该事件循环的主线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 事件循环运行的三种方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UV_RUN_DEFAULT：默认轮询方式，该模式将会一直运行下去，直到loop中没有活跃的句柄和请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UV_RUN_ONCE：一次轮询模式，如果pending_queue中有回调函数，则执行，然后跳过uv__io_poll函数。此模式默认认为loop中一定有事件发生。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UV_RUN_NOWAIT：非阻塞模式，该模式下不会执行pending_queue，而是直接执行一次I/O轮询（uv__io_poll）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 常用接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int uv_loop_init(uv_loop_t* loop);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对loop进行初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int uv_loop_close(uv_loop_t* loop);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭loop，该函数只有在loop中所有的句柄和请求都关闭后才能成功返回，否则将返回UV_EBUSY。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int uv_loop_delete(uv_loop_t* loop);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放loop，该接口会先调用uv_loop_close，然后再将loop释放掉。在HarmonyOS平台上，由于assert函数不生效，因此不论uv_loop_close函数是否成功清理loop上的资源，都会将loop释放掉。开发者使用该接口时，请务必确保在loop线程退出时，loop上的资源可以被正确释放，即挂在loop上的handle和request均被关闭，否则会导致资源泄漏。", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发者使用该接口时务必格外谨慎，建议非必要不使用。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uv_loop_t* uv_default_loop(void);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该函数创建一个进程级的loop。在HarmonyOS中，由于目前的应用主循环及其他JS工作线程还存在着libuv的loop。因此我们不建议开发者使用该函数来创建loop并实现业务功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int uv_run(uv_loop_t* loop, uv_run_mode mode);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动事件循环。运行模式可查看事件循环运行的三种方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int uv_loop_alive(uv_loop_t loop);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断loop是否处于活跃状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void uv_stop(uv_loop_t* loop);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该函数用来停止一个事件循环，在loop的下一次迭代中才会停止。如果该函数发生在I/O操作之前，将不会阻塞而是直接跳过uv__io_poll。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "libuv中的handles和requests",
      children: "libuv中的handles和requests"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "handle表示一个持久性的对象，通常挂载到loop中对应的handle_queue队列上。如果handle处于活跃状态，每次uv_run都会处理handle中的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "request表示一个短暂性的请求，一个request只触发一次回调操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面是HarmonyOS系统中最常用的几个Handles和Requests："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* Handle Type */\ntypedef struct uv_handle_s uv_handle_t;\ntypedef struct uv_timer_s uv_timer_t;\ntypedef struct uv_async_s uv_async_t;\ntypedef struct uv_signal_s uv_signal_t;\n\n/* Request Type */\ntypedef struct uv_req_s uv_req_t;\ntypedef struct uv_work_s uv_work_t;\ntypedef struct uv_fs_s uv_fs_t;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注：在handles中，uv_xxx_t继承了uv_handle_t；在requests中，uv_work_t继承了uv_req_t。"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于libuv中的handles，对其有正确的认识并管理好它的生命周期至关重要。handle作为一个长期存在于loop中的句柄，在使用中，开发者应遵循下面的原则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "句柄的初始化工作应在事件循环的线程中进行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若由于业务问题，句柄需要在其他工作线程初始化，在使用之前用原子变量判断是否初始化完成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "句柄在确定后续不再使用后，调用uv_close将句柄从loop中摘除。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在这里，需要特别说明一下uv_close的使用方法。uv_close被用来关闭一个handle，但是关闭handle的动作是异步的。函数原型为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void uv_close(uv_handle_t* handle, uv_close_cb close_cb)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "handle：要关闭的句柄。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close_cb：处理该句柄的函数，用来进行内存管理等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用uv_close后，首先将要关闭的handle挂载到loop的closing_handles队列上，然后等待loop所在线程运行uv__run_closing_handles函数。最后回调函数close_cb将会在loop的下一次迭代中执行。因此，释放内存等操作应该在close_cb中进行。并且这种异步的关闭操作会带来多线程问题，开发者需要谨慎处理uv_close的时序问题，并且保证在close_cb执行之前handles的生命周期。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tips"
        })
      }), "：在", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://libuv.org/",
        children: "libuv官方文档"
      }), "中，有个经验法则需要在此提示一下。原文翻译：如果 uv_foo_t 类型的句柄具有 uv_foo_start() 函数，则从调用该函数的那一刻起，它就处于活动状态。 同样，uv_foo_stop()再次停用句柄。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(685539)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "所有的handle关闭前必须要调用uv_close，所有的内存操作都要在uv_close的close_cb中执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "所有的handle操作都不能通过获取其他线程loop的方式，在非loop线程上调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于libuv中的requests，开发者需要确保在进行异步任务提交时，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通过动态申请的request，要在loop所在线程执行的complete回调函数中释放"
        })
      }), "。用uv_work_t举例，代码可参考如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uv_work_t* work = new uv_work_t;\nuv_queue_work(loop, work, [](uv_work_t* req) {\n    // 异步操作\n}, [](uv_work_t* req, int status) {\n    // 回调操作\n    delete req;\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "libuv-timer使用规范",
      children: "libuv timer使用规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用libuv timer需要遵守如下约定："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请不要在多个线程中使用libuv的接口（uv_timer_start、uv_timer_stop和uv_timer_again）同时操作同一个loop的timer heap，否则将导致崩溃，如果想要使用libuv的接口操作定时器，请", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "保持在与当前env绑定的loop所在线程上操作"
          })
        }), "；"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如因业务需求往指定线程抛定时器，请使用uv_async_send线程安全函数实现。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 错误使用timer示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下错误示例中，由于在多个线程操作同一个loop的timer heap，崩溃率极高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so'\n\nfunction waitforRunner(): number {\n    \"use concurrent\"\n    hilog.info(0xff, \"testTag\", \"executed\");\n    return 0;\n}\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button(\"TimerTest\")\n          .width('40%')\n          .fontSize('14fp')\n          .onClick(() => {\n            let i: number = 20;\n            while (i--) {\n              setTimeout(waitforRunner, 200);\n              testNapi.testTimer();\n          }\n        }).margin(20)\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native C++侧："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <napi/native_api.h>\n#include <uv.h>\n#define LOG_DOMAIN 0x0202\n#define LOG_TAG \"MyTag\"\n#include \"hilog/log.h\"\n#include <thread>\n#include <unistd.h>\n\nstatic napi_value TestTimer(napi_env env, napi_callback_info info)\n{\n    uv_loop_t* loop = nullptr;\n    uv_timer_t* timer = new uv_timer_t;\n    \n    napi_get_uv_event_loop(env, &loop);\n    uv_timer_init(loop, timer);\n    std::thread t1([&loop, &timer](){\n        uv_timer_start(timer, [](uv_timer_t* timer){\n            uv_timer_stop(timer);\n        }, 1000, 0);\n    });\n    \n    t1.detach();\n    return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"testTimer\", nullptr, TestTimer, nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n    \nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在index.d.ts添加如下代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const testTimer:() => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 正确使用timer示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景一："
        })
      }), " 在上述场景中，需保证在JS主线程上进行timer的相关操作。将上述TestTimer函数的代码做如下修改，便可以避免崩溃发生。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value TestTimer(napi_env env, napi_callback_info info)\n{\n    uv_loop_t* loop = nullptr;\n    uv_timer_t* timer = new uv_timer_t;\n    \n    napi_get_uv_event_loop(env, &loop);\n    uv_timer_init(loop, timer);\n    uv_timer_start(timer, [](uv_timer_t* timer){\n        uv_timer_stop(timer);\n    }, 1000, 0);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景二："
        })
      }), " 如果需要在指定的子线程抛定时器，请使用线程安全函数uv_async_send实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button(\"TestTimerAsync\")\n          .width('40%')\n          .fontSize('14fp')\n          .onClick(() => {\n              testNapi.testTimerAsync();  // 初始化async句柄\n        }).margin(20)\n          \n          Button(\"TestTimerAsyncSend\")\n          .width('40%')\n          .fontSize('14fp')\n          .onClick(() => {\n              testNapi.testTimerAsyncSend();  // 子线程调用uv_async_send提交定时器任务\n        }).margin(20)\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native侧："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <napi/native_api.h>\n#include <uv.h>\n#define LOG_DOMAIN 0x0202\n#define LOG_TAG \"MyTag\"\n#include \"hilog/log.h\"\n#include <thread>\n#include <unistd.h>\nuv_async_t* async = new uv_async_t;\n\n// 执行创建定时器操作\nvoid async_cb(uv_async_t* handle)\n{\n    auto loop = handle->loop;\n    uv_timer_t* timer = new uv_timer_t;\n    uv_timer_init(loop, timer);\n    \n    uv_timer_start(timer, [](uv_timer_t* timer){\n        uv_timer_stop(timer);\n    }, 1000, 0);\n}\n\n// 初始化async句柄，绑定对应的回调函数\nstatic napi_value TestTimerAsync(napi_env env, napi_callback_info info)\n{\n    uv_loop_t* loop = nullptr;\n    napi_get_uv_event_loop(env, &loop);\n    uv_async_init(loop, async, async_cb);\n    return 0;\n}\n\nstatic napi_value TestTimerAsyncSend(napi_env env, napi_callback_info info)\n{\n    std::thread t([](){\n        uv_async_send(async);  // 在任意子线程中调用uv_async_send，通知主线程调用与async绑定的timer_cb\n    });\n    t.detach();\n    return 0;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"testTimerAsync\", nullptr, TestTimerAsync, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"testTimerAsyncSend\", nullptr, TestTimerAsyncSend, nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n    \nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在index.d.ts添加如下代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const testTimerAsync:() => number;\nexport const testTimerAsyncSend:() => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线程间通信",
      children: "线程间通信"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面简单介绍了一些libuv中的基本概念，在这里我们将着重介绍libuv中的线程间通信。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "libuv的线程间通信是通过uv_async_t句柄来进行的，相关函数如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int uv_async_init(uv_loop_t* loop, uv_async_t* handle, uv_async_cb async_cb)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "loop：事件循环loop。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "handle：线程间通信句柄。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async_cb：回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回：成功，返回0。失败，返回错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int uv_async_send(uv_async_t* handle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "handle：线程间通信句柄。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回：成功，返回0。失败，返回错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_async_t从调用uv_async_init开始后就一直处于活跃状态，除非用uv_close将其关闭。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv_async_t的执行顺序严格按照uv_async_init的顺序，而非通过uv_async_send的顺序来执行的。因此按照初始化的顺序来管理好时序问题是必要的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(341817)/* ["default"] */.A) + "",
        width: "1412",
        height: "798"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\n#include <thread>\n#include \"uv.h\"\n\nuv_loop_t* loop = nullptr;\nuv_async_t* async = nullptr;\nint g_counter = 10;\n\nvoid async_handler(uv_async_t* handle)\n{\n    std::cout << \"ohos async print\" << std::endl;\n    if (--g_counter == 0) {\n        // 调用uv_close关闭async，在主循环中释放内存。\n        uv_close((uv_handle_t*)async, [](uv_handle_t* handle) {\n            std::cout << \"delete async\" << std::endl;\n            delete (uv_async_t*)handle;\n        });\n    }\n}\n\nint main()\n{\n    loop = uv_default_loop();\n    async = new uv_async_t;\n    uv_async_init(loop, async, async_handler);\n    std::thread subThread([]() {\n        for (int i = 0; i < 10; i++) {\n            usleep(100); // 避免多次调用uv_async_send只执行一次\n            std::cout << i << \"th: subThread triggered\" << std::endl;\n            uv_async_send(async);\n        }\n    });\n    subThread.detach();\n    return uv_run(loop, UV_RUN_DEFAULT);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例代码仅仅描述了一个简单的场景，步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在主线程中初始化async句柄；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "新建一个子线程，在里面每隔100毫秒触发一次uv_async_send。10次以后调用uv_close关闭async句柄；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在主线程运行事件循环。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以看到，每触发一次，主线程都会执行一次回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0th:subThread triggered\nohos async print\n1th:subThread triggered\nohos async print\n2th:subThread triggered\nohos async print\n3th:subThread triggered\nohos async print\n4th:subThread triggered\nohos async print\n5th:subThread triggered\nohos async print\n6th:subThread triggered\nohos async print\n7th:subThread triggered\nohos async print\n8th:subThread triggered\nohos async print\n9th:subThread triggered\nohos async print\ndelete async\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线程池",
      children: "线程池"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线程池是libuv的一个核心功能，libuv中的线程池通过uv_loop_t中的成员变量wq_async来控制工作线程与主线程的通信。核心函数如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int uv_queue_work(uv_loop_t* loop,\n                  uv_work_t* req,\n                  uv_work_cb work_cb,\n                  uv_after_work_cb after_work_cb)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "work_cb：提交给工作线程的任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "after_work_cb：loop所在线程要执行的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(16040)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "work_cb与after_work_cb的执行有一个时序问题，只有work_cb执行完，通过uv_async_send(loop->wq_async)触发fd事件，loop所在线程在下一次迭代中才会执行after_work_cb。只有执行到after_work_cb时，与之相关的uv_work_t生命周期才算结束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 异步任务提交"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图为原生libuv的线程池工作流程，图中流程已简化，默认句柄的pending标志为1，worker线程个数不代表线程池中线程的真实数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(150056)/* ["default"] */.A) + "",
        width: "1420",
        height: "725"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 异步任务提交注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS中，uv_queue_work函数在UI线程的工作流程为：将work_cb抛到FFRT对应优先级的线程池中，然后待FFRT调度执行该任务，并将after_work_cb抛到eventhandler对应优先级的event queue中，等待eventhandler调度并回到loop线程执行。需要注意的是，uv_queue_work调用完后，并不代表其中的任何一个任务执行完，仅代表将work_cb插入到FFRT对应优先级的线程池中。taskpool和jsworker线程的工作流程和原生libuv逻辑保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. uv_queue_work使用约束"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["特别强调，开发者需要明确，uv_queue_work函数仅用于抛异步任务，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "异步任务的execute回调被提交到线程池后会经过调度执行，因此并不保证多次提交的任务及其回调按照时序关系执行"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["另外，uv_queue_work仅限于在loop线程中调用，这样不会有多线程安全问题。", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "请不要把uv_queue_work作为线程间通信的手段，即A线程获取到B线程的loop，并通过uv_queue_work抛异步任务的方式，把execute置为空任务，而把complete回调放在B线程中执行。"
        })
      }), " 这种方式不仅低效，而且还增加了发生故障时定位问题的难度。为了避免低效的任务提交，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety",
        children: "napi_threadsafe_function相关函数"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openharmony中libuv的使用现状",
      children: "OpenHarmony中libuv的使用现状"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前HarmonyOS系统中涉及到libuv的线程主要有主线程、JS Worker线程、Taskpool中的TaskWorker线程以及IPC线程。除了主线程采用了eventhandler作为主循环，其他线程都是使用libuv中的UV_RUN_DEFAULT运行模式作为当前线程的事件主循环来执行任务。在主线程中，eventhandler通过fd驱动的方式来触发任务的执行，eventhandler监听了uv_loop中的backend_fd。当loop中有fd事件触发的时候，eventhandler会执行一次uv_run来执行一遍libuv中的任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["综上所述，开发者会发现这样一种现象：", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "同样的libuv接口在主线程上不生效，但在JS Worker线程中就没问题。这主要还是因为主线程上所有不通过触发fd来驱动的uv接口都不会得到及时的响应。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "另外，在应用主线程中，所有的异步任务尽管最终都是通过libuv得到执行的。但是在当前系统中，libuv的线程池已经对接到了FFRT中，任何抛向libuv的异步任务都会在FFRT的线程中得到调度。应用主线程的回调函数也通过PostTask接口插入到eventhandler的队列上。这就意味着FFRT线程上的异步任务完成后不再通过uv_async_send的方式触发主线程的回调。过程如下图:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(907405)/* ["default"] */.A) + "",
        width: "921",
        height: "458"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们总结了五种类型的请求任务是直接可以按照正常用法在应用主循环中生效的："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "uv_random_t"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "函数原型："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @brief 将一个工作请求添加到事件循环的队列中。\n *\n * @param loop 事件循环\n * @param req 随机数请求\n * @param buf 存储随机数的缓冲区\n * @param buflen 缓冲区的长度\n * @param flags 一个无符号整数，表示生成随机数的选项\n * @param cb  随机数生成完成后的回调函数\n *\n * @return 成功返回0，失败返回错误码\n */\nint uv_random(uv_loop_t* loop,\n             uv_random_t* req,\n             void* buf,\n             size_t buflen,\n             unsigned flags,\n             uv_random_cb cb);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "uv_work_t"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "函数原型："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @brief 将一个工作请求添加到事件循环的队列中。当事件循环在下一次迭代时，work_cb函数将会在一个新的线程中被调用。当work_cb函数完成时，after_work_cb函数将会在事件循环的线程中被调用。\n *\n * @param loop 事件循环\n * @param req 工作请求\n * @param work_cb 在新线程中被调用的函数\n * @param after_work_cb 在事件循环线程中被调用的函数\n *\n * @return 成功返回0，失败返回-1\n */\nint uv_queue_work(uv_loop_t* loop,\n                  uv_work_t* req,\n                  uv_work_cb work_cb,\n                  uv_after_work_cb after_work_cb);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "uv_fs_t"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件类提供的所有异步接口，在应用主线程中都是可以生效的。主要有如下："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @brief 异步读取文件\n *\n * @param loop 事件循环\n * @param req 文件操作请求\n * @param file 文件描述符\n * @param bufs 读取数据的缓冲区\n * @param nbufs 缓冲区的数量\n * @param off 文件的偏移量\n * @param cb 完成后的回调函数\n * @return 成功返回0，失败返回-1\n */\nint uv_fs_read(uv_loop_t* loop, uv_fs_t* req,\n              uv_file file,\n              const uv_buf_t bufs[],\n              unsigned int nbufs,\n              int64_t off,\n              uv_fs_cb cb);\n\n/**\n * @brief 异步打开文件\n *\n * @param loop 事件循环\n * @param req 文件操作请求\n * @param path 文件路径\n * @param flags 打开文件的方式\n * @param mode 文件权限\n * @param cb 完成后的回调函数\n *\n * @return 成功返回0，失败返回-1\n */\nint uv_fs_open(uv_loop_t* loop,\n               uv_fs_t* req,\n               const char* path,\n               int flags,\n               int mode,\n               uv_fs_cb cb);\n\n/**\n * @brief 异步发送文件\n *\n * @param loop 事件循环\n * @param req 文件操作请求\n * @param out_fd 输出文件描述符\n * @param in_fd 输入文件描述符\n * @param off 文件的偏移量\n * @param len 发送的长度\n * @param cb 完成后的回调函数\n *\n * @return 成功返回0，失败返回-1\n */\nint uv_fs_sendfile(uv_loop_t* loop,\n                   uv_fs_t* req,\n                   uv_file out_fd,\n                   uv_file in_fd,\n                   int64_t off,\n                   size_t len,\n                   uv_fs_cb cb);\n\n/**\n * @brief 异步写入文件\n *\n * @param loop 事件循环\n * @param req 文件操作请求\n * @param file 文件描述符\n * @param bufs 要写入的数据\n * @param nbufs 数据的数量\n * @param off 文件的偏移量\n * @param cb 完成后的回调函数\n *\n * @return 成功返回0，失败返回-1\n */\nint uv_fs_write(uv_loop_t* loop,\n                uv_fs_t* req,\n                uv_file file,\n                const uv_buf_t bufs[],\n                unsigned int nbufs,\n                int64_t off,\n                uv_fs_cb cb);\n\n/**\n * @brief 异步复制文件\n *\n * @param loop 事件循环\n * @param req 文件操作请求\n * @param path 源文件路径\n * @param new_path 目标文件路径\n * @param flags 复制选项\n * @param cb 完成后的回调函数\n *\n * @return 成功返回0，失败返回-1\n */\nint uv_fs_copyfile(uv_loop_t* loop,\n                   uv_fs_t* req,\n                   const char* path,\n                   const char* new_path\n                   int flags,\n                   uv_fs_cb cb);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "uv_getaddrinfo_t"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "函数原型："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @brief 异步获取地址信息\n *\n * @param loop 事件循环\n * @param req 地址信息请求\n * @param cb 完成后的回调函数\n * @param hostname 主机名\n * @param service 服务名\n * @param hints 地址信息提示\n *\n * @return 成功返回0，失败返回-1\n */\nint uv_getaddrinfo(uv_loop_t* loop,\n                   uv_getaddrinfo_t* req,\n                   uv_getaddrinfo_cb cb,\n                   const char* hostname,\n                   const char* service,\n                   const struct addrinfo* hints);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "uv_getnameinfo_t"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "函数原型："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @brief 异步获取名称信息\n *\n * @param loop 事件循环\n * @param req 名称信息请求\n * @param getnameinfo_cb 完成后的回调函数\n * @param addr 地址\n * @param flags 标志\n *\n * @return 成功返回0，失败返回-1\n */\nint uv_getnameinfo(uv_loop_t* loop,\n                   uv_getnameinfo_t* req,\n                   uv_getnameinfo_cb getnameinfo_cb,\n                   const struct sockaddr* addr,\n                   int flags);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用主线程上不生效的接口主要包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "idle句柄"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prepare句柄"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "check句柄"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "signal相关函数"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tcp及udp相关函数"
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
907405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960914-a2beec27a742e633f2c2127a4961dfe1.jpg");

},
685539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
16040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
341817(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552801264-c48317d5cf01c23be0338155c8c365e0.jpg");

},
150056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440959-d525f57dd9e0f514780ad4f694841dd1.jpg");

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