"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["465407"], {
388511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_longque_use_longque_js_api_use_longque_js_api_md_000_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-longque-use-longque-js-api-use-longque-js-api-md-000.json
var site_docs_coding_longque_use_longque_js_api_use_longque_js_api_md_000_namespaceObject = JSON.parse('{"id":"coding/longque/use-longque-js-api/use-longque-js-api","title":"Longque-JS-API使用指导","description":"Longque JS API 由 Longque JS Engine 提供，适用于在 HarmonyOS 平台构建稳定、高性能的应用。所有 API 均位于 \\\\\\\\Longque\\\\\\\\ 对象下。接口的版本可通过 \\\\\\\\Longque\\\\\\\\.version 获得，开发者可使用该版本进行特性判断。","source":"@site/docs/coding/longque/use-longque-js-api/use-longque-js-api.md","sourceDirName":"coding/longque/use-longque-js-api","slug":"/coding/longque/use-longque-js-api/","permalink":"/harmonyos-docs-site/coding/longque/use-longque-js-api/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Longque-JS-API使用指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-longque-js-api","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HiSmartPerf采集jsvm trace","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-performance/use-jsvm-about-v8-trace/"},"next":{"title":"OpenMP简介","permalink":"/harmonyos-docs-site/coding/openmp/openmp-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/longque/use-longque-js-api/use-longque-js-api.md


const frontMatter = {
	title: 'Longque-JS-API使用指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-longque-js-api',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'Longque-JS-API使用指导';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "属性说明",
  "id": "属性说明",
  "level": 2
}, {
  "value": "createDelegate接口",
  "id": "createdelegate接口",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述",
  "level": 3
}, {
  "value": "参数",
  "id": "参数",
  "level": 3
}, {
  "value": "返回值",
  "id": "返回值",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 3
}, {
  "value": "性能测试示例",
  "id": "性能测试示例",
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
        id: "longque-js-api使用指导",
        children: "Longque-JS-API使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Longque JS API 由 Longque JS Engine 提供，适用于在 HarmonyOS 平台构建稳定、高性能的应用。所有 API 均位于 __Longque__ 对象下。接口的版本可通过 __Longque__.version 获得，开发者可使用该版本进行特性判断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【注意】：Longque JS API 处于实验阶段，使用前请阅读本文档，评估其稳定性和兼容性。"
        })
      })
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
            children: "createDelegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建委托"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性说明",
      children: "属性说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于表示 Longque JS API 的版本"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP_PROTOTYPE_CHAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createDelegate 的属性过滤器，表示只委托自身属性，不考虑原型链"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP_PREFIX_UNDERSCORE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createDelegate 的属性过滤器，表示过滤掉名字以 '_' 开头的属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP_PREFIX_DOLLAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createDelegate 的属性过滤器，表示过滤掉名字以 '$' 开头的属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP_CONSTRUCTOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createDelegate 的属性过滤器，表示过滤掉 'constructor' 属性"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createdelegate接口",
      children: "createDelegate接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口引入版本 : 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createDelegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建委托"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建 underlyingObject 的委托对象，对委托对象的属性读写操作将映射至 underlyingObject。通过 initObject 指定初始委托对象，通过 propertyFilterFlags 指定属性过滤器。默认情况下，将映射 underlyingObject 及其原型链上所有可枚举的字符串键属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数",
      children: "参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(1) underlyingObject： 必选参数。表示被委托的底层对象。参数要求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "underlyingObject 必须是对象，否则会抛出 TypeError 异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若 underlyingObject 是代理对象，将抛出 TypeError 异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若未指定 SKIP_PROTOTYPE_CHAIN 过滤器，且 underlyingObject 原型链上存在代理对象，则抛出 TypeError 异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(2) initObject：可选参数。表示初始委托对象。若传入 undefined，表示不指定初始对象，将由接口自动创建。参数要求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "initObject 必须是对象，否则会抛出 TypeError 异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若 initObject 是代理对象，将抛出 TypeError 异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不能将委托对象作为 initObject，否则抛出 TypeError 异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若 initObject 是不可扩展的，则抛出 TypeError 异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若 initObject 中某些属性无法定义，将抛出 TypeError 异常，此时 initObject 中仅部分属性定义成功。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(3) propertyFilterFlags：可选参数。表示属性过滤器。如果传入的是 undefined，表示不指定过滤器。参数要求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以下列出了当前支持的属性过滤器（未来可能扩展）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "__Longque__.SKIP_PROTOTYPE_CHAIN: 只委托 underlyingObject 自身属性，不考虑原型链\n__Longque__.SKIP_PREFIX_UNDERSCORE: 过滤掉名字以 '_' 开头的属性\n__Longque__.SKIP_PREFIX_DOLLAR: 过滤掉名字以 '$' 开头的属性\n__Longque__.SKIP_CONSTRUCTOR: 过滤掉 'constructor' 属性\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必须使用列出的过滤器，否则接口行为未定义，可能导致代码兼容性问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "所有过滤器均为 number 类型，可用 | 运算符同时指定多个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若 propertyFilterFlags 非 number 类型，抛出 TypeError 异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只有接口在不抛出异常的情况下，才会正确返回："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若未指定初始委托对象，返回新创建的委托对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若已指定初始委托对象，返回该初始委托对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(1) 委托对象的属性顺序可能与 for-in、Object.keys 方法的结果不一致，请勿依赖属性顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(2) 委托对象的实现是引擎内部机制。请勿依赖在委托对象上调用 Object.getOwnPropertyDescriptor、getOwnPropertyDescriptors、Reflect.getOwnPropertyDescriptor 等接口的返回结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例展示了在 JSVM 中使用 Longque JS API 的方式，JSVM-API 接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅对接口对应C++相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 待执行的js代码\nstatic const char *STR_TASK = R\"JS(\n  function createDelegateTest() {\n    var myobj = {\n      42: 0,\n      x: 1,\n      _y: 2,\n      $z:3\n    };\n\n    var proto = {\n      foo: 'foo'\n    };\n    Object.setPrototypeOf(myobj, proto);\n\n    var d1 = __Longque__.createDelegate(myobj, undefined);\n    consoleinfo(JSON.stringify(d1)); // {\"42\":0,\"x\":1,\"_y\":2,\"$z\":3,\"foo\":\"foo\"}\n\n    const propertyFilterFlags = __Longque__.SKIP_PREFIX_UNDERSCORE | __Longque__.SKIP_PREFIX_DOLLAR;\n    var d2 = __Longque__.createDelegate(myobj, undefined, propertyFilterFlags);\n    consoleinfo(JSON.stringify(d2)); // {\"42\":0,\"x\":1,\"foo\":\"foo\"}\n\n    d2[42] = 100;\n\n    const newFilter = propertyFilterFlags | __Longque__.SKIP_PROTOTYPE_CHAIN;\n    var d3 = __Longque__.createDelegate(myobj, undefined, newFilter);\n    consoleinfo(JSON.stringify(d3)); // {\"42\":100,\"x\":1}\n  }\n  createDelegateTest();\n)JS\";\n\n// 保证js代码中的打印信息可以正常输出\nstatic JSVM_Value ConsoleInfo(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1];\n    char log[256] = \"\";\n    size_t logLength = 0;\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL));\n\n    OH_JSVM_GetValueStringUtf8(env, args[0], log, 255, &logLength);\n    log[255] = 0;\n    OH_LOG_INFO(LOG_APP, \"JSVM API TEST: %{public}s\", log);\n    return nullptr;\n}\n\n// 注册consoleinfo的方法\nJSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = ConsoleInfo},\n};\nJSVM_PropertyDescriptor descriptor[] = {\n    {\"consoleinfo\", NULL, &param[0], NULL, NULL, NULL, JSVM_DEFAULT},\n};\n\nstatic int32_t TestJSVM() {\n    JSVM_InitOptions init_options;\n    memset(&init_options, 0, sizeof(init_options));\n    if (g_aa == 0) {\n        OH_JSVM_Init(&init_options);\n        g_aa++;\n    }\n    // 创建JavaScript虚拟机实例，打开虚拟机作用域\n    JSVM_VM vm;\n    JSVM_CreateVMOptions options;\n    memset(&options, 0, sizeof(options));\n    CHECK(OH_JSVM_CreateVM(&options, &vm));\n    JSVM_VMScope vm_scope;\n    CHECK(OH_JSVM_OpenVMScope(vm, &vm_scope));\n\n    JSVM_Env env;\n    CHECK(OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env));\n    JSVM_EnvScope envScope;\n    CHECK_RET(OH_JSVM_OpenEnvScope(env, &envScope));\n    JSVM_HandleScope handlescope;\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handlescope));\n    JSVM_Value sourcecodevalue;\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, STR_TASK, strlen(STR_TASK), &sourcecodevalue));\n    JSVM_Script script;\n    CHECK_RET(OH_JSVM_CompileScript(env, sourcecodevalue, nullptr, 0, true, nullptr, &script));\n    JSVM_Value result;\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n\n    // 关闭并销毁环境和虚拟机\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handlescope));\n    CHECK_RET(OH_JSVM_CloseEnvScope(env, envScope));\n    CHECK(OH_JSVM_DestroyEnv(env));\n    CHECK(OH_JSVM_CloseVMScope(vm, vm_scope));\n    CHECK(OH_JSVM_DestroyVM(vm));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API TEST: {\"42\":0,\"x\":1,\"_y\":2,\"$z\":3,\"foo\":\"foo\"}\nJSVM API TEST: {\"42\":0,\"x\":1,\"foo\":\"foo\"}\nJSVM API TEST: {\"42\":100,\"x\":1}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "性能测试示例",
      children: "性能测试示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例用于测试使用Longque JS API前后的性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 待执行的js代码\nstatic const char *STR_TASK = R\"JS(\n  // 原始js代码\n  function base(underlying) {\n    var obj = {};\n    var tryDefineProperty = function (key) {\n      if (key.indexOf('_') === 0 || key.indexOf('$') === 0 || key === 'constructor') {\n        return false;\n      }\n      Object.defineProperty(obj, key, {\n        configurable: true,\n        enumerable: true,\n        get: function get() {\n          return underlying[key];\n        },\n        set: function set(value) {\n          return (underlying[key] = value);\n        },\n      });\n      return true;\n    };\n    for (var key in underlying) {\n      if (!tryDefineProperty(key)) {\n        continue;\n      }\n    }\n    return obj;\n  }\n\n  // 使用Longque JSVM API之后的代码\n  function opt(underlying) {\n    var delegate = __Longque__.createDelegate(\n      underlying,\n      undefined,\n      __Longque__.SKIP_PREFIX_UNDERSCORE |\n      __Longque__.SKIP_PREFIX_DOLLAR |\n      __Longque__.SKIP_CONSTRUCTOR,\n    );\n    return delegate;\n  }\n\n  // 性能测试\n  function doTest(tag, func, underlying, times) {\n    const begin = Date.now();\n    var obj = null;\n    for (var i = 0; i < times; ++i) {\n      obj = func(underlying);\n    }\n    const end = Date.now();\n    consoleinfo(`[${tag}] Time cost: ${(end - begin).toFixed(0)} ms`);\n    return obj;\n  }\n\n  function testEntry() {\n    var underlying = {\n      x: 1,\n      y: 2,\n      foo: 'foo',\n      _bar: '_bar',\n      _hi: '_hi',\n      $test: '$test',\n      constructor: 'ctor',\n      pi: 3.14,\n    };\n    for (var i = 0; i < 100; ++i) {\n      underlying[`key_${i}`] = i;\n    }\n    const n = 10000;\n    // 测试原js代码的运行时间\n    doTest('base', base, underlying, n);\n    // 测试使用Longque JSVM API之后的运行时间\n    doTest('opt', opt, underlying, n);\n  }\n\n  testEntry();\n)JS\";\n\n// 保证js代码中的打印信息可以正常输出\nstatic JSVM_Value ConsoleInfo(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1];\n    char log[256] = \"\";\n    size_t logLength = 0;\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL));\n  \n    OH_JSVM_GetValueStringUtf8(env, args[0], log, 255, &logLength);\n    log[255] = 0;\n    OH_LOG_INFO(LOG_APP, \"JSVM API TEST: %{public}s\", log);\n    return nullptr;\n}\n\n// 注册consoleinfo的方法\nJSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = ConsoleInfo},\n};\nJSVM_PropertyDescriptor descriptor[] = {\n    {\"consoleinfo\", NULL, &param[0], NULL, NULL, NULL, JSVM_DEFAULT},\n};\n\nstatic int32_t TestJSVM() {\n    JSVM_InitOptions init_options;\n    memset(&init_options, 0, sizeof(init_options));\n    if (g_aa == 0) {\n        OH_JSVM_Init(&init_options);\n        g_aa++;\n    }\n    // 创建JavaScript虚拟机实例，打开虚拟机作用域\n    JSVM_VM vm;\n    JSVM_CreateVMOptions options;\n    memset(&options, 0, sizeof(options));\n    CHECK(OH_JSVM_CreateVM(&options, &vm));\n    JSVM_VMScope vm_scope;\n    CHECK(OH_JSVM_OpenVMScope(vm, &vm_scope));\n  \n    JSVM_Env env;\n    CHECK(OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env));\n    JSVM_EnvScope envScope;\n    CHECK_RET(OH_JSVM_OpenEnvScope(env, &envScope));\n    JSVM_HandleScope handlescope;\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handlescope));\n    JSVM_Value sourcecodevalue;\n    CHECK_RET(OH_JSVM_CreateStringUtf8(env, STR_TASK, strlen(STR_TASK), &sourcecodevalue));\n    JSVM_Script script;\n    CHECK_RET(OH_JSVM_CompileScript(env, sourcecodevalue, nullptr, 0, true, nullptr, &script));\n    JSVM_Value result;\n    CHECK_RET(OH_JSVM_RunScript(env, script, &result));\n  \n    // 关闭并销毁环境和虚拟机\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handlescope));\n    CHECK_RET(OH_JSVM_CloseEnvScope(env, envScope));\n    CHECK(OH_JSVM_DestroyEnv(env));\n    CHECK(OH_JSVM_CloseVMScope(vm, vm_scope));\n    CHECK(OH_JSVM_DestroyVM(vm));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某次测试的输出："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API TEST: [base] Time cost: 414 ms\nJSVM API TEST: [opt] Time cost: 148 ms\n"
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