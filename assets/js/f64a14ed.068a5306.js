"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["277443"], {
135116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_memory_management_use_jsvm_memory_management_md_f64_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-memory-management-use-jsvm-memory-management-md-f64.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_memory_management_use_jsvm_memory_management_md_f64_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-memory-management/use-jsvm-memory-management","title":"使用JSVM-API进行内存管理","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-memory-management/use-jsvm-memory-management.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-memory-management","slug":"/coding/jsvm/jsvm-use/use-jsvm-memory-management/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-memory-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"title":"使用JSVM-API进行内存管理","sidebar_position":21,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-memory-management","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行生命周期相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-life-cycle/"},"next":{"title":"使用JSVM-API判断给定的两个JS value是否严格相等","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-strict-equals/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-memory-management/use-jsvm-memory-management.md


const frontMatter = {
	title: '使用JSVM-API进行内存管理',
	sidebar_position: 21,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-memory-management',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API进行内存管理';

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
  "value": "OH_JSVM_AdjustExternalMemory",
  "id": "oh_jsvm_adjustexternalmemory",
  "level": 3
}, {
  "value": "OH_JSVM_MemoryPressureNotification",
  "id": "oh_jsvm_memorypressurenotification",
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
        id: "使用jsvm-api进行内存管理",
        children: "使用JSVM-API进行内存管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API提供了一组用于管理JavaScript虚拟机内存的API，可以更好地控制JavaScript代码使用的内存，并优化内存管理和垃圾回收机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JavaScript中，内存管理和垃圾回收是自动进行的。JavaScript虚拟机负责跟踪对象的分配和释放，并在必要时回收不再使用的内存。但是，在某些情况下，JSVM可能会消耗大量的内存，这可能会导致内存不足的错误。为了避免这种情况，JSVM-API提供了一些接口，以便更好地控制内存管理和垃圾回收机制。"
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
            children: "OH_JSVM_AdjustExternalMemory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于管理由JavaScript对象持有的外部分配内存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_MemoryPressureNotification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知虚拟机系统内存不足并有选择地触发垃圾回收"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API接口开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "。本文仅展示接口对应C++及ArkTS相关代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_adjustexternalmemory",
      children: "OH_JSVM_AdjustExternalMemory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置JavaScript对象保持活动状态的外部分配内存的数量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_AdjustExternalMemory的样例方法\nstatic JSVM_Value AdjustExternalMemory(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 分配1MB的内存\n    int64_t change = 1024 * 1024;\n    int64_t adjustedValue = 0;\n    JSVM_Status status = OH_JSVM_AdjustExternalMemory(env, change, &adjustedValue);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_AdjustExternalMemory: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_AdjustExternalMemory: success\");\n        OH_LOG_INFO(LOG_APP, \"JSVM Allocate memory size: %{public}d\", adjustedValue);\n    }\n    JSVM_Value checked;\n    OH_JSVM_GetBoolean(env, true, &checked);\n    return checked;\n}\n// AdjustExternalMemory注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = AdjustExternalMemory},\n};\nstatic JSVM_CallbackStruct *method = param;\n// AdjustExternalMemory方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"adjustExternalMemory\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "样例测试JS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(adjustExternalMemory())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出以下信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_AdjustExternalMemory: success\nJSVM Allocate memory size: 1048576\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_memorypressurenotification",
      children: "OH_JSVM_MemoryPressureNotification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OH_JSVM_MemoryPressureNotification通知虚拟机系统内存不足并有选择地触发垃圾回收。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_MemoryPressureNotification的样例方法\nstatic JSVM_Value MemoryPressureNotification(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 设置当前JSVM的内存压力级别\n    JSVM_Status status = OH_JSVM_MemoryPressureNotification(env, JSVM_MEMORY_PRESSURE_LEVEL_CRITICAL);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_MemoryPressureNotification: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_MemoryPressureNotification: success\");\n        OH_LOG_INFO(LOG_APP, \"JSVM Current JSVM memory pressure level: %{public}d\", JSVM_MEMORY_PRESSURE_LEVEL_CRITICAL);\n    }\n    return nullptr;\n}\n// MemoryPressureNotification注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = MemoryPressureNotification},\n};\nstatic JSVM_CallbackStruct *method = param;\n// MemoryPressureNotification方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"memoryPressureNotification\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "样例测试JS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(memoryPressureNotification())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出以下信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_MemoryPressureNotification: success\nJSVM Current JSVM memory pressure level: 2\n"
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