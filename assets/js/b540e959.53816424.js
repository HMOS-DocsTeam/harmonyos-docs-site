"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["825553"], {
463352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_promise_use_jsvm_about_promise_md_b54_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-promise-use-jsvm-about-promise-md-b54.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_promise_use_jsvm_about_promise_md_b54_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-promise/use-jsvm-about-promise","title":"使用JSVM-API接口处理异步操作","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-promise/use-jsvm-about-promise.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-promise","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-promise/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-promise/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"使用JSVM-API接口处理异步操作","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-promise","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行primitive类相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-primitive/"},"next":{"title":"使用JSVM-API接口设置JavaScript对象的属性","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-property/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-promise/use-jsvm-about-promise.md


const frontMatter = {
	title: '使用JSVM-API接口处理异步操作',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-promise',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口处理异步操作';

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
  "value": "OH_JSVM_IsPromise",
  "id": "oh_jsvm_ispromise",
  "level": 3
}, {
  "value": "OH_JSVM_CreatePromise",
  "id": "oh_jsvm_createpromise",
  "level": 3
}, {
  "value": "OH_JSVM_ResolveDeferred &amp; OH_JSVM_RejectDeferred",
  "id": "oh_jsvm_resolvedeferred--oh_jsvm_rejectdeferred",
  "level": 3
}, {
  "value": "OH_JSVM_PromiseRegisterHandler",
  "id": "oh_jsvm_promiseregisterhandler",
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
        id: "使用jsvm-api接口处理异步操作",
        children: "使用JSVM-API接口处理异步操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API接口处理异步操作。异步操作是指需要一定时间才能完成的操作，例如从网络下载数据或读取大型文件。与同步操作不同，异步操作不会阻塞主线程，而是会在后台执行。当异步操作完成后，事件循环将把它放入任务队列中，等待主线程空闲时执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise是JavaScript中用来处理异步操作的对象，Promise有pending（待定）、fulfilled（已兑现）和rejected（已拒绝）三种状态，Promise的初始状态是pending，resolve函数可以使其状态从pending变为fulfilled（已兑现），reject函数可以使其状态从pending变为rejected(已拒绝)，一旦兑现或拒绝Promise的状态将不能更改。下面是一些基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "同步"
          })
        }), "： 同步是指代码按照顺序一行一行地执行，每行代码的执行都会等待上一行代码执行完成后再继续执行。在同步执行中，如果某个操作需要花费较长时间，那么整个程序的执行就会被阻塞，直到该操作完成才能继续执行后续代码。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "异步"
          })
        }), "：异步是指任务可以同时执行，不需要等待上一个任务结束。在JavaScript中，常见的异步操作包括定时器、事件监听、网络请求等。异步任务不会阻塞后续任务的执行，而是通过回调函数或Promise对象来处理任务的结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Promise"
          })
        }), "：Promise是一个JavaScript对象，用于处理异步操作。Promise作用于外部，通常通过then、catch和finally方法暴露给外部以添加自定义逻辑。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "deferred"
          })
        }), "：deferred是延迟对象，它可以与Promise对象关联，设置Promise的回调函数resolve和reject。deferred作用于内部，维护异步模型的状态并设置回调函数resolve和reject。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "resolve"
          })
        }), "：此函数可以将Promise的状态从pending（待定）改为fulfilled（已兑现），向resolve中传入的参数可以在Promise对象的then方法中获取。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "reject"
          })
        }), "：此函数可以将Promise的状态从pending（待定）改为rejected（已拒绝），向reject中传入的参数可以在Promise对象的catch方法中获取。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些基本概念在处理异步操作中非常重要，开发者需要通过适当的方法来处理异步操作，Promise可以链式调用多个异步操作，使代码清晰整洁，便于维护。JSVM-API提供的方法可以帮助开发者在JSVM模块中处理JavaScript中的异步操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_IsPromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询Promise是否为Promise对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreatePromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个延迟对象和一个JavaScript promise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ResolveDeferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过与之关联的延迟对象来解析JavaScript promise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_RejectDeferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过与之关联的延迟对象来拒绝JavaScript promise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_PromiseRegisterHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为 Promise 创建兑现或拒绝后的回调"
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
      id: "oh_jsvm_ispromise",
      children: "OH_JSVM_IsPromise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断给定的JSVM_Value是否表示一个Promise对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_IsPromise的样例方法\nstatic JSVM_Value IsPromise(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    bool isPromise = false;\n    JSVM_Status status = OH_JSVM_IsPromise(env, args[0], &isPromise);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_IsPromise fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_IsPromise success:%{public}d\", isPromise);\n    }\n    JSVM_Value result = nullptr;\n    OH_JSVM_GetBoolean(env, isPromise, &result);\n    return result;\n}\n// IsPromise注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = IsPromise},\n};\nstatic JSVM_CallbackStruct *method = param;\n// IsPromise方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"isPromise\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(isPromise())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_IsPromise success:0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createpromise",
      children: "OH_JSVM_CreatePromise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_JSVM_CreatePromise用于创建一个Promise对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_resolvedeferred--oh_jsvm_rejectdeferred",
      children: "OH_JSVM_ResolveDeferred & OH_JSVM_RejectDeferred"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于对Promise关联的deferred对象进行解析，OH_JSVM_ResolveDeferred将其从挂起状态转换为已兑现状态，OH_JSVM_RejectDeferred将其从挂起状态转换为已拒绝状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CreatePromise、OH_JSVM_ResolveDeferred、OH_JSVM_RejectDeferred的样例方法\nstatic JSVM_Value CreatePromise(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    JSVM_Deferred defer = nullptr;\n    JSVM_Value promise = nullptr;\n    JSVM_Status status = OH_JSVM_CreatePromise(env, &defer, &promise);\n    bool isPromise = false;\n    JSVM_Value returnIsPromise = nullptr;\n    OH_JSVM_IsPromise(env, promise, &isPromise);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreatePromise fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreatePromise success:%{public}d\", isPromise);\n    }\n    // 将布尔值转为可以返回的JSVM_Value\n    OH_JSVM_GetBoolean(env, isPromise, &returnIsPromise);\n    return returnIsPromise;\n}\n\nstatic JSVM_Value ResolveRejectDeferred(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获得并解析参数\n    size_t argc = 3;\n    JSVM_Value args[3] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 第一个参数为向resolve传入的信息，第二个参数为向reject传入的信息，第三个参数为Promise的状态\n    bool status = false;\n    OH_JSVM_GetValueBool(env, args[2], &status);\n    // 创建Promise对象\n    JSVM_Deferred deferred = nullptr;\n    JSVM_Value promise = nullptr;\n    JSVM_Status createStatus = OH_JSVM_CreatePromise(env, &deferred, &promise);\n    if (createStatus != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"Create promise failed\");\n        return nullptr;\n    }\n    // 根据第三个参数设置resolve或reject\n    if (status) {\n        OH_JSVM_ResolveDeferred(env, deferred, args[0]);\n        OH_LOG_INFO(LOG_APP, \"OH_JSVM_ResolveDeferred resolve\");\n    } else {\n        OH_JSVM_RejectDeferred(env, deferred, args[1]);\n        OH_LOG_INFO(LOG_APP, \"OH_JSVM_RejectDeferred reject\");\n    }\n    JSVM_Value result = nullptr;\n    OH_JSVM_GetBoolean(env, true, &result);\n    return result;\n}\n// CreatePromise,ResolveRejectDeferred注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreatePromise},\n    {.data = nullptr, .callback = ResolveRejectDeferred},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreatePromise,ResolveRejectDeferred方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createPromise\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n    {\"resolveRejectDeferred\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(createPromise();\n                                 resolveRejectDeferred('success', 'fail', true);\n                                 resolveRejectDeferred('success', 'fail', false);)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreatePromise success:1\nOH_JSVM_ResolveDeferred resolve\nOH_JSVM_RejectDeferred reject\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oh_jsvm_promiseregisterhandler",
      children: "OH_JSVM_PromiseRegisterHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置 Promise 解析或拒绝后的回调，等效于调用原生的 Promise.then() 或 Promise.catch()。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅对 cpp 部分代码进行展示，其余框架代码如 TestJSVM 函数参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-use/use-jsvm-execute_tasks",
        children: "使用JSVM-API接口进行任务队列相关开发"
      }), " OH_JSVM_SetMicrotaskPolicy 段落中的实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static int PromiseRegisterHandler(JSVM_VM vm, JSVM_Env env) {\n    const char *defineFunction = R\"JS(\n        var x1 = 0;\n        var x2 = 0;\n        function f1(x) {\n            x1 = x;\n            return x + 1;\n        }\n        function f2(x) {\n            x2 = x;\n            return x + 1;\n        }\n    )JS\";\n\n    const char *init = R\"JS(\n        x1 = 0;\n        x2 = 0;\n    )JS\";\n\n    JSVM_Script script;\n    JSVM_Value jsSrc;\n    JSVM_Value result;\n\n    // 定义 JS 函数 f1 和 f2\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, defineFunction, JSVM_AUTO_LENGTH, &jsSrc));\n    CHECK_RET(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n\n    // 初始化 x1， x2 为 0\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, init, JSVM_AUTO_LENGTH, &jsSrc));\n    CHECK_RET(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n\n    // 获取函数 f1 和 f2\n    JSVM_Value global;\n    CHECK_RET(OH_JSVM_GetGlobal(env, &global));\n    JSVM_Value f1;\n    CHECK_RET(OH_JSVM_GetNamedProperty(env, global, \"f1\", &f1));\n    JSVM_Value f2;\n    CHECK_RET(OH_JSVM_GetNamedProperty(env, global, \"f2\", &f2));\n\n    // 创建 Promise\n    JSVM_Value promise;\n    JSVM_Deferred deferred;\n    CHECK_RET(OH_JSVM_CreatePromise(env, &deferred, &promise));\n    // 为 promise 注册回调函数，并将 then 调用的结果（新的 Promise）赋值给 promise1\n    JSVM_Value promise1;\n    CHECK_RET(OH_JSVM_PromiseRegisterHandler(env, promise, f1, nullptr, &promise1));\n    // 为 promise1 注册回调函数\n    CHECK_RET(OH_JSVM_PromiseRegisterHandler(env, promise1, f2, nullptr, nullptr));\n\n    // 获取 promise 解析前 x1 和 x2 的值\n    JSVM_Value x1;\n    CHECK_RET(OH_JSVM_GetNamedProperty(env, global, \"x1\", &x1));\n    int32_t x1Int = 0;\n    CHECK_RET(OH_JSVM_GetValueInt32(env, x1, &x1Int));\n    JSVM_Value x2;\n    CHECK_RET(OH_JSVM_GetNamedProperty(env, global, \"x2\", &x2));\n    int32_t x2Int = 0;\n    CHECK_RET(OH_JSVM_GetValueInt32(env, x2, &x2Int));\n    OH_LOG_INFO(LOG_APP, \"Before promise resolved, x1: %{public}d, x2: %{public}d\", x1Int, x2Int);\n\n    // 解析 promise\n    JSVM_Value resolveValue;\n    CHECK_RET(OH_JSVM_CreateInt32(env, 2, &resolveValue));\n    if (deferred != nullptr) {\n        OH_JSVM_ResolveDeferred(env, deferred, resolveValue);\n        deferred = nullptr;\n    }\n\n    // 获取 promise 解析后 x1 和 x2 的值\n    CHECK_RET(OH_JSVM_GetNamedProperty(env, global, \"x1\", &x1));\n    CHECK_RET(OH_JSVM_GetValueInt32(env, x1, &x1Int));\n    CHECK_RET(OH_JSVM_GetNamedProperty(env, global, \"x2\", &x2));\n    CHECK_RET(OH_JSVM_GetValueInt32(env, x2, &x2Int));\n    OH_LOG_INFO(LOG_APP, \"After promise resolved, x1: %{public}d, x2: %{public}d\", x1Int, x2Int);\n\n    return 0;\n}\n\nstatic void RunDemo(JSVM_VM vm, JSVM_Env env) {\n    if (PromiseRegisterHandler(vm, env) != 0) {\n        OH_LOG_INFO(LOG_APP, \"Run PromiseRegisterHandler failed\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before promise resolved, x1: 0, x2: 0\nAfter promise resolved, x1: 2, x2: 3\n"
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