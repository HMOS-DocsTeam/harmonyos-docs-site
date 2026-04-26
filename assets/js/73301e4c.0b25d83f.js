"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["530606"], {
400517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_trigger_gc_use_jsvm_trigger_gc_md_733_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-trigger-gc-use-jsvm-trigger-gc-md-733.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_trigger_gc_use_jsvm_trigger_gc_md_733_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-trigger-gc/use-jsvm-trigger-gc","title":"使用JSVM-API感知JSVM引擎生命周期管理","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-trigger-gc/use-jsvm-trigger-gc.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-trigger-gc","slug":"/coding/jsvm/jsvm-use/use-jsvm-trigger-gc/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-trigger-gc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"title":"使用JSVM-API感知JSVM引擎生命周期管理","sidebar_position":24,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-trigger-gc","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API进行异常的定制化处理","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-trigger-exceptions/"},"next":{"title":"使用JSVM-API接口进行private相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-private/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-trigger-gc/use-jsvm-trigger-gc.md


const frontMatter = {
	title: '使用JSVM-API感知JSVM引擎生命周期管理',
	sidebar_position: 24,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-trigger-gc',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API感知JSVM引擎生命周期管理';

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
  "value": "OH_JSVM_AddHandlerForGC &amp; OH_JSVM_RemoveHandlerForGC",
  "id": "oh_jsvm_addhandlerforgc--oh_jsvm_removehandlerforgc",
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
        id: "使用jsvm-api感知jsvm引擎生命周期管理",
        children: "使用JSVM-API感知JSVM引擎生命周期管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API提供了注册回调函数的能力，用于监测JavaScript虚拟机的内存GC。开发者可以在垃圾回收前后添加自定义逻辑，从而在垃圾回收时执行优化、调试或性能监控操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JavaScript中，内存的垃圾回收是自动进行的，用户并不直接感知JavaScript虚拟机的GC行为。每次GC执行之前，JS引擎会先进入一个\"Prologue\"阶段。每次GC执行之后，JS引擎会进入一个\"Epilogue\"阶段。\"Prologue\"阶段是GC的初始阶段，主要目标是做一些准备工作，以确保垃圾回收能够顺利进行。\"Epilogue\"阶段则是垃圾回收的最终清理和整理，确保内存恢复到一个正常的状态，并为下一次分配做好准备。在这两个阶段，JS引擎会分别调用用户提前注册的函数。用户可以在\"Prologue\"阶段所执行的注册函数中暂停某些任务、记录内存使用情况、执行性能调优等。在\"Epilogue\"阶段所执行的注册函数中，也可以去记录GC后的内存状态、启动后续的任务等等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API提供了OH_JSVM_AddHandlerForGC接口，可以在VM中注册回调函数。通过传入JSVM_CB_TRIGGER_BEFORE_GC来控制回调函数在\"Prologue\"阶段执行；通过传入JSVM_CB_TRIGGER_AFTER_GC来控制回调函数在\"Epilogue\"阶段执行。通过OH_JSVM_RemoveHandlerForGC，可以从VM中移除注册过的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_AddHandlerForGC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于向VM中注册回调函数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_RemoveHandlerForGC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于从VM中移除注册过的回调函数"
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
      id: "oh_jsvm_addhandlerforgc--oh_jsvm_removehandlerforgc",
      children: "OH_JSVM_AddHandlerForGC & OH_JSVM_RemoveHandlerForGC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以多次调用OH_JSVM_AddHandlerForGC向VM注册回调函数，所有注册的回调函数都会生效。注册时，以回调函数指针和native-data作为键。如果多次注册存在相同的键，则视为无效注册，并返回JSVM_INVALID_ARG错误码。在相同触发条件下，回调函数的回调顺序与注册顺序不严格一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OH_JSVM_RemoveHandlerForGC可以从VM中移除注册过的回调函数。重复移除具有相同key的回调函数，则会判定为无效移除，并返回JSVM_INVALID_ARG错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "cpp部分代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include <iostream>\n\nstatic bool before_flag1 = false;\nstatic bool before_flag2 = false;\nstatic bool after_flag1 = false;\nstatic bool after_flag2 = false;\n\nvoid OnBeforeGC(JSVM_VM vm, JSVM_GCType gcType, JSVM_GCCallbackFlags flags, void *data)\n{\n    OH_LOG_INFO(LOG_APP, \"== before GC ==\");\n    OH_LOG_INFO(LOG_APP, \"gc type: %{public}d\", gcType);\n    OH_LOG_INFO(LOG_APP, \"gc flag: %{public}d\", flags);\n    before_flag1 = true;\n}\n\nvoid OnBeforeGC2(JSVM_VM vm, JSVM_GCType gcType, JSVM_GCCallbackFlags flags, void *data)\n{\n    OH_LOG_INFO(LOG_APP, \"== before GC2 ==\");\n    OH_LOG_INFO(LOG_APP, \"gc type: %{public}d\", gcType);\n    OH_LOG_INFO(LOG_APP, \"gc flag: %{public}d\", flags);\n    OH_LOG_INFO(LOG_APP, \"data: %{public}d\", *(int*)data);\n    if (*(int*)data == 2024) {\n        before_flag2 = true;\n    }\n}\n\nvoid OnAfterGC(JSVM_VM vm, JSVM_GCType gcType, JSVM_GCCallbackFlags flags, void *data)\n{\n    after_flag1 = true;\n}\n\nvoid OnAfterGC2(JSVM_VM vm, JSVM_GCType gcType, JSVM_GCCallbackFlags flags, void *data)\n{\n    after_flag2 = true;\n}\n\nvoid OnAfterGC3(JSVM_VM vm, JSVM_GCType gcType, JSVM_GCCallbackFlags flags, void *data)\n{\n    after_flag2 = true;\n}\n\nstatic JSVM_Value TriggerGC(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    bool remove_repeated = false;\n    bool remove_notAdded = false;\n    bool add_repeated = false;\n    before_flag1 = false;\n    before_flag2 = false;\n    after_flag1 = false;\n    after_flag2 = false;\n    JSVM_VM vm;\n    OH_JSVM_GetVM(env, &vm);\n    // 设置两个回调函数，在GC执行之前触发回调\n    int data = 2024;\n    JSVM_CALL(OH_JSVM_AddHandlerForGC(vm, JSVM_CB_TRIGGER_BEFORE_GC, OnBeforeGC, JSVM_GC_TYPE_ALL, NULL));\n    JSVM_CALL(OH_JSVM_AddHandlerForGC(vm, JSVM_CB_TRIGGER_BEFORE_GC, OnBeforeGC2, JSVM_GC_TYPE_ALL, (void*)(&data)));\n    // 设置两个回调函数，在GC执行之后触发回调\n    JSVM_CALL(OH_JSVM_AddHandlerForGC(vm, JSVM_CB_TRIGGER_AFTER_GC, OnAfterGC, JSVM_GC_TYPE_ALL, NULL));\n    JSVM_CALL(OH_JSVM_AddHandlerForGC(vm, JSVM_CB_TRIGGER_AFTER_GC, OnAfterGC2, JSVM_GC_TYPE_ALL, NULL));\n    // (OnAfterGC2, NULL)的组合已经注册过了，重复注册为无效行为\n    if (OH_JSVM_AddHandlerForGC(vm, JSVM_CB_TRIGGER_AFTER_GC, OnAfterGC2, JSVM_GC_TYPE_ALL, NULL) == JSVM_INVALID_ARG) {\n        add_repeated = true;\n    }\n    // 移除OnAfter2回调函数\n    JSVM_CALL(OH_JSVM_RemoveHandlerForGC(vm, JSVM_CB_TRIGGER_AFTER_GC, OnAfterGC2, NULL));\n    // 重复移除OnAfter2属于无效用法\n    if (OH_JSVM_RemoveHandlerForGC(vm, JSVM_CB_TRIGGER_AFTER_GC, OnAfterGC2, NULL) == JSVM_INVALID_ARG) {\n        remove_repeated = true;\n    }\n    // 移除从未设置过的函数属于无效用法\n    if (OH_JSVM_RemoveHandlerForGC(vm, JSVM_CB_TRIGGER_AFTER_GC, OnAfterGC3, NULL) == JSVM_INVALID_ARG) {\n        remove_notAdded = true;\n    }\n    // 通知引擎当前存在比较大的内存压力，能大概率触发JS引擎的GC流程。\n    JSVM_CALL(OH_JSVM_MemoryPressureNotification(env, JSVM_MEMORY_PRESSURE_LEVEL_CRITICAL));\n    if ((before_flag1) &&\n        (before_flag2) &&\n        (after_flag1) &&\n        (!after_flag2) &&\n        (remove_repeated) &&\n        (remove_notAdded) &&\n        (add_repeated)) {\n        OH_LOG_INFO(LOG_APP, \"JSVM Trigger GC: success\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"JSVM Trigger GC: failed\");\n    }\n    JSVM_Value checked;\n    OH_JSVM_GetBoolean(env, true, &checked);\n    return checked;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = TriggerGC},\n};\nstatic JSVM_CallbackStruct *method = param;\n\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"triggerGC\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例测试JS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(triggerGC();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出下面结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "== before GC ==\ngc type: 4\ngc flag: 4\n== before GC2 ==\ngc type: 4\ngc flag: 4\ndata: 2024\nJSVM Trigger GC: success\n"
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