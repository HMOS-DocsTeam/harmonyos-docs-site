"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["656140"], {
630836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_create_snapshot_use_jsvm_create_snapshot_md_e5d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-create-snapshot-use-jsvm-create-snapshot-md-e5d.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_create_snapshot_use_jsvm_create_snapshot_md_e5d_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-create-snapshot/use-jsvm-create-snapshot","title":"使用JSVM-API接口进行虚拟机快照相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-create-snapshot/use-jsvm-create-snapshot.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-create-snapshot","slug":"/coding/jsvm/jsvm-use/use-jsvm-create-snapshot/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-create-snapshot/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用JSVM-API接口进行虚拟机快照相关开发","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-create-snapshot","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行任务队列相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-execute_tasks/"},"next":{"title":"使用JSVM-API接口进行WebAssembly模块相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-wasm/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-create-snapshot/use-jsvm-create-snapshot.md


const frontMatter = {
	title: '使用JSVM-API接口进行虚拟机快照相关开发',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-create-snapshot',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行虚拟机快照相关开发';

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
  "value": "OH_JSVM_CreateSnapshot &amp; OH_JSVM_CreateEnvFromSnapshot",
  "id": "oh_jsvm_createsnapshot--oh_jsvm_createenvfromsnapshot",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "使用jsvm-api接口进行虚拟机快照相关开发",
        children: "使用JSVM-API接口进行虚拟机快照相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript虚拟机（JSVM）的快照创建功能，将当前运行时的JavaScript程序状态保存为一个快照文件，这个快照文件包含了当前的堆内存、执行上下文、函数闭包等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "虚拟机启动快照"
          })
        }), "：虚拟机在某个特定时间点的状态快照，包含了当前虚拟机的所有内部状态和数据。通过创建一个启动快照，可以在之后的时间点恢复虚拟机到相同的状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建和使用虚拟机启动快照可以简化一些复杂的编程任务，提高JSVM中虚拟机的管理和维护效率，增强程序的灵活性和稳定性。"
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
            children: "OH_JSVM_CreateSnapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建虚拟机的启动快照"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateEnvFromSnapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于虚拟机的起始快照，创建一个新的环境"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createsnapshot--oh_jsvm_createenvfromsnapshot",
      children: "OH_JSVM_CreateSnapshot & OH_JSVM_CreateEnvFromSnapshot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建和使用虚拟机的启动快照。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      }), ": 需要在OH_JSVM_Init的时候，将JSVM对外部的依赖注册到initOptions.externalReferences中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <fstream>\n\n#define LOG_DOMAIN 0x0202\n#define LOG_TAG \"TEST_TAG\"\n\nstatic int g_aa = 0;\n\n#define CHECK_RET(theCall)                                                                           \\\n    do {                                                                                             \\\n        JSVM_Status cond = theCall;                                                                  \\\n        if ((cond) != JSVM_OK) {                                                                     \\\n            const JSVM_ExtendedErrorInfo *info;                                                      \\\n            OH_JSVM_GetLastErrorInfo(env, &info);                                                    \\\n            OH_LOG_ERROR(LOG_APP,                                                                    \\\n                \"jsvm fail file: %{public}s line: %{public}d ret = %{public}d message = %{public}s\", \\\n                __FILE__,                                                                            \\\n                __LINE__,                                                                            \\\n                cond,                                                                                \\\n                info != nullptr ? info->errorMessage : \"\");                                          \\\n            return -1;                                                                               \\\n        }                                                                                            \\\n    } while (0)\n\n#define CHECK(theCall)                                                                                              \\\n    do {                                                                                                            \\\n        JSVM_Status cond = theCall;                                                                                 \\\n        if ((cond) != JSVM_OK) {                                                                                    \\\n            OH_LOG_ERROR(                                                                                           \\\n                LOG_APP, \"jsvm fail file: %{public}s line: %{public}d ret = %{public}d\", __FILE__, __LINE__, cond); \\\n            return -1;                                                                                              \\\n        }                                                                                                           \\\n    } while (0)\n\n// 用于调用theCall并检查其返回值是否为JSVM_OK。\n// 如果不是，则调用GET_AND_THROW_LAST_ERROR处理错误并返回retVal。\n#define JSVM_CALL_BASE(env, theCall, retVal)                                                         \\\n    do {                                                                                             \\\n        JSVM_Status cond = theCall;                                                                  \\\n        if (cond != JSVM_OK) {                                                                       \\\n            const JSVM_ExtendedErrorInfo *info;                                                      \\\n            OH_JSVM_GetLastErrorInfo(env, &info);                                                    \\\n            OH_LOG_ERROR(LOG_APP,                                                                    \\\n                \"jsvm fail file: %{public}s line: %{public}d ret = %{public}d message = %{public}s\", \\\n                __FILE__,                                                                            \\\n                __LINE__,                                                                            \\\n                cond,                                                                                \\\n                info != nullptr ? info->errorMessage : \"\");                                          \\\n            return retVal;                                                                           \\\n        }                                                                                            \\\n    } while (0)\n\n// JSVM_CALL_BASE的简化版本，返回nullptr\n#define JSVM_CALL(theCall) JSVM_CALL_BASE(env, theCall, nullptr)\n\nstatic const int MAX_BUFFER_SIZE = 128;\n// CreateHelloString()函数需绑定到JSVM虚拟机, 用于OH_JSVM_CreateSnapshot虚拟机快照的正常创建\nstatic JSVM_Value CreateHelloString(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    JSVM_Value outPut;\n    OH_JSVM_CreateStringUtf8(env, \"Hello world!\", JSVM_AUTO_LENGTH, &outPut);\n    return outPut;\n}\n// 提供外部引用的方式以便JavaScript环境可以调用绑定的函数\nstatic JSVM_CallbackStruct helloCb = {CreateHelloString, nullptr};\n\nstatic intptr_t externals[] = {\n    (intptr_t)&helloCb,\n    0,\n};\n\nstatic JSVM_Value RunVMScript(JSVM_Env env, std::string &src)\n{\n    // 打开handleScope作用域\n    JSVM_HandleScope handleScope;\n    OH_JSVM_OpenHandleScope(env, &handleScope);\n    JSVM_Value jsStr = nullptr;\n    OH_JSVM_CreateStringUtf8(env, src.c_str(), src.size(), &jsStr);\n    // 编译JavaScript代码\n    JSVM_Script script;\n    OH_JSVM_CompileScript(env, jsStr, nullptr, 0, true, nullptr, &script);\n    // 执行JavaScript代码\n    JSVM_Value result = nullptr;\n    OH_JSVM_RunScript(env, script, &result);\n    // 关闭handleScope作用域\n    OH_JSVM_CloseHandleScope(env, handleScope);\n    return result;\n}\n// OH_JSVM_CreateSnapshot的样例方法\nstatic void CreateVMSnapshot()\n{\n    // 创建JavaScript虚拟机实例,打开虚拟机作用域\n    JSVM_VM vm;\n    JSVM_CreateVMOptions vmOptions;\n    memset(&vmOptions, 0, sizeof(vmOptions));\n    // isForSnapshotting设置该虚拟机是否用于创建快照\n    vmOptions.isForSnapshotting = true;\n    OH_JSVM_CreateVM(&vmOptions, &vm);\n    JSVM_VMScope vmScope;\n    OH_JSVM_OpenVMScope(vm, &vmScope);\n    // 创建JavaScript环境,打开环境作用域\n    JSVM_Env env;\n    // 将native函数注册成JavaScript可调用的方法\n    JSVM_PropertyDescriptor descriptor[] = {\n        {\"createHelloString\", nullptr, &helloCb, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n    };\n    OH_JSVM_CreateEnv(vm, 1, descriptor, &env);\n    JSVM_EnvScope envScope;\n    OH_JSVM_OpenEnvScope(env, &envScope);\n    // 使用OH_JSVM_CreateSnapshot创建虚拟机的启动快照\n    const char *blobData = nullptr;\n    size_t blobSize = 0;\n    JSVM_Env envs[1] = {env};\n    OH_JSVM_CreateSnapshot(vm, 1, envs, &blobData, &blobSize);\n    // 将snapshot保存到文件中\n    // 保存快照数据，/data/storage/el2/base/files/test_blob.bin为沙箱路径\n    // 以包名为com.example.jsvm为例，实际文件会保存到/data/app/el2/100/base/com.example.jsvm/files/test_blob.bin\n    std::ofstream file(\n        \"/data/storage/el2/base/files/test_blob.bin\", std::ios::out | std::ios::binary | std::ios::trunc);\n    file.write(blobData, blobSize);\n    file.close();\n    // 关闭并销毁环境和虚拟机\n    OH_JSVM_CloseEnvScope(env, envScope);\n    OH_JSVM_DestroyEnv(env);\n    OH_JSVM_CloseVMScope(vm, vmScope);\n    OH_JSVM_DestroyVM(vm);\n}\n\nstatic void RunVMSnapshot()\n{\n    // blobData的生命周期不能短于vm的生命周期\n    // 从文件中读取snapshot\n    std::vector<char> blobData;\n    std::ifstream file(\"/data/storage/el2/base/files/test_blob.bin\", std::ios::in | std::ios::binary | std::ios::ate);\n    size_t blobSize = file.tellg();\n    blobData.resize(blobSize);\n    file.seekg(0, std::ios::beg);\n    file.read(blobData.data(), blobSize);\n    file.close();\n    OH_LOG_INFO(LOG_APP, \"Test JSVM RunVMSnapshot read file blobSize = : %{public}ld\", blobSize);\n    // 使用快照数据创建虚拟机实例\n    JSVM_VM vm;\n    JSVM_CreateVMOptions vmOptions;\n    memset(&vmOptions, 0, sizeof(vmOptions));\n    vmOptions.snapshotBlobData = blobData.data();\n    vmOptions.snapshotBlobSize = blobSize;\n    OH_JSVM_CreateVM(&vmOptions, &vm);\n    JSVM_VMScope vmScope;\n    OH_JSVM_OpenVMScope(vm, &vmScope);\n    // 从快照中创建环境env\n    JSVM_Env env;\n    OH_JSVM_CreateEnvFromSnapshot(vm, 0, &env);\n    JSVM_EnvScope envScope;\n    OH_JSVM_OpenEnvScope(env, &envScope);\n    // 执行js脚本，快照记录的env中定义了createHelloString()\n    std::string src = \"createHelloString()\";\n    JSVM_Value result = RunVMScript(env, src);\n    // 环境关闭前检查脚本运行结果\n    char str[MAX_BUFFER_SIZE];\n    OH_JSVM_GetValueStringUtf8(env, result, str, MAX_BUFFER_SIZE, nullptr);\n    if (strcmp(str, \"Hello world!\") != 0) {\n        OH_LOG_ERROR(LOG_APP, \"jsvm fail file: %{public}s line: %{public}d\", __FILE__, __LINE__);\n    }\n    // 关闭并销毁环境和虚拟机\n    OH_JSVM_CloseEnvScope(env, envScope);\n    OH_JSVM_DestroyEnv(env);\n    OH_JSVM_CloseVMScope(vm, vmScope);\n    OH_JSVM_DestroyVM(vm);\n    return;\n}\n\nstatic JSVM_Value AdjustExternalMemory(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 在创建虚拟机快照时，如果存在对外部的依赖，需要在OH_JSVM_Init时，将外部依赖注册到initOptions.externalReferences中\n    // 创建虚拟机快照并将快照保存到文件中\n    CreateVMSnapshot();\n    // snapshot可以记录下特定的js执行环境，可以跨进程通过snapshot快速还原出js执行上下文环境\n    RunVMSnapshot();\n    JSVM_Value result = nullptr;\n    OH_JSVM_CreateInt32(env, 0, &result);\n    return result;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = AdjustExternalMemory},\n};\nstatic JSVM_CallbackStruct *method = param;\n// AdjustExternalMemory方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"adjustExternalMemory\", nullptr, method, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试JS\nconst char *srcCallNative = R\"JS(adjustExternalMemory();)JS\";\n\nstatic int32_t TestJSVM()\n{\n    JSVM_InitOptions initOptions = {0};\n    JSVM_VM vm;\n    JSVM_Env env = nullptr;\n    JSVM_VMScope vmScope;\n    JSVM_EnvScope envScope;\n    JSVM_HandleScope handleScope;\n    JSVM_Value result;\n    // 初始化JavaScript引擎实例\n    if (g_aa == 0) {\n        g_aa++;\n        initOptions.externalReferences = externals;\n        int argc = 0;\n        char **argv = nullptr;\n        initOptions.argc = &argc;\n        initOptions.argv = argv;\n        CHECK(OH_JSVM_Init(&initOptions));\n    }\n    // 创建JSVM环境\n    CHECK(OH_JSVM_CreateVM(nullptr, &vm));\n    CHECK(OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env));\n    CHECK(OH_JSVM_OpenVMScope(vm, &vmScope));\n    CHECK_RET(OH_JSVM_OpenEnvScope(env, &envScope));\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handleScope));\n\n    // 通过script调用测试函数\n    JSVM_Script script;\n    JSVM_Value jsSrc;\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, srcCallNative, JSVM_AUTO_LENGTH, &jsSrc));\n    CHECK_RET(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n\n    // 销毁JSVM环境\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handleScope));\n    CHECK_RET(OH_JSVM_CloseEnvScope(env, envScope));\n    CHECK(OH_JSVM_CloseVMScope(vm, vmScope));\n    CHECK(OH_JSVM_DestroyEnv(env));\n    CHECK(OH_JSVM_DestroyVM(vm));\n    return 0;\n}\n\nstatic napi_value RunTest(napi_env env, napi_callback_info info)\n{\n    TestJSVM();\n    return nullptr;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    OH_LOG_INFO(LOG_APP, \"JSVM Init\");\n    napi_property_descriptor desc[] = {\n        {\"runTest\", nullptr, RunTest, nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import napitest from 'libentry.so';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            // runtest\n            napitest.runTest();\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LOG中输出："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Test JSVM RunVMSnapshot read file blobSize = : 300064\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多次点击屏幕,LOG中输出:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Test JSVM RunVMSnapshot read file blobSize = : 300176\nTest JSVM RunVMSnapshot read file blobSize = : 300064\nTest JSVM RunVMSnapshot read file blobSize = : 300160\nTest JSVM RunVMSnapshot read file blobSize = : 300032\nTest JSVM RunVMSnapshot read file blobSize = : 300176\nTest JSVM RunVMSnapshot read file blobSize = : 300048\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述执行结果是因为在读取快照文件时，blobSize 的值来源于快照文件的大小（通过 file.tellg() 获取）。快照文件的大小直接决定了 blobSize 的值，所以会输出不同的值。"
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