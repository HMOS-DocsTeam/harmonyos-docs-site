"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["372623"], {
571358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_trigger_exceptions_use_jsvm_trigger_exceptions_md_834_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-trigger-exceptions-use-jsvm-trigger-exceptions-md-834.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_trigger_exceptions_use_jsvm_trigger_exceptions_md_834_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-trigger-exceptions/use-jsvm-trigger-exceptions","title":"使用JSVM-API进行异常的定制化处理","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-trigger-exceptions/use-jsvm-trigger-exceptions.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-trigger-exceptions","slug":"/coding/jsvm/jsvm-use/use-jsvm-trigger-exceptions/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-trigger-exceptions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"title":"使用JSVM-API进行异常的定制化处理","sidebar_position":23,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-trigger-exceptions","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API判断给定的两个JS value是否严格相等","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-strict-equals/"},"next":{"title":"使用JSVM-API感知JSVM引擎生命周期管理","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-trigger-gc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-trigger-exceptions/use-jsvm-trigger-exceptions.md


const frontMatter = {
	title: '使用JSVM-API进行异常的定制化处理',
	sidebar_position: 23,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-trigger-exceptions',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API进行异常的定制化处理';

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
  "value": "OH_JSVM_SetHandlerForOOMError",
  "id": "oh_jsvm_sethandlerforoomerror",
  "level": 3
}, {
  "value": "OH_JSVM_SetHandlerForFatalError",
  "id": "oh_jsvm_sethandlerforfatalerror",
  "level": 3
}, {
  "value": "OH_JSVM_SetHandlerForPromiseReject",
  "id": "oh_jsvm_sethandlerforpromisereject",
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
    strong: "strong",
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
        id: "使用jsvm-api进行异常的定制化处理",
        children: "使用JSVM-API进行异常的定制化处理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API提供了一组用于处理JSVM异常的接口。通过这些接口，可以向JSVM注册回调函数。当JSVM触发异常时，会调用已注册的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些接口提供对JS引擎错误的定制化处理，帮助开发者管理运行时错误和异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当JS引擎遇到内存不足的问题时，系统会抛出一个OOM Error，如果开发者提前向JS引擎中注册了OOM Error的处理函数，系统就会调用这个设置的处理函数，开发者可以在处理函数中执行一些清理或者日志记录操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当JS引擎发生致命错误，例如执行JavaScript代码时出现无法恢复的错误，系统会抛出一个Fatal Error，并调用用户预先设置的处理函数。在该处理函数中，可以输出额外日志或报告错误，避免程序直接崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当JavaScript中的Promise被拒绝，而这个拒绝又没有被catch处理时，系统就会抛出一个Promise Reject，同时系统会调用用户提前设置的处理Promise Reject的函数。在这个处理函数中，用户可以处理未捕获的Promise拒绝。"
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
            children: "OH_JSVM_SetHandlerForOOMError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在VM中设置处理OOM Error的函数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetHandlerForFatalError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在VM中设置处理Fatal Error的函数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetHandlerForPromiseReject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在VM中设置处理Promise Reject的函数"
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
      id: "oh_jsvm_sethandlerforoomerror",
      children: "OH_JSVM_SetHandlerForOOMError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OH_JSVM_SetHandlerForOOMError，用户可以设置处理OOM Error的函数。当多次调用这个API进行函数设置时，仅最后一次设置会生效。当用户传入的设置函数为NULL时，则表示取消之前设置的处理函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "cpp部分代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <csetjmp>\n#include <vector>\n\nstatic jmp_buf buf;\nstatic bool oomHandlerFinished = false;\n\nvoid OnOOMError(const char *location, const char *detail, bool isHeapOOM)\n{\n    oomHandlerFinished = true;\n    longjmp(buf, 1);\n}\n\nstatic JSVM_Value TriggerOOMError(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    oomHandlerFinished = false;\n    JSVM_VM vm;\n    JSVM_CALL(OH_JSVM_GetVM(env, &vm));\n    // 设置OOM Error处理函数\n    JSVM_CALL(OH_JSVM_SetHandlerForOOMError(vm, OnOOMError));\n    bool oomed = false;\n    setjmp(buf);\n    if (!oomed) {\n        oomed = true;\n        // 触发OOM\n        std::vector<JSVM_Value> arrayVec;\n        int loopCount = 1000;\n        for (int i = 0; i < loopCount; i++) {\n            JSVM_Value array;\n            JSVM_CALL(OH_JSVM_CreateArrayWithLength(env, 0xffffff, &array));\n            arrayVec.push_back(array);\n        }\n    }\n    if (oomHandlerFinished) {\n        OH_LOG_INFO(LOG_APP, \"JSVM Trigger OOM Error: success\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"JSVM Trigger OOM Error: failed\");\n    }\n    // 取消对OOM Error处理函数的设置\n    JSVM_CALL(OH_JSVM_SetHandlerForOOMError(vm, NULL));\n    JSVM_Value checked;\n    OH_JSVM_GetBoolean(env, true, &checked);\n    return checked;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = TriggerOOMError},\n};\nstatic JSVM_CallbackStruct *method = param;\n\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"triggerOOMError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例测试JS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(triggerOOMError();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM Trigger OOM Error: success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_sethandlerforfatalerror",
      children: "OH_JSVM_SetHandlerForFatalError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OH_JSVM_SetHandlerForFatalError，用户可以设置处理Fatal Error的函数。当多次调用这个API进行函数设置时，仅最后一次设置会生效。当用户传入的设置函数为NULL时，则表示取消之前设置的处理函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "cpp部分代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <csetjmp>\n#include <vector>\n\nstatic jmp_buf buf;\nstatic bool fatalHandlerFinished = false;\nvoid OnFatalError(const char *location, const char *message)\n{\n    fatalHandlerFinished = true;\n    OH_LOG_INFO(LOG_APP, \"Run in 106\");\n    longjmp(buf, 1);\n}\n\nstatic JSVM_Value TriggerFatalError(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    fatalHandlerFinished = false;\n    JSVM_VM vm;\n    JSVM_CALL(OH_JSVM_GetVM(env, &vm));\n    // 设置Fatal Error处理函数\n    JSVM_CALL(OH_JSVM_SetHandlerForFatalError(vm, OnFatalError));\n    bool fataled = false;\n    setjmp(buf);\n    if (!fataled) {\n        fataled = true;\n        std::vector<JSVM_Value> arrayVec;\n        int loopCount = 1000;\n        for (int i = 0; i < loopCount; i++) {\n            JSVM_Value array;\n            JSVM_CALL(OH_JSVM_CreateArrayWithLength(env, 0xffffff, &array));\n            arrayVec.push_back(array);\n        }\n    }\n    if (fatalHandlerFinished) {\n        OH_LOG_INFO(LOG_APP, \"JSVM Trigger Fatal Error: success\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"JSVM Trigger Fatal Error: failed\");\n    }\n    // 取消对Fatal Error处理函数的设置\n    JSVM_CALL(OH_JSVM_SetHandlerForFatalError(vm, NULL));\n    JSVM_Value checked;\n    OH_JSVM_GetBoolean(env, true, &checked);\n    return checked;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = TriggerFatalError},\n};\nstatic JSVM_CallbackStruct *method = param;\n\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"triggerFatalError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例测试JS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* srcCallNative = R\"JS(triggerFatalError())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM Trigger Fatal Error: success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_sethandlerforpromisereject",
      children: "OH_JSVM_SetHandlerForPromiseReject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OH_JSVM_SetHandlerForPromiseReject，用户可以设置处理Promise Reject的函数。当多次调用这个API进行函数设置时，仅最后一次设置会生效。当用户传入的设置函数为NULL时，则表示取消之前设置的处理函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "cpp部分代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static bool promiseRejectHandlerFinished = false;\n\nvoid OnPromiseReject(JSVM_Env env, JSVM_PromiseRejectEvent rejectEvent, JSVM_Value rejectInfo)\n{\n    bool result = false;\n    OH_JSVM_IsObject(env, rejectInfo, &result);\n    JSVM_Value promise;\n    JSVM_Value key1;\n    OH_JSVM_CreateStringUtf8(env, \"promise\", JSVM_AUTO_LENGTH, &key1);\n    OH_JSVM_GetProperty(env, rejectInfo, key1, &promise);\n    bool isPromise = false;\n    OH_JSVM_IsPromise(env, promise, &isPromise);\n    JSVM_Value value;\n    JSVM_Value key2;\n    OH_JSVM_CreateStringUtf8(env, \"value\", JSVM_AUTO_LENGTH, &key2);\n    OH_JSVM_GetProperty(env, rejectInfo, key2, &value);\n    JSVM_Value js_number;\n    OH_JSVM_CoerceToNumber(env, value, &js_number);\n    double res = 0;\n    OH_JSVM_GetValueDouble(env, js_number, &res);\n    if (res == 42 && isPromise) {\n        promiseRejectHandlerFinished = true;\n    }\n}\n\nstatic JSVM_Value TriggerPromiseReject(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    promiseRejectHandlerFinished = false;\n    JSVM_VM vm;\n    JSVM_CALL(OH_JSVM_GetVM(env, &vm));\n    // 设置Promise Reject处理函数\n    JSVM_CALL(OH_JSVM_SetHandlerForPromiseReject(vm, OnPromiseReject));\n    JSVM_Value strVal;\n    char *str = \"new Promise((resolve, reject) => { reject(42); })\";\n    OH_JSVM_CreateStringUtf8(env, str, JSVM_AUTO_LENGTH, &strVal);\n    JSVM_Script script;\n    OH_JSVM_CompileScript(env, strVal, nullptr, 0, false, nullptr, &script);\n    JSVM_Value result;\n    JSVM_Status status = OH_JSVM_RunScript(env, script, &result);\n\n    if (promiseRejectHandlerFinished) {\n        OH_LOG_INFO(LOG_APP, \"JSVM Trigger Promise Reject: success\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"JSVM Trigger Promise Reject: failed\");\n    }\n    // 取消对Promise Reject处理函数的设置\n    JSVM_CALL(OH_JSVM_SetHandlerForPromiseReject(vm, NULL));\n    JSVM_Value checked;\n    OH_JSVM_GetBoolean(env, true, &checked);\n    return checked;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = TriggerPromiseReject},\n};\nstatic JSVM_CallbackStruct *method = param;\n\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"triggerPromiseReject\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例测试JS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* srcCallNative = R\"JS(triggerPromiseReject())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM Trigger Promise Reject: success\n"
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