"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["475146"], {
749344(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_use_jsvm_process_use_jsvm_process_md_290_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-use-jsvm-process-use-jsvm-process-md-290.json
var site_docs_coding_jsvm_use_jsvm_process_use_jsvm_process_md_290_namespaceObject = JSON.parse('{"id":"coding/jsvm/use-jsvm-process/use-jsvm-process","title":"使用JSVM-API实现JS与C/C++语言交互开发流程","description":"使用JSVM-API实现跨语言交互，首先需按其机制注册和加载模块。","source":"@site/docs/coding/jsvm/use-jsvm-process/use-jsvm-process.md","sourceDirName":"coding/jsvm/use-jsvm-process","slug":"/coding/jsvm/use-jsvm-process/","permalink":"/harmonyos-docs-site/coding/jsvm/use-jsvm-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用JSVM-API实现JS与C/C++语言交互开发流程","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-process","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JSVM-API 支持的数据类型和接口","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-data-types-interfaces/"},"next":{"title":"JSVM-API使用规范","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-development-standards/jsvm-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/use-jsvm-process/use-jsvm-process.md


const frontMatter = {
	title: '使用JSVM-API实现JS与C/C++语言交互开发流程',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-process',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API实现JS与C/C++语言交互开发流程';

const assets = {

};



const toc = [{
  "value": "创建Native C++工程",
  "id": "创建native-c工程",
  "level": 2
}, {
  "value": "Native侧方法的实现",
  "id": "native侧方法的实现",
  "level": 2
}, {
  "value": "ArkTS侧调用C/C++方法实现",
  "id": "arkts侧调用cc方法实现",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用jsvm-api实现js与cc语言交互开发流程",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API实现跨语言交互，首先需按其机制注册和加载模块。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkTS/JS侧：实现C++方法的调用。代码比较简单，import一个对应的so库后，即可调用C++方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native侧：.cpp文件，实现模块的注册。需要提供注册lib库的名称，并在注册回调方法中定义接口的映射关系，即Native方法及对应的JS/ArkTS接口名称等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以在ArkTS/JS侧和Native侧实现RunTest()接口实现跨语言交互为例，展示使用JSVM-API进行跨语言交互的流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建native-c工程",
      children: "创建Native C++工程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/create-with-ndk",
        children: "创建NDK工程"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "native侧方法的实现",
      children: "Native侧方法的实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process#native%E4%BE%A7%E6%96%B9%E6%B3%95%E7%9A%84%E5%AE%9E%E7%8E%B0",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，以下代码提供了“使用JSVM-API实现JS与C/C++语言交互开发流程”Native侧方法实现的一个demo。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在index.d.ts文件中，提供JS侧的接口方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/types/libentry/index.d.ts\nexport const runTest: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在oh-package.json5文件中将index.d.ts与cpp文件关联起来。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"libentry.so\",\n  \"types\": \"./index.d.ts\",\n  \"version\": \"\",\n  \"description\": \"Please describe the basic information.\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMakeLists.txt文件中配置CMake打包参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# entry/src/main/cpp/CMakeLists.txt\ncmake_minimum_required(VERSION 3.4.1)\nproject(JSVMDemo)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n# 日志打印配置\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\n# 添加名为entry的库\nadd_library(entry SHARED hello.cpp)\n# 构建此可执行文件需要链接的库\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libjsvm.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建entry/src/main/cpp/hello.cpp，实现Native侧的runTest接口。具体代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/hello.cpp\n#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"ark_runtime/jsvm.h\"\n\n#define LOG_DOMAIN 0x3200\n#define LOG_TAG \"APP\"\n\nstatic int g_aa = 0;\n\n#define CHECK_RET(theCall)                                                                                             \\\n    do {                                                                                                               \\\n        JSVM_Status cond = theCall;                                                                                    \\\n        if ((cond) != JSVM_OK) {                                                                                       \\\n            const JSVM_ExtendedErrorInfo *info;                                                                        \\\n            OH_JSVM_GetLastErrorInfo(env, &info);                                                                      \\\n            OH_LOG_ERROR(LOG_APP, \"jsvm fail file: %{public}s line: %{public}d ret = %{public}d message = %{public}s\", \\\n                         __FILE__, __LINE__, cond, info != nullptr ? info->errorMessage : \"\");                         \\\n            return -1;                                                                                                 \\\n        }                                                                                                              \\\n    } while (0)\n\n#define CHECK(theCall)                                                                                                 \\\n    do {                                                                                                               \\\n        JSVM_Status cond = theCall;                                                                                    \\\n        if ((cond) != JSVM_OK) {                                                                                       \\\n            OH_LOG_ERROR(LOG_APP, \"jsvm fail file: %{public}s line: %{public}d ret = %{public}d\", __FILE__, __LINE__,  \\\n                         cond);                                                                                        \\\n            return -1;                                                                                                 \\\n        }                                                                                                              \\\n    } while (0)\n\n// 用于调用theCall并检查其返回值是否为JSVM_OK。\n// 如果不是，则调用OH_JSVM_GetLastErrorInfo处理错误并返回retVal。\n#define JSVM_CALL_BASE(env, theCall, retVal)                                                                           \\\n    do {                                                                                                               \\\n        JSVM_Status cond = theCall;                                                                                    \\\n        if (cond != JSVM_OK) {                                                                                         \\\n            const JSVM_ExtendedErrorInfo *info;                                                                        \\\n            OH_JSVM_GetLastErrorInfo(env, &info);                                                                      \\\n            OH_LOG_ERROR(LOG_APP, \"jsvm fail file: %{public}s line: %{public}d ret = %{public}d message = %{public}s\", \\\n                         __FILE__, __LINE__, cond, info != nullptr ? info->errorMessage : \"\");                         \\\n            return retVal;                                                                                             \\\n        }                                                                                                              \\\n    } while (0)\n\n// JSVM_CALL_BASE的简化版本，返回nullptr\n#define JSVM_CALL(theCall) JSVM_CALL_BASE(env, theCall, nullptr)\n\n// OH_JSVM_StrictEquals的样例方法\nstatic JSVM_Value IsStrictEquals(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 接受两个入参\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr));\n    // 调用OH_JSVM_StrictEquals接口判断给定的两个JavaScript value是否严格相等\n    bool result = false;\n    JSVM_Status status = OH_JSVM_StrictEquals(env, args[0], args[1], &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_StrictEquals: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_StrictEquals: success: %{public}d\", result);\n    }\n    JSVM_Value isStrictEqual;\n    JSVM_CALL(OH_JSVM_GetBoolean(env, result, &isStrictEqual));\n    return isStrictEqual;\n}\n// IsStrictEquals注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = IsStrictEquals},\n};\nstatic JSVM_CallbackStruct *method = param;\n// IsStrictEquals方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"isStrictEquals\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(    let data = '123';\n    let value = 123;\n    isStrictEquals(data,value);)JS\";\n\nstatic int32_t TestJSVM() {\n    JSVM_InitOptions initOptions = {0};\n    JSVM_VM vm;\n    JSVM_Env env = nullptr;\n    JSVM_VMScope vmScope;\n    JSVM_EnvScope envScope;\n    JSVM_HandleScope handleScope;\n    JSVM_Value result;\n    // 初始化JavaScript引擎实例\n    if (g_aa == 0) {\n        g_aa++;\n       CHECK(OH_JSVM_Init(&initOptions));\n    }\n    // 创建JSVM环境\n    CHECK(OH_JSVM_CreateVM(nullptr, &vm));\n    CHECK(OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env));\n    CHECK(OH_JSVM_OpenVMScope(vm, &vmScope));\n    CHECK_RET(OH_JSVM_OpenEnvScope(env, &envScope));\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handleScope));\n\n    // 通过script调用测试函数\n    JSVM_Script script;\n    JSVM_Value jsSrc;\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, srcCallNative, JSVM_AUTO_LENGTH, &jsSrc));\n    CHECK_RET(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n\n    // 销毁JSVM环境\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handleScope));\n    CHECK_RET(OH_JSVM_CloseEnvScope(env, envScope));\n    CHECK(OH_JSVM_CloseVMScope(vm, vmScope));\n    CHECK(OH_JSVM_DestroyEnv(env));\n    CHECK(OH_JSVM_DestroyVM(vm));\n    return 0;\n}\n\nstatic napi_value RunTest(napi_env env, napi_callback_info info)\n{\n    TestJSVM();\n    return nullptr;\n}\n\n// 模块初始化\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports) {\n    // 实现ArkTS接口与C++接口的绑定和映射\n    napi_property_descriptor desc[] = {\n      {\"runTest\", nullptr, RunTest, nullptr, nullptr, nullptr, napi_default, nullptr}\n    };\n    // 在exports对象上挂载RunJsVm的Native方法\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts侧调用cc方法实现",
      children: "ArkTS侧调用C/C++方法实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 通过import的方式，引入Native能力。\nimport napitest from 'libentry.so';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            // runtest\n            napitest.runTest();\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_StrictEquals: success: 0\n"
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