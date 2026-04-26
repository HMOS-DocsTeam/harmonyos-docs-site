"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["944177"], {
807541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_questions_napi_faq_about_memory_leak_napi_faq_about_memory_leak_md_6fe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-questions-napi-faq-about-memory-leak-napi-faq-about-memory-leak-md-6fe.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_questions_napi_faq_about_memory_leak_napi_faq_about_memory_leak_md_6fe_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak/napi-faq-about-memory-leak","title":"内存泄漏相关问题汇总","description":"当前是否有机制来检查是否有泄漏的napi\\\\_ref","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak/napi-faq-about-memory-leak.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak","slug":"/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"内存泄漏相关问题汇总","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-memory-leak","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"稳定性相关问题汇总","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability/"},"next":{"title":"常见基本功能问题汇总","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak/napi-faq-about-memory-leak.md


const frontMatter = {
	title: '内存泄漏相关问题汇总',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-memory-leak',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '内存泄漏相关问题汇总';

const assets = {

};



const toc = [{
  "value": "当前是否有机制来检查是否有泄漏的napi_ref",
  "id": "当前是否有机制来检查是否有泄漏的napi_ref",
  "level": 2
}, {
  "value": "napi开发过程中遇见内存泄漏问题要怎么定位解决",
  "id": "napi开发过程中遇见内存泄漏问题要怎么定位解决",
  "level": 2
}, {
  "value": "napi_threadsafe_function内存泄漏应该如何处理",
  "id": "napi_threadsafe_function内存泄漏应该如何处理",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "内存泄漏相关问题汇总",
        children: "内存泄漏相关问题汇总"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "当前是否有机制来检查是否有泄漏的napi_ref",
      children: "当前是否有机制来检查是否有泄漏的napi_ref"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题：napi_create_reference可以创建对js对象的引用，保持js对象不释放，正常来说使用完需要使用napi_delete_reference进行释放，但怕漏delete导致js对象内存泄漏，当前是否有机制来检查/测试是否有泄漏的napi_ref？"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检测方式："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用 DevEco Studio（IDE）提供的 Allocation 工具进行检测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-allocations",
        children: "基础内存分析：Allocation分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_create_reference这个接口内部实现会new一个C++对象，因此，如果忘记使用napi_delete_reference接口，那这个new出来的C++对象也会泄漏，这时候就可以用Allocation工具来进行检测，这个工具会把未释放的对象的分配栈都打印出来，如果napi_ref泄漏了，可以在分配栈上看出来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi开发过程中遇见内存泄漏问题要怎么定位解决",
      children: "napi开发过程中遇见内存泄漏问题要怎么定位解决"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击按钮时内存增加，即使主动触发GC也无法回收。如何在Node-API开发过程中定位和解决内存泄漏问题？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解决建议："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需先了解Node-API生命周期机制，相关材料如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle",
        children: "使用Node-API接口进行生命周期相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API时导致内存泄漏的常见原因："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["napi_value不在napi_handle_scope管理中，导致napi_value持有的ArkTS对象无法释放，该问题常见于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-guidelines#%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1",
            children: "直接使用uv_queue_work的场景"
          }), "中。解决方法是添加napi_open_handle_scope和napi_close_handle_scope接口。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此类泄漏可通过snapshot分析定位原因，泄漏的ArkTS对象distance为1，即不知道被谁持有，这种情况下一般就是被native（napi_value是个指针，指向native持有者）持有了，且napi_value不在napi_handle_scope范围内，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-coding-standard-api#section1219614634615",
            children: "易错API的使用规范"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用 napi_create_reference 为 ArkTS 对象创建了强引用（initial_refcount 参数大于 0），且一直未删除，导致 ArkTS 对象无法被回收。napi_create_reference 接口内部会创建一个 C++ 对象，因此这种泄漏通常表现为ArkTS对象与Native对象的双重泄漏。可以使用 Allocation 工具捕获Native对象泄漏栈，检查是否存在 napi_create_reference 相关的栈帧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-allocations",
            children: "基础内存分析：Allocation分析"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "被其它存活的ArkTS对象持有时，使用snapshot查看泄漏对象的持有者。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_threadsafe_function内存泄漏应该如何处理",
      children: "napi_threadsafe_function内存泄漏应该如何处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_threadsafe_function（下文简称tsfn）在使用时，常常会调用 napi_acquire_threadsafe_function 来更改tsfn的引用计数，确保tsfn不会意外被释放。但在使用完成后，应该及时使用 napi_tsfn_release 模式调用 napi_release_threadsafe_function 方法，以确保在所有调用回调都执行完成后，其引用计数能回归到调用 napi_acquire_threadsafe_function 方法之前的水平。当其引用计数归零时，tsfn才能正确的被释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当env即将退出，但tsfn的引用计数未归零时，应使用 napi_tsfn_abort 模式调用 napi_release_threadsafe_function 方法，确保env释放后不再持有或使用tsfn。env退出后继续持有tsfn将导致未定义行为，可能引发崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下代码将展示通过注册 env_cleanup 钩子函数的方式，以确保在env退出后不再继续持有tsfn。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//napi_init.cpp\n#include \"napi/native_api.h\"\n#include <hilog/log.h> // hilog, 输出日志, 需链接 libhilog_ndk.z.so\n#include <thread> // 创建线程\n#include <unistd.h> // 线程休眠\n\n// 定义输出日志的标签和域\n#undef LOG_DOMAIN\n#undef LOG_TAG\n#define LOG_DOMAIN 0x2342\n#define LOG_TAG \"MY_TSFN_DEMO\"\n\n/*\n  为构建一个 env 生命周期短于 native 生命周期的场景,\n  本示例需要使用worker, taskpool 或 napi_create_ark_runtime 等方法,\n  创建非主线程的ArkTS运行环境，并人为的提前结束掉该线程\n*/\n\n\n// 定义一个数据结构，模拟存储tsfn的场景\nclass MyTsfnContext {\npublic:\n// 因使用了Node-API方法, MyTsfnContext 应当只在ArkTS线程被构造\nMyTsfnContext(napi_env env, napi_value workName) {\n    // 注册env销毁钩子函数\n    napi_add_env_cleanup_hook(env, Cleanup, this);\n    // 创建线程安全函数\n    if (napi_create_threadsafe_function(env, nullptr, nullptr, workName, 1, 1, this,\n            TsfnFinalize, this, TsfnCallJs, &tsfn_) != napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"tsfn is created failed\");\n        return;\n    };\n};\n\n~MyTsfnContext() { OH_LOG_INFO(LOG_APP, \"MyTsfnContext is deconstructed\"); };\n\nnapi_threadsafe_function GetTsfn() {\n    std::unique_lock<std::mutex> lock(mutex_);\n    return tsfn_;\n}\n\nbool Acquire() {\n    if (GetTsfn() == nullptr) {\n        return false;\n    };\n    return (napi_acquire_threadsafe_function(GetTsfn()) == napi_ok);\n};\n\nbool Release() {\n    if (GetTsfn() == nullptr) {\n        return false;\n    };\n    return (napi_release_threadsafe_function(GetTsfn(), napi_tsfn_release) == napi_ok);\n};\n\nbool Call(void *data) {\n    if (GetTsfn() == nullptr) {\n        return false;\n    };\n    return (napi_call_threadsafe_function(GetTsfn(), data, napi_tsfn_blocking) == napi_ok);\n};\n\nprivate:\n// 保护多线程读写tsfn的准确性\nstd::mutex mutex_;\nnapi_threadsafe_function tsfn_ = nullptr;\n\n// napi_add_env_cleanup_hook 回调\nstatic void Cleanup(void *data) {\n    MyTsfnContext *that = reinterpret_cast<MyTsfnContext *>(data);\n    napi_threadsafe_function tsfn = that->GetTsfn();\n    std::unique_lock<std::mutex> lock(that->mutex_);\n    that->tsfn_ = nullptr;\n    lock.unlock();\n    OH_LOG_WARN(LOG_APP, \"cleanup is called\");\n    napi_release_threadsafe_function(tsfn, napi_tsfn_abort);\n};\n\n// tsfn 释放时的回调\nstatic void TsfnFinalize(napi_env env, void *data, void *hint) {\n    MyTsfnContext *ctx = reinterpret_cast<MyTsfnContext *>(data);\n    OH_LOG_INFO(LOG_APP, \"tsfn is released\");\n    napi_remove_env_cleanup_hook(env, MyTsfnContext::Cleanup, ctx);\n    // cleanup 提前释放线程安全函数, 为避免UAF, 将释放工作交给调用方\n    if (ctx->GetTsfn() != nullptr) {\n        OH_LOG_INFO(LOG_APP, \"ctx is released\");\n        delete ctx;\n    }\n};\n\n// tsfn 发送到 ArkTS 线程执行的回调\nstatic void TsfnCallJs(napi_env env, napi_value func, void *context, void *data) {\n    MyTsfnContext *ctx = reinterpret_cast<MyTsfnContext *>(context);\n    char *str = reinterpret_cast<char *>(data);\n    OH_LOG_INFO(LOG_APP, \"tsfn is called, data is: \\\"%{public}s\\\"\", str);\n    // 业务逻辑已省略，应该包括开发者额外创建的资源的释放逻辑\n};\n};\n\n// 该方法需注册到模块Index.d.ts, 注册名为 myTsfnDemo, 接口描述如下\n// export const myTsfnDemo: () => void;\nnapi_value MyTsfnDemo(napi_env env, napi_callback_info info) {\n    OH_LOG_ERROR(LOG_APP, \"MyTsfnDemo is called\");\n    napi_value workName = nullptr;\n    napi_create_string_utf8(env, \"MyTsfnWork\", NAPI_AUTO_LENGTH, &workName);\n    MyTsfnContext *myContext = new MyTsfnContext(env, workName);\n    if (myContext->GetTsfn() == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"failed to create tsfn\");\n        delete myContext;\n        return nullptr;\n    };\n    char *data0 = new char[]{\"Im call in ArkTS Thread\"};\n    if (!myContext->Call(data0)) {\n        OH_LOG_INFO(LOG_APP, \"call tsfn failed\");\n    };\n\n    // 创建一个线程，模拟异步场景\n    std::thread(\n        [](MyTsfnContext *myCtx) {\n            if (!myCtx->Acquire()) {\n                OH_LOG_ERROR(LOG_APP, \"acquire tsfn failed\");\n                return;\n            };\n            char *data1 = new char[]{\"Im call in std::thread\"};\n            // 非必要操作, 仅用于异步流程tsfn仍有效\n            if (!myCtx->Call(data1)) {\n                OH_LOG_ERROR(LOG_APP, \"call tsfn failed\");\n            };\n            // 休眠 5s, 模拟耗时场景, env退出后, 异步任务仍未执行完成\n            sleep(5);\n            // 此时异步任务已执行完成, 但tsfn已被释放并置为 nullptr\n            char *data2 = new char[]{\"Im call after work\"};\n            if (!myCtx->Call(data2) && !myCtx->Release()) {\n                OH_LOG_ERROR(LOG_APP, \"call and release tsfn failed\");\n                delete myCtx;\n            }\n        },\n        myContext)\n        .detach();\n    return nullptr;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//Index.d.ts\nexport const myTsfnDemo: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下内容为主线程逻辑，主要用于创建 worker 线程并通知其执行任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 主线程 Index.ets\nimport  {worker, MessageEvents } from '@kit.ArkTS';\n\nconst mWorker = new worker.ThreadWorker('../workers/worker');\nmWorker.onmessage = (e: MessageEvents) => {\n    const action: string | undefined = e.data?.action;\n    if (action === 'kill') {\n        mWorker.terminate();\n    }\n}\n\n// 触发方式的注册已省略\nmWorker.postMessage({action: 'tsfn-demo'});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下内容为Worker线程逻辑，主要用于触发Native任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// worker.ets\nimport  {worker, ThreadWorkerGlobalScope, MessageEvents} from '@kit.ArkTS';\nimport napiModule from 'libentry.so'; // libentry.so: Node-API 库的模块名称\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n    const action: string | undefined = e.data?.action;\n    if (action === 'tsfn-demo') {\n        // 触发 C++ 层的 tsfn demo\n        napiModule.myTsfnDemo();\n        // 通知主线程结束 worker\n        workerPort.postMessage({action: 'kill'});\n    };\n}\n"
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