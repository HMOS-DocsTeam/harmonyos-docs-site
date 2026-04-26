"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["237474"], {
783958(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_about_sendable_reference_use_napi_about_sendable_reference_md_e7d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-about-sendable-reference-use-napi-about-sendable-reference-md-e7d.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_about_sendable_reference_use_napi_about_sendable_reference_md_e7d_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-sendable-reference/use-napi-about-sendable-reference","title":"使用扩展的Node-API接口创建对ArkTS对象的Sendable强引用","description":"HarmonyOS的API提供进程内跨ArkTS线程共享的强引用能力。相较于napi\\\\ref，napi\\\\sendable\\\\_ref支持跨ArkTS线程操作，但同时也存在一些限制。","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-sendable-reference/use-napi-about-sendable-reference.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-sendable-reference","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-sendable-reference/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-sendable-reference/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"使用扩展的Node-API接口创建对ArkTS对象的Sendable强引用","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-sendable-reference","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API调用返回值为promise的ArkTS方法","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-method-promise/"},"next":{"title":"Node-API常见问题","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/use-napi-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-sendable-reference/use-napi-about-sendable-reference.md


const frontMatter = {
	title: '使用扩展的Node-API接口创建对ArkTS对象的Sendable强引用',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-sendable-reference',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用扩展的Node-API接口创建对ArkTS对象的Sendable强引用';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "Sendable强引用对象关联接口",
  "id": "sendable强引用对象关联接口",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
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
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "使用扩展的node-api接口创建对arkts对象的sendable强引用",
        children: "使用扩展的Node-API接口创建对ArkTS对象的Sendable强引用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS的API提供进程内跨ArkTS线程共享的强引用能力。相较于napi_ref，napi_sendable_ref支持跨ArkTS线程操作，但同时也存在一些限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi#napi_create_strong_sendable_reference",
        children: "napi_create_strong_sendable_reference"
      }), "接口创建指向Sendable ArkTS对象的Sendable强引用，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi#napi_get_strong_sendable_reference_value",
        children: "napi_get_strong_sendable_reference_value"
      }), "获取被引用的ArkTS对象，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi#napi_delete_strong_sendable_reference",
        children: "napi_delete_strong_sendable_reference"
      }), "删除Sendable强引用。这些操作既可以在同一ArkTS线程进行，也可在不同ArkTS线程进行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendable强引用对象关联接口",
      children: "Sendable强引用对象关联接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/napi/napi#napi_create_strong_sendable_reference",
              children: "napi_create_strong_sendable_reference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向Sendable ArkTS对象的Sendable强引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/napi/napi#napi_delete_strong_sendable_reference",
              children: "napi_delete_strong_sendable_reference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除Sendable强引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/napi/napi#napi_get_strong_sendable_reference_value",
              children: "napi_get_strong_sendable_reference_value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Sendable强引用获取其关联的ArkTS对象值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// napi_init.cpp\n#include \"napi/native_api.h\"\n#include <cstdlib>\n#include <thread>\n\n#define ASSERT_EQ(a, b) \\\ndo {                    \\\n   if (a != b) {        \\\n      std::abort();     \\\n   }                    \\\n} while(0)\n\n#define ASSERT_CHECK_CALL(a) ASSERT_EQ(a, napi_ok)\n\nnapi_sendable_ref sRef = nullptr;\nstatic napi_value CreateSendableRef(napi_env env, napi_callback_info info)\n{\n   size_t argc = 1;\n   napi_value args[1] = {nullptr};\n\n   ASSERT_CHECK_CALL(napi_get_cb_info(env, info, &argc, args, nullptr, nullptr));\n   ASSERT_CHECK_CALL(napi_create_strong_sendable_reference(env, args[0], &sRef));\n   \n   napi_value str = nullptr;\n   ASSERT_CHECK_CALL(napi_create_string_utf8(env, \"success\", NAPI_AUTO_LENGTH, &str));\n   return str;\n}\n\nstatic napi_value GetAndModifySendableRefValueInArkRuntime(napi_env env, napi_callback_info info)\n{\n   // 此处省略调用者在主线程的业务逻辑\n   // ...\n   \n   // 此处模拟调用者在其他ArkTS线程上获取napi_sendable_ref内的共享对象操作\n   std::thread t1([]() {\n      napi_env newEnv = nullptr;\n      ASSERT_CHECK_CALL(napi_create_ark_runtime(&newEnv));\n      napi_handle_scope scope = nullptr;\n      ASSERT_CHECK_CALL(napi_open_handle_scope(newEnv, &scope));\n      if (!sRef) {\n         std::abort();\n      }\n      napi_value sObj = nullptr;\n      ASSERT_CHECK_CALL(napi_get_strong_sendable_reference_value(newEnv, sRef, &sObj));\n      \n      // 校验sObj内容\n      napi_value numValue = nullptr;\n      ASSERT_CHECK_CALL(napi_get_named_property(newEnv, sObj, \"num\", &numValue));\n      int32_t num = 0;\n      ASSERT_CHECK_CALL(napi_get_value_int32(newEnv, numValue, &num));\n      ASSERT_EQ(num, 1111);\n      \n      // 修改sObj内容\n      napi_value newNum = nullptr;\n      ASSERT_CHECK_CALL(napi_create_int32(newEnv, num * 2, &newNum));\n      ASSERT_CHECK_CALL(napi_set_named_property(newEnv, sObj, \"num\", newNum));\n      ASSERT_CHECK_CALL(napi_close_handle_scope(newEnv, scope));\n      ASSERT_CHECK_CALL(napi_destroy_ark_runtime(&newEnv));\n   });\n   t1.join();\n\n   napi_value str = nullptr;\n   ASSERT_CHECK_CALL(napi_create_string_utf8(env, \"success\", NAPI_AUTO_LENGTH, &str));\n   return str;\n}\n\nstatic napi_value GetSendableRefValueInWorkerOrTaskpool(napi_env env, napi_callback_info info)\n{\n   // 此处省略调用者在worker/taskpool线程的业务逻辑\n   // ...\n\n   // 此处模拟调用者在其他Worker/Taskpool线程上获取napi_sendable_ref内的共享对象操作\n   if (!sRef) {\n      napi_value undefined = nullptr;\n      napi_get_undefined(env, &undefined);\n      return undefined;\n   }\n   napi_value sObj = nullptr;\n   ASSERT_CHECK_CALL(napi_get_strong_sendable_reference_value(env, sRef, &sObj));\n\n   // 校验sObj内容\n   napi_value numValue = nullptr;\n   ASSERT_CHECK_CALL(napi_get_named_property(env, sObj, \"num\", &numValue));\n   int32_t num = 0;\n   ASSERT_CHECK_CALL(napi_get_value_int32(env, numValue, &num));\n   ASSERT_EQ(num, 1111);\n\n   return sObj;\n}\n\nstatic napi_value CheckAndDeleteSendableRef(napi_env env, napi_callback_info info)\n{\n   if (!sRef) {\n      napi_value undefined = nullptr;\n      ASSERT_CHECK_CALL(napi_get_undefined(env, &undefined));\n      return undefined;\n   }\n\n   // 校验和删除ref的动作也可放在ArkTS线程中，此处示例为主线程\n   // 校验sObj内容\n   napi_value sObj = nullptr;\n   ASSERT_CHECK_CALL(napi_get_strong_sendable_reference_value(env, sRef, &sObj));\n   napi_value numValue = nullptr;\n   ASSERT_CHECK_CALL(napi_get_named_property(env, sObj, \"num\", &numValue));\n   int32_t num = 0;\n   ASSERT_CHECK_CALL(napi_get_value_int32(env, numValue, &num));\n   ASSERT_EQ(num, 2222);\n\n   ASSERT_CHECK_CALL(napi_delete_strong_sendable_reference(env, sRef));\n   sRef = nullptr;\n\n   // 删除SendableRef\n   napi_value str = nullptr;\n   ASSERT_CHECK_CALL(napi_create_string_utf8(env, \"success\", NAPI_AUTO_LENGTH, &str));\n   return str;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n   napi_property_descriptor desc[] = {\n      { \"createSendableRef\", nullptr, CreateSendableRef, nullptr, nullptr, nullptr, napi_default, nullptr },\n      { \"getAndModifySendableRefValueInArkRuntime\", nullptr, GetAndModifySendableRefValueInArkRuntime,\n            nullptr,nullptr, nullptr, napi_default, nullptr },\n      { \"getSendableRefValueInWorkerOrTaskpool\", nullptr, GetSendableRefValueInWorkerOrTaskpool,\n            nullptr,nullptr, nullptr, napi_default, nullptr },\n      { \"checkAndDeleteSendableRef\", nullptr, CheckAndDeleteSendableRef,\n            nullptr, nullptr, nullptr, napi_default, nullptr },\n   };\n   napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n   return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n   .nm_version = 1,\n   .nm_flags = 0,\n   .nm_filename = nullptr,\n   .nm_register_func = Init,\n   .nm_modname = \"entry\",\n   .nm_priv = ((void*)0),\n   .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n   napi_module_register(&demoModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口声明"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.d.ts\nexport const createSendableRef: (a: object) => string;\nexport const getAndModifySendableRefValueInArkRuntime: () => string;\nexport const getSendableRefValueInWorkerOrTaskpool: () => object;\nexport const checkAndDeleteSendableRef: () => string;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS代码示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\nimport { MessageEvents, taskpool, worker} from '@kit.ArkTS'\n\nconst DOMAIN = 0x0000;\n\n@Sendable\nclass SendableClass {\n   num: number = 1111;\n}\n\n@Concurrent\nfunction TaskpoolFunc(data: string) {\n   console.info('testTag, ' + data);\n   let sObj = testNapi.getSendableRefValueInWorkerOrTaskpool() as SendableClass;\n   sObj.num = 2222;\n}\n\nasync function concurrentFunc() {\n   let sObj = new SendableClass();\n   hilog.info(DOMAIN, 'testTag', 'Test CreateSendableRef result = %{public}s',\n      testNapi.createSendableRef(sObj));\n   const task: taskpool.Task = new taskpool.Task(TaskpoolFunc,\n      'Please check sendable ref value in taskpool thread');\n   await taskpool.execute(task);\n   let ret: string = testNapi.checkAndDeleteSendableRef();\n   return ret;\n}\n\n@Entry\n@Component\nstruct Index {\n   @State TestMsg1: string = 'TestInArkRuntime';\n   @State TestMsg2: string = 'TestInWorker';\n   @State TestMsg3: string = 'TestInTaskpool';\n\n   build() {\n      Row() {\n         Column() {\n            Button(this.TestMsg1)\n               .fontSize($r('app.float.page_text_font_size'))\n               .fontWeight(FontWeight.Bold)\n               .onClick(() => {\n                  let sObj = new SendableClass();\n                  hilog.info(DOMAIN, 'testTag', 'Test CreateSendableRef result = %{public}s',\n                     testNapi.createSendableRef(sObj));\n                  hilog.info(DOMAIN, 'testTag', 'Test GetAndModifySendableRefValue result = %{public}s',\n                     testNapi.getAndModifySendableRefValueInArkRuntime());\n                  this.TestMsg1 = testNapi.checkAndDeleteSendableRef();\n               })\n            Button(this.TestMsg2)\n               .fontSize($r('app.float.page_text_font_size'))\n               .fontWeight(FontWeight.Bold)\n               .onClick(() => {\n                  let sObj = new SendableClass();\n                  hilog.info(DOMAIN, 'testTag', 'Test CreateSendableRef result = %{public}s',\n                  testNapi.createSendableRef(sObj));\n                  const worker1: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n                  worker1.onmessage = (e: MessageEvents) => {\n                     let data: string = e.data;\n                     hilog.info(DOMAIN, 'testTag', data);\n                     this.TestMsg2 = testNapi.checkAndDeleteSendableRef();\n                  }\n                  worker1.postMessage('Please check sendable ref value in worker thread');\n               })\n            Button(this.TestMsg3)\n               .fontSize($r('app.float.page_text_font_size'))\n               .fontWeight(FontWeight.Bold)\n               .onClick(() => {\n                  concurrentFunc().then((ret) => {\n                     this.TestMsg3 = ret;\n                  });\n               })\n         }\n         .width('100%')\n      }\n      .height('100%')\n   }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Worker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport testNapi from 'libentry.so';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0000;\n\n@Sendable\nclass SendableClass {\n   num: number = 1111;\n}\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n/**\n * Defines the event handler to be called when the worker thread receives a message sent by the host thread.\n * The event handler is executed in the worker thread.\n *\n * @param event message data\n */\nworkerPort.onmessage = (event: MessageEvents) => {\n   let data: string = event.data;\n   hilog.info(DOMAIN, 'testTag', data);\n   let sObj = testNapi.getSendableRefValueInWorkerOrTaskpool() as SendableClass;\n   sObj.num = 2222;\n   workerPort.postMessage('Please check sendable ref value and delete ref');\n};\n\n/**\n * Defines the event handler to be called when the worker receives a message that cannot be deserialized.\n * The event handler is executed in the worker thread.\n *\n * @param event message data\n */\nworkerPort.onmessageerror = (event: MessageEvents) => {\n};\n\n/**\n * Defines the event handler to be called when an exception occurs during worker execution.\n * The event handler is executed in the worker thread.\n *\n * @param event error message\n */\nworkerPort.onerror = (event: ErrorEvent) => {\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["只能为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
          children: "Sendable对象"
        }), "创建napi_sendable_ref。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_sendable_ref可跨ArkTS线程使用，在多线程操作时，调用者需自己保证释放时机，防止出现释放后使用的问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一进程内，同时存活的napi_sendable_ref最大数量为51200个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_sendable_ref与其他引用的类型不同，因此不可将napi_ref、napi_strong_ref等其他引用强转成napi_sendable_ref。napi_delete_strong_sendable_reference和napi_get_strong_sendable_reference_value接口仅允许接收由napi_create_strong_sendable_reference创建的napi_sendable_ref。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在使用napi_create_strong_sendable_reference、napi_get_strong_sendable_reference_value和napi_delete_strong_sendable_reference接口时，调用者需要保证传入的env参数是当前调用接口的ArkTS线程环境对象，避免将其他ArkTS线程的env作为参数传入导致出现", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ark-runtime-detection#section19357830121120",
          children: "多线程安全问题"
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