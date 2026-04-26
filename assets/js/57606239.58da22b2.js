"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["181078"], {
899455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_m_heapstatistics_debugger_cpuprofiler_heapsnapshot_m_heapstatistics_debugger_cpuprofiler_heapsnapshot_md_576_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-m-heapstatistics-debugger-cpuprofiler-heapsnapshot-m-heapstatistics-debugger-cpuprofiler-heapsnapshot-md-576.json
var site_docs_coding_jsvm_jsvm_use_m_heapstatistics_debugger_cpuprofiler_heapsnapshot_m_heapstatistics_debugger_cpuprofiler_heapsnapshot_md_576_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/m-heapstatistics-debugger-cpuprofiler-heapsnapshot/m-heapstatistics-debugger-cpuprofiler-heapsnapshot","title":"使用JSVM-API接口进行JavaScript代码调试调优","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/m-heapstatistics-debugger-cpuprofiler-heapsnapshot/m-heapstatistics-debugger-cpuprofiler-heapsnapshot.md","sourceDirName":"coding/jsvm/jsvm-use/m-heapstatistics-debugger-cpuprofiler-heapsnapshot","slug":"/coding/jsvm/jsvm-use/m-heapstatistics-debugger-cpuprofiler-heapsnapshot/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/m-heapstatistics-debugger-cpuprofiler-heapsnapshot/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"使用JSVM-API接口进行JavaScript代码调试调优","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/m-heapstatistics-debugger-cpuprofiler-heapsnapshot","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行错误处理开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-error/"},"next":{"title":"使用JSVM-API接口进行生命周期相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-life-cycle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/m-heapstatistics-debugger-cpuprofiler-heapsnapshot/m-heapstatistics-debugger-cpuprofiler-heapsnapshot.md


const frontMatter = {
	title: '使用JSVM-API接口进行JavaScript代码调试调优',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/m-heapstatistics-debugger-cpuprofiler-heapsnapshot',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行JavaScript代码调试调优';

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
  "value": "OH_JSVM_GetVM",
  "id": "oh_jsvm_getvm",
  "level": 3
}, {
  "value": "OH_JSVM_GetHeapStatistics",
  "id": "oh_jsvm_getheapstatistics",
  "level": 3
}, {
  "value": "OH_JSVM_StartCpuProfiler",
  "id": "oh_jsvm_startcpuprofiler",
  "level": 3
}, {
  "value": "OH_JSVM_StopCpuProfiler",
  "id": "oh_jsvm_stopcpuprofiler",
  "level": 3
}, {
  "value": "OH_JSVM_TakeHeapSnapshot",
  "id": "oh_jsvm_takeheapsnapshot",
  "level": 3
}, {
  "value": "OH_JSVM_OpenInspector",
  "id": "oh_jsvm_openinspector",
  "level": 3
}, {
  "value": "OH_JSVM_CloseInspector",
  "id": "oh_jsvm_closeinspector",
  "level": 3
}, {
  "value": "OH_JSVM_WaitForDebugger",
  "id": "oh_jsvm_waitfordebugger",
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
        id: "使用jsvm-api接口进行javascript代码调试调优",
        children: "使用JSVM-API接口进行JavaScript代码调试调优"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些JSVM-API接口涵盖了虚拟机实例检索、内存分析、性能剖析和调试支持，为优化代码性能及提升开发效率提供了有力的支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "JSVM"
          })
        }), "：JavaScript虚拟机是执行JavaScript代码的环境。它负责解析和执行JavaScript代码，管理内存，并提供与其他系统资源的交互。接口如OH_JSVM_GetVM用于检索特定环境的虚拟机实例，这是JSVM管理的基本操作之一。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "调试（debug）"
          })
        }), "：调试是程序开发中的一项重要活动，它涉及到定位、分析和修复代码中的错误。OH_JSVM_OpenInspector和OH_JSVM_CloseInspector接口提供了在特定主机和端口上激活和关闭inspector的功能，inspector是一个用于调试JavaScript代码的工具，允许开发者实时查看和交互程序的运行状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_GetVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将检索给定环境的虚拟机实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetHeapStatistics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一组虚拟机堆的统计数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_StartCpuProfiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并启动一个CPU profiler。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_StopCpuProfiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止CPU profiler并将结果输出到流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_TakeHeapSnapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前堆快照并将其输出到流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_OpenInspector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定的主机和端口上激活inspector，将用来调试JS代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_OpenInspectorWithName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于传入的 pid 和 name 激活 inspector。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CloseInspector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试关闭剩余的所有inspector连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_WaitForDebugger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待主机与inspector建立socket连接，连接建立后程序将继续运行。发送Runtime.runIfWaitingForDebugger命令。"
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
      }), "，本文仅展示接口对应的C++代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvm",
      children: "OH_JSVM_GetVM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索给定环境中的虚拟机实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n\n// OH_JSVM_GetVM的样例方法\nstatic JSVM_Value GetVM(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取当前虚拟机对象,后续可以进行与虚拟机相关的操作或分析\n    JSVM_VM testVm;\n    JSVM_Status status = OH_JSVM_GetVM(env, &testVm);\n    JSVM_Value result = nullptr;\n    if (status != JSVM_OK || testVm == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_GetVM: failed\");\n        OH_JSVM_GetBoolean(env, true, &result);\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetVM: success\");\n        OH_JSVM_GetBoolean(env, false, &result);\n    }\n    return result;\n}\n// GetVM注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetVM},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetVM方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getVM\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "样例测试JS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(getVM())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetVM: success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getheapstatistics",
      children: "OH_JSVM_GetHeapStatistics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一组虚拟机堆的统计数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n\n// OH_JSVM_GetHeapStatistics的样例方法\nvoid PrintHeapStatistics(JSVM_HeapStatistics result)\n{\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap totalHeapSize: %{public}zu\", result.totalHeapSize);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap totalHeapSizeExecutable: %{public}zu\", result.totalHeapSizeExecutable);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap totalPhysicalSize: %{public}zu\", result.totalPhysicalSize);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap totalAvailableSize: %{public}zu\", result.totalAvailableSize);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap usedHeapSize: %{public}zu\", result.usedHeapSize);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap heapSizeLimit: %{public}zu\", result.heapSizeLimit);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap mallocedMemory: %{public}zu\", result.mallocedMemory);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap externalMemory: %{public}zu\", result.externalMemory);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap peakMallocedMemory: %{public}zu\", result.peakMallocedMemory);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap numberOfNativeContexts: %{public}zu\", result.numberOfNativeContexts);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap numberOfDetachedContexts: %{public}zu\", result.numberOfDetachedContexts);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap totalGlobalHandlesSize: %{public}zu\", result.totalGlobalHandlesSize);\n    OH_LOG_INFO(LOG_APP, \"JSVM API heap usedGlobalHandlesSize: %{public}zu\", result.usedGlobalHandlesSize);\n}\n\nstatic JSVM_Value GetHeapStatistics(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取当前虚拟机对象\n    JSVM_VM testVm;\n    OH_JSVM_GetVM(env, &testVm);\n    // 获取虚拟机的堆统计信息\n    JSVM_HeapStatistics result;\n    OH_JSVM_GetHeapStatistics(testVm, &result);\n    // 打印虚拟机堆统计信息\n    PrintHeapStatistics(result);\n    // 返回虚拟机堆统计信息中‘本机上下文数量’\n    JSVM_Value nativeContextsCnt = nullptr;\n    OH_JSVM_CreateInt64(env, result.numberOfNativeContexts, &nativeContextsCnt);\n    return nativeContextsCnt;\n}\n// GetHeapStatistics注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetHeapStatistics},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetHeapStatistics方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getHeapStatistics\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "样例测试JS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(getHeapStatistics())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果（虚拟机堆的统计数据，会实时发生变化）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API heap totalHeapSize: 1597440\nJSVM API heap totalHeapSizeExecutable: 0\nJSVM API heap totalPhysicalSize: 1323008\nJSVM API heap totalAvailableSize: 1519203688\nJSVM API heap usedHeapSize: 178256\nJSVM API heap heapSizeLimit: 1518338048\nJSVM API heap mallocedMemory: 32848\nJSVM API heap externalMemory: 0\nJSVM API heap peakMallocedMemory: 40960\nJSVM API heap numberOfNativeContexts: 1\nJSVM API heap numberOfDetachedContexts: 0\nJSVM API heap totalGlobalHandlesSize: 8192\nJSVM API heap usedGlobalHandlesSize: 32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下接口的示例代码可以参考链接："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot",
        children: "JSVM-API调试&定位"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_startcpuprofiler",
      children: "OH_JSVM_StartCpuProfiler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并启动一个CPU profiler。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_stopcpuprofiler",
      children: "OH_JSVM_StopCpuProfiler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止CPU profiler并将结果输出到流中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_takeheapsnapshot",
      children: "OH_JSVM_TakeHeapSnapshot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前堆快照并输出到流中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_openinspector",
      children: "OH_JSVM_OpenInspector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在指定的主机和端口上激活inspector，用于调试JS码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_closeinspector",
      children: "OH_JSVM_CloseInspector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试关闭剩余的所有inspector连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_waitfordebugger",
      children: "OH_JSVM_WaitForDebugger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "等待主机与inspector建立socket连接。连接建立后，程序将继续运行并发送Runtime.runIfWaitingForDebugger命令。"
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