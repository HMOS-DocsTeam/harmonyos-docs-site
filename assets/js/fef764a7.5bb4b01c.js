"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["50372"], {
582738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_arraybuffer_use_jsvm_about_arraybuffer_md_fef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-arraybuffer-use-jsvm-about-arraybuffer-md-fef.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_arraybuffer_use_jsvm_about_arraybuffer_md_fef_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-arraybuffer/use-jsvm-about-arraybuffer","title":"使用JSVM-API接口进行ArrayBuffer相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-arraybuffer/use-jsvm-about-arraybuffer.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-arraybuffer","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-arraybuffer/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-arraybuffer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用JSVM-API接口进行ArrayBuffer相关开发","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-arraybuffer","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行array相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-array/"},"next":{"title":"使用JSVM-API接口操作bigint类型值","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-bigint/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-arraybuffer/use-jsvm-about-arraybuffer.md


const frontMatter = {
	title: '使用JSVM-API接口进行ArrayBuffer相关开发',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-arraybuffer',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行ArrayBuffer相关开发';

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
  "value": "OH_JSVM_GetArraybufferInfo",
  "id": "oh_jsvm_getarraybufferinfo",
  "level": 3
}, {
  "value": "OH_JSVM_IsArraybuffer",
  "id": "oh_jsvm_isarraybuffer",
  "level": 3
}, {
  "value": "OH_JSVM_DetachArraybuffer",
  "id": "oh_jsvm_detacharraybuffer",
  "level": 3
}, {
  "value": "OH_JSVM_IsDetachedArraybuffer",
  "id": "oh_jsvm_isdetachedarraybuffer",
  "level": 3
}, {
  "value": "OH_JSVM_CreateArraybuffer",
  "id": "oh_jsvm_createarraybuffer",
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
        id: "使用jsvm-api接口进行arraybuffer相关开发",
        children: "使用JSVM-API接口进行ArrayBuffer相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArrayBuffer 是 JavaScript 中的一种数据类型，用于表示通用的、固定长度的原始二进制数据缓冲区。它提供了一种在 JavaScript 中有效地表示和操作原始二进制数据的方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ArrayBuffer"
          })
        }), "：ArrayBuffer 对象用来表示一个通用的、固定长度的原始二进制数据缓冲区。不能直接操作 ArrayBuffer 的内容，而是需要通过包装成 TypedArray 对象或 DataView 对象来读写。ArrayBuffer 常用于处理固定长度的原始二进制数据，如文件、网络数据包等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "生命周期和内存管理"
          })
        }), "：在使用 JSVM 处理 ArrayBuffer 时，需要特别注意对象的生命周期管理，确保及时释放内存。"]
      }), "\n"]
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
            children: "OH_JSVM_GetArraybufferInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索 ArrayBuffer 的底层数据缓冲区及其长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsArraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个 JavaScript 对象是否为 ArrayBuffer 类型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DetachArraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用 ArrayBuffer 对象的 Detach 操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsDetachedArraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查给定的 ArrayBuffer 是否已被分离(Detached)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateArraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指定大小的 ArrayBuffer 对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API 接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅对接口对应 C++ 相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getarraybufferinfo",
      children: "OH_JSVM_GetArraybufferInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索 ArrayBuffer 的底层数据缓冲区及其长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetArraybufferInfo的示例方法\nstatic JSVM_Value GetArraybufferInfo(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    // 解析传递的参数\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 检查参数是否为ArrayBuffer\n    bool isArrayBuffer = false;\n    OH_JSVM_IsArraybuffer(env, args[0], &isArrayBuffer);\n    if (!isArrayBuffer) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetArraybufferInfo isArrayBuffer:false\");\n        return nullptr;\n    }\n    void *data;\n    size_t byteLength = 0;\n    // 获取ArrayBuffer的底层数据缓冲区和长度\n    JSVM_Status status = OH_JSVM_GetArraybufferInfo(env, args[0], &data, &byteLength);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetArraybufferInfo: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetArraybufferInfo: success\");\n    }\n    return args[0];\n}\n// GetArraybufferInfo注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetArraybufferInfo},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetArraybufferInfo方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getArraybufferInfo\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 示例测试js\nconst char *srcCallNative = R\"JS(\ngetArraybufferInfo(new ArrayBuffer(10));\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetArraybufferInfo: success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_isarraybuffer",
      children: "OH_JSVM_IsArraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断一个 JavaScript 对象是否为 ArrayBuffer 类型对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_IsArraybuffer的示例方法\nstatic JSVM_Value IsArrayBuffer(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 调用OH_JSVM_IsArraybuffer接口判断给定入参是否为ArrayBuffer数据\n    bool isArrayBuffer = false;\n    JSVM_Status status = OH_JSVM_IsArraybuffer(env, args[0], &isArrayBuffer);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM IsArrayBuffer: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM IsArrayBuffer: success\");\n        OH_LOG_INFO(LOG_APP, \"JSVM IsArrayBuffer: %{public}d\", isArrayBuffer);\n    }\n    JSVM_Value boolean = nullptr;\n    OH_JSVM_GetBoolean(env, isArrayBuffer, &boolean);\n    return boolean;\n}\n// IsArrayBuffer注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = IsArrayBuffer},\n};\nstatic JSVM_CallbackStruct *method = param;\n// IsArrayBuffer方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"isArrayBuffer\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 示例测试js\nconst char *srcCallNative = R\"JS(\nisArrayBuffer(new ArrayBuffer(8));\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM IsArrayBuffer: success\nJSVM IsArrayBuffer: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_detacharraybuffer",
      children: "OH_JSVM_DetachArraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用 ArrayBuffer 对象的 Detach 操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_isdetachedarraybuffer",
      children: "OH_JSVM_IsDetachedArraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查给定的 ArrayBuffer 是否已被分离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_DetachArraybuffer、OH_JSVM_IsDetachedArraybuffer的示例方法\nstatic JSVM_Value DetachArraybuffer(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    JSVM_Value arraybuffer = args[0];\n    JSVM_Status status = OH_JSVM_DetachArraybuffer(env, arraybuffer);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM DetachArraybuffer: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM DetachArraybuffer: success\");\n    }\n    return arraybuffer;\n}\nstatic JSVM_Value IsDetachedArraybuffer(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    JSVM_Value arraybuffer = args[0];\n    OH_JSVM_DetachArraybuffer(env, arraybuffer);\n    bool result = false;\n    JSVM_Status status = OH_JSVM_IsDetachedArraybuffer(env, arraybuffer, &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM IsDetachedArraybuffer: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM IsDetachedArraybuffer: success\");\n        OH_LOG_INFO(LOG_APP, \"JSVM IsArrayBuffer: %{public}d\", result);\n    }\n    JSVM_Value isDetached = nullptr;\n    OH_JSVM_GetBoolean(env, result, &isDetached);\n    return isDetached;\n}\n// DetachArraybuffer、IsDetachedArraybuffer注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = DetachArraybuffer},\n    {.data = nullptr, .callback = IsDetachedArraybuffer},\n};\nstatic JSVM_CallbackStruct *method = param;\n// DetachArraybuffer、IsDetachedArraybuffer方法别名，TS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"detachArraybuffer\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n    {\"isDetachedArraybuffer\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 示例测试js\nconst char *srcCallNative = R\"JS(\nlet arrayBuffer = new ArrayBuffer(10);\ndetachArraybuffer(arrayBuffer);\nisDetachedArraybuffer(arrayBuffer);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM DetachArraybuffer: success\nJSVM IsDetachedArraybuffer: success\nJSVM IsArrayBuffer: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createarraybuffer",
      children: "OH_JSVM_CreateArraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个指定大小的 ArrayBuffer 对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CreateArraybuffer的示例方法\nstatic JSVM_Value CreateArraybuffer(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    JSVM_Value result = nullptr;\n    // 解析传递的参数\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    int32_t value = 0;\n    size_t length = 0;\n    JSVM_CALL(OH_JSVM_GetValueInt32(env, argv[0], &value));\n    length = size_t(value);\n    void *data;\n    // 创建一个新的ArrayBuffer\n    JSVM_Status status = OH_JSVM_CreateArraybuffer(env, length, &data, &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateArraybuffer: failed\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateArraybuffer: success\");\n        OH_LOG_INFO(LOG_APP, \"JSVM ArrayBuffer length: %{public}d\", length);\n    }\n    // 返回创建好的ArrayBuffer\n    return result;\n}\n// CreateArraybuffer注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateArraybuffer},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateArraybuffer方法别名，供TS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createArraybuffer\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 示例测试js\nconst char *srcCallNative = R\"JS(\ncreateArraybuffer(8);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateArraybuffer: success\nJSVM ArrayBuffer length: 8\n"
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