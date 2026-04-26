"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["28545"], {
526291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_debug_option_use_jsvm_about_debug_option_md_47b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-debug-option-use-jsvm-about-debug-option-md-47b.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_debug_option_use_jsvm_about_debug_option_md_47b_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-debug-option/use-jsvm-about-debug-option","title":"使用JSVM-API接口进行debug操作","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-debug-option/use-jsvm-about-debug-option.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-debug-option","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-debug-option/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-debug-option/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"使用JSVM-API接口进行debug操作","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-debug-option","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行Date相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-date/"},"next":{"title":"使用JSVM-API接口进行object相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-debug-option/use-jsvm-about-debug-option.md


const frontMatter = {
	title: '使用JSVM-API接口进行debug操作',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-debug-option',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行debug操作';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "debug选项介绍",
  "id": "debug选项介绍",
  "level": 2
}, {
  "value": "JSVM_SCOPE_CHECK",
  "id": "jsvm_scope_check",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "JSVM_DebugOption",
  "id": "jsvm_debugoption",
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
        id: "使用jsvm-api接口进行debug操作",
        children: "使用JSVM-API接口进行debug操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API中提供接口，可以启用/禁用特定JSVM_Env下的指定debug选项。目前支持的debug选项有JSVM_SCOPE_CHECK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debug选项介绍",
      children: "debug选项介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "debug选项皆为JSVM_DebugOption类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_scope_check",
      children: "JSVM_SCOPE_CHECK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者在开发时，可能会出现在HandleScope结束后，调用上一次HandleScope内的JSVM_Value类型变量，导致程序崩溃。JSVM_SCOPE_CHECK为scope校验手段，校验当前调用的JSVM_Value类型变量是否超出HandleScope作用域，如果超出，则抛出错误“Run in wrong HandleScope”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启该debug选项后，若JSVM-API创建了JSVM_Value，则在hilog中有“ADD_VAL_TO_SCOPE_CHECK in function: [函数名]”输出，例如“ADD_VAL_TO_SCOPE_CHECK in function: OH_JSVM_GetBoolean”。若JSVM-API使用了JSVM_Value，则在hilog中有“CHECK_SCOPE in function: [函数名]”输出，表示对使用的JSVM_Value进行了HandleScope校验，例如“CHECK_SCOPE in function: OH_JSVM_IsBoolean”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetDebugOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用/禁用特定JSVM_Env的指定debug选项。传入的debug选项参数debugOption必须为JSVM_DebugOption类型，布尔值参数isEnabled用于控制是否开启该debug选项。此API仅供debug时使用，开启后可能会带来性能下降。"
          })]
        })
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
      id: "jsvm_debugoption",
      children: "JSVM_DebugOption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅需替换", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "示例代码中的“TestJSVM()”函数即可运行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在正确的HandleScope内调用JSVM_Value类型变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static int32_t TestJSVM()\n{\n    JSVM_InitOptions initOptions = {0};\n    JSVM_VM vm;\n    JSVM_Env env = nullptr;\n    JSVM_VMScope vmScope;\n    JSVM_EnvScope envScope;\n    JSVM_HandleScope handleScope;\n\n    // 初始化JavaScript引擎实例\n    if (g_aa == 0) {\n        g_aa++;\n        CHECK(OH_JSVM_Init(&initOptions));\n    }\n    // 创建JSVM环境\n    CHECK(OH_JSVM_CreateVM(nullptr, &vm));\n    CHECK(OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env));\n    // 打开JSVM_SCOPE_CHECK校验选项\n    CHECK(OH_JSVM_SetDebugOption(env, JSVM_SCOPE_CHECK, true));\n    CHECK(OH_JSVM_OpenVMScope(vm, &vmScope));\n    CHECK_RET(OH_JSVM_OpenEnvScope(env, &envScope));\n    // 打开HandleScope\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handleScope));\n\n    // 通过script调用测试函数\n    JSVM_Script script;\n    JSVM_Value jsSrc, result;\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, srcCallNative, JSVM_AUTO_LENGTH, &jsSrc));\n    CHECK_RET(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n\n    bool boolResult = true;\n    // OH_JSVM_IsBoolean接口调用JSVM_Value类型变量result\n    JSVM_Status status = OH_JSVM_IsBoolean(env, result, &boolResult);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_IsBoolean: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_IsBoolean: success: %{public}d\", boolResult);\n    }\n\n    // 销毁JSVM环境\n    // 关闭HandleScope\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handleScope));\n    CHECK_RET(OH_JSVM_CloseEnvScope(env, envScope));\n    CHECK(OH_JSVM_CloseVMScope(vm, vmScope));\n    // 关闭JSVM_SCOPE_CHECK校验选项\n    CHECK(OH_JSVM_SetDebugOption(env, JSVM_SCOPE_CHECK, false));\n    CHECK(OH_JSVM_DestroyEnv(env));\n    CHECK(OH_JSVM_DestroyVM(vm));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hilog中有以下结果输出："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ADD_VAL_TO_SCOPE_CHECK in function: NewString\nCHECK_SCOPE in function: OH_JSVM_CompileScript\nADD_VAL_TO_SCOPE_CHECK in function: OH_JSVM_GetCbInfo\nADD_VAL_TO_SCOPE_CHECK in function: OH_JSVM_GetCbInfo\nADD_VAL_TO_SCOPE_CHECK in function: OH_JSVM_GetCbInfo\nCHECK_SCOPE in function: OH_JSVM_StrictEquals\nCHECK_SCOPE in function: OH_JSVM_StrictEquals\nJSVM OH_JSVM_StrictEquals: success: 0\nADD_VAL_TO_SCOPE_CHECK in function: OH_JSVM_GetBoolean\nADD_VAL_TO_SCOPE_CHECK in function: OH_JSVM_RunScript\nCHECK_SCOPE in function: OH_JSVM_IsBoolean\nJSVM OH_JSVM_IsBoolean: success: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在错误的HandleScope内调用JSVM_Value类型变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static int32_t TestJSVM()\n{\n    JSVM_InitOptions initOptions = {0};\n    JSVM_VM vm;\n    JSVM_Env env = nullptr;\n    JSVM_VMScope vmScope;\n    JSVM_EnvScope envScope;\n    JSVM_HandleScope handleScope;\n\n    // 初始化JavaScript引擎实例\n    if (g_aa == 0) {\n        g_aa++;\n        CHECK(OH_JSVM_Init(&initOptions));\n    }\n    // 创建JSVM环境\n    CHECK(OH_JSVM_CreateVM(nullptr, &vm));\n    CHECK(OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env));\n    // 打开JSVM_SCOPE_CHECK校验选项\n    CHECK(OH_JSVM_SetDebugOption(env, JSVM_SCOPE_CHECK, true));\n    CHECK(OH_JSVM_OpenVMScope(vm, &vmScope));\n    CHECK_RET(OH_JSVM_OpenEnvScope(env, &envScope));\n    // 打开HandleScope\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handleScope));\n\n    // 通过script调用测试函数\n    JSVM_Script script;\n    JSVM_Value jsSrc, result;\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, srcCallNative, JSVM_AUTO_LENGTH, &jsSrc));\n    CHECK_RET(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n\n    bool boolResult = true;\n\n    // 销毁JSVM环境\n    // 关闭HandleScope\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handleScope));\n    // OH_JSVM_IsBoolean接口在错误的HandleScope调用JSVM_Value类型变量result\n    JSVM_Status status = OH_JSVM_IsBoolean(env, result, &boolResult);\n    CHECK_RET(OH_JSVM_CloseEnvScope(env, envScope));\n    CHECK(OH_JSVM_CloseVMScope(vm, vmScope));\n    // 关闭JSVM_SCOPE_CHECK校验选项\n    CHECK(OH_JSVM_SetDebugOption(env, JSVM_SCOPE_CHECK, false));\n    CHECK(OH_JSVM_DestroyEnv(env));\n    CHECK(OH_JSVM_DestroyVM(vm));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行结果"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "程序崩溃，有cppcrash日志生成，在hilog中可以检索到类似以下的信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM Fatal Error Position : \"../../../../../../../arkcompiler/jsvm/src/js_native_api_v8.cpp\":4537\nJSVM Fatal Error Message : \"Run in wrong HandleScope\"\n"
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