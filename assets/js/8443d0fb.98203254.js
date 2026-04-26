"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["172257"], {
314395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_wasm_use_jsvm_about_wasm_md_844_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-wasm-use-jsvm-about-wasm-md-844.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_wasm_use_jsvm_about_wasm_md_844_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-wasm/use-jsvm-about-wasm","title":"使用JSVM-API接口进行WebAssembly模块相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-wasm/use-jsvm-about-wasm.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-wasm","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-wasm/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-wasm/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用JSVM-API接口进行WebAssembly模块相关开发","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-wasm","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行虚拟机快照相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-create-snapshot/"},"next":{"title":"使用JSVM-API接口进行函数创建和调用","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-function-call/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-wasm/use-jsvm-about-wasm.md


const frontMatter = {
	title: '使用JSVM-API接口进行WebAssembly模块相关开发',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-wasm',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行WebAssembly模块相关开发';

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
  "value": "code cache 校验规格说明",
  "id": "code-cache-校验规格说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
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
        id: "使用jsvm-api接口进行webassembly模块相关开发",
        children: "使用JSVM-API接口进行WebAssembly模块相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API WebAssembly 接口提供了 WebAssembly 字节码编译、WebAssembly 函数优化、WebAssembly cache 序列化和反序列化的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["权限要求：WebAssembly相关接口需要应用拥有JIT权限才能执行，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile",
        children: "JSVM 申请JIT权限指导"
      }), "申请对应权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["运行限制：当前 JSVM 版本在坚盾守护模式下将禁用 WebAssembly 全部功能模块。开发者需针对此限制进行应用兼容性评估，具体技术规范详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode",
        children: "JSVM 坚盾守护模式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "wasm module"
          })
        }), "：表示一个 WebAssembly 模块，(WebAssembly 简称为wasm)，通过OH_JSVM_CompileWasmModule可以将wasm字节码或wasm cache创建为wasm module。通过 OH_JSVM_IsWasmModuleObject 接口可以判断一个 JSVM_Value 是否是一个 wasm module。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "wasm function"
          })
        }), "：表示 wasm module 中定义的函数，wasm function 在导出后被外部代码使用。OH_JSVM_CompileWasmFunction 接口提供了将 wasm function 编译为优化后的机器码的能力，方便开发者对指定 wasm function 提前编译和函数粒度的并行编译。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "wasm cache"
          })
        }), "：对 wasm module 中的机器码进行序列化，生成的数据被称为 wasm cache。wasm cache 的创建和释放接口分别为 OH_JSVM_CreateWasmCache 和 OH_JSVM_ReleaseCache (对应的 cacheType 为 JSVM_CACHE_TYPE_WASM)。"]
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
            children: "OH_JSVM_CompileWasmModule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将 wasm 字节码同步编译为 wasm module。如果提供了 cache 参数，先尝试将 cache 反序列化为 wasm module，反序列化失败后再执行编译。如果没有 JIT 权限支持，则打印一行日志提示开发者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CompileWasmFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将 wasm module 中指定编号的函数编译为优化后的机器码，目前只使能了最高的优化等级，函数编号的合法性由接口调用者保证。如果没有 JIT 权限支持，则打印一行日志提示开发者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsWasmModuleObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断传入的值是否是wasm module。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateWasmCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将 wasm module 中的机器码序列化为 wasm cache，如果 wasm module 不包含机器码，会导致序列化失败。如果没有 JIT 权限支持，则打印一行日志提示开发者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ReleaseCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放由 JSVM 接口生成的 cache。传入的 cacheType 和 cacheData 必须匹配，否则会产生未定义行为。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-cache-校验规格说明",
      children: "code cache 校验规格说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "完整性校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户保证"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "兼容性校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验生成 cache 的 JSVM 版本与编译选项是否与当前一致"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一致性校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户保证"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), " 了解 JSVM-API 接口开发流程。本文仅展示接口对应的 C++ 代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <vector>\n\n#ifndef CHECK_STATUS\n#define CHECK_STATUS(cond)                           \\\n    do {                                             \\\n        if (!(cond)) {                               \\\n            OH_LOG_ERROR(LOG_APP, \"CHECK FAILED\");   \\\n        }                                            \\\n    } while (0)\n#endif\n\n// 判断一个 JSVM_Value 是否是 wasm module\nstatic bool IsWasmModuleObject(JSVM_Env env, JSVM_Value value) {\n    bool result = false;\n    JSVM_Status status = OH_JSVM_IsWasmModuleObject(env, value, &result);\n    CHECK_STATUS(status == JSVM_OK);\n    return result;\n}\n\n// 由 C 字符串创建 JSVM string\nstatic JSVM_Value CreateString(JSVM_Env env, const char *str) {\n    JSVM_Value jsvmStr;\n    JSVM_Status status = OH_JSVM_CreateStringUtf8(env, str, JSVM_AUTO_LENGTH, &jsvmStr);\n    CHECK_STATUS(status == JSVM_OK);\n    return jsvmStr;\n}\n\n// 由 C int32_t 创建 JSVM number\nstatic JSVM_Value CreateInt32(JSVM_Env env, int32_t val) {\n    JSVM_Value jsvmInt32;\n    JSVM_Status status = OH_JSVM_CreateInt32(env, val, &jsvmInt32);\n    CHECK_STATUS(status == JSVM_OK);\n    return jsvmInt32;\n}\n\n// 对 wasm module 进行实例化\nstatic JSVM_Value InstantiateWasmModule(JSVM_Env env, JSVM_Value wasmModule) {\n    JSVM_Status status = JSVM_OK;\n    JSVM_Value globalThis;\n    status = OH_JSVM_GetGlobal(env, &globalThis);\n    CHECK_STATUS(status == JSVM_OK);\n\n    JSVM_Value webAssembly;\n    status = OH_JSVM_GetProperty(env, globalThis, CreateString(env, \"WebAssembly\"), &webAssembly);\n    CHECK_STATUS(status == JSVM_OK);\n\n    JSVM_Value webAssemblyInstance;\n    status = OH_JSVM_GetProperty(env, webAssembly, CreateString(env, \"Instance\"), &webAssemblyInstance);\n    CHECK_STATUS(status == JSVM_OK);\n\n    JSVM_Value instance;\n    JSVM_Value argv[] = {wasmModule};\n    status = OH_JSVM_NewInstance(env, webAssemblyInstance, 1, argv, &instance);\n    CHECK_STATUS(status == JSVM_OK);\n    return instance;\n}\n\n// 获取 wasm 字节码 (add 模块)\nstatic std::vector<uint8_t> GetAddWasmBuffer() {\n    /* 以下 wasmBuffer 对应的 wasm 字节码文本格式如下所示，只包含了一个函数 add\n       (module\n         (func $add (param $lhs i32) (param $rhs i32) (result i32)\n           local.get $lhs\n           local.get $rhs\n           i32.add\n         )\n         (export \"add\" (func $add))\n       )\n     */\n    std::vector<uint8_t> wasmBuffer = {0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x07, 0x01,\n                                       0x60, 0x02, 0x7f, 0x7f, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x07,\n                                       0x07, 0x01, 0x03, 0x61, 0x64, 0x64, 0x00, 0x00, 0x0a, 0x09, 0x01,\n                                       0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6a, 0x0b};\n    return wasmBuffer;\n}\n\n// 验证 wasm instance 功能 (add 模块)\nstatic void VerifyAddWasmInstance(JSVM_Env env, JSVM_Value wasmInstance) {\n    JSVM_Status status = JSVM_OK;\n    // 从 wasm instance 获取 exports.add 函数\n    JSVM_Value exports;\n    status = OH_JSVM_GetProperty(env, wasmInstance, CreateString(env, \"exports\"), &exports);\n    CHECK_STATUS(status == JSVM_OK);\n\n    JSVM_Value add;\n    status = OH_JSVM_GetProperty(env, exports, CreateString(env, \"add\"), &add);\n    CHECK_STATUS(status == JSVM_OK);\n\n    // 执行 exports.add(1, 2)，期望得到结果 3\n    JSVM_Value undefined;\n    OH_JSVM_GetUndefined(env, &undefined);\n    JSVM_Value one = CreateInt32(env, 1);\n    JSVM_Value two = CreateInt32(env, 2);\n    JSVM_Value argv[] = {one, two};\n    JSVM_Value result;\n    status = OH_JSVM_CallFunction(env, undefined, add, 2, argv, &result);\n    CHECK_STATUS(status == JSVM_OK);\n    int32_t resultInt32 = 0;\n    OH_JSVM_GetValueInt32(env, result, &resultInt32);\n    CHECK_STATUS(resultInt32 == 3);\n}\n\n// WebAssembly demo 主函数\nstatic JSVM_Value WasmDemo(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_Status status = JSVM_OK;\n    std::vector<uint8_t> wasmBuffer = GetAddWasmBuffer();\n    uint8_t *wasmBytecode = wasmBuffer.data();\n    size_t wasmBytecodeLength = wasmBuffer.size();\n    JSVM_Value wasmModule;\n    // 根据 wasm 字节码得到 wasm module\n    status = OH_JSVM_CompileWasmModule(env, wasmBytecode, wasmBytecodeLength, NULL, 0, NULL, &wasmModule);\n    CHECK_STATUS(status == JSVM_OK);\n    CHECK_STATUS(IsWasmModuleObject(env, wasmModule));\n\n    // 对当前 wasm module 中定义的第一个函数 (即 add) 执行编译优化\n    int32_t functionIndex = 0;\n    // 注意：当前只支持 high level optimization，即传入 JSVM_WASM_OPT_BASELINE 和传入 JSVM_WASM_OPT_HIGH 效果是一样的\n    status = OH_JSVM_CompileWasmFunction(env, wasmModule, functionIndex, JSVM_WASM_OPT_HIGH);\n    CHECK_STATUS(status == JSVM_OK);\n    // 对编译得到的 wasm module 进行实例化\n    JSVM_Value wasmInstance = InstantiateWasmModule(env, wasmModule);\n    // 对实例化的 wasm instance 中的函数进行功能验证\n    VerifyAddWasmInstance(env, wasmInstance);\n\n    // 创建 wasm cache\n    const uint8_t *wasmCacheData = NULL;\n    size_t wasmCacheLength = 0;\n    status = OH_JSVM_CreateWasmCache(env, wasmModule, &wasmCacheData, &wasmCacheLength);\n    CHECK_STATUS(status == JSVM_OK);\n    // 期望 wasm cache 创建成功\n    CHECK_STATUS(wasmCacheData != NULL);\n    CHECK_STATUS(wasmCacheLength > 0);\n\n    // 通过将 wasm cache 赋值来模拟 cache 持久化，实际使用场景可能将 wasm cache 保存到文件\n    std::vector<uint8_t> cacheBuffer(wasmCacheData, wasmCacheData + wasmCacheLength);\n\n    // cache 一旦保存完成后，需要显式释放，以免发生内存泄露\n    // 注意：传入的 JSVM_CacheType 必须匹配\n    status = OH_JSVM_ReleaseCache(env, wasmCacheData, JSVM_CACHE_TYPE_WASM);\n    CHECK_STATUS(status == JSVM_OK);\n\n    // 使用 wasm code 反序列化来生成 wasm module\n    bool cacheRejected = false;\n    JSVM_Value wasmModule2;\n    status = OH_JSVM_CompileWasmModule(env, wasmBytecode, wasmBytecodeLength, cacheBuffer.data(), cacheBuffer.size(),\n                                       &cacheRejected, &wasmModule2);\n   \n    // 传入的 wasm cache 如果是匹配的，且内部校验通过 (如版本)，则会接受 cache\n    CHECK_STATUS(!cacheRejected);\n    CHECK_STATUS(IsWasmModuleObject(env, wasmModule2));\n\n    // 对反序列化得到的 wasmModule2 进行同样的操作：函数编译、实例化、验证功能，期望也都是通过的\n    status = OH_JSVM_CompileWasmFunction(env, wasmModule2, functionIndex, JSVM_WASM_OPT_HIGH);\n    CHECK_STATUS(status == JSVM_OK);\n\n    JSVM_Value wasmInstance2 = InstantiateWasmModule(env, wasmModule2);\n    VerifyAddWasmInstance(env, wasmInstance2);\n\n    JSVM_Value result;\n    OH_JSVM_GetBoolean(env, true, &result);\n    return result;\n}\n\n// WasmDemo 方法注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = WasmDemo}\n};\nstatic JSVM_CallbackStruct *method = param;\n// 将 C++ callback WasmDemo 函数注册为 JSVM globalThis.wasmDemo 属性，供 JS 侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"wasmDemo\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(wasmDemo())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出：无报错"
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